(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "6mT7":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/usuarios/lista/lista.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminUsuariosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsuariosListaComponent", function() { return AdminUsuariosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "dgTd");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "SPRX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/usuarios.service */ "IW33");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../perfis/services/perfis.service */ "6bs2");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



//angular



//rxjs

//service






let AdminUsuariosListaComponent = class AdminUsuariosListaComponent {
    constructor(pnotify, service, route, formBuilder, activatedRoute, atividadesService, routerService, perfilService, dateService) {
        this.pnotify = pnotify;
        this.service = service;
        this.route = route;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.perfilService = perfilService;
        this.dateService = dateService;
        this.appTitle = "Lista de usuarios";
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingSincronizarAd = false;
        this.usuarios = [];
        this.perfis = [];
        this.loadingPerfis = true;
        this.data = [];
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        this.numberOfItems = [10, 25, 50, 100, 250, 500];
        /* Pagination */
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/admin/home'
            },
            {
                descricao: 'Lista de usuarios'
            }
        ];
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getPerfis({ inPagina: 0, situacao: 1 });
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
            this.getData(this.getParams());
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
            matricula: [null],
            perfilId: [null],
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
        this.onFilter();
    }
    getData(params) {
        if (!this.loading) {
            this.loadingNavBar = true;
        }
        this.service
            .getUsuarios(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.data = [];
                this.noResult = true;
                this.pnotify.notice('No hubo devolución de tu consulta');
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
    getPerfis(params) {
        this.loadingPerfis = true;
        this.perfilService
            .getPerfis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingPerfis = false;
        }))
            .subscribe(response => {
            if (response.status != 200) {
                this.pnotify.error("Erro ao carregar perfis.");
                return;
            }
            this.perfis = response.body['data'];
        }, error => {
            this.pnotify.error("Erro ao carregar perfis.");
        });
    }
};
AdminUsuariosListaComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["AdminUsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_11__["AdminPerfisService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
AdminUsuariosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-usuarios-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["AdminUsuariosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_11__["AdminPerfisService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], AdminUsuariosListaComponent);



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
                'Las informacion serán inactivadas.'
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

/***/ "IW33":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/usuarios/services/usuarios.service.ts ***!
  \*********************************************************************/
