(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitores-monitores-module"],{

/***/ "+XYu":
/*!*********************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/monitores.module.ts ***!
  \*********************************************************************/
/*! exports provided: AbastecimentoMonitoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresModule", function() { return AbastecimentoMonitoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _monitores_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./monitores-routing.module */ "ycKg");
/* harmony import */ var _monitores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./monitores.component */ "YMed");
/* harmony import */ var _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./painel-estoque/painel-estoque.component */ "/HbE");









//locale pt-BR


Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default.a);






let AbastecimentoMonitoresModule = class AbastecimentoMonitoresModule {
};
AbastecimentoMonitoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _monitores_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresComponent"],
            _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoPainelEstoqueComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _monitores_routing_module__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoMonitoresRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], AbastecimentoMonitoresModule);



/***/ }),

/***/ "+pEV":
/*!**************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/monitores.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvbW9uaXRvcmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "/HbE":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/painel-estoque/painel-estoque.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AbastecimentoPainelEstoqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoPainelEstoqueComponent", function() { return AbastecimentoPainelEstoqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_painel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./painel-estoque.component.html */ "x8R4");
/* harmony import */ var _painel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-estoque.component.scss */ "aI/f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let AbastecimentoPainelEstoqueComponent = class AbastecimentoPainelEstoqueComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.loading = false;
        this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_MTCORP;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = btoa(this.currentUser['info']['matricula']);
        this.idUsuario = btoa(this.currentUser['info']['id']);
        this.url = `${this.URL_MTCORP}/MTCorp/app_/app/mtcorp/modulos/abastecimento/monitores/painelEstoque.php?m=${this.matricula}&u=${this.idUsuario}`;
    }
    ngOnInit() {
        this.onBreadCumbTree();
    }
    onBreadCumbTree() {
        this.activatedRoute.params.subscribe((params) => {
            this.idSubModulo = params['idSubModulo'];
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Monitores',
                    routerLink: `/abastecimento/monitores/${this.idSubModulo}`
                },
                {
                    descricao: 'Painel de Estoque'
                }
            ];
        });
    }
};
AbastecimentoPainelEstoqueComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AbastecimentoPainelEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'abastecimento-painel-estoque',
        template: _raw_loader_painel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AbastecimentoPainelEstoqueComponent);



/***/ }),

/***/ "4Z2s":
/*!******************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/ravex/ravex.component.ts ***!
  \******************************************************************************/
/*! exports provided: LogisticaEntregaMonitoresRavexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaMonitoresRavexComponent", function() { return LogisticaEntregaMonitoresRavexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ravex_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ravex.component.html */ "E8R+");
/* harmony import */ var _ravex_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ravex.component.scss */ "tTuU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/fusion.service */ "H8J8");
/* harmony import */ var _services_steellog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/steellog.service */ "8L2n");
/* harmony import */ var _services_ravex_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/ravex.service */ "fnC2");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");



// angular



// services








// rxjs

// ngx


