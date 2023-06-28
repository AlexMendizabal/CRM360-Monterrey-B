(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peacao-peacao-module"],{

/***/ "Clhu":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/peacao/cadastro/cadastro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button>\r\n    <label for=\"file\" class=\"hover\">Importar</label>\r\n    <input type=\"file\" id=\"file\" style=\"display: none;\" (input)=\"getFile($event)\">\r\n  </button>\r\n  <button\r\n    [disabled]=\"count === 0\"\r\n    (click)=\"onSave()\"  \r\n  >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div [hidden]=\"(files.length == 0)\">\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th\r\n            [ngClass]=\"file?.checked ? 'border-left-green' : 'border-left-orange'\"\r\n            class=\"text-center\"\r\n          >\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"onToggleCheckAll()\"\r\n              class=\"btn-icon-sm\"\r\n            >\r\n              <div\r\n                class=\"fa-square\"\r\n                [ngClass]=\"checkAll ? 'fas text-success' : 'far'\"\r\n                style=\"font-size: 13px;\"\r\n              >\r\n              </div>\r\n            </button>\r\n          </th>\r\n          <th class=\"align-middle\" style=\"font-size: 13px;\">#</th>\r\n          <th class=\"align-middle\">Data</th>\r\n          <th class=\"align-middle\">Unidade</th>\r\n          <th class=\"align-middle\">Nº Ficha</th>\r\n          <th class=\"align-middle\">Tipo</th>\r\n          <th class=\"align-middle\">Valor</th>\r\n          <th></th>\r\n          <th\r\n            style=\"width: 5%\"\r\n            class=\"align-middle text-center\"\r\n          >\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"deleteAllElements()\"\r\n              tooltip=\"Excluir Todos\"\r\n              placement=\"left\"\r\n              container=\"body\"\r\n              class=\"btn-icon-sm\"\r\n            >\r\n              <i class=\"far fa-trash-alt text-danger\"></i>\r\n            </button>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let file of files | slice : begin : end; let i = index\">\r\n          <td\r\n            [ngClass]=\"file?.checked ? 'border-left-green' : 'border-left-orange'\"\r\n            style=\"width: 5%\"\r\n            class=\"text-center\"\r\n          >\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn-icon-sm\"\r\n              (click)=\"onToggleCheck(file)\"\r\n            >\r\n              <div\r\n                class=\"hover fa-square\"\r\n                [ngClass]=\"file?.checked ? 'fas text-success' : 'far'\"  \r\n              >\r\n              </div>\r\n            </button>\r\n          </td>\r\n          <td class=\"align-middle\" style=\"width: 40px;\"> {{ i + 1 }}</td>\r\n          <td class=\"align-middle\">{{ file[0] | date : 'dd/MM/yyyy'}}</td>\r\n          <td class=\"align-middle\">{{ file[1] }}</td>\r\n          <td class=\"align-middle\">{{ file[2]}}</td>\r\n          <td class=\"align-middle\">{{ file[3] }}</td>\r\n          <td class=\"align-middle\">{{ file[4] | currency : 'BRL' : 'symbol' : '1.2-2'}}</td>\r\n          <td class=\"align-middle\" style=\"width: 5%;\">\r\n            <div\r\n              *ngIf=\"file?.status == 2\"\r\n              tooltip=\"Integrado\"\r\n              placement=\"left\"\r\n              container=\"body\"\r\n            >\r\n              <i class=\"far fa-check-circle text-success\"></i>\r\n            </div>\r\n          </td>\r\n          <td class=\"align-middle text-center\" style=\"width: 5%\">  \r\n            <button\r\n              type=\"button\"\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Excluir\"\r\n              placement=\"left\"\r\n              container=\"body\"\r\n              (click)=\"deleteElement(i)\"\r\n            >\r\n              <i class=\"far fa-trash-alt text-danger\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div [hidden]=\"files.length != 0 && !loading\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

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

/***/ "Svm8":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/peacao/services/peacao.service.ts ***!
  \*********************************************************************/
/*! exports provided: LogisticaPeacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPeacaoService", function() { return LogisticaPeacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaPeacaoService = class LogisticaPeacaoService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    get(params) {
        return this.http.get(`${this.api}/logistica/peacao`, {
            params: params,
            observe: "response"
        });
    }
    post(params) {
        return this.http.post(`${this.api}/logistica/peacao`, params, { observe: "response" });
    }
    delete(id) {
        return this.http.delete(`${this.api}/logistica/peacao/${id}`, { observe: "response" });
    }
};
LogisticaPeacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaPeacaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaPeacaoService);



/***/ }),