/*! exports provided: AdminUsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsuariosService", function() { return AdminUsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AdminUsuariosService = class AdminUsuariosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getUsuarios(usuario = {}) {
        return this.http.get(`${this.API}/core/usuarios`, {
            params: usuario,
            observe: "response"
        });
    }
    postUsuario(usuario) {
        return this.http.post(`${this.API}/core/usuarios`, usuario, { observe: "response" });
    }
    postPerfilAssociado(usuario) {
        return this.http.post(`${this.API}/core/usuarios/perfis`, usuario, { observe: "response" });
    }
    sincronizaAD() {
        return this.http.get(`${this.API}/core/usuarios/ad/sincronismo`, {
            observe: "response"
        });
    }
};
AdminUsuariosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminUsuariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminUsuariosService);



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

/***/ "SPRX":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/usuarios/lista/lista.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXN1YXJpb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "X7HS":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/usuarios/cadastro/cadastro.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    (click)=\"onSave()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form\r\n        [formGroup]=\"form\"\r\n        class=\"d-flex flex-column\"\r\n        autocomplete=\"off\"\r\n        [hidden]=\"loading\"\r\n      >\r\n        <div class=\"mtc-title\">Datos del Usuario</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-2\">\r\n            <label for=\"matricula\">Registro</label>\r\n            <input\r\n              id=\"matricula\"\r\n              type=\"number\"\r\n              class=\"form-control\"\r\n              formControlName=\"matricula\"\r\n              placeholder=\"Ingresse...\"\r\n              [ngClass]=\"onFieldRequired('matricula')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('matricula')\" message=\"Registro es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col\">\r\n            <label for=\"nome\">Nombre</label>\r\n            <input\r\n              id=\"nome\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"nome\"\r\n              placeholder=\"Ingresse...\"\r\n              [ngClass]=\"onFieldRequired('nome')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nombre es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"apelido\">Abreviatura del Nombre</label>\r\n            <input \r\n              id=\"apelido\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"apelido\"\r\n              placeholder=\"Ingresse...\"\r\n              [ngClass]=\"onFieldRequired('apelido')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('apelido')\" message=\"Apellido es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"email\">Correo Electrónico</label>\r\n            <input \r\n              id=\"email\"\r\n              type=\"email\"\r\n              class=\"form-control\"\r\n              formControlName=\"email\"\r\n              placeholder=\"email@email.com\"\r\n              [ngClass]=\"onFieldRequired('email')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('email')\" message=\"Correo Electrónico es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"pessoaTipo\">Tipo de persona</label>\r\n            <select\r\n              name=\"pessoaTipo\"\r\n              id=\"pessoaTipo\"\r\n              class=\"form-control\"\r\n              [ngClass]=\"onFieldRequired('pessoaTipo')\"\r\n              formControlName=\"pessoaTipo\"\r\n            >\r\n              <option value=\"F\">Física</option>\r\n              <option value=\"J\">Jurídica</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"dataAniversario\">Fecha de cumpleaños</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"far fa-calendar-alt\"></i>\r\n                  </span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"dataAniversario\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                placeholder=\"Ingrese...\"\r\n                formControlName=\"dataAniversario\"\r\n              />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"empresa\">Compañia</label>\r\n            <input \r\n              id=\"empresa\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"empresa\"\r\n              placeholder=\"Ingrese...\"\r\n              [ngClass]=\"onFieldRequired('empresa')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('empresa')\" message=\"Compañia es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"cargo\">Puesto</label>\r\n            <input \r\n              id=\"cargo\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"cargo\"\r\n              placeholder=\"Ingrese...\"\r\n              [ngClass]=\"onFieldRequired('cargo')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('cargo')\" message=\"Puesto es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"departamento\">Departamento</label>\r\n            <input \r\n              id=\"departamento\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"departamento\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('departamento')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('departamento')\" message=\"Departamento es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"senha\">Contraseña</label>\r\n            <input \r\n              id=\"senha\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"senha\"\r\n              placeholder=\"Ingresse...\"\r\n              style=\"text-transform: none !important;\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"modulo\">Modulo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"modulos\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"modulo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"modulo\"\r\n              formControlName=\"moduloId\"\r\n              [ngClass]=\"onFieldRequired('moduloId')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('moduloId')\" message=\"Modulo es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"situacao\">Situación</label>\r\n            <select\r\n              name=\"situacao\"\r\n              id=\"situacao\"\r\n              class=\"form-control\"\r\n              formControlName=\"situacao\"\r\n            >\r\n              <option value=\"1\">Activo</option>\r\n              <option value=\"0\">Inactivo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col mb-3\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <message\r\n        *ngIf=\"perfisAssociadosLoading\"\r\n        icon=\"fas fa-cog fa-spin\"\r\n        text=\"Buscamos información del perfil seleccionado...\">\r\n      </message>\r\n      <div [hidden]=\"perfisAssociadosLoading\">\r\n        <div class=\"row mb-2 mt-4\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Perfiles asociados al perfil</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger\"\r\n                (click)=\"onRemoverAssociacao()\">\r\n                <i class=\"fas fa-trash\"></i>\r\n                <span>Limpiar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!perfisAssociadosLoading && perfisAssociados.length > 0\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigPerfisAssociados\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.perfisAssociados ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('perfisAssociados')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" width=\"20%\">Código</th>\r\n                  <th scope=\"col\" width=\"70%\">Descripción</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of perfisAssociados\" >\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td width=\"20%\">{{ item.id }}</td>\r\n                  <td width=\"70%\">\r\n                   {{ item.nome | uppercase }}\r\n                  </td>\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <btn-icon\r\n                      icon=\"fas fa-trash\"\r\n                      size=\"small\"\r\n                      (click)=\"onRemoverAssociacao(item)\"\r\n                      *ngIf=\"!item.loading\"  \r\n                    >\r\n                    </btn-icon>\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!perfisLoading && perfisAssociados.length === 0\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-exchange-alt\"\r\n              text=\"No se encontraron asociaciones\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Búsqueda de perfil</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"getPerfis()\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPerfis\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-4\">\r\n              <label for=\"buscarPor\">BÚSQUEDA POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"id\">Id</option>\r\n                <option value=\"nome\" selected>Nombre</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-8\">\r\n              <label>TÉRMINO DE BÚSQUEDA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getPerfis()\"\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"perfis.length > 0 && !perfisLoading\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Selección de Perfiles</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarPerfis()\"\r\n                [disabled]=\"!form.get('id')?.value\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span\r\n                  [tooltip]=\"!form.get('id')?.value ? 'Seleccionar un perfil':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\">Conectar\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigPerfis\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.perfis ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('perfis')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 90%\">Perfiles</th>\r\n                  <th style=\"width: 5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of perfis\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 90%\"\r\n                    (click)=\"item.checked = !item.checked\">\r\n                    ({{ item.id }}) {{ item.nome | uppercase }}\r\n                  </td>\r\n                  <td style=\"width: 5%\">\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"perfisLoading\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos buscando los perfiles por ti...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\" *ngIf=\"(perfis.length == 0) && !perfisLoading\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"No se encontró información\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "dgTd":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/usuarios/lista/lista.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpiar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n  <button type=\"button\" [routerLink]=\"['./novo']\">Agregar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"id\">Id</label>\r\n          <input\r\n            id=\"id\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Ingresse...\"\r\n            formControlName=\"id\"\r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input\r\n            id=\"nome\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Ingresse...\"\r\n            formControlName=\"nome\"\r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"matricula\">Registro</label>\r\n          <input\r\n            id=\"matricula\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Ingresse...\"\r\n            formControlName=\"matricula\"\r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"perfil\">Perfil</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"perfis\"\r\n            multiple=\"true\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingPerfis\"\r\n            labelForId=\"perfil\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"perfil\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"perfilId\"\r\n            placeholder=\"Seleccione...\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"situacao\">Situación</label>\r\n          <select\r\n            name=\"situacao\"\r\n            id=\"situacao\"\r\n            class=\"form-control\"\r\n            formControlName=\"situacao\"\r\n          >\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"1\">Activo</option>\r\n            <option value=\"0\">Inactivo</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"registrosPorPagina\">Datos</label>\r\n          <select\r\n            name=\"registrosPorPagina\"\r\n            id=\"registrosPorPagina\"\r\n            formControlName=\"registrosPorPagina\"\r\n            class=\"form-control\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\" [hidden]=\"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th style=\"width:100px\">Id</th>\r\n            <th>Nombre</th>\r\n            <th>Registro</th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of data; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\">\r\n              {{ item.id | number:'6.0-0' }}\r\n            </td>\r\n            <td> {{ item.nome }} </td>\r\n            <td> {{ item.matricula }} </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                container=\"body\"\r\n              >\r\n                <a [routerLink]=\"['./', item.id]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Visualización {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "dkEB":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/usuarios/cadastro/cadastro.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminUsuariosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsuariosCadastroComponent", function() { return AdminUsuariosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "X7HS");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "kPsv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/usuarios.service */ "IW33");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../perfis/services/perfis.service */ "6bs2");
/* harmony import */ var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modulos/services/modulos.service */ "RbS/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");



