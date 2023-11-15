(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analise-compras-multi-visoes-analise-compras-multi-visoes-module"],{

/***/ "/ke2":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-visao-mensal/modal-visao-mensal.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n      <div class=\"d-flex justify-content-between\">\r\n        <div class=\"mtc-title mb-0\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn-icon-sm\"\r\n            [tooltip]=\"openRegistrosSelecionadosBool ? 'Clique para ocultar os dados' : 'Clique para expandir os dados'\"\r\n            placement=\"right\"\r\n            (click)=\"openRegistrosSelecionados()\"\r\n          >\r\n            <i\r\n              [class]=\"openRegistrosSelecionadosBool ? 'far fa-eye' : 'far fa-eye-slash' \"\r\n            >\r\n            </i>\r\n          </button>\r\n          Registros Selecionados\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center mt-2\" *ngIf=\"openRegistrosSelecionadosBool\">\r\n        <div class=\"col-8\">\r\n          <div class=\"table-responsive\">\r\n            <custom-table>\r\n              <ng-template let-thead #thead>\r\n                <tr class=\"text-center\">\r\n                  <th nowrap>Material</th>\r\n                  <th nowrap>Depósito</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template let-tbody #tbody>\r\n                <tr  *ngFor=\"let item of dataRegistros\">  \r\n                  <td nowrap class=\"text-center\">{{ item.NM_MATE }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n      <div class=\"d-flex justify-content-between\">\r\n        <div class=\"mtc-title mb-0\">\r\n          <i\r\n            class=\"far fa-question-circle p-2\"\r\n            tooltip=\"Valores de entradas(Suspenso, Comprometido, Atual, Disponível)\"\r\n            placement=\"right\">\r\n          </i>\r\n          Entradas\r\n        </div>\r\n      </div>\r\n      <div class=\"row align-items-center h-100\">\r\n        <div class=\"col\">\r\n          <div>\r\n            <div [hidden]=\"!loading\">\r\n              <div class=\"chartdiv amcharts\" id=\"chartdiv-entradas\"></div>\r\n            </div>\r\n            <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n              <div class=\"spinner-border text-dark\"></div>\r\n            </div>\r\n            <!-- <div class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n      <div class=\"d-flex justify-content-between\">\r\n        <div class=\"mtc-title mb-0\">\r\n          <i\r\n            class=\"far fa-question-circle p-2\"\r\n            tooltip=\"Valores de Saídas(Total)\"\r\n            placement=\"right\">\r\n          </i>\r\n          Saídas\r\n        </div>\r\n      </div>\r\n      <div class=\"row align-items-center h-100\">\r\n        <div class=\"col\">\r\n          <div>\r\n            <div [hidden]=\"!loading\">\r\n              <div class=\"chartdiv amcharts\" id=\"chartdiv-saidas\"></div>\r\n            </div>\r\n            <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n              <div class=\"spinner-border text-dark\"></div>\r\n            </div>\r\n            <!-- <div class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"border rounded bg-white shadow-sm p-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"d-flex justify-content-between\">\r\n            <div class=\"mtc-title mb-0\">\r\n              <i\r\n                class=\"far fa-question-circle p-2\"\r\n                tooltip=\"Comparativo Mensal(Entradas, Saídas, Perdas)\"\r\n                placement=\"right\">\r\n              </i>\r\n              Comparativo Mensal\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn-icon\"\r\n              tooltip=\"Exportar Excel\"\r\n              placement=\"left\"\r\n              (click)=\"excelExport()\"\r\n            >\r\n              <i class=\"far fa-file-excel\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-3 border rounded bg-white shadow-sm p-3 text-center mr-3\">\r\n          <strong>TOTAL ENTRADAS</strong>\r\n          <br/>\r\n          12.000,000 Tons\r\n        </div>\r\n        <div class=\"col-3 border rounded bg-white shadow-sm p-3 text-center mr-3\">\r\n          <strong>TOTAL SAÍDAS</strong>\r\n          <br/>\r\n          4.000,000 Tons\r\n        </div>\r\n        <div class=\"col-3 border rounded bg-white shadow-sm p-3 text-center\">\r\n          <strong>PERDAS</strong>\r\n          <br/>\r\n          1.000,000 Tons\r\n        </div>\r\n      </div>\r\n      <div class=\"row align-items-center h-100\">\r\n        <div class=\"col\">\r\n          <div>\r\n            <div [hidden]=\"!loading\">\r\n              <div class=\"chartdiv amcharts\" id=\"chart-comparativo-mensal\"></div>\r\n            </div>\r\n            <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n              <div class=\"spinner-border text-dark\"></div>\r\n            </div>\r\n            <!-- <div class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n      <div class=\"d-flex justify-content-end\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon\"\r\n          tooltip=\"Exportar Excel\"\r\n          placement=\"left\"\r\n          (click)=\"excelExport()\"\r\n        >\r\n          <i class=\"far fa-file-excel\"></i>\r\n        </button>\r\n      </div>\r\n      <tabset>\r\n        <tab heading=\"GERAL\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"table-responsive mt-2\">\r\n                <custom-table>\r\n                  <ng-template #thead let-thead>\r\n                    <tr class=\"text-center\">\r\n                      <th rowrap scope=\"col\">COL 1</th>\r\n                      <th rowrap scope=\"col\">COL 2</th>\r\n                      <th rowrap scope=\"col\">COL 3</th>\r\n                      <th rowrap scope=\"col\">COL 4</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"ENTRADAS\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"table-responsive mt-2\">\r\n                <custom-table>\r\n                  <ng-template #thead let-thead>\r\n                    <tr class=\"text-center\">\r\n                      <th rowrap scope=\"col\">COL 1</th>\r\n                      <th rowrap scope=\"col\">COL 2</th>\r\n                      <th rowrap scope=\"col\">COL 3</th>\r\n                      <th rowrap scope=\"col\">COL 4</th>\r\n                      <th rowrap scope=\"col\">COL 5</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"SAÍDAS\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"table-responsive mt-2\">\r\n                <custom-table>\r\n                  <ng-template #thead let-thead>\r\n                    <tr class=\"text-center\">\r\n                      <th rowrap scope=\"col\">COL 1</th>\r\n                      <th rowrap scope=\"col\">COL 2</th>\r\n                      <th rowrap scope=\"col\">COL 3</th>\r\n                      <th rowrap scope=\"col\">COL 4</th>\r\n                      <th rowrap scope=\"col\">COL 5</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"PERDAS\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <div class=\"row\">\r\n              <div class=\"table-responsive mt-2\">\r\n                <custom-table>\r\n                  <ng-template #thead let-thead>\r\n                    <tr class=\"text-center\">\r\n                      <th rowrap scope=\"col\">COL 1</th>\r\n                      <th rowrap scope=\"col\">COL 2</th>\r\n                      <th rowrap scope=\"col\">COL 3</th>\r\n                      <th rowrap scope=\"col\">COL 4</th>\r\n                      <th rowrap scope=\"col\">COL 5</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                      <td rowrap class=\"text-center\">fdkshfhsk</td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "5U4s":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-alterar-agrupamento/modal-alterar-agrupamento.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2 mt-2\" id=\"header-modal-alterar-agrupamento\">\r\n  <div class=\"col text-right\">\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"onFilter()\"\r\n      [disabled]=\"form.status == 'INVALID'\"\r\n      class=\"btn\"\r\n    >\r\n      Filtrar\r\n    </button>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-12\">\r\n        <label for=\"TP_AGRU\">Agrupamento</label>\r\n        <ng-select \r\n          [searchable]=\"true\" \r\n          [clearable]=\"false\" \r\n          [items]=\"tipoAgrupamentos\" \r\n          [virtualScroll]=\"true\"\r\n          [hideSelected]=\"true\" \r\n          [closeOnSelect]=\"true\" \r\n          placeholder=\"Selecione...\" \r\n          bindLabel=\"NAME\"\r\n          bindValue=\"ID\" \r\n          formControlName=\"TP_AGRU\" \r\n          [ngClass]=\"onFieldError('TP_AGRU') + ' ' + onFieldRequired('TP_AGRU')\r\n          \">\r\n        </ng-select>\r\n        <invalid-form-control [show]=\"onFieldInvalid('TP_AGRU')\" message=\"Agrupamento é obrigatório.\">\r\n        </invalid-form-control>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<div class=\"table-responsive\" *ngIf=\"loadingDetalhesModal\">\r\n  <custom-table subtitleBorder=\"true\">\r\n    <ng-template #thead let-thead>\r\n      <tr class=\"text-center\">\r\n        <th nowrap>Material</th>\r\n        <th nowrap>Empresa</th>\r\n        <th nowrap>\r\n          Estoque\r\n        </th>\r\n        <th nowrap>Saídas</th>\r\n      </tr>\r\n      <tr>\r\n        <th\r\n          nowrap\r\n          (click)=\"sort('NM_EMPR')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Descrição\r\n          <span *ngIf=\"key == 'NM_EMPR'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"key != 'NM_EMPR'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sort('NM_EMPR')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Descrição\r\n          <span *ngIf=\"key == 'NM_EMPR'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"key != 'NM_EMPR'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sort('NM_EMPR')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Disponível\r\n          <span *ngIf=\"key == 'NM_EMPR'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"key != 'NM_EMPR'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sort('NM_EMPR')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Total\r\n          <span *ngIf=\"key == 'NM_EMPR'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"key != 'NM_EMPR'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr\r\n        *ngFor=\"\r\n          let item of data\r\n            | orderBy: key:reverse\r\n            | slice: begin:end;\r\n          let i = index\r\n        \"\r\n      >\r\n        <td nowrap class=\"text-center\">{{ item.NM_MATE }}</td>\r\n        <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n        <td nowrap class=\"text-center\">{{ item.TT_ESTO_DISP }}</td>\r\n        <td nowrap class=\"text-center\">{{ item.TT_SAID }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div\r\n  class=\"mt-2 mb-2\"\r\n  *ngIf=\"data?.length > itemsPerPage\"\r\n>\r\n  Exibindo {{ begin + 1 }} a {{ end }} de\r\n  {{ data?.length }}\r\n  <div class=\"d-flex\">\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"data?.length\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\"\r\n    >\r\n    </pagination>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div> -->\r\n<!-- <div\r\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n  style=\"height: 80%;\"\r\n  >\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div> -->");

/***/ }),

