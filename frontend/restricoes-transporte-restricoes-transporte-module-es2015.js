(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restricoes-transporte-restricoes-transporte-module"],{

/***/ "/83W":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/lista/lista.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaRestricoesTransporteListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteListaComponent", function() { return LogisticaRestricoesTransporteListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "Wgfm");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "N36Y");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/restricoes.service */ "6xMS");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");




// angular



//services



//rxjs


let LogisticaRestricoesTransporteListaComponent = class LogisticaRestricoesTransporteListaComponent {
    constructor(route, restricoesService, pnotify, formBuilder, activatedRoute, atividadesService, routerService, dateService) {
        this.route = route;
        this.restricoesService = restricoesService;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.appTitle = "Restricciones de transporte";
        this.breadCrumbTree = [];
        this.showAdvancedFilter = true;
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        /* Pagination */
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = true;
        this.form = this.formBuilder.group({
            "UUID": [null],
            "NM_REST_TRAN": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            "IN_STAT": [null],
            "DS_OBSE": [null]
        });
    }
    ngOnInit() {
        this.atividadesService.registrarAcesso().subscribe();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI')) {
                this.itemsPerPage = _response.TT_REGI_PAGI;
            }
            this.getRestricoes(this.getParams());
        });
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'Cadastros',
                routerLink: '../../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getRestricoes(params) {
        if (this.loading === false) {
            this.loadingNavBar = true;
        }
        return this.restricoesService
            .getRestricoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.restricoes = response.body["data"];
                this.totalItems = response.body["total"];
                this.noResult = false;
            }
            else {
                this.pnotify.notice("No se encontró información");
                this.noResult = true;
            }
        }, (error) => {
            this.noResult = true;
            this.pnotify.error();
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
    onShowFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    onFilter() {
        let params = this.getParams();
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: params
        });
        this.getRestricoes(params);
    }
    onReset() {
        this.form.reset();
        this.form.get("status").setValue("T");
        this.onFilter();
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: null
        });
    }
    changeType(restricao) {
        restricao.status = restricao.status == 1 ? 0 : 1;
        this.onSave(restricao);
    }
    onSave(restricao) {
        this.restricoesService.postRestricoes(restricao)
            .subscribe((response) => {
            response.status === 200 ? this.pnotify.success() : this.pnotify.error();
        }, (error) => {
            this.pnotify.error();
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
};
LogisticaRestricoesTransporteListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] }
];
LogisticaRestricoesTransporteListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-restricoes-transporte-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])
], LogisticaRestricoesTransporteListaComponent);



/***/ }),

/***/ "4f6A":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/restricoes-transporte.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: LogisticaRestricoesTransporteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteModule", function() { return LogisticaRestricoesTransporteModule; });
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
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _restricoes_transporte_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restricoes-transporte-routing.module */ "fiDC");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lista/lista.component */ "/83W");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "ydEH");

















let LogisticaRestricoesTransporteModule = class LogisticaRestricoesTransporteModule {
};
LogisticaRestricoesTransporteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaRestricoesTransporteListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaRestricoesTransporteCadastroComponent"]
        ],
        imports: [
            _restricoes_transporte_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaRestricoesTransporteRoutingModule"],
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
            ng_brazil__WEBPACK_IMPORTED_MODULE_12__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"],
        ]
    })
], LogisticaRestricoesTransporteModule);



/***/ }),

