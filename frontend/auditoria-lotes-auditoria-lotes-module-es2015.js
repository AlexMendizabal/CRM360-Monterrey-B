(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auditoria-lotes-auditoria-lotes-module"],{

/***/ "4dOc":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-lotes/auditoria-lotes.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZXN0b3F1ZS1hdmFuY2Fkby9hdWRpdG9yaWEtbG90ZXMvYXVkaXRvcmlhLWxvdGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "KB5f":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-lotes/auditoria-lotes.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaLotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaLotesComponent", function() { return SulFluminenseEstoqueAvancadoAuditoriaLotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auditoria_lotes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auditoria-lotes.component.html */ "mAg1");
/* harmony import */ var _auditoria_lotes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auditoria-lotes.component.scss */ "4dOc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _auditoria_lotes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auditoria-lotes.service */ "jAqJ");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");










//Converte rota em base64



let SulFluminenseEstoqueAvancadoAuditoriaLotesComponent = class SulFluminenseEstoqueAvancadoAuditoriaLotesComponent {
    constructor(rotaAtiva, formBuilder, serviceAuditoria, pnotify, router, routerService, activatedRoute, xlsxService, atividadesService, dateService) {
        this.rotaAtiva = rotaAtiva;
        this.formBuilder = formBuilder;
        this.serviceAuditoria = serviceAuditoria;
        this.pnotify = pnotify;
        this.router = router;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.xlsxService = xlsxService;
        this.atividadesService = atividadesService;
        this.dateService = dateService;
        this.params = {};
        /* Ordenação */
        this.reverse = false;
        this.key = 'CODIGO_MATERIAL';
        /* Ordenação */
        /* Paginação */
        this.itemsPerPage = 15;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        this.carregando = false;
        this.carregandoNavBar = false;
        this.carregou = false;
        this.exibirFiltro = false;
        this.visualizaTabela = false;
        this.listaVazia = false;
        this.linhas = [];
        this.classes = [];
        this.materiais = [];
        this.listaAuditoria = [];
        this.listaAuditoriaExcel = [];
        this.tipoRelatorios = [
            { id_tipo: '5', nome: 'Lotes Conferidos' },
            { id_tipo: '4', nome: 'Auditoria de estoque' },
            /*     { id_tipo: '3', nome: 'Estoque por lote' },
                { id_tipo: '2', nome: 'Estoque de faturamento' }, */
            { id_tipo: '1', nome: 'Materias em lote' }
        ];
        /* Config Table */
        this.tableConfig = {
            isFixed: true,
        };
        this.form = this.formBuilder.group({
            relatorio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            linhas: [null],
            classes: [null],
            materiais: [null],
            CD_LINH: [null],
            time: [new Date().getTime()]
        });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.onBreadCumbTree();
        this.form.get('classes').disable();
        this.form.get('materiais').disable();
        this.getLinhas();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        this.$subscription = this.activatedRoute.queryParams.subscribe(queryParams => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.form.patchValue(_response);
                if (_response['relatorio'] == 5) {
                    this.getLotesConferidos();
                    this.setValoresFormulario(this.getParams(_response));
                }
                else {
                    this.getRelatorioAuditoriaLotes(this.getParams(_response));
                    this.setValoresFormulario(this.getParams(_response));
                }
            }
        });
        this.$subscription.unsubscribe();
    }
    setValoresFormulario(params) {
        let relatorio = params['relatorio'];
        let linhas = params['linhas'];
        let classes = parseInt(params['classes']);
        let materiais = parseInt(params['materiais']);
        if (relatorio) {
            this.exibirFiltro = true;
        }
        this.form.get('relatorio').setValue(relatorio);
        this.form.get('linhas').setValue(linhas);
        if (linhas) {
            this.serviceAuditoria
                .getClasses(linhas)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.form.patchValue({
                    classes: classes
                });
            }))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    this.classes = res['body'];
                    this.form.get('classes').enable();
                    this.setValorMaterial(linhas, classes, materiais);
                }
            });
        }
        else {
            this.form.get('classes').disable();
        }
    }
    setValorMaterial(linhas, classes, materiais) {
        if (this.form.get('classes').status == 'VALID') {
            this.serviceAuditoria
                .getMateriais(linhas, classes)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.form.patchValue({
                    materiais: materiais
                });
            }))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    this.materiais = res['body'].result;
                    this.form.get('materiais').enable();
                }
            });
        }
        else {
            this.form.get('materiais').disable();
        }
    }
    onBreadCumbTree() {
        this.rotaAtiva.params.subscribe((params) => {
            this.idSubModulo = params['idSubModulo'];
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/sul-fluminense/home'
                },
                {
                    descricao: 'Estoque Avançado',
                    routerLink: `/sul-fluminense/estoque-avancado/${this.idSubModulo}`
                },
                {
                    descricao: 'Painel de auditoria Estoque Avançado'
                }
            ];
        });
    }
    onFilter() {
        this.exibirFiltro = true;
        this.form.get('time').setValue(new Date().getTime());
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParam())
        });
        if (this.form.value['relatorio'] == 5) {
            this.getLotesConferidos();
        }
        else
            this.getRelatorioAuditoriaLotes(this.getParam());
    }
    getParams(params) {
        let relatorio = params['relatorio'];
        let linhas = params['linhas'];
        let classes = params['classes'];
        let materiais = params['materiais'];
        return {
            relatorio: relatorio,
            linhas: linhas,
            classes: classes,
            materiais: materiais
        };
    }
    AtivaFiltro() {
        this.exibirFiltro = !this.exibirFiltro;
    }
    getLinhas() {
        this.carregandoNavBar = true;
        this.serviceAuditoria
            .getLinhas()
            .pipe()
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                    this.carregandoNavBar = false;
                    this.linhas = res['body'];
                }
                else if (res.status == 204) {
                    this.pnotify.notice('Não há dados');
                }
            }
            else {
                this.pnotify.error('Erro ao carregar dados');
            }
        });
    }
    getClasses() {
        this.classes = [];
        this.carregandoNavBar = true;
        if (this.form.get('linhas').value != undefined) {
            if (this.form.value['relatorio'] != 5) {
                this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                this.form.get('materiais').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            let descricaoLinhas = this.form.get('linhas').value;
            this.serviceAuditoria.getClasses(descricaoLinhas).subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res.status == 200) {
                        this.carregandoNavBar = false;
                        this.classes = res['body'];
                    }
                    this.form.get('classes').reset();
                    this.form.get('classes').enable();
                }
            }, error => {
                this.pnotify.error('Erro ao carregar filtro Classes');
            });
        }
        else {
            this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]);
            this.form.get('materiais').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]);
            this.form.get('classes').reset();
            this.form.get('materiais').reset();
            this.form.get('classes').disable();
            this.form.get('materiais').disable();
        }
    }
    getMateriais() {
        this.materiais = [];
        this.carregandoNavBar = true;
        if (this.form.get('classes').value !== undefined &&
            this.form.get('classes').status === 'VALID') {
            let descricaoLinhas = this.form.get('linhas').value;
            let idClasses = this.form.get('classes').value;
            this.serviceAuditoria.getMateriais(descricaoLinhas, idClasses).subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    if (response['body'].responseCode === 200) {
                        this.materiais = response['body'].result;
                        this.form.get('materiais').reset();
                        this.form.get('materiais').enable();
                    }
                    else if (response['body'].responseCode === 204) {
                        this.materiais = [];
                        this.pnotify.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.carregandoNavBar = false;
            }, error => {
                this.pnotify.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.form.get('materiais').reset();
            this.form.get('materiais').disable();
        }
    }
    getRelatorioAuditoriaLotes(params) {
        this.begin = 0;
        this.end = 15;
        this.id_tipo_tabela = params['relatorio'];
        this.visualizaTabela = false;
        this.carregando = true;
        this.carregandoNavBar = false;
        this.serviceAuditoria
            .getRelatorioAuditoriaLotes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.carregando = false;
        }))
            .subscribe(res => {
            if (res['status'] == 200) {
                this.visualizaTabela = true;
                this.listaVazia = false;
                this.listaAuditoria = res['body']['data'];
                this.listaAuditoriaExcel = res['body']['data'];
            }
            else if (res['status'] == 204) {
                this.pnotify.notice('Não há dados a serem exibidos.');
                this.listaVazia = true;
            }
            else {
                this.pnotify.error('Erro ao carregar dados');
            }
        });
    }
    setTooltip($event) {
        this.id_tipo = $event.id_tipo;
    }
    exportarExcel() {
        /* Remove a coluna NF_EMISSAO_CLARION da lista */
        this.listaAuditoriaExcel.forEach(element => {
            delete element['DATA_ENTRADA_CLARION'],
                delete element['ID_CLASSE'],
                delete element['ID_LINHA'];
        });
        /* Chama o serviço para exportar dados em documento excel */
        this.xlsxService.exportFile(this.listaAuditoriaExcel, 'relatório');
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* VALIDAÇÕES DO FILTRO */
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getParam() {
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
    getLotesConferidos() {
        this.carregando = true;
        this.id_tipo_tabela = this.form.value['relatorio'];
        this.serviceAuditoria
            .getLotesConferidos(this.getParam())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.carregando = false;
            this.visualizaTabela = true;
        }))
            .subscribe(response => {
            if (response.status === 204) {
                this.pnotify.notice('Não há lotes conferidos.');
            }
            else {
                this.listaAuditoria = response.body['data'];
                this.listaAuditoriaExcel = response.body['data'];
            }
        });
    }
    getReset() {
        this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]);
        this.form.get('materiais').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]);
        this.form.get('linhas').reset();
        this.form.get('classes').reset();
        this.form.get('materiais').reset();
        this.form.get('classes').disable();
        this.form.get('materiais').disable();
    }
};
SulFluminenseEstoqueAvancadoAuditoriaLotesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _auditoria_lotes_service__WEBPACK_IMPORTED_MODULE_11__["SulFluminenseAuditoriaLotesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
SulFluminenseEstoqueAvancadoAuditoriaLotesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'auditoria-lotes',
        template: _raw_loader_auditoria_lotes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auditoria_lotes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _auditoria_lotes_service__WEBPACK_IMPORTED_MODULE_11__["SulFluminenseAuditoriaLotesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], SulFluminenseEstoqueAvancadoAuditoriaLotesComponent);



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

/***/ "aJyJ":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-lotes/auditoria-lotes-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule", function() { return SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auditoria_lotes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auditoria-lotes.component */ "KB5f");




const routes = [
    {
        path: '',
        component: _auditoria_lotes_component__WEBPACK_IMPORTED_MODULE_3__["SulFluminenseEstoqueAvancadoAuditoriaLotesComponent"]
    }
];
let SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule = class SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule {
};
SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule);



/***/ }),

