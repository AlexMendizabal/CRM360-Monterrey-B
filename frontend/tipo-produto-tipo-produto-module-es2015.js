(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo-produto-tipo-produto-module"],{

/***/ "6bx8":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/cadastro/cadastro.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvdGlwby1wcm9kdXRvL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "Fkn6":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/tipo-produto-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule", function() { return TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "vQ/z");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Ratu");



//components


const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueTipoProdutosListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent"],
    },
];
let TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule = class TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule {
};
TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule);



/***/ }),

/***/ "Iwnq":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/lista/lista.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvdGlwby1wcm9kdXRvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Ratu":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/cadastro/cadastro.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent", function() { return TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "UWdo");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "6bx8");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tipo-produto.service */ "U2E5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");












let TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent = class TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, routerService, titleService, atividadesService, tipoProdutoService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routerService = routerService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.tipoProdutoService = tipoProdutoService;
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
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home',
            },
            {
                descricao: 'Estoque',
                routerLink: `/tecnologia-informacao/estoque/${id}`,
            },
            {
                descricao: 'Tipo de Produto',
                routerLink: `./../`,
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
        this.$activatedRouteSubscription = this.activatedRoute.params
            .subscribe(response => {
            if (response.hasOwnProperty('id')) {
                this.getTipoProduto(response.id);
            }
        });
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_TEIN_ESTO_PRTP: [null],
            NM_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            IN_STAT: ['1'],
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
    getTipoProduto(id) {
        this.loading = true;
        this.tipoProdutoService
            .getTipoProduto(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status != 200) {
                this.pnotify.error();
                return;
            }
            let tipoProduto = response.body["data"];
            this.form.patchValue(tipoProduto);
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    postTipoProduto() {
        this.loadingNavBar = true;
        this.tipoProdutoService
            .postTipoProduto(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
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
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoEstoqueTipoProdutosService"] }
];
TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'tecnologia-informacao-estoque-tipo-produto-cadastro',
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
        _services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoEstoqueTipoProdutosService"]])
], TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent);



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

/***/ "U2E5":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/services/tipo-produto.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueTipoProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueTipoProdutosService", function() { return TecnologiaInformacaoEstoqueTipoProdutosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoEstoqueTipoProdutosService = class TecnologiaInformacaoEstoqueTipoProdutosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTiposProduto(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/produtos/tipos`, {
            params: params,
            observe: 'response',
        });
    }
    getTipoProduto(id) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/produtos/tipos/${id}`, {
            observe: 'response',
        });
    }
    postTipoProduto(tipoProduto) {
        return this.http.post(`${this.API}/tecnologia-informacao/estoque/produtos/tipos`, tipoProduto, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoEstoqueTipoProdutosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoEstoqueTipoProdutosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoEstoqueTipoProdutosService);



/***/ }),

/***/ "UWdo":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/tipo-produto/cadastro/cadastro.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Tipo de Produto\">\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postTipoProduto()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n        <legend>Dados do Tipo de Produto</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-8 pl-0\">\n            <label for=\"NM_TIPO\">Tipo de Produto</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_TIPO\"\n              formControlName=\"NM_TIPO\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_TIPO') + ' ' + onFieldRequired('NM_TIPO')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_TIPO')\" message=\"Tipo de Produto é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-4 pl-0\">\n            <label for=\"IN_STAT\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_STAT\"\n              formControlName=\"IN_STAT\"\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"0\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n            <legend>Observação</legend>\n            <div class=\"form-row justify-content-center\">\n              <div class=\"form-group col\">\n                <label for=\"DS_OBSE\" >Observação:</label>\n                <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n              </div>\n            </div>\n            <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>");

/***/ }),

/***/ "hkZf":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/tipo-produto.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueTipoProdutosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueTipoProdutosModule", function() { return TecnologiaInformacaoEstoqueTipoProdutosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lista/lista.component */ "vQ/z");
/* harmony import */ var _tipo_produto_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tipo-produto-routing.module */ "Fkn6");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Ratu");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules


// Components



let TecnologiaInformacaoEstoqueTipoProdutosModule = class TecnologiaInformacaoEstoqueTipoProdutosModule {
};
TecnologiaInformacaoEstoqueTipoProdutosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_20__["TecnologiaInformacaoEstoqueTipoProdutosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoEstoqueTipoProdutosCadastroComponent"],
        ],
        imports: [
            _tipo_produto_routing_module__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoEstoqueTipoProdutosModuleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_19__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_17__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoEstoqueTipoProdutosModule);



/***/ }),

/***/ "oGH1":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/tipo-produto/lista/lista.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Tipo de Produto\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"ID_TEIN_ESTO_PRTP\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_TEIN_ESTO_PRTP\"\n                placeholder=\"Digite...\"\n                formControlName=\"ID_TEIN_ESTO_PRTP\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-7\">\n              <label for=\"NM_TIPO\">Tipo de Produto</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_TIPO\"\n                formControlName=\"NM_TIPO\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\">\n            </div>\n            <div class=\"form-group col-lg-2 \">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n              </ng-template>\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">ID </th>\n            <th scope=\"col\">Tipo de Produto</th>\n            <th scope=\"col\" style=\"width:80px\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let tipoProduto of tipoProdutos; let i = index\">\n            <td [ngClass]=\"tipoProduto.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n            {{tipoProduto.ID_TEIN_ESTO_PRTP}}\n            </td>\n            <td>{{ tipoProduto.NM_TIPO | uppercase }}</td>\n            <td class=\"align-middle\" style=\"width:70px\">\n              <span class=\"mr-3\" [tooltip]=\"tipoProduto.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(tipoProduto)\">\n                  <i [ngClass]=\"tipoProduto.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./', tipoProduto.ID_TEIN_ESTO_PRTP]\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table><br>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "vQ/z":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/tipo-produto/lista/lista.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueTipoProdutosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueTipoProdutosListaComponent", function() { return TecnologiaInformacaoEstoqueTipoProdutosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "oGH1");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "Iwnq");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tipo-produto.service */ "U2E5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");




//angular



//servicos



// rxjs



let TecnologiaInformacaoEstoqueTipoProdutosListaComponent = class TecnologiaInformacaoEstoqueTipoProdutosListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, tipoProdutoService, formBuilder, confirmModalService, routerService, dateService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.tipoProdutoService = tipoProdutoService;
        this.formBuilder = formBuilder;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.tipoProdutos = [];
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.tableConfig = {
            subtitleBorder: true,
            border: true,
        };
        // Tipos de Situação dos Tipos de Produtos (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
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
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getTiposProduto(this.getParams());
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_TEIN_ESTO_PRTP: [null],
            NM_TIPO: [null],
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
                routerLink: `/tecnologia-informacao/home`,
            },
            {
                descricao: 'Estoque',
                routerLink: `/tecnologia-informacao/estoque/${id}`,
            },
            {
                descricao: 'Tipo de Produto',
            },
        ];
    }
    onFilter() {
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getTiposProduto(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.tipoProdutoService
            .getTiposProduto(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoProdutos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.tipoProdutos = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    changeType(tipoProduto) {
        const stat = tipoProduto.IN_STAT == '1' ? '0' : '1';
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_11__["EMPTY"];
            this.loadingNavBar = true;
            tipoProduto.IN_STAT = stat;
            return this.tipoProdutoService.postTipoProduto(tipoProduto);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            //tipoContrato.IN_STAT = stat;
        }, (error) => {
            tipoProduto.IN_STAT = tipoProduto.IN_STAT == '1' ? '0' : '1';
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == '1')
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
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
TecnologiaInformacaoEstoqueTipoProdutosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoEstoqueTipoProdutosService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
TecnologiaInformacaoEstoqueTipoProdutosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tecnologia-informacao-estoque-tipo-produto-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoEstoqueTipoProdutosService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], TecnologiaInformacaoEstoqueTipoProdutosListaComponent);



/***/ })

}]);
//# sourceMappingURL=tipo-produto-tipo-produto-module-es2015.js.map