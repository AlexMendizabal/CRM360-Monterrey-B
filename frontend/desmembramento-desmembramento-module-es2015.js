(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["desmembramento-desmembramento-module"],{

/***/ "/1Ba":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: LogisticaEntregaDesmembramentoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoRoutingModule", function() { return LogisticaEntregaDesmembramentoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _desmembramento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desmembramento.component */ "evSM");




const routes = [
    {
        path: '',
        component: _desmembramento_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaDesmembramentoComponent"]
    }
];
let LogisticaEntregaDesmembramentoRoutingModule = class LogisticaEntregaDesmembramentoRoutingModule {
};
LogisticaEntregaDesmembramentoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], LogisticaEntregaDesmembramentoRoutingModule);



/***/ }),

/***/ "3pdl":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/desmembramento/desmembramento.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Desmembramiento\">\n  <button (click)=\"onReset()\">\n    Limpiar\n  </button>\n  <button\n  [disabled]=\"form.status == 'INVALID'\"\n  (click)=\"onSearch()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-2 pl-0\">\n          <label for=\"dtInicial\">Fecha de início</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Digite...\"\n            formControlName=\"DT_INIC\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col-2 pl-0\">\n          <label for=\"dtFinal\">Fecha de finalizacion</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Digite...\"\n            formControlName=\"DT_FINA\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col p-0\">\n          <label for=\"filial\">Subsidiaria</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [closeOnSelect]=\"false\"\n            [loading]=\"loadingFiliais\"\n            [items]=\"filiais\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            labelForId=\"filial\"\n            bindLabel=\"nome\"\n            bindValue=\"idFilial\"\n            [ngClass]=\"onFieldRequired('CD_FILI')\"\n            placeholder=\"SELECCIONE...\"\n            formControlName=\"CD_FILI\"\n          >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"id\">Lanzamiento</label>\n          <input\n            id=\"id\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"ID_LOGI_FUSI_PEDI\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"pedido\">Órdenes de Venta</label>\n          <input\n            id=\"pedido\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"CD_PEDI\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"romaneio\">Romaneio</label>\n          <input\n            id=\"romaneio\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"CD_ROMA\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col-3 p-0\">\n          <label for=\"cliente\">Cliente</label>\n          <input\n            id=\"cliente\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"DS_CLIE\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"categoria\">Niveles</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tipos\"\n            [multiple]=\"true\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipo\"\n            bindLabel=\"nome\"\n            bindValue=\"cod\"\n            id=\"categoria\"\n            formControlName=\"IN_DESM\"\n            (change)=\"onSearch()\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"tipoOperacao\">Tipo de operación</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tipoOperacao\"\n            [multiple]=\"true\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipoOperacao\"\n            bindLabel=\"TP_OPER\"\n            bindValue=\"TP_OPER\"\n            id=\"tipoOperacao\"\n            formControlName=\"TP_OPER\"\n            (change)=\"onSearch()\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3 pl-0 \">\n          <label for=\"inSaldo\">saldo</label>\n          <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"inSaldo\"\n          [virtualScroll]=\"true\"\n          labelForId=\"inSaldo\"\n          bindLabel=\"nome\"\n          bindValue=\"cod\"\n          id=\"inSaldo\"\n          formControlName=\"IN_SALD\"\n          (keydown.enter)=\"onSearch()\"\n          placeholder=\"SELECCIONE...\"\n        >\n        </ng-select>\n        </div>\n        <div class=\"form-group col-3 pl-0 \">\n          <label for=\"integracion\">integracion</label>\n          <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"integracion\"\n          [virtualScroll]=\"true\"\n          labelForId=\"integracion\"\n          bindLabel=\"nome\"\n          bindValue=\"cod\"\n          id=\"integracion\"\n          formControlName=\"DS_INTE\"\n          (keydown.enter)=\"onSearch()\"\n          placeholder=\"SELECCIONE...\"\n        >\n        </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"itensPorPagina\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            (change)=\"setItensPerPage($event); onSearch()\"\n            formControlName=\"TT_REGI_PAGI\"\n            >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\" *ngIf=\"pedidos.length > 0\">\n    <div class=\"col-md-4 mb-2\">\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n        <div class=\"bg-success rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\n        <div class=\"text-right\" [hidden]=\"loadingNavBar\" >\n          <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"integrados\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoIntegrados = $event\">\n          {{ countoIntegrados | number:'1.0-0' }}\n          </h5>\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL INTEGRADA</div>\n        </div>\n        <div class=\"text-right\" *ngIf=\"integradosEmpty\">\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL INTEGRADA</div>\n        </div>\n        <div class=\"text-right my-auto\" *ngIf=\"loadingNavBar\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-2\">\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n        <div class=\"bg-warning rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\n        <div class=\"text-right\" [hidden]=\"loadingNavBar\">\n          <h5\n            class=\"font-weight-bolder mb-1\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"noIntegrados\"\n            [countFrom]=\"0\"\n            [duration]=\"2\"\n            (countoChange)=\"countoNoIntegrados = $event\">\n            {{ countoNoIntegrados | number:'1.0-0' }}\n          </h5>\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL NO INTEGRADA</div>\n        </div>\n        <div class=\"text-right\" *ngIf=\"noIntegradosEmpty\">\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL NO INTEGRADA</div>\n        </div>\n        <div class=\"text-right my-auto\" *ngIf=\"loadingNavBar\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-2\">\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n        <div class=\"bg-danger rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\n        <div class=\"text-right\" [hidden]=\"loadingNavBar\">\n          <h5\n            class=\"font-weight-bolder mb-1\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"InErros\"\n            [countFrom]=\"0\"\n            [duration]=\"2\"\n            (countoChange)=\"countoInErros = $event\">\n            {{ countoInErros | number:'1.0-0' }}\n          </h5>\n          <div class=\"text-muted small font-weight-bold\">INTEGRACIONES TOTALES CON ERROR</div>\n        </div>\n        <div class=\"text-right\" *ngIf=\"InErrosEmpty\">\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\n          <div class=\"text-muted small font-weight-bold\">INTEGRACIONES TOTALES CON ERROR</div>\n        </div>\n        <div class=\"text-right my-auto\" *ngIf=\"loadingNavBar\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center\">Órdenes de venta</th>\n            <th class=\"text-center\">Operación</th>\n            <th class=\"text-center\">Fecha del documento</th>\n            <th>Subsidiaria</th>\n            <th>Cliente</th>\n            <th class=\"text-center\">Romaneio</th>\n            <th class=\"text-center\">plazo de entrega</th>\n            <th class=\"text-center\">Saldo (Tons)</th>\n            <th class=\"text-center\"></th>\n            <th></th>\n            <th class=\"text-center\">\n\n              <ng-template #tooltipStatusIntegracao>\n                <table>\n                  <tbody>\n                    <tr>\n                      <th><i class=\"fas fa-paper-plane text-success\"></i></th>\n                      <td class=\"text-left\">Órdenes de venta integrado en Fusion con éxito</td>\n                    </tr>\n                    <tr>\n                      <th><i class=\"fas fa-paper-plane text-warning\"></i></th>\n                      <td class=\"text-left\">Órdenes de venta no integrado en Fusion</td>\n                    </tr>\n                    <tr>\n                      <th><i class=\"fas fa-paper-plane text-danger\"></i></th>\n                      <td class=\"text-left\">Órdenes de venta con error de integración</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </ng-template>\n\n              <button\n                class=\"btn-icon-sm\"\n                [tooltip]=\"tooltipStatusIntegracao\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <i class=\"far fa-question-circle\"></i>\n              </button>\n            </th>\n            <th class=\"text-center\">\n              <ng-template #tooltipStatusPedido>\n                <table>\n                  <tbody>\n                    <tr>\n                      <th><i class=\"fas fa-user-tie text-success\"></i></th>\n                      <td class=\"text-left\">Orden de venta principal</td>\n                    </tr>\n                    <tr>\n                      <th><i class=\"fas fa-user-tie text-warning\"></i></th>\n                      <td class=\"text-left\">Orden de venta secundaria</td>\n                    </tr>\n                    <tr>\n                      <th><i class=\"fas fa-user-tie text-muted\"></i></th>\n                      <td class=\"text-left\">Orden no fragmentado</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </ng-template>\n\n              <button\n                class=\"btn-icon-sm\"\n                [tooltip]=\"tooltipStatusPedido\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <i class=\"far fa-question-circle\"></i>\n              </button>\n            </th>\n            <th>\n              <button\n                class=\"btn-icon-sm\"\n                container=\"body\"\n                placement=\"left\"\n                tooltip=\"Marcar como retira\"\n              >\n                <i class=\"far fa-question-circle\"></i>\n              </button>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of pedidos; let i = index\">\n            <!-- <td class=\"text-center\" [ngClass]=\"item?.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item?.ID_LOGI_FUSI_PEDI | number: '6.0-0'}}</td> -->\n            <td class=\"text-left\" [ngClass]=\"item?.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item?.CD_PEDI }}</td>\n            <td class=\"text-center\">{{ item?.TP_OPER}}</td>\n            <td class=\"text-center\">{{ item?.DT_PEDI | date: 'dd/MM/yyyy'}}</td>\n            <td class=\"text-truncate\">{{ item?.NM_FILI || '-' }}</td>\n            <td class=\"text-truncate\">{{ item?.NM_CLIE }}</td>\n            <td class=\"text-center\">{{ item?.CD_ROMA_FUSI || '-'  }}</td>\n            <td class=\"text-center\">\n              <span *ngIf=\"item?.DT_PRZO\">{{ item?.DT_PRZO |  date: 'dd/MM/yyyy'}}</span>\n              <span *ngIf=\"!item?.DT_PRZO\">-</span>\n            </td>\n            <td class=\"text-center\">\n              <span [tooltip] =\"item?.TT_SALD > 0 ? 'Este pedido tiene un saldo de ' + item.TT_SALD :'Este pedido no tiene saldo'\">{{( item?.TT_SALD | number: '1.3-3') || '0'}}</span>\n            </td>\n            <td class=\"font-weight-bold text-center\">\n              <span\n              *ngIf=\"item?.TT_PEDI == 0\"\n                tooltip=\"No tiene órdenes secundarias\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                -\n              </span>\n              <span\n                *ngIf=\"item?.TT_PEDI > 0\"\n                [tooltip]=\"tooltipPedidosIntegrados\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                {{ item?.TT_PEDI_INTE }}/{{ item?.TT_PEDI }}\n              </span>\n\n              <ng-template #tooltipPedidosIntegrados>\n                <table>\n                  <tbody>\n                    <tr *ngIf=\"item?.TT_PEDI_INTE > 1\">\n                      <td class=\"text-left\">{{item?.TT_PEDI_INTE}} pedidos integrados de {{item?.TT_PEDI}}</td>\n                    </tr>\n                    <tr *ngIf=\"item?.TT_PEDI_INTE == 1\">\n                      <td class=\"text-left\">{{item?.TT_PEDI_INTE}} pedido integrado de {{item?.TT_PEDI}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </ng-template>\n\n            </td>\n            <td class=\"align-middle text-center\">\n              <span tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(modalDetails, item)\">\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </span>\n            </td>\n            <td class=\"text-center\">\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Integrar\"\n                placement=\"left\"\n                [disabled]=\"item?.IN_DESM == 1\"\n                container=\"body\"\n                (click)=\"integraPedido(item)\"\n                [hidden]=\"item?.loading\">\n                <i\n                  class=\"fas fa-paper-plane\"\n                  [ngClass]=\"{\n                    'text-success': item?.DS_INTE === 'I',\n                    'text-warning': item?.DS_INTE === 'N',\n                    'text-danger': item?.DS_INTE === 'E'}\"\n                ></i>\n              </button>\n              <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item?.loading\" style=\"height: 1rem; width: 1rem;\">\n                <span class=\"sr-only\">Loading...</span>\n              </div>\n            </td>\n            <td class=\"text-center\">\n              <span  placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\">\n                  <i *ngIf=\"item?.IN_DESM == 0\" class=\"fas fa-user-tie text-muted\"></i>\n                  <i *ngIf=\"item?.IN_DESM == 1\" class=\"fas fa-user-tie text-success\"></i>\n                  <i *ngIf=\"item?.IN_DESM == 2\" class=\"fas fa-user-tie text-warning\"></i>\n                </button>\n              </span>\n            </td>\n            <td>\n              <span\n                [tooltip]=\"item.TP_OPER == 'RETIRA' ? 'Retira' : 'Marcar como retira'\"\n                placement=\"left\"\n                container=\"body\"\n              >\n                <btn-icon\n                  [icon]=\"item.retiraLoading ? 'fas fa-cog fa-spin' : 'fas fa-archive'\"\n                  [ngClass]=\"{'text-warning': item.TP_OPER == 'RETIRA'}\"\n                  [disabled]=\"item.TP_OPER == 'RETIRA' || item.IN_DESM == 1 || item.IN_ENTR == 1\"\n                  size=\"small\"\n                  (click)=\"item.TP_OPER == 'RETIRA' || item.IN_DESM == 1 || item.IN_ENTR == 1 || onMarcarRetira(item)\"\n                >\n                </btn-icon>\n                <!-- <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  [ngClass]=\"{'text-warning': item.TP_OPER == 'RETIRA'}\"\n                  [disabled]=\"item.TP_OPER == 'RETIRA' || item.IN_DESM == 1 || item.IN_ENTR == 1\"\n                  (click)=\"onMarcarRetira(item)\"\n                >\n                  <i [ngClass]=\"item.retiraLoading ? fas fa-archive\"></i>\n                </button> -->\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div>\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"Ningún informacion econtrada\"></empty-result>\n  </div>\n</app-body>\n\n\n<ng-template #modalDetails>\n  <logistica-entrega-desmembramento-detalhes\n  [pedidoSelecionado] = \"pedidoSelecionado\"\n  (close)=\"hideModal()\"\n  (reload)=\"onSearch()\"\n  >\n  </logistica-entrega-desmembramento-detalhes>\n</ng-template>\n");

