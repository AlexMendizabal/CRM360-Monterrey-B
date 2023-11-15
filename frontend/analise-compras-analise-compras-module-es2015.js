(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analise-compras-analise-compras-module"],{

/***/ "0iJp":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-carteira/modal-carteira.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent", function() { return AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_carteira_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-carteira.component.html */ "DZqO");
/* harmony import */ var _modal_carteira_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-carteira.component.scss */ "5bL4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../analise-compras.service */ "yPm9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);
//Converte rota em base64





let AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent = class AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent {
    /* dados do usuário */
    constructor(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.service = service;
        this.pnotifyService = pnotifyService;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.loaderBody = false;
        this.enableTabAbastFornecedor = false;
        this.enableTabAbastInterno = false;
        this.empresas = [];
        this.depositos = [];
        this.pedidoPai = [];
        this.dataPedido = [];
        this.pedidoRemessa = [];
        this.previsaoEntrega = [];
        this.fornecedor = [];
        this.modal = [];
        this.dadosExcel = [];
        this.dadosCarteiraDetalhe = [];
        this.dadosCarteiraDetalhesAbastGeralTT = [];
        this.dadosCarteiraDetalhesAbastGeralFull = [];
        this.dadosCarteiraDetalhesAbastGeral = [];
        this.dadosCarteiraDetalhesAbastInterno = [];
        this.dadosCarteiraDetalhesAbastTotal = [];
        this.dadosCarteiraDetalhesAbastFornecedor = [];
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_EMPR';
        this.reverseB = false;
        this.keyB = 'NM_EMPR';
        this.reverseC = false;
        this.keyC = 'NM_EMPR';
        /* PaginationModal*/
        this.itemsPerPage = 15;
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        this.currentPageB = 1;
        this.beginB = 0;
        this.endB = 15;
        this.currentPageC = 1;
        this.beginC = 0;
        this.endC = 15;
        /* dados do usuário */
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            empresas: [null],
            depositos: [null],
            pedidoPai: [null],
            dataPedido: [null],
            pedidoRemessa: [null],
            previsaoEntrega: [null],
            fornecedor: [null]
        });
    }
    ngOnInit() {
        this.modal.codMaterial = this.item.ID_REFE_ERP;
        this.modal.descMaterial = this.item.NM_MATE;
        this.modal.unidadeMedida = this.item.NM_UNID_MEDI;
        this.resetValuesForm();
        this.setParamsCarteira();
    }
    resetValuesForm() {
        this.form.get('empresas').reset();
        this.form.get('depositos').reset();
        this.form.get('pedidoPai').reset();
        this.form.get('dataPedido').reset();
        this.form.get('pedidoRemessa').reset();
        this.form.get('previsaoEntrega').reset();
        this.form.get('fornecedor').reset();
    }
    setParamsCarteira() {
        let queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
        let params = [];
        let tipoVisualizacao = queryParams["tipoVisualizacao"];
        let idMaterial = this.item["ID_MATE"];
        let idMesAno = this.idMesAno;
        if (tipoVisualizacao == 'S') {
            this.idEmpresa = queryParams["empresas"];
            this.idDeposito = queryParams["depositos"];
        }
        else if (tipoVisualizacao == 'A') {
            this.idEmpresa = "";
            this.idDeposito = this.item["ID_DEPO"];
        }
        params = {
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: this.idMesAno ? this.idMesAno : "",
            ID_MATE: idMaterial ? idMaterial : "",
            NM_EMPR: "",
            NM_DEPO: "",
            NR_PEDI_ORIG: "",
            DT_PEDI_ORIG: "",
            NR_PEDI_REME: "",
            DT_PREV_ENTR: "",
            NM_FORN: ""
        };
        this.getCarteiraDetalhes(params);
    }
    getCarteiraDetalhes(params) {
        this.dadosCarteiraDetalhesAbastFornecedor = [];
        this.dadosCarteiraDetalhesAbastInterno = [];
        this.dadosCarteiraDetalhesAbastGeral = [];
        this.dadosCarteiraDetalhesAbastGeralFull = [];
        this.dadosCarteiraDetalhesAbastGeralTT = [];
        this.loaderBody = true;
        this.noResultModal = false;
        this.loadingDetalhesModal = false;
        this.loadingDetalhesModal = false;
        this.enableTabAbastInterno = false;
        this.enableTabAbastFornecedor = false;
        this.service.getCarteiraDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => (this.loaderBody = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.loadingDetalhesModal = true;
                    this.noResultModal = false;
                    this.dadosCarteiraDetalhesAbastFornecedor = res['body']['result']['ABAS_FORN'];
                    this.dadosCarteiraDetalhesAbastInterno = res['body']['result']['ABAS_INTE'];
                    this.dadosCarteiraDetalhesAbastTotal = res['body']['result']['TOTA_DETA_CART_ABER'];
                    this.dadosCarteiraDetalhesAbastGeralFull = res['body']['result']['INFO_GERA'];
                    this.dadosCarteiraDetalhesAbastGeralTT = this.dadosCarteiraDetalhesAbastGeralFull.shift();
                    this.dadosCarteiraDetalhesAbastGeral = this.dadosCarteiraDetalhesAbastGeralFull;
                    if (this.dadosCarteiraDetalhesAbastInterno != ( false || undefined)) {
                        this.enableTabAbastInterno = true;
                    }
                    if (this.dadosCarteiraDetalhesAbastFornecedor != ( false || undefined)) {
                        this.enableTabAbastFornecedor = true;
                    }
                    if (!this.enableTabAbastInterno && this.enableTabAbastFornecedor) {
                        this.form.get('pedidoRemessa').reset();
                        this.form.get('pedidoRemessa').disable();
                    }
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = false;
                    this.noResultModal = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao detalhes de Carteira');
        });
    }
    getCarteiraDetalhesExcel(params) {
        this.dadosExcel = [];
        this.service.getCarteiraDetalhes(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosExcel = res['body']['result'];
                    this.pnotifyService.success(this.dadosExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao detalhes de Carteira');
        });
    }
    onFilter() {
        let dataPedido = this.setDateValid(this.form.value['dataPedido']);
        let previsaoEntrega = this.setDateValid(this.form.value['previsaoEntrega']);
        let params = {
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: this.idMesAno ? this.idMesAno : "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_PEDI_ORIG: this.form.value['pedidoPai'] ? this.form.value['pedidoPai'] : "",
            DT_PEDI_ORIG: dataPedido ? dataPedido : "",
            NR_PEDI_REME: this.form.value['pedidoRemessa'] ? this.form.value['pedidoRemessa'] : "",
            DT_PREV_ENTR: previsaoEntrega ? previsaoEntrega : "",
            NM_FORN: this.form.value['fornecedor'] ? this.form.value['fornecedor'] : "",
            IN_GERA_RELA_EXCE: "",
            ID_USUA: ""
        };
        this.getCarteiraDetalhes(params);
    }
    excelExport() {
        let dataPedido = this.setDateValid(this.form.value['dataPedido']);
        let previsaoEntrega = this.setDateValid(this.form.value['previsaoEntrega']);
        let params = {
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: this.idMesAno ? this.idMesAno : "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_PEDI_ORIG: this.form.value['pedidoPai'] ? this.form.value['pedidoPai'] : "",
            DT_PEDI_ORIG: dataPedido ? dataPedido : "",
            NR_PEDI_REME: this.form.value['pedidoRemessa'] ? this.form.value['pedidoRemessa'] : "",
            DT_PREV_ENTR: previsaoEntrega ? previsaoEntrega : "",
            NM_FORN: this.form.value['fornecedor'] ? this.form.value['fornecedor'] : "",
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: this.idUsuario
        };
        this.getCarteiraDetalhesExcel(params);
    }
    setDateValid(date) {
        if (date instanceof Date) {
            date = this.dateService.convertToUrlDate(date);
        }
        return date;
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    sortB(keyB) {
        this.keyB = keyB;
        this.reverseB = !this.reverseB;
    }
    sortC(keyC) {
        this.keyC = keyC;
        this.reverseC = !this.reverseC;
    }
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    onPageChangedB(event) {
        this.beginB = (event.page - 1) * event.itemsPerPage;
        this.endB = event.page * event.itemsPerPage;
    }
    onPageChangedC(event) {
        this.beginC = (event.page - 1) * event.itemsPerPage;
        this.endC = event.page * event.itemsPerPage;
    }
};
AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idMesAno: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-carteira',
        template: _raw_loader_modal_carteira_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_carteira_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent);



/***/ }),

/***/ "0opu":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-realizadas/modal-vendas-realizadas.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent", function() { return AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_vendas_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-vendas-realizadas.component.html */ "6IHY");
/* harmony import */ var _modal_vendas_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-vendas-realizadas.component.scss */ "WXyx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../analise-compras.service */ "yPm9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);
//Converte rota em base64





let AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent = class AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent {
    /* dados do usuário */
    constructor(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.service = service;
        this.pnotifyService = pnotifyService;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.loaderBody = false;
        this.compararDataFinal = false;
        this.compararDataInicial = false;
        this.compararDataFinalAtual = false;
        this.empresas = [];
        this.depositos = [];
        this.proposta = [];
        this.dataEntrada = [];
        this.dataEncerramento = [];
        this.cliente = [];
        this.modal = [];
        this.dadosExcel = [];
        this.dadosVendasRealDetalhesModalFull = [];
        this.dadosVendasRealDetalhesModal = [];
        this.dadosVendasRealDetalhesModalTotal = [];
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_EMPR';
        /* PaginationModal*/
        this.itemsPerPage = 15;
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        /* dados do usuário */
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            dataInicial: [null],
            dataFinal: [null],
            empresas: [null],
            depositos: [null],
            numeroNF: [null],
            dataNF: [null],
            cliente: [null],
            vendedor: [null]
        });
    }
    ngOnInit() {
        this.modal.codMaterial = this.item.ID_REFE_ERP;
        this.modal.descMaterial = this.item.NM_MATE;
        this.modal.unidadeMedida = this.item.NM_UNID_MEDI;
        this.resetValuesForm();
        this.setParamsVendasRealizadas();
    }
    resetValuesForm() {
        this.form.get('dataInicial').reset();
        this.form.get('dataFinal').reset();
        this.form.get('empresas').reset();
        this.form.get('depositos').reset();
        this.form.get('numeroNF').reset();
        this.form.get('dataNF').reset();
        this.form.get('cliente').reset();
        this.form.get('vendedor').reset();
    }
    setParamsVendasRealizadas() {
        let queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
        let dataInicial = queryParams["dataInicial"];
        let dataFinal = queryParams["dataFinal"];
        let dataInicialParam = dataInicial;
        let dataFinalParam = dataFinal;
        let params = [];
        let tipoVisualizacao = queryParams["tipoVisualizacao"];
        let idMaterial = this.item["ID_MATE"];
        let idMesAno = this.idMesAno;
        if (this.idMesAno) {
            dataInicialParam = "";
            dataFinalParam = "";
            let mesAno = this.idMesAno.replace('_', '/01/');
            let date = new Date(mesAno);
            let primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
            let ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            let primeiroDiaC = this.setDateValid(primeiroDia);
            let ultimoDiaC = this.setDateValid(ultimoDia);
            primeiroDiaC = new Date(primeiroDiaC.split('-').reverse().join('-'));
            ultimoDiaC = new Date(ultimoDiaC.split('-').reverse().join('-'));
            let dataInicialC = new Date(dataInicial.split('-').reverse().join('-'));
            let dataFinalC = new Date(dataFinal.split('-').reverse().join('-'));
            if (primeiroDiaC > dataInicialC) {
                dataInicial = this.setDateValid(primeiroDia);
            }
            if (ultimoDiaC < dataFinalC) {
                dataFinal = this.setDateValid(ultimoDia);
            }
        }
        if (tipoVisualizacao == 'S') {
            this.idEmpresa = queryParams["empresas"];
            this.idDeposito = queryParams["depositos"];
        }
        else if (tipoVisualizacao == 'A') {
            this.idEmpresa = "";
            this.idDeposito = this.item["ID_DEPO"];
        }
        params = {
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            DT_INIC: dataInicial ? dataInicial : "",
            DT_FINA: dataFinal ? dataFinal : "",
            NM_MES_ANO: "",
            ID_MATE: idMaterial ? idMaterial : "",
            NM_EMPR: "",
            NM_DEPO: "",
            NR_NOTA_FISC: "",
            DT_NOTA_FISC: "",
            NM_CLIE: "",
            NM_VEND: ""
        };
        this.getVendasRealizadasDetalhes(params);
        this.form.get("dataInicial").setValue(dataInicial);
        this.form.get("dataFinal").setValue(dataFinal);
    }
    getVendasRealizadasDetalhes(params) {
        this.dadosVendasRealDetalhesModalFull = [];
        this.dadosVendasRealDetalhesModal = [];
        this.dadosVendasRealDetalhesModalTotal = [];
        this.loaderBody = true;
        this.noResultModal = false;
        this.loadingDetalhesModal = false;
        this.service.getVendasRealizadasDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => (this.loaderBody = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosVendasRealDetalhesModalFull = res['body']['result'];
                    this.dadosVendasRealDetalhesModalTotal = this.dadosVendasRealDetalhesModalFull.shift();
                    this.dadosVendasRealDetalhesModal = this.dadosVendasRealDetalhesModalFull;
                    this.loadingDetalhesModal = true;
                    this.noResultModal = false;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = false;
                    this.noResultModal = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao Vendas Realizadas Detalhes');
        });
    }
    getVendasRealizadasDetalhesExcel(params) {
        this.dadosExcel = [];
        this.service.getVendasRealizadasDetalhes(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosExcel = res['body']['result'];
                    this.pnotifyService.success(this.dadosExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao detalhes de Carteira');
        });
    }
    onFilter() {
        let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        let dataNF = this.setDateValid(this.form.value['dataNF']);
        let params = {
            DT_INIC: dataInicial ? dataInicial : "",
            DT_FINA: dataFinal ? dataFinal : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_NOTA_FISC: this.form.value['numeroNF'] ? this.form.value['numeroNF'] : "",
            DT_NOTA_FISC: dataNF ? dataNF : "",
            NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
            NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
            IN_GERA_RELA_EXCE: "",
            ID_USUA: ""
        };
        this.getVendasRealizadasDetalhes(params);
    }
    excelExport() {
        let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        let dataNF = this.setDateValid(this.form.value['dataNF']);
        let params = {
            DT_INIC: dataInicial ? dataInicial : "",
            DT_FINA: dataFinal ? dataFinal : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_NOTA_FISC: this.form.value['numeroNF'] ? this.form.value['numeroNF'] : "",
            DT_NOTA_FISC: dataNF ? dataNF : "",
            NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
            NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: this.idUsuario
        };
        this.getVendasRealizadasDetalhesExcel(params);
    }
    setDateValid(date) {
        if (date instanceof Date) {
            date = this.dateService.convertToUrlDate(date);
        }
        return date;
    }
    comparaData() {
        let stra = this.form.get('dataInicial').value;
        let strb = this.form.get('dataFinal').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
            ;
        }
        if (!dataInicial) {
            this.compararDataFinal = false;
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compararDataFinal = true;
            return this.compararDataFinal;
        }
    }
    comparaDataFinal() {
        let now = new Date();
        if (!this.form.get('dataFinal').value) {
            this.compararDataFinalAtual = false;
            return false;
        }
        else if (this.form.get('dataFinal').value > now) {
            this.compararDataFinalAtual = true;
            return this.compararDataFinalAtual;
        }
    }
    comparaDataInicial() {
        let now = new Date();
        if (!this.form.get('dataInicial').value) {
            this.compararDataInicial = false;
            return false;
        }
        else if (this.form.get('dataInicial').value > now) {
            this.compararDataInicial = true;
            return this.compararDataInicial;
        }
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
};
AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idMesAno: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-vendas-realizadas',
        template: _raw_loader_modal_vendas_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_vendas_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent);



/***/ }),

/***/ "5bL4":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-carteira/modal-carteira.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLWNhcnRlaXJhL21vZGFsLWNhcnRlaXJhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "6IHY":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-realizadas/modal-vendas-realizadas.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2 mt-2\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> UN. MEDIDA: </strong> {{ modal.unidadeMedida }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-3 text-right\">\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"onFilter()\"\r\n      class=\"btn mr-2\"\r\n       [disabled]=\"\r\n        comparaData() ||\r\n        comparaDataInicial() ||\r\n        comparaDataFinal()\r\n      \"\r\n    >\r\n      Filtrar\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"excelExport()\"\r\n      class=\"btn\"\r\n      [disabled]=\"\r\n        comparaData() ||\r\n        comparaDataInicial() ||\r\n        comparaDataFinal()\r\n      \"\r\n    >\r\n      Exportar Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataNF\">Data Inicial</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataInicial\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataInicial\"\r\n        >\r\n        <invalid-form-control\r\n          [show]=\"comparaDataInicial()\"\r\n          message=\"Data inicial não pode ser maior que data atual\"\r\n        >\r\n        </invalid-form-control>\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataFinal\">Data Final</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataFinal\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataFinal\"\r\n        >\r\n        <invalid-form-control\r\n          [show]=\"comparaData()\"\r\n          message=\"Data final deve ser maior que data inicial\"\r\n        >\r\n        </invalid-form-control>\r\n        <invalid-form-control\r\n          [show]=\"comparaDataFinal()\"\r\n          message=\"Data final não pode ser maior que data atual\"\r\n        >\r\n        </invalid-form-control>\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"empresas\">Empresas</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"empresas\"\r\n          type=\"text\"\r\n          formControlName=\"empresas\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"depositos\">Depósito</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"depositos\"\r\n          type=\"text\"\r\n          formControlName=\"depositos\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"numeroNF\">Número NF</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"numeroNF\"\r\n          type=\"text\"\r\n          formControlName=\"numeroNF\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataNF\">Data NF</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataNF\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataNF\"\r\n        >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"cliente\">Cliente</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"cliente\"\r\n          type=\"text\"\r\n          formControlName=\"cliente\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"vendedor\">Promotor</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"vendedor\"\r\n          type=\"text\"\r\n          formControlName=\"vendedor\"\r\n        >\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<div class=\"table-responsive\" *ngIf=\"loadingDetalhesModal\">\r\n  <custom-table subtitleBorder=\"true\">\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_EMPR')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Empresa\r\n          <span *ngIf=\"keyA == 'NM_EMPR'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_EMPR'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_DEPO')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Depósito\r\n          <span *ngIf=\"keyA == 'NM_DEPO'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_DEPO'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NR_NOTA_FISC_SAID')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Número de NF\r\n          <span *ngIf=\"keyA == 'NR_NOTA_FISC_SAID'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NR_NOTA_FISC_SAID'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('DT_EMIS_NOTA_FISC_SAID')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Data de NF\r\n          <span *ngIf=\"keyA == 'DT_EMIS_NOTA_FISC_SAID'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'DT_EMIS_NOTA_FISC_SAID'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_CLIE')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Cliente\r\n          <span *ngIf=\"keyA == 'NM_CLIE'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_CLIE'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_VEND')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Vendedor\r\n          <span *ngIf=\"keyA == 'NM_VEND'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_VEND'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('TT_ITEM_PEDI_TONE')\"\r\n          class=\"hover text-center\"\r\n          *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n        >\r\n          Quantidade(Ton)\r\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI_TONE'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI_TONE'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('TT_ITEM_PEDI')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Quantidade\r\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr\r\n        *ngFor=\"\r\n          let item of dadosVendasRealDetalhesModal\r\n            | orderBy: keyA:reverseA\r\n            | slice: beginA:endA;\r\n          let i = index\r\n        \"\r\n      >\r\n        <td nowrap>{{ item.NM_EMPR }}</td>\r\n        <td nowrap>{{ item.NM_DEPO }}</td>\r\n        <td nowrap class=\"text-center\">\r\n          {{ item.NR_NOTA_FISC_SAID | number: '0.0' }}\r\n        </td>\r\n        <td nowrap class=\"text-center\">\r\n          {{ item.DT_EMIS_NOTA_FISC_SAID | date: 'dd/MM/yyyy' }}\r\n        </td>\r\n        <td nowrap>{{ item.NM_CLIE }}</td>\r\n        <td nowrap>{{ item.NM_VEND }}</td>\r\n        <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n          {{ item.TT_ITEM_PEDI_TONE | number: '0.3' }}\r\n        </td>\r\n        <td nowrap class=\"text-right\">\r\n          {{ this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI | number: '0.0') : (item.TT_ITEM_PEDI | number: '0.3') }}\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td nowrap class=\"bg-dark text-white\">TOTAL</td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n          {{ dadosVendasRealDetalhesModalTotal[\"TT_ITEM_PEDI_TONE\"] | number: '0.3' }}\r\n        </td>\r\n        <td nowrap class=\"bg-dark text-white text-right\">\r\n          {{this.modal.unidadeMedida != 'TON' ? (dadosVendasRealDetalhesModalTotal[\"TT_ITEM_PEDI\"] | number: '0.0') : (dadosVendasRealDetalhesModalTotal[\"TT_ITEM_PEDI\"] | number: '0.3')}}\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div\r\n  class=\"mt-2 mb-2\"\r\n  *ngIf=\"dadosVendasRealDetalhesModal?.length > itemsPerPage\"\r\n>\r\n  Exibindo {{ beginA + 1 }} a {{ endA }} de\r\n  {{ dadosVendasRealDetalhesModal?.length }}\r\n  <div class=\"d-flex\">\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"dadosVendasRealDetalhesModal?.length\"\r\n      (pageChanged)=\"onPageChangedA($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPageA\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\"\r\n    >\r\n    </pagination>\r\n  </div>\r\n</div>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n  style=\"height: 80%;\"\r\n  >\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n");

