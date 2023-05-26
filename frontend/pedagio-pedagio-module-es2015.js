(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedagio-pedagio-module"],{

/***/ "/koB":
/*!*************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/pedagio.module.ts ***!
  \*************************************************************/
/*! exports provided: PedadioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedadioModule", function() { return PedadioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "lQde");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _pedagio_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pedagio-routing.module */ "ATsa");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lista/lista.component */ "sLan");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "w/5A");





// ngx-bootstrap



















let PedadioModule = class PedadioModule {
};
PedadioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaPedagioListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaPedagioCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _pedagio_routing_module__WEBPACK_IMPORTED_MODULE_21__["LogisticaPedagioRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["SortableModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_20__["NotFoundModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["TemplatesModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
            ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__["CurrencyMaskModule"]
        ]
    })
], PedadioModule);



/***/ }),

/***/ "ATsa":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/pedagio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LogisticaPedagioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPedagioRoutingModule", function() { return LogisticaPedagioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "sLan");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "w/5A");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaPedagioListaComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaPedagioCadastroComponent"]
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
let LogisticaPedagioRoutingModule = class LogisticaPedagioRoutingModule {
};
LogisticaPedagioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaPedagioRoutingModule);



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

/***/ "Iez5":
/*!**********************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/lista/lista.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3BlZGFnaW8vbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "L4s3":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/pedagio/cadastro/cadastro.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button>\n    <label for=\"file\" class=\"hover\">Importar</label>\n    <input type=\"file\" id=\"file\" style=\"display: none;\" (input)=\"getFile($event)\">\n  </button>\n  <button\n    [disabled]=\"count === 0\"\n    (click)=\"onSave()\"  \n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div [hidden]=\"(files.length == 0)\">\n    <custom-table [config]=\"tableConfig\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th\n            [ngClass]=\"file?.checked ? 'border-left-green' : 'border-left-orange'\"\n            class=\"text-center\"\n          >\n            <button\n              type=\"button\"\n              (click)=\"onToggleCheckAll()\"\n              class=\"btn-icon-sm\"\n            >\n              <div\n                class=\"fa-square\"\n                [ngClass]=\"checkAll ? 'fas text-success' : 'far'\"\n                style=\"font-size: 13px;\"\n              >\n              </div>\n            </button>\n          </th>\n          <th class=\"align-middle\" style=\"font-size: 13px;\">#</th>\n          <th class=\"align-middle\">Data</th>\n          <th class=\"align-middle\">Unidade</th>\n          <th class=\"align-middle\">Nº Ficha</th>\n          <th class=\"align-middle\">Tipo</th>\n          <th class=\"align-middle\">Valor</th>\n          <th></th>\n          <th\n            style=\"width: 5%\"\n            class=\"align-middle text-center\"\n          >\n            <button\n              type=\"button\"\n              (click)=\"deleteAllElements()\"\n              tooltip=\"Excluir Todos\"\n              placement=\"left\"\n              container=\"body\"\n              class=\"btn-icon-sm\"\n            >\n              <i class=\"far fa-trash-alt text-danger\"></i>\n            </button>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let file of files | slice : begin : end; let i = index\">\n          <td\n            [ngClass]=\"file?.checked ? 'border-left-green' : 'border-left-orange'\"\n            style=\"width: 5%\"\n            class=\"text-center\"\n          >\n            <button\n              type=\"button\"\n              class=\"btn-icon-sm\"\n              (click)=\"onToggleCheck(file)\"\n            >\n              <div\n                class=\"hover fa-square\"\n                [ngClass]=\"file?.checked ? 'fas text-success' : 'far'\"  \n              >\n              </div>\n            </button>\n          </td>\n          <td class=\"align-middle\" style=\"width: 40px;\"> {{ i + 1 }}</td>\n          <td class=\"align-middle\">{{ file[0] | date : 'dd/MM/yyyy'}}</td>\n          <td class=\"align-middle\">{{ file[1] }}</td>\n          <td class=\"align-middle\">{{ file[2]}}</td>\n          <td class=\"align-middle\">{{ file[3] }}</td>\n          <td class=\"align-middle\">{{ file[4] | currency : 'BRL' : 'symbol' : '1.2-2'}}</td>\n          <td class=\"align-middle\" style=\"width: 5%;\">\n            <div\n              *ngIf=\"file?.status == 2\"\n              tooltip=\"Integrado\"\n              placement=\"left\"\n              container=\"body\"\n            >\n              <i class=\"far fa-check-circle text-success\"></i>\n            </div>\n          </td>\n          <td class=\"align-middle text-center\" style=\"width: 5%\">  \n            <button\n              type=\"button\"\n              class=\"btn-icon-sm\"\n              tooltip=\"Excluir\"\n              placement=\"left\"\n              container=\"body\"\n              (click)=\"deleteElement(i)\"\n            >\n              <i class=\"far fa-trash-alt text-danger\"></i>\n            </button>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  <div [hidden]=\"files.length != 0 && !loading\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "U012":
/*!****************************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/cadastro/cadastro.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-left-green {\n  border-left-color: green;\n}\n\n.border-left-orange {\n  border-left-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcGVkYWdpby9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcGVkYWdpby9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItbGVmdC1ncmVlbntcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZWVuO1xufVxuXG4uYm9yZGVyLWxlZnQtb3Jhbmdle1xuICBib3JkZXItbGVmdC1jb2xvcjogb3JhbmdlO1xufSJdfQ== */");

