(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comissoes-representantes-comissoes-representantes-module"],{

/***/ "+iP8":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/comissoes-representantes/comissoes-representantes-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ComercialRelatoriosComissoesRepresentantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosComissoesRepresentantesRoutingModule", function() { return ComercialRelatoriosComissoesRepresentantesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "U4y7");



// Components

const routes = [
    {
        path: '',
        children: [
            { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosComissoesRepresentantesComponent"] },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full',
            },
        ]
    },
];
let ComercialRelatoriosComissoesRepresentantesRoutingModule = class ComercialRelatoriosComissoesRepresentantesRoutingModule {
};
ComercialRelatoriosComissoesRepresentantesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialRelatoriosComissoesRepresentantesRoutingModule);



/***/ }),

/***/ "T9Dr":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/comissoes-representantes/lista/lista.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page {\n  background-color: #fff;\n}\n\nimg {\n  width: 100px;\n  height: 80px;\n}\n\n.colorGray {\n  color: #828282;\n}\n\n.fontGray {\n  color: #828282;\n}\n\n.colorLowGray {\n  background: #f2f2f2;\n}\n\n.colorHighGray {\n  background: #e0e0e0;\n}\n\n.bigCards {\n  font-size: 0.8rem;\n}\n\n.colorBlack {\n  color: #4f4f4f;\n}\n\n.colorRed {\n  color: #eb5c5c;\n}\n\n.smallCards {\n  font-size: 0.8rem;\n}\n\n.smallFont {\n  font-size: 0.7rem;\n}\n\n.microFont {\n  font-size: 0.6rem;\n}\n\n.borderRadius {\n  border-radius: 23px;\n}\n\n.bdTopLeft {\n  border-top-left-radius: 15px;\n}\n\n.bdTopRight {\n  border-top-right-radius: 15px;\n}\n\n.bdBottomLeft {\n  border-bottom-left-radius: 15px;\n}\n\n.bdBottomRight {\n  border-bottom-right-radius: 15px;\n}\n\n.mid {\n  font-size: 35px;\n}\n\n.padding {\n  padding-top: 30px;\n}\n\n.borderNone {\n  border: none !important;\n}\n\n.marginNegative {\n  margin-bottom: -18px;\n}\n\n.paddingCard {\n  padding: 30px;\n}\n\n.alignItem {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.alignSelf {\n  -ms-flex-item-align: center;\n      align-self: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvcmVsYXRvcmlvcy9jb21pc3NvZXMtcmVwcmVzZW50YW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQ0FBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7TUFBQSxtQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7RUFDQSwyQkFBQTtNQUFBLGtCQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsMkJBQUE7TUFBQSxrQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvY29taXNzb2VzLXJlcHJlc2VudGFudGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLy8gLmRvbGxhciB7XHJcbi8vICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgIHdpZHRoOiAzMHB4O1xyXG4vLyB9XHJcblxyXG4uY29sb3JHcmF5IHtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG5cclxuLmZvbnRHcmF5IHtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG5cclxuLmNvbG9yTG93R3JheSB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxufVxyXG5cclxuLmNvbG9ySGlnaEdyYXkge1xyXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5iaWdDYXJkcyB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5jb2xvckJsYWNrIHtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxufVxyXG5cclxuLmNvbG9yUmVkIHtcclxuICBjb2xvcjogI2ViNWM1YztcclxufVxyXG5cclxuLnNtYWxsQ2FyZHMge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uc21hbGxGb250IHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLm1pY3JvRm9udCB7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbn1cclxuXHJcbi5ib3JkZXJSYWRpdXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuXHJcbi5iZFRvcExlZnQge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5iZFRvcFJpZ2h0IHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJkQm90dG9tTGVmdCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJkQm90dG9tUmlnaHQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubWlkIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJvcmRlck5vbmUge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luTmVnYXRpdmUge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xOHB4O1xyXG59XHJcblxyXG4ucGFkZGluZ0NhcmQge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5hbGlnbkl0ZW0ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduU2VsZiB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "U4y7":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/comissoes-representantes/lista/lista.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ComercialRelatoriosComissoesRepresentantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosComissoesRepresentantesComponent", function() { return ComercialRelatoriosComissoesRepresentantesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "X/sJ");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "T9Dr");
/* harmony import */ var _comissoes_representantes_gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../comissoes/representantes/gestao-comissionamentos/gestao-comissionamentos.service */ "dRIe");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pdf.service */ "GTII");
/* harmony import */ var _comissoes_representantes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../comissoes-representantes.service */ "ukW1");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");

















Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_14__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_15__["ptBrLocale"]);
let ComercialRelatoriosComissoesRepresentantesComponent = class ComercialRelatoriosComissoesRepresentantesComponent {
    constructor(comissoesRepresentantesService, pnotifyService, pdfService, activatedRoute, location, dateService, formBuilder, atividadesService, router, localeService, gestaoComissionamentosService) {
        this.comissoesRepresentantesService = comissoesRepresentantesService;
        this.pnotifyService = pnotifyService;
        this.pdfService = pdfService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this.atividadesService = atividadesService;
        this.router = router;
        this.localeService = localeService;
        this.gestaoComissionamentosService = gestaoComissionamentosService;
        this.locale = 'pt-br';
        this.locales = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_14__["listLocales"])();
        this.excecoes = [];
        this.loaderFullScreen = true;
        this.loaderNavbar = true;
        this.codCliente = 1;
        this.dados = [];
        this.showDashboard = false;
        this.showFilter = false;
        this.showPermissionDenied = false;
        this.minMode = 'month';
        this.representantes = [];
        this.representanteTotal = [];
        this.empresa = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.submittingFilter = false;
        this.disabledDownload = false;
        this.breadCrumbTree = [];
        localeService.use('pt-br');
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getRepresentantes();
        this.setFormFilter();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Relatórios',
                    routerLink: `/comercial/relatorios/${params.idSubModulo}`,
                },
                {
                    descricao: 'Comissões de Representantes',
                },
            ];
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            // dataInicial: [formValue.dataInicial],
            // dataFinal: [formValue.dataFinal],
            periodo: [this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            codRepresentante: [formValue.codRepresentante, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
        });
    }
    checkRouterParams() {
        let formValue = {
            // dataInicial: this.dateService.getFirstDayMonth(),
            // dataFinal: this.dateService.getLastDayMonth(),
            periodo: this.dateService.getFirstDayMonth(),
            codRepresentante: null,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                this.showFilter = false;
                this.showDashboard = true;
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
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
                this.showDashboard = false;
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    // Pesquisa
    onFilter() {
        if (this.form.valid) {
            this.setRouterParams(this.getParams());
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.dadosEmpty = false;
        this.comissoesRepresentantesService
            .getDadosRepresentante(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.dados = response.data;
                    this.dateToday = this.dateService.getToday();
                }
                else {
                    this.dadosEmpty = true;
                }
            },
            error: (error) => {
                this.dadosEmpty = true;
                this.pnotifyService.error();
            }
        });
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
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
    onDownload() {
        this.loaderNavbar = true;
        this.disabledDownload = true;
        this.pdfService.download('comissoes-representantes', `${this.codCliente}_ComissõesRepresentante`);
        setTimeout(() => {
            this.loaderNavbar = false;
            this.disabledDownload = false;
        }, 12000);
    }
    getRepresentantes() {
        this.gestaoComissionamentosService
            .getRepresentantes(0)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.representantes = response.data;
                // this.representantes.unshift({
                //   codRepresentante: 0,
                //   nomeRepresentante: 'EXIBIR TODOS',
                // });
            }
            else {
                this.pnotifyService.error();
            }
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    onRefresh() {
        this.setFormFilter();
    }
    // Tratamento de erros
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        // && this.assocMateriais.controls['controls'][field].validator
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    handleFormFieldsError() {
        this.pnotifyService.error();
        this.location.back();
    }
};
ComercialRelatoriosComissoesRepresentantesComponent.ctorParameters = () => [
    { type: _comissoes_representantes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialRelatoriosComissoesRepresentantesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__["PdfService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsLocaleService"] },
    { type: _comissoes_representantes_gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"] }
];
ComercialRelatoriosComissoesRepresentantesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'financeiro/relatorios/comissoes-representantes-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_comissoes_representantes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialRelatoriosComissoesRepresentantesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__["PdfService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsLocaleService"],
        _comissoes_representantes_gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"]])
], ComercialRelatoriosComissoesRepresentantesComponent);