/***/ "UZpT":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/peacao/cadastro/cadastro.component.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaPeacaoCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPeacaoCadastroComponent", function() { return LogisticaPeacaoCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "Clhu");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "yrqE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _services_peacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/peacao.service */ "Svm8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



//angular

//services




//rxjs

let LogisticaPeacaoCadastroComponent = class LogisticaPeacaoCadastroComponent {
    constructor(xlsxService, pnotifyService, confirmModalService, logisticaPeacaoService) {
        this.xlsxService = xlsxService;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.logisticaPeacaoService = logisticaPeacaoService;
        this.appTitle = "Cadastro";
        this.breadCrumbTree = [];
        this.checkAll = false;
        this.files = [];
        this.headers = [];
        this.save = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.count = 0;
        this.blocked = false;
        this.tableConfig = {
            subtitleBorder: true
        };
    }
    ngOnInit() {
        this.fileSubscription();
        this.setBreadCrumb();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'Peação',
                routerLink: './../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    fileSubscription() {
        this.xlsxService
            .fileLoaded
            .subscribe((files) => {
            this.files = [];
            this.loading = false;
            const header = files[0];
            const expectedHeader = ["Data", "Unidade", "Nº da Ficha", "Tipo", "Valor"];
            if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
                this.pnotifyService.error('Arquivo inválido.');
                return;
            }
            files.shift();
            files.map((file) => {
                if (Number.isInteger(file[0])) {
                    file[0] = new Date(Math.floor((file[0] - 25569 + 0.125) * 86400 * 1000));
                    this.files.push(file);
                }
                else {
                    if (file.length === 0)
                        return;
                    const _current = file[0].toString().trim();
                    if (!/^\d{2}\/\d{2}\/\d{4}$/g.test(_current)) {
                        this.pnotifyService.error('Há data inválida no arquivo.');
                        throw new Error(`Invalid date: ${_current}`);
                    }
                    const [day, month, year] = _current.split('/');
                    const date = new Date(year, month, day);
                    file[0] = date;
                    this.files.push(file);
                }
            });
        });
    }
    getFile($event) {
        const files = $event.target.files;
        if (files.length === 0)
            return;
        this.loading = true;
        this.xlsxService
            .getFile($event);
    }
    deleteElement(index) {
        const type = 'delete';
        const title = 'Confirmar remoção do registro?';
        const message = 'Deseja realmente excluir o registro? Ele será excluído somente desta listagem.';
        const cancelTxt = 'Cancelar';
        const okTxt = 'Confirmar';
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .subscribe((success) => {
            if (success) {
                this.files.splice(index, 1);
                this.pnotifyService.success();
            }
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    deleteAllElements() {
        const type = 'delete';
        const title = 'Confirmar remoção de todos os registros?';
        const message = 'Deseja realmente excluir todos os registros?';
        const cancelTxt = 'Cancelar';
        const okTxt = 'Confirmar';
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .subscribe((success) => {
            if (success) {
                this.files = [];
                this.pnotifyService.success();
            }
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    onToggleCheck(file) {
        file["checked"] = !file["checked"];
        let count = 0;
        let checkAll = true;
        this.files.forEach(element => {
            if (element['checked']) {
                count++;
            }
            else {
                checkAll = false;
            }
        });
        this.count = count;
        this.checkAll = checkAll;
    }
    onToggleCheckAll() {
        this.checkAll = !this.checkAll;
        this.files.forEach(element => {
            element.checked = this.checkAll;
        });
        this.count = this.checkAll ? this.files.length : 0;
    }
    onSave() {
        this.loading = true;
        let params = [];
        this.files.map((file, index) => {
            if (file["checked"]) {
                params.push(file);
                this.files[index]['status'] == 1;
            }
            else {
                this.files[index]['status'] == 0;
            }
        });
        this.logisticaPeacaoService
            .post(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                let items = response.body["data"];
                items.map((item) => {
                    const current = item["data"];
                    this.files.map((element, index) => {
                        if ((element[1] == current[1]) && (element[2] == current[2])) {
                            this.files[index]['status'] = 2;
                            this.blocked = true;
                        }
                    });
                });
            }
        }, (error) => {
            this.pnotifyService.error();
            this.save = false;
        });
    }
};
LogisticaPeacaoCadastroComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"] },
    { type: _services_peacao_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaPeacaoService"] }
];
LogisticaPeacaoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-peacao-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"],
        _services_peacao_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaPeacaoService"]])
], LogisticaPeacaoCadastroComponent);



/***/ }),

