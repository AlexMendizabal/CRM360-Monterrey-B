(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visao-ro-visao-ro-module"],{

/***/ "COs4":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/kanban/visao-ro/lista/lista.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"RO's\">\n  <button\n    type=\"button\"\n    (click)= 'onRefresh();'>\n    Atualizar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"dataInicial\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataInicial\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataInicial\"\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired(form.controls.dataInicial)\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Data Inicial é obrigatória\"></invalid-form-control>\n              </div>\n            </div>\n            \n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"dataFinal\">Data final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataFinal\"\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired(form.controls.dataFinal)\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Data Final é obrigatória\"></invalid-form-control>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"linhas\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                value=''>\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"codGerencia\">gerência</label>\n              <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"coordenadores\"\n                  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"nomeEscritorio\"\n                  bindValue=\"codEscritorio\"\n                  formControlName=\"codGerencia\"\n                  (change)=\"onChangeEscritorio($event.id, true)\"\n                >\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"codVendedor\">vendedor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                type='text'\n                [items]=\"vendedores\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"nome\"\n                bindValue=\"id\"\n                formControlName=\"codVendedor\"\n              >\n                  <invalid-form-control\n                  [show]=\"onFieldInvalid('codVendedor')\"\n                  message=\"Descrição é obrigatório.\">\n                  </invalid-form-control>\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-md-3 pl-0\">\n              <label for=\"codEmpresa\">Empresa</label>\n                    <ng-select\n                      [searchable]=\"true\"\n                      [clearable]=\"false\"\n                      type='text'\n                      [items]=\"empresa\"\n                      [virtualScroll]=\"true\"\n                      placeholder=\"Selecione...\"\n                      bindLabel=\"nomeEmpresa\"\n                      bindValue=\"idEmpresa\"\n                      formControlName=\"codEmpresa\"\n                    >\n                    <invalid-form-control\n                    [show]=\"onFieldInvalid('codEmpresa')\"\n                    message=\"Empresa é obrigatório.\">\n                    </invalid-form-control>\n                    </ng-select>\n                </div>\n\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\n  <div class=\"row mt-4\" *ngIf=\"!dadosEmpty && dadosLoaded\">\n\n    <div class=\"col-2\"></div>\n\n    <div class=\"col-4\">\n      <h6 class='text-center'>ABERTAS</h6>\n    <div\n    class=\"mb-2 abertas\"\n    *ngFor=\"let item of abertas\"\n    [tooltip]=\"tooltipAutoScrollTemplate\">\n      <div class=\"card-body cartao-abertas\" >\n        <btn-icon\n        class=\"float-right\"\n        icon=\"fas fa-plus\"\n        size=\"small\"\n        tooltip=\"mais detalhes\"\n        id=\"detalhes\"\n        (click)=\"openModalAbertas(abertas)\">\n        </btn-icon> <br>\n\n        <strong >#{{ item.codCliente }} - {{ item.razaoSocial }}</strong><br>\n        <span>{{ item.nomeLinha }}</span><br>\n        <span>{{ item.dataLancamento | date: 'dd/MM/yyyy' }}</span><br>\n        <span>{{ item.nomeEmpresa }}</span><br>\n        <span>{{ item.nomeGerencia }}</span><br>\n        <span>{{ item.nomeVendedor }}</span>\n      </div>\n\n      <!-- Modal Detalhes dos Registros Abertas -->\n    <ng-template #abertas>\n      <div class=\"mt-4 mr-4 mb-4 ml-4 details\" style=\"text-transform: uppercase;\">\n        <div class=\"row\">\n          <div class=\"col-6\">            \n            <div class=\"mtc-title\" *ngIf=\"item.nrOcorrencia != ''\">Número da RO</div>\n            <p>#{{ item.nrOcorrencia}}</p>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.nomeSetor != ''\">Setor</div>\n            <p>{{ item.nomeSetor | uppercase }}</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.nomeSituacao != ''\">Situação RO</div>\n            <p>{{ item.nomeSituacao | uppercase }}</p>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.descTipoDocumento != ''\">Tipo de documento da descrição</div>\n            <p *ngIf=\"item.descTipoDocumento != ''\">{{ item.descTipoDocumento | uppercase }}  - #{{ item.nrNotaFiscal }}</p>\n            <p *ngIf=\"item.descTipoDocumento == 'Item Nota Fiscal'\">Item #{{ item.nrItemDocumento }}</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.descMotivo != ''\">Motivo</div>\n            <p>{{ item.descMotivo | uppercase }}</p>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"item.nomeUsuarioLiberacaoSetor\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Setor</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataLiberacaoSetor | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataLiberacaoSetor | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioLiberacaoSetor }} - {{ item.nomeUsuarioLiberacaoSetor }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteLogistica\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Logística</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteLogistica | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteLogistica | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteLogistica }} - {{ item.nomeUsuarioCienteLogistica }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteLogistica\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Liberação</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteOcorrencia | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteOcorrencia | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteOcorrencia }} - {{ item.nomeUsuarioCienteLogistica }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteFiscal\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Fiscal</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteFiscal | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteFiscal | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteFiscal }} - {{ item.nomeUsuarioCienteFiscal }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteFinanceiro\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Financeiro</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteFinanceiro | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteFinanceiro | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteFinanceiro }} - {{ item.nomeUsuarioCienteFinanceiro }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioFechamentoOcorrencia\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Fechamento</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataFechamentoOcorrencia | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataFechamentoOcorrencia | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioFechamentoOcorrencia }} - {{ item.nomeUsuarioFechamentoOcorrencia }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.descOcorrencia != ''\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">            \n            <legend class=\"mtc-title text-left\">Descrição da Ocorrência</legend>\n            <p class=\"text-justify\">{{ item.descOcorrencia | uppercase }}</p>\n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.descAcaoCorretiva != ''\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">            \n            <legend class=\"mtc-title text-left\">Descrição da Ação Corretiva</legend>\n            <p class=\"text-justify\">{{ item.descAcaoCorretiva | uppercase }}</p>\n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.descAcaoPreventiva != ''\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">            \n            <legend class=\"mtc-title text-left\">Descrição da Acção Preventiva</legend>\n            <p class=\"text-justify\">{{ item.descAcaoPreventiva | uppercase }}</p>\n          </fieldset>\n        </div>\n    </div>\n    </ng-template>\n    </div>\n  </div>\n\n  <div class=\"col-4\">\n    <h6 class='text-center'>FECHADAS</h6>\n    <div\n    class=\"mb-2 fechadas\"\n    *ngFor=\"let item of fechadas; let i = index\"\n    [tooltip]=\"tooltipAutoScrollTemplate\">\n\n      <div class=\"card-body cartao-fechadas\" >\n        <btn-icon\n        class=\"float-right\"\n        icon=\"fas fa-plus\"\n        size=\"small\"\n        tooltip=\"mais detalhes\"\n        id=\"detalhes\"\n        (click)=\"openModalFechadas(fechadas)\">\n        </btn-icon> <br>\n        <strong >#{{ item.codCliente }} - {{ item.razaoSocial }}</strong><br>\n        <span>{{ item.nomeLinha }}</span><br>\n        <span>{{ item.dataLancamento | date: 'dd/MM/yyyy' }}</span><br>\n        <span>{{ item.nomeEmpresa }}</span><br>\n        <span>{{ item.nomeGerencia }}</span><br>\n        <span>{{ item.nomeVendedor }}</span>\n      </div>\n\n\n    <!-- Modal Detalhes dos Registros Fechadas -->\n    <ng-template #fechadas>\n      <div class=\"mt-4 mr-4 mb-4 ml-4 details\" style=\"text-transform: uppercase;\">\n        <div class=\"row\">\n          <div class=\"col-6\">            \n            <div class=\"mtc-title\" *ngIf=\"item.nrOcorrencia != ''\">Número da RO</div>\n            <p>#{{ item.nrOcorrencia}}</p>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.nomeSetor != ''\">Setor</div>\n            <p>{{ item.nomeSetor | uppercase }}</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.nomeSituacao != ''\">Situação RO</div>\n            <p>{{ item.nomeSituacao | uppercase }}</p>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.descTipoDocumento != ''\">Tipo de documento da descrição</div>\n            <p *ngIf=\"item.descTipoDocumento != ''\">{{ item.descTipoDocumento | uppercase }}  - #{{ item.nrNotaFiscal }}</p>\n            <p *ngIf=\"item.descTipoDocumento == 'Item Nota Fiscal'\">Item #{{ item.nrItemDocumento }}</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"mtc-title\" *ngIf=\"item.descMotivo != ''\">Motivo</div>\n            <p>{{ item.descMotivo | uppercase }}</p>\n          </div>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioLiberacaoSetor\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Setor</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataLiberacaoSetor | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataLiberacaoSetor | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioLiberacaoSetor }} - {{ item.nomeUsuarioLiberacaoSetor }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteLogistica\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Logística</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteLogistica | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteLogistica | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteLogistica }} - {{ item.nomeUsuarioCienteLogistica }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteLogistica\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Liberação</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteOcorrencia | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteOcorrencia | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteOcorrencia }} - {{ item.nomeUsuarioCienteLogistica }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteFiscal\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Fiscal</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteFiscal | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteFiscal | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteFiscal }} - {{ item.nomeUsuarioCienteFiscal }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioCienteFinanceiro\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Ciente Financeiro</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataCienteFinanceiro | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataCienteFinanceiro | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioCienteFinanceiro }} - {{ item.nomeUsuarioCienteFinanceiro }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.nomeUsuarioFechamentoOcorrencia\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">\n            <legend class=\"mtc-title text-left\">Fechamento</legend>\n            <div class=\"row\">\n              <div class=\"col-3\">              \n                <span class=\"mtc-title text-left\">Data</span>\n                <p class=\"text-left\">{{item.dataFechamentoOcorrencia | date: 'dd/MM/yyyy'}}</p>\n              </div>\n              <div class=\"col-3\">\n                <span class=\"mtc-title text-left\">Hora</span>\n                <p class=\"text-left\">{{item.dataFechamentoOcorrencia | date: 'HH:mm'}}</p>\n              </div>\n              <div class=\"col-6\">\n                <span class=\"mtc-title text-left\">Usuário</span>\n                <p class=\"text-left\">{{ item.codUsuarioFechamentoOcorrencia }} - {{ item.nomeUsuarioFechamentoOcorrencia }}</p>\n              </div>\n            </div>           \n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.descOcorrencia != ''\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">            \n            <legend class=\"mtc-title text-left\">Descrição da Ocorrência</legend>\n            <p class=\"text-justify\">{{ item.descOcorrencia | uppercase }}</p>\n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.descAcaoCorretiva != ''\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">            \n            <legend class=\"mtc-title text-left\">Descrição da Ação Corretiva</legend>\n            <p class=\"text-justify\">{{ item.descAcaoCorretiva | uppercase }}</p>\n          </fieldset>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"item.descAcaoPreventiva != ''\">\n          <fieldset class=\"border rounded shadow-sm col mx-auto\">            \n            <legend class=\"mtc-title text-left\">Descrição da Acção Preventiva</legend>\n            <p class=\"text-justify\">{{ item.descAcaoPreventiva | uppercase }}</p>\n          </fieldset>\n        </div>\n    </div>\n    </ng-template>\n    </div>\n  </div>\n  <div class=\"col-2\"></div>\n\n  </div>\n</app-body>");

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