/***/ }),

/***/ "BD19":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-comprometido/modal-estoque-comprometido.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header-modal-estoque-comprometido > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8vbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLGdFQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8vbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLW1vZGFsLWVzdG9xdWUtY29tcHJvbWV0aWRvPiBkaXYgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjBmM2Y2KSwgY29sb3Itc3RvcCg5MCUsICNlNmViZjEpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "BKQW":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Análise de Compras\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter(currentPage=1)\"\r\n    [disabled]=\"\r\n      form.status == 'INVALID' ||\r\n      (form.get('dataInicial').value == null &&\r\n        form.get('paramData').value != 1) ||\r\n      (form.get('dataFinal').value == null &&\r\n        form.get('paramData').value != 1) ||\r\n      comparaData() ||\r\n      comparaDataInicial() ||\r\n      comparaDataFinal()\r\n    \"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"excelExport()\"\r\n    [disabled]=\"\r\n      form.status == 'INVALID' ||\r\n      (form.get('dataInicial').value == null &&\r\n        form.get('paramData').value != 1) ||\r\n      (form.get('dataFinal').value == null &&\r\n        form.get('paramData').value != 1) ||\r\n      comparaData() ||\r\n      comparaDataInicial() ||\r\n      comparaDataFinal()\r\n    \"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"tipoMaterial\">Tipo de Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tiposMateriais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [multiple]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"tipoMaterial\"\r\n            (change)=\"resetForm()\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"situacao\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"situacoes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            formControlName=\"situacao\"\r\n            (change)=\"resetForm()\"\r\n            [ngClass]=\"\r\n              onFieldError('situacao') + ' ' + onFieldRequired('situacao')\r\n            \"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('situacao')\"\r\n            message=\"Situação é obrigatório.\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linha\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"linha\"\r\n            (change)=\"\r\n              getSubLinhas() +\r\n                ' ' +\r\n                getClasses() +\r\n                ' ' +\r\n                getDepositosAssociados()\r\n            \"\r\n            [ngClass]=\"onFieldError('linha') + ' ' + onFieldRequired('linha')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('linha')\"\r\n            message=\"Linha é obrigatório.\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"subLinha\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            (change)=\"getClasses()\"\r\n            formControlName=\"subLinha\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [multiple]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            maxSelectedItems=\"6\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"classe\"\r\n            (change)=\"getMateriais() + ' ' + getDepositosAssociados()\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"material\">Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"materiais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [multiple]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"ID_REFE_ERP_NM_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"material\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"empresas\">Empresas</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"depositosAssociados\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [multiple]=\"true\"\r\n            (change)=\"getDepositos($event)\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_EMPR\"\r\n            bindValue=\"ID_EMPR\"\r\n            formControlName=\"empresas\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"depositos\">Depósitos</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"depositos\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [multiple]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_DEPO\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"depositos\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"nivelEstoque\">Nível de Estoque</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tiposNiveisEstoques\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            [multiple]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_NIVE_ESTO\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"nivelEstoque\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"paramData\">Período de Vendas</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"periodosBusca\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            (change)=\"activeInputDate()\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            formControlName=\"paramData\"\r\n            [ngClass]=\"\r\n              onFieldError('paramData') + ' ' + onFieldRequired('paramData')\r\n            \"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('paramData')\"\r\n            message=\"Período de vendas é obrigatório.\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"dataInicial\">Data Inicial</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataInicial\"\r\n          />\r\n          <invalid-form-control\r\n            [show]=\"comparaDataInicial()\"\r\n            message=\"Data inicial não pode ser maior que data atual\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"dataFinal\">Data Final</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataFinal\"\r\n          />\r\n          <invalid-form-control\r\n            [show]=\"comparaData()\"\r\n            message=\"Data final deve ser maior que data inicial\"\r\n          >\r\n          </invalid-form-control>\r\n          <invalid-form-control\r\n            [show]=\"comparaDataFinal()\"\r\n            message=\"Data final não pode ser maior que data atual\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"tipoVisualizacao\">Tipo Visualização</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tiposVisualizacao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            formControlName=\"tipoVisualizacao\"\r\n            [ngClass]=\"\r\n              onFieldError('tipoVisualizacao') +\r\n              ' ' +\r\n              onFieldRequired('tipoVisualizacao')\r\n            \"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('tipoVisualizacao')\"\r\n            message=\"Tipo visualização é obrigatório.\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"infAdicionais\">Inf. Adicionais</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"infAdicionaisDados\"\r\n            [virtualScroll]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [multiple]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            bindLabel=\"NM_INFO\"\r\n            bindValue=\"ID_INFO\"\r\n            groupBy=\"INFO\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"infAdicionais\"\r\n          >\r\n            <ng-template ng-optgroup-tmp let-item=\"item\">\r\n              {{ item.NM_GRUP }}\r\n            </ng-template>\r\n            <ng-template ng-option-tmp let-item=\"item\">\r\n              {{ item.NM_INFO }}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-1\">\r\n          <label for=\"qtItensPagina\">Registros</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"numberOfItems\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"qtItensPagina\"\r\n            formControlName=\"qtItensPagina\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <subtitles [data]=\"subtitles\" [show]=\"totalItems > 0 && loading\"> </subtitles>\r\n  <div class=\"mt-3\" *ngIf=\"loading && totalItems > 0\">\r\n    <div class=\"table-responsive\">\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th\r\n              nowrap\r\n              class=\"sticky\"\r\n              scope=\"col\"\r\n              colspan=\"1\"\r\n              *ngIf=\"depositoBool\"\r\n              [ngStyle]=\"{ left: '0px' }\"\r\n              style=\"background-color: #fff;\"\r\n              width=\"180px\"\r\n            >\r\n              Grupo\r\n            </th>\r\n            <th\r\n              nowrap\r\n              class=\"sticky\"\r\n              scope=\"col\"\r\n              colspan=\"2\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\r\n              style=\"background-color: #fff;\"\r\n            >\r\n              Material\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              [attr.colspan]=\"colsMat\"\r\n              *ngIf=\"colsMat != 0\"\r\n            ></th>\r\n            <th nowrap scope=\"col\" [attr.colspan]=\"colsEstoque ? colsEst : 1\">\r\n              Estoque(TON)\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"setColsEstoqueTrue()\"\r\n                *ngIf=\"colsEst > 1\"\r\n              >\r\n                <i\r\n                  [ngClass]=\"colsEstoque ? 'fas fa-minus' : 'fas fa-plus'\"\r\n                  title=\"Mostrar detalhes Estoque\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </th>\r\n            <th nowrap scope=\"col\" [attr.colspan]=\"colsCarteira ? colsCar : 1\">\r\n              Carteira(TON)\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"setColsCarteiraTrue()\"\r\n                *ngIf=\"colsCar > 1\"\r\n              >\r\n                <i\r\n                  [ngClass]=\"colsCarteira ? 'fas fa-minus' : 'fas fa-plus'\"\r\n                  title=\"Mostrar Carteira/mês\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              [attr.colspan]=\"colsVendasReal ? colsVenRea : 2\"\r\n            >\r\n              Vendas Realizadas (TON)\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"setColsVendasRealTrue()\"\r\n                *ngIf=\"colsVenRea > 2\"\r\n              >\r\n                <i\r\n                  [ngClass]=\"colsVendasReal ? 'fas fa-minus' : 'fas fa-plus'\"\r\n                  title=\"Mostrar Vendas Realizadas/mês\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              [attr.colspan]=\"colsVendasPerd ? colsVenPed : 2\"\r\n            >\r\n              Vendas Perdidas (TON)\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"setColsVendasPerdTrue()\"\r\n                *ngIf=\"colsVenPed > 2\"\r\n              >\r\n                <i\r\n                  [ngClass]=\"colsVendasPerd ? 'fas fa-minus' : 'fas fa-plus'\"\r\n                  title=\"Mostrar Vendas Perdidas/mês\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </th>\r\n            <th nowrap scope=\"col\" colspan=\"2\">Estatístico</th>\r\n          </tr>\r\n          <tr class=\"text-center\">\r\n            <!-- Inicio - Materiais -->\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover sticky\"\r\n              [ngStyle]=\"{ left: '0px' }\"\r\n              style=\"background-color: #fff;\"\r\n              width=\"180px\"\r\n              (click)=\"sort('NM_DEPO')\"\r\n              *ngIf=\"depositoBool\"\r\n            >\r\n              Depósito\r\n              <span *ngIf=\"key == 'NM_DEPO'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_DEPO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover sticky\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\r\n              style=\"background-color: #fff;\"\r\n              width=\"105px\"\r\n              (click)=\"sort('ID_REFE_ERP')\"\r\n            >\r\n              Cód. Material\r\n              <span *ngIf=\"key == 'ID_REFE_ERP'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'ID_REFE_ERP'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover sticky\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '105px' : '285px' }\"\r\n              style=\"background-color: #fff;\"\r\n              (click)=\"sort('NM_MATE')\"\r\n            >\r\n              Descrição\r\n              <span *ngIf=\"key == 'NM_MATE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_MATE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_LINH')\"\r\n              *ngIf=\"linhaBool\"\r\n            >\r\n              Linha\r\n              <span *ngIf=\"key == 'NM_LINH'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_LINH'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_SUB_LINH')\"\r\n              *ngIf=\"subLinhaBool\"\r\n            >\r\n              Sublinha\r\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_CLAS')\"\r\n              *ngIf=\"classeBool\"\r\n            >\r\n              Classe\r\n              <span *ngIf=\"key == 'NM_CLAS'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_CLAS'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"uniMedidaBool\"\r\n            >\r\n              Unidade de Medida\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"bitolaBool\"\r\n            >\r\n              Bitola\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"larguraBool\"\r\n            >\r\n              Largura\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"comprimentoBool\"\r\n            >\r\n              Comprimento\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"qualidadeBool\"\r\n            >\r\n              Qualidade\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"revestimentoBool\"\r\n            >\r\n              Revestimento\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\r\n              *ngIf=\"tipoAcoBool\"\r\n            >\r\n              Tipo de Aço\r\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <!-- FIM - Materiais -->\r\n            <!-- Inicio - Estoque -->\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_ESTO_ATUA_TONE')\"\r\n              *ngIf=\"estAtualBool && colsEstoque\"\r\n            >\r\n              Atual\r\n              <span *ngIf=\"key == 'TT_ESTO_ATUA_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_ATUA_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_ESTO_COMP_TONE')\"\r\n              *ngIf=\"estComprBool && colsEstoque\"\r\n            >\r\n              Comprometido\r\n              <span *ngIf=\"key == 'TT_ESTO_COMP_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_COMP_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_ESTO_SUSP_TONE')\"\r\n              *ngIf=\"estSuspBool && colsEstoque\"\r\n            >\r\n              Supenso\r\n              <span *ngIf=\"key == 'TT_ESTO_SUSP_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_SUSP_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_ESTO_DISP_TONE')\"\r\n            >\r\n              Disponível\r\n              <span *ngIf=\"key == 'TT_ESTO_DISP_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_DISP_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <!-- FIM - Estoque -->\r\n            <!-- Inicio - Carteira -->\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort(item.row)\"\r\n              *ngFor=\"let item of dadosCarteiraDetalhe\"\r\n              [hidden]=\"!colsCarteira\"\r\n            >\r\n              {{ item.header }}\r\n              <span *ngIf=\"key == item.row\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != item.row\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_CART_ABER_TONE')\"\r\n            >\r\n              Carteira\r\n              <span *ngIf=\"key == 'TT_CART_ABER_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_CART_ABER_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <!-- FIM - Carteira -->\r\n            <!-- Inicio - Vendas Realizadas -->\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort(item.row)\"\r\n              *ngFor=\"let item of dadosVendasRealDetalhe\"\r\n              [hidden]=\"!colsVendasReal\"\r\n            >\r\n              {{ item.header }}\r\n              <span *ngIf=\"key == item.row\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != item.row\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_VEND_REAL_TONE')\"\r\n            >\r\n              Vendas\r\n              <span *ngIf=\"key == 'TT_VEND_REAL_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_VEND_REAL_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_MEDI_VEND_REAL_TONE')\"\r\n              tooltip=\"(Vol. vendas / Período) * 30\"\r\n              placement=\"top\"\r\n            >\r\n              Média\r\n              <span *ngIf=\"key == 'TT_MEDI_VEND_REAL_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_MEDI_VEND_REAL_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <!-- FIM - Vendas Realizadas -->\r\n            <!-- Inicio - Vendas Perdidas -->\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort(item.row)\"\r\n              *ngFor=\"let item of dadosVendasPerdDetalhe\"\r\n              [hidden]=\"!colsVendasPerd\"\r\n            >\r\n              {{ item.header }}\r\n              <span *ngIf=\"key == item.row\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != item.row\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_VEND_PERD_TONE')\"\r\n            >\r\n              Perdas\r\n              <span *ngIf=\"key == 'TT_VEND_PERD_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_VEND_PERD_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('TT_MEDI_VEND_PERD_TONE')\"\r\n              tooltip=\"(Vol. vendas perd / Período) * 30\"\r\n              placement=\"top\"\r\n            >\r\n              Média\r\n              <span *ngIf=\"key == 'TT_MEDI_VEND_PERD_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_MEDI_VEND_PERD_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <!-- FIM - Vendas Realizadas -->\r\n            <!-- Inicio - Estatistico -->\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('VL_RITM_VEND_TONE')\"\r\n              tooltip=\"(Vendas mês / Dia mês) * 30\"\r\n              placement=\"top\"\r\n            >\r\n              Ritmo\r\n              <span *ngIf=\"key == 'VL_RITM_VEND_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'VL_RITM_VEND_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"sort('NR_DIAS_GIRO')\"\r\n              tooltip=\"Est. disponível / Med. diária\"\r\n              placement=\"left\"\r\n            >\r\n              Giro\r\n              <span *ngIf=\"key == 'NR_DIAS_GIRO'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NR_DIAS_GIRO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <!-- FIM - Estatistico -->\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dados\">\r\n            <!-- Inicio - Materiais -->\r\n            <td\r\n              nowrap\r\n              class=\"text-center hover sticky\"\r\n              *ngIf=\"depositoBool\"\r\n              [ngClass]=\"setColorBorder(item.DS_COR_TIPO_NIVE_ESTO)\"\r\n              [ngStyle]=\"{ left: '0px' }\"\r\n              width=\"180px\"\r\n              (click)=\"lgModal.show() + ' ' + getNivelEstoqueModal(item)\"\r\n              >\r\n              {{ item.NM_DEPO }}\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"text-center hover sticky\"\r\n              [ngClass]=\"!depositoBool ? setColorBorder(item.DS_COR_TIPO_NIVE_ESTO) : ''\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\r\n              width=\"105px\"\r\n              (click)=\"lgModal.show() + ' ' + getNivelEstoqueModal(item)\"\r\n              >\r\n              {{ item.ID_REFE_ERP | number }}\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"sticky\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '105px' : '285px' }\"\r\n            >\r\n              {{ item.NM_MATE }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"linhaBool\">\r\n              {{ item.NM_LINH }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"subLinhaBool\">\r\n              {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"classeBool\">\r\n              {{ item.NM_CLAS }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"uniMedidaBool\">\r\n              {{ item.NM_APOI_UNID_MEDI ? item.NM_APOI_UNID_MEDI : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"bitolaBool\">\r\n              {{ item.VL_MEDI ? item.VL_MEDI : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"larguraBool\">\r\n              {{ item.VL_LARG ? item.VL_LARG : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"comprimentoBool\">\r\n              {{ item.VL_COMP ? item.VL_COMP : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"qualidadeBool\">\r\n              {{ item.DS_QUAL ? item.DS_QUAL : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"revestimentoBool\">\r\n              {{ item.DS_REVE ? item.DS_REVE : '-' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"tipoAcoBool\">\r\n              {{ item.DS_TIPO_ACO ? item.DS_TIPO_ACO : '-' }}\r\n            </td>\r\n            <!-- FIM - Materiais -->\r\n            <!-- Inicio - Estoque -->\r\n            <td nowrap class=\"text-center\" *ngIf=\"estAtualBool && colsEstoque\">\r\n              {{ item.TT_ESTO_ATUA_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"estComprBool && colsEstoque\">\r\n              {{ item.TT_ESTO_COMP_TONE | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"\r\n                  lgModal.show() + ' ' + getEstoqueComprometidoModal(item)\r\n                \"\r\n                [disabled]=\"item.TT_ESTO_COMP_TONE == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Estoque Comprometido\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"estSuspBool && colsEstoque\">\r\n              {{ item.TT_ESTO_SUSP_TONE | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"\r\n                  lgModal.show() + ' ' + getEstoqueSupensoModal(item)\r\n                \"\r\n                [disabled]=\"item.TT_ESTO_SUSP_TONE == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Estoque Suspendo\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.TT_ESTO_DISP_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Estoque -->\r\n            <!-- Inicio - Carteira -->\r\n            <td\r\n              nowrap\r\n              class=\"text-right\"\r\n              *ngFor=\"let column of dadosCarteiraDetalhe\"\r\n              [hidden]=\"!colsCarteira\"\r\n            >\r\n              {{ item[column.row] | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"\r\n                  lgModal.show() + ' ' + getCarteiraModal(item, column.id)\r\n                \"\r\n                [disabled]=\"item[column.row] == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Carteira/mês\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{ item.TT_CART_ABER_TONE | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"lgModal.show() + ' ' + getCarteiraModal(item)\"\r\n                [disabled]=\"item.TT_CART_ABER_TONE == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Carteira\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <!-- FIM - Carteira -->\r\n            <!-- Inicio - Vendas Realizadas -->\r\n            <td\r\n              nowrap\r\n              class=\"text-right\"\r\n              *ngFor=\"let column of dadosVendasRealDetalhe\"\r\n              [hidden]=\"!colsVendasReal\"\r\n            >\r\n              {{ item[column.row] | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"\r\n                  lgModal.show() + ' ' + getVendasRealModal(item, column.id)\r\n                \"\r\n                [disabled]=\"item[column.row] == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Vendas Realizadas/mês\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{ item.TT_VEND_REAL_TONE | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"lgModal.show() + ' ' + getVendasRealModal(item)\"\r\n                [disabled]=\"item.TT_VEND_REAL_TONE == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Vendas Realizadas\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.TT_MEDI_VEND_REAL_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Vendas Realizadas -->\r\n            <!-- Inicio - Vendas Perdidas -->\r\n            <td\r\n              nowrap\r\n              class=\"text-right\"\r\n              *ngFor=\"let column of dadosVendasPerdDetalhe\"\r\n              [hidden]=\"!colsVendasPerd\"\r\n            >\r\n              {{ item[column.row] | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"\r\n                  lgModal.show() + ' ' + getVendasPerdModal(item, column.id)\r\n                \"\r\n                [disabled]=\"item[column.row] == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Vendas Perdidas/mês\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{ item.TT_VEND_PERD_TONE | number: '0.3' }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"lgModal.show() + ' ' + getVendasPerdModal(item)\"\r\n                [disabled]=\"item.TT_VEND_PERD_TONE == 0\"\r\n              >\r\n                <i\r\n                  class=\"fa fa-search text-primary\"\r\n                  title=\"Detalhes Vendas Perdidas\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.TT_MEDI_VEND_PERD_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Vendas Perdidas -->\r\n            <!-- Inicio - Estatístico -->\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.VL_RITM_VEND_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\">{{ item.NR_DIAS_GIRO | number }}</td>\r\n            <!-- FIM - Estatístico -->\r\n          </tr>\r\n          <!-- Totalizadores -->\r\n          <tr>\r\n            <!-- Inicio - Materiais -->\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark border-dark text-white text-center\"\r\n              *ngIf=\"depositoBool\"\r\n              [ngStyle]=\"{ left: '0px' }\"\r\n              style=\"position: sticky;\"\r\n              width=\"180px\"\r\n            >\r\n              <strong>TOTAL</strong>\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\r\n              [ngClass]=\"!depositoBool ? 'border-dark' : ''\"\r\n              style=\"position: sticky;\"\r\n              width=\"105px\"\r\n            >\r\n              <strong>{{ !depositoBool ? 'TOTAL' : '' }}</strong>\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              [ngStyle]=\"{ left: !depositoBool ? '105px' : '272px' }\"\r\n              style=\"position: sticky;\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"linhaBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"subLinhaBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"classeBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"uniMedidaBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"bitolaBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"larguraBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"comprimentoBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"qualidadeBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"revestimentoBool\"\r\n            ></td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"tipoAcoBool\"\r\n            ></td>\r\n            <!-- FIM - Materiais -->\r\n            <!-- Inicio - Estoque -->\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"estAtualBool && colsEstoque\"\r\n            >\r\n              {{ dadosTotalizadores.TT_ESTO_ATUA_TONE | number: '0.3' }}\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"estComprBool && colsEstoque\"\r\n            >\r\n              {{ dadosTotalizadores.TT_ESTO_COMP_TONE | number: '0.3' }}\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngIf=\"estSuspBool && colsEstoque\"\r\n            >\r\n              {{ dadosTotalizadores.TT_ESTO_SUSP_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.TT_ESTO_DISP_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Estoque -->\r\n            <!-- Inicio - Carteira -->\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngFor=\"let column of dadosCarteiraDetalhe\"\r\n              [hidden]=\"!colsCarteira\"\r\n            >\r\n              {{ dadosTotalizadores[column.row] | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.TT_CART_ABER_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Carteira -->\r\n            <!-- Inicio - Vendas Realizadas -->\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngFor=\"let column of dadosVendasRealDetalhe\"\r\n              [hidden]=\"!colsVendasReal\"\r\n            >\r\n              {{ dadosTotalizadores[column.row] | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.TT_VEND_REAL_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.TT_MEDI_VEND_REAL_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Vendas Realizadas -->\r\n            <!-- Inicio - Vendas Perdidas -->\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center\"\r\n              *ngFor=\"let column of dadosVendasPerdDetalhe\"\r\n              [hidden]=\"!colsVendasPerd\"\r\n            >\r\n              {{ dadosTotalizadores[column.row] | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.TT_VEND_PERD_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.TT_MEDI_VEND_PERD_TONE | number: '0.3' }}\r\n            </td>\r\n            <!-- FIM - Vendas Perdidas -->\r\n            <!-- Inicio - Estatístico -->\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.VL_RITM_VEND_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\">\r\n              {{ dadosTotalizadores.NR_DIAS_GIRO | number: '0.0' }}\r\n            </td>\r\n            <!-- FIM - Estatístico -->\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-2\" *ngIf=\"totalItems > itemsPerPageParam\">\r\n      Exibindo {{ itemsPerPageParam * (currentPage - 1) + 1 }} a\r\n      {{\r\n        currentPage * itemsPerPageParam > totalItems\r\n          ? totalItems\r\n          : currentPage * itemsPerPageParam\r\n      }}\r\n      de {{ totalItems }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPageParam\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult && !loading\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n  [hidden]=\"!loadingDetalhesModal\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          {{ modal.title }}\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide() + ' ' + closeModal()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <!-- Detalhes nível de estoque -->\r\n        <div class=\"container\" *ngIf=\"nivelEstBool\">\r\n          <abastecimento-monitores-analise-compras-modal-nivel-estoque [item]=itemNivelEstoque>\r\n          </abastecimento-monitores-analise-compras-modal-nivel-estoque>\r\n        </div>\r\n        <!-- Detalhes Carteira -->\r\n        <div class=\"container\" *ngIf=\"carteiraBool\">\r\n          <abastecimento-monitores-analise-compras-modal-carteira [item]=itemCarteira [idMesAno]=idMesAnoCarteira>\r\n          </abastecimento-monitores-analise-compras-modal-carteira>\r\n        </div>\r\n        <!-- Detalhes Vendas Realizadas -->\r\n        <div\r\n          class=\"container\"\r\n          *ngIf=\"vendasRealBool\"\r\n        >\r\n          <abastecimento-monitores-analise-compras-modal-vendas-realizadas [item]=itemVendasRealizadas [idMesAno]=idMesAnoVendasRealizadas>\r\n          </abastecimento-monitores-analise-compras-modal-vendas-realizadas>\r\n        </div>\r\n        <!-- Detalhes Vendas Perdidas -->\r\n        <div\r\n          class=\"container\"\r\n          *ngIf=\"vendasPerdBool\"\r\n        >\r\n          <abastecimento-monitores-analise-compras-modal-vendas-perdidas [item]=itemVendasPerdidas [idMesAno]=idMesAnoVendasPerdidas>\r\n          </abastecimento-monitores-analise-compras-modal-vendas-perdidas>\r\n        </div>\r\n        <!-- Detalhes Estoque Supenso -->\r\n        <div\r\n        class=\"container\"\r\n        *ngIf=\"estoqueSuspBool\"\r\n        >\r\n          <abastecimento-monitores-analise-compras-modal-estoque-suspenso [item]=itemEstoqueSupenso>\r\n          </abastecimento-monitores-analise-compras-modal-estoque-suspenso>\r\n        </div>\r\n        <!-- Detalhes Estoque Comprometido -->\r\n        <div\r\n          class=\"container\"\r\n          *ngIf=\"estoqueCompBool\"\r\n        >\r\n          <abastecimento-monitores-analise-compras-modal-estoque-comprometido [item]=itemEstoqueComprometido>\r\n          </abastecimento-monitores-analise-compras-modal-estoque-comprometido>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "DZqO":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-carteira/modal-carteira.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2 mt-2\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> UN. MEDIDA: </strong> {{ modal.unidadeMedida }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-3 text-right\">\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"onFilter()\"\r\n      class=\"btn mr-2\"\r\n    >\r\n      Filtrar\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"excelExport()\"\r\n      class=\"btn\"\r\n    >\r\n      Exportar Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">   \r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"empresas\">Empresa</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"empresas\"\r\n          type=\"text\"\r\n          formControlName=\"empresas\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"depositos\">Deposito</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"depositos\"\r\n          type=\"text\"\r\n          formControlName=\"depositos\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"pedidoPai\">Pedido/ Pedido Pai</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"pedidoPai\"\r\n          type=\"text\"\r\n          formControlName=\"pedidoPai\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataPedido\">Data Pedido</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataPedido\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataPedido\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"pedidoRemessa\">Pedido Remessa</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"pedidoRemessa\"\r\n          type=\"text\"\r\n          formControlName=\"pedidoRemessa\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"previsaoEntrega\">Previsão Entrega</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"previsaoEntrega\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"previsaoEntrega\"\r\n        >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"fornecedor\">Fornecedor</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"fornecedor\"\r\n          type=\"text\"\r\n          formControlName=\"fornecedor\"\r\n        >\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<tabset *ngIf=\"loadingDetalhesModal\">\r\n  <tab heading=\"Geral\" *ngIf=\"this.enableTabAbastInterno && this.enableTabAbastFornecedor\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('NM_EMPR_DEST')\"\r\n              class=\"hover text-center sticky\"\r\n              style=\"background-color: #fff; left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              Empresa\r\n              <span *ngIf=\"keyC == 'NM_EMPR_DEST'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'NM_EMPR_DEST'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('NM_DEPO_DEST')\"\r\n              class=\"hover text-center sticky\"\r\n              style=\"background-color: #fff; left: 190px;\"\r\n            >\r\n              Depósito\r\n              <span *ngIf=\"keyC == 'NM_DEPO_DEST'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'NM_DEPO_DEST'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Pedido\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('DT_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Data pedido\r\n              <span *ngIf=\"keyC == 'DT_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'DT_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('DT_PREV_ENTR')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Previsão entrega\r\n              <span *ngIf=\"keyC == 'DT_PREV_ENTR'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'DT_PREV_ENTR'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('NM_FORN')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Fornecedor\r\n              <span *ngIf=\"keyC == 'NM_FORN'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'NM_FORN'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('TT_ITEM_PEDI_SOLI_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume demanda (TON)\r\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SOLI_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SOLI_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('TT_ITEM_PEDI_RECE_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume recebido (TON)\r\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_RECE_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_RECE_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('TT_ITEM_PEDI_SALD_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume saldo (TON)\r\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SALD_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SALD_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('TT_ITEM_PEDI_SOLI')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume demanda\r\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SOLI'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SOLI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('TT_ITEM_PEDI_RECE')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume recebido\r\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_RECE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_RECE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortC('TT_ITEM_PEDI_SALD')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume saldo\r\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SALD'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SALD'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosCarteiraDetalhesAbastGeral | orderBy: keyC:reverseC | slice: beginC:endC;\">\r\n            <td \r\n              nowrap\r\n              class=\"sticky\"\r\n              style=\"left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              {{item.NM_EMPR_DEST}}\r\n            </td>\r\n            <td \r\n              nowrap \r\n              class=\"sticky\" \r\n              style=\"left: 190px;\"\r\n            >\r\n              {{item.NM_DEPO_DEST}}\r\n            </td>\r\n            <td nowrap>{{item.NR_PEDI_ORIG | number: '0.0' }}</td>\r\n            <td nowrap>{{item.DT_PEDI_ORIG | date: 'dd/MM/yyyy' }}</td>\r\n            <td nowrap>{{item.DT_PREV_ENTR | date: 'dd/MM/yyyy' }}</td>\r\n            <td nowrap>{{item.NM_FORN}}</td>\r\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{item.TT_ITEM_PEDI_SOLI_TONE | number: '0.3' }}</td>\r\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{item.TT_ITEM_PEDI_RECE_TONE | number: '0.3' }}</td>\r\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{item.TT_ITEM_PEDI_SALD_TONE | number: '0.3' }}</td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI | number: '0.0') : (item.TT_ITEM_PEDI_SOLI | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE | number: '0.0') : (item.TT_ITEM_PEDI_RECE | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD | number: '0.0') : (item.TT_ITEM_PEDI_SALD | number: '0.3')}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td \r\n              nowrap\r\n              style=\"left: 0px;\"\r\n              width=\"190px\" class=\"bg-dark text-white sticky\">\r\n              TOTAL\r\n            </td>\r\n            <td \r\n              nowrap \r\n              style=\"left: 190px;\" \r\n              class=\"bg-dark text-white text-center sticky\">\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SOLI_TONE | number: '0.' }}</td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_RECE_TONE | number: '0.' }}</td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SALD_TONE | number: '0.' }}</td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SOLI | number: '0.0') : (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SOLI | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_RECE | number: '0.0') : (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_RECE | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SALD | number: '0.0') : (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SALD | number: '0.3')}}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div\r\n      class=\"mt-2 mb-2\"\r\n      *ngIf=\"dadosCarteiraDetalhesAbastGeral?.length > itemsPerPage\"\r\n    >\r\n      Exibindo {{ beginC + 1 }} a {{ endC }} de\r\n      {{ dadosCarteiraDetalhesAbastGeral?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"dadosCarteiraDetalhesAbastGeral?.length\"\r\n          (pageChanged)=\"onPageChangedC($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageC\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n  <tab heading=\"Abastecimento Interno\" *ngIf=\"enableTabAbastInterno\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NM_EMPR_DEST')\"\r\n              class=\"hover text-center sticky\"\r\n              style=\"background-color: #fff; left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              Empresa\r\n              <span *ngIf=\"keyA == 'NM_EMPR_DEST'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NM_EMPR_DEST'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NM_DEPO_DEST')\"\r\n              class=\"hover text-center sticky\"\r\n              style=\"background-color: #fff; left: 190px;\"\r\n            >\r\n              Depósito\r\n              <span *ngIf=\"keyA == 'NM_DEPO_DEST'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NM_DEPO_DEST'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Pedido PAI\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('DT_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Data pedido\r\n              <span *ngIf=\"keyA == 'DT_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'DT_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_REME')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Pedido remessa\r\n              <span *ngIf=\"keyA == 'NR_PEDI_REME'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_REME'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('DT_PREV_ENTR')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Previsão entrega\r\n              <span *ngIf=\"keyA == 'DT_PREV_ENTR'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'DT_PREV_ENTR'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NM_FORN')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Fornecedor\r\n              <span *ngIf=\"keyA == 'NM_FORN'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NM_FORN'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('TT_ITEM_PEDI_SOLI_DEPO_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume demanda (TON)\r\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SOLI_DEPO_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SOLI_DEPO_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('TT_ITEM_PEDI_RECE_DEPO_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume recebido (TON)\r\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_RECE_DEPO_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_RECE_DEPO_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('TT_ITEM_PEDI_SALD_DEPO_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume saldo (TON)\r\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SALD_DEPO_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SALD_DEPO_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('TT_ITEM_PEDI_SOLI_DEPO')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume demanda\r\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SOLI_DEPO'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SOLI_DEPO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('TT_ITEM_PEDI_RECE_DEPO')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume recebido\r\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_RECE_DEPO'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_RECE_DEPO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('TT_ITEM_PEDI_SALD_DEPO')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume saldo\r\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SALD_DEPO'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SALD_DEPO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"\r\n              let item of dadosCarteiraDetalhesAbastInterno\r\n                | orderBy: keyA:reverseA\r\n                | slice: beginA:endA;\r\n              let i = index\r\n            \"\r\n          >\r\n            <td\r\n              nowrap\r\n              class=\"sticky\"\r\n              style=\"left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              {{ item.NM_EMPR_DEST }}\r\n            </td>\r\n            <td nowrap class=\"sticky\" style=\"left: 190px;\">\r\n              {{ item.NM_DEPO_DEST }}\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.NR_PEDI_ORIG | number: '0.0' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.DT_PEDI_ORIG | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.NR_PEDI_REME | number: '0.0' }}\r\n            </td>\r\n            <td nowrap class=\"text-center\">\r\n              {{ item.DT_PREV_ENTR | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td nowrap>{{ item.NM_FORN }}</td>\r\n            <td nowrap class=\"text-right\"  *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SOLI_DEPO_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-right\"  *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_RECE_DEPO_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-right\"  *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SALD_DEPO_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.3')}}\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of dadosCarteiraDetalhesAbastTotal\">\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white sticky\"\r\n              style=\"left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              TOTAL\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center sticky\"\r\n              style=\"left: 190px;\"\r\n            ></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SOLI_DEPO_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_RECE_DEPO_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SALD_DEPO_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.3')}}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div\r\n      class=\"mt-2 mb-2\"\r\n      *ngIf=\"dadosCarteiraDetalhesAbastInterno?.length > itemsPerPage\"\r\n    >\r\n      Exibindo {{ beginA + 1 }} a {{ endA }} de\r\n      {{ dadosCarteiraDetalhesAbastInterno?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"dadosCarteiraDetalhesAbastInterno?.length\"\r\n          (pageChanged)=\"onPageChangedA($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageA\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n  <tab\r\n    heading=\"Abastecimento Fornecedor\"\r\n    *ngIf=\"enableTabAbastFornecedor\"\r\n  >\r\n    <div class=\"table-responsive mt-4\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('NM_EMPR_DEST')\"\r\n              class=\"hover text-center sticky\"\r\n              style=\"background-color: #fff; left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              Empresa\r\n              <span *ngIf=\"keyB == 'NM_EMPR_DEST'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'NM_EMPR_DEST'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('NM_DEPO_DEST')\"\r\n              class=\"hover text-center sticky\"\r\n              style=\"background-color: #fff; left: 190px;\"\r\n            >\r\n              Depósito\r\n              <span *ngIf=\"keyB == 'NM_DEPO_DEST'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'NM_DEPO_DEST'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Pedido\r\n              <span *ngIf=\"keyB == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('DT_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Data pedido\r\n              <span *ngIf=\"keyB == 'DT_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'DT_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('DT_PREV_ENTR')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Previsão entrega\r\n              <span *ngIf=\"keyB == 'DT_PREV_ENTR'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'DT_PREV_ENTR'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('NM_FORN')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Fornecedor\r\n              <span *ngIf=\"keyB == 'NM_FORN'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'NM_FORN'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('TT_ITEM_PEDI_SOLI_EMPR_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume demanda (TON)\r\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SOLI_EMPR_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SOLI_EMPR_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('TT_ITEM_PEDI_RECE_EMPR_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume recebido (TON)\r\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_RECE_EMPR_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_RECE_EMPR_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('TT_ITEM_PEDI_SALD_EMPR_TONE')\"\r\n              class=\"hover text-center\"\r\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n            >\r\n              Volume saldo (TON)\r\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SALD_EMPR_TONE'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SALD_EMPR_TONE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('TT_ITEM_PEDI_SOLI_EMPR')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume demanda\r\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SOLI_EMPR'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SOLI_EMPR'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('TT_ITEM_PEDI_RECE_EMPR')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume recebido\r\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_RECE_EMPR'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_RECE_EMPR'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortB('TT_ITEM_PEDI_SALD_EMPR')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume saldo\r\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SALD_EMPR'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SALD_EMPR'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"\r\n              let item of dadosCarteiraDetalhesAbastFornecedor\r\n                | orderBy: keyB:reverseB\r\n                | slice: beginB:endB;\r\n              let i = index\r\n            \"\r\n          >\r\n            <td\r\n              nowrap\r\n              class=\"sticky\"\r\n              style=\"left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              {{ item.NM_EMPR_DEST }}\r\n            </td>\r\n            <td nowrap class=\"sticky\" style=\"left: 190px;\">\r\n              {{ item.NM_DEPO_DEST }}\r\n            </td>\r\n            <td nowrap>{{ item.NR_PEDI_ORIG | number: '0.0' }}</td>\r\n            <td nowrap>\r\n              {{ item.DT_PEDI_ORIG | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td nowrap>\r\n              {{ item.DT_PREV_ENTR | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td nowrap>{{ item.NM_FORN }}</td>\r\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SOLI_EMPR_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_RECE_EMPR_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SALD_EMPR_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.3')}}\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of dadosCarteiraDetalhesAbastTotal\">\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white sticky\"\r\n              style=\"left: 0px;\"\r\n              width=\"190px\"\r\n            >\r\n              TOTAL\r\n            </td>\r\n            <td\r\n              nowrap\r\n              class=\"bg-dark text-white text-center sticky\"\r\n              style=\"left: 190px;\"\r\n            ></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SOLI_EMPR_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_RECE_EMPR_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n              {{ item.TT_ITEM_PEDI_SALD_EMPR_TONE | number: '0.3' }}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.3')}}\r\n            </td>\r\n            <td nowrap class=\"bg-dark text-white text-right\">\r\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.3')}}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div\r\n      class=\"mt-2 mb-2\"\r\n      *ngIf=\"\r\n        dadosCarteiraDetalhesAbastFornecedor?.length > itemsPerPage\r\n      \"\r\n    >\r\n      Exibindo {{ beginB + 1 }} a {{ endB }} de\r\n      {{ dadosCarteiraDetalhesAbastFornecedor?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"dadosCarteiraDetalhesAbastFornecedor?.length\"\r\n          (pageChanged)=\"onPageChangedB($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageB\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n</tabset>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n  style=\"height: 80%;\"\r\n  >\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "GRp8":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasComponent", function() { return AbastecimentoMonitoresAnaliseComprasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analise_compras_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analise-compras.component.html */ "BKQW");
/* harmony import */ var _analise_compras_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analise-compras.component.scss */ "o4Lb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./analise-compras.service */ "yPm9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










