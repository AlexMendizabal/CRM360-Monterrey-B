(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reenvio-xml-reenvio-xml-module"],{

/***/ "30Te":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/reenvio-xml/lista/lista.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Reenvio de XML\">\n  <button\n    type=\"button\"\n    (click)=\"onReagendarEnvio()\"\n    [disabled]=\"!showDetailPanel\">\n    Reagendar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"!formFilter.valid\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center mb-2\">\n    <div class=\"col-md-5\">\n      <ul class=\"list-unstyled mb-0 d-flex justify-content-around\">\n        <li class=\"text-center px-3\">\n          <h6 class=\"text-muted font-weight-light\">Total de envios</h6>\n          <div class=\"text-success\">\n            <h4>\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"enviosTotal\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoEnviosTotal = $event\">\n                {{ handleCounter(countoEnviosTotal) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n        <li class=\"text-center px-3\">\n          <h6 class=\"text-muted font-weight-light\">Envios no mês</h6>\n          <div class=\"text-primary\">\n            <h4>\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"mes\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoMes = $event\">\n                {{ handleCounter(countoMes) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n        <li class=\"text-center px-3\">\n          <h6 class=\"text-muted font-weight-light\">Último envio</h6>\n          <div class=\"text-secondary\">\n            <h4 class=\"d-flex justify-content-center\">\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"horaUltimoEnvio\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoHoraUltimoEnvio = $event\">\n                {{ handleCounterHorario(countoHoraUltimoEnvio) }}\n              </strong>\n              :\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"minutosUltimoEnvio\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoMinutosUltimoEnvio = $event\">\n                {{ handleCounterHorario(countoMinutosUltimoEnvio) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <advanced-filter>\n    <form [formGroup]=\"formFilter\" autocomplete=\"new-password\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"codEmpresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"empresas\"\n            formControlName=\"codEmpresa\"\n            [virtualScroll]=\"true\"\n            labelForId=\"codEmpresa\"\n            bindLabel=\"nomeEmpresa\"\n            bindValue=\"idEmpresa\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"numNota\">Número da NF</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"numNota\"\n            autocomplete=\"new-password\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col-12': !showDetailPanel, 'col-7 pr-0': showDetailPanel}\">\n      <custom-table *ngIf=\"notasFiscais.length > 0 && !dataEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th style=\"width: 5%;\" scope=\"col\"></th>\n            <th style=\"width: 15%;\" scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Unidade</th>\n            <th style=\"width: 10%;\" scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Enviado em</th>\n            <th style=\"width: 10%;\" scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Faturado em</th>\n            <th style=\"width: 15%;\" scope=\"col\" class=\"text-center\">Pedido / Nota</th>\n            <th style=\"width: 20%;\" scope=\"col\" class=\"text-center\">Cliente</th>\n            <th style=\"width: 25%;\" scope=\"col\" class=\"text-center\">Vendedor</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let notaFiscal of notasFiscais\" [class.table-active]=\"notaFiscal.pedido == pedido\">\n            <td class=\"text-center\">\n              <i\n                class=\"text-black-50 fas fa-envelope mr-3\"\n                *ngIf=\"notaFiscal.enviado == 1\"\n                tooltip=\"E-mail enviado\"\n                placement=\"right\">\n              </i>\n              <i\n                class=\"text-warning far fa-envelope mr-3\"\n                *ngIf=\"notaFiscal.enviado == 0\"\n                tooltip=\"E-mail reagendado\"\n                placement=\"right\">\n              </i>\n            </td>\n            <td\n              class=\"text-center hover\"\n              (click)=\"viewDetails(notaFiscal)\"\n              [hidden]=\"showDetailPanel\">\n              {{ notaFiscal.empresa }}\n            </td>\n            <td\n              class=\"text-center hover\"\n              (click)=\"viewDetails(notaFiscal)\"\n              [hidden]=\"showDetailPanel\">\n              {{ notaFiscal.dtEnvio | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center hover\"\n              (click)=\"viewDetails(notaFiscal)\"\n              [hidden]=\"showDetailPanel\">\n              {{ notaFiscal.dtFaturamento | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center hover\"\n              (click)=\"viewDetails(notaFiscal)\">\n              {{ notaFiscal.pedido | number:'1.0-0' }} / {{ notaFiscal.numNfe | number:'1.0-0' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              (click)=\"viewDetails(notaFiscal)\">\n              {{ notaFiscal.nomeFantasia }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              (click)=\"viewDetails(notaFiscal)\">\n              {{ notaFiscal.nomeVendedor }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        class=\"my-3\"\n        message=\"Nenhuma informação encontrada\"\n        *ngIf=\"dataEmpty\">\n      </empty-result>\n    </div>\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Dados para envio\">\n        <form [formGroup]=\"formReagendar\" autocomplete=\"off\">\n          <div class=\"border-right border-left border-bottom\">\n            <div class=\"px-3 py-2\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-10\">\n                  <label for=\"email1\">E-mail NFe</label>\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email1\"\n                    formControlName=\"email1\">\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    (click)=\"onEditEmail('email1')\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    (click)=\"onDeleteEmail('email1')\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\"><hr class=\"m-0\"></div>\n            </div>\n            <div class=\"px-3 py-2\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-10\">\n                  <label for=\"email2\">E-mail NFe</label>\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email2\"\n                    formControlName=\"email2\">\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    (click)=\"onEditEmail('email2')\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    (click)=\"onDeleteEmail('email2')\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\"><hr class=\"m-0\"></div>\n            </div>\n            <div class=\"px-3 py-2\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-10\">\n                  <label for=\"email3\">E-mail NFe</label>\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email3\"\n                    formControlName=\"email3\">\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    (click)=\"onEditEmail('email3')\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    (click)=\"onDeleteEmail('email3')\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "8reE":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/reenvio-xml/reenvio-xml.service.ts ***!
  \**********************************************************************/
/*! exports provided: ComercialReenvioXmlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialReenvioXmlService", function() { return ComercialReenvioXmlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialReenvioXmlService = class ComercialReenvioXmlService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/reenvio-xml`;
    }
    getContadores() {
        return this.http.get(`${this.API}/contadores`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getLista(params) {
        return this.http
            .get(`${this.API}/lista/${params['codEmpresa']}/${params['numNota']}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    putReagendarEnvio(record) {
        return this.http.put(`${this.API}/reagendar-envio`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialReenvioXmlService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialReenvioXmlService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialReenvioXmlService);



/***/ }),

