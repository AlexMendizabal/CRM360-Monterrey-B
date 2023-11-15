(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atividades-atividades-module"],{

/***/ "/y42":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/atividades/atividades-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdminAtividadesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAtividadesRoutingModule", function() { return AdminAtividadesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Ozkf");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "oh7U");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminAtividadesListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminAtividadesCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminAtividadesCadastroComponent"]
    }
];
let AdminAtividadesRoutingModule = class AdminAtividadesRoutingModule {
};
AdminAtividadesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminAtividadesRoutingModule);



/***/ }),

/***/ "LOuz":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/atividades/cadastro/cadastro.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1iYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "NpYZ":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/atividades/atividades.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminAtividadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAtividadesModule", function() { return AdminAtividadesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _atividades_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atividades-routing.module */ "/y42");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "oh7U");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Ozkf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");














let AdminAtividadesModule = class AdminAtividadesModule {
};
AdminAtividadesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminAtividadesListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["AdminAtividadesCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _atividades_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminAtividadesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
        ]
    })
], AdminAtividadesModule);



/***/ }),

/***/ "OMfy":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/atividades/lista/lista.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpiar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n  <button type=\"button\" [routerLink]=\"['./novo']\">Adicionar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input id=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"DIGITE...\" formControlName=\"nome\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"modulo\">Módulo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"modulos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingModulo\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"SELECIONE\"\r\n            labelForId=\"modulo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"modulo\"\r\n            formControlName=\"moduloId\"\r\n            (change)=\"onFilter(); getSubmodulos({moduloId: $event?.id})\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"submodulo\">Submódulo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"submodulos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingSubmodulo\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"SELECIONE...\"\r\n            groupBy=\"modulo\"\r\n            labelForId=\"submodulo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"submodulo\"\r\n            formControlName=\"submoduloId\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"tipoAtividade\">Tipo de Actividades</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipoAtividade\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingTipoAtividade\"\r\n            placeholder=\"Selecione...\"\r\n            labelForId=\"tipoAtividade\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"tipoAtividadeId\"\r\n            formControlName=\"tipoAtividadeId\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"situacao\">Situación</label>\r\n          <select\r\n            name=\"situacao\"\r\n            id=\"situacao\"\r\n            formControlName=\"situacao\"  \r\n            class=\"form-control\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"1\">Activos</option>\r\n            <option value=\"0\">Inactivos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-1\">\r\n          <label for=\"registrosPorPagina\">Registros</label>\r\n          <select\r\n            name=\"registrosPorPagina\"\r\n            id=\"registrosPorPagina\"\r\n            class=\"form-control\"\r\n            formControlName=\"registrosPorPagina\"\r\n            >\r\n              <option value=\"10\">10</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"50\">50</option>\r\n              <option value=\"100\">100</option>\r\n              <option value=\"250\">250</option>\r\n              <option value=\"500\">500</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th style=\"width:100px\">ID</th>\r\n            <th style=\"width: 30%\">Nombre</th>\r\n            <th>Módulo</th>\r\n            <th>Submódulo</th>\r\n            <th>Tipo de actividades</th>\r\n            <th style=\"width:70px\"></th>\r\n            <th style=\"width:70px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of data; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\">\r\n              {{ item.id | number:'6.0-0' }}\r\n            </td>\r\n            <td>\r\n              {{ item.nome }}\r\n            </td>\r\n            <td class=\"text-truncate\"> {{ item.moduloNome }} </td>\r\n            <td class=\"text-truncate\"> {{ item.submoduloNome }} </td>\r\n            <td class=\"text-truncate\"> {{ item.tipoAtividadeNome }} </td>\r\n            <td> <div [class]=\"item.icone\"></div></td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                container=\"body\"\r\n              >\r\n                <a [routerLink]=\"['./', item.id]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "Ozkf":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/atividades/cadastro/cadastro.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminAtividadesCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAtividadesCadastroComponent", function() { return AdminAtividadesCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "dKyh");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "LOuz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/atividades.service */ "UNg1");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../submodulos/services/submodulos.service */ "hMv8");
/* harmony import */ var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modulos/services/modulos.service */ "RbS/");
/* harmony import */ var src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/icons-fonts-awesome.service */ "B5rI");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");



