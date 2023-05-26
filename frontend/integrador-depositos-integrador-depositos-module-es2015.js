(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integrador-depositos-integrador-depositos-module"],{

/***/ "3hcN":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/integrador-depositos/lista/lista.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Vínculo Integrador X Depósito\">\n  <button type=\"button\" (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3\">\n          <label for=\"integrador\">Integrador</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"integradores\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_INTE_PEDI\"\n            bindValue=\"ID\"\n            formControlName=\"integrador\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\n      *ngIf=\"loading\"\n    >\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_INTE_PEDI')\">\n              Integrador\n              <span *ngIf=\"key == 'NM_APOI_INTE_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_INTE_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              scope=\"col\"\n              class=\"hover\"\n              [hidden]=\"compressedTable\"\n              width=\"5%\"\n            ></th>\n            <th\n              scope=\"col\"\n              class=\"hover\"\n              [hidden]=\"compressedTable\"\n              width=\"5%\"\n            ></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of dados | orderBy: key:reverse | slice: begin:end;\n              let i = index\n            \"\n          >\n            <td\n              class=\"text-center\"\n              [ngClass]=\"[\n                item.select ? 'bg-row-selected' : '',\n                item.IN_STAT == 0 ? 'border-danger' : 'border-success'\n              ]\"\n            >\n              {{ item.NM_APOI_INTE_PEDI }}\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Editar\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                  <i class=\"fas fa-edit\" (click)=\"onAdd(item)\"> </i>\n                </button>\n              </div>\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  (click)=\"openTab(item)\"\n                  tooltip=\"Detalhes\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-6\">\n      <tabset [hidden]=\"!compressedTable\">\n        <button\n          type=\"button\"\n          class=\"btn-icon close position-absolute\"\n          (click)=\"onClose()\"\n        >\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes\">\n          <div\n            class=\"border-right border-left border-bottom px-3 pt-3\"\n            style=\"overflow: auto; height: 338px;\"\n          >\n            <custom-table *ngIf=\"!noResultDetalhes && loadingDetalhes\">\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Empresa</th>\n                  <th scope=\"col\">Depósito</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosDetalhes\">\n                  <td class=\"text-left\">{{ item.NM_EMPR }}</td>\n                  <td class=\"text-left\">{{ item.NM_DEPO }}</td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <div\n              *ngIf=\"noResultDetalhes\"\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\n              style=\"height: 80%;\"\n            >\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n              ></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n    <div\n      class=\"col-12 mb-2 ml-2\"\n      *ngIf=\"!noResult && dados?.length > itemsPerPage\"\n    >\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dados?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n");

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

/***/ "G/dq":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/integrador-depositos/cadastro/cadastro.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button\n    type=\"button\"\n    [disabled]=\"form.status == 'INVALID'\"\n    (click)=\"onSave()\"\n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <div class=\"row justify-content-md-center mt-3\">\n        <div class=\"col-md-7\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>INTEGRADOR</strong><br />\n                {{ Integrador }}\n              </p>\n            </div>\n          </div>\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"deposito\">Depósitos</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [multiple]=\"true\"\n                  [items]=\"depositosFilter\"\n                  [virtualScroll]=\"true\"\n                  [hideSelected]=\"true\"\n                  [closeOnSelect]=\"false\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"NM_DEPO\"\n                  bindValue=\"ID\"\n                  formControlName=\"depositos\"\n                  [ngClass]=\"onFieldRequired('depositos')\">\n                >\n                </ng-select>\n                <invalid-form-control [show]=\"onFieldInvalid('depositos')\" message=\"Depósito é obrigatório.\"></invalid-form-control>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div\n        class=\"row justify-content-md-center mt-3\"\n        [hidden]=\"noResultDepositos\"\n      >\n        <div class=\"form-group col-md-7\">\n          <label for=\"depositosVinculados\">Depósitos Vinculados</label>\n          <table\n            class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed w-100\"\n          >\n            <tbody>\n              <tr *ngFor=\"let item of dadosDepositosAssociados\">\n                <td class=\"text-truncate text-left\">{{ item.NM_DEPO }}</td>\n                <td style=\"width: 40px;\">\n                  <button\n                    class=\"btn-icon-sm\"\n                    style=\"color: red;\"\n                    tooltip=\"Excluir\"\n                    (click)=\"onDelete(item)\"\n                  >\n                    <i class=\"far fa-trash-alt\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "Y3Cv":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/integrador-depositos.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosIntegradorDepositosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosModule", function() { return AbastecimentoCadastrosIntegradorDepositosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _integrador_depositos_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integrador-depositos-routing.module */ "YUod");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "kAHP");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "YF07");










/* Localização Brasil */


Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a);
/* Localização Brasil */



let AbastecimentoCadastrosIntegradorDepositosModule = class AbastecimentoCadastrosIntegradorDepositosModule {
};
AbastecimentoCadastrosIntegradorDepositosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosIntegradorDepositosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosIntegradorDepositosCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _integrador_depositos_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosIntegradorDepositosRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], AbastecimentoCadastrosIntegradorDepositosModule);



