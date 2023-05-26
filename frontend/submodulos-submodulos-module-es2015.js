(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submodulos-submodulos-module"],{

/***/ "4Z/g":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/submodulos-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdminSubmodulosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubmodulosRoutingModule", function() { return AdminSubmodulosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "ukF8");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "SXrW");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminSubModulosListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminSubModulosCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminSubModulosCadastroComponent"]
    }
];
let AdminSubmodulosRoutingModule = class AdminSubmodulosRoutingModule {
};
AdminSubmodulosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminSubmodulosRoutingModule);



/***/ }),

/***/ "J0jS":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/submodulos/cadastro/cadastro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Cadastro de SubMódulos</h1>\n    </div>\n  </div>\n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\">\n      <button \n        (click)=\"onSave()\"\n        [disabled] = \"form.status == 'INVALID'\"\n        >\n        Salvar\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"col-12 p-0\">\n      <form [formGroup]=\"form\" autocomplete=\"off\" [hidden]=\"loading\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"icone\">Icones</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"icones\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              labelForId=\"classe\"\n              bindLabel=\"classe\"\n              bindValue=\"classe\"\n              id=\"classe\"\n              formControlName=\"icone\"\n              >\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\n                  <div class=\"d-flex align-items-center\">\n                    <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\n                    <div>{{item.classe}}</div>\n                  </div>\n              </ng-template>\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                <div class=\"d-flex align-items-center\">\n                  <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\n                  <div>{{item.classe}}</div>\n                </div>\n              </ng-template>\n            </ng-select>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"nome\">Nome</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nome\"\n              formControlName=\"nome\"\n              [ngClass]=\"onFieldRequired('nome')\"\n              placeholder=\"Digite...\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nome é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"modulo\">Modulo</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"modulos\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              labelForId=\"modulo\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              id=\"modulo\"\n              formControlName=\"moduloId\"\n            >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('moduloId')\" message=\"Modulo é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"status\">Situação</label>\n            <select\n              name=\"status\"\n              id=\"status\"\n              class=\"form-control\"\n              formControlName=\"status\"  \n            >\n              <option value=\"1\">Ativo</option>\n              <option value=\"0\">Inativo</option>\n            </select>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");

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

/***/ "SXrW":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/lista/lista.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminSubModulosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubModulosListaComponent", function() { return AdminSubModulosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "ykke");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "u96L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/submodulos.service */ "hMv8");
/* harmony import */ var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modulos/services/modulos.service */ "RbS/");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



//angular



//services





//rxjs


let AdminSubModulosListaComponent = class AdminSubModulosListaComponent {
    constructor(route, service, pnotify, formBuilder, activatedRoute, moduloService, atividadesService, routerService, dateService) {
        this.route = route;
        this.service = service;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.moduloService = moduloService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.appTitle = "Lista de submodulos";
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingModulos = true;
        this.showAdvancedFilter = true;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        this.numberOfItems = [10, 25, 50, 100, 250, 500];
        /* Pagination */
        this.situacao = ['ATIVO', 'INATIVO'];
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getModulos();
    }
    ngOnDestroy() {
        var _a;
        (_a = this.$activatedRouteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            if (_response === null || _response === void 0 ? void 0 : _response.registrosPorPagina) {
                this.itemsPerPage = _response === null || _response === void 0 ? void 0 : _response.registrosPorPagina;
            }
            this.form.patchValue(_response);
            this.getSubModulos(this.getParams());
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
            id: [null],
            nome: [null],
            moduloId: [null],
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
    getSubModulos(submodulo = {}) {
        if (!this.loading) {
            this.loadingNavBar = true;
        }
        this.service
            .getSubModulos(submodulo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
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
    getModulos(params) {
        this.loadingModulos = true;
        this.moduloService
            .getModulos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingModulos = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.modulos = response.body['data'];
            }
        });
    }
    onSave(params) {
        this.service
            .postSubModulo(params)
            .subscribe(response => { }, error => {
            this.pnotify.error(error.error);
        });
    }
    onPageChanged(event) {
        this.form.get('pagina').setValue(event.page);
        this.form.get('t').setValue((new Date).getTime());
        this.route.navigate([], {
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    onShowFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    onReset() {
        this.form.reset();
    }
};
AdminSubModulosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminModulosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
AdminSubModulosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-submodulos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminModulosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], AdminSubModulosListaComponent);



/***/ }),

/***/ "rZB8":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/cadastro/cadastro.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vc3VibW9kdWxvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "rspp":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/submodulos.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminSubmodulosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubmodulosModule", function() { return AdminSubmodulosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _submodulos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submodulos-routing.module */ "4Z/g");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "SXrW");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "ukF8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");














let AdminSubmodulosModule = class AdminSubmodulosModule {
};
AdminSubmodulosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminSubModulosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["AdminSubModulosCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _submodulos_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminSubmodulosRoutingModule"],
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
], AdminSubmodulosModule);