let LogisticaEntregaMonitoresRavexComponent = class LogisticaEntregaMonitoresRavexComponent {
    constructor(fusionService, formBuilder, pnotify, dateService, localeService, route, activatedRoute, modalService, atividadesService, detailPanelService, routerService, steellogService, ravexServices) {
        this.fusionService = fusionService;
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.dateService = dateService;
        this.localeService = localeService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.atividadesService = atividadesService;
        this.detailPanelService = detailPanelService;
        this.routerService = routerService;
        this.steellogService = steellogService;
        this.ravexServices = ravexServices;
        this.appTitle = 'MONITOR DE INTEGRACIÓN';
        this.loading = true;
        this.loaderNavbar = false;
        this.showAdvancedFilter = true;
        this.isDisabled = true;
        this.tipoTransporte = new Array();
        this.loadingTipoTransporte = false;
        this.items = [];
        this.totalItems = 0;
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage - 1;
        this.showDetailPanel = false;
        this.qtItensIntegrados = 0;
        this.qtItensIntegradosParcialmente = 0;
        this.qtItensComErro = 0;
        this.qtItensNaoIntegrados = 0;
        this.entregas = [];
        this.viagem = [];
        this.grid = {
            coleta: {
                name: "COLETA",
                active: true,
            },
            manifesto: {
                name: "MANIFESTO",
                active: true,
            },
            idRavex: {
                name: "ID RAVEX",
                active: true,
            },
            tipoColeta: {
                name: "TIPO DA COLETA",
                active: true,
            },
            motorista: {
                name: "MOTORISTA",
                active: false,
            },
            veiculo: {
                name: "VEÍCULO",
                active: false,
            },
            emissao: {
                name: "EMISSÃO",
                active: true,
            },
            saidaPrevista: {
                name: "SAÍDA PREVISTA",
                active: true,
            },
            integracao: {
                name: "INTEGRAÇÃO",
                active: true,
            }
        };
        this.keepOriginalOrder = (a, b) => a.key;
        this.form = this.formBuilder.group({
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            NR_MANI: [null],
            NR_COLE: [null],
            CD_TRAN: [null],
            CD_EMPR: [209],
            NM_MOTO: [null],
            CD_PLAC: ["GEG7456,GFJ4579"],
            IN_INTE: ["T"],
            CD_TIPO_COLE: [0],
            CD_STAT_INTE: ["1"],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [null]
        });
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.modalService.config = {
            backdrop: 'static',
            animated: false
        };
    }
    ngOnInit() {
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getTipoTransporte();
        this.getEmpresas();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        this.$showDetailPanelSubscription.unsubscribe();
    }
    onDetailPanelEmitter() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            if (!event.showing)
                this.items.map((element) => element.selected = false);
        });
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.form.patchValue(this.routerService.getBase64UrlParams(response));
                this.getViagens(this.getParams());
            }
            else {
                this.loading = false;
            }
        });
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'GESTIÓN DE ENTREGAS',
                routerLink: '../../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.items.map((element) => element.selected = false);
        this.showDetailPanel = false;
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
            queryParamsHandling: 'merge'
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
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
    getViagens(params) {
        if (!this.loading)
            this.loaderNavbar = true;
        this.ravexServices
            .getViagens(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loaderNavbar = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.items = response.body["data"];
                this.qtItensIntegrados = response.body["totalIntegrated"];
                this.qtItensIntegradosParcialmente = response.body["totalPartiallyIntegrated"];
                this.qtItensNaoIntegrados = response.body["totalNotIntegrated"];
                this.qtItensComErro = response.body["totalWithErrors"];
                this.totalItems = response.body["total"];
            }
            else if (response.status === 204) {
                this.pnotify.notice('Nenhum registro localizado');
                this.items = [];
            }
            else {
                this.pnotify.error();
                this.items = [];
            }
        }, error => {
            this.pnotify.error();
            this.items = [];
        });
    }
    getEntregas(viagem) {
        if (viagem === null || viagem === void 0 ? void 0 : viagem.entregas) {
            this.entregas = viagem.entregas;
            this.detailPanelService.loadedFinished(false);
            return;
        }
        const params = {
            NR_COLE: viagem === null || viagem === void 0 ? void 0 : viagem.NR_COLE,
            CD_EMPR: viagem === null || viagem === void 0 ? void 0 : viagem.CD_EMPR
        };
        this.viagem = viagem;
        this.loadingEntregas = true;
        this.ravexServices
            .getEntregas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.detailPanelService.loadedFinished(false);
            this.loadingEntregas = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.notice('Nenhum registro localizado');
                this.entregas = [];
                return;
            }
            this.entregas = response.body["data"];
            viagem.entregas = response.body["data"];
        }, error => {
            this.pnotify.error();
            this.entregas = [];
        });
    }
    onResetForm() {
        this.form.reset();
    }
    setItensPerPage(ev) {
        this.itemsPerPage = ev.itemsPerPage;
        this.end = ev.itemsPerPage;
        return this.itemsPerPage;
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
    // Validação de formulário
    integrarViagem(item) {
        item.loading = true;
        this.ravexServices
            .postViagem(item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            //item.loading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                item.loading = false;
                this.pnotify.error("Viagem não localizada");
                return;
            }
            item.DT_INTE = new Date();
            switch (item.IN_INTE) {
                case 'N':
                    this.qtItensNaoIntegrados--;
                    break;
                case 'E':
                    this.qtItensComErro--;
                    break;
                default:
                    break;
            }
            item.IN_INTE = 'I';
            this.qtItensIntegrados++;
            this.pnotify.success(`Coleta (${item.CD_EMPR}) ${item.NR_COLE} integrada com sucesso, adicionando entregas...`);
            item.ID_RAVX = response.body["data"]["ravex"]["data"];
            item.ID_VIAG = item.ID_RAVX;
            const params = {
                ID_VIAG: item["ID_RAVX"],
                CD_EMPR: item["CD_EMPR"],
                NR_COLE: item["NR_COLE"]
            };
            this.integrarEntregas(params, item);
        }, (error) => {
            item.loading = false;
            this.pnotify.error(`Erro ao integrar a coleta (${item.CD_EMPR}) ${item.NR_COLE}.`);
        });
    }
    integrarEntregas(entrega, viagem) {
        entrega.loading = true;
        entrega["ID_VIAG"] = viagem["ID_VIAG"];
        this.ravexServices
            .postEntregas(entrega)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            entrega.loading = false;
            //item.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                viagem.loading = false;
                this.pnotify.success(`A coleta (${viagem.CD_EMPR}) ${viagem.NR_COLE} não possui entregas.`);
                return;
            }
            this.pnotify.success(`Entregas da coleta (${viagem.CD_EMPR}) ${viagem.NR_COLE} integradas na Ravex, adicionando notas fiscais...`);
            entrega.IN_INTE = "I";
            const data = response.body["data"];
            this.integrarNotasFiscais(entrega, viagem);
        }, error => {
            viagem.loading = false;
            try {
                this.pnotify.error(error.error.message);
            }
            catch (_a) {
                this.pnotify.error(`Erro ao adiconar as entregas da coleta (${entrega === null || entrega === void 0 ? void 0 : entrega.CD_EMPR}) ${entrega === null || entrega === void 0 ? void 0 : entrega.NR_COLE}.`);
            }
        });
    }
    integrarNotasFiscais(params, item) {
        this.ravexServices
            .postNotasFiscais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            item.loading = false;
        }))
            .subscribe(response => {
            this.pnotify.success(`Notas Fiscais da coleta (${item.CD_EMPR}) ${item.NR_COLE} integradas na Ravex.`);
        }, error => {
            item.loading = false;
            this.pnotify.error(`Erro ao adiconar as notas fiscais da coleta (${params.CD_EMPR}) ${params.NR_COLE}.`);
        });
    }
    getTipoTransporte() {
        this.loadingTipoTransporte = true;
        this.steellogService
            .getTipoTransporte()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingTipoTransporte = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoTransporte = response.body['data'];
            }
        });
    }
    getEmpresas() {
        this.loadingEmpresas = true;
        this.steellogService
            .getEmpresas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingEmpresas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body['data'];
            }
        });
    }
    viewDetails(viagem) {
        this.items.map((element) => element.selected = false);
        viagem.selected = true;
        this.detailPanelService.show();
        this.detailPanelTitle = `(${viagem["CD_EMPR"]}) ${viagem["NR_COLE"]}`;
        this.showDetailPanel = true;
        this.getEntregas(viagem);
    }
    eHUmaViagemIntegrada(status) {
        if (status == 'I')
            return true;
        if (status == 'P')
            return true;
        return false;
    }
    getCorIntegracao(status) {
        if (status == 'I')
            return 'text-success';
        if (status == 'N')
            return 'text-warning';
        if (status == 'E')
            return 'text-danger';
        return 'text-muted';
    }
};
LogisticaEntregaMonitoresRavexComponent.ctorParameters = () => [
    { type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: _services_steellog_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaSteellogService"] },
    { type: _services_ravex_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntregaRavexService"] }
];
LogisticaEntregaMonitoresRavexComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['template', { static: false },] }],
    txtMotivoCancelamento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['txtMotivoCancelamento', { static: false },] }]
};
LogisticaEntregaMonitoresRavexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-monitor-integracao-ravex',
        template: _raw_loader_ravex_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ravex_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        _services_steellog_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaSteellogService"],
        _services_ravex_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntregaRavexService"]])
], LogisticaEntregaMonitoresRavexComponent);



