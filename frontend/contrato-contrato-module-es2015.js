(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contrato-contrato-module"],{

/***/ "Da5R":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/cadastro/cadastro.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosContratoCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosContratoCadastroComponent", function() { return TecnologiaInformacaoCadastrosContratoCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "Zwa6");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "xGKK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modelo/services/modelo.service */ "9Yla");
/* harmony import */ var _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../tipo-contrato/services/tipo-contrato.service */ "cy+q");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _services_contrato_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/contrato.service */ "Ztrz");
/* harmony import */ var src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/requests/moedas.service */ "zWKM");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-brazil */ "hTrW");



//Angular



//Services








//Bootstrap

//rxjs



let TecnologiaInformacaoCadastrosContratoCadastroComponent = class TecnologiaInformacaoCadastrosContratoCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, moedasService, localeService, confirmModalService, titleService, atividadesService, contratoService, tipoContratoService, modeloService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.moedasService = moedasService;
        this.localeService = localeService;
        this.confirmModalService = confirmModalService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.contratoService = contratoService;
        this.tipoContratoService = tipoContratoService;
        this.modeloService = modeloService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_17__["MASKS"];
        this.breadCrumbTree = [];
        this.formData = [];
        this.prefixoMoeda = '';
        this.compararData = null;
        //loading
        this.loading = true;
        this.loadingMoeda = false;
        this.loadingNavBar = false;
        this.anexosLoaded = false;
        //Interfaces
        this.modelo = [];
        this.moedas = [];
        this.tipoContrato = [];
        this.filiais = [];
        this.indices = [];
        this.documentos = [];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getTipoContrato();
        this.getMoedas();
        this.getContratoPai();
        this.getEmpresas();
        this.getIndices();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getTipoContrato(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.loadingTipoContrato = true;
        this.tipoContratoService
            .getTipoContrato(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingTipoContrato = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoContrato = response.body['data'];
            }
            else {
                this.tipoContrato = [];
            }
        }, (error) => {
            this.tipoContrato = [];
        });
    }
    getEmpresas() {
        this.loadingFiliais = true;
        this.contratoService
            .getEmpresas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filiais = response.body['data'];
                const params = this.activatedRoute.snapshot.params;
                if (!params.hasOwnProperty('id'))
                    return;
                this.getEmpresasAssoc({ ID_TECN_INFO_CONT: params.id });
            }
            else {
                this.filiais = [];
            }
        }, (error) => {
            this.pnotify.error('Erro ao carregar empresas');
            this.filiais = [];
        });
    }
    getEmpresasAssoc(params) {
        this.contratoService.getEmpresasAssoc(params).subscribe((response) => {
            if (response.status === 200) {
                const empresas = response.body['data'];
                let filiaisId = [];
                empresas.map((empresa) => {
                    const filial = this.filiais.filter((filial) => {
                        return (filial['CD_EMPR'] == empresa['CD_EMPR'] &&
                            filial['CD_FILI'] == empresa['CD_FILI']);
                    });
                    if (filial.length === 1) {
                        filiaisId.push(filial[0]['RAW']);
                    }
                });
                this.form.get('CD_EMPR').setValue(filiaisId);
            }
        });
    }
    getIndices(params) {
        this.loadingIndices = true;
        this.contratoService
            .getIndices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingIndices = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.indices = response.body['data'];
            }
            else {
                this.indices = [];
            }
        }, (error) => {
            this.indices = [];
            this.pnotify.error('Erro ao carregar indices');
        });
    }
    getMoedas(params) {
        this.loadingMoeda = true;
        this.moedasService
            .getMoedas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingMoeda = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.moedas = response.body['data'];
            }
        }, (error) => {
            this.moedas = [];
            this.pnotify.error('Erro ao carregar moedas');
        });
    }
    getModelo() {
        this.loadingModelo = true;
        this.modeloService
            .getModelo({ IN_STAT: '1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingModelo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.modelo = response.body['data'];
            }
            else {
                this.modelo = [];
            }
        }, (error) => {
            this.pnotify.error('Erro ao carregar modelos');
            this.modelo = [];
        });
    }
    getContrato(params) {
        this.loading = true;
        this.contratoService.getContrato(params).subscribe((response) => {
            if (response.status === 200) {
                this.loading = false;
                const _items = response.body['data'][0];
                _items.DT_INIC = new Date(_items.DT_INIC);
                _items.DT_VENC = new Date(_items.DT_VENC);
                _items.PRAZ_CANC = new Date(_items.PRAZ_CANC);
                this.form.patchValue(_items);
                this.setPrefixoMoeda(_items.PREF_MOED);
            }
            this.loading = false;
        }, (error) => {
            this.pnotify.error('Erro ao carregar Contratos');
            this.pnotify.error();
        });
    }
    getContratoPai(params) {
        this.contratoService.getContrato(params).subscribe((response) => {
            if (response.status === 200) {
                this.contratos = response.body['data'];
            }
        });
    }
    getDocumentos(params) {
        this.contratoService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentos = response.body['data'];
            }
            else {
                this.documentos = [];
            }
        }, (error) => {
            this.documentos = [];
        });
    }
    postContrato() {
        this.loadingNavBar = true;
        let _contrato = JSON.parse(JSON.stringify(this.form.value));
        _contrato['IN_ITEM_COMP'] = _contrato['IN_ITEM_COMP'] ? '1' : '0';
        this.contratoService.postContrato(_contrato).subscribe((response) => {
            if (response.status === 200) {
                const id = response.body['data'];
                this.form.get('ID_TECN_INFO_CONT').setValue(id);
                this.sendChilds();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.loadingNavBar = false;
            if (error.error.hasOwnProperty('message'))
                this.pnotify.error(error.error.message);
            else
                this.pnotify.error();
        });
    }
    sendChilds() {
        const documentos = this.postDocumentos(this.form.value);
        const empresas = this.postEmpresas(this.form.value);
        const requests = [...documentos, ...empresas];
        if (requests.length === 0) {
            this.loadingNavBar = false;
            this.form.reset();
            this.pnotify.success(`Registro salvo com sucesso`);
            this.router.navigate(['./../'], {
                relativeTo: this.activatedRoute,
            });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["forkJoin"])(requests)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((responses) => {
            let hasError = false;
            responses.forEach((response) => {
                if (response.status !== 200) {
                    this.pnotify.error();
                    hasError = true;
                    this.loadingNavBar = false;
                }
            });
            if (!hasError) {
                this.loadingNavBar = false;
                this.form.reset();
                this.pnotify.success(`Registro salvo com sucesso`);
                this.router.navigate(['./../'], {
                    relativeTo: this.activatedRoute,
                });
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    postDocumentos(params) {
        let requests = [];
        if (this.formData.length === 0) {
            return requests;
        }
        const id = this.form.get('ID_TECN_INFO_CONT').value;
        this.formData.forEach((element, index) => {
            requests.push(this.contratoService.postDocumento(element, id));
        });
        return requests;
    }
    postEmpresas(params) {
        const empresasId = params.CD_EMPR;
        if (!empresasId)
            return [];
        const empresasFiltradas = this.filiais.filter((filial) => empresasId.includes(filial['RAW']));
        if (empresasFiltradas.length == 0)
            return [];
        const _params = {
            ID_TECN_INFO_CONT: params.ID_TECN_INFO_CONT,
            EMPR: empresasFiltradas,
        };
        return [this.contratoService.postEmpresas(_params)];
    }
    putDocumento(documento) {
        const [type, title, message, cancelTxt, okTxt] = [
            'inactivate',
            'Confirmar inativação',
            'Deseja realmente prosseguir com a inativação do registro?',
            'Cancelar',
            'Confirmar',
        ];
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
            this.loadingNavBar = true;
            return this.contratoService.putDocumento(documento);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.pnotify.success('Anexos atualizado com sucesso');
            this.getDocumentos({
                ID_TECN_INFO_CONT: this.form.get('ID_TECN_INFO_CONT').value,
                IN_STAT: '1',
            });
        });
    }
    setBreadCrumb() {
        this.appTitle = 'Cadastro';
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home',
            },
            {
                descricao: 'Contratos',
                routerLink: `/tecnologia-informacao/contratos/${id}`,
            },
            {
                descricao: 'Contratos',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    setPrefixoMoeda(prefixoMoeda) {
        prefixoMoeda = prefixoMoeda !== null && prefixoMoeda !== void 0 ? prefixoMoeda : 'R$ ';
        if (prefixoMoeda.toString().slice(-1) === ' ') {
            this.prefixoMoeda = prefixoMoeda;
            return;
        }
        this.prefixoMoeda = prefixoMoeda.toString() + ' ';
        return;
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            DS_CONT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)]],
            ID_TECN_INFO_CONT_REFE: [null],
            ID_TECN_INFO_CONT_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            ID_TECN_INFO_CONT: [null],
            VL_CONT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            DS_OBSE: [null],
            DT_INIC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            DT_VENC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            DT_INCL: [null],
            MULT_CANC: [null],
            PRAZ_CANC: [null],
            ID_MOED: ['1'],
            IN_VL_VARI: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            SG_MOED: [null],
            PREF_MOED: ['R$ '],
            IN_ITEM_COMP: [false],
            VL_ITEM_COMP: [null],
            CD_EMPR: [null],
            INTE_REAJ: [12],
            ID_INDI: [null],
        });
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (!_params.hasOwnProperty('id'))
            return;
        this.getContrato({ ID_TECN_INFO_CONT: _params.id });
        this.getDocumentos({ ID_TECN_INFO_CONT: _params['id'], IN_STAT: '1' });
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
    onRemove(documento) {
        documento.IN_STAT = '0';
        this.putDocumento(documento);
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.documentos.push({ NM_DOCU: files[0]['name'] });
    }
    comparaData() {
        if (!this.form.get('DT_VENC').value) {
            return false;
        }
        else if (this.form.get('DT_INIC').value > this.form.get('DT_VENC').value) {
            this.compararData = true;
            return this.compararData;
        }
    }
};
TecnologiaInformacaoCadastrosContratoCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_12__["MoedasService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: _services_contrato_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroContratoService"] },
    { type: _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroTipoContratoService"] },
    { type: _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroModeloService"] }
];
TecnologiaInformacaoCadastrosContratoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tecnologia-informacao-cadastros-contrato-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_12__["MoedasService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        _services_contrato_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroContratoService"],
        _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroTipoContratoService"],
        _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroModeloService"]])
], TecnologiaInformacaoCadastrosContratoCadastroComponent);



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

