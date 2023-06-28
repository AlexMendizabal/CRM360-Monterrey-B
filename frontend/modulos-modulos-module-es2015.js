(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-modulos-module"],{

/***/ "+xlo":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/modulos/cadastro/cadastro.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbW9kdWxvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "24xd":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/modulos/modulos.module.ts ***!
  \*********************************************************/
/*! exports provided: ModulosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulosModule", function() { return ModulosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "ggle");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "SvEJ");
/* harmony import */ var _modulos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos-routing.module */ "idUL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");














let ModulosModule = class ModulosModule {
};
ModulosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AdminModulosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AdminModulosCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _modulos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminModulosRoutingModule"],
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
], ModulosModule);



/***/ }),

/***/ "4foA":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/modulos/lista/lista.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tb2R1bG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tb2R1bG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1iYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */");

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

/***/ "SvEJ":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/modulos/cadastro/cadastro.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminModulosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModulosCadastroComponent", function() { return AdminModulosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "l+Rh");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "+xlo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/modulos.service */ "RbS/");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/icons-fonts-awesome.service */ "B5rI");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");



//angular



//rxjs

//ngx-bootstrap

//services





let AdminModulosCadastroComponent = class AdminModulosCadastroComponent {
    constructor(activatedRoute, formBuilder, service, pnotify, foawService, router, atividadesService, routerService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.service = service;
        this.pnotify = pnotify;
        this.foawService = foawService;
        this.router = router;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
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
                descricao: 'Lista de módulos',
                routerLink: `/admin/modulos`,
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
            rota: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            icone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
        this.getModulo(id);
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
        this.loadingNavBar = true;
        let params = this.form.value;
        this.service
            .postModulo(params)
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
        this.foawService
            .getIcones()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loading = false)))
            .subscribe(response => {
            if (response.status === 200) {
                this.icones = response.body['icones'];
            }
        });
        console.log();
        console.log(this.getIcones);
    }
    getModulo(id) {
        this.loading = true;
        this.service
            .getModulos({ id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
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
};
AdminModulosCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_modulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminModulosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__["IconesFontAwesomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] }
];
AdminModulosCadastroComponent.propDecorators = {
    childModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['childModal', { static: false },] }]
};
AdminModulosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'admin-modulos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_modulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminModulosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__["IconesFontAwesomeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]])
], AdminModulosCadastroComponent);



/***/ }),

/***/ "ggle":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/modulos/lista/lista.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminModulosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModulosListaComponent", function() { return AdminModulosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "oxvG");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "4foA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_modulos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/modulos.service */ "RbS/");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



//angualr



//rxjs

//services





let AdminModulosListaComponent = class AdminModulosListaComponent {
    /* Pagination */
    constructor(moduloService, route, pnotify, activatedRoute, atividadesService, routerService, formBuilder, dateService) {
        this.moduloService = moduloService;
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.loading = true;
        this.loadingNavBar = false;
        this.appTitle = "Lista de módulos";
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
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
            this.getModulos(this.getParams());
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
            rota: [null],
            pagina: [1],
            registrosPorPagina: [100],
            t: [null]
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
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
    getModulos(params) {
        if (!this.loading) {
            this.loadingNavBar = true;
        }
        this.moduloService
            .getModulos(params)
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
    onReset() {
        this.form.reset();
    }
};
AdminModulosListaComponent.ctorParameters = () => [
    { type: _services_modulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminModulosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] }
];
AdminModulosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-modulos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_modulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminModulosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])
], AdminModulosListaComponent);



/***/ }),

/***/ "idUL":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/modulos/modulos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminModulosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModulosRoutingModule", function() { return AdminModulosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "SvEJ");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "ggle");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminModulosListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminModulosCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminModulosCadastroComponent"]
    }
];
let AdminModulosRoutingModule = class AdminModulosRoutingModule {
};
AdminModulosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminModulosRoutingModule);



/***/ }),

/***/ "l+Rh":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/modulos/cadastro/cadastro.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de módulo\">\r\n  <button \r\n    (click)=\"onSave()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"col-12 p-0\">\r\n    <form [formGroup]=\"form\" autocomplete=\"off\" [hidden]=\"loading\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"icone\">Icones</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"icones\"\r\n            [virtualScroll]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            labelForId=\"classe\"\r\n            bindLabel=\"classe\"\r\n            bindValue=\"classe\"\r\n            id=\"classe\"\r\n            formControlName=\"icone\"\r\n            >\r\n            <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                  <div>{{item.classe}}</div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              <div class=\"d-flex align-items-center\">\r\n                <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                <div>{{item.classe}}</div>\r\n              </div>\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"nome\">Nome</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nome\"\r\n            formControlName=\"nome\"\r\n            placeholder=\"Digite...\"\r\n            [ngClass]=\"onFieldRequired('nome')\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"rota\">Rota</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control text-lowercase\"\r\n            id=\"rota\"\r\n            formControlName=\"rota\"\r\n            placeholder=\"Digite...\"\r\n            [ngClass]=\"onFieldRequired('rota')\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"situacao\">Situação</label>\r\n          <select\r\n            name=\"situacao\"\r\n            id=\"situacao\"\r\n            class=\"form-control\"\r\n            formControlName=\"situacao\"  \r\n          >\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "oxvG":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/modulos/lista/lista.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpar</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['./novo']\"\r\n  >\r\n    Adicionar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <advanced-filter>\r\n      <form autocomplete=\"off\" [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-3\">\r\n            <label for=\"id\">Id</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"id\"\r\n              (keyup.enter)=\"onFilter()\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-3\">\r\n            <label for=\"nome\">Nome</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"nome\"\r\n              (keyup.enter)=\"onFilter()\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-3\">\r\n            <label for=\"rota\">Rota</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"rota\"\r\n              (keyup.enter)=\"onFilter()\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-3\">\r\n            <label for=\"registrosPorPagina\">Registros</label>\r\n            <select\r\n              name=\"registrosPorPagina\"\r\n              id=\"registrosPorPagina\"\r\n              class=\"form-control\"\r\n              formControlName=\"registrosPorPagina\"\r\n              >\r\n                <option value=\"1\">1</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n    <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>Id</th>\r\n          <th>Nome</th>\r\n          <th>Rota</th>\r\n          <th>Icone</th>\r\n          <th style=\"width:40px\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of data\">\r\n          <td [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\"> {{ item.id }} </td>\r\n          <td > {{ item.nome }} </td>\r\n          <td> {{ item.rota }} </td>\r\n          <td><div [class]=\"item.icone\"></div></td>\r\n          <td class=\"align-middle\">\r\n            <button\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Editar\"\r\n              container=\"body\"\r\n            >\r\n              <a [routerLink]=\"['./', item.id]\">\r\n                <i class=\"fas fa-edit\"></i>\r\n              </a>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n");

/***/ })

}]);
//# sourceMappingURL=modulos-modulos-module-es2015.js.map