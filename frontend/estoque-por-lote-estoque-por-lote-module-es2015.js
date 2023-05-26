(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-por-lote-estoque-por-lote-module"],{

/***/ "+II/":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-por-lote/estoque-por-lote.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoEstoquePorLoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoEstoquePorLoteComponent", function() { return SulFluminenseEstoqueAvancadoEstoquePorLoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estoque_por_lote_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estoque-por-lote.component.html */ "8WE6");
/* harmony import */ var _estoque_por_lote_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estoque-por-lote.component.scss */ "0IV4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var _services_estoque_por_lote_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/estoque-por-lote.service */ "lBGC");
/* harmony import */ var _services_generic_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/generic.service */ "C+/D");














let SulFluminenseEstoqueAvancadoEstoquePorLoteComponent = class SulFluminenseEstoqueAvancadoEstoquePorLoteComponent {
    constructor(service, genericService, activatedRoute, routerService, formBuilder, dateService, localeService, route, xlsxService, notice) {
        this.service = service;
        this.genericService = genericService;
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.localeService = localeService;
        this.route = route;
        this.xlsxService = xlsxService;
        this.notice = notice;
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.data = new Date();
        this.listas = [];
        this.compararData = false;
        this.noResult = false;
        this.dadosEmpty = false;
        this.idApoio = '82D92286-40A1-4642-98F8-0611092600F3';
        this.appTitle = 'Auditoria Estoque por Lote';
        /* Paginação */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 100;
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: false,
        };
        this.numerico = {
            align: "left",
            allowNegative: false,
            decimal: "",
            precision: 0,
            prefix: "",
            suffix: "",
            thousands: ""
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            ID_LINH: [null],
            ID_CLAS: [null],
            ID_MATE: [null],
            CD_LOTE: [null],
            ID_APOI_TIPO_MATE: [this.idApoio],
            time: [new Date().getTime()]
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getActiveRoute();
        this.getLinhas();
        this.form.get('ID_CLAS').disable();
        this.form.get('ID_MATE').disable();
    }
    ngOnDestroy() {
        this.$activateRoutedSubscription.unsubscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((param) => {
            this.idSubModulo = param['idSubModulo'];
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/sul-fluminense/home'
                },
                {
                    descricao: 'Estoque Avançado',
                    routerLink: `/sul-fluminense/estoque-avancado/${this.idSubModulo}`
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    exportarExcel() {
        this.xlsxService.exportFile(this.listas, 'estoque-por-lote');
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
    comparaData() {
        let stra = this.form.get('dataInicial').value;
        let strb = this.form.get('dataFinal').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
            ;
        }
        if (!dataFinal) {
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compararData = true;
            return this.compararData;
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
    onFilter() {
        this.form.get('time').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getActiveRoute() {
        this.$activateRoutedSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            if (Object.keys(response).length > 0) {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
                this.getLista(_response);
            }
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getLinhas() {
        this.genericService.getLinhas()
            .subscribe((response) => {
            this.linhas = response.body['result'];
        });
    }
    getClasses() {
        this.loaderNavbar = true;
        this.genericService.getClasses(this.getParams())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            this.classes = response.body['result'];
        });
    }
    getMateriais() {
        this.loaderNavbar = true;
        this.genericService.getMateriais(this.getParams())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            this.materiais = response.body['result'];
        });
    }
    getLista(params) {
        this.spinnerFullScreen = true;
        this.service.getLista(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não há informações para esse período.');
                this.dadosEmpty = true;
                this.noResult = false;
            }
            else {
                this.listas = response.body['data'];
                this.totalItems = response.body['data'].length;
                this.listas.forEach((element, i) => {
                    element.INDICE = i + 1;
                });
                this.dadosEmpty = false;
                this.noResult = true;
            }
        }, (error) => this.notice.error());
    }
    validaCampo() {
        if (this.form.value['ID_LINH'] != null)
            this.form.get('ID_CLAS').enable();
        else {
            this.form.get('ID_CLAS').disable();
            this.form.get('ID_MATE').disable();
        }
        if (this.form.value['ID_CLAS'] != null)
            this.form.get('ID_MATE').enable();
        else {
            this.form.get('ID_MATE').disable();
        }
    }
};
SulFluminenseEstoqueAvancadoEstoquePorLoteComponent.ctorParameters = () => [
    { type: _services_estoque_por_lote_service__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseEstoqueAvancadoEstoquePorLoteService"] },
    { type: _services_generic_service__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseEstoqueAvancadoGenericService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] }
];
SulFluminenseEstoqueAvancadoEstoquePorLoteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'estoque-por-lote',
        template: _raw_loader_estoque_por_lote_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estoque_por_lote_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_estoque_por_lote_service__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseEstoqueAvancadoEstoquePorLoteService"],
        _services_generic_service__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseEstoqueAvancadoGenericService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])
], SulFluminenseEstoqueAvancadoEstoquePorLoteComponent);



/***/ }),

/***/ "0IV4":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-por-lote/estoque-por-lote.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZXN0b3F1ZS1hdmFuY2Fkby9lc3RvcXVlLXBvci1sb3RlL2VzdG9xdWUtcG9yLWxvdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2TB0":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-por-lote/estoque-por-lote-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule", function() { return SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _estoque_por_lote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estoque-por-lote.component */ "+II/");




