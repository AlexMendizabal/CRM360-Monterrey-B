(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["senhas-senhas-module"],{

/***/ "4gcW":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/senhas/services/senhas.service.ts ***!
  \*********************************************************************/
/*! exports provided: LogisticaSenhasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSenhasService", function() { return LogisticaSenhasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaSenhasService = class LogisticaSenhasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getSenhas(params) {
        return this.http.get(`${this.API}/logistica/senhas`, {
            params: params,
            observe: "response"
        });
    }
    postSenha(params) {
        return this.http.post(`${this.API}/logistica/senhas`, params, {
            observe: "response"
        });
    }
};
LogisticaSenhasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaSenhasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaSenhasService);



/***/ }),

/***/ "9txM":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/senhas/cadastro/cadastro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    [disabled]=\"form.status == 'INVALID'\"\n    (click) = \"postSenha(form.value)\"\n    >Salvar</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" class=\"d-flex flex-column align-items-center\" autocomplete=\"off\" [hidden] = \"loading\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"usuario\">Usuário</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"usuario\"\n        formControlName=\"usuario\"\n        placeholder=\"Digite...\"\n        [ngClass]=\"onFieldRequired('DS_USUA')\"\n        formControlName=\"DS_USUA\"\n      />\n      <invalid-form-control [show]=\"onFieldInvalid('DS_USUA')\" message=\"Usuário é obrigatório.\"></invalid-form-control>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"senha\">Senha</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"senha\"\n        formControlName=\"senha\"\n        placeholder=\"Digite...\"\n        [ngClass]=\"onFieldRequired('DS_SENH')\"\n        formControlName=\"DS_SENH\"\n      />\n      <invalid-form-control [show]=\"onFieldInvalid('DS_SENH')\" message=\"Senha é obrigatória.\"></invalid-form-control>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"aplicacao\">Aplicação</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"aplicacao\"\n        formControlName=\"aplicacao\"\n        placeholder=\"Digite...\"\n        [ngClass]=\"onFieldRequired('DS_APLC')\"\n        formControlName=\"DS_APLC\"\n      />\n      <invalid-form-control [show]=\"onFieldInvalid('DS_SENH')\" message=\"Senha é obrigatória.\"></invalid-form-control>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"status\">Status</label>\n      <select name=\"status\" class=\"form-control\" id=\"status\" formControlName=\"IN_STAT\">\n        <option value=\"1\">Ativo</option>\n        <option value=\"0\">Inativo</option>\n      </select>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"observacao\">Observação</label>\n      <textarea\n        id=\"observacao\"\n        rows=\"10\"\n        formControlName=\"observacao\"\n        placeholder=\"Digite...\"\n        class=\"form-control\"\n        formControlName=\"DS_OBSE\"\n        >\n      </textarea>\n    </div>\n  </form>\n</app-body>");

/***/ }),

/***/ "VTJ/":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/senhas/cadastro/cadastro.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2Evc2VuaGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3Nlbmhhcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "X/93":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/senhas/lista/lista.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3Nlbmhhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "aX88":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/senhas/cadastro/cadastro.component.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaSenhasCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSenhasCadastroComponent", function() { return LogisticaSenhasCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "9txM");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "VTJ/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _services_senhas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/senhas.service */ "4gcW");











let LogisticaSenhasCadastroComponent = class LogisticaSenhasCadastroComponent {
    /*loading*/
    constructor(formBuilder, activatedRoute, location, atividadesService, pnotify, senhasService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.senhasService = senhasService;
        this.appTitle = "Cadastro";
        this.breadCrumbTree = [];
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
    }
    ngOnInit() {
        this.buildForm();
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (!params.hasOwnProperty("id")) {
            this.loading = false;
            return;
        }
        this.loading = true;
        this.getSenhas({ "ID_LOGI_SENH": params.id });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_LOGI_SENH: [null],
            DS_SENH: [null],
            DS_USUA: [null],
            DS_APLC: [null],
            IN_STAT: [1],
            DS_OBSE: [null]
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
                descricao: 'Lista de senhas',
                routerLink: './../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getSenhas(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.senhasService
            .getSenhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const senha = response.body['data'][0];
                this.form.patchValue(senha);
            }
            else {
                this.pnotify.notice('Nenhum resultado para sua consulta.');
            }
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (_a) {
                this.pnotify.error();
            }
        });
    }
    postSenha(params) {
        this.loadingNavBar = true;
        this.senhasService
            .postSenha(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success(response.body["message"]);
                this.location.back();
            }
            else {
                this.pnotify.notice('Nenhum resultado para sua consulta.');
            }
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (_a) {
                this.pnotify.error();
            }
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
LogisticaSenhasCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _services_senhas_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaSenhasService"] }
];
LogisticaSenhasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-senhas-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _services_senhas_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaSenhasService"]])
], LogisticaSenhasCadastroComponent);



/***/ }),