/***/ }),

/***/ "9bwc":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaEntregaDesmembramentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoModule", function() { return LogisticaEntregaDesmembramentoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _desmembramento_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desmembramento-routing.module */ "/1Ba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _desmembramento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./desmembramento.component */ "evSM");
/* harmony import */ var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detalhes/detalhes.component */ "MjwS");


















let LogisticaEntregaDesmembramentoModule = class LogisticaEntregaDesmembramentoModule {
};
LogisticaEntregaDesmembramentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _desmembramento_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntregaDesmembramentoComponent"],
            _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntregaDesmembramentoDetalhesComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_1__["CountoModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _desmembramento_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogisticaEntregaDesmembramentoRoutingModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
            ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__["CurrencyMaskModule"]
        ]
    })
], LogisticaEntregaDesmembramentoModule);



/***/ }),

/***/ "EUHD":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2EvZGVzbWVtYnJhbWVudG8vZGVzbWVtYnJhbWVudG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FOez":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function() { return ConfirmModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-modal.component */ "SMoX");



// Components

let ConfirmModalService = class ConfirmModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showConfirm(type, title, message, cancelTxt, okTxt) {
        const modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            animated: false,
            ignoreBackdropClick: true,
            keyboard: false,
            class: 'confirm'
        });
        modalRef.content.type = type;
        modalRef.content.title = title;
        modalRef.content.message = message;
        if (type === 'delete') {
            modalRef.content.messageAlerts = [
                "Se eliminará toda la información relacionada.",
                "Esta acción no se puede deshacer."
            ];
        }
        if (type === 'inactivate') {
            modalRef.content.messageAlerts = [
                'Las informacion serán inactivadas.'
            ];
        }
        if (cancelTxt) {
            modalRef.content.cancelTxt = cancelTxt;
        }
        if (okTxt) {
            modalRef.content.okTxt = okTxt;
        }
        // É uma boa prática tipar o retorno.
        // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.
        return modalRef.content.confirmResult;
    }
};
ConfirmModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ConfirmModalService);



