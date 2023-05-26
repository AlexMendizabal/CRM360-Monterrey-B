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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <!-- <button\n    (click)=\"exportarExcel()\"\n    [disabled]=\"!noResult\"\n    >\n    Exportar\n  </button> -->\n  <!-- <button\n    (click)=\"onFilter()\"\n    > -->\n    <!-- [disabled]=\"form.status  == 'INVALID'\" -->\n    <!-- Filtrar\n  </button> -->\n</app-header>\n<!-- Início dos Filtros -->\n<app-body ><!-- [breadCrumbTree]=\"breadCrumbTree\" -->\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-2\">\n          <label for=\"dataInicio\"> Data inicial </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"inicioData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_INCL\"\n            [ngClass]=\"onFieldError('DT_INCL') + ' ' + onFieldRequired('DT_INCL')\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('DT_INCL')\"\n            message=\"Data inicial é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <!-- <div class=\"form-group col-md-2\">\n          <label for=\"dataInicio\"> Data final </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"fimData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_FINA\"\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('DT_FINA')\"\n            message=\"Data final é obrigatório.\">\n          </invalid-form-control>\n        </div> -->\n      </div>\n    </form>\n  </advanced-filter>\n  <!-- Início da Lista -->\n  <div class=\"row\">\n    <div class=\"col\"><!-- [ngClass]=\"{'col': !showDetailPanel, 'col-6 pr-0': showDetailPanel}\" -->\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"align-middle\" style=\"width:10px\"></th>\n            <th class=\"text-center\" scope=\"col\">Código do Cliente</th>\n            <th class=\"text-center\" scope=\"col\">Nome Cliente</th>\n            <th class=\"text-center\" scope=\"col\">Email Cliente</th>\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"showDetailPanel\">Data do Envio</th>\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"showDetailPanel\">Mensagem de confirmação</th>\n            <th class=\"text-center mx-2\" style=\"width:30px\"></th>\n            <th class=\"text-center mx-2\" style=\"width:30px\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let log of logs | slice : begin : end; let i = index\"\n              [ngClass]=\"log.STATUS ?'bgRowTable' : ''\"  class=\"hover\"> <!-- (click)=\"openTab(i); clickEvent(log)\" -->\n            <td [ngClass]=\"{\n              'border-success'    : log.IN_STAT == '1',\n              'border-danger'     : log.IN_STAT == '0'\n              }\"\n            ></td>\n            <td class=\"text-center\">{{ log.CD_CLIE }}</td>\n            <td class=\"text-center\">{{ log.NOME }}</td>\n            <td class=\"text-center\">{{ log.EMAIL }}</td>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ log.DT_INCL }}</td>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ log.DS_MENS }}</td>\n            <td class=\"align-middle\" style=\"width:50px\">\n              <button type=\"button\" class=\"btn-icon-sm\"\n                [ngClass]=\"{\n                  'text-success'    : log.IN_STAT == '1',\n                  'text-danger'     : log.IN_STAT == '0'\n                  }\"\n              >\n                <i [ngClass]=\"log.IN_STAT == 1 ? 'fas fa-calendar-check' : 'fas fa-calendar-times'\"></i>\n              </button>\n            </td>\n            <td class=\"align-middle\" style=\"width:50px\" [hidden]=\"showDetailPanel\">\n              <button class=\"btn-icon-sm\"  (click)=\"reenviarEmail(log)\">\n                <i class=\"fas fa-paper-plane\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\"\n        >\n      </empty-result>\n    </div>\n    <!-- Início da tabela de informações -->\n    <!-- <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"appTitle\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <label>Descrição Despesa</label>\n            <div class=\"text-nowrap\">{{ decricaoDes | uppercase }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Razão Social Fornecedor</label>\n            <div class=\"text-nowrap\">{{ razaoForn | uppercase }}</div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"col-7 px-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Razão Social Fat. (Fin)</label>\n                <div class=\"text-nowrap\">{{ razaoFatFin | uppercase }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Razão Social Fat.(Sup)</label>\n                <div class=\"text-nowrap\">{{ razaoFatSup | uppercase }}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-5 px-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-10\">\n                <label>CNPJ Fat. (Fin)</label>\n                <div class=\"text-nowrap\">{{ cnpjFatFin }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-10\">\n                <label>CNPJ Fat. (Sup)</label>\n                <div class=\"text-nowrap\">{{ cnpjFatSup }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"col-7 px-0\">\n            \n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Grupo</label>\n                <div class=\"text-nowrap\">{{ grupo }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Classe</label>\n                <div class=\"text-nowrap\">{{ classe }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Tipo Despesa</label>\n                <div class=\"text-nowrap\">{{ tipoDes}}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Tipo de Documento</label>\n                <div class=\"text-nowrap\">{{ tipoPag | uppercase }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Forma de Pagamento</label>\n                <div class=\"text-nowrap\">{{ formaPag | uppercase }}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-5 px-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Data Emissão</label>\n                <div class=\"text-nowrap\">{{ dtEmissao }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Data Vencimento</label>\n                <div class=\"text-nowrap\">{{ dtLiquid }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Data Pagamento</label>\n                <div class=\"text-nowrap\">{{ dtPagamento }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Valor Total</label>\n                <div class=\"text-nowrap\">{{ valTotal | currency:'BRL' }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Banco/Caixa</label>\n                <div class=\"text-nowrap\">{{ bancoCaixa | uppercase }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Banco</label>\n                <div class=\"text-nowrap\">{{ banco | uppercase }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </detail-panel>\n    </div> -->\n  </div>\n</app-body>\n\n");

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