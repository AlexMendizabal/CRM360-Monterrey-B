(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"],{

/***/ "5tXh":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/guards/detalhes-resolver.guard.ts ***!
  \****************************************************************************/
/*! exports provided: ComercialAgendaDetalhesResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaDetalhesResolverGuard", function() { return ComercialAgendaDetalhesResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/comercial/agenda/agenda.service */ "73eH");



// Services

let ComercialAgendaDetalhesResolverGuard = class ComercialAgendaDetalhesResolverGuard {
    constructor(agendaService) {
        this.agendaService = agendaService;
    }
    resolve(route) {
        if (route.params && route.params['id']) {
            return this.agendaService.getCompromisso(route.params['id']);
        }
        let codCliente = '';
        if (route.params && route.params['codCliente']) {
            codCliente = parseInt(route.params['codCliente']);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            responseCode: 200,
            result: {
                id: null,
                title: null,
                codTitulo: null,
                codClient: codCliente,
                formContactId: '',
                typeContactId: '',
                start: null,
                end: null,
                allDay: false,
                description: null,
                rescheduleId: null,
                color: {
                    primary: '#0033FF',
                },
            },
        });
    }
};
ComercialAgendaDetalhesResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_3__["ComercialAgendaService"] }
];
ComercialAgendaDetalhesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_3__["ComercialAgendaService"]])
], ComercialAgendaDetalhesResolverGuard);



/***/ }),

/***/ "BB/G":
/*!***********************************************************!*\
  !*** ./src/app/modules/comercial/agenda/agenda.module.ts ***!
  \***********************************************************/
/*! exports provided: ComercialAgendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaModule", function() { return ComercialAgendaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es-BO */ "YozJ");
/* harmony import */ var _angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-flatpickr */ "nFnn");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "i5S4");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "1BeU");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agenda-routing.module */ "It7v");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../templates/templates.module */ "9lCC");
/* harmony import */ var _compromissos_compromissos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./compromissos/compromissos.component */ "GL/A");
/* harmony import */ var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./detalhes/detalhes.component */ "a+am");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formulario/formulario.component */ "mDNA");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "LSHg");






Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4___default.a, 'es-BO');
// Angular Calendar



// ngx-bootstrap



// ng-select

// Guards

// Modules





// Components




let ComercialAgendaModule = class ComercialAgendaModule {
};
ComercialAgendaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _compromissos_compromissos_component__WEBPACK_IMPORTED_MODULE_18__["ComercialAgendaCompromissosComponent"],
            _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__["ComercialAgendaDetalhesComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__["ComercialAgendaFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _agenda_routing_module__WEBPACK_IMPORTED_MODULE_13__["ComercialAgendaRoutingModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_5__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__["adapterFactory"]
            }),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_14__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"].forRoot(),
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["ComercialTemplatesModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDl5b7STz9xYNDhybTTer2POVncX9FYqCc' // Reemplaza con tu propia clave de API de Google Maps
            }),
        ],
        providers: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__["FormDeactivateGuard"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-BO' }]
    })
], ComercialAgendaModule);



/***/ }),

/***/ "DJPP":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/compromissos/compromissos.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FnZW5kYS9jb21wcm9taXNzb3MvY29tcHJvbWlzc29zLmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "GKtn":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/guards/acessos-resolver.guard.ts ***!
  \***************************************************************************/
/*! exports provided: ComercialAgendaAcessosResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaAcessosResolverGuard", function() { return ComercialAgendaAcessosResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/comercial/agenda/agenda.service */ "73eH");


// Services

let ComercialAgendaAcessosResolverGuard = class ComercialAgendaAcessosResolverGuard {
    constructor(agendaService) {
        this.agendaService = agendaService;
    }
    resolve() {
        return this.agendaService.getAcessos();
    }
};
ComercialAgendaAcessosResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_2__["ComercialAgendaService"] }
];
ComercialAgendaAcessosResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_2__["ComercialAgendaService"]])
], ComercialAgendaAcessosResolverGuard);



/***/ }),

/***/ "GL/A":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/compromissos/compromissos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ComercialAgendaCompromissosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaCompromissosComponent", function() { return ComercialAgendaCompromissosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compromissos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compromissos.component.html */ "QPoN");
/* harmony import */ var _compromissos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compromissos.component.scss */ "DJPP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/comercial/agenda/agenda.service */ "73eH");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");









// Services