//Converte rota em base64




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);


let AbastecimentoMonitoresAnaliseComprasComponent = class AbastecimentoMonitoresAnaliseComprasComponent {
    /* dados do usuário */
    constructor(activatedRoute, router, formBuilder, localeService, pnotifyService, atividadesService, routerService, titleService, dateService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.dateService = dateService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loading = false;
        this.loadingDetalhesModal = false;
        this.noResult = false;
        this.ativarCampoData = false;
        this.compararDataFinal = false;
        this.compararDataInicial = false;
        this.compararDataFinalAtual = false;
        /* Exibir Colunas */
        this.depositoBool = false;
        this.linhaBool = false;
        this.subLinhaBool = false;
        this.classeBool = false;
        this.uniMedidaBool = false;
        this.bitolaBool = false;
        this.larguraBool = false;
        this.comprimentoBool = false;
        this.qualidadeBool = false;
        this.revestimentoBool = false;
        this.tipoAcoBool = false;
        this.estAtualBool = false;
        this.estComprBool = false;
        this.estSuspBool = false;
        this.colsCarteira = false;
        this.colsVendasReal = false;
        this.colsVendasPerd = false;
        this.colsEstoque = false;
        /* Exibir Colunas */
        /* Modais */
        this.nivelEstBool = false;
        this.carteiraBool = false;
        this.vendasRealBool = false;
        this.vendasPerdBool = false;
        this.estoqueCompBool = false;
        this.estoqueSuspBool = false;
        this.loadingDetalhesNivelEstoque = false;
        this.breadCrumbTree = [];
        this.depositos = [];
        this.linhas = [];
        this.subLinhas = [];
        this.classes = [];
        this.dados = [];
        this.dadosFull = [];
        this.dadosTotalizadores = [];
        this.dadosExcel = [];
        this.dadosCarteiraDetalhe = [];
        this.dadosVendasRealDetalhe = [];
        this.dadosDetalhesNivelEstoqueModal = [];
        this.dadosVendasPerdDetalhe = [];
        this.colsInfAdicionais = [];
        this.depositosAssociados = [];
        this.tiposMateriais = [];
        this.tiposNiveisEstoques = [];
        this.materiais = [];
        this.itemEstoqueSupenso = [];
        this.itemEstoqueComprometido = [];
        this.itemVendasPerdidas = [];
        this.itemVendasRealizadas = [];
        this.itemCarteira = [];
        this.itemNivelEstoque = [];
        this.colsMat = 0;
        this.colsEst = 1;
        this.colsCar = 1;
        this.colsVenRea = 2;
        this.colsVenPed = 2;
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_MATE';
        /* Ordenação */
        /* Pagination */
        this.itemsPerPageParam = 15;
        this.totalItems = 10;
        this.currentPage = 1;
        this.numberOfItems = [15, 25, 50];
        /* Pagination */
        this.arrayDepositos = [];
        this.periodosBusca = [
            // { id: 1, nome: 'Padrão' },
            { id: 2, nome: 'Customizado' }
        ];
        this.situacoes = [
            { id: 1, nome: 'Ativo' },
            { id: 0, nome: 'Inativo' }
        ];
        this.infAdicionaisDados = [];
        this.tiposVisualizacao = [
            { id: 'S', nome: 'Sintética por material' },
            { id: 'A', nome: 'Analítica por depósito' }
        ];
        this.modal = [];
        this.tableConfig = {
            subtitleBorder: true
        };
        this.subtitles = [
            {
                text: 'Acima do máximo',
                color: 'blue'
            },
            {
                text: 'Máximo',
                color: 'green'
            },
            {
                text: 'Médio',
                color: 'yellow'
            },
            {
                text: 'Mínimo',
                color: 'red'
            },
            {
                text: 'Sem cadastro',
                color: 'gray'
            }
        ];
        /* dados do usuário */
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            empresas: [null],
            depositos: [null],
            dataInicial: [null],
            dataFinal: [null],
            nivelEstoque: [null],
            tipoMaterial: [null],
            linha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subLinha: [null],
            classe: [null],
            material: [null],
            paramData: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tipoVisualizacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            infAdicionais: [null],
            situacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qtItensPagina: [this.itemsPerPageParam],
            pagina: [this.currentPage],
            orderBy: [null],
            orderType: [null]
        });
    }
    ngOnInit() {
        this.setValueParamData();
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.titleService.setTitle('Análise de Compras');
        this.checkRouterParams();
        this.getTiposMateriais();
        this.getTiposNiveisEstoque();
        this.getInfAdicionais();
        this.getLinhas();
    }
    setValueParamData() {
        this.form.get('paramData').setValue(2);
        this.form.get('situacao').setValue(1);
        this.form.get('tipoVisualizacao').setValue("S");
        this.enabledDate();
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
                    descricao: 'Monitores',
                    routerLink: `/abastecimento/monitores/${params['idSubModulo']}`
                },
                {
                    descricao: 'Análise de Compras'
                }
            ];
        });
    }
    getLinhas() {
        this.loaderNavbar = true;
        this.linhas = [];
        let campos = ['classe', 'subLinha', 'material', 'empresas', 'depositos'];
        this.setFormDisable(campos);
        let idSituacao = 1;
        this.service
            .getLinhas(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
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
        let campos = ['subLinha', 'classe', 'material', 'empresas', 'depositos'];
        this.setFormReset(campos);
        this.setFormDisable(campos);
        this.subLinhas = [];
        if (this.form.get('linha').status === 'VALID') {
            let descricaoLinhas = this.form.get('linha').value;
            let idSituacao = 1;
            this.service
                .getSubLinhas(descricaoLinhas, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.setFormEnable(['subLinha']);
                        }
                        else if (res['body']['responseCode'] === 404) {
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
            this.setFormDisable(['subLinha']);
        }
    }
    getClasses() {
        this.classes = [];
        this.loaderNavbar = true;
        let campos = ['classe'];
        this.setFormReset(campos);
        if (this.form.value['linha'] != null &&
            this.form.value['linha'].length > 0) {
            let descricaoLinhas = this.form.get('linha').value;
            let idSubLinha = this.form.get('subLinha').value;
            let idSituacao = 1;
            this.service
                .getClasses(descricaoLinhas, idSubLinha, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.classes = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(campos);
        }
    }
    getMateriais() {
        this.materiais = [];
        this.loaderNavbar = true;
        let campos = ['material'];
        this.setFormReset(campos);
        let idClasses = this.form.get('classe').value;
        let idTipoMaterial = this.form.get('tipoMaterial').value;
        let idSituacao = this.form.get('situacao').value;
        if (this.form.value['classe'] != null &&
            this.form.value['classe'].length > 0) {
            this.service
                .getMateriais(idClasses, idTipoMaterial, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body'].responseCode === 200) {
                        this.materiais = res['body'].result;
                        this.setFormEnable(campos);
                    }
                    else if (res['body']['responseCode'] === 204 ||
                        res['body']['responseCode'] === 404) {
                        this.materiais = [];
                        this.setFormDisable(campos);
                        this.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.loaderNavbar = false;
            }, error => {
                this.pnotifyService.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(campos);
        }
    }
    getDepositosAssociados() {
        this.loaderNavbar = true;
        this.depositosAssociados = [];
        let campos = ['empresas', 'depositos'];
        this.setFormReset(campos);
        this.setFormDisable(campos);
        let idLinhas = this.form.get('linha').value;
        let idClasses = this.form.get('classe').value;
        let idTipoMaterial = this.form.get('tipoMaterial').value;
        let idSituacao = 1;
        if ((this.form.value['classe'] != null &&
            this.form.value['classe'].length > 0) ||
            (this.form.value['linha'] != null && this.form.value['linha'].length > 0)) {
            this.service
                .getDepositosAssociados(idLinhas, idClasses, idTipoMaterial, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body']['responseCode'] === 200) {
                        this.depositosAssociados = res['body']['result'];
                        this.setFormEnable(['empresas']);
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.pnotifyService.notice('Não há empresa vinculada');
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Empresas associadas');
            });
        }
        else {
            this.loaderNavbar = false;
        }
    }
    getDepositos(param) {
        this.loaderNavbar = true;
        this.depositos = [];
        let campos = ['depositos'];
        this.setFormReset(campos);
        this.setFormDisable(campos);
        if (Object.keys(this.form.get('empresas').value).length > 0) {
            let idsEmpresa = this.form.get('empresas').value;
            let idSituacao = 1;
            this.service
                .getDepositos(idsEmpresa, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res['body']['responseCode'] === 200) {
                        this.depositos = res['body']['result'];
                        this.getArrayDepositos(param);
                        this.setFormEnable(campos);
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.setFormDisable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Depositos');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(campos);
        }
    }
    /* Função para filtrar os depositos que possue vinculo com as classes */
    getArrayDepositos(event) {
        let depositosFiltrados = [];
        this.depositos.forEach(deposito => {
            event.forEach(element => {
                element['DEPO'].forEach(d => {
                    if (d['ID_DEPO'] == deposito['ID'])
                        depositosFiltrados.push(deposito);
                });
            });
        });
        this.depositos = depositosFiltrados;
    }
    /* Função para filtrar os depositos que possue vinculo com as classes */
    getInfAdicionais() {
        this.loaderNavbar = true;
        this.service
            .getInfAdicionais()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.infAdicionaisDados = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Informações adicionais');
        });
    }
    getTiposNiveisEstoque() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.tiposNiveisEstoques = [];
        this.service
            .getTiposNiveisEstoque(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.tiposNiveisEstoques = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Tipos de Niveis de Estoque');
        });
    }
    getTiposMateriais() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.tiposMateriais = [];
        this.service
            .getTiposMateriais(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.tiposMateriais = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Tipos de Materiais');
        });
    }
    getAnaliseCompras(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.dados = [];
        this.dadosTotalizadores = [];
        this.colsInfAdicionais = [];
        /* função para resetar colunas adicionais */
        this.resetColsInfAdicionais();
        this.service
            .getAnaliseCompras(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    /* função para habilitar as colunas adicionais */
                    this.colsInfAdicionais = Object.keys(res['body']['result'][0]);
                    this.setColsInfAdicionaisTrue();
                    /* função para habilitar as colunas adicionais */
                    this.setColsMesAno();
                    this.totalItems = res['body']['result'][1]['TT_REGI'];
                    this.dadosFull = res['body']['result'];
                    this.dadosTotalizadores = this.dadosFull.shift();
                    this.dados = this.dadosFull;
                    this.noResult = false;
                    this.loading = true;
                }
                else if (res['body']['responseCode'] === 204 ||
                    res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.loading = false;
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            }
        }, error => {
            this.noResult = true;
            this.loading = false;
            this.pnotifyService.error('Erro ao carregar dados');
        });
    }
    getAnaliseComprasExcel(params) {
        this.loaderNavbar = true;
        this.dadosExcel = [];
        this.service
            .getAnaliseCompras(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosExcel = res['body']['result'];
                    this.pnotifyService.success(this.dadosExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar para excel dados');
        });
    }
    setColsMesAno() {
        this.colsCar = 1;
        this.colsVenRea = 2;
        this.colsVenPed = 2;
        this.dadosCarteiraDetalhe = [];
        this.dadosVendasRealDetalhe = [];
        this.dadosVendasPerdDetalhe = [];
        let colunasCarteira = this.colsInfAdicionais;
        colunasCarteira.forEach(e => {
            if (e.match(/^CART_ABER_/)) {
                this.colsCar = this.colsCar + 1;
                this.dadosCarteiraDetalhe.push({
                    id: e.substring(10),
                    row: e,
                    header: e.substring(10).replace(/_/g, '/')
                });
            }
            ;
            if (e.match(/^VEND_REAL_/)) {
                this.colsVenRea = this.colsVenRea + 1;
                this.dadosVendasRealDetalhe.push({
                    id: e.substring(10),
                    row: e,
                    header: e.substring(10).replace(/_/g, '/')
                });
            }
            ;
            if (e.match(/^VEND_PERD_/)) {
                this.colsVenPed = this.colsVenPed + 1;
                this.dadosVendasPerdDetalhe.push({
                    id: e.substring(10),
                    row: e,
                    header: e.substring(10).replace(/_/g, '/')
                });
            }
            ;
        });
    }
    setColsCarteiraTrue() {
        this.colsCarteira = !this.colsCarteira;
    }
    setColsVendasRealTrue() {
        this.colsVendasReal = !this.colsVendasReal;
    }
    setColsVendasPerdTrue() {
        this.colsVendasPerd = !this.colsVendasPerd;
    }
    setColsEstoqueTrue() {
        this.colsEstoque = !this.colsEstoque;
    }
    /* Seta como true as colunas que serão exibidas na tabela */
    setColsInfAdicionaisTrue() {
        this.colsMat = 0;
        this.colsEst = 1;
        this.colsInfAdicionais.forEach(element => {
            if (element == 'NM_DEPO') {
                this.depositoBool = true;
            }
            if (element == 'NM_LINH') {
                this.linhaBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'NM_SUB_LINH') {
                this.subLinhaBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'NM_CLAS') {
                this.classeBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'NM_APOI_UNID_MEDI') {
                this.uniMedidaBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'VL_MEDI') {
                this.bitolaBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'VL_LARG') {
                this.larguraBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'VL_COMP') {
                this.comprimentoBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'DS_QUAL') {
                this.qualidadeBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'DS_REVE') {
                this.revestimentoBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'DS_TIPO_ACO') {
                this.tipoAcoBool = true;
                this.colsMat = this.colsMat + 1;
            }
            if (element == 'TT_ESTO_ATUA') {
                this.estAtualBool = true;
                this.colsEst = this.colsEst + 1;
            }
            if (element == 'TT_ESTO_COMP') {
                this.estComprBool = true;
                this.colsEst = this.colsEst + 1;
            }
            if (element == 'TT_ESTO_SUSP') {
                this.estSuspBool = true;
                this.colsEst = this.colsEst + 1;
            }
        });
    }
    /* Seta como true as colunas que serão exibidas na tabela */
    /* Resetas as colunas que serão exibidas */
    resetColsInfAdicionais() {
        this.depositoBool = false;
        this.linhaBool = false;
        this.subLinhaBool = false;
        this.classeBool = false;
        this.uniMedidaBool = false;
        this.bitolaBool = false;
        this.larguraBool = false;
        this.comprimentoBool = false;
        this.qualidadeBool = false;
        this.revestimentoBool = false;
        this.tipoAcoBool = false;
        this.estAtualBool = false;
        this.estComprBool = false;
        this.estSuspBool = false;
    }
    /* Resetas as colunas que serão exibidas */
    setFormDisable(selects) {
        selects.forEach(element => {
            return this.form.get(element).disable();
        });
    }
    setFormEnable(selects) {
        selects.forEach(element => {
            return this.form.get(element).enable();
        });
    }
    setFormReset(selects) {
        selects.forEach(element => {
            return this.form.get(element).reset();
        });
    }
    checkRouterParams() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                //busca de dados
                this.getAnaliseCompras(_response);
                this.setFormValues(_response);
            }
        });
        this.$activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        let empresas = queryParams['empresas'] ? queryParams['empresas'] : null;
        let depositos = queryParams['depositos'] ? queryParams['depositos'] : null;
        let nivelEstoque = queryParams['nivelEstoque']
            ? queryParams['nivelEstoque']
            : null;
        let tipoMaterial = queryParams['tipoMaterial']
            ? queryParams['tipoMaterial']
            : null;
        let situacao = queryParams['situacao'];
        let linha = queryParams['linha'] ? queryParams['linha'] : null;
        let subLinha = queryParams['subLinha'] ? queryParams['subLinha'] : null;
        let classe = queryParams['classe'] ? queryParams['classe'] : [];
        let material = queryParams['material'] ? queryParams['material'] : null;
        let paramData = queryParams['paramData'] ? queryParams['paramData'] : null;
        let dataInicial = queryParams['dataInicial']
            ? queryParams['dataInicial']
            : null;
        let dataFinal = queryParams['dataFinal'] ? queryParams['dataFinal'] : null;
        let tipoVisualizacao = queryParams['tipoVisualizacao']
            ? queryParams['tipoVisualizacao']
            : null;
        let infAdicionais = queryParams['infAdicionais']
            ? queryParams['infAdicionais']
            : null;
        //let pagina = queryParams['pagina'];
        let orderBy = queryParams['orderBy'];
        let orderType = queryParams['orderType'];
        if (paramData == 2) {
            this.setFormEnable(['dataInicial', 'dataFinal']);
        }
        this.currentPage = queryParams['pagina'];
        this.itemsPerPageParam = queryParams['qtItensPagina'];
        this.key = orderBy;
        if (orderType === "ASC") {
            this.reverse = false;
        }
        else if (orderType === "DESC") {
            this.reverse = true;
        }
        //consulta para recarregamento dos dados no form
        this.getDadosForm({ empresas, linha, classe, tipoMaterial, situacao });
        this.form.patchValue({
            empresas: empresas,
            depositos: depositos,
            nivelEstoque: nivelEstoque,
            tipoMaterial: tipoMaterial,
            situacao: situacao,
            linha: linha,
            subLinha: subLinha,
            classe: classe,
            material: material,
            paramData: paramData,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            tipoVisualizacao: tipoVisualizacao,
            infAdicionais: infAdicionais,
            qtItensPagina: this.itemsPerPageParam,
            pagina: this.currentPage,
            orderBy: orderBy,
            orderType: orderType
        });
    }
    /* Consulta para recarregamento de dados nos selects dos form */
    getDadosForm(params) {
        /* Alimenta select Sublinha */
        if (params['linha'] !== null) {
            let campos = ['subLinha'];
            this.service
                .getSubLinhas(params['linha'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.setFormEnable(campos);
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.setFormDisable(campos);
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Sublinhas');
            });
        }
        else {
            this.setFormDisable(['subLinha']);
        }
        /* Alimenta select Classes */
        if (params['linha'] !== null) {
            let campos = ['classe'];
            this.service
                .getClasses(params['linha'], params['subLinha'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.classes = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        /* Alimenta select Materiais */
        if (Object.keys(params['classe']).length > 0) {
            let campos = ['material'];
            this.service
                .getMateriais(params['classe'], params['tipoMaterial'], params['situacao'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body'].responseCode === 200) {
                        this.materiais = res['body'].result;
                        this.setFormEnable(campos);
                    }
                    else if (res['body']['responseCode'] === 204 ||
                        res['body']['responseCode'] === 404) {
                        this.setFormDisable(campos);
                        this.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.loaderNavbar = false;
            }, error => {
                this.pnotifyService.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.loaderNavbar = false;
            this.setFormDisable(['material']);
        }
        /* Alimenta o select de empresas */
        if (Object.keys(params['linha']).length > 0) {
            let campos = ['empresas'];
            this.service
                .getDepositosAssociados(params['linha'], params['classe'], params['tipoMaterial'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.depositosAssociados = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Depositos associados');
            });
        }
        /* Alimenta select depositos */
        if (params['empresas'] !== null) {
            let campos = ['depositos'];
            this.service
                .getDepositos(params['empresas'], 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        this.depositos = res['body']['result'];
                        this.setFormEnable(campos);
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Depositos');
            });
        }
        else {
            this.setFormEnable(['depositos']);
        }
    }
    resetForm() {
        let camposReset = [
            'linha',
            'subLinha',
            'classe',
            'material',
            'empresas',
            'depositos'
        ];
        let camposDisable = [
            'subLinha',
            'classe',
            'material',
            'empresas',
            'depositos'
        ];
        this.setFormReset(camposReset);
        this.setFormDisable(camposDisable);
    }
    onFilter(pagina) {
        let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        this.itemsPerPageParam = this.form.value['qtItensPagina'];
        this.key = this.form.value['orderBy'];
        this.setRouterParams({
            empresas: this.form.value['empresas'],
            depositos: this.form.value['depositos'],
            nivelEstoque: this.form.value['nivelEstoque'],
            tipoMaterial: this.form.value['tipoMaterial'],
            situacao: this.form.value['situacao'],
            linha: this.form.value['linha'],
            subLinha: this.form.value['subLinha'],
            classe: this.form.value['classe'],
            material: this.form.value['material'],
            paramData: this.form.value['paramData'],
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            tipoVisualizacao: this.form.value['tipoVisualizacao'],
            infAdicionais: this.form.value['infAdicionais'],
            qtItensPagina: this.form.value['qtItensPagina'],
            pagina: pagina,
            orderBy: this.form.value['orderBy'],
            orderType: this.form.value['orderType']
        });
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(params)
        });
        this.getAnaliseCompras(params);
    }
    /* Modals */
    getNivelEstoqueModal(item) {
        this.itemNivelEstoque = item;
        this.modal.title = "NÍVEL DE ESTOQUE";
        this.loadingDetalhesModal = true;
        this.nivelEstBool = true;
    }
    getCarteiraModal(item, idMesAno) {
        this.itemCarteira = item;
        this.idMesAnoCarteira = idMesAno;
        this.modal.title = "CARTEIRA";
        this.carteiraBool = true;
        this.loadingDetalhesModal = true;
    }
    getVendasRealModal(item, idMesAno) {
        this.itemVendasRealizadas = item;
        this.idMesAnoVendasRealizadas = idMesAno;
        this.modal.title = "VENDAS REALIZADAS";
        this.loadingDetalhesModal = true;
        this.vendasRealBool = true;
    }
    getVendasPerdModal(item, idMesAno) {
        this.vendasPerdBool = true;
        this.loadingDetalhesModal = true;
        this.modal.title = "VENDAS PERDIDAS";
        this.itemVendasPerdidas = item;
        this.idMesAnoVendasPerdidas = idMesAno;
    }
    getEstoqueSupensoModal(item) {
        this.loadingDetalhesModal = true;
        this.estoqueSuspBool = true;
        this.modal.title = "ESTOQUE SUSPENSO";
        this.itemEstoqueSupenso = item;
    }
    getEstoqueComprometidoModal(item) {
        this.loadingDetalhesModal = true;
        this.estoqueCompBool = true;
        this.modal.title = "ESTOQUE COMPROMETIDO";
        this.itemEstoqueComprometido = item;
    }
    closeModal() {
        this.vendasPerdBool = false;
        this.vendasRealBool = false;
        this.carteiraBool = false;
        this.nivelEstBool = false;
        this.estoqueSuspBool = false;
        this.estoqueCompBool = false;
    }
    /* Modals */
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
    activeInputDate() {
        if (this.form.value['paramData'] == 2) {
            this.enabledDate();
        }
        else if (this.form.value['paramData'] == 1) {
            this.disabledDate();
        }
    }
    disabledDate() {
        let campoData = ['dataInicial', 'dataFinal'];
        this.setFormReset(campoData);
        this.setFormDisable(campoData);
    }
    enabledDate() {
        let campoData = ['dataInicial', 'dataFinal'];
        let today = new Date;
        this.setFormReset(campoData);
        this.setFormEnable(campoData);
        this.form.get('dataInicial').setValue(this.getLastThreeMonthsDay());
        this.form.get('dataFinal').setValue(today);
    }
    getLastThreeMonthsDay() {
        let date = new Date();
        date.setMonth(date.getMonth() - 3);
        return date;
    }
    setDateValid(date) {
        if (date instanceof Date) {
            date = this.dateService.convertToUrlDate(date);
        }
        return date;
    }
    comparaData() {
        let stra = this.form.get('dataInicial').value;
        let strb = this.form.get('dataFinal').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
            ;
        }
        if (!dataInicial) {
            this.compararDataFinal = false;
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compararDataFinal = true;
            return this.compararDataFinal;
        }
    }
    comparaDataFinal() {
        let now = new Date();
        if (!this.form.get('dataFinal').value) {
            this.compararDataFinalAtual = false;
            return false;
        }
        else if (this.form.get('dataFinal').value > now) {
            this.compararDataFinalAtual = true;
            return this.compararDataFinalAtual;
        }
    }
    comparaDataInicial() {
        let now = new Date();
        if (!this.form.get('dataInicial').value) {
            this.compararDataInicial = false;
            return false;
        }
        else if (this.form.get('dataInicial').value > now) {
            this.compararDataInicial = true;
            return this.compararDataInicial;
        }
    }
    excelExport() {
        let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        let queryParams = {
            empresas: this.form.value['empresas'],
            depositos: this.form.value['depositos'],
            nivelEstoque: this.form.value['nivelEstoque'],
            tipoMaterial: this.form.value['tipoMaterial'],
            situacao: this.form.value['situacao'],
            linha: this.form.value['linha'],
            subLinha: this.form.value['subLinha'],
            classe: this.form.value['classe'],
            material: this.form.value['material'],
            paramData: this.form.value['paramData'],
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            tipoVisualizacao: this.form.value['tipoVisualizacao'],
            infAdicionais: this.form.value['infAdicionais'],
            qtItensPagina: "",
            pagina: "",
            idUsuario: this.idUsuario,
            relatorioExcel: 1
        };
        this.getAnaliseComprasExcel(queryParams);
    }
    setColorBorder(i) {
        let border;
        if (i == 'RED') {
            border = 'border-danger';
        }
        if (i == 'YELLOW') {
            border = 'border-warning';
        }
        if (i == 'GREEN') {
            border = 'border-success';
        }
        if (i == 'BLUE') {
            border = 'border-primary';
        }
        if (i == 'GREY') {
            border = 'border-secondary';
        }
        return border;
    }
    /* Ordenação via API*/
    sort(key) {
        if (this.key != key) {
            this.reverse = true;
        }
        else if (this.key == key) {
            this.reverse = !this.reverse;
        }
        this.key = key;
        if (this.reverse == false) {
            this.form.get('orderType').setValue("ASC");
        }
        else if (this.reverse == true) {
            this.form.get('orderType').setValue("DESC");
        }
        this.form.get('orderBy').setValue(this.key);
        this.onFilter(this.currentPage);
    }
    /* Ordenação via API*/
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        if (this.currentPage != event.page) {
            this.currentPage = event.page;
            this.onFilter(this.currentPage);
        }
    }
};
AbastecimentoMonitoresAnaliseComprasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseComprasService"] }
];
AbastecimentoMonitoresAnaliseComprasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'analise-compras',
        template: _raw_loader_analise_compras_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analise_compras_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseComprasService"]])
], AbastecimentoMonitoresAnaliseComprasComponent);