/***/ }),

/***/ "VgqD":
/*!********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.service.ts ***!
  \********************************************************/
/*! exports provided: ComercialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialService", function() { return ComercialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialService = class ComercialService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial`;
    }
    getEmpresas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/empresas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDepositos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/depositos`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAlmacen(params) {
        return this.http
            .get(`${this.API}/almacen`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhasId(id) {
        return this.http.get(`${this.API}/linhas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSublineasId(id) {
        return this.http.get(`${this.API}/sublineas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    sincronizarMateriales() {
        return this.http.get(`${this.API}/sincronizar`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriales(params) {
        return this.http
            .get(`${this.API}/materiales`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesLista(params) {
        return this.http
            .get(`${this.API}/materiales/lista`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesOferta(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesOfertaVendedor(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio_vendedor`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClasses(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/classes`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPresentacionMaterial() {
        return this.http
            .get(`${this.API}/presentacion_materiales`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCliente(codCliente) {
        return this.http.get(`${this.API}/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListarPrecios() {
        return this.http.get(`${this.API}/vendedor/lista_precio`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTodosVendedores() {
        return this.http.get(`${this.API}/vendedor/allvendedor`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCentrosLogisticos() {
        return this.http.get(`${this.API}/almacen/centros_logisticos`);
    }
};
ComercialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialService);



/***/ }),