/***/ "BOG+":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/restricoes-transporte/cadastro/cadastro.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    [disabled]=\"loadingNavBar === true\"\n    [routerLink]=\"['../']\"\n    >\n    Regresar\n  </button>\n  <button\n    [disabled]=\"form.status == 'INVALID' || loadingNavBar === true\"\n    (click) = \"onSave()\"\n    >Ahorrar</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\" class=\"d-flex flex-column align-items-center\" autocomplete=\"off\" [hidden] = \"loading\">\n        <div class=\"mtc-title\">Datos de restricción de transporte</div>\n        <div class=\"form-group col\">\n          <label for=\"nome\">Nombre</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"nome\"\n            formControlName=\"NM_REST_TRAN\"\n            placeholder=\"Escribelo...\"\n            [ngClass]=\"onFieldRequired('NM_REST_TRAN')\"\n          />\n          <invalid-form-control [show]=\"onFieldInvalid('NM_REST_TRAN')\" message=\"Nome é obrigatório.\"></invalid-form-control>\n        </div>\n        <div class=\"form-row col-12\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"status\">Status</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"status\"\n              [virtualScroll]=\"true\"\n              labelForId=\"status\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              id=\"status\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Seleccione...\"\n            >\n            </ng-select>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"prioridade\">Prioridad</label>\n            <input type=\"number\" class=\"form-control\" formControlName=\"NR_PRIO\" min=\"1\">\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"observacao\">Observación</label>\n          <textarea\n            id=\"observacao\"\n            rows=\"5\"\n            formControlName=\"DS_OBSE\"\n            placeholder=\"Escribelo...\"\n            class=\"form-control\"\n            >\n          </textarea>\n        </div>\n      </form>\n      <div class=\"row mb-4\">\n        <div class=\"col mb-3\">\n          <hr>\n        </div>\n      </div>\n      <message\n        *ngIf=\"materiaisAssociadosLoading\"\n        icon=\"fas fa-cog fa-spin\"\n        text=\"Buscamos información sobre la restricción de transporte seleccionada ...\">\n      </message>\n      <div [hidden]=\"materiaisAssociadosLoading\">\n        <div class=\"row mb-2 mt-4\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Materiales asociados con restricciones de transporte</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger\"\n                (click)=\"onRemoverAssociacao()\">\n                <i class=\"fas fa-trash\"></i>\n                <span>Limpiar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!materiaisAssociadosLoading && materiaisAssociados.length > 0\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigMateriaisAssociados\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.materiaisAssociados ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('materiaisAssociados')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" width=\"20%\">Código</th>\n                  <th scope=\"col\" width=\"70%\">Descripción</th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of materiaisAssociados\" >\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td width=\"20%\">{{ item.ID_REFE_ERP }}</td>\n                  <td width=\"70%\">\n                   {{ item.NM_MATE | uppercase }}\n                  </td>\n                  <td class=\"text-center\" width=\"5%\">\n                    <btn-icon\n                      icon=\"fas fa-trash\"\n                      size=\"small\"\n                      (click)=\"onRemoverAssociacao(item)\"\n                      *ngIf=\"!item.loading\"  \n                    >\n                    </btn-icon>\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!materiaisLoading && materiaisAssociados.length === 0\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-exchange-alt\"\n              text=\"No se encontró asociación\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Búsqueda de materiales</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"getMateriais()\">\n              <i class=\"fas fa-search\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-4\">\n              <label for=\"buscarPor\">BÚSQUEDA POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_REFE_ERP\">Código</option>\n                <option value=\"NM_MATE\" selected>Descripción</option>\n                <option value=\"NM_CLAS\" selected>Clase</option>\n                <option value=\"NM_LINH\" selected>Línea</option>\n              </select>\n            </div>\n            <div class=\"form-group col-8\">\n              <label>TÉRMINO DE BÚSQUEDA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getMateriais()\"\n                >\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div *ngIf=\"materiais.length > 0 && !materiaisLoading\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Selección de material</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarMateriais()\"\n                [disabled]=\"!form.get('UUID')?.value\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span\n                  [tooltip]=\"!form.get('UUID')?.value ? 'Seleccione una restricción de transporte':''\"\n                  container=\"body\"\n                  placement =\"left\">Conectar\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigMateriais\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.materiais ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('materiais')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 90%\">Materiales</th>\n                  <th style=\"width: 5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of materiais\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 90%\"\n                    (click)=\"item.checked = !item.checked\">\n                    {{ item.ID_REFE_ERP }} - {{ item.NM_MATE | uppercase }}\n                  </td>\n                  <td style=\"width: 5%\">\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"materiaisLoading\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos investigando los materiales para usted ...\">\n          </message>\n        </div>\n      </div>\n      <div>\n        <div class=\"row\" *ngIf=\"(materiais.length == 0) && !materiaisLoading\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"No se encontró información\">\n            </message>\n          </div>\n        </div>\n        <!-- <div class=\"row\" *ngIf=\"usuariosLista.length === 0 && !firstSearch\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-search\"\n              text=\"Preecha os campos acima para pesquisar usuarios\">\n            </message>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</app-body>\n\n");

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

/***/ "N36Y":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/lista/lista.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvY2FkYXN0cm9zL3Jlc3RyaWNvZXMtdHJhbnNwb3J0ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9yZXN0cmljb2VzLXRyYW5zcG9ydGUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtY2hlY2sge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mYS1iYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "OYGH":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/cadastro/cadastro.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9yZXN0cmljb2VzLXRyYW5zcG9ydGUvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

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
            'Marzon',
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

