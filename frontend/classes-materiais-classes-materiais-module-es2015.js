(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classes-materiais-classes-materiais-module"],{

/***/ "9+u2":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosClassesMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisComponent", function() { return AbastecimentoCadastrosClassesMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_classes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./classes-materiais.component.html */ "c8EI");
/* harmony import */ var _classes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes-materiais.component.scss */ "qTC0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _classes_materiais_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes-materiais.service */ "fSeu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");














let AbastecimentoCadastrosClassesMateriaisComponent = class AbastecimentoCadastrosClassesMateriaisComponent {
    constructor(activatedRoute, router, formBuilder, pnotifyService, confirmModalService, atividadesService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.loading = false;
        this.noResult = false;
        this.loadingLogs = false;
        this.noResultLogs = false;
        this.loaderModal = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.data = [];
        this.dataLogs = [];
        this.dataExcel = '';
        this.situations = [
            { ID: '0', NM_SITU: 'Inativo' },
            { ID: '1', NM_SITU: 'Ativo' }
        ];
        /* Ordenação principal*/
        this.reverse = false;
        this.key = 'NM_CLAS';
        /* Ordenação principal*/
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_CLAS';
        /* Ordenação modal */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        /* Paginação Modal*/
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        /* Paginação Modal*/
        this.tableConfig = {
            subtitleBorder: true
        };
        this.subtitles = [
            {
                text: 'Ativo',
                color: 'green'
            },
            {
                text: 'Inativo',
                color: 'red'
            }
        ];
        this.form = this.formBuilder.group({
            ID_LINH: [null],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.titleService.setTitle('Classes de Materiais');
        this.setDisabledItemsForm();
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.getLinhas();
    }
    setDisabledItemsForm() {
        this.form.get('ID_SUB_LINH').disable();
        this.form.get('ID_CLAS').disable();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Classes de Materiais'
                }
            ];
        });
    }
    checkRouterParams() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.search(_response);
                this.setFormValues(_response);
            }
        });
        this.$activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        var _a, _b;
        const ID_LINH = (_a = queryParams['ID_LINH']) !== null && _a !== void 0 ? _a : '';
        /* classes */
        if (Object.keys(ID_LINH).length > 0) {
            const paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_b = queryParams['ID_SUB_LINH']) !== null && _b !== void 0 ? _b : "",
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getClasses(paramsClasse)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('ID_CLAS').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.form.get('ID_CLAS').disable();
        }
        /* sublinhas */
        if (Object.keys(ID_LINH).length > 0) {
            const paramsSubLinha = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getSubLinhas(paramsSubLinha)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status == 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('ID_SUB_LINH').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar subLinha');
            });
        }
        else {
            this.form.get('ID_SUB_LINH').disable();
        }
        this.form.patchValue(queryParams);
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    getLinhas() {
        const params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.linhas = [];
        this.service
            .getLinhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.linhas = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Linhas');
        });
    }
    getSubLinhas() {
        this.loaderNavbar = true;
        this.subLinhas = [];
        if (this.form.value['ID_LINH'] != null &&
            this.form.value['ID_LINH'].length > 0) {
            let descricaoLinhas = this.form.get('ID_LINH').value;
            let idSituacao = 1;
            let params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
            };
            this.service
                .getSubLinhas(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('ID_SUB_LINH').reset();
                            this.form.get('ID_SUB_LINH').enable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('ID_SUB_LINH').reset();
                            this.form.get('ID_SUB_LINH').disable();
                            this.pnotifyService.notice('Não há sublinha cadastrada');
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar sublinhas');
            });
        }
        else {
            this.loaderNavbar = false;
            this.form.get('ID_SUB_LINH').reset();
            this.form.get('ID_SUB_LINH').disable();
        }
    }
    getClasses() {
        this.classes = [];
        this.loaderNavbar = true;
        if (this.form.value['ID_LINH'] != null &&
            this.form.value['ID_LINH'].length > 0) {
            let descricaoLinhas = this.form.get('ID_LINH').value;
            let idSubLinha = this.form.get('ID_SUB_LINH').value;
            let idSituacao = 1;
            let params = {
                descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao
            };
            this.service
                .getClasses(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('ID_CLAS').reset();
                            this.form.get('ID_CLAS').enable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('ID_CLAS').reset();
                            this.form.get('ID_CLAS').disable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.loaderNavbar = false;
            this.form.get('ID_CLAS').reset();
            this.form.get('ID_CLAS').disable();
        }
    }
    onFilter() {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
        this.search(this.getParams());
    }
    search(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.data = [];
        this.service
            .getClassesMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => this.loaderNavbar = false))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                    if (res['body']['responseCode'] == 200) {
                        this.loading = true;
                        this.noResult = false;
                        this.data = res['body']['result'];
                    }
                    else if (res['body']['responseCode'] == 404) {
                        this.noResult = true;
                        this.pnotifyService.notice("Não há itens a serem exibidos");
                    }
                }
            }
        }, error => {
            this.noResult = true;
            this.pnotifyService.error("Erro ao carregar Classes de Materiais");
        });
    }
    onEdit(item) {
        const stat = item.IN_STAT == 1 ? 0 : 1;
        item.ID_USUA = parseInt(this.idUsuario);
        item.ID_CLAS = item.ID;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
            this.loaderNavbar = true;
            item.IN_STAT = stat;
            return this.service.postClasses(item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
        }, (error) => {
            item.IN_STAT = item.IN_STAT == 1 ? 0 : 1;
            this.pnotifyService.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onLogs(item) {
        //console.log(item);
        let params = {
            ID_CLAS: item['ID']
        };
        this.getLogs(params);
    }
    getLogs(params) {
        this.loaderNavbar = true;
        this.loadingLogs = false;
        this.loaderModal = false;
        this.dataLogs = [];
        this.service
            .getClassesMateriaisLogs(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { this.loaderNavbar = false, this.loaderModal = true; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                    if (res['body']['responseCode'] == 200) {
                        this.loadingLogs = true;
                        this.noResultLogs = false;
                        this.dataLogs = res['body']['result'];
                    }
                    else if (res['body']['responseCode'] == 404) {
                        this.noResultLogs = true;
                        this.pnotifyService.notice("Não há itens a serem exibidos");
                    }
                }
            }
        }, error => {
            this.noResultLogs = true;
            this.pnotifyService.error("Erro ao carregar Classes de Materiais");
        });
    }
    getSearchExcel(params) {
        this.loaderNavbar = true;
        this.dataExcel = '';
        this.service
            .getClassesMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dataExcel = res['body']['result'];
                    this.pnotifyService.success(this.dataExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar dados para excel');
        });
    }
    OnExcel() {
        let params = this.getParams();
        params['IN_GERA_RELA_EXCE'] = 1;
        params['ID_USUA'] = this.idUsuario;
        this.getSearchExcel(params);
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    /* Paginação Modal*/
    /* Ordenação Modal*/
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    /* Ordenação Modal*/
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
};
AbastecimentoCadastrosClassesMateriaisComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: _classes_materiais_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosClassesMateriaisService"] }
];
AbastecimentoCadastrosClassesMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'classes-materiais',
        template: _raw_loader_classes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_classes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        _classes_materiais_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosClassesMateriaisService"]])
], AbastecimentoCadastrosClassesMateriaisComponent);



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