/***/ }),

/***/ "YF07":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/cadastro/cadastro.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosIntegradorDepositosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosCadastroComponent", function() { return AbastecimentoCadastrosIntegradorDepositosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "G/dq");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "qPLo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../integrador-depositos.service */ "cXIl");












//Converte rota em base64


let AbastecimentoCadastrosIntegradorDepositosCadastroComponent = class AbastecimentoCadastrosIntegradorDepositosCadastroComponent {
    constructor(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.service = service;
        this.loaderFullScreen = true;
        this.noResultDepositos = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.depositos = [];
        this.dadosDepositosAssociados = [];
        this.depositosFilter = [];
        this.form = this.formBuilder.group({
            depositos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.titleService.setTitle('Vinculo Integrador X Depósitos');
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
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Vínculo Integrador X Depósitos',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}/integrador-depositos/lista`
                },
                {
                    descricao: 'Cadastro'
                },
            ];
        });
    }
    checkRouterParams() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.setValuesIntegrador(_response.item);
                this.getDepositos();
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    onSave() {
        let depositos = this.form.get("depositos").value;
        let record = {
            ID_APOI_INTE_PEDI: this.IdIntegrador,
            ID_DEPO: depositos.toString(),
            IN_STAT: 1,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.postIntegradorDepositos(record);
    }
    postIntegradorDepositos(record) {
        this.loaderNavbar = true;
        this.service
            .postIntegradorDepositos(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            (this.loaderNavbar = false), this.resetValuesForm(), this.loadDepositosAssociados();
        }))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    this.pnotifyService.success(res['message']);
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    onDelete(item) {
        this.loaderNavbar = true;
        let record = {
            ID_ASSO_INTE_PEDI_DEPO: item.ID,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.confirmDelete()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(result => result ? this.deleteIntegradorDepositos(record) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.loaderNavbar = false;
            this.loadDepositosAssociados();
        }, (error) => {
            this.pnotifyService.error();
            this.loaderNavbar = false;
            this.loadDepositosAssociados();
        });
        this.deleteIntegradorDepositos(record);
    }
    deleteIntegradorDepositos(record) {
        return this.service.deleteIntegradorDepositos(record);
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    loadDepositosAssociados() {
        this.getIntegradorDepositos({
            ID_APOI_INTE_PEDI: this.IdIntegrador
        });
    }
    getDepositos() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.depositos = [];
        this.service
            .getDepositos(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { (this.loaderNavbar = false); (this.loadDepositosAssociados()); }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.depositos = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Depositos');
        });
    }
    getIntegradorDepositos(params) {
        this.dadosDepositosAssociados = [];
        this.loaderNavbar = true;
        this.service
            .getIntegradorDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.filterArrayDepositos();
        }))
            .subscribe(res => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.noResultDepositos = false;
                    this.dadosDepositosAssociados = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResultDepositos = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar depósitos associados');
        });
    }
    filterArrayDepositos() {
        this.depositosFilter = [];
        let depositosFiltrados = [];
        let idDeposito = [];
        if (this.dadosDepositosAssociados.length > 0) {
            this.dadosDepositosAssociados.forEach(deposito => {
                return idDeposito.push(deposito['ID_DEPO']);
            });
            depositosFiltrados = this.depositos.filter(item => idDeposito
                .map(val => item.ID.indexOf(val))
                .map(val => (val > -1 ? false : true))
                .reduce((acc, cum) => acc && cum));
            this.depositosFilter = depositosFiltrados;
        }
        else {
            this.depositosFilter = this.depositos;
        }
    }
    setValuesIntegrador(params) {
        this.Integrador = params['NM_APOI_INTE_PEDI'];
        this.IdIntegrador = params['ID'];
    }
    resetValuesForm() {
        this.form.get('depositos').reset();
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
};
AbastecimentoCadastrosIntegradorDepositosCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosIntegradorDepositosService"] }
];
AbastecimentoCadastrosIntegradorDepositosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosIntegradorDepositosService"]])
], AbastecimentoCadastrosIntegradorDepositosCadastroComponent);



/***/ }),

/***/ "YUod":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/integrador-depositos-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosIntegradorDepositosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosRoutingModule", function() { return AbastecimentoCadastrosIntegradorDepositosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "YF07");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "kAHP");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'lista',
                component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosIntegradorDepositosListaComponent"]
            },
            {
                path: 'cadastro',
                component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosIntegradorDepositosCadastroComponent"]
            },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            }
        ]
    }
];
let AbastecimentoCadastrosIntegradorDepositosRoutingModule = class AbastecimentoCadastrosIntegradorDepositosRoutingModule {
};
AbastecimentoCadastrosIntegradorDepositosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoCadastrosIntegradorDepositosRoutingModule);



/***/ }),

