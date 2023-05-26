(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["romaneios-romaneios-module"],{

/***/ "0bSm":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/components/pedidos/pedidos.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-border-left-danger {\n  border-left: 5px solid #b8342c !important;\n}\n\n#pedidos {\n  display: block;\n  overflow: auto;\n}\n\n.table {\n  color: #6c757d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvY29tcG9uZW50cy9wZWRpZG9zL3BlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL3JvbWFuZWlvcy9jb21wb25lbnRzL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYm9yZGVyLWxlZnQtZGFuZ2Vye1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNiODM0MmMgIWltcG9ydGFudDtcbn1cblxuI3BlZGlkb3N7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYmxle1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "2VLj":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/services/romaneios.service.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaEntregaRomaneiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosService", function() { return LogisticaEntregaRomaneiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaEntregaRomaneiosService = class LogisticaEntregaRomaneiosService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
        this.downloadEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getEmpresas() {
        return this.http.get(`${this.BASE_URL}/common/empresas`);
    }
    getRomaneio(params) {
        return this.http.get(`${this.BASE_URL}/logistica/painel-romaneios/romaneios`, {
            params: params,
            observe: "response"
        });
    }
    sincronizarRomaneiosFusion() {
        return this.http.post(`${this.BASE_URL}/logistica/integracoes/fusion/romaneios`, {}, { observe: 'response' });
    }
    enviarRomaneioParaFaturamento(params) {
        return this.http.post(`${this.BASE_URL}/logistica/painel-romaneios/romaneio/faturamento`, params, { observe: 'response' });
    }
    finalizarRomnaneio(params) {
        return this.http.post(`${this.BASE_URL}/logistica/painel-romaneios/finaliza-romaneio`, params, { observe: 'response' });
    }
    postRomaneio(params) {
        return this.http.put(`${this.BASE_URL}/logistica/painel-romaneios/status-romaneio`, params, { observe: 'response' });
    }
    putRomaneio(params) {
        return this.http.put(`${this.BASE_URL}/logistica/integracoes/fusion/romaneios`, params, { observe: 'response' });
    }
    getPedidos(params) {
        return this.http.get(`${this.BASE_URL}/logistica/painel-romaneios/romaneios/pedidos`, {
            params: params,
            observe: 'response'
        });
    }
    getMateriais(params) {
        return this.http.get(`${this.BASE_URL}/logistica/painel-romaneios/romaneios/pedidos/materiais`, {
            params: params,
            observe: 'response'
        });
    }
    getCtes(params) {
        return this.http.get(`${this.BASE_URL}/logistica/painel-romaneios/ctes`, {
            params: params,
            observe: 'response'
        });
    }
    download(romaneio) {
        return this.downloadEmmiter.emit(romaneio);
    }
    onDownloadEmmiter() {
        return this.downloadEmmiter;
    }
    getEntregas(params) {
        return this.http.get(`${this.BASE_URL}/logistica/painel-romaneios/entregas`, {
            params: params,
            observe: 'response'
        });
    }
    getRelatorios(params) {
        return this.http.get(`${this.BASE_URL}/logistica/painel-romaneios/relatorios`, {
            params: params,
            observe: 'response'
        });
    }
};
LogisticaEntregaRomaneiosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEntregaRomaneiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEntregaRomaneiosService);



/***/ }),

/***/ "5MU/":
/*!******************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/lista/lista.component.ts ***!
  \******************************************************************************/
/*! exports provided: LogisticaEntregaRomaneiosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosListaComponent", function() { return LogisticaEntregaRomaneiosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "lVFv");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "KHlC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _services_romaneios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/romaneios.service */ "2VLj");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/admin/perfis/services/perfis.service */ "6bs2");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../cadastros/filiais/services/filiais.service */ "NXOV");



// angular



// rxjs


// services










