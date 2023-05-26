(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liberacoes-liberacoes-module"],{

/***/ "+lko":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/liberacoes-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ComercialGestaoLiberacoesModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoLiberacoesModuleRoutingModule", function() { return ComercialGestaoLiberacoesModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _detalhes_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalhes/detalhes-resolver.guard */ "hGBg");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "UbBJ");
/* harmony import */ var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalhes/detalhes.component */ "1PMH");



// Guards

//components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoLiberacoesListaComponent"],
    },
    {
        path: 'detalhes/:id/:empresa',
        component: _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoLiberacoesDetalhesComponent"],
        resolve: {
            detalhes: _detalhes_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialLiberacoesDetalhesResolverGuard"],
        },
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialGestaoLiberacoesModuleRoutingModule = class ComercialGestaoLiberacoesModuleRoutingModule {
};
ComercialGestaoLiberacoesModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialGestaoLiberacoesModuleRoutingModule);



/***/ }),

/***/ "1PMH":
/*!************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/detalhes/detalhes.component.ts ***!
  \************************************************************************************/
/*! exports provided: ComercialGestaoLiberacoesDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoLiberacoesDetalhesComponent", function() { return ComercialGestaoLiberacoesDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "n1h9");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "1qrM");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../servicos/contatos/services/contato.service */ "n8zn");
/* harmony import */ var _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/liberacoes.service */ "kbUc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-brazil */ "hTrW");













//Angular




//rxjs


let ComercialGestaoLiberacoesDetalhesComponent = class ComercialGestaoLiberacoesDetalhesComponent {
    //Interfaces
    constructor(formBuilder, location, pnotify, router, liberacoesService, activatedRoute, modalService, contatosService, clientesService, confirmModalService, titleService, atividadesService, dateService, pnotifyService) {
        this.formBuilder = formBuilder;
        this.location = location;
        this.pnotify = pnotify;
        this.router = router;
        this.liberacoesService = liberacoesService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.contatosService = contatosService;
        this.clientesService = clientesService;
        this.confirmModalService = confirmModalService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.dateService = dateService;
        this.pnotifyService = pnotifyService;
        this.noContato = true;
        this.noDetalhes = true;
        this.breadCrumbTree = [];
        this.formData = [];
        this._materiaisSemEstoqueEmpty = false;
        this.profile = [];
        this.viewDetailsSolicitante = 1;
        this.showPermissionDenied = false;
        //loading
        this.loaderFullScreen = false;
        this.loadingNavBar = false;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_18__["MASKS"];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.onActivatedRoute();
        this.setBreadCrumb();
        this.getPerfil();
        this.setFormBuilder();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        /* const _data = this.activatedRoute.snapshot.data.detalhes.data['0']; */
        /* this.solicitacao = this.activatedRoute.snapshot.data.detalhes.data['0']; */
        if (!_params.hasOwnProperty('id'))
            return this.getSolicitacoes();
        this.getSolicitacoes({
            nrPedido: _params['id'],
            empresa: _params['empresa'],
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Detalhes';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home',
            },
            {
                descricao: 'Gestão',
                routerLink: `/comercial/gestao/${id}`,
            },
            {
                descricao: 'Liberações Comerciais',
                routerLink: `/comercial/gestao/${id}/liberacoes/lista`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    detailsSolicitante(params) {
        if (this.viewDetailsSolicitante == 1) {
            this.viewDetailsSolicitante = 0;
        }
        else {
            this.viewDetailsSolicitante = 1;
        }
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            descObs: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            excluiPedido: null,
        });
    }
    getSolicitacoes(params) {
        this.loaderFullScreen = true;
        this.liberacoesService
            .getDetalhes(params.nrPedido, params.empresa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success == true) {
                    this.solicitacao = response.data['0'];
                    this.materiaisSemEstoqueEmpty();
                    this.noResult = false;
                    if (this.solicitacao.totais[0].comentario != '') {
                        this.form.controls.descObs.setValue(this.solicitacao.totais[0].comentario);
                        this.form.controls.descObs.updateValueAndValidity();
                    }
                }
                else {
                    this.noResult = true;
                }
            },
            error: (error) => {
                this.pnotify.error();
                this.noResult = true;
            }
        });
    }
    getDetalhes() {
        const _params = this.solicitacao;
        this.noDetalhes = true;
        this.loadingDetalhes = true;
        this.clientesService
            .getDetalhes(_params['codCliente'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loadingDetalhes = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success == true) {
                    this.cliente = response.data;
                    this.noDetalhes = false;
                }
                else {
                    this.noDetalhes = true;
                    this.cliente = [];
                }
            },
            error: (error) => {
                this.noDetalhes = true;
                this.pnotify.error();
            }
        });
    }
    getPerfil() {
        this.liberacoesService
            .getPermissoesAcesso()
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.profile = response.data;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    materiaisSemEstoqueEmpty() {
        if (this.solicitacao.materiaisSemEstoque.length == 0) {
            this._materiaisSemEstoqueEmpty = true;
        }
        else {
            this._materiaisSemEstoqueEmpty = false;
        }
    }
    openModal(template) {
        this.getDetalhes();
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-lg',
            backdrop: 'static',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    setParams(solicitacao) {
        let params = {};
        let exclui;
        if (this.form.value.excluiPedido == true) {
            exclui = 1;
        }
        else {
            exclui = 0;
        }
        params.descObs = this.form.value.descObs;
        params.excluiPedido = exclui;
        params.empresa = solicitacao.codEmpresa;
        params.nrPedido = solicitacao.nrPedido;
        return params;
    }
    requestSuccess(solicitacao) {
        const stat = 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            this.loaderNavbar = true;
            return this.liberacoesService.aprovaLiberacao(this.setParams(solicitacao));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.router.navigate(['/comercial/gestao/${id}/liberacoes/lista'], {
                relativeTo: this.activatedRoute,
            });
        }, (error) => {
            this.pnotify.error('Erro ao aprovar a solicitação');
        });
    }
    requestFail(solicitacao) {
        const stat = 2;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            this.loaderNavbar = true;
            return this.liberacoesService.reprovaLiberacao(this.setParams(solicitacao));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.router.navigate(['/comercial/gestao/${id}/liberacoes/lista'], {
                relativeTo: this.activatedRoute,
            });
        }, (error) => {
            this.pnotify.error('Erro ao reprovar a solicitação');
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, 'Confirmar Aprovação', 'Deseja realmente aprovar a solicitação?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm(null, 'Confirmar Reprovação', 'Deseja realmente reprovar a solicitação?', 'Cancelar', 'Confirmar');
    }
    onVoltar() {
        this.location.back();
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    classVariacaoPreco(variacaoPreco) {
        let variacaoClass;
        if (variacaoPreco > 0) {
            variacaoClass = 'fas fa-caret-up text-success';
        }
        else if (variacaoPreco < 0) {
            variacaoClass = 'fas fa-caret-down text-danger';
        }
        return variacaoClass;
    }
    formatVariacaoPreco(variacaoPreco) {
        let valor;
        if (variacaoPreco > 0) {
            valor = `+${variacaoPreco}%`;
        }
        else if (variacaoPreco < 0) {
            valor = `${variacaoPreco}%`;
        }
        return valor;
    }
};
ComercialGestaoLiberacoesDetalhesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoLiberacoesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"] },
    { type: _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_6__["ContatoService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] }
];
ComercialGestaoLiberacoesDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"])({
        selector: 'comercial-gestao-liberacoes-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
        _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoLiberacoesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
        _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_6__["ContatoService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]])
], ComercialGestaoLiberacoesDetalhesComponent);



