(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regioes-entrega-regioes-entrega-module"],{

/***/ "3arh":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/lista/lista.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9yZWdpb2VzLWVudHJlZ2EvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

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

/***/ "VuEG":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/regioes-entrega.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RegioesEntregaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegioesEntregaModule", function() { return RegioesEntregaModule; });
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
/* harmony import */ var _regioes_entrega_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./regioes-entrega-routing.module */ "gLYQ");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lista/lista.component */ "bf24");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "fEkQ");

















let RegioesEntregaModule = class RegioesEntregaModule {
};
RegioesEntregaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaRegioesEntregaListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaRegioesEntregaCadastroComponent"]],
        imports: [
            _regioes_entrega_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaRegioesEntregaRoutingModule"],
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
], RegioesEntregaModule);



/***/ }),

/***/ "bf24":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/lista/lista.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LogisticaRegioesEntregaListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRegioesEntregaListaComponent", function() { return LogisticaRegioesEntregaListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "vBrF");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "3arh");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/regioes-entrega.service */ "B4Vw");




// angular



//services


//rxjs



let LogisticaRegioesEntregaListaComponent = class LogisticaRegioesEntregaListaComponent {
    constructor(route, service, pnotify, formBuilder, activatedRoute, atividadesService, routerService, dateService) {
        this.route = route;
        this.service = service;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.appTitle = "Regiones de entrega";
        this.breadCrumbTree = [];
        this.showAdvancedFilter = true;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 0;
        this.currentPage = 1;
        /* Pagination */
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = true;
        this.form = this.formBuilder.group({
            UUID: [null],
            ID_REFE_ERP: [null],
            NM_REGI_ENTR: [null],
            IN_STAT: [null],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [(new Date).getTime()]
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
            this.getRegioesEntrega(this.getParams());
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
    getRegioesEntrega(params) {
        if (this.loading === false) {
            this.loadingNavBar = true;
        }
        return this.service
            .getRegioesEntrega(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.regioesEntrega = response.body["data"];
                this.totalItems = response.body["total"];
                this.noResult = false;
            }
            else {
                this.pnotify.notice("Ningún resultado encontrado");
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
        this.form.get("PAGI").setValue(1);
        this.form.get("TIME").setValue((new Date).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
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
LogisticaRegioesEntregaListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaRegioesEntregaService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] }
];
LogisticaRegioesEntregaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-regioes-entrega-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaRegioesEntregaService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]])
], LogisticaRegioesEntregaListaComponent);



/***/ }),

/***/ "fEkQ":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/cadastro/cadastro.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaRegioesEntregaCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRegioesEntregaCadastroComponent", function() { return LogisticaRegioesEntregaCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "hWsm");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "tcFW");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/regioes-entrega.service */ "B4Vw");













let LogisticaRegioesEntregaCadastroComponent = class LogisticaRegioesEntregaCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, routerService, titleService, atividadesService, localeService, service) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routerService = routerService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.localeService = localeService;
        this.service = service;
        this.loading = false;
        this.loadingNavBar = false;
        this.breadCrumbTree = [];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.appTitle = 'Cadastro';
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Cadastros',
                routerLink: `/logistica/cadastros/${id}`,
            },
            {
                descricao: 'Regiones de entrega',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //Consumir informações que estão na rota para editar
    ngOnDestroy() {
    }
    onActivatedRoute() {
        var _a;
        const id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;
        if (id) {
            this.getRegiaoEntrega(id);
        }
    }
    getRegiaoEntrega(id) {
        this.loading = true;
        this.service
            .getRegiaoEntrega(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status != 200) {
                this.pnotify.error();
                return;
            }
            this.form.patchValue(response.body['data']);
        }, error => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            UUID_LOGI_REGI_ENTR: [null],
            NM_REGI_ENTR: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            ID_REFE_ERP: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            DS_OBSE: [null],
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postRegiaoEntrega() {
        this.loadingNavBar = true;
        this.service
            .postRegiaoEntrega(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.reset();
                this.pnotify.success();
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
};
LogisticaRegioesEntregaCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaRegioesEntregaService"] }
];
LogisticaRegioesEntregaCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-regioes-entrega-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaRegioesEntregaService"]])
], LogisticaRegioesEntregaCadastroComponent);



/***/ }),

/***/ "gLYQ":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/regioes-entrega-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: LogisticaRegioesEntregaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRegioesEntregaRoutingModule", function() { return LogisticaRegioesEntregaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "fEkQ");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "bf24");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRegioesEntregaListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaRegioesEntregaCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaRegioesEntregaCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
    },
];
let LogisticaRegioesEntregaRoutingModule = class LogisticaRegioesEntregaRoutingModule {
};
LogisticaRegioesEntregaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaRegioesEntregaRoutingModule);



/***/ }),

/***/ "hWsm":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/regioes-entrega/cadastro/cadastro.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postRegiaoEntrega()\"\r\n    >\r\n    Ahorrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"NM_REGI_ENTR\">Descripción</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_REGI_ENTR\"\r\n              formControlName=\"NM_REGI_ENTR\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_REGI_ENTR') + ' ' + onFieldRequired('NM_REGI_ENTR')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_REGI_ENTR')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"idErp\">Código ERP</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"ID_REFE_ERP\"\r\n              [ngClass]=\"onFieldError('ID_REFE_ERP') + ' ' + onFieldRequired('ID_REFE_ERP')\"  \r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_REFE_ERP')\" message=\"O código da região é obrigatória.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"status\">Situación</label>\r\n            <select\r\n                name=\"status\"\r\n                id=\"status\"\r\n                class=\"form-control\"\r\n                formControlName=\"IN_STAT\"\r\n                [ngClass]=\"onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\"\r\n            >\r\n                <option value=\"1\">Activo</option>\r\n                <option value=\"0\">Inactivo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"observacao\" >Observación:</label>\r\n            <textarea class=\"form-control\" id=\"observacao\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "tcFW":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/cadastro/cadastro.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9yZWdpb2VzLWVudHJlZ2EvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "vBrF":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/regioes-entrega/lista/lista.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button [routerLink]=\"['../novo']\" >\r\n    Nuevo\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"codigo\">Código</label>\r\n          <input\r\n            id=\"codigo\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"ID_REFE_ERP\" \r\n            (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input\r\n            id=\"nome\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"NM_REGI_ENTR\" \r\n            (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            name=\"status\"\r\n            id=\"status\"\r\n            class=\"form-control\">\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"1\">Activo</option>\r\n            <option value=\"0\">Inactivo</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div  class=\"col-12 p-0 mt-3\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Id</th>\r\n            <th>Código</th>\r\n            <th>Nombre</th>\r\n            <th>Usuario</th>\r\n            <th width=\"70px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of regioesEntrega; let i = index\">\r\n            <td class=\"text-truncate\"  [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\"> {{ item.UUID }} </td>  \r\n            <td class=\"text-truncate\"> {{ item.ID_REFE_ERP }} </td>\r\n            <td class=\"text-truncate\"> {{ item.NM_REGI_ENTR }} </td>\r\n            <td class=\"text-truncate\"> \r\n              <span *ngIf=\"!item.DT_ATUA\">[{{ item.DT_INCL | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\r\n              <span *ngIf=\"item.DT_ATUA\">[{{ item.DT_ATUA | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\r\n              <span>({{ item.NR_MATR }})&nbsp; {{ item.NM_USUA }}</span>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <a class=\"btn-icon-sm\" [routerLink]=\"['../', item.UUID]\">\r\n                <i class=\"fas fa-edit\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ })

}]);
//# sourceMappingURL=regioes-entrega-regioes-entrega-module-es2015.js.map