/***/ }),

/***/ "Af5A":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/fusion/manetoni/pedidos.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvZnVzaW9uL21hbmV0b25pL3BlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL21vbml0b3Jlcy9mdXNpb24vbWFuZXRvbmkvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XHJcbiAgY3Vyc29yOiBuby1kcm9wO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "D14F":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/monitores.module.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaEntregaMonitoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaMonitoresModule", function() { return LogisticaEntregaMonitoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _monitores_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./monitores-routing.module */ "lAY1");
/* harmony import */ var _ravex_ravex_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ravex/ravex.component */ "4Z2s");
/* harmony import */ var _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fusion/manetoni/pedidos.component */ "M8cQ");







Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]);
// ngx-bootstrap






// ng-select






//masks





let LogisticaEntregaMonitoresModule = class LogisticaEntregaMonitoresModule {
};
LogisticaEntregaMonitoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEngregasMonitoresFusionManetoniPedidosComponent"],
            _ravex_ravex_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntregaMonitoresRavexComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _monitores_routing_module__WEBPACK_IMPORTED_MODULE_21__["LogisticaEntregaMonitoresRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__["TextMaskModule"],
        ]
    })
], LogisticaEntregaMonitoresModule);



/***/ }),

/***/ "E8R+":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/monitores/ravex/ravex.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n    <button\r\n    type=\"button\"\r\n    (click) = \"onResetForm()\"\r\n    >\r\n    Limpiar\r\n  </button>\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    type=\"button\"\r\n    (click) = \"onSearch()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtInicial\">Data Inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtInicial\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"DATA INICIAL\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtFinal\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"DATA FINAL\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_FINA\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"nrManifesto\">Manifesto</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"nrManifesto\"\r\n            type=\"text\"\r\n            formControlName=\"NR_MANI\"\r\n            placeholder=\"Escribelo...\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"coleta\">Coleta</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"coleta\"\r\n            type=\"text\"\r\n            formControlName=\"NR_COLE\"\r\n            placeholder=\"Escribelo...\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingEmpresas\"\r\n              placeholder=\"SELECCIONE...\"\r\n              labelForId=\"empresa\"\r\n              bindLabel=\"NM_FANT\"\r\n              bindValue=\"CD_EMPR\"\r\n              id=\"empresa\"\r\n              formControlName=\"CD_EMPR\"\r\n              (change)=\"onSearch()\"\r\n            >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.CD_EMPR | number : '3.0-0'}}) {{item.NM_FANT}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"tipoTransporte\">Tipo de Transporte</label>\r\n          <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipoTransporte\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingTipoTransporte\"\r\n              placeholder=\"SELECCIONE...\"\r\n              labelForId=\"tipoTransporte\"\r\n              bindLabel=\"DS_TRAN\"\r\n              bindValue=\"CD_TRAN\"\r\n              id=\"tipoTransporte\"\r\n              (change)=\"onSearch()\"\r\n              formControlName=\"CD_TRAN\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Motorista</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"NOME OU CPF\" (keyup.enter)=\"onSearch()\" formControlName=\"NM_MOTO\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Veículo</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Escribelo...\" (keyup.enter)=\"onSearch()\" formControlName=\"CD_PLAC\">\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label>Tipo da coleta</label>\r\n          <select\r\n            class=\"form-control\"\r\n            formControlName=\"CD_TIPO_COLE\"\r\n            (change)=\"onSearch()\" \r\n          >\r\n            <option value=\"0\">Todos</option>\r\n            <option value=\"1\">Deslocamento Vazio</option>\r\n            <option value=\"2\">Manuteção</option>\r\n            <option value=\"3\">Normal</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label >Status</label>\r\n          <select\r\n            class=\"form-control\"\r\n            formControlName=\"IN_INTE\"\r\n            (change)=\"onSearch()\" \r\n          >\r\n            <option value=\"T\">Todos</option>\r\n            <option value=\"I\">Integrado</option>\r\n            <option value=\"P\">Integrado parcialmente</option>\r\n            <option value=\"N\">Não integrado</option>\r\n            <option value=\"E\">Com erro</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"itemsPerPage\">Registros</label>\r\n          <select \r\n            class=\"form-control\"\r\n            (change)=\"setItensPerPage($event)\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"loading || items.length == 0\">\r\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 50%\">\r\n      <tbody>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-success\"></i></td>\r\n          <td>Integrado</td>\r\n          <td>{{ qtItensIntegrados }}</td>\r\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-muted\"></i></td>\r\n          <td>Integrado parcialmente</td>\r\n          <td>{{ qtItensIntegradosParcialmente }}</td>\r\n          <td>{{ qtItensIntegradosParcialmente / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\r\n          <td>Não integrado</td>\r\n          <td>{{ qtItensNaoIntegrados }}</td>\r\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-danger\"></i></td>\r\n          <td>Com erro</td>\r\n          <td>{{ qtItensComErro }}</td>\r\n          <td>{{ qtItensComErro / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"d-flex justify-content-between w-100\">\r\n      <div class=\"custom-control custom-checkbox\" *ngFor=\"let item of grid | keyvalue:keepOriginalOrder ;let index = index\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"'customCheckColeta' + index\" [(ngModel)]=\"item.value.active\">\r\n        <label class=\"custom-control-label\" [for]=\"'customCheckColeta' + index\">{{item.value.name}}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex\">\r\n      <div class=\"col p-0\">\r\n        <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.coleta.active\">Coleta</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.manifesto.active\">Manifesto</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.idRavex.active\">Id Ravex</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.tipoColeta.active     &&  !showDetailPanel\">Tipo da coleta</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.motorista.active      &&  !showDetailPanel\">Motorista</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.veiculo.active        &&  !showDetailPanel\">Veículo</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.emissao.active        &&  !showDetailPanel\">Emissão</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.saidaPrevista.active  &&  !showDetailPanel\">Saída Prevista</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.integracao.active     &&  !showDetailPanel\">Integração</th>\r\n              <th scope=\"col\" class=\"text-center\"></th>\r\n              <th scope=\"col\" class=\"text-center\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of items | slice : begin : end; let indice = index\"  [ngClass]=\"{'table-active': item.selected == true}\">\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.coleta.active\">({{ item.CD_EMPR }})&nbsp;{{ item.NR_COLE }}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.manifesto.active\">{{ item.NR_ORDE_CARR | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.idRavex.active\">{{ item.ID_RAVX | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.tipoColeta.active     &&  !showDetailPanel\">{{ item.DS_TIPO_COLE | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.motorista.active      &&  !showDetailPanel\">{{ item.NM_MOTO | uppercase | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.veiculo.active        &&  !showDetailPanel\">{{ item.CD_PLAC | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.emissao.active        &&  !showDetailPanel\">{{ item.DT_EMIS_COLE | date : 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.saidaPrevista.active  &&  !showDetailPanel\">\r\n                <input\r\n                  type=\"datetime-local\"\r\n                  class=\"form-control custom-input-datetime\"\r\n                  [(ngModel)]=\"item.DT_PREV_SAID\"\r\n                  style=\"background-color: transparent;\"\r\n                >\r\n              </td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.integracao.active     &&  !showDetailPanel\">\r\n                <span *ngIf=\"item.DT_INTE\">{{ item?.DT_INTE | date : 'dd/MM/yyyy HH:mm:ss' }}</span>\r\n                <span *ngIf=\"!item.DT_INTE\">-</span>\r\n              </td>\r\n              <td class=\"align-middle text-center\">\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Integrar\"\r\n                  placement=\"left\"\r\n                  (click)=\"integrarViagem(item)\"\r\n                  [hidden]=\"item.loading\"\r\n                  [disabled]=\"eHUmaViagemIntegrada(item.IN_INTE)\"\r\n                  >\r\n                    <i\r\n                      class=\"far fa-paper-plane\" \r\n                      [ngClass]=\"getCorIntegracao(item.IN_INTE)\"></i>\r\n                </button>\r\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </td>\r\n              <td class=\"text-right align-middle\">\r\n                <button\r\n                  tooltip=\"Detalhes\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                  (click)=\"viewDetails(item)\"\r\n                >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <div class=\"col-7 pr-0\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n          <custom-table *ngIf=\"entregas.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th>Cte</th>\r\n                <th>Endereço</th>\r\n                <th>Bairro</th>\r\n                <th>Cidade</th>\r\n                <th></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of entregas\">\r\n                <td>({{ item?.CD_EMPR }})&nbsp;{{ item?.NR_CTE }}</td>\r\n                <td>{{ item?.DS_LOCA_ENTR | hifen | uppercase }}</td>\r\n                <td>{{ item?.DS_BAIRR | hifen | uppercase }}</td>\r\n                <td>{{ item?.DS_CIDA | hifen | uppercase}}</td>\r\n                <td>\r\n                  <span\r\n                    [tooltip]=\"eHUmaViagemIntegrada(viagem.IN_INTE) ? '' : 'É necessário integrar a viagem'\"\r\n                    container=\"body\"\r\n                    placement=\"left\"  \r\n                  >\r\n                    <button\r\n                      class=\"btn-icon-sm\"\r\n                      tooltip=\"Integrar\"\r\n                      placement=\"left\"\r\n                      *ngIf=\"!item.loading\"\r\n                      (click)=\"integrarEntregas(item, viagem)\"\r\n                      [disabled]=\"!eHUmaViagemIntegrada(viagem.IN_INTE)\"\r\n                      >\r\n                        <i class=\"far fa-paper-plane\"  [ngClass]=\"getCorIntegracao(item.IN_INTE)\"></i>\r\n                    </button>\r\n                    <div\r\n                      class=\"spinner-border spinner-border-sm text-primary\"\r\n                      role=\"status\"\r\n                      *ngIf=\"item.loading\"\r\n                    >\r\n                      <span class=\"sr-only\">Loading...</span>\r\n                    </div>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div [hidden]=\"loadingEntregas || entregas.length > 0\" class=\"d-flex justify-content-center align-items-center w-100\">\r\n            <empty-result message=\"No se encontró información\"></empty-result>\r\n          </div>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "M8cQ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/fusion/manetoni/pedidos.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LogisticaEngregasMonitoresFusionManetoniPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEngregasMonitoresFusionManetoniPedidosComponent", function() { return LogisticaEngregasMonitoresFusionManetoniPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedidos.component.html */ "X6QJ");
/* harmony import */ var _pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidos.component.scss */ "Af5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/fusion.service */ "H8J8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_modules_logistica_cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/logistica/cadastros/filiais/services/filiais.service */ "NXOV");



