(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendamentos-agendamentos-module"],{

/***/ "37/I":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/drag-and-drop/drag-and-drop.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \r\n<div class=\"row m-0\">\r\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\r\n    <div class=\"dropzone px-3\" placement=\"left\">\r\n      <strong class=\"my-auto text-uppercase\" [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\r\n        {{ etapa?.descricao }}\r\n      </strong>\r\n      <div class=\"rounded-circle text-white icon-40 card m-auto\" [id]=\"etapa?.id\" draggable=\"true\" [ngClass]=\"etapa?.check == 0 ? 'bg-secondary' : 'bg-success'\">\r\n        <i [class]=\"etapa?.icone\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"mt-2\" *ngIf=\"!last\">\r\n      <div class=\"border-bottom border-secondary p-3\">\r\n        <div *ngIf=\"etapa?.check === 1\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row m-4 p-4\"></div>\r\n<div class=\"row m-4 p-4\"></div>\r\n<div class=\"row m-4 p-4\"></div> -->\r\n<div class=\"row m-4 \">\r\n  <div class=\"justify-content-between mx-4\"> \r\n    <div class=\"sobrepor\" *ngIf=\"loading\" ></div>\r\n    <strong class=\"my-auto text-uppercase text-success\" style=\"font-size: 11px;\">\r\n      Veículo\r\n    </strong>\r\n    <div class=\"rounded-circle text-white icon-40 card m-auto bg-success\" draggable=\"true\">\r\n      <i class=\"fas fa-truck\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\r\n    <div class=\"dropzone rounded-circle\" [id]=\"etapa?.id\" placement=\"left\">\r\n      <div class=\"text-center\">\r\n        <strong class=\"my-auto text-uppercase\"  [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\r\n          {{ etapa?.descricao }}\r\n        </strong>\r\n      </div>\r\n      <div class=\"dropzone-item\" *ngIf=\"etapa?.check == 0\">\r\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-secondary\" >\r\n          <i [class]=\"etapa?.icone\"></i>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"etapa?.check == 1\">\r\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-success\">\r\n          <i [class]=\"etapa?.icone\"></i>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"mt-2\" *ngIf=\"!last\">\r\n      <div class=\"border-bottom border-secondary p-3\">\r\n        <div *ngIf=\"etapa?.check === 1\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-right mt-auto\" *ngIf=\"loading\" >\r\n    <div class=\"spinner-border text-dark\"></div>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row m-4 \">\r\n  <div class=\"justify-content-between mx-4\"> \r\n    <div class=\"sobrepor\" *ngIf=\"loading\" ></div>\r\n    <strong class=\"my-auto text-uppercase text-success\" style=\"font-size: 11px;\">\r\n      Veículo\r\n    </strong>\r\n    <div class=\"rounded-circle text-white icon-40 card m-auto bg-success\" draggable=\"true\">\r\n      <i class=\"fas fa-truck\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\r\n    <div class=\"dropzone rounded-circle\" [id]=\"etapa?.id\" placement=\"left\">\r\n      <div class=\"text-center\">\r\n        <strong class=\"my-auto text-uppercase\"  [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\r\n          {{ etapa?.descricao }}\r\n        </strong>\r\n      </div>\r\n      <div class=\"dropzone-item\" *ngIf=\"etapa?.check == 0\">\r\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-secondary\" >\r\n          <i [class]=\"etapa?.icone\"></i>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"etapa?.check == 1\">\r\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-success\">\r\n          <i [class]=\"etapa?.icone\"></i>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"mt-2\" *ngIf=\"!last\">\r\n      <div class=\"border-bottom border-secondary p-3\">\r\n        <div *ngIf=\"etapa?.check === 1\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-right mt-auto\" *ngIf=\"loading\" >\r\n    <div class=\"spinner-border text-dark\"></div>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row m-4 \">\r\n  <div class=\"justify-content-between mx-4\"> \r\n    <div class=\"sobrepor\" *ngIf=\"loading\" ></div>\r\n    <strong class=\"my-auto text-uppercase text-success\" style=\"font-size: 11px;\">\r\n      Veículo\r\n    </strong>\r\n    <div class=\"rounded-circle text-white icon-40 card m-auto bg-success\" draggable=\"true\">\r\n      <i class=\"fas fa-truck\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\r\n    <div class=\"dropzone rounded-circle\" [id]=\"etapa?.id\" placement=\"left\">\r\n      <div class=\"text-center\">\r\n        <strong class=\"my-auto text-uppercase\"  [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\r\n          {{ etapa?.descricao }}\r\n        </strong>\r\n      </div>\r\n      <div class=\"dropzone-item\" *ngIf=\"etapa?.check == 0\">\r\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-secondary\" >\r\n          <i [class]=\"etapa?.icone\"></i>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"etapa?.check == 1\">\r\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-success\">\r\n          <i [class]=\"etapa?.icone\"></i>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"mt-2\" *ngIf=\"!last\">\r\n      <div class=\"border-bottom border-secondary p-3\">\r\n        <div *ngIf=\"etapa?.check === 1\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-right mt-auto\" *ngIf=\"loading\" >\r\n    <div class=\"spinner-border text-dark\"></div>\r\n  </div>\r\n</div>\r\n<hr>");

/***/ }),

