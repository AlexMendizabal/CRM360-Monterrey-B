(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notas-fiscais-suprimentos-notas-fiscais-suprimentos-module"],{

/***/ "1sPZ":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fiscal/relatorios/notas-fiscais-suprimentos/notas-fiscais-suprimentos.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Relatórios de Notas Fiscais\">\n  <button\n    (click)=\"exportarExcel()\"\n    [disabled]=\"!noResult\"\n    >\n    Exportar\n  </button>\n  <button\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status  == 'INVALID'\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<!-- Início dos Filtros -->\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-3\">\n          <label for=\"dataInicio\"> Data inicial </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"inicioData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataInicio\"\n            [ngClass]=\"onFieldError('dataInicio') + ' ' + onFieldRequired('dataInicio')\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('dataInicio')\"\n            message=\"Data inicial é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"dataInicio\"> Data final </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"fimData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataFim\"\n            [ngClass]=\"onFieldError('dataFim') + ' ' + onFieldRequired('dataFim')\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('dataFim')\"\n            message=\"Data final é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"empresa\"> Tipo de documento </label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tipoDocumentos\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipoDocumento\"\n            bindLabel=\"DOCUMENTO_NOME\"\n            bindValue=\"DOCUMENTO_TIPO\"\n            placeholder=\"Selecione...\"\n            formControlName=\"tipoDocumento\"\n            [ngClass]=\"onFieldError('tipoDocumento') + ' ' + onFieldRequired('tipoDocumento')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('tipoDocumento')\"\n            message=\"Tipo de documento é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"numeroNota\"> Número de nota fiscal </label>\n          <input\n            id=\"numeroNota\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"numeroNota\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"cnpjFatFin\"> CNPJ de faturamento (Fin) </label>\n          <input\n            id=\"cnpjFatFin\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cnpjFatFin\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"cnpjFatSup\"> CNPJ de faturamento (Sup) </label>\n          <input\n            id=\"cnpjFatSup\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cnpjFatSup\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"cnpjFor\"> CNPJ do fornecedor </label>\n          <input\n            id=\"cnpjFor\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cnpjFor\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"razaoFor\"> Razão social do fornecedor </label>\n          <input\n            id=\"razaoFor\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"razaoFor\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"formaPagamento\"> Forma de pagamento </label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"formasPagamento\"\n            [virtualScroll]=\"true\"\n            labelForId=\"formaPagamento\"\n            bindLabel=\"descFormaPagamento\"\n            bindValue=\"cdFormaPagamento\"\n            placeholder=\"Selecione...\"\n            formControlName=\"formaPagamento\"\n            [ngClass]=\"onFieldError('formaPagamento') + ' ' + onFieldRequired('formaPagamento')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('formaPagamento')\"\n            message=\"Forma de pagamento é obrigatório.\">\n          </invalid-form-control>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <!-- Início da Lista -->\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-6 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\">Nr. NF</th>\n            <th class=\"text-center\" scope=\"col\" style=\"width: 200px;\">Fornecedor</th>\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\">CNPJ Fornecedor</th>\n            <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\">Data Emissão</th>\n            <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\">Data Vencimento</th>\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\" [hidden]=\"showDetailPanel\">Valor Total</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\"\n              [ngClass]=\"lista.STATUS ?'bgRowTable' : ''\" (click)=\"openTab(i); clickEvent(lista)\" class=\"hover\">\n            <td class=\"text-center\">{{ lista.NUMERO_NF}}</td>\n            <td class=\"text-center\">{{ lista.NOME_FANTASIA_FORNECEDOR | uppercase}}</td>\n            <td class=\"text-center\">{{ lista.CNPJ_FORNECEDOR }}</td>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ lista.DATA_EMISSAO }}</td>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ lista.DATA_VENCIMENTO }}</td>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ lista.VALOR_TOTAL | currency:'BRL' }}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n    </div>\n    <!-- Início da tabela de informações -->\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"appTitle\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <label>Descrição Despesa</label>\n            <div class=\"text-nowrap\">{{ decricaoDes | uppercase }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Razão Social Fornecedor</label>\n            <div class=\"text-nowrap\">{{ razaoForn | uppercase }}</div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"col-7 px-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Razão Social Fat. (Fin)</label>\n                <div class=\"text-nowrap\">{{ razaoFatFin | uppercase }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Razão Social Fat.(Sup)</label>\n                <div class=\"text-nowrap\">{{ razaoFatSup | uppercase }}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-5 px-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-10\">\n                <label>CNPJ Fat. (Fin)</label>\n                <div class=\"text-nowrap\">{{ cnpjFatFin }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-10\">\n                <label>CNPJ Fat. (Sup)</label>\n                <div class=\"text-nowrap\">{{ cnpjFatSup }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"col-7 px-0\">\n            \n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Grupo</label>\n                <div class=\"text-nowrap\">{{ grupo }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Classe</label>\n                <div class=\"text-nowrap\">{{ classe }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Tipo Despesa</label>\n                <div class=\"text-nowrap\">{{ tipoDes}}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Tipo de Documento</label>\n                <div class=\"text-nowrap\">{{ tipoPag | uppercase }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Forma de Pagamento</label>\n                <div class=\"text-nowrap\">{{ formaPag | uppercase }}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-5 px-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Data Emissão</label>\n                <div class=\"text-nowrap\">{{ dtEmissao }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Data Vencimento</label>\n                <div class=\"text-nowrap\">{{ dtLiquid }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label class=\"text-nowrap\">Data Pagamento</label>\n                <div class=\"text-nowrap\">{{ dtPagamento }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Valor Total</label>\n                <div class=\"text-nowrap\">{{ valTotal | currency:'BRL' }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Banco/Caixa</label>\n                <div class=\"text-nowrap\">{{ bancoCaixa | uppercase }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Banco</label>\n                <div class=\"text-nowrap\">{{ banco | uppercase }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "P+YS":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/notas-fiscais-suprimentos/notas-fiscais-suprimentos.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FiscalRelatoriosNotasFiscaisSuprimentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosNotasFiscaisSuprimentosComponent", function() { return FiscalRelatoriosNotasFiscaisSuprimentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notas_fiscais_suprimentos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notas-fiscais-suprimentos.component.html */ "1sPZ");
/* harmony import */ var _notas_fiscais_suprimentos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas-fiscais-suprimentos.component.scss */ "v9F/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _notas_fiscais_suprimentos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notas-fiscais-suprimentos.service */ "xtjP");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");