/***/ "Vyun":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/peacao/lista/lista.component.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaPeacaoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPeacaoListaComponent", function() { return LogisticaPeacaoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "bmOz");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "gdhD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_peacao_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/peacao.service */ "Svm8");
/* harmony import */ var _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/steellog.service */ "8L2n");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/admin/perfis/services/perfis.service */ "6bs2");



//angular



//ngx


//services








let LogisticaPeacaoListaComponent = class LogisticaPeacaoListaComponent {
    constructor(formBuilder, activatedRoute, route, routerService, localeService, dateService, atividadesService, pnotify, logisticaPeacaoService, steelLogService, confirmModalService, perfilService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.routerService = routerService;
        this.localeService = localeService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.logisticaPeacaoService = logisticaPeacaoService;
        this.steelLogService = steelLogService;
        this.confirmModalService = confirmModalService;
        this.perfilService = perfilService;
        this.appTitle = "Peação";
        this.breadCrumbTree = [];
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Pagination */
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
        this.items = [];
        this.empresas = [];
        /*loading*/
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = true;
        this.tableConfig = {
            subtitleBorder: true
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getEmpresas();
        this.verificaPerfil();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0)
                this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response['TT_REGI_PAGI'];
            this.getDadosPeacao(this.getParams());
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID: [null],
            CD_EMPR: [null],
            CD_FICH: [null],
            VL_TOTA: [null],
            DS_TIPO: [null],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            TT_REGI_PAGI: [100],
            PAGI: [1],
            TIME: [(new Date()).getTime()]
        });
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getEmpresas() {
        this.steelLogService
            .getEmpresas()
            .subscribe(response => {
            if (response.status === 200) {
                this.empresas = response.body['data'];
            }
        });
    }
    getDadosPeacao(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.logisticaPeacaoService
            .get(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.items = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.items = [];
                this.noResult = true;
                this.pnotify.notice('Nenhum resultado para sua consulta.');
            }
        }, error => {
            this.items = [];
            this.noResult = true;
            this.pnotify.error();
        });
    }
    delete(pedagio, index) {
        this.loadingNavBar = true;
        this.logisticaPeacaoService
            .delete(pedagio.ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            this.items.splice(index, 1);
            this.pnotify.success();
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onConfirmDelete(pedagio, index) {
        const type = 'delete';
        const title = 'Confirmar remoção do registro?';
        const message = 'Deseja realmente excluir o registro?';
        const cancelTxt = 'Cancelar';
        const okTxt = 'Confirmar';
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .subscribe((success) => {
            if (success) {
                this.delete(pedagio, index);
            }
        });
    }
    setItensPerPage(ev) {
        this.itemsPerPage = ev;
        return this.itemsPerPage;
    }
    /* Paginação */
    onPageChanged(event) {
        this.form.get("PAGI").setValue(event.page);
        this.onSearch();
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
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
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
    verificaPerfil() {
        const matricula = (JSON.parse(localStorage.getItem("currentUser")))["info"]["matricula"];
        this.inAcessoExcluir = false;
        this.perfilService
            .getPerfil({ sigla: "LOGI_PEAC_ACES_EXCL", matricula: matricula })
            .subscribe((response) => {
            if (response.status === 200) {
                this.inAcessoExcluir = true;
            }
        });
    }
    onReset() {
        this.form.reset();
    }
};
LogisticaPeacaoListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _services_peacao_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaPeacaoService"] },
    { type: _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaSteellogService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"] },
    { type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__["AdminPerfisService"] }
];
LogisticaPeacaoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-peacao-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _services_peacao_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaPeacaoService"],
        _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaSteellogService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"],
        src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__["AdminPerfisService"]])
], LogisticaPeacaoListaComponent);



/***/ }),