/***/ }),

/***/ "MjwS":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/detalhes/detalhes.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaEntregaDesmembramentoDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoDetalhesComponent", function() { return LogisticaEntregaDesmembramentoDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "nV8Z");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "U0fX");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _services_fusion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/fusion.service */ "H8J8");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/desmembramento.service */ "PUeC");
/* harmony import */ var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pdf.service */ "GTII");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");













let LogisticaEntregaDesmembramentoDetalhesComponent = class LogisticaEntregaDesmembramentoDetalhesComponent {
    constructor(pnotify, dateService, localeService, confirmModalService, pdfService, desmembramentoService, fusionService) {
        this.pnotify = pnotify;
        this.dateService = dateService;
        this.localeService = localeService;
        this.confirmModalService = confirmModalService;
        this.pdfService = pdfService;
        this.desmembramentoService = desmembramentoService;
        this.fusionService = fusionService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.tableConfig = {
            subtitleBorder: false,
            border: false,
            small: true,
            hover: false,
            theme: {
                color: 'write',
            }
        };
        //LOADINGS
        this.loading = false;
        //VARIAVEIS
        this.produtos = [];
        this.quantidade = 1;
        this.produtosAssociados = [];
        this.pedidos = [];
        this.pedidosAssociados = [];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.getProdutos();
        if (this.pedidoSelecionado.IN_DESM == 1) {
            this.getPedidosAssociados({ ID_REFE: this.pedidoSelecionado.ID_LOGI_FUSI_PEDI, IN_STAT: '1' });
        }
    }
    ngOnDestroy() {
    }
    onClose() {
        this.close.emit(true);
    }
    onDownload(params) {
        this.pnotify.notice('El documento PDF se generará pronto!');
        const romaneio = params['CD_ROMA'];
        this.pdfService.download('pedido-pdf', `ordenes- ${romaneio}`);
    }
    onPrint() {
        window.print();
    }
    getProdutos() {
        let params = {
            ['ID_LOGI_FUSI_PEDI']: this.pedidoSelecionado.ID_LOGI_FUSI_PEDI
        };
        this.loadingProdutos = true;
        this.desmembramentoService
            .getProdutos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingProdutos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.produtos = response.body['data'];
                this.totalProdutos = response.body['total'];
            }
            else {
                this.pnotify.notice("Ningún órdenes de venta situado");
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    onAddPedido(produtos) {
        var _a;
        // Verifica se o pedido já foi desmembrado, se foi, pega somente os materiais com saldo maior do que zero
        produtos = ((_a = this.pedidoSelecionado) === null || _a === void 0 ? void 0 : _a.IN_DESM) == '1' ? produtos === null || produtos === void 0 ? void 0 : produtos.filter(el => (el === null || el === void 0 ? void 0 : el.TT_SALD) > 0) : produtos;
        // Se não há produtos, finaliza a execução
        if (produtos.length == 0) {
            this.pnotify.notice('el pedido no tiene saldo!');
            return;
        }
        // Cria uma cópia do objeto para evitar que exista alteração de valores no objeto pai
        let _produtos = JSON.parse(JSON.stringify(produtos));
        const peso = _produtos.reduce((acc, cur) => acc += cur['TT_PROD_PESO'], 0);
        // adiciona os novos produtos ao pedido
        this.pedidos.push({
            pedidoId: produtos[0].ID_LOGI_FUSI_PEDI,
            CD_PEDI: this.pedidoSelecionado.CD_PEDI,
            TT_PESO: peso,
            produtos: _produtos
        });
        _produtos.forEach(item => {
            let saldoPeso = item.TT_PROD_PESO;
            let saldoQuantidade = item.TT_PROD;
            // Calcula o saldo disponível
            this.produtos
                .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
                .map(produto => {
                const novoSaldoQuantidade = produto.TT_SALD - saldoQuantidade;
                const novoSaldoPeso = produto.TT_SALD_PESO - saldoPeso;
                if (novoSaldoQuantidade < 0) {
                    this.pnotify.notice(`La cantidad ingresada es mayor que el saldo actual`);
                    produto['TT_SALD'] = novoSaldoQuantidade + item.TT_SALD;
                    produto['TT_SALD_PESO'] = novoSaldoPeso + item.TT_SALD_PESO;
                    item.TT_PROD = 0;
                    item.TT_PROD_PESO = 0;
                    item.TT_SALD = 0;
                    item.TT_SALD_PESO = 0;
                    return;
                }
                produto['TT_SALD'] = novoSaldoQuantidade;
                produto['TT_SALD_PESO'] = novoSaldoPeso;
            });
        });
    }
    onDesmembrar(produtos) {
        const _produtos = JSON.parse(JSON.stringify(produtos));
        // verifica se ha produto no pedido para desmembramento
        let saldo = _produtos.reduce((acc, cur) => acc += cur['TT_SALD'], 0);
        if (!saldo) {
            this.pnotify.notice('el pedido no tiene saldo!');
            return;
        }
        const quantidade = this.quantidade;
        _produtos.map(el => {
            var _a, _b, _c, _d;
            el.TT_PESO_UNIT = el.TT_PROD_PESO / el.TT_PROD;
            if (quantidade == 1) {
                el.TT_PROD = ((_a = el === null || el === void 0 ? void 0 : el.TT_SALD) !== null && _a !== void 0 ? _a : el === null || el === void 0 ? void 0 : el.TT_PROD) / quantidade;
                el.TT_PROD_PESO = ((_b = el === null || el === void 0 ? void 0 : el.TT_SALD_PESO) !== null && _b !== void 0 ? _b : el === null || el === void 0 ? void 0 : el.TT_PROD_PESO) / quantidade;
                return el;
            }
            el.TT_PROD = Math.floor(((_c = el === null || el === void 0 ? void 0 : el.TT_SALD) !== null && _c !== void 0 ? _c : el === null || el === void 0 ? void 0 : el.TT_PROD) / quantidade);
            el.TT_PROD_PESO = Math.floor(((_d = el === null || el === void 0 ? void 0 : el.TT_SALD_PESO) !== null && _d !== void 0 ? _d : el === null || el === void 0 ? void 0 : el.TT_PROD_PESO) / quantidade);
            return el;
        });
        for (let i = 0; i < quantidade; i++) {
            this.onAddPedido(_produtos);
        }
    }
    OnCalcPeso(event = null, item, pedido = null) {
        var _a, _b;
        const produtos = [];
        const pedidos = [...this.pedidos, ...this.pedidosAssociados];
        pedidos
            .map(pedido => { return pedido.produtos; })
            .forEach(_produtos => {
            produtos.push(..._produtos);
        });
        // Calcula o saldo consumido
        const saldoQuantidade = produtos
            .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
            .map(produto => produto.TT_PROD)
            .reduce((total, corrente) => total + corrente, 0);
        /* const saldoPeso = produtos
          .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
          .map(produto => produto.TT_PROD_PESO)
          .reduce((total, corrente) => total + corrente, 0) */
        // Calcula o saldo disponível
        this.produtos
            .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
            .map(produto => {
            const novoSaldoQuantidade = produto.TT_PROD - saldoQuantidade;
            const novoSaldoPeso = novoSaldoQuantidade * (produto.TT_PROD_PESO / produto.TT_PROD);
            if (novoSaldoQuantidade < 0) {
                this.pnotify.notice(`La cantidad ingresada es mayor que el saldo actual`);
                item.TT_PROD = 0;
                item.TT_PROD_PESO = 0;
                item.TT_SALD = 0;
                item.TT_SALD_PESO = 0;
                const saldoQuantidade = produtos
                    .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
                    .map(produto => produto.TT_PROD)
                    .reduce((total, corrente) => total + corrente, 0);
                const saldoPeso = produtos
                    .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
                    .map(produto => produto.TT_PROD_PESO)
                    .reduce((total, corrente) => total + corrente, 0);
                produto['TT_SALD'] = produto.TT_PROD - saldoQuantidade;
                produto['TT_SALD_PESO'] = produto.TT_PROD_PESO - saldoPeso;
                return;
            }
            produto['TT_SALD'] = novoSaldoQuantidade;
            produto['TT_SALD_PESO'] = novoSaldoPeso;
        });
        item['TT_PROD_PESO'] = item['TT_PROD'] * item['TT_PESO_UNIT'];
        // calcula o peso total do pedido
        if (pedido) {
            pedido.TT_PESO = (_b = (_a = pedido === null || pedido === void 0 ? void 0 : pedido.produtos) === null || _a === void 0 ? void 0 : _a.map(produto => parseFloat(produto.TT_PROD_PESO))) === null || _b === void 0 ? void 0 : _b.reduce((acc, cur) => acc += cur, 0);
            console.log(pedido);
        }
    }
    removePedido(index, pedido) {
        this.pedidos.splice(index, 1);
        pedido.produtos.map(el => {
            el.TT_PROD = 0;
            this.OnCalcPeso(null, el);
        });
    }
    removeProduto(indexPedido, indexProduto) {
        if (this.pedidos[indexPedido].produtos.length == 1) {
            this.pnotify.notice('Insertar al menos un producto!');
            return;
        }
        const produto = this.pedidos[indexPedido].produtos[indexProduto];
        produto.TT_PROD = 0;
        this.OnCalcPeso(null, produto);
        this.pedidos[indexPedido].produtos.splice(indexProduto, 1);
    }
    postDesmembramento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            this.loading = true;
            const promise = () => {
                this.pedidos.forEach((pedido, index) => {
                    const _pedido = JSON.parse(JSON.stringify(pedido));
                    if (!_pedido.prazoEntrega) {
                        this.pnotify.notice(`informar el tiempo de entrega del pedido ${_pedido.CD_PEDI}-${index + 1 + this.pedidosAssociados.length}`);
                        return;
                    }
                    _pedido['prazoEntrega'] = _pedido.prazoEntrega instanceof Date ? this.dateService.convertToUrlDate(_pedido.prazoEntrega) : pedido.prazoEntrega;
                    request.push(this.desmembramentoService.post(_pedido));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loading = false;
            }))
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success('Pedido guardado correctamente!');
                        this.reload.emit(true);
                        this.close.emit(true);
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    sendDesmembramento() {
        const saldoTotal = this.produtos
            .map(el => el.TT_SALD)
            .reduce((total, corrente) => total + corrente);
        if (saldoTotal > 0) {
            this.confirmChange()
                .subscribe((response) => {
                if (response != true) {
                    return;
                }
                this.postDesmembramento();
            }, (error) => {
                this.pnotify.error();
            });
            return;
        }
        this.postDesmembramento();
    }
    confirmChange() {
        return this.confirmModalService.showConfirm(null, null, 'Este pedido aún tiene saldo, de verdad quieres continuar ?', 'Cancelar', 'Continuar');
    }
    getPedidosAssociados(params) {
        this.loadingPedidosAssociados = true;
        this.fusionService
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingPedidosAssociados = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pedidosAssociados = response.body['data'];
                this.pedidosAssociados.map(pedido => {
                    this.getProdutosAssociados(pedido);
                    pedido.prazoEntrega = new Date(pedido.DT_PRZO);
                    return pedido;
                });
            }
            else {
                /* this.pnotify.notice("Ningún órdenes de venta situado") */
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getProdutosAssociados(pedido) {
        pedido['loadingProdutosAssociados'] = true;
        this.desmembramentoService
            .getProdutos({ ID_LOGI_FUSI_PEDI: pedido.ID_LOGI_FUSI_PEDI })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            pedido['loadingProdutosAssociados'] = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                let produtos = response.body['data'];
                pedido.produtos = produtos;
            }
            else {
                this.pnotify.notice("Ningún órdenes de venta situado");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    integraPedido(item) {
        item.loading = true;
        let params = {
            CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
            CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI,
        };
        this.fusionService
            .integraPedidoFusion(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            item.loading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.pnotify.success();
            if (item["DS_INTE"] == "I") {
                return;
            }
            item["DS_INTE"] = "I";
            item["DT_INTE"] = new Date();
            this.pedidoSelecionado.DS_INTE = "I";
            this.pedidoSelecionado.DT_INTE = new Date();
            this.reload.emit(true);
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onExcluirPedido(pedido) {
        this.confirmModalService.showConfirm('null', null, 'Este pedido aún tiene saldo, de verdad quieres continuar ?', 'Cancelar', 'Continuar').subscribe(accept => {
            if (accept === false) {
                return;
            }
            pedido.cancelamentoLoading = true;
            const _params = {
                "ID_LOGI_FUSI_PEDI": pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI,
                "DT_PRZO": pedido === null || pedido === void 0 ? void 0 : pedido.DT_PRZO,
                "IN_STAT": "0"
            };
            this.desmembramentoService
                .put(_params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                //pedido.cancelamentoLoading = false;
            }))
                .subscribe(response => {
                if (response.status !== 200) {
                    this.reload.emit(true);
                    return;
                }
                /* if(pedido.IN_INTE == 0){
                  this.pedidosAssociados = this.pedidosAssociados.filter(item => item?.ID_LOGI_FUSI_PEDI != pedido?.ID_LOGI_FUSI_PEDI);
                  pedido.cancelamentoLoading = false;
                  this.reload.emit(true);
                  return;
                } */
                this.fusionService
                    .integraPedidoFusion(_params)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    pedido.cancelamentoLoading = false;
                    this.reload.emit(true);
                }))
                    .subscribe(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    this.pedidosAssociados = this.pedidosAssociados.filter(item => (item === null || item === void 0 ? void 0 : item.ID_LOGI_FUSI_PEDI) != (pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI));
                    this.pnotify.success();
                }, error => {
                    pedido.cancelamentoLoading = false;
                    this.pnotify.error("No se pudo cancelar el pedido en la Fusión");
                });
            }, error => {
                this.reload.emit(true);
                this.pnotify.error();
            });
        });
    }
    onMarcarRetira(pedido) {
        pedido.retiraLoading = true;
        let _params = {
            'ID_LOGI_FUSI_PEDI': pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI,
            'TP_OPER': 'RETIRA'
        };
        this.desmembramentoService
            .put(_params)
            .subscribe(response => {
            if (response.status != 200) {
                this.reload.emit(true);
                return;
            }
            pedido.TP_OPER = 'RETIRA';
            if (pedido.DS_INTE == "N") {
                pedido.retiraLoading = false;
                this.reload.emit(true);
                return;
            }
            this.fusionService
                .integraPedidoFusion(_params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                pedido.retiraLoading = false;
                this.reload.emit(true);
            }))
                .subscribe(response => {
                if (response.status !== 200) {
                    return;
                }
            }, error => {
                this.pnotify.error("No se pudo cancelar el pedido en la Fusión");
            });
        }, error => {
            pedido.retiraLoading = false;
            this.reload.emit(true);
            this.pnotify.error("Se produjo un error al procesar la solicitud");
        });
    }
};
LogisticaEntregaDesmembramentoDetalhesComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] },
    { type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"] },
    { type: _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaDesmembramentoService"] },
    { type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaFusionService"] }
];
LogisticaEntregaDesmembramentoDetalhesComponent.propDecorators = {
    pedidoSelecionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
    reload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
};
LogisticaEntregaDesmembramentoDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-entrega-desmembramento-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"],
        src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"],
        _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaDesmembramentoService"],
        _services_fusion_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaFusionService"]])
], LogisticaEntregaDesmembramentoDetalhesComponent);



