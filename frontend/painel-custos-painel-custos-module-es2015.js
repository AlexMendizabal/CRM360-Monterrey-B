(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel-custos-painel-custos-module"],{

/***/ "+E1q":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/painel-custos.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ComercialCadastroPainelCustosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastroPainelCustosModule", function() { return ComercialCadastroPainelCustosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../materiais/templates/templates.module */ "11Wi");
/* harmony import */ var _integracoes_dagda_templates_templates_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../integracoes/dagda/templates/templates.module */ "EaA3");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _painel_custos_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./painel-custos-routing.module */ "EQpx");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lista/lista.component */ "6pPh");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulario/formulario.component */ "kUv7");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");















let ComercialCadastroPainelCustosModule = class ComercialCadastroPainelCustosModule {
};
ComercialCadastroPainelCustosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastroPainelCustosListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastroPainelCustosFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_3__["TemplatesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"],
            _integracoes_dagda_templates_templates_module__WEBPACK_IMPORTED_MODULE_2__["ComercialIntegracoesDagdaMateriaisTemplatesModule"],
            _materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["ComercialCadastrosMateriaisTemplatesModule"],
            _painel_custos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastroPainelCustosRoutingModule"],
        ],
    })
], ComercialCadastroPainelCustosModule);



/***/ }),

/***/ "6pPh":
/*!************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/lista/lista.component.ts ***!
  \************************************************************************************/
/*! exports provided: ComercialCadastroPainelCustosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastroPainelCustosListaComponent", function() { return ComercialCadastroPainelCustosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "Mh2h");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "ikGY");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _painel_custos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../painel-custos.service */ "ugnC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");