/***/ }),

/***/ "jULS":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/pedagio/lista/lista.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button \n  [disabled]=\"form.status == 'INVALID'\"\n  (click)=\"onSearch()\">\n    Filtrar\n  </button>\n  <button [routerLink]=\"['./novo']\">\n    Novo\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"dtInicial\">Data inicial</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Digite...\"\n            formControlName=\"DT_INIC\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"dtFinal\">Data Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Digite...\"\n            formControlName=\"DT_FINA\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"empresas\"\n            [virtualScroll]=\"true\"\n            labelForId=\"empresa\"\n            bindLabel=\"NM_FANT\"\n            bindValue=\"CD_EMPR\"\n            id=\"empresa\"\n            (change)=\"onSearch()\"\n            formControlName=\"CD_EMPR\"\n            placeholder=\"Selecione...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"pedido\">Código da ficha</label>\n          <input\n            id=\"pedido\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"DIGITE...\" \n            formControlName=\"CD_FICH\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col\">\n          <label >Tipo do transporte</label>\n          <input\n            id=\"pedido\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"DIGITE...\" \n            formControlName=\"DS_TIPO\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"itensPorPagina\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            (change)=\"setItensPerPage($event.target.value); onSearch()\"\n            formControlName=\"TT_REGI_PAGI\"\n            >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center\">Lançamento</th>\n            <th class=\"text-center\">Código da Empresa</th>\n            <th class=\"text-center\">Código da Ficha</th>\n            <th class=\"text-center\">Valor</th>\n            <th class=\"text-center\">Tipo do Transporte</th>\n            <th class=\"text-center\">Data de referência</th>\n            <th class=\"text-center\">Responsável</th>\n            <th class=\"text-center\">Data do cadastro</th>\n            <th *ngIf=\"inAcessoExcluir\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>  \n          <tr *ngFor=\"let item of items; let i = index\">\n            <td class=\"text-center\">{{ item.ID | number: '3.0-0' }}</td>\n            <td class=\"text-center\">{{ item.CD_EMPR }}</td>\n            <td class=\"text-center\">{{ item.CD_FICH }}</td>\n            <td class=\"text-center\">{{ item.VL_TOTA | currency : 'BRL' }}</td>\n            <td class=\"text-center\">{{ item.DS_TIPO }}</td>\n            <td class=\"text-center\">{{ item.DT_REFE | date : 'dd/MM/yyyy'}}</td>\n            <td class=\"text-center\">{{ item.NM_USUA }}</td>\n            <td class=\"text-center\">{{ item.DT_INCL | date : 'dd/MM/yyyy'}}</td>\n            <td\n              class=\"align-middle text-center\"\n              style=\"width: 5%\"\n              *ngIf=\"inAcessoExcluir\"\n            >  \n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Excluir\"\n                placement=\"left\"\n                container=\"body\"\n                (click)=\"onConfirmDelete(item, i)\"\n              >\n                <i class=\"far fa-trash-alt text-danger\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "sLan":
/*!********************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/lista/lista.component.ts ***!
  \********************************************************************/
/*! exports provided: LogisticaPedagioListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPedagioListaComponent", function() { return LogisticaPedagioListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "jULS");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "Iez5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_pedagio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/pedagio.service */ "sxq+");
/* harmony import */ var _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/steellog.service */ "8L2n");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/admin/perfis/services/perfis.service */ "6bs2");