// angular



// services





// rxjs

// ngx



let LogisticaEngregasMonitoresFusionManetoniPedidosComponent = class LogisticaEngregasMonitoresFusionManetoniPedidosComponent {
    constructor(fusionService, filiaisService, formBuilder, pnotify, dateService, localeService, route, activatedRoute, modalService, atividadesService, routerService) {
        this.fusionService = fusionService;
        this.filiaisService = filiaisService;
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.dateService = dateService;
        this.localeService = localeService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.appTitle = 'MONITOR DE INTEGRACIÓN';
        this.loading = true;
        this.loaderNavbar = false;
        this.loadingFiliais = false;
        this.showAdvancedFilter = true;
        this.isDisabled = true;
        this.compressedTable = true;
        this.items = [];
        this.totalItems = 0;
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage - 1;
        this.qtItensIntegrados = 0;
        this.qtItensComErro = 0;
        this.qtItensNaoIntegrados = 0;
        this.orderBy = ' CD_PEDI ';
        this.orderType = ' DESC ';
        this.tableConfig = {
            isFixed: true
        };
        this.statusIntegracao = [
            {
                "id": "T",
                "nome": "TODOS"
            },
            {
                "id": "I",
                "nome": "INTEGRADO"
            },
            {
                "id": "N",
                "nome": "NÃO INTEGRADO"
            },
            {
                "id": "E",
                "nome": "COM ERRO"
            }
        ];
        this.form = this.formBuilder.group({
            CD_FILI: [null],
            CD_PEDI: [null],
            DT_PEDI: [null],
            NOTA_FISC: [null],
            IN_INTE: ['T'],
            DS_INTE: [null],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            DS_CLIE: [null],
            PAGI: [1],
            TT_REGI_PAGI: [100],
            ORDE_BY: ['1'],
            ORDE_TYPE: ['ASC'],
            TIME: (new Date()).getTime()
        });
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.modalService.config = {
            backdrop: 'static',
            animated: false
        };
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.registraAcesso();
        this.onActivatedRoute();
        this.getFiliais();
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService.getFiliais({ status: '1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
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
        this.$activatedRouteSubscription.unsubscribe();
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            var _a;
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0) {
                _response['CD_FILI'] = (_response === null || _response === void 0 ? void 0 : _response.CD_FILI) ? (_a = _response === null || _response === void 0 ? void 0 : _response.CD_FILI) === null || _a === void 0 ? void 0 : _a.split(',') : [];
                this.form.patchValue(_response);
                this.getPedidos(this.getParams());
            }
            else {
                this.loading = false;
            }
            console.log(_response);
        });
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'GESTIÓN DE ENTREGAS',
                routerLink: './../../../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getPedidos(params) {
        var _a;
        if (!this.loading) {
            this.loaderNavbar = true;
        }
        (_a = this.$serviceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.$serviceSubscription = this.fusionService
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            this.items = [];
            if (response.status !== 200) {
                this.pnotify.notice("Nenhum pedido localizado");
                return;
            }
            this.items = response.body["data"];
            this.qtItensIntegrados = response.body["counters"]["integrados"];
            this.qtItensNaoIntegrados = response.body["counters"]["naoIntegrados"];
            this.qtItensComErro = response.body["counters"]["comErro"];
            this.totalItems = response.body["total"];
        }, (error) => {
            this.pnotify.error();
        });
    }
    onSearch() {
        this.form.get('PAGI').setValue(1);
        this.form.get("TIME").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
            queryParamsHandling: 'merge'
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get("TIME").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
            queryParamsHandling: 'merge'
        });
    }
    /* Paginação */
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else if (Array.isArray(_obj[prop]))
                    _params[prop] = _obj[prop].toString();
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onResetForm() {
        this.form.reset();
        this.form.patchValue({
            dtInicial: (new Date()),
            dtFinal: (new Date()),
            pagina: 1,
            itemsPerPage: 100,
        });
    }
    integraPedido(item) {
        item.loading = true;
        let params = {
            CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
            CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI,
        };
        this.fusionService
            .integraPedidoFusion(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            item.loading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.pnotify.success();
            if (item["DS_INTE"] == "I") {
                return;
            }
            this.qtItensIntegrados++;
            if (item["DS_INTE"] == "E") {
                this.qtItensComErro--;
            }
            else if (item["DS_INTE"] == "N") {
                this.qtItensNaoIntegrados--;
            }
            item["DS_INTE"] = "I";
            item["DT_INTE"] = new Date();
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onDetails(boo, pedido) {
        this.pedido = pedido;
        this.compressedTable = boo;
    }
    setItensPerPage(ev) {
        this.itemsPerPage = ev.itemsPerPage;
        this.end = ev.itemsPerPage;
        return this.itemsPerPage;
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
    // Validação de formulário
    onEdit(pedido) {
        this.route.navigate(['./../../../coletas/novo'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(pedido)
        });
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
        this.form.get("ORDE_BY").setValue(this.orderBy);
        this.form.get("ORDE_TYPE").setValue(this.orderType);
        this.onSearch();
    }
};
LogisticaEngregasMonitoresFusionManetoniPedidosComponent.ctorParameters = () => [
    { type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"] },
    { type: src_app_modules_logistica_cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaFiliaisService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] }
];
LogisticaEngregasMonitoresFusionManetoniPedidosComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['template', { static: false },] }],
    txtMotivoCancelamento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['txtMotivoCancelamento', { static: false },] }]
};
LogisticaEngregasMonitoresFusionManetoniPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entregas-monitores-fusion-manetoni-pedidos',
        template: _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"],
        src_app_modules_logistica_cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaFiliaisService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]])
], LogisticaEngregasMonitoresFusionManetoniPedidosComponent);