let ComercialCadastroPainelCustosListaComponent = class ComercialCadastroPainelCustosListaComponent {
    constructor(formBuilder, activatedRoute, servicePainelCustos, router, pnotifyService, dateService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.servicePainelCustos = servicePainelCustos;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.dateService = dateService;
        this.breadCrumbTree = [];
        this.listas = [];
        this.details = [];
        this.showDetailPanel = false;
        this.dadosEmptyDetalhes = false;
        this.dadosfiltro = false;
        this.loaderFullScreen = false;
        this.loaderNavbar = false;
        this.dados = [];
        this.appTitle = 'Painel de Custos';
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage;
        this.orderBy = 'id';
        this.orderType = 'DESC';
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.form = this.formBuilder.group({
            ID_ITEM: [null],
            NM_ITEM: [null],
            NM_LINH: [null],
            NM_FAMI: [null],
            IN_STAT: "",
            registros: 10,
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/comercial/home`,
            },
            {
                descricao: 'Cadastros',
                routerLink: `/comercial/cadastros/${id}`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    showdetailPanel(custo) {
        this.loaderFullScreen = true;
        this.showDetailPanel = true;
        this.servicePainelCustos.getdetail(custo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderFullScreen = false;
        })).subscribe(object => this.details[0] = object);
    }
    CloseshowdetailPanel() {
        this.showDetailPanel = false;
    }
    onEdit(custo) {
        this.router.navigate(['../editar', custo.ID_ITEM], {
            relativeTo: this.activatedRoute,
        });
    }
    onFilter() {
        if (this.form.value['registros']) {
            this.itemsPerPage = this.form.value['registros'];
            this.end = this.form.value['registros'];
        }
        this.loaderFullScreen = true;
        this.currentPage = 1;
        this.dadosfiltro = true;
        this.servicePainelCustos.getlista(this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderFullScreen = false;
        })).subscribe({
            next: response => {
                if (response.status == 200) {
                    this.listas = response.body;
                    this.totalItems = response.body.length;
                    console.log(this.totalItems);
                }
                else {
                    this.pnotifyService.error('Erro ao carregar');
                }
            }
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
    altersituacao(custo) {
        if (custo.IN_STAT == 0) {
            custo.IN_STAT = 1;
            this.servicePainelCustos.putalteracao(custo).subscribe((success) => {
                this.pnotifyService.success();
            }, (error) => {
                this.pnotifyService.error();
            });
        }
        else {
            custo.IN_STAT = 0;
            this.servicePainelCustos.putalteracao(custo).subscribe((success) => {
                this.pnotifyService.success();
            }, (error) => {
                this.pnotifyService.error();
            });
        }
    }
};
ComercialCadastroPainelCustosListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _painel_custos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastroPainelCustosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
ComercialCadastroPainelCustosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _painel_custos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastroPainelCustosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], ComercialCadastroPainelCustosListaComponent);



/***/ }),

/***/ "7Qwg":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/painel-custos/formulario/formulario.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"form-row justify-content-center\">\r\n      <div class=\"form-group col-md-2\">\r\n        <label for=\"ID_ITEM\">COD. ITEM</label>\r\n        <ng-select\r\n        [hidden]=\"!editar\"\r\n        type=\"text\"\r\n        [searchable]=\"true\"\r\n        [clearable]=\"false\"\r\n        [items]=\"dagda\"\r\n        [virtualScroll]=\"true\"\r\n        [hideSelected]=\"true\"\r\n        [closeOnSelect]=\"true\"\r\n        placeholder=\"Selecione...\"\r\n        bindLabel=\"COD_ITEM\"\r\n        bindValue=\"COD_ITEM\"\r\n        formControlName=\"ID_ITEM\"\r\n        (change)=\"selectDagda($event.COD_ITEM)\">\r\n      </ng-select>\r\n      <input [hidden]=\"editar\" formControlName=\"ID_ITEM\" type=\"text\" class=\"form-control\" id=\"ID_ITEM\" readonly>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"NM_ITEM\">MATERIAL</label>\r\n        <input formControlName=\"NM_ITEM\" type=\"text\" class=\"form-control\" id=\"NM_ITEM\" readonly>\r\n      </div>\r\n    </div> \r\n    <div class=\"form-row justify-content-center\">\r\n      <div class=\"form-group col-md-8\">\r\n        <label for=\"NM_LINH\">Linha</label>\r\n        <input formControlName=\"NM_LINH\" type=\"text\" class=\"form-control\" id=\"NM_LINH\" readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row justify-content-center\">\r\n      <div class=\"form-group col-md-8\">\r\n        <label for=\"NM_FAMI\">FAMILIA</label>\r\n        <input formControlName=\"NM_FAMI\" type=\"text\" class=\"form-control\" id=\"NM_FAMI\" readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row justify-content-center\">\r\n      <div class=\"form-group col-md-2\">\r\n        <label for=\"IN_STAT\">SITUAÇÂO</label>\r\n        <select formControlName=\"IN_STAT\" id=\"IN_STAT\" class=\"form-control\">\r\n          <option value=\"1\">Ativos</option>\r\n          <option value=\"0\">Inativos</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n        <label for=\"AL_IPI\">IPI</label>\r\n        <input formControlName=\"AL_IPI\" type=\"number\" class=\"form-control\" id=\"AL_IPI\" min=\"0.00\" max=\"100.00\" step=\"0.01\">\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n        <label for=\"AL_ICMS\">ICMS</label>\r\n        <input formControlName=\"AL_ICMS\" type=\"number\" class=\"form-control\" id=\"AL_ICMS\" min=\"0.00\" max=\"100.00\" step=\"0.01\">\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n        <label for=\"AL_ICMS_ST\">ICMS_ST</label>\r\n        <input formControlName=\"AL_ICMS_ST\" type=\"number\" class=\"form-control\" id=\"AL_ICMS_ST\" min=\"0.00\" max=\"100.00\" step=\"0.01\">\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n        <label for=\"AL_PIS\">PIS</label>\r\n        <input formControlName=\"AL_PIS\" type=\"number\" class=\"form-control\" id=\"AL_PIS\" min=\"0.00\" max=\"100.00\" step=\"0.01\">\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n        <label for=\"AL_COFI\">COFINS</label>\r\n        <input formControlName=\"AL_COFI\" type=\"number\" class=\"form-control\" id=\"AL_COFI\" min=\"0.00\" max=\"100.00\" step=\"0.01\">\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n        <label for=\"AL_FCP\">Fcp</label>\r\n        <input formControlName=\"AL_FCP\" type=\"number\" class=\"form-control\" id=\"AL_FCP\" min=\"0.00\" max=\"100.00\" step=\"0.01\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-body>\r\n\r\n");

/***/ }),

/***/ "EQpx":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/painel-custos-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialCadastroPainelCustosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastroPainelCustosRoutingModule", function() { return ComercialCadastroPainelCustosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "6pPh");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "kUv7");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastroPainelCustosListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastroPainelCustosFormularioComponent"],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastroPainelCustosFormularioComponent"],
    },
    {
        path: '**',
        component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"],
    },
];
let ComercialCadastroPainelCustosRoutingModule = class ComercialCadastroPainelCustosRoutingModule {
};
ComercialCadastroPainelCustosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], ComercialCadastroPainelCustosRoutingModule);



/***/ }),

/***/ "Mh2h":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/painel-custos/lista/lista.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>-->\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" >\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"ID_ITEM\">Cod. Item</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_ITEM\"\r\n                formControlName=\"ID_ITEM\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"NM_LINH\">Linha</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"NM_LINH\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"NM_FAMI\">Familia</label>\r\n              <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"NM_FAMI\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"NM_ITEM\">Material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"NM_ITEM\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n\t\t\t\t\t\t\t<label for=\"IN_STAT\"> Situação </label>\r\n                <select formControlName=\"IN_STAT\" class=\"form-control custom-select\">\r\n                  <option value=\"\">Todos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                  <option value=\"0\">Inativos</option>\r\n\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group col-md-3\">\r\n\t\t\t\t\t\t\t<label for=\"registros\"> Registros </label>\r\n\t\t\t\t\t\t\t<select formControlName=\"registros\" class=\"form-control custom-select\">\r\n              <option value=\"10\">10</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"50\">50</option>\r\n              <option value=\"100\">100</option>\r\n              <option value=\"250\">250</option>\r\n              <option value=\"500\">500</option>\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"dadosfiltro\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-7 pr-0': showDetailPanel}\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th></th>\r\n            <th class=\"text-left\">Cod. Item</th>\r\n            <th class=\"text-left\">Material</th>\r\n\t\t\t\t\t\t<th class=\"text-left\">Linha</th>\r\n            <th class=\"text-left\">Familia</th>\r\n            <th></th>\r\n            <th class=\"text-center\">Situação</th>\r\n            <th class=\"text-center\">Editar</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\" class=\"hover\">\r\n\t\t\t\t\t\t<td></td>\r\n            <td class=\"text-left\" style=\"width: 10rem\" (click)=\"showdetailPanel(lista)\">{{lista.ID_ITEM}}</td>\r\n            <td class=\"text-left\" style=\"width: 20rem\" (click)=\"showdetailPanel(lista)\">{{lista.NM_ITEM}}</td>\r\n            <td class=\"text-left\" style=\"width: 20rem\" (click)=\"showdetailPanel(lista)\">{{lista.NM_LINH}}</td>\r\n            <td class=\"text-left\" style=\"width: 20rem\" (click)=\"showdetailPanel(lista)\">{{lista.NM_FAMI}}</td>\r\n            <td></td>\r\n            <td class=\"text-center\" style=\"width: 5rem\">\r\n              <span tooltip=\"Situação\" class=\"\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" (click)=\"altersituacao(lista)\"  class=\"btn-icon-sm\" [style]=\"lista.IN_STAT == 1 ? 'color: green;' : 'color: red;'\">\r\n                  <i [ngClass]=\"lista.IN_STAT == 1 ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"text-center\" style=\"width: 5rem\">\r\n              <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\" style=\"color: blue;\" (click)=\"onEdit(lista)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n     <div class=\"d-flex justify-content-center mt-3\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"listas < 1 && loaderFullScreen == false\"\r\n      >\r\n      </empty-result>\r\n    </div>\r\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\">Cod. Item</th>\r\n            <th class=\"text-center\">IPI</th>\r\n            <th class=\"text-center\">ICMS</th>\r\n            <th class=\"text-center\">ICMS_ST</th>\r\n            <th class=\"text-center\">PIS</th>\r\n            <th class=\"text-center\">COFINS</th>\r\n            <th class=\"text-center\">FCP</th>\r\n            <button type=\"button\" class=\"close\" (click)=\"CloseshowdetailPanel()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let detail of details\">\r\n            <td class=\"text-center\">{{detail.ID_ITEM}}</td>\r\n            <td class=\"text-center\">{{detail.AL_IPI}}</td>\r\n            <td class=\"text-center\">{{detail.AL_ICMS}}</td>\r\n            <td class=\"text-center\">{{detail.AL_ICMS_ST}}</td>\r\n            <td class=\"text-center\">{{detail.AL_PIS}}</td>\r\n            <td class=\"text-center\">{{detail.AL_COFI}}</td>\r\n            <td class=\"text-center\">{{detail.AL_FCP}}</td>\r\n            <td></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "ULPK":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/formulario/formulario.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9wYWluZWwtY3VzdG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ikGY":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/lista/lista.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-secondary {\n  border-color: #929090 !important;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2FkYXN0cm9zL3BhaW5lbC1jdXN0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTs7RUFFRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2FkYXN0cm9zL3BhaW5lbC1jdXN0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLXNlY29uZGFyeSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ2LCAxNDQsIDE0NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "kUv7":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/formulario/formulario.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialCadastroPainelCustosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastroPainelCustosFormularioComponent", function() { return ComercialCadastroPainelCustosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "7Qwg");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "ULPK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _painel_custos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../painel-custos.service */ "ugnC");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









let ComercialCadastroPainelCustosFormularioComponent = class ComercialCadastroPainelCustosFormularioComponent {
    constructor(formBuilder, activatedRoute, servicePainelCustos, pnotifyService, router) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.servicePainelCustos = servicePainelCustos;
        this.pnotifyService = pnotifyService;
        this.router = router;
        this.breadCrumbTree = [];
        this.id = [];
        this.appTitle = 'Cadastro Painel de Custos';
        this.loaderFullScreen = false;
        this.loaderNavbar = false;
        this.dagda = [];
        this.editar = false;
        this.form = this.formBuilder.group({
            ID: null,
            ID_ITEM: [null],
            NM_ITEM: [null],
            NM_LINH: [null],
            NM_FAMI: [null],
            AL_IPI: 0.0,
            AL_ICMS: 0.0,
            AL_ICMS_ST: 0.0,
            AL_PIS: 0.0,
            AL_COFI: 0.0,
            AL_FCP: 0.0,
            IN_STAT: 1,
        });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            const id = params.id;
            if (id > 0) {
                this.loaderFullScreen = true;
                this.servicePainelCustos.getdetailc(id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                    this.loaderFullScreen = false;
                })).subscribe({
                    next: response => {
                        if (response.status == 200) {
                            this.setFormBuilder(response.body);
                        }
                        else {
                            this.pnotifyService.error('Erro ao carregar');
                        }
                    }
                });
            }
            else {
                this.loaderFullScreen = true;
                this.editar = true;
                this.servicePainelCustos.getdagda().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                    this.loaderFullScreen = false;
                })).subscribe(object => this.dagda = object);
            }
        });
        this.setBreadCrumb();
    }
    selectDagda(id) {
        this.loaderFullScreen = true;
        this.servicePainelCustos.getdagdad(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.loaderFullScreen = false;
        })).subscribe({
            next: response => {
                if (response.status == 200) {
                    this.setFormBuilderd(response.body);
                }
                else {
                    this.pnotifyService.error('Erro ao carregar');
                }
            }
        });
    }
    setFormBuilderd(dagda) {
        this.form.patchValue({
            ID_ITEM: dagda.COD_ITEM,
            NM_ITEM: dagda.DEN_ITEM,
            NM_LINH: dagda.DEN_ESTR_LINPROD,
            NM_FAMI: dagda.DEN_FAMILIA
        });
    }
    setFormBuilder(detalhes) {
        this.form.patchValue({
            ID: detalhes.ID,
            ID_ITEM: detalhes.ID_ITEM,
            NM_ITEM: detalhes.NM_ITEM,
            NM_LINH: detalhes.NM_LINH,
            NM_FAMI: detalhes.NM_FAMI,
            AL_IPI: detalhes.AL_IPI,
            AL_ICMS: detalhes.AL_ICMS,
            AL_ICMS_ST: detalhes.AL_ICMS_ST,
            AL_PIS: detalhes.AL_PIS,
            AL_COFI: detalhes.AL_COFI,
            AL_FCP: detalhes.AL_FCP,
            IN_STAT: detalhes.IN_STAT
        });
    }
    ;
    onInput() {
        this.formChanged = true;
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar Painel de Custos';
            }
            else {
                this.appTitle = 'Cadastro Painel de Custos';
            }
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: `/comercial/home`,
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${id}`,
                },
                {
                    descricao: 'Painel de Custos',
                    routerLink: `/comercial/cadastros/${id}/painel-custos`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    onSubmit() {
        this.loaderFullScreen = true;
        this.submittingForm = true;
        if (this.appTitle == 'Cadastro Painel de Custos') {
            if (this.form.valid) {
                this.servicePainelCustos.postinclusao(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                    this.loaderFullScreen = false;
                })).subscribe((success) => {
                    this.pnotifyService.success();
                    this.router.navigate(['../'], {
                        relativeTo: this.activatedRoute,
                    });
                }, (error) => {
                    this.pnotifyService.error('COD. ITEM já cadastrado!!!');
                });
            }
        }
        else {
            if (this.form.valid) {
                this.servicePainelCustos.putalteracao(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                    this.loaderFullScreen = false;
                })).subscribe((success) => {
                    this.pnotifyService.success();
                    this.router.navigate(['../../'], {
                        relativeTo: this.activatedRoute,
                    });
                }, (error) => {
                    this.pnotifyService.error();
                });
            }
        }
    }
    onCancel() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.router.navigate(['../../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
        });
    }
};
ComercialCadastroPainelCustosFormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _painel_custos_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastroPainelCustosService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ComercialCadastroPainelCustosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _painel_custos_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastroPainelCustosService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], ComercialCadastroPainelCustosFormularioComponent);