/***/ "bmOz":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/peacao/lista/lista.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n  <button [routerLink]=\"['./novo']\">\r\n    Novo\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtInicial\">Data inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Digite...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtFinal\">Data Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Digite...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"empresas\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"empresa\"\r\n            bindLabel=\"NM_FANT\"\r\n            bindValue=\"CD_EMPR\"\r\n            id=\"empresa\"\r\n            (change)=\"onSearch()\"\r\n            formControlName=\"CD_EMPR\"\r\n            placeholder=\"Selecione...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"pedido\">Código da ficha</label>\r\n          <input\r\n            id=\"pedido\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"CD_FICH\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label >Tipo do transporte</label>\r\n          <input\r\n            id=\"pedido\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"DS_TIPO\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"itensPorPagina\">Registros</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            (change)=\"setItensPerPage($event.target.value); onSearch()\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\">Lançamento</th>\r\n            <th class=\"text-center\">Código da Empresa</th>\r\n            <th class=\"text-center\">Código da Ficha</th>\r\n            <th class=\"text-center\">Valor</th>\r\n            <th class=\"text-center\">Tipo do Transporte</th>\r\n            <th class=\"text-center\">Data de referência</th>\r\n            <th class=\"text-center\">Responsável</th>\r\n            <th class=\"text-center\">Data do cadastro</th>\r\n            <th *ngIf=\"inAcessoExcluir\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>  \r\n          <tr *ngFor=\"let item of items; let i = index\">\r\n            <td class=\"text-center\">{{ item.ID | number: '3.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.CD_EMPR }}</td>\r\n            <td class=\"text-center\">{{ item.CD_FICH }}</td>\r\n            <td class=\"text-center\">{{ item.VL_TOTA | currency : 'BRL' }}</td>\r\n            <td class=\"text-center\">{{ item.DS_TIPO }}</td>\r\n            <td class=\"text-center\">{{ item.DT_REFE | date : 'dd/MM/yyyy'}}</td>\r\n            <td class=\"text-center\">{{ item.NM_USUA }}</td>\r\n            <td class=\"text-center\">{{ item.DT_INCL | date : 'dd/MM/yyyy'}}</td>\r\n            <td\r\n              class=\"align-middle text-center\"\r\n              style=\"width: 5%\"\r\n              *ngIf=\"inAcessoExcluir\"\r\n            >  \r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Excluir\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n                (click)=\"onConfirmDelete(item, i)\"\r\n              >\r\n                <i class=\"far fa-trash-alt text-danger\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "fsvQ":
/*!***********************************************************!*\
  !*** ./src/app/modules/logistica/peacao/peacao.module.ts ***!
  \***********************************************************/
/*! exports provided: LogisticaPeacaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPeacaoModule", function() { return LogisticaPeacaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "lQde");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lista/lista.component */ "Vyun");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "UZpT");
/* harmony import */ var _peacao_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./peacao-routing.module */ "qICF");





// ngx-bootstrap



















let LogisticaPeacaoModule = class LogisticaPeacaoModule {
};
LogisticaPeacaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaPeacaoListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaPeacaoCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _peacao_routing_module__WEBPACK_IMPORTED_MODULE_23__["LogisticaPeacaoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["SortableModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_20__["NotFoundModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["TemplatesModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
            ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__["CurrencyMaskModule"]
        ]
    })
], LogisticaPeacaoModule);



/***/ }),

/***/ "gdhD":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/peacao/lista/lista.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3BlYWNhby9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qICF":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/peacao/peacao-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaPeacaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPeacaoRoutingModule", function() { return LogisticaPeacaoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "Vyun");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "UZpT");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaPeacaoListaComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaPeacaoCadastroComponent"]
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
let LogisticaPeacaoRoutingModule = class LogisticaPeacaoRoutingModule {
};
LogisticaPeacaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaPeacaoRoutingModule);



/***/ }),

/***/ "yrqE":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/peacao/cadastro/cadastro.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-left-green {\n  border-left-color: green;\n}\n\n.border-left-orange {\n  border-left-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcGVhY2FvL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9wZWFjYW8vY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLWxlZnQtZ3JlZW57XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYm9yZGVyLWxlZnQtb3Jhbmdle1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBvcmFuZ2U7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=peacao-peacao-module-es2015.js.map