/***/ "X/sJ":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/comissoes-representantes/lista/lista.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Comissões de Representantes\">\r\n  <!-- <button\r\n    type=\"button\"\r\n    (click)= 'onRefresh();'>\r\n    Atualizar\r\n  </button> -->\r\n  <button\r\n    [disabled]=\"!form.valid\"\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onDownload()\"\r\n  [disabled]=\"disabledDownload\">\r\n  Download\r\n</button>\r\n</app-header>\r\n\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"periodo\">Periodo</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"periodo\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  placeholder=\"Selecione...\"\r\n                  [bsConfig]=\"{dateInputFormat: 'MM/YYYY', minMode:'month'}\"\r\n                  formControlName=\"periodo\"\r\n                  [ngClass]=\"onFieldError('periodo') + ' ' + onFieldRequired('periodo')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Período é obrigatório\"></invalid-form-control>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"codRepresentante\">Representante</label>\r\n                <ng-select\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  [closeOnSelect]=\"true\"\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  type='text'\r\n                  [items]=\"representantes\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"nomeRepresentante\"\r\n                  bindValue=\"codRepresentante\"\r\n                  formControlName=\"codRepresentante\"\r\n                  [ngClass]=\"onFieldError('codRepresentante') + ' ' + onFieldRequired('codRepresentante')\">\r\n                  <invalid-form-control\r\n                  [show]=\"onFieldInvalid('codRepresentante')\"\r\n                  message=\"Representante é obrigatório.\">\r\n                  </invalid-form-control>\r\n                </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n\r\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty\"></empty-result>\r\n\r\n\r\n  <div class=\"row mt-30\" id=\"comissoes-representantes\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n    <div class=\"container bg-white\">\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col-md-2\">\r\n            <img src=\"../../../../../../assets/images/logo/logo-manetoni.png\">\r\n          </div>\r\n\r\n          <div class=\"col-md-1 mb-3 mt-3\"></div>\r\n\r\n          <div class=\"col-md-8 mb-3 mt-3 colorBlack\">\r\n            <h2>Relatório de Comissões de Representantes</h2>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row text-right small\">\r\n\r\n            <div class=\"col-12 colorGray\">\r\n              {{ dateToday | date: 'dd/MM/yyyy' }}\r\n            </div>\r\n\r\n            <div class=\"col-12 colorGray\">\r\n              Período de {{ dados[0].representante[0].periodo }}\r\n            </div>\r\n          </div>\r\n\r\n\r\n        <div class=\"row mt-1 justify-content-center\">\r\n            <div class=\"col-md-4 mb-3\">\r\n              <div class=\"rounded shadow-sm justify-content-between w-100 h-100 pl-3 hover colorLowGray mb-3\">\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 text-muted large font-weight-bold mt-2 \">\r\n                  <i class=\"material-icons colorBlack mid\">people</i>\r\n                  <p class=\"colorBlack bigCards\">Vendedor: {{ dados[0].representante[0].nomeRepresentante }}</p>\r\n                  <div></div>\r\n                  <p class=\"colorBlack bigCards\">Comissionamento: {{ dados[0].representante[0].comissionamento }}</p>\r\n                  <p class=\"colorBlack bigCards\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row mt-1 justify-content-center\">\r\n            <div class=\"col-md-4 mb-3\" *ngFor=\"let item of dados[0].ros\">\r\n              <div class=\"rounded shadow-sm justify-content-between w-100 h-100 pl-3 hover colorLowGray \">\r\n\r\n                <div class=\"row\" >\r\n                  <div class=\"col-12 text-muted large font-weight-bold mt-2\">\r\n                    <i class=\"material-icons colorRed mid\">report_problem</i>\r\n                    <p class=\"colorRed bigCards\">Número RO: {{ item.nrRo }}</p>\r\n                    <p class=\"colorRed bigCards\">Cliente: {{ item.nomeCliente }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-1 justify-content-center\">\r\n          <!-- <div class=\"col-md-2\"></div> -->\r\n\r\n          <div class=\"col-md-4 mb-3\" *ngFor=\"let data of dados[0].faixa\" >\r\n            <div class=\"rounded shadow-sm justify-content-between w-100 h-100 pl-0 hover colorLowGray \" >\r\n              <i class=\"material-icons colorBlack mid pl-3\">moving</i>\r\n              <!-- <div class=\"mtc-title mb-2 pl-2\">Comissionamento: {{ tipoComissionamento['dsTipoComissionamento'] }}</div> -->\r\n              <div class=\"row\">\r\n                <div class=\"col text-muted large font-weight-bold mt-2\">\r\n\r\n                  <div class=\"col-12 mb-3\" >\r\n                    <custom-table>\r\n                      <ng-template #thead let-thead  >\r\n                        <tr>\r\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Linha</th>\r\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Classe</th>\r\n                        </tr>\r\n                      </ng-template>\r\n                      <ng-template #tbody let-tbody>\r\n                        <tr>\r\n                          <td class=\"text-center\">{{ data.nomeLinha }}</td>\r\n                          <td class=\"text-center\" *ngIf=\"data.codClasse === 0\" >TODOS</td>\r\n                          <td class=\"text-center\" *ngIf=\"data.codClasse != 0\">{{ data.nomeClasse }}</td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </custom-table>\r\n                    <custom-table>\r\n                      <ng-template #thead let-thead>\r\n                        <tr>\r\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\r\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\r\n                        </tr>\r\n                      </ng-template>\r\n                      <ng-template #tbody let-tbody>\r\n                        <tr *ngFor=\"let item of data.percentual\">\r\n                          <td class=\"text-center\">{{ item.percDescontoDe }} a {{ item.percDescontoAte }} %</td>\r\n                          <td class=\"text-center\">{{ item.percPago }} %</td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </custom-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col text-muted large font-weight-bold mt-1 p-2 marginNegative\">\r\n          <p class=\"colorBlack\">Nota Fiscal</p>\r\n        </div>\r\n\r\n        <table class=\"table table-striped table-hover bdTopLeft \">\r\n          <thead class=\"colorHighGray colorBlack \">\r\n            <tr>\r\n              <th scope=\"col\" class=\"bdTopLeft pl-2 pb-3 borderNone\">Razão Social</th>\r\n              <th scope=\"col\" class=\"borderNone pb-3\">NF</th>\r\n              <th scope=\"col\" class=\"borderNone pb-3\">Valor NF</th>\r\n              <th scope=\"col\" class=\"borderNone pb-3\">Data Faturamento</th>\r\n              <th scope=\"col\" class=\"borderNone pb-3\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                Duplicada Baixada\r\n              </th>\r\n              <th scope=\"col\" class=\"borderNone pb-3\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                Data Baixa\r\n              </th>\r\n              <th scope=\"col\" class=\"borderNone pb-3\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                Valor Duplicata\r\n              </th>\r\n              <th scope=\"col\" class=\"borderNone bdTopRight pb-2\">\r\n                <div class=\"row d-flex align-items-end\">\r\n\r\n                  <div class=\"col \" >\r\n                    <label>Itens</label>\r\n                  </div>\r\n                  <div class=\"col\" >\r\n                    <label>Valor Item</label>\r\n                  </div>\r\n                  <div class=\"col\" >\r\n                    <label>Valor Base</label>\r\n                  </div>\r\n                  <div class=\"col\" >\r\n                    <label>Percentual</label>\r\n                  </div>\r\n                  <div class=\"col\" >\r\n                    <label >Valor Comissão</label>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n\r\n\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"font-weight-bold fontGray\">\r\n\r\n            <tr *ngFor=\"let data of dados[0].detalhes\">\r\n              <!-- bdBottomLeft -->\r\n              <td class=\"smallFont  pl-2 \">{{ data.codCliente }} - {{ data.nomeCliente }}</td>\r\n              <td class=\"smallFont\">{{ data.nrNota }}</td>\r\n              <td class=\"smallFont\">{{ data.valorNota | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n              <td class=\"smallFont\">{{ data.dataFaturamento | date: 'dd/MM/yyyy' }}</td>\r\n              <td class=\"smallFont\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                {{ data.duplicataBaixada }}\r\n              </td>\r\n              <td class=\"smallFont\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                {{ data.dataBaixa | date: 'dd/MM/yyyy' }}\r\n              </td>\r\n              <td class=\"smallFont\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                {{ data.valorDuplicata | currency:'BRL':'symbol':'1.2-2'}}\r\n              </td>\r\n              <td class=\"microFont \" >\r\n                <div class=\"row d-flex align-items-center\" *ngFor=\"let itens of data.item\">\r\n\r\n                  <div class=\"col\" >\r\n                    <label>{{ itens.nomeMaterial }}</label>\r\n                  </div>\r\n                  <div class=\"col pl-1\" >\r\n                    <label>{{ itens.valorItem | currency:'BRL':'symbol':'1.2-2' }}</label>\r\n                  </div>\r\n                  <div class=\"col pl-1\" >\r\n                    <label>{{ itens.valorBase | currency:'BRL':'symbol':'1.2-2' }}</label>\r\n                  </div>\r\n                  <div class=\"col\" >\r\n                    <label>{{ itens.percItem }} %</label>\r\n                  </div>\r\n                  <div class=\"col \" >\r\n                    <label>{{ itens.totalComissao | currency:'BRL':'symbol':'1.2-2' }}</label>\r\n                  </div>\r\n                </div>\r\n\r\n              </td>\r\n              <!-- bdBottomRight -->\r\n\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n        <div class=\"row\" *ngFor=\"let item of dados[0].representante\">\r\n          <div class=\"col text-muted large font-weight-bold mt-1 p-2 marginNegative\">\r\n            <p class=\"colorBlack\">TOTAIS de {{ item.dataInicial | date: 'dd/MM/yyyy' }} a\r\n              {{ item.dataFinal | date: 'dd/MM/yyyy' }}</p>\r\n          </div>\r\n\r\n        <table class=\"table table-striped table-hover bdTopLeft \">\r\n          <thead class=\"colorHighGray colorBlack \">\r\n            <tr>\r\n              <th scope=\"col\"\r\n              class=\"bdTopLeft p-2 pl-2 borderNone\"\r\n              *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                Total Baixado\r\n              </th>\r\n              <th scope=\"col\" class=\"bdTopLeft borderNone p-2\" *ngIf=\"dados[0].representante[0].codComissionamento != 1\">\r\n                Ros descontadas\r\n              </th>\r\n              <th scope=\"col\" class=\"borderNone p-2\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                Ros descontadas</th>\r\n              <th scope=\"col\" class=\"p-2 borderNone\">Descontos\r\n\r\n              </th>\r\n              <th scope=\"col\" class=\"p-2 borderNone\">Ajuda de custo</th>\r\n              <th scope=\"col\" class=\"p-2 borderNone\">Valor Comissão</th>\r\n              <th scope=\"col\" class=\"bdTopRight p-2  text-center borderNone\">Total a ser pago</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"font-weight-bold fontGray\">\r\n\r\n            <tr>\r\n              <td class=\"smallFont p-1 pl-2 bdBottomLeft\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                {{ item.totalBaixado | currency:'BRL':'symbol':'1.2-2' }}\r\n              </td>\r\n              <td class=\"smallFont p-1 bdBottomLeft\" *ngIf=\"dados[0].representante[0].codComissionamento != 1\">\r\n                {{ item.rosDescontadas | currency:'BRL':'symbol':'1.2-2' }}\r\n              </td>\r\n              <td class=\"smallFont p-1\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\r\n                {{ item.rosDescontadas | currency:'BRL':'symbol':'1.2-2' }}\r\n              </td>\r\n              <td class=\"smallFont p-1\">{{ item.descontos | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n              <td class=\"smallFont p-1\">{{ item.ajudaCusto | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n              <td class=\"smallFont p-1\">{{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n              <td class=\"smallFont text-center p-1 bdBottomRight\">{{ item.totalPago | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "rT92":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/comissoes-representantes/comissoes-representantes.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ComercialRelatoriosComissoesRepresentantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosComissoesRepresentantesModule", function() { return ComercialRelatoriosComissoesRepresentantesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista/lista.component */ "U4y7");
/* harmony import */ var _comissoes_representantes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comissoes-representantes.service */ "ukW1");
/* harmony import */ var _comissoes_representantes_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comissoes-representantes-routing.module */ "+iP8");