/***/ "GKyM":
/*!***********************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/visao-ro/visao-ro.service.ts ***!
  \***********************************************************************/
/*! exports provided: ComercialKanbanVisaoRoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanVisaoRoService", function() { return ComercialKanbanVisaoRoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");





// Services

let ComercialKanbanVisaoRoService = class ComercialKanbanVisaoRoService {
    constructor(http, comercialService) {
        this.http = http;
        this.comercialService = comercialService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/kanban/visao-ro`;
    }
    getCards(params) {
        let abertas = this.getAbertas(params);
        let fechadas = this.getFechadas(params);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            abertas,
            fechadas
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAbertas(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/abertas`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getFechadas(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/fechadas`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
};
ComercialKanbanVisaoRoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] }
];
ComercialKanbanVisaoRoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]])
], ComercialKanbanVisaoRoService);



/***/ }),

/***/ "H2y2":
/*!******************************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/visao-ro/visao-ro-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ComercialKanbanVisaoRoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanVisaoRoRoutingModule", function() { return ComercialKanbanVisaoRoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "xTvM");



// Components

const routes = [
    {
        path: '',
        children: [
            { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialKanbanVisaoRoListaComponent"] },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full',
            },
        ]
    },
];
let ComercialKanbanVisaoRoRoutingModule = class ComercialKanbanVisaoRoRoutingModule {
};
ComercialKanbanVisaoRoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialKanbanVisaoRoRoutingModule);



/***/ }),