//angular



//services




//rxjs



let AdminUsuariosCadastroComponent = class AdminUsuariosCadastroComponent {
    constructor(formBuilder, service, pnotify, perfilService, activatedRoute, router, modulosService, confirmModalService, localeService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.pnotify = pnotify;
        this.perfilService = perfilService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modulosService = modulosService;
        this.confirmModalService = confirmModalService;
        this.localeService = localeService;
        this.appTitle = "Registros";
        this.modulos = [];
        this.loading = true;
        this.loadingNavBar = false;
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        /* Pagination */
        this.perfis = [];
        this.perfisLoading = false;
        this.perfisAssociados = [];
        this.perfisAssociadosLoading = false;
        this.tableConfigPerfisAssociados = {
            subtitleBorder: true
        };
        this.tableConfigPerfis = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.toggle = {
            perfis: false,
            perfisAssociados: false
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.onActivatedRoute();
        this.setBreadCrumb();
        this.getModulos();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/admin/home`,
            },
            {
                descricao: 'Lista de usuarios',
                routerLink: `/admin/usuarios`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (!(params === null || params === void 0 ? void 0 : params.id)) {
            this.loading = false;
            return;
        }
        this.getUsuario(params === null || params === void 0 ? void 0 : params.id);
        this.getPerfisAssociados({ "usuarioId": params === null || params === void 0 ? void 0 : params.id });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            matricula: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            apelido: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pessoaTipo: ['F', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            departamento: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            empresa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cargo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataAniversario: [null],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telefoneComercial: [null],
            telefoneCelular: [null],
            ramal: [null],
            senha: [null],
            moduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situacao: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formPerfis = this.formBuilder.group({
            buscarPor: ['nome'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
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
    getUsuario(id) {
        this.loading = true;
        this.service
            .getUsuarios({ id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            let data = response.body["data"][0];
            data.dataAniversario = data.dataAniversario ? new Date(data.dataAniversario) : null;
            this.form.patchValue(data);
        });
    }
    onSave() {
        this.loadingNavBar = true;
        let params = this.form.value;
        this.service
            .postUsuario(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
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
    getModulos() {
        this.loading = true;
        this.modulosService
            .getModulos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
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
    getPerfisAssociados(params) {
        params.situacao = '1';
        params.inPagina = '0';
        /* params.ORDE_BY = 'ID_REFE_ERP' */
        this.perfisAssociadosLoading = true;
        this.perfilService
            .getPerfis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.perfisAssociadosLoading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            this.perfisAssociados = response.body['data'];
            this.tableConfigPerfisAssociados.fixedHeader = this.perfisAssociados.length > 9 ? true : false;
        });
    }
    getPerfis() {
        var _a, _b;
        const buscarPor = (_a = this.formPerfis.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
        const pesquisa = (_b = this.formPerfis.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
        }
        this.toggle.perfis = false;
        this.perfisLoading = true;
        this.perfilService
            .getPerfis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.perfisLoading = false;
        }))
            .subscribe(response => {
            if (response.status != 200) {
                this.perfis = [];
                return;
            }
            let data = response.body['data'];
            this.perfis = data.filter(perfil => {
                return !this.perfisAssociados.some(item => item.id == perfil.id);
            });
            this.tableConfigPerfis.fixedHeader = this.perfis.length > 9 ? true : false;
        }, error => {
            this.perfis = [];
            console.log(error);
        });
    }
    onAssociarPerfis() {
        let perfis = this.perfis.filter(material => material.checked);
        this.toggle.perfis = false;
        perfis.map(item => {
            var _a, _b;
            item.loading = true;
            if (this.perfisAssociados.some(atividade => (atividade === null || atividade === void 0 ? void 0 : atividade.id) === item.id)) {
                return;
            }
            let params = {
                "perfilId": (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : "",
                "usuarioId": (_b = this.form.get("id").value) !== null && _b !== void 0 ? _b : "",
                "situacao": "1"
            };
            this.service
                .postPerfilAssociado(params)
                .subscribe(response => {
                if (response.status === 200) {
                    this.perfisAssociados = [...this.perfisAssociados, Object.assign(Object.assign({}, item), { checked: false, loading: false, attividadeId: item.id, perfilId: this.form.get("id").value })];
                    this.perfis = this.perfis.filter(material => !material.checked);
                    this.tableConfigPerfisAssociados.fixedHeader = this.perfisAssociados.length > 9 ? true : false;
                }
            }, error => {
                item.loading = false;
            });
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    onRemoverAssociacao(perfil) {
        let _perfis = perfil ? [perfil] : this.perfisAssociados.filter(perfil => perfil.checked);
        let perfis = _perfis.map(item => { return { perfilId: item.id, usuarioId: this.form.get('id').value }; });
        this.toggle.perfisAssociados = false;
        if (perfis.length == 0) {
            this.pnotify.notice("Nenhum perfil selecionado.");
            return;
        }
        this.confirmDelete()
            .subscribe((response) => {
            if (!response) {
                this.perfisAssociados.map(item => item.checked = false);
                return;
            }
            perfis.map(item => {
                item["situacao"] = '0';
                item["loading"] = true;
                this.service
                    .postPerfilAssociado(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                    item["loading"] = false;
                }))
                    .subscribe(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    this.perfisAssociados = this.perfisAssociados
                        .filter(perfil => perfil.id != item.perfilId);
                    this.tableConfigPerfisAssociados.fixedHeader = this.perfisAssociados.length > 9 ? true : false;
                }, error => {
                    this.pnotify.error("Erro ao remover perfil.");
                });
            });
        });
    }
    onToggleAll(item) {
        this.toggle[item] = !this.toggle[item];
        this[item].map(material => material.checked = this.toggle[item]);
    }
};
AdminUsuariosCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["AdminUsuariosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_8__["AdminPerfisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] }
];
AdminUsuariosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-usuarios-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["AdminUsuariosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_8__["AdminPerfisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]])
], AdminUsuariosCadastroComponent);



/***/ }),

/***/ "fBH2":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/usuarios/usuarios-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminUsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsuariosRoutingModule", function() { return AdminUsuariosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "6mT7");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "dkEB");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AdminUsuariosListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsuariosCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsuariosCadastroComponent"]
    }
];
let AdminUsuariosRoutingModule = class AdminUsuariosRoutingModule {
};
AdminUsuariosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminUsuariosRoutingModule);



/***/ }),

/***/ "kPsv":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/usuarios/cadastro/cadastro.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXN1YXJpb3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mIc8":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/usuarios/usuarios.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminUsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsuariosModule", function() { return AdminUsuariosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usuarios-routing.module */ "fBH2");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "6mT7");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "dkEB");














let AdminUsuariosModule = class AdminUsuariosModule {
};
AdminUsuariosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AdminUsuariosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AdminUsuariosCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_11__["AdminUsuariosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_6__["ModuleWrapperModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]
        ]
    })
], AdminUsuariosModule);



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module-es2015.js.map