/***/ "VpvV":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/contrato/lista/lista.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"CONTRATOS\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"getTotalContrato()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"ID_TECN_INFO_CONT\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_TECN_INFO_CONT\"\r\n                formControlName=\"ID_TECN_INFO_CONT\"\r\n                placeholder=\"Digite...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"tipoContrato\">Tipo de Contrato</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipoContrato\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingTipoContrato\"\r\n                labelForId=\"ID_TECN_INFO_CONT_TIPO\"\r\n                bindLabel=\"NM_CONT_TIPO\"\r\n                bindValue=\"ID_TECN_INFO_CONT_TIPO\"\r\n                id=\"ID_TECN_INFO_CONT_TIPO\"\r\n                formControlName=\"ID_TECN_INFO_CONT_TIPO\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DS_CONT\">Descrição</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"DS_CONT\"\r\n                formControlName=\"DS_CONT\"\r\n                placeholder=\"Digite...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <table  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th scope=\"col\" width=\"5%\">ID </th>\r\n              <th scope=\"col\">Descrição</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\">Tipo do Contrato</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" width=\"15%\">Inicio do Contrato</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" width=\"15%\">Fim do Contrato</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" width=\"20%\"><span class=\"d-flex\">Expiração do Prazo</span></th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" style=\"width:80px\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let contrato of contratos | slice : begin : end; let i = index\" [class.table-active]=\"contrato?.ID_TECN_INFO_CONT == contratoSelecionado?.ID_TECN_INFO_CONT && showDetailPanel\">\r\n              <td (click)=\"onDetails(contrato)\"[ngClass]=\"contrato.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{contrato.ID_TECN_INFO_CONT}}\r\n              </td>\r\n              <td (click)=\"onDetails(contrato)\">{{ contrato.DS_CONT | uppercase }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">{{ contrato.NM_CONT_TIPO | uppercase }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">{{ contrato.DT_INIC | date : 'dd/MM/yyyy'}}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">{{ contrato.DT_VENC | date : 'dd/MM/yyyy'}}</td>\r\n              <td class=\"d-flex\" [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">\r\n                <i class=\"text-danger  fas fa-circle mr-3\" *ngIf= \"contrato.DS_STAT_VENC == 'VENCIDO'\" ></i>\r\n                <i class=\"text-warning fas fa-circle mr-3\" *ngIf= \"contrato.DS_STAT_VENC == 'FALTA MENOS DE 30 DIAS'\" ></i>\r\n                <i class=\"text-primary fas fa-circle mr-3\" *ngIf=\"contrato.DS_STAT_VENC == 'FALTA MENOS DE 60 DIAS'\"></i>\r\n                <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"contrato.DS_STAT_VENC == 'EM VIGÊNCIA'\" ></i>\r\n                <span class=\"nowrap\">{{ contrato.DS_STAT_VENC | uppercase }}</span>\r\n              </td>\r\n              <td [hidden]=\"showDetailPanel\" class=\"align-middle\" style=\"width:80px\">\r\n                <span class=\"mr-3\" [tooltip]=\"contrato.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(contrato)\">\r\n                    <i [ngClass]=\"contrato.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', contrato.ID_TECN_INFO_CONT]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <tabset>\r\n          <tab heading=\"Dados cadastrais\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Descrição do Contrato</label>\r\n                    <div>{{ contratoSelecionado?.DS_CONT | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Tipo de Contrato</label>\r\n                    <div>{{ contratoSelecionado?.NM_CONT_TIPO | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Tipo de Valor (Váriavel/Fixo)</label>\r\n                    <div *ngIf=\"contratoSelecionado?.IN_VL_VARI == 1\">VÁRIAVEL</div>\r\n                    <div *ngIf=\"contratoSelecionado?.IN_VL_VARI == 0\">FIXO</div>\r\n                    <div *ngIf=\"contratoSelecionado?.IN_VL_VARI == ''\">NÃO INFORMADO</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Valor do Contrato</label>\r\n                    <div>{{contratoSelecionado?.VL_CONT | currency: contratoSelecionado?.SG_MOED }}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Prazo de Cancelamento</label>\r\n                    <div>{{contratoSelecionado?.PRAZ_CANC | date: 'dd/MM/yyyy'}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label >Valor da Multa</label>\r\n                    <div>{{contratoSelecionado?.MULT_CANC | currency: contratoSelecionado?.SG_MOED }}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Inicio do Contrato</label>\r\n                    <div>{{ contratoSelecionado?.DT_INIC | date: 'dd/MM/yyyy' }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Fim do Contrato</label>\r\n                    <div>{{ contratoSelecionado?.DT_VENC | date: 'dd/MM/yyyy'}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-12\">\r\n                    <label>OBSERVAÇÃO</label>\r\n                    <div>{{ contratoSelecionado?.DS_OBSE | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Expiração do Prazo</label>\r\n                    <div>{{ contratoSelecionado?.DS_STAT_VENC | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group text-primary col-lg-6\" *ngIf=\"contratoSelecionado?.IN_ITEM_COMP == 1\">\r\n                    <label>Contrato com aquisição de produto</label>\r\n                    <div> Valor para aquisição é de {{contratoSelecionado?.VL_ITEM_COMP | currency: contratoSelecionado?.SG_MOED }}</div>\r\n                  </div>\r\n                </div><hr>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Usuário Responsável Pelo Cadastro</label>\r\n                    <div>{{ contratoSelecionado?.NM_USUA_CADA | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Data do Cadastro</label>\r\n                    <div>{{ contratoSelecionado?.DT_INCL | date: 'dd/MM/yyyy' }}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"mb-3\" *ngIf=\"dadosCadastraisLoaded && dadosCadastraisEmpty\">\r\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n              </div>\r\n               -->\r\n            </div>\r\n          </tab>\r\n          <tab heading=\"Contratos Vinculados\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n              <div *ngIf=\"!loadingVinculo && !noVinculo\">\r\n                <table  class=\"table table-borderless text-center\" >\r\n                    <thead class=\"thead-light\">\r\n                      <tr>\r\n                        <th scope=\"col\" style=\"width:40px\"></th>\r\n                        <th scope=\"col\">ID </th>\r\n                        <th scope=\"col\">Descrição</th>\r\n                        <th scope=\"col\">Inicio do Contrato</th>\r\n                        <th scope=\"col\">Fim do Contrato</th>\r\n                        <th scope=\"col\" style=\"width:40px\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let contrato of contratosVinculados; let i = index\">\r\n                        <td class=\"d-flex\">\r\n                          <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"contrato.IN_STAT == 1\" tooltip=\"Ativo\" ></i>\r\n                          <i class=\"text-danger  fas fa-circle mr-3\" *ngIf=\"contrato.IN_STAT == 0\" tooltip=\"Inativo\"></i>\r\n                        </td>\r\n                        <td>{{ contrato.ID_TECN_INFO_CONT }}</td>\r\n                        <td>{{ contrato.DS_CONT | uppercase}}</td>\r\n                        <td>{{ contrato.DT_INIC | date: 'dd/MM/yyyy' }}</td>\r\n                        <td>{{ contrato.DT_VENC | date: 'dd/MM/yyyy'}}</td>\r\n                        <td style=\"text-align: right;\">\r\n                          <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                            <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', contrato.ID_TECN_INFO_CONT]\">\r\n                              <i class=\"fas fa-edit\"></i>\r\n                            </button>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"loadingVinculo\">\r\n                <div class=\"spinner-border text-dark\"></div>\r\n              </div>\r\n              <div *ngIf=\"!loadingVinculo && noVinculo\" class=\"d-flex justify-content-center mb-3\">\r\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "WOri":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/lista/lista.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9jb250cmF0by9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Zwa6":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/contrato/cadastro/cadastro.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen> -->\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de Contratos\">\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postContrato()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" >\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 mx-auto\">\r\n        <legend>Dados do Contrato</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"DS_CONT\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_CONT\"\r\n              formControlName=\"DS_CONT\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('DS_CONT') + ' ' + onFieldRequired('DS_CONT')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_CONT')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"tipoContrato\">Tipo de Contrato</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipoContrato\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingTipoContrato\"\r\n              labelForId=\"ID_TECN_INFO_CONT_TIPO\"\r\n              bindLabel=\"NM_CONT_TIPO\"\r\n              bindValue=\"ID_TECN_INFO_CONT_TIPO\"\r\n              id=\"ID_TECN_INFO_CONT_TIPO\"\r\n              formControlName=\"ID_TECN_INFO_CONT_TIPO\"\r\n              [ngClass]=\"onFieldRequired('ID_TECN_INFO_CONT_TIPO')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TECN_INFO_CONT_TIPO')\" message=\"Tipo de Contrato é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"DT_INIC\">Inicio do Contrato</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n              </div>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"DT_INIC\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Selecione...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC\"\r\n                [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('DT_INIC')\" message=\"Data de inicio do contrato é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"DT_VENC\">Fim do Contrato</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n              </div>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"DT_VENC\"\r\n              type=\"text\"\r\n              placeholder=\"Selecione...\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_VENC\"\r\n                [ngClass]=\"onFieldError('DT_VENC') + ' ' + onFieldRequired('DT_VENC')\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('DT_VENC')\" message=\"Data de fim do contrato é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <invalid-form-control\r\n          [show]=\"comparaData()\"\r\n          message=\"Data final deve ser maior que data inicial\">\r\n        </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"PRAZ_CANC\">Prazo de Cancelamento</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n              </div>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"PRAZ_CANC\"\r\n                type=\"text\"\r\n                placeholder=\"Selecione...\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"PRAZ_CANC\"\r\n                [ngClass]=\"onFieldError('PRAZ_CANC') + ' ' + onFieldRequired('PRAZ_CANC')\"\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"MULT_CANC\">Multa de Cancelamento</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"Digite...\"\r\n              id=\"MULT_CANC\"\r\n              formControlName=\"MULT_CANC\"\r\n              autocomplete=\"new-password\"\r\n              currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: prefixoMoeda }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"indices\">Índice de reajuste</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"indices\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingIndices\"\r\n              labelForId=\"ID_INDI\"\r\n              bindLabel=\"SG_INDI\"\r\n              bindValue=\"ID_INDI\"\r\n              id=\"ID_INDI\"\r\n              formControlName=\"ID_INDI\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"INTE_REAJ\">Intervalo de reajuste (meses) </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"INTE_REAJ\"\r\n              formControlName=\"INTE_REAJ\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-8 pl-0\">\r\n            <label for=\"contratoPai\">Associar a um contrato pai</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"contratos\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingMoeda\"\r\n              labelForId=\"ID_TECN_INFO_CONT_REFE\"\r\n              bindValue=\"ID_TECN_INFO_CONT\"\r\n              id=\"contratoPai\"\r\n              formControlName=\"ID_TECN_INFO_CONT_REFE\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                ({{item.ID_TECN_INFO_CONT | number: '3.0-0'}}) - {{ item.DS_CONT }} - {{ item.NM_CONT_TIPO }}\r\n              </ng-template>\r\n              <ng-template ng-label-tmp let-item=\"item\">\r\n                ({{item.ID_TECN_INFO_CONT | number: '3.0-0'}}) - {{ item.DS_CONT }} - {{ item.NM_CONT_TIPO }}\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"IN_STAT\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_STAT\"\r\n              formControlName=\"IN_STAT\"\r\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"0\">Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"IN_VL_VARI\">Tipo de Valor (Variável/Fixo)</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_VL_VARI\"\r\n              formControlName=\"IN_VL_VARI\"\r\n              [ngClass]=\"onFieldRequired('IN_VL_VARI')\">\r\n              <option value=\"1\">Variável</option>\r\n              <option value=\"0\">Fixo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_VL_VARI')\" message=\"Tipo de valor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"ID_MOED\">Moeda</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"moedas\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingMoeda\"\r\n              labelForId=\"ID_MOED\"\r\n              bindLabel=\"SG_MOED\"\r\n              bindValue=\"ID\"\r\n              id=\"ID_MOED\"\r\n              formControlName=\"ID_MOED\"\r\n              (change)=\"setPrefixoMoeda($event?.PREF_MOED)\"  \r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\">\r\n                {{item.SG_MOED}} - {{ item.NM_MOED }}\r\n              </ng-template>\r\n              <ng-template ng-label-tmp let-item=\"item\">\r\n                {{item.SG_MOED}} - {{ item.NM_MOED }}\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"VL_CONT\">Valor</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"VL_CONT\"\r\n              formControlName=\"VL_CONT\"\r\n              placeholder=\"Digite...\"\r\n              autocomplete=\"new-password\"\r\n              currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: prefixoMoeda }\"\r\n              [ngClass]=\"onFieldError('VL_CONT') + ' ' + onFieldRequired('VL_CONT')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('VL_CONT')\" message=\"Valor do Contrato é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div><br>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_ITEM_COMP\"\r\n                formControlName=\"IN_ITEM_COMP\">\r\n              <label class=\"custom-control-label\" for=\"IN_ITEM_COMP\">Aquisição de Produtos</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\"></div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-4 pl-0\" [hidden]=\"form.get('IN_ITEM_COMP').value == 0\">\r\n            <label for=\"VL_ITEM_COMP\">Valor para aquisição do produto</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"VL_ITEM_COMP\"\r\n              formControlName=\"VL_ITEM_COMP\"\r\n              placeholder=\"Digite...\"\r\n              autocomplete=\"new-password\"\r\n              currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: prefixoMoeda }\"\r\n              [ngClass]=\"onFieldError('VL_ITEM_COMP') + ' ' + onFieldRequired('VL_ITEM_COMP')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('VL_ITEM_COMP')\" message=\"Valor do Contrato é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\"></div>\r\n        </div>\r\n        \r\n\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 mx-auto\">\r\n        <legend>Associação de Empresas</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"filiais\">Empresas</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"filiais\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [hideSelected]=\"true\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              [loading]=\"loadingFiliais\"\r\n              bindLabel=\"DS_FILIAL\"\r\n              bindValue=\"RAW\"\r\n              id=\"CD_EMPR\"\r\n              formControlName=\"CD_EMPR\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 pb-2 mx-auto\">\r\n        <legend>Anexos</legend>\r\n        <div class=\"form-group border rounded p-1\">\r\n          <div>\r\n            <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\r\n              <span>Novo Documento</span>\r\n            </label>\r\n            <input\r\n              id=\"documento\"\r\n              type=\"file\"\r\n              (change)=\"appendFile($event.target.files)\"\r\n              class=\"d-none\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <ul>\r\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos\">\r\n            <div>{{ item.NM_DOCU | uppercase }}</div>\r\n            <div [hidden]=\"!item.ID_TECN_INFO_CONT_DOCU\">\r\n              <a\r\n                [href]=\"item.LINK\"\r\n                target=\"_blank\"\r\n                class=\"btn-icon-sm mx-2 text-black\"\r\n                tooltip=\"visualizar\"\r\n              >\r\n                <i class=\"far fa-eye\"></i>\r\n              </a>\r\n              <button\r\n                class=\"btn-icon-sm mx-2 hover\"\r\n                tooltip=\"excluir\"\r\n                (click)=\"onRemove(item)\"\r\n                >\r\n                <i class=\"fas fa-trash\"></i>\r\n              </button>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>");

