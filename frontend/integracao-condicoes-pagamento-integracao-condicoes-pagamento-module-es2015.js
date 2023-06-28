(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integracao-condicoes-pagamento-integracao-condicoes-pagamento-module"],{

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

/***/ "PlkM":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/services/associacao-condicoes-pagamento.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento", function() { return ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tid-software/tid-software.service */ "zN97");





let ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento = class ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getAssociacoes(param) {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/dagda/condicao-pagamento`, {
            params: param,
            observe: 'response',
        });
    }
    getCondicoesPagamentoDagda() {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/dagda/condicao-pagamento-dagda`, {
            observe: 'response',
        });
    }
    getCondicoesPagamentoTid() {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/dagda/condicao-pagamento-tid`, {
            observe: 'response',
        });
    }
    createAssociacao(param) {
        return this.http.post(`${this.BASE_URL}/comercial/integracoes/dagda/condicao-pagamento`, param, {
            observe: 'response',
        });
    }
    getDetalhes(param) {
        return [
            {
                codigoTid: param.codigoTid,
                descricaoTid: 'Descrição Tid ' + param.codigoTid,
                codigoDagda: param.codigoTid,
                descricaoDagda: 'Descrição Dagda ' + param.codigoTid,
            },
        ];
    }
    getAss(param) {
        return [
            {
                codigoTid: '100',
                descricaoTid: 'Pagamento a Vista',
                codigoDagda: '999',
                descricaoDagda: 'Pagamento na hora',
            },
        ];
    }
    oonSubmit(param) {
        if (param.codigoMaterial) {
            return this.http.post(`${this.BASE_URL}/comercial/integracoes/dagda/associacao`, param, { observe: 'response' });
        }
        else {
            return this.http.post(`${this.BASE_URL}/comercial/integracoes/dagda/associacao-altera-integracao`, param, { observe: 'response' });
        }
    }
    deleteAssociacao(param) {
        return this.http.post(`${this.BASE_URL}/comercial/integracoes/dagda/delete-associacao`, param, { observe: 'response' });
    }
};
ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_3__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_4__["ComercialTidSoftwareService"] }
];
ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_3__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_4__["ComercialTidSoftwareService"]])
], ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento);



/***/ }),

/***/ "QcJJ":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/integracao-condicoes-pagamento.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule", function() { return ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _integracao_condicoes_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./integracao-condicoes-pagamento-routing.module */ "n/cO");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lista/lista.component */ "iwQX");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formulario/formulario.component */ "ftdt");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../cadastros/materiais/templates/templates.module */ "11Wi");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../templates/templates.module */ "EaA3");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");















let ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule = class ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule {
};
ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__["ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["TemplatesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["ComercialIntegracoesDagdaMateriaisTemplatesModule"],
            _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosMateriaisTemplatesModule"],
            _integracao_condicoes_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule"],
        ],
    })
], ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoModule);



/***/ }),

/***/ "XqHA":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/formulario/formulario.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2RhZ2RhL2ludGVncmFjYW8tY29uZGljb2VzLXBhZ2FtZW50by9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dqtc":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/lista/lista.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-secondary {\n  border-color: #929090 !important;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvaW50ZWdyYWNvZXMvZGFnZGEvaW50ZWdyYWNhby1jb25kaWNvZXMtcGFnYW1lbnRvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsd0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2RhZ2RhL2ludGVncmFjYW8tY29uZGljb2VzLXBhZ2FtZW50by9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItc2Vjb25kYXJ5IHtcclxuICBib3JkZXItY29sb3I6IHJnYigxNDYsIDE0NCwgMTQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ftdt":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/formulario/formulario.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent", function() { return ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "zpko");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "XqHA");
/* harmony import */ var _services_associacao_condicoes_pagamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/associacao-condicoes-pagamento.service */ "PlkM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");











let ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent = class ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent {
    constructor(activatedRoute, formBuilder, dateService, route, pnotify, location, associacaoService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.route = route;
        this.pnotify = pnotify;
        this.location = location;
        this.associacaoService = associacaoService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = this.currentUser['info']['matricula'];
        this.spinnerFullScreen = true;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.data = new Date();
        this.validForm = false;
        this.showTable = false;
        this.buttonAssosiarEnabled = false;
        this.isFieldValid = false;
        this.associacao = {
            codTid: null,
            descTid: null,
            codDagda: null,
            descDagda: null,
        };
        this.condicoesDagda = [];
        this.condicoesTid = [];
        this.appTitle = 'Cadastro de Associação';
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: false,
        };
    }
    ngOnInit() {
        this.spinnerFullScreen = false;
        this.setBreadCrumb();
        this.setFormBuilder();
        this.getCondicoesPagamentoDagda();
        this.getCondicoesPagamentoTid();
    }
    // Função que preenche as condições de pagamento Dagda
    getCondicoesPagamentoDagda() {
        this.associacaoService
            .getCondicoesPagamentoDagda()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.condicoesDagda = response.body['data'];
                }
            },
            error: (error) => this.pnotify.error(),
        });
    }
    // Função que preenche as condições de pagamento Tid
    getCondicoesPagamentoTid() {
        this.associacaoService
            .getCondicoesPagamentoTid()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.condicoesTid = response.body['data'];
                }
            },
            error: (error) => this.pnotify.notice('Nenhum resgistro foi encontrado!'),
        });
    }
    setFormBuilder() {
        let detalhes = {};
        // Verifica se há 'id' no parametro da url, se sim inicia com os dados desse id no formBuilder
        if (this.activatedRoute.snapshot.params.id) {
            detalhes = this.fillForm(this.activatedRoute.snapshot.params.id);
        }
        else {
            detalhes = [
                {
                    codigoTid: null,
                    descricaoTid: null,
                    codigoDagda: null,
                    descricaoDagda: null,
                },
            ];
        }
        this.form = this.formBuilder.group({
            codigoTid: [detalhes[0].codigoTid, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            codigoDagda: [detalhes[0].codigoDagda, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            descTid: [detalhes[0].descricaoTid],
            descDagda: [detalhes[0].descricaoDagda],
            matricula: this.matricula,
        });
        if (this.activatedRoute.snapshot.params.id) {
            this.isFieldValid = true;
            this.onAssociarCondicoesPagamento();
        }
    }
    // Preenche o form com os dados do id passado
    fillForm(id) {
        return this.associacaoService.getAss(id);
    }
    // Verifica se o form é válido
    checkValidForm() {
        if (this.form.valid) {
            this.buttonAssosiarEnabled = true;
        }
        else {
            this.validForm = false;
        }
    }
    // Seta no form a descrição Tid
    changeTid(event) {
        this.form.get('descTid').setValue(event.descricao);
    }
    // Seta no form a descrição Degda
    changeDagda(event) {
        this.form.get('descDagda').setValue(event.descricao);
    }
    // Ao clicar no botão de associar cria a associação (visualmente)
    onAssociarCondicoesPagamento() {
        if (!this.form.valid) {
            this.pnotify.error('Não foi possivel realizar esta associação');
            return;
        }
        this.validForm = true;
        this.showTable = true;
        this.buttonAssosiarEnabled = false;
        this.associacao.codTid = this.form.value.codigoTid;
        this.associacao.descTid = this.form.value.descTid;
        this.associacao.codDagda = this.form.value.codigoDagda;
        this.associacao.descDagda = this.form.value.descDagda;
        this.isFieldValid = true;
    }
    // Desfaz uma associação (visualmente)
    deleteAssosiacao() {
        console.log(this.associacao);
        this.validForm = false;
        this.showTable = false;
        this.buttonAssosiarEnabled = false;
        this.associacao.codTid = null;
        this.associacao.descTid = null;
        this.associacao.codDagda = null;
        this.associacao.descDagda = null;
        this.isFieldValid = false;
        this.form.get('codigoDagda').reset();
        this.form.get('codigoTid').reset();
    }
    onCancel() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.route.navigate([`/comercial/integracoes/dagda/${id}/integracao-condicao-pagamento`], {
            relativeTo: this.activatedRoute,
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/comercial/home`,
            },
            {
                descricao: 'Integração Dagda',
                routerLink: `/comercial/integracoes/dagda/${id}`,
            },
            {
                descricao: 'Condições de Pagamento',
                routerLink: `/comercial/integracoes/dagda/${id}/integracao-condicao-pagamento`,
            },
            {
                descricao: this.appTitle,
            },
        ];
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
                if (_obj[prop] instanceof Array)
                    _params[prop] = _obj[prop].toString();
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onSubmit() {
        this.spinnerFullScreen = true;
        this.associacaoService.createAssociacao(this.getParams()).subscribe({
            next: (response) => {
                console.log(response);
                if (response.status == 200) {
                    this.spinnerFullScreen = false;
                    this.pnotify.success(response.body['mensagem']);
                    this.location.back();
                    return;
                }
            },
            error: (error) => this.pnotify.error(),
        });
    }
    onLoaderNavbar(event) {
        this.loaderNavbar = event;
    }
};
ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _services_associacao_condicoes_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento"] }
];
ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _services_associacao_condicoes_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento"]])
], ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent);