/***/ "3Hsd":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/lista/lista.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"AGENDAMENTOS\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2\">\r\n              <label for=\"placa\">Placa</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"placa\"\r\n                formControlName=\"PLAC\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label for=\"NM_MOTO\">Motorista</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_MOTO\"\r\n                formControlName=\"NM_MOTO\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"filiais\">Filial</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"filiais\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingFiliais\"\r\n                labelForId=\"ID_LOGI_FILI\"\r\n                bindLabel=\"NM_FILI\"\r\n                bindValue=\"ID_LOGI_FILI\"\r\n                id=\"ID_LOGI_FILI\"\r\n                formControlName=\"ID_LOGI_FILI\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"tiposCircuito\">Tipo de Circuito</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tiposCircuito\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingTiposCircuito\"\r\n              labelForId=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n              bindLabel=\"NM_CIRC_TIPO\"\r\n              bindValue=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n              id=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n              formControlName=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n              >\r\n            </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 \">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              (keydown.enter)=\"onFilter()\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-1 \">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID</th>\r\n              <th scope=\"col\" >Data</th>\r\n              <th scope=\"col\" >Veículo</th>\r\n              <th scope=\"col\" >Tipo Circuito</th>\r\n              <th scope=\"col\" >Filial</th>\r\n              <th scope=\"col\" >Motorista</th>\r\n              <th scope=\"col\" >Transportadora</th>\r\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let agendamento of agendamentos\"  [class.table-active]=\"agendamento?.ID_LOGI_YMS_ETAP == agendamentoSelecionada?.ID_LOGI_ENMA_FHNC_OCPR && showDetailPanel\">\r\n              <td  [ngClass]=\"agendamento.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{agendamento.ID_LOGI_YMS_AGEN }}\r\n              </td>\r\n              <td >{{ agendamento.DT_INIC_PREV | date: 'dd/MM/yyyy'}}</td>\r\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\r\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\r\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\r\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\r\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" [tooltip]=\"agendamento.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(agendamento)\">\r\n                    <i [ngClass]=\"agendamento.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', agendamento.ID_LOGI_YMS_ETAP]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(agendamento)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Histórico de alteração\">\r\n        <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr>\r\n              <td class=\"text-center\" *ngIf=\"agendamentoSelecionada?.DT_INCL != null && agendamentoSelecionada?.DT_ATUA == null \">{{ agendamentoSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td class=\"text-center\" *ngIf=\"agendamentoSelecionada?.DT_INCL != null && agendamentoSelecionada?.DT_ATUA != null \">{{ agendamentoSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td>{{ agendamentoSelecionada?.NM_USUA | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "A1tM":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/modais/notas-fiscais/notas-fiscais.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosModaisNotasFiscaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModaisNotasFiscaisComponent", function() { return LogisticaYmsAgendamentosModaisNotasFiscaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notas-fiscais.component.html */ "ldgx");
/* harmony import */ var _notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas-fiscais.component.scss */ "i7iJ");
/* harmony import */ var _entrada_materiais_notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../entrada-materiais/notas-fiscais/services/notas-fiscais.service */ "81bo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let LogisticaYmsAgendamentosModaisNotasFiscaisComponent = class LogisticaYmsAgendamentosModaisNotasFiscaisComponent {
    constructor(formBuilder, notasFiscaisService) {
        this.formBuilder = formBuilder;
        this.notasFiscaisService = notasFiscaisService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.loading = false;
        this.noNotasFiscais = true;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        /* Pagination */
        this.notasFiscais = [];
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            buscarPor: ['NR_NOTA_FISC'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_MATE: [null],
            NR_NOTA_FISC: [null],
            NM_MATE: [null],
            DS_LOTE: [null],
            TT_MATE_ORIG: [null],
            NM_FORN: [null],
            NM_EMPR: [null],
            DS_UNID_MEDI: [null],
            PAGI: 1,
            IN_STAT: ['1'],
            TT_REGI_PAGI: [this.itemsPerPage],
        });
    }
    getNotasFiscais() {
        var _a, _b;
        const buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
        const pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa;
        }
        params['PAGI'] = this.form.get('PAGI').value;
        params['TT_REGI_PAGI'] = 100;
        this.loading = true;
        this.notasFiscaisService
            .getNotasFiscais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.notasFiscais = response['body']['data'];
                this.totalItems = response.body['total'];
                this.noNotasFiscais = false;
            }
            else {
                this.notasFiscais = [];
                this.noNotasFiscais = true;
            }
        }, (error) => {
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.getNotasFiscais();
    }
    onSelect(nota) {
        this.select.emit(nota);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
};
LogisticaYmsAgendamentosModaisNotasFiscaisComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _entrada_materiais_notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisNotasFiscaisService"] }
];
LogisticaYmsAgendamentosModaisNotasFiscaisComponent.propDecorators = {
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
};
LogisticaYmsAgendamentosModaisNotasFiscaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-agendamentos-modais-notas-fiscais',
        template: _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _entrada_materiais_notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisNotasFiscaisService"]])
], LogisticaYmsAgendamentosModaisNotasFiscaisComponent);



/***/ }),

/***/ "F9MH":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/services/agendamentos.service.ts ***!
  \*************************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosService", function() { return LogisticaYmsAgendamentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsAgendamentosService = class LogisticaYmsAgendamentosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getAgendamentos(params) {
        return this.http.get(`${this.API}/logistica/yms/agendamentos`, {
            params: params,
            observe: 'response',
        });
    }
    getAgendamento(id) {
        return this.http.get(`${this.API}/logistica/yms/agendamentos/${id}`, {
            observe: 'response',
        });
    }
    postAgendamentos(etapas) {
        return this.http.post(`${this.API}/logistica/yms/agendamentos`, etapas, {
            observe: 'response',
        });
    }
    postMateriais(materiais) {
        return this.http.post(`${this.API}/logistica/yms/agendamentos/materiais`, materiais, {
            observe: 'response',
        });
    }
    getMateriais(params) {
        return this.http.get(`${this.API}/common/v2/materiais`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaYmsAgendamentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsAgendamentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsAgendamentosService);



/***/ }),

/***/ "HrOm":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/modais/veiculos/veiculos.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4>Pesquisa de Veículos</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"IN_STAT\">Situação</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"IN_STAT\"\r\n          >\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n            <option value=\"\">Exibir Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cdItem\">BUSCAR POR</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"buscarPor\"\r\n          >\r\n            <option value=\"ID_LOGI_VEIC\">ID</option>\r\n            <option value=\"PLAC\" selected>Placa</option>\r\n            <option value=\"NM_MOTO\">Motorista</option>\r\n            <option value=\"NM_TRAN\">Transportadora</option>\r\n            <option value=\"NM_VEIC_TIPO\">Tipo de Veículo</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-6\">\r\n          <label>TERMO DE PESQUISA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"pesquisa\"\r\n              >\r\n              <div class=\"input-group-append\">\r\n                <span \r\n                  [tooltip]=\"form.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\"\r\n                >\r\n                  <button\r\n                  style=\"height: 25px;\"\r\n                    [disabled]=\"form.valid == false\"\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getVeiculos()\"\r\n                    >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n  <custom-table *ngIf=\"!noVeiculos\" class=\"text-center\">\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th>ID </th>\r\n        <th>Placa</th>\r\n        <th>Tipo de Veículo</th>\r\n        <th>Nome Motorista</th>\r\n        <th>Transportadora</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let veiculo of veiculos\">\r\n        <td >{{ veiculo.ID_LOGI_VEIC }}</td>\r\n        <td>{{ veiculo.PLAC }}</td>\r\n        <td>{{ veiculo.NM_VEIC_TIPO }}</td>\r\n        <td>{{ veiculo.NM_MOTO }}</td>\r\n        <td>{{ veiculo.NM_TRAN }}</td>\r\n        <td>\r\n          <button\r\n            class=\"btn-icon-sm\"\r\n            tooltip=\"Salvar Informações\"\r\n            container=\"body\"\r\n            (click)=\"onSelect(veiculo)\"\r\n          >\r\n            <i class=\"far fa-save\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n  <div *ngIf=\"totalItems > itemsPerPage\" >\r\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "IZvq":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/modais/materiais/materiais.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvbWF0ZXJpYWlzL21hdGVyaWFpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hZ2VuZGFtZW50b3MvbW9kYWlzL21hdGVyaWFpcy9tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25bZGlzYWJsZWRde1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufSJdfQ== */");

/***/ }),

/***/ "JZwn":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/agendamentos.module.ts ***!
  \***************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModule", function() { return LogisticaYmsAgendamentosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _cadastros_veiculos_veiculos_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../cadastros/veiculos/veiculos.module */ "O9Ya");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "SzE3");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "MZzh");
/* harmony import */ var _agendamentos_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./agendamentos-routing.module */ "ViSt");
/* harmony import */ var _modais_veiculos_veiculos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modais/veiculos/veiculos.component */ "QGxU");
/* harmony import */ var _modais_materiais_materiais_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modais/materiais/materiais.component */ "rRVE");
/* harmony import */ var _modais_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modais/notas-fiscais/notas-fiscais.component */ "A1tM");
/* harmony import */ var _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drag-and-drop/drag-and-drop.component */ "uuP1");