/***/ }),

/***/ "Jf9T":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-suspenso/modal-estoque-suspenso.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2 mt-2\" id=\"header-modal-estoque-suspenso\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CÓD. MATERIAL: </strong>\r\n      {{ modal.codMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> DESCRIÇÃO: </strong>\r\n      {{ modal.descMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-3 text-right\">\r\n    <button type=\"button\" (click)=\"onFilter()\" class=\"btn mr-2\">\r\n      Filtrar\r\n    </button>\r\n    <button type=\"button\" (click)=\"excelExport()\" class=\"btn\">\r\n      Exportar Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"empresas\">Empresas</label>\r\n        <input class=\"form-control\" id=\"empresas\" type=\"text\" formControlName=\"empresas\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"depositos\">Depósito</label>\r\n        <input class=\"form-control\" id=\"depositos\" type=\"text\" formControlName=\"depositos\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataEntrada\">Data entrada/lançamento</label>\r\n        <input class=\"form-control\" id=\"dataEntrada\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataEntrada\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"notaFiscal\">Nota Fiscal</label>\r\n        <input class=\"form-control\" id=\"notaFiscal\" type=\"text\" formControlName=\"notaFiscal\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"motivo\">Motivo</label>\r\n        <input class=\"form-control\" id=\"motivo\" type=\"text\" formControlName=\"motivo\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<tabset *ngIf=\"(!estoqueSupensoEntradaMaterialEmpty || !estoqueSupensoGeralEmpty)  && !loaderBody\">\r\n  <tab heading=\"Inventário\" *ngIf=\"!estoqueSupensoGeralEmpty\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap (click)=\"sortA('NM_EMPR')\" class=\"hover text-center\">\r\n              Empresa\r\n              <span *ngIf=\"keyA == 'NM_EMPR'\"><i [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyA != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortA('NM_DEPO')\" class=\"hover text-center\">\r\n              Depósito\r\n              <span *ngIf=\"keyA == 'NM_DEPO'\"><i [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyA != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <!-- <th nowrap (click)=\"sortA('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Data Lançamento\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th> -->\r\n            <th nowrap (click)=\"sortA('DS_MOTI')\" class=\"hover text-center\">\r\n              Motivo\r\n              <span *ngIf=\"keyA == 'DS_MOTI'\"><i [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyA != 'DS_MOTI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortA('TT_ITEM')\" class=\"hover text-center\">\r\n              Volume\r\n              <span *ngIf=\"keyA == 'TT_ITEM'\"><i [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyA != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosEstoqueSuspensoInventario | orderBy: keyA:reverseA | slice: beginA:endA;\">\r\n            <td nowrap class=\"text-center\">{{item.NM_EMPR}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NM_DEPO}}</td>\r\n<!--             <td nowrap class=\"text-center\">sem data lançamento</td> -->\r\n            <td nowrap class=\"text-center\">{{item.DS_MOTI}}</td>\r\n            <td nowrap class=\"text-center\">{{item.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <!-- <td nowrap class=\"text-center text-white bg-dark\"></td> -->\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\">{{dadosEstoqueSuspensoInventarioTotal.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-2 mb-2\" *ngIf=\"dadosEstoqueSuspensoInventario?.length > itemsPerPage\">\r\n      Exibindo {{ beginA + 1 }} a {{ endA }} de\r\n      {{ dadosEstoqueSuspensoInventario?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueSuspensoInventario?.length\"\r\n          (pageChanged)=\"onPageChangedA($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageA\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n  <tab heading=\"Entrada de materias\" *ngIf=\"!estoqueSupensoEntradaMaterialEmpty\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap (click)=\"sortB('NM_EMPR')\" class=\"hover text-center\">\r\n              Empresa\r\n              <span *ngIf=\"keyB == 'NM_EMPR'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NM_DEPO')\" class=\"hover text-center\">\r\n              Depósito\r\n              <span *ngIf=\"keyB == 'NM_DEPO'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NR_RELA')\" class=\"hover text-center\">\r\n              Relatório\r\n              <span *ngIf=\"keyB == 'NR_RELA'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NR_RELA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('DT_ENTR')\" class=\"hover text-center\">\r\n              Data Entrada\r\n              <span *ngIf=\"keyB == 'DT_ENTR'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'DT_ENTR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NR_NOTA_FISC')\" class=\"hover text-center\">\r\n              Nota Fiscal\r\n              <span *ngIf=\"keyB == 'NR_NOTA_FISC'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NR_NOTA_FISC'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NM_FORN')\" class=\"hover text-center\">\r\n              Fornecedor\r\n              <span *ngIf=\"keyB == 'NM_FORN'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_FORN'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NR_LOTE')\" class=\"hover text-center\">\r\n              Lote\r\n              <span *ngIf=\"keyB == 'NR_LOTE'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NR_LOTE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('TT_ITEM')\" class=\"hover text-center\">\r\n              Volume\r\n              <span *ngIf=\"keyB == 'TT_ITEM'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosEstoqueSuspensoEntradaMaterial | orderBy: keyB:reverseB | slice: beginB:endB;\">\r\n            <td nowrap class=\"text-center\">{{item.NM_EMPR}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NM_DEPO}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NR_RELA | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.DT_ENTR | date: 'dd/MM/yyyy'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NR_NOTA_FISC | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NM_FORN}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NR_LOTE | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\">{{dadosEstoqueSuspensoEntradaMaterialTotal.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-2 mb-2\" *ngIf=\"\r\n        dadosEstoqueSuspensoEntradaMaterial?.length > itemsPerPage\r\n      \">\r\n      Exibindo {{ beginB + 1 }} a {{ endB }} de\r\n      {{ dadosEstoqueSuspensoEntradaMaterial?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueSuspensoEntradaMaterial?.length\"\r\n          (pageChanged)=\"onPageChangedB($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageB\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n  <!-- <tab heading=\"Inventário\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Empresa\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Depósito\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Relatório\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Data lançamento\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Usuário\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Motivo\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Volume\r\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosEstoqueSuspensoInventario | orderBy: keyC:reverseC | slice: beginC:endC;\">\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-2 mb-2\" *ngIf=\"dadosEstoqueSuspensoInventario?.length > itemsPerPage\">\r\n      Exibindo {{ beginC + 1 }} a {{ endC }} de\r\n      {{ dadosEstoqueSuspensoInventario?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueSuspensoInventario?.length\"\r\n          (pageChanged)=\"onPageChangedC($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageC\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab> -->\r\n</tabset>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"estoqueSupensoEntradaMaterialEmpty && estoqueSupensoGeralEmpty && !loaderBody\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "JtkM":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-nivel-estoque/modal-nivel-estoque.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent", function() { return AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_nivel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-nivel-estoque.component.html */ "X0Wq");
/* harmony import */ var _modal_nivel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-nivel-estoque.component.scss */ "Uqvq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../analise-compras.service */ "yPm9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");












let AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent = class AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent {
    constructor(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.service = service;
        this.pnotifyService = pnotifyService;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.loaderBody = false;
        this.dadosDetalhesNivelEstoqueModal = [];
    }
    ngOnInit() {
        this.setParamsNivelEstoque();
    }
    setParamsNivelEstoque() {
        let queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
        let dataInicial = queryParams["dataInicial"];
        let dataFinal = queryParams["dataFinal"];
        let params = [];
        let tipoVisualizacao = queryParams["tipoVisualizacao"];
        let idDeposito;
        let idMaterial = this.item["ID_MATE"];
        if (tipoVisualizacao == 'S') {
            idDeposito = queryParams["depositos"];
        }
        else if (tipoVisualizacao == 'A') {
            idDeposito = this.item["ID_DEPO"];
        }
        params = ({ idMaterial, idDeposito, dataInicial, dataFinal });
        this.getNivelEstoqueDetalhes(params);
    }
    getNivelEstoqueDetalhes(params) {
        this.loaderBody = true;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.dadosDetalhesNivelEstoqueModal = [];
        this.service.getNiveisEstoqueDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => this.loaderBody = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                        this.loadingDetalhesModal = true;
                        this.noResultModal = false;
                        this.dadosDetalhesNivelEstoqueModal = res['body']['result'][0];
                    }
                    else if (res['body']['responseCode'] === 404) {
                        this.noResultModal = true;
                        this.loadingDetalhesModal = false;
                        this.pnotifyService.notice('Não há dados');
                    }
                }
            }
        }, error => {
            this.noResultModal = true;
            this.loadingDetalhesModal = false;
            this.pnotifyService.error('Erro ao detalhes de niveis de estoque');
        });
    }
};
AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoMonitoresAnaliseComprasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-nivel-estoque',
        template: _raw_loader_modal_nivel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_nivel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoMonitoresAnaliseComprasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent);