/***/ }),

/***/ "Rb7W":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/monitores.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n\r\n<app-header appTitle=\"Monitores\">\r\n</app-header>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n        <card-button\r\n          [icon]=\"atividade.iconeAtividade\"\r\n          [text]=\"atividade.nomeAtividade\"\r\n          [routerLink]=\"[atividade.rotaAtividade]\">\r\n        </card-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

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
            'Marzo',
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
    // Función para obtener la fecha de inicio de la semana actual (lunes)
    getStartOfWeek() {
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
        startOfWeek.setHours(0, 0, 0, 0);
        return startOfWeek;
    }
    // Función para obtener la fecha de fin de la semana actual (domingo)
    getEndOfWeek() {
        const currentDate = new Date();
        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
        endOfWeek.setHours(23, 59, 59, 999);
        return endOfWeek;
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

/***/ "X6QJ":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/monitores/fusion/manetoni/pedidos.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n    <button\r\n    type=\"button\"\r\n    (click) = \"onResetForm()\"\r\n    >\r\n    Limpiar\r\n  </button>\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    type=\"button\"\r\n    (click) = \"onSearch()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtInicial\">Data Inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtInicial\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Escribelo...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtFinal\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Escribelo...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_FINA\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Orden de venta</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"pedido\"\r\n              type=\"text\"\r\n              formControlName=\"CD_PEDI\"\r\n              placeholder=\"Escribelo...\"\r\n              (keyup.enter)=\"onSearch()\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"notaFiscal\">Factura</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"notaFiscal\"\r\n              type=\"text\"\r\n              formControlName=\"NOTA_FISC\"\r\n              placeholder=\"Escribelo...\"\r\n              (keyup.enter)=\"onSearch()\"\r\n              >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cliente\">Cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cliente\"\r\n            type=\"text\"\r\n            formControlName=\"DS_CLIE\"\r\n            placeholder=\"nombre o código\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"filial\">Filial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [loading]=\"loadingFiliais\"\r\n            [closeOnSelect]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            labelForId=\"filial\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"idFilial\"\r\n            (change)=\"onSearch()\"\r\n            placeholder=\"SELECCIONE...\"\r\n            formControlName=\"CD_FILI\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"statusIntegracao\">Situación</label>\r\n          <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"statusIntegracao\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"statusIntegracao\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"statusIntegracao\"\r\n              formControlName=\"DS_INTE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"itemsPerPage\">Registros</label>\r\n          <select \r\n            class=\"form-control custom-select\"\r\n            (change)=\"setItensPerPage($event)\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"loading || items.length == 0\">\r\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 40%\">\r\n      <tbody>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-success\"></i></td>\r\n          <td>Integrado</td>\r\n          <td>{{ qtItensIntegrados }}</td>\r\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\r\n          <td>No integrado</td>\r\n          <td>{{ qtItensNaoIntegrados }}</td>\r\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-danger\"></i></td>\r\n          <td>Con error</td>\r\n          <td>{{ qtItensComErro }}</td>\r\n          <td>{{ qtItensComErro / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"d-flex\">\r\n      <div class=\"col p-0\">\r\n        <custom-table [config]=\"tableConfig\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\"width=\"12%\">\r\n                <thead-sorter\r\n                  value=\"Filial\"\r\n                  [active]=\"orderBy == 'CD_FILI'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('CD_FILI')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Orden de vienda\"\r\n                  [active]=\"orderBy == 'CD_PEDI'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('CD_PEDI')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Factura\"\r\n                  [active]=\"orderBy == 'NOTA_FISC'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('NOTA_FISC')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"20%\">\r\n                <thead-sorter\r\n                  value=\"Cliente\"\r\n                  [active]=\"orderBy == 'CD_CLIE'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('CD_CLIE')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"20%\">\r\n                <thead-sorter\r\n                  value=\"Dirección\"\r\n                  [active]=\"orderBy == 'DS_LOCA_ENTR'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DS_LOCA_ENTR')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <thead-sorter\r\n                  value=\"Emisión\"\r\n                  [active]=\"orderBy == 'DT_PEDI'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DT_PEDI')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <thead-sorter\r\n                  value=\"Integración\"\r\n                  [active]=\"orderBy == 'DT_INTE'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DT_INTE')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\r\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\r\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of items; let indice = index\" >\r\n              <td class=\"align-middle text-center text-truncate\">({{item?.CD_FILI}})&nbsp; {{ item?.NM_FILI }}</td>\r\n              <td class=\"align-middle text-center\">{{ item?.CD_PEDI }}</td>\r\n              <td class=\"align-middle text-center\">\r\n                <span *ngIf=\"item.NOTA_FISC\">{{ item?.NOTA_FISC }}</span>\r\n                <span *ngIf=\"!item.NOTA_FISC\">-</span>\r\n              </td>\r\n              <td\r\n                class=\"text-truncate\"\r\n                [tooltip]=\"item?.NM_CLIE\"\r\n                container=\"body\"\r\n                placement=\"right\" \r\n              >\r\n                ({{ item?.CD_CLIE }})&nbsp;{{ item?.NM_CLIE }}\r\n              </td>\r\n              <td\r\n                class=\"text-truncate\"\r\n                [tooltip]=\"item?.DS_ENDE\"\r\n                container=\"body\"\r\n                placement=\"right\"  \r\n              >\r\n                {{ item?.DS_ENDE }}\r\n              </td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"compressedTable\">{{ item?.DT_PEDI   | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"compressedTable\">\r\n                <span *ngIf=\"item.DT_INTE\"  >{{ item?.DT_INTE   | date : 'dd/MM/yyyy HH:mm:ss'}}</span>\r\n                <span *ngIf=\"!item.DT_INTE\" >-</span>\r\n              </td>\r\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\r\n                <i\r\n                  class=\"fas fa-exchange-alt\"\r\n                  [tooltip]=\"item['IN_PEDI_CADA_MANU'] == 1 ? 'Pedido com coleta associada' : 'Pedido sem coleta associada'\"\r\n                  container=\"body\"\r\n                  placement=\"left\"\r\n                  [ngClass]=\"item['IN_PEDI_CADA_MANU'] == 1 ? 'text-warning' : 'text-muted'\"\r\n                ></i>\r\n              </td>\r\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Integrar\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                  (click)=\"integraPedido(item)\"\r\n                  [hidden]=\"item.loading\"\r\n                >\r\n                  <i\r\n                    class=\"fas fa-paper-plane\"\r\n                    [ngClass]=\"{\r\n                      'text-success': item.DS_INTE === 'I',\r\n                      'text-warning': item.DS_INTE === 'N',\r\n                      'text-danger': item.DS_INTE === 'E'}\"\r\n                  ></i>\r\n                </button>\r\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </td>\r\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Gerar coleta\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                  (click)=\"onEdit(item)\"\r\n                >\r\n                  <i class=\"far fa-edit\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <tabset class=\"col-5 pr-0\" [hidden]=\"compressedTable\">\r\n        <button type=\"button\" class=\"btn-icon close\" (click)=\"onDetails(true)\">\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n        <tab heading=\"Arquivo de integração\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <pre class=\"rounded p-2\" style=\"background: #eff0f1\">{{ pedido | json }}</pre>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Orden de vienda: {{ pedido.pedido_erp }}</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <span>Escribelo o motivo do cancelamento</span>\r\n      <textarea name=\"motivoCancelamento\" id=\"motivoCancelamento\" class=\"w-100\" rows=\"10\" #txtMotivoCancelamento minlength=\"100\" (input)=\"isDisabled = txtMotivoCancelamento.value.length == 0 ? true : false\"></textarea>\r\n      <div class=\"w-100\" style=\"position: relative; min-height: 25px;\">\r\n        <button class=\"btn btn-primary\" style=\"position: absolute; right: 0;\" (click)=\"integraPedido(pedido, 'true', txtMotivoCancelamento.value); modalRef.hide()\" [disabled]=\"isDisabled\">Integrar <i class=\"far fa-paper-plane\"></i></button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>");

