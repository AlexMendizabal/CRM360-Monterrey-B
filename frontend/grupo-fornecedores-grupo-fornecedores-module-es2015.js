(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grupo-fornecedores-grupo-fornecedores-module"],{

/***/ "2tNg":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/cadastro/cadastro.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvZ3J1cG8tZm9ybmVjZWRvcmVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "C9+i":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/grupo-fornecedores.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosGrupoFornecedoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresModule", function() { return AbastecimentoCadastrosGrupoFornecedoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _grupo_fornecedores_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grupo-fornecedores-routing.module */ "jqcQ");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista/lista.component */ "sOUy");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "SN2+");











/* Localização Brasil */


Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
/* Localização Brasil */



let AbastecimentoCadastrosGrupoFornecedoresModule = class AbastecimentoCadastrosGrupoFornecedoresModule {
};
AbastecimentoCadastrosGrupoFornecedoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosGrupoFornecedoresListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosGrupoFornecedoresCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _grupo_fornecedores_routing_module__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosGrupoFornecedoresRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], AbastecimentoCadastrosGrupoFornecedoresModule);



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

/***/ "SN2+":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/cadastro/cadastro.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosGrupoFornecedoresCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresCadastroComponent", function() { return AbastecimentoCadastrosGrupoFornecedoresCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "zXAD");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "2tNg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../grupo-fornecedores.service */ "i/v9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");