/***/ "Wgfm":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/restricoes-transporte/lista/lista.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button (click)=\"onReset()\">\n    Limpiar\n  </button>\n  <button (click)=\"onFilter()\">\n    Filtrar\n  </button>\n  <button [routerLink]=\"['../novo']\" >\n    Nuevo\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"nome\">Nombre</label>\n          <input\n            id=\"nome\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"DIGITE...\" \n            formControlName=\"NM_REST_TRAN\" \n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"status\">Status</label>\n          <select\n            name=\"status\"\n            id=\"status\"\n            class=\"form-control\">\n            <option value=\"\">Todos</option>\n            <option value=\"'1'\">Activo</option>\n            <option value=\"'0'\">Inactivo</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div  class=\"col-12 p-0 mt-3\" [hidden] = \"loading || noResult\">\n    <div>\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>Id</th>\n            <th>Nombre</th>\n            <th>Usuario</th>\n            <th width=\"70px\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let restricao of restricoes; let i = index\">\n            <td class=\"text-truncate\"  [ngClass]=\"restricao.IN_STAT == 1 ? 'border-success' : 'border-danger'\"> {{ restricao.UUID }} </td>  \n            <td class=\"text-truncate\"> {{ restricao.NM_REST_TRAN }} </td>\n            <td class=\"text-truncate\"> \n              <span *ngIf=\"!restricao.DT_ATUA\">[{{ restricao.DT_INCL | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\n              <span *ngIf=\"restricao.DT_ATUA\">[{{ restricao.DT_ATUA | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\n              <span>({{ restricao.NR_MATR }})&nbsp; {{ restricao.NM_USUA }}</span>\n            </td>\n            <td class=\"align-middle\">\n              <a class=\"btn-icon-sm\" [routerLink]=\"['../', restricao.UUID]\">\n                <i class=\"fas fa-edit\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "fiDC":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/restricoes-transporte-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LogisticaRestricoesTransporteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteRoutingModule", function() { return LogisticaRestricoesTransporteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "ydEH");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "/83W");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaRestricoesTransporteListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRestricoesTransporteCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRestricoesTransporteCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaRestricoesTransporteRoutingModule = class LogisticaRestricoesTransporteRoutingModule {
};
LogisticaRestricoesTransporteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaRestricoesTransporteRoutingModule);



/***/ }),

/***/ "ydEH":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/cadastro/cadastro.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LogisticaRestricoesTransporteCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteCadastroComponent", function() { return LogisticaRestricoesTransporteCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "BOG+");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "OYGH");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/restricoes.service */ "6xMS");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




// angular



// services



// rxjs