// ngx-bootstrap



// ng-select

// ng2-currency-mask

// PNotify

// Modules



// Components

// Services


let ComercialRelatoriosComissoesRepresentantesModule = class ComercialRelatoriosComissoesRepresentantesModule {
};
ComercialRelatoriosComissoesRepresentantesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialRelatoriosComissoesRepresentantesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"],
            _comissoes_representantes_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialRelatoriosComissoesRepresentantesRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
        ],
        providers: [
            src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
            _comissoes_representantes_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosComissoesRepresentantesService"],
        ],
    })
], ComercialRelatoriosComissoesRepresentantesModule);



/***/ }),

/***/ "ukW1":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/comissoes-representantes/comissoes-representantes.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialRelatoriosComissoesRepresentantesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosComissoesRepresentantesService", function() { return ComercialRelatoriosComissoesRepresentantesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");




// Services

let ComercialRelatoriosComissoesRepresentantesService = class ComercialRelatoriosComissoesRepresentantesService {
    constructor(http, comercialService) {
        this.http = http;
        this.comercialService = comercialService;
        this.API = `http://23.254.204.187/api/comercial/relatorios/comissoes-representantes`;
    }
    getDadosRepresentante(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/dados-representante`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialRelatoriosComissoesRepresentantesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"] }
];
ComercialRelatoriosComissoesRepresentantesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"]])
], ComercialRelatoriosComissoesRepresentantesService);



/***/ })

}]);
//# sourceMappingURL=comissoes-representantes-comissoes-representantes-module-es2015.js.map