let LogisticaYmsAgendamentosModule = class LogisticaYmsAgendamentosModule {
};
LogisticaYmsAgendamentosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaYmsAgendamentosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaYmsAgendamentosCadastroComponent"],
            _modais_veiculos_veiculos_component__WEBPACK_IMPORTED_MODULE_19__["LogisticaYmsAgendamentosModaisVeiculosComponent"],
            _modais_materiais_materiais_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaYmsAgendamentosModaisMateriaisComponent"],
            _modais_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaYmsAgendamentosModaisNotasFiscaisComponent"],
            _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaYmsAgendamentosDragAndDropComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__["TextMaskModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_13__["ModuleWrapperModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_3__["NgBrazil"],
            _agendamentos_routing_module__WEBPACK_IMPORTED_MODULE_18__["LogisticaYmsAgendamentosRoutingModule"],
            _cadastros_veiculos_veiculos_module__WEBPACK_IMPORTED_MODULE_1__["LogisticaVeiculosModule"]
        ]
    })
], LogisticaYmsAgendamentosModule);



/***/ }),

/***/ "LpYa":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/cadastro/cadastro.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Agendamentos\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postAgendamentos()\"\r\n    >\r\n    Avançar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"sobrepor\" *ngIf=\"sobrepor\"></div>\r\n      <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n        <div class=\"mtc-title\">Dados do Agendamento</div>\r\n        <div class=\"form-row \">\r\n          <div class=\"form-group col-md-8\">\r\n            <label for=\"DS_AGEN\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_AGEN\"\r\n              formControlName=\"DS_AGEN\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('DS_AGEN') + ' ' + onFieldRequired('DS_AGEN')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_AGEN')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-4 \">\r\n            <label for=\"DT_INIC\">Previsão de chegada</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n              </div>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"DT_INIC_PREV\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Selecione...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC_PREV\"\r\n                [ngClass]=\"onFieldError('DT_INIC_PREV') + ' ' + onFieldRequired('DT_INIC_PREV')\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('DT_INIC_PREV')\" message=\"Data prevista de chegada é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row \">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"filiais\">Filial</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"filiais\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingFiliais\"\r\n              labelForId=\"ID_LOGI_FILI\"\r\n              bindLabel=\"NM_FILI\"\r\n              bindValue=\"ID_LOGI_FILI\"\r\n              id=\"ID_LOGI_FILI\"\r\n              formControlName=\"ID_LOGI_FILI\"\r\n              [ngClass]=\"onFieldError('ID_LOGI_FILI') + ' ' + onFieldRequired('ID_LOGI_FILI')\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_FILI')\" message=\"Filial é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tiposCircuito\">Tipo de Circuito</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tiposCircuito\"\r\n            [virtualScroll]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            [loading]=\"loadingTiposCircuito\"\r\n            labelForId=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n            bindLabel=\"NM_CIRC_TIPO\"\r\n            bindValue=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n            id=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n            formControlName=\"ID_LOGI_YMS_CIRC_TIPO\"\r\n            [ngClass]=\"onFieldError('ID_LOGI_YMS_CIRC_TIPO') + ' ' + onFieldRequired('ID_LOGI_YMS_CIRC_TIPO')\"\r\n            >\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_YMS_CIRC_TIPO')\" message=\"Tipo de circuito é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <fieldset class=\"border-top pt-2 mt-4\">\r\n          <legend \r\n          class=\"text-center mb-0\"\r\n          style=\"font-size: larger; width: auto;\">Dados do Veículo</legend>\r\n          <div class=\"form-row \">\r\n            <div class=\"form-group col-md-6 \">\r\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                <label class=\"my-auto\" for=\"PLAC\">Placa</label>\r\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" >\r\n                  <a\r\n                    class=\"text-primary\"\r\n                    href=\"javascript:void(0)\"\r\n                    (click)=\"openModal(modalVeiculos)\">\r\n                    <strong *ngIf=\"!this.form.get('PLAC').value\">Selecionar</strong>\r\n                    <strong *ngIf=\"this.form.get('PLAC').value\">Trocar</strong>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"PLAC\"\r\n                formControlName=\"PLAC\"\r\n                placeholder=\"Selecione...\"\r\n                [ngClass]=\"onFieldError('PLAC') + ' ' + onFieldRequired('PLAC')\"\r\n              />\r\n              <invalid-form-control [show]=\"onFieldInvalid('PLAC')\" message=\"Veículo é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                <label class=\"my-auto\" for=\"ID_LOGI_VEIC_TIPO\">Tipo de Veículo</label>\r\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"!this.form.get('ID_LOGI_VEIC_TIPO').value && this.form.get('PLAC').value\">\r\n                  <a\r\n                    class=\"text-primary\"\r\n                    href=\"javascript:void(0)\"\r\n                    [routerLink]=\"[getLinkAddTipoVeiculo()]\"\r\n                    target=\"_blank\">\r\n                    <strong>Adicionar</strong>\r\n                  </a>\r\n                  <span class=\"mx-2\">|</span>\r\n                  <btn-icon\r\n                  icon=\"fas fa-redo-alt\"\r\n                  size=\"small\"\r\n                  class=\"mr-2\"\r\n                  tooltip=\"Recarregar\"\r\n                  (click)=\"onReloadContatos()\">\r\n                </btn-icon>\r\n                </div>\r\n              </div>\r\n              <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_VEIC_TIPO\"\r\n              readonly\r\n              formControlName=\"NM_VEIC_TIPO\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldError('NM_VEIC_TIPO') + ' ' + onFieldRequired('NM_VEIC_TIPO')\"\r\n            />\r\n              <invalid-form-control [show]=\"onFieldInvalid('NM_VEIC_TIPO')\" message=\"Tipo de veículo é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row \">\r\n            <div class=\"form-group col-md \">\r\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                <label class=\"my-auto\" for=\"NM_MOTO\">Motorista</label>\r\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\"  *ngIf=\"this.form.get('PLAC').value\">\r\n                  <a\r\n                    class=\"text-primary\"\r\n                    href=\"javascript:void(0)\"\r\n                    (click)=\"openModal(modalMotoristas)\">\r\n                    <strong *ngIf=\"this.form.get('NM_MOTO').value\">Trocar</strong>\r\n                    <strong *ngIf=\"!this.form.get('NM_MOTO').value\">Selecionar</strong>\r\n                  </a>\r\n                  <span class=\"mx-2\" *ngIf=\"this.form.get('NM_MOTO').value\">|</span>\r\n                  <a\r\n                    class=\"text-secondary\"\r\n                    href=\"javascript:void(0)\"\r\n                    (click)=\"onDetalhesMotorista()\"\r\n                    *ngIf=\"this.form.get('NM_MOTO').value\">\r\n                    <strong>Detalhes</strong>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_MOTO\"\r\n                formControlName=\"NM_MOTO\"\r\n                readonly\r\n                placeholder=\"Selecione...\"\r\n                [ngClass]=\"onFieldError('NM_MOTO') + ' ' + onFieldRequired('NM_MOTO')\"\r\n              />\r\n              <invalid-form-control [show]=\"onFieldInvalid('NM_MOTO')\" message=\"Motorista é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row \">\r\n            <div class=\"form-group col-md \">\r\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                <label class=\"my-auto\" for=\"NM_TRAN\">Transportadora</label>\r\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"this.form.get('PLAC').value\" >\r\n                  <a\r\n                    class=\"text-primary\"\r\n                    href=\"javascript:void(0)\"\r\n                    (click)=\"openModal(modalTransportadoras)\">\r\n                    <strong *ngIf=\"this.form.get('NM_TRAN').value\">Trocar</strong>\r\n                    <strong *ngIf=\"!this.form.get('NM_TRAN').value\">Selecionar</strong>\r\n                  </a>\r\n                  <span class=\"mx-2\" *ngIf=\"this.form.get('NM_TRAN').value\">|</span>\r\n                  <a\r\n                    class=\"text-secondary\"\r\n                    href=\"javascript:void(0)\"\r\n                    (click)=\"onDetalhesTransportadora()\"\r\n                    *ngIf=\"this.form.get('NM_TRAN').value\">\r\n                    <strong>Detalhes</strong>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_TRAN\"\r\n                formControlName=\"NM_TRAN\"\r\n                readonly\r\n                placeholder=\"Selecione...\"\r\n                [ngClass]=\"onFieldError('NM_TRAN') + ' ' + onFieldRequired('NM_TRAN')\"\r\n              />\r\n              <invalid-form-control [show]=\"onFieldInvalid('NM_TRAN')\" message=\"Transportadora é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        <fieldset class=\"border-top pt-2 mt-4\">\r\n          <legend \r\n          class=\"text-center mb-0\"\r\n          style=\"font-size: larger; width: auto;\">Materiais</legend>\r\n          <div class=\"row\" *ngIf=\"loadingMateriais\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-cog fa-spin\"\r\n                text=\"Estamos pesquisando os materiais para você...\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n          <div formArrayName=\"materiais\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n                <div class=\"mtc-title\"></div>\r\n                <div>\r\n                  <a\r\n                    class=\"text-secondary\"\r\n                    (click)=\"onAddMaterial()\"\r\n                    href=\"javascript:void(0)\">\r\n                    <b>Adicionar</b>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\"  *ngFor=\"let item of formMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n              <div class=\"form-group col mb-0\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-3 \">\r\n                    <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                      <label class=\"my-auto\" for=\"NR_NOTA_FISC\">Nota Fiscal</label>\r\n                      <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                        <a\r\n                          class=\"text-primary\"\r\n                          href=\"javascript:void(0)\"\r\n                          (click)=\"openModal(modalNotasFiscais, i)\">\r\n                          <strong>Selecionar</strong>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"NR_NOTA_FISC\"\r\n                      formControlName=\"NR_NOTA_FISC\"\r\n                      placeholder=\"Digite...\"\r\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'NR_NOTA_FISC') + ' ' + onNestedFieldRequired('materiais', i, 'NR_NOTA_FISC')\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group col-md-5 \">\r\n                    <label for=\"NR_PEDI\">Pedido</label>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Digite...\"\r\n                      id=\"NR_PEDI\"\r\n                      formControlName=\"NR_PEDI\"\r\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'NR_PEDI') + ' ' + onNestedFieldRequired('materiais', i, 'NR_PEDI')\">\r\n                  </div>\r\n                  <div class=\"form-group col-md-3 \">\r\n                    <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\r\n                    <select \r\n                    class=\"form-control custom-select\"\r\n                    id=\"DS_UNID_MEDI\"\r\n                    formControlName=\"DS_UNID_MEDI\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'DS_UNID_MEDI') + ' ' + onNestedFieldRequired('materiais', i, 'DS_UNID_MEDI')\"\r\n                  >\r\n                    <option >KG</option>\r\n                    <option >TON</option>\r\n                    <option >PC</option>\r\n                    <option >UN</option>\r\n                  </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-3 \">\r\n                    <label for=\"TT_MATE\">Quantidade</label>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"TT_MATE\"\r\n                      formControlName=\"TT_MATE\"\r\n                      currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\r\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE')\">\r\n                  </div>\r\n                  <div class=\"form-group col-md-8 \">\r\n                    <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                      <label class=\"my-auto\" for=\"NM_MATE\">Material</label>\r\n                      <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                        <a\r\n                          class=\"text-primary\"\r\n                          href=\"javascript:void(0)\"\r\n                          (click)=\"openModal(modalMateriais, i)\">\r\n                          <strong>Selecionar</strong>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"NM_MATE\"\r\n                      formControlName=\"NM_MATE\"\r\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'NM_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'NM_MATE')\">\r\n                  </div>\r\n                  <div class=\"col-1 my-auto pt-3 d-flex justify-content-center\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn-icon\"\r\n                      (click)=\"onDeleteMaterial(i)\">\r\n                      <i class=\"fas fa-trash\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <hr class=\"w-100\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        <div class=\"row \">\r\n          <div class=\"form-group col mb-0\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-block btn-outline-secondary mt-auto\"\r\n              (click)=\"onSearchTime()\"\r\n              [disabled]=\"loadingCalculo\">\r\n              <div *ngIf=\"!loadingCalculo\">\r\n                <i class=\"fas fa-search\"></i>\r\n                <span>Buscar horários disponíveis</span>\r\n              </div>\r\n              <div *ngIf=\"loadingCalculo\">\r\n                <i class=\"fas fa-cog fa-spin\"></i>\r\n                <span>Aguarde</span>\r\n              </div>\r\n            </button>\r\n          </div> \r\n        </div>\r\n        <div class=\"row\" *ngIf=\"loadingCalculo\" >\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-cog fa-spin\"\r\n              text=\"Estamos pesquisando os horários disponíveis para você...\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-auto\">\r\n          <div class=\"form-group col-2 mb-0\">\r\n            <button \r\n              type=\"button\" \r\n              class=\"btn btn-block btn-outline-secondary mt-2 p-2\"\r\n              (click)=\"onSetTime($event)\"\r\n              >\r\n              <span aria-hidden=\"true\">\r\n              <i class=\"fas fa-clock\"></i>\r\n              </span>12:00\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div> -->\r\n      </form>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row\"  *ngIf=\"noCircuito\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-file\"\r\n            text=\"Preecha os campos ao lado para que possamos montar o seu circuito\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div id=\"scrollDetalhes\" class=\"d-flex\">\r\n        <div class=\"row w-100\">\r\n          <div class=\"col-6\">\r\n            <div class=\"mtc-title\">Dados do Circuito</div>\r\n            <div *ngFor=\"let etapa of circuitos; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\r\n              <div class=\"d-flex w-100\" [tooltip]=\"etapa?.descricao\" placement=\"left\">\r\n                <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"etapa?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\r\n                  <i [class]=\"etapa?.icone\"></i>\r\n                </div>\r\n                <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"etapa?.check == 1 ? 'text-primary' : ''\">\r\n                  {{ etapa?.descricao }}\r\n                </strong>\r\n              </div>\r\n              <div class=\"my-1\" *ngIf=\"!last\">\r\n                <div class=\"ml-1\">\r\n                  <div class=\"border-left border-secondary ml-3 p-2\">\r\n                    <div *ngIf=\"etapa?.check === 1\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 text-right\">\r\n            <button\r\n            type=\"button\"\r\n            class=\"btn-icon-sm mx-3\"\r\n            tooltip=\"Download\"\r\n            container=\"body\"\r\n            (click)=\"onDownload()\"\r\n            [disabled] = \"loadingMateriais\"\r\n          >\r\n            <i class=\"far fa-save\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn-icon-sm mr-3\"\r\n            tooltip=\"Imprimir\"\r\n            container=\"body\"\r\n            [disabled] = \"loadingMateriais\" \r\n            (click)=\"onPrint()\"\r\n          >\r\n            <i class=\"fas fa-print\"></i>\r\n          </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <ng-template #modalVeiculos>\r\n    <logistica-yms-agendamentos-modais-veiculos\r\n    (select)=\"onVeiculo($event)\"\r\n    (close)=\"modalRef.hide()\"\r\n    >\r\n    </logistica-yms-agendamentos-modais-veiculos>\r\n  </ng-template>\r\n  <ng-template #modalMotoristas>\r\n    <logistica-veiculos-modais-motoristas\r\n      (select)=\"onMotorista($event)\"\r\n      (close)=\"modalRef.hide()\"\r\n    >\r\n    </logistica-veiculos-modais-motoristas>\r\n  </ng-template>\r\n  <ng-template #modalTransportadoras>\r\n    <logistica-veiculos-modais-transportadoras\r\n      (select)=\"onTransportadora($event)\"\r\n      (close)=\"modalRef.hide()\"\r\n    >\r\n    </logistica-veiculos-modais-transportadoras>\r\n  </ng-template>\r\n  <ng-template #modalMateriais>\r\n    <logistica-yms-agendamentos-modais-materiais\r\n    (select)=\"onMaterial($event)\"\r\n    (close)=\"modalRef.hide()\"\r\n    >\r\n    </logistica-yms-agendamentos-modais-materiais>\r\n  </ng-template>\r\n  <ng-template #modalNotasFiscais>\r\n    <logistica-yms-agendamentos-modais-notas-fiscais\r\n    (select)=\"onNotasFiscais($event)\"\r\n    (close)=\"modalRef.hide()\"\r\n    >\r\n    </logistica-yms-agendamentos-modais-notas-fiscais>\r\n  </ng-template>\r\n</app-body>");