let LogisticaRestricoesTransporteCadastroComponent = class LogisticaRestricoesTransporteCadastroComponent {
    constructor(formBuilder, restricaoService, pnotify, router, activatedRoute, atividadesService, confirmModalService) {
        this.formBuilder = formBuilder;
        this.restricaoService = restricaoService;
        this.pnotify = pnotify;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.confirmModalService = confirmModalService;
        this.appTitle = "registrar";
        this.status = [
            {
                "id": 1,
                "nome": "activo",
                "valor": 1
            },
            {
                "id": 0,
                "nome": "inactivo",
                "valor": 0
            }
        ];
        this.breadCrumbTree = [];
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = true;
        /*loading*/
        this.materiais = [];
        this.materiaisLoading = false;
        this.materiaisAssociados = [];
        this.materiaisAssociadosLoading = false;
        this.tableConfigMateriaisAssociados = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false,
        };
        this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.toggle = {
            materiais: false,
            materiaisAssociados: false
        };
        this.form = this.formBuilder.group({
            "UUID": [null],
            "NM_REST_TRAN": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            "IN_STAT": [1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            "NR_PRIO": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            "DS_OBSE": [null]
        });
        this.formMateriais = this.formBuilder.group({
            buscarPor: ['NM_MATE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
        this.onActivatedRoute();
        this.setBreadCrumb();
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (!(params === null || params === void 0 ? void 0 : params.id)) {
            this.loading = false;
            return;
        }
        this.getRestricao(params === null || params === void 0 ? void 0 : params.id);
        this.getMateriaisAssociados({ "UUID_LOGI_REST_TRAN": params === null || params === void 0 ? void 0 : params.id });
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'Cadastro',
                routerLink: './../../'
            },
            {
                descricao: 'Restricciones de transporte',
                routerLink: '../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    onSave() {
        this.loadingNavBar = true;
        return this.restricaoService
            .postRestricoes(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingNavBar = false;
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.reset();
                this.pnotify.success();
                this.router.navigate(["./../"], { relativeTo: this.activatedRoute });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.noResult = true;
            this.pnotify.error();
        });
    }
    getRestricao(id) {
        this.restricaoService
            .getRestricao(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.patchValue(response.body['data']);
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getMateriais() {
        var _a, _b;
        const buscarPor = (_a = this.formMateriais.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
        const pesquisa = (_b = this.formMateriais.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
        }
        this.toggle.materiais = false;
        this.materiaisLoading = true;
        this.restricaoService
            .getMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.materiaisLoading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.materiais = [];
                return;
            }
            let materiais = response.body['data'];
            this.materiais = materiais.filter(material => {
                return !this.materiaisAssociados.some(item => item.UUID_MATE == material.UUID);
            });
            this.tableConfigMateriais.fixedHeader = this.materiais.length > 9 ? true : false;
        });
    }
    getMateriaisAssociados(params) {
        params.IN_STAT = '1';
        params.IN_PAGI = '1';
        params.ORDE_BY = 'ID_REFE_ERP';
        this.materiaisAssociadosLoading = true;
        this.restricaoService
            .getMateriaisAssociados(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.materiaisAssociadosLoading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.materiaisAssociados = [];
                return;
            }
            this.materiaisAssociados = response.body['data'];
            this.tableConfigMateriaisAssociados.fixedHeader = this.materiaisAssociados.length > 9 ? true : false;
        });
    }
    onAssociarMateriais() {
        let materiais = this.materiais.filter(material => material.checked);
        this.toggle.materiais = false;
        materiais.map(item => {
            var _a, _b;
            item.loading = true;
            if (this.materiaisAssociados.some(material => (material === null || material === void 0 ? void 0 : material.ID_REFE_ERP) === item.ID_REFE_ERP)) {
                return;
            }
            let params = {
                "UUID_LOGI_REST_TRAN": (_a = this.form.get("UUID").value) !== null && _a !== void 0 ? _a : "",
                "UUID_MATE": (_b = item === null || item === void 0 ? void 0 : item.UUID) !== null && _b !== void 0 ? _b : "",
                "IN_STAT": "1"
            };
            this.restricaoService
                .postMateriaisAssociados(params)
                .subscribe(response => {
                if (response.status === 200) {
                    this.materiaisAssociados = [...this.materiaisAssociados, Object.assign(Object.assign({}, item), { checked: false, loading: false, UUID_MATE: item.UUID, UUID_LOGI_REST_TRAN: this.form.get("UUID").value })];
                    this.materiais = this.materiais.filter(material => !material.checked);
                    this.tableConfigMateriaisAssociados.fixedHeader = this.materiaisAssociados.length > 9 ? true : false;
                }
            });
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirma la eliminación', '¿Está seguro de que desea continuar con la eliminación del registro?', 'Cancelar', 'Confirmar');
    }
    onRemoverAssociacao(material) {
        let materiais = material ? [material] : this.materiaisAssociados.filter(material => material.checked);
        this.toggle.materiaisAssociados = false;
        if (materiais.length == 0) {
            this.pnotify.notice("Ningún material seleccionado.");
            return;
        }
        this.confirmDelete()
            .subscribe((response) => {
            if (!response) {
                return;
            }
            materiais.map(item => {
                item.IN_STAT = '0';
                item.loading = true;
                this.restricaoService
                    .postMateriaisAssociados(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                    item.loading = false;
                }))
                    .subscribe(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    this.materiaisAssociados = this.materiaisAssociados
                        .filter(material => material.UUID_MATE != item.UUID_MATE);
                    this.tableConfigMateriaisAssociados.fixedHeader = this.materiaisAssociados.length > 9 ? true : false;
                });
            });
        });
    }
    onToggleAll(item) {
        this.toggle[item] = !this.toggle[item];
        this[item].map(material => material.checked = this.toggle[item]);
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
};
LogisticaRestricoesTransporteCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] }
];
LogisticaRestricoesTransporteCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-restricoes-transporte-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]])
], LogisticaRestricoesTransporteCadastroComponent);



/***/ })

}]);
//# sourceMappingURL=restricoes-transporte-restricoes-transporte-module-es2015.js.map