/***/ "c8EI":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Classes de Materiais\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"OnExcel()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getSubLinhas() + '' + getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"subLinhas\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_SUB_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"classes\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_CLAS\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"situacoes\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"situations\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SITU\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"IN_STAT\"\r\n            [ngClass]=\"\r\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('IN_STAT')\"\r\n              message=\"Situação é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\r\n  <div class=\"table-responsive\" *ngIf=\"loading\">\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template let-thead #thead>\r\n        <tr class=\"text-center\">\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('ID_REFE_ERP')\">\r\n            Código\r\n            <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n            Classe\r\n            <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\r\n            Sublinha\r\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n            Linha\r\n            <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\r\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template let-tbody #tbody>\r\n        <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\r\n          <td nowrap class=\"text-center\" [ngClass]=\"item.IN_STAT == 0 ? 'border-danger' : 'border-success'\">{{ item.ID_REFE_ERP }}</td>        \r\n          <td nowrap class=\"text-center\">{{ item.NM_CLAS }}</td>        \r\n          <td nowrap class=\"text-center\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>         \r\n          <td nowrap class=\"text-center\">{{ item.NM_LINH }}</td>              \r\n          <td nowrap class=\"text-center\" width=\"4%\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\r\n                (click)=\"onEdit(item)\"\r\n              >\r\n                <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\r\n              </button>\r\n            </div>\r\n          </td>       \r\n          <td nowrap  class=\"text-center\" width=\"4%\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Logs\"\r\n                (click)=\"onLogs(item) + ' ' + lgModal.show()\"\r\n              >\r\n                <i class=\"fas fa-external-link-alt text-primary\"></i>\r\n              </button>\r\n            </div>\r\n          </td>       \r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div class=\"col-12 mt-2\" *ngIf=\"data.length > itemsPerPage && loading\">\r\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\r\n    <div class=\"d-flex\">\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"data?.length\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\" [hidden]=\"!loaderModal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          LOGS CLASSES DE MATERIAIS\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <custom-table *ngIf=\"loadingLogs\">\r\n            <ng-template #thead let-thead>\r\n              <tr class=\"text-center\">\r\n                <th scope=\"col\" (click)=\"sortA('ID_REFE_ERP')\">\r\n                  Código\r\n                  <span *ngIf=\"keyA == 'ID_REFE_ERP'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'ID_REFE_ERP'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('NM_CLAS')\">\r\n                  Classe\r\n                  <span *ngIf=\"keyA == 'NM_CLAS'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_CLAS'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('NM_SUB_LINH')\">\r\n                  Sub Linha\r\n                  <span *ngIf=\"keyA == 'NM_SUB_LINH'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_SUB_LINH'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('NM_LINH')\">\r\n                  Linha\r\n                  <span *ngIf=\"keyA == 'NM_LINH'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_LINH'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('DS_STAT')\">\r\n                  Situação\r\n                  <span *ngIf=\"keyA == 'DS_STAT'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'DS_STAT'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('DT_ACAO')\">\r\n                  Data Ação\r\n                  <span *ngIf=\"keyA == 'DT_ACAO'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'DT_ACAO'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('NM_ACAO')\">\r\n                  Ação\r\n                  <span *ngIf=\"keyA == 'NM_ACAO'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_ACAO'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" (click)=\"sortA('NM_USUA')\">\r\n                  Usuário\r\n                  <span *ngIf=\"keyA == 'NM_USUA'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_USUA'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of dataLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\r\n                <td class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\r\n                <td class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n                <td class=\"text-center\">{{ item.ID_SUB_LINH ? item.ID_SUB_LINH : '-' }}</td>\r\n                <td class=\"text-center\">{{ item.NM_LINH }}</td>\r\n                <td class=\"text-center\">{{ item.DS_STAT }}</td>\r\n                <td class=\"text-center\">\r\n                  {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\r\n                </td>\r\n                <td class=\"text-center\">{{ item.NM_ACAO }}</td>\r\n                <td class=\"text-center\">{{ item.NM_USUA }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n        <div class=\"col-12 mt-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\r\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dataLogs?.length }}\r\n          <pagination\r\n            [maxSize]=\"10\"\r\n            [totalItems]=\"dataLogs?.length\"\r\n            (pageChanged)=\"onPageChangedA($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPageA\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\"\r\n          >\r\n          </pagination>\r\n        </div>\r\n        <div\r\n          *ngIf=\"noResultLogs\"\r\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n          style=\"height: 80%;\"\r\n        >\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "fSeu":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.service.ts ***!
  \************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosClassesMateriaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisService", function() { return AbastecimentoCadastrosClassesMateriaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AbastecimentoCadastrosClassesMateriaisService = class AbastecimentoCadastrosClassesMateriaisService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getLinhas(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/linhas`, {
            params: {
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getSubLinhas(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/sub-linhas`, {
            params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getClasses(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                ID_SUB_LINH: params['idSubLinha'].toString(),
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getClassesMateriais(_params) {
        var _a, _b, _c;
        const params = {
            ID_LINH: _params['ID_LINH'] ? _params['ID_LINH'].toString() : '',
            ID_SUB_LINH: _params['ID_SUB_LINH'] ? _params['ID_SUB_LINH'].toString() : '',
            ID_CLAS: _params['ID_CLAS'] ? _params['ID_CLAS'].toString() : '',
            IN_STAT: (_a = _params['IN_STAT']) !== null && _a !== void 0 ? _a : '',
            IN_GERA_RELA_EXCE: (_b = _params['IN_GERA_RELA_EXCE']) !== null && _b !== void 0 ? _b : '',
            ID_USUA: (_c = _params['ID_USUA']) !== null && _c !== void 0 ? _c : ''
        };
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params,
            observe: "response"
        });
    }
    getClassesMateriaisLogs(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/classes-auditoria`, {
            params,
            observe: "response"
        });
    }
    postClasses(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/classe-atualizar`, record);
    }
};
AbastecimentoCadastrosClassesMateriaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AbastecimentoCadastrosClassesMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AbastecimentoCadastrosClassesMateriaisService);



/***/ }),

/***/ "iFAl":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosClassesMateriaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisRoutingModule", function() { return AbastecimentoCadastrosClassesMateriaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _classes_materiais_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes-materiais.component */ "9+u2");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _classes_materiais_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosClassesMateriaisComponent"]
            },
        ]
    }
];
let AbastecimentoCadastrosClassesMateriaisRoutingModule = class AbastecimentoCadastrosClassesMateriaisRoutingModule {
};
AbastecimentoCadastrosClassesMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoCadastrosClassesMateriaisRoutingModule);



/***/ }),

/***/ "lJB2":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AbastecimentoCadastrosClassesMateriaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisModule", function() { return AbastecimentoCadastrosClassesMateriaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _classes_materiais_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes-materiais-routing.module */ "iFAl");
/* harmony import */ var _classes_materiais_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes-materiais.component */ "9+u2");












let AbastecimentoCadastrosClassesMateriaisModule = class AbastecimentoCadastrosClassesMateriaisModule {
};
AbastecimentoCadastrosClassesMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _classes_materiais_component__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosClassesMateriaisComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _classes_materiais_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosClassesMateriaisRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"]
        ]
    })
], AbastecimentoCadastrosClassesMateriaisModule);



/***/ }),

/***/ "qTC0":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvY2xhc3Nlcy1tYXRlcmlhaXMvY2xhc3Nlcy1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=classes-materiais-classes-materiais-module-es2015.js.map