/***/ }),

/***/ "YMed":
/*!************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/monitores.component.ts ***!
  \************************************************************************/
/*! exports provided: AbastecimentoMonitoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresComponent", function() { return AbastecimentoMonitoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_monitores_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./monitores.component.html */ "Rb7W");
/* harmony import */ var _monitores_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitores.component.scss */ "+pEV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








let AbastecimentoMonitoresComponent = class AbastecimentoMonitoresComponent {
    constructor(atividadesService, router, pnotify, activatedRoute, titleService) {
        this.atividadesService = atividadesService;
        this.router = router;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.loading = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/abastecimento/home'
            },
            {
                descricao: 'Monitores'
            }
        ];
        this.atividades = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.titleService.setTitle('Monitores');
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(res => {
            if (res['responseCode'] === 200) {
                this.atividades = res['result'];
                this.loading = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, error => {
            this.handleAtividadesInternasError();
        });
    }
    handleAtividadesInternasError() {
        this.pnotify.error();
        this.router.navigate(['/abastecimento/home']);
    }
};
AbastecimentoMonitoresComponent.ctorParameters = () => [
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
AbastecimentoMonitoresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'abastecimento-monitores',
        template: _raw_loader_monitores_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_monitores_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], AbastecimentoMonitoresComponent);



/***/ }),