/***/ }),

/***/ "U0fX":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/detalhes/detalhes.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media print {\n  #pedido-pdf {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 15px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\nbutton[disabled] {\n  cursor: no-drop;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\n.card-indication:hover {\n  box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.15);\n  transition: 0.2s;\n}\n.button_action {\n  width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9kZXNtZW1icmFtZW50by9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBQUo7QUFDRjtBQUdBO0VBQ0UsZUFBQTtBQURGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFGRjtBQUtBO0VBQ0UsaURBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxZQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL2Rlc21lbWJyYW1lbnRvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgcHJpbnQge1xuICAjcGVkaWRvLXBkZiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxufVxuXG5idXR0b25bZGlzYWJsZWRde1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cblxudWx7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4gIFxuLmNhcmQtaW5kaWNhdGlvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggMHB4IHJnYigwIDAgMCAvIDE1JSk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5idXR0b25fYWN0aW9ue1xuICB3aWR0aDogMTEwcHg7XG59Il19 */");

/***/ }),

/***/ "evSM":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LogisticaEntregaDesmembramentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoComponent", function() { return LogisticaEntregaDesmembramentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_desmembramento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./desmembramento.component.html */ "3pdl");
/* harmony import */ var _desmembramento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desmembramento.component.scss */ "EUHD");
/* harmony import */ var _services_fusion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/fusion.service */ "H8J8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/desmembramento.service */ "PUeC");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../cadastros/filiais/services/filiais.service */ "NXOV");