let ComercialAgendaCompromissosComponent = class ComercialAgendaCompromissosComponent {
    constructor(router, activatedRoute, authService, agendaService, comercialService, atividadesService, titleService, dateService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.agendaService = agendaService;
        this.comercialService = comercialService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.dateService = dateService;
        this.user = this.authService.getCurrentUser();
        this.profile = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Agenda'
            }
        ];
        this.showFilter = false;
        this.showCalendar = false;
        this.showPermissionDenied = false;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = false;
        this.queryParamsChecked = false;
    }
    refreshEvents() {
        this.fetchEvents();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getPerfil();
        this.titleService.setTitle('Agenda');
        // Actualizar los eventos cada 20 seg
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(20 * 1000) // 20 seg en milisegundos
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.fetchEvents();
            if (this.user.info.matricula == 1) {
                this.switchEdit = true;
            }
            else {
                this.switchEdit = false;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    appTitle(date) {
        if (this.showCalendar) {
            return `Agenda (${this.dateService.getFullMonth(date)}/${date.getFullYear()})`;
        }
        return 'Agenda';
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getPerfil() {
        this.comercialService
            .getPerfil()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.profile = response.result;
                    if (this.profile.coordenador === true ||
                        this.profile.gestor === true ||
                        (this.profile.vendedor === true &&
                            this.profile.coordenador === false &&
                            this.profile.gestor === false &&
                            this.profile.hasVinculoOperadores === true)) {
                        this.checkRouterParams();
                    }
                    else if (this.profile.vendedor === true &&
                        this.profile.coordenador === false &&
                        this.profile.gestor === false &&
                        this.profile.hasVinculoOperadores === false) {
                        this.fetchEvents();
                        this.idVendedor = this.user.info.idVendedor;
                        this.idEscritorio = this.user.info.idEscritorio;
                        this.showCalendar = true;
                    }
                    else {
                        this.showPermissionDenied = true;
                    }
                }
                else {
                    this.showPermissionDenied = true;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    enableFilterButton() {
        if (this.profile.coordenador === true ||
            this.profile.gestor === true ||
            (this.profile.vendedor === true &&
                this.profile.coordenador === false &&
                this.profile.gestor === false &&
                this.profile.hasVinculoOperadores === true)) {
            return true;
        }
        else {
            return false;
        }
    }
    dataFilter(event) {
        // console.log(event)
        this.idVendedor = event.idVendedor;
        this.nomeEscritorio = this.user.info.nomeCompleto;
        this.idEscritorio = event.idEscritorio;
        this.nomeVendedor = event.nomeVendedor;
    }
    checkRouterParams() {
        let formValue = {
            idEscritorio: null,
            idVendedor: null,
            nomeEscritorio: null,
            nomeVendedor: null
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                console.log(params);
                this.idEscritorio = parseInt(params.idEscritorio);
                this.idVendedor = parseInt(params.idVendedor);
                this.nomeEscritorio = params.nomeEscritorio;
                this.nomeVendedor = params.nomeVendedor;
                this.showFilter = false;
                this.showCalendar = true;
                this.fetchEvents();
                Object.keys(formValue).forEach(formKey => {
                    Object.keys(params).forEach(paramKey => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (!isNaN(Number(params[paramKey]))) {
                                formValue[formKey] = Number(params[paramKey]);
                            }
                            else {
                                formValue[formKey] = params[paramKey];
                            }
                        }
                    });
                });
            }
            else {
                this.showFilter = true;
                this.showCalendar = false;
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    fetchEvents() {
        const getStart = {
            month: date_fns__WEBPACK_IMPORTED_MODULE_7__["startOfMonth"],
            week: date_fns__WEBPACK_IMPORTED_MODULE_7__["startOfWeek"],
            day: date_fns__WEBPACK_IMPORTED_MODULE_7__["startOfDay"]
        }[this.view];
        const getEnd = {
            month: date_fns__WEBPACK_IMPORTED_MODULE_7__["endOfMonth"],
            week: date_fns__WEBPACK_IMPORTED_MODULE_7__["endOfWeek"],
            day: date_fns__WEBPACK_IMPORTED_MODULE_7__["endOfDay"]
        }[this.view];
        let paramsObj = {};
        if (!this.queryParamsChecked) {
            this.activatedRoute.queryParams.subscribe((queryParams) => {
                if (Object.keys(queryParams).length > 0) {
                    let params = atob(queryParams['q']);
                    params = JSON.parse(params);
                    const queryDate = params.inicio.split('-');
                    this.viewDate.setFullYear(queryDate[0]);
                    this.viewDate.setMonth(queryDate[1] - 1);
                    this.viewDate.setDate(queryDate[2]);
                    paramsObj = {
                        inicio: params.inicio,
                        fim: params.fim,
                        idEscritorio: params.idEscritorio,
                        idVendedor: params.idVendedor,
                        nomeEscritorio: params.nomeEscritorio,
                        nomeVendedor: params.nomeVendedor,
                        statusnome: params.statusnome
                    };
                }
                else {
                    this.viewDate = new Date();
                    paramsObj = {
                        inicio: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(getStart(this.viewDate), 'yyyy-MM-dd'),
                        fim: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(getEnd(this.viewDate), 'yyyy-MM-dd'),
                        idEscritorio: this.idEscritorio,
                        idVendedor: this.idVendedor,
                        nomeEscritorio: this.nomeEscritorio,
                        nomeVendedor: this.nomeVendedor,
                    };
                }
            });
        }
        else {
            paramsObj = {
                inicio: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(getStart(this.viewDate), 'yyyy-MM-dd'),
                fim: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(getEnd(this.viewDate), 'yyyy-MM-dd'),
                idEscritorio: this.idEscritorio,
                idVendedor: this.idVendedor,
                nomeEscritorio: this.nomeEscritorio,
                nomeVendedor: this.nomeVendedor
            };
        }
        this.queryParamsChecked = true;
        this.activeDayIsOpen = false;
        this.events$ = this.agendaService.getCompromissos(paramsObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((compromissos) => {
            if (compromissos['responseCode'] === 200) {
                return compromissos['result'].map((compromisso) => {
                    return {
                        id: compromisso.id,
                        color: {
                            primary: compromisso.color,
                        },
                        title: `${compromisso.title} - ${compromisso.client} - ${compromisso.statusnome}`,
                        codClient: compromisso.codClient,
                        client: compromisso.client,
                        formContactId: compromisso.formContactId,
                        formContactDesc: compromisso.formContactDesc,
                        typeContactId: compromisso.typeContactId,
                        typeContactDesc: compromisso.typeContactDesc,
                        start: new Date(compromisso.start),
                        end: new Date(compromisso.end),
                        allDay: compromisso.allDay,
                        description: compromisso.description,
                        draggable: false,
                        statusnome: compromisso.statusnome
                    };
                });
            }
            else {
                return [];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.setRouterParams(paramsObj);
        }));
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    eventClicked(event) {
        this.router.navigate(['../detalhes', event.id], {
            relativeTo: this.activatedRoute
        });
    }
    onFilter(showFilter) {
        if (showFilter) {
            this.showCalendar = true;
            this.fetchEvents();
        }
        else {
            this.showCalendar = false;
            this.setRouterParams(null);
        }
        this.showFilter = !this.showFilter;
    }
    setRouterParams(params) {
        if (params === null) {
            this.router.navigate([], {
                relativeTo: this.activatedRoute
            });
        }
        else {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { q: btoa(JSON.stringify(params)) },
                queryParamsHandling: 'merge'
            });
        }
    }
};
ComercialAgendaCompromissosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_9__["ComercialAgendaService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_10__["ComercialService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] }
];
ComercialAgendaCompromissosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-agenda-compromissos',
        template: _raw_loader_compromissos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_compromissos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_9__["ComercialAgendaService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_10__["ComercialService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]])
], ComercialAgendaCompromissosComponent);



/***/ }),

/***/ "It7v":
/*!*******************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/agenda-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComercialAgendaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaRoutingModule", function() { return ComercialAgendaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _guards_acessos_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/acessos-resolver.guard */ "GKtn");
/* harmony import */ var _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/detalhes-resolver.guard */ "5tXh");
/* harmony import */ var _compromissos_compromissos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compromissos/compromissos.component */ "GL/A");
/* harmony import */ var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detalhes/detalhes.component */ "a+am");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formulario/formulario.component */ "mDNA");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");



// Guards



// Components