// ANGULAR






// SERVICES







let FiscalRelatoriosNotasFiscaisSuprimentosComponent = class FiscalRelatoriosNotasFiscaisSuprimentosComponent {
    constructor(activatedRoute, xlsxService, formBuilder, route, notice, modalService, localeService, relatorioService, dateService, atividadesService, detailPanelService, routerService) {
        this.activatedRoute = activatedRoute;
        this.xlsxService = xlsxService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.notice = notice;
        this.modalService = modalService;
        this.localeService = localeService;
        this.relatorioService = relatorioService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.detailPanelService = detailPanelService;
        this.routerService = routerService;
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.data = new Date();
        this.tipoDocumentos = [];
        this.formasPagamento = [];
        this.noResult = false;
        this.noResultModal = false;
        this.listas = [];
        this.razaoFatSup = '';
        this.razaoFatFin = '';
        this.razaoForn = '';
        this.cnpjFatSup = '';
        this.cnpjFatFin = '';
        this.decricaoDes = '';
        this.grupo = '';
        this.classe = '';
        this.tipoDes = '';
        this.tipoPag = '';
        this.formaPag = '';
        this.dtEmissao = '';
        this.dtLiquid = '';
        this.dtPagamento = '';
        this.valTotal = '';
        this.bancoCaixa = '';
        this.banco = '';
        this.item = {};
        this.breadCrumbTree = [];
        this.compressedTable = false;
        this.dadosEmpty = false;
        this.appTitle = 'Detalhes';
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.config = {
            animated: true,
        };
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: false,
        };
        this.showDetailPanel = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            dataInicio: [this.dateService.getFirstDayMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFim: [this.data, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tipoDocumento: [null],
            numeroNota: [null],
            cnpjFatSup: [null],
            cnpjFatFin: [null],
            cnpjFor: [null],
            razaoFor: [null],
            formaPagamento: [null],
        });
    }
    ngOnInit() {
        this.onDetailPanel();
        this.setBreadCrumb();
        this.atividadesService.registrarAcesso().subscribe();
        this.relatorioService.getRelatorio().subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.tipoDocumentos = response;
            }
        });
        this.relatorioService.getFormaPagamento().subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.formasPagamento = response;
            }
        });
        this.getActiveRoute();
    }
    onDetailPanel() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            if (!this.showDetailPanel)
                this.listas.map((lista) => (lista.selected = false));
        });
    }
    ngOnDestroy() {
        this.$showDetailPanelSubscription.unsubscribe();
        this.$activateRoutedSubscription.unsubscribe();
    }
    getActiveRoute() {
        this.$activateRoutedSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            if (Object.keys(response).length > 0) {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
            }
            this.getLista(this.getParams());
        });
    }
    getParams() {
        let _params = {};
        const obj = this.form.value;
        for (let prop in obj) {
            if (obj[prop]) {
                if (prop == 'dataInicio' || prop == 'dataFim') {
                    _params[prop] =
                        obj[prop] instanceof Date
                            ? this.dateService.convertToUrlDate(obj[prop])
                            : obj[prop].substring(0, 10);
                }
                else {
                    _params[prop] = obj[prop];
                }
            }
        }
        return _params;
    }
    onFilter() {
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
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
    getLista(params, pagina = '1') {
        //this.totalItems = 0;
        this.spinnerFullScreen = true;
        let form = {};
        if (this.form.status === 'VALID') {
            this.relatorioService
                .getLista({
                params,
                pagina: pagina,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.spinnerFullScreen = false;
            }))
                .subscribe((response) => {
                if (response.status === 204) {
                    this.notice.notice('Não há informações.');
                    this.dadosEmpty = true;
                }
                else {
                    this.listas = response.body['data'];
                    this.listas.forEach((element, i) => {
                        element.INDICE = i + 1;
                    });
                    this.totalItems = response.body['qtItens'];
                    this.noResult = true;
                    this.showAdvancedFilter = true;
                }
            }, (error) => this.notice.error());
        }
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    onShowFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    openTab(i) {
        this.detailPanelService.show();
        let index = this.currentPage * this.itemsPerPage - this.itemsPerPage + i;
        this.razaoForn = this.listas[index].RAZAO_SOCIAL_FORNECEDOR;
        this.razaoFatSup = this.listas[index].RAZAO_SOCIAL_FATURAMENTO;
        this.razaoFatFin = this.listas[index].RAZAO_SOCIAL_CONTABIL;
        this.cnpjFatSup = this.listas[index].CNPJ_FATURAMENTO;
        this.cnpjFatFin = this.listas[index].CNPJ_CONTABIL;
        this.decricaoDes = this.listas[index].DESCRICAO_DESPESA;
        this.grupo = this.listas[index].GRUPO;
        this.classe = this.listas[index].CLASSE;
        this.tipoDes = this.listas[index].TIPO_DESPESA;
        this.tipoPag = this.listas[index].TIPO_PAGAMENTO;
        this.formaPag = this.listas[index].FORMA_PAGAMENTO;
        this.dtEmissao = this.listas[index].DATA_EMISSAO;
        this.dtLiquid = this.listas[index].DATA_VENCIMENTO;
        this.dtPagamento = this.listas[index].DATA_PAGAMENTO;
        this.valTotal = this.listas[index].VALOR_TOTAL;
        this.bancoCaixa = this.listas[index].BANCO_CAIXA;
        this.banco = this.listas[index].BANCO;
        this.compressedTable = true;
    }
    hideChildModal() {
        this.childModal.hide();
    }
    exportarExcel() {
        this.xlsxService.exportFile(this.listas, 'relatório');
    }
    /* setRouterParams(form: any) {
      this.route.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: form
      });
    } */
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((form) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/fiscal/home',
                },
                {
                    descricao: 'relatório de notas fiscais',
                },
            ];
        });
    }
    clickEvent(lista) {
        this.listas.forEach((element) => {
            if (element.INDICE != lista.INDICE) {
                element.STATUS = false;
            }
            else if (lista.STATUS == true) {
                lista.STATUS = true;
            }
            else {
                lista.STATUS = !lista.STATUS;
            }
            this.detailPanelService.loadedFinished(false);
        });
    }
};
FiscalRelatoriosNotasFiscaisSuprimentosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _notas_fiscais_suprimentos_service__WEBPACK_IMPORTED_MODULE_13__["FiscalRelatoriosNotasFiscaisSuprimentosService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"] }
];
FiscalRelatoriosNotasFiscaisSuprimentosComponent.propDecorators = {
    childModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['childModal', { static: false },] }]
};
FiscalRelatoriosNotasFiscaisSuprimentosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'notas-fiscais-suprimentos',
        template: _raw_loader_notas_fiscais_suprimentos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notas_fiscais_suprimentos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _notas_fiscais_suprimentos_service__WEBPACK_IMPORTED_MODULE_13__["FiscalRelatoriosNotasFiscaisSuprimentosService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"]])
], FiscalRelatoriosNotasFiscaisSuprimentosComponent);