/***/ "7cRG":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/analise-compras-multi-visoes.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesModule", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _analise_compras_multi_visoes_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analise-compras-multi-visoes-routing.module */ "7zeN");
/* harmony import */ var _analise_compras_multi_visoes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analise-compras-multi-visoes.component */ "jrzI");
/* harmony import */ var _visao_material_visao_material_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./visao-material/visao-material.component */ "a7FO");
/* harmony import */ var _visao_classe_visao_classe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visao-classe/visao-classe.component */ "XcoM");
/* harmony import */ var _visao_sublinha_visao_sublinha_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./visao-sublinha/visao-sublinha.component */ "Hw6T");
/* harmony import */ var _visao_linha_visao_linha_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./visao-linha/visao-linha.component */ "XAGl");
/* harmony import */ var _visao_deposito_visao_deposito_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./visao-deposito/visao-deposito.component */ "aOAq");
/* harmony import */ var _visao_empresa_visao_empresa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./visao-empresa/visao-empresa.component */ "npNb");
/* harmony import */ var _visao_tipo_material_visao_tipo_material_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./visao-tipo-material/visao-tipo-material.component */ "s9f/");
/* harmony import */ var _modal_visao_mensal_modal_visao_mensal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal-visao-mensal/modal-visao-mensal.component */ "HqJe");
/* harmony import */ var _modal_alterar_agrupamento_modal_alterar_agrupamento_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal-alterar-agrupamento/modal-alterar-agrupamento.component */ "PzdT");
/* harmony import */ var _modal_favoritos_modal_favoritos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal-favoritos/modal-favoritos.component */ "Dzqt");








Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default.a);















let AbastecimentoMonitoresAnaliseComprasMultiVisoesModule = class AbastecimentoMonitoresAnaliseComprasMultiVisoesModule {
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _analise_compras_multi_visoes_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent"],
            _visao_material_visao_material_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent"],
            _visao_classe_visao_classe_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent"],
            _visao_sublinha_visao_sublinha_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent"],
            _visao_linha_visao_linha_component__WEBPACK_IMPORTED_MODULE_16__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent"],
            _visao_deposito_visao_deposito_component__WEBPACK_IMPORTED_MODULE_17__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent"],
            _visao_empresa_visao_empresa_component__WEBPACK_IMPORTED_MODULE_18__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent"],
            _visao_tipo_material_visao_tipo_material_component__WEBPACK_IMPORTED_MODULE_19__["AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent"],
            _modal_visao_mensal_modal_visao_mensal_component__WEBPACK_IMPORTED_MODULE_20__["AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent"],
            _modal_alterar_agrupamento_modal_alterar_agrupamento_component__WEBPACK_IMPORTED_MODULE_21__["AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent"],
            _modal_favoritos_modal_favoritos_component__WEBPACK_IMPORTED_MODULE_22__["AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _analise_compras_multi_visoes_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], AbastecimentoMonitoresAnaliseComprasMultiVisoesModule);



/***/ }),

/***/ "7qAL":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/analise-compras-multi-visoes.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Análise de Compras Multíplas Visões\">\r\n  <button type=\"button\" (click)=\"onFilter(currentPage=1)\" [disabled]=\"\r\n    form.status == 'INVALID' ||\r\n    (form.get('dataInicial').value == null &&\r\n      form.get('paramData').value != 1) ||\r\n    (form.get('dataFinal').value == null &&\r\n      form.get('paramData').value != 1) ||\r\n      compareDate() ||\r\n      compareStartDateFunc() ||\r\n      compareEndDateFunc()\r\n  \">\r\n    Filtrar\r\n  </button>\r\n  <button type=\"button\" (click)=\"smModal.show() + ' ' + setValuesAlterarAgrupamento()\" [disabled]=\"itemModal.length == 0\">\r\n    Alterar Agrupamento\r\n  </button>\r\n  <button type=\"button\" (click)=\"smModal.show() + ' ' + setValuesVisaoMensal()\" [disabled]=\"itemModal.length == 0\">\r\n    Visão Mensal\r\n  </button>\r\n  <button type=\"button\" (click)=\"excelExport()\" [disabled]=\"\r\n    form.status == 'INVALID' ||\r\n    (form.get('dataInicial').value == null &&\r\n      form.get('paramData').value != 1) ||\r\n    (form.get('dataFinal').value == null &&\r\n      form.get('paramData').value != 1) ||\r\n    compareDate() ||\r\n    compareStartDateFunc() ||\r\n    compareEndDateFunc()\r\n  \">\r\n    Exportar Excel\r\n  </button>\r\n  <button type=\"button\" (click)=\"smModal.show() + ' ' + setValuesFavorite()\" [disabled]=\"\r\n    form.status == 'INVALID' ||\r\n    (form.get('dataInicial').value == null &&\r\n      form.get('paramData').value != 1) ||\r\n    (form.get('dataFinal').value == null &&\r\n      form.get('paramData').value != 1) ||\r\n    compareDate() ||\r\n    compareStartDateFunc() ||\r\n    compareEndDateFunc()\r\n  \">\r\n    Favoritos\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"INFO_PRIN\">Informação principal</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"infoPrincipal\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" placeholder=\"Selecione...\" bindLabel=\"NM_INFO_PRIN\"\r\n            bindValue=\"ID\" formControlName=\"INFO_PRIN\" [ngClass]=\"\r\n              onFieldError('INFO_PRIN') + ' ' + onFieldRequired('INFO_PRIN')\r\n            \">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('INFO_PRIN')\" message=\"Informação principal é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"INFO_AGRU\">Agrupamento</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"agrupamento\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" placeholder=\"Selecione...\" bindLabel=\"NM_INFO_AGRU\"\r\n            bindValue=\"ID\" formControlName=\"INFO_AGRU\" [ngClass]=\"\r\n              onFieldError('INFO_AGRU') + ' ' + onFieldRequired('INFO_AGRU')\r\n            \">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('INFO_AGRU')\" message=\"Agrupamento é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"INFO_VOLU\">Volume</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"volume\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_INFO_VOLU\" bindValue=\"ID\" formControlName=\"INFO_VOLU\" [ngClass]=\"\r\n              onFieldError('INFO_VOLU') + ' ' + onFieldRequired('INFO_VOLU')\r\n            \">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_INFO_VOLU}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('INFO_VOLU')\" message=\"Volume é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"INFO_ADIC\">Informações adicionais</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"infoAdicionais\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" placeholder=\"Selecione...\"\r\n            formControlName=\"INFO_ADIC\" bindLabel=\"NM_INFO_ADIC\" bindValue=\"ID\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_INFO_ADIC}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"INFO_ESTA\">Estatistíca</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"infoEstatistica\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_INFO_ESTA\" bindValue=\"ID\" formControlName=\"INFO_ESTA\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_INFO_ESTA}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"tipoMaterial\">Tipo de Material</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"tiposMateriais\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_MATE\" bindValue=\"ID\" formControlName=\"tipoMaterial\" (change)=\"resetForm()\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_APOI_TIPO_MATE}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-1\">\r\n          <label for=\"situacao\">Situação</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"situations\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"true\" placeholder=\"Selecione...\" bindLabel=\"nome\" bindValue=\"id\"\r\n            formControlName=\"situacao\" (change)=\"resetForm()\" [ngClass]=\"\r\n              onFieldError('situacao') + ' ' + onFieldRequired('situacao')\r\n            \">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('situacao')\" message=\"Situação é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linha\">Linha</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"linhas\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"true\" placeholder=\"Selecione...\" bindLabel=\"NM_LINH\" bindValue=\"ID\"\r\n            formControlName=\"linha\" (change)=\"\r\n              getSubLinhas() +\r\n                ' ' +\r\n                getClasses() +\r\n                ' ' +\r\n                getDepositosAssociados()\r\n            \" [ngClass]=\"onFieldError('linha') + ' ' + onFieldRequired('linha')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('linha')\" message=\"Linha é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"subLinha\">Sublinha</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"true\" [items]=\"subLinhas\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"true\" placeholder=\"Selecione...\" bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\" (change)=\"getClasses()\" formControlName=\"subLinha\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"classes\" [virtualScroll]=\"true\" [multiple]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" maxSelectedItems=\"6\" placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\" bindValue=\"ID\" formControlName=\"classe\"\r\n            (change)=\"getMateriais() + ' ' + getDepositosAssociados()\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_CLAS}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"material\">Material</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"materiais\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" placeholder=\"Selecione...\"\r\n            bindLabel=\"ID_REFE_ERP_NM_MATE\" bindValue=\"ID\" formControlName=\"material\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.ID_REFE_ERP_NM_MATE}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"empresas\">Empresas</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"depositosAssociados\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" (change)=\"getDepositos($event)\"\r\n            placeholder=\"Selecione...\" bindLabel=\"NM_EMPR\" bindValue=\"ID_EMPR\" formControlName=\"empresas\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_EMPR}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"depositos\">Depósitos</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"depositos\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"false\" [multiple]=\"true\" placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_DEPO\" bindValue=\"ID\" formControlName=\"depositos\">\r\n            <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n              <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:1\">\r\n                <span class=\"ng-value-label\"> {{item.NM_DEPO}} </span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </div>\r\n              <div class=\"ng-value\" *ngIf=\"items.length > 1\">\r\n                <span class=\"ng-value-label\">{{items.length - 1}} Item...</span>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"nivelEstoque\">Nível de Estoque</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"true\" [items]=\"tiposNiveisEstoques\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"true\" [multiple]=\"false\" placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_NIVE_ESTO\" bindValue=\"ID\" formControlName=\"nivelEstoque\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"paramData\">Período de Vendas</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"periodosBusca\" [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\" [closeOnSelect]=\"true\" placeholder=\"Selecione...\" (change)=\"activeInputDate()\"\r\n            bindLabel=\"nome\" bindValue=\"id\" formControlName=\"paramData\" [ngClass]=\"\r\n              onFieldError('paramData') + ' ' + onFieldRequired('paramData')\r\n            \">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('paramData')\" message=\"Período de vendas é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"dataInicial\">Data Inicial</label>\r\n          <input class=\"form-control\" id=\"dataInicial\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataInicial\" />\r\n          <invalid-form-control [show]=\"compareStartDateFunc()\"\r\n            message=\"Data inicial não pode ser maior que data atual\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"dataFinal\">Data Final</label>\r\n          <input class=\"form-control\" id=\"dataFinal\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataFinal\" />\r\n          <invalid-form-control [show]=\"compareDate()\" message=\"Data final deve ser maior que data inicial\">\r\n          </invalid-form-control>\r\n          <invalid-form-control [show]=\"compareEndDateFunc()\" message=\"Data final não pode ser maior que data atual\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-1\">\r\n          <label for=\"qtItensPagina\">Registros</label>\r\n          <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"numberOfItems\" [virtualScroll]=\"true\"\r\n            labelForId=\"qtItensPagina\" formControlName=\"qtItensPagina\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <visao-material *ngIf=\"idView == 1\" (newItemEvent)=\"addItem($event)\"></visao-material>\r\n  <visao-classe *ngIf=\"idView == 2\"></visao-classe>\r\n  <visao-sublinha *ngIf=\"idView == 3\"></visao-sublinha>\r\n  <visao-linha *ngIf=\"idView == 4\"></visao-linha>\r\n  <visao-deposito *ngIf=\"idView == 5\"></visao-deposito>\r\n  <visao-empresa *ngIf=\"idView == 6\"></visao-empresa>\r\n  <visao-tipo-material *ngIf=\"idView == 7\"></visao-tipo-material>\r\n</app-body>\r\n<!-- Modais -->\r\n<div \r\n  bsModal \r\n  #smModal=\"bs-modal\" \r\n  class=\"modal fade\" \r\n  tabindex=\"-1\" \r\n  role=\"dialog\" \r\n  aria-labelledby=\"dialog-sizes-name2\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">\r\n          {{ modal.title}}\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide() + '' + onCloseModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\" *ngIf=\"showModalFavoritos\">\r\n          <abastecimento-analise-compras-multi-visoes-modal-favoritos></abastecimento-analise-compras-multi-visoes-modal-favoritos>\r\n        </div>\r\n        <div class=\"container\" *ngIf=\"showModalAlterarAgrupamento\">\r\n          <abastecimento-analise-compras-multi-visoes-modal-alterar-agrupamento [item]=\"itemModal\"></abastecimento-analise-compras-multi-visoes-modal-alterar-agrupamento>\r\n        </div>\r\n        <div class=\"container\" *ngIf=\"showModalVisaoMensal\">\r\n          <abastecimento-analise-compras-multi-visoes-modal-visao-mensal [item]=\"itemModal\"></abastecimento-analise-compras-multi-visoes-modal-visao-mensal>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "7zeN":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/analise-compras-multi-visoes-routing.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _analise_compras_multi_visoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analise-compras-multi-visoes.component */ "jrzI");




