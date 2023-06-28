(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-boas-vindas-log-boas-vindas-module"],{

/***/ "I1/Y":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/log-boas-vindas/log-boas-vindas.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ComercialAknaLogBoasVindasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaLogBoasVindasModule", function() { return ComercialAknaLogBoasVindasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _log_boas_vindas_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./log-boas-vindas-routing.module */ "uQVk");
/* harmony import */ var _log_boas_vindas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./log-boas-vindas.component */ "WKfa");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");





















Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_17__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_18__["ptBrLocale"]);
let ComercialAknaLogBoasVindasModule = class ComercialAknaLogBoasVindasModule {
};
ComercialAknaLogBoasVindasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_log_boas_vindas_component__WEBPACK_IMPORTED_MODULE_16__["ComercialAknaLogBoasVindasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _log_boas_vindas_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialAknaLogBoasVindasRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_5__["NgBrazil"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_4__["CurrencyMaskModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_20__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot(),
        ],
    })
], ComercialAknaLogBoasVindasModule);



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

/***/ "WKfa":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/log-boas-vindas/log-boas-vindas.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ComercialAknaLogBoasVindasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaLogBoasVindasComponent", function() { return ComercialAknaLogBoasVindasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_log_boas_vindas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./log-boas-vindas.component.html */ "XCFs");
/* harmony import */ var _log_boas_vindas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-boas-vindas.component.scss */ "X1e5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _log_boas_vindas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-boas-vindas.service */ "ifVa");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");











let ComercialAknaLogBoasVindasComponent = class ComercialAknaLogBoasVindasComponent {
    constructor(LogService, localeService, formBuilder, dateService, activatedRoute, routerService) {
        this.LogService = LogService;
        this.localeService = localeService;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.noResult = false;
        this.dadosEmpty = false;
        this.logs = [];
        this.data = new Date();
        this.appTitle = 'Log de Boas Vindas';
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: true,
        };
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            DT_INCL: [null],
            ID: [null],
            CD_CLIE: [null],
            NOME: [null],
            EMAIL: [null],
            IN_STAT: [null],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.getActiveRoute();
    }
    ngOnDestroy() {
        this.$activateRoutedSubscription.unsubscribe();
    }
    getLogBoasVindas() {
        this.spinnerFullScreen = true;
        this.LogService
            .getLogBoasVindas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            this.logs = response.body['data'];
            this.noResult = true;
            this.totalItems = response.body['data'].length;
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService
                        .convertToBrazilianDate(_obj[prop])
                        .substring(0, 10);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    reenviarEmail(params) {
        this.spinnerFullScreen = true;
        this.form.patchValue(params);
        this.LogService
            .postAkna(this.getParams())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            if (response.body['data']['SUCCESS'] == 200)
                this.getLogBoasVindas();
        });
    }
    getActiveRoute() {
        this.$activateRoutedSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            if (Object.keys(response).length > 0) {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
            }
            this.getLogBoasVindas();
        });
    }
};
ComercialAknaLogBoasVindasComponent.ctorParameters = () => [
    { type: _log_boas_vindas_service__WEBPACK_IMPORTED_MODULE_4__["ControladoriaAknaLogBoasVindasService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] }
];
ComercialAknaLogBoasVindasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'log-boas-vindas',
        template: _raw_loader_log_boas_vindas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_log_boas_vindas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_log_boas_vindas_service__WEBPACK_IMPORTED_MODULE_4__["ControladoriaAknaLogBoasVindasService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]])
], ComercialAknaLogBoasVindasComponent);



/***/ }),