// angular



// services



// ngx

// interfaces





let LogisticaEntregaDesmembramentoComponent = class LogisticaEntregaDesmembramentoComponent {
    constructor(formBuilder, activatedRoute, route, fusionService, routerService, localeService, dateService, modalService, atividadesService, filiaisService, pnotify, confirmModalService, desmembramentoService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.fusionService = fusionService;
        this.routerService = routerService;
        this.localeService = localeService;
        this.dateService = dateService;
        this.modalService = modalService;
        this.atividadesService = atividadesService;
        this.filiaisService = filiaisService;
        this.pnotify = pnotify;
        this.confirmModalService = confirmModalService;
        this.desmembramentoService = desmembramentoService;
        this.breadCrumbTree = [];
        this.pedidos = [];
        this.filiais = [];
        this.pedidoSelecionado = [];
        this.tipoOperacao = [];
        //CARDS
        this.integrados = 0;
        this.integradosEmpty = false;
        this.noIntegrados = 0;
        this.noIntegradosEmpty = false;
        this.InErros = 0;
        this.InErrosEmpty = false;
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Pagination */
        this.tipos = [
            {
                cod: '1',
                nome: 'Orden de venta principal',
            },
            {
                cod: '2',
                nome: 'Orden de venta secundaria',
            },
            {
                cod: '0',
                nome: 'Orden no fragmentado',
            },
        ];
        this.inSaldo = [
            {
                cod: '1',
                nome: 'Registros con saldo',
            },
            {
                cod: '0',
                nome: 'Registros que no tienen saldo',
            },
            {
                cod: '',
                nome: 'Todos los registros',
            },
        ];
        this.integracion = [
            {
                cod: 'I',
                nome: 'Integrado',
            },
            {
                cod: 'N',
                nome: 'No integrado',
            },
            {
                cod: 'E',
                nome: 'Con error',
            },
            {
                cod: '',
                nome: 'Todos los registros',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'Activo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inactivo',
                color: 'red',
            },
        ];
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingFiliais = false;
        this.noResult = true;
        /*loading*/
        this.tableConfig = {
            subtitleBorder: true
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getFiliais();
        this.getTipoOperacao();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            var _a, _b, _c;
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0) {
                _response['CD_FILI'] = (_response === null || _response === void 0 ? void 0 : _response.CD_FILI) ? (_a = _response === null || _response === void 0 ? void 0 : _response.CD_FILI) === null || _a === void 0 ? void 0 : _a.split(',') : [];
                _response['IN_DESM'] = (_response === null || _response === void 0 ? void 0 : _response.IN_DESM) ? (_b = _response === null || _response === void 0 ? void 0 : _response.IN_DESM) === null || _b === void 0 ? void 0 : _b.split(',') : [];
                _response['TP_OPER'] = (_response === null || _response === void 0 ? void 0 : _response.TP_OPER) ? (_c = _response === null || _response === void 0 ? void 0 : _response.TP_OPER) === null || _c === void 0 ? void 0 : _c.split(',') : [];
                this.form.patchValue(_response);
                this.getPedidos(this.getParams());
            }
            else {
                this.loading = false;
            }
        });
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService.getFiliais({ status: '1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe({
            next: response => {
                this.filiais = response.body['data'];
            },
            error: () => {
                this.pnotify.error();
            }
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            CD_PEDI: [null],
            CD_FILI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ID_LOGI_FUSI_PEDI: [null],
            DS_CLIE: [null],
            TP_OPER: [['DEMEMBRAMENTO', 'FACTURA']],
            IN_SALD: [''],
            CD_ROMA: [null],
            DS_INTE: [''],
            IN_DESM: [['1', '0']],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            TT_REGI_PAGI: [100],
            PAGI: [1],
            TIME: [(new Date()).getTime()]
        });
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        var _a;
        const submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'Gestíon de Entregas',
                routerLink: `/logistica/entrega/${submoduloId}`
            },
            {
                descricao: 'LISTA DE DESMEMBRAMIENTO'
            }
        ];
    }
    setItensPerPage(ev) {
        this.itemsPerPage = ev.itensPorPagina;
        return this.itemsPerPage;
    }
    openRegister(item) {
        const queryParams = item ? this.routerService.setBase64UrlParams({ ID_LOGI_FUSI_PEDI: item["ID_LOGI_FUSI_PEDI"] }) : {};
        this.route.navigate([`../cadastro`], {
            relativeTo: this.activatedRoute,
            queryParams: queryParams
        });
    }
    openModal(template, pedido) {
        this.pedidoSelecionado = pedido;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    /* Paginação */
    /* Paginação */
    onPageChanged(event) {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(event.page);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    /* Paginação */
    /* Paginação */
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else if (Array.isArray(_obj[prop]))
                    _params[prop] = _obj[prop].toString();
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    getTipoOperacao(params) {
        this.desmembramentoService
            .getTipoOperacao(params)
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.tipoOperacao = response.body['data'];
        }, (error) => {
        });
    }
    getPedidos(params) {
        var _a;
        (_a = this.$service) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        if (!this.loading) {
            this.loadingNavBar = true;
        }
        this.$service = this.fusionService
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.noResult = false;
                this.integrados = response.body['counters']['integrados'];
                this.noIntegrados = response.body['counters']['naoIntegrados'];
                this.InErros = response.body['counters']['comErro'];
                this.pedidos = response.body['data'];
                this.totalItems = ++response.body['total'];
                this.itemsPerPage = this.form.get('TT_REGI_PAGI').value;
            }
            else {
                this.noResult = true;
                this.pedidos = [];
                this.pnotify.notice("Ningún órdenes de venta situado");
            }
        }, (error) => {
            this.pedidos = [];
            this.noResult = true;
            this.pnotify.error();
        });
    }
    onReset() {
        this.form.reset();
        this.form.updateValueAndValidity();
        this.form.get("TT_REGI_PAGI").setValue(100);
        this.noResult = true;
        this.route.navigate([]);
        this.pedidos = [];
    }
    // Validação de formulário
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
    integraPedido(item) {
        item.loading = true;
        let params = {
            /* CD_FILI: item?.CD_FILI,
            CD_PEDI: item?.CD_PEDI, */
            ID_LOGI_FUSI_PEDI: item.ID_LOGI_FUSI_PEDI
        };
        this.fusionService
            .integraPedidoFusion(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            item.loading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.pnotify.success();
            if (item["DS_INTE"] == "I") {
                return;
            }
            this.integrados++;
            if (item["DS_INTE"] == "E") {
                this.noIntegrados--;
            }
            else if (item["DS_INTE"] == "N") {
                this.InErros--;
            }
            item["DS_INTE"] = "I";
            item["DT_INTE"] = new Date();
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onMarcarRetira(pedido) {
        pedido.retiraLoading = true;
        let _params = {
            'ID_LOGI_FUSI_PEDI': pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI,
            'TP_OPER': 'RETIRA'
        };
        this.desmembramentoService
            .put(_params)
            .subscribe(response => {
            if (response.status != 200) {
                return;
            }
            pedido.TP_OPER = 'RETIRA';
            if (pedido.IN_INTE == 0) {
                pedido.retiraLoading = false;
                return;
            }
            this.fusionService
                .integraPedidoFusion(_params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
                pedido.retiraLoading = false;
            }))
                .subscribe(response => {
                if (response.status !== 200) {
                    return;
                }
            }, error => {
                this.pnotify.error("No se pudo cancelar el pedido en la Fusión");
            });
        }, error => {
            pedido.retiraLoading = false;
            this.pnotify.error("Se produjo un error al procesar la solicitud");
        });
    }
};
LogisticaEntregaDesmembramentoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaFusionService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaFiliaisService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaDesmembramentoService"] }
];
LogisticaEntregaDesmembramentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-entrega-desmembramento',
        template: _raw_loader_desmembramento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_desmembramento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_fusion_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaFusionService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaFiliaisService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaDesmembramentoService"]])
], LogisticaEntregaDesmembramentoComponent);