//angular



//ngx


//services








let LogisticaPedagioListaComponent = class LogisticaPedagioListaComponent {
    constructor(formBuilder, activatedRoute, route, routerService, localeService, dateService, atividadesService, pnotify, logisticaPedagioService, steelLogService, confirmModalService, perfilService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.routerService = routerService;
        this.localeService = localeService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.logisticaPedagioService = logisticaPedagioService;
        this.steelLogService = steelLogService;
        this.confirmModalService = confirmModalService;
        this.perfilService = perfilService;
        this.appTitle = "Pedágio";
        this.breadCrumbTree = [];
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
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
        this.items = [];
        this.empresas = [];
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
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
        this.getEmpresas();
        this.verificaPerfil();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0)
                this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response['TT_REGI_PAGI'];
            this.getDadosPedagio(this.getParams());
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID: [null],
            CD_EMPR: [null],
            CD_FICH: [null],
            VL_TOTA: [null],
            DS_TIPO: [null],
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
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getEmpresas() {
        this.steelLogService
            .getEmpresas()
            .subscribe(response => {
            if (response.status === 200) {
                this.empresas = response.body['data'];
            }
        });
    }
    getDadosPedagio(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.logisticaPedagioService
            .get(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.items = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.items = [];
                this.noResult = true;
                this.pnotify.notice('Nenhum resultado para sua consulta.');
            }
        }, error => {
            this.items = [];
            this.noResult = true;
            this.pnotify.error();
        });
    }
    delete(pedagio, index) {
        this.loadingNavBar = true;
        this.logisticaPedagioService
            .delete(pedagio.ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            this.items.splice(index, 1);
            this.pnotify.success();
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onConfirmDelete(pedagio, index) {
        const type = 'delete';
        const title = 'Confirmar remoção do registro?';
        const message = 'Deseja realmente excluir o registro?';
        const cancelTxt = 'Cancelar';
        const okTxt = 'Confirmar';
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .subscribe((success) => {
            if (success) {
                this.delete(pedagio, index);
            }
        });
    }
    setItensPerPage(ev) {
        this.itemsPerPage = ev;
        return this.itemsPerPage;
    }
    /* Paginação */
    onPageChanged(event) {
        this.form.get("PAGI").setValue(event.page);
        this.onSearch();
    }
    /* Paginação */
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
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
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
    // Validação de formulário
    verificaPerfil() {
        const matricula = (JSON.parse(localStorage.getItem("currentUser")))["info"]["matricula"];
        this.inAcessoExcluir = false;
        this.perfilService
            .getPerfil({ sigla: "LOGI_PEDA_ACES_EXCL", matricula: matricula })
            .subscribe((response) => {
            if (response.status === 200) {
                this.inAcessoExcluir = true;
            }
        });
    }
    onReset() {
        this.form.reset();
    }
};
LogisticaPedagioListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _services_pedagio_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaPedagioService"] },
    { type: _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaSteellogService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"] },
    { type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__["AdminPerfisService"] }
];
LogisticaPedagioListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-pedagio-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _services_pedagio_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaPedagioService"],
        _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaSteellogService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"],
        src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__["AdminPerfisService"]])
], LogisticaPedagioListaComponent);



/***/ }),

/***/ "sxq+":
/*!***********************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/services/pedagio.service.ts ***!
  \***********************************************************************/
/*! exports provided: LogisticaPedagioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPedagioService", function() { return LogisticaPedagioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaPedagioService = class LogisticaPedagioService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    get(params) {
        return this.http.get(`${this.api}/logistica/pedagio`, {
            params: params,
            observe: "response"
        });
    }
    post(params) {
        return this.http.post(`${this.api}/logistica/pedagio`, params, { observe: "response" });
    }
    delete(id) {
        return this.http.delete(`${this.api}/logistica/pedagio/${id}`, { observe: "response" });
    }
};
LogisticaPedagioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaPedagioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaPedagioService);



/***/ }),

/***/ "w/5A":
/*!**************************************************************************!*\
  !*** ./src/app/modules/logistica/pedagio/cadastro/cadastro.component.ts ***!
  \**************************************************************************/
/*! exports provided: LogisticaPedagioCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPedagioCadastroComponent", function() { return LogisticaPedagioCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "L4s3");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "U012");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _services_pedagio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/pedagio.service */ "sxq+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



