(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo-motorista-tipo-motorista-module"],{

/***/ "/XrL":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/lista/lista.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90aXBvLW1vdG9yaXN0YS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "0RMA":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/tipo-motorista-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaTipoMotoristaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTipoMotoristaRoutingModule", function() { return LogisticaTipoMotoristaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "n/2I");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "c5QR");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaTipoMotoristaListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTipoMotoristaCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTipoMotoristaCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaTipoMotoristaRoutingModule = class LogisticaTipoMotoristaRoutingModule {
};
LogisticaTipoMotoristaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaTipoMotoristaRoutingModule);



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

/***/ "UttG":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/tipo-motorista/lista/lista.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Tipo de conductor\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../cadastro']\">\r\n    Añadir\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"ID_LOGI_MOTO_TIPO\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_MOTO_TIPO\"\r\n                formControlName=\"ID_LOGI_MOTO_TIPO\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"NM_MOTO_TIPO\">Tipo de vehículo</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_MOTO_TIPO\"\r\n                formControlName=\"NM_MOTO_TIPO\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label for=\"IN_STAT\">Status</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"tipo\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"cod\"\r\n                id=\"tipo\"\r\n                (change)=\"onFilter()\"\r\n                formControlName=\"IN_STAT\"\r\n                placeholder=\"Seleccione...\"\r\n              >\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n                </ng-template>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th scope=\"col\">ID </th>\r\n            <th scope=\"col\">Tipo de vehículo</th>\r\n            <th scope=\"col\" style=\"width:80px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let tipoMotorista of tipoMotoristas; let i = index\">\r\n            <td [ngClass]=\"tipoMotorista.IN_STAT == 1 ? 'border-success' : 'border-danger'\">\r\n            {{tipoMotorista.ID_LOGI_MOTO_TIPO | number: '6.0-0'}}\r\n            </td>\r\n            <td>{{ tipoMotorista.NM_MOTO_TIPO }}</td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span class=\"mr-3\" [tooltip]=\"tipoMotorista.IN_STAT == 1 ? 'Inactivar' : 'Activar'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(tipoMotorista)\">\r\n                  <i [ngClass]=\"tipoMotorista.IN_STAT == 1 ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openRegister(tipoMotorista)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Ningún informacion econtrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "c5QR":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/lista/lista.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LogisticaTipoMotoristaListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTipoMotoristaListaComponent", function() { return LogisticaTipoMotoristaListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "UttG");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "/XrL");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_tipo_motorista_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tipo-motorista.service */ "w8N5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");




//angular



//servicos



// rxjs



let LogisticaTipoMotoristaListaComponent = class LogisticaTipoMotoristaListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, tipoMotoristaService, formBuilder, confirmModalService, routerService, dateService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.tipoMotoristaService = tipoMotoristaService;
        this.formBuilder = formBuilder;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        // Tipos de Situação dos Tipos de Motoristas (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Activo',
            },
            {
                cod: '0',
                nome: 'Inactivo',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'Activo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inactivo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 0;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
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
            this.getTipoMotoristas(this.getParams());
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_LOGI_MOTO_TIPO: [null],
            NM_MOTO_TIPO: [null],
            IN_STAT: [null],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Prontuários',
                routerLink: `/logistica/cadastros/${id}`,
            },
            {
                descricao: 'Tipo de conductor',
            },
        ];
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getTipoMotoristas(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.tipoMotoristaService
            .getTipoMotoristas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoMotoristas = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.tipoMotoristas = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    changeType(tipoMotorista) {
        const stat = tipoMotorista.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_11__["EMPTY"];
            this.loadingNavBar = true;
            tipoMotorista.IN_STAT = stat;
            return this.tipoMotoristaService.postTipoMotorista(tipoMotorista);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            //tipoContrato.IN_STAT = stat;
        }, (error) => {
            tipoMotorista.IN_STAT = tipoMotorista.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == '1')
            return this.confirmModalService.showConfirm(null, null, 'Desea continuar?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar in inactivación', 'Desea continuar?', 'Cancelar', 'Confirmar');
    }
    openRegister(tipoMotorista) {
        this.route.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(tipoMotorista),
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.onFilter();
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
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
LogisticaTipoMotoristaListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_tipo_motorista_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaTipoMotoristaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
LogisticaTipoMotoristaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-cadastros-tipo-motorista-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_tipo_motorista_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaTipoMotoristaService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], LogisticaTipoMotoristaListaComponent);



/***/ }),

/***/ "gTzj":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/tipo-motorista/cadastro/cadastro.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Prontuário del tipo de conductores\">\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postTipoMotorista()\"\r\n    >\r\n    Ahorrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"NM_MOTO_TIPO\">Tipo de conductor</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_MOTO_TIPO\"\r\n              formControlName=\"NM_MOTO_TIPO\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_MOTO_TIPO') + ' ' + onFieldRequired('NM_MOTO_TIPO')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_MOTO_TIPO')\" message=\"El tipo de conductor es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"IN_STAT\">Status</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_STAT\"\r\n              formControlName=\"IN_STAT\"\r\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\r\n              <option value=1>Activo</option>\r\n              <option value=0>Inactivo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"El status es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Descripción:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "kywm":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/tipo-motorista.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LogisticaTipoMotoristaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTipoMotoristaModule", function() { return LogisticaTipoMotoristaModule; });
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
/* harmony import */ var _tipo_motorista_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tipo-motorista-routing.module */ "0RMA");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lista/lista.component */ "c5QR");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "n/2I");

















let LogisticaTipoMotoristaModule = class LogisticaTipoMotoristaModule {
};
LogisticaTipoMotoristaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaTipoMotoristaListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaTipoMotoristaCadastroComponent"]
        ],
        imports: [
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
            _tipo_motorista_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaTipoMotoristaRoutingModule"]
        ]
    })
], LogisticaTipoMotoristaModule);



/***/ }),

/***/ "lGPV":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/cadastro/cadastro.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90aXBvLW1vdG9yaXN0YS9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "n/2I":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/cadastro/cadastro.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LogisticaTipoMotoristaCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTipoMotoristaCadastroComponent", function() { return LogisticaTipoMotoristaCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "gTzj");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "lGPV");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tipo_motorista_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tipo-motorista.service */ "w8N5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");













let LogisticaTipoMotoristaCadastroComponent = class LogisticaTipoMotoristaCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, routerService, titleService, atividadesService, localeService, tipoMotoristaService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routerService = routerService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.localeService = localeService;
        this.tipoMotoristaService = tipoMotoristaService;
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
        this.appTitle = 'Prontuários';
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Prontuários',
                routerLink: `/logistica/cadastros/${id}`,
            },
            {
                descricao: 'Tipo de Conductor',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //Consumir informações que estão na rota para editar
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
        });
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_MOTO_TIPO: [null],
            NM_MOTO_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            IN_STAT: [1],
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postTipoMotorista() {
        this.loadingNavBar = true;
        this.tipoMotoristaService
            .postTipoMotorista(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.reset();
                this.pnotify.success();
                this.router.navigate(['../lista'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
};
LogisticaTipoMotoristaCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _services_tipo_motorista_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaTipoMotoristaService"] }
];
LogisticaTipoMotoristaCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-tipo-motorista-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _services_tipo_motorista_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaTipoMotoristaService"]])
], LogisticaTipoMotoristaCadastroComponent);



/***/ })

}]);
//# sourceMappingURL=tipo-motorista-tipo-motorista-module-es2015.js.map