/***/ "aI/f":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/painel-estoque/painel-estoque.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvcGFpbmVsLWVzdG9xdWUvcGFpbmVsLWVzdG9xdWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "fnC2":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/ravex/services/ravex.service.ts ***!
  \*************************************************************************************/
/*! exports provided: LogisticaEntregaRavexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRavexService", function() { return LogisticaEntregaRavexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "AytR");




let LogisticaEntregaRavexService = class LogisticaEntregaRavexService {
    constructor(http) {
        this.http = http;
        this.API = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getViagens(params) {
        return this.http.get(`${this.API}/logistica/integracoes/ravex/viagem-faturada`, {
            params: params,
            observe: "response"
        });
    }
    postViagem(params) {
        return this.http.post(`${this.API}/logistica/integracoes/ravex/viagem-faturada`, params, {
            observe: "response"
        });
    }
    getEntregas(params) {
        return this.http.get(`${this.API}/logistica/integracoes/ravex/entregas`, {
            params: params,
            observe: "response"
        });
    }
    postEntregas(params) {
        return this.http.post(`${this.API}/logistica/integracoes/ravex/entrega`, params, {
            observe: "response"
        });
    }
    postNotasFiscais(params) {
        return this.http.post(`${this.API}/logistica/integracoes/ravex/notas-fiscais`, params, {
            observe: "response"
        });
    }
};
LogisticaEntregaRavexService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaEntregaRavexService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaEntregaRavexService);



/***/ }),