/***/ "HxjB":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comercial/reenvio-xml/reenvio-xml-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ComercialReenvioXmlRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialReenvioXmlRoutingModule", function() { return ComercialReenvioXmlRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "N7fM");



// Components

const routes = [
    { path: '', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialReenvioXmlListaComponent"] }
];
let ComercialReenvioXmlRoutingModule = class ComercialReenvioXmlRoutingModule {
};
ComercialReenvioXmlRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialReenvioXmlRoutingModule);



/***/ }),

/***/ "N7fM":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/reenvio-xml/lista/lista.component.ts ***!
  \************************************************************************/
/*! exports provided: ComercialReenvioXmlListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialReenvioXmlListaComponent", function() { return ComercialReenvioXmlListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "30Te");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "OHWq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _reenvio_xml_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reenvio-xml.service */ "8reE");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");








// Services






let ComercialReenvioXmlListaComponent = class ComercialReenvioXmlListaComponent {
    constructor(activatedRoute, router, location, reenvioXMLService, formBuilder, pnotifyService, atividadesService, titleService, comercialService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.reenvioXMLService = reenvioXMLService;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.comercialService = comercialService;
        this.detailPanelService = detailPanelService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Reenvio de XML'
            }
        ];
        this.showDetailPanel = false;
        this.enviosTotal = 0;
        this.mes = 0;
        this.ultimo = 0;
        this.ultimoEnvio = 0;
        this.horaUltimoEnvio = 0;
        this.minutosUltimoEnvio = 0;
        this.empresas = [];
        this.notasFiscais = [];
        this.dataLoaded = false;
        this.dataEmpty = false;
        this.searchSubmitted = false;
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getFiltros();
        this.setFormFilter();
        this.setFormReagendar();
        this.listCounts();
        this.titleService.setTitle('Reenvio de XML');
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.showDetailPanelSubscription.unsubscribe();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            if (this.showDetailPanel === false) {
                this.onCloseDetailPanel();
            }
        });
    }
    getFiltros() {
        this.comercialService
            .getEmpresas({ tipo: 'search', idEmpresa: '4,6,18,55,79,77,83' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.empresas = response.result;
                    this.empresas.unshift({
                        idEmpresa: 0,
                        nomeEmpresa: 'EXIBIR TODOS'
                    });
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.formFilter = this.formBuilder.group({
            codEmpresa: [formValue.codEmpresa, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numNota: [formValue.numNota, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    setFormReagendar() {
        this.formReagendar = this.formBuilder.group({
            email1: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            email2: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            email3: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
    }
    checkRouterParams() {
        let formValue = {
            codEmpresa: null,
            numNota: null
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(queryParams => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.setSubmittedSearch();
                this.search(params);
                Object.keys(formValue).forEach(formKey => {
                    Object.keys(params).forEach(paramKey => {
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
    listCounts() {
        this.reenvioXMLService.getContadores().subscribe((response) => {
            if (response.responseCode === 200) {
                this.enviosTotal = response.result.totalEnvios;
                this.mes = response.result.enviosMes;
                let ultimoEnvio = response.result.ultimoEnvio.split(':');
                this.horaUltimoEnvio = ultimoEnvio[0];
                this.minutosUltimoEnvio = ultimoEnvio[1];
            }
        });
    }
    handleCounter(value) {
        return value.toFixed(0);
    }
    handleCounterHorario(value) {
        value = value.toFixed(0);
        if (value < 10) {
            value = `0${value}`;
        }
        return value;
    }
    onFilter() {
        this.setRouterParams(this.formFilter.value);
        this.setSubmittedSearch();
    }
    search(params) {
        if (this.searchSubmitted) {
            this.loaderNavbar = true;
            this.dataLoaded = false;
            this.dataEmpty = false;
            this.detailPanelService.hide();
            this.notaFiscal = [];
            this.reenvioXMLService
                .getLista(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderNavbar = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response.responseCode === 200) {
                        if (Object.keys(response.result).length > 0) {
                            this.notasFiscais = response.result;
                            this.dataLoaded = true;
                        }
                        else {
                            this.dataEmpty = true;
                        }
                    }
                    else if (response.responseCode === 206) {
                        this.pnotifyService.notice('Nota fiscal não faz parte dos seus clientes.');
                        this.dataEmpty = true;
                    }
                    else if (response.responseCode === 204) {
                        this.dataEmpty = true;
                    }
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao carregar dados');
                }
            });
        }
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) }
        });
        this.setSubmittedSearch();
        this.search(params);
    }
    setSubmittedSearch() {
        this.searchSubmitted = true;
    }
    viewDetails(notaFiscal) {
        if (notaFiscal.enviado == 1 ||
            (notaFiscal.enviado == 0 &&
                notaFiscal.contatos.email1 == '' &&
                notaFiscal.contatos.email2 == '' &&
                notaFiscal.contatos.email3 == '')) {
            this.detailPanelService.loadedFinished(false);
            this.notaFiscal = notaFiscal;
            this.pedido = notaFiscal.pedido;
            this.formReagendar.controls.email1.setValue(notaFiscal.contatos.email1);
            this.formReagendar.controls.email2.setValue(notaFiscal.contatos.email2);
            this.formReagendar.controls.email3.setValue(notaFiscal.contatos.email3);
        }
        else {
            this.pnotifyService.notice('Essa nota fiscal já foi reagendada.');
        }
    }
    onEditEmail(field) {
        this.formReagendar.controls[field].enable();
    }
    onDeleteEmail(field) {
        this.formReagendar.controls[field].setValue(null);
    }
    onCloseDetailPanel() {
        this.notaFiscal = [];
        this.pedido = null;
        this.formReagendar.controls.email1.setValue(null);
        this.formReagendar.controls.email2.setValue(null);
        this.formReagendar.controls.email3.setValue(null);
    }
    checkValidatorsReagendamento() {
        let validation = true;
        if ((this.formReagendar.value.email1 == '' ||
            this.formReagendar.value.email1 == null) &&
            (this.formReagendar.value.email2 == '' ||
                this.formReagendar.value.email2 == null) &&
            (this.formReagendar.value.email3 == '' ||
                this.formReagendar.value.email3 == null)) {
            validation = false;
        }
        return validation;
    }
    onReagendarEnvio() {
        if (!this.checkValidatorsReagendamento()) {
            this.pnotifyService.notice('Informe pelo menos um e-mail.');
            return;
        }
        if (this.formReagendar.valid) {
            this.loaderNavbar = true;
            const formObj = this.formReagendar.getRawValue();
            this.reenvioXMLService
                .putReagendarEnvio({
                idEmpresa: this.notaFiscal.idEmpresa,
                pedido: this.notaFiscal.pedido,
                email1: formObj.email1,
                email2: formObj.email2,
                email3: formObj.email3
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderNavbar = false;
                this.search({
                    codEmpresa: this.notaFiscal.idEmpresa,
                    numNota: this.notaFiscal.numNfe
                });
            }))
                .subscribe({
                next: (response) => {
                    if (response.responseCode === 200) {
                        this.pnotifyService.success('O envio do e-mail foi reagendado.');
                    }
                    else {
                        this.pnotifyService.error('Ocorreu um erro ao reagendar o envio.');
                    }
                },
                error: (error) => {
                    this.pnotifyService.error('Ocorreu um erro ao reagendar o envio.');
                }
            });
        }
    }
};
ComercialReenvioXmlListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _reenvio_xml_service__WEBPACK_IMPORTED_MODULE_9__["ComercialReenvioXmlService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] }
];
ComercialReenvioXmlListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-reenvio-xml-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _reenvio_xml_service__WEBPACK_IMPORTED_MODULE_9__["ComercialReenvioXmlService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])
], ComercialReenvioXmlListaComponent);



/***/ }),

/***/ "OHWq":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/reenvio-xml/lista/lista.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlZW52aW8teG1sL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VgqD":
/*!********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.service.ts ***!
  \********************************************************/
/*! exports provided: ComercialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialService", function() { return ComercialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialService = class ComercialService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial`;
    }
    getEmpresas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/empresas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDepositos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/depositos`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClasses(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/classes`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialService);



/***/ }),

/***/ "lsOu":
/*!*********************************************************************!*\
  !*** ./src/app/modules/comercial/reenvio-xml/reenvio-xml.module.ts ***!
  \*********************************************************************/
/*! exports provided: ComercialReenvioXmlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialReenvioXmlModule", function() { return ComercialReenvioXmlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _reenvio_xml_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reenvio-xml-routing.module */ "HxjB");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lista/lista.component */ "N7fM");




// ngx-bootstrap

// ng-select

// Counto

// PNotify

// Modules



// Components

let ComercialReenvioXmlModule = class ComercialReenvioXmlModule {
};
ComercialReenvioXmlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_11__["ComercialReenvioXmlListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_6__["CountoModule"],
            _reenvio_xml_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComercialReenvioXmlRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]]
    })
], ComercialReenvioXmlModule);



/***/ })

}]);
//# sourceMappingURL=reenvio-xml-reenvio-xml-module-es2015.js.map