/***/ "jAqJ":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-lotes/auditoria-lotes.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: SulFluminenseAuditoriaLotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseAuditoriaLotesService", function() { return SulFluminenseAuditoriaLotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let SulFluminenseAuditoriaLotesService = class SulFluminenseAuditoriaLotesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getLinhas() {
        return this.httpClient.get(`${this.BASE_URL}/common/linhas`, {
            observe: "response"
        });
    }
    getClasses(descricaoLinhas) {
        return this.httpClient.get(`${this.BASE_URL}/common/classes`, {
            params: {
                linhas: btoa(descricaoLinhas)
            },
            observe: "response"
        });
    }
    getMateriais(descricaoLinhas, idClasses) {
        if (!idClasses)
            idClasses = "";
        return this.httpClient.get(`${this.BASE_URL}/common/materiais`, {
            params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses),
            },
            observe: "response"
        });
    }
    getRelatorioAuditoriaLotes(params) {
        let tipoRelatorio = params["relatorio"];
        let material = params["materiais"] ? params["materiais"] : "0";
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/auditoria-estoque-avancado`, {
            params: {
                "id_tipo": tipoRelatorio,
                "id_material": material
            },
            observe: "response"
        });
    }
    getLotesConferidos(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/relatorios/lotes-conferidos`, {
            params,
            observe: "response"
        });
    }
};
SulFluminenseAuditoriaLotesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SulFluminenseAuditoriaLotesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SulFluminenseAuditoriaLotesService);