const routes = [
    { path: 'compromissos', component: _compromissos_compromissos_component__WEBPACK_IMPORTED_MODULE_6__["ComercialAgendaCompromissosComponent"] },
    {
        path: 'detalhes/:id',
        component: _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_7__["ComercialAgendaDetalhesComponent"],
        resolve: { detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"] },
    },
    {
        path: 'novo/:codCliente',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialAgendaFormularioComponent"],
        resolve: {
            acessos: _guards_acessos_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialAgendaAcessosResolverGuard"],
            detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'finalizar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialAgendaFormularioComponent"],
        resolve: {
            detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'finalizar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialAgendaFormularioComponent"],
        resolve: {
            detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialAgendaFormularioComponent"],
        resolve: {
            acessos: _guards_acessos_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialAgendaAcessosResolverGuard"],
            detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialAgendaFormularioComponent"],
        resolve: {
            detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'reagendar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialAgendaFormularioComponent"],
        resolve: {
            detalhes: _guards_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialAgendaDetalhesResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'compromissos',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
    },
];
let ComercialAgendaRoutingModule = class ComercialAgendaRoutingModule {
};
ComercialAgendaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialAgendaRoutingModule);



/***/ }),

/***/ "L7KI":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/formulario/formulario.service.ts ***!
  \***************************************************************************/
/*! exports provided: ComercialAgendaFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaFormularioService", function() { return ComercialAgendaFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../cadastros/titulos-agenda/titulos-agenda.service */ "yZjN");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vendedores.service */ "4xRd");





// Services


let ComercialAgendaFormularioService = class ComercialAgendaFormularioService {
    constructor(http, vendedoresService, titulosAgendaService) {
        this.http = http;
        this.vendedoresService = vendedoresService;
        this.titulosAgendaService = titulosAgendaService;
        this.API = `http://23.254.204.187/api/comercial/agenda/formulario`;
    }
    loadDependencies() {
        let clientes = this.vendedoresService.getCarteiraClientes();
        let vendedores = this.vendedoresService.getVendedores();
        let formasContato = this.getFormasContato();
        let origensContato = this.getOrigensContato();
        let motivosReagendamento = this.getMotivosReagendamento();
        let listarTitulosAgenda = this.titulosAgendaService.getListaTitulosAgenda({
            codSituacao: '1',
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            clientes,
            formasContato,
            origensContato,
            motivosReagendamento,
            listarTitulosAgenda,
            vendedores,
        ]);
    }
    getFormasContato() {
        return this.http.get(`${this.API}/formas-contato`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getOrigensContato() {
        return this.http.get(`${this.API}/origens-contato`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMotivosReagendamento() {
        return this.http
            .get(`${this.API}/motivos-reagendamento`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialAgendaFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"] },
    { type: _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTitulosAgendaService"] }
];
ComercialAgendaFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"],
        _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTitulosAgendaService"]])
], ComercialAgendaFormularioService);



/***/ }),

/***/ "QPoN":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/agenda/compromissos/compromissos.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #loading>\r\n  <loader-spinner-full-screen></loader-spinner-full-screen>\r\n</ng-template>\r\n<app-header [appTitle]=\"appTitle(viewDate)\">\r\n  <button type=\"button\"\r\n    *ngIf=\"showCalendar\"\r\n    (click)=\"refreshEvents()\">Actualizar</button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"showCalendar\"\r\n    mwlCalendarPreviousView\r\n    [view]=\"view\"\r\n    [(viewDate)]=\"viewDate\"\r\n    (viewDateChange)=\"fetchEvents()\">\r\n    Mes Anterior\r\n  </button>\r\n  <button type=\"button\"\r\n    *ngIf=\"showCalendar\"\r\n    mwlCalendarToday\r\n    [(viewDate)]=\"viewDate\"\r\n    (viewDateChange)=\"fetchEvents()\">\r\n    Mes Actual\r\n  </button>\r\n  <button type=\"button\"\r\n    *ngIf=\"showCalendar\"\r\n    mwlCalendarNextView\r\n    [view]=\"view\"\r\n    [(viewDate)]=\"viewDate\"\r\n    (viewDateChange)=\"fetchEvents()\">\r\n    Siguiente mes\r\n  </button>\r\n  <button type=\"button\"\r\n    *ngIf=\"showCalendar\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button type=\"button\"\r\n    (click)=\"onFilter(showFilter)\"\r\n    *ngIf=\"enableFilterButton()\"\r\n    [disabled]=\"idEscritorio == null || idVendedor == null\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" *ngIf=\"showFilter\">\r\n    <div class=\"col\">\r\n      <comercial-templates-filtro-vendedor-escritorio\r\n        [profile]=\"profile\"\r\n        [showAll]=\"false\"\r\n        (formValue)=\"dataFilter($event)\">\r\n      </comercial-templates-filtro-vendedor-escritorio>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showCalendar\">\r\n    <div class=\"col\">\r\n      <div class=\"row mb-3\"\r\n        *ngIf=\"(this.nomeEscritorio !== null ) || (this.nomeVendedor != null )\">\r\n        <div class=\"col\">\r\n          <div class=\"d-flex\">\r\n            <h6 class=\"mb-0 mr-2\" *ngIf=\"this.nomeVendedor != null || this.nomeEscritorio != null \">\r\n              <span class=\"badge badge-secondary\">{{ this.nomeEscritorio }}</span>\r\n            </h6>\r\n            <h6 class=\"mb-0\">\r\n              <span class=\"badge badge-primary\">{{ nomeVendedor }}</span>\r\n            </h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div *ngIf=\"events$ | async; else loading; let events\">\r\n            <div [ngSwitch]=\"view\">\r\n              <mwl-calendar-month-view\r\n                *ngSwitchCase=\"'month'\"\r\n                [@.disabled]=\"true\"\r\n                [viewDate]=\"viewDate\"\r\n                [events]=\"events\"\r\n                [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventClicked)=\"eventClicked($event.event)\">\r\n              </mwl-calendar-month-view>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <permission-denied\r\n    message=\"Su perfil no tiene permisos para acceder a esta aplicacion\"\r\n    *ngIf=\"showPermissionDenied\">\r\n  </permission-denied>\r\n</app-body>\r\n");

/***/ }),

/***/ "R9pN":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/formulario/formulario.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .input-group .custom-select:not(:last-child),\n::ng-deep .input-group .form-control:not(:last-child) {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n::ng-deep .color-dropdown {\n  background-color: transparent;\n  border: unset;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0px;\n}\n::ng-deep .color-dropdown div {\n  border-radius: 50%;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n}\n::ng-deep .color-dropdown::after {\n  margin-top: 4px;\n  margin-left: 5px !important;\n}\n::ng-deep .color-dropdown:focus {\n  outline: unset;\n}\n::ng-deep ul#color-dropdown li a.dropdown-item {\n  display: -ms-flexbox;\n  display: flex;\n}\n::ng-deep ul#color-dropdown li a.dropdown-item .color-hex {\n  border-radius: 50%;\n  content: \"\";\n  height: 15px;\n  margin-right: 8px;\n  margin-top: 4px;\n  width: 15px;\n}\n::ng-deep .custom-mt {\n  margin: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvYWdlbmRhL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTs7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FBRlI7QUFNRTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUFKSjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFITjtBQUtJO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBSE47QUFLSTtFQUNFLGNBQUE7QUFITjtBQVFNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FBTlI7QUFPUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTFY7QUFVRTtFQUNFLFlBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FnZW5kYS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICAuY3VzdG9tLXNlbGVjdCxcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xvci1kcm9wZG93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGl2IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsI2NvbG9yLWRyb3Bkb3duIHtcclxuICAgIGxpIHtcclxuICAgICAgYS5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5jb2xvci1oZXgge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLW10IHtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "TPT/":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/agenda/detalhes/detalhes.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header appTitle=\"Detalles del compromiso\">\r\n  <button type=\"button\" *ngIf=\"switchEdit\" (click)=\"onEdit(detalhes)\"[disabled]=\"detalhes.status === 'FINALIZADO'\">Editar</button>\r\n\r\n  <button type=\"button\" (click)=\"onReschedule(detalhes)\"[disabled]=\"detalhes.status === 'FINALIZADO'\">Reagendar</button>\r\n\r\n  <button type=\"button\" *ngIf=\"switchEdit\" (click)=\"onDelete(detalhes)\"[disabled]=\"detalhes.status === 'FINALIZADO'\">Excluir</button>\r\n\r\n  <button type=\"button\" *ngIf=\"switchEdit || detalhes.title === 'LLAMADA'\"(click)=\"onFinish(detalhes)\" [disabled]=\"detalhes.status === 'FINALIZADO'\">Finalizado</button>\r\n  <!-- Nuevo botón -->\r\n\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-6\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Título</label>\r\n          <div>{{ detalhes.title }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Cliente</label>\r\n          <div *ngIf=\"!detalhes.client\">Sin informacion</div>\r\n          <div *ngIf=\"detalhes.client\">{{ detalhes.client }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-sm-6\">\r\n          <label>FORMA DE CONTACTO</label>\r\n          <div *ngIf=\"!detalhes.formContactDesc\">Sin informacion</div>\r\n          <div *ngIf=\"detalhes.formContactDesc\">\r\n            {{ detalhes.formContactDesc }}\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Fecha</label>\r\n          <div>{{ detalhes.fullDate | uppercase }}</div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Hora Inicio</label>\r\n          <div>{{ detalhes.fullDate | uppercase }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Hora Final</label>\r\n          <div>{{ detalhes.fullDate | uppercase }}</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Observación</label>\r\n          <div *ngIf=\"!detalhes.description\">Sin informacion</div>\r\n          <div *ngIf=\"detalhes.description\" [innerHTML]=\"detalhes.description | uppercase\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Reprogramación</label>\r\n          <div *ngIf=\"!detalhes.motivo\">No reprogramado</div>\r\n          <div *ngIf=\"detalhes.motivo\" [innerHTML]=\"detalhes.motivo | uppercase\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Observacion de Finalizado</label>\r\n          <div *ngIf=\"!detalhes.observacionFinal\">Sin informacion</div>\r\n          <div *ngIf=\"detalhes.observacionFinal\" [innerHTML]=\"detalhes.observacionFinal\"></div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Estado</label>\r\n          <div *ngIf=\"!detalhes.status\">Registrado</div>\r\n          <div *ngIf=\"detalhes.status\" [innerHTML]=\"detalhes.status | uppercase\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Anexo</label>\r\n          <div>\r\n            <ng-container *ngIf=\"imagenes.length === 0\">\r\n              <img src=\"../../../assets/images/system-alerts/404.png\" alt=\"Sin información\" style=\"width: 80px; height: 80px\" />\r\n            </ng-container>\r\n          </div>\r\n          <ng-container *ngIf=\"imagenes.length > 0\">\r\n            <div class=\"row\">\r\n              <div *ngFor=\"let image of imagenes\" class=\"col\">\r\n                <div class=\"row image-container\">\r\n                  <a (click)=\"abrirModal(modalTemplate)\">\r\n                    <img src=\"data:image/jpeg;base64,{{image.url_imagen}}\" class=\"m-3\" style=\"width: 80px; height: 80px;\" />\r\n                  </a>\r\n                </div>\r\n                <ng-template #modalTemplate>\r\n                  <div class=\"modal-container\">\r\n                    <div class=\"modal-header\">\r\n                      <h4 class=\"modal-title\">Imagen en tamaño completo</h4>\r\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <img class=\"modal-image\" src=\"data:image/jpeg;base64,{{image.url_imagen}}\" />\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <p class=\"marker-info\"><strong> SEGUIMIENTO DEL PROMOTOR</strong></p>\r\n      <div class=\"embed-responsive embed-responsive-16by9\">\r\n        <agm-map [latitude]=\"latitud\" [longitude]=\"longitud\" [zoom]=\"13\" class=\"embed-responsive-item\"\r\n          (mapClick)=\"actualizarMarcador($event)\">\r\n          <agm-marker [latitude]=\"latitud\" [longitude]=\"longitud\" [label]=\"'C'\">\r\n            <agm-info-window [disableAutoPan]=\"true\">\r\n              <div class=\"marker-info-window\">\r\n                <p class=\"marker-name mb-0\"><strong> Cliente: </strong> {{detalhes.client}}</p>\r\n              </div>\r\n            </agm-info-window>\r\n            <agm-marker *ngFor=\"let posicion of posiciones\" [latitude]=\"posicion.latitud\"\r\n              [longitude]=\"posicion.longitud\" [iconUrl]=\"'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'\">\r\n              <agm-info-window [disableAutoPan]=\"true\" >\r\n                <div class=\"marker-info-window\">\r\n                 <!--  <p class=\"marker-name mb-0\"><strong> Promotor: </strong> {{posicion.vendedor}}</p> -->\r\n                  <p class=\"marker-name mb-0\"><strong> Fecha: </strong> {{posicion.fecha}}</p>\r\n                </div>\r\n              </agm-info-window>\r\n            </agm-marker>\r\n          </agm-marker>\r\n          <agm-polyline [strokeColor]=\"'blue'\">\r\n            <ng-container *ngFor=\"let posicion of posiciones\">\r\n              <agm-polyline-point [latitude]=\"posicion.latitud\" [longitude]=\"posicion.longitud\">\r\n              </agm-polyline-point>\r\n            </ng-container>\r\n          </agm-polyline>\r\n        </agm-map>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "UUMI":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/agenda/formulario/formulario.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle()\">\r\n  <button type=\"button\" (click)=\"onCancel()\" [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button type=\"button\" (click)=\"onSubmit()\" [disabled]=\"submittingForm || !form.valid\">\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"codTitulo\">Título</label>\r\n            <div class=\"input-group-prepend\">\r\n              <ng-select class=\"custom-control-input form-control\" [searchable]=\"true\" [clearable]=\"true\"\r\n                class=\"col p-0\" [items]=\"listarTitulosAgenda\" [virtualScroll]=\"true\" placeholder=\"Selecione...\"\r\n                labelForId=\"codTitulo\" bindLabel=\"descricaoTitulo\" bindValue=\"codTitulo\" id=\"codTitulo\"\r\n                formControlName=\"codTitulo\" (change)=\"onCodTituloChange()\">\r\n              </ng-select>\r\n            </div>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codTitulo')\"\r\n              message=\"Título obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showInputVendedores\">\r\n          <div class=\"form-row\" *ngIf=\"permissoesAcesso.simuladorVendas === true\">\r\n            <div class=\"form-group col my-3\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"gerar-cotacao-pedido\"\r\n                  formControlName=\"gerarCotacaoPedido\" (change)=\"onGerarCotacaoPedido()\" />\r\n                <label class=\"custom-control-label\" for=\"gerar-cotacao-pedido\">\r\n                  Generar presupuesto/solicitud para este contacto\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"promotor\">Promotor</label>\r\n              <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"promotores\" [virtualScroll]=\"true\"\r\n                labelForId=\"promotor\" bindLabel=\"nombre\" bindValue=\"ID\" formControlName=\"promotor\"\r\n                [ngClass]=\"onFieldError('promotor') + ' ' + onFieldRequired('promotor')\" (change)=\"onInput()\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showInputClientes\">\r\n          <div class=\"form-row\" *ngIf=\"permissoesAcesso.simuladorVendas === true\">\r\n            <div class=\"form-group col my-3\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"gerar-cotacao-pedido\"\r\n                  formControlName=\"gerarCotacaoPedido\" (change)=\"onGerarCotacaoPedido()\" />\r\n                <label class=\"custom-control-label\" for=\"gerar-cotacao-pedido\">\r\n                  Generar presupuesto/solicitud para este contacto\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"cliente\">Cliente</label>\r\n              <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"clientes\" [virtualScroll]=\"true\"\r\n                labelForId=\"cliente\" bindLabel=\"nomeCliente\" bindValue=\"codCliente\" formControlName=\"cliente\"\r\n                [ngClass]=\"onFieldError('cliente') + ' ' + onFieldRequired('cliente')\"\r\n                (change)=\"updateDireccion($event)\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"codFormaContato\">FORMA DE CONTACTO</label>\r\n            <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"formasContato\" formControlName=\"codFormaContato\"\r\n              [virtualScroll]=\"false\" bindLabel=\"descricao\" bindValue=\"codFormaContato\" [ngClass]=\"\r\n                onFieldError('codFormaContato') +\r\n                ' ' +\r\n                onFieldRequired('codFormaContato')\r\n              \">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codFormaContato')\"\r\n              message=\"Forma de contacto es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"codOrigemContato\">ORIGEN DE CONTACTO</label>\r\n            <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"origensContato\"\r\n              formControlName=\"codOrigemContato\" [virtualScroll]=\"false\" bindLabel=\"DS_MEIO_CONT\"\r\n              bindValue=\"ID_MEIO_CONT\" [ngClass]=\"\r\n                onFieldError('codOrigemContato') +\r\n                ' ' +\r\n                onFieldRequired('codOrigemContato')\r\n              \">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codOrigemContato')\"\r\n              message=\"Origen de contacto es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"codOrigemContato\">DIRECCION</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"direccion\" [ngClass]=\"\r\n                onFieldError('codOrigemContato') +\r\n                ' ' +\r\n                onFieldRequired('codOrigemContato')\r\n              \" />\r\n            <input type=\"hidden\" formControlName=\"latitud_clie\" />\r\n            <input type=\"hidden\" formControlName=\"longitud_clie\" />\r\n            <input type=\"hidden\" formControlName=\"codigo_cliente\" />\r\n\r\n            <invalid-form-control [show]=\"onFieldInvalid('codOrigemContato')\"\r\n              message=\"Origen de contacto es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n              <agm-map [latitude]=\"latitud\" [longitude]=\"longitud\" [zoom]=\"16\" class=\"embed-responsive-item\"\r\n                (mapClick)=\"actualizarMarcador($event)\">\r\n                <agm-marker [latitude]=\"latitud\" [longitude]=\"longitud\" (markerDragEnd)=\"actualizarDireccion($event)\">\r\n                </agm-marker>\r\n              </agm-map>\r\n              <div id=\"map-zoom-control\" class=\"map-control\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <label for=\"inicioData\">Fecha Inicial</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 pr-0\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" id=\"inicioData\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n                    formControlName=\"inicioData\" (input)=\"onInput()\" [ngClass]=\"\r\n                      onFieldError('inicioData') +\r\n                      ' ' +\r\n                      onFieldRequired('inicioData')\r\n                    \" />\r\n                </div>\r\n                <invalid-form-control [show]=\"onFieldInvalid('inicioData')\"\r\n                  message=\"Início é obrigatório.\"></invalid-form-control>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"custom-mt d-flex\">\r\n                  <timepicker [showMeridian]=\"false\" [showSpinners]=\"false\" [mousewheel]=\"true\"\r\n                    formControlName=\"inicioHorario\" (input)=\"onInput()\">\r\n                  </timepicker>\r\n                  <div class=\"custom-control custom-checkbox ml-3 mt-2\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"diaInteiro\" formControlName=\"diaInteiro\"\r\n                      (input)=\"onInput()\" (change)=\"triggerAllDay()\" />\r\n                    <label class=\"custom-control-label\" for=\"diaInteiro\">Dia completo</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <label [ngClass]=\"{ required: !isDisabledTime }\" for=\"terminoData\">Fecha Final</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 pr-0\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" id=\"terminoData\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n                    formControlName=\"terminoData\" (input)=\"onInput()\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"custom-mt\">\r\n                  <timepicker [showMeridian]=\"false\" [showSpinners]=\"false\" [mousewheel]=\"true\"\r\n                    formControlName=\"terminoHorario\" (input)=\"onInput()\">\r\n                  </timepicker>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\" *ngIf=\"action == 'reagendar'\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"motivoReagendamento\">Motivo de la reprogramación</label>\r\n            <select class=\"form-control custom-select\" id=\"motivoReagendamento\" formControlName=\"motivoReagendamento\"\r\n              (change)=\"onInput()\" [ngClass]=\"{\r\n                'is-invalid': onFieldInvalid(form.get('motivoReagendamento'))\r\n              }\">\r\n              <option *ngFor=\"let item of motivosReagendamento\" [value]=\"item.ID_REAG_MOTI\">\r\n                {{ item.DS_REAG_MOTI }}\r\n              </option>\r\n            </select>\r\n            <invalid-form-control [show]=\"\r\n                form.get('motivoReagendamento').invalid &&\r\n                form.get('motivoReagendamento').touched\r\n              \" message=\"Motivo de reagendamiento es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"observacao\">Observación</label>\r\n            <textarea class=\"form-control\" id=\"observacao\" formControlName=\"observacao\" (input)=\"onInput()\">\r\n            </textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-row\" *ngIf=\"action == 'finalizar'\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"Obsfinalizar\">Observación al finalizar</label>\r\n            <textarea class=\"form-control\" id=\"Obsfinalizar\" formControlName=\"Obsfinalizar\" (input)=\"onInput()\">\r\n            </textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "a+am":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/detalhes/detalhes.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialAgendaDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaDetalhesComponent", function() { return ComercialAgendaDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "TPT/");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "aZON");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/comercial/agenda/agenda.service */ "73eH");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");









// Services







let ComercialAgendaDetalhesComponent = class ComercialAgendaDetalhesComponent {
    constructor(activatedRoute, atividadesService, authservice, router, dateService, http, agendaService, confirmModalService, pnotifyService, titleService, modalService) {
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.authservice = authservice;
        this.router = router;
        this.dateService = dateService;
        this.http = http;
        this.agendaService = agendaService;
        this.confirmModalService = confirmModalService;
        this.pnotifyService = pnotifyService;
        this.titleService = titleService;
        this.modalService = modalService;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Agenda',
                routerLink: `/comercial/agenda/compromissos`
            },
            {
                descricao: 'Detalles de cita'
            }
        ];
        this.detalhes = {
            status: null
        };
        this.imagenes = [];
        this.img = [];
        this.user = this.authservice.getCurrentUser();
        this.pnotifyService.getPNotify();
    }
    actualizarMarcador($event) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        this.registrarAcesso();
        this.titleService.setTitle('Detalles de cita');
        const detalhes = this.activatedRoute.snapshot.data['detalhes']['result'];
        const inicio = new Date(detalhes['start']);
        const fim = new Date(detalhes['end']);
        this.detalhes.status = detalhes.status;
        if (this.user.info.matricula == 1) {
            this.switchEdit = true;
        }
        else {
            this.switchEdit = false;
        }
        this.detalhes.id = detalhes.id;
        this.detalhes.title = detalhes.title;
        this.detalhes.codClient = detalhes.codClient;
        this.detalhes.motivo = detalhes.motivo;
        this.detalhes.client = detalhes.client;
        this.detalhes.formContactDesc = detalhes.formContactDesc;
        this.detalhes.typeContactDesc = detalhes.typeContactDesc;
        this.detalhes.allDay = detalhes.allDay;
        this.detalhes.anexo = detalhes.anexo;
        this.detalhes.observacionFinal = detalhes.observacionFinal;
        this.latitud = detalhes.latitud;
        this.longitud = detalhes.longitud;
        this.detalhes.url_web = detalhes.url_web;
        this.filtrarPosiciones(detalhes.id);
        this.imagenesAnexo(detalhes.id);
        console.log(this.imagenesAnexo(detalhes.id));
        console.log(detalhes);
        this.detalhes.description =
            detalhes.description != null
                ? detalhes.description.replace(/(?:\r\n|\r|\n)/g, '<br />')
                : null;
        if (this.detalhes.allDay === true) {
            this.detalhes.fullDate = `${this.dateService.getFullDate(inicio, fim, false)} (Dia completo)`;
        }
        else {
            if (this.dateService.sameDay(inicio, fim)) {
                this.detalhes.fullDate = this.dateService.getFullDate(inicio, fim);
            }
            else {
            }
        }
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onEliminar(detalhes) {
        this.router.navigate(['../../eliminar', detalhes.id], {
            relativeTo: this.activatedRoute
        });
    }
    onEdit(detalhes) {
        detalhes.status = 2;
        this.router.navigate(['../../editar', detalhes.id], {
            relativeTo: this.activatedRoute
        });
    }
    onReschedule(detalhes) {
        detalhes.status = 4;
        this.router.navigate(['../../reagendar', detalhes.id], {
            relativeTo: this.activatedRoute
        });
    }
    onFinish(detalhes) {
        detalhes.status = 3;
        this.router.navigate(['../../finalizar', detalhes.id], {
            relativeTo: this.activatedRoute
        });
    }
    onDelete(detalhes) {
        let confirm$ = this.confirmModalService.showConfirm('Borrar', 'Confirmar borrado', 'Desea realmente borrar la cita?', 'Cancelar', 'Confirmar');
        confirm$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(result => result ? this.agendaService.deleteCompromisso(detalhes.id) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]))
            .subscribe({
            next: (success) => {
                this.pnotifyService.success('Cita borrada con exito!');
                this.router.navigate(['../../compromissos'], {
                    relativeTo: this.activatedRoute
                });
            },
            error: (error) => {
                this.pnotifyService.error('Error al borrar, intente nuevamente!');
            }
        });
    }
    filtrarPosiciones(id_agenda) {
        this.agendaService.getPosicionPromotor(id_agenda).subscribe((response) => {
            this.posiciones = response.result;
        });
    }
    imagenesAnexo(id_agenda) {
        this.agendaService.getImagenes(id_agenda).subscribe((response) => {
            this.imagenes = response.result;
        }, (error) => {
            console.error('Error al obtener las imágenes:', error);
        });
    }
    // decodeBase64Image(base64Image: string): string{
    //   const decodedString = atob(base64Image);
    //   return decodedString;
    // }
    decodificarBase64(base64String) {
        const binaryString = window.atob(base64String);
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Cambia 'image/png' al tipo de imagen correcto si no es PNG
        return URL.createObjectURL(blob);
    }
    mostrarImagen(urlImagen) {
        this.abrirVentana("data:image/jpeg;base64;" + urlImagen);
    }
    abrirVentana(urlImagen) {
        window.open(urlImagen, "_blank");
    }
    abrirModal(template) {
        this.modalRef = this.modalService.show(template);
    }
};
ComercialAgendaDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_12__["ComercialAgendaService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }
];
ComercialAgendaDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-agenda-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_12__["ComercialAgendaService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
], ComercialAgendaDetalhesComponent);