/***/ "cNs9":
/*!***********************************************************!*\
  !*** ./src/app/modules/logistica/senhas/senhas.module.ts ***!
  \***********************************************************/
/*! exports provided: SenhasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhasModule", function() { return SenhasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "kkHg");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "aX88");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _senhas_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./senhas-routing.module */ "r03C");
















let SenhasModule = class SenhasModule {
};
SenhasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaSenhasListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaSenhasCadastroComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _senhas_routing_module__WEBPACK_IMPORTED_MODULE_15__["LogisticaSenhasModuleRouting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
        ]
    })
], SenhasModule);



/***/ }),

/***/ "eiyF":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/senhas/lista/lista.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"this.appTitle\">\n  <button (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button \n  [disabled]=\"form.status == 'INVALID'\"\n  (click)=\"onSearch()\">\n    Filtrar\n  </button>\n  <button [routerLink]=\"['./novo']\" >\n    Novo\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <!-- <div class=\"form-group col\">\n          <label for=\"dtInicial\">Data inicial</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Digite...\"\n            formControlName=\"DT_INIC\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"dtFinal\">Data Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Digite...\"\n            formControlName=\"DT_FINA\"\n          />\n          </div>\n        </div> -->\n        <div class=\"form-group col\">\n          <label for=\"usuario\">Usuário</label>\n          <input\n            id=\"usuario\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"DIGITE...\" \n            formControlName=\"DS_USUA\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"senha\">Senha</label>\n          <input\n            id=\"senha\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"DIGITE...\" \n            formControlName=\"DS_SENH\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"aplicacao\">Aplicação</label>\n          <input\n            id=\"aplicacao\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"DIGITE...\" \n            formControlName=\"DS_APLC\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"itensPorPagina\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            (change)=\"setItensPerPage($event); onSearch()\"\n            formControlName=\"TT_REGI_PAGI\"\n            >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center\">Código</th>\n            <th class=\"text-center\">Data de cadastro</th>\n            <th class=\"text-center\">Usuário</th>\n            <th class=\"text-center\">Senha</th>\n            <th class=\"text-center\">Aplicação</th>\n            <th class=\"text-left\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>  \n          <tr *ngFor=\"let item of senhas; let i = index\">\n            <td class=\"text-center\" [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item.ID_LOGI_SENH | number: '6.0-0'}}</td>\n            <td class=\"text-center\">{{ item.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</td>\n            <td class=\"text-center\">{{ item.DS_USUA}}</td>\n            <td class=\"text-center text-truncate\">{{ item.DS_SENH }}</td>\n            <td class=\"text-center text-truncate\">{{ item.DS_APLC }}</td>\n            <td class=\"text-right\">\n              <a class=\"btn-icon-sm\" [routerLink]=\"['./' + item.ID_LOGI_SENH]\" routerLinkActive=\"router-link-active\" >\n                <i class=\"far fa-edit\"></i>\n              </a>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "kkHg":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/senhas/lista/lista.component.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaSenhasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSenhasListaComponent", function() { return LogisticaSenhasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "eiyF");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "X/93");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_senhas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/senhas.service */ "4gcW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../shared/services/core/router.service */ "w8rm");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../shared/services/core/date.service */ "Rk3r");







// services






let LogisticaSenhasListaComponent = class LogisticaSenhasListaComponent {
    constructor(formBuilder, activatedRoute, route, routerService, localeService, dateService, atividadesService, pnotify, senhasService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.routerService = routerService;
        this.localeService = localeService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.senhasService = senhasService;
        this.appTitle = "Lista de senhas";
        this.breadCrumbTree = [];
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Pagination */
        this.senhas = [];
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = true;
        /*loading*/
        this.tableConfig = {
            subtitleBorder: true
        };
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
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
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
            this.getSenhas(this.getParams());
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_LOGI_SENH: [null],
            DS_SENH: [null],
            DS_USUA: [null],
            DS_APLC: [null],
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
    getSenhas(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.senhasService
            .getSenhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.senhas = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.senhas = [];
                this.noResult = true;
                this.pnotify.notice('Nenhum resultado para sua consulta.');
            }
        }, error => {
            this.senhas = [];
            this.noResult = true;
            this.pnotify.error();
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
    onReset() {
        this.form.reset();
    }
};
LogisticaSenhasListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _services_senhas_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaSenhasService"] }
];
LogisticaSenhasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-senhas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _services_senhas_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaSenhasService"]])
], LogisticaSenhasListaComponent);



/***/ }),

/***/ "r03C":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/senhas/senhas-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaSenhasModuleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSenhasModuleRouting", function() { return LogisticaSenhasModuleRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "kkHg");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "aX88");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaSenhasListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaSenhasCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaSenhasCadastroComponent"]
    }
];
let LogisticaSenhasModuleRouting = class LogisticaSenhasModuleRouting {
};
LogisticaSenhasModuleRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], LogisticaSenhasModuleRouting);

;


/***/ })

}]);
//# sourceMappingURL=senhas-senhas-module-es2015.js.map