/***/ }),

/***/ "LOgi":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-suspenso/modal-estoque-suspenso.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header-modal-estoque-suspenso > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvbW9kYWwtZXN0b3F1ZS1zdXNwZW5zby9tb2RhbC1lc3RvcXVlLXN1c3BlbnNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxnRUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLWVzdG9xdWUtc3VzcGVuc28vbW9kYWwtZXN0b3F1ZS1zdXNwZW5zby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXItbW9kYWwtZXN0b3F1ZS1zdXNwZW5zbyA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWJmMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmMGYzZjYpLCBjb2xvci1zdG9wKDkwJSwgI2U2ZWJmMSkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcclxufSJdfQ== */");

/***/ }),

/***/ "O4ok":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-comprometido/modal-estoque-comprometido.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2 mt-2\" id=\"header-modal-estoque-comprometido\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-3 text-right\">\r\n    <button type=\"button\" (click)=\"onFilter()\" class=\"btn mr-2\">\r\n      Filtrar\r\n    </button>\r\n    <button type=\"button\" (click)=\"excelExport()\" class=\"btn\">\r\n      Exportar Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"empresas\">Empresas</label>\r\n        <input class=\"form-control\" id=\"empresas\" type=\"text\" formControlName=\"empresas\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"depositos\">Depósito</label>\r\n        <input class=\"form-control\" id=\"depositos\" type=\"text\" formControlName=\"depositos\">\r\n      </div>\r\n      <div class=\"form-group col-lg-1\">\r\n        <label for=\"numero\">Número</label>\r\n        <input class=\"form-control\" id=\"numero\" type=\"text\" formControlName=\"numero\">\r\n      </div>\r\n      <div class=\"form-group col-lg-1\">\r\n        <label for=\"itemFiltro\">Item</label>\r\n        <input class=\"form-control\" id=\"itemFiltro\" type=\"text\" formControlName=\"itemFiltro\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"data\">Data</label>\r\n        <input class=\"form-control\" id=\"data\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\" formControlName=\"data\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"cliente\">Cliente</label>\r\n        <input class=\"form-control\" id=\"cliente\" type=\"text\" formControlName=\"cliente\">\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"vendedor\">Promotor</label>\r\n        <input class=\"form-control\" id=\"vendedor\" type=\"text\" formControlName=\"vendedor\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<tabset *ngIf=\"(!estoqueComprometidoPlanoCorteEmpty || !estoqueComprometidoPedidoVendasEmpty) && !loaderBody\">\r\n  <!-- <tab heading=\"Geral\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Empresa\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Depósito\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Número\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Item\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Data Lançamento\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              nowrap\r\n              (click)=\"sortA('NR_PEDI_ORIG')\"\r\n              class=\"hover text-center\"\r\n            >\r\n              Volume\r\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosEstoqueComprometidoGeral | orderBy: keyA:reverseA | slice: beginA:endA;\">\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n            <td nowrap class=\"text-center\">asdasdas</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div\r\n      class=\"mt-2 mb-2\"\r\n      *ngIf=\"dadosEstoqueComprometidoGeral?.length > itemsPerPage\"\r\n    >\r\n      Exibindo {{ beginA + 1 }} a {{ endA }} de\r\n      {{ dadosEstoqueComprometidoGeral?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"dadosEstoqueComprometidoGeral?.length\"\r\n          (pageChanged)=\"onPageChangedA($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageA\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab> -->\r\n  <tab heading=\"Pedido de Vendas\" *ngIf=\"!estoqueComprometidoPedidoVendasEmpty\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap (click)=\"sortB('NM_EMPR')\" class=\"hover text-center\">\r\n              Empresa\r\n              <span *ngIf=\"keyB == 'NM_EMPR'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NM_DEPO')\" class=\"hover text-center\">\r\n              Depósito\r\n              <span *ngIf=\"keyB == 'NM_DEPO'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NR_PEDI')\" class=\"hover text-center\">\r\n              Número\r\n              <span *ngIf=\"keyB == 'NR_PEDI'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NR_PEDI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NR_ITEM_PEDI')\" class=\"hover text-center\">\r\n              Item\r\n              <span *ngIf=\"keyB == 'NR_ITEM_PEDI'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NR_ITEM_PEDI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('DT_EMIS')\" class=\"hover text-center\">\r\n              Data\r\n              <span *ngIf=\"keyB == 'DT_EMIS'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'DT_EMIS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NM_CLIE')\" class=\"hover text-center\">\r\n              Cliente\r\n              <span *ngIf=\"keyB == 'NM_CLIE'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_CLIE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('NM_VEND')\" class=\"hover text-center\">\r\n              Vendedor\r\n              <span *ngIf=\"keyB == 'NM_VEND'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'NM_VEND'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortB('TT_ITEM')\" class=\"hover text-center\">\r\n              Volume\r\n              <span *ngIf=\"keyB == 'TT_ITEM'\"><i [ngClass]=\"\r\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyB != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosEstoqueComprometidoPedidoVendas | orderBy: keyB:reverseB | slice: beginB:endB;\">\r\n            <td nowrap class=\"text-center\">{{item.NM_EMPR}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NM_DEPO}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NR_PEDI | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NR_ITEM_PEDI | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.DT_EMIS | date: 'dd/MM/yyyy'}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NM_CLIE}}</td>\r\n            <td nowrap class=\"text-center\">{{item.NM_VEND}}</td>\r\n            <td nowrap class=\"text-center\">{{item.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\">\r\n              {{dadosEstoqueComprometidoPedidoVendasTotal.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-2 mb-2\" *ngIf=\"\r\n        dadosEstoqueComprometidoPedidoVendas?.length > itemsPerPage\r\n      \">\r\n      Exibindo {{ beginB + 1 }} a {{ endB }} de\r\n      {{ dadosEstoqueComprometidoPedidoVendas?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueComprometidoPedidoVendas?.length\"\r\n          (pageChanged)=\"onPageChangedB($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageB\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n  <tab heading=\"Plano de Corte\" *ngIf=\"!estoqueComprometidoPlanoCorteEmpty\">\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap (click)=\"sortC('NM_EMPR')\" class=\"hover text-center\">\r\n              Empresa\r\n              <span *ngIf=\"keyC == 'NM_EMPR'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NM_DEPO')\" class=\"hover text-center\">\r\n              Depósito\r\n              <span *ngIf=\"keyC == 'NM_DEPO'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('NR_PLAN_CORT')\" class=\"hover text-center\">\r\n              Plano de Corte\r\n              <span *ngIf=\"keyC == 'NR_PLAN_CORT'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'NR_PLAN_CORT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('DT_PLAN_CORT')\" class=\"hover text-center\">\r\n              Data Plano\r\n              <span *ngIf=\"keyC == 'DT_PLAN_CORT'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'DT_PLAN_CORT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sortC('TT_ITEM')\" class=\"hover text-center\">\r\n              Volume\r\n              <span *ngIf=\"keyC == 'TT_ITEM'\"><i [ngClass]=\"\r\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"keyC != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosEstoqueComprometidoPlanoCorte | orderBy: keyC:reverseC | slice: beginC:endC;\">\r\n            <td nowrap class=\"text-center\">{{ item.NM_EMPR }}</td>\r\n            <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n            <td nowrap class=\"text-center\">{{ item.NR_PLAN_CORT | number : '0.0' }}</td>\r\n            <td nowrap class=\"text-center\">{{ item.DT_PLAN_CORT | date: 'dd/MM/yyyy' }}</td>\r\n            <td nowrap class=\"text-center\">{{ item.TT_ITEM | number : '0.3' }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\r\n            <td nowrap class=\"text-center text-white bg-dark\">\r\n              {{dadosEstoqueComprometidoPlanoCorteTotal.TT_ITEM | number: '0.3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-2 mb-2\" *ngIf=\"dadosEstoqueComprometidoPlanoCorte?.length > itemsPerPage\">\r\n      Exibindo {{ beginC + 1 }} a {{ endC }} de\r\n      {{ dadosEstoqueComprometidoPlanoCorte?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueComprometidoPlanoCorte?.length\"\r\n          (pageChanged)=\"onPageChangedC($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPageC\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </tab>\r\n</tabset>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"estoqueComprometidoPlanoCorteEmpty && estoqueComprometidoPedidoVendasEmpty && !loaderBody\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n");

/***/ }),

/***/ "PxAZ":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-suspenso/modal-estoque-suspenso.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent", function() { return AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_estoque_suspenso_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-estoque-suspenso.component.html */ "Jf9T");
/* harmony import */ var _modal_estoque_suspenso_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-estoque-suspenso.component.scss */ "LOgi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../analise-compras.service */ "yPm9");









Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);



let AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent = class AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent {
    /* dados do usuário */
    constructor(formBuilder, dateService, localeService, service, pnotifyService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.localeService = localeService;
        this.service = service;
        this.pnotifyService = pnotifyService;
        this.loaderBody = false;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.estoqueSupensoGeralEmpty = false;
        this.estoqueSupensoEntradaMaterialEmpty = false;
        this.empresas = [];
        this.depositos = [];
        this.dataEntrada = [];
        this.notaFiscal = [];
        this.usuario = [];
        this.lote = [];
        this.modal = [];
        this.idEmpresa = '';
        this.idDeposito = '';
        this.dadosEstoqueSuspensoGeral = [];
        this.dadosEstoqueSuspensoGeralFull = [];
        this.dadosEstoqueSuspensoGeralTotal = [];
        this.dadosEstoqueSuspensoInventario = [];
        this.dadosEstoqueSuspensoInventarioFull = [];
        this.dadosEstoqueSuspensoInventarioTotal = [];
        this.dadosEstoqueSuspensoEntradaMaterial = [];
        this.dadosEstoqueSuspensoEntradaMaterialFull = [];
        this.dadosEstoqueSuspensoEntradaMaterialTotal = [];
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_EMPR';
        this.reverseB = false;
        this.keyB = 'NM_EMPR';
        this.reverseC = false;
        this.keyC = 'NM_EMPR';
        /* PaginationModal*/
        this.itemsPerPage = 15;
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        this.currentPageB = 1;
        this.beginB = 0;
        this.endB = 15;
        this.currentPageC = 1;
        this.beginC = 0;
        this.endC = 15;
        /* dados do usuário */
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            empresas: [null],
            depositos: [null],
            dataEntrada: [null],
            notaFiscal: [null],
            motivo: [null],
        });
    }
    ngOnInit() {
        this.modal.codMaterial = this.item.ID_REFE_ERP;
        this.modal.descMaterial = this.item.NM_MATE;
        this.idEmpresa = this.item.ID_EMPR ? this.item.ID_EMPR : "";
        this.idDeposito = this.item.ID_DEPO ? this.item.ID_DEPO : "";
        this.onFilter();
    }
    onFilter() {
        let dataPedido = this.setDateValid(this.form.value['dataEntrada']);
        let params = {
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_NOTA_FISC: this.form.value['notaFiscal'] ? this.form.value['notaFiscal'] : "",
            DS_MOTI: this.form.value['motivo'] ? this.form.value['motivo'] : "",
            DT_ENTR: dataPedido ? dataPedido : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NR_PAGE_INIC: "",
            TT_REGI_PAGI: "",
            ORDE_BY: "",
            ORDE_TYPE: "",
            IN_GERA_RELA_EXCE: "",
            ID_USUA: ""
        };
        this.getEstoqueSuspenso(params);
    }
    excelExport() {
        let dataPedido = this.setDateValid(this.form.value['dataEntrada']);
        let params = {
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_NOTA_FISC: this.form.value['notaFiscal'] ? this.form.value['notaFiscal'] : "",
            DS_MOTI: this.form.value['motivo'] ? this.form.value['motivo'] : "",
            DT_ENTR: dataPedido ? dataPedido : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NR_PAGE_INIC: "",
            TT_REGI_PAGI: "",
            ORDE_BY: "",
            ORDE_TYPE: "",
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: this.idUsuario
        };
        this.getEstoqueSuspensoExcel(params);
    }
    getEstoqueSuspenso(params) {
        this.dadosEstoqueSuspensoGeralFull = [];
        this.dadosEstoqueSuspensoGeral = [];
        this.dadosEstoqueSuspensoGeralTotal = [];
        this.dadosEstoqueSuspensoEntradaMaterial = [];
        this.dadosEstoqueSuspensoEntradaMaterialFull = [];
        this.dadosEstoqueSuspensoEntradaMaterialTotal = [];
        this.dadosEstoqueSuspensoInventario = [];
        this.dadosEstoqueSuspensoInventarioFull = [];
        this.dadosEstoqueSuspensoInventarioTotal = [];
        this.loaderBody = true;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.estoqueSupensoGeralEmpty = true;
        this.estoqueSupensoEntradaMaterialEmpty = true;
        this.service.getEstoqueSupensoGeral(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loaderBody = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosEstoqueSuspensoInventarioFull = res['body']['result'];
                    this.dadosEstoqueSuspensoInventarioTotal = this.dadosEstoqueSuspensoInventarioFull.shift();
                    this.dadosEstoqueSuspensoInventario = this.dadosEstoqueSuspensoInventarioFull;
                    this.estoqueSupensoGeralEmpty = false;
                    this.loadingDetalhesModal = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = true;
                    this.estoqueSupensoGeralEmpty = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Estoque Suspenso');
            this.loadingDetalhesModal = true;
            this.estoqueSupensoGeralEmpty = true;
        });
        this.service.getEstoqueSupensoEntrada(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loaderBody = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosEstoqueSuspensoEntradaMaterialFull = res['body']['result'];
                    this.dadosEstoqueSuspensoEntradaMaterialTotal = this.dadosEstoqueSuspensoEntradaMaterialFull.shift();
                    this.dadosEstoqueSuspensoEntradaMaterial = this.dadosEstoqueSuspensoEntradaMaterialFull;
                    this.estoqueSupensoEntradaMaterialEmpty = false;
                    this.loadingDetalhesModal = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = true;
                    this.estoqueSupensoEntradaMaterialEmpty = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Estoque Suspenso');
            this.loadingDetalhesModal = true;
            this.estoqueSupensoEntradaMaterialEmpty = true;
        });
    }
    getEstoqueSuspensoExcel(params) {
        this.service.getEstoqueSupensoGeral(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.pnotifyService.success(res['body']['result']);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice(res['body']['result']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao gerar Excel - Estoque Suspenso');
        });
        this.service.getEstoqueSupensoEntrada(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.pnotifyService.success(res['body']['result']);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice(res['body']['result']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao gerar Excel - Estoque Suspenso');
        });
    }
    setDateValid(date) {
        if (date instanceof Date) {
            date = this.dateService.convertToUrlDate(date);
        }
        return date;
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    sortB(keyB) {
        this.keyB = keyB;
        this.reverseB = !this.reverseB;
    }
    sortC(keyC) {
        this.keyC = keyC;
        this.reverseC = !this.reverseC;
    }
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    onPageChangedB(event) {
        this.beginB = (event.page - 1) * event.itemsPerPage;
        this.endB = event.page * event.itemsPerPage;
    }
    onPageChangedC(event) {
        this.beginC = (event.page - 1) * event.itemsPerPage;
        this.endC = event.page * event.itemsPerPage;
    }
};
AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-estoque-suspenso',
        template: _raw_loader_modal_estoque_suspenso_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_estoque_suspenso_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent);



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