/***/ }),

/***/ "aZON":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/detalhes/detalhes.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-image {\n  width: 100%;\n  height: 430px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvYWdlbmRhL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9hZ2VuZGEvZGV0YWxoZXMvZGV0YWxoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubW9kYWwtY29udGFpbmVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gfVxyXG5cclxuLm1vZGFsLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "mDNA":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/formulario/formulario.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ComercialAgendaFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaFormularioComponent", function() { return ComercialAgendaFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "UUMI");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "R9pN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formulario.service */ "L7KI");
/* harmony import */ var src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/comercial/agenda/agenda.service */ "73eH");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _ciclo_vendas_cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ciclo-vendas/cotacoes/cotacoes.service */ "uuri");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/vendedores.service */ "4xRd");








// ngx-bootstrap



Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('es', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["esLocale"]);
// Services









let ComercialAgendaFormularioComponent = class ComercialAgendaFormularioComponent {
    constructor(activatedRoute, atividadesService, formService, agendaService, router, formBuilder, location, localeService, pnotifyService, dateService, titleService, cotacoesService, ComercialVendedoresService, authService) {
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.formService = formService;
        this.agendaService = agendaService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.localeService = localeService;
        this.pnotifyService = pnotifyService;
        this.dateService = dateService;
        this.titleService = titleService;
        this.cotacoesService = cotacoesService;
        this.ComercialVendedoresService = ComercialVendedoresService;
        this.authService = authService;
        this.user = this.authService.getCurrentUser();
        this.colors = [
            {
                hex: '#FFFF01',
                descricao: 'Amarillo',
            },
            {
                hex: '#0076d4',
                descricao: 'Azul',
            },
            {
                hex: '#FB6602',
                descricao: 'Naranja',
            },
            {
                hex: '#FF0087',
                descricao: 'Rosado',
            },
            {
                hex: '#610069',
                descricao: 'Morado',
            },
            {
                hex: '#FA1100',
                descricao: 'Rojo',
            },
        ];
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.latitud = -17.78629;
        this.longitud = -63.18117;
        this.breadCrumbTree = [];
        this.formChanged = false;
        this.submittingForm = false;
        this.clientes = [];
        this.promotores = [];
        this.formasContato = [];
        this.origensContato = [];
        this.listarTitulosAgenda = [];
        this.motivosReagendamento = [];
        this.marcadorArrastrable = true;
        this.attachedFiles = [];
        this.adjunto = null;
        this.showInputClientes = true;
        this.showInputVendedores = true;
        this.hideInputVendedores = true;
        this.mostrarFormulario = true;
        this.isDisabledTime = false;
        this.showFormulario = true;
        this.hideFormulario = true;
        this.detalhes = {
            status: null,
        };
        this.localeService.use('es');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.checkAcessos();
        this.checkUrlParams();
        this.getFormFields();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    // checkAcessos(): void {
    //   const acessos: JsonResponse = this.activatedRoute.snapshot.data.acessos;
    //   if (acessos.success === true) {
    //     this.permissoesAcesso = acessos.data;
    //   } else {
    //     this.permissoesAcesso.simuladorVendas = false;
    //   }
    // }
    checkAcessos() {
        const acessos = this.activatedRoute.snapshot.data.detalhes;
        if (acessos.responseCode === 200) {
            this.permissoesAcesso = acessos.result;
        }
        else {
            this.permissoesAcesso.simuladorVendas == false;
        }
    }
    checkUrlParams() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                let routerUrl = this.router.url.split('/');
                this.action = routerUrl[routerUrl.length - 2];
                this.setBreadCrumb(this.action, params.id);
            }
            else {
                this.action = 'novo';
                this.setBreadCrumb(this.action);
            }
            this.setFormBuilder();
        });
    }
    // agregarAdjunto() {
    //   const archivo = this.form.get('adjunto').value;
    //   if (archivo) {
    //     this.attachedFiles.push(archivo);
    //     // Borra el campo 'adjunto' para permitir agregar más archivos
    //     this.form.get('adjunto').setValue(null);
    //   }
    // }
    appTitle() {
        let title;
        if (this.action == 'novo') {
            title = 'Nuevo contacto';
        }
        else if (this.action == 'editar') {
            title = 'Editar contacto';
        }
        else if (this.action == 'reagendar') {
            title = 'Reagendar contato';
        }
        else if (this.action == 'finalizar') {
            title = 'Finalizar Contacto';
        }
        return title;
    }
    setFormBuilder() {
        if (this.activatedRoute.snapshot.data.detalhes.responseCode === 200) {
            const detalhes = this.activatedRoute.snapshot.data.detalhes.result;
            const isFinalizarAction = this.action === 'finalizar';
            let inicioData, inicioHorario, terminoData, terminoHorario;
            if (detalhes.start === null) {
                inicioData = new Date();
                inicioHorario = new Date();
                terminoData = new Date();
                terminoHorario = new Date();
            }
            else {
                inicioData = new Date(detalhes.start);
                inicioHorario = new Date(detalhes.start);
                terminoData = new Date(detalhes.end);
                terminoHorario = new Date(detalhes.end);
            }
            this.form = this.formBuilder.group({
                id: [detalhes.id],
                cor: [detalhes.color.primary],
                codTitulo: [
                    {
                        value: detalhes.codTitulo,
                        disabled: this.action == 'reagendar' || this.action == 'finalizar',
                    },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ],
                cliente: [
                    {
                        value: detalhes.codClient,
                        disabled: this.action != 'novo',
                    },
                ],
                promotor: [
                    {
                        value: detalhes.id_vendedor,
                        disabled: this.action == 'reagendar' || this.action === 'finalizar'
                            ? true
                            : false,
                    },
                ],
                direccion: [
                    {
                        value: detalhes.direccion,
                        disabled: this.action === 'reagendar' || this.action === 'finalizar'
                            ? true
                            : false,
                    },
                ],
                codFormaContato: [
                    {
                        value: detalhes.formContactId,
                        disabled: this.action === 'novo' || this.action === 'editar' ? false : true,
                    },
                ],
                latitud_clie: [
                    {
                        value: detalhes.latitud,
                    },
                ],
                longitud_clie: [
                    {
                        value: detalhes.longitud,
                    },
                ],
                codigo_cliente: [
                    {
                        value: detalhes.codigo_cliente,
                    },
                ],
                codOrigemContato: [
                    {
                        value: detalhes.typeContactId,
                        disabled: this.action === 'novo' || this.action === 'editar' ? false : true,
                    },
                ],
                gerarCotacaoPedido: [false],
                inicioData: [
                    { value: inicioData, disabled: this.action == 'finalizar' },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ],
                inicioHorario: [
                    { value: inicioHorario, disabled: this.action == 'finalizar' },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                ],
                terminoData: [
                    { value: terminoData, disabled: this.action == 'finalizar' },
                ],
                terminoHorario: [
                    { value: terminoHorario, disabled: this.action === 'finalizar' },
                ],
                diaInteiro: [
                    {
                        value: (detalhes.allDay = false),
                        disabled: this.action === 'finalizar',
                    },
                ],
                motivoReagendamento: [
                    {
                        value: detalhes.rescheduleId,
                        disabled: this.action == 'finalizar',
                    },
                    this.action == 'reagendar' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] : null,
                ],
                observacao: [
                    {
                        value: detalhes.description,
                        disabled: this.action == 'finalizar',
                    },
                ],
                Obsfinalizar: [
                    { value: '', disabled: !isFinalizarAction },
                    isFinalizarAction ? [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] : null,
                ],
            });
            if (detalhes.allDay) {
                this.isDisabledTime = true;
            }
            this.latitud = detalhes.latitud;
            this.longitud = detalhes.longitud;
            if (this.action == 'reagendar') {
                this.form.controls.motivoReagendamento.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]);
                this.form.controls.motivoReagendamento.updateValueAndValidity();
            }
            if (this.action == 'finalizar') {
                this.form.controls.Obsfinalizar.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                this.form.controls.Obsfinalizar.updateValueAndValidity();
            }
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    setBreadCrumb(action, id = null) {
        if (action == 'novo') {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Agenda',
                    routerLink: `/comercial/agenda/compromissos`,
                },
                {
                    descricao: 'Nuevo contacto',
                },
            ];
        }
        else {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Agenda',
                    routerLink: `/comercial/agenda/compromissos`,
                },
                {
                    descricao: 'Detalles',
                    routerLink: `/comercial/agenda/detalhes/${id}`,
                },
                {
                    descricao: this.action === 'editar'
                        ? 'Editar contato'
                        : this.action === 'reagendar'
                            ? 'Reagendar contato'
                            : this.action === 'finalizar'
                                ? 'Finalizar contato'
                                : '',
                },
            ];
        }
        this.titleService.setTitle(this.breadCrumbTree[this.breadCrumbTree.length - 1].descricao);
    }
    getFormFields() {
        this.loaderFullScreen = true;
        this.formService
            .loadDependencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response[0].success === true) {
                this.clientes = response[0].data;
            }
            else if (response[0].success === false) {
                this.showInputClientes = false;
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[1].success === true) {
                this.formasContato = response[1].data;
                this.formasContato.unshift({
                    codFormaContato: null,
                    nomeFormaContato: '',
                });
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[2].success === true) {
                this.origensContato = response[2].data;
                this.origensContato.unshift({
                    codOrigemContato: null,
                    nomeOrigemContato: '',
                });
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[3].success === true) {
                this.motivosReagendamento = response[3].data;
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[4].success === true) {
                this.listarTitulosAgenda = response[4].data;
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (this.user.info.matricula != 1) {
                this.promotores = [{
                        'id': this.user.info.idVendedor,
                        'nombre': this.user.info.nomeCompleto
                    }];
            }
            else {
                if (response[5].success == true) {
                    this.promotores = response[5].data;
                }
                else {
                    this.showInputVendedores = false;
                }
            }
        });
    }
    handleLoadDependenciesError() {
        this.pnotifyService.error();
        this.location.back();
    }
    onColorChange(color) {
        this.form.controls.cor.setValue(color.hex);
    }
    onCodTituloChange() {
        const selectedIndex = this.form.controls.codTitulo.value; // Obtener el índice del elemento seleccionado en el dropdown "codTitulo"
        const selectedColor = this.colors[selectedIndex]; // Obtener el color correspondiente al índice seleccionado en el dropdown "codTitulo"
        this.onColorChange(selectedColor); // Establecer el valor del color correspondiente en el dropdown "color-dropdown"
    }
    triggerAllDay() {
        this.isDisabledTime = !this.isDisabledTime;
        if (!this.isDisabledTime) {
            this.form.controls.inicioHorario.enable();
            this.form.controls.terminoHorario.enable();
            this.form.controls.terminoData.enable();
        }
        else {
            this.form.controls.inicioHorario.disable();
            this.form.controls.terminoHorario.disable();
            this.form.controls.terminoData.disable();
        }
    }
    checkValidatorsDate() {
        let validation = true;
        let inicioData;
        let inicioHorario;
        let terminoData;
        let terminoHorario;
        if (!this.form.value.diaInteiro) {
            inicioData = this.form.value.inicioData;
            inicioHorario = this.form.value.inicioHorario;
            terminoData = this.form.value.terminoData;
            terminoHorario = this.form.value.terminoHorario;
            if (inicioData && inicioHorario && terminoData && terminoHorario) {
                inicioData.setHours(inicioHorario.getHours(), inicioHorario.getMinutes());
                terminoData.setHours(terminoHorario.getHours(), terminoHorario.getMinutes());
                if (inicioData.getTime() > terminoData.getTime()) {
                    validation = false;
                }
            }
        }
        return validation;
    }
    onFieldError(field) {
        const control = this.form.get(field);
        if (this.onFieldInvalid(control)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(control) {
        return control && control.invalid && (control.touched || control.dirty);
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
    onSubmit() {
        if (!this.checkValidatorsDate()) {
            this.pnotifyService.notice('La fecha de término debe ser mayor que la de inicio.');
            return;
        }
        if (this.form && this.form.valid) {
            this.loaderNavbar = true;
            this.submittingForm = true;
            const formValue = this.form.getRawValue();
            const obsFinalizar = this.form.get('Obsfinalizar');
            let client, formContactDesc, typeContactDesc, inicioData, inicioHorario, terminoData, terminoHorario;
            let msgSuccess = 'Su cita fue creada.';
            let msgError = 'Ocurrió un error al crear la cita.';
            if (formValue.id) {
                msgSuccess = 'Su cita fue editada.';
                msgError = 'Ocurrió un error al editar la cita.';
            }
            if (formValue.cliente != '') {
                for (let index = 0; index < this.clientes.length; index++) {
                    if (this.clientes[index].id == formValue.cliente) {
                        client = this.clientes[index].razaoSocial;
                    }
                }
            }
            if (formValue.codFormaContato != '') {
                for (let index = 0; index < this.formasContato.length; index++) {
                    if (this.formasContato[index].codFormaContato ==
                        formValue.codFormaContato) {
                        formContactDesc = this.formasContato[index].nomeFormaContato;
                    }
                }
            }
            if (formValue.codOrigemContato != '') {
                for (let index = 0; index < this.origensContato.length; index++) {
                    if (this.origensContato[index].codOrigemContato ==
                        formValue.codOrigemContato) {
                        typeContactDesc = this.origensContato[index].nomeOrigemContato;
                    }
                }
            }
            if (formValue.diaInteiro) {
                inicioData = formValue.inicioData;
                terminoData = inicioData;
                inicioData.setHours(0, 0, 0);
                terminoData.setHours(0, 0, 0);
            }
            else {
                inicioData = formValue.inicioData;
                inicioHorario = formValue.inicioHorario;
                terminoData = formValue.terminoData;
                terminoHorario = formValue.terminoHorario;
                inicioData.setHours(inicioHorario.getHours(), inicioHorario.getMinutes());
                terminoData.setHours(terminoHorario.getHours(), terminoHorario.getMinutes());
            }
            let status;
            // if (formValue.id) {
            //   status = 0; // 'editar'
            // } else {
            switch (this.action) {
                case 'novo':
                    status = 1;
                    break;
                case 'finalizar':
                    status = 3;
                    break;
                case 'reagendar':
                    status = 4;
                    break;
                case 'editar':
                    status = 2;
                    break;
                default:
                    status = 0;
                    break;
            }
            // }
            const inicio = this.dateService.convert2PhpDate(inicioData);
            const termino = this.dateService.convert2PhpDate(terminoData);
            const observacaoUpperCase = formValue.observacao !== null && formValue.observacao !== undefined
                ? formValue.observacao.toUpperCase()
                : null;
            let formObj = {
                id: formValue.id,
                color: {
                    primary: formValue.cor,
                },
                codTitulo: formValue.codTitulo,
                codClient: formValue.cliente,
                idVendedor: formValue.promotor,
                client: client,
                formContactId: formValue.codFormaContato,
                codigo_cliente: formValue.codigo_cliente.value,
                formContactDesc: formContactDesc,
                typeContactId: formValue.codOrigemContato,
                typeContactDesc: typeContactDesc,
                start: inicio,
                end: termino,
                allDay: formValue.diaInteiro,
                rescheduleId: formValue.motivoReagendamento,
                description: formValue.observacao,
                direccion: formValue.direccion,
                latitud: this.latitud,
                longitud: this.longitud,
                status: status,
                /* id_status: id_status, */
                obsFinalizar: formValue.Obsfinalizar,
            };
            this.agendaService.save(this.action, formObj).subscribe({
                next: (response) => {
                    if (response.responseCode === 200) {
                        this.pnotifyService.success(msgSuccess);
                        this.formChanged = false;
                        if (this.action == 'reagendar') {
                            this.router.navigate(['../../compromissos'], {
                                relativeTo: this.activatedRoute,
                            });
                        }
                        else {
                            if (this.permissoesAcesso.simuladorVendas === true &&
                                this.form.value.gerarCotacaoPedido === true) {
                                this.onAddCotacaoPedido();
                            }
                            else {
                                this.location.back();
                            }
                        }
                    }
                    else {
                        this.handleErrorOnSubmit(msgError);
                    }
                },
                error: (error) => {
                    this.handleErrorOnSubmit(msgError);
                },
            });
        }
    }
    handleErrorOnSubmit(message) {
        this.loaderNavbar = false;
        this.submittingForm = false;
        this.pnotifyService.error(message);
    }
    onInput() {
        this.formChanged = true;
        const idVendedor = this.form.value.promotor;
        let params = {
            idVendedor: idVendedor,
        };
        this.ComercialVendedoresService.getCarteiraClientes(params).subscribe((response) => {
            if (response.success == true) {
                this.clientes = response.data;
            }
        });
    }
    updateDireccion(event) {
        var direccion_cliente = event.direccion;
        var latitud_cliente = event.latitud;
        var longitud_cliente = event.longitud;
        var codigo_cliente = event.codigo_cliente;
        this.form.controls['latitud_clie'].setValue(latitud_cliente);
        this.form.controls['longitud_clie'].setValue(longitud_cliente);
        this.form.controls['direccion'].setValue(direccion_cliente);
        this.form.controls['codigo_cliente'].setValue(codigo_cliente);
        this.latitud = latitud_cliente;
        this.longitud = longitud_cliente;
    }
    actualizarMarcador(event) {
        this.latitud = event.coords.lat;
        this.longitud = event.coords.lng;
        this.form.controls['latitud_clie'].setValue(this.latitud);
        this.form.controls['longitud_clie'].setValue(this.longitud);
        this.actualizarDireccion(event);
    }
    obtenerDireccion(latitud, longitud) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=AIzaSyDl5b7STz9xYNDhybTTer2POVncX9FYqCc`)
            .then((response) => response.json())
            .then((data) => {
            const resultado = data.results[0];
            if (resultado) {
                return resultado.formatted_address;
            }
            else {
                return 'Dirección no encontrada';
            }
        })
            .catch((error) => {
            return 'Error al obtener la dirección';
        });
    }
    actualizarDireccion(event) {
        this.obtenerDireccion(event.coords.lat, event.coords.lng)
            .then((direccion_mapa) => {
            this.form.controls['direccion'].setValue(direccion_mapa);
        })
            .catch((error) => {
            this.form.controls['direccion'].setValue('Error al obtener la dirección');
        });
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('La información no guardada se perderá. ¿Desea continuar?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    onCancel() {
        this.location.back();
    }
    onGerarCotacaoPedido() {
        if (this.form.value.gerarCotacaoPedido === true) {
            this.form.controls.cliente.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.form.controls.codFormaContato.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.form.controls.codOrigemContato.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            if (this.form.value.cliente === null) {
                this.form.controls.cliente.markAsTouched();
                this.form.controls.cliente.setErrors({ incorrect: true });
            }
            if (this.form.value.promotor === null) {
                this.form.controls.promotor.markAsTouched();
                this.form.controls.promotor.setErrors({ incorrect: true });
            }
            if (this.form.value.codFormaContato === null) {
                this.form.controls.codFormaContato.markAsTouched();
                this.form.controls.codFormaContato.setErrors({ incorrect: true });
            }
            if (this.form.value.codOrigemContato === null) {
                this.form.controls.codOrigemContato.markAsTouched();
                this.form.controls.codOrigemContato.setErrors({ incorrect: true });
            }
        }
        else if (this.form.value.gerarCotacaoPedido === false) {
            this.form.controls.cliente.setValidators(null);
            this.form.controls.codFormaContato.setValidators(null);
            this.form.controls.codOrigemContato.setValidators(null);
        }
        this.form.controls.cliente.updateValueAndValidity();
        this.form.controls.codFormaContato.updateValueAndValidity();
        this.form.controls.codOrigemContato.updateValueAndValidity();
    }
    onAddCotacaoPedido() {
        this.loaderNavbar = true;
        const params = {
            codFormaContato: this.form.value.codFormaContato,
            codOrigemContato: this.form.value.codOrigemContato,
        };
        this.cotacoesService
            .getReservarIdCotacao()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.router.navigate([
                    '/comercial/ciclo-vendas/cotacoes-pedidos/novo/',
                    response.data.idReservado,
                    this.form.value.cliente,
                ], {
                    queryParams: { f: btoa(JSON.stringify(params)) },
                });
            }
            else {
                this.pnotifyService.error();
            }
        });
    }
    filtrovendedor() {
        var params = this.form.value.promotor;
        this.agendaService.reporte(params);
    }
};
ComercialAgendaFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: _formulario_service__WEBPACK_IMPORTED_MODULE_15__["ComercialAgendaFormularioService"] },
    { type: src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_16__["ComercialAgendaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"] },
    { type: _ciclo_vendas_cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCicloVendasCotacoesService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
];
ComercialAgendaFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-agenda-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        _formulario_service__WEBPACK_IMPORTED_MODULE_15__["ComercialAgendaFormularioService"],
        src_app_modules_comercial_agenda_agenda_service__WEBPACK_IMPORTED_MODULE_16__["ComercialAgendaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"],
        _ciclo_vendas_cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCicloVendasCotacoesService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]])
], ComercialAgendaFormularioComponent);



/***/ }),

/***/ "yZjN":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/titulos-agenda/titulos-agenda.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ComercialCadastrosTitulosAgendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTitulosAgendaService", function() { return ComercialCadastrosTitulosAgendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosTitulosAgendaService = class ComercialCadastrosTitulosAgendaService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial/cadastros/titulos-agenda`;
    }
    getListaTitulosAgenda(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codTitulo) {
        return this.http
            .get(`${this.API}/detalhes/${codTitulo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveTitulosAgenda(titulosAgenda) {
        return this.http.post(`${this.API}/salvar`, titulosAgenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateTitulosAgenda(titulosAgenda) {
        return this.http.put(`${this.API}/atualizar`, titulosAgenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(titulosAgenda) {
        if (titulosAgenda.codTitulo !== null) {
            return this.updateTitulosAgenda(titulosAgenda);
        }
        return this.saveTitulosAgenda(titulosAgenda);
    }
    activateTitulosAgenda(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateTitulosAgenda(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosTitulosAgendaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosTitulosAgendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosTitulosAgendaService);



/***/ }),

/***/ "zN97":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
  \************************************************************************/
/*! exports provided: ComercialTidSoftwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function() { return ComercialTidSoftwareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialTidSoftwareService = class ComercialTidSoftwareService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial/tid-software`;
    }
    loadDependencies() {
        let empresas = this.getEmpresas('vendas');
        let linhas = this.getLinhas();
        let modulosVendas = this.getModulosVendas();
        let modulosProducaoTela = this.getModulosProducaoTela();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            empresas,
            linhas,
            modulosVendas,
            modulosProducaoTela
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas(acao) {
        return this.http
            .get(`${this.API}/empresas/${acao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosVendas() {
        return this.http.get(`${this.API}/modulos/vendas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosProducaoTela() {
        return this.http
            .get(`${this.API}/modulos/producao-tela`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postGerarAcesso(data) {
        return this.http
            .post(`${this.API}/gerar-acesso`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialTidSoftwareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialTidSoftwareService);



/***/ })

}]);
//# sourceMappingURL=agenda-agenda-module-es2015.js.map