/***/ }),

/***/ "ugnC":
/*!************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/painel-custos/painel-custos.service.ts ***!
  \************************************************************************************/
/*! exports provided: ComercialCadastroPainelCustosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastroPainelCustosService", function() { return ComercialCadastroPainelCustosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastroPainelCustosService = class ComercialCadastroPainelCustosService {
    /*private readonly API = `https://crm360.monterrey.com.bo`;*/
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/painel-custos`;
    }
    listar() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getlista(params) {
        return this.http.get(`${this.API}/lista`, { params, observe: 'response' });
    }
    getdetail(params) {
        return this.http.get(`${this.API}/detail/${params.ID_ITEM}`);
    }
    getdetailc(id) {
        return this.http.get(`${this.API}/detail/${id}`, { observe: 'response' });
    }
    getdagda() {
        return this.http.get(`${this.API}/dagda`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getdagdad(id) {
        return this.http.get(`${this.API}/dagda/${id}`, { observe: 'response' });
    }
    postinclusao(params) {
        return this.http.post(`${this.API}/inclusao/`, params);
    }
    putalteracao(params) {
        return this.http.put(`${this.API}/alteracao/${params.ID_ITEM}`, params);
    }
};
ComercialCadastroPainelCustosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ComercialCadastroPainelCustosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ComercialCadastroPainelCustosService);



/***/ })

}]);
//# sourceMappingURL=painel-custos-painel-custos-module-es2015.js.map