const routes = [
    {
        path: '',
        component: _estoque_por_lote_component__WEBPACK_IMPORTED_MODULE_3__["SulFluminenseEstoqueAvancadoEstoquePorLoteComponent"]
    }
];
let SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule = class SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule {
};
SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule);



/***/ }),

/***/ "8WE6":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/estoque-avancado/estoque-por-lote/estoque-por-lote.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    (click)=\"exportarExcel()\"\n    [disabled]=\"!noResult\"\n    >\n    Exportar\n  </button>\n  <button\n    (click)=\"onFilter()\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <!-- Início dos Filtros -->\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-2\">\n          <label for=\"linha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione linha\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            placeholder=\"Selecione...\"\n            formControlName=\"ID_LINH\"\n            (change) = \"getClasses(); validaCampo()\"\n            [ngClass]=\"onFieldError('ID_LINH') + ' ' + onFieldRequired('ID_LINH')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('ID_LINH')\"\n            message=\"Linha é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            labelForId=\"classe\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            placeholder=\"Selecione classe\"\n            formControlName=\"ID_CLAS\"\n            (change) = \"getMateriais(); validaCampo()\"\n            [ngClass]=\"onFieldError('ID_CLAS') + ' ' + onFieldRequired('ID_CLAS')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('ID_CLAS')\"\n            message=\"Classes é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"material\">Material</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"materiais\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"true\"\n              labelForId=\"material\"\n              bindLabel=\"NM_MATE\"\n              bindValue=\"ID\"\n              placeholder=\"Selecione material\"\n              formControlName=\"ID_MATE\"\n              [ngClass]=\"onFieldError('ID_MATE') + ' ' + onFieldRequired('ID_MATE')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('ID_MATE')\"\n              message=\"Materiais é obrigatório.\">\n            </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"numeroLote\"> Número do lote </label>\n          <input\n            id=\"numeroLote\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"CD_LOTE\"\n            currencyMask [options]=\"numerico\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <!-- Início da Lista -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" [hidden]=\"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center hover\" (click)=\"sort('CD_MATE')\">Cód. Material\n              <span *ngIf=\"key == 'CD_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'CD_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('DS_MATE')\">Material\n              <span *ngIf=\"key == 'DS_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'DS_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('DS_LINH')\">Linha\n              <span *ngIf=\"key == 'DS_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'DS_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('CD_CLAS')\">Cód. Classe\n              <span *ngIf=\"key == 'CD_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'CD_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('DS_CLAS')\">Classe\n              <span *ngIf=\"key == 'DS_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'DS_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('CD_LOTE')\">Lote\n              <span *ngIf=\"key == 'CD_LOTE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'CD_LOTE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('QT_ESTO')\">Qtde\n              <span *ngIf=\"key == 'QT_ESTO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'QT_ESTO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\">\n            <td class=\"text-center\">{{ lista.CD_MATE }}</td>\n            <td class=\"text-center\">{{ lista.DS_MATE }}</td>\n            <td class=\"text-center\">{{ lista.DS_LINH}}</td>\n            <td class=\"text-center\">{{ lista.CD_CLAS | number: '0.0-0' }}</td>\n            <td class=\"text-center\">{{ lista.DS_CLAS }}</td>\n            <td class=\"text-center\">{{ lista.CD_LOTE }}</td>\n            <td class=\"text-center\">{{ lista.QT_ESTO | number: '0.3-3' }}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n    </div>\n  </div>\n</app-body>\n");

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

/***/ "lBGC":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/services/estoque-por-lote.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoEstoquePorLoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoEstoquePorLoteService", function() { return SulFluminenseEstoqueAvancadoEstoquePorLoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let SulFluminenseEstoqueAvancadoEstoquePorLoteService = class SulFluminenseEstoqueAvancadoEstoquePorLoteService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getLista(params = {}) {
        return this.http.get(`${this.BASE_URL}/abastecimento/relatorios/estoque-por-lote`, {
            params,
            observe: 'response'
        });
    }
};
SulFluminenseEstoqueAvancadoEstoquePorLoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SulFluminenseEstoqueAvancadoEstoquePorLoteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SulFluminenseEstoqueAvancadoEstoquePorLoteService);



/***/ }),

/***/ "v4kB":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-por-lote/estoque-por-lote.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoEstoquePorLoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoEstoquePorLoteModule", function() { return SulFluminenseEstoqueAvancadoEstoquePorLoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _estoque_por_lote_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./estoque-por-lote-routing.module */ "2TB0");
/* harmony import */ var _estoque_por_lote_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./estoque-por-lote.component */ "+II/");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ptBrLocale"]);
let SulFluminenseEstoqueAvancadoEstoquePorLoteModule = class SulFluminenseEstoqueAvancadoEstoquePorLoteModule {
};
SulFluminenseEstoqueAvancadoEstoquePorLoteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _estoque_por_lote_component__WEBPACK_IMPORTED_MODULE_14__["SulFluminenseEstoqueAvancadoEstoquePorLoteComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _estoque_por_lote_routing_module__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseEstoqueAvancadoEstoquePorLoteRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], SulFluminenseEstoqueAvancadoEstoquePorLoteModule);



/***/ })

}]);
//# sourceMappingURL=estoque-por-lote-estoque-por-lote-module-es2015.js.map