let AbastecimentoCadastrosGrupoFornecedoresCadastroComponent = class AbastecimentoCadastrosGrupoFornecedoresCadastroComponent {
    constructor(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.enableCadastroFornecedor = false;
        this.loadingDadosFornecedores = false;
        this.noResult = false;
        this.noResultDados = false;
        this.editBool = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.integradores = [];
        this.fornecedores = [];
        this.dadosFornecedores = [];
        this.dados = [];
        this.form = this.formBuilder.group({
            grupo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            integrador: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fornecedor: [null]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 9000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.getIntegradores();
        this.titleService.setTitle('Grupo e Fornecedores');
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
                    descricao: 'Grupo e fornecedores',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}/grupo-fornecedores/lista`
                },
                {
                    descricao: 'Cadastro'
                },
            ];
        });
    }
    checkRouterParams() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.getFornecedores();
                this.setValuesGrupoFornecedor(_response.item);
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    setValuesGrupoFornecedor(item) {
        this.idAssociacaoGrupoFornecedor = item["ID"],
            this.editBool = item["edit"];
        this.getAssociacaoGrupoFornecedoresIntPed({
            ID_ASSO_GRUP_FORN_INTE_PEDI: this.idAssociacaoGrupoFornecedor,
            ID_GRUP_FORN: '',
            ID_APOI_INTE_PEDI: '',
            ID_FORN: '',
            IN_STAT: '',
            NR_PAGE_INIC: '',
            TT_REGI_PAGI: '',
            ORDE_BY: '',
            ORDE_TYPE: ''
        });
    }
    getAssociacaoGrupoFornecedoresIntPed(params) {
        //this.loaderNavbar = true;
        this.service
            .getAssociacaoGrupoFornecedoresIntPed(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.searchAssociacaoGrupoFornecedores())))
            .subscribe((res) => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.dados = res['body']['result'];
                    this.idGrupoFornecedor = this.dados[0]["ID_GRUP_FORN"],
                        this.idGrupoFornecedorIntPed = this.dados[0]['ID_APOI_INTE_PEDI'],
                        this.descGrupoFornecedor = this.dados[0]['NM_GRUP_FORN'],
                        this.descGrupoFornecedorIntPed = this.dados[0]["NM_APOI_INTE_PEDI"],
                        this.idSituacao = this.dados[0]['IN_STAT'];
                    this.form.get('grupo').setValue(this.descGrupoFornecedor);
                    this.form.get('situacao').setValue(this.idSituacao);
                    this.form.get('integrador').setValue(this.idGrupoFornecedorIntPed);
                    this.noResultDados = false;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResultDados = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar dados');
            this.noResult = true;
        });
    }
    getFornecedores() {
        this.loaderFullScreen = true;
        this.loaderNavbar = true;
        let idSituacao = 1;
        this.fornecedores = [];
        this.service
            .getFornecedores(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { this.loaderNavbar = false; this.enableCadastroFornecedor = true; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.fornecedores = res['body']['result'];
                this.fornecedores.map((fornecedor) => {
                    fornecedor.full_name = fornecedor.ID_REFE_ERP + ' - ' + fornecedor.NM_FANT;
                    return fornecedor;
                });
                this.loaderFullScreen = false;
            }
        }, error => {
            this.enableCadastroFornecedor = false;
            this.pnotifyService.error('Erro ao carregar fornecedor');
        });
    }
    searchAssociacaoGrupoFornecedores() {
        this.getAssociacaoGrupoFornecedorFornecedores({
            ID_ASSO_GRUP_FORN_FORN: '',
            ID_INTE_PEDI: '',
            ID_GRUP_FORN: this.idGrupoFornecedor,
            ID_FORN: '',
            IN_STAT: '',
            NR_PAGE_INIC: '',
            TT_REGI_PAGI: '',
            ORDE_BY: '',
            ORDE_TYPE: ''
        });
    }
    getAssociacaoGrupoFornecedorFornecedores(params) {
        this.loadingDadosFornecedores = false;
        this.dadosFornecedores = [];
        this.loaderNavbar = true;
        this.service
            .getAssociacaoGrupoFornecedorFornecedores(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosFornecedores = res['body']['result'];
                    this.loadingDadosFornecedores = true;
                    this.noResult = false;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.loadingDadosFornecedores = false;
            this.noResult = true;
            this.pnotifyService.error('Erro ao carregar fornecedor');
        });
    }
    getIntegradores() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.integradores = [];
        this.service
            .getIntegradoresPedidos(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.integradores = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar fornecedor');
        });
    }
    onSave() {
        if (this.editBool) {
            this.updateCadastro();
        }
        else {
            this.createCadastro();
        }
    }
    createCadastro() {
        this.saveGrupoFornecedor();
    }
    updateCadastro() {
        this.saveGrupoFornecedor();
        this.saveAssociacaoGrupoFornecedores();
    }
    saveGrupoFornecedor() {
        let grupo = this.form.get("grupo").value;
        let idSituacao = this.form.get("situacao").value;
        let record = [];
        if (this.editBool) {
            record = {
                ID_GRUP_FORN: this.idGrupoFornecedor,
                NM_GRUP_FORN: grupo,
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario)
            };
        }
        else {
            record = {
                NM_GRUP_FORN: grupo,
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario)
            };
        }
        this.postGrupoFornecedor(record);
    }
    saveGrupoFornecedorIntPed(params) {
        let integrador = this.form.get("integrador").value;
        let idSituacao = this.form.get("situacao").value;
        let record = [];
        if (this.editBool) {
            record = {
                ID_ASSO_GRUP_FORN_INTE_PEDI: this.idAssociacaoGrupoFornecedor,
                ID_APOI_INTE_PEDI: this.idGrupoFornecedorIntPed,
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario),
            };
        }
        else {
            record = {
                ID_APOI_INTE_PEDI: integrador,
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario),
            };
        }
        this.postGrupoFornecedorIntPed(record);
    }
    postGrupoFornecedor(record) {
        this.loaderNavbar = true;
        this.service
            .postGrupoFornecedores(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            (this.loaderNavbar = false);
        }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    let params = { ID_GRUP_FORN: res['ID_GRUP_FORN'] };
                    this.saveGrupoFornecedorIntPed(params);
                    this.pnotifyService.success(res['message']);
                    ;
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    postGrupoFornecedorIntPed(record) {
        this.loaderNavbar = true;
        this.service
            .postAssociacaoGrupoFornecedoresIntPed(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            (this.loaderNavbar = false);
        }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    this.pnotifyService.success(res['message']);
                    if (!this.editBool) {
                        this.resetValuesForm();
                    }
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    saveAssociacaoGrupoFornecedores() {
        let idFornecedor = this.form.get("fornecedor").value;
        if (idFornecedor != null || idFornecedor != undefined) {
            this.postAssociacaoGrupoFornecedores({
                ID_GRUP_FORN: this.idGrupoFornecedor,
                ID_FORN: idFornecedor,
                IN_STAT: 1,
                ID_USUA: parseInt(this.idUsuario)
            });
        }
    }
    postAssociacaoGrupoFornecedores(record) {
        this.loaderNavbar = true;
        this.service
            .postAssociacaoGrupoFornecedorFornecedores(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            (this.loaderNavbar = false), this.form.get("fornecedor").reset(), this.searchAssociacaoGrupoFornecedores();
        }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    this.pnotifyService.success(res['message']);
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    onDelete(item) {
        this.loaderNavbar = true;
        let record = {
            ID_ASSO_FORN_GRUP_FORN: item.ID_ASSO_GRUP_FORN_FORN,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.confirmDelete()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(result => result ? this.deleteMaterialGrupoFornecedor(record) : rxjs__WEBPACK_IMPORTED_MODULE_13__["EMPTY"]))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.loaderNavbar = false;
            this.searchAssociacaoGrupoFornecedores();
        }, (error) => {
            this.pnotifyService.error();
            this.loaderNavbar = false;
            this.searchAssociacaoGrupoFornecedores();
        });
        this.deleteMaterialGrupoFornecedor(record);
    }
    deleteMaterialGrupoFornecedor(record) {
        return this.service.deleteAssociacaoGrupoFornecedorFornecedores(record);
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    resetValuesForm() {
        this.form.get("grupo").reset();
        this.form.get("situacao").reset();
        this.form.get("integrador").reset();
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
};
AbastecimentoCadastrosGrupoFornecedoresCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosGrupoFornecedoresService"] }
];
AbastecimentoCadastrosGrupoFornecedoresCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosGrupoFornecedoresService"]])
], AbastecimentoCadastrosGrupoFornecedoresCadastroComponent);



/***/ }),

/***/ "VuXe":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/grupo-fornecedores/lista/lista.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Grupo e Fornecedores\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n  >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"excelExport()\"\n  >\n    Exportar Excel\n  </button>\n  <button\n    type=\"button\"\n    routerLink=\"../cadastro\"\n    >\n    Adicionar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3\">\n          <label for=\"integrador\">Integrador</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"false\"\n            [items]=\"integradores\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_INTE_PEDI\"\n            bindValue=\"ID\"\n            formControlName=\"integrador\"\n            (change)=\"this.getGrupoFornecedores()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"grupoFornecedor\">Grupo de Fornecedores</label>\n          <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"true\"\n          [multiple]=\"false\"\n          [items]=\"grupoFornecedores\"\n          [virtualScroll]=\"true\"\n          [hideSelected]=\"true\"\n          [closeOnSelect]=\"true\"\n          placeholder=\"Selecione...\"\n          bindLabel=\"NM_GRUP_FORN\"\n          bindValue=\"ID_GRUP_FORN\"\n          formControlName=\"grupoFornecedor\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n  <div class=\"row\">\n    <div\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\n      *ngIf=\"loading\"\n    >\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n              Integrador\n              <span *ngIf=\"key == 'NM_LINH'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_LINH'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\n              Grupo\n              <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of dados | orderBy: key:reverse | slice: begin:end;\n              let i = index\n            \"\n          >\n            <td class=\"text-center\" [ngClass]=\"[item.select ? 'bg-row-selected' : '', item.IN_STAT == 0 ? 'border-danger' : 'border-success']\">{{ item.NM_APOI_INTE_PEDI }}</td>\n            <td\n              class=\"text-truncate text-center\"\n              [ngClass]=\"item.select ? 'bg-row-selected' : ''\"\n            >\n              {{ item.NM_GRUP_FORN }}\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Editar\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                <i\n                  class=\"fas fa-edit\"\n                  (click)=\"onAdd(item)\" \n                  >\n                </i>\n                </button>\n              </div>\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  (click)=\"openTab(item)\"\n                  tooltip=\"Detalhes\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-6\">\n      <tabset [hidden]=\"!compressedTable\">\n        <button\n          type=\"button\"\n          class=\"btn-icon close position-absolute\"\n          (click)=\"onClose()\"\n        >\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes\">\n          <div\n            class=\"border-right border-left border-bottom px-3 pt-3\"\n            style=\"overflow: auto; height: 338px;\"\n          >\n            <custom-table *ngIf=\"!noResultDetalhes && loadingDetalhes\">\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Cód.</th>\n                  <th scope=\"col\">Razão social</th>\n                  <th scope=\"col\">Nome fantasia</th>\n                  <th scope=\"col\">CNPJ do Fornecedor</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosDetalhes\">\n                  <td class=\"text-center\"> {{ item.ID_REFE_ERP }} </td>\n                  <td class=\"text-center\"> {{ item.NM_RAZA_SOCI ? item.NM_RAZA_SOCI : '-' }} </td>\n                  <td class=\"text-center\"> {{ item.NM_FANT }} </td>\n                  <td class=\"text-center\"> {{ item.NR_CNPJ_CPF ? (item.NR_CNPJ_CPF | cnpj) : '-' }} </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <div\n              *ngIf=\"noResultDetalhes\"\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\n              style=\"height: 80%;\"\n            >\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n              ></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n    <div\n      class=\"col-12 mb-2 ml-2\"\n      *ngIf=\"!noResult && dados?.length > itemsPerPage\"\n    >\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dados?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n");

/***/ }),

/***/ "i/v9":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/grupo-fornecedores.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosGrupoFornecedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresService", function() { return AbastecimentoCadastrosGrupoFornecedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AbastecimentoCadastrosGrupoFornecedoresService = class AbastecimentoCadastrosGrupoFornecedoresService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getFornecedores(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/fornecedores`, {
            params: {
                IN_STAT: params
            },
            observe: "response"
        });
    }
    getIntegradoresPedidos(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/integradores-pedidos`, {
            params: {
                IN_STAT: params
            },
            observe: "response"
        });
    }
    getGrupoFornecedoresFiltro(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos`, {
            params: {
                ID_APOI_INTE_PEDI: params
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getGrupoFornecedores(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/grupo-fornecedores`, {
            params: {
                ID_GRUP_FORN: params['ID_GRUP_FORN'].toString(),
                NM_GRUP_FORN: params['NM_GRUP_FORN'],
                IN_STAT: params['IN_STAT'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE']
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postGrupoFornecedores(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/grupo-fornecedores`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAssociacaoGrupoFornecedoresIntPed(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos`, {
            params: {
                ID_ASSO_GRUP_FORN_INTE_PEDI: params['ID_ASSO_GRUP_FORN_INTE_PEDI'].toString(),
                ID_APOI_INTE_PEDI: params['ID_APOI_INTE_PEDI'],
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                ID_FORN: params['ID_FORN'],
                IN_STAT: params['IN_STAT'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE']
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postAssociacaoGrupoFornecedoresIntPed(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    deleteAssociacaoGrupoFornecedoresIntPed(record) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            body: record
        };
        return this.httpClient.delete(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos`, options);
    }
    getAssociacaoGrupoFornecedorFornecedores(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedores`, {
            params: {
                ID_ASSO_GRUP_FORN_FORN: params['ID_ASSO_GRUP_FORN_FORN'].toString(),
                ID_INTE_PEDI: params['ID_INTE_PEDI'],
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                ID_FORN: params['ID_FORN'],
                IN_STAT: params['IN_STAT'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAssociacaoGrupoFornecedorFornecedoresFiltro(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedores`, {
            params: {
                ID_GRUP_FORN: params
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postAssociacaoGrupoFornecedorFornecedores(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedores`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    deleteAssociacaoGrupoFornecedorFornecedores(record) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            body: record
        };
        return this.httpClient.delete(`${this.BASE_URL}/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedor`, options);
    }
};
AbastecimentoCadastrosGrupoFornecedoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AbastecimentoCadastrosGrupoFornecedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AbastecimentoCadastrosGrupoFornecedoresService);



/***/ }),

/***/ "i8GH":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/lista/lista.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9ncnVwby1mb3JuZWNlZG9yZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9ncnVwby1mb3JuZWNlZG9yZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcm93LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYjhmMCFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "jqcQ":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/grupo-fornecedores-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosGrupoFornecedoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresRoutingModule", function() { return AbastecimentoCadastrosGrupoFornecedoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "SN2+");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "sOUy");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'lista',
                component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosGrupoFornecedoresListaComponent"]
            },
            {
                path: 'cadastro',
                component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosGrupoFornecedoresCadastroComponent"]
            },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            }
        ]
    }
];
let AbastecimentoCadastrosGrupoFornecedoresRoutingModule = class AbastecimentoCadastrosGrupoFornecedoresRoutingModule {
};
AbastecimentoCadastrosGrupoFornecedoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoCadastrosGrupoFornecedoresRoutingModule);



/***/ }),

/***/ "sOUy":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/lista/lista.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AbastecimentoCadastrosGrupoFornecedoresListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresListaComponent", function() { return AbastecimentoCadastrosGrupoFornecedoresListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "VuXe");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "i8GH");
/* harmony import */ var _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../grupo-fornecedores.service */ "i/v9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");











//Converte rota em base64

let AbastecimentoCadastrosGrupoFornecedoresListaComponent = class AbastecimentoCadastrosGrupoFornecedoresListaComponent {
    constructor(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loading = false;
        this.loadingDetalhes = false;
        this.noResult = false;
        this.noResultDetalhes = false;
        this.compressedTable = false;
        this.selectedRow = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.dados = [];
        this.dadosExcel = [];
        this.dadosDetalhes = [];
        this.fornecedores = [];
        this.grupoFornecedores = [];
        this.integradores = [];
        /* Ordenação */
        this.reverse = false;
        this.key = 'TP_MATE';
        /* Ordenação */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
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
            integrador: [null],
            grupoFornecedor: [null],
            fornecedor: [null]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.disabledForms();
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.getIntegradores();
        this.titleService.setTitle('Grupo e fornecedores');
    }
    disabledForms() {
        this.form.get('grupoFornecedor').disable();
        this.form.get('fornecedor').disable();
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
                    descricao: 'Grupo e fornecedores'
                }
            ];
        });
    }
    checkRouterParams() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.search(_response);
                this.setFormValues(_response);
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        let idSituacao = 1;
        let integrador = queryParams['ID_APOI_INTE_PEDI'] ? queryParams['ID_APOI_INTE_PEDI'] : "";
        let fornecedor = queryParams['ID_FORN'] ? queryParams['ID_FORN'] : "";
        let grupoFornecedor = queryParams['ID_GRUP_FORN'] ? queryParams['ID_GRUP_FORN'] : "";
        if (Object.keys(integrador).length > 0) {
            this.loaderNavbar = true;
            /* grupoFornecedor */
            this.service
                .getGrupoFornecedoresFiltro(integrador)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.grupoFornecedores = res['body']['result'];
                            this.form.get('grupoFornecedor').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar grupo fornecedor');
            });
        }
        else {
            this.form.get('grupoFornecedor').disable();
        }
        /* fornecedor */
        if (Object.keys(integrador).length > 0) {
            this.loaderNavbar = true;
            this.service
                .getAssociacaoGrupoFornecedorFornecedoresFiltro(grupoFornecedor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.fornecedores = res['body']['result'];
                            this.form.get('fornecedor').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar fornecedor');
            });
        }
        else {
            this.form.get('fornecedor').disable();
        }
        this.form.patchValue({
            integrador: integrador,
            fornecedor: fornecedor,
            grupoFornecedor: grupoFornecedor
        });
    }
    onFilter() {
        this.setRouterParams({
            ID_ASSO_GRUP_FORN_INTE_PEDI: '',
            ID_GRUP_FORN: this.form.value['grupoFornecedor'] === null ||
                this.form.value['grupoFornecedor'] === undefined
                ? ''
                : this.form.value['grupoFornecedor'],
            ID_APOI_INTE_PEDI: this.form.value['integrador'] === null ||
                this.form.value['integrador'] === undefined
                ? ''
                : this.form.value['integrador'],
            ID_FORN: this.form.value['fornecedor'] === null ||
                this.form.value['fornecedor'] === undefined
                ? ''
                : this.form.value['fornecedor'],
            IN_STAT: '',
            NR_PAGE_INIC: '',
            TT_REGI_PAGI: '',
            ORDE_BY: '',
            ORDE_TYPE: ''
        });
        this.onClose();
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(params)
        });
        this.search(params);
    }
    excelExport() {
        this.getDadosExcel({
            ID_ASSO_GRUP_FORN_FORN: '',
            ID_INTE_PEDI: this.form.value['integrador'] === null ||
                this.form.value['integrador'] === undefined
                ? ''
                : this.form.value['integrador'],
            ID_GRUP_FORN: this.form.value['grupoFornecedor'] === null ||
                this.form.value['grupoFornecedor'] === undefined
                ? ''
                : this.form.value['grupoFornecedor'],
            ID_FORN: this.form.value['fornecedor'] === null ||
                this.form.value['fornecedor'] === undefined
                ? ''
                : this.form.value['fornecedor'],
            IN_STAT: '',
            NR_PAGE_INIC: '',
            TT_REGI_PAGI: '',
            ORDE_BY: '',
            ORDE_TYPE: '',
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: parseInt(this.idUsuario),
        });
    }
    getFornecedores() {
        let params = this.form.get('grupoFornecedor').value;
        this.loaderNavbar = true;
        this.fornecedores = [];
        if (this.form.get('grupoFornecedor').status === 'VALID') {
            this.service
                .getAssociacaoGrupoFornecedorFornecedoresFiltro(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res['body']['responseCode'] === 200) {
                        this.fornecedores = res['body']['result'];
                        this.form.get('fornecedor').reset();
                        this.form.get('fornecedor').enable();
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.form.get('fornecedor').reset();
                        this.form.get('fornecedor').disable();
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }, error => {
                this.form.get('fornecedor').reset();
                this.form.get('fornecedor').disable();
            });
        }
        else {
            this.form.get('fornecedor').reset();
            this.form.get('fornecedor').disable();
        }
    }
    getGrupoFornecedores() {
        let params = this.form.get('integrador').value;
        this.loaderNavbar = true;
        this.fornecedores = [];
        if (this.form.get('integrador').status === 'VALID') {
            this.service
                .getGrupoFornecedoresFiltro(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res['body']['responseCode'] === 200) {
                        this.grupoFornecedores = res['body']['result'];
                        this.form.get('grupoFornecedor').reset();
                        this.form.get('grupoFornecedor').enable();
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.form.get('grupoFornecedor').reset();
                        this.form.get('grupoFornecedor').disable();
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }, error => {
                this.form.get('grupoFornecedor').reset();
                this.form.get('fornecedor').reset();
                this.form.get('grupoFornecedor').disable();
                this.form.get('fornecedor').disable();
            });
        }
        else {
            this.form.get('grupoFornecedor').reset();
            this.form.get('fornecedor').reset();
            this.form.get('grupoFornecedor').disable();
            this.form.get('fornecedor').disable();
        }
    }
    getIntegradores() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.integradores = [];
        this.service
            .getIntegradoresPedidos(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.integradores = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar fornecedor');
        });
    }
    search(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.service
            .getAssociacaoGrupoFornecedoresIntPed(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.dados = res['body']['result'];
                    this.loading = true;
                    this.noResult = false;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar dados');
            this.noResult = true;
        });
    }
    getDadosExcel(params) {
        this.loaderNavbar = true;
        this.dadosExcel = [];
        this.service
            .getAssociacaoGrupoFornecedorFornecedores(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                    this.dadosExcel = res['body']['result'];
                    this.pnotifyService.success(this.dadosExcel);
                }
                else if (res['body']['responseCode'] == 404) {
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.loadingDetalhes = false;
            this.pnotifyService.error('Erro ao gerar Excel');
        });
    }
    getGrupoFornecedoresDetalhes(params) {
        this.loadingDetalhes = false;
        this.noResultDetalhes = false;
        this.loaderNavbar = true;
        this.dadosDetalhes = [];
        this.service
            .getAssociacaoGrupoFornecedorFornecedores(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                    this.dadosDetalhes = res['body']['result'];
                    this.noResultDetalhes = false;
                    this.loadingDetalhes = true;
                }
                else if (res['body']['responseCode'] == 404) {
                    this.loadingDetalhes = false;
                    this.noResultDetalhes = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.loadingDetalhes = false;
            this.pnotifyService.error('Erro ao carregar fornecedor');
        });
    }
    openTab(i) {
        i.select = !i.select;
        this.getGrupoFornecedoresDetalhes({
            ID_ASSO_GRUP_FORN_FORN: '',
            ID_INTE_PEDI: '',
            ID_GRUP_FORN: i['ID_GRUP_FORN'],
            ID_FORN: '',
            IN_STAT: '',
            NR_PAGE_INIC: '',
            TT_REGI_PAGI: '',
            ORDE_BY: '',
            ORDE_TYPE: '',
            IN_GERA_EXCE: '',
            ID_USUA: ''
        });
        this.compressedTable = true;
    }
    onClose() {
        this.dados.forEach(e => {
            e.select = false;
        });
        this.selectedRow = false;
        this.compressedTable = false;
    }
    onAdd(item) {
        this.router.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams({
                item: { ID: item.ID, edit: true }
            })
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
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
};
AbastecimentoCadastrosGrupoFornecedoresListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] },
    { type: _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosGrupoFornecedoresService"] }
];
AbastecimentoCadastrosGrupoFornecedoresListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
        _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosGrupoFornecedoresService"]])
], AbastecimentoCadastrosGrupoFornecedoresListaComponent);



/***/ }),

/***/ "zXAD":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/grupo-fornecedores/cadastro/cadastro.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button\n    type=\"button\"\n    (click)=\"onSave()\"\n    [disabled]=\"form.status == 'INVALID'\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-4\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"grupo\">Grupo de Fornecedor</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"grupo\"\n                formControlName=\"grupo\"\n                placeholder=\"Digite...\"\n                [ngClass]=\"onFieldError('grupo') + ' ' + onFieldRequired('grupo')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('grupo')\" message=\"Grupo de Fornecedor é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"situacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"situacao\"\n                formControlName=\"situacao\"\n                [ngClass]=\"onFieldRequired('situacao')\">\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('situacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"integrador\">Integrador</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [multiple]=\"false\"\n                [items]=\"integradores\"\n                [virtualScroll]=\"true\"\n                [hideSelected]=\"true\"\n                [closeOnSelect]=\"true\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"NM_APOI_INTE_PEDI\"\n                bindValue=\"ID\"\n                formControlName=\"integrador\"\n                [ngClass]=\"onFieldRequired('integrador')\">\n              >\n              </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('integrador')\" message=\"Integrador é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\" *ngIf=\"enableCadastroFornecedor\">\n            <div class=\"form-group col\">\n              <label for=\"fornecedores\">Fornecedor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [multiple]=\"false\"\n                [items]=\"fornecedores\"\n                [virtualScroll]=\"true\"\n                [hideSelected]=\"true\"\n                [closeOnSelect]=\"true\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"full_name\"\n                bindValue=\"ID\"\n                formControlName=\"fornecedor\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div\n      class=\"row justify-content-center mt-3\"\n      [hidden]=\"!loadingDadosFornecedores\"\n    >\n      <div class=\"form-group col-md-8\">\n        <label for=\"depositosVinculados\">Fornecedores Vinculados</label>\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr class=\"text-center\">\n              <th scope=\"col\">Cód.</th>\n              <th scope=\"col\">Razão Social</th>\n              <th scope=\"col\">Nome Fantasia</th>\n              <th scope=\"col\">CNPJ do Fornecedor</th>\n              <th scope=\"col\" class=\"hover\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of dadosFornecedores\">\n              <td class=\"text-center\"> {{ item.ID_REFE_ERP }} </td>\n              <td class=\"text-center\"> {{ item.NM_RAZA_SOCI ? item.NM_RAZA_SOCI : '-' }} </td>\n              <td class=\"text-center\"> {{ item.NM_FANT }} </td>\n              <td class=\"text-center\"> {{ item.NR_CNPJ_CPF ? (item.NR_CNPJ_CPF | cnpj) : '-' }} </td>\n              <td style=\"width: 40px;\">\n                <button\n                  class=\"btn-icon-sm\"\n                  style=\"color: red;\"\n                  tooltip=\"Excluir\"\n                  (click)=\"onDelete(item)\"\n                >\n                  <i class=\"far fa-trash-alt\"></i>\n                </button>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ })

}]);
//# sourceMappingURL=grupo-fornecedores-grupo-fornecedores-module-es2015.js.map