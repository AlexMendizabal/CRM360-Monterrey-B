(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfis-perfis-module"],{

/***/ "8oZc":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/perfis/cadastro/cadastro.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    (click)=\"onSave()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form\r\n        [formGroup]=\"form\"\r\n        class=\"d-flex flex-column\"\r\n        autocomplete=\"off\"\r\n        [hidden]=\"loading\"\r\n      >\r\n        <div class=\"mtc-title\">Datos de perfil</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nome\">Nombre</label>\r\n            <input\r\n              id=\"nome\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"nome\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('nome')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"El nombre es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"sigla\">Sigla</label>\r\n            <input \r\n              id=\"sigla\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"sigla\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('sigla')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('sigla')\" message=\"La sigla es obligatoria.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"situacao\">Situación</label>\r\n            <select\r\n              name=\"situacao\"\r\n              id=\"situacao\"\r\n              class=\"form-control\"\r\n              formControlName=\"situacao\"\r\n            >\r\n              <option value=\"1\">Activo</option>\r\n              <option value=\"0\">Inactivo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col mb-3\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <message\r\n        *ngIf=\"atividadesAssociadasLoading\"\r\n        icon=\"fas fa-cog fa-spin\"\r\n        text=\"Estamos buscando la información del perfil seleccionado...\">\r\n      </message>\r\n      <div [hidden]=\"atividadesAssociadasLoading\">\r\n        <div class=\"row mb-2 mt-4\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Actividades asociados al perfil</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger\"\r\n                (click)=\"onRemoverAssociacao()\">\r\n                <i class=\"fas fa-trash\"></i>\r\n                <span>Limpiar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!atividadesAssociadasLoading && atividadesAssociadas.length > 0\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigAtividadesAssociadas\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.atividadesAssociadas ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('atividadesAssociadas')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" width=\"20%\">Código</th>\r\n                  <th scope=\"col\" width=\"70%\">Descripción</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of atividadesAssociadas\" >\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td width=\"20%\">{{ item.id }}</td>\r\n                  <td width=\"70%\">\r\n                   {{ item.nome | uppercase }}\r\n                  </td>\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <btn-icon\r\n                      icon=\"fas fa-trash\"\r\n                      size=\"small\"\r\n                      (click)=\"onRemoverAssociacao(item)\"\r\n                      *ngIf=\"!item.loading\"  \r\n                    >\r\n                    </btn-icon>\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!atividadesLoading && atividadesAssociadas.length === 0\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-exchange-alt\"\r\n              text=\"Ninguna información encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Búsqueda de Actividades</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"getAtividades()\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formAtividades\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-4\">\r\n              <label for=\"buscarPor\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"id\">Id</option>\r\n                <option value=\"nome\" selected>Nombre</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-8\">\r\n              <label>TÉRMINO DE BÚSQUEDA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getAtividades()\"\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"atividades.length > 0 && !atividadesLoading\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Selección de Actividades</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarAtividades()\"\r\n                [disabled]=\"!form.get('id')?.value\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span\r\n                  [tooltip]=\"!form.get('id')?.value ? 'Selecione un perfil':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\">Asociar\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigAtividades\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.atividades ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('atividades')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 90%\">Atividades</th>\r\n                  <th style=\"width: 5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of atividades\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 90%\"\r\n                    (click)=\"item.checked = !item.checked\">\r\n                    ({{ item.moduloNome }}) ({{ item.id }}) {{ item.nome | uppercase }}\r\n                  </td>\r\n                  <td style=\"width: 5%\">\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"atividadesLoading\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos buscando las atividades para usted...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\" *ngIf=\"(atividades.length == 0) && !atividadesLoading\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"Ninguna información encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "C6Zo":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/perfis/perfis.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminPerfisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPerfisModule", function() { return AdminPerfisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _perfis_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfis-routing.module */ "Q/a3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "pAYm");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Jcik");