/***/ }),

/***/ "u96L":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/lista/lista.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9zdWJtb2R1bG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9zdWJtb2R1bG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZmEtYmFuIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "ukF8":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/cadastro/cadastro.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminSubModulosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubModulosCadastroComponent", function() { return AdminSubModulosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "J0jS");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "rZB8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/submodulos.service */ "hMv8");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/icons-fonts-awesome.service */ "B5rI");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modulos/services/modulos.service */ "RbS/");



//angular



//rxjs

//services






let AdminSubModulosCadastroComponent = class AdminSubModulosCadastroComponent {
    constructor(activatedRoute, formBuilder, service, modulosService, pnotify, foawService, router, routerService, atividadesService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.service = service;
        this.modulosService = modulosService;
        this.pnotify = pnotify;
        this.foawService = foawService;
        this.router = router;
        this.routerService = routerService;
        this.atividadesService = atividadesService;
        this.appTitle = "Cadastro";
        this.loading = true;
        this.loadingNavBar = false;
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getIcones();
        this.getModulos();
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
                descricao: 'Lista de submódulos',
                routerLink: `/admin/submodulos`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            moduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            icone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: [1]
        });
    }
    onActivatedRoute() {
        var _a;
        let id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        if (id == undefined) {
            this.loading = false;
            return;
        }
        this.getSubModulo(id);
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
    onSave() {
        let params = this.form.value;
        this.loadingNavBar = true;
        this.service
            .postSubModulo(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
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
    getIcones() {
        this.foawService.getIcones().subscribe(response => {
            if (response.status === 200) {
                this.icones = response.body['icones'];
            }
        });
    }
    getSubModulo(id) {
        this.loading = true;
        this.service
            .getSubModulos({ id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.error("Falha ao carregar informações.");
                this.router.navigate(["./../"], {
                    relativeTo: this.activatedRoute
                });
                return;
            }
            let data = response.body["data"][0];
            this.form.patchValue(data);
        }, error => {
            this.pnotify.error("Falha ao carregar informações.");
            this.router.navigate(["./../"], {
                relativeTo: this.activatedRoute
            });
        });
    }
    getModulos() {
        this.loading = true;
        this.modulosService
            .getModulos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            let data = response.body["data"];
            this.modulos = data;
        });
    }
};
AdminSubModulosCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"] },
    { type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__["AdminModulosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_9__["IconesFontAwesomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] }
];
AdminSubModulosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'admin-submodulo-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"],
        _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__["AdminModulosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_9__["IconesFontAwesomeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]])
], AdminSubModulosCadastroComponent);



/***/ }),

/***/ "ykke":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/submodulos/lista/lista.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Lista de submodulos\">\n  <button type=\"button\" (click)=\"onReset()\">Limpar</button>\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\n  <button type=\"button\" [routerLink]=\"['./novo']\">Adicionar</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-2\">\n          <label for=\"id\">Id</label>\n          <input\n            id=\"id\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"id\"\n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"nome\">Nome</label>\n          <input\n            id=\"nome\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"nome\"\n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"modulo\">Módulo</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"modulos\"\n            [virtualScroll]=\"true\"\n            [loading]=\"loadingModulos\"\n            labelForId=\"modulo\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            id=\"modulo\"\n            (change)=\"onFilter()\"\n            formControlName=\"moduloId\"\n            placeholder=\"Selecione...\"\n          >\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\n            </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"situacao\">Situação</label>\n          <select\n            name=\"situacao\"\n            id=\"situacao\"\n            (change)=\"onFilter()\"\n            class=\"form-control\"\n            formControlName=\"situacao\"\n          >\n            <option value=\"\">Todos</option>\n            <option value=\"1\">Ativos</option>\n            <option value=\"0\">Inativos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"registrosPorPagina\">Registros</label>\n          <select\n            name=\"registrosPorPagina\"\n            id=\"registrosPorPagina\"\n            class=\"form-control\"\n            formControlName=\"registrosPorPagina\"\n            (change)=\"onFilter()\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"col-12 p-0\" [hidden]=\"loading || noResult\">\n    <div>\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th style=\"width:100px\">Id</th>\n            <th>Icone</th>\n            <th>Nome</th>\n            <th>Módulo</th>\n            <th class=\"align-middle\" style=\"width:70px\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of data; let i = index\">\n            <td class=\"text-truncate\" [ngClass]=\"item.status == 1 ? 'border-success' : 'border-danger'\">\n              {{ item.id | number:'6.0-0' }}\n            </td>\n            <td><div [class]=\"item.icone\"></div></td>\n            <td> {{ item.nome }} </td>\n            <td> {{ item.modulo }} </td>\n            <td class=\"align-middle\">\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Editar\"\n                container=\"body\"\n              >\n                <a [routerLink]=\"['./', item.id]\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n");

/***/ })

}]);
//# sourceMappingURL=submodulos-submodulos-module-es2015.js.map