/***/ "cXIl":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/integrador-depositos.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosIntegradorDepositosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosService", function() { return AbastecimentoCadastrosIntegradorDepositosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AbastecimentoCadastrosIntegradorDepositosService = class AbastecimentoCadastrosIntegradorDepositosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getDepositos(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/depositos`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getIntegradorDepositos(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/associacao-integrador-pedidos-depositos`, {
            params: {
                ID_APOI_INTE_PEDI: params['ID_APOI_INTE_PEDI']
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getIntegradoresPedidosFiltro(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/integradores-pedidos`, {
            params: {
                IN_STAT: params
            },
            observe: "response"
        });
    }
    getIntegradoresPedidos(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/integradores-pedidos`, {
            params: {
                IN_STAT: params['IN_STAT'],
                ID: params['ID_APOI_INTE_PEDI']
            },
            observe: "response"
        });
    }
    postIntegradorDepositos(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/associacao-integrador-pedidos-depositos`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    deleteIntegradorDepositos(record) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            body: record
        };
        return this.httpClient.delete(`${this.BASE_URL}/abastecimento/cadastros/associacao-integrador-pedidos-deposito`, options);
    }
};
AbastecimentoCadastrosIntegradorDepositosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AbastecimentoCadastrosIntegradorDepositosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AbastecimentoCadastrosIntegradorDepositosService);



/***/ }),

/***/ "kAHP":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/lista/lista.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AbastecimentoCadastrosIntegradorDepositosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosListaComponent", function() { return AbastecimentoCadastrosIntegradorDepositosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "3hcN");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "yXRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../integrador-depositos.service */ "cXIl");










//Converte rota em base64


let AbastecimentoCadastrosIntegradorDepositosListaComponent = class AbastecimentoCadastrosIntegradorDepositosListaComponent {
    constructor(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loading = false;
        this.loadingDetalhes = false;
        this.noResult = false;
        this.noResultDetalhes = false;
        this.compressedTable = false;
        this.selectedRow = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.dados = [];
        this.dadosDetalhes = [];
        this.integradores = [];
        /* Ordenação */
        this.reverse = false;
        this.key = 'TP_MATE';
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
        this.form = this.formBuilder.group({
            integrador: [null]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.getIntegradores();
        this.titleService.setTitle('Vínculo Integrador X Depósito');
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
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Vínculo Integrador X Depósito'
                }
            ];
        });
    }
    checkRouterParams() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.search(_response);
                this.setFormValues(_response);
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        let integrador = queryParams['ID_APOI_INTE_PEDI'] ? queryParams['ID_APOI_INTE_PEDI'] : "";
        ;
        this.form.patchValue({
            integrador: integrador
        });
    }
    getIntegradores() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.integradores = [];
        this.service
            .getIntegradoresPedidosFiltro(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.integradores = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar fornecedor');
        });
    }
    onFilter() {
        this.setRouterParams({
            ID_APOI_INTE_PEDI: this.form.value['integrador'] === null ||
                this.form.value['integrador'] === undefined
                ? ''
                : this.form.value['integrador'],
            IN_STAT: '',
            NR_PAGE_INIC: '',
            TT_REGI_PAGI: '',
            ORDE_BY: '',
            ORDE_TYPE: ''
        });
        this.onClose();
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(params)
        });
        this.search(params);
    }
    search(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.service
            .getIntegradoresPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.dados = res['body']['result'];
                    this.loading = true;
                    this.noResult = false;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar dados');
            this.noResult = true;
        });
    }
    openTab(i) {
        i.select = !i.select;
        this.getIntegradorDepositos({
            ID_APOI_INTE_PEDI: i['ID']
        });
        this.compressedTable = true;
    }
    getIntegradorDepositos(params) {
        this.loadingDetalhes = false;
        this.noResultDetalhes = false;
        this.loaderNavbar = true;
        this.dadosDetalhes = [];
        this.service
            .getIntegradorDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                    this.dadosDetalhes = res['body']['result'];
                    this.noResultDetalhes = false;
                    this.loadingDetalhes = true;
                }
                else if (res['body']['responseCode'] == 404) {
                    this.loadingDetalhes = false;
                    this.noResultDetalhes = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.loadingDetalhes = false;
            this.pnotifyService.error('Erro ao carregar depósitos vinculados');
        });
    }
    onClose() {
        this.dados.forEach(e => {
            e.select = false;
        });
        this.selectedRow = false;
        this.compressedTable = false;
    }
    onAdd(item) {
        this.router.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams({
                item
            })
        });
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
AbastecimentoCadastrosIntegradorDepositosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosIntegradorDepositosService"] }
];
AbastecimentoCadastrosIntegradorDepositosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosIntegradorDepositosService"]])
], AbastecimentoCadastrosIntegradorDepositosListaComponent);



/***/ }),

/***/ "qPLo":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/cadastro/cadastro.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvaW50ZWdyYWRvci1kZXBvc2l0b3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yXRL":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/lista/lista.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9pbnRlZ3JhZG9yLWRlcG9zaXRvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL2ludGVncmFkb3ItZGVwb3NpdG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWI4ZjAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=integrador-depositos-integrador-depositos-module-es2015.js.map