const routes = [
    {
        path: '',
        component: _analise_compras_multi_visoes_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent"]
    }
];
let AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule = class AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule {
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoMonitoresAnaliseComprasMultiVisoesRoutingModule);



/***/ }),

/***/ "8+8I":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-classe/visao-classe.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\" *ngIf=\"!noResult\">\r\n  <custom-table>\r\n    <ng-template let-thead #thead>\r\n      <tr class=\"text-center\">\r\n        <th nowrap>Classe</th>\r\n        <th nowrap>Depósito</th>\r\n        <th nowrap [attr.colspan]=\"ableInformationEstoque ? colsEst : 1\">\r\n          Estoque\r\n          <button class=\"btn-icon-sm\" (click)=\"abledInfomationEstoque()\">\r\n            <i [ngClass]=\"ableInformationEstoque ? 'fas fa-minus' : 'fas fa-plus'\" title=\"Mostrar detalhes Estoque\"\r\n              aria-hidden=\"true\"></i>\r\n          </button>\r\n        </th>\r\n        <th nowrap>Saídas</th>\r\n        <th nowrap>Carteira</th>\r\n        <th nowrap>Perdas</th>\r\n      </tr>\r\n      <tr class=\"text-center\">\r\n        <th nowrap (click)=\"sort('NM_DEPO')\">\r\n          Descrição\r\n          <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\">\r\n          Descrição\r\n          <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\">\r\n          Disponível\r\n          <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\" *ngIf=\"ableInformationEstoque\">\r\n          Suspenso\r\n          <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\" *ngIf=\"ableInformationEstoque\">\r\n          Comprometido\r\n          <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap>\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <div (click)=\"sort('NM_DEPO')\">\r\n              Total\r\n              <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </div>\r\n            <div class=\"ml-1\">\r\n              <button class=\"btn-icon-sm\" (click)=\"lgModal.show()\">\r\n                <i class=\"far fa-calendar-alt text-secondary\" tooltip=\"Visão Mensal\"\r\n                  aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\">\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <div (click)=\"sort('NM_DEPO')\">\r\n              Total\r\n              <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </div>\r\n            <div class=\"ml-1\">\r\n              <button class=\"btn-icon-sm\" (click)=\"lgModal.show()\">\r\n                <i class=\"far fa-calendar-alt text-secondary\" tooltip=\"Visão Mensal\"\r\n                  aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\">\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <div (click)=\"sort('NM_DEPO')\">\r\n              Total\r\n              <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </div>\r\n            <div class=\"ml-1\">\r\n              <button class=\"btn-icon-sm\" (click)=\"lgModal.show()\">\r\n                <i class=\"far fa-calendar-alt text-secondary\" tooltip=\"Visão Mensal\"\r\n                  aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template let-tbody #tbody>\r\n      <tr>\r\n        <td nowrap class=\"text-center\">CA-50</td>\r\n        <td nowrap class=\"text-center\">Tiete</td>\r\n        <td nowrap class=\"text-center\">550,00</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">550,00</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">550,00</td>\r\n        <td nowrap class=\"text-center\">1500,00</td>\r\n        <td nowrap class=\"text-center\">600,00</td>\r\n        <td nowrap class=\"text-center\">35,00</td>\r\n      </tr>\r\n      <tr>\r\n        <td nowrap class=\"text-center\">CA-50</td>\r\n        <td nowrap class=\"text-center\">Cajamar</td>\r\n        <td nowrap class=\"text-center\">550,00</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">550,00</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">550,00</td>\r\n        <td nowrap class=\"text-center\">1500,00</td>\r\n        <td nowrap class=\"text-center\">600,00</td>\r\n        <td nowrap class=\"text-center\">35,00</td>\r\n      </tr>\r\n      <tr>\r\n        <td nowrap class=\"text-center\">CA-25</td>\r\n        <td nowrap class=\"text-center\">Tiete</td>\r\n        <td nowrap class=\"text-center\">550,00</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">550,00</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">550,00</td>\r\n        <td nowrap class=\"text-center\">1500,00</td>\r\n        <td nowrap class=\"text-center\">600,00</td>\r\n        <td nowrap class=\"text-center\">35,00</td>\r\n      </tr>\r\n      <tr>\r\n        <td nowrap class=\"bg-dark text-center text-white\">TOTAL</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\"></td>\r\n        <td nowrap class=\"bg-dark text-center text-white\">3500,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\" *ngIf=\"ableInformationEstoque\">3500,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\" *ngIf=\"ableInformationEstoque\">3500,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\">4000,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\">8000,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\">1000,00</td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\" *ngIf=\"noResult\">\r\n  <!-- *ngIf=\"noResult && !loading\" -->\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          Visão mensal\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\" >\r\n          <div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n            <!-- *ngIf=\"noResult && !loading\" -->\r\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "88kO":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-linha/visao-linha.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <!-- *ngIf=\"noResult && !loading\" -->\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "AgCm":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-linha/visao-linha.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy92aXNhby1saW5oYS92aXNhby1saW5oYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Dzqt":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-favoritos/modal-favoritos.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_favoritos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-favoritos.component.html */ "Qlyx");
/* harmony import */ var _modal_favoritos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-favoritos.component.scss */ "qV15");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





let AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.ableDetailFavorite = false;
        this.dataModal = [
            { NAME_FAVO: 'Visão Master', LINK_FAVO: `http://${window.location.hostname}/#/abastecimento/monitores/90/analise-compras-multi-visoes?q=eyJJTkZPX1BSSU4iOjEsIklORk9fQUdSVSI6MSwiSU5GT19WT0xVIjpbMV0sIklORk9fQURJQyI6WzFdLCJkYXRhSW5pY2lhbCI6IjE4LTA4LTIwMjAiLCJkYXRhRmluYWwiOiIxOC0xMS0yMDIwIiwibGluaGEiOiI2NEQ1N0VDRC05NDRDLTREMDQtQUI3Qi0yM0JEOEJBMDk5NUUiLCJwYXJhbURhdGEiOjIsInNpdHVhY2FvIjoxLCJxdEl0ZW5zUGFnaW5hIjoxNSwicGFnaW5hIjoxfQ==` },
            { NAME_FAVO: 'Visão Standart', LINK_FAVO: `http://${window.location.hostname}/#/abastecimento/monitores/90/analise-compras-multi-visoes?q=eyJJTkZPX1BSSU4iOjEsIklORk9fQUdSVSI6MSwiSU5GT19WT0xVIjpbMV0sIklORk9fQURJQyI6WzFdLCJkYXRhSW5pY2lhbCI6IjE4LTA4LTIwMjAiLCJkYXRhRmluYWwiOiIxOC0xMS0yMDIwIiwibGluaGEiOiI2NEQ1N0VDRC05NDRDLTREMDQtQUI3Qi0yM0JEOEJBMDk5NUUiLCJwYXJhbURhdGEiOjIsInNpdHVhY2FvIjoxLCJxdEl0ZW5zUGFnaW5hIjoxNSwicGFnaW5hIjoxfQ==` }
        ];
        this.formModal = this.formBuilder.group({
            NAME_FAVO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LINK_FAVO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    onDetailFavorite(i) {
        i.select = !i.select;
        this.ableDetailFavorite = !this.ableDetailFavorite;
    }
    OnSaveFavorite() {
        console.log(this.formModal.value);
    }
    onClose() {
        this.dataModal.forEach(e => {
            e.select = false;
        });
        this.ableDetailFavorite = !this.ableDetailFavorite;
    }
    onFieldErrorModal(field) {
        if (this.onFieldInvalidModal(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalidModal(field) {
        field = this.formModal.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequiredModal(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.formModal.controls[field].validator) {
            let validationResult = this.formModal.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-analise-compras-multi-visoes-modal-favoritos',
        template: _raw_loader_modal_favoritos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_favoritos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesModalFavoritosComponent);



/***/ }),

/***/ "FnHd":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-visao-mensal/modal-visao-mensal.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 300px;\n}\n\n.amcharts::after {\n  width: 59px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMtbXVsdGktdmlzb2VzL21vZGFsLXZpc2FvLW1lbnNhbC9tb2RhbC12aXNhby1tZW5zYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy9tb2RhbC12aXNhby1tZW5zYWwvbW9kYWwtdmlzYW8tbWVuc2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0ZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uYW1jaGFydHM6OmFmdGVyIHtcclxuICB3aWR0aDogNTlweCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "GB4w":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-sublinha/visao-sublinha.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <!-- *ngIf=\"noResult && !loading\" -->\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "HqJe":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-visao-mensal/modal-visao-mensal.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_visao_mensal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-visao-mensal.component.html */ "/ke2");
/* harmony import */ var _modal_visao_mensal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-visao-mensal.component.scss */ "FnHd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chart.service */ "xPhv");






let AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent {
    constructor(chartService, pnotifyService) {
        this.chartService = chartService;
        this.pnotifyService = pnotifyService;
        this.loading = false;
        this.openRegistrosSelecionadosBool = false;
        this.dataEntrada = [{
                "tipoEntrada": "Industrialização",
                "ton": 501.9
            }, {
                "tipoEntrada": "Manual",
                "ton": 301.9
            }, {
                "tipoEntrada": "Nota fiscal",
                "ton": 201.1
            }, {
                "tipoEntrada": "Transferência",
                "ton": 165.8
            }];
        this.dataSaida = [{
                "tipoSaida": "Industrialização",
                "ton": 200.9
            }, {
                "tipoSaida": "Manual",
                "ton": 301.9
            }, {
                "tipoSaida": "Nota fiscal",
                "ton": 400.1
            }, {
                "tipoSaida": "Transferência",
                "ton": 165.8
            }];
        this.dataComparativoMensal = [{
                "mes": "01/21",
                "entrada": 501.9,
                "saida": 250,
                "perdas": 199
            }, {
                "mes": "02/21",
                "entrada": 301.9,
                "saida": 222,
                "perdas": 251
            }, {
                "mes": "03/21",
                "entrada": 201.1,
                "saida": 170,
                "perdas": 199
            }, {
                "mes": "04/21",
                "entrada": 165.8,
                "saida": 122,
                "perdas": 90
            }, {
                "mes": "04/21",
                "entrada": 139.9,
                "saida": 99,
                "perdas": 252
            }, {
                "mes": "05/21",
                "entrada": 128.3,
                "saida": 85,
                "perdas": 84
            }, {
                "mes": "06/12",
                "entrada": 99,
                "saida": 93,
                "perdas": 142
            }, {
                "mes": "07/21",
                "entrada": 60,
                "saida": 50,
                "perdas": 55
            }, {
                "mes": "08/21",
                "entrada": 50,
                "saida": 42,
                "perdas": 25
            }];
    }
    ngOnInit() {
        setTimeout(() => {
            this.loading = true;
        }, 1000);
        this.dataRegistros = this.item;
        this.makeChartPie();
        this.makeChartColumns();
    }
    makeChartPie() {
        this.chartService.pieChart(this.dataEntrada, "chartdiv-entradas", "ton", "tipoEntrada");
        this.chartService.pieChart(this.dataSaida, "chartdiv-saidas", "ton", "tipoSaida");
    }
    makeChartColumns() {
        this.chartService.tripleColumnsChart(this.dataComparativoMensal, "chart-comparativo-mensal", "mes", "Meses", "entrada", "Entrada", "saida", "Saída", "perdas", "Perdas");
    }
    openRegistrosSelecionados() {
        this.openRegistrosSelecionadosBool = !this.openRegistrosSelecionadosBool;
    }
    excelExport() {
        this.pnotifyService.success("Exportado com sucesso");
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent.ctorParameters = () => [
    { type: _chart_service__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoAnaliseComprasMultiVisoesChartService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-analise-compras-multi-visoes-modal-visao-mensal',
        template: _raw_loader_modal_visao_mensal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_visao_mensal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_chart_service__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoAnaliseComprasMultiVisoesChartService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesModalVisaoMensalComponent);



/***/ }),

/***/ "Hw6T":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-sublinha/visao-sublinha.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_sublinha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-sublinha.component.html */ "GB4w");
/* harmony import */ var _visao_sublinha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-sublinha.component.scss */ "nAwH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent.ctorParameters = () => [];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-sublinha',
        template: _raw_loader_visao_sublinha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_sublinha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoSublinhaComponent);



/***/ }),

/***/ "K0yU":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-alterar-agrupamento/modal-alterar-agrupamento.component.scss ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header-modal-alterar-agrupamento > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMtbXVsdGktdmlzb2VzL21vZGFsLWFsdGVyYXItYWdydXBhbWVudG8vbW9kYWwtYWx0ZXJhci1hZ3J1cGFtZW50by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBRUEsZ0VBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vbW9uaXRvcmVzL2FuYWxpc2UtY29tcHJhcy1tdWx0aS12aXNvZXMvbW9kYWwtYWx0ZXJhci1hZ3J1cGFtZW50by9tb2RhbC1hbHRlcmFyLWFncnVwYW1lbnRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlci1tb2RhbC1hbHRlcmFyLWFncnVwYW1lbnRvPiBkaXYgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjBmM2Y2KSwgY29sb3Itc3RvcCg5MCUsICNlNmViZjEpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "KkUT":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-classe/visao-classe.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy92aXNhby1jbGFzc2UvdmlzYW8tY2xhc3NlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "MZwt":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-material/visao-material.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4dcc71;\n  border-color: #4dcc71;\n}\n\n#header-modal-razao-estoque > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMtbXVsdGktdmlzb2VzL3Zpc2FvLW1hdGVyaWFsL3Zpc2FvLW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBRUEsZ0VBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vbW9uaXRvcmVzL2FuYWxpc2UtY29tcHJhcy1tdWx0aS12aXNvZXMvdmlzYW8tbWF0ZXJpYWwvdmlzYW8tbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcm93LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFiOGYwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGNjNzE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGRjYzcxO1xyXG59XHJcblxyXG4jaGVhZGVyLW1vZGFsLXJhemFvLWVzdG9xdWU+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWJmMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmMGYzZjYpLCBjb2xvci1zdG9wKDkwJSwgI2U2ZWJmMSkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcclxufSJdfQ== */");

/***/ }),

/***/ "PAp4":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-material/visao-material.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<subtitles [data]=\"subtitles\" [show]=\"true\"> </subtitles>\r\n<div class=\"table-responsive\">\r\n  <custom-table [config]=\"tableConfig\">\r\n    <ng-template let-thead #thead>\r\n      <tr class=\"text-center\">\r\n        <th width=\"4%\"></th>\r\n        <th nowrap>Material</th>\r\n        <th nowrap>Depósito</th>\r\n        <th nowrap [attr.colspan]=\"ableInformationEstoque ? colsEst : 1\">\r\n          Estoque\r\n          <button class=\"btn-icon-sm\" (click)=\"abledInfomationEstoque()\">\r\n            <i [ngClass]=\"ableInformationEstoque ? 'fas fa-minus' : 'fas fa-plus'\" title=\"Mostrar detalhes Estoque\"\r\n              aria-hidden=\"true\"></i>\r\n          </button>\r\n        </th>\r\n        <th nowrap>Saídas</th>\r\n      </tr>\r\n      <tr class=\"text-center\">\r\n        <th nowrap scope=\"col\" class=\"hover\" width=\"4%\">\r\n          <btn-icon\r\n            [icon]=\"toggle ? 'fas fa-check-square' : 'far fa-square'\"\r\n            size=\"small\"\r\n            (click)=\"onToggleAll()\">\r\n          </btn-icon>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_MATE')\">\r\n          Descrição\r\n          <span *ngIf=\"key == 'NM_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('NM_DEPO')\">\r\n          Descrição\r\n          <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('TT_ESTO_DISP')\" *ngIf=\"ableInformationEstoque\">\r\n          Suspenso\r\n          <span *ngIf=\"key == 'TT_ESTO_DISP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'TT_ESTO_DISP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('TT_ESTO_ATUAL')\" *ngIf=\"ableInformationEstoque\">\r\n          Comprometido\r\n          <span *ngIf=\"key == 'TT_ESTO_ATUAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'TT_ESTO_ATUAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('TT_ESTO_COMP')\" *ngIf=\"ableInformationEstoque\">\r\n          Atual\r\n          <span *ngIf=\"key == 'TT_ESTO_COMP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'TT_ESTO_COMP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap (click)=\"sort('TT_ESTO_SUSP')\">\r\n          Disponível\r\n          <span *ngIf=\"key == 'TT_ESTO_SUSP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"key != 'TT_ESTO_SUSP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th nowrap>\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <div (click)=\"sort('TT_SAID')\">\r\n              Total\r\n              <span *ngIf=\"key == 'TT_SAID'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_SAID'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </div>\r\n          </div>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template let-tbody #tbody>\r\n      <tr  *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\r\n        <td nowrap class=\"text-center\" width=\"4%\" [ngClass]=\"{\r\n          'border-danger' :  item.IN_STAT == 0,\r\n          'border-success' :  item.IN_STAT == 1\r\n          }\">\r\n          <btn-icon\r\n            [icon]=\"item.ON_SELE ? 'fas fa-check-square' : 'far fa-square'\"\r\n            size=\"small\"\r\n            (click)=\"onCheck(item)\">\r\n          </btn-icon>\r\n        </td>  \r\n        <td nowrap class=\"text-center\">{{ item.NM_MATE }}</td>\r\n        <td nowrap class=\"text-right\">\r\n          {{ item.NM_DEPO }}\r\n          <button\r\n            class=\"btn-icon-sm\"\r\n            (click)=\"lgModal.show() + '' + setValueRazaoEstoque(item)\"\r\n            >\r\n            <i\r\n              class=\"fa fa-search text-primary\"\r\n              tooltip=\"Razão de estoque\"\r\n              aria-hidden=\"true\"\r\n            ></i>\r\n        </button>\r\n        </td>\r\n        <td nowrap class=\"text-center\">{{ item.TT_ESTO_DISP }}</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">{{ item.TT_ESTO_ATUAL }}</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">{{ item.TT_ESTO_COMP }}</td>\r\n        <td nowrap class=\"text-center\" *ngIf=\"ableInformationEstoque\">{{ item.TT_ESTO_SUSP }}</td>\r\n        <td nowrap class=\"text-center\">{{ item.TT_SAID }}</td>\r\n      </tr>\r\n      <tr>\r\n        <td nowrap class=\"bg-dark border-dark text-center text-white\">TOTAL</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\"></td>\r\n        <td nowrap class=\"bg-dark text-center text-white\"></td>\r\n        <td nowrap class=\"bg-dark text-center text-white\">1650,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\" *ngIf=\"ableInformationEstoque\">1650,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\" *ngIf=\"ableInformationEstoque\">1650,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\" *ngIf=\"ableInformationEstoque\">1650,00</td>\r\n        <td nowrap class=\"bg-dark text-center text-white\">4500,00</td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\" *ngIf=\"noResult\">\r\n  <!-- *ngIf=\"noResult && !loading\" -->\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n\r\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          Razão de Estoque\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\">\r\n          <div class=\"row mb-2 mt-2\" id=\"header-modal-razao-estoque\">\r\n            <div class=\"col-5\">\r\n              <p style=\"font-size: 14px;\">\r\n                <strong> MATERIAL: </strong> {{ modal.material }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p style=\"font-size: 14px;\">\r\n                <strong> DEPOSÍTO: </strong> {{ modal.deposito }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn mr-2\"\r\n                [disabled]=\"compareDate() ||\r\n                compareStartDateFunc() ||\r\n                compareEndDateFunc()\"\r\n                >\r\n                <!-- (click)=\"onFilter()\" -->\r\n                Filtrar\r\n              </button>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn\"\r\n                [disabled]=\"compareDate() ||\r\n                compareStartDateFunc() ||\r\n                compareEndDateFunc()\"\r\n                (click)=\"excelExport()\"\r\n                >\r\n                Exportar Excel\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <advanced-filter>\r\n            <form [formGroup]=\"formModal\" autocomplete=\"off\">   \r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-2\">\r\n                  <label for=\"DT_PEDI_INIC\">Data Inicial</label>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    id=\"DT_PEDI_INIC\"\r\n                    type=\"text\"\r\n                    bsDatepicker\r\n                    [bsConfig]=\"bsConfig\"\r\n                    formControlName=\"DT_PEDI_INIC\"\r\n                  >\r\n                  <invalid-form-control [show]=\"compareStartDateFunc()\"\r\n                    message=\"Data inicial não pode ser maior que data atual\">\r\n                  </invalid-form-control>\r\n                </div>\r\n                <div class=\"form-group col-lg-2\">\r\n                  <label for=\"DT_PEDI_FINA\">Data Final</label>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    id=\"DT_PEDI_FINA\"\r\n                    type=\"text\"\r\n                    bsDatepicker\r\n                    [bsConfig]=\"bsConfig\"\r\n                    formControlName=\"DT_PEDI_FINA\"\r\n                  >\r\n                  <invalid-form-control [show]=\"compareDate()\" message=\"Data final deve ser maior que data inicial\">\r\n                  </invalid-form-control>\r\n                  <invalid-form-control [show]=\"compareEndDateFunc()\" message=\"Data final não pode ser maior que data atual\">\r\n                  </invalid-form-control>\r\n                </div>\r\n                <div class=\"form-group col-lg-2\">\r\n                  <label for=\"TP_MOVI\">Tipo Movimento</label>\r\n                  <ng-select\r\n                    [searchable]=\"true\"\r\n                    [clearable]=\"false\"\r\n                    [items]=\"tipoMovimentos\"\r\n                    [virtualScroll]=\"true\"\r\n                    [hideSelected]=\"true\"\r\n                    [closeOnSelect]=\"true\"\r\n                    placeholder=\"Selecione...\"\r\n                    bindLabel=\"NAME\"\r\n                    bindValue=\"ID\"\r\n                    formControlName=\"TP_MOVI\"\r\n                  >\r\n                  </ng-select>\r\n                </div>\r\n                <div class=\"form-group col-lg-2\">\r\n                  <label for=\"N_DOCU\">Nº Documento</label>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    id=\"N_DOCU\"\r\n                    type=\"text\"\r\n                    formControlName=\"N_DOCU\"\r\n                  >\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </advanced-filter>\r\n          <div class=\"table-responsive\">\r\n            <custom-table>\r\n              <ng-template let-thead #thead>\r\n                <tr class=\"text-center\">\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Data\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Tipo Movimentação\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Descrição\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Nº Descrição\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Estoque anterior\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Quantidade\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                  <th nowrap (click)=\"sort('NM_DEPO')\">\r\n                    Estoque Atual\r\n                    <span *ngIf=\"key == 'NM_DEPO'\"><i\r\n                        [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                    <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template let-tbody #tbody>\r\n                <tr>\r\n                  <td nowrap class=\"text-center\">01/10/2020</td>\r\n                  <td nowrap class=\"text-center\">Abastecimento</td>\r\n                  <td nowrap class=\"text-center\">Abastecer Tiete</td>\r\n                  <td nowrap class=\"text-center\">123456</td>\r\n                  <td nowrap class=\"text-center\">900,00</td>\r\n                  <td nowrap class=\"text-center\">5</td>\r\n                  <td nowrap class=\"text-center\">1500,00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td nowrap class=\"bg-dark text-center text-white\">TOTAL</td>\r\n                  <td nowrap class=\"bg-dark text-center text-white\"></td>\r\n                  <td nowrap class=\"bg-dark text-center text-white\"></td>\r\n                  <td nowrap class=\"bg-dark text-center text-white\"></td>\r\n                  <td nowrap class=\"bg-dark text-center text-white\">900,00</td>\r\n                  <td nowrap class=\"bg-dark text-center text-white\">5</td>\r\n                  <td nowrap class=\"bg-dark text-center text-white\">1500,00</td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n          <!-- <div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n            *ngIf=\"noResult && !loading\"\r\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "PzdT":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-alterar-agrupamento/modal-alterar-agrupamento.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_alterar_agrupamento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-alterar-agrupamento.component.html */ "5U4s");
/* harmony import */ var _modal_alterar_agrupamento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-alterar-agrupamento.component.scss */ "K0yU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");






let AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent {
    constructor(formBuilder, pnotifyService) {
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.loadingDetalhesModal = false;
        this.data = [];
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_MATE';
        /* Ordenação */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        this.tipoAgrupamentos = [
            { ID: 1, NAME: "Por empresa" },
        ];
        this.form = this.formBuilder.group({
            TP_AGRU: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        console.log(this.item);
    }
    onFilter() {
        this.loadingDetalhesModal = true;
        this.setData();
    }
    setData() {
        this.data = this.item;
    }
    exportarExcel() {
        this.pnotifyService.success("Exportado com sucesso");
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-analise-compras-multi-visoes-modal-alterar-agrupamento',
        template: _raw_loader_modal_alterar_agrupamento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_alterar_agrupamento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesModalAlterarAgrupamentoComponent);



/***/ }),

/***/ "QAda":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/analise-compras-multi-visoes.service.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesService", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesService = class AbastecimentoMonitoresAnaliseComprasMultiVisoesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getDepositosAssociados(idLinhas, idClasses, idTipoMaterial, idSituacao) {
        let linhas;
        if (!idLinhas)
            linhas = null;
        else
            linhas = idLinhas.toString();
        if (!idClasses)
            idClasses = "";
        if (!idTipoMaterial)
            idTipoMaterial = "";
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/depositos-associados-materiais`, {
            params: {
                ID_CLAS: idClasses.toString(),
                ID_LINH: linhas,
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao,
                IN_SELE_COMB: "1"
            },
            observe: "response"
        });
    }
    getDepositos(idsEmpresa, idSituacao) {
        if (!idsEmpresa)
            idsEmpresa = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/depositos`, {
            params: {
                ID_EMPR: idsEmpresa.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getFiltroNivelCritico() {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/niveis-criticos`, {
            observe: "response"
        });
    }
    getLinhas(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/linhas`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getSubLinhas(descricaoLinhas, idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/sub-linhas`, {
            params: {
                ID_LINH: descricaoLinhas.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getClasses(descricaoLinhas, idSubLinha, idSituacao) {
        if (!idSubLinha)
            idSubLinha = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params: {
                ID_LINH: descricaoLinhas.toString(),
                ID_SUB_LINH: idSubLinha,
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getMateriais(idClasses, idTipoMaterial, idSituacao) {
        if (!idClasses)
            idClasses = "";
        if (!idTipoMaterial)
            idTipoMaterial = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/materiais`, {
            params: {
                ID_CLAS: idClasses.toString(),
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getTiposNiveisEstoque(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-niveis-estoque`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getTiposMateriais(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-material`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getInfAdicionais() {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/informacoes-adicionais-atividade/1`, {
            observe: "response"
        });
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AbastecimentoMonitoresAnaliseComprasMultiVisoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesService);



/***/ }),

/***/ "Qlyx":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-favoritos/modal-favoritos.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset>\r\n  <tab heading=\"NOVO\">\r\n    <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n      <form [formGroup]=\"formModal\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"NAME_FAVO\">Nome</label>\r\n            <input placeholder=\"INSERIR...\" formControlName=\"NAME_FAVO\" class=\"form-control\" [ngClass]=\"\r\n                onFieldErrorModal('NAME_FAVO') + ' ' + onFieldRequiredModal('NAME_FAVO')\r\n              \">\r\n            <invalid-form-control [show]=\"onFieldInvalidModal('NAME_FAVO')\" message=\"Nome é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"LINK_FAVO\">Dados do Filtros</label>\r\n            <div class=\"border rounded p-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Informação principal</label>\r\n                    <span class=\"d-block\">MATERIAL</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Agrupamento</label>\r\n                    <span class=\"d-block\">POR DEPÓSITO</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Volume</label>\r\n                    <span class=\"d-block\">SAÍDAS</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Informações Adicionais</label>\r\n                    <span class=\"d-block\">ATUAL</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Estatistica</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Tipo Material</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Situação</label>\r\n                    <span class=\"d-block\">ATIVO</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Linha</label>\r\n                    <span class=\"d-block\">CIVIL</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>SubLinha</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Classe</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Material</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Empresa</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Deposito</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>Nível de Estoque</label>\r\n                    <span class=\"d-block\">-</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"d-flex justify-content-end mb-2\">\r\n        <button class=\"btn btn-primary\" (click)=\"OnSaveFavorite()\"\r\n          [disabled]=\"formModal.status == 'INVALID'\">\r\n          Guardar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n  <tab heading=\"LISTA DE FAVORITOS\">\r\n    <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n      <div class=\"row\">\r\n        <div [ngClass]=\"{ 'col-12': !ableDetailFavorite, 'col-6 pr-0': ableDetailFavorite }\">\r\n          <div class=\"table-responsive mt-2\">\r\n            <custom-table>\r\n              <ng-template #thead let-thead>\r\n                <tr class=\"text-center\">\r\n                  <th scope=\"col\">Visões salvas</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of dataModal\">\r\n                  <td class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">\r\n                    <a href=\"{{ item.LINK_FAVO }}\" target=\"_blank\">{{ item.NAME_FAVO }}</a>\r\n                  </td>\r\n                  <td class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\" width=\"5%\">\r\n                    <button class=\"btn-icon-sm\" tooltip=\"Detalles\" (click)=\"onDetailFavorite(item)\">\r\n                      <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                  </td>\r\n                  <td class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\" width=\"5%\">\r\n                    <button class=\"btn-icon-sm\" tooltip=\"Excluir\">\r\n                      <i class=\"fas fa-trash\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 mt-2\">\r\n          <tabset [hidden]=\"!ableDetailFavorite\">\r\n            <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onClose()\">\r\n              <i class=\"fas fa-times\"></i>\r\n            </button>\r\n            <tab heading=\"DADOS DO FILTRO\">\r\n              <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Informação principal</label>\r\n                      <span class=\"d-block\">MATERIAL</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Agrupamento</label>\r\n                      <span class=\"d-block\">POR DEPÓSITO</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Volume</label>\r\n                      <span class=\"d-block\">SAÍDAS</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Informações Adicionais</label>\r\n                      <span class=\"d-block\">ATUAL</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Estatistica</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Tipo Material</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Situação</label>\r\n                      <span class=\"d-block\">ATIVO</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Linha</label>\r\n                      <span class=\"d-block\">CIVIL</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>SubLinha</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Classe</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Material</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Empresa</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Deposito</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Nível de Estoque</label>\r\n                      <span class=\"d-block\">-</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </tab>\r\n          </tabset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "Rk3r":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/date.service.ts ***!
  \******************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let DateService = class DateService {
    constructor() {
        this.months = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ];
        this.weeks = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
    }
    sameDay(dateA, dateB) {
        return (dateA.getFullYear() === dateB.getFullYear() &&
            dateA.getMonth() === dateB.getMonth() &&
            dateA.getDate() === dateB.getDate());
    }
    getHourMinute(date) {
        const getHours = date.getHours();
        const getMinutes = date.getMinutes();
        let hours, minutes;
        if (getHours < 10) {
            hours = `0${getHours}`;
        }
        else {
            hours = getHours;
        }
        if (getMinutes < 10) {
            minutes = `0${getMinutes}`;
        }
        else {
            minutes = getMinutes;
        }
        return `${hours}:${minutes}`;
    }
    getFullDate(dateA, dateB, showTime = true) {
        const day = dateA.getDate();
        const weekDay = dateA.getDay();
        const month = dateA.getMonth();
        const year = dateA.getFullYear();
        const hour = this.getHourMinute(dateA);
        if (showTime) {
            if (dateB) {
                const hourB = this.getHourMinute(dateB);
                return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}, desde ${hour} hasta ${hourB}`;
            }
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year} hasta ${hour}`;
        }
        else {
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}`;
        }
    }
    getFullMonth(date) {
        return this.months[date.getMonth()];
    }
    getFirstDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 0, 1);
    }
    getLastDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 11, 31);
    }
    getFirstDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    getLastDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getToday() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    // Función para obtener la fecha de inicio de la semana actual (lunes)
    getStartOfWeek() {
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
        startOfWeek.setHours(0, 0, 0, 0);
        return startOfWeek;
    }
    // Función para obtener la fecha de fin de la semana actual (domingo)
    getEndOfWeek() {
        const currentDate = new Date();
        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
        endOfWeek.setHours(23, 59, 59, 999);
        return endOfWeek;
    }
    convert2PhpDate(date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        if (m < 10)
            m = `0${m}`;
        if (d < 10)
            d = `0${d}`;
        if (h < 10)
            h = `0${h}`;
        if (i < 10)
            i = `0${i}`;
        return `${y}-${m}-${d} ${h}:${i}`;
    }
    convertToBrazilianDate(date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let d = date.getDate().toString().padStart(2, '0');
        let h = date.getHours().toString().padStart(2, '0');
        let i = date.getMinutes().toString().padStart(2, '0');
        let s = date.getSeconds().toString().padStart(2, '0');
        return `${d}/${m}/${y} ${h}:${i}:${s}`;
    }
    convertMysqlTime(time) {
        if (time !== null) {
            let timeSplit = time.split(':');
            return `${timeSplit[0]}:${timeSplit[1]}`;
        }
        return time;
    }
    convertToUrlDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        if (d < 10)
            d = `0${d}`;
        if (m < 10)
            m = `0${m}`;
        return `${d}-${m}-${y}`;
    }
    convertStringToDate(stringDate, dateType) {
        let date;
        if (stringDate.indexOf(':') > -1) {
            const stringDateSplit = stringDate.split(' ');
            const dateSplit = stringDateSplit[0].split('-');
            const timeSplit = stringDateSplit[1].split(':');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
        }
        else {
            const dateSplit = stringDate.split('-');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2));
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2));
            }
        }
        return date;
    }
    formatWithSlashes(stringDate, dateType) {
        const dateSplit = stringDate.split('-');
        let date;
        if (dateType == 'latam') {
            date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
        }
        else if (dateType == 'usa') {
            date = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;
        }
        return date;
    }
    addDaysToDate(date, days) {
        return new Date(date.setDate(date.getDate() + days));
    }
};
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DateService);