//angular



//services






//rxjs



let AdminAtividadesCadastroComponent = class AdminAtividadesCadastroComponent {
    constructor(formBuilder, service, moduloService, submoduloService, pnotify, activatedRoute, foawService, router, routerService, location, atividadesService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.moduloService = moduloService;
        this.submoduloService = submoduloService;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.foawService = foawService;
        this.router = router;
        this.routerService = routerService;
        this.location = location;
        this.atividadesService = atividadesService;
        this.appTitle = "Cadastro";
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingModulos = false;
        this.loadingSubmodulos = false;
        this.loadingTipoAtividade = false;
        this.nestedLoading = {
            submodulos: true,
            tiposAtividades: true,
            icones: true,
            atividade: true,
            modulos: true
        };
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/admin/home'
            },
            {
                descricao: 'Lista de atividades',
                routerLink: '/admin/atividades'
            },
            {
                descricao: 'Cadastro'
            }
        ];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getIcones();
        this.getModulos();
        this.getSubmodulos();
        this.getTipoAtividade();
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
                descricao: 'Lista de atividades',
                routerLink: `/admin/atividades`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            id: [null],
            icone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            moduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            submoduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tipoAtividadeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rota: [null],
            url: [null],
            exibeSidebar: [null],
            exibeNovaAba: [null],
            descricao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situacao: [1]
        });
    }
    onActivatedRoute() {
        var _a;
        let id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        if (id == undefined) {
            this.loading = false;
            return;
        }
        this.getAtividade(id);
    }
    getAtividade(id) {
        this.loading = true;
        this.service
            .getAtividades({ id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            let data = response.body["data"][0];
            this.form.patchValue(data);
            this.form.get('rota').setValue(data["rota_origem"]);
        }, error => {
            this.pnotify.error("Falha ao carregar os dados da atividade.");
            this.router.navigate(["./../"], {
                relativeTo: this.activatedRoute
            });
        });
    }
    getModulos(params) {
        this.loadingModulos = true;
        this.moduloService
            .getModulos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingModulos = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.error('Ocorreu um erro ao consultar módulos');
                this.modulos = [];
                return;
            }
            this.modulos = response.body["data"];
        }, error => {
            this.modulos = [];
            this.pnotify.error('Ocorreu um erro ao consultar módulos');
        });
    }
    getSubmodulos(params) {
        this.loadingSubmodulos = true;
        this.submoduloService
            .getSubModulos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingSubmodulos = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.error('Ocorreu um erro ao consultar submódulos');
                this.submodulos = [];
                return;
            }
            this.submodulos = response.body["data"];
        }, error => {
            this.submodulos = [];
            this.pnotify.error('Ocorreu um erro ao consultar submódulos');
        });
    }
    getTipoAtividade() {
        this.loadingTipoAtividade = true;
        this.service
            .getTipoAtividade()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingTipoAtividade = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.error('Ocorreu um erro ao consultar tipo de atividade');
                this.tiposAtividade = [];
                return;
            }
            this.tiposAtividade = response.body["data"];
        }, error => {
            this.tiposAtividade = [];
            this.pnotify.error('Ocorreu um erro ao consultar tipo de atividade');
        });
    }
    onSave() {
        this.loadingNavBar = true;
        let params = this.form.value;
        this.service
            .postAtividade(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            this.pnotify.success();
            this.router.navigate(["./../"], {
                relativeTo: this.activatedRoute
            });
        }, error => {
            var _a;
            let message = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getParams() {
        let params = this.form.value;
        params['icone'] = this.icone;
        return params;
    }
    getIcones() {
        this.foawService
            .getIcones()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            /* this.nestedLoading.icones = false;
            this.loading = this.getStatusDataLoaded(); */
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.icones = response.body['icones'];
            }
        });
    }
    onIconSelected(event) {
        this.icone = event.classe;
    }
    getStatusDataLoaded() {
        let status = false;
        Object.keys(this.nestedLoading).forEach(key => {
            if (this.nestedLoading[key] === true)
                status = true;
        });
        return status;
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
};
AdminAtividadesCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AdminAtividadesService"] },
    { type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"] },
    { type: _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__["IconesFontAwesomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] }
];
AdminAtividadesCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-atividades-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AdminAtividadesService"],
        _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"],
        _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__["IconesFontAwesomeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]])
], AdminAtividadesCadastroComponent);



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

/***/ "dKyh":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/atividades/cadastro/cadastro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Registro de actividades\">\r\n  <button \r\n    (click)=\"onSave()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"d-flex justify-content-center col\" [hidden]=\"loading\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\" class=\"col-6\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"icone\">Ícono</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"icones\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"classe\"\r\n              bindLabel=\"classe\"\r\n              bindValue=\"classe\"\r\n              id=\"classe\"\r\n              formControlName=\"icone\"\r\n              [ngClass]=\"onFieldRequired('icone')\"\r\n              >\r\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                    <div>{{item.classe}}</div>\r\n                  </div>\r\n              </ng-template>\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                  <div>{{item.classe}}</div>\r\n                </div>\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"nome\">Nombre</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nome\"\r\n              formControlName=\"nome\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('nome')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"El nombre es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"modulo\">Módulo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"modulos\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingModulos\"\r\n              dropdownPosition=\"bottom\"\r\n              labelForId=\"modulo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"modulo\"\r\n              formControlName=\"moduloId\"\r\n              (change)=\"getSubmodulos({moduloId: $event?.id})\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldRequired('moduloId')\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('moduloId')\" message=\"Módulo es oligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"submodulo\">Submódulo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"submodulos\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingSubmodulos\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              groupBy = \"modulo\"\r\n              labelForId=\"submodulo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"submodulo\"\r\n              formControlName=\"submoduloId\"\r\n              [ngClass]=\"onFieldRequired('submoduloId')\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('submoduloId')\" message=\"Submódulo es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"rota\">Ruta</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control text-lowercase\"\r\n              id=\"rota\"\r\n              formControlName=\"rota\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"url\">URL</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"url\"\r\n              formControlName=\"url\"\r\n              placeholder=\"Digite...\"\r\n              style=\"text-transform: none !important;\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoAtividade\">Tipo de Actividades</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tiposAtividade\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              [loading]=\"loadingTipoAtividade\"\r\n              labelForId=\"tipoAtividade\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"tipoAtividade\"\r\n              formControlName=\"tipoAtividadeId\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldRequired('tipoAtividadeId')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('tipoAtividadeId')\" message=\"Tipo de actividades es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"situacao\">Situación</label>\r\n            <select\r\n              name=\"situacao\"\r\n              id=\"situacao\"\r\n              class=\"form-control\"\r\n              formControlName=\"situacao\"\r\n            >\r\n              <option value=\"1\">Activo</option>\r\n              <option value=\"0\">Inactivo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-6 d-flex justify-content-center flex-column\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"exibeSidebar\"\r\n                formControlName=\"exibeSidebar\"\r\n              >\r\n              <label\r\n                class=\"custom-control-label\"\r\n                for=\"exibeSidebar\"\r\n                >Mostrar en menú\r\n              </label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"exibeNovaAba\"\r\n                formControlName=\"exibeNovaAba\"\r\n              >\r\n              <label\r\n                class=\"custom-control-label\"\r\n                for=\"exibeNovaAba\"\r\n                >Abrir en nueva pestaña</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"descricao\">Descripción de Actividades</label>\r\n            <textarea\r\n              id=\"descricao\"\r\n              class=\"w-100\"\r\n              class=\"form-control\"\r\n              rows=\"4\"\r\n              formControlName=\"descricao\"\r\n              [ngClass]=\"onFieldRequired('descricao')\"\r\n              >\r\n            </textarea>\r\n            <invalid-form-control [show]=\"onFieldInvalid('descricao')\" message=\"La descripción de actividades es obligatorio\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "oTV0":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/atividades/lista/lista.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1iYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "oh7U":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/atividades/lista/lista.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminAtividadesListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAtividadesListaComponent", function() { return AdminAtividadesListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "OMfy");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "oTV0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/atividades.service */ "UNg1");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modulos/services/modulos.service */ "RbS/");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../submodulos/services/submodulos.service */ "hMv8");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



//angular



//rxjs

//services






let AdminAtividadesListaComponent = class AdminAtividadesListaComponent {
    constructor(service, moduloService, submoduloService, pnotify, route, formBuilder, activatedRoute, routerService, dateService) {
        this.service = service;
        this.moduloService = moduloService;
        this.submoduloService = submoduloService;
        this.pnotify = pnotify;
        this.route = route;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
        this.dateService = dateService;
        this.appTitle = "Lista de atividades";
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingModulo = false;
        this.loadingSubmodulo = false;
        this.loadingTipoAtividade = false;
        this.modulos = [];
        this.submodulos = [];
        this.tipoAtividade = [];
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/admin/home'
            },
            {
                descricao: 'Lista de atividades'
            }
        ];
        this.situacao = [
            {
                id: 1,
                nome: 'Ativo'
            },
            {
                id: 0,
                nome: 'Inativo'
            }
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
        this.getTipoAtividade();
        this.getModulos();
        this.getSubmodulos();
        /* this.atividadesService
          .registrarAcesso()
          .subscribe() */
    }
    ngOnDestroy() {
        var _a;
        (_a = this.$activatedRouteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute
            .queryParams
            .subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            if (_response === null || _response === void 0 ? void 0 : _response.registrosPorPagina) {
                this.itemsPerPage = _response === null || _response === void 0 ? void 0 : _response.registrosPorPagina;
            }
            this.form.patchValue(_response);
            this.getAtividades(this.getParams());
        });
    }
    onFilter() {
        this.form.get('t').setValue(new Date().getTime());
        this.form.get('pagina').setValue(1);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            nome: [null],
            moduloId: [null],
            submoduloId: [null],
            tipoAtividadeId: [null],
            situacao: [null],
            registrosPorPagina: [100],
            pagina: [1],
            t: [null]
        });
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/admin/home`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    getAtividades(params) {
        if (!this.loading) {
            this.loadingNavBar = true;
        }
        this.service
            .getAtividades(params)
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
    getTipoAtividade() {
        this.loadingTipoAtividade = false;
        this.service
            .getTipoAtividade()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingTipoAtividade = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.tipoAtividade = response.body['data'];
            }
        });
    }
    getModulos(params) {
        this.loadingModulo = true;
        this.moduloService
            .getModulos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingModulo = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.modulos = response.body['data'];
            }
        });
    }
    getSubmodulos(params) {
        this.loadingSubmodulo = true;
        this.submoduloService
            .getSubModulos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingSubmodulo = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.submodulos = response.body['data'];
            }
        });
    }
    onPageChanged(event) {
        this.form.get('pagina').setValue(event.page);
        this.form.get('t').setValue((new Date).getTime());
        this.route.navigate([], {
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (Number.isInteger(_obj[prop]))
                    _params[prop] = parseInt(_obj[prop]);
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onReset() {
        this.form.reset();
    }
};
AdminAtividadesListaComponent.ctorParameters = () => [
    { type: _services_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AdminAtividadesService"] },
    { type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"] },
    { type: _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_11__["AdminSubModulosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
AdminAtividadesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-atividades-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AdminAtividadesService"],
        _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"],
        _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_11__["AdminSubModulosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], AdminAtividadesListaComponent);



/***/ })

}]);
//# sourceMappingURL=atividades-atividades-module-es2015.js.map