/***/ }),

/***/ "fs7y":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/contrato.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TecnologiaInformacaoContratoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoContratoModule", function() { return TecnologiaInformacaoContratoModule; });
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
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lista/lista.component */ "j+78");
/* harmony import */ var _contrato_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contrato-routing.module */ "twyt");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Da5R");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil



// Modules


// Components



let TecnologiaInformacaoContratoModule = class TecnologiaInformacaoContratoModule {
};
TecnologiaInformacaoContratoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoCadastrosContratoListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoCadastrosContratoCadastroComponent"],
        ],
        imports: [
            _contrato_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoCadastrosContratoModuleRoutingModule"],
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
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_17__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoContratoModule);



/***/ }),

/***/ "j+78":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/lista/lista.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosContratoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosContratoListaComponent", function() { return TecnologiaInformacaoCadastrosContratoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "VpvV");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "WOri");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_contrato_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contrato.service */ "Ztrz");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../tipo-contrato/services/tipo-contrato.service */ "cy+q");
/* harmony import */ var src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/requests/moedas.service */ "zWKM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");



//angular



//servicos








// rxjs



let TecnologiaInformacaoCadastrosContratoListaComponent = class TecnologiaInformacaoCadastrosContratoListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, contratoService, formBuilder, xlsxService, confirmModalService, routerService, dateService, moedasService, detailPanelService, tipoContratoService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.contratoService = contratoService;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.moedasService = moedasService;
        this.detailPanelService = detailPanelService;
        this.tipoContratoService = tipoContratoService;
        this.contratosVinculados = [];
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.itensLoading = false; //Loading dos Itens no Modal
        this.itens = new Array();
        this.noVinculo = true;
        this.loadingVinculo = true;
        this.tipoContrato = [];
        this.tipoMoeda = [];
        this.totalContratosExp = [];
        this.showDetailPanel = false;
        // Tipos de Situação dos Tipos de Contratos (Ativo/Inativo)
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
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getTipoContrato();
        this.onDetailPanelEmitter();
        this.getMoedas();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            this.getContrato(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onDetails(contrato) {
        this.getContratosVinculados({
            ID_TECN_INFO_CONT_REFE: contrato.ID_TECN_INFO_CONT,
        });
        this.loadingNavBar = true;
        this.detailPanelService.show();
        this.contratoSelecionado = contrato;
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loadingNavBar = false;
        }, 500);
    }
    getTipoContrato(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.loadingTipoContrato = true;
        this.tipoContratoService
            .getTipoContrato(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingTipoContrato = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoContrato = response.body['data'];
            }
        });
    }
    getTotalContrato(params) {
        this.loadingNavBar = true;
        params = this.getParams();
        const _params = Object.assign(Object.assign({}, params), { IN_PAGI: '0' });
        this.contratoService
            .getContrato(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.totalContratosExp = response.body['data'];
                this.onExport();
            }
            else {
                this.totalContratosExp = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getMoedas(params) {
        this.moedasService
            .getMoedas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => { }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoMoeda = response.body['data'];
            }
        });
    }
    onSelect(item) {
        item.IN_SELE = !item.IN_SELE;
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_TECN_INFO_CONT: [null],
            DS_CONT: [null],
            VL_CONT: [null],
            ID_TECN_INFO_CONT_TIPO: [null],
            IN_STAT: [null],
            QT_DOCU: [null],
            PAGI: [1],
            IN_SELE: [false],
            TIME: [new Date().getTime()],
            DT_INIC: [null],
            DT_VENC: [null],
            DT_INCL: [null],
            NM_USUA_CADA: [null],
            PRAZ_CANC: [null],
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
                descricao: 'Contratos',
                routerLink: `/tecnologia-informacao/contratos/${id}`,
            },
            {
                descricao: 'Contratos',
            },
        ];
    }
    getContratosVinculados(params) {
        this.loadingVinculo = true;
        this.noVinculo = true;
        this.contratoService
            .getContrato(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingVinculo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.contratosVinculados = response.body['data'];
                this.noVinculo = false;
            }
            else {
                this.noVinculo = true;
                this.contratosVinculados = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getContrato(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.contratoService
            .getContrato(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.contratos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.contratos = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    changeType(contrato) {
        const stat = contrato.IN_STAT == '1' ? '0' : '1';
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
            this.loadingNavBar = true;
            contrato.IN_STAT = stat;
            return this.contratoService.postContrato(contrato);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            contrato.IN_STAT = contrato.IN_STAT == '1' ? '0' : '1';
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == '1')
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
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
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.totalContratosExp;
        this.xlsxService.exportFile(listagemExport, `Controle_Contratos_${dataExport}`);
    }
};
TecnologiaInformacaoCadastrosContratoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroContratoService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_13__["MoedasService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"] },
    { type: _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroTipoContratoService"] }
];
TecnologiaInformacaoCadastrosContratoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-cadastros-contrato-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroContratoService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_13__["MoedasService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"],
        _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroTipoContratoService"]])
], TecnologiaInformacaoCadastrosContratoListaComponent);



/***/ }),

/***/ "twyt":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/contrato-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosContratoModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosContratoModuleRoutingModule", function() { return TecnologiaInformacaoCadastrosContratoModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "j+78");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Da5R");



//components


const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastrosContratoListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosContratoCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosContratoCadastroComponent"],
    }
];
let TecnologiaInformacaoCadastrosContratoModuleRoutingModule = class TecnologiaInformacaoCadastrosContratoModuleRoutingModule {
};
TecnologiaInformacaoCadastrosContratoModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoCadastrosContratoModuleRoutingModule);



/***/ }),

/***/ "xGKK":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/cadastro/cadastro.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9jb250cmF0by9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zWKM":
/*!************************************************************!*\
  !*** ./src/app/shared/services/requests/moedas.service.ts ***!
  \************************************************************/
/*! exports provided: MoedasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoedasService", function() { return MoedasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let MoedasService = class MoedasService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getMoedas(params) {
        const _params = params;
        return this.http.get(`${this.api}/servicos/moedas`, {
            params: _params,
            observe: "response"
        });
    }
};
MoedasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MoedasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MoedasService);



/***/ })

}]);
//# sourceMappingURL=contrato-contrato-module-es2015.js.map