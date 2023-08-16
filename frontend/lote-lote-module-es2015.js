(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lote-lote-module"],{

/***/ "IkfV":
/*!*******************************************************!*\
  !*** ./src/app/modules/comercial/lote/lote.module.ts ***!
  \*******************************************************/
/*! exports provided: ComercialLoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialLoteModule", function() { return ComercialLoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es-BO */ "YozJ");
/* harmony import */ var _angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-flatpickr */ "nFnn");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "i5S4");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "L/mj");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _lote_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lote-routing.module */ "k44+");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../templates/templates.module */ "9lCC");
/* harmony import */ var _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruta/ruta.component */ "rq2F");







Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es_BO__WEBPACK_IMPORTED_MODULE_4___default.a, 'es-BO');
// Angular Calendar



// ngx-bootstrap



// ng-select

// Guards

// Modules






// Components
/* import { ComercialAgendaCompromissosComponent } from './compromissos/compromissos.component';
import { ComercialAgendaDetalhesComponent } from './detalhes/detalhes.component';
import { ComercialAgendaFormularioComponent } from './formulario/formulario.component'; */

let ComercialLoteModule = class ComercialLoteModule {
};
ComercialLoteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_19__["ComercialLoteRutaComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _lote_routing_module__WEBPACK_IMPORTED_MODULE_14__["ComercialRoutingLoteModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
            }),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["TemplatesModule"].forRoot(),
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_18__["ComercialTemplatesModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDl5b7STz9xYNDhybTTer2POVncX9FYqCc' // Reemplaza con tu propia clave de API de Google Maps
            }),
        ],
        providers: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_13__["FormDeactivateGuard"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-BO' }, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],]
    })
], ComercialLoteModule);



/***/ }),

/***/ "k44+":
/*!***************************************************************!*\
  !*** ./src/app/modules/comercial/lote/lote-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ComercialRoutingLoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRoutingLoteModule", function() { return ComercialRoutingLoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ruta/ruta.component */ "rq2F");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");



/* import { ComercialAgendaAcessosResolverGuard } from './guards/acessos-resolver.guard';
import { ComercialAgendaDetalhesResolverGuard } from './guards/detalhes-resolver.guard'; */
// Components
/* import { ComercialAgendaCompromissosComponent } from './compromissos/compromissos.component';
import { ComercialAgendaDetalhesComponent } from './detalhes/detalhes.component';
import { ComercialAgendaFormularioComponent } from './formulario/formulario.component'; */


const routes = [
    { path: 'ruta', component: _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_3__["ComercialLoteRutaComponent"] },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    },
];
let ComercialRoutingLoteModule = class ComercialRoutingLoteModule {
};
ComercialRoutingLoteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialRoutingLoteModule);



/***/ })

}]);
//# sourceMappingURL=lote-lote-module-es2015.js.map