(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacao-etapas-associacao-etapas-module"],{

/***/ "1Ehf":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/associacao-etapas.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LogisticaYmsAssociacaoEtapasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasModule", function() { return LogisticaYmsAssociacaoEtapasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "j3ka");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "bCd4");
/* harmony import */ var _associacao_etapas_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./associacao-etapas-routing.module */ "QmfS");















let LogisticaYmsAssociacaoEtapasModule = class LogisticaYmsAssociacaoEtapasModule {
};
LogisticaYmsAssociacaoEtapasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoEtapasListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaYmsAssociacaoEtapasCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            _associacao_etapas_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsAssociacaoEtapasRoutingModule"]
        ]
    })
], LogisticaYmsAssociacaoEtapasModule);



/***/ }),

/***/ "37vV":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/associacao-etapas/lista/lista.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Etapas por Checklist\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"filterChecklist\">Checklist</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filterChecklist\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingChecklist\"\n                labelForId=\"ID_LOGI_YMS_CHEC\"\n                bindLabel=\"NM_CHEC\"\n                bindValue=\"ID_LOGI_YMS_CHEC\"\n                id=\"ID_LOGI_YMS_CHEC\"\n                formControlName=\"ID_LOGI_YMS_CHEC\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Checklist</th>\n              <th scope=\"col\" style=\"width:30px\"[hidden]=\"showDetailPanel\"></th>\n              <th scope=\"col\" style=\"width:30px\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let check of checklist\"  [class.table-active]=\"check?.ID_LOGI_YMS_CHEC == associacaoSelecionada?.ID_LOGI_YMS_CHEC && showDetailPanel\">\n              <td>\n              {{check.ID_LOGI_YMS_CHEC }}\n              </td>\n              <td >{{ check.NM_CHEC | uppercase}}</td>\n              <td class=\"align-middle\"  [hidden]=\"showDetailPanel\">\n                <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', check.ID_LOGI_YMS_CHEC]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n              </td>\n              <td class=\"align-middle\">\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(check)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <tabset>\n          <tab heading=\"Dados da Area\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div>\n                <div class=\"form-row mt-3\">\n                  <div class=\"form-group col-lg-5\">\n                    <label>ID do Checklist</label>\n                    <div>{{ associacaoSelecionada?.ID_LOGI_YMS_CHEC }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-7\">\n                    <label>Descrição do Checklist</label>\n                    <div>{{ associacaoSelecionada?.NM_CHEC | uppercase}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tab>\n          <tab  heading=\"Etapas Associados\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div class=\"mb-3\">\n                <custom-table  [config]=\"tableConfigAssocEtapas\" *ngIf=\"!loadingAssociacaoEtapas && !noAssocEtapas\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th scope=\"col\"  width=\"20%\">ID ERP</th>\n                      <th scope=\"col\"  width=\"80%\">Etapa</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let etapa of associacaoEtapas\">\n                      <td  width=\"20%\">{{ etapa?.ID_MATE }}</td>\n                      <td  width=\"80%\">{{ etapa?.NM_MATE_ASSO | uppercase }}</td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n                <message\n                  *ngIf=\"loadingAssociacaoEtapas\"\n                  icon=\"fas fa-cog fa-spin\"\n                  text=\"Estamos pesquisando os etapas para você...\">\n                </message>\n                <div [hidden]=\"loadingAssociacaoEtapas || !noAssocEtapas\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n                </div>\n              </div>\n            </div>\n          </tab>       \n        </tabset> \n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "3l7r":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/services/associacao-etapas.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: LogisticaYmsAssociacaoEtapasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasService", function() { return LogisticaYmsAssociacaoEtapasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsAssociacaoEtapasService = class LogisticaYmsAssociacaoEtapasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getAssociacaoEtapas(params) {
        return this.http.get(`${this.API}/logistica/yms/setores/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    getEtapas(params) {
        return this.http.get(`${this.API}/logistica/yms/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    deleteAssociacoes(params) {
        return this.http.delete(`${this.API}/logistica/yms/setores/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    postAssociacaoEtapas(associacao) {
        return this.http.post(`${this.API}/logistica/yms/setores/etapas`, associacao, {
            observe: 'response',
        });
    }
};
LogisticaYmsAssociacaoEtapasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsAssociacaoEtapasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsAssociacaoEtapasService);



/***/ }),

/***/ "4WXJ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/cadastro/cadastro.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2Fzc29jaWFjYW8tZXRhcGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2Fzc29jaWFjYW8tZXRhcGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufSJdfQ== */");

/***/ }),

/***/ "Q0pW":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/associacao-etapas/cadastro/cadastro.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Etapas por Checklist\">\n  <button \n    [disabled]=\"loadingNavBar === true\"\n    [routerLink]=\"['../']\"\n    >\n    Voltar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\">\n        <div class=\"mtc-title\">Dados da Checklist</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"checklist\">Checklist</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"checklist\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingChecklist\"\n              labelForId=\"ID_LOGI_YMS_CHEC\"\n              bindLabel=\"NM_CHEC\"\n              bindValue=\"ID_LOGI_YMS_CHEC\"\n              id=\"ID_LOGI_YMS_CHEC\"\n              formControlName=\"ID_LOGI_YMS_CHEC\" \n              [ngClass]=\"onFieldError('ID_LOGI_YMS_CHEC') + ' ' + onFieldRequired('ID_LOGI_YMS_CHEC')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_YMS_CHEC')\" message=\"Checklist é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </form>\n      <div class=\"row mb-4\">\n        <div class=\"col mb-3\">\n          <hr>\n        </div>\n      </div>\n      <message\n        *ngIf=\"loadingConsulta\"\n        icon=\"fas fa-cog fa-spin\"\n        text=\"Estamos buscando informações da Checklist selecionada...\">\n      </message>\n      <div [hidden]=\"loadingConsulta\">\n        <div class=\"row mb-2 mt-4\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Etapas associadas a Checklist</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger\"\n                (click)=\"onLimparAssociacoes()\">\n                <i class=\"fas fa-trash\"></i>\n                <span>Limpar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"showEtapas && etapasAssociadas.length > 0\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigAssocEtapas\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\" width=\"20%\">ID</th>\n                  <th scope=\"col\" width=\"75%\">Etapa</th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let etapa of etapasAssociadas\" >\n                  <td width=\"20%\">{{ etapa.ID_LOGI_YMS_ETAP }}</td>\n                  <td width=\"75%\">\n                   {{ etapa.NM_ETAP | uppercase }}\n                  </td>\n                  <td class=\"text-center\" width=\"5%\">\n                    <btn-icon\n                      icon=\"fas fa-trash\"\n                      size=\"small\"\n                      (click)=\"onDeleteEtapa(etapa)\">\n                    </btn-icon>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"showEtapas && etapasAssociadas.length === 0\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-exchange-alt\"\n              text=\"Nenhuma associação encontrada\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Pesquisa de etapas</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"getEtapas()\"\n              [disabled]=\"searching === true || formEtapas.valid == false\">\n              <i class=\"fas fa-search\"></i>\n              <span \n              [tooltip]=\"formEtapas.valid == false ? 'Digite um termo de pesquisa':''\"\n              container=\"body\"\n              placement =\"left\">Pesquisar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formEtapas\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_LOGI_YMS_ETAP\">ID</option>\n                <option value=\"NM_ETAP\" selected> Nome Etapa</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-9\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keydown.enter)=\"getEtapas()\"\n                >\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div *ngIf=\"etapasLista.length > 0\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de etapas</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarEtapas()\"\n                [disabled]=\"searching === true || form.valid === false\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span\n                  [tooltip]=\"form.valid == false ? 'Selecione uma Checklist':''\"\n                  container=\"body\"\n                  placement =\"left\">Associar\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigEtapas\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    width=\"5%\">\n                    <btn-icon\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll()\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" width=\"85%\">Etapas</th>\n                  <th scope=\"col\" width=\"10%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let etapa of etapasLista; let i = index;\">\n                  <td class=\"text-center\" width=\"5%\">\n                    <btn-icon\n                      [icon]=\"etapa.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onCheckEtapa(i, etapa)\">\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    width=\"85%\"\n                    (click)=\"onCheckEtapa(i, etapa)\">\n                    {{ etapa.ID_LOGI_YMS_ETAP }} - {{ etapa.NM_MATE | uppercase }}\n                  </td>\n                  <td\n                  width=\"10%\"\n                  class=\"hover\">\n                    <div>\n                      <i\n                      class=\"far fa-question-circle\"\n                      [tooltip]=\"tooltipDetalhesEtapa\"\n                      placement=\"left\"\n                      container=\"body\"\n                      >\n                      </i>\n\n                      <ng-template #tooltipDetalhesEtapa>\n                        <table>\n                          <tbody>\n                            <tr>\n                              <th>Classe: </th>\n                              <td class=\"text-left\">{{etapa.NM_CLAS || 'NENHUMA INFORMAÇÃO'}}</td>\n                            </tr>\n                            <tr>\n                              <th>Linha: </th>\n                              <td class=\"text-left\">{{etapa.NM_LINH || 'NENHUMA INFORMAÇÃO'}}</td>\n                            </tr>\n                            <tr *ngIf = \"etapa.IN_STAT == 1\">\n                              <th><i class=\"far fa-check-circle text-success\"></i></th>\n                              <td class=\"text-left\">Etapa {{etapa.DS_STAT}}</td>\n                            </tr>\n                            <tr *ngIf = \"etapa.IN_STAT != 1\">\n                              <th><i class=\"fas fa-ban text-danger \"></i></th>\n                              <td class=\"text-left\">Etapa {{etapa.DS_STAT}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </ng-template>\n\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"searching === true\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando os etapas para você...\">\n          </message>\n        </div>\n      </div>\n      <div *ngIf=\"searching === false\">\n        <div class=\"row\" *ngIf=\"etapasListaEmpty && loadingEtapasLista\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"Nenhuma informação encontrada\">\n            </message>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"etapasLista.length === 0 && !firstSearch\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-search\"\n              text=\"Preecha os campos acima para pesquisar etapas\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n\n\n");

/***/ }),

/***/ "QmfS":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/associacao-etapas-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaYmsAssociacaoEtapasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasRoutingModule", function() { return LogisticaYmsAssociacaoEtapasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "bCd4");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "j3ka");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAssociacaoEtapasListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsAssociacaoEtapasCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsAssociacaoEtapasCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaYmsAssociacaoEtapasRoutingModule = class LogisticaYmsAssociacaoEtapasRoutingModule {
};
LogisticaYmsAssociacaoEtapasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaYmsAssociacaoEtapasRoutingModule);



/***/ }),

/***/ "bCd4":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/cadastro/cadastro.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LogisticaYmsAssociacaoEtapasCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasCadastroComponent", function() { return LogisticaYmsAssociacaoEtapasCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "Q0pW");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "4WXJ");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../checklist/services/checklist.service */ "JixU");
/* harmony import */ var _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/associacao-etapas.service */ "3l7r");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_15__);



//Services






//Bootstrap


//Angular



//rxjs

//interfaces

let LogisticaYmsAssociacaoEtapasCadastroComponent = class LogisticaYmsAssociacaoEtapasCadastroComponent {
    /* Pagination */
    constructor(pnotify, formBuilder, titleService, activatedRoute, localeService, atividadesService, checklistService, confirmModalService, associacaoEtapasService) {
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.localeService = localeService;
        this.atividadesService = atividadesService;
        this.checklistService = checklistService;
        this.confirmModalService = confirmModalService;
        this.associacaoEtapasService = associacaoEtapasService;
        this.etapas = [];
        this.etapasLista = [];
        this.breadCrumbTree = [];
        this.etapasAssociadas = [];
        this.toggleAll = false;
        this.searching = false;
        this.noEtapas = true;
        this.firstSearch = false;
        this.showEtapas = true;
        this.disabledForm = false;
        this.etapasListaEmpty = false;
        //loading
        this.loading = false;
        this.loadingNavBar = false;
        this.loadingConsulta = false;
        this.loadingEtapasLista = false;
        this.tableConfigAssocEtapas = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false,
        };
        this.tableConfigEtapas = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_9__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getChecklist();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params === null || _params === void 0 ? void 0 : _params.id) {
            this.getAssociacao(_params['id']);
            this.form.get('ID_LOGI_YMS_CHEC').setValue(parseInt(_params['id']));
        }
    }
    consultaFilial(event) {
        this.getAssociacao(event.ID_LOGI_YMS_CHEC);
        this.loadingConsulta = true;
    }
    getAssociacao(id) {
        this.associacaoEtapasService
            .getAssociacaoEtapas({ ID_LOGI_YMS_CHEC: id, IN_STAT: 1 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
            this.loadingConsulta = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.etapasAssociadas = response.body['data'];
            }
            else {
                this.etapasAssociadas = [];
                this.noResult = true;
            }
            if (this.etapasAssociadas.length > 9) {
                this.tableConfigAssocEtapas.fixedHeader = true;
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
            this.noResult = true;
        });
    }
    getChecklist(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = 1;
        _params.IN_PAGI = 0;
        this.loading = true;
        this.checklistService
            .getChecklist(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.checklist = response.body['data'];
                this.noResult = false;
            }
            else {
                this.pnotify.error();
                this.noResult = true;
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.noResult = true;
            }
            catch (error) {
                this.pnotify.error();
            }
        });
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
                descricao: 'Cadastro',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Etapas por Checklist',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_YMS_ETAP: [null],
            ID_LOGI_YMS_CHEC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            NM_AREA: [null],
            IN_STAT: [util__WEBPACK_IMPORTED_MODULE_15__["isNull"]],
            DS_OBSE: [null],
            assocEtapas: this.formBuilder.array([]),
        });
        this.formEtapas = this.formBuilder.group({
            buscarPor: ['NM_ETAP'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
            ID_LOGI_YMS_ETAP: [null],
            NM_ETAP: [null],
        });
    }
    onLimparAssociacoes() {
        this.confirmDelete().subscribe((response) => response ? this.deleteAssociacoes(this.form.get('ID_LOGI_YMS_CHEC').value) : null);
    }
    deleteAssociacoes(params) {
        this.associacaoEtapasService.deleteAssociacoes({ ID_LOGI_YMS_CHEC: params })
            .subscribe((response) => {
            if (response.status === 200) {
                this.etapasAssociadas = [];
                this.pnotify.success(response.body['message']);
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
            this.noResult = true;
        });
    }
    onDeleteEtapa(etapa) {
        this.confirmDelete().subscribe((response) => response ? this.deleteEtapa(etapa) : null);
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteEtapa(etapa) {
        if (!etapa) {
            this.pnotify.notice('Nenhum usuário associado!');
            return;
        }
        etapa['IN_STAT'] = 0;
        this.loadingNavBar = true;
        this.associacaoEtapasService
            .postAssociacaoEtapas(etapa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const etapaId = etapa.ID_ETAP + '@' + etapa.ID_LOGI_YMS_CHEC;
                this.etapasAssociadas = this.etapasAssociadas.filter(etapaAssociado => {
                    const etapaCorrenteId = etapaAssociado.ID_ETAP + '@' + etapaAssociado.ID_LOGI_YMS_CHEC;
                    return etapaId != etapaCorrenteId;
                });
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getEtapas(params) {
        if (this.formEtapas.valid) {
            this.loadingNavBar = true;
            this.searching = true;
            this.etapasLista = [];
            this.loadingEtapasLista = false;
            this.etapasListaEmpty = false;
            const _params = params !== null && params !== void 0 ? params : {};
            _params.IN_STAT = '1';
            _params.IN_PAGI = 0;
            const _obj = this.formEtapas.value;
            if (_obj['pesquisa'])
                _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.associacaoEtapasService
                .getEtapas(_params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
                this.firstSearch = true;
                this.searching = false;
                this.loadingNavBar = false;
                this.loadingEtapasLista = true;
            }))
                .subscribe((response) => {
                if (response.status === 200) {
                    console.log(response.body['result']);
                    this.etapasLista = response.body['result'].map(function (el) {
                        let o = Object.assign({}, el);
                        o.checked = 0;
                        return o;
                    });
                    if (this.etapasLista.length > 9) {
                        this.tableConfigEtapas.fixedHeader = true;
                    }
                    else {
                        this.tableConfigEtapas.fixedHeader = false;
                    }
                }
                else if (response.hasOwnProperty('success') &&
                    response.hasOwnProperty('mensagem')) {
                    this.pnotify.error();
                    this.etapasListaEmpty = true;
                }
                else {
                    this.pnotify.error();
                    this.etapasListaEmpty = true;
                }
            }, (error) => {
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            });
        }
    }
    onAssociarEtapas() {
        this.toggleAll = false;
        this.etapasLista.forEach(el => {
            if (el.checked === 1) {
                const etapa = {
                    ID_ETAP: el.ID_LOGI_YMS_ETAP,
                    NM_ETAP_ASSO: el.NM_ETAP,
                    ID_LOGI_YMS_CHEC: this.form.get('ID_LOGI_YMS_CHEC').value
                };
                this.onAddEtapa(etapa);
                el.checked = 0;
            }
        });
    }
    onAddEtapa(etapa) {
        if (this.checkEtapaExists(this.etapasAssociadas, etapa) === true) {
            this.pnotify.notice('Etapa já está associado!');
            return;
        }
        if (this.etapasAssociadas.length > 9) {
            this.tableConfigAssocEtapas.fixedHeader = true;
        }
        this.postAssociacaoEtapas(Object.assign(Object.assign({}, etapa), { IN_STAT: 1 }));
    }
    checkEtapaExists(lista, etapa) {
        return lista.some((etapaAssociado) => {
            return ((etapaAssociado.ID_LOGI_YMS_CHEC == etapa.ID_LOGI_YMS_CHEC) &&
                (etapaAssociado.ID_ETAP == etapa.ID_ETAP));
        });
    }
    onToggleAll() {
        this.toggleAll = !this.toggleAll;
        this.etapasLista.forEach(el => {
            el.checked = this.toggleAll === true ? 1 : 0;
        });
    }
    onCheckEtapa(index, etapa) {
        this.etapasLista[index].checked = etapa.checked == 0 ? 1 : 0;
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postAssociacaoEtapas(etapa) {
        this.associacaoEtapasService.postAssociacaoEtapas(etapa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.etapasAssociadas = [...this.etapasAssociadas, etapa];
            }
            else {
                this.pnotify.error();
            }
        });
        (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        };
    }
};
LogisticaYmsAssociacaoEtapasCadastroComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsChecklistService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"] },
    { type: _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaYmsAssociacaoEtapasService"] }
];
LogisticaYmsAssociacaoEtapasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-associacao-etapas-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsChecklistService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"],
        _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaYmsAssociacaoEtapasService"]])
], LogisticaYmsAssociacaoEtapasCadastroComponent);



/***/ }),

/***/ "j3ka":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/lista/lista.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LogisticaYmsAssociacaoEtapasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasListaComponent", function() { return LogisticaYmsAssociacaoEtapasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "37vV");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "ph/m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../checklist/services/checklist.service */ "JixU");
/* harmony import */ var _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/associacao-etapas.service */ "3l7r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



//angular



//servicos







// rxjs

let LogisticaYmsAssociacaoEtapasListaComponent = class LogisticaYmsAssociacaoEtapasListaComponent {
    /* Pagination */
    constructor(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, checklistService, detailPanelService, associacaoEtapasService) {
        this.route = route;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.dateService = dateService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.checklistService = checklistService;
        this.detailPanelService = detailPanelService;
        this.associacaoEtapasService = associacaoEtapasService;
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: false,
        };
        this.tableConfigAssocEtapas = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        // Tipos de Situação dos Checklist (Ativo/Inativo)
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
        this.getFilterChecklist();
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
            this.getChecklist(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
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
    buildForm() {
        this.form = this.formBuilder.group({
            ID_LOGI_YMS_CHEC: [null],
            NM_AREA: [null],
            IN_STAT: [null],
            DS_OBSE: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            DT_INCL: [null],
            DT_ATUA: [null],
            CD_CEP: [null],
            DS_ESTA: [null],
            DS_CIDA: [null],
            DS_BAIR: [null],
            DS_LOGR: [null],
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
                descricao: 'Etapas por Checklist',
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
    onDetails(associacaoEtapas) {
        this.getAssociacaoEtapas({ ID_LOGI_YMS_CHEC: associacaoEtapas.ID_LOGI_YMS_CHEC, IN_STAT: 1 });
        this.detailPanelService.show();
        this.associacaoSelecionada = associacaoEtapas;
        this.detailPanelService.loadedFinished(false);
    }
    getChecklist(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.checklistService
            .getChecklist(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.checklist = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.checklist = [];
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
            this.noResult = true;
        });
    }
    getFilterChecklist() {
        this.loadingChecklist = true;
        this.checklistService
            .getChecklist({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingChecklist = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filterChecklist = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }),
            (error) => {
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    getAssociacaoEtapas(params) {
        this.noAssocEtapas = true;
        this.loadingAssociacaoEtapas = true;
        this.associacaoEtapasService
            .getAssociacaoEtapas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingAssociacaoEtapas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.associacaoEtapas = response.body['data'];
                if (this.associacaoEtapas.length > 9) {
                    this.tableConfigAssocEtapas.fixedHeader = true;
                }
                this.noAssocEtapas = false;
            }
            else {
                this.pnotify.notice('Nenhuma associação encontrada!');
                this.noAssocEtapas = true;
                this.associacaoEtapas = [];
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
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
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.associacaoEtapas.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `AssociacaoEtapas${dataExport}`);
    }
};
LogisticaYmsAssociacaoEtapasListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsChecklistService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"] },
    { type: _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoEtapasService"] }
];
LogisticaYmsAssociacaoEtapasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-associacao-etapas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsChecklistService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"],
        _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoEtapasService"]])
], LogisticaYmsAssociacaoEtapasListaComponent);



/***/ }),

/***/ "ph/m":
/*!************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/associacao-etapas/lista/lista.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hc3NvY2lhY2FvLWV0YXBhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=associacao-etapas-associacao-etapas-module-es2015.js.map