/***/ "X1e5":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/log-boas-vindas/log-boas-vindas.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvbG9nLWJvYXMtdmluZGFzL2xvZy1ib2FzLXZpbmRhcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "XCFs":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/log-boas-vindas/log-boas-vindas.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <!-- <button\r\n    (click)=\"exportarExcel()\"\r\n    [disabled]=\"!noResult\"\r\n    >\r\n    Exportar\r\n  </button> -->\r\n  <!-- <button\r\n    (click)=\"onFilter()\"\r\n    > -->\r\n    <!-- [disabled]=\"form.status  == 'INVALID'\" -->\r\n    <!-- Filtrar\r\n  </button> -->\r\n</app-header>\r\n<!-- Início dos Filtros -->\r\n<app-body ><!-- [breadCrumbTree]=\"breadCrumbTree\" -->\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"dataInicio\"> Data inicial </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"inicioData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_INCL\"\r\n            [ngClass]=\"onFieldError('DT_INCL') + ' ' + onFieldRequired('DT_INCL')\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('DT_INCL')\"\r\n            message=\"Data inicial é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <!-- <div class=\"form-group col-md-2\">\r\n          <label for=\"dataInicio\"> Data final </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"fimData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_FINA\"\r\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('DT_FINA')\"\r\n            message=\"Data final é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div> -->\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <!-- Início da Lista -->\r\n  <div class=\"row\">\r\n    <div class=\"col\"><!-- [ngClass]=\"{'col': !showDetailPanel, 'col-6 pr-0': showDetailPanel}\" -->\r\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"align-middle\" style=\"width:10px\"></th>\r\n            <th class=\"text-center\" scope=\"col\">Código do Cliente</th>\r\n            <th class=\"text-center\" scope=\"col\">Nome Cliente</th>\r\n            <th class=\"text-center\" scope=\"col\">Email Cliente</th>\r\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"showDetailPanel\">Data do Envio</th>\r\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"showDetailPanel\">Mensagem de confirmação</th>\r\n            <th class=\"text-center mx-2\" style=\"width:30px\"></th>\r\n            <th class=\"text-center mx-2\" style=\"width:30px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let log of logs | slice : begin : end; let i = index\"\r\n              [ngClass]=\"log.STATUS ?'bgRowTable' : ''\"  class=\"hover\"> <!-- (click)=\"openTab(i); clickEvent(log)\" -->\r\n            <td [ngClass]=\"{\r\n              'border-success'    : log.IN_STAT == '1',\r\n              'border-danger'     : log.IN_STAT == '0'\r\n              }\"\r\n            ></td>\r\n            <td class=\"text-center\">{{ log.CD_CLIE }}</td>\r\n            <td class=\"text-center\">{{ log.NOME }}</td>\r\n            <td class=\"text-center\">{{ log.EMAIL }}</td>\r\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ log.DT_INCL }}</td>\r\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ log.DS_MENS }}</td>\r\n            <td class=\"align-middle\" style=\"width:50px\">\r\n              <button type=\"button\" class=\"btn-icon-sm\"\r\n                [ngClass]=\"{\r\n                  'text-success'    : log.IN_STAT == '1',\r\n                  'text-danger'     : log.IN_STAT == '0'\r\n                  }\"\r\n              >\r\n                <i [ngClass]=\"log.IN_STAT == 1 ? 'fas fa-calendar-check' : 'fas fa-calendar-times'\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"align-middle\" style=\"width:50px\" [hidden]=\"showDetailPanel\">\r\n              <button class=\"btn-icon-sm\"  (click)=\"reenviarEmail(log)\">\r\n                <i class=\"fas fa-paper-plane\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\"\r\n        >\r\n      </empty-result>\r\n    </div>\r\n    <!-- Início da tabela de informações -->\r\n    <!-- <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"appTitle\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label>Descrição Despesa</label>\r\n            <div class=\"text-nowrap\">{{ decricaoDes | uppercase }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Razão Social Fornecedor</label>\r\n            <div class=\"text-nowrap\">{{ razaoForn | uppercase }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <div class=\"col-7 px-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Razão Social Fat. (Fin)</label>\r\n                <div class=\"text-nowrap\">{{ razaoFatFin | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Razão Social Fat.(Sup)</label>\r\n                <div class=\"text-nowrap\">{{ razaoFatSup | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5 px-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-10\">\r\n                <label>CNPJ Fat. (Fin)</label>\r\n                <div class=\"text-nowrap\">{{ cnpjFatFin }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-10\">\r\n                <label>CNPJ Fat. (Sup)</label>\r\n                <div class=\"text-nowrap\">{{ cnpjFatSup }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <div class=\"col-7 px-0\">\r\n            \r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Grupo</label>\r\n                <div class=\"text-nowrap\">{{ grupo }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Classe</label>\r\n                <div class=\"text-nowrap\">{{ classe }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo Despesa</label>\r\n                <div class=\"text-nowrap\">{{ tipoDes}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"text-nowrap\">Tipo de Documento</label>\r\n                <div class=\"text-nowrap\">{{ tipoPag | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"text-nowrap\">Forma de Pagamento</label>\r\n                <div class=\"text-nowrap\">{{ formaPag | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5 px-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Data Emissão</label>\r\n                <div class=\"text-nowrap\">{{ dtEmissao }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"text-nowrap\">Data Vencimento</label>\r\n                <div class=\"text-nowrap\">{{ dtLiquid }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"text-nowrap\">Data Pagamento</label>\r\n                <div class=\"text-nowrap\">{{ dtPagamento }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Valor Total</label>\r\n                <div class=\"text-nowrap\">{{ valTotal | currency:'BRL' }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Banco/Caixa</label>\r\n                <div class=\"text-nowrap\">{{ bancoCaixa | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Banco</label>\r\n                <div class=\"text-nowrap\">{{ banco | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div> -->\r\n  </div>\r\n</app-body>\r\n\r\n");

/***/ }),

/***/ "ifVa":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/log-boas-vindas/log-boas-vindas.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ControladoriaAknaLogBoasVindasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAknaLogBoasVindasService", function() { return ControladoriaAknaLogBoasVindasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let ControladoriaAknaLogBoasVindasService = class ControladoriaAknaLogBoasVindasService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getLogBoasVindas() {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/akna/consulta-log-email-boas-vindas`, {
            observe: 'response',
        });
    }
    postAkna(param) {
        return this.http.post(`${this.BASE_URL}/comercial/integracoes/akna/log-email-boas-vindas`, param, { observe: 'response' });
    }
};
ControladoriaAknaLogBoasVindasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaAknaLogBoasVindasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaAknaLogBoasVindasService);



/***/ }),

/***/ "uQVk":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/log-boas-vindas/log-boas-vindas-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ComercialAknaLogBoasVindasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaLogBoasVindasRoutingModule", function() { return ComercialAknaLogBoasVindasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _log_boas_vindas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-boas-vindas.component */ "WKfa");




const routes = [
    {
        path: '',
        component: _log_boas_vindas_component__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaLogBoasVindasComponent"]
    },
];
let ComercialAknaLogBoasVindasRoutingModule = class ComercialAknaLogBoasVindasRoutingModule {
};
ComercialAknaLogBoasVindasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialAknaLogBoasVindasRoutingModule);



/***/ })

}]);
//# sourceMappingURL=log-boas-vindas-log-boas-vindas-module-es2015.js.map