/***/ "Uqvq":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-nivel-estoque/modal-nivel-estoque.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLW5pdmVsLWVzdG9xdWUvbW9kYWwtbml2ZWwtZXN0b3F1ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "VQTc":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-perdidas/modal-vendas-perdidas.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2 mt-2\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> UN. MEDIDA: </strong> {{ modal.unidadeMedida }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-3 text-right\">\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"onFilter()\"\r\n      class=\"btn mr-2\"\r\n      [disabled]=\"\r\n        comparaData() ||\r\n        comparaDataInicial() ||\r\n        comparaDataFinal()\r\n      \"\r\n    >\r\n      Filtrar\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"excelExport()\"\r\n      class=\"btn\"\r\n      [disabled]=\"\r\n        comparaData() ||\r\n        comparaDataInicial() ||\r\n        comparaDataFinal()\r\n      \"\r\n    >\r\n      Exportar Excel\r\n  </button>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataNF\">Data Inicial</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataInicial\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataInicial\"\r\n        >\r\n        <invalid-form-control\r\n          [show]=\"comparaDataInicial()\"\r\n          message=\"Data inicial não pode ser maior que data atual\"\r\n        >\r\n        </invalid-form-control>\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataFinal\">Data Final</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataFinal\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataFinal\"\r\n        >\r\n       <invalid-form-control\r\n          [show]=\"comparaData()\"\r\n          message=\"Data final deve ser maior que data inicial\"\r\n        >\r\n        </invalid-form-control>\r\n        <invalid-form-control\r\n          [show]=\"comparaDataFinal()\"\r\n          message=\"Data final não pode ser maior que data atual\"\r\n        >\r\n        </invalid-form-control>\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"empresas\">Empresas</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"empresas\"\r\n          type=\"text\"\r\n          formControlName=\"empresas\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"depositos\">Depósito</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"depositos\"\r\n          type=\"text\"\r\n          formControlName=\"depositos\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"proposta\">Proposta</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"proposta\"\r\n          type=\"text\"\r\n          formControlName=\"proposta\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"dataEncerramento\">Data Encerramento</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"dataEncerramento\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          formControlName=\"dataEncerramento\"\r\n        >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-2\">\r\n        <label for=\"cliente\">Cliente</label>\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"cliente\"\r\n          type=\"text\"\r\n          formControlName=\"cliente\"\r\n        >\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<div class=\"table-responsive\" *ngIf=\"loadingDetalhesModal\">\r\n  <custom-table subtitleBorder=\"true\">\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_EMPR')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Empresa\r\n          <span *ngIf=\"keyA == 'NM_EMPR'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_EMPR'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_DEPO')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Depósito\r\n          <span *ngIf=\"keyA == 'NM_DEPO'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_DEPO'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NR_PEDI')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Proposta\r\n          <span *ngIf=\"keyA == 'NR_PEDI'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NR_PEDI'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('DT_ENCE_PEDI')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Data encerramento\r\n          <span *ngIf=\"keyA == 'DT_ENCE_PEDI'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'DT_ENCE_PEDI'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('NM_CLIE')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Cliente\r\n          <span *ngIf=\"keyA == 'NM_CLIE'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'NM_CLIE'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <!--                   <th nowrap (click)=\"sortA('NM_VEND')\" class=\"hover text-center\">\r\n          Usuário\r\n          <span *ngIf=\"keyA == 'NM_VEND'\"><i [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n          <span *ngIf=\"keyA != 'NM_VEND'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th> -->\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('TT_ITEM_PEDI_TONE')\"\r\n          class=\"hover text-center\"\r\n          *ngIf=\"this.modal.unidadeMedida != 'TON'\"\r\n        >\r\n          Quantidade(Ton)\r\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI_TONE'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI_TONE'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n        <th\r\n          nowrap\r\n          (click)=\"sortA('TT_ITEM_PEDI')\"\r\n          class=\"hover text-center\"\r\n        >\r\n          Quantidade\r\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI'\"\r\n            ><i\r\n              [ngClass]=\"\r\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"\r\n            ></i\r\n          ></span>\r\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI'\"\r\n            ><i [ngClass]=\"'fas fa-sort'\"></i\r\n          ></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr\r\n        *ngFor=\"\r\n          let item of dadosVendasPerdDetalhesModal\r\n            | orderBy: keyA:reverseA\r\n            | slice: beginA:endA;\r\n          let i = index\r\n        \"\r\n      >\r\n        <td nowrap>{{ item.NM_EMPR }}</td>\r\n        <td nowrap>{{ item.NM_DEPO }}</td>\r\n        <td nowrap class=\"text-center\">\r\n          {{ item.NR_PEDI | number: '0.0' }}\r\n        </td>\r\n        <td nowrap class=\"text-center\">\r\n          {{ item.DT_ENCE_PEDI | date: 'dd/MM/yyyy' }}\r\n        </td>\r\n        <td nowrap>{{ item.NM_CLIE }}</td>\r\n        <!--    <td nowrap>{{ item.NM_VEND }}</td> -->\r\n        <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n          {{ item.TT_ITEM_PEDI_TONE | number: '0.3' }}\r\n        </td>\r\n        <td nowrap class=\"text-right\">\r\n          {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI | number: '0.0') : (item.TT_ITEM_PEDI | number: '0.3')}}\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td nowrap class=\"bg-dark text-white\">TOTAL</td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n        <!--  <td nowrap class=\"bg-dark text-white text-center\"></td> -->\r\n        <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\r\n          {{\r\n            dadosVendasPerdDetalhesModalTotal.TT_ITEM_PEDI_TONE\r\n              | number: '0.3'\r\n          }}\r\n        </td>\r\n        <td nowrap class=\"bg-dark text-white text-right\">\r\n          {{this.modal.unidadeMedida != 'TON' ? (dadosVendasPerdDetalhesModalTotal.TT_ITEM_PEDI | number: '0.0') : (dadosVendasPerdDetalhesModalTotal.TT_ITEM_PEDI | number: '0.3')}}\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div\r\n  class=\"mt-2 mb-2\"\r\n  *ngIf=\"dadosVendasPerdDetalhesModal?.length > itemsPerPage\"\r\n>\r\n  Exibindo {{ beginA + 1 }} a {{ endA }} de\r\n  {{ dadosVendasPerdDetalhesModal?.length }}\r\n  <div class=\"d-flex\">\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"dadosVendasPerdDetalhesModal?.length\"\r\n      (pageChanged)=\"onPageChangedA($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPageA\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\"\r\n    >\r\n    </pagination>\r\n  </div>\r\n</div>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n  style=\"height: 80%;\"\r\n  >\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "WXyx":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-realizadas/modal-vendas-realizadas.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLXZlbmRhcy1yZWFsaXphZGFzL21vZGFsLXZlbmRhcy1yZWFsaXphZGFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "X0Wq":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-nivel-estoque/modal-nivel-estoque.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loadingDetalhesModal\">\r\n  <div class=\"row mb-2 mt-2 text-center\">\r\n    <div class=\"col-2\">\r\n      <p style=\"font-size: 14px;\">\r\n        <strong> CÓD. MATERIAL: </strong> {{ dadosDetalhesNivelEstoqueModal.ID_REFE_ERP | number: '0.0' }}\r\n      </p>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p style=\"font-size: 14px;\">\r\n        <strong> DESCRIÇÃO: </strong> {{ dadosDetalhesNivelEstoqueModal.NM_MATE }}\r\n      </p>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <p style=\"font-size: 14px;\"><strong> LINHA: </strong>{{ dadosDetalhesNivelEstoqueModal.NM_LINH }} </p>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <p style=\"font-size: 14px;\"><strong> CLASSE: </strong>{{ dadosDetalhesNivelEstoqueModal.NM_CLAS }} </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mb-2 mt-2 text-center\">\r\n    <div class=\"col-4\"><strong> ESTOQUE DIPONÍVEL: </strong> {{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_DISP_TONE ? dadosDetalhesNivelEstoqueModal.TT_ESTO_DISP_TONE : 0) | number: '0.3'}} </div>\r\n    <div class=\"col-4\"><strong> VENDAS REALIZADAS: </strong> {{ (dadosDetalhesNivelEstoqueModal.TT_VEND_REAL_TONE ? dadosDetalhesNivelEstoqueModal.TT_VEND_REAL_TONE : 0) | number: '0.3' }} </div>\r\n    <div class=\"col-4\"><strong> DIAS ANALIZADOS: </strong>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_PERI_ANAL ? dadosDetalhesNivelEstoqueModal.NR_DIAS_PERI_ANAL : 0) | number: '0.0' }}</div>\r\n  </div>\r\n  <div class=\"table-responsive mt-4\">\r\n    <custom-table>\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th>Tipo</th>\r\n          <th>Volume</th>\r\n          <th>Giro</th>\r\n          <th>Diferença</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-danger\"></i> Mínimo</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_MINI ? dadosDetalhesNivelEstoqueModal.TT_ESTO_MINI : 0) | number: '0.3'  }}</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MINI ? dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MINI : 0) | number: '0.0'  }}</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MINI ? dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MINI: 0) | number: '0.3'  }}</td>\r\n  \r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-warning\"></i> Médio</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_SEGU ? dadosDetalhesNivelEstoqueModal.TT_ESTO_SEGU : 0)| number: '0.3'  }}</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_SEGU ? dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_SEGU : 0)| number: '0.0'  }}</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_SEGU ? dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_SEGU : 0)| number: '0.3'  }}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-success\"></i> Máximo</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_MAXI ? dadosDetalhesNivelEstoqueModal.TT_ESTO_MAXI : 0) | number: '0.3'  }}</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MAXI ? dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MAXI : 0) | number: '0.0'  }}</td>\r\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MAXI ? dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MAXI : 0) | number: '0.3'  }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div class=\"table-responsive mt-4\">\r\n    <custom-table>\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th>Código Correspondente</th>\r\n          <th>Descrição</th>\r\n          <th>Sul Fluminense</th>\r\n          <th>Avançado</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr>\r\n          <td>{{dadosDetalhesNivelEstoqueModal.ID_REFE_CORR_ERP | number: '0.0'}}</td>\r\n          <td>{{dadosDetalhesNivelEstoqueModal.DS_MATE_REFE_CORR_ERP}}</td>\r\n          <td>{{(dadosDetalhesNivelEstoqueModal.TT_ESTO_SUL_FLUM_TONE ? dadosDetalhesNivelEstoqueModal.TT_ESTO_SUL_FLUM_TONE : 0) | number: '0.3'}}</td>\r\n          <td>{{(dadosDetalhesNivelEstoqueModal.TT_ESTO_AVAN_TONE ? dadosDetalhesNivelEstoqueModal.TT_ESTO_AVAN_TONE : 0) | number: '0.3'}}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n</div>\r\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\r\n  <div class=\"spinner-border\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n  style=\"height: 80%;\"\r\n  >\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>");

/***/ }),

/***/ "gF9Z":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasRoutingModule", function() { return AbastecimentoMonitoresAnaliseComprasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _analise_compras_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analise-compras.component */ "GRp8");




const routes = [
    {
        path: '',
        component: _analise_compras_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoMonitoresAnaliseComprasComponent"]
    }
];
let AbastecimentoMonitoresAnaliseComprasRoutingModule = class AbastecimentoMonitoresAnaliseComprasRoutingModule {
};
AbastecimentoMonitoresAnaliseComprasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoMonitoresAnaliseComprasRoutingModule);



/***/ }),

/***/ "ijAw":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-perdidas/modal-vendas-perdidas.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent", function() { return AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_vendas_perdidas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-vendas-perdidas.component.html */ "VQTc");
/* harmony import */ var _modal_vendas_perdidas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-vendas-perdidas.component.scss */ "sEmW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../analise-compras.service */ "yPm9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);
//Converte rota em base64





let AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent = class AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent {
    /* dados do usuário */
    constructor(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.service = service;
        this.pnotifyService = pnotifyService;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.loaderBody = false;
        this.compararDataFinal = false;
        this.compararDataInicial = false;
        this.compararDataFinalAtual = false;
        this.empresas = [];
        this.depositos = [];
        this.proposta = [];
        this.dataEntrada = [];
        this.dataEncerramento = [];
        this.cliente = [];
        this.modal = [];
        this.dadosExcel = [];
        this.dadosVendasPerdDetalhesModalFull = [];
        this.dadosVendasPerdDetalhesModal = [];
        this.dadosVendasPerdDetalhesModalTotal = [];
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_EMPR';
        /* PaginationModal*/
        this.itemsPerPage = 15;
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        /* dados do usuário */
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            dataInicial: [null],
            dataFinal: [null],
            empresas: [null],
            depositos: [null],
            proposta: [null],
            dataEncerramento: [null],
            cliente: [null]
        });
    }
    ngOnInit() {
        this.modal.codMaterial = this.item.ID_REFE_ERP;
        this.modal.descMaterial = this.item.NM_MATE;
        this.modal.unidadeMedida = this.item.NM_UNID_MEDI;
        this.resetValuesForm();
        this.setParamsVendasPerdidas();
    }
    resetValuesForm() {
        this.form.get('dataInicial').reset();
        this.form.get('dataFinal').reset();
        this.form.get('empresas').reset();
        this.form.get('depositos').reset();
        this.form.get('proposta').reset();
        this.form.get('dataEncerramento').reset();
        this.form.get('cliente').reset();
    }
    setParamsVendasPerdidas() {
        let queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
        let dataInicial = queryParams["dataInicial"];
        let dataFinal = queryParams["dataFinal"];
        let dataInicialParam = dataInicial;
        let dataFinalParam = dataFinal;
        let params = [];
        let tipoVisualizacao = queryParams["tipoVisualizacao"];
        let idMaterial = this.item["ID_MATE"];
        let idMesAno = this.idMesAno;
        if (tipoVisualizacao == 'S') {
            this.idEmpresa = queryParams["empresas"];
            this.idDeposito = queryParams["depositos"];
        }
        else if (tipoVisualizacao == 'A') {
            this.idEmpresa = "";
            this.idDeposito = this.item["ID_DEPO"];
        }
        if (this.idMesAno) {
            dataInicialParam = "";
            dataFinalParam = "";
            let mesAno = this.idMesAno.replace('_', '/01/');
            let date = new Date(mesAno);
            let primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
            let ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            let primeiroDiaC = this.setDateValid(primeiroDia);
            let ultimoDiaC = this.setDateValid(ultimoDia);
            primeiroDiaC = new Date(primeiroDiaC.split('-').reverse().join('-'));
            ultimoDiaC = new Date(ultimoDiaC.split('-').reverse().join('-'));
            let dataInicialC = new Date(dataInicial.split('-').reverse().join('-'));
            let dataFinalC = new Date(dataFinal.split('-').reverse().join('-'));
            if (primeiroDiaC > dataInicialC) {
                dataInicial = this.setDateValid(primeiroDia);
            }
            if (ultimoDiaC < dataFinalC) {
                dataFinal = this.setDateValid(ultimoDia);
            }
        }
        params = {
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            DT_INIC: dataInicial ? dataInicial : "",
            DT_FINA: dataFinal ? dataFinal : "",
            NM_MES_ANO: "",
            ID_MATE: idMaterial ? idMaterial : "",
            NM_EMPR: "",
            NM_DEPO: "",
            NR_PROP: "",
            DT_ENCE_PROP: "",
            NM_CLIE: ""
        };
        this.getVendasPerdidasDetalhes(params);
        this.form.get("dataInicial").setValue(dataInicial);
        this.form.get("dataFinal").setValue(dataFinal);
    }
    getVendasPerdidasDetalhes(params) {
        this.dadosVendasPerdDetalhesModalFull = [];
        this.dadosVendasPerdDetalhesModal = [];
        this.dadosVendasPerdDetalhesModalTotal = [];
        this.loaderBody = true;
        //this.loadingDetalhesVendPerd = false;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.service.getVendasPerdidasDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => this.loaderBody = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosVendasPerdDetalhesModalFull = res['body']['result'];
                    this.dadosVendasPerdDetalhesModalTotal = this.dadosVendasPerdDetalhesModalFull.shift();
                    this.dadosVendasPerdDetalhesModal = this.dadosVendasPerdDetalhesModalFull;
                    //this.loadingDetalhesVendPerd = true;
                    this.noResultModal = false;
                    this.loadingDetalhesModal = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = false;
                    this.noResultModal = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao Vendas Perdidadas Detalhes');
        });
    }
    getVendasPerdidasDetalhesExcel(params) {
        this.dadosExcel = [];
        this.service.getVendasPerdidasDetalhes(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosExcel = res['body']['result'];
                    this.pnotifyService.success(this.dadosExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao detalhes de Carteira');
        });
    }
    onFilter() {
        let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        let dataEncerramento = this.setDateValid(this.form.value['dataEncerramento']);
        let params = {
            DT_INIC: dataInicial ? dataInicial : "",
            DT_FINA: dataFinal ? dataFinal : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_PROP: this.form.value['proposta'] ? this.form.value['proposta'] : "",
            DT_ENCE_PROP: dataEncerramento ? dataEncerramento : "",
            NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
            IN_GERA_RELA_EXCE: "",
            ID_USUA: ""
        };
        this.getVendasPerdidasDetalhes(params);
    }
    excelExport() {
        let dataInicial = this.setDateValid(this.form.value['dataInicial']);
        let dataFinal = this.setDateValid(this.form.value['dataFinal']);
        let dataEncerramento = this.setDateValid(this.form.value['dataEncerramento']);
        let params = {
            DT_INIC: dataInicial ? dataInicial : "",
            DT_FINA: dataFinal ? dataFinal : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            NM_MES_ANO: "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NR_PROP: this.form.value['proposta'] ? this.form.value['proposta'] : "",
            DT_ENCE_PROP: dataEncerramento ? dataEncerramento : "",
            NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: this.idUsuario
        };
        this.getVendasPerdidasDetalhesExcel(params);
    }
    setDateValid(date) {
        if (date instanceof Date) {
            date = this.dateService.convertToUrlDate(date);
        }
        return date;
    }
    comparaData() {
        let stra = this.form.get('dataInicial').value;
        let strb = this.form.get('dataFinal').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
        }
        if (!dataInicial) {
            this.compararDataFinal = false;
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compararDataFinal = true;
            return this.compararDataFinal;
        }
    }
    comparaDataFinal() {
        let now = new Date();
        if (!this.form.get('dataFinal').value) {
            this.compararDataFinalAtual = false;
            return false;
        }
        else if (this.form.get('dataFinal').value > now) {
            this.compararDataFinalAtual = true;
            return this.compararDataFinalAtual;
        }
    }
    comparaDataInicial() {
        let now = new Date();
        if (!this.form.get('dataInicial').value) {
            this.compararDataInicial = false;
            return false;
        }
        else if (this.form.get('dataInicial').value > now) {
            this.compararDataInicial = true;
            return this.compararDataInicial;
        }
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
};
AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idMesAno: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-vendas-perdidas',
        template: _raw_loader_modal_vendas_perdidas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_vendas_perdidas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent);



/***/ }),

/***/ "njR8":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModule", function() { return AbastecimentoMonitoresAnaliseComprasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _analise_compras_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analise-compras-routing.module */ "gF9Z");
/* harmony import */ var _analise_compras_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analise-compras.component */ "GRp8");
/* harmony import */ var _modal_estoque_suspenso_modal_estoque_suspenso_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-estoque-suspenso/modal-estoque-suspenso.component */ "PxAZ");
/* harmony import */ var _modal_estoque_comprometido_modal_estoque_comprometido_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal-estoque-comprometido/modal-estoque-comprometido.component */ "taCn");
/* harmony import */ var _modal_vendas_perdidas_modal_vendas_perdidas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal-vendas-perdidas/modal-vendas-perdidas.component */ "ijAw");
/* harmony import */ var _modal_vendas_realizadas_modal_vendas_realizadas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal-vendas-realizadas/modal-vendas-realizadas.component */ "0opu");
/* harmony import */ var _modal_carteira_modal_carteira_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal-carteira/modal-carteira.component */ "0iJp");
/* harmony import */ var _modal_nivel_estoque_modal_nivel_estoque_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal-nivel-estoque/modal-nivel-estoque.component */ "JtkM");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__);



















/* Localização Brasil */


Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default.a);
/* Localização Brasil */
let AbastecimentoMonitoresAnaliseComprasModule = class AbastecimentoMonitoresAnaliseComprasModule {
};
AbastecimentoMonitoresAnaliseComprasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _analise_compras_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasComponent"],
            _modal_estoque_suspenso_modal_estoque_suspenso_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent"],
            _modal_estoque_comprometido_modal_estoque_comprometido_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent"],
            _modal_vendas_perdidas_modal_vendas_perdidas_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent"],
            _modal_vendas_realizadas_modal_vendas_realizadas_component__WEBPACK_IMPORTED_MODULE_16__["AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent"],
            _modal_carteira_modal_carteira_component__WEBPACK_IMPORTED_MODULE_17__["AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent"],
            _modal_nivel_estoque_modal_nivel_estoque_component__WEBPACK_IMPORTED_MODULE_18__["AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _analise_compras_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], AbastecimentoMonitoresAnaliseComprasModule);



/***/ }),