/***/ }),

/***/ "iwQX":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/lista/lista.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent", function() { return ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "nOYG");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "dqtc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../shared/services/core/router.service */ "w8rm");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_associacao_condicoes_pagamento_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/associacao-condicoes-pagamento.service */ "PlkM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");















let ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent = class ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent {
    constructor(formBuilder, activatedRoute, dateService, localeService, routerService, pnotify, route, detailPanelService, associacaoService, confirmModalService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.localeService = localeService;
        this.routerService = routerService;
        this.pnotify = pnotify;
        this.route = route;
        this.detailPanelService = detailPanelService;
        this.associacaoService = associacaoService;
        this.confirmModalService = confirmModalService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idMtcorp = this.currentUser['info']['id'];
        this.spinnerFullScreen = true;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.items = [];
        this.data = new Date();
        this.dadosEmpty = false;
        this.dadosEmptyDetalhes = false;
        this.dadosLoaded = false;
        this.showTable = false;
        this.itemSelecionado = {
            codigoTid: null,
            descricaoTid: null,
            codigoDagda: null,
            descricaoDagda: null,
        };
        this.isDetailOpen = false;
        this.appTitle = 'Integração de Condições de Pagamentos';
        this.panelTitle = 'Associações';
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage;
        this.orderBy = 'codigoTid';
        this.orderType = 'DESC';
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.showDetailPanel = false;
        this.localeService.use('pt-br');
        this.form = this.formBuilder.group({
            codigoTid: [null],
            descricaoTid: [null],
            codigoDagda: [null],
            descricaoDagda: [null],
            registros: 10,
            pagina: this.currentPage,
            orderBy: this.orderBy,
            orderType: this.orderType,
            time: [new Date().getTime()],
        });
    }
    // Busca todas as associações
    getAssociacoes(params) {
        this.totalItems = 0;
        this.associacaoService
            .getAssociacoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.status != 200) {
                    this.dadosEmpty = true;
                    this.pnotify.notice('Nenhum resgistro foi encontrado!');
                    this.showTable = false;
                    return;
                }
                this.items = response.body['data'];
                this.totalItems = response.body['data'].length;
            },
            error: (error) => this.pnotify.error(),
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getActiveRoute();
        this.onSubscription();
    }
    ngOnDestroy() {
        this.$activateRoutedSubscription.unsubscribe();
        this.$showDetailPanelSubscription.unsubscribe();
    }
    onConfirmDelete(item) {
        this.confirmDelete()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => (result ? this.onDelete(item) : rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loaderNavbar = true;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.onFilter();
        }, (error) => {
            this.pnotify.error();
        });
    }
    onDelete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, item), { exclusao: 1 });
            this.associacaoService.createAssociacao(params).subscribe({
                next: (response) => {
                    console.log(response);
                    this.loaderNavbar = false;
                    if (response.status != 200) {
                        this.pnotify.notice('Ocorreu um erro ao realizar a associação!');
                        return;
                    }
                },
                error: (error) => this.pnotify.error(),
            });
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar Exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    onFilter() {
        this.showTable = true;
        this.form.get('time').setValue(new Date().getTime());
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        if (this.form.value['registros']) {
            this.itemsPerPage = this.form.value['registros'];
            this.end = this.form.value['registros'];
        }
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getActiveRoute() {
        this.spinnerFullScreen = true;
        this.$activateRoutedSubscription =
            this.activatedRoute.queryParams.subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    const _response = this.routerService.getBase64UrlParams(response);
                    this.form.patchValue(_response);
                }
                this.getAssociacoes(this.getParams());
                if (response.q) {
                    this.showTable = true;
                }
            });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/comercial/home`,
            },
            {
                descricao: 'Integração Dagda',
                routerLink: `/comercial/integracoes/dagda/${id}`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
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
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'desc') {
                this.orderType = 'asc';
            }
            else if (this.orderType == 'asc') {
                this.orderType = 'desc';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'asc';
        }
        this.form.get('orderBy').setValue(this.orderBy);
        this.form.get('orderType').setValue(this.orderType);
        this.onFilter();
    }
    onEdit(item) {
        this.route.navigate(['./', item.id], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(item),
        });
    }
    onSubscription() {
        this.$showDetailPanelSubscription =
            this.detailPanelService.config.subscribe((event) => {
                this.showDetailPanel = event.showing;
            });
    }
    onDetailPanel(item) {
        this.detailPanelService.show();
        this.itemSelecionado = item;
        this.dadosEmptyDetalhes = false;
        this.detailPanelService.loadedFinished(false);
        this.isDetailOpen = true;
    }
};
ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"] },
    { type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"] },
    { type: _services_associacao_condicoes_pagamento_service__WEBPACK_IMPORTED_MODULE_11__["ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"] }
];
ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"]],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"],
        _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"],
        _services_associacao_condicoes_pagamento_service__WEBPACK_IMPORTED_MODULE_11__["ComercialIntegracoesDagdaServicesAssociacaoCondicoesPagamento"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]])
], ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent);



/***/ }),

/***/ "n/cO":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/integracao-condicoes-pagamento-routing.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule", function() { return ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "iwQX");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "ftdt");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent"],
    },
    {
        path: ':id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoFormularioComponent"],
    },
    {
        path: '**',
        component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule = class ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule {
};
ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialIntegracoesDagdaIntegracaoCondicoesPagamentoRoutingModule);



/***/ }),

/***/ "nOYG":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/lista/lista.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"spinnerFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button type=\"button\" [routerLink]=\"['../novo']\">Adicionar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" *ngIf=\"dadosLoaded\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"de\">\r\n                <span class=\"mr-1\">Código TID</span>\r\n              </label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                formControlName=\"codigoTid\"\r\n                (keydown.enter)=\"onFilter()\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"de\">\r\n                <span class=\"mr-1\">Descrição TID</span>\r\n              </label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"descricaoTid\"\r\n                (keydown.enter)=\"onFilter()\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"de\">\r\n                <span class=\"mr-1\">Código DAGDA</span>\r\n              </label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                formControlName=\"codigoDagda\"\r\n                (keydown.enter)=\"onFilter()\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"de\">\r\n                <span class=\"mr-1\">Descrição DAGDA</span>\r\n              </label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"descricaoDagda\"\r\n                (keydown.enter)=\"onFilter()\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{ col: !showDetailPanel, 'col-7 pr-0': showDetailPanel }\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"showTable\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th></th>\r\n            <th class=\"text-nowrap text-center\">Cod. Tid</th>\r\n            <th class=\"text-nowrap text-center\">Descrição</th>\r\n            <th class=\"text-nowrap text-center\">Cod. Dagda</th>\r\n            <th class=\"text-nowrap text-center\">Descrição</th>\r\n            <th [hidden]=\"showDetailPanel\"></th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"let item of items | slice: begin:end; let i = index\"\r\n            [tooltip]=\"item.IN_STAT == 0 ? 'Editar' : ''\"\r\n            class=\"hover\"\r\n            [ngClass]=\"{\r\n              'table-active':\r\n                item.codigoTid == itemSelecionado.codigoTid &&\r\n                isDetailOpen == true\r\n            }\"\r\n          >\r\n            <td\r\n              class=\"text-nowrap text-center\"\r\n              [ngClass]=\"{\r\n                'border-success': item.IN_STAT == 1,\r\n                'border-danger': item.IN_STAT == 0\r\n              }\"\r\n            ></td>\r\n            <td class=\"text-nowrap text-center\">\r\n              {{ item.codigoTid }}\r\n            </td>\r\n            <td class=\"text-nowrap text-center\" style=\"width: 50rem\">\r\n              {{ item.descricaoTid | uppercase }}\r\n            </td>\r\n\r\n            <td class=\"text-nowrap text-center\">\r\n              {{ item.codigoDagda }}\r\n            </td>\r\n            <td class=\"text-nowrap text-center\" style=\"width: 50rem\">\r\n              {{ item.descricaoDagda | uppercase }}\r\n            </td>\r\n\r\n            <td style=\"width: 10rem\" [hidden]=\"showDetailPanel\"></td>\r\n            <!-- <td class=\"text-right px-0\" style=\"width: 10rem\">\r\n              <span\r\n                class=\"\"\r\n                [tooltip]=\"item.IN_STAT == 1 ? 'Inativar' : 'Ativar'\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  [style]=\"item.IN_STAT == 1 ? 'color: green;' : 'color: red;'\"\r\n                  (click)=\"onEditStatus(item)\"\r\n                  [disabled]=\"item.IN_STAT == null\"\r\n                >\r\n                  <i\r\n                    [ngClass]=\"\r\n                      item.IN_STAT == 1\r\n                        ? 'fas fa-toggle-on'\r\n                        : 'fas fa-toggle-off'\r\n                    \"\r\n                  ></i>\r\n                </button>\r\n              </span>\r\n            </td> -->\r\n            <td class=\"text-center px-0\" style=\"width: 4rem\">\r\n              <span tooltip=\"Excluir\" placement=\"left\" container=\"body\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  style=\"color: red\"\r\n                  (click)=\"onConfirmDelete(item)\"\r\n                >\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div\r\n        class=\"col-lg-12 mt-3 d-flex justify-content-center\"\r\n        *ngIf=\"dadosLoaded && showTable\"\r\n      >\r\n        <!-- Exibindo {{ itemsPerPage * (currentPage - 1) + 1 }} a\r\n        {{\r\n          currentPage * itemsPerPage > totalItems\r\n            ? totalItems\r\n            : currentPage * itemsPerPage\r\n        }}\r\n        de {{ totalItems }} -->\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty && !showTable\"\r\n      >\r\n      </empty-result>\r\n    </div>\r\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"panelTitle\">\r\n        <custom-table [hidden]=\"dadosEmptyDetalhes\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th class=\"text-center\">Cod. Dagda</th>\r\n              <th class=\"text-center\">Descrição</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr>\r\n              <td class=\"text-center\">{{ itemSelecionado.codigoDagda }}</td>\r\n              <td class=\"text-center nowrap\">\r\n                {{ itemSelecionado.descricaoDagda }}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmptyDetalhes\"\r\n        >\r\n        </empty-result>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "zpko":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/integracao-condicoes-pagamento/formulario/formulario.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"spinnerFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button type=\"button\" (click)=\"onCancel()\" [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!validForm || submittingForm\"\r\n  >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!spinnerFullScreen\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 d-flex flex-wrap\">\r\n        <!-- Ng Select TID -->\r\n\r\n        <div class=\"col-lg-6\">\r\n          <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <label for=\"codigoTid\"\r\n                  ><b>{{ 'Condição de Pagamento TID' | uppercase }}</b></label\r\n                >\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"codigoTid\"\r\n                  [items]=\"condicoesTid\"\r\n                  [loading]=\"condicoesTid.length <= 0\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"descricao\"\r\n                  bindValue=\"codFormaPagamento\"\r\n                  (change)=\"checkValidForm(); changeTid($event)\"\r\n                  formControlName=\"codigoTid\"\r\n                  [ngClass]=\"\r\n                    onFieldError('codigoTid') +\r\n                    ' ' +\r\n                    onFieldRequired('codigoTid')\r\n                  \"\r\n                  [readonly]=\"isFieldValid\"\r\n                >\r\n                </ng-select>\r\n                <invalid-form-control\r\n                  [show]=\"onFieldInvalid('codigoTid')\"\r\n                  message=\"Código Tid é obrigatório.\"\r\n                >\r\n                </invalid-form-control>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Ng Select DAGDA -->\r\n\r\n        <div class=\"col-lg-6 border-left\">\r\n          <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <label for=\"codigoDagda\"\r\n                  ><b>{{ 'Condição de Pagamento Dagda' | uppercase }}</b></label\r\n                >\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"codigoDagda\"\r\n                  placeholder=\"Selecione...\"\r\n                  [items]=\"condicoesDagda\"\r\n                  [loading]=\"condicoesDagda.length <= 0\"\r\n                  bindLabel=\"descricao\"\r\n                  bindValue=\"codFormaPagamento\"\r\n                  (change)=\"checkValidForm(); changeDagda($event)\"\r\n                  formControlName=\"codigoDagda\"\r\n                  [ngClass]=\"\r\n                    onFieldError('codigoDagda') +\r\n                    ' ' +\r\n                    onFieldRequired('codigoDagda')\r\n                  \"\r\n                  [readonly]=\"isFieldValid\"\r\n                >\r\n                </ng-select>\r\n                <invalid-form-control\r\n                  [show]=\"onFieldInvalid('codigoDagda')\"\r\n                  message=\"Código Dagda é obrigatório.\"\r\n                >\r\n                </invalid-form-control>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <!-- Tabela de assosiacao -->\r\n  <div class=\"row justify-content-center mt-4\">\r\n    <div class=\"col-lg-8 d-flex\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"d-flex justify-content-end mt-1 mb-1\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-sm btn-outline-primary\"\r\n            (click)=\"onAssociarCondicoesPagamento()\"\r\n            [disabled]=\"!buttonAssosiarEnabled\"\r\n          >\r\n            <i class=\"fas fa-exchange-alt\"></i>\r\n            <span>Associar</span>\r\n          </button>\r\n        </div>\r\n\r\n        <custom-table [config]=\"tableConfig\" [hidden]=\"!showTable\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"1\">Código TID</th>\r\n              <th scope=\"5\">Descrição TID</th>\r\n              <th scope=\"1\">Código Dagda</th>\r\n              <th scope=\"4\">Descrição Dagda</th>\r\n              <th scope=\"1\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr>\r\n              <td>{{ associacao.codTid }}</td>\r\n              <td>{{ associacao.descTid }}</td>\r\n              <td>{{ associacao.codDagda }}</td>\r\n              <td>{{ associacao.descDagda }}</td>\r\n              <td [hidden]=\"associacao.codDagda == null\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  style=\"color: red\"\r\n                  (click)=\"deleteAssosiacao()\"\r\n                >\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ })

}]);
//# sourceMappingURL=integracao-condicoes-pagamento-integracao-condicoes-pagamento-module-es2015.js.map