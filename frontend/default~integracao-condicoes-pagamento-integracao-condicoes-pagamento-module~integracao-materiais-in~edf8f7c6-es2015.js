(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~integracao-condicoes-pagamento-integracao-condicoes-pagamento-module~integracao-materiais-in~edf8f7c6"],{

/***/ "1gQg":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/templates/material-principal/material-principal.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2RhZ2RhL3RlbXBsYXRlcy9tYXRlcmlhbC1wcmluY2lwYWwvbWF0ZXJpYWwtcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Dpyy":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/templates/material-principal/material-principal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent", function() { return ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./material-principal.component.html */ "m9Mb");
/* harmony import */ var _material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-principal.component.scss */ "1gQg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");
/* harmony import */ var _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/associacao-materiais.service */ "Yaq/");






// Services



let ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent = class ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent {
    constructor(formBuilder, pnotifyService, comercialService, service) {
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.comercialService = comercialService;
        this.service = service;
        this.linhas = [];
        this.classes = [];
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.materialPrincipal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.filteredClasses = [];
        this.materiais = [];
        this.searching = false;
        this.firstSearch = false;
        this.materiaisLista = [];
        this.materiaisListaLoaded = false;
        this.materiaisListaEmpty = false;
        this.codMaterialSelecionado = null;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    ngOnChanges(events) {
        if (events.limparMaterialSelecionado &&
            events.limparMaterialSelecionado.currentValue === true) {
            this.setMaterialSelecionado(null);
        }
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    onFilter() {
        if (this.form.valid) {
            this.loaderNavbar.emit(true);
            this.searching = true;
            this.materiaisLista = [];
            this.materiaisListaLoaded = false;
            this.materiaisListaEmpty = false;
            let params = {
                codClasse: this.form.value.codClasse,
                tipoMaterial: 'Distribuidora',
            };
            if (this.form.value.codMaterial !== 0) {
                Object.assign(params, {
                    codMaterial: this.form.value.codMaterial,
                    tipoMaterial: 'Distribuidora',
                });
            }
            this.service
                .getMateriaisTid(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.firstSearch = true;
                this.searching = false;
                this.loaderNavbar.emit(false);
                this.materiaisListaLoaded = true;
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.materiaisLista = response.data;
                        if (this.materiaisLista.length > 9) {
                            this.tableConfigMateriais.fixedHeader = true;
                        }
                        else {
                            this.tableConfigMateriais.fixedHeader = false;
                        }
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false &&
                        response.hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(response.mensagem);
                        this.materiaisListaEmpty = true;
                    }
                    else {
                        this.pnotifyService.error();
                        this.materiaisListaEmpty = true;
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                },
            });
        }
    }
    onCheckMaterial(material) {
        this.setMaterialSelecionado(material.codigoMaterial);
        this.materialPrincipal.emit(material);
    }
    setMaterialSelecionado(codMaterial) {
        this.codMaterialSelecionado = codMaterial;
    }
    onChangeLinha(codLinha) {
        this.form.controls.codClasse.reset();
        this.form.controls.codClasse.setValue(null);
        this.form.controls.codClasse.enable();
        this.form.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.form.controls.codClasse.updateValueAndValidity();
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.disable();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.filteredClasses = this.classes.filter((value) => value.idLinha == codLinha);
    }
    onChangeClasse(codClasse) {
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.enable();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.getMateriais(codClasse);
    }
    getMateriais(codClasse) {
        if (typeof codClasse !== 'undefined' && codClasse !== null) {
            this.materiaisLoader = true;
            this.materiais = [];
            this.service
                .getMateriaisTid({
                codClasse: codClasse,
                tipoMaterial: 'Distribuidora',
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.materiaisLoader = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response.success === true) {
                        this.materiais = response.data;
                        this.materiais.unshift({
                            codigoMaterial: 0,
                            codigoDescricaoMaterial: 'EXIBIR TODOS',
                        });
                        this.form.controls.codMaterial.setValue(0);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                },
            });
        }
    }
};
ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"] },
    { type: _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"] }
];
ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent.propDecorators = {
    linhas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['linhas',] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['classes',] }],
    limparMaterialSelecionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['limparMaterialSelecionado',] }],
    loaderNavbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['loaderNavbar',] }],
    materialPrincipal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['materialPrincipal',] }]
};
ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracao_dagda-materiais-templates-material-principal',
        template: _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"],
        _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]])
], ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent);



/***/ }),

/***/ "EaA3":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/templates/templates.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ComercialIntegracoesDagdaMateriaisTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaMateriaisTemplatesModule", function() { return ComercialIntegracoesDagdaMateriaisTemplatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-principal/material-principal.component */ "Dpyy");




// ng-select

// Modules


// Components
let ComercialIntegracoesDagdaMateriaisTemplatesModule = class ComercialIntegracoesDagdaMateriaisTemplatesModule {
};
ComercialIntegracoesDagdaMateriaisTemplatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"],
        ],
        exports: [
            _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent"],
        ],
    })
], ComercialIntegracoesDagdaMateriaisTemplatesModule);



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