/***/ }),

/***/ "MZzh":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/cadastro/cadastro.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosCadastroComponent", function() { return LogisticaYmsAgendamentosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "LpYa");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "ua4e");
/* harmony import */ var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/pdf.service */ "GTII");
/* harmony import */ var _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../tipos-circuito/services/tipos-circuito.service */ "j4Bn");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../cadastros/filiais/services/filiais.service */ "NXOV");
/* harmony import */ var _cadastros_tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../cadastros/tipo-veiculo/services/tipo-veiculo.service */ "G4PK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../cadastros/veiculos/services/veiculo.service */ "3ocw");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/agendamentos.service */ "F9MH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_20__);









//Services



//Bootstrap


//Angular



//rxjs




let LogisticaYmsAgendamentosCadastroComponent = class LogisticaYmsAgendamentosCadastroComponent {
    /* Pagination */
    constructor(formBuilder, pnotify, activatedRoute, router, localeService, agendamentosService, titleService, pdfService, modalService, atividadesService, veiculoService, tipoVeiculoService, filiaisService, tiposCircuitoService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localeService = localeService;
        this.agendamentosService = agendamentosService;
        this.titleService = titleService;
        this.pdfService = pdfService;
        this.modalService = modalService;
        this.atividadesService = atividadesService;
        this.veiculoService = veiculoService;
        this.tipoVeiculoService = tipoVeiculoService;
        this.filiaisService = filiaisService;
        this.tiposCircuitoService = tiposCircuitoService;
        this.noCircuito = true;
        this.sobrepor = false;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.noVeiculos = true;
        this.loading = false;
        this.loadingNavBar = false;
        this.loadingCalculo = false;
        this.loadingMateriais = false;
        this.circuitos = [
            {
                id: 1,
                descricao: 'Portaria',
                icone: 'fas fa-portrait',
                check: 1
            },
            {
                id: 2,
                descricao: 'Balança',
                icone: 'fas fa-balance-scale-left',
                check: 0
            },
            {
                id: 3,
                descricao: 'Estacionamento',
                icone: 'fas fa-sign',
                check: 0
            },
            {
                id: 4,
                descricao: 'Galpão 2',
                icone: 'fas fa-warehouse',
                check: 0
            },
            {
                id: 5,
                descricao: 'Galpão 27',
                icone: 'fas fa-warehouse',
                check: 0
            }, {
                id: 6,
                descricao: 'Balança',
                icone: 'fas fa-balance-scale-left',
                check: 0
            },
            {
                id: 7,
                descricao: 'Finalizado',
                icone: 'fas fa-check',
                check: 0
            }
        ];
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.totalItemsMaterial = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_12__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getTipoVeiculo();
        this.getFiliais();
        this.getTiposCircuito();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id')) {
            this.getAgendamento(_params['id']);
        }
        else {
            this.onAddMaterial();
        }
    }
    getLinkAddTipoVeiculo() {
        return `/logistica/cadastros/veiculos/${this.form.value.ID_LOGI_VEIC}`;
    }
    onReloadTipoVeiculo() {
        if (this.loadingTipoVeiculo === false) {
            this.getTipoVeiculo(this.form.value.ID_LOGI_VEIC);
        }
    }
    onSobrepor() {
        this.sobrepor == true ? false : true;
    }
    onVeiculo(veiculo) {
        this.form.patchValue(veiculo);
        this.form.controls.NM_TRAN.reset();
        this.form.controls.NM_TRAN.updateValueAndValidity();
        this.form.controls.NM_MOTO.reset();
        this.form.controls.NM_MOTO.updateValueAndValidity();
        if (!veiculo.ID_LOGI_VEIC_TIPO) {
            this.pnotify.notice('Esse Veículo não possui um tipo cadastrado!');
        }
        if (!veiculo.ID_LOGI_TRAN) {
            this.form.controls.NM_TRAN.enable();
            this.form.controls.NM_TRAN.markAsTouched();
        }
        if (!veiculo.ID_LOGI_MOTO) {
            this.form.controls.NM_MOTO.enable();
            this.form.controls.NM_MOTO.markAsTouched();
        }
    }
    onTransportadora(transportadora) {
        this.form.patchValue(transportadora);
    }
    onMotorista(motorista) {
        this.form.patchValue(motorista);
    }
    onMaterial(material) {
        const fg = this.form.get('materiais');
        // fg.controls[this.index].patchValue(material);
        fg.controls[this.index].get('NM_MATE').patchValue(material.NM_MATE);
        fg.controls[this.index].get('UUID_MATE').patchValue(material.ID);
        fg.controls[this.index].get('ID_MATE').patchValue(material.ID_MATE);
    }
    openModal(template, index) {
        this.index = index;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    onSearchTime() {
        const newData = new Date();
        if (this.form.valid == false) {
            this.pnotify.notice('Preencha o formulário');
            return;
        }
        if (this.form.get('DT_INIC_PREV').value < newData) {
            this.pnotify.notice('Favor inserir uma data maior que a data atual');
            this.form.controls.DT_INIC_PREV.markAsTouched();
            return;
        }
        if (this.formMateriais.valid == false) {
            this.pnotify.notice('Informe os dados dos materiais');
            return;
        }
        //Fazer a consulta dos horários disponiveis //
    }
    onDownload(params) {
        this.pnotify.notice('Documento PDF será gerado em breve!');
        const _id = params['ID_LOGI_YMS_AGEN'];
        this.pdfService.download('agendamento-pdf', `Agendamento - ${_id}`);
    }
    onPrint() {
        window.print();
    }
    getAgendamento(id) {
        this.loading = true;
        this.agendamentosService
            .getAgendamento(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'][0];
                this.form.patchValue(data);
                this.noResult = false;
            }
            else {
                this.noResult = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService
            .getFiliais({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filiais = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }),
            (error) => {
                this.filiais = [];
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    getTiposCircuito() {
        this.loadingTiposCircuito = true;
        this.tiposCircuitoService
            .getTiposCircuito({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
            this.loadingTiposCircuito = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposCircuito = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }),
            (error) => {
                this.tiposCircuito = [];
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'YMS',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Agendamentos',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    getTipoVeiculo(params) {
        this.loadingTipoVeiculo = true;
        this.tipoVeiculoService
            .getTipoVeiculos(Object.assign(Object.assign({}, params), { IN_STAT: '1' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
            this.loadingTipoVeiculo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoVeiculo = response.body['data'];
            }
            else {
                this.tipoVeiculo = [];
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_YMS_AGEN: [null],
            ID_LOGI_YMS_ETAP: [null],
            PLAC: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            ID_LOGI_VEIC_TIPO: [null],
            ID_LOGI_VEIC: [null],
            NM_MOTO: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            NM_TRAN: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            NM_VEIC_TIPO: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            DS_AGEN: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            IN_STAT: [util__WEBPACK_IMPORTED_MODULE_20__["isNull"]],
            DT_INIC_PREV: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            DS_OBSE: [null],
            ID_LOGI_FILI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            ID_LOGI_YMS_CIRC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            materiais: this.formBuilder.array([]),
        });
    }
    get formMateriais() {
        return this.form.get('materiais');
    }
    onAddMaterial(index) {
        this.formMateriais.push(this.formBuilder.group({
            UUID_MATE: [null],
            NR_NOTA_FISC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            NR_PEDI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            ID_LOGI_ENMA_NOFI_MATE: [null],
            DS_UNID_MEDI: ['TON', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            TT_MATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].min(0.01)]],
            NM_MATE: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
        }));
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postAgendamentos() {
        this.loadingNavBar = true;
        this.agendamentosService
            .postAgendamentos(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const id = response.body['data'];
                console.log(id);
                this.form.get('ID_LOGI_YMS_AGEN').setValue(id);
                this.postMateriais(id);
                this.pnotify.success();
                // this.router.navigate(['../'], {
                //   relativeTo: this.activatedRoute,
                // });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onDeleteMaterial(index) {
        if (this.formMateriais.length === 1) {
            this.pnotify.notice('Informe ao menos um material.');
            return;
        }
        let materiais = this.formMateriais.at(index).value;
        materiais = Object.assign(Object.assign({}, materiais), { 'IN_STAT': '0' });
        if (!materiais['ID_LOGI_AGEN_MATE']) {
            this.formMateriais.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.agendamentosService
            .postMateriais(materiais)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formMateriais.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    postMateriais(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const materiais = this.formMateriais.getRawValue();
            if (!materiais) {
                return;
            }
            const promise = () => {
                materiais.forEach(material => {
                    const params = Object.assign(Object.assign({}, material), { 'ID_LOGI_YMS_AGEN': id });
                    request.push(this.agendamentosService
                        .postMateriais(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success('Material, salvo com sucesso!');
                        this.router.navigate(['../'], {
                            relativeTo: this.activatedRoute,
                        });
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
    onSetTime(event) {
        console.log(event);
    }
};
LogisticaYmsAgendamentosCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"] },
    { type: _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaYmsAgendamentosService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaVeiculoService"] },
    { type: _cadastros_tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaTipoVeiculoService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaFiliaisService"] },
    { type: _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsTiposCircuitoService"] }
];
LogisticaYmsAgendamentosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Component"])({
        selector: 'logistica-yms-agendamentos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"],
        _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaYmsAgendamentosService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaVeiculoService"],
        _cadastros_tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaTipoVeiculoService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaFiliaisService"],
        _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsTiposCircuitoService"]])
], LogisticaYmsAgendamentosCadastroComponent);



/***/ }),

/***/ "QGxU":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/modais/veiculos/veiculos.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosModaisVeiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModaisVeiculosComponent", function() { return LogisticaYmsAgendamentosModaisVeiculosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_veiculos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./veiculos.component.html */ "HrOm");
/* harmony import */ var _veiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./veiculos.component.scss */ "lv7O");
/* harmony import */ var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../cadastros/veiculos/services/veiculo.service */ "3ocw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let LogisticaYmsAgendamentosModaisVeiculosComponent = class LogisticaYmsAgendamentosModaisVeiculosComponent {
    constructor(formBuilder, veiculoService) {
        this.formBuilder = formBuilder;
        this.veiculoService = veiculoService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.loading = false;
        this.noVeiculos = true;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        /* Pagination */
        this.veiculos = [];
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            buscarPor: ['PLAC'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_LOGI_VEIC: [null],
            PLAC: [null],
            NM_MOTO: [null],
            NM_TRAN: [null],
            NM_VEIC_TIPO: [null],
            PAGI: 1,
            IN_STAT: ['1'],
            TT_REGI_PAGI: [this.itemsPerPage],
        });
    }
    getVeiculos() {
        var _a, _b;
        const buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
        const pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa;
        }
        params['PAGI'] = this.form.get('PAGI').value;
        params['TT_REGI_PAGI'] = 100;
        this.loading = true;
        this.veiculoService
            .getVeiculos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.veiculos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noVeiculos = false;
            }
            else {
                this.veiculos = [];
                this.noVeiculos = true;
            }
        }, (error) => {
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.getVeiculos();
    }
    onSelect(veiculo) {
        this.select.emit(veiculo);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
};
LogisticaYmsAgendamentosModaisVeiculosComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaVeiculoService"] }
];
LogisticaYmsAgendamentosModaisVeiculosComponent.propDecorators = {
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
};
LogisticaYmsAgendamentosModaisVeiculosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-agendamentos-modais-veiculos',
        template: _raw_loader_veiculos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_veiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaVeiculoService"]])
], LogisticaYmsAgendamentosModaisVeiculosComponent);



/***/ }),

/***/ "SzE3":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/lista/lista.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosListaComponent", function() { return LogisticaYmsAgendamentosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "3Hsd");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "YH0e");
/* harmony import */ var _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../tipos-circuito/services/tipos-circuito.service */ "j4Bn");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../cadastros/filiais/services/filiais.service */ "NXOV");
/* harmony import */ var _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../cadastros/motoristas/services/motorista.service */ "z/iS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/agendamentos.service */ "F9MH");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");