/***/ }),

/***/ "SPIL":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/analise-compras-multi-visoes.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMtbXVsdGktdmlzb2VzL2FuYWxpc2UtY29tcHJhcy1tdWx0aS12aXNvZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMtbXVsdGktdmlzb2VzL2FuYWxpc2UtY29tcHJhcy1tdWx0aS12aXNvZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcm93LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFiOGYwIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "Tzi/":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-tipo-material/visao-tipo-material.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>visao-tipo-material works!</p>\r\n");

/***/ }),

/***/ "XAGl":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-linha/visao-linha.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_linha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-linha.component.html */ "88kO");
/* harmony import */ var _visao_linha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-linha.component.scss */ "AgCm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent.ctorParameters = () => [];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-linha',
        template: _raw_loader_visao_linha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_linha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoLinhaComponent);



/***/ }),

/***/ "XcoM":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-classe/visao-classe.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_classe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-classe.component.html */ "8+8I");
/* harmony import */ var _visao_classe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-classe.component.scss */ "KkUT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent {
    /* Ordenação */
    constructor() {
        this.noResult = false;
        this.ableInformationEstoque = false;
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_MATE';
    }
    ngOnInit() {
        this.noResult = true;
    }
    abledInfomationEstoque() {
        this.colsEst = 3;
        this.ableInformationEstoque = !this.ableInformationEstoque;
    }
    /* Ordenação via API*/
    sort(key) {
        // if(this.key != key) {
        //   this.reverse = true;
        // } else if( this.key == key ) {
        //   this.reverse = !this.reverse;
        // }
        // this.key = key;
        // if (this.reverse == false) {
        //   this.form.get('orderType').setValue("ASC");
        // } else if (this.reverse == true) {
        //   this.form.get('orderType').setValue("DESC");
        // }
        // this.form.get('orderBy').setValue(this.key);
        // this.onFilter(this.currentPage);
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent.ctorParameters = () => [];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-classe',
        template: _raw_loader_visao_classe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_classe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoClasseComponent);



/***/ }),

/***/ "a7FO":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-material/visao-material.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_material_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-material.component.html */ "PAp4");
/* harmony import */ var _visao_material_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-material.component.scss */ "MZwt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");










let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent {
    constructor(activatedRoute, routerService, localeService, pnotifyService, dateService, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
        this.localeService = localeService;
        this.pnotifyService = pnotifyService;
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.noResult = false;
        this.ableInformationEstoque = false;
        this.compareEndDate = false;
        this.compareStartDate = false;
        this.compareEndDateCurrent = false;
        this.toggle = false;
        this.modal = [];
        this.arrayTemp = [];
        this.data = [
            { ID: 1, IN_STAT: 1, ON_SELE: 0, NM_MATE: 'CA-50 - barra 8mm Arcelor Mittal', NM_DEPO: 'Tiete', TT_ESTO_DISP: '550,00', TT_ESTO_ATUAL: '550,00', TT_ESTO_COMP: '550,00', TT_ESTO_SUSP: '550,00', TT_SAID: '1500,00' },
            { ID: 2, IN_STAT: 1, ON_SELE: 0, NM_MATE: 'CA-50 - barra 8mm Arcelor Mittal', NM_DEPO: 'Cajamar', TT_ESTO_DISP: '550,00', TT_ESTO_ATUAL: '550,00', TT_ESTO_COMP: '550,00', TT_ESTO_SUSP: '550,00', TT_SAID: '1500,00' },
            { ID: 3, IN_STAT: 1, ON_SELE: 0, NM_MATE: 'CA-25 - barra 6mm Arcelor Mittal', NM_DEPO: 'Tiete', TT_ESTO_DISP: '550,00', TT_ESTO_ATUAL: '550,00', TT_ESTO_COMP: '550,00', TT_ESTO_SUSP: '550,00', TT_SAID: '1500,00' },
        ];
        this.tipoMovimentos = [
            { ID: 1, NAME: 'Entrada' },
            { ID: 2, NAME: 'Saida' }
        ];
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_MATE';
        /* Ordenação */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        this.tableConfig = {
            subtitleBorder: true
        };
        this.subtitles = [
            {
                text: 'Ativo',
                color: 'green'
            },
            {
                text: 'Inativo',
                color: 'red'
            }
        ];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.formModal = this.formBuilder.group({
            DT_PEDI_INIC: [null],
            DT_PEDI_FINA: [null],
            TP_MOVI: [null],
            N_DOCU: [null]
        });
    }
    ngOnInit() {
    }
    abledInfomationEstoque() {
        this.colsEst = 4;
        this.ableInformationEstoque = !this.ableInformationEstoque;
    }
    onCheck(item) {
        item.ON_SELE = !item.ON_SELE;
        this.toggle = false;
        this.arrayTemp = this.data.filter(e => {
            return e.ON_SELE === true;
        });
        this.addNewItem(this.arrayTemp);
    }
    onToggleAll() {
        this.toggle = !this.toggle;
        this.data.map(item => item.ON_SELE = this.toggle);
        if (this.toggle) {
            this.arrayTemp = this.data;
        }
        else {
            this.arrayTemp = [];
        }
        this.addNewItem(this.arrayTemp);
    }
    addNewItem(value) {
        this.newItemEvent.emit(value);
    }
    excelExport() {
        this.pnotifyService.success("Exportado com sucesso");
    }
    setValueRazaoEstoque(item) {
        this.modal.material = item.NM_MATE;
        this.modal.deposito = item.NM_DEPO;
    }
    compareEndDateFunc() {
        let now = new Date();
        if (!this.formModal.get('DT_PEDI_INIC').value) {
            this.compareEndDateCurrent = false;
            return false;
        }
        else if (this.formModal.get('DT_PEDI_FINA').value > now) {
            this.compareEndDateCurrent = true;
            return this.compareEndDateCurrent;
        }
    }
    compareStartDateFunc() {
        let now = new Date();
        if (!this.formModal.get('DT_PEDI_INIC').value) {
            this.compareStartDate = false;
            return false;
        }
        else if (this.formModal.get('DT_PEDI_FINA').value > now) {
            this.compareStartDate = true;
            return this.compareStartDate;
        }
    }
    compareDate() {
        let stra = this.formModal.get('DT_PEDI_INIC').value;
        let strb = this.formModal.get('DT_PEDI_FINA').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
            ;
        }
        if (!dataInicial) {
            this.compareEndDate = false;
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compareEndDate = true;
            return this.compareEndDate;
        }
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-material',
        template: _raw_loader_visao_material_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_material_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoMaterialComponent);



/***/ }),

/***/ "aJXn":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-empresa/visao-empresa.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <!-- *ngIf=\"noResult && !loading\" -->\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "aOAq":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-deposito/visao-deposito.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_deposito_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-deposito.component.html */ "vn5I");
/* harmony import */ var _visao_deposito_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-deposito.component.scss */ "wtEm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent {
    constructor() { }
    ngOnInit() {
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent.ctorParameters = () => [];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-deposito',
        template: _raw_loader_visao_deposito_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_deposito_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoDepositoComponent);



/***/ }),

/***/ "ah82":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-tipo-material/visao-tipo-material.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy92aXNhby10aXBvLW1hdGVyaWFsL3Zpc2FvLXRpcG8tbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jrzI":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/analise-compras-multi-visoes.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analise_compras_multi_visoes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analise-compras-multi-visoes.component.html */ "7qAL");
/* harmony import */ var _analise_compras_multi_visoes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analise-compras-multi-visoes.component.scss */ "SPIL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _analise_compras_multi_visoes_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./analise-compras-multi-visoes.service */ "QAda");









Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);







let AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent {
    constructor(activatedRoute, router, formBuilder, localeService, pnotifyService, atividadesService, routerService, titleService, dateService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.dateService = dateService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loading = false;
        this.noResult = false;
        this.compareEndDate = false;
        this.compareStartDate = false;
        this.compareEndDateCurrent = false;
        this.showModalFavoritos = false;
        this.showModalAlterarAgrupamento = false;
        this.showModalVisaoMensal = false;
        this.showModal = false;
        this.itemModal = [];
        this.modal = [];
        this.breadCrumbTree = [];
        this.depositos = [];
        this.linhas = [];
        this.subLinhas = [];
        this.classes = [];
        this.data = [];
        this.depositosAssociados = [];
        this.tiposMateriais = [];
        this.tiposNiveisEstoques = [];
        this.materiais = [];
        this.arrayDepositos = [];
        this.situations = [
            { id: 1, nome: 'Ativo' },
            { id: 0, nome: 'Inativo' }
        ];
        /* Pagination */
        this.itemsPerPageParam = 15;
        this.totalItems = 10;
        this.currentPage = 1;
        this.numberOfItems = [15, 25, 50];
        /* Pagination */
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_MATE';
        /* Ordenação */
        this.periodosBusca = [
            // { id: 1, nome: 'Padrão' },
            { id: 2, nome: 'Customizado' }
        ];
        this.infoPrincipal = [
            { ID: 1, NM_INFO_PRIN: 'Material' },
            { ID: 2, NM_INFO_PRIN: 'Classe' },
            { ID: 3, NM_INFO_PRIN: 'Sublinha' },
            { ID: 4, NM_INFO_PRIN: 'Linha' },
            { ID: 5, NM_INFO_PRIN: 'Depósito' },
            { ID: 6, NM_INFO_PRIN: 'Empresa' },
            { ID: 7, NM_INFO_PRIN: 'Tipo Material' },
        ];
        this.agrupamento = [
            { ID: 1, NM_INFO_AGRU: 'Por depósito' },
            { ID: 2, NM_INFO_AGRU: 'Por empresa' },
            { ID: 3, NM_INFO_AGRU: 'Em todo Grupo' },
        ];
        this.volume = [
            { ID: 3, NM_INFO_VOLU: 'Estoque Disponível' },
            //{ ID: 1, NM_INFO_VOLU: 'Entradas' },
            { ID: 2, NM_INFO_VOLU: 'Saídas' },
            { ID: 4, NM_INFO_VOLU: 'Carteira' },
            { ID: 5, NM_INFO_VOLU: 'Perdas' },
        ];
        this.infoAdicionais = [
            { ID: 1, NM_INFO_ADIC: 'Atual' },
            { ID: 2, NM_INFO_ADIC: 'Supenso' },
            { ID: 3, NM_INFO_ADIC: 'Comprometido' }
        ];
        this.infoEstatistica = [
            { ID: 1, NM_INFO_ESTA: 'Giro' },
            { ID: 2, NM_INFO_ESTA: 'Ritmo' },
        ];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            INFO_PRIN: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            INFO_AGRU: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            INFO_VOLU: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            INFO_ADIC: [null],
            INFO_ESTA: [null],
            empresas: [null],
            depositos: [null],
            dataInicial: [null],
            dataFinal: [null],
            nivelEstoque: [null],
            tipoMaterial: [null],
            linha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subLinha: [null],
            classe: [null],
            material: [null],
            paramData: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            infAdicionais: [null],
            situacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qtItensPagina: [this.itemsPerPageParam],
            pagina: [this.currentPage],
            orderBy: [null],
            orderType: [null]
        });
    }
    ngOnInit() {
        this.setValueParamData();
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.titleService.setTitle('Análise de Compras Multíplas Visões');
        this.checkRouterParams();
        this.getTiposMateriais();
        this.getTiposNiveisEstoque();
        this.getLinhas();
    }
    setValueParamData() {
        this.form.get('paramData').setValue(2);
        this.form.get('situacao').setValue(1);
        this.enabledDate();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Monitores',
                    routerLink: `/abastecimento/monitores/${params['idSubModulo']}`
                },
                {
                    descricao: 'Análise de Compras Multíplas Visões'
                }
            ];
        });
    }
    getLinhas() {
        this.loaderNavbar = true;
        this.linhas = [];
        let campos = ['classe', 'subLinha', 'material', 'empresas', 'depositos'];
        this.setFormDisable(campos);
        let idSituacao = 1;
        this.service
            .getLinhas(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.linhas = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Linhas');
        });
    }
    getSubLinhas() {
        this.loaderNavbar = true;
        let campos = ['subLinha', 'classe', 'material', 'empresas', 'depositos'];
        this.setFormReset(campos);
        this.setFormDisable(campos);
        this.subLinhas = [];
        if (this.form.get('linha').status === 'VALID') {
            let descricaoLinhas = this.form.get('linha').value;
            let idSituacao = 1;
            this.service
                .getSubLinhas(descricaoLinhas, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.setFormEnable(['subLinha']);
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.pnotifyService.notice('Não há sublinha cadastrada');
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar sublinhas');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(['subLinha']);
        }
    }
    getClasses() {
        this.classes = [];
        this.loaderNavbar = true;
        let campos = ['classe'];
        this.setFormReset(campos);
        if (this.form.value['linha'] != null &&
            this.form.value['linha'].length > 0) {
            let descricaoLinhas = this.form.get('linha').value;
            let idSubLinha = this.form.get('subLinha').value;
            let idSituacao = 1;
            this.service
                .getClasses(descricaoLinhas, idSubLinha, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.classes = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(campos);
        }
    }
    getMateriais() {
        this.materiais = [];
        this.loaderNavbar = true;
        let campos = ['material'];
        this.setFormReset(campos);
        let idClasses = this.form.get('classe').value;
        let idTipoMaterial = this.form.get('tipoMaterial').value;
        let idSituacao = this.form.get('situacao').value;
        if (this.form.value['classe'] != null &&
            this.form.value['classe'].length > 0) {
            this.service
                .getMateriais(idClasses, idTipoMaterial, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body'].responseCode === 200) {
                        this.materiais = res['body'].result;
                        this.setFormEnable(campos);
                    }
                    else if (res['body']['responseCode'] === 204 ||
                        res['body']['responseCode'] === 404) {
                        this.materiais = [];
                        this.setFormDisable(campos);
                        this.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.loaderNavbar = false;
            }, error => {
                this.pnotifyService.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(campos);
        }
    }
    getDepositosAssociados() {
        this.loaderNavbar = true;
        this.depositosAssociados = [];
        let campos = ['empresas', 'depositos'];
        this.setFormReset(campos);
        this.setFormDisable(campos);
        let idLinhas = this.form.get('linha').value;
        let idClasses = this.form.get('classe').value;
        let idTipoMaterial = this.form.get('tipoMaterial').value;
        let idSituacao = 1;
        if ((this.form.value['classe'] != null &&
            this.form.value['classe'].length > 0) ||
            (this.form.value['linha'] != null && this.form.value['linha'].length > 0)) {
            this.service
                .getDepositosAssociados(idLinhas, idClasses, idTipoMaterial, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body']['responseCode'] === 200) {
                        this.depositosAssociados = res['body']['result'];
                        this.setFormEnable(['empresas']);
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.pnotifyService.notice('Não há empresa vinculada');
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Empresas associadas');
            });
        }
        else {
            this.loaderNavbar = false;
        }
    }
    getDepositos(param) {
        this.loaderNavbar = true;
        this.depositos = [];
        let campos = ['depositos'];
        this.setFormReset(campos);
        this.setFormDisable(campos);
        if (Object.keys(this.form.get('empresas').value).length > 0) {
            let idsEmpresa = this.form.get('empresas').value;
            let idSituacao = 1;
            this.service
                .getDepositos(idsEmpresa, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res['body']['responseCode'] === 200) {
                        this.depositos = res['body']['result'];
                        this.getArrayDepositos(param);
                        this.setFormEnable(campos);
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.setFormDisable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Depositos');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(campos);
        }
    }
    /* Função para filtrar os depositos que possue vinculo com as classes */
    getArrayDepositos(event) {
        let depositosFiltrados = [];
        this.depositos.forEach(deposito => {
            event.forEach(element => {
                element['DEPO'].forEach(d => {
                    if (d['ID_DEPO'] == deposito['ID'])
                        depositosFiltrados.push(deposito);
                });
            });
        });
        this.depositos = depositosFiltrados;
    }
    /* Função para filtrar os depositos que possue vinculo com as classes */
    getTiposNiveisEstoque() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.tiposNiveisEstoques = [];
        this.service
            .getTiposNiveisEstoque(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.tiposNiveisEstoques = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Tipos de Niveis de Estoque');
        });
    }
    getTiposMateriais() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.tiposMateriais = [];
        this.service
            .getTiposMateriais(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.tiposMateriais = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Tipos de Materiais');
        });
    }
    checkRouterParams() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                //busca de dados
                this.setFormValues(_response);
            }
        });
        this.$activatedRouteSubscription.unsubscribe();
    }
    addItem(newItem) {
        this.itemModal = newItem;
    }
    setFormValues(queryParams) {
        let empresas = queryParams['empresas'] ? queryParams['empresas'] : null;
        let depositos = queryParams['depositos'] ? queryParams['depositos'] : null;
        let nivelEstoque = queryParams['nivelEstoque']
            ? queryParams['nivelEstoque']
            : null;
        let tipoMaterial = queryParams['tipoMaterial']
            ? queryParams['tipoMaterial']
            : null;
        let situacao = queryParams['situacao'];
        let linha = queryParams['linha'] ? queryParams['linha'] : null;
        let subLinha = queryParams['subLinha'] ? queryParams['subLinha'] : null;
        let classe = queryParams['classe'] ? queryParams['classe'] : [];
        let material = queryParams['material'] ? queryParams['material'] : null;
        let paramData = queryParams['paramData'] ? queryParams['paramData'] : null;
        let dataInicial = queryParams['dataInicial']
            ? queryParams['dataInicial']
            : null;
        let dataFinal = queryParams['dataFinal'] ? queryParams['dataFinal'] : null;
        let tipoVisualizacao = queryParams['tipoVisualizacao']
            ? queryParams['tipoVisualizacao']
            : null;
        let infAdicionais = queryParams['infAdicionais']
            ? queryParams['infAdicionais']
            : null;
        //let pagina = queryParams['pagina'];
        let orderBy = queryParams['orderBy'];
        let orderType = queryParams['orderType'];
        this.idView = queryParams['INFO_PRIN'];
        if (paramData == 2) {
            this.setFormEnable(['dataInicial', 'dataFinal']);
        }
        this.currentPage = queryParams['pagina'];
        this.itemsPerPageParam = queryParams['qtItensPagina'];
        this.key = orderBy;
        if (orderType === "ASC") {
            this.reverse = false;
        }
        else if (orderType === "DESC") {
            this.reverse = true;
        }
        // console.log(this.setDateValid(dataInicial));
        // let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        // let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        //consulta para recarregamento dos dados no form
        this.getDadosForm({ empresas, linha, classe, tipoMaterial, situacao });
        // this.form.patchValue({
        //   empresas: empresas,
        //   depositos: depositos,
        //   nivelEstoque: nivelEstoque,
        //   tipoMaterial: tipoMaterial,
        //   situacao: situacao,
        //   linha: linha,
        //   subLinha: subLinha,
        //   classe: classe,
        //   material: material,
        //   paramData: paramData,
        //   dataInicial: dataInicial,
        //   dataFinal: dataFinal,
        //   tipoVisualizacao: tipoVisualizacao,
        //   infAdicionais: infAdicionais,
        //   qtItensPagina: this.itemsPerPageParam,
        //   pagina: this.currentPage,
        //   orderBy: orderBy,
        //   orderType: orderType
        // });
        this.form.patchValue(queryParams);
    }
    /* Consulta para recarregamento de dados nos selects dos form */
    getDadosForm(params) {
        /* Alimenta select Sublinha */
        if (params['linha'] !== null) {
            let campos = ['subLinha'];
            this.service
                .getSubLinhas(params['linha'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.setFormEnable(campos);
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.setFormDisable(campos);
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Sublinhas');
            });
        }
        else {
            this.setFormDisable(['subLinha']);
        }
        /* Alimenta select Classes */
        if (params['linha'] !== null) {
            let campos = ['classe'];
            this.service
                .getClasses(params['linha'], params['subLinha'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.classes = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        /* Alimenta select Materiais */
        if (Object.keys(params['classe']).length > 0) {
            let campos = ['material'];
            this.service
                .getMateriais(params['classe'], params['tipoMaterial'], params['situacao'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body'].responseCode === 200) {
                        this.materiais = res['body'].result;
                        this.setFormEnable(campos);
                    }
                    else if (res['body']['responseCode'] === 204 ||
                        res['body']['responseCode'] === 404) {
                        this.setFormDisable(campos);
                        this.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.loaderNavbar = false;
            }, error => {
                this.pnotifyService.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(['material']);
        }
        /* Alimenta o select de empresas */
        if (Object.keys(params['linha']).length > 0) {
            let campos = ['empresas'];
            this.service
                .getDepositosAssociados(params['linha'], params['classe'], params['tipoMaterial'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.depositosAssociados = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Depositos associados');
            });
        }
        /* Alimenta select depositos */
        if (params['empresas'] !== null) {
            let campos = ['depositos'];
            this.service
                .getDepositos(params['empresas'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.depositos = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Depositos');
            });
        }
        else {
            this.setFormEnable(['depositos']);
        }
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date) {
                    _obj[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                }
                _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    /* Resetas as colunas que serão exibidas */
    resetForm() {
        let camposReset = [
            'linha',
            'subLinha',
            'classe',
            'material',
            'empresas',
            'depositos'
        ];
        let camposDisable = [
            'subLinha',
            'classe',
            'material',
            'empresas',
            'depositos'
        ];
        this.setFormReset(camposReset);
        this.setFormDisable(camposDisable);
    }
    onFilter(page) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
        //this.search(this.getParams());
        this.idView = this.getParams()['INFO_PRIN'];
    }
    excelExport() {
        this.pnotifyService.success("Exportado com sucesso");
    }
    setFormDisable(selects) {
        selects.forEach(element => {
            return this.form.get(element).disable();
        });
    }
    setFormEnable(selects) {
        selects.forEach(element => {
            return this.form.get(element).enable();
        });
    }
    setFormReset(selects) {
        selects.forEach(element => {
            return this.form.get(element).reset();
        });
    }
    // setDateValid(date) {
    //   if (date instanceof Date) {
    //     date = this.dateService.convertToUrlDate(date);
    //   }
    //   return date;
    // }
    enabledDate() {
        let campoData = ['dataInicial', 'dataFinal'];
        let today = new Date;
        this.setFormReset(campoData);
        this.setFormEnable(campoData);
        this.form.get('dataInicial').setValue(this.getLastThreeMonthsDay());
        this.form.get('dataFinal').setValue(today);
    }
    activeInputDate() {
        if (this.form.value['paramData'] == 2) {
            this.enabledDate();
        }
        else if (this.form.value['paramData'] == 1) {
            this.disabledDate();
        }
    }
    disabledDate() {
        let campoData = ['dataInicial', 'dataFinal'];
        this.setFormReset(campoData);
        this.setFormDisable(campoData);
    }
    compareEndDateFunc() {
        let now = new Date();
        if (!this.form.get('dataFinal').value) {
            this.compareEndDateCurrent = false;
            return false;
        }
        else if (this.form.get('dataFinal').value > now) {
            this.compareEndDateCurrent = true;
            return this.compareEndDateCurrent;
        }
    }
    compareStartDateFunc() {
        let now = new Date();
        if (!this.form.get('dataInicial').value) {
            this.compareStartDate = false;
            return false;
        }
        else if (this.form.get('dataInicial').value > now) {
            this.compareStartDate = true;
            return this.compareStartDate;
        }
    }
    compareDate() {
        let stra = this.form.get('dataInicial').value;
        let strb = this.form.get('dataFinal').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
            ;
        }
        if (!dataInicial) {
            this.compareEndDate = false;
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compareEndDate = true;
            return this.compareEndDate;
        }
    }
    getLastThreeMonthsDay() {
        let date = new Date();
        date.setMonth(date.getMonth() - 3);
        return date;
    }
    setValuesFavorite() {
        this.modal.title = "Favoritos";
        this.showModalFavoritos = true;
        console.log(this.form.value);
    }
    setValuesAlterarAgrupamento() {
        this.showModalAlterarAgrupamento = true;
        this.modal.title = "Alterar Agrupamento";
    }
    setValuesVisaoMensal() {
        this.showModalVisaoMensal = true;
        this.modal.title = "Visão Mensal";
    }
    onCloseModal() {
        this.showModalFavoritos = false;
        this.showModalAlterarAgrupamento = false;
        this.showModalVisaoMensal = false;
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: _analise_compras_multi_visoes_service__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoMonitoresAnaliseComprasMultiVisoesService"] }
];
AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'analise-compras-multi-visoes',
        template: _raw_loader_analise_compras_multi_visoes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analise_compras_multi_visoes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _analise_compras_multi_visoes_service__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoMonitoresAnaliseComprasMultiVisoesService"]])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesComponent);



/***/ }),

/***/ "nAwH":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-sublinha/visao-sublinha.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy92aXNhby1zdWJsaW5oYS92aXNhby1zdWJsaW5oYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "npNb":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-empresa/visao-empresa.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_empresa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-empresa.component.html */ "aJXn");
/* harmony import */ var _visao_empresa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-empresa.component.scss */ "pcQp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent.ctorParameters = () => [];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-empresa',
        template: _raw_loader_visao_empresa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_empresa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoEmpresaComponent);