/***/ "o4Lb":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky {\n  position: sticky;\n}\n\n.btn-xm {\n  padding: 0.05rem 0.15rem;\n  font-size: 0.7rem;\n  border-radius: 0.2rem;\n}\n\n.btn-open-modal:disabled {\n  color: #fff;\n  background-color: #66c0ce;\n  border-color: #66c0ce;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvYW5hbGlzZS1jb21wcmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNDLHdCQUFBO0VBQ0csaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vbW9uaXRvcmVzL2FuYWxpc2UtY29tcHJhcy9hbmFsaXNlLWNvbXByYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcblxyXG4uYnRuLXhtIHtcclxuXHRwYWRkaW5nOiAwLjA1cmVtIDAuMTVyZW07XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxufVxyXG5cclxuLmJ0bi1vcGVuLW1vZGFsOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZjMGNlO1xyXG4gIGJvcmRlci1jb2xvcjogIzY2YzBjZTtcclxuICBvcGFjaXR5OiAxO1xyXG59Il19 */");

/***/ }),

/***/ "sEmW":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-perdidas/modal-vendas-perdidas.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLXZlbmRhcy1wZXJkaWRhcy9tb2RhbC12ZW5kYXMtcGVyZGlkYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "taCn":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-comprometido/modal-estoque-comprometido.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent", function() { return AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_estoque_comprometido_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-estoque-comprometido.component.html */ "O4ok");
/* harmony import */ var _modal_estoque_comprometido_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-estoque-comprometido.component.scss */ "BD19");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../analise-compras.service */ "yPm9");









Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);



let AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent = class AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent {
    /* dados do usuário */
    constructor(formBuilder, dateService, localeService, service, pnotifyService) {
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.localeService = localeService;
        this.service = service;
        this.pnotifyService = pnotifyService;
        this.loaderBody = false;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.estoqueComprometidoPedidoVendasEmpty = false;
        this.estoqueComprometidoPlanoCorteEmpty = false;
        this.modal = [];
        this.empresas = [];
        this.depositos = [];
        this.numero = [];
        this.itemFiltro = [];
        this.data = [];
        this.cliente = [];
        this.vendedor = [];
        this.idEmpresa = '';
        this.idDeposito = '';
        this.dadosEstoqueComprometidoPedidoVendas = [];
        this.dadosEstoqueComprometidoPedidoVendaslFull = [];
        this.dadosEstoqueComprometidoPedidoVendasTotal = [];
        this.dadosEstoqueComprometidoPlanoCorte = [];
        this.dadosEstoqueComprometidoPlanoCorteFull = [];
        this.dadosEstoqueComprometidoPlanoCorteTotal = [];
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_EMPR';
        this.reverseB = false;
        this.keyB = 'NM_EMPR';
        this.reverseC = false;
        this.keyC = 'NM_EMPR';
        /* PaginationModal*/
        this.itemsPerPage = 15;
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        this.currentPageB = 1;
        this.beginB = 0;
        this.endB = 15;
        this.currentPageC = 1;
        this.beginC = 0;
        this.endC = 15;
        /* dados do usuário */
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            empresas: [null],
            depositos: [null],
            numero: [null],
            itemFiltro: [null],
            data: [null],
            cliente: [null],
            vendedor: [null]
        });
    }
    ngOnInit() {
        this.modal.codMaterial = this.item.ID_REFE_ERP;
        this.modal.descMaterial = this.item.NM_MATE;
        this.idEmpresa = this.item.ID_EMPR ? this.item.ID_EMPR : "";
        this.idDeposito = this.item.ID_DEPO ? this.item.ID_DEPO : "";
        this.onFilter();
    }
    onFilter() {
        let dataEmissao = this.setDateValid(this.form.value['data']);
        let params = {
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
            NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
            NR_PEDI: this.form.value['numero'] ? this.form.value['numero'] : "",
            NR_ITEM_PEDI: this.form.value['itemFiltro'] ? this.form.value['itemFiltro'] : "",
            DT_EMIS: dataEmissao ? dataEmissao : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NR_PAGE_INIC: "",
            TT_REGI_PAGI: "",
            ORDE_BY: "",
            ORDE_TYPE: "",
            IN_GERA_RELA_EXCE: "",
            ID_USUA: ""
        };
        this.getEstoqueComprometido(params);
    }
    excelExport() {
        let dataEmissao = this.setDateValid(this.form.value['data']);
        let params = {
            NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
            NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
            NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
            NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
            NR_PEDI: this.form.value['numero'] ? this.form.value['numero'] : "",
            NR_ITEM_PEDI: this.form.value['itemFiltro'] ? this.form.value['itemFiltro'] : "",
            DT_EMIS: dataEmissao ? dataEmissao : "",
            ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
            ID_DEPO: this.idDeposito ? this.idDeposito : "",
            ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
            NR_PAGE_INIC: "",
            TT_REGI_PAGI: "",
            ORDE_BY: "",
            ORDE_TYPE: "",
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: this.idUsuario
        };
        this.getEstoqueComprometidoExcel(params);
    }
    getEstoqueComprometido(params) {
        this.dadosEstoqueComprometidoPedidoVendaslFull = [];
        this.dadosEstoqueComprometidoPedidoVendas = [];
        this.dadosEstoqueComprometidoPedidoVendasTotal = [];
        this.dadosEstoqueComprometidoPlanoCorteFull = [];
        this.dadosEstoqueComprometidoPlanoCorte = [];
        this.dadosEstoqueComprometidoPlanoCorteTotal = [];
        this.loaderBody = true;
        this.loadingDetalhesModal = false;
        this.noResultModal = false;
        this.estoqueComprometidoPedidoVendasEmpty = false;
        this.estoqueComprometidoPlanoCorteEmpty = false;
        this.service.getEstoqueComprometidoPedidoVenda(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loaderBody = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosEstoqueComprometidoPedidoVendaslFull = res['body']['result'];
                    this.dadosEstoqueComprometidoPedidoVendasTotal = this.dadosEstoqueComprometidoPedidoVendaslFull.shift();
                    this.dadosEstoqueComprometidoPedidoVendas = this.dadosEstoqueComprometidoPedidoVendaslFull;
                    this.estoqueComprometidoPedidoVendasEmpty = false;
                    this.loadingDetalhesModal = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = true;
                    this.estoqueComprometidoPedidoVendasEmpty = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Estoque Comprometido');
            this.loadingDetalhesModal = true;
            this.estoqueComprometidoPedidoVendasEmpty = true;
        });
        this.service.getEstoqueComprometidoPlanoCorte(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loaderBody = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosEstoqueComprometidoPlanoCorteFull = res['body']['result'];
                    this.dadosEstoqueComprometidoPlanoCorteTotal = this.dadosEstoqueComprometidoPlanoCorteFull.shift();
                    this.dadosEstoqueComprometidoPlanoCorte = this.dadosEstoqueComprometidoPlanoCorteFull;
                    this.estoqueComprometidoPlanoCorteEmpty = false;
                    this.loadingDetalhesModal = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhesModal = true;
                    this.estoqueComprometidoPlanoCorteEmpty = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Estoque Comprometido');
            this.loadingDetalhesModal = true;
            this.estoqueComprometidoPlanoCorteEmpty = true;
        });
    }
    getEstoqueComprometidoExcel(params) {
        this.service.getEstoqueComprometidoPedidoVenda(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.pnotifyService.success(res['body']['result']);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice(res['body']['result']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao gerar Excel - Estoque Comprometido');
        });
        this.service.getEstoqueComprometidoPlanoCorte(params)
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.pnotifyService.success(res['body']['result']);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice(res['body']['result']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao gerar Excel - Estoque Comprometido');
        });
    }
    setDateValid(date) {
        if (date instanceof Date) {
            date = this.dateService.convertToUrlDate(date);
        }
        return date;
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    sortB(keyB) {
        this.keyB = keyB;
        this.reverseB = !this.reverseB;
    }
    sortC(keyC) {
        this.keyC = keyC;
        this.reverseC = !this.reverseC;
    }
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    onPageChangedB(event) {
        this.beginB = (event.page - 1) * event.itemsPerPage;
        this.endB = event.page * event.itemsPerPage;
    }
    onPageChangedC(event) {
        this.beginC = (event.page - 1) * event.itemsPerPage;
        this.endC = event.page * event.itemsPerPage;
    }
};
AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] }
];
AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-estoque-comprometido',
        template: _raw_loader_modal_estoque_comprometido_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_estoque_comprometido_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])
], AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent);



/***/ }),

/***/ "yPm9":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.service.ts ***!
  \********************************************************************************************/
/*! exports provided: AbastecimentoMonitoresAnaliseComprasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasService", function() { return AbastecimentoMonitoresAnaliseComprasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AbastecimentoMonitoresAnaliseComprasService = class AbastecimentoMonitoresAnaliseComprasService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getDepositosAssociados(idLinhas, idClasses, idTipoMaterial, idSituacao) {
        let linhas;
        if (!idLinhas)
            linhas = null;
        else
            linhas = idLinhas.toString();
        if (!idClasses)
            idClasses = "";
        if (!idTipoMaterial)
            idTipoMaterial = "";
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/depositos-associados-materiais`, {
            params: {
                ID_CLAS: idClasses.toString(),
                ID_LINH: linhas,
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao,
                IN_SELE_COMB: "1"
            },
            observe: "response"
        });
    }
    getDepositos(idsEmpresa, idSituacao) {
        if (!idsEmpresa)
            idsEmpresa = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/depositos`, {
            params: {
                ID_EMPR: idsEmpresa.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getFiltroNivelCritico() {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/niveis-criticos`, {
            observe: "response"
        });
    }
    getLinhas(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/linhas`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getSubLinhas(descricaoLinhas, idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/sub-linhas`, {
            params: {
                ID_LINH: descricaoLinhas.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getClasses(descricaoLinhas, idSubLinha, idSituacao) {
        if (!idSubLinha)
            idSubLinha = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params: {
                ID_LINH: descricaoLinhas.toString(),
                ID_SUB_LINH: idSubLinha,
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getMateriais(idClasses, idTipoMaterial, idSituacao) {
        if (!idClasses)
            idClasses = "";
        if (!idTipoMaterial)
            idTipoMaterial = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/materiais`, {
            params: {
                ID_CLAS: idClasses.toString(),
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getTiposNiveisEstoque(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-niveis-estoque`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getTiposMateriais(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-material`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getInfAdicionais() {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/informacoes-adicionais-atividade/1`, {
            observe: "response"
        });
    }
    getAnaliseCompras(params) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        let idEmpresas = (_a = params["empresas"]) !== null && _a !== void 0 ? _a : "";
        let idDeposito = (_b = params["depositos"]) !== null && _b !== void 0 ? _b : "";
        let idNivelEstoque = (_c = params["nivelEstoque"]) !== null && _c !== void 0 ? _c : "";
        let idTipoMaterial = (_d = params["tipoMaterial"]) !== null && _d !== void 0 ? _d : "";
        let idSituacao = params["situacao"];
        let idLinha = (_e = params["linha"]) !== null && _e !== void 0 ? _e : "";
        let idSubLinha = (_f = params["subLinha"]) !== null && _f !== void 0 ? _f : "";
        let idClasse = (_g = params["classe"]) !== null && _g !== void 0 ? _g : "";
        let idMaterial = (_h = params["material"]) !== null && _h !== void 0 ? _h : "";
        let paramData = (_j = params["paramData"]) !== null && _j !== void 0 ? _j : "";
        let dataInicial = (_k = params["dataInicial"]) !== null && _k !== void 0 ? _k : "";
        let dataFinal = (_l = params["dataFinal"]) !== null && _l !== void 0 ? _l : "";
        let tipoVisualizacao = (_m = params["tipoVisualizacao"]) !== null && _m !== void 0 ? _m : "";
        let idInfAdicionais = (_o = params["infAdicionais"]) !== null && _o !== void 0 ? _o : "";
        let qtItensPagina = (_p = params["qtItensPagina"]) !== null && _p !== void 0 ? _p : "";
        let pagina = (_q = params["pagina"]) !== null && _q !== void 0 ? _q : "";
        let relatorioExcel = (_r = params["relatorioExcel"]) !== null && _r !== void 0 ? _r : "";
        let idUsuario = (_s = params["idUsuario"]) !== null && _s !== void 0 ? _s : "";
        let orderType = (_t = params["orderType"]) !== null && _t !== void 0 ? _t : "";
        let orderBy = (_u = params["orderBy"]) !== null && _u !== void 0 ? _u : "";
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/analise-compras`, {
            params: {
                ID_EMPR: idEmpresas.toString(),
                ID_DEPO: idDeposito.toString(),
                ID_APOI_NIVE_ESTO: idNivelEstoque,
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao,
                ID_LINH: idLinha,
                ID_SUB_LINH: idSubLinha,
                ID_CLAS: idClasse.toString(),
                ID_MATE: idMaterial.toString(),
                /* paramData, */
                DT_INIC_VEND: dataInicial,
                DT_FINA_VEND: dataFinal,
                TP_VISU_PAIN: tipoVisualizacao,
                ID_INFO_ADIC_ATIV: idInfAdicionais.toString(),
                NR_PAGE_INIC: pagina,
                TT_REGI_PAGI: qtItensPagina,
                IN_GERA_RELA_EXCE: relatorioExcel,
                ID_USUA: idUsuario,
                ORDE_TYPE: orderType,
                ORDE_BY: orderBy
            },
            observe: "response"
        });
    }
    getVendasRealizadasDetalhes(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/vendas-realizadas/detalhes`, {
            params: {
                ID_EMPR: params["ID_EMPR"].toString(),
                ID_DEPO: params["ID_DEPO"].toString(),
                DT_INIC: params["DT_INIC"],
                DT_FINA: params["DT_FINA"],
                NM_MES_ANO: params["NM_MES_ANO"],
                ID_MATE: params["ID_MATE"],
                NM_EMPR: params["NM_EMPR"],
                NM_DEPO: params["NM_DEPO"],
                NR_NOTA_FISC: params["NR_NOTA_FISC"],
                DT_NOTA_FISC: params["DT_NOTA_FISC"],
                NM_CLIE: params["NM_CLIE"],
                NM_VEND: params["NM_VEND"],
                IN_GERA_RELA_EXCE: params["IN_GERA_RELA_EXCE"],
                ID_USUA: params["ID_USUA"],
                NR_PAGE_INIC: '',
                TT_REGI_PAGI: '',
                ORDE_TYPE: '',
                ORDER_BY: ''
            },
            observe: "response"
        });
    }
    getVendasPerdidasDetalhes(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/vendas-perdidas/detalhes`, {
            params: {
                ID_EMPR: params["ID_EMPR"].toString(),
                ID_DEPO: params["ID_DEPO"].toString(),
                DT_INIC: params["DT_INIC"],
                DT_FINA: params["DT_FINA"],
                NM_MES_ANO: params["NM_MES_ANO"],
                ID_MATE: params["ID_MATE"],
                NM_EMPR: params["NM_EMPR"],
                NM_DEPO: params["NM_DEPO"],
                NR_PROP: params["NR_PROP"],
                DT_ENCE_PROP: params["DT_ENCE_PROP"],
                NM_CLIE: params["NM_CLIE"],
                IN_DATA_ENCE_PEDI: '1',
                ID_MOTI_VEND_PERD_REFE_ERP: '4',
                IN_GERA_RELA_EXCE: params["IN_GERA_RELA_EXCE"],
                ID_USUA: params["ID_USUA"],
                NR_PAGE_INIC: '',
                TT_REGI_PAGI: '',
                ORDE_TYPE: '',
                ORDER_BY: ''
            },
            observe: "response"
        });
    }
    getCarteiraDetalhes(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/carteira-em-aberto/detalhes`, {
            params: {
                ID_EMPR: params["ID_EMPR"].toString(),
                ID_DEPO: params["ID_DEPO"].toString(),
                NM_MES_ANO: params["NM_MES_ANO"],
                ID_MATE: params["ID_MATE"],
                NM_EMPR: params["NM_EMPR"],
                NM_DEPO: params["NM_DEPO"],
                NR_PEDI_ORIG: params["NR_PEDI_ORIG"],
                DT_PEDI_ORIG: params["DT_PEDI_ORIG"],
                NR_PEDI_REME: params["NR_PEDI_REME"],
                DT_PREV_ENTR: params["DT_PREV_ENTR"],
                NM_FORN: params["NM_FORN"],
                IN_GERA_RELA_EXCE: params["IN_GERA_RELA_EXCE"],
                ID_USUA: params["ID_USUA"],
                NR_PAGE_INIC: '',
                TT_REGI_PAGI: '',
                ORDE_TYPE: '',
                ORDER_BY: ''
            },
            observe: "response"
        });
    }
    getNiveisEstoqueDetalhes(params) {
        var _a, _b, _c, _d;
        let idMaterial = (_a = params["idMaterial"]) !== null && _a !== void 0 ? _a : "";
        let idDeposito = (_b = params["idDeposito"]) !== null && _b !== void 0 ? _b : "";
        let dataInicial = (_c = params["dataInicial"]) !== null && _c !== void 0 ? _c : "";
        let dataFinal = (_d = params["dataFinal"]) !== null && _d !== void 0 ? _d : "";
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/situacao-material-deposito/detalhes`, {
            params: {
                ID_MATE: idMaterial,
                ID_DEPO: idDeposito,
                DT_INIC: dataInicial,
                DT_FINA: dataFinal
            },
            observe: "response"
        });
    }
    getEstoqueComprometidoPedidoVenda(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/comprometido-pedido-venda/detalhes`, {
            params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NM_CLIE: params['NM_CLIE'],
                NM_VEND: params['NM_VEND'],
                NR_PEDI: params['NR_PEDI'],
                NR_ITEM_PEDI: params['NR_ITEM_PEDI'],
                DT_EMIS: params['DT_EMIS'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
            },
            observe: "response"
        });
    }
    getEstoqueComprometidoPlanoCorte(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/comprometido-plano-corte/detalhes`, {
            params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NM_CLIE: params['NM_CLIE'],
                NM_VEND: params['NM_VEND'],
                NR_PEDI: params['NR_PEDI'],
                NR_ITEM_PEDI: params['NR_ITEM_PEDI'],
                DT_EMIS: params['DT_EMIS'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
            },
            observe: "response"
        });
    }
    getEstoqueSupensoEntrada(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/suspenso-entrada/detalhes`, {
            params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NR_NOTA_FISC: params['NR_NOTA_FISC'],
                DS_MOTI: params['DS_MOTI'],
                DT_ENTR: params['DT_ENTR'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
            },
            observe: "response"
        });
    }
    getEstoqueSupensoGeral(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/estoque/suspenso-geral/detalhes`, {
            params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NR_NOTA_FISC: params['NR_NOTA_FISC'],
                DS_MOTI: params['DS_MOTI'],
                DT_ENTR: params['DT_ENTR'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
            },
            observe: "response"
        });
    }
};
AbastecimentoMonitoresAnaliseComprasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AbastecimentoMonitoresAnaliseComprasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AbastecimentoMonitoresAnaliseComprasService);



/***/ })

}]);
//# sourceMappingURL=analise-compras-analise-compras-module-es2015.js.map