/***/ "SZuv":
/*!******************************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/visao-ro/lista/lista.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .dropdown-item:hover {\n  cursor: pointer;\n}\n::ng-deep .card-title {\n  font-size: 1.05rem;\n}\n::ng-deep .abertas {\n  background-color: #F5B7B1;\n  border: solid 1.5px #b60707;\n  border-radius: 7px;\n}\n::ng-deep .cartao-abertas:hover {\n  background-color: #F1948A;\n  border-radius: 7px;\n}\n::ng-deep .fechadas {\n  background-color: #A9DFBF;\n  border: solid 1.5px #067504;\n  border-radius: 7px;\n}\n::ng-deep .cartao-fechadas:hover {\n  background-color: #7DCEA0;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwva2FuYmFuL3Zpc2FvLXJvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwva2FuYmFuL3Zpc2FvLXJvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICB9XG5cblxuICAuYWJlcnRhcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1QjdCMTtcbiAgICBib3JkZXI6IHNvbGlkIDEuNXB4ICNiNjA3MDc7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG4gIC5jYXJ0YW8tYWJlcnRhczpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxOTQ4QTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cblxuICAuZmVjaGFkYXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBOURGQkY7XG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCAjMDY3NTA0O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAuY2FydGFvLWZlY2hhZGFzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0RDRUEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIFxuXG59XG5cbiJdfQ== */");