//angular

//services




//rxjs

let LogisticaPedagioCadastroComponent = class LogisticaPedagioCadastroComponent {
    constructor(xlsxService, pnotifyService, confirmModalService, LogisticaPedagioService) {
        this.xlsxService = xlsxService;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.LogisticaPedagioService = LogisticaPedagioService;
        this.appTitle = "Cadastro";
        this.breadCrumbTree = [];
        this.checkAll = false;
        this.files = [];
        this.headers = [];
        this.save = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.count = 0;
        this.blocked = false;
        this.tableConfig = {
            subtitleBorder: true
        };
    }
    ngOnInit() {
        this.fileSubscription();
        this.setBreadCrumb();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'Pedágio',
                routerLink: './../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    fileSubscription() {
        this.xlsxService
            .fileLoaded
            .subscribe((files) => {
            this.files = [];
            this.loading = false;
            const header = files[0];
            const expectedHeader = ["Data", "Unidade", "Nº da Ficha", "Tipo", "Valor"];
            if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
                this.pnotifyService.error('Arquivo inválido.');
                return;
            }
            files.shift();
            files.map((file) => {
                if (Number.isInteger(file[0])) {
                    file[0] = new Date(Math.floor((file[0] - 25569 + 0.125) * 86400 * 1000));
                    this.files.push(file);
                }
                else {
                    if (file.length === 0)
                        return;
                    const _current = file[0].toString().trim();
                    if (!/^\d{2}\/\d{2}\/\d{4}$/g.test(_current)) {
                        this.pnotifyService.error('Há data inválida no arquivo.');
                        throw new Error(`Invalid date: ${_current}`);
                    }
                    const [day, month, year] = _current.split('/');
                    const date = new Date(year, month, day);
                    file[0] = date;
                    this.files.push(file);
                }
            });
        });
    }
    getFile($event) {
        const files = $event.target.files;
        if (files.length === 0)
            return;
        this.loading = true;
        this.xlsxService
            .getFile($event);
    }
    deleteElement(index) {
        const type = 'delete';
        const title = 'Confirmar remoção do registro?';
        const message = 'Deseja realmente excluir o registro? Ele será excluído somente desta listagem.';
        const cancelTxt = 'Cancelar';
        const okTxt = 'Confirmar';
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .subscribe((success) => {
            if (success) {
                this.files.splice(index, 1);
                this.pnotifyService.success();
            }
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    deleteAllElements() {
        const type = 'delete';
        const title = 'Confirmar remoção de todos os registros?';
        const message = 'Deseja realmente excluir todos os registros?';
        const cancelTxt = 'Cancelar';
        const okTxt = 'Confirmar';
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .subscribe((success) => {
            if (success) {
                this.files = [];
                this.pnotifyService.success();
            }
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    onToggleCheck(file) {
        file["checked"] = !file["checked"];
        let count = 0;
        let checkAll = true;
        this.files.forEach(element => {
            if (element['checked']) {
                count++;
            }
            else {
                checkAll = false;
            }
        });
        this.count = count;
        this.checkAll = checkAll;
    }
    onToggleCheckAll() {
        this.checkAll = !this.checkAll;
        this.files.forEach(element => {
            element.checked = this.checkAll;
        });
        this.count = this.checkAll ? this.files.length : 0;
    }
    onSave() {
        this.loading = true;
        let params = [];
        this.files.map((file, index) => {
            if (file["checked"]) {
                params.push(file);
                this.files[index]['status'] == 1;
            }
            else {
                this.files[index]['status'] == 0;
            }
        });
        this.LogisticaPedagioService
            .post(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                let items = response.body["data"];
                items.map((item) => {
                    const current = item["data"];
                    this.files.map((element, index) => {
                        if ((element[1] == current[1]) && (element[2] == current[2])) {
                            this.files[index]['status'] = 2;
                            this.blocked = true;
                        }
                    });
                });
            }
        }, (error) => {
            this.pnotifyService.error();
            this.save = false;
        });
    }
};
LogisticaPedagioCadastroComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"] },
    { type: _services_pedagio_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaPedagioService"] }
];
LogisticaPedagioCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-pedagio-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"],
        _services_pedagio_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaPedagioService"]])
], LogisticaPedagioCadastroComponent);



/***/ })

}]);
//# sourceMappingURL=pedagio-pedagio-module-es2015.js.map