let AdminPerfisModule = class AdminPerfisModule {
};
AdminPerfisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AdminPerfisListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AdminPerfisCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _perfis_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminPerfisRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_7__["ModuleWrapperModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]
        ]
    })
], AdminPerfisModule);



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
                'Las informaciones serán inactivadas.'
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

/***/ "Jcik":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/perfis/cadastro/cadastro.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminPerfisCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPerfisCadastroComponent", function() { return AdminPerfisCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "8oZc");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "gLWt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_perfis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/perfis.service */ "6bs2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atividades/services/atividades.service */ "UNg1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");



//angular



//services



//rxjs


let AdminPerfisCadastroComponent = class AdminPerfisCadastroComponent {
    constructor(service, formBuilder, pnotify, atividadesService, activatedRoute, router, confirmModalService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.atividadesService = atividadesService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.confirmModalService = confirmModalService;
        this.appTitle = "Registros";
        this.loading = true;
        this.loadingNavBar = false;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        /* Pagination */
        this.tableConfig = {
            subtitleBorder: true
        };
        this.atividades = [];
        this.atividadesLoading = false;
        this.atividadesAssociadas = [];
        this.atividadesAssociadasLoading = false;
        this.tableConfigAtividadesAssociadas = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false,
        };
        this.tableConfigAtividades = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.toggle = {
            atividades: false,
            atividadesAssociadas: false
        };
    }
    ngOnInit() {
        this.buildForm();
        this.onActivatedRoute();
        this.registrarAcesso();
        this.setBreadCrumb();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/admin/home`,
            },
            {
                descricao: 'Lista de perfiles',
                routerLink: `/admin/perfis`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    ngOnDestroy() {
        var _a;
        (_a = this.$activatedRouteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (!(params === null || params === void 0 ? void 0 : params.id)) {
            this.loading = false;
            return;
        }
        this.getPerfil(params === null || params === void 0 ? void 0 : params.id);
        this.getAtividadesAssociadas({ "perfilId": params === null || params === void 0 ? void 0 : params.id });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sigla: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situacao: [1]
        });
        this.formAtividades = this.formBuilder.group({
            buscarPor: ['nome'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
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
    getPerfil(id) {
        this.loading = true;
        this.service
            .getPerfil({ id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            let data = response.body["data"][0];
            this.form.patchValue(data);
        });
    }
    onSave() {
        this.loadingNavBar = true;
        let params = this.form.value;
        //console.log(params);
        this.service
            .postPerfil(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            this.pnotify.success();
            /*this.router.navigate(["./../"], {
               relativeTo: this.activatedRoute
             });*/
        }, error => {
            var _a;
            let message = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onEliminar() {
        this.loadingNavBar = true;
        let params = this.form.value;
        //console.log(params);
        this.service
            .postPerfil(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            this.pnotify.delete();
            /*this.router.navigate(["./../"], {
               relativeTo: this.activatedRoute
             });*/
        }, error => {
            var _a;
            let message = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getAtividades() {
        var _a, _b;
        const buscarPor = (_a = this.formAtividades.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
        const pesquisa = (_b = this.formAtividades.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
        }
        this.toggle.atividades = false;
        this.atividadesLoading = true;
        this.atividadesService
            .getAtividades(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.atividadesLoading = false;
        }))
            .subscribe(response => {
            if (response.status != 200) {
                this.atividades = [];
                return;
            }
            let data = response.body['data'];
            this.atividades = data.filter(atividade => {
                return !this.atividadesAssociadas.some(item => item.id == atividade.id);
            });
            this.tableConfigAtividades.fixedHeader = this.atividades.length > 9 ? true : false;
        }, error => {
            this.atividades = [];
            console.log(error);
        });
    }
    getAtividadesAssociadas(params) {
        params.IN_STAT = '1';
        params.IN_PAGI = '0';
        /* params.ORDE_BY = 'ID_REFE_ERP' */
        this.atividadesAssociadasLoading = true;
        this.atividadesService
            .getAtividades(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.atividadesAssociadasLoading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            console.log(response);
            this.atividadesAssociadas = response.body['data'];
            this.tableConfigAtividadesAssociadas.fixedHeader = this.atividadesAssociadas.length > 9 ? true : false;
        });
    }
    onAssociarAtividades() {
        let atividades = this.atividades.filter(material => material.checked);
        this.toggle.atividades = false;
        atividades.map(item => {
            var _a, _b;
            item.loading = true;
            if (this.atividadesAssociadas.some(atividade => (atividade === null || atividade === void 0 ? void 0 : atividade.id) === item.id)) {
                return;
            }
            let params = {
                "atividadeId": (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : "",
                "perfilId": (_b = this.form.get("id").value) !== null && _b !== void 0 ? _b : "",
                "status": "1"
            };
            this.service
                .postAtividadesAssociadas(params)
                .subscribe(response => {
                if (response.status === 200) {
                    this.atividadesAssociadas = [...this.atividadesAssociadas, Object.assign(Object.assign({}, item), { checked: false, loading: false, attividadeId: item.id, perfilId: this.form.get("id").value })];
                    this.atividades = this.atividades.filter(material => !material.checked);
                    this.tableConfigAtividadesAssociadas.fixedHeader = this.atividadesAssociadas.length > 9 ? true : false;
                }
            }, error => {
                item.loading = false;
            });
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    onRemoverAssociacao(atividade) {
        let _atividades = atividade ? [atividade] : this.atividadesAssociadas.filter(atividade => atividade.checked);
        let atividades = _atividades.map(item => { return { atividadeId: item.id, perfilId: this.form.get('id').value }; });
        this.toggle.atividadesAssociadas = false;
        if (atividades.length == 0) {
            this.pnotify.notice("Nenhuma atividade selecionada.");
            return;
        }
        this.confirmDelete()
            .subscribe((response) => {
            if (!response) {
                this.atividadesAssociadas.map(item => item.checked = false);
                return;
            }
            atividades.map(item => {
                item["status"] = '0';
                item["loading"] = true;
                this.service
                    .postAtividadesAssociadas(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    item["loading"] = false;
                }))
                    .subscribe(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    this.atividadesAssociadas = this.atividadesAssociadas
                        .filter(atividade => atividade.id != item.atividadeId);
                    this.tableConfigAtividadesAssociadas.fixedHeader = this.atividadesAssociadas.length > 9 ? true : false;
                });
            });
        });
    }
    onToggleAll(item) {
        this.toggle[item] = !this.toggle[item];
        this[item].map(material => material.checked = this.toggle[item]);
    }
};
AdminPerfisCadastroComponent.ctorParameters = () => [
    { type: _services_perfis_service__WEBPACK_IMPORTED_MODULE_6__["AdminPerfisService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] }
];
AdminPerfisCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-perfis-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_perfis_service__WEBPACK_IMPORTED_MODULE_6__["AdminPerfisService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]])
], AdminPerfisCadastroComponent);



/***/ }),

/***/ "Q/a3":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/perfis/perfis-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminPerfisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPerfisRoutingModule", function() { return AdminPerfisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Jcik");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "pAYm");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminPerfisListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminPerfisCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminPerfisCadastroComponent"]
    }
];
let AdminPerfisRoutingModule = class AdminPerfisRoutingModule {
};
AdminPerfisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminPerfisRoutingModule);



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

/***/ "WJIb":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/perfis/lista/lista.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Lista de Perfiles\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpiar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n  <button type=\"button\" [routerLink]=\"['../novo']\">Adicionar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input id=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"DIGITE...\" formControlName=\"nome\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"matricula\">Sigla</label>\r\n          <input id=\"matricula\" type=\"text\" class=\"form-control\" placeholder=\"DIGITE...\" formControlName=\"sigla\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"situacao\">Situación</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"situacao\"  \r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"1\">Activo</option>\r\n            <option value=\"0\">Inactivo</option>\r\n            <option value=\"''\">Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-1\">\r\n          <label for=\"registrosPorPagina\">Registros</label>\r\n          <select\r\n            class=\"custom-select form-control\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"registrosPorPagina\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\" [hidden]=\"loading || noResult\">\r\n    <div>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th style=\"width:100px\">Id</th>\r\n            <th>Nombre</th>\r\n            <th>Sigla</th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n            <!-- <th class=\"align-middle\" style=\"width:70px\"></th> -->\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of data; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\">\r\n              {{ item.id | number:'6.0-0' }}\r\n            </td>\r\n            <td>\r\n              {{ item.nome }}\r\n            </td>\r\n            <td> {{ item.sigla }} </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                container=\"body\"\r\n              >\r\n                <a [routerLink]=\"['./', item.id]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Ninguna información encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "bJ6V":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/perfis/lista/lista.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wZXJmaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BlcmZpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1jaGVjayB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmEtYmFuIHtcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "gLWt":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/perfis/cadastro/cadastro.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGVyZmlzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "pAYm":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/perfis/lista/lista.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPerfisListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPerfisListaComponent", function() { return AdminPerfisListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "WJIb");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "bJ6V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_perfis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/perfis.service */ "6bs2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



//angular



//rxjs

//services





let AdminPerfisListaComponent = class AdminPerfisListaComponent {
    constructor(service, pnotify, route, formBuilder, activatedRoute, atividadesService, routerService, dateService) {
        this.service = service;
        this.pnotify = pnotify;
        this.route = route;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.loading = true;
        this.loadingNavBar = false;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/admin/home'
            },
            {
                descricao: 'Lista de perfiles'
            }
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        /* Pagination */
        this.tableConfig = {
            subtitleBorder: true
        };
        this.form = this.formBuilder.group({
            nome: [null],
            sigla: [null],
            pagina: [1],
            registrosPorPagina: [this.itemsPerPage],
            situacao: ['1'],
            t: [(new Date()).getTime()]
        });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    registrarAcesso() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(response => {
            const _response = this.routerService.getBase64UrlParams(response);
            if (_response === null || _response === void 0 ? void 0 : _response.registrosPorPagina) {
                this.itemsPerPage = _response === null || _response === void 0 ? void 0 : _response.registrosPorPagina;
            }
            this.form.patchValue(_response);
            this.getPerfis(this.getParams());
        });
    }
    getPerfis(params) {
        this.itemsPerPage = this.form.get("registrosPorPagina").value;
        if (!this.loading) {
            this.loadingNavBar = true;
        }
        this.service
            .getPerfis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.data = [];
                this.noResult = true;
                this.pnotify.notice('Não houve retorno para sua consulta');
                return;
            }
            this.noResult = false;
            this.data = response.body['data'];
            this.totalItems = response.body['total'];
        }, error => {
            this.data = [];
            this.noResult = true;
            this.pnotify.error();
        });
    }
    onPageChanged(event) {
        this.form.get('pagina').setValue(event.page);
        this.form.get('t').setValue((new Date).getTime());
        this.route.navigate([], {
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    onFilter() {
        this.form.get("t").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
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
    onReset() {
        this.form.patchValue({
            nome: null,
            sigla: null,
            pagina: 1,
            registrosPorPagina: this.itemsPerPage,
            situacao: '1',
            time: [(new Date()).getTime()]
        });
        this.onFilter();
    }
};
AdminPerfisListaComponent.ctorParameters = () => [
    { type: _services_perfis_service__WEBPACK_IMPORTED_MODULE_7__["AdminPerfisService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] }
];
AdminPerfisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-perfis-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_perfis_service__WEBPACK_IMPORTED_MODULE_7__["AdminPerfisService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])
], AdminPerfisListaComponent);



/***/ })

}]);
//# sourceMappingURL=perfis-perfis-module-es2015.js.map