/***/ "Yaq/":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/dagda/services/associacao-materiais.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialIntegracoesServicosIntegracaoMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesServicosIntegracaoMateriaisComponent", function() { return ComercialIntegracoesServicosIntegracaoMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tid-software/tid-software.service */ "zN97");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let ComercialIntegracoesServicosIntegracaoMateriaisComponent = class ComercialIntegracoesServicosIntegracaoMateriaisComponent {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
        this.API = `https://crm360.monterrey.com.bo/api/comercial`;
    }
    getAssociacao(param) {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/dagda/associacao`, {
            params: param,
            observe: 'response',
        });
    }
    getDetalhes(param) {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/dagda/detalhes`, {
            params: param,
            observe: 'response',
        });
    }
    getLinhas() {
        return this.http.get(`${this.BASE_URL}/common/v2/linhas`, {
            observe: 'response',
        });
    }
    getClasses(param) {
        return this.http.get(`${this.BASE_URL}/common/v2/classes`, {
            params: param,
            observe: 'response',
        });
    }
    getMateriais(param) {
        return this.http.get(`${this.BASE_URL}/common/v2/materiais`, {
            params: param,
            observe: 'response',
        });
    }
    onSubmit(param) {
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
    getMateriaisDagda(param) {
        return this.http.get(`${this.BASE_URL}/comercial/integracoes/dagda/materiais-dagda`, {
            params: param,
            observe: 'response',
        });
    }
    getFilterValues() {
        const linhas = this.tidSoftwareService.getLinhas();
        const classes = this.comercialService.getClasses(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([linhas, classes]);
    }
    getMateriaisTid(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialIntegracoesServicosIntegracaoMateriaisComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"] }
];
ComercialIntegracoesServicosIntegracaoMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"]])
], ComercialIntegracoesServicosIntegracaoMateriaisComponent);



/***/ }),

/***/ "m9Mb":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/templates/material-principal/material-principal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2\">\r\n  <div class=\"col mt-auto\">\r\n    <div class=\"mtc-title mb-0\">Pesquisar material principal</div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"d-flex justify-content-end\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-sm btn-outline-secondary\"\r\n        (click)=\"onFilter()\"\r\n        [disabled]=\"searching === true\">\r\n        <i class=\"fas fa-search\"></i>\r\n        <span>Pesquisar</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-6\">\r\n        <label for=\"codLinha\">Linha</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"linhas\"\r\n          formControlName=\"codLinha\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"codLinha\"\r\n          bindLabel=\"descricao\"\r\n          bindValue=\"id\"\r\n          (change)=\"onChangeLinha($event.id)\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\">\r\n        <label for=\"codClasse\">Classe</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"filteredClasses\"\r\n          formControlName=\"codClasse\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"codClasse\"\r\n          bindLabel=\"nomeClasse\"\r\n          bindValue=\"idClasse\"\r\n          (change)=\"onChangeClasse($event.idClasse)\">\r\n        </ng-select>\r\n      </div>\r\n    </div>\r\n      <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-12\">\r\n        <label for=\"codMaterial\">Material</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"materiais\"\r\n          formControlName=\"codMaterial\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"codMaterial\"\r\n          bindLabel=\"codigoDescricaoMaterial\"\r\n          bindValue=\"codigoMaterial\"\r\n          [loading]=\"materiaisLoader\"\r\n          loadingText=\"Carregando...\">\r\n        </ng-select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<div *ngIf=\"materiaisLista.length > 0\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"mtc-title\">Selecione o material principal</div>\r\n      <custom-table [config]=\"tableConfigMateriais\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\" style=\"width: 5%\"></th>\r\n            <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of materiaisLista\" [class.table-active]=\"material.codigoMaterial == codMaterialSelecionado\">\r\n            <td class=\"text-center\" style=\"width: 5%\">\r\n              <btn-icon\r\n                [icon]=\"material.codigoMaterial == codMaterialSelecionado ? 'fas fa-check-square' : 'far fa-square'\"\r\n                size=\"small\"\r\n                (click)=\"onCheckMaterial(material)\">\r\n              </btn-icon>\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              style=\"width: 95%\"\r\n              (click)=\"onCheckMaterial(material)\">\r\n              {{ material.codigoDescricaoMaterial | uppercase }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"searching === true\">\r\n  <div class=\"col\">\r\n    <message\r\n      icon=\"fas fa-cog fa-spin\"\r\n      text=\"Estamos pesquisando os materiais para você...\">\r\n    </message>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"searching === false\">\r\n  <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\r\n    <div class=\"col\">\r\n      <message\r\n        icon=\"fas fa-box-open\"\r\n        text=\"Nenhuma informação encontrada\">\r\n      </message>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\r\n    <div class=\"col\">\r\n      <message\r\n        icon=\"fas fa-search\"\r\n        text=\"Preecha os campos acima para pesquisar materiais\">\r\n      </message>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "zN97":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
  \************************************************************************/
/*! exports provided: ComercialTidSoftwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function() { return ComercialTidSoftwareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialTidSoftwareService = class ComercialTidSoftwareService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/tid-software`;
    }
    loadDependencies() {
        let empresas = this.getEmpresas('vendas');
        let linhas = this.getLinhas();
        let modulosVendas = this.getModulosVendas();
        let modulosProducaoTela = this.getModulosProducaoTela();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            empresas,
            linhas,
            modulosVendas,
            modulosProducaoTela
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas(acao) {
        return this.http
            .get(`${this.API}/empresas/${acao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosVendas() {
        return this.http.get(`${this.API}/modulos/vendas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosProducaoTela() {
        return this.http
            .get(`${this.API}/modulos/producao-tela`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postGerarAcesso(data) {
        return this.http
            .post(`${this.API}/gerar-acesso`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialTidSoftwareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialTidSoftwareService);



/***/ })

}]);
//# sourceMappingURL=default~integracao-condicoes-pagamento-integracao-condicoes-pagamento-module~integracao-materiais-in~edf8f7c6-es2015.js.map