/***/ }),

/***/ "nV8Z":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/desmembramento/detalhes/detalhes.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"modalDetalhes\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-0 my-auto\" >Detalles del pedido -  {{pedidoSelecionado?.CD_PEDI}}</h4>\n    <div>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm mx-3\"\n        tooltip=\"Download\"\n        container=\"body\"\n        (click)=\"onDownload(pedidoSelecionado)\"\n      >\n        <i class=\"fas fa-download\"></i>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm mr-3\"\n        tooltip=\"Imprimir\"\n        container=\"body\"\n        (click)=\"onPrint()\"\n      >\n        <i class=\"fas fa-print\"></i>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm\"\n        tooltip=\"Fechar\"\n        container=\"body\"\n        (click)=\"onClose()\"\n      >\n        <i class=\"fas fa-times\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\" id=\"pedido-pdf\" >\n    <div class=\"d-flex\">\n      <div class=\"justify-content-between col-8\">\n        <div class=\"mb-1 d-flex justify-content-between\">\n          <span class=\"d-block text-uppercase font-weight-bolder\" *ngIf=\"pedidoSelecionado?.CD_CLIE\">({{ pedidoSelecionado?.CD_CLIE }}) &nbsp; {{ pedidoSelecionado?.NM_CLIE }}</span>\n        </div>\n        <div class=\"d-block text-uppercase\">\n          <span *ngIf=\"pedidoSelecionado?.DS_ENDE\">{{ pedidoSelecionado?.DS_ENDE }}</span>\n        </div>\n        <div class=\"d-block text-uppercase mt-2\">\n          <span *ngIf=\"pedidoSelecionado?.NM_FILI\"><strong>Subsidiaria: </strong>{{ pedidoSelecionado?.NM_FILI }}</span>\n        </div>\n        <div class=\"d-block text-uppercase mt-2\">\n          <span *ngIf=\"pedidoSelecionado?.CD_ROMA_FUSI\"><strong>Romaneio: </strong>{{ pedidoSelecionado?.CD_ROMA_FUSI }}</span>\n        </div>\n        <div class=\"d-block text-uppercase mt-2\">\n          <span *ngIf=\"pedidoSelecionado?.DT_PRZO\"><strong>Plazo de entrega: </strong>{{ pedidoSelecionado?.DT_PRZO |  date: 'dd/MM/yyyy' }}</span>\n        </div>\n      </div>\n      <div class=\"justify-content-end col pr-0\">\n        <div style=\"text-align: end;\">\n          <button\n            type=\"button\"\n            class=\"btn btn-sm btn-outline-primary button_action p-2\"\n            *ngIf =\"pedidos.length > 0 && pedidoSelecionado?.IN_DESM != 2\"\n            (click)=\"sendDesmembramento()\">\n            <span>\n              <i *ngIf=\"!loading\" class=\"fas fa-save\"></i>\n              <i *ngIf=\"loading\" class=\"fas fa-cog fa-spin\"></i>\n            </span>\n            <span *ngIf=\"!loading\">Salvar</span>\n          </button>\n        </div>\n        <div style=\"text-align: end;\">\n          <button\n            type=\"button\"\n            class=\"btn btn-sm btn-outline-success button_action p-2\"\n            *ngIf =\"pedidos.length == 0 && pedidoSelecionado?.IN_DESM != 1\"\n            (click)=\"integraPedido(pedidoSelecionado)\">\n            <div *ngIf=\"!pedidoSelecionado.loading\">\n              <i class=\"fas fa-paper-plane\"></i>\n              <span>Integrar</span>\n            </div>\n            <div *ngIf=\"pedidoSelecionado.loading\">\n              <i class=\"fas fa-cog fa-spin\"></i>\n              <span>Aguarde</span>\n            </div>\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex justify-content-between mt-1\">\n      <div class=\"col p-0 card-indication\">\n        <div class=\"border rounded bg-white shadow-sm text-center w-100 p-3\">\n          <div class=\"font-weight-bolder\">\n            <div\n              class=\"font-weight-bolder\"\n              counto\n              [step]=\"30\"\n              [countTo]=\"pedidoSelecionado?.VL_NOTA_FISC\"\n              [countFrom]=\"0\"\n              [duration]=\"2\"\n              (countoChange)=\"countoValorNota = $event\">\n              {{ countoValorNota | currency:'Bs' }}\n            </div>\n          </div>\n          <div class=\"pb-2 border-bottom\">Monto de la factura</div>\n        </div>\n      </div>\n      <div class=\"col p-0 card-indication ml-4\">\n        <div class=\"border rounded bg-white shadow-sm text-center w-100 p-3\">\n          <div class=\"font-weight-bolder\">\n            <div\n              class=\"font-weight-bolder\"\n              counto\n              [step]=\"30\"\n              [countTo]=\"pedidoSelecionado?.TT_PESO\"\n              [countFrom]=\"0\"\n              [duration]=\"2\"\n              (countoChange)=\"countoTotalPeso = $event\">\n              {{ countoTotalPeso | number: '1.3-3' }}\n            </div>\n          </div>\n          <div class=\"pb-2 border-bottom\">Factura de peso total</div>\n        </div>\n      </div>\n      <div class=\"col p-0 card-indication ml-4\">\n        <div class=\"border rounded bg-white shadow-sm text-center w-100 p-3\">\n          <div class=\"font-weight-bolder\" [hidden]=\"loadingProdutos\">\n            <div\n            class=\"font-weight-bolder\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"totalProdutos\"\n            [countFrom]=\"0\"\n            [duration]=\"2\"\n            (countoChange)=\"countoTotalProdutos = $event\">\n            {{ countoTotalProdutos | number: '1.0-0' }}\n          </div>\n          </div>\n          <div class=\"pb-2 border-bottom\" [hidden]=\"loadingProdutos\">Productos totales</div>\n          <div class=\"text-right my-auto\" *ngIf=\"loadingProdutos\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <div class=\"row p-4\" *ngIf=\"loadingProdutos\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos investigando productos para ti...\">\n          </message>\n        </div>\n      </div>\n      <div class=\"justify-content-between\" [hidden] = \"produtos.length == 0\">\n        <div class=\"my-2 d-flex justify-content-between\">\n          <span class=\"d-block text-uppercase font-weight-bolder my-auto\">Productos</span>\n          <div class=\"d-flex\">\n            <input\n            id=\"quantidade\"\n            type=\"text\"\n            class=\"form-control mr-2\"\n            placeholder=\"DIGITE...\"\n            [(ngModel)]=\"quantidade\"\n            style=\"align-self: center;width: 100px;height: 28px;\"\n          >\n            <span container=\"body\" placement=\"top\" [tooltip]=\"pedidoSelecionado?.IN_PERM_DESM != 1 ? tooltipPermissaoDesmembramento : 'Desmembrar'\">\n              <button\n                *ngIf=\"pedidoSelecionado?.IN_DESM != 2\"\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger button_action\"\n                [disabled]=\"pedidoSelecionado?.DS_INTE != 'N' && pedidoSelecionado?.IN_PERM_DESM != 1 \"\n                (click)=\"onDesmembrar(produtos)\">\n                <i class=\"fas fa-clone\"></i>\n                <span>Desmembrar</span>\n              </button>\n            </span>\n\n\n            <ng-template #tooltipPermissaoDesmembramento>\n              <table>\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">No tiene permiso para dividir pedidos que ya están integrados</td>\n                  </tr>\n                </tbody>\n              </table>\n            </ng-template>\n\n          </div>\n        </div>\n\n        <div  class=\"d-flex border rounded\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfig\" class=\"table-borderless\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th class=\"text-center\">COD.</th>\n                  <th>Material</th>\n                  <th class=\"text-center\" colspan=\"2\">Quantidade</th>\n                  <th class=\"text-center\" colspan=\"2\">Saldo</th> <!-- *ngIf=\"pedidos.length > 0 || pedidosAssociados.length > 0\" -->\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of produtos; let i = index\">\n                  <td width=\"10%\" class=\"text-center\">{{ item.CD_PROD }}</td>\n                  <td width=\"50%\">{{ item.NM_PROD }}</td>\n                  <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD | number: '1.3-3' }} {{item.DS_UNID_MEDI}}</td>\n                  <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD_PESO / 1000 | number: '1.3-3' }} Tons</td>\n                  <td width=\"10%\" class=\"text-center font-weight-bolder text-success\"> <!--  *ngIf=\"pedidos.length > 0 || pedidosAssociados.length > 0\" -->\n                    {{ (item?.TT_SALD | number: '1.3-3') || (item?.TT_PROD | number: '1.3-3') }} {{item.DS_UNID_MEDI}}\n                  </td>\n                  <td width=\"10%\" class=\"text-center font-weight-bolder text-success\"> <!--  *ngIf=\"pedidos.length > 0 || pedidosAssociados.length > 0\" -->\n                    {{ (item?.TT_SALD_PESO / 1000 | number: '1.3-3') || (item?.TT_PROD | number: '1.3-3') }} Tons\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"col p-4\" *ngIf=\"loadingPedidosAssociados\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos investigando pedidos para ti...\">\n          </message>\n        </div>\n      </div>\n      <div  class=\"d-flex border rounded mt-3\" *ngFor=\"let pedido of pedidosAssociados; let i = index\" [ngClass]=\"pedido.DS_INTE == 'I' ? 'border-success' : ''\">\n        <div class=\"col p-4\" *ngIf=\"pedido.loadingProdutosAssociados\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos investigando productos para ti...\">\n            </message>\n          </div>\n        </div>\n        <div class=\"col\" [hidden]= \"pedido.loadingProdutosAssociados\">\n          <div class=\"d-flex pr-4 mx-2\">\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"!pedido?.ID_LOGI_FUSI_PEDI\">{{pedido?.CD_PEDI}}-{{i + 1}}</div>\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"pedido?.ID_LOGI_FUSI_PEDI\">{{pedido?.CD_PEDI}}</div>\n            <div class=\"col pr-0 d-flex\" style=\"justify-content: flex-end;\">\n              <span class=\"mtc-title my-auto\">\n                Plazo de entrega\n              </span>\n              <div class=\"input-group p-2\" style=\"width: 215px;\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"far fa-calendar-alt\"></i>\n                  </span>\n                </div>\n                <input\n                class=\"form-control\"\n                autocomplete=\"off\"\n                [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                placeholder=\"Escribelo...\"\n                [(ngModel)]=\"pedido.prazoEntrega\"\n              />\n              </div>\n            </div>\n            <!--\n              [icon]=\"\n                  pedido.loading ? 'fas fa-cog fa-spin' :\n                    (pedido.DS_INTE == 'I' ? 'fas fa-paper-plane text-success':\n                      (pedido.DS_INTE == 'N' ? 'fas fa-paper-plane text-warning':\n                        'fas fa-paper-plane text-danger'\n                      )\n                    )\n                \"\n             -->\n            <div class=\"my-auto pl-2\" style=\"width: 22px;\">\n              <span\n                tooltip =\"Integrar\"\n                placement=\"left\"\n                container=\"body\"\n              >\n                <btn-icon\n                [icon]=\"\n                  pedido.loading ? 'fas fa-cog fa-spin' :\n                    (pedido.DS_INTE == 'I' ? 'fas fa-paper-plane text-success':\n                      (pedido.DS_INTE == 'N' ? 'fas fa-paper-plane text-warning':\n                        'fas fa-paper-plane text-danger'\n                      )\n                    )\"\n                  [disabled]=\"pedido.TP_OPER == 'RETIRA' || pedido?.cancelamentoLoading || pedido.retiraLoading || pedido.loading\"\n                  size=\"small\"\n                  (click)=\"pedido.TP_OPER == 'RETIRA' || integraPedido(pedido)\">\n                </btn-icon>\n              </span>\n            </div>\n            <div class=\"my-auto pl-2\">\n              <span\n                [tooltip]=\"pedido.TP_OPER == 'RETIRA' ? 'Retira' : 'Marcar como retira'\"\n                placement=\"left\"\n                container=\"body\"\n              >\n              <btn-icon\n                [icon]=\"pedido.retiraLoading ? 'fas fa-cog fa-spin' : 'fas fa-archive'\"\n                [ngClass]=\"{'text-warning': pedido.TP_OPER == 'RETIRA'}\"\n                [disabled]=\"pedido?.cancelamentoLoading || pedido.retiraLoading || pedido.loading || pedido.TP_OPER == 'RETIRA' || pedido.IN_DESM == 1 || pedido.IN_ENTR == 1\"\n                size=\"small\"\n                (click)=\"pedido.TP_OPER == 'RETIRA' || onMarcarRetira(pedido)\"\n              >\n              </btn-icon>\n              </span>\n            </div>\n            <div class=\"my-auto pl-2\">\n              <btn-icon\n                [icon] = \"pedido?.cancelamentoLoading ? 'fas fa-cog fa-spin' : 'text-danger fas fa-trash'\"\n                size=\"small\"\n                tooltip =\"Excluir\"\n                [disabled]=\"pedido.IN_ENTR == 1 || pedido?.cancelamentoLoading || pedido.retiraLoading  || pedido.loading\"\n                (click)=\"pedido.IN_ENTR == 1 || onExcluirPedido(pedido)\"\n              ></btn-icon>\n            </div>\n          </div>\n          <custom-table [config]=\"tableConfig\" class=\"table-borderless\" >\n            <ng-template #thead let-thead>\n              <tr>\n                <th class=\"text-center\">COD.</th>\n                <th>Material</th>\n                <th colspan=\"2\" class=\"text-center\">Saldo</th>\n                <th class=\"text-center\">Quantidade</th>\n                <th></th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of pedido.produtos; let ip = index\">\n                <td width=\"10%\" class=\"text-center\">{{ item.CD_PROD }}</td>\n                <td width=\"45%\">{{ item.NM_PROD }}</td>\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD | number: '1.3-3' }} {{item.DS_UNID_MEDI}}</td>\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD_PESO / 1000 | number: '1.3-3' }} Tons</td>\n                <td width=\"20%\" class=\"text-center\">\n                  <input\n                    type=\"number\"\n                    class=\"form-control\"\n                    min = \"0\"\n                    [placeholder]=\"'0.000,000 ' + item?.DS_UNID_MEDI \"\n                    [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\n                    (input)=\"OnCalcPeso($event, item, pedido)\"\n                    [(ngModel)]=\"item.TT_PROD\"\n                    />\n                </td>\n                <td width=\"5%\">\n                  <btn-icon\n                  *ngIf=\"!pedido.ID_LOGI_FUSI_PEDI\"\n                  icon=\"fas fa-trash\"\n                  size=\"small\"\n                  (click)=\"removeProduto(i , ip)\"\n                >\n                </btn-icon>\n                </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <div class=\"d-flex justify-content-end mt-2\">\n            <span><strong>{{ pedido.TT_PESO / 1000  | number: '1.3-3' }} Tons</strong></span>\n          </div>\n        </div>\n      </div>\n      <div  class=\"d-flex border rounded mt-3\" *ngFor=\"let pedido of pedidos; let i = index\">\n        <div class=\"col\" [hidden] = \"loadingProdutos\">\n          <div class=\"d-flex pr-4 mx-2\">\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"pedidosAssociados.length == 0\">{{pedido?.CD_PEDI}}-{{i + 1}}</div>\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"pedidosAssociados.length > 0\">{{pedido?.CD_PEDI}}-{{pedidosAssociados.length + 1 + i}}</div>\n            <div class=\"col pr-0 d-flex\" style=\"justify-content: flex-end;\">\n              <span class=\"mtc-title my-auto\">\n                Plazo de entrega\n              </span>\n              <div class=\"input-group p-2\" style=\"width: 215px;\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"far fa-calendar-alt\"></i>\n                  </span>\n                </div>\n                <input\n                class=\"form-control\"\n                autocomplete=\"off\"\n                [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                placeholder=\"Escribelo...\"\n                [(ngModel)]=\"pedido.prazoEntrega\"\n              />\n              </div>\n            </div>\n            <div class=\"my-auto pl-2\" style=\"width: 22px;\">\n              <btn-icon\n                *ngIf=\"!pedido.ID_LOGI_FUSI_PEDI\"\n                icon=\"fas fa-trash\"\n                size=\"small\"\n                (click)=\"removePedido(i, pedido)\">\n              </btn-icon>\n            </div>\n          </div>\n          <custom-table [config]=\"tableConfig\" class=\"table-borderless\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th class=\"text-center\">COD.</th>\n                <th>Material</th>\n                <th class=\"text-center\" colspan=\"2\">Saldo</th>\n                <th class=\"text-center\">Quantidade</th>\n                <th></th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of pedido.produtos; let ip = index\">\n                <td width=\"10%\" class=\"text-center\">{{ item.CD_PROD }}</td>\n                <td width=\"45%\">{{ item.NM_PROD }}</td>\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD | number: '1.3-3' }} {{item.DS_UNID_MEDI}}</td>\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD_PESO / 1000 | number: '1.3-3' }} Tons</td>\n                <td width=\"20%\" class=\"text-center\">\n                  <input\n                    type=\"number\"\n                    class=\"form-control\"\n                    min = \"0\"\n                    [placeholder]=\"'0.000,000 ' + item?.DS_UNID_MEDI\"\n                    [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\n                    (input)=\"OnCalcPeso($event, item, pedido)\"\n                    [(ngModel)]=\"item.TT_PROD\"\n                    />\n                </td>\n                <td width=\"5%\">\n                  <btn-icon\n                  *ngIf=\"!pedido.ID_LOGI_FUSI_PEDI\"\n                  icon=\"fas fa-trash\"\n                  size=\"small\"\n                  (click)=\"removeProduto(i, ip)\"\n                >\n                </btn-icon>\n                </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <div class=\"d-flex justify-content-end mt-2\">\n            <span><strong>{{ pedido.TT_PESO / 1000  | number: '1.3-3' }} Tons</strong></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n");

/***/ })

}]);
//# sourceMappingURL=desmembramento-desmembramento-module-es2015.js.map