/***/ }),

/***/ "qAgC":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/notas-fiscais-suprimentos/notas-fiscais-suprimentos.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NotasFiscaisSuprimentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasFiscaisSuprimentosModule", function() { return NotasFiscaisSuprimentosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _notas_fiscais_suprimentos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notas-fiscais-suprimentos-routing.module */ "tmA9");
/* harmony import */ var _notas_fiscais_suprimentos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notas-fiscais-suprimentos.component */ "P+YS");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");














let NotasFiscaisSuprimentosModule = class NotasFiscaisSuprimentosModule {
};
NotasFiscaisSuprimentosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_notas_fiscais_suprimentos_component__WEBPACK_IMPORTED_MODULE_7__["FiscalRelatoriosNotasFiscaisSuprimentosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _notas_fiscais_suprimentos_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotasFiscaisSuprimentosRoutingModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__["TemplatesModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__["TabsModule"].forRoot()
        ]
    })
], NotasFiscaisSuprimentosModule);



/***/ }),

/***/ "tmA9":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/notas-fiscais-suprimentos/notas-fiscais-suprimentos-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NotasFiscaisSuprimentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasFiscaisSuprimentosRoutingModule", function() { return NotasFiscaisSuprimentosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _notas_fiscais_suprimentos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notas-fiscais-suprimentos.component */ "P+YS");