/***/ }),

/***/ "pcQp":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-empresa/visao-empresa.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy92aXNhby1lbXByZXNhL3Zpc2FvLWVtcHJlc2EuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qV15":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/modal-favoritos/modal-favoritos.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy9tb2RhbC1mYXZvcml0b3MvbW9kYWwtZmF2b3JpdG9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "s9f/":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-tipo-material/visao-tipo-material.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent", function() { return AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_tipo_material_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-tipo-material.component.html */ "Tzi/");
/* harmony import */ var _visao_tipo_material_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-tipo-material.component.scss */ "ah82");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent = class AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent {
    constructor() { }
    ngOnInit() {
    }
};
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent.ctorParameters = () => [];
AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visao-tipo-material',
        template: _raw_loader_visao_tipo_material_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_tipo_material_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoMonitoresAnaliseComprasMultiVisoesVisaoTipoMaterialComponent);



/***/ }),

/***/ "vn5I":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-deposito/visao-deposito.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <!-- *ngIf=\"noResult && !loading\" -->\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "wtEm":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/visao-deposito/visao-deposito.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzLW11bHRpLXZpc29lcy92aXNhby1kZXBvc2l0by92aXNhby1kZXBvc2l0by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "xPhv":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras-multi-visoes/chart.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: AbastecimentoAnaliseComprasMultiVisoesChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoAnaliseComprasMultiVisoesChartService", function() { return AbastecimentoAnaliseComprasMultiVisoesChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");


//amChart


let AbastecimentoAnaliseComprasMultiVisoesChartService = class AbastecimentoAnaliseComprasMultiVisoesChartService {
    constructor() {
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    pieChart(DATA, identify, value, category) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme);
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        // Add data
        chart.data = DATA;
        // Add and configure Series
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        pieSeries.dataFields.value = value;
        pieSeries.dataFields.category = category;
        // Let's cut a hole in our Pie chart the size of 40% the radius
        // Disable ticks and labels
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        // Disable tooltips
        //pieSeries.slices.template.tooltipText = "";
        // Add a legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        //this.chartService.pieChart(this.data, "chartdiv-entradas", "litres", "country")
    }
    tripleColumnsChart(DATA, identify, category, textCategory, value1, seriesName1, value2, seriesName2, value3, seriesName3) {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Add data
        chart.data = DATA;
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = category;
        categoryAxis.title.text = textCategory;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.title.text = "Toneladas (TON)";
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.dataFields.valueY = value1;
        series.dataFields.categoryX = category;
        series.name = seriesName1;
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        // This has no effect
        // series.stacked = true;
        var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series2.dataFields.valueY = value2;
        series2.dataFields.categoryX = category;
        series2.name = seriesName2;
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        // Do not try to stack on top of previous series
        // series2.stacked = true;
        var series3 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series3.dataFields.valueY = value3;
        series3.dataFields.categoryX = category;
        series3.name = seriesName3;
        series3.tooltipText = "{name}: [bold]{valueY}[/]";
        // Add cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        // Add legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
    }
    am4themes_myTheme(target) {
        if (target instanceof _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["ColorSet"]) {
            target.list = [
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#1BA68D"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#E77624"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#DF3520"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#E7DA4F"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#64297B"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#232555")
            ];
        }
    }
};
AbastecimentoAnaliseComprasMultiVisoesChartService.ctorParameters = () => [];
AbastecimentoAnaliseComprasMultiVisoesChartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoAnaliseComprasMultiVisoesChartService);



/***/ })

}]);
//# sourceMappingURL=analise-compras-multi-visoes-analise-compras-multi-visoes-module-es2015.js.map