let LogisticaEntregaRomaneiosListaComponent = class LogisticaEntregaRomaneiosListaComponent {
    constructor(activatedRoute, route, localeService, notice, formBuilder, dateService, romaneiosService, atividadesService, perfilService, detailPanelService, pnotify, xlsxService, routerService, modalService, filiaisService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.localeService = localeService;
        this.notice = notice;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.romaneiosService = romaneiosService;
        this.atividadesService = atividadesService;
        this.perfilService = perfilService;
        this.detailPanelService = detailPanelService;
        this.pnotify = pnotify;
        this.xlsxService = xlsxService;
        this.routerService = routerService;
        this.modalService = modalService;
        this.filiaisService = filiaisService;
        this.pedidosAtivos = [];
        this.pedidosInativos = [];
        /* showActiveOrder: boolean = true;
        showInactiveOrder: boolean = false; */
        this.inSomenteEntregaFaturamento = false;
        this.isChecked = false;
        //spinner
        this.loading = true;
        this.loaderNavbar = false;
        this.loadingEntregas = false;
        this.loadingFiliais = false;
        this.romaneios = [];
        this.entregas = [];
        this.totalItems = [];
        this.noResult = true;
        this.romaneioFinalizado = 1;
        this.breadCrumbTree = [];
        this.loadingPedidos = false;
        this.showDetailPanel = false;
        this.detailPanelTitle = 'Detalhes';
        this.appTitle = 'Painel de Empaque';
        this.orderBy = 'CD_ROMA';
        this.orderType = 'DESC';
        this.situacao = [
            {
                id: '1',
                nome: 'Activo',
            },
            {
                id: '0',
                nome: 'Llamado fuera',
            },
        ];
        this.situacaoCarregamento = [
            {
                id: '0',
                nome: 'EN CARGA',
            },
            {
                id: '1',
                nome: 'FINALIZADO',
            },
        ];
        this.inicioViagem = [
            {
                id: '0',
                nome: 'NO EMPEZADO',
            },
            {
                id: '1',
                nome: 'COMENZÓ',
            },
        ];
        /* Paginação */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Paginação */
        this.permiteAlterarStatus = false;
        this.tableConfig = {
            subtitleBorder: true,
            isFixed: true,
        };
        this.visualizarPedidosRemovidos = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.atividadesService.registrarAcesso().subscribe();
        this.verificaPerfil();
        this.setBreadCrumb();
        this.onDetailPanelEmitter();
        this.onActivatedRoute();
        this.getFiliais();
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService.getFiliais({ status: '1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe({
            next: response => {
                this.filiais = response.body['data'];
            },
            error: () => {
                this.pnotify.error();
            }
        });
    }
    ngOnDestroy() {
        this.showDetailPanelSubscription.unsubscribe();
    }
    onScrollEvent() {
        this.datepicker.hide();
    }
    setBreadCrumb() {
        const params = this.activatedRoute.snapshot.params;
        const submoduloId = params === null || params === void 0 ? void 0 : params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Logistica',
            },
            {
                descricao: 'GESTIÓN DE ENTREGAS',
                routerLink: `/logistica/entrega/${submoduloId}`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    buildForm() {
        this.form = this.formBuilder.group({
            CD_FILI: [null],
            CD_MOTO: [null],
            CD_PRIO: [null],
            CD_ROMA: [null],
            CD_STAT: [null],
            DS_OBSE: [null],
            DT_ATUA: [null],
            DT_INCL: [null],
            DT_PREV_SAID: [null],
            ID_LOGI_FUSI_ROMA: [null],
            INT_ID: [null],
            IN_STAT: [null],
            FINA_IN_STAT: [null],
            IN_VIAG_INIC: [null],
            KM_PREV: [null],
            PLAC: [null],
            VL_FRET: [null],
            CD_PEDI: [null],
            DS_MOTO: [null],
            NR_NOTA_FISC: [null],
            IN_CTE_EMIT: ['T'],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            PAGI: [1],
            TT_REGI_PAGI: [100],
            ORDE_BY: [' CD_ROMA '],
            ORDE_TYPE: [' DESC '],
            TIME: new Date().getTime(),
            TP_EMPR: ['DISTRIBUIDORA'],
        });
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            var _a;
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0) {
                _response['CD_FILI'] = (_response === null || _response === void 0 ? void 0 : _response.CD_FILI) ? (_a = _response === null || _response === void 0 ? void 0 : _response.CD_FILI) === null || _a === void 0 ? void 0 : _a.split(',') : [];
                this.form.patchValue(_response);
                this.getRomaneios(this.getParams());
            }
            else {
                this.loading = false;
            }
        });
    }
    getRomaneios(params) {
        this.itemsPerPage = params['TT_REGI_PAGI'];
        this.end = params['TT_REGI_PAGI'];
        if (!this.loading)
            this.loaderNavbar = true;
        this.romaneiosService
            .getRomaneio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.noResult = false;
                this.romaneios = response.body['data'];
                this.totalItems = response.body['total'];
            }
            else if (response.status === 204) {
                this.pnotify.notice('No se encontró la lista de empaque');
                this.noResult = true;
            }
        }, (error) => {
            this.pnotify.error(error.error['message']);
            this.noResult = true;
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
    /* Paginação */
    onPageChanged(event) {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(event.page);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    /* Paginação */
    onFinalizaRomaneio(romaneio) {
        romaneio['loadingFinalizando'] = true;
        const status = romaneio.FINA_IN_STAT == '1' ? '0' : '1';
        let params = {
            ID_LOGI_FUSI_ROMA: romaneio === null || romaneio === void 0 ? void 0 : romaneio.ID_LOGI_FUSI_ROMA,
            IN_STAT: status,
        };
        this.romaneiosService
            .finalizarRomnaneio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            romaneio['loadingFinalizando'] = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotify.error(`No se pudo finalizar la lista de empaque ${romaneio === null || romaneio === void 0 ? void 0 : romaneio.CD_ROMA}`);
                return;
            }
            romaneio.DT_FINA = new Date();
            romaneio.FINA_IN_STAT = status;
            this.pnotify.success(`¡El empaque ${romaneio === null || romaneio === void 0 ? void 0 : romaneio.CD_ROMA} se ha completado con éxito!`);
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
        //this.postRomaneios(romaneio);
    }
    onInicioViagem(romaneio) {
        romaneio.IN_VIAG_INIC = romaneio.IN_VIAG_INIC == '1' ? '0' : '1';
        romaneio.DT_SAID = new Date();
        this.postRomaneios(romaneio);
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(1);
        this.currentPage = 1;
        this.showDetailPanel = false;
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
                else if (Array.isArray(_obj[prop])) {
                    _params[prop] = _obj[prop].join(',');
                }
                else
                    _params[prop] = _obj[prop];
            }
        }
        /* if (_params['CD_FILI']) {
          const current = this.filiais.filter((empresa) => empresa.CD_FILI == _params['CD_FILI'])
          _params = Object.assign(_params, current[0]);
        } */
        return _params;
    }
    postRomaneios(romaneio) {
        this.loaderNavbar = true;
        this.romaneiosService
            .postRomaneio(romaneio)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.notice.success();
            }
            else {
                this.notice.error('Algunos registros no se pudieron actualizar');
            }
        }, (error) => {
            this.notice.error();
        });
    }
    verificaPerfil() {
        const matricula = JSON.parse(localStorage.getItem('currentUser'))['info']['matricula'];
        this.permiteAlterarStatus = false;
        this.perfilService
            .getPerfil({ sigla: 'LOGI_CONT_ACES_PAIN_ROMA', matricula: matricula })
            .subscribe((response) => {
            if (response.status === 200) {
                this.permiteAlterarStatus = true;
            }
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            if (!event.showing)
                this.romaneios.map((element) => (element.selected = false));
        });
    }
    viewDetails(romaneio) {
        this.romaneio = romaneio;
        this.romaneios.map((element) => (element.selected = false));
        this.romaneio['selected'] = true;
        this.isChecked = false;
        this.detailPanelService.show();
        this.detailPanelService.loadedFinished(false);
        this.detailPanelTitle = romaneio.CD_ROMA;
        this.showDetailPanel = true;
        /* this.visualizarPedidosRemovidos = false; */
        this.getEntregas(romaneio);
    }
    getPedidos(params) {
        this.pedidosAtivos = [];
        this.pedidosInativos = [];
        this.romaneiosService
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => { }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.detailPanelService.loadedFinished(true);
                return;
            }
            const pedidos = response.body['data'];
            this.pedidosAtivos = pedidos.filter((pedido) => pedido.IN_STAT == '1');
            this.pedidosInativos = pedidos.filter((pedido) => pedido.IN_STAT == '0');
            /* this.showActiveOrder = true;
            this.showInactiveOrder = false; */
            this.detailPanelService.loadedFinished(false);
        }, (error) => {
            this.detailPanelService.loadedFinished(true);
        });
    }
    /* onShowActiveOrder(event: boolean){
      this.showActiveOrder = event;
    } */
    /* onShowInactiveOrder(event: boolean){
      this.showInactiveOrder = event;
    } */
    putRomaneio(romaneio) {
        romaneio.syncFusion = true;
        this.romaneiosService
            .putRomaneio(romaneio)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            romaneio.syncFusion = false;
        }))
            .subscribe((response) => {
            this.pnotify.success(`¡Paquete ${romaneio.CD_ROMA} sincronizado correctamente!`);
        }, (error) => {
            this.pnotify.error(`No se pudo sincronizar la lista de empaque ${romaneio.CD_ROMA}`);
        });
    }
    onPrint(romaneio) {
        this.romaneiosService.download(romaneio);
    }
    sincronizarRomaneiosFusion() {
        this.loaderNavbar = true;
        this.romaneiosService
            .sincronizarRomaneiosFusion()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200)
                this.pnotify.success(`¡Sincronizado con éxito!`);
            else
                this.pnotify.notice(`No se encontraron pendientes.`);
        }, (error) => {
            this.pnotify.error(`No se pudo sincronizar las listas de empaque con Fusion.`);
        });
    }
    enviarRomaneioParaFaturamento(romaneio) {
        romaneio.loadingFaturamento = true;
        this.romaneiosService
            .enviarRomaneioParaFaturamento(romaneio)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            romaneio.loadingFaturamento = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotify.notice(`No se pudo enviar la lista de empaque ${romaneio.CD_ROMA} para facturación.`);
                return;
            }
            const usuario = JSON.parse(localStorage.getItem('currentUser'));
            const nome = usuario['info']['nomeCompleto'];
            const matricula = usuario['info']['matricula'];
            romaneio.DS_FATU_NM_USUA = nome;
            romaneio.DS_FATU_NR_MATR = matricula;
            const options = { timeStyle: 'medium', dateStyle: 'short' };
            romaneio.DS_FATU_DT_INCL = new Intl.DateTimeFormat('br', options).format(new Date());
            romaneio.FATU_IN_STAT = '1';
            this.pnotify.success(`¡Paquete ${romaneio.CD_ROMA} enviado correctamente para facturación.`);
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            if (message) {
                this.pnotify.error(`${romaneio.CD_ROMA}: ${message}`);
                return;
            }
            this.pnotify.error(`No se pudo enviar el paquete ${romaneio.CD_ROMA} para la facturación.`);
        });
    }
    getEntregasSomenteFaturamento(romaneio) {
        romaneio.IN_FATU = (+this.isChecked).toString();
        this.getEntregas(romaneio);
    }
    getEntregas(romaneio) {
        this.loadingEntregas = true;
        const params = {
            CD_ROMA: romaneio === null || romaneio === void 0 ? void 0 : romaneio.CD_ROMA,
            IN_FATU: (romaneio === null || romaneio === void 0 ? void 0 : romaneio.IN_FATU) ? romaneio === null || romaneio === void 0 ? void 0 : romaneio.IN_FATU : '',
        };
        this.romaneiosService
            .getEntregas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingEntregas = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.entregas = [];
                return;
            }
            this.entregas = response.body['data'];
            romaneio.entregas = this.entregas;
        }, (error) => {
            this.entregas = [];
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xxl',
            backdrop: 'static',
        });
    }
    onCorFaturamento(romaneio) {
        if (romaneio.FINA_IN_STAT == '0')
            return 'text-muted';
        if (romaneio.FATU_IN_STAT == '0')
            return 'text-warning';
        return 'text-success';
    }
    onInEnviarFaturamento(romaneio) {
        return (romaneio.FATU_IN_STAT == 1 ||
            romaneio.FINA_IN_STAT == 0 ||
            !this.permiteAlterarStatus);
    }
    getDadosRelatorio() {
        this.loaderNavbar = true;
        const params = this.getParams();
        this.romaneiosService
            .getRelatorios(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotify.notice('No se encontraron registros.');
                return;
            }
            this.xlsxService.export({ data: response.body['data'] });
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onPodeFinalizarRomaneio(romaneio) {
        if ((romaneio === null || romaneio === void 0 ? void 0 : romaneio.IN_STAT) == 0)
            return false;
        return this.permiteAlterarStatus;
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
        this.form.get('ORDE_BY').setValue(this.orderBy);
        this.form.get('ORDE_TYPE').setValue(this.orderType);
        this.onFilter();
    }
};
LogisticaEntregaRomaneiosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: _services_romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntregaRomaneiosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_16__["AdminPerfisService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaFiliaisService"] }
];
LogisticaEntregaRomaneiosListaComponent.propDecorators = {
    datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"], { static: false },] }],
    onScrollEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:scroll', ['$event'],] }]
};
LogisticaEntregaRomaneiosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-romaneios-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        _services_romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntregaRomaneiosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_16__["AdminPerfisService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaFiliaisService"]])
], LogisticaEntregaRomaneiosListaComponent);