/***/ }),

/***/ "1qrM":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/detalhes/detalhes.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9saWJlcmFjb2VzL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "4xRd":
/*!******************************************************************!*\
  !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
  \******************************************************************/
/*! exports provided: ComercialVendedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function() { return ComercialVendedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialVendedoresService = class ComercialVendedoresService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/vendedor`;
    }
    getDetalhesCadastro() {
        return this.http
            .get(`${this.API}/detalhes-cadastro`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVendedores() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCarteiraClientes(params) {
        return this.http
            .get(`${this.API}/carteira-clientes`, {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getValidaClienteCarteira(codCliente) {
        return this.http
            .get(`${this.API}/valida-cliente-carteira/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVinculoOperadores() {
        return this.http
            .get(`${this.API}/vinculo-operadores`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialVendedoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialVendedoresService);



/***/ }),

/***/ "D27f":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/lista/lista.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9saWJlcmFjb2VzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "U/xw":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/liberacoes.module.ts ***!
  \**************************************************************************/
/*! exports provided: ComercialGestaoLiberacoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoLiberacoesModule", function() { return ComercialGestaoLiberacoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lista/lista.component */ "UbBJ");
/* harmony import */ var _liberacoes_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./liberacoes-routing.module */ "+lko");
/* harmony import */ var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./detalhes/detalhes.component */ "1PMH");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a);
Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_13__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_14__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules


// Components



let ComercialGestaoLiberacoesModule = class ComercialGestaoLiberacoesModule {
};
ComercialGestaoLiberacoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["ComercialGestaoLiberacoesListaComponent"],
            _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__["ComercialGestaoLiberacoesDetalhesComponent"],
        ],
        imports: [
            _liberacoes_routing_module__WEBPACK_IMPORTED_MODULE_24__["ComercialGestaoLiberacoesModuleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_20__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], ComercialGestaoLiberacoesModule);



/***/ }),

/***/ "UbBJ":
/*!******************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/lista/lista.component.ts ***!
  \******************************************************************************/
/*! exports provided: ComercialGestaoLiberacoesListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoLiberacoesListaComponent", function() { return ComercialGestaoLiberacoesListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "azxt");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "D27f");
/* harmony import */ var _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../servicos/contatos/services/contato.service */ "n8zn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/liberacoes.service */ "kbUc");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ciclo-vendas/cotacoes/formulario/formulario.service */ "/Zk1");
/* harmony import */ var _ciclo_vendas_cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../ciclo-vendas/cotacoes/cotacoes.service */ "uuri");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../services/vendedores.service */ "4xRd");
/* harmony import */ var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/services/requests/escritorios.service */ "NIE8");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/clientes.service */ "8ouN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");




//angular




//servicos














