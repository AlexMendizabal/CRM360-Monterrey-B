(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicos-contatos-contatos-module"],{

/***/ "19/A":
/*!**************************************************************!*\
  !*** ./src/app/modules/servicos/contatos/contatos.module.ts ***!
  \**************************************************************/
/*! exports provided: ServicosContatosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosContatosModule", function() { return ServicosContatosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _contatos_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contatos-routing.module */ "zXAA");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "mcWo");




// ngx-bootstrap



// ng-brazil






let ServicosContatosModule = class ServicosContatosModule {
};
ServicosContatosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ServicosContatosListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ng_brazil__WEBPACK_IMPORTED_MODULE_7__["NgBrazil"],
            _contatos_routing_module__WEBPACK_IMPORTED_MODULE_8__["ServicosContatosRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]
    })
], ServicosContatosModule);



/***/ }),

/***/ "ETOq":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/servicos/contatos/lista/lista.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Matrícula</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"NR_MATR\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Nome</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"NM_USUA\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Telefone</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control col\"\r\n            formControlName=\"TELE\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>E-mail</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control col\"\r\n            formControlName=\"MAIL\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Cargo</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"CARG\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Registros</label>\r\n          <select\r\n            name=\"\"\r\n            id=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            (change)=\"onSearch()\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n   \r\n  <div class=\"col-12 p-0 d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"w-100\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Nome</th>\r\n            <th *ngIf=\"!showDetailPanel\">Email</th>\r\n            <th *ngIf=\"!showDetailPanel\">Telefone</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let contato of contatos\">\r\n            <td>\r\n              <img src=\"data:image/png;base64,{{ contato.FOTO }}\" class=\"rounded-circle\" alt=\"\" height=\"30px\" *ngIf=\"contato.FOTO != null\">\r\n              <i class=\"fas fa-user-circle text-muted\" *ngIf=\"contato.FOTO == null || contato.FOTO == ''\" style=\"font-size: 1.5rem;\"></i>\r\n            </td>\r\n            <td>{{ contato.NM_USUA }}</td>\r\n            <td *ngIf=\"!showDetailPanel\">{{ contato.MAIL }}</td>\r\n            <td *ngIf=\"!showDetailPanel\">{{ contato.TELE }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"onViewDetails(contato)\"  \r\n              >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n    <div class=\"col-5 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div>\r\n            <img src=\"data:image/png;base64,{{ contato?.FOTO }}\" class=\"rounded-circle\" alt=\"\" height=\"200px\" *ngIf=\"contato?.FOTO != null\">\r\n            <i class=\"fas fa-user-circle text-muted\" *ngIf=\"contato?.FOTO == null || contato?.FOTO == ''\" style=\"font-size: 8rem;\"></i>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-group\">\r\n              <label>E-mail</label>\r\n              <span class=\"d-block\">{{ contato?.MAIL }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Telefone</label>\r\n              <span class=\"d-block\">{{ contato?.TELE }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Cargo</label>\r\n              <span class=\"d-block\">{{ contato?.CARG }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Departamento</label>\r\n              <span class=\"d-block\">{{ contato?.DEPA }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Aniversário</label>\r\n              <span class=\"d-block\">{{ contato?.DT_NASC | date : 'd'}} &nbsp;de&nbsp; {{ contato?.DT_NASC | date : 'MMMM'}}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Aniversário na Empresa</label>\r\n              <span class=\"d-block\">{{ contato?.DT_INIC_EMPR | date : 'd' }} &nbsp;de&nbsp; {{ contato?.DT_INIC_EMPR | date : 'MMMM' }} </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

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

/***/ "jF/K":
/*!**********************************************************************!*\
  !*** ./src/app/modules/servicos/contatos/lista/lista.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Vydmljb3MvY29udGF0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mcWo":
/*!********************************************************************!*\
  !*** ./src/app/modules/servicos/contatos/lista/lista.component.ts ***!
  \********************************************************************/
/*! exports provided: ServicosContatosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosContatosListaComponent", function() { return ServicosContatosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "ETOq");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "jF/K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_contato_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contato.service */ "n8zn");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");













let ServicosContatosListaComponent = class ServicosContatosListaComponent {
    constructor(activatedRoute, formBuilder, contatosService, pnotify, dateService, route, routerService, atividadesService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.contatosService = contatosService;
        this.pnotify = pnotify;
        this.dateService = dateService;
        this.route = route;
        this.routerService = routerService;
        this.atividadesService = atividadesService;
        this.detailPanelService = detailPanelService;
        this.appTitle = "Contatos";
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/servicos/home'
            },
            {
                descricao: this.appTitle
            }
        ];
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = true;
        this.currentPage = 1;
        this.totalItems = 10;
        this.itemsPerPage = 50;
        this.contatos = [];
        this.detailPanelTitle = "Detalhes";
    }
    ngOnInit() {
        this.registraAcesso();
        this.buildForm();
        this.onActivateRoute();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        this.$detailPanelSubscription.unsubscribe();
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            TELE: [null],
            MAIL: [null],
            CARG: [null],
            TT_REGI_PAGI: [50],
            PAGI: [1],
            TIME: [(new Date()).getTime()]
        });
    }
    onActivateRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0) {
                this.form.patchValue(_response);
                this.getContatos(this.getParams());
            }
            else {
                this.getContatos();
            }
        });
    }
    getContatos(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.contatosService
            .get(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.contatos = response.body["data"];
                this.totalItems = response.body["total"];
                this.noResult = false;
            }
            else {
                this.pnotify.error();
                this.noResult = true;
            }
        }, error => {
            this.pnotify.error();
            this.noResult = true;
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
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.itemsPerPage = this.form.get('TT_REGI_PAGI').value;
        this.showDetailPanel = false;
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.onSearch();
    }
    //DetailPanel
    onDetailPanelEmitter() {
        this.$detailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            //if (!event.showing) this.romaneios.map((element) => element.selected = false);
        });
    }
    onViewDetails(contato) {
        this.detailPanelService.show();
        this.detailPanelService.loadedFinished(false);
        this.contato = contato;
        this.detailPanelTitle = contato.NM_USUA;
    }
    onReset() {
        this.form.reset();
        this.form.get('TT_REGI_PAGI').setValue(50);
        this.onSearch();
    }
};
ServicosContatosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_contato_service__WEBPACK_IMPORTED_MODULE_7__["ContatoService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"] }
];
ServicosContatosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'servicos-contatos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_contato_service__WEBPACK_IMPORTED_MODULE_7__["ContatoService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]])
], ServicosContatosListaComponent);



/***/ }),

/***/ "zXAA":
/*!**********************************************************************!*\
  !*** ./src/app/modules/servicos/contatos/contatos-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ServicosContatosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosContatosRoutingModule", function() { return ServicosContatosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "mcWo");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            },
            { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ServicosContatosListaComponent"] },
            {
                path: 'contatos',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./contatos.module */ "19/A")).then(m => m.ServicosContatosModule)
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    }
];
let ServicosContatosRoutingModule = class ServicosContatosRoutingModule {
};
ServicosContatosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ServicosContatosRoutingModule);



/***/ })

}]);
//# sourceMappingURL=servicos-contatos-contatos-module-es2015.js.map