const routes = [
    { path: '', component: _notas_fiscais_suprimentos_component__WEBPACK_IMPORTED_MODULE_3__["FiscalRelatoriosNotasFiscaisSuprimentosComponent"] }
];
let NotasFiscaisSuprimentosRoutingModule = class NotasFiscaisSuprimentosRoutingModule {
};
NotasFiscaisSuprimentosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotasFiscaisSuprimentosRoutingModule);



/***/ }),

/***/ "v9F/":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/notas-fiscais-suprimentos/notas-fiscais-suprimentos.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgRowTable {\n  background-color: #b6b8b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9maXNjYWwvcmVsYXRvcmlvcy9ub3Rhcy1maXNjYWlzLXN1cHJpbWVudG9zL25vdGFzLWZpc2NhaXMtc3VwcmltZW50b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9maXNjYWwvcmVsYXRvcmlvcy9ub3Rhcy1maXNjYWlzLXN1cHJpbWVudG9zL25vdGFzLWZpc2NhaXMtc3VwcmltZW50b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdSb3dUYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmI4Yjk7XG59XG4iXX0= */");

/***/ }),

/***/ "xtjP":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/notas-fiscais-suprimentos/notas-fiscais-suprimentos.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FiscalRelatoriosNotasFiscaisSuprimentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosNotasFiscaisSuprimentosService", function() { return FiscalRelatoriosNotasFiscaisSuprimentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let FiscalRelatoriosNotasFiscaisSuprimentosService = class FiscalRelatoriosNotasFiscaisSuprimentosService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getRelatorio() {
        return this.http.get(`${this.BASE_URL}/fiscal/relatorios/relatoriosNotasFiscais/documentos/tipos`);
    }
    getFormaPagamento() {
        return this.http.get(`${this.BASE_URL}/fiscal/relatorios/relatoriosNotasFiscais/pagamentos/formas`);
    }
    getLista(data) {
        return this.http.get(`${this.BASE_URL}/fiscal/relatorios/relatoriosNotasFiscais/suprimentos/notasFiscais`, {
            params: {
                dtInicial: data.params.dataInicio,
                dtFinal: data.params.dataFim,
                tipoDocumento: data.params.tipoDocumento
                    ? data.params.tipoDocumento
                    : null,
                numeroNota: data.params.numeroNota ? data.params.numeroNota : null,
                cnpjFatSup: data.params.cnpjFatSup ? data.params.cnpjFatSup : null,
                cnpjFatFin: data.params.cnpjFatFin ? data.params.cnpjFatFin : null,
                cnpjFor: data.params.cnpjFor ? data.params.cnpjFor : null,
                razaoFor: data.params.razaoFor ? data.params.razaoFor : null,
                formaPag: data.params.formaPagamento
                    ? data.params.formaPagamento
                    : null,
                pagina: data.pagina
            },
            observe: 'response'
        });
    }
};
FiscalRelatoriosNotasFiscaisSuprimentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FiscalRelatoriosNotasFiscaisSuprimentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FiscalRelatoriosNotasFiscaisSuprimentosService);



/***/ })

}]);
//# sourceMappingURL=notas-fiscais-suprimentos-notas-fiscais-suprimentos-module-es2015.js.map