/***/ }),

/***/ "gAoK":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/visao-ro/visao-ro.module.ts ***!
  \**********************************************************************/
/*! exports provided: ComercialKanbanVisaoRoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanVisaoRoModule", function() { return ComercialKanbanVisaoRoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../templates/templates.module */ "9lCC");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../cadastros/materiais/templates/templates.module */ "11Wi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lista/lista.component */ "xTvM");
/* harmony import */ var _visao_ro_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./visao-ro.service */ "GKyM");
/* harmony import */ var _visao_ro_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./visao-ro-routing.module */ "H2y2");




// ngx-bootstrap



// ng-select

// ng2-currency-mask

// PNotify

// Modules





// Components

// Services


let ComercialKanbanVisaoRoModule = class ComercialKanbanVisaoRoModule {
};
ComercialKanbanVisaoRoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["ComercialKanbanVisaoRoListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialTemplatesModule"],
            _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"],
            _visao_ro_routing_module__WEBPACK_IMPORTED_MODULE_17__["ComercialKanbanVisaoRoRoutingModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _visao_ro_service__WEBPACK_IMPORTED_MODULE_16__["ComercialKanbanVisaoRoService"]],
    })
], ComercialKanbanVisaoRoModule);



/***/ }),

/***/ "xTvM":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/visao-ro/lista/lista.component.ts ***!
  \****************************************************************************/
/*! exports provided: ComercialKanbanVisaoRoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanVisaoRoListaComponent", function() { return ComercialKanbanVisaoRoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "COs4");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "SZuv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */ "fMkk");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../services/vendedores.service */ "4xRd");
/* harmony import */ var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../shared/services/core/auth.service */ "yxCR");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../comercial.service */ "VgqD");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _visao_ro_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../visao-ro.service */ "GKyM");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _cadastros_materiais_combos_combos_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../../cadastros/materiais/combos/combos.service */ "GjWS");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/services/requests/escritorios.service */ "NIE8");








// ngx-bootstrap



Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]);
// Services













let ComercialKanbanVisaoRoListaComponent = class ComercialKanbanVisaoRoListaComponent {
    constructor(router, location, formBuilder, pnotifyService, activatedRoute, atividadesService, kanbanVisaoRoService, dateService, localeService, comercialService, authService, comercialVendedoresService, gestaoAssociacoesService, bsModalService, confirmModalService, modalService, materiaisComboService, titleService, escritoriosService) {
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.kanbanVisaoRoService = kanbanVisaoRoService;
        this.dateService = dateService;
        this.localeService = localeService;
        this.comercialService = comercialService;
        this.authService = authService;
        this.comercialVendedoresService = comercialVendedoresService;
        this.gestaoAssociacoesService = gestaoAssociacoesService;
        this.bsModalService = bsModalService;
        this.confirmModalService = confirmModalService;
        this.modalService = modalService;
        this.materiaisComboService = materiaisComboService;
        this.titleService = titleService;
        this.escritoriosService = escritoriosService;
        this.user = this.authService.getCurrentUser();
        this.idUsuario = this.user['info']['id'];
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.profile = {};
        this.breadCrumbTree = [];
        this.showDashboard = false;
        this.showFilter = false;
        this.showPermissionDenied = false;
        this.linhas = [];
        this.classes = [];
        this.filteredClasses = [];
        this.coordenadores = [];
        this.vendedores = [];
        this.vendedoresTotal = [];
        this.filteredVendedores = [];
        this.empresa = [];
        this.viewVendedor = false;
        this.abertas = [];
        this.fechadas = [];
        this.itemsPerPage = 50;
        this.currentPage = 1;
        this.maxSize = 10;
        this.clientesPagination = [];
        this.detalhes = false;
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.dadosFiltrados = [];
        this.pnotifyService.getPNotify();
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.titleService.setTitle("RO's");
        this.registrarAcesso();
        this.setFormFilter();
        this.getPerfil();
        this.getFilteredValues();
        this.setBreadCrumb();
        this.loadingFilters();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Kanban',
                    routerLink: `/comercial/kanban/${params.idSubModulo}`,
                },
                {
                    descricao: "RO's",
                },
            ];
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            dataInicial: [
                formValue.dataInicial
                    ? formValue.dataInicial
                    : this.dateService.getFirstDayMonth(),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            dataFinal: [
                formValue.dataFinal
                    ? formValue.dataFinal
                    : this.dateService.getLastDayMonth(),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            codVendedor: [formValue.codVendedor],
            codGerencia: [formValue.codGerencia],
            codEmpresa: [formValue.codEmpresa],
            codLinha: [formValue.codLinha],
        });
        this.checkValuesGerente();
    }
    checkRouterParams() {
        let formValue = {
            dataInicial: this.dateService.getFirstDayMonth(),
            dataFinal: this.dateService.getLastDayMonth(),
            codEmpresa: '',
            codLinha: '',
            codGerencia: '',
            codVendedor: '',
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                this.showFilter = false;
                this.showDashboard = true;
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (!isNaN(Number(params[paramKey]))) {
                                formValue[formKey] = Number(params[paramKey]);
                            }
                            else {
                                formValue[formKey] = params[paramKey];
                            }
                        }
                    });
                });
            }
            else {
                this.showFilter = true;
                this.showDashboard = false;
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    // Pesquisa
    onFilter() {
        if (this.form.valid) {
            this.currentPage = 1;
            this.setRouterParams(this.getParams());
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.dadosFiltrados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.abertas = [];
        this.fechadas = [];
        this.kanbanVisaoRoService
            .getCards(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response[0].hasOwnProperty('success') &&
                    response[0].success === true) {
                    this.abertas = response[0].data;
                    this.dadosLoaded = true;
                }
                if (response[1].hasOwnProperty('success') &&
                    response[1].success === true) {
                    this.fechadas = response[1].data;
                    this.dadosLoaded = true;
                }
                else if (response[0].hasOwnProperty('success') &&
                    response[1].hasOwnProperty('success') &&
                    ((response[0].success === true && response[1].success === false) ||
                        (response[0].success === false && response[1].success === true))) {
                    this.abertas = response[0].data;
                    this.fechadas = response[1].data;
                    this.dadosEmpty = false;
                }
                else if (response[0].hasOwnProperty('success') &&
                    response[1].hasOwnProperty('success') &&
                    response[0].success === false &&
                    response[1].success === false) {
                    this.dadosEmpty = true;
                }
                else {
                    this.pnotifyService.error();
                }
            },
            error: (error) => {
                this.dadosEmpty = true;
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
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
    // Get perfil
    getPerfil() {
        this.comercialService.getPerfil().subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.profile = response.result;
                    if (this.profile.coordenador === true ||
                        this.profile.gestor === true) {
                        this.getVendedores();
                        this.form.controls.codGerencia.setValue('');
                        this.form.controls.codGerencia.updateValueAndValidity();
                    }
                    else if (this.profile.vendedor === true
                    // this.profile.hasVinculoOperadores === true
                    ) {
                        this.viewVendedor == true;
                        this.getVinculoOperadores();
                        this.form.controls.codVendedor.setValue(parseInt(this.user.info.idVendedor));
                        this.form.controls.codVendedor.updateValueAndValidity();
                        this.form.controls.codGerencia.setValue('');
                        this.form.controls.codGerencia.updateValueAndValidity();
                        this.showDashboard = true;
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
    onChangeEscritorio(event, reset) {
        if (this.viewVendedor == false) {
            if (reset == true) {
                this.form.controls.codVendedor.reset();
                this.form.controls.codVendedor.setValue('');
                this.vendedores = this.vendedoresTotal;
            }
            this.filteredVendedores = this.vendedores.filter((value) => value.idEscritorio == this.form.value.codGerencia);
            this.filteredVendedores.unshift({
                id: '',
                nome: 'EXIBIR TODOS',
            });
            this.onChangeVendedores();
            if (this.form.value.codGerencia == '') {
                this.vendedores = this.vendedoresTotal;
            }
        }
    }
    onChangeVendedores() {
        this.vendedores = this.filteredVendedores;
    }
    checkValuesGerente() {
        if (this.form.value.codGerencia !== '' &&
            this.form.value.codGerencia !== null) {
            this.onChangeEscritorio(this.form.value.codGerencia, false);
        }
    }
    getFilteredValues() {
        this.getGestores();
        this.getEmpresas();
        this.getLinhas();
    }
    loadingFilters() {
        this.form.controls.codEmpresa.disable();
        this.form.controls.codLinha.disable();
        this.form.controls.codGerencia.disable();
        this.form.controls.codVendedor.disable();
    }
    getLinhas() {
        this.materiaisComboService.getFilterValues().subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
                this.linhas.unshift({
                    id: '',
                    descricao: 'EXIBIR TODOS',
                });
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].responseCode === 200) {
                this.classes = response[1].result;
                this.filteredClasses.unshift({
                    idClasse: '',
                    nomeClasse: 'EXIBIR TODOS',
                });
                this.form.controls.codLinha.enable();
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getGestores() {
        this.escritoriosService.getEscritorios().subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.coordenadores = response.result;
                    this.coordenadores.unshift({
                        codEscritorio: '',
                        nomeEscritorio: 'EXIBIR TODOS',
                    });
                    this.form.controls.codGerencia.enable();
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getEmpresas() {
        this.comercialService.getEmpresas({ tipo: 'faturamento' }).subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.empresa = response.result;
                    this.empresa.unshift({
                        idEmpresa: '',
                        nomeEmpresa: 'EXIBIR TODOS',
                    });
                    this.form.controls.codEmpresa.enable();
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getVendedores() {
        this.comercialVendedoresService
            .getVendedores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                this.vendedores = response['result'];
                this.vendedoresTotal = this.vendedores;
                this.vendedores.unshift({
                    id: '',
                    nome: 'EXIBIR TODOS',
                });
                this.form.controls.codVendedor.enable();
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getVinculoOperadores() {
        this.comercialVendedoresService
            .getVinculoOperadores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response.responseCode === 200) {
                this.vendedores = response.result;
                this.form.controls.codVendedor.enable();
                this.form.controls.codGerencia.disable();
                this.form.controls.codGerencia.setValue('');
                this.form.controls.codGerencia.updateValueAndValidity();
            }
        });
    }
    // modal
    openModalAbertas(abertas) {
        this.modalRef = this.bsModalService.show(abertas, Object.assign({}, { class: 'gray modal-lg' }));
    }
    openModalFechadas(fechadas) {
        this.modalRef = this.bsModalService.show(fechadas, Object.assign({}, { class: 'gray modal-lg' }));
    }
    closeModal(modalRef) {
        this.modalRef.hide();
    }
    // Tratamento de erros
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    handleFormFieldsError() {
        this.pnotifyService.error();
        this.location.back();
    }
    onRefresh() {
        this.setFormFilter();
    }
};
ComercialKanbanVisaoRoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_17__["AtividadesService"] },
    { type: _visao_ro_service__WEBPACK_IMPORTED_MODULE_18__["ComercialKanbanVisaoRoService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_15__["ComercialService"] },
    { type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_13__["ComercialVendedoresService"] },
    { type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["BsModalService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_19__["ConfirmModalService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["BsModalService"] },
    { type: _cadastros_materiais_combos_combos_service__WEBPACK_IMPORTED_MODULE_21__["ComercialCadastrosMateriaisComboService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__["TitleService"] },
    { type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_23__["EscritoriosService"] }
];
ComercialKanbanVisaoRoListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialKanbanVisaoRoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-kanban-visao-ro-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_17__["AtividadesService"],
        _visao_ro_service__WEBPACK_IMPORTED_MODULE_18__["ComercialKanbanVisaoRoService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_15__["ComercialService"],
        _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_13__["ComercialVendedoresService"],
        _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["BsModalService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_19__["ConfirmModalService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["BsModalService"],
        _cadastros_materiais_combos_combos_service__WEBPACK_IMPORTED_MODULE_21__["ComercialCadastrosMateriaisComboService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__["TitleService"],
        src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_23__["EscritoriosService"]])
], ComercialKanbanVisaoRoListaComponent);



/***/ }),

/***/ "zN97":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
  \************************************************************************/
/*! exports provided: ComercialTidSoftwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function() { return ComercialTidSoftwareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialTidSoftwareService = class ComercialTidSoftwareService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/tid-software`;
    }
    loadDependencies() {
        let empresas = this.getEmpresas('vendas');
        let linhas = this.getLinhas();
        let modulosVendas = this.getModulosVendas();
        let modulosProducaoTela = this.getModulosProducaoTela();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            empresas,
            linhas,
            modulosVendas,
            modulosProducaoTela
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas(acao) {
        return this.http
            .get(`${this.API}/empresas/${acao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosVendas() {
        return this.http.get(`${this.API}/modulos/vendas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosProducaoTela() {
        return this.http
            .get(`${this.API}/modulos/producao-tela`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postGerarAcesso(data) {
        return this.http
            .post(`${this.API}/gerar-acesso`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialTidSoftwareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialTidSoftwareService);



/***/ })

}]);
//# sourceMappingURL=visao-ro-visao-ro-module-es2015.js.map