//angular



//servicos







// rxjs


let LogisticaYmsAgendamentosListaComponent = class LogisticaYmsAgendamentosListaComponent {
    /* Pagination */
    constructor(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, motoristaService, agendamentosService, filiaisService, tiposCircuitoService) {
        this.route = route;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.dateService = dateService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.detailPanelService = detailPanelService;
        this.confirmModalService = confirmModalService;
        this.motoristaService = motoristaService;
        this.agendamentosService = agendamentosService;
        this.filiaisService = filiaisService;
        this.tiposCircuitoService = tiposCircuitoService;
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        //VARIAVEIS
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos Agendamentos (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '2',
                nome: 'Inativos',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
        this.getFiliais();
        this.getTiposCircuito();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getAgendamentos(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService
            .getFiliais({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filiais = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }),
            (error) => {
                this.filiais = [];
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    getTiposCircuito() {
        this.loadingTiposCircuito = true;
        this.tiposCircuitoService
            .getTiposCircuito({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingTiposCircuito = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposCircuito = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }),
            (error) => {
                this.tiposCircuito = [];
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_LOGI_YMS_CIRC_TIPO: [null],
            ID_LOGI_FILI: [null],
            ID_LOGI_MOTO: [null],
            NM_MOTO: [null],
            PLAC: [null],
            IN_STAT: [null],
            DS_OBSE: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            DT_INCL: [null],
            DT_ATUA: [null],
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
                descricao: 'YMS',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Agendamentos',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(agendamentos) {
        this.detailPanelService.show();
        this.agendamentoSelecionada = agendamentos;
        this.detailPanelService.loadedFinished(false);
    }
    getAgendamentos(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.agendamentosService
            .getAgendamentos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.agendamentos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.agendamentos = [];
            }
        }, (error) => {
            try {
                this.noResult = true;
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
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
    classStatusBorder(agendamentos) {
        let borderClass;
        if (agendamentos.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (agendamentos.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(params) {
        const stat = params.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            this.loadingNavBar = true;
            params.IN_STAT = stat;
            return this.agendamentosService.postAgendamentos(params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.agendamentos.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Agendamentos${dataExport}`);
    }
};
LogisticaYmsAgendamentosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__["XlsxService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaMotoristaService"] },
    { type: _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAgendamentosService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaFiliaisService"] },
    { type: _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposCircuitoService"] }
];
LogisticaYmsAgendamentosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-yms-agendamentos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__["XlsxService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaMotoristaService"],
        _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAgendamentosService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaFiliaisService"],
        _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposCircuitoService"]])
], LogisticaYmsAgendamentosListaComponent);



/***/ }),

/***/ "ViSt":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/agendamentos-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosRoutingModule", function() { return LogisticaYmsAgendamentosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-and-drop/drag-and-drop.component */ "uuP1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "MZzh");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista/lista.component */ "SzE3");







const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsAgendamentosListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAgendamentosCadastroComponent"],
    },
    {
        path: 'drag',
        component: _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaYmsAgendamentosDragAndDropComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAgendamentosCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    },
];
let LogisticaYmsAgendamentosRoutingModule = class LogisticaYmsAgendamentosRoutingModule {
};
LogisticaYmsAgendamentosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], LogisticaYmsAgendamentosRoutingModule);



/***/ }),

/***/ "Y597":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/modais/materiais/materiais.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4>Pesquisa de Materiais</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"IN_STAT\">Situação</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"IN_STAT\"\r\n          >\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n            <option value=\"\">Exibir Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cdItem\">BUSCAR POR</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"buscarPor\"\r\n          >\r\n          <option value=\"ID_REFE_ERP\">ID ERP</option>\r\n          <option value=\"NM_MATE\" selected> Nome Material</option>\r\n          <option value=\"NM_CLAS\">Classe</option>\r\n          <option value=\"NM_LINH\">Linha</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-6\">\r\n          <label>TERMO DE PESQUISA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"pesquisa\"\r\n              >\r\n              <div class=\"input-group-append\">\r\n                <span \r\n                  [tooltip]=\"form.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\"\r\n                >\r\n                  <button\r\n                  style=\"height: 25px;\"\r\n                    [disabled]=\"form.valid == false\"\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getMateriais()\"\r\n                    >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n  <custom-table *ngIf=\"!noMateriais\" class=\"text-center\">\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th>ID ERP</th>\r\n        <th>Nome Material</th>\r\n        <th>Classe</th>\r\n        <th>Linha</th>\r\n        <th>Unidade de Medida</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let material of materiais | slice : begin : end; let i = index\">\r\n        <td>{{ material.ID_REFE_ERP }}</td>\r\n        <td>{{ material.NM_MATE }}</td>\r\n        <td>{{ material.NM_CLAS }}</td>\r\n        <td>{{ material.NM_LINH }}</td>\r\n        <td>{{ material.NM_APOI_UNID_MEDI }} </td>\r\n        <td>\r\n          <button\r\n            class=\"btn-icon-sm\"\r\n            tooltip=\"Salvar Informações\"\r\n            container=\"body\"\r\n            (click)=\"onSelect(material)\"\r\n          >\r\n            <i class=\"far fa-save\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n  <div *ngIf=\"totalItems > itemsPerPage\" >\r\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "YH0e":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/lista/lista.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hZ2VuZGFtZW50b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "cemQ":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/drag-and-drop/drag-and-drop.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".highlight {\n  opacity: 0.7;\n}\n\n.dropzone {\n  width: 150px;\n}\n\n.card, .dropzone {\n  transition: 0.3s;\n}\n\n.is-dragging {\n  cursor: move;\n}\n\n.sobrepor {\n  z-index: 2000;\n  background: white;\n  opacity: 0.5;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxnQkFBQTtBQUVEOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hZ2VuZGFtZW50b3MvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oaWdobGlnaHR7XHJcbiAgb3BhY2l0eTogMC43OztcclxufVxyXG4uZHJvcHpvbmV7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jYXJkLC5kcm9wem9uZXtcclxuIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmlzLWRyYWdnaW5ne1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnNvYnJlcG9ye1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "i7iJ":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/modais/notas-fiscais/notas-fiscais.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvbm90YXMtZmlzY2Fpcy9ub3Rhcy1maXNjYWlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvbm90YXMtZmlzY2Fpcy9ub3Rhcy1maXNjYWlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn0iXX0= */");

/***/ }),

/***/ "ldgx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/modais/notas-fiscais/notas-fiscais.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4>Pesquisa de Notas Fiscais</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"IN_STAT\">Situação</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"IN_STAT\"\r\n          >\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n            <option value=\"\">Exibir Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cdItem\">BUSCAR POR</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"buscarPor\"\r\n          >\r\n          <option value=\"ID_MATE\">ID</option>\r\n          <option value=\"NR_NOTA_FISC\" selected>Nota Fiscal</option>\r\n          <option value=\"DS_LOTE\">Lote</option>\r\n          <option value=\"NM_MATE\">Material</option>\r\n          <option value=\"NM_FORN\">Fornecedor</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-6\">\r\n          <label>TERMO DE PESQUISA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"pesquisa\"\r\n              >\r\n              <div class=\"input-group-append\">\r\n                <span \r\n                  [tooltip]=\"form.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\"\r\n                >\r\n                  <button\r\n                  style=\"height: 25px;\"\r\n                    [disabled]=\"form.valid == false\"\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getNotasFiscais()\"\r\n                    >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n  <custom-table *ngIf=\"!noNotasFiscais\" class=\"text-center\">\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th>ID NF</th>\r\n        <th>Nota Fiscal</th>\r\n        <th>Lote</th>\r\n        <th>Nome Material</th>\r\n        <th>Total de Material</th>\r\n        <th>Fornecedor</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let notas of notasFiscais\">\r\n        <td>{{ notas.ID_LOGI_ENMA_NOFI }}</td>\r\n        <td>{{ notas.NR_NOTA_FISC }}</td>\r\n        <td >{{ notas.DS_LOTE || 'NÃO INFORMADO' }}</td>\r\n        <td>{{ notas.NM_MATE }}</td>\r\n        <td>{{ notas.TT_MATE_ORIG }} {{ notas.DS_UNID_MEDI }}</td>\r\n        <td>{{ notas.NM_FORN }} </td>\r\n        <td>\r\n          <button\r\n            class=\"btn-icon-sm\"\r\n            tooltip=\"Salvar Informações\"\r\n            container=\"body\"\r\n            (click)=\"onSelect(notas)\"\r\n          >\r\n            <i class=\"far fa-save\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n  <div *ngIf=\"totalItems > itemsPerPage\" >\r\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "lv7O":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/modais/veiculos/veiculos.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvdmVpY3Vsb3MvdmVpY3Vsb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS95bXMvYWdlbmRhbWVudG9zL21vZGFpcy92ZWljdWxvcy92ZWljdWxvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XHJcbiAgY3Vyc29yOiBuby1kcm9wO1xyXG59Il19 */");

/***/ }),

/***/ "rRVE":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/modais/materiais/materiais.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosModaisMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModaisMateriaisComponent", function() { return LogisticaYmsAgendamentosModaisMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./materiais.component.html */ "Y597");
/* harmony import */ var _materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materiais.component.scss */ "IZvq");
/* harmony import */ var _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/agendamentos.service */ "F9MH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let LogisticaYmsAgendamentosModaisMateriaisComponent = class LogisticaYmsAgendamentosModaisMateriaisComponent {
    constructor(formBuilder, agendamentosService) {
        this.formBuilder = formBuilder;
        this.agendamentosService = agendamentosService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.loading = false;
        this.noMateriais = true;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 100;
        /* Pagination */
        this.materiais = [];
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            buscarPor: ['NM_MATE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_REFE_ERP: [null],
            NM_MATE: [null],
            NM_CLAS: [null],
            NM_LINH: [null],
            IN_STAT: ['1'],
            PAGI: 1,
            TT_REGI_PAGI: [this.itemsPerPage],
        });
    }
    getMateriais() {
        var _a, _b;
        const buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
        const pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa;
        }
        params['PAGI'] = this.form.get('PAGI').value;
        params['TT_REGI_PAGI'] = 100;
        this.loading = true;
        this.agendamentosService
            .getMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.materiais = response.body['result'];
                ;
                this.totalItems = response.body['result'].length;
                this.noMateriais = false;
            }
            else {
                this.materiais = [];
                this.noMateriais = true;
            }
        }, (error) => {
        });
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    onSelect(material) {
        this.select.emit(material);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
};
LogisticaYmsAgendamentosModaisMateriaisComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsAgendamentosService"] }
];
LogisticaYmsAgendamentosModaisMateriaisComponent.propDecorators = {
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
};
LogisticaYmsAgendamentosModaisMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-agendamentos-modais-materiais',
        template: _raw_loader_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsAgendamentosService"]])
], LogisticaYmsAgendamentosModaisMateriaisComponent);



/***/ }),

/***/ "ua4e":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/cadastro/cadastro.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sobrepor {\n  z-index: 2000;\n  background: white;\n  opacity: 0.5;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS95bXMvYWdlbmRhbWVudG9zL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvYnJlcG9ye1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "uuP1":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/agendamentos/drag-and-drop/drag-and-drop.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaYmsAgendamentosDragAndDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosDragAndDropComponent", function() { return LogisticaYmsAgendamentosDragAndDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_drag_and_drop_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./drag-and-drop.component.html */ "37/I");
/* harmony import */ var _drag_and_drop_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-and-drop.component.scss */ "cemQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let LogisticaYmsAgendamentosDragAndDropComponent = class LogisticaYmsAgendamentosDragAndDropComponent {
    constructor() {
        this.id = 8;
        this.loading = false;
        this.circuitos = [
            {
                id: 1,
                descricao: 'Portaria',
                icone: 'fas fa-portrait',
                check: 1
            },
            {
                id: 2,
                descricao: 'Balança',
                icone: 'fas fa-balance-scale-left',
                check: 0
            },
            {
                id: 3,
                descricao: 'Estacionamento',
                icone: 'fas fa-sign',
                check: 0
            },
            {
                id: 4,
                descricao: 'Galpão 2',
                icone: 'fas fa-warehouse',
                check: 0
            },
            {
                id: 5,
                descricao: 'Galpão 27',
                icone: 'fas fa-warehouse',
                check: 0
            }, {
                id: 6,
                descricao: 'Balança',
                icone: 'fas fa-balance-scale-left',
                check: 0
            },
            {
                id: 7,
                descricao: 'Finalizado',
                icone: 'fas fa-check',
                check: 0
            }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const dropzones = document.querySelectorAll(".dropzone");
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.addEventListener('dragstart', dragstart);
            card.addEventListener('drag', drag);
            card.addEventListener('dragend', dragend);
        });
        dropzones.forEach(dropzone => {
            dropzone.addEventListener('dragenter', dragenter);
            dropzone.addEventListener('dragover', dragover);
            dropzone.addEventListener('dragleave', dragleave);
            dropzone.addEventListener('drop', drop);
        });
        function dragstart() {
            dropzones.forEach(dropzones => dropzones.classList.add('highlight'));
            this.classList.add('is-dragging');
        }
        function drag() {
            // console.log('drag')
        }
        function dragend() {
            dropzones.forEach(dropzone => {
                dropzone.classList.remove('highlight');
                if (dropzone.childElementCount == 2) {
                    return;
                }
                for (let i = 0; i < dropzone.children.length; i++) {
                    let item = dropzone.children[i].classList.contains('dropzone-item');
                    if (item) {
                        dropzone.children[i].classList.add('d-none');
                    }
                }
            });
            this.classList.remove('is-dragging');
        }
        function dragenter() {
        }
        function dragover() {
            for (let i = 0; i < this.children.length; i++) {
                let item = this.children[i].classList.contains('d-none');
                if (item) {
                    this.children[i].classList.remove('d-none');
                }
            }
            const cardBeingDragged = document.querySelector('.is-dragging');
            this.classList.remove('highlight');
            this.appendChild(cardBeingDragged);
        }
        function dragleave() {
            this.classList.add('highlight');
        }
        function drop() {
        }
    }
};
LogisticaYmsAgendamentosDragAndDropComponent.ctorParameters = () => [];
LogisticaYmsAgendamentosDragAndDropComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'drag-and-drop',
        template: _raw_loader_drag_and_drop_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_drag_and_drop_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LogisticaYmsAgendamentosDragAndDropComponent);



/***/ })

}]);
//# sourceMappingURL=agendamentos-agendamentos-module-es2015.js.map