/***/ }),

/***/ "mAg1":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/estoque-avancado/auditoria-lotes/auditoria-lotes.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"carregando\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"carregandoNavBar\"></loader-spinner-navbar>\r\n\r\n<app-header appTitle=\"Painel de auditoria Estoque Avançado\">\r\n  <button \r\n    (click)=\"exportarExcel()\"\r\n    [disabled]=\"!visualizaTabela\"\r\n    >\r\n    Exportar\r\n  </button>\r\n  <button \r\n    (click)=\"onFilter()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!carregando\">\r\n  <advanced-filter>\r\n    <form id=\"form-sul-fluminense-auditoria-lotes\" [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"relatorio\">Tipo de Relatório</label>\r\n          <!-- INICIO - Template do tooltip de tipo 4 -->\r\n          <ng-template #tipo4>\r\n            <div>\r\n                <p class=\"text-justify\"> Visão aberta por lote, de todos os materiais da consulta de estoque do Faturamento:</p>\r\n                <ul>\r\n                  <li><p class=\"text-justify\">ESTOQUE CONSOLIDADO = Visão da consulta de estoque de Faturamento;</p></li>\r\n                  <li><p class=\"text-justify\">ESTOQUE DETALHADO = Visão da consulta de estoque de Faturamento, aberta por lote;</p></li>\r\n                  <li><p class=\"text-justify\">ESTOQUE AVANÇADO = Visão consolidada dos lotes disponíveis para conferência, do módulo de Estoque Avançado do sistema TID.</p></li>\r\n                </ul>\r\n            </div>\r\n          </ng-template>\r\n          <!-- FIM - Template do tooltip de tipo 4 -->\r\n          <!-- INICIO - Tooltips -->             \r\n          <i *ngIf = \"id_tipo == null\" \r\n            class=\"far fa-question-circle hover ml-1\" \r\n            tooltip=\"Selecione um tipo de relatório\" \r\n            placement=\"auto\">\r\n          </i>\r\n          <i *ngIf = \"id_tipo == '1'\" \r\n            class=\"far fa-question-circle hover ml-1\" \r\n            tooltip=\"Visão de todos os lotes do sistema, disponíveis para conferência\"\r\n            placement=\"auto\">\r\n          </i>\r\n          <i *ngIf = \"id_tipo == '2'\" \r\n            class=\"far fa-question-circle hover ml-1\" \r\n            tooltip=\"Cópia fiel da tela de consulta de estoques do faturamento, do sistema TID, na localização de estoque 'Sul Fluminense Avançado'\" \r\n            placement=\"auto\">\r\n          </i>\r\n          <i *ngIf = \"id_tipo == '3'\" \r\n            class=\"far fa-question-circle hover ml-1\" \r\n            [tooltip]=\"tipo4\" \r\n            placement=\"auto\">\r\n          </i>\r\n          <i *ngIf = \"id_tipo == '4'\" \r\n            class=\"far fa-question-circle hover ml-1\" \r\n            tooltip=\"Auditoria em relação as três visões de estoque no sistema TID. Todas as informações devem ser iguais, para serem consideradas corretas.\" \r\n            placement=\"auto\">\r\n          </i>\r\n          <i *ngIf = \"id_tipo == '5'\" \r\n            class=\"far fa-question-circle hover ml-1\" \r\n            tooltip=\"Auditoria em relação as três visões de estoque no sistema TID. Todas as informações devem ser iguais, para serem consideradas corretas.\" \r\n            placement=\"auto\">\r\n          </i>\r\n          <!-- FIM - Tooltips -->  \r\n          <ng-select\r\n            [searchable]=\"false\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipoRelatorios\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            labelForId=\"nome\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id_tipo\"\r\n            placeholder=\"Selecione tipo\"\r\n            formControlName=\"relatorio\"\r\n            (change) = \"setTooltip($event); getReset()\"\r\n            [ngClass]=\"onFieldError('relatorio') + ' ' + onFieldRequired('relatorio')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('relatorio')\"\r\n            message=\"Tipo de relatório é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"linha\">Linha</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"linhas\"\r\n              [virtualScroll]=\"true\"\r\n              [hideSelected]=\"true\"\r\n              [closeOnSelect]=\"true\"\r\n              placeholder=\"Selecione linha\"\r\n              bindLabel=\"linha\"\r\n              bindValue=\"linha\"\r\n              placeholder=\"Selecione...\"\r\n              formControlName=\"linhas\"\r\n              (change) = \"getClasses()\"\r\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('linhas')\"\r\n              message=\"Linha é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            labelForId=\"classe\"\r\n            bindLabel=\"classeDescricao\"\r\n            bindValue=\"classeId\"\r\n            placeholder=\"Selecione classe\"\r\n            formControlName=\"classes\"\r\n            (change) = \"getMateriais()\"\r\n            [ngClass]=\"onFieldError('classes') + ' ' + onFieldRequired('classes')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('classes')\"\r\n            message=\"Classes é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"material\">Material</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"materiais\"\r\n              [virtualScroll]=\"true\"\r\n              [hideSelected]=\"true\"\r\n              [closeOnSelect]=\"true\"\r\n              labelForId=\"material\"\r\n              bindLabel=\"codigoDescricaoMaterial\"\r\n              bindValue=\"codigoMaterial\"\r\n              placeholder=\"Selecione material\"\r\n              formControlName=\"materiais\"\r\n              [ngClass]=\"onFieldError('materiais') + ' ' + onFieldRequired('materiais')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('materiais')\"\r\n              message=\"Materiais é obrigatório.\">\r\n            </invalid-form-control>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\">\r\n    <div *ngIf=\"listaVazia && !carregando\"class=\"text-center p-5\" style=\"height: 80%\">\r\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n    </div>\r\n    <div class=\"table-responsive\" *ngIf=\"!carregando && visualizaTabela && id_tipo_tabela == '1'\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_MATERIAL')\">Cód. Material\r\n              <span *ngIf=\"key == 'CODIGO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_MATERIAL')\">Material\r\n              <span *ngIf=\"key == 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_LINHA')\">Linha\r\n              <span *ngIf=\"key == 'DESCRICAO_LINHA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_LINHA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_CLASSE')\">Cód. Classe\r\n              <span *ngIf=\"key == 'CODIGO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_CLASSE')\">Classe\r\n              <span *ngIf=\"key == 'DESCRICAO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('LOTE')\">Lote\r\n              <span *ngIf=\"key == 'LOTE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'LOTE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('QUANTIDADE')\">Qtde\r\n              <span *ngIf=\"key == 'QUANTIDADE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'QUANTIDADE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DATA_ENTRADA_CLARION')\">Dt. Entrada\r\n              <span *ngIf=\"key == 'DATA_ENTRADA_CLARION'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DATA_ENTRADA_CLARION'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listaAuditoria | orderBy: key : reverse | slice: begin : end; let i = index\">\r\n            <td class=\"text-center\">{{item.CODIGO_MATERIAL | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_MATERIAL}}</td>\r\n            <td>{{item.DESCRICAO_LINHA}}</td>\r\n            <td class=\"text-center\">{{item.CODIGO_CLASSE | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_CLASSE}}</td>\r\n            <td class=\"text-center\">{{item.LOTE}}</td>\r\n            <td class=\"text-right\">{{item.QUANTIDADE | number: '0.3-3'}}</td>\r\n            <td class=\"text-center\">{{item.DATA_ENTRADA}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"table-responsive\" *ngIf=\"!carregando && visualizaTabela && id_tipo_tabela == '2'\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_MATERIAL')\">Cód. Material\r\n              <span *ngIf=\"key == 'CODIGO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_MATERIAL')\">Material\r\n              <span *ngIf=\"key == 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_LINHA')\">Linha\r\n              <span *ngIf=\"key == 'DESCRICAO_LINHA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_LINHA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_CLASSE')\">Cód. Classe\r\n              <span *ngIf=\"key == 'CODIGO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_CLASSE')\">Classe\r\n              <span *ngIf=\"key == 'DESCRICAO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('ESTOQUE_CONSOLIDADO')\">Estoque Consolidado\r\n              <span *ngIf=\"key == 'ESTOQUE_CONSOLIDADO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'ESTOQUE_CONSOLIDADO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listaAuditoria | orderBy: key : reverse | slice: begin : end\">\r\n            <td class=\"text-center\">{{item.CODIGO_MATERIAL | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_MATERIAL}}</td>\r\n            <td>{{item.DESCRICAO_LINHA}}</td>\r\n            <td class=\"text-center\">{{item.CODIGO_CLASSE | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_CLASSE}}</td>\r\n            <td class=\"text-right\">{{item.ESTOQUE_CONSOLIDADO | number: '0.3-3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"table-responsive\" *ngIf=\"!carregando && visualizaTabela && id_tipo_tabela == '3'\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_MATERIAL')\">Cód. Material\r\n              <span *ngIf=\"key == 'CODIGO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_MATERIAL')\">Material\r\n              <span *ngIf=\"key == 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_LINHA')\">Linha\r\n              <span *ngIf=\"key == 'DESCRICAO_LINHA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_LINHA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_CLASSE')\">Cód. Classe\r\n              <span *ngIf=\"key == 'CODIGO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_CLASSE')\">Classe\r\n              <span *ngIf=\"key == 'DESCRICAO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('LOTE')\">Lote\r\n              <span *ngIf=\"key == 'LOTE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'LOTE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('QUANTIDADE')\">Qtde\r\n              <span *ngIf=\"key == 'QUANTIDADE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'QUANTIDADE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listaAuditoria | orderBy: key : reverse | slice: begin : end\">\r\n            <td class=\"text-center\">{{item.CODIGO_MATERIAL | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_MATERIAL}}</td>\r\n            <td>{{item.DESCRICAO_LINHA}}</td>\r\n            <td class=\"text-center\">{{item.CODIGO_CLASSE | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_CLASSE}}</td>\r\n            <td class=\"text-center\">{{item.LOTE}}</td>\r\n            <td class=\"text-right\">{{item.QUANTIDADE | number: '0.3-3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"table-responsive\" *ngIf=\"!carregando && visualizaTabela && id_tipo_tabela == '4'\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_MATERIAL')\">Cód. Material\r\n              <span *ngIf=\"key == 'CODIGO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_MATERIAL')\">Material\r\n              <span *ngIf=\"key == 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_LINHA')\">Linha\r\n              <span *ngIf=\"key == 'DESCRICAO_LINHA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_LINHA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('CODIGO_CLASSE')\">Cód. Classe\r\n              <span *ngIf=\"key == 'CODIGO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODIGO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('DESCRICAO_CLASSE')\">Classe\r\n              <span *ngIf=\"key == 'DESCRICAO_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('ESTOQUE_CONSOLIDADO')\">Estoque Consolidado\r\n              <span *ngIf=\"key == 'ESTOQUE_CONSOLIDADO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'ESTOQUE_CONSOLIDADO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('ESTOQUE_DETALHADO')\">Estoque Detalhado\r\n              <span *ngIf=\"key == 'ESTOQUE_DETALHADO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'ESTOQUE_DETALHADO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover\" (click)=\"sort('ESTOQUE_AVANCADO')\">Estoque Avançado\r\n              <span *ngIf=\"key == 'ESTOQUE_AVANCADO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'ESTOQUE_AVANCADO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listaAuditoria | orderBy: key : reverse | slice: begin : end\">\r\n            <td class=\"text-center\">{{item.CODIGO_MATERIAL | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_MATERIAL}}</td>\r\n            <td>{{item.DESCRICAO_LINHA}}</td>\r\n            <td class=\"text-center\">{{item.CODIGO_CLASSE | number: '0.0-0'}}</td>\r\n            <td>{{item.DESCRICAO_CLASSE}}</td>\r\n            <td class=\"text-right\">{{item.ESTOQUE_CONSOLIDADO | number: '0.3-3'}}</td>\r\n            <td class=\"text-right\">{{item.ESTOQUE_DETALHADO | number: '0.3-3'}}</td>\r\n            <td class=\"text-right\">{{item.ESTOQUE_AVANCADO | number: '0.3-3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"table-responsive\" *ngIf=\"!carregando && visualizaTabela && id_tipo_tabela == '5'\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('SITUACAO')\">Situação\r\n              <span *ngIf=\"key == 'SITUACAO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'SITUACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('SIGLA_FORNEC')\">Sigla Fornecedor\r\n              <span *ngIf=\"key == 'SIGLA_FORNEC'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'SIGLA_FORNEC'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('CD_MATERIAL')\">Cód. Material\r\n              <span *ngIf=\"key == 'CD_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CD_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('DESCRICAO')\">Material\r\n              <span *ngIf=\"key == 'DESCRICAO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DESCRICAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('LINHA')\">Linha\r\n              <span *ngIf=\"key == 'LINHA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'LINHA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('CLASSE')\">Classe\r\n              <span *ngIf=\"key == 'CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('UNIDADE')\">Uni. Medida\r\n              <span *ngIf=\"key == 'UNIDADE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'UNIDADE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('LOTE_MATERIAL')\">Num. Lote\r\n              <span *ngIf=\"key == 'LOTE_MATERIAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'LOTE_MATERIAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('QUANTIDADE')\">Quantidade\r\n              <span *ngIf=\"key == 'QUANTIDADE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'QUANTIDADE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('DT_ENTRADA')\">Data Entrada\r\n              <span *ngIf=\"key == 'DT_ENTRADA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DT_ENTRADA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('DATA_CONF')\">Data Conferência\r\n              <span *ngIf=\"key == 'DATA_CONF'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DATA_CONF'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('HORA_CONFE')\">Hora Conferência\r\n              <span *ngIf=\"key == 'HORA_CONFE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'HORA_CONFE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('USER_CONFE')\">Usuário Conferência\r\n              <span *ngIf=\"key == 'USER_CONFE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'USER_CONFE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('DATA_RETORNO')\">Data Retorno\r\n              <span *ngIf=\"key == 'DATA_RETORNO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DATA_RETORNO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('HORA_RETORNO')\">Hora Retorno\r\n              <span *ngIf=\"key == 'HORA_RETORNO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'HORA_RETORNO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('USER_RETORNO')\">Usuário Retorno\r\n              <span *ngIf=\"key == 'USER_RETORNO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'USER_RETORNO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('DATA_BAIXA')\">Data Baixa\r\n              <span *ngIf=\"key == 'DATA_BAIXA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DATA_BAIXA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('HORA_BAIXA')\">Hora Baixa\r\n              <span *ngIf=\"key == 'HORA_BAIXA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'HORA_BAIXA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('USER_BAIXA')\">Usuário Baixa\r\n              <span *ngIf=\"key == 'USER_BAIXA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'USER_BAIXA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('NR_PEDIDO_TRANSF')\">Num. Tranferência\r\n              <span *ngIf=\"key == 'NR_PEDIDO_TRANSF'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NR_PEDIDO_TRANSF'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"hover text-nowrap\" (click)=\"sort('NR_PEDIDO_NF')\">Num. Pedido\r\n              <span *ngIf=\"key == 'NR_PEDIDO_NF'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NR_PEDIDO_NF'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listaAuditoria | orderBy: key : reverse | slice: begin : end\">\r\n            <td class=\"text-center text-nowrap\">{{item.SITUACAO}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.SIGLA_FORNEC}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.CD_MATERIAL | number: '0.0-0'}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.DESCRICAO}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.LINHA}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.CLASSE}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.UNIDADE}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.LOTE_MATERIAL}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.QUANTIDADE | number: '0.3-3'}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.DT_ENTRADA}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.DATA_CONF}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.HORA_CONFE}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.USER_CONFE}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.DATA_RETORNO}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.HORA_RETORNO}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.USER_RETORNO}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.DATA_BAIXA}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.HORA_BAIXA}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.USER_BAIXA}}</td>            \r\n            <td class=\"text-center text-nowrap\">{{item.NR_PEDIDO_NF}}</td>\r\n            <td class=\"text-center text-nowrap\">{{item.NR_PEDIDO_TRANSF}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"mt-3\" *ngIf=\"this.listaAuditoria?.length > 15 && !carregando && !listaVazia\">\r\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ this.listaAuditoria?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"this.listaAuditoria?.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</app-body>\r\n");

/***/ }),

/***/ "wjG9":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-lotes/auditoria-lotes.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaLotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaLotesModule", function() { return SulFluminenseEstoqueAvancadoAuditoriaLotesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _auditoria_lotes_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auditoria-lotes-routing.module */ "aJyJ");
/* harmony import */ var _auditoria_lotes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auditoria-lotes.component */ "KB5f");












let SulFluminenseEstoqueAvancadoAuditoriaLotesModule = class SulFluminenseEstoqueAvancadoAuditoriaLotesModule {
};
SulFluminenseEstoqueAvancadoAuditoriaLotesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auditoria_lotes_component__WEBPACK_IMPORTED_MODULE_11__["SulFluminenseEstoqueAvancadoAuditoriaLotesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auditoria_lotes_routing_module__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseEstoqueAvancadoAuditoriaLotesRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__["TemplatesModule"]
        ]
    })
], SulFluminenseEstoqueAvancadoAuditoriaLotesModule);



/***/ })

}]);
//# sourceMappingURL=auditoria-lotes-auditoria-lotes-module-es2015.js.map