(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setores-setores-module"],{

/***/ "+/8n":
/*!************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/lista/lista.component.ts ***!
  \************************************************************************/
/*! exports provided: LogisticaYmsSetoresListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresListaComponent", function() { return LogisticaYmsSetoresListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "3OOm");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "OB1W");
/* harmony import */ var _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../tipos-setor/services/tipos-setor.service */ "uO4K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_setores_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/setores.service */ "vpXL");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../cadastros/filiais/services/filiais.service */ "NXOV");




//angular



//servicos







// rxjs



let LogisticaYmsSetoresListaComponent = class LogisticaYmsSetoresListaComponent {
    /* Pagination */
    constructor(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, setoresService, filiaisService, tiposSetorService) {
        this.route = route;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.dateService = dateService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.detailPanelService = detailPanelService;
        this.confirmModalService = confirmModalService;
        this.setoresService = setoresService;
        this.filiaisService = filiaisService;
        this.tiposSetorService = tiposSetorService;
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        this.totalItens = [];
        this.filial = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.tableConfigAssocIntervalos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        // Tipos de Situação dos Setores (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '2',
                nome: 'Inativos',
            },
        ];
        // Subtitles (Ativo/Inativo)
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
        this.onDetailPanelEmitter();
        this.getFilterSetores();
        this.getTiposSetor();
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
            this.getSetores(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            UUID_LOGI_YMS_SETO: [null],
            NM_SETO: [null],
            UUID_LOGI_YMS_SETO_TIPO: [null],
            NM_SETO_TIPO: [null],
            IN_STAT: [null],
            DS_OBSE: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            DT_INCL: [null],
            DT_ATUA: [null],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'YMS',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Setores',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(setores) {
        this.getIntervalos({ UUID_LOGI_YMS_SETO: setores.UUID_LOGI_YMS_SETO });
        this.getMateriaisAssociados({ UUID_LOGI_YMS_SETO: setores.UUID_LOGI_YMS_SETO });
        this.detailPanelService.show();
        this.setorSelecionado = setores;
        this.detailPanelService.loadedFinished(false);
    }
    getIntervalos(params) {
        params.IN_STAT = '1';
        params.IN_PAGI = '0';
        params.ORDE_BY = 'ID_REFE_ERP';
        params.ORDE_TYPE = 'desc';
        this.loadingAssociacaoIntervalos = true;
        this.setoresService
            .getIntervalos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingAssociacaoIntervalos = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.associacaoIntervalos = response.body['data'];
                if (this.associacaoIntervalos.length > 9) {
                    this.tableConfigAssocIntervalos.fixedHeader = true;
                }
                this.noAssocIntervalos = false;
            }
            else {
                this.pnotify.notice('Nenhuma associação encontrada!');
                this.noAssocIntervalos = true;
                this.associacaoIntervalos = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getMateriaisAssociados(params) {
        this.loadingAssociacaoMateriais = true;
        params.IN_STAT = '1';
        params.IN_PAGI = '0';
        params.ORDE_BY = 'ID_REFE_ERP';
        params.ORDE_TYPE = 'desc';
        console.log(params);
        this.setoresService
            .getMateriaisAssociados(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingAssociacaoMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.associacaoMateriais = response.body['data'];
                if (this.associacaoMateriais.length > 9) {
                    this.tableConfigAssocMateriais.fixedHeader = true;
                }
                this.noAssocMateriais = false;
            }
            else {
                this.pnotify.notice('Nenhuma associação encontrada!');
                this.noAssocMateriais = true;
                this.associacaoMateriais = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getSetores(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.setoresService
            .getSetores(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.setores = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.setores = [];
            }
        }, (error) => {
            this.noResult = true;
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getFilterSetores(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = 1;
        _params.IN_PAGI = 0;
        this.loadingSetores = true;
        this.setoresService
            .getSetores(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingSetores = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filterSetores = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getTiposSetor() {
        this.loadingTiposSetor = true;
        this.tiposSetorService
            .getTiposSetor({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingTiposSetor = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposSetor = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
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
    classStatusBorder(setores) {
        let borderClass;
        if (setores.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (setores.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(params) {
        const stat = params.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
            this.loadingNavBar = true;
            params.IN_STAT = stat;
            return this.setoresService.postSetores(params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.setores.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Setores${dataExport}`);
    }
    convertMysqlTime(time) {
        return this.dateService.convertMysqlTime(time);
    }
};
LogisticaYmsSetoresListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"] },
    { type: _services_setores_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaYmsSetoresService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaFiliaisService"] },
    { type: _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposSetorService"] }
];
LogisticaYmsSetoresListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-yms-setores-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"],
        _services_setores_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaYmsSetoresService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaFiliaisService"],
        _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposSetorService"]])
], LogisticaYmsSetoresListaComponent);



/***/ }),

/***/ "+Lrf":
/*!********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/cadastro/cadastro.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9zZXRvcmVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "/+9e":
/*!******************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/cadastro/cadastro.component.ts ***!
  \******************************************************************************/
/*! exports provided: LogisticaYmsSetoresCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresCadastroComponent", function() { return LogisticaYmsSetoresCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "dJM5");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "+Lrf");
/* harmony import */ var src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/icons-fonts-awesome.service */ "B5rI");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../cadastros/filiais/services/filiais.service */ "NXOV");
/* harmony import */ var _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../tipos-circuito/services/tipos-circuito.service */ "j4Bn");
/* harmony import */ var _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../tipos-setor/services/tipos-setor.service */ "uO4K");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_setores_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/setores.service */ "vpXL");








//Services



//Bootstrap


//Angular



//rxjs



let LogisticaYmsSetoresCadastroComponent = class LogisticaYmsSetoresCadastroComponent {
    constructor(dateService, formBuilder, pnotify, activatedRoute, router, localeService, filiaisService, setoresService, foawService, tiposSetorService, tiposCircuitoService, titleService, atividadesService) {
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localeService = localeService;
        this.filiaisService = filiaisService;
        this.setoresService = setoresService;
        this.foawService = foawService;
        this.tiposSetorService = tiposSetorService;
        this.tiposCircuitoService = tiposCircuitoService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.tipos = [
            {
                nome: 'FIXO',
                cod: 'FIXO',
            },
            {
                nome: 'VARIÁVEL',
                cod: 'VARIAVEL',
            },
        ];
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_11__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getTiposSetor();
        this.getTiposCircuito();
        this.getFiliais();
        this.getIcones();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id')) {
            this.getSetor(_params['id']);
            this.getIntervalos({ UUID_LOGI_YMS_SETO: _params['id'], IN_STAT: '1' });
        }
        else {
            this.onAddIntervalos();
        }
    }
    getIntervalos(params) {
        this.loadingNavBar = true;
        this.loadingTiposCircuitoSetor = true;
        this.setoresService
            .getIntervalos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingNavBar = false;
            this.loadingTiposCircuitoSetor = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const intervalos = response['body']['data'];
            const promise = () => intervalos.forEach(() => this.onAddIntervalos());
            yield Promise.resolve(promise());
            this.form.get('intervalos').patchValue(intervalos);
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
        });
    }
    getTiposCircuito() {
        this.loadingTiposCircuito = true;
        this.tiposCircuitoService
            .getTiposCircuito({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingTiposCircuito = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposCircuito = response.body['data'];
            }
            else {
                this.tiposCircuito = [];
                this.pnotify.notice('Nenhum tipo de circuito encontrado!');
            }
        }),
            (error) => {
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    getTiposSetor() {
        this.loadingTiposSetor = true;
        this.tiposSetorService
            .getTiposSetor({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingTiposSetor = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposSetor = response.body['data'];
            }
            else {
                this.tiposSetor = [];
                this.pnotify.notice('Nenhum tipo de setor encontrado!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getSetor(id) {
        this.loading = true;
        this.setoresService
            .getSetor(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'];
                this.form.patchValue(data);
                this.noResult = false;
            }
            else {
                this.noResult = true;
            }
        }, (error) => {
            this.noResult = true;
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService
            .getFiliais({ IN_STAT: '1', IN_PAGI: '0', IN_YMS: 1 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filiais = response.body['data'];
            }
            else {
                this.filiais = [];
                this.pnotify.notice('Nenhuma filial encontrada!');
            }
        }),
            (error) => {
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    get formIntervalos() {
        return this.form.get('intervalos');
    }
    onAddIntervalos() {
        this.formIntervalos.push(this.formBuilder.group({
            UUID_LOGI_YMS_SETO: [null],
            UUID_LOGI_YMS_CIRC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            TP_INTV: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            HR_INTV: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
        }));
    }
    onDeleteTipoCircuito(index) {
        if (this.formIntervalos.length === 1) {
            this.pnotify.notice('Informe ao menos um tipo de circuito.');
            return;
        }
        const id = this.form.get('UUID_LOGI_YMS_SETO').value;
        let intervalos = this.formIntervalos.at(index).value;
        intervalos.UUID_LOGI_YMS_SETO = id,
            intervalos = Object.assign(Object.assign({}, intervalos), { 'IN_STAT': '0' });
        if (!intervalos['UUID_LOGI_YMS_CIRC_TIPO']) {
            this.formIntervalos.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.setoresService
            .postIntervalos(intervalos)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formIntervalos.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'YMS',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Setores',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            UUID_LOGI_YMS_SETO: [null],
            NM_SETO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            UUID_LOGI_YMS_SETO_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            UUID_LOGI_FILI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            IN_STAT: [null],
            DS_OBSE: [null],
            DS_ICON: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            intervalos: this.formBuilder.array([]),
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postSetores() {
        let params = this.form.value;
        delete params['intervalos'];
        this.loadingNavBar = true;
        this.setoresService
            .postSetores(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const id = response.body['data'];
                this.form.get('UUID_LOGI_YMS_SETO').setValue(id);
                if (this.form.get('intervalos').value[0]['UUID_LOGI_YMS_CIRC_TIPO']) {
                    this.postIntervalos(id);
                }
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    postIntervalos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const tpCircuitos = this.formIntervalos.value;
            if (!tpCircuitos) {
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
                return;
            }
            const promise = () => {
                tpCircuitos.forEach(el => {
                    if (el.HR_INTV instanceof Date) {
                        el.HR_INTV = this.dateService.convert2PhpDate(el.HR_INTV);
                    }
                    const params = Object.assign(Object.assign({}, el), { 'UUID_LOGI_YMS_SETO': id });
                    request.push(this.setoresService
                        .postIntervalos(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                this.pnotify.success('Intervalos cadastrados com sucesso');
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }, (error) => {
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            });
        });
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getIcones() {
        this.loadingIcones = true;
        this.foawService.getIcones().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingIcones = false;
        })).subscribe(response => {
            if (response.status === 200) {
                this.icones = response.body['icones'];
            }
        });
    }
    onIconSelected(event) {
        this.icone = event.classe;
    }
};
LogisticaYmsSetoresCadastroComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaFiliaisService"] },
    { type: _services_setores_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaYmsSetoresService"] },
    { type: src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_3__["IconesFontAwesomeService"] },
    { type: _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsTiposSetorService"] },
    { type: _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsTiposCircuitoService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] }
];
LogisticaYmsSetoresCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"])({
        selector: 'logistica-yms-setores-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaFiliaisService"],
        _services_setores_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaYmsSetoresService"],
        src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_3__["IconesFontAwesomeService"],
        _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsTiposSetorService"],
        _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsTiposCircuitoService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]])
], LogisticaYmsSetoresCadastroComponent);



/***/ }),

/***/ "/z8U":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/setores-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaYmsSetoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresRoutingModule", function() { return LogisticaYmsSetoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "+/8n");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "/+9e");
/* harmony import */ var _associacao_materiais_associacao_materiais_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./associacao-materiais/associacao-materiais.component */ "7f5n");







const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsSetoresListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsSetoresCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsSetoresCadastroComponent"],
    },
    {
        path: 'materiais/:id',
        component: _associacao_materiais_associacao_materiais_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsSetoresAssociacaoMateriaisComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaYmsSetoresRoutingModule = class LogisticaYmsSetoresRoutingModule {
};
LogisticaYmsSetoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaYmsSetoresRoutingModule);



/***/ }),

/***/ "3OOm":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/setores/lista/lista.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Setores\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"tiposSetor\">Tipo de Setor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tiposSetor\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingTiposSetor\"\n                labelForId=\"UUID_LOGI_YMS_SETO_TIPO\"\n                bindLabel=\"NM_SETO_TIPO\"\n                bindValue=\"UUID_LOGI_YMS_SETO_TIPO\"\n                id=\"UUID_LOGI_YMS_SETO_TIPO\"\n                formControlName=\"UUID_LOGI_YMS_SETO_TIPO\"\n                (change)=\"getFilterSetores({'UUID_LOGI_YMS_SETO_TIPO': $event?.UUID_LOGI_YMS_SETO_TIPO || ''})\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"filterSetores\">Setor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filterSetores\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingSetores\"\n                labelForId=\"UUID_LOGI_YMS_SETO\"\n                bindLabel=\"NM_SETO\"\n                bindValue=\"UUID_LOGI_YMS_SETO\"\n                id=\"UUID_LOGI_YMS_SETO\"\n                formControlName=\"UUID_LOGI_YMS_SETO\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-3 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" ></th>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Descrição</th>\n              <th scope=\"col\" >Tipo de Setor</th>\n              <th scope=\"col\" style=\"width:160px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let setor of setores\"  [class.table-active]=\"setor?.UUID_LOGI_YMS_SETO == setorSelecionado?.UUID_LOGI_YMS_SETO && showDetailPanel\">\n              <td  [ngClass]=\"setor.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n                <div [class]=\"setor.DS_ICON\"></div>\n              </td>\n              <td>{{setor.UUID_LOGI_YMS_SETO }}</td>\n              <td >{{ setor.NM_SETO | uppercase}}</td>\n              <td >{{ setor.NM_SETO_TIPO | uppercase}}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"setor.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(setor)\">\n                    <i [ngClass]=\"setor.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', setor.UUID_LOGI_YMS_SETO]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Associar Materiais\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../materiais/', setor.UUID_LOGI_YMS_SETO]\">\n                    <i class=\"fas fa-th-large\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(setor)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Detalhes\">\n        <tabset>\n          <tab heading=\"Dados do Setor\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div>\n                <div class=\"d-flex w-100\">\n                  <div class=\"rounded-circle text-white icon-40 bg-secondary\" >\n                    <i [class]=\"setorSelecionado?.DS_ICON\"></i>\n                  </div>\n                  <strong class=\"my-auto ml-3 text-truncate\" >\n                    {{setorSelecionado?.NM_SETO | uppercase}}\n                  </strong>\n                </div>\n                <div class=\"form-row mt-3\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>ID do Setor</label>\n                    <div>{{ setorSelecionado?.UUID_LOGI_YMS_SETO}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Tipo de Setor</label>\n                    <div>{{ setorSelecionado?.NM_SETO_TIPO | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Filial</label>\n                    <div>{{ setorSelecionado?.NM_FILI | uppercase}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row \">\n                  <div class=\"form-group col-lg-12\">\n                    <label>Observação:</label>\n                    <div>{{ setorSelecionado?.DS_OBSE | uppercase}}</div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"form-row\">\n                  <div class=\"form-group col\">\n                    <label *ngIf=\"!setorSelecionado?.DT_ATUA == null\">Usuário Responsável Pelo Cadastro</label>\n                    <label *ngIf=\"setorSelecionado?.DT_ATUA == null\">Usuário Responsável Pela Atualização</label>\n                    <div>{{ setorSelecionado?.NM_USUA | uppercase }}</div>\n                  </div>\n                  <div class=\"form-group col\">\n                    <label *ngIf=\"!setorSelecionado?.DT_ATUA == null\">Data do Cadastro</label>\n                    <label *ngIf=\"setorSelecionado?.DT_ATUA == null\">Data da Atualização</label>\n                    <div>{{(setorSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (setorSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tab>\n          <tab  heading=\"Materiais Associados\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div class=\"mb-3\">\n                <custom-table  [config]=\"tableConfigAssocMateriais\"  class=\"text-center\" *ngIf=\"!loadingAssociacaoMateriais && !noAssocMateriais\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th scope=\"col\"  width=\"20%\">Código</th>\n                      <th scope=\"col\"  width=\"80%\">Material</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let material of associacaoMateriais\">\n                      <td  width=\"20%\">{{ material?.ID_REFE_ERP }}</td>\n                      <td  width=\"80%\">{{ material?.NM_MATE | uppercase }}</td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n                <message\n                  *ngIf=\"loadingAssociacaoMateriais\"\n                  icon=\"fas fa-cog fa-spin\"\n                  text=\"Estamos pesquisando os materiais para você...\">\n                </message>\n                <div [hidden]=\"loadingAssociacaoMateriais || !noAssocMateriais\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n                </div>\n              </div>\n            </div>\n          </tab>  \n          <tab  heading=\"Intervalos\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div class=\"mb-3\">\n                <custom-table  [config]=\"tableConfigAssocIntervalos\" class=\"text-center\" *ngIf=\"!loadingAssociacaoIntervalos && !noAssocIntervalos\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th scope=\"col\"  width=\"40%\">Tipo de Circuito</th>\n                      <th scope=\"col\"  width=\"40%\">\n                        Tipo de Intervalo\n                        <button\n                          class=\"btn-icon-sm\"\n                          [tooltip]=\"tooltipTipoIntervalo\"\n                          container=\"body\"\n                          placement=\"top\"  \n                          >\n                          <i class=\"far fa-question-circle\"></i>\n                        </button>\n                      \n                        <ng-template #tooltipTipoIntervalo>\n                          <table>\n                            <tbody>\n                              <tr>\n                                <th><i class=\"fas fa-circle text-primary\"></i> FIXO :Tempo fixo de permanência</th>\n                              </tr>\n                              <br>\n                              <tr>\n                                <th><i class=\"fas fa-circle text-primary\"></i>Variável : Tempo de permanência pode variar de acordo com a quantidade</th>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </ng-template>\n\n                      </th>\n                      <th scope=\"col\"  width=\"20%\">Tempo</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let intervalo of associacaoIntervalos\">\n                      <td  width=\"40%\">{{ intervalo?.NM_CIRC_TIPO  | uppercase }}</td>\n                      <td  width=\"40%\">{{ intervalo?.TP_INTV | uppercase }}</td>\n                      <td  width=\"20%\">{{ convertMysqlTime(intervalo?.HR_INTV) | date: 'HH:mm'}}</td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n                <message\n                  *ngIf=\"loadingAssociacaoIntervalos\"\n                  icon=\"fas fa-cog fa-spin\"\n                  text=\"Estamos pesquisando os intervalos para você...\">\n                </message>\n                <div [hidden]=\"loadingAssociacaoIntervalos || !noAssocIntervalos\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n                </div>\n              </div>\n            </div>\n          </tab>       \n        </tabset> \n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "7f5n":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/associacao-materiais/associacao-materiais.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LogisticaYmsSetoresAssociacaoMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresAssociacaoMateriaisComponent", function() { return LogisticaYmsSetoresAssociacaoMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_associacao_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./associacao-materiais.component.html */ "fdwM");
/* harmony import */ var _associacao_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associacao-materiais.component.scss */ "MsuT");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_setores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/setores.service */ "vpXL");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




// angular



// services



// rxjs

let LogisticaYmsSetoresAssociacaoMateriaisComponent = class LogisticaYmsSetoresAssociacaoMateriaisComponent {
    constructor(formBuilder, setoresService, pnotify, router, activatedRoute, atividadesService, confirmModalService) {
        this.formBuilder = formBuilder;
        this.setoresService = setoresService;
        this.pnotify = pnotify;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.confirmModalService = confirmModalService;
        this.appTitle = "Associação Material";
        this.breadCrumbTree = [];
        /*loading*/
        this.loading = false;
        this.loadingNavBar = false;
        this.noResult = true;
        /*loading*/
        this.materiais = [];
        this.materiaisLoading = false;
        this.loadingMateriais = false;
        this.materiaisAssociados = [];
        this.materiaisAssociadosLoading = false;
        this.tableConfigMateriaisAssociados = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false,
        };
        this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.toggle = {
            materiais: false,
            materiaisAssociados: false
        };
        this.form = this.formBuilder.group({
            "UUID_LOGI_YMS_SETO": [{ value: null, disabled: true }],
            "NM_SETO": [null],
        });
        this.formMateriais = this.formBuilder.group({
            buscarPor: ['NM_MATE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            UUID_REFE_ERP: [null],
            NM_MATE: [null],
            NM_CLAS: [null],
            NM_LINH: [null],
        });
    }
    ngOnInit() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
        this.onActivatedRoute();
        this.setBreadCrumb();
        this.getSetores();
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (!(params === null || params === void 0 ? void 0 : params.id)) {
            this.loading = false;
            return;
        }
        this.form.get('UUID_LOGI_YMS_SETO').setValue(params['id']);
        this.getMateriaisAssociados({ "UUID_LOGI_YMS_SETO": params === null || params === void 0 ? void 0 : params.id });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Cadastro',
                routerLink: `/logistica/cadastros/${id}`,
            },
            {
                descricao: 'Setores',
                routerLink: `../../`,
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getSetores() {
        this.loadingSetores = true;
        this.setoresService
            .getSetores({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingSetores = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.setores = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        });
    }
    getMateriais() {
        var _a, _b;
        const buscarPor = (_a = this.formMateriais.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
        const pesquisa = (_b = this.formMateriais.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
        let params = {};
        if (buscarPor) {
            params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
        }
        params['situacao'] = '1';
        params['qtItensPagina'] = 100;
        this.materiaisLoading = true;
        this.setoresService
            .getMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.materiaisLoading = false;
        }))
            .subscribe(response => {
            let materiais = response.body['result'];
            this.materiais = materiais.filter(material => {
                return !this.materiaisAssociados.some(item => item.UUID_MATE == material.ID);
            });
            this.tableConfigMateriais.fixedHeader = this.materiais.length > 9 ? true : false;
        });
    }
    getMateriaisAssociados(params) {
        this.loadingMateriais = true;
        params.IN_STAT = '1';
        params.IN_PAGI = '0';
        params.ORDE_BY = 'ID_REFE_ERP';
        this.setoresService
            .getMateriaisAssociados(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingMateriais = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            this.materiaisAssociados = response.body['data'];
            this.tableConfigMateriaisAssociados.fixedHeader = this.materiaisAssociados.length > 9 ? true : false;
        });
    }
    onAssociarMateriais() {
        let materiais = this.materiais.filter(material => material.checked);
        this.toggle.materiais = false;
        materiais.map(item => {
            var _a, _b;
            item.loading = true;
            if (this.materiaisAssociados.some(material => (material === null || material === void 0 ? void 0 : material.ID_REFE_ERP) === item.ID_REFE_ERP)) {
                return;
            }
            let params = {
                "UUID_LOGI_YMS_SETO": (_a = this.form.get("UUID_LOGI_YMS_SETO").value) !== null && _a !== void 0 ? _a : "",
                "UUID_MATE": (_b = item === null || item === void 0 ? void 0 : item.ID) !== null && _b !== void 0 ? _b : "",
                "IN_STAT": "1"
            };
            this.setoresService
                .postMateriaisAssociados(params)
                .subscribe(response => {
                if (response.status === 200) {
                    this.materiaisAssociados = [...this.materiaisAssociados, Object.assign(Object.assign({}, item), { checked: false, loading: false, UUID_MATE: item.ID, UUID_LOGI_YMS_SETO: this.form.get('UUID_LOGI_YMS_SETO').value })];
                    this.materiais = this.materiais.filter(material => !material.checked);
                    this.tableConfigMateriaisAssociados.fixedHeader = this.materiaisAssociados.length > 9 ? true : false;
                }
            });
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    onRemoverAssociacao(material) {
        let materiais = material ? [material] : this.materiaisAssociados.filter(material => material.checked);
        this.toggle.materiaisAssociados = false;
        if (materiais.length == 0) {
            this.pnotify.notice("Nenhum material selecionado.");
            return;
        }
        this.confirmDelete()
            .subscribe((response) => {
            if (!response) {
                return;
            }
            materiais.map(item => {
                item.IN_STAT = '0';
                item.loading = true;
                this.setoresService
                    .deleteAssociacoes(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                    item.loading = false;
                }))
                    .subscribe(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    this.materiaisAssociados = this.materiaisAssociados
                        .filter(material => material.UUID_MATE != item.UUID_MATE);
                    this.tableConfigMateriaisAssociados.fixedHeader = this.materiaisAssociados.length > 9 ? true : false;
                });
                (error) => {
                    const message = error.error.message;
                    message ? this.pnotify.error(message) : this.pnotify.error();
                };
            });
        });
    }
    onToggleAll(item) {
        this.toggle[item] = !this.toggle[item];
        this[item].map(material => material.checked = this.toggle[item]);
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
};
LogisticaYmsSetoresAssociacaoMateriaisComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_setores_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsSetoresService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] }
];
LogisticaYmsSetoresAssociacaoMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-Setores-associacao-materiais',
        template: _raw_loader_associacao_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacao_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_setores_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsSetoresService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]])
], LogisticaYmsSetoresAssociacaoMateriaisComponent);



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

/***/ "MsuT":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/associacao-materiais/associacao-materiais.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL3NldG9yZXMvYXNzb2NpYWNhby1tYXRlcmlhaXMvYXNzb2NpYWNhby1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS95bXMvc2V0b3Jlcy9hc3NvY2lhY2FvLW1hdGVyaWFpcy9hc3NvY2lhY2FvLW1hdGVyaWFpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XG4gIGN1cnNvcjogbm8tZHJvcDtcbn0iXX0= */");

/***/ }),

/***/ "OB1W":
/*!**************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/lista/lista.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9zZXRvcmVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "UXRd":
/*!*****************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/setores.module.ts ***!
  \*****************************************************************/
/*! exports provided: LogisticaYmsSetoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresModule", function() { return LogisticaYmsSetoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "+/8n");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "/+9e");
/* harmony import */ var _setores_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./setores-routing.module */ "/z8U");
/* harmony import */ var _associacao_materiais_associacao_materiais_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./associacao-materiais/associacao-materiais.component */ "7f5n");
















let LogisticaYmsSetoresModule = class LogisticaYmsSetoresModule {
};
LogisticaYmsSetoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsSetoresListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaYmsSetoresCadastroComponent"],
            _associacao_materiais_associacao_materiais_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaYmsSetoresAssociacaoMateriaisComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            _setores_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsSetoresRoutingModule"]
        ]
    })
], LogisticaYmsSetoresModule);



/***/ }),

/***/ "dJM5":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/setores/cadastro/cadastro.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Setores\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postSetores()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Dados da Setor</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"classe\">Icone</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"icones\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              labelForId=\"classe\"\n              [loading]=\"loadingIcones\"\n              bindLabel=\"classe\"\n              bindValue=\"classe\"\n              id=\"classe\"\n              (change)=\"onIconSelected($event)\"\n              formControlName=\"DS_ICON\"\n              [ngClass]=\"onFieldError('DS_ICON') + ' ' + onFieldRequired('DS_ICON')\"\n\n              >\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\n                <div class=\"d-flex align-items-center\">\n                    <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\n                    <div>{{item.classe}}</div>\n                  </div>\n                </ng-template>\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                <div class=\"d-flex align-items-center\">\n                  <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\n                  <div>{{item.classe}}</div>\n                </div>\n              </ng-template>\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('DS_ICON')\" message=\"Icone é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-8 pl-0\">\n            <label for=\"NM_SETO\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_SETO\"\n              formControlName=\"NM_SETO\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_SETO') + ' ' + onFieldRequired('NM_SETO')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_SETO')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"tiposSetor\">Tipo de Setor</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tiposSetor\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingTiposSetor\"\n              labelForId=\"tiposSetor\"\n              bindLabel=\"NM_SETO_TIPO\"\n              bindValue=\"UUID_LOGI_YMS_SETO_TIPO\"\n              id=\"tiposSetor\"\n              formControlName=\"UUID_LOGI_YMS_SETO_TIPO\"\n              [ngClass]=\"onFieldError('UUID_LOGI_YMS_SETO_TIPO') + ' ' + onFieldRequired('UUID_LOGI_YMS_SETO_TIPO')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_YMS_SETO_TIPO')\" message=\"Tipo de Setor é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"filiais\">Filial</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"filiais\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingFiliais\"\n              labelForId=\"filiais\"\n              bindLabel=\"NM_FILI\"\n              bindValue=\"UUID_LOGI_FILI\"\n              id=\"filiais\"\n              formControlName=\"UUID_LOGI_FILI\"\n              [ngClass]=\"onFieldError('UUID_LOGI_FILI') + ' ' + onFieldRequired('UUID_LOGI_FILI')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_FILI')\" message=\"Filial é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Intervalos</legend>\n        <div formArrayName=\"intervalos\" *ngIf=\"loadingTiposCircuitoSetor != true\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\"></div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddIntervalos()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of formIntervalos.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-5 pl-0\">\n                  <label for=\"tiposCircuito\">Tipo de Circuito</label>\n                  <ng-select\n                    [searchable]=\"true\"\n                    [clearable]=\"true\"\n                    [items]=\"tiposCircuito\"\n                    [virtualScroll]=\"true\"\n                    placeholder=\"Selecione...\"\n                    [loading]=\"loadingTiposCircuito\"\n                    labelForId=\"tiposCircuito\"\n                    bindLabel=\"NM_CIRC_TIPO\"\n                    bindValue=\"UUID_LOGI_YMS_CIRC_TIPO\"\n                    id=\"tiposCircuito\"\n                    formControlName=\"UUID_LOGI_YMS_CIRC_TIPO\"\n                    [ngClass]=\"onNestedFieldError('intervalos', i, 'UUID_LOGI_YMS_CIRC_TIPO') + ' ' + onNestedFieldRequired('intervalos', i, 'UUID_LOGI_YMS_CIRC_TIPO')\"\n\n                    >\n                  </ng-select>\n                </div>\n                <div class=\"form-group col-md-4 pl-0\">\n                  <label for=\"TP_INTV\">tipo de tempo médio de Permanência</label>\n                  <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"tipos\"\n                  [virtualScroll]=\"true\"\n                  labelForId=\"tipo\"\n                  bindLabel=\"nome\"\n                  bindValue=\"cod\"\n                  id=\"tipo\"\n                  formControlName=\"TP_INTV\"\n                  [ngClass]=\"onNestedFieldError('intervalos', i, 'TP_INTV') + ' ' + onNestedFieldRequired('intervalos', i, 'TP_INTV')\"\n                  placeholder=\"Selecione...\"\n                  >\n                  </ng-select>\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"HR_INTV\" style=\"margin-bottom: 2px;\">Tempo Médio</label>\n                  <timepicker\n                  [showMeridian]=\"false\"\n                  [showSpinners]=\"false\"\n                  [mousewheel]=\"false\"\n                  formControlName=\"HR_INTV\"\n                  [ngClass]=\"onNestedFieldError('intervalos', i, 'HR_INTV') + ' ' + onNestedFieldRequired('intervalos', i, 'HR_INTV')\"\n                  >\n                </timepicker>\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteTipoCircuito(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"loadingTiposCircuitoSetor == true\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos pesquisando os intervalos para você...\">\n            </message>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>");

/***/ }),

/***/ "fdwM":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/setores/associacao-materiais/associacao-materiais.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    [disabled]=\"loadingNavBar === true\"\n    [routerLink]=\"['../../']\"\n    >\n    Finalizar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"mtc-title\">Dados da Setor</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"setores\">Setor</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"setores\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingSetores\"\n              labelForId=\"setores\"\n              bindLabel=\"NM_SETO\"\n              bindValue=\"UUID_LOGI_YMS_SETO\"\n              id=\"setores\"\n              formControlName=\"UUID_LOGI_YMS_SETO\"\n              >\n            </ng-select>\n          </div>\n        </div>\n      </form>\n      <div class=\"row mb-4\">\n        <div class=\"col mb-3\">\n          <hr>\n        </div>\n      </div>\n      <div [hidden]=\"loadingMateriais\">\n        <div class=\"row mb-2 mt-4\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Materiais associados a Setor</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger\"\n                (click)=\"onRemoverAssociacao()\">\n                <i class=\"fas fa-trash\"></i>\n                <span>Limpar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!materiaisAssociadosLoading && materiaisAssociados.length > 0\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigMateriaisAssociados\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.materiaisAssociados ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('materiaisAssociados')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" width=\"20%\">ID</th>\n                  <th scope=\"col\" width=\"70%\">Material</th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of materiaisAssociados\" >\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td width=\"20%\">{{ item.ID_REFE_ERP }}</td>\n                  <td width=\"70%\">\n                   {{ item.NM_MATE | uppercase }}\n                  </td>\n                  <td class=\"text-center\" width=\"5%\" height=\"26px\">\n                    <btn-icon\n                      icon=\"fas fa-trash\"\n                      size=\"small\"\n                      (click)=\"onRemoverAssociacao(item)\"\n                      *ngIf=\"!item.loading\"  \n                    >\n                    </btn-icon>\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!loadingMateriais && materiaisAssociados.length === 0\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-exchange-alt\"\n              text=\"Nenhuma associação encontrada\">\n            </message>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"loadingMateriais\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos pesquisando os materiais para você...\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Pesquisa de Materiais</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"getMateriais()\"\n              [disabled]=\" formMateriais.valid == false\">\n              <i class=\"fas fa-search\"></i>\n              <span \n              [tooltip]=\"formMateriais.valid == false ? 'Digite um termo de pesquisa':''\"\n              container=\"body\"\n              placement =\"left\">Pesquisar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_REFE_ERP\">ID ERP</option>\n                <option value=\"NM_MATE\" selected> Nome Material</option>\n                <option value=\"NM_CLAS\">Classe</option>\n                <option value=\"NM_LINH\">Linha</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-9\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Digite...\"\n                  formControlName=\"pesquisa\"\n                  (keydown.enter)=\"getMateriais()\"\n                >\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div *ngIf=\"materiais.length > 0 && !materiaisLoading\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de Material</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarMateriais()\"\n                [disabled]=\"searching === true || form.valid === false\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span\n                  [tooltip]=\"form.valid == false ? 'Selecione uma Setor':''\"\n                  container=\"body\"\n                  placement =\"left\">Associar\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigMateriais\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.materiais ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('materiais')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 90%\">Materiais</th>\n                  <th style=\"width: 5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of materiais\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 90%\"\n                    (click)=\"item.checked = !item.checked\">\n                    {{ item.ID_REFE_ERP }} - {{ item.NM_MATE | uppercase }}\n                  </td>\n                  <td style=\"width: 5%; height: 26px\">\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"materiaisLoading\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando os materiais para você...\">\n          </message>\n        </div>\n      </div>\n      <div>\n        <div class=\"row\" *ngIf=\"(materiais.length == 0) && !materiaisLoading\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"Nenhuma informação encontrada\">\n            </message>\n          </div>\n        </div>\n        <!-- <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-search\"\n              text=\"Preecha os campos acima para pesquisar materiais\">\n            </message>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</app-body>\n\n");

/***/ })

}]);
//# sourceMappingURL=setores-setores-module-es2015.js.map