/***/ "lAY1":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/monitores-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticaEntregaMonitoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaMonitoresRoutingModule", function() { return LogisticaEntregaMonitoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fusion/manetoni/pedidos.component */ "M8cQ");




const routes = [
    {
        path: 'fusion/pedidos',
        component: _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEngregasMonitoresFusionManetoniPedidosComponent"]
    }
];
let LogisticaEntregaMonitoresRoutingModule = class LogisticaEntregaMonitoresRoutingModule {
};
LogisticaEntregaMonitoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaEntregaMonitoresRoutingModule);



/***/ }),

/***/ "tTuU":
/*!********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/monitores/ravex/ravex.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-input-datetime:focus,\n.custom-input-datetime:not([disabled]):hover {\n  border: 1px dashed !important;\n  transition: 0.2s linear;\n  background: white;\n  font-weight: 600;\n}\n\nbutton:disabled {\n  cursor: no-drop;\n  color: #b9bdb9 !important;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n}\n\n::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvcmF2ZXgvcmF2ZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvcmF2ZXgvcmF2ZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWlucHV0LWRhdGV0aW1lOmZvY3VzLFxyXG4uY3VzdG9tLWlucHV0LWRhdGV0aW1lOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcclxuICBib3JkZXI6IDFweCBkYXNoZWQgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxuICBjb2xvcjogI2I5YmRiOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50b29sdGlwLWlubmVye1xyXG4gIG1heC13aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "x8R4":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/painel-estoque/painel-estoque.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Painel de Estoque</h1>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pb-0\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <custom-iframe [url]=\"url\"></custom-iframe>    \r\n  </div>\r\n</div>");

/***/ }),

/***/ "ycKg":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/monitores-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AbastecimentoMonitoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresRoutingModule", function() { return AbastecimentoMonitoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painel-estoque/painel-estoque.component */ "/HbE");
/* harmony import */ var _monitores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitores.component */ "YMed");






const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _monitores_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoMonitoresComponent"]
            },
            {
                path: 'painel-estoque',
                component: _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoPainelEstoqueComponent"]
            },
            {
                path: 'analise-compras',
                loadChildren: () => __webpack_require__.e(/*! import() | analise-compras-analise-compras-module */ "analise-compras-analise-compras-module").then(__webpack_require__.bind(null, /*! ./analise-compras/analise-compras.module */ "njR8")).then(m => m.AbastecimentoMonitoresAnaliseComprasModule)
            },
            {
                path: 'analise-compras-multi-visoes',
                loadChildren: () => Promise.all(/*! import() | analise-compras-multi-visoes-analise-compras-multi-visoes-module */[__webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("analise-compras-multi-visoes-analise-compras-multi-visoes-module")]).then(__webpack_require__.bind(null, /*! ./analise-compras-multi-visoes/analise-compras-multi-visoes.module */ "7cRG")).then(m => m.AbastecimentoMonitoresAnaliseComprasMultiVisoesModule)
            },
            {
                path: 'integracao-pedidos',
                loadChildren: () => Promise.all(/*! import() | integracao-pedidos-integracao-pedidos-module */[__webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("common"), __webpack_require__.e("integracao-pedidos-integracao-pedidos-module")]).then(__webpack_require__.bind(null, /*! ./integracao-pedidos/integracao-pedidos.module */ "C9+X")).then(m => m.AbastecimentoMonitoresIntegracaoPedidosModule)
            },
            {
                path: 'nfe-sem-pedido-pai',
                loadChildren: () => Promise.all(/*! import() | nfe-sem-pedido-pai-nfe-sem-pedido-pai-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("nfe-sem-pedido-pai-nfe-sem-pedido-pai-module")]).then(__webpack_require__.bind(null, /*! ./nfe-sem-pedido-pai/nfe-sem-pedido-pai.module */ "FSzN")).then(m => m.AbastecimentoMonitoresNfeSemPedidoPaiModule)
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    }
];
let AbastecimentoMonitoresRoutingModule = class AbastecimentoMonitoresRoutingModule {
};
AbastecimentoMonitoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AbastecimentoMonitoresRoutingModule);



/***/ })

}]);
//# sourceMappingURL=monitores-monitores-module-es2015.js.map