// rxjs






Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_26__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_27__["ptBrLocale"]);
let ComercialGestaoLiberacoesListaComponent = class ComercialGestaoLiberacoesListaComponent {
    /* Pagination */
    constructor(router, atividadesService, pnotify, localeService, activatedRoute, liberacoesService, formBuilder, contatosService, titleService, formularioService, location, cotacoesService, vendedoresService, escritoriosService, clientesService, 
    // private motivosService: LogisticaEntradaMateriaisMotivosService,
    xlsxService, modalService, confirmModalService, routerService, dateService, detailPanelService, pnotifyService) {
        this.router = router;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.liberacoesService = liberacoesService;
        this.formBuilder = formBuilder;
        this.contatosService = contatosService;
        this.titleService = titleService;
        this.formularioService = formularioService;
        this.location = location;
        this.cotacoesService = cotacoesService;
        this.vendedoresService = vendedoresService;
        this.escritoriosService = escritoriosService;
        this.clientesService = clientesService;
        this.xlsxService = xlsxService;
        this.modalService = modalService;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.detailPanelService = detailPanelService;
        this.pnotifyService = pnotifyService;
        this.permissoesAcesso = {
            acessoClientes: false,
            historicoExclusao: false,
            duplicataCarteira: false,
        };
        this.showDetailPanel = false;
        this.orderBy = 'nrPedido';
        this.orderType = 'ASC';
        //LOADINGS
        this.loadingDetails = false;
        this.loaderNavbar = false;
        this.loadingModal = false;
        this.loaderFullScreen = false;
        this.codClientErrors = false;
        this.empresas = [];
        this.clientes = [];
        this.linhas = [];
        this.vendedores = [];
        this.vendedoresTotal = [];
        this.escritorios = [];
        this.filteredVendedores = [];
        this.showPermissionDenied = false;
        this.totalItens = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.dadosEmptyDetalhes = false;
        this.dadosPagination = [];
        this.detalhes = [];
        this.profile = [];
        this.contato = [];
        this.solicitante = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.subtitles = [
            {
                id: 1,
                text: 'Analisar',
                color: 'blue',
            },
            {
                id: 2,
                text: 'Reprovado',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.pnotifyService.getPNotify();
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getFilterValues();
        this.setFormFilter();
        //this.setFormBuilder();
        this.getPerfil();
        this.titleService.setTitle('Liberações Comerciais');
        this.onDetailPanelEmitter();
        this.setSolicitacaoSelecionada();
        this.loadingFilterValues();
    }
    ngOnDestroy() {
        this.showDetailPanelSubscription.unsubscribe();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: `/comercial/home`,
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Liberações Comerciais',
                },
            ];
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            idAprovacao: [formValue.idAprovacao],
            tipoData: [formValue.tipoData, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            dtInicial: [
                formValue.dtInicial
                    ? formValue.dtInicial
                    : this.dateService.getFirstDayMonth(),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            dtFinal: [
                formValue.dtFinal
                    ? formValue.dtFinal
                    : this.dateService.getLastDayMonth(),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            numPedido: [formValue.numPedido],
            nomeSolicitante: [formValue.nomeSolicitante],
            gerenciaSolicitante: [formValue.gerenciaSolicitante],
            empresa: [formValue.empresa, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            codSituacao: [formValue.codSituacao],
            cliente: [formValue.cliente],
            linhaPredominante: [formValue.linhaPredominante],
            descObs: [formValue.descObs],
            excluiPedido: [formValue.excluiPedido],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            orderBy: this.orderBy,
            orderType: this.orderType,
        });
        this.checkValuesGerente();
        this.checkOrder();
    }
    checkRouterParams() {
        let formValue = {
            idAprovacao: null,
            tipoData: 1,
            dtInicial: this.dateService.getFirstDayMonth(),
            dtFinal: this.dateService.getLastDayMonth(),
            numPedido: null,
            nomeSolicitante: null,
            gerenciaSolicitante: null,
            empresa: null,
            codSituacao: 1,
            cliente: null,
            linhaPredominante: null,
            descObs: null,
            excluiPedido: null,
            orderBy: this.orderBy,
            orderType: this.orderType,
            pagina: 1,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams.q);
                params = JSON.parse(params);
                this.search(params);
                if (params['pagina']) {
                    this.currentPage = params['pagina'];
                }
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
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    convertDate(date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let d = date.getDate().toString().padStart(2, '0');
        return `${d}/${m}/${y}`;
    }
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
        }
    }
    setSolicitacaoSelecionada() {
        this.solicitacaoSelecionada = {
            idAprovacao: null,
            nomeVendedor: null,
            matrVendedor: null,
            gerenciaVendedor: null,
            idMotivoSolic: null,
            descMotivoSolic: null,
            tipoData: null,
            dataLancamento: null,
            statusItem: null,
            dtSolic: null,
            descSolic: null,
            codCli: null,
            razaoSocialCli: null,
            cnpjCli: null,
            dtInicial: null,
            dtFinal: null,
            dtAprov: null,
            descObs: null,
            matrUsuarioCad: null,
            dtPedido: null,
            nfPedido: null,
            formaPagtoPedido: null,
            enderecoPedido: null,
            depositoPedido: null,
            empresaPedido: null,
            situaPedido: null,
            nrPedido: null,
            valorPedido: null,
            pesoPedido: null,
            linhaPredominante: null,
            descUsuarioCad: null,
            dtInclusao: null,
        };
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
            }
            else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'ASC';
        }
        this.form.value.orderBy = this.orderBy;
        this.form.value.orderType = this.orderType;
        this.onFilter();
    }
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
            this.tipoDataControl = this.form.value.tipoData;
        }
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
    }
    verificaParams() {
        let params = {};
        if (this.form.value.idAprovacao) {
            params.idAprovacao = this.form.value.idAprovacao;
        }
        if (this.form.value.tipoData) {
            params.tipoData = this.form.value.tipoData;
        }
        if (this.form.value.dtInicial) {
            if (this.form.value.dtInicial instanceof Date) {
                params.dtInicial = this.convertDate(this.form.value.dtInicial);
            }
            else {
                params.dtInicial = this.form.value.dtInicial;
            }
        }
        if (this.form.value.dtFinal) {
            if (this.form.value.dtFinal instanceof Date) {
                params.dtFinal = this.convertDate(this.form.value.dtFinal);
            }
            else {
                params.dtFinal = this.form.value.dtFinal;
            }
        }
        if (this.form.value.numPedido) {
            params.numPedido = this.form.value.numPedido;
        }
        if (this.form.value.nomeSolicitante) {
            params.nomeSolicitante = this.form.value.nomeSolicitante;
        }
        if (this.form.value.gerenciaSolicitante) {
            params.gerenciaSolicitante = this.form.value.gerenciaSolicitante;
        }
        if (this.form.value.empresa) {
            params.empresa = this.form.value.empresa;
        }
        if (this.form.value.cliente) {
            params.cliente = this.form.value.cliente;
        }
        if (this.form.value.linhaPredominante) {
            params.linhaPredominante = this.form.value.linhaPredominante;
        }
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.detailPanelService.hide();
        this.liberacoesService
            .getSolicitacoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false) {
                    this.dadosEmpty = true;
                }
                else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                }
            },
            error: (error) => {
                this.dadosEmpty = true;
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
        for (let i = 0; i < this.totalItems; i++) { }
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onDetails(solicitacao) {
        this.loaderNavbar = true;
        this.loadingDetails = true;
        this.detailPanelService.show();
        this.setSolicitacaoSelecionada();
        this.solicitacaoSelecionada = solicitacao;
        this.motivos = [];
        this.comentario = null;
        this.loaderNavbar = false;
        this.detailPanelService.loadedFinished(false);
        this.liberacoesService
            .getMotivosTrava(solicitacao.nrPedido, solicitacao.codEmpresa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
                this.loadingDetails = false;
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    // Não está vazio.
                    this.detailPanelService.loadedFinished(false);
                    this.motivos = response.data.motivos;
                    this.comentario = response.data.detalhes[0].comentario;
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false) {
                    // Vazio.
                    this.detailPanelService.loadedFinished(true);
                }
                else {
                    // Vazio e com possível erro.
                    this.pnotifyService.error();
                    this.detailPanelService.loadedFinished(true);
                }
            },
            error: (error) => {
                // Vazio e com erro.
                this.detailPanelService.loadedFinished(true);
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onVisualizar(lista) {
        this.router.navigate(['../detalhes', lista.nrPedido, lista.codEmpresa], {
            relativeTo: this.activatedRoute,
        });
    }
    getPerfil() {
        this.liberacoesService
            .getPermissoesAcesso()
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.profile = response.data;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    getFilterValues() {
        this.loaderFullScreen = true;
        this.loaderNavbar = true;
        this.cotacoesService.getCotacaoFilterValues().subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
                this.form.controls.linhaPredominante.enable();
            }
        });
        this.formularioService
            .loadDependencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            this.empresas = response[1].result || [];
            this.form.controls.empresa.enable();
        });
        this.vendedoresService.getVendedores().subscribe((response) => {
            if (response.responseCode === 200) {
                this.vendedores = response.result;
                this.form.controls.nomeSolicitante.enable();
                this.vendedoresTotal = this.vendedores;
                this.vendedores.unshift({
                    id: '',
                    nome: 'EXIBIR TODOS',
                });
            }
        });
        this.escritoriosService.getEscritorios().subscribe((response) => {
            if (response.responseCode === 200) {
                this.escritorios = response.result;
                this.form.controls.gerenciaSolicitante.enable();
                this.escritorios.unshift({
                    codEscritorio: '',
                    nomeEscritorio: 'EXIBIR TODOS',
                });
            }
        });
    }
    loadingFilterValues() {
        this.form.controls.empresa.disable();
        this.form.controls.linhaPredominante.disable();
        this.form.controls.gerenciaSolicitante.disable();
        this.form.controls.nomeSolicitante.disable();
    }
    onChangeEscritorio(event, reset) {
        if (reset == true) {
            this.form.controls.nomeSolicitante.reset();
            this.form.controls.nomeSolicitante.setValue(0);
            this.vendedores = this.vendedoresTotal;
        }
        this.filteredVendedores = this.vendedores.filter((value) => value.idEscritorio == this.form.value.gerenciaSolicitante);
        this.filteredVendedores.unshift({
            id: '',
            nome: 'EXIBIR TODOS',
        });
        this.onChangeVendedores();
        if (this.form.value.gerenciaSolicitante == '') {
            this.vendedores = this.vendedoresTotal;
        }
    }
    onChangeVendedores() {
        this.vendedores = this.filteredVendedores;
    }
    checkValuesGerente() {
        if (this.form.value.gerenciaSolicitante !== '' &&
            this.form.value.gerenciaSolicitante !== null) {
            this.onChangeEscritorio(this.form.value.gerenciaSolicitante, false);
        }
    }
    openModal(template, lista, tipo) {
        if (tipo == 1) {
            if (lista.materiaisSemEstoque.length == 0) {
                this.loadingModal = true;
                this.setSolicitacaoSelecionada();
                this.solicitacaoSelecionada = lista;
                this.modalRef = this.modalService.show(template, {
                    animated: false,
                    class: 'modal-lg',
                });
            }
            else {
                this.pnotify.error('Solicitação possui materiais sem estoque');
            }
        }
        else {
            this.loadingModal = true;
            this.form.controls.descObs.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ]);
            this.form.controls.descObs.setValue(lista.comentario);
            this.form.controls.descObs.updateValueAndValidity();
            this.setSolicitacaoSelecionada();
            this.solicitacaoSelecionada = lista;
            this.modalRef = this.modalService.show(template, {
                animated: false,
                class: 'modal-lg',
            });
        }
    }
    hideModal() {
        this.modalRef.hide();
        this.form.controls.descObs.reset();
        this.form.controls.descObs.clearValidators();
        this.form.controls.descObs.updateValueAndValidity();
        this.form.controls.excluiPedido.reset();
        this.form.controls.excluiPedido.updateValueAndValidity();
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
        });
    }
    setParams(solicitacao) {
        let params = {};
        let exclui;
        if (this.form.value.excluiPedido == true) {
            exclui = 1;
        }
        else {
            exclui = 0;
        }
        params.descObs = this.form.value.descObs;
        params.excluiPedido = exclui;
        params.empresa = solicitacao.codEmpresa;
        params.nrPedido = solicitacao.nrPedido;
        return params;
    }
    requestSuccess(solicitacao) {
        const stat = 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_23__["EMPTY"];
            this.loaderNavbar = true;
            return this.liberacoesService.aprovaLiberacao(this.setParams(solicitacao));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["finalize"])(() => {
            this.loaderNavbar = false;
            this.hideModal();
            this.checkRouterParams();
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.onFilter();
        }, (error) => {
            this.pnotify.error('Erro ao aprovar a solicitação');
        });
    }
    requestFail(solicitacao) {
        const stat = 2;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_23__["EMPTY"];
            this.loaderNavbar = true;
            return this.liberacoesService.reprovaLiberacao(this.setParams(solicitacao));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_22__["finalize"])(() => {
            this.loaderNavbar = false;
            this.hideModal();
            this.checkRouterParams();
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.onFilter();
        }, (error) => {
            this.pnotify.error('Erro ao reprovar a solicitação');
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, 'Confirmar Aprovação', 'Deseja realmente aprovar a solicitação ?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm(null, 'Confirmar Reprovação', 'Deseja realmente reprovar a solicitação?', 'Cancelar', 'Confirmar');
    }
    classStatusBorder(lista) {
        let borderClass;
        if (lista.comentario != '') {
            borderClass = 'border-danger';
        }
        else if (lista.comentario == '' || lista.comentario == null) {
            borderClass = 'border-primary';
        }
        return borderClass;
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.dados.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Aprovacoes${dataExport}`);
    }
};
ComercialGestaoLiberacoesListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialGestaoLiberacoesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"] },
    { type: _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_17__["ComercialCicloVendasCotacoesFormularioService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ciclo_vendas_cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCicloVendasCotacoesService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"] },
    { type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_20__["EscritoriosService"] },
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesService"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__["BsModalService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
ComercialGestaoLiberacoesListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialGestaoLiberacoesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-gestao-liberacoes-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialGestaoLiberacoesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"],
        _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_17__["ComercialCicloVendasCotacoesFormularioService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _ciclo_vendas_cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCicloVendasCotacoesService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"],
        src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_20__["EscritoriosService"],
        _services_clientes_service__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesService"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__["BsModalService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], ComercialGestaoLiberacoesListaComponent);



/***/ }),

/***/ "azxt":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/liberacoes/lista/lista.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"LIBERAÇÕES COMERCIAIS\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loaderNavbar\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"tipoData\">Tipo de data</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"tipoData\"\n                formControlName=\"tipoData\"\n                [ngClass]=\"onFieldError('tipoData') + ' ' + onFieldRequired(form.controls.tipoData)\">\n                <option value=\"1\">Lançamento</option>\n                <option value=\"2\">Transferência</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('tipoData')\" message=\"Tipo de data é obrigatória\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"dtInicial\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dtInicial\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dtInicial\"\n                [ngClass]=\"onFieldError('dtInicial') + ' ' + onFieldRequired(form.controls.dtInicial)\">\n                <invalid-form-control [show]=\"onFieldInvalid('dtInicial')\" message=\"Data Inicial é obrigatória\"></invalid-form-control>\n              </div>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"dtFinal\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dtFinal\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dtFinal\"\n                [ngClass]=\"onFieldError('dtFinal') + ' ' + onFieldRequired(form.controls.dtFinal)\">\n                <invalid-form-control [show]=\"onFieldInvalid('dtFinal')\" message=\"Data Final é obrigatória\"></invalid-form-control>\n              </div>\n            </div>\n            <div class=\"form-group col-md-1 pl-0\">\n              <label for=\"numPedido\">N. Pedido</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"numPedido\"\n                formControlName=\"numPedido\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"gerenciaSolicitante\">Gerencia do Vendedor</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"escritorios\"\n                  labelForId=\"gerenciaSolicitante\"\n                  formControlName=\"gerenciaSolicitante\"\n                  placeholder=\"Selecione...\"\n                  bindValue=\"codEscritorio\"\n                  bindLabel=\"nomeEscritorio\"\n                  (change)=\"onChangeEscritorio($event.id, true)\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-md-3 pl-0\">\n              <label for=\"nomeSolicitante\">Vendedor</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"vendedores\"\n                  labelForId=\"nomeSolicitante\"\n                  formControlName=\"nomeSolicitante\"\n                  placeholder=\"Selecione...\"\n                  bindValue=\"id\"\n                  bindLabel=\"nome\"\n                  >\n                </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"empresa\">Empresa</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"empresas\"\n                  formControlName=\"empresa\"\n                  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n                  labelForId=\"empresa\"\n                  bindLabel=\"nomeEmpresa\"\n                  bindValue=\"idEmpresa\"\n                  [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired(form.controls.empresa)\">\n                </ng-select>\n                <invalid-form-control [show]=\"onFieldInvalid('empresa')\" message=\"Empresa é obrigatório\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"cliente\">\n                <span>Cliente </span>\n                <ng-template #tooltipLabelClienteTemplate>\n                  <p class=\"text-nowrap mb-0\">Código ou razão social</p>\n                  <p class=\"text-nowrap mb-0\">do Cliente</p>\n                </ng-template>\n                <i class=\"fa fa-question-circle\" [tooltip]=\"tooltipLabelClienteTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cliente\"\n                formControlName=\"cliente\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"linhaPredominante\">Linha Predominante</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"linhas\"\n                  formControlName=\"linhaPredominante\"\n                  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n                  labelForId=\"linhaPredominante\"\n                  bindLabel=\"descricao\"\n                  bindValue=\"id\"\n                >\n                </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"registros\">\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row text-center justify-content-center\" >\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-7': showDetailPanel}\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">  \n      <custom-table  [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" ></th>\n            <th scope=\"col\" >N. Pedido</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Escritório</th>\n            <th scope=\"col\" >Vendedor</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\" *ngIf=\"tipoDataControl == 1\" >Data da Lançamento</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\" *ngIf=\"tipoDataControl == 2\" >Data da Transferência</th>\n            <th scope=\"col\" >Cliente</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Valor</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Peso</th>\n            \n            <th scope=\"col\" style=\"width:40px\" ></th>\n            <th scope=\"col\" style=\"width:40px\" ></th>\n            <th scope=\"col\" style=\"width:40px\" ></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let lista of dadosPagination; let i = index\" [class.table-active]=\"lista.nrPedido == solicitacaoSelecionada.nrPedido\">\n            <td (click)=\"onDetails(lista)\" [ngClass]=\"classStatusBorder(lista)\">\n              <span class=\"mr-3\" tooltip=\"Retira\" placement=\"center\" *ngIf=\"lista.inRetira == 1\" >\n                <i class=\"fas fa-folder-open\"></i>\n              </span>\n            </td>\n            <td (click)=\"onDetails(lista)\" >{{ lista.nrPedido }}</td>\n            <td (click)=\"onDetails(lista)\" [hidden]=\"showDetailPanel\">{{ lista.escritorio | uppercase}}</td>\n            <td (click)=\"onDetails(lista)\" >{{ lista.vendedor | uppercase}}</td>\n            <td (click)=\"onDetails(lista)\" [hidden]=\"showDetailPanel\" *ngIf=\"tipoDataControl == 1\">{{ lista.dataLancamento | date:'dd/MM/yyyy HH:mm' }}</td>\n            <td (click)=\"onDetails(lista)\" [hidden]=\"showDetailPanel\" *ngIf=\"tipoDataControl == 2\">{{ lista.dataTransferencia | date:'dd/MM/yyyy HH:mm' }}</td>\n            <td (click)=\"onDetails(lista)\" >{{ lista.codCliente }} - {{ lista.razaoSocial }}</td>\n            <td (click)=\"onDetails(lista)\" [hidden]=\"showDetailPanel\">{{ lista.valorTotal | currency:'BRL':'symbol':'1.2-2'}}</td>\n            <td (click)=\"onDetails(lista)\" [hidden]=\"showDetailPanel\">{{ lista.pesoTotal }} To</td>\n            \n            <td>\n              <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" *ngIf=\"profile.liberacoesAdm || profile.liberacoesPadrao\"> \n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(aprovarSolicitacao, lista, 1)\">\n                  <i class=\" text-success fas fa-thumbs-up\"></i>\n                </button>\n              </span>\n            </td>\n            <td >\n              <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" *ngIf=\"profile.liberacoesAdm || profile.liberacoesPadrao\"> \n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(reprovarSolicitacao, lista, 2)\">\n                  <i class=\" text-danger fas fa-thumbs-down\"></i>\n                </button>\n              </span>\n            </td>\n            <td>\n              <span   tooltip=\"Detalhe da Solicitação\" placement=\"left\" container=\"body\" >\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onVisualizar(lista)\">\n                  <i class=\"fas fa-search\"></i>                  \n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel || viewHistorico\">\n      <detail-panel panelTitle=\"Aguardando Resposta\">\n        <div class=\"d-flex justify-content-center mb-3\" [hidden]=\"!loadingDetails\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n        <div class=\"text-center\" [hidden]=\"loadingDetails\">\n          <blockquote class=\"blockquote mx-5\">\n            <p class=\"text-primary mb-0\">Detalhes da trava</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                {{solicitacaoSelecionada?.dataLancamento | date: 'dd/MM/yyyy'}}\n              </small>\n            </footer>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                  <cite ><strong>Motivos Trava:</strong></cite>\n                  <div *ngFor=\"let itens of motivos\" class=\"ml-3\"> {{ itens.desTrava }} </div>\n              </small>\n            </footer>\n            <footer class=\"blockquote-footer\" *ngIf=\"comentario != ''\" >\n              <small class=\"text-muted\">\n                  <cite ><strong>Observação da Reprovação:</strong></cite>\n                  <div class=\"ml-3\" > {{ comentario }} </div>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n  <br>\n  <div class=\"text-center justify-content-center\" *ngIf=\"totalItems > itemsPerPage && !dadosEmpty\">\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n    <pagination\n      class=\"text-center justify-content-center\"\n      [maxSize]=\"10\"\n      [totalItems]=\"totalItems\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\">\n    </pagination>\n  </div>\n  <div class=\"text-center justify-content-center\">\n  <empty-result\n    message=\"Nenhuma informação encontrada\"\n    class=\"my-3 justify-content-center text-center\"\n    *ngIf=\"dadosEmpty\">\n  </empty-result>\n  </div>\n  <ng-template #aprovarSolicitacao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Observação de Aprovação #{{solicitacaoSelecionada?.nrPedido}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"descObs\" >Observação:</label>\n              <input \n                class=\"form-control\" \n                id=\"descObs\" \n                formControlName=\"descObs\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('descObs') + ' ' + onFieldRequired('form.controls.descObs')\">\n              \n              <invalid-form-control [show]=\"onFieldInvalid('descObs')\" message=\"Observação é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\">\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"requestSuccess(solicitacaoSelecionada)\"\n            [disabled]=\"form.valid === false || loaderNavbar === true\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-success fas fa-thumbs-up\"></i>\n            </span>Aprovar\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n   <ng-template #reprovarSolicitacao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Observação de Reprovação #{{solicitacaoSelecionada?.nrPedido}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"descObs\" >Observação:</label>\n              <input \n                class=\"form-control\" \n                id=\"descObs\" \n                formControlName=\"descObs\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('descObs') + ' ' + onFieldRequired('form.controls.descObs')\">\n              <invalid-form-control [show]=\"onFieldInvalid('descObs')\" message=\"Observação é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"checkbox\">\n            <label class=\"checkbox-inline\">\n              <input\n              type=\"checkbox\" \n              id=\"excluiPedido\"\n              formControlName=\"excluiPedido\"\n              > Excluir pedido\n            </label>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\">\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"requestFail(solicitacaoSelecionada)\"\n            [disabled]=\"form.valid === false || loaderNavbar === true\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\n            </span>Reprovar\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "hGBg":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/detalhes/detalhes-resolver.guard.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialLiberacoesDetalhesResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialLiberacoesDetalhesResolverGuard", function() { return ComercialLiberacoesDetalhesResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/liberacoes.service */ "kbUc");



// Services

let ComercialLiberacoesDetalhesResolverGuard = class ComercialLiberacoesDetalhesResolverGuard {
    constructor(liberacoesService) {
        this.liberacoesService = liberacoesService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.liberacoesService.getDetalhes(route.params.id, route.params.empresa);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: {
                idAprovacao: null,
                nomeVendedor: null,
                matrVendedor: null,
                gerenciaVendedor: null,
                idMotivoSolic: null,
                descMotivoSolic: null,
                tipoData: null,
                dataLancamento: null,
                statusItem: null,
                dtSolic: null,
                descSolic: null,
                codCli: null,
                razaoSocialCli: null,
                cnpjCli: null,
                dtInicial: null,
                dtFinal: null,
                dtAprov: null,
                descObs: null,
                matrUsuarioCad: null,
                dtPedido: null,
                nfPedido: null,
                formaPagtoPedido: null,
                enderecoPedido: null,
                depositoPedido: null,
                empresaPedido: null,
                situaPedido: null,
                numPedido: null,
                valorPedido: null,
                pesoPedido: null,
                linhaPredominante: null,
                descUsuarioCad: null,
                dtInclusao: null,
            },
        });
    }
};
ComercialLiberacoesDetalhesResolverGuard.ctorParameters = () => [
    { type: _services_liberacoes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoLiberacoesService"] }
];
ComercialLiberacoesDetalhesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_liberacoes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoLiberacoesService"]])
], ComercialLiberacoesDetalhesResolverGuard);



/***/ }),

/***/ "kbUc":
/*!************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/liberacoes/services/liberacoes.service.ts ***!
  \************************************************************************************/
/*! exports provided: ComercialGestaoLiberacoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoLiberacoesService", function() { return ComercialGestaoLiberacoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

//angular



let ComercialGestaoLiberacoesService = class ComercialGestaoLiberacoesService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/gestao/liberacoes`;
    }
    getSolicitacoes(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(nrPedido, codEmpresa) {
        return this.http
            .get(`${this.API}/detalhes/${nrPedido}/${codEmpresa}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postSolicitacoes(liberacao) {
        return this.http.post(`${this.API}/comercial/gestao/liberacoes`, liberacao, {
            observe: 'response',
        });
    }
    getPermissoesAcesso() {
        return this.http
            .get(`${this.API}/permissoes-acesso`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMotivosTrava(nrPedido, codEmpresa) {
        return this.http
            .get(`${this.API}/motivos-trava/${nrPedido}/${codEmpresa}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    aprovaLiberacao(params) {
        return this.http.post(`${this.API}/aprovacao`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    reprovaLiberacao(params) {
        return this.http.post(`${this.API}/reprovacao`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialGestaoLiberacoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialGestaoLiberacoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialGestaoLiberacoesService);



/***/ }),

/***/ "n1h9":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/liberacoes/detalhes/detalhes.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Detalhes do Pedido\">\n  <!-- <button\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postMovimentacoes()\"\n    >\n    Salvar\n  </button> -->\n  <button\n  type=\"button\"\n  (click) = \"onVoltar()\"\n  >\n  Voltar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div [hidden] = \"loaderFullScreen\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <hr class=\"mt-0 mb-4\">\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-4\">\n          <label>Vendedor</label>\n          <div>{{ solicitacao?.vendedor }}</div>\n        </div>\n        <div class=\"form-group col-4\">\n          <label>Data da solicitação</label>\n          <div>{{ solicitacao?.dataCriacao | date: 'dd/MM/yyyy' }}</div>\n        </div>\n        <div class=\"form-group col-4\" style=\"color: rgb(200, 0, 0);\">\n          <label>Motivos da Trava</label>\n          <div *ngFor=\"let item of solicitacao?.motivoTrava\">- {{ item.desTrava}} </div>\n        </div>\n      </div>\n      <hr>\n    </div>\n    <div class=\"col-12\" >\n      <label><strong>DADOS DO CLIENTE</strong></label>\n      <div class=\"form-row justify-content-center \">\n        <div class=\"form-group col-lg-2\">\n          <label>Cód. Cliente</label>\n          <div *ngIf=\"solicitacao?.codCliente == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.codCliente != null\">{{ solicitacao?.codCliente}}</div>\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label>Razão Social</label>\n          <div *ngIf=\"solicitacao?.razaoSocial == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.razaoSocial != null\">{{ solicitacao?.razaoSocial}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\" *ngIf=\"solicitacao?.tipoPessoa == 'J'\">\n          <label >CNPJ</label>\n          <div *ngIf=\"solicitacao?.cpfCnpj == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.cpfCnpj != null\"> {{ solicitacao?.cpfCnpj }}</div>\n        </div>\n        <div class=\"form-group col-lg-2\" *ngIf=\"solicitacao?.tipoPessoa == 'F'\">\n          <label>CPF</label>\n          <div *ngIf=\"solicitacao?.cpfCnpj == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.cpfCnpj != null\"> {{solicitacao?.cpfCnpj}}</div>\n        </div>\n        <div class=\"form-group col-lg-2 align-items-center text-right\">\n          <a\n          target=\"_blank\"\n          class=\"btn btn-default btn-lg m-2 \"\n          [routerLink]=\"['/comercial/clientes/historico-financeiro', solicitacao?.codCliente]\"\n          tooltip=\"Abrir Histórico Financeiro\"\n        >\n          <span aria-hidden=\"true\">\n           <i class=\" text-success fas fa-dollar-sign\"></i>\n          </span>Histórico Financeiro\n        </a>\n        </div>\n        <div class=\"form-group col-lg-2 align-items-center text-right\">\n          <a\n          target=\"_blank\"\n          class=\"btn btn-default btn-lg m-2 \"\n          (click)=\"openModal(detalhesCliente )\"\n          tooltip=\"Visualizar Detalhes do Cliente\"\n        >\n          <span aria-hidden=\"true\">\n           <i class=\" text-primary fas fa-user\"></i>\n          </span>Detalhes do Cliente\n        </a>\n        </div>\n      </div>\n      <hr>\n    </div>\n    <div class=\"col-12\">\n      <label><strong>DADOS DO PEDIDO</strong></label>\n      <div class=\"form-row justify-content-start \">\n        <div class=\"form-group col-lg-2\">\n          <label>Nº Pedido</label>\n          <div *ngIf=\"solicitacao?.nrPedido == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.nrPedido != null\">{{solicitacao?.nrPedido}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Data da Entrega</label>\n          <div *ngIf=\"solicitacao?.dataEntrega == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.dataEntrega != null\"> {{solicitacao?.dataEntrega | date: 'dd/MM/yyyy' }}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Empresa</label>\n          <div *ngIf=\"solicitacao?.nomeEmpresa == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.nomeEmpresa != null\"> {{solicitacao?.nomeEmpresa}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Nota Fiscal Mãe</label>\n          <div *ngIf=\"solicitacao?.nfMae == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.nfMae != null\"> {{solicitacao?.nfMae}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Forma de Pagamento</label>\n          <div *ngIf=\"solicitacao?.formaPagamento == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.formaPagamento != null\"> {{solicitacao?.formaPagamento}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Linha Predominante</label>\n          <div *ngIf=\"solicitacao?.linha == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.linha != null\">{{solicitacao?.linha}}</div>\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label>Local de Entrega</label>\n          <div *ngIf=\"solicitacao?.enderecoEntrega == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.enderecoEntrega != null\"> {{solicitacao?.enderecoEntrega}}</div>\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label>UF de Entrega</label>\n          <div *ngIf=\"solicitacao?.ufEntrega == null\">NÃO INFORMADO</div>\n          <div *ngIf=\"solicitacao?.ufEntrega != null\"> {{solicitacao?.ufEntrega}}</div>\n        </div>\n      </div>\n    </div>\n      <hr>\n    <div class=\"col-12\" *ngIf=\"solicitacao?.materiais.length > 0\" >\n      <label><strong>MATERIAIS DO PEDIDO</strong></label>\n        <div *ngFor=\"let item of solicitacao?.materiais; let i = index\">\n          <div class=\"border border-success rounded p-2 mb-1\">\n            <label><strong>ITEM: {{ i + 1}}</strong></label><br>\n            <div class=\"form-row justify-content-start\">\n              <div class=\"form-group col-lg-4\">\n                <label>Material</label>\n                <div>{{item?.codMaterial}} - {{item?.nomeMaterial}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Valor Unitário</label>\n                <div>\n                  <span class=\"mr-2\">{{ item?.valorUnitarioMaterial | currency:'BRL':'symbol':'1.2-2' }}</span>\n                  <i\n                    *ngIf=\"item?.variacaoPreco !== 0\"\n                    [ngClass]=\"classVariacaoPreco(item.variacaoPreco)\"\n                    [tooltip]=\"formatVariacaoPreco(item.variacaoPreco)\">\n                  </i>\n                </div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Peso</label>\n                <div>{{item?.pesoTotalMaterial}} {{item?.UnidadeMedida}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>ICMS</label>\n                <div>{{item?.vrPercentualIcmsMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>IPI</label>\n                <div>{{item?.vrPercentualIpiMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Custo</label>\n                <div>{{item?.valorCustoMaterial | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>% MC</label>\n                <div>{{item?.porcMcMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Valor Total</label>\n                <div>{{item?.valorTotalMaterial | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n            </div>\n            <div class=\"form-row justify-content-start\">\n              <div class=\"form-group col-lg-2\">\n                <label>Margem de Lucro</label>\n                <div>{{item?.valorMargemLucroMaterial | currency:'BRL':'symbol':'1.2-2'}} / {{item?.porcMargemLucroMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Preço Mínimo</label>\n                <div>{{item?.precoMinimoMaterial | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Estoque Atual</label>\n                <div>{{item?.EstoqueAtual}} To</div>\n              </div>\n            </div>\n            <label><strong>DETALHES DA ÚLTIMA VENDA:</strong></label><br>\n            <div class=\"form-row justify-content-start\" *ngIf=\"item?.nrPedidoUltimaVendaMaterial != null\">\n              <div class=\"form-group col-lg-1\">\n                <label>Nº Pedido</label>\n                <div>{{item?.nrPedidoUltimaVendaMaterial}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Data</label>\n                <div>{{item?.dataUltimaVendaMaterial | date: 'dd/MM/yyyy' }}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Valor Unitário</label>\n                <div>{{item?.valorUnitarioUltimaVenda | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Peso</label>\n                <div>{{item?.qtdeToneladasUltimaVenda}} {{item?.UnidadeMedida}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Empresa</label>\n                <div>{{item?.nomeEmpresaUltimaVenda}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Forma de pagamento</label>\n                <div>{{item?.formaPagamentoUltimaVenda}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\" *ngIf=\"item?.mediaDiasFormaPagamentoUltimaVenda != null\" >\n                <label>Média de dias</label>\n                <div>{{item?.mediaDiasFormaPagamentoUltimaVenda}} dias</div>\n              </div>\n            </div>\n            <div class=\"form-row justify-content-start\" *ngIf=\"item?.nrPedidoUltimaVendaMaterial == null\">\n              <div class=\"form-group col-lg-3\">\n                Primeiro pedido desse material.\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"col-12\" *ngIf=\"solicitacao?.materiaisSemEstoque.length > 0\" >\n      <label><strong>MATERIAIS DO PEDIDO - SEM ESTOQUE</strong></label>\n        <div *ngFor=\"let item of solicitacao?.materiaisSemEstoque; let j = index\">\n          <div class=\"border border-danger rounded p-2 mb-1\">\n            <label><strong>ITEM: {{ j + 1}}</strong></label><br>\n            <div class=\"form-row justify-content-start\">\n              <div class=\"form-group col-lg-4\">\n                <label>Material</label>\n                <div>{{item?.codMaterial}} - {{item?.nomeMaterial}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Valor Unitário</label>\n                <div>\n                  <span class=\"mr-2\">{{ item?.valorUnitarioMaterial | currency:'BRL':'symbol':'1.2-2' }}</span>\n                  <i\n                    *ngIf=\"item?.variacaoPreco !== 0\"\n                    [ngClass]=\"classVariacaoPreco(item.variacaoPreco)\"\n                    [tooltip]=\"formatVariacaoPreco(item.variacaoPreco)\">\n                  </i>\n                </div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Peso</label>\n                <div>{{item?.pesoTotalMaterial}} {{item?.UnidadeMedida}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>ICMS</label>\n                <div>{{item?.vrPercentualIcmsMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>IPI</label>\n                <div>{{item?.vrPercentualIpiMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Custo</label>\n                <div>{{item?.valorCustoMaterial | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>% MC</label>\n                <div>{{item?.porcMcMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Valor Total</label>\n                <div>{{item?.valorTotalMaterial | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n            </div>\n            <div class=\"form-row justify-content-start\">\n              <div class=\"form-group col-lg-2\">\n                <label>Margem de Lucro</label>\n                <div>{{item?.valorMargemLucroMaterial | currency:'BRL':'symbol':'1.2-2'}} / {{item?.porcMargemLucroMaterial}} %</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Preço Mínimo</label>\n                <div>{{item?.precoMinimoMaterial | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Estoque Atual</label>\n                <div>{{item?.EstoqueAtual}} To</div>\n              </div>\n            </div>\n            <label><strong>DETALHES DA ÚLTIMA VENDA:</strong></label><br>\n            <div class=\"form-row justify-content-start\" *ngIf=\"item?.nrPedidoUltimaVendaMaterial != null\">\n              <div class=\"form-group col-lg-1\">\n                <label>Nº Pedido</label>\n                <div>{{item?.nrPedidoUltimaVendaMaterial}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Data</label>\n                <div>{{item?.dataUltimaVendaMaterial | date: 'dd/MM/yyyy' }}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Valor Unitário</label>\n                <div>{{item?.valorUnitarioUltimaVenda | currency:'BRL':'symbol':'1.2-2'}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label>Peso</label>\n                <div>{{item?.qtdeToneladasUltimaVenda}} {{item?.UnidadeMedida}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Empresa</label>\n                <div>{{item?.nomeEmpresaUltimaVenda}}</div>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label>Forma de pagamento</label>\n                <div>{{item?.formaPagamentoUltimaVenda}}</div>\n              </div>\n              <div class=\"form-group col-lg-1\" *ngIf=\"item?.mediaDiasFormaPagamentoUltimaVenda != null\" >\n                <label>Média de dias</label>\n                <div>{{item?.mediaDiasFormaPagamentoUltimaVenda}} dias</div>\n              </div>\n            </div>\n            <div class=\"form-row justify-content-start\" *ngIf=\"item?.nrPedidoUltimaVendaMaterial == null\">\n              <div class=\"form-group col-lg-3\">\n                Primeiro pedido desse material.\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"col-12\" *ngIf=\"solicitacao?.totais.length > 0\">\n      <label><strong>TOTAIS</strong></label>\n      <div class=\"form-row justify-content-start \">\n        <div class=\"form-group col-lg-1\">\n          <label>Peso</label>\n          <div>{{solicitacao?.totais[0].qtdeToneladas}} To</div>\n        </div>\n        <div class=\"form-group col-lg-1\">\n          <label>ICMS</label>\n          <div>{{solicitacao?.totais[0].vrPercentualIcmsProposta}} %</div>\n        </div>\n        <div class=\"form-group col-lg-1\">\n          <label>IPI</label>\n          <div>{{solicitacao?.totais[0].vrPercentualIpiProposta}} %</div>\n        </div>\n        <div class=\"form-group col-lg-1\">\n          <label>Média % MC</label>\n          <div>{{solicitacao?.totais[0].porcMcProposta}} %</div>\n        </div>\n        <div class=\"form-group col-lg-1\">\n          <label>Valor</label>\n          <div>{{solicitacao?.totais[0].valorPedido | currency:'BRL':'symbol':'1.2-2'}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Margem de Lucro</label>\n          <div>{{solicitacao?.totais[0].valorMargemLucroProposta | currency:'BRL':'symbol':'1.2-2'}}</div>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label>Média Margem de Lucro</label>\n          <div>{{solicitacao?.totais[0].porcMargemLucroProposta}} %</div>\n        </div>\n      </div>\n    </div>\n    <hr>\n    \n    <div class=\"col-12\" *ngIf=\"profile.liberacoesAdm || profile.liberacoesPadrao\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-group col-12\">\n          <label for=\"descObs\">Observação:</label>\n          <input\n            class=\"form-control\"\n            id=\"descObs\"\n            formControlName=\"descObs\" \n            placeholder=\"Digite...\"\n            [ngClass]=\"onFieldError('descObs') + ' ' + onFieldRequired('form.controls.descObs')\">\n          <invalid-form-control [show]=\"onFieldInvalid('descObs')\" message=\"Descrição é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n        </div>\n        <div class=\"checkbox col-1\">\n          <label class=\"checkbox-inline\">\n            <input\n            type=\"checkbox\" \n            id=\"excluiPedido\"\n            formControlName=\"excluiPedido\"\n            > Excluir pedido\n          </label>\n        </div>\n      </form>  \n      <div class=\"form-row justify-content-center\">\n        <button\n          type=\"button\"\n          class=\"btn btn-default btn-lg mx-1\"\n          (click)=\"requestSuccess(solicitacao)\"\n          [disabled]=\"_materiaisSemEstoqueEmpty === false || form.value.excluiPedido == true\">\n          <span aria-hidden=\"true\">\n          <i class=\" text-success fas fa-thumbs-up\"></i>\n          </span>Aprovar\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-default btn-lg mx-1\"\n          (click)=\"requestFail(solicitacao)\"\n          [disabled]=\"loaderNavbar === true || form.valid === false\">\n          <span aria-hidden=\"true\">\n          <i class=\" text-danger fas fa-thumbs-down\"></i>\n          </span>Reprovar\n        </button>\n      </div>\n    </div>\n  </div>\n  <ng-template #detalhesCliente>\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Detalhes do Cliente</h4>\n        <div class=\"d-flex justify-content-center align-items-center\">\n          <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingDetalhes\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col\" *ngIf=\"!loadingDetalhes\">\n            <div class=\"form-row\" >\n              <div class=\"form-group col-lg-8\">\n                <label>Nome fantasia</label>\n                <div *ngIf=\"cliente.nomeFantasia == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.nomeFantasia != null\">{{ cliente.nomeFantasia }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\" *ngIf=\"cliente.tipoPessoa == 'F'\">\n                <label>CPF</label>\n                <div *ngIf=\"cliente.cpf == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.cpf != null\">{{ cliente.cpf }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\" *ngIf=\"cliente.tipoPessoa == 'J'\">\n                <label>CNPJ</label>\n                <div *ngIf=\"cliente.cnpj == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.cnpj != null\">{{ cliente.cnpj }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <label>Razão social</label>\n                <div *ngIf=\"cliente.razaoSocial == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.razaoSocial != null\">{{ cliente.razaoSocial }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <label>Endereço</label>\n                <div *ngIf=\"cliente.endereco == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.endereco != null\">{{ cliente.endereco }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-8\">\n                <label>Bairro</label>\n                <div *ngIf=\"cliente.bairro == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.bairro != null\">{{ cliente.bairro }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\">\n                <label>CEP</label>\n                <div *ngIf=\"cliente.cep == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.cep != null\">{{ cliente.cep }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-8\">\n                <label>Cidade</label>\n                <div *ngIf=\"cliente.cidade == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.cidade != null\">{{ cliente.cidade }} / {{ cliente.uf }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\">\n                <label>Segurado</label>\n                <div *ngIf=\"cliente.segurado != ''\">SIM</div>\n                <div *ngIf=\"cliente.segurado == ''\">NÃO</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-8\">\n                <label>Vendedor</label>\n                <div *ngIf=\"cliente.vendedor == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.vendedor != null\">{{ cliente.vendedor }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\">\n                <label>Escritório</label>\n                <div *ngIf=\"cliente.escritorio == null\">NÃO INFORMADO</div>\n                <div *ngIf=\"cliente.escritorio != null\">{{ cliente.escritorio }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-4\" *ngIf=\"cliente.codSAP != '' && cliente.codSAP != null\">\n                <label>Código DBA</label>\n                <div>{{ cliente.codSAP }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\" *ngIf=\"cliente.escritorioDba != '' && cliente.escritorioDba != null\">\n                <label>Escritório</label>\n                <div>{{ cliente.escritorioDba }}</div>\n              </div>\n              <div class=\"form-group col-lg-4\" *ngIf=\"cliente.ultimaCompraDba != '' && cliente.ultimaCompraDba != null\">\n                <label>Última compra</label>\n                <div>{{ cliente.ultimaCompraDba }}</div>\n              </div>\n            </div>\n          </div>\n          <div [hidden]=\"!loadingDetalhes\" class=\"col-lg-12 text-muted \">\n            <p><strong>Buscando os detalhes do cliente...</strong></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</app-body>\n");

/***/ })

}]);
//# sourceMappingURL=liberacoes-liberacoes-module-es2015.js.map