/***/ }),

/***/ "H0Si":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/romaneios-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticaEntregaRomaneiosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosRoutingModule", function() { return LogisticaEntregaRomaneiosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "5MU/");




const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaRomaneiosListaComponent"]
    }
];
let LogisticaEntregaRomaneiosRoutingModule = class LogisticaEntregaRomaneiosRoutingModule {
};
LogisticaEntregaRomaneiosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], LogisticaEntregaRomaneiosRoutingModule);



/***/ }),

/***/ "KHlC":
/*!********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/lista/lista.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-switch .custom-control-label::after {\n  background-color: #fff;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #28a745;\n  background-color: #28a745;\n}\n\nbutton:disabled {\n  cursor: no-drop;\n  color: #b9bdb9 !important;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n}\n\n::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n\ntr {\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2Evcm9tYW5laW9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIGNvbG9yOiAjYjliZGI5ICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6bmctZGVlcCAudG9vbHRpcC1pbm5lcntcbiAgbWF4LXdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG50cntcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "RscU":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/components/capa-romaneio/capa-romaneio.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LogisticaEntregaRomaneiosCapaRomaneioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosCapaRomaneioComponent", function() { return LogisticaEntregaRomaneiosCapaRomaneioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_capa_romaneio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./capa-romaneio.component.html */ "rkY/");
/* harmony import */ var _capa_romaneio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capa-romaneio.component.scss */ "dzwu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pdf.service */ "GTII");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var _services_romaneios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/romaneios.service */ "2VLj");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");








/* import { LogisticaEntregaRelatoriosService } from '../../services/relatorios.service'; */


let LogisticaEntregaRomaneiosCapaRomaneioComponent = class LogisticaEntregaRomaneiosCapaRomaneioComponent {
    constructor(romaneiosService, 
    /* private relatoriosService: LogisticaEntregaRelatoriosService, */
    pnotify, xlsxService, modalService, pdfService) {
        this.romaneiosService = romaneiosService;
        this.pnotify = pnotify;
        this.xlsxService = xlsxService;
        this.modalService = modalService;
        this.pdfService = pdfService;
        this.pedidos = [];
        this.materiais = [];
        this.loadingPedidos = true;
    }
    ngOnInit() {
        this.getLogos();
        this.onSubscriptions();
    }
    ngOnDestroy() {
        var _a;
        (_a = this.$subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        if (this.modalRef !== undefined)
            this.modalRef.hide();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xxl',
            backdrop: 'static'
        });
    }
    onSubscriptions() {
        this.$subscription = this.romaneiosService
            .onDownloadEmmiter()
            .subscribe((romaneio) => {
            this.romaneio = romaneio;
            let params = {
                CD_ROMA: romaneio.CD_ROMA,
                CD_FILI: romaneio.CD_FILI,
                ROMA_PEDI_IN_STAT: 1,
                TP_PEDI: 'FATURAMENTO',
                ORDE_BY: ' ENTR_NR_SQNC ',
                ORDE_TYPE: ' ASC '
            };
            this.pedidos = [];
            this.getPedidos(params);
            this.openModal(this.template);
        });
    }
    onDownload() {
        const txt = document.querySelector('textarea');
        if (!(txt === null || txt === void 0 ? void 0 : txt.value))
            txt === null || txt === void 0 ? void 0 : txt.classList.add('d-none');
        this.pdfService.download('capaRomaneio', this.getNomeDownload());
        txt === null || txt === void 0 ? void 0 : txt.classList.remove('d-none');
    }
    getNomeDownload() {
        var _a;
        const d = (new Date());
        const timestamp = `${d.getFullYear()}_${d.getMonth()}_${d.getDate()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;
        return `romaneio__${(_a = this.romaneio) === null || _a === void 0 ? void 0 : _a.CD_ROMA}__${timestamp}`;
    }
    onPrint() {
        const txt = document.querySelector('textarea');
        if (!(txt === null || txt === void 0 ? void 0 : txt.value))
            txt === null || txt === void 0 ? void 0 : txt.classList.add('d-none');
        window.print();
        txt === null || txt === void 0 ? void 0 : txt.classList.remove('d-none');
    }
    getPedidos(params) {
        this.loadingPedidos = true;
        this.romaneiosService
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loadingPedidos = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.pedidos = response.body['data'];
            this.pedidos.map(pedido => this.getMateriais(pedido));
        }, (error) => {
        });
    }
    getMateriais(pedido) {
        if (pedido.hasOwnProperty("MATE"))
            return;
        pedido.materialLoading = true;
        const _params = {
            "CD_PEDI": pedido["CD_PEDI"],
            "CD_EMPR": pedido["CD_EMPR"],
        };
        this.romaneiosService
            .getMateriais(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            pedido.materialLoading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            pedido["MATE"] = response.body['data'];
        }, (error) => {
        });
    }
    getLogos() {
        return [
            "/assets/images/logo/clientes/monterrey_mtcorp_com_br_colorido.png",
        ];
    }
    onExcel() {
        const params = {
            "CD_ROMA": this.romaneio["CD_ROMA"]
        };
        this.pnotify.success('Seu relatório será gerado em instantes.');
        this.romaneiosService
            .getRelatorios(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.xlsxService.export({ "data": response.body['data'], "filename": this.getNomeDownload() });
        }, (error) => {
        });
    }
};
LogisticaEntregaRomaneiosCapaRomaneioComponent.ctorParameters = () => [
    { type: _services_romaneios_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRomaneiosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_5__["PdfService"] }
];
LogisticaEntregaRomaneiosCapaRomaneioComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['template', { static: false },] }]
};
LogisticaEntregaRomaneiosCapaRomaneioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-romaneios-capa-romaneio',
        template: _raw_loader_capa_romaneio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_capa_romaneio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_romaneios_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRomaneiosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
        src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_5__["PdfService"]])
], LogisticaEntregaRomaneiosCapaRomaneioComponent);



/***/ }),

/***/ "XTH6":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/romaneios/components/pedidos/pedidos.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"px-2 py-1 mb-4 border rounded shadow-sm\"\n  style=\"background-color: #CCCCCC10;\"\n  [ngClass]=\"{'border-danger text-muted': entrega?.IN_STAT == 0}\"\n  >\n  <!-- \n  *ngIf=\"(entrega.IN_STAT_ROMA_PEDI_FATU == 1 && inSomenteEntregaFaturamento) || !inSomenteEntregaFaturamento\" -->\n  <div>\n    <div class=\"mb-1 d-flex align-items-center\">\n      <div\n        class=\"d-flex justify-content-center align-items-center rounded-circle mr-2\"\n        style=\"width: 2rem; height: 2rem; font-size: 1.5rem;\"\n      >\n        <span>{{ entrega?.ENTR_NR_SQNC }}</span>\n      </div>\n      <div class=\"w-100\">\n        <div class=\"d-flex justify-content-between\">\n          <div>\n            <div class=\"mb-1 d-flex justify-content-between\">\n              <span class=\"d-block text-uppercase font-weight-bolder\" *ngIf=\"entrega?.CD_CLIE\">({{ entrega?.CD_CLIE }}) &nbsp; {{ entrega?.NM_CLIE }}</span>\n            </div>\n            <div class=\"d-block text-uppercase\">\n              <span *ngIf=\"entrega?.DS_LOCA_ENTR\">{{ entrega?.DS_LOCA_ENTR }}</span> \n              <span *ngIf=\"entrega?.DS_BAIRR\">, {{ entrega?.DS_BAIR }}</span>\n              <span *ngIf=\"entrega?.DS_CIDA\">, {{ entrega?.DS_CIDA }}</span>\n              <span *ngIf=\"entrega?.DS_ESTA\">-{{ entrega.DS_ESTA }}</span>\n            </div>\n          </div>\n          <div>\n            <!-- <i\n              class=\"fas fa-file-invoice-dollar ml-2\"\n              [tooltip]=\"notificacoes.entrega.faturamento.tooltips[entrega?.IN_STAT_ROMA_PEDI_FATU]\"\n              container=\"body\"\n              placement=\"left\"\n              [ngClass]=\"notificacoes.entrega.faturamento.cor[entrega?.IN_STAT_ROMA_PEDI_FATU]\"\n              style=\"font-size: 1rem;\"\n            ></i> -->\n            <i\n              class=\"fas fa-receipt ml-2\"\n              [tooltip]=\"notificacoes.entrega.cte.tooltips[entrega?.CTRC_IN_STAT]\"\n              container=\"body\"\n              placement=\"left\"\n              [ngClass]=\"notificacoes.entrega.cte.cor[entrega?.CTRC_IN_STAT]\"\n              style=\"font-size: 1rem;\"\n            ></i>\n            <i\n              class=\"fas fa-truck-moving ml-2\"\n              [tooltip]=\"notificacoes.entrega.entrega.tooltips[entrega?.IN_ENTR]\"\n              container=\"body\"\n              placement=\"left\"\n              [ngClass]=\"notificacoes.entrega.entrega.cor[entrega?.IN_ENTR]\"\n              style=\"font-size: 1rem;\"  \n            ></i>\n            <i\n              class=\"fas fa-power-off ml-2\"\n              [tooltip]=\"notificacoes.entrega.situacao.tooltips[entrega?.IN_STAT]\"\n              container=\"body\"\n              placement=\"left\"\n              [ngClass]=\"notificacoes.entrega.situacao.cor[entrega?.IN_STAT]\"\n              style=\"font-size: 1rem;\"  \n            ></i>\n            <btn-arrow (onStatus)=\"onToggleArrow($event, 'entrega')\" ></btn-arrow>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-between mt-1\">\n          <div class=\"col-3 p-0\">\n            <div class=\"border-bottom rounded py-1 mr-1 d-flex flex-column align-items-center\">\n              <div class=\"font-weight-bolder\">{{ entrega?.ENTR_VL_FRET || 0 | currency:'Bs'}}</div>\n              <div>Flete Estimado</div>\n            </div>\n          </div>\n          <div class=\"col-3 p-0\">\n            <div class=\"border-bottom rounded py-1 mr-1 d-flex flex-column align-items-center\">\n              <div class=\"font-weight-bolder\">{{ entrega?.CTRC_VL_LIQD || 0 | currency:'Bs'}}</div>\n              <div>Flete Sin Impuesto</div>\n            </div>\n          </div>\n          <div class=\"col-3 p-0\">\n            <div class=\"border-bottom rounded py-1 mr-1 d-flex flex-column align-items-center\">\n              <div class=\"font-weight-bolder\">{{ entrega?.CTRC_VL_BRUT || 0 | currency:'Bs'}}</div>\n              <div>Flete Con Impuesto</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"arrow?.entrega\">\n      <!-- <hr>\n      <div>\n        <div style=\"height: 1.5rem;\" class=\"d-flex justify-content-between\">\n          <span class=\"float-left\" style=\"font-size: 11px; font-weight: 700;\">CTE' s</span>\n          <btn-arrow (onStatus)=\"onToggleArrow($event, 'ctes')\" (click)=\"getCtes()\"></btn-arrow>\n        </div>\n        <div *ngIf=\"arrow?.ctes\">\n          <div \n            class=\"spinner-border text-primary\"\n            role=\"status\"\n            *ngIf=\"loadingCtes\"  \n          >\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n          <custom-table *ngIf=\"ctes?.length > 0 && !loadingCtes\">\n            <ng-template let-thead #thead>\n              <tr>\n                <th scope=\"col\" class=\"text-left\">CTE</th>\n                <th scope=\"col\" class=\"text-center\">Data de emissão</th>\n                <th scope=\"col\">Chave de acesso</th>\n                <th scope=\"col\" class=\"text-center\">Valor</th>\n                <th scope=\"col\" class=\"text-center\">Tipo</th>\n              </tr>\n            </ng-template>\n            <ng-template let-tbody #tbody>\n              <tr *ngFor=\"let cte of ctes\">\n                <td class=\"text-left\">{{cte?.NR_CTRC }}</td>\n                <td class=\"text-center\">{{ cte?.DT_EMIS  | date: 'dd/MM/yyyy HH:mm' }}</td>\n                <td>{{ cte?.DS_CTRC_CHAV_ACES }}</td>\n                <td class=\"text-center\">\n                  <span *ngIf=\"cte?.VL_BRUT\">{{ cte?.VL_BRUT | currency:'Bs'}}</span>\n                  <span *ngIf=\"!cte?.VL_BRUT\">-</span>\n                </td>\n                <td class=\"text-center\">{{ cte?.DS_TP_CTRC }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <div *ngIf=\"ctes?.length == 0 && !loadingCtes\">\n            <empty-result message=\"No se encontró información\"></empty-result>\n          </div>\n        </div>\n      </div> -->\n      <hr>\n      <div style=\"height: 1.5rem;\" class=\"d-flex justify-content-between\">\n        <span class=\"float-left\" style=\"font-size: 11px; font-weight: 700;\">ORDEN DE VIENDA</span>\n        <btn-arrow (onStatus)=\"onToggleArrow($event, 'pedidos')\" (click)=\"getPedidos()\" ></btn-arrow>\n      </div>\n      <div \n        class=\"spinner-border text-primary\"\n        role=\"status\"\n        *ngIf=\"loadingPedidos\"  \n      >\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div *ngIf=\"arrow?.pedidos && !loadingPedidos\">\n        <div *ngFor=\"let pedido of pedidos; let index = index\" class=\"bg-white\">\n          <div\n            [class]=\"'shadow-sm border rounded p-2 mb-2 d-flex ' + 'pedido__' + index\"\n            [ngClass]=\"{'border-danger text-muted': pedido.ROMA_PEDI_IN_STAT == 0}\"\n            >\n            <!-- \n            *ngIf=\"(item.IN_STAT_ROMA_PEDI_FATU == 1 && inSomenteEntregaFaturamento) || !inSomenteEntregaFaturamento\" -->\n            <div class=\"col p-0\">\n              <custom-table>\n                <ng-template let-thead #thead>\n                  <tr>\n                    <th>ORDEN DE VIENDA</th>\n                    <th>FACTURA</th>\n                    <th>PESO</th>\n                    <th>\n                      <div class=\"d-flex justify-content-between\">\n                        <span>LLAVE DE ACCESO</span>\n                        <div>\n                          <!-- <i\n                            class=\"fas fa-file-invoice-dollar ml-2\"\n                            [tooltip]=\"notificacoes.pedido.faturamento.tooltips[pedido?.IN_STAT_ROMA_PEDI_FATU]\"\n                            container=\"body\"\n                            placement=\"left\"\n                            [ngClass]=\"notificacoes.pedido.faturamento.cor[pedido?.IN_STAT_ROMA_PEDI_FATU]\"\n                            style=\"font-size: 1rem;\"\n                          ></i> -->\n                          <i\n                            class=\"fas fa-receipt ml-2\"\n                            [tooltip]=\"notificacoes.pedido.cte.tooltips[pedido?.CTRC_IN_STAT]\"\n                            container=\"body\"\n                            placement=\"left\"\n                            [ngClass]=\"notificacoes.pedido.cte.cor[pedido?.CTRC_IN_STAT]\"\n                            style=\"font-size: 1rem;\"\n                          ></i>\n                          <i\n                            class=\"fas fa-truck-moving ml-2\"\n                            [tooltip]=\"notificacoes.pedido.entrega.tooltips[pedido?.IN_ENTR]\"\n                            container=\"body\"\n                            placement=\"left\"\n                            [ngClass]=\"notificacoes.pedido.entrega.cor[pedido?.IN_ENTR]\"\n                            style=\"font-size: 1rem;\"  \n                          ></i>\n                          <i\n                            class=\"fas fa-power-off ml-2\"\n                            [tooltip]=\"notificacoes.pedido.situacao.tooltips[pedido?.IN_STAT]\"\n                            container=\"body\"\n                            placement=\"left\"\n                            [ngClass]=\"notificacoes.pedido.situacao.cor[pedido?.IN_STAT]\"\n                            style=\"font-size: 1rem;\"  \n                          ></i>\n                        </div>\n                      </div>\n                    </th>\n                  </tr>\n                </ng-template>\n                <ng-template let-tbody #tbody>\n                  <tr>\n                    <td>{{ pedido.CD_PEDI }}</td>\n                    <td>{{ pedido.NOTA_FISC }}</td>\n                    <td>{{ pedido.TT_PESO | number : '0.3-3' }}</td>\n                    <td>\n                      <div class=\"d-flex justify-content-between\">\n                        <span>{{ pedido.DS_NOFI_CHAV_ACES }}</span>\n                        <button\n                          class=\"btn-icon-sm\"\n                          tooltip=\"copiar\"\n                          container=\"body\"\n                          placement=\"left\"\n                          (click)=\"copyToClipboard(pedido.DS_NOFI_CHAV_ACES)\"\n                          [disabled]=\"!pedido.DS_NOFI_CHAV_ACES\">\n                          <i class=\"far fa-copy\"></i>\n                        </button>\n                      </div>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <hr>\n              <div>\n                <div style=\"height: 1.5rem;\" class=\"d-flex justify-content-between\">\n                  <span class=\"float-left\" style=\"font-size: 11px; font-weight: 700;\">PRODUCTOS</span>\n                  <btn-arrow (onStatus)=\"onToggleArrow($event, 'materiais')\" (click)=\"getMateriais(pedido)\" ></btn-arrow>\n                </div>\n                <div \n                  class=\"spinner-border text-primary\"\n                  role=\"status\"\n                  *ngIf=\"pedido?.loadingMateriais\"  \n                >\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf=\"pedido?.materiais && !pedido?.loadingMateriais\">\n                  <custom-table *ngIf=\"pedido?.materiais?.length != 0 && !pedido?.loadingMateriais\">\n                    <ng-template let-thead #thead>\n                      <tr>\n                        <th class=\"text-center\">#</th>\n                        <th class=\"text-center\">CODIGO</th>\n                        <th>DESCRIPCIÓN</th>\n                        <th class=\"text-center\">UNIDAD</th>\n                        <th class=\"text-center\">MONTO</th>\n                      </tr>\n                    </ng-template>\n                    <ng-template let-tbody #tbody>\n                      <tr *ngFor=\"let material of pedido?.materiais\">\n                        <td class=\"text-center\">{{ material?.NR_SQNC }}</td>\n                        <td class=\"text-center\">{{ material?.CD_PROD }}</td>\n                        <td>{{ material?.NM_PROD }}</td>\n                        <td class=\"text-center\">\n                          <span *ngIf=\"material?.DS_UNID_MEDI\">{{ material?.DS_UNID_MEDI }}</span>\n                          <span *ngIf=\"!material?.DS_UNID_MEDI\">-</span>\n                        </td>\n                        <td class=\"text-center\">{{ material?.TT_PROD_PESO | number: '1.3-3' }}</td>\n                      </tr>\n                    </ng-template>\n                  </custom-table>\n                  <div *ngIf=\"pedido?.materiais?.length == 0 && !pedido?.loadingMateriais\" style=\"height: 5rem;\">\n                    <empty-result message=\"No se encontró información\"></empty-result>\n                  </div>\n                </div>\n              </div>\n              <div class=\"mt-1\">\n                <span *ngIf=\"pedido?.ROMA_PEDI_IN_STAT == 0\">** Esta orden de vienda está inactiva en esta entrega</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"pedidos.length === 0\" style=\"height: 5rem;\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div> -->\n  <div class=\"mt-1\">\n    <span *ngIf=\"entrega.IN_STAT == 0\">** Esta entrega está inactiva en esta carga</span>\n  </div> \n</div>");

/***/ }),

/***/ "ZD/H":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/romaneios.module.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaEntregaRomaneiosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosModule", function() { return LogisticaEntregaRomaneiosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _romaneios_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./romaneios-routing.module */ "H0Si");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lista/lista.component */ "5MU/");
/* harmony import */ var _components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pedidos/pedidos.component */ "w3SC");
/* harmony import */ var _components_capa_romaneio_capa_romaneio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/capa-romaneio/capa-romaneio.component */ "RscU");


















let LogisticaEntregaRomaneiosModule = class LogisticaEntregaRomaneiosModule {
};
LogisticaEntregaRomaneiosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaEntregaRomaneiosListaComponent"],
            _components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntregaRomaneiosPedidosComponent"],
            _components_capa_romaneio_capa_romaneio_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntregaRomaneiosCapaRomaneioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _romaneios_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaRomaneiosRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["SortableModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_8__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ProgressbarModule"].forRoot(),
            ng_brazil__WEBPACK_IMPORTED_MODULE_11__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__["CurrencyMaskModule"]
        ]
    })
], LogisticaEntregaRomaneiosModule);



/***/ }),

/***/ "dzwu":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/components/capa-romaneio/capa-romaneio.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media print {\n  #capaRomaneio {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 15px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\ntextarea {\n  width: 100%;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvY29tcG9uZW50cy9jYXBhLXJvbWFuZWlvL2NhcGEtcm9tYW5laW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvY29tcG9uZW50cy9jYXBhLXJvbWFuZWlvL2NhcGEtcm9tYW5laW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xuICAgICNjYXBhUm9tYW5laW8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB9XG59XG5cbnRleHRhcmVhe1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "lVFv":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/romaneios/lista/lista.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    (click)=\"getDadosRelatorio()\"\n    >\n    Generar informe\n  </button>\n  <button\n    (click)=\"sincronizarRomaneiosFusion()\"\n  >\n    Sincronizar\n    <i class=\"fas fa-sync\"></i>\n  </button>\n  <button\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status  == 'INVALID'\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dtInicial\"> Comienzo </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"inicioData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_INIC\"\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('DT_INIC')\"\n            message=\"El inicio es obligatorio.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group  col-3\">\n          <label for=\"dtFinal\"> Final </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_FINA\"\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('DT_FINA')\"\n            message=\"La final es obligatoria.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"filial\">Subsidiaria</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [loading]=\"loadingFiliais\"\n            [closeOnSelect]=\"false\"\n            [items]=\"filiais\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            labelForId=\"filial\"\n            bindLabel=\"nome\"\n            bindValue=\"idFilial\"\n            placeholder=\"SELECCIONE...\"\n            formControlName=\"CD_FILI\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"cdRomaneio\"> Ruta </label>\n          <input\n            id=\"cdRomaneio\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"CD_ROMA\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"placa\"> Placa del vehículo </label>\n          <input\n            id=\"placa\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"PLAC\"\n            (keyup.enter)=\"onFilter()\"\n            >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"motorista\">Conductor</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"DS_MOTO\"\n            placeholder=\"CPF OU NOME\" \n            (keyup.enter)=\"onFilter()\" \n          >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Orden de venta</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"CD_PEDI\"\n            placeholder=\"Escribelo...\"  \n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"notaFiscal\">Factura</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"NR_NOTA_FISC\"\n            placeholder=\"Escribelo...\"  \n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"itemsPerPage\">Cargando</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacaoCarregamento\"\n            [virtualScroll]=\"true\"\n            labelForId=\"situacaoCarregamento\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            (change)=\"onFilter()\"\n            formControlName=\"FINA_IN_STAT\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"itemsPerPage\">Inicio del viaje</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"inicioViagem\"\n            [virtualScroll]=\"true\"\n            labelForId=\"inicioViagem\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            (change)=\"onFilter()\"\n            formControlName=\"IN_VIAG_INIC\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"situacao\">Situación</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacao\"\n            [virtualScroll]=\"true\"\n            labelForId=\"situacao\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            (change)=\"onFilter()\"\n            formControlName=\"IN_STAT\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"itemsPerPage\">Registros</label>\n          <select\n           class=\"form-control\"\n            formControlName=\"TT_REGI_PAGI\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"d-flex\">\n    <div [ngClass]=\"showDetailPanel ? 'col-4 px-0' : 'w-100'\">\n      <custom-table [hidden] =\"noResult\" [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              class=\"text-center align-middle\"\n              scope=\"col\"\n              [ngStyle]=\"{width: showDetailPanel ? '25%' : '13%' }\"\n            >\n              <thead-sorter\n                value=\"Filial\"\n                [active]=\"orderBy == 'CD_FILI'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('CD_FILI')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center align-middle\"\n              scope=\"col\"\n              [ngStyle]=\"{width: showDetailPanel ? '20%' : '08%' }\"\n            >\n              <thead-sorter\n                value=\"Ruta\"\n                [active]=\"orderBy == 'CD_ROMA'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('CD_ROMA')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-left align-middle\"\n              scope=\"col\"\n              [ngStyle]=\"{width: showDetailPanel ? '15%' : '06%' }\"\n            >\n              <thead-sorter\n                value=\"Placa\"\n                [active]=\"orderBy == 'PLAC'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('PLAC')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-left    align-middle\"\n              scope=\"col\"  style=\"width:12%\"\n              *ngIf=\"!showDetailPanel\"\n            >\n              <thead-sorter\n                value=\"Conductor\"\n                [active]=\"orderBy == 'NM_MOTO'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('NM_MOTO')\">\n              </thead-sorter> \n            </th>\n            <th\n              class=\"text-center  align-middle\"\n              scope=\"col\"\n              style=\"width:05%\"\n              *ngIf=\"!showDetailPanel\"\n            >\n              <thead-sorter\n                value=\"PESO\"\n                [active]=\"orderBy == 'TT_PESO'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('TT_PESO')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center  align-middle\"\n              scope=\"col\"\n              style=\"width:08%\"\n              *ngIf=\"!showDetailPanel\"\n              >\n              <thead-sorter\n                value=\"Distancia\"\n                [active]=\"orderBy == 'KM_PREV'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('KM_PREV')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center  align-middle\"\n              scope=\"col\"\n              style=\"width:10%\"\n              *ngIf=\"!showDetailPanel\"\n            >\n                <thead-sorter\n                value=\"Prev. Salida\"\n                [active]=\"orderBy == 'DT_PREV_SAID'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('DT_PREV_SAID')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center  align-middle\"\n              scope=\"col\"\n              style=\"width:10%\"\n              *ngIf=\"!showDetailPanel\"\n            >\n              <thead-sorter\n                value=\"Salida Real\"\n                [active]=\"orderBy == 'DT_VIAG_INIC'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('DT_VIAG_INIC')\">\n              </thead-sorter>\n            </th>\n            <th\n            class=\"text-left align-middle\"\n            scope=\"col\"\n            style=\"width:12%\"\n            *ngIf=\"!showDetailPanel\"\n            >\n              Fin de carga\n            </th>\n            <th\n              class=\"text-center align-middle\"\n              scope=\"col\"\n            >\n            </th>\n            <th\n              class=\"text-center align-middle\"\n              scope=\"col\"\n            >\n            </th>\n            <th\n              class=\"text-center align-middle\"\n              scope=\"col\"\n            >\n            </th>\n            <th\n              class=\"text-center align-middle\"\n              scope=\"col\"\n            >\n            </th>\n            <th\n              class=\"text-center  align-middle\"\n              scope=\"col\"\n            >\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let romaneio of romaneios; let i = index\" [ngClass]=\"{'table-active': romaneio.selected == true}\">\n            <td class=\"text-left align-middle text-truncate\"  [ngClass]=\"romaneio.IN_STAT == 1 ? 'border-success' : 'border-danger'\">({{romaneio.CD_FILI}})&nbsp; {{ romaneio.NM_FILI }}</td>\n            <td class=\"text-center align-middle\">{{ romaneio.CD_ROMA }}</td>\n            <td class=\"text-left align-middle\">\n              <span>{{ romaneio.PLAC | hifen}}</span>\n            </td>\n            <td class=\"text-left align-middle text-truncate\" *ngIf=\"!showDetailPanel\">\n              <span>{{ romaneio?.NM_MOTO | hifen}}</span>\n            </td>\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">\n              <span >{{ romaneio?.TT_PESO | number:'0.3-3' | hifen}}</span>  \n            </td>\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">\n              <span>{{ romaneio?.KM_PREV  | number: '0.0-0' | hifen}}</span>\n            </td>\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">{{ romaneio?.DT_PREV_SAID | date: 'dd/MM/yyyy HH:mm' }}</td>\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">{{ romaneio?.DT_VIAG_INIC | date: 'dd/MM/yyyy HH:mm' | hifen }}</td>\n            <td class=\"text-left\" *ngIf=\"!showDetailPanel\">\n              <div *ngIf=\"!romaneio?.loadingFinalizando\">\n                <button\n                  (click)=\"onFinalizaRomaneio(romaneio);\"\n                  [disabled]=\"!onPodeFinalizarRomaneio(romaneio)\"\n                  style=\"font-size: 1.25em;\"  \n                >\n                  <i *ngIf=\"romaneio.FINA_IN_STAT == 0\" class=\"fas fa-toggle-off\"></i>\n                  <i *ngIf=\"romaneio.FINA_IN_STAT == 1\" class=\"fas fa-toggle-on text-success\"></i>\n                </button>\n                <span *ngIf=\"!showDetailPanel\">{{ romaneio.DT_FINA | date: 'dd/MM/yyyy HH:mm' }}</span>\n              </div>\n              <div *ngIf=\"romaneio?.loadingFinalizando\" class=\"font-weight-bold text-muted\">Finalizando...</div>\n            </td>\n            <td class=\"font-weight-bold text-center\">\n              <span\n                [tooltip]=\"romaneio.TT_PEDI_ENTR + ' pedidos entregados de ' + romaneio.TT_PEDI\"\n                container=\"body\"\n                placement=\"left\"  \n              >\n                {{ romaneio.TT_PEDI_ENTR }}/{{ romaneio.TT_PEDI }}\n              </span>\n            </td>\n            <td class=\"text-right align-middle\">\n              <button\n                tooltip=\"Sincronizar con Fusion\"\n                placement=\"left\"\n                container=\"body\"\n                (click)=\"putRomaneio(romaneio)\"\n              >\n                <i class=\"fas fa-sync\" *ngIf=\"!romaneio.syncFusion\"></i>\n                <div\n                  class=\"spinner-border spinner-border-sm text-primary\"\n                  role=\"status\"\n                  *ngIf=\"romaneio.syncFusion\"\n                >\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </button>\n            </td>\n            <td class=\"text-right align-middle\">\n              <button\n                tooltip=\"Generar PDF\"\n                placement=\"left\"\n                container=\"body\"\n                (click)=\"onPrint(romaneio)\"\n              >\n                <i class=\"far fa-file-pdf\"></i>\n              </button>\n            </td>\n            <td class=\"text-right align-middle\">\n              <span\n                [tooltip]=\"romaneio?.DS_FATU\"\n                placement=\"left\"\n                container=\"body\"\n              >\n                <button\n                  [disabled]=\"onInEnviarFaturamento(romaneio)\"\n                  *ngIf=\"!romaneio.loadingFaturamento\"\n                  (click)=\"enviarRomaneioParaFaturamento(romaneio)\"\n                >\n                  <i class=\"far fa-paper-plane\" [ngClass]=\"onCorFaturamento(romaneio)\"></i>\n                </button>\n                <div\n                  class=\"spinner-border spinner-border-sm text-primary\"\n                  role=\"status\"\n                  *ngIf=\"romaneio.loadingFaturamento\"\n                >\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </span>\n            </td>\n            <td class=\"text-right align-middle\">\n              <button\n                tooltip=\"Detalles\"\n                placement=\"left\"\n                container=\"body\"\n                (click)=\"viewDetails(romaneio)\"\n              >\n                <i class=\"fas fa-search\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3 col p-0\" [hidden]=\"noResult\">\n        Demostración {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"5\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-8 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <div>\n          <table>\n            <tbody>\n              <tr>\n                <th scope=\"col\">Conductor:</th>\n                <td>{{ romaneio?.NM_MOTO | uppercase }}</td>\n              </tr>\n              <tr>\n                <th scope=\"col\">Vehiculo:</th>\n                <td>{{ romaneio?.PLAC | uppercase}}</td>\n              </tr>\n              <tr>\n                <th scope=\"col\">Peso:</th>\n                <td>\n                  <span *ngIf=\"!isChecked\">{{romaneio?.TT_PESO | number:'0.3-3' | hifen }}</span>\n                  <span *ngIf=\"isChecked\">{{romaneio?.FATU_TT_PESO | number:'0.3-3' | hifen }}</span>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"col\">Flete estimado:</th>\n                <td>\n                  <span *ngIf=\"!isChecked\">{{romaneio?.VL_FRET | currency:'Bs' | hifen }}</span>\n                  <span *ngIf=\"isChecked\">{{romaneio?.FATU_VL_FRET | currency:'Bs' | hifen }}</span>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"col\">Flete (sin impuestos):</th>\n                <td>\n                  <span>{{romaneio?.CTRC_VL_LIQD | currency:'Bs' | hifen }}</span>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"col\">Flete (con impuestos):</th>\n                <td>\n                  <span>{{romaneio?.CTRC_VL_BRUT | currency:'Bs' | hifen }}</span>\n                </td>\n              </tr>\n              <tr>\n                <th>Distancia (KM):</th>\n                <td>\n                  <span *ngIf=\"!isChecked\">{{romaneio?.KM_PREV | number: '0.0-0' | hifen}}</span>\n                  <span *ngIf=\"isChecked\">{{romaneio?.FATU_KM_PREV | number: '0.0-0' | hifen}}</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div>\n          <hr>\n          <div class=\"custom-control custom-checkbox mb-2\">\n            <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              id=\"customCheck\"\n              name=\"example1\"\n              [(ngModel)]=\"isChecked\" \n              (change)=\"getEntregasSomenteFaturamento(romaneio)\"\n            >\n            <label class=\"custom-control-label\" for=\"customCheck\">Facturación solo entregas</label>\n          </div>\n          <div>\n            <div *ngIf=\"loadingEntregas\">\n              <span>Cargando...</span>\n            </div>\n            <div *ngIf=\"!loadingEntregas\">\n              <div *ngFor=\"let entrega of entregas\">\n                <logistica-entrega-romaneios-pedidos\n                  [entrega]=\"entrega\"\n                  >\n                </logistica-entrega-romaneios-pedidos>\n              </div>\n              <div [hidden]=\"loadingEntregas || (entregas.length != 0)\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n                <empty-result message=\"No se encontró información\"></empty-result>\n              </div>\n            </div>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n  <logistica-entrega-romaneios-capa-romaneio></logistica-entrega-romaneios-capa-romaneio>\n</app-body>");

/***/ }),

/***/ "rkY/":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/romaneios/components/capa-romaneio/capa-romaneio.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{romaneio?.CD_ROMA}}</h4>\n    <div>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm\"\n        tooltip=\"Exportar\"\n        container=\"body\"\n        (click)=\"onExcel()\"\n      >\n        <i class=\"far fa-file-excel\"></i>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm mx-3\"\n        tooltip=\"Download\"\n        container=\"body\"\n        (click)=\"onDownload()\"\n      >\n        <i class=\"far fa-save\"></i>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm mr-3\"\n        tooltip=\"Imprimir\"\n        container=\"body\"  \n        (click)=\"onPrint()\"\n      >\n        <i class=\"fas fa-print\"></i>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn-icon-sm\"\n        tooltip=\"Fechar\"\n        container=\"body\"\n        (click)=\"modalRef.hide()\"\n      >\n        <i class=\"fas fa-times\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"p-5\" id=\"capaRomaneio\">\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <table style=\"font-size: 1.25rem;\">\n          <tbody>\n            <tr>\n              <th>Rota:&nbsp;</th>\n              <td>{{ romaneio?.CD_ROMA }}</td>\n            </tr>\n            <tr>\n              <th>Inicio:&nbsp;</th>\n              <td>{{ romaneio?.DT_PREV_SAID | date: 'dd/MM/yyyy HH:mm'}}</td>\n            </tr>\n            <tr>\n              <th>Chofer:&nbsp;</th>\n              <td>{{ romaneio?.NM_MOTO | hifen | uppercase }}</td>\n            </tr>\n            <tr>\n              <th>Vehículo:&nbsp;</th>\n              <td>{{ romaneio?.PLAC | hifen | uppercase }}</td>\n            </tr>\n            <tr>\n              <th>Peso:&nbsp;</th>\n              <td>\n                <span *ngIf=\"romaneio?.TT_PESO\">{{ romaneio?.TT_PESO | number:'0.3-3'}}&nbsp; Tons</span>\n                <span *ngIf=\"!romaneio?.TT_PESO\">-</span>\n              </td>\n            </tr>\n            <tr>\n              <th>Distancia:&nbsp;</th>\n              <td>{{ romaneio?.KM_PREV | number:'0.0-0'}}KM</td>\n            </tr>\n            <tr>\n              <th>Destino:&nbsp;</th>\n              <td>{{ romaneio?.DS_DEST | hifen | uppercase }}</td>\n            </tr>\n          </tbody>\n        </table>\n        <div>\n          <img [src]=\"url\" alt=\"Logo\" class=\"mr-2\" height=\"80px\" *ngFor=\"let url of getLogos()\">\n        </div>\n      </div>\n      <textarea rows=\"1\"></textarea>\n      <div *ngIf=\"!loadingPedidos\">\n        <div *ngFor=\"let pedido of pedidos\">\n          <div class=\"mt-5 px-2 py-3 border border-dark d-flex w-100\">\n            <div class=\"mx-2 d-flex align-items-center\" style=\"font-size: 2.5rem;\">\n              <span>{{pedido?.ENTR_NR_SQNC}}</span>\n            </div>\n            <div class=\"w-100\">\n              <div class=\"d-flex\" style=\"border-bottom: 1px dashed; padding-bottom: 0.5em;\">\n                <div class=\"d-flex col-6 p-0\">\n                  <table>\n                    <tbody>\n                      <tr>\n                        <th>Factura:</th>\n                        <td>{{ pedido?.NOTA_FISC }}</td>\n                      </tr>\n                      <tr>\n                        <th>Orden de vienda:</th>\n                        <td>{{ pedido?.CD_PEDI }}</td>\n                      </tr>\n                      <tr>\n                        <th>Peso:</th>\n                        <td>{{ pedido?.TT_PESO | number : '0.3-3' }}&nbsp;Tons</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"col-6 p-0 d-flex justify-content-end flex-column\">\n                  <span class=\"font-weight-bolder d-block\">\n                    ({{ pedido?.CD_CLIE }})&nbsp;{{ pedido?.NM_CLIE }}\n                  </span>\n                  <span>\n                    {{pedido?.DS_ENDE | uppercase}}\n                  </span>\n                </div>\n              </div>\n              <div class=\"mt-1 d-flex justify-content-center\" *ngIf=\"!pedido.materialLoading && pedido?.MATE\">\n                <table width=\"100%\">\n                  <thead>\n                    <tr>\n                      <th width=\"10%\">#</th>\n                      <th width=\"10%\">Código</th>\n                      <th width=\"40%\">Descripción</th>\n                      <th width=\"10%\" class=\"text-center\">Unidade</th>\n                      <th width=\"10%\" class=\"text-right\">Monto</th>\n                      <th width=\"20%\" class=\"text-left pl-3\">Nota</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let material of pedido?.MATE; let index = index;\">\n                      <td width=\"10%\">\n                        <span *ngIf=\"material?.CD_SEQU_MATE\">{{ material?.NR_SQNC }}</span>\n                        <span *ngIf=\"!material?.CD_SEQU_MATE\">{{ index + 1 }}</span>\n                      </td>\n                      <td width=\"10%\">{{ material?.CD_PROD }}</td>\n                      <td width=\"35%\">{{ material?.NM_PROD | uppercase }}</td>\n                      <td width=\"10%\" class=\"text-center\">{{ material?.DS_UNID_MEDI }}</td>\n                      <td width=\"15%\" class=\"text-right\">{{ material?.TT_PROD | number:'0.3-3' }}</td>\n                      <td width=\"20%\" class=\"text-left pl-3\">\n                        <span *ngIf=\"material?.DS_OBSE\">{{ material?.DS_OBSE }}</span>\n                        <span *ngIf=\"!material?.DS_OBSE\" class=\"d-block w-100 text-center\">-</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div *ngIf=\"pedido.materialLoading\" class=\"spinner-border text-primary mt-1\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"loadingPedidos\" class=\"spinner-border text-primary mt-3\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "w3SC":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/romaneios/components/pedidos/pedidos.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaEntregaRomaneiosPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosPedidosComponent", function() { return LogisticaEntregaRomaneiosPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedidos.component.html */ "XTH6");
/* harmony import */ var _pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidos.component.scss */ "0bSm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_romaneios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/romaneios.service */ "2VLj");







let LogisticaEntregaRomaneiosPedidosComponent = class LogisticaEntregaRomaneiosPedidosComponent {
    constructor(romaneiosService, pnotifyService) {
        this.romaneiosService = romaneiosService;
        this.pnotifyService = pnotifyService;
        this.pedidos = [];
        this.loadingPedidos = false;
        this.ctes = [];
        this.loadingCtes = false;
        this.notificacoes = {
            entrega: {
                faturamento: {
                    tooltips: {
                        0: 'Entrega não marcada para faturamento de cte',
                        1: 'Entrega para faturamento de cte'
                    },
                    cor: {
                        0: 'text-warning',
                        1: 'text-success'
                    }
                },
                cte: {
                    tooltips: {
                        0: 'Cte\'s não emitidos',
                        1: 'Cte\'s emitidos'
                    },
                    cor: {
                        0: 'text-danger',
                        1: 'text-success'
                    }
                },
                entrega: {
                    tooltips: {
                        0: 'Entrega realizada',
                        1: 'Entrega não realizada'
                    },
                    cor: {
                        0: 'text-danger',
                        1: 'text-success'
                    }
                },
                situacao: {
                    tooltips: {
                        0: 'Entrega inativa',
                        1: 'Entrega ativa'
                    },
                    cor: {
                        0: 'text-danger',
                        1: 'text-success'
                    }
                }
            },
            pedido: {
                faturamento: {
                    tooltips: {
                        0: 'Nota Fiscal não marcada para faturamento de cte',
                        1: 'Nota Fiscal para faturamento de cte'
                    },
                    cor: {
                        0: 'text-warning',
                        1: 'text-success'
                    }
                },
                cte: {
                    tooltips: {
                        0: 'Cte\'s não emitidos',
                        1: 'Cte\'s emitidos'
                    },
                    cor: {
                        0: 'text-danger',
                        1: 'text-success'
                    }
                },
                entrega: {
                    tooltips: {
                        0: 'Entrega realizada',
                        1: 'Entrega não realizada'
                    },
                    cor: {
                        0: 'text-danger',
                        1: 'text-success'
                    }
                },
                situacao: {
                    tooltips: {
                        0: 'Nota Fiscal inativa',
                        1: 'Nota Fiscal ativa'
                    },
                    cor: {
                        0: 'text-danger',
                        1: 'text-success'
                    }
                }
            }
        };
        this.arrow = {
            entrega: true,
            pedidos: true
        };
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        if (!((_a = changes === null || changes === void 0 ? void 0 : changes.entrega) === null || _a === void 0 ? void 0 : _a.currentValue)) {
            return;
        }
        if (((_c = Object.keys((_b = changes === null || changes === void 0 ? void 0 : changes.entrega) === null || _b === void 0 ? void 0 : _b.currentValue)) === null || _c === void 0 ? void 0 : _c.length) != 0 && ((_d = changes === null || changes === void 0 ? void 0 : changes.entrega) === null || _d === void 0 ? void 0 : _d.firstChange)) {
            this.getPedidos();
        }
    }
    getMateriais(pedido) {
        var _a, _b, _c;
        if (pedido === null || pedido === void 0 ? void 0 : pedido.materiais)
            return;
        pedido.loadingMateriais = true;
        const _params = {
            "CD_PEDI": (_a = pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI) !== null && _a !== void 0 ? _a : '',
            "CD_EMPR": (_b = pedido === null || pedido === void 0 ? void 0 : pedido.CD_EMPR) !== null && _b !== void 0 ? _b : '',
            "CD_ROMA": (_c = pedido === null || pedido === void 0 ? void 0 : pedido.CD_ROMA) !== null && _c !== void 0 ? _c : ''
        };
        this.romaneiosService
            .getMateriais(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            pedido.loadingMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
            }
            pedido.materiais = response.body['data'];
        }, (error) => {
        });
    }
    getCtes() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (this.ctes.length !== 0)
            return;
        if (this.arrow['ctes'] === false)
            return;
        this.loadingCtes = true;
        const params = {
            'CD_ROMA': (_b = (_a = this.entrega) === null || _a === void 0 ? void 0 : _a.CD_ROMA) !== null && _b !== void 0 ? _b : '',
            'CD_PEDI': (_d = (_c = this.entrega) === null || _c === void 0 ? void 0 : _c.CD_PEDI) !== null && _d !== void 0 ? _d : '',
            'CD_CLIE': (_f = (_e = this.entrega) === null || _e === void 0 ? void 0 : _e.CD_CLIE) !== null && _f !== void 0 ? _f : '',
            'DS_LOCA_ENTR': (_h = (_g = this.entrega) === null || _g === void 0 ? void 0 : _g.DS_LOCA_ENTR) !== null && _h !== void 0 ? _h : '',
            'DS_CIDA': (_k = (_j = this.entrega) === null || _j === void 0 ? void 0 : _j.DS_CIDA) !== null && _k !== void 0 ? _k : '',
            'DS_BAIR': (_m = (_l = this.entrega) === null || _l === void 0 ? void 0 : _l.DS_BAIR) !== null && _m !== void 0 ? _m : '',
            'DS_ESTA': (_p = (_o = this.entrega) === null || _o === void 0 ? void 0 : _o.DS_ESTA) !== null && _p !== void 0 ? _p : ''
        };
        this.romaneiosService
            .getCtes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loadingCtes = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.ctes = [];
                return;
            }
            this.ctes = response.body['data'];
        }, (error) => {
            this.ctes = [];
        });
    }
    getPedidos() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (this.pedidos.length !== 0) {
            return;
        }
        this.loadingPedidos = true;
        const params = {
            'CD_ROMA': (_b = (_a = this.entrega) === null || _a === void 0 ? void 0 : _a.CD_ROMA) !== null && _b !== void 0 ? _b : '',
            'CD_CLIE': (_d = (_c = this.entrega) === null || _c === void 0 ? void 0 : _c.CD_CLIE) !== null && _d !== void 0 ? _d : '',
            'DS_LOCA_ENTR': (_f = (_e = this.entrega) === null || _e === void 0 ? void 0 : _e.DS_LOCA_ENTR) !== null && _f !== void 0 ? _f : '',
            'DS_CIDA': (_h = (_g = this.entrega) === null || _g === void 0 ? void 0 : _g.DS_CIDA) !== null && _h !== void 0 ? _h : '',
            'DS_BAIR': (_k = (_j = this.entrega) === null || _j === void 0 ? void 0 : _j.DS_BAIR) !== null && _k !== void 0 ? _k : '',
            'DS_ESTA': (_m = (_l = this.entrega) === null || _l === void 0 ? void 0 : _l.DS_ESTA) !== null && _m !== void 0 ? _m : ''
        };
        this.romaneiosService
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loadingPedidos = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            const pedidos = response.body['data'];
            this.pedidos = pedidos;
        }, (error) => {
        });
    }
    copyToClipboard(value) {
        var txtArea = document.createElement("textarea");
        txtArea.id = 'txt';
        txtArea.style.position = 'fixed';
        txtArea.style.top = '0';
        txtArea.style.left = '0';
        txtArea.style.opacity = '0';
        txtArea.value = value;
        document.body.appendChild(txtArea);
        txtArea.select();
        document.execCommand("copy");
        this.pnotifyService.success("Copiado");
    }
    onToggleArrow(status, type) {
        this.arrow[type] = status;
    }
    onCorCancelado(item) {
        if (item.IN_STAT == 0)
            return 'text-muted';
        return;
    }
};
LogisticaEntregaRomaneiosPedidosComponent.ctorParameters = () => [
    { type: _services_romaneios_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntregaRomaneiosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] }
];
LogisticaEntregaRomaneiosPedidosComponent.propDecorators = {
    entrega: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    inSomenteEntregaFaturamento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
LogisticaEntregaRomaneiosPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-romaneios-pedidos',
        template: _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_romaneios_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntregaRomaneiosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])
], LogisticaEntregaRomaneiosPedidosComponent);



/***/ })

}]);
//# sourceMappingURL=romaneios-romaneios-module-es2015.js.map