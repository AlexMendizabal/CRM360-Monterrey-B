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
/* harmony default export */ __webpack_exports__["default"] = (".page {\n  background-color: #fff;\n}\n\nimg {\n  width: 100px;\n  height: 80px;\n}\n\n.colorGray {\n  color: #828282;\n}\n\n.fontGray {\n  color: #828282;\n}\n\n.colorLowGray {\n  background: #f2f2f2;\n}\n\n.colorHighGray {\n  background: #e0e0e0;\n}\n\n.bigCards {\n  font-size: 0.8rem;\n}\n\n.colorBlack {\n  color: #4f4f4f;\n}\n\n.colorRed {\n  color: #eb5c5c;\n}\n\n.smallCards {\n  font-size: 0.8rem;\n}\n\n.smallFont {\n  font-size: 0.7rem;\n}\n\n.microFont {\n  font-size: 0.6rem;\n}\n\n.borderRadius {\n  border-radius: 23px;\n}\n\n.bdTopLeft {\n  border-top-left-radius: 15px;\n}\n\n.bdTopRight {\n  border-top-right-radius: 15px;\n}\n\n.bdBottomLeft {\n  border-bottom-left-radius: 15px;\n}\n\n.bdBottomRight {\n  border-bottom-right-radius: 15px;\n}\n\n.mid {\n  font-size: 35px;\n}\n\n.padding {\n  padding-top: 30px;\n}\n\n.borderNone {\n  border: none !important;\n}\n\n.marginNegative {\n  margin-bottom: -18px;\n}\n\n.paddingCard {\n  padding: 30px;\n}\n\n.alignItem {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.alignSelf {\n  -ms-flex-item-align: center;\n      align-self: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvcmVsYXRvcmlvcy9jb21pc3NvZXMtcmVwcmVzZW50YW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQ0FBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7TUFBQSxtQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7RUFDQSwyQkFBQTtNQUFBLGtCQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsMkJBQUE7TUFBQSxrQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvY29taXNzb2VzLXJlcHJlc2VudGFudGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLy8gLmRvbGxhciB7XG4vLyAgIGhlaWdodDogMzBweDtcbi8vICAgd2lkdGg6IDMwcHg7XG4vLyB9XG5cbi5jb2xvckdyYXkge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmZvbnRHcmF5IHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5jb2xvckxvd0dyYXkge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4uY29sb3JIaWdoR3JheSB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG5cbi5iaWdDYXJkcyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uY29sb3JCbGFjayB7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uY29sb3JSZWQge1xuICBjb2xvcjogI2ViNWM1Yztcbn1cblxuLnNtYWxsQ2FyZHMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnNtYWxsRm9udCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4ubWljcm9Gb250IHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi5ib3JkZXJSYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuXG4uYmRUb3BMZWZ0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLmJkVG9wUmlnaHQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmJkQm90dG9tTGVmdCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG59XG5cbi5iZEJvdHRvbVJpZ2h0IHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5taWQge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5ib3JkZXJOb25lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5OZWdhdGl2ZSB7XG4gIG1hcmdpbi1ib3R0b206IC0xOHB4O1xufVxuXG4ucGFkZGluZ0NhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uYWxpZ25JdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxpZ25TZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */");

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
        this.API = `https://crm360.monterrey.com.bo/api/comercial`;
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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Comissões de Representantes\">\n  <!-- <button\n    type=\"button\"\n    (click)= 'onRefresh();'>\n    Atualizar\n  </button> -->\n  <button\n    [disabled]=\"!form.valid\"\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n  <button\n  type=\"button\"\n  (click)=\"onDownload()\"\n  [disabled]=\"disabledDownload\">\n  Download\n</button>\n</app-header>\n\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"periodo\">Periodo</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  id=\"periodo\"\n                  type=\"text\"\n                  bsDatepicker\n                  placeholder=\"Selecione...\"\n                  [bsConfig]=\"{dateInputFormat: 'MM/YYYY', minMode:'month'}\"\n                  formControlName=\"periodo\"\n                  [ngClass]=\"onFieldError('periodo') + ' ' + onFieldRequired('periodo')\">\n                <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Período é obrigatório\"></invalid-form-control>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"codRepresentante\">Representante</label>\n                <ng-select\n                  [virtualScroll]=\"true\"\n                  [hideSelected]=\"true\"\n                  [closeOnSelect]=\"true\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  type='text'\n                  [items]=\"representantes\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"nomeRepresentante\"\n                  bindValue=\"codRepresentante\"\n                  formControlName=\"codRepresentante\"\n                  [ngClass]=\"onFieldError('codRepresentante') + ' ' + onFieldRequired('codRepresentante')\">\n                  <invalid-form-control\n                  [show]=\"onFieldInvalid('codRepresentante')\"\n                  message=\"Representante é obrigatório.\">\n                  </invalid-form-control>\n                </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty\"></empty-result>\n\n\n  <div class=\"row mt-30\" id=\"comissoes-representantes\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\n    <div class=\"container bg-white\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-2\">\n            <img src=\"../../../../../../assets/images/logo/logo-manetoni.png\">\n          </div>\n\n          <div class=\"col-md-1 mb-3 mt-3\"></div>\n\n          <div class=\"col-md-8 mb-3 mt-3 colorBlack\">\n            <h2>Relatório de Comissões de Representantes</h2>\n          </div>\n        </div>\n\n        <div class=\"row text-right small\">\n\n            <div class=\"col-12 colorGray\">\n              {{ dateToday | date: 'dd/MM/yyyy' }}\n            </div>\n\n            <div class=\"col-12 colorGray\">\n              Período de {{ dados[0].representante[0].periodo }}\n            </div>\n          </div>\n\n\n        <div class=\"row mt-1 justify-content-center\">\n            <div class=\"col-md-4 mb-3\">\n              <div class=\"rounded shadow-sm justify-content-between w-100 h-100 pl-3 hover colorLowGray mb-3\">\n\n                <div class=\"row\">\n                  <div class=\"col-12 text-muted large font-weight-bold mt-2 \">\n                  <i class=\"material-icons colorBlack mid\">people</i>\n                  <p class=\"colorBlack bigCards\">Vendedor: {{ dados[0].representante[0].nomeRepresentante }}</p>\n                  <div></div>\n                  <p class=\"colorBlack bigCards\">Comissionamento: {{ dados[0].representante[0].comissionamento }}</p>\n                  <p class=\"colorBlack bigCards\"></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row mt-1 justify-content-center\">\n            <div class=\"col-md-4 mb-3\" *ngFor=\"let item of dados[0].ros\">\n              <div class=\"rounded shadow-sm justify-content-between w-100 h-100 pl-3 hover colorLowGray \">\n\n                <div class=\"row\" >\n                  <div class=\"col-12 text-muted large font-weight-bold mt-2\">\n                    <i class=\"material-icons colorRed mid\">report_problem</i>\n                    <p class=\"colorRed bigCards\">Número RO: {{ item.nrRo }}</p>\n                    <p class=\"colorRed bigCards\">Cliente: {{ item.nomeCliente }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-1 justify-content-center\">\n          <!-- <div class=\"col-md-2\"></div> -->\n\n          <div class=\"col-md-4 mb-3\" *ngFor=\"let data of dados[0].faixa\" >\n            <div class=\"rounded shadow-sm justify-content-between w-100 h-100 pl-0 hover colorLowGray \" >\n              <i class=\"material-icons colorBlack mid pl-3\">moving</i>\n              <!-- <div class=\"mtc-title mb-2 pl-2\">Comissionamento: {{ tipoComissionamento['dsTipoComissionamento'] }}</div> -->\n              <div class=\"row\">\n                <div class=\"col text-muted large font-weight-bold mt-2\">\n\n                  <div class=\"col-12 mb-3\" >\n                    <custom-table>\n                      <ng-template #thead let-thead  >\n                        <tr>\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Linha</th>\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Classe</th>\n                        </tr>\n                      </ng-template>\n                      <ng-template #tbody let-tbody>\n                        <tr>\n                          <td class=\"text-center\">{{ data.nomeLinha }}</td>\n                          <td class=\"text-center\" *ngIf=\"data.codClasse === 0\" >TODOS</td>\n                          <td class=\"text-center\" *ngIf=\"data.codClasse != 0\">{{ data.nomeClasse }}</td>\n                        </tr>\n                      </ng-template>\n                    </custom-table>\n                    <custom-table>\n                      <ng-template #thead let-thead>\n                        <tr>\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\n                          <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\n                        </tr>\n                      </ng-template>\n                      <ng-template #tbody let-tbody>\n                        <tr *ngFor=\"let item of data.percentual\">\n                          <td class=\"text-center\">{{ item.percDescontoDe }} a {{ item.percDescontoAte }} %</td>\n                          <td class=\"text-center\">{{ item.percPago }} %</td>\n                        </tr>\n                      </ng-template>\n                    </custom-table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"row mt-3\">\n        <div class=\"col text-muted large font-weight-bold mt-1 p-2 marginNegative\">\n          <p class=\"colorBlack\">Nota Fiscal</p>\n        </div>\n\n        <table class=\"table table-striped table-hover bdTopLeft \">\n          <thead class=\"colorHighGray colorBlack \">\n            <tr>\n              <th scope=\"col\" class=\"bdTopLeft pl-2 pb-3 borderNone\">Razão Social</th>\n              <th scope=\"col\" class=\"borderNone pb-3\">NF</th>\n              <th scope=\"col\" class=\"borderNone pb-3\">Valor NF</th>\n              <th scope=\"col\" class=\"borderNone pb-3\">Data Faturamento</th>\n              <th scope=\"col\" class=\"borderNone pb-3\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                Duplicada Baixada\n              </th>\n              <th scope=\"col\" class=\"borderNone pb-3\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                Data Baixa\n              </th>\n              <th scope=\"col\" class=\"borderNone pb-3\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                Valor Duplicata\n              </th>\n              <th scope=\"col\" class=\"borderNone bdTopRight pb-2\">\n                <div class=\"row d-flex align-items-end\">\n\n                  <div class=\"col \" >\n                    <label>Itens</label>\n                  </div>\n                  <div class=\"col\" >\n                    <label>Valor Item</label>\n                  </div>\n                  <div class=\"col\" >\n                    <label>Valor Base</label>\n                  </div>\n                  <div class=\"col\" >\n                    <label>Percentual</label>\n                  </div>\n                  <div class=\"col\" >\n                    <label >Valor Comissão</label>\n                  </div>\n                </div>\n              </th>\n\n\n\n            </tr>\n          </thead>\n          <tbody class=\"font-weight-bold fontGray\">\n\n            <tr *ngFor=\"let data of dados[0].detalhes\">\n              <!-- bdBottomLeft -->\n              <td class=\"smallFont  pl-2 \">{{ data.codCliente }} - {{ data.nomeCliente }}</td>\n              <td class=\"smallFont\">{{ data.nrNota }}</td>\n              <td class=\"smallFont\">{{ data.valorNota | currency:'BRL':'symbol':'1.2-2' }}</td>\n              <td class=\"smallFont\">{{ data.dataFaturamento | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"smallFont\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                {{ data.duplicataBaixada }}\n              </td>\n              <td class=\"smallFont\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                {{ data.dataBaixa | date: 'dd/MM/yyyy' }}\n              </td>\n              <td class=\"smallFont\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                {{ data.valorDuplicata | currency:'BRL':'symbol':'1.2-2'}}\n              </td>\n              <td class=\"microFont \" >\n                <div class=\"row d-flex align-items-center\" *ngFor=\"let itens of data.item\">\n\n                  <div class=\"col\" >\n                    <label>{{ itens.nomeMaterial }}</label>\n                  </div>\n                  <div class=\"col pl-1\" >\n                    <label>{{ itens.valorItem | currency:'BRL':'symbol':'1.2-2' }}</label>\n                  </div>\n                  <div class=\"col pl-1\" >\n                    <label>{{ itens.valorBase | currency:'BRL':'symbol':'1.2-2' }}</label>\n                  </div>\n                  <div class=\"col\" >\n                    <label>{{ itens.percItem }} %</label>\n                  </div>\n                  <div class=\"col \" >\n                    <label>{{ itens.totalComissao | currency:'BRL':'symbol':'1.2-2' }}</label>\n                  </div>\n                </div>\n\n              </td>\n              <!-- bdBottomRight -->\n\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n        <div class=\"row\" *ngFor=\"let item of dados[0].representante\">\n          <div class=\"col text-muted large font-weight-bold mt-1 p-2 marginNegative\">\n            <p class=\"colorBlack\">TOTAIS de {{ item.dataInicial | date: 'dd/MM/yyyy' }} a\n              {{ item.dataFinal | date: 'dd/MM/yyyy' }}</p>\n          </div>\n\n        <table class=\"table table-striped table-hover bdTopLeft \">\n          <thead class=\"colorHighGray colorBlack \">\n            <tr>\n              <th scope=\"col\"\n              class=\"bdTopLeft p-2 pl-2 borderNone\"\n              *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                Total Baixado\n              </th>\n              <th scope=\"col\" class=\"bdTopLeft borderNone p-2\" *ngIf=\"dados[0].representante[0].codComissionamento != 1\">\n                Ros descontadas\n              </th>\n              <th scope=\"col\" class=\"borderNone p-2\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                Ros descontadas</th>\n              <th scope=\"col\" class=\"p-2 borderNone\">Descontos\n\n              </th>\n              <th scope=\"col\" class=\"p-2 borderNone\">Ajuda de custo</th>\n              <th scope=\"col\" class=\"p-2 borderNone\">Valor Comissão</th>\n              <th scope=\"col\" class=\"bdTopRight p-2  text-center borderNone\">Total a ser pago</th>\n            </tr>\n          </thead>\n          <tbody class=\"font-weight-bold fontGray\">\n\n            <tr>\n              <td class=\"smallFont p-1 pl-2 bdBottomLeft\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                {{ item.totalBaixado | currency:'BRL':'symbol':'1.2-2' }}\n              </td>\n              <td class=\"smallFont p-1 bdBottomLeft\" *ngIf=\"dados[0].representante[0].codComissionamento != 1\">\n                {{ item.rosDescontadas | currency:'BRL':'symbol':'1.2-2' }}\n              </td>\n              <td class=\"smallFont p-1\" *ngIf=\"dados[0].representante[0].codComissionamento === 1\">\n                {{ item.rosDescontadas | currency:'BRL':'symbol':'1.2-2' }}\n              </td>\n              <td class=\"smallFont p-1\">{{ item.descontos | currency:'BRL':'symbol':'1.2-2' }}</td>\n              <td class=\"smallFont p-1\">{{ item.ajudaCusto | currency:'BRL':'symbol':'1.2-2' }}</td>\n              <td class=\"smallFont p-1\">{{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}</td>\n              <td class=\"smallFont text-center p-1 bdBottomRight\">{{ item.totalPago | currency:'BRL':'symbol':'1.2-2' }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

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
        this.API = `https://crm360.monterrey.com.bo/api/comercial/relatorios/comissoes-representantes`;
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