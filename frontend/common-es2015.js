(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3gui":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipo-operadores/tipo-operadores.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialCadastrosTipoOperadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoOperadorService", function() { return ComercialCadastrosTipoOperadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosTipoOperadorService = class ComercialCadastrosTipoOperadorService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/tipo-operador`;
    }
    getListaTipoOperador(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codTipoOperador) {
        return this.http
            .get(`${this.API}/alteracoes/${codTipoOperador}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codTipoOperador) {
        return this.http
            .get(`${this.API}/detalhes/${codTipoOperador}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveTipoOperador(tipoOperador) {
        return this.http.post(`${this.API}/salvar`, tipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateTipoOperador(tipoOperador) {
        return this.http.put(`${this.API}/atualizar`, tipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(tipoOperador) {
        if (tipoOperador.codTipoOperador !== null) {
            return this.updateTipoOperador(tipoOperador);
        }
        return this.saveTipoOperador(tipoOperador);
    }
    activateTipoOperador(codTipoOperador) {
        return this.http.post(`${this.API}/ativar`, codTipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateTipoOperador(codTipoOperador) {
        return this.http
            .post(`${this.API}/inativar`, codTipoOperador)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosTipoOperadorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosTipoOperadorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosTipoOperadorService);



/***/ }),

/***/ "3vpR":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/services/movimentacoes.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueMovimentacoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMovimentacoesService", function() { return TecnologiaInformacaoEstoqueMovimentacoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoEstoqueMovimentacoesService = class TecnologiaInformacaoEstoqueMovimentacoesService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    //-----------------------------------MOVIMENTACÃO--------------------------\\
    getMovimentacoes(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/movimentacoes`, {
            params: params,
            observe: 'response',
        });
    }
    postMovimentacoes(item) {
        return this.http.post(`${this.API}/tecnologia-informacao/estoque/movimentacoes`, item, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoEstoqueMovimentacoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoEstoqueMovimentacoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoEstoqueMovimentacoesService);



/***/ }),

/***/ "44Bq":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/equipe-venda/equipe-venda.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ComercialCadastrosEquipeVendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaService", function() { return ComercialCadastrosEquipeVendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosEquipeVendaService = class ComercialCadastrosEquipeVendaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/equipe-venda`;
    }
    getListaEquipesVenda(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codEquipeVenda) {
        return this.http
            .get(`${this.API}/alteracoes/${codEquipeVenda}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codEquipeVenda) {
        return this.http
            .get(`${this.API}/detalhes/${codEquipeVenda}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveEquipeVenda(equipeVenda) {
        return this.http.post(`${this.API}/salvar`, equipeVenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateEquipeVenda(equipeVenda) {
        return this.http.put(`${this.API}/atualizar`, equipeVenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(equipeVenda) {
        if (equipeVenda.codEquipeVenda !== null) {
            return this.updateEquipeVenda(equipeVenda);
        }
        return this.saveEquipeVenda(equipeVenda);
    }
    activateEquipeVenda(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateEquipeVenda(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListaEquipesERP() {
        return this.http.get(`${this.API}/erp/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosEquipeVendaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosEquipeVendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosEquipeVendaService);



/***/ }),

/***/ "4Jok":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.service.ts ***!
  \************************************************************************************************/
/*! exports provided: ComercialClientesCadastroEnderecosFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosFormularioService", function() { return ComercialClientesCadastroEnderecosFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");





// Services

let ComercialClientesCadastroEnderecosFormularioService = class ComercialClientesCadastroEnderecosFormularioService {
    constructor(http, clientesService) {
        this.http = http;
        this.clientesService = clientesService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/clientes/cadastro/formulario/enderecos`;
    }
    loadDepencies(codCliente) {
        let regioesAtuacaoComercial = this.getRegioesAtuacaoComercial();
        let regioesEntrega = this.getRegioesEntrega();
        let tiposMaterial = this.getTiposMaterial();
        let tiposDescarga = this.getTiposDescarga();
        let modosDescarga = this.getModosDescarga();
        let validacoes = this.clientesService.getEnderecos(codCliente);
        let tiposVeiculos = this.getTiposVeiculos();
        let dadosEspeciais = this.getDadosEspeciais();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            regioesAtuacaoComercial,
            regioesEntrega,
            tiposMaterial,
            tiposDescarga,
            modosDescarga,
            validacoes,
            tiposVeiculos,
            dadosEspeciais,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getRegioesAtuacaoComercial() {
        return this.http.get(`${this.API}/regioes-atuacao-comercial`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getRegioesEntrega() {
        return this.http.get(`${this.API}/regioes-entrega`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getIbgeCidades(data) {
        return this.http.post(`${this.API}/ibge`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getRegiaoEntrega(codIBGE) {
        return this.http.get(`${this.API}/regiao-entrega/${codIBGE}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getRegiaoEntregaPorBairro(bairro) {
        return this.http.get(`${this.API}/regiao-entrega-por-bairro/${bairro}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTiposMaterial() {
        return this.http.get(`${this.API}/tipos-material`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTiposDescarga() {
        return this.http.get(`${this.API}/tipos-descarga`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getModosDescarga() {
        return this.http.get(`${this.API}/modos-descarga`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTiposVeiculos() {
        return this.http.get(`${this.API}/tipos-veiculos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDadosEspeciais() {
        return this.http.get(`${this.API}/dados-especiais`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAnexos(codEndereco) {
        return this.http.get(`${this.API}/anexos/${codEndereco}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getCliente(codCliente) {
        return this.http.get(`https://crm360.monterrey.com.bo/api/comercial/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAnexos(params, codEndereco, codCliente) {
        return this.http.post(`${this.API}/anexos/salvar?codEndereco=${codEndereco}&codCliente=${codCliente}`, params);
    }
    deleteAnexo(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http.put(`${this.API}/anexos/excluir`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialClientesCadastroEnderecosFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"] }
];
ComercialClientesCadastroEnderecosFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"]])
], ComercialClientesCadastroEnderecosFormularioService);



/***/ }),

/***/ "4YhS":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/grupos/grupos.service.ts ***!
  \********************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisGrupoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoService", function() { return ComercialCadastrosMateriaisGrupoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tid-software/tid-software.service */ "zN97");





// Services


let ComercialCadastrosMateriaisGrupoService = class ComercialCadastrosMateriaisGrupoService {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/materiais/grupos`;
    }
    getListaGrupos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getAssociacoesMateriais(codGrupo) {
        return this.http
            .get(`${this.API}/associacoes/${codGrupo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getDetalhes(codGrupo) {
        return this.http
            .get(`${this.API}/detalhes/${codGrupo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    saveGrupo(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    updateGrupo(record) {
        return this.http
            .put(`${this.API}/atualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    save(record) {
        if (record.codGrupo !== null) {
            return this.updateGrupo(record);
        }
        return this.saveGrupo(record);
    }
    activateGrupo(codGrupo) {
        return this.http
            .post(`${this.API}/ativar`, codGrupo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    inactivateGrupo(codGrupo) {
        return this.http
            .post(`${this.API}/inativar`, codGrupo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getFilterValues() {
        const linhas = this.tidSoftwareService.getLinhas();
        const classes = this.comercialService.getClasses(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
    }
};
ComercialCadastrosMateriaisGrupoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"] }
];
ComercialCadastrosMateriaisGrupoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])
], ComercialCadastrosMateriaisGrupoService);



/***/ }),

/***/ "4muW":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js ***!
  \*****************************************************************/
/*! exports provided: FilterPipeModule, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function() { return FilterPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilterPipe {
    /**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    static isFoundOnWalking(value, key) {
        let /** @type {?} */ walker = value;
        let /** @type {?} */ found = false;
        do {
            if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                found = true;
                break;
            }
        } while (walker = Object.getPrototypeOf(walker));
        return found;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isNumber(value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    }
    /**
     * Checks function's value if type is function otherwise same value
     * @param {?} value
     * @return {?}
     */
    static getValue(value) {
        return typeof value === 'function' ? value() : value;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    filterByString(filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return value => !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    filterByBoolean(filter) {
        return value => Boolean(value) === filter;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    filterByObject(filter) {
        return value => {
            for (const /** @type {?} */ key in filter) {
                if (key === '$or') {
                    if (!this.filterByOr(filter.$or)(FilterPipe.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                if (!value || !FilterPipe.isFoundOnWalking(value, key)) {
                    return false;
                }
                if (!this.isMatching(filter[key], FilterPipe.getValue(value[key]))) {
                    return false;
                }
            }
            return true;
        };
    }
    /**
     * @param {?} filter
     * @param {?} val
     * @return {?}
     */
    isMatching(filter, val) {
        switch (typeof filter) {
            case 'boolean':
                return this.filterByBoolean(filter)(val);
            case 'string':
                return this.filterByString(filter)(val);
            case 'object':
                return this.filterByObject(filter)(val);
        }
        return this.filterDefault(filter)(val);
    }
    /**
     * Filter value by $or
     * @param {?} filter
     * @return {?}
     */
    filterByOr(filter) {
        return (value) => {
            const /** @type {?} */ length = filter.length;
            const /** @type {?} */ arrayComparison = (i) => value.indexOf(filter[i]) !== -1;
            const /** @type {?} */ otherComparison = (i) => this.isMatching(filter[i], value);
            const /** @type {?} */ comparison = Array.isArray(value) ? arrayComparison : otherComparison;
            for (let /** @type {?} */ i = 0; i < length; i++) {
                if (comparison(i)) {
                    return true;
                }
            }
            return false;
        };
    }
    /**
     * Default filterDefault function
     * @param {?} filter
     * @return {?}
     */
    filterDefault(filter) {
        return (value) => filter === undefined || filter == value;
    }
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    transform(array, filter) {
        if (!array) {
            return array;
        }
        switch (typeof filter) {
            case 'boolean':
                return array.filter(this.filterByBoolean(filter));
            case 'string':
                if (FilterPipe.isNumber(filter)) {
                    return array.filter(this.filterDefault(filter));
                }
                return array.filter(this.filterByString(filter));
            case 'object':
                return array.filter(this.filterByObject(filter));
            case 'function':
                return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    }
}
FilterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
FilterPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilterPipeModule {
}
FilterPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [FilterPipe],
                providers: [FilterPipe],
                exports: [FilterPipe]
            },] },
];
/** @nocollapse */
FilterPipeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-filter-pipe.js.map


/***/ }),

/***/ "6bs2":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/perfis/services/perfis.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdminPerfisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPerfisService", function() { return AdminPerfisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AdminPerfisService = class AdminPerfisService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getPerfil(perfil = {}) {
        return this.http.get(`${this.API}/core/perfis`, {
            params: perfil,
            observe: "response"
        });
    }
    getPerfis(params) {
        return this.http.get(`${this.API}/core/perfis`, {
            params: params,
            observe: "response"
        });
    }
    postPerfil(perfil) {
        return this.http.post(`${this.API}/core/perfis`, perfil, { observe: "response" });
    }
    getAtividadesAssociadas(params) {
        return this.http.get(`${this.API}/core/perfis/atividades`, {
            params: params,
            observe: "response"
        });
    }
    postAtividadesAssociadas(params) {
        return this.http.post(`${this.API}/core/perfis/atividades`, params, { observe: "response" });
    }
};
AdminPerfisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminPerfisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminPerfisService);



/***/ }),

/***/ "6nXq":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "6xDO");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "fKXl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "6xDO":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Página não encontrada</h1>\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"col\">\n    <div class=\"not-found\">\n      <img id=\"img\" src=\"../../../assets/images/system-alerts/404.png\">\n      <div>\n        <div id=\"title\">Oops! Página não encontrada</div>\n        <div id=\"message\">A página que você está tentando acessar não existe\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "6xMS":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/services/restricoes.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: LogisticaEntergaRestricoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntergaRestricoesService", function() { return LogisticaEntergaRestricoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




let LogisticaEntergaRestricoesService = class LogisticaEntergaRestricoesService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getRestricoes(params) {
        return this.http.get(`${this.API}/logistica/restricoes-transporte`, {
            params: params,
            observe: "response"
        });
    }
    getRestricao(uuid) {
        return this.http.get(`${this.API}/logistica/restricoes-transporte/${uuid}`, {
            observe: "response"
        });
    }
    postRestricoes(params) {
        return this.http.post(`${this.API}/logistica/restricoes-transporte`, params, {
            observe: "response"
        });
    }
    postMateriaisAssociados(params) {
        return this.http.post(`${this.API}/logistica/restricoes-transporte/materiais`, params, {
            observe: "response"
        });
    }
    getMateriais(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/materiais`, {
            params: params,
            observe: "response"
        });
    }
    getMateriaisAssociados(params) {
        return this.http.get(`${this.API}/logistica/restricoes-transporte/materiais`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaEntergaRestricoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntergaRestricoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntergaRestricoesService);



/***/ }),

/***/ "73eH":
/*!************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/agenda.service.ts ***!
  \************************************************************/
/*! exports provided: ComercialAgendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaService", function() { return ComercialAgendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialAgendaService = class ComercialAgendaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/agenda`;
    }
    getAcessos() {
        return this.http.get(`${this.API}/acessos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCompromissos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/compromissos/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCompromisso(id) {
        return this.http
            .get(`${this.API}/compromissos/detalhes/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    saveCompromisso(record) {
        return this.http
            .post(`${this.API}/compromisso/salvar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    saveCompromisso2(record) {
        return this.http
            .post(`${this.API}/compromiso/actualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateCompromisso(record) {
        return this.http
            .post(`${this.API}/compromiso/actualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    rescheduleCompromisso(record) {
        return this.http
            .post(`${this.API}/compromisso/reagendar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    save(action, record) {
        if (action == 'editar') {
            return this.updateCompromisso(record);
        }
        else if (action == 'reagendar') {
            return this.rescheduleCompromisso(record);
        }
        return this.saveCompromisso(record);
    }
    deleteCompromisso(id) {
        const record = { id: id };
        return this.http
            .post(`${this.API}/compromiso/eliminar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialAgendaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialAgendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialAgendaService);



/***/ }),

/***/ "7aZN":
/*!***************************************************!*\
  !*** ./src/app/shared/services/ws/cep.service.ts ***!
  \***************************************************/
/*! exports provided: CepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepService", function() { return CepService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let CepService = class CepService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/common/services/cep`;
    }
    getData(cep) {
        cep = cep.replace(/\D/g, '');
        if (cep !== '') {
            let validaCep = /^[0-9]{8}$/;
            if (validaCep.test(cep)) {
                return this.http.get(`${this.API}/${cep}`);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    }
};
CepService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CepService);



/***/ }),

/***/ "81bo":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/services/notas-fiscais.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisNotasFiscaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisService", function() { return LogisticaEntradaMateriaisNotasFiscaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisNotasFiscaisService = class LogisticaEntradaMateriaisNotasFiscaisService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getNotasFiscais(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais`, {
            params: params,
            observe: 'response',
        });
    }
    getExport(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/relatorio`, {
            params: params,
            observe: 'response',
        });
    }
    getAlteracoes(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/historico`, {
            params: params,
            observe: 'response',
        });
    }
    getLotesDuplicados(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/materiais/lotes-duplicados`, {
            params: params,
            observe: 'response',
        });
    }
    postNotasDuplicadas(notas) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/notas-fiscais/materiais/lotes-duplicados`, notas, {
            observe: 'response',
        });
    }
    postNotasFiscais(notas) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/notas-fiscais`, notas, {
            observe: 'response',
        });
    }
    getHistoricoMateriais(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/materiais/historico`, {
            params: params,
            observe: 'response',
        });
    }
    getNotasMateriais(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    postMateriais(notas) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/notas-fiscais/materiais`, notas, {
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisNotasFiscaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisNotasFiscaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisNotasFiscaisService);



/***/ }),

/***/ "8L2n":
/*!****************************************************************!*\
  !*** ./src/app/modules/logistica/services/steellog.service.ts ***!
  \****************************************************************/
/*! exports provided: LogisticaSteellogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSteellogService", function() { return LogisticaSteellogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaSteellogService = class LogisticaSteellogService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getTipoTransporte(params) {
        return this.http.get(`${this.API}/logistica/steellog/tipo-transporte`, {
            params: params,
            observe: "response"
        });
    }
    getEmpresas(params) {
        return this.http.get(`${this.API}/logistica/steellog/empresas`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaSteellogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaSteellogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaSteellogService);



/***/ }),

/***/ "8O77":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/formulario.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioService", function() { return ComercialCicloVendasPedidosProducaoTelasFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/vendedores.service */ "4xRd");
/* harmony import */ var _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../cadastros/situacao-proposta/situacao-proposta.service */ "3WN2");





// Services



let ComercialCicloVendasPedidosProducaoTelasFormularioService = class ComercialCicloVendasPedidosProducaoTelasFormularioService {
    constructor(http, comercialService, vendedoresService, situacoesService) {
        this.http = http;
        this.comercialService = comercialService;
        this.vendedoresService = vendedoresService;
        this.situacoesService = situacoesService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/ciclo-vendas/pedidos-producao-telas`;
        this.notifySubmit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.notifySubmitObservable$ = this.notifySubmit.asObservable();
        this.materiaisSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.limparCarrinhoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.calculoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.descontoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.codCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onNotifySubmit(data) {
        this.notifySubmit.next(data);
    }
    loadDependencies() {
        const situacoes = this.situacoesService.getListaSituacaoProposta(null);
        const empresas = this.comercialService.getEmpresas({ tipo: 'faturamento' });
        const depositos = this.comercialService.getDepositos({ grupoManetoni: 1 });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            situacoes,
            empresas,
            depositos
        ]);
    }
    createCarteiraClientes(carteiraClientes) {
        this.carteiraClientesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](carteiraClientes);
        this.carteiraClientes = this.carteiraClientesSubject.asObservable();
        this.carteiraClientesSubject.next(carteiraClientes);
        this.carteiraClientesLoaded = true;
    }
    getCurrentCarteiraClientes() {
        let _carteiraClientes = [];
        if (this.carteiraClientesLoaded === true) {
            _carteiraClientes = this.carteiraClientesSubject.value;
        }
        return _carteiraClientes;
    }
    getCarteiraClientes() {
        return this.vendedoresService.getCarteiraClientes();
    }
    clearCarteiraClientes() {
        if (typeof this.carteiraClientesSubject !== 'undefined') {
            this.carteiraClientesSubject.next([]);
        }
    }
    getPesquisaCliente(termoPesquisa) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            {
                codCliente: 78919,
                razaoSocial: 'LINDSAY',
            },
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    }
    postProducao(nrPedido) {
        return this.http.post(`${this.API}/producao`, nrPedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postExpedicao(nrPedido) {
        return this.http.post(`${this.API}/expedicao`, nrPedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    // getCalculoMaterial(
    //   params
    // ): Observable<Object | JsonResponse> {
    //   return this.http
    //     .get(`${this.API}/material/calculo`, params)
    //     .pipe(take(1));
    // }
    getCalculoMaterial(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/material/calculo`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
ComercialCicloVendasPedidosProducaoTelasFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"] },
    { type: _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosSituacaoPropostaService"] }
];
ComercialCicloVendasPedidosProducaoTelasFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"],
        _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosSituacaoPropostaService"]])
], ComercialCicloVendasPedidosProducaoTelasFormularioService);



/***/ }),

/***/ "8WR6":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/xlsx.service.ts ***!
  \******************************************************/
/*! exports provided: XlsxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsxService", function() { return XlsxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);


// xlsx

let XlsxService = class XlsxService {
    constructor() {
        this.wopts = { bookType: 'xlsx', type: 'array' };
        this.fileLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    export(params) {
        var _a;
        let varExport = [];
        const headers = (_a = params.headers) !== null && _a !== void 0 ? _a : Object.keys(params.data[0]);
        varExport.push(headers);
        params.data.forEach(element => {
            varExport.push(Object.values(element));
        });
        /* generate worksheet */
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(varExport);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, (this.getFileName(params.filename)) + '.xlsx');
    }
    getFile(evt) {
        /* wire up file reader */
        const target = evt.target;
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        const reader = new FileReader();
        reader.onload = (e) => {
            /* read workbook */
            const bstr = e.target.result;
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* save data */
            this.fileLoaded.emit(xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { header: 1 }));
        };
        reader.readAsBinaryString(target.files[0]);
    }
    getFileName(filename = 'relatorio') {
        filename = filename !== null && filename !== void 0 ? filename : 'relatorio';
        const d = (new Date());
        const timestamp = `${d.getFullYear()}_${d.getMonth()}_${d.getDate()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;
        return `${filename}__${timestamp}`;
    }
};
XlsxService.ctorParameters = () => [];
XlsxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], XlsxService);



/***/ }),

/***/ "9Yla":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/modelo/services/modelo.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastroModeloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroModeloService", function() { return TecnologiaInformacaoCadastroModeloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoCadastroModeloService = class TecnologiaInformacaoCadastroModeloService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getModelo(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/item/modelos`, {
            params: params,
            observe: 'response',
        });
    }
    postModelo(modelo) {
        return this.http.post(`${this.API}/tecnologia-informacao/item/modelo`, modelo, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoCadastroModeloService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoCadastroModeloService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoCadastroModeloService);



/***/ }),

/***/ "B4Vw":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/regioes-entrega/services/regioes-entrega.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaRegioesEntregaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRegioesEntregaService", function() { return LogisticaRegioesEntregaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaRegioesEntregaService = class LogisticaRegioesEntregaService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    postRegiaoEntrega(params) {
        return this.http.post(`${this.API}/logistica/regioes-entrega`, params, {
            observe: "response"
        });
    }
    getRegioesEntrega(params) {
        return this.http.get(`${this.API}/logistica/regioes-entrega`, {
            params: params,
            observe: "response"
        });
    }
    getRegiaoEntrega(id) {
        return this.http.get(`${this.API}/logistica/regioes-entrega/${id}`, {
            observe: "response"
        });
    }
};
LogisticaRegioesEntregaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaRegioesEntregaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaRegioesEntregaService);



/***/ }),

/***/ "B5rI":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/core/icons-fonts-awesome.service.ts ***!
  \*********************************************************************/
/*! exports provided: IconesFontAwesomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconesFontAwesomeService", function() { return IconesFontAwesomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




let IconesFontAwesomeService = class IconesFontAwesomeService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getIcones(icone = {
        qtItensPorPagina: '1000000'
    }) {
        return this.http.get(`${this.API}/servicos/icons`, {
            params: icone,
            observe: 'response'
        });
    }
};
IconesFontAwesomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
IconesFontAwesomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], IconesFontAwesomeService);



/***/ }),

/***/ "C+/D":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/services/generic.service.ts ***!
  \*************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoGenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoGenericService", function() { return SulFluminenseEstoqueAvancadoGenericService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let SulFluminenseEstoqueAvancadoGenericService = class SulFluminenseEstoqueAvancadoGenericService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getLinhas() {
        return this.http.get(`${this.BASE_URL}/common/v2/linhas`, {
            observe: 'response'
        });
    }
    getClasses(params) {
        return this.http.get(`${this.BASE_URL}/common/v2/classes`, {
            params,
            observe: 'response'
        });
    }
    getMateriais(params = {}) {
        return this.http.get(`${this.BASE_URL}/common/v2/materiais`, {
            params,
            observe: 'response'
        });
    }
};
SulFluminenseEstoqueAvancadoGenericService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SulFluminenseEstoqueAvancadoGenericService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SulFluminenseEstoqueAvancadoGenericService);



/***/ }),

/***/ "CU0E":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/escritorios/escritorios.service.ts ***!
  \********************************************************************************/
/*! exports provided: ComercialCadastrosEscritorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEscritorioService", function() { return ComercialCadastrosEscritorioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosEscritorioService = class ComercialCadastrosEscritorioService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/escritorio`;
    }
    getListaEscritorios(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codEscritorio) {
        return this.http
            .get(`${this.API}/alteracoes/${codEscritorio}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codEscritorio) {
        return this.http.get(`${this.API}/detalhes/${codEscritorio}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveEscritorio(escritorio) {
        return this.http.post(`${this.API}/salvar`, escritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateEscritorio(escritorio) {
        return this.http.put(`${this.API}/atualizar`, escritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(escritorio) {
        if (escritorio.codEscritorio !== null) {
            return this.updateEscritorio(escritorio);
        }
        return this.saveEscritorio(escritorio);
    }
    activateEscritorio(codEscritorio) {
        return this.http.post(`${this.API}/ativar`, codEscritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateEscritorio(codEscritorio) {
        return this.http.post(`${this.API}/inativar`, codEscritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosEscritorioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosEscritorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosEscritorioService);



/***/ }),

/***/ "GjWS":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/combos.service.ts ***!
  \********************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisComboService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboService", function() { return ComercialCadastrosMateriaisComboService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tid-software/tid-software.service */ "zN97");





// Services


let ComercialCadastrosMateriaisComboService = class ComercialCadastrosMateriaisComboService {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/materiais/combos`;
    }
    getListaCombos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getAssociacoesMateriais(codMaterial, params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/associacoes/${codMaterial}`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getDetalhes(codMaterial) {
        return this.http
            .get(`${this.API}/detalhes/${codMaterial}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    saveCombo(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    updateCombo(record) {
        return this.http
            .put(`${this.API}/atualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    save(record, action) {
        if (action === 'update') {
            return this.updateCombo(record);
        }
        return this.saveCombo(record);
    }
    deleteAssociacao(codCombo, codAssociacao) {
        return this.http
            .delete(`${this.API}/associacao/remover/${codCombo}/${codAssociacao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    activateCombo(codCombo) {
        return this.http
            .post(`${this.API}/ativar`, codCombo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    inactivateCombo(codCombo) {
        return this.http.post(`${this.API}/inativar`, codCombo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getFilterValues() {
        const linhas = this.tidSoftwareService.getLinhas();
        const classes = this.comercialService.getClasses(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
    }
};
ComercialCadastrosMateriaisComboService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"] }
];
ComercialCadastrosMateriaisComboService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])
], ComercialCadastrosMateriaisComboService);



/***/ }),

/***/ "H0sO":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/requests/estados.service.ts ***!
  \*************************************************************/
/*! exports provided: EstadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosService", function() { return EstadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let EstadosService = class EstadosService {
    constructor() {
        this.estados = [
            {
                sigla: 'AC',
                descricao: 'Acre',
            },
            {
                sigla: 'AL',
                descricao: 'Alagoas',
            },
            {
                sigla: 'AP',
                descricao: 'Amapá',
            },
            {
                sigla: 'AM',
                descricao: 'Amazonas',
            },
            {
                sigla: 'BA',
                descricao: 'Bahia',
            },
            {
                sigla: 'CE',
                descricao: 'Ceará',
            },
            {
                sigla: 'DF',
                descricao: 'Distrito Federal',
            },
            {
                sigla: 'ES',
                descricao: 'Espírito Santo',
            },
            {
                sigla: 'GO',
                descricao: 'Goiás',
            },
            {
                sigla: 'MA',
                descricao: 'Maranhão',
            },
            {
                sigla: 'MT',
                descricao: 'Mato Grosso',
            },
            {
                sigla: 'MS',
                descricao: 'Mato Grosso do Sul',
            },
            {
                sigla: 'MG',
                descricao: 'Minas Gerais',
            },
            {
                sigla: 'PA',
                descricao: 'Pará',
            },
            {
                sigla: 'PB',
                descricao: 'Paraíba',
            },
            {
                sigla: 'PR',
                descricao: 'Paraná',
            },
            {
                sigla: 'PE',
                descricao: 'Pernambuco',
            },
            {
                sigla: 'PI',
                descricao: 'Piauí',
            },
            {
                sigla: 'RJ',
                descricao: 'Rio de Janeiro',
            },
            {
                sigla: 'RN',
                descricao: 'Rio Grande do Norte',
            },
            {
                sigla: 'RS',
                descricao: 'Rio Grande do Sul',
            },
            {
                sigla: 'RO',
                descricao: 'Rondônia',
            },
            {
                sigla: 'RR',
                descricao: 'Roraima',
            },
            {
                sigla: 'SC',
                descricao: 'Santa Catarina',
            },
            {
                sigla: 'SP',
                descricao: 'São Paulo',
            },
            {
                sigla: 'SE',
                descricao: 'Sergipe',
            },
            {
                sigla: 'TO',
                descricao: 'Tocantins',
            },
        ];
    }
    getEstados() {
        return this.estados;
    }
};
EstadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], EstadosService);



/***/ }),

/***/ "H8J8":
/*!**********************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/services/fusion.service.ts ***!
  \**********************************************************************/
/*! exports provided: LogisticaEntregaFusionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaFusionService", function() { return LogisticaEntregaFusionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaEntregaFusionService = class LogisticaEntregaFusionService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getPedidos(params = {}) {
        return this.http.get(`${this.API}/logistica/integracoes/fusion/pedidos`, {
            params: params,
            observe: 'response',
        });
    }
    integraPedidoFusion(params) {
        return this.http.post(`${this.API}/logistica/integracoes/fusion/pedidos`, params, { observe: 'response' });
    }
    getManifestos(params) {
        return this.http.get(`${this.API}/logistica/integracoes/fusion/steellog/manifestos`, {
            params: params,
            observe: 'response',
        });
    }
    postManifesto(params) {
        return this.http.post(`${this.API}/logistica/integracoes/fusion/steellog/manifestos`, params, { observe: 'response' });
    }
    getFiliais() {
        return [
            {
                id: '1',
                nome: 'Centro Logístico 01',
                cnpj: '1028555020',
            },
            {
                id: '21',
                nome: 'Centro Logístico 03',
                cnpj: '1028555020',
            },
            {
                id: '2',
                nome: 'Centro Logístico 07',
                cnpj: '1028555020',
            },
            {
                id: '3',
                nome: 'Centro Logístico 08',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 09 - Montero',
                id: '9',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 11 - Trinidad',
                id: '11',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 12 - Satelite',
                id: '12',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 17 - Sucre',
                id: '17',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 18 - La Paz',
                id: '18',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 19 - Potosi',
                id: '19',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen 20 - Tarija',
                id: '20',
                cnpj: '1028555020',
            },
            {
                nome: 'Almacen V 32',
                id: '25',
                cnpj: '1028555020',
            },
            {
                nome: 'Centro de Acopio y Distribucion',
                id: '14',
                cnpj: '1028555020',
            },
            {
                nome: 'Producción 07',
                id: '22',
                cnpj: '1028555020',
            },
            {
                nome: 'Producción 17',
                id: '23',
                cnpj: '1028555020',
            },
            {
                nome: 'Producción 20',
                id: '24',
                cnpj: '1028555020',
            }
        ];
    }
};
LogisticaEntregaFusionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEntregaFusionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEntregaFusionService);



/***/ }),

/***/ "I/OU":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/requests/generic.service.ts ***!
  \*************************************************************/
/*! exports provided: GenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericService", function() { return GenericService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let GenericService = class GenericService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/common`;
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getEmpresas() {
        return this.http.get(`${this.API}/empresas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDepositos(idEmpresa) {
        return this.http.get(`${this.API}/depositos/${idEmpresa}`);
    }
    getClasses(linha) {
        return this.http.get(`${this.API}/classes/${linha}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getSituacoes() {
        return this.http.get(`${this.API}/situacoes`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFiltros() {
        let materiais = this.getMateriais();
        let linhas = this.getLinhas();
        let empresas = this.getEmpresas();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([materiais, linhas, empresas]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
GenericService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GenericService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GenericService);



/***/ }),

/***/ "JixU":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/checklist/services/checklist.service.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaYmsChecklistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsChecklistService", function() { return LogisticaYmsChecklistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsChecklistService = class LogisticaYmsChecklistService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getChecklist(params) {
        return this.http.get(`${this.API}/logistica/yms/checklist`, {
            params: params,
            observe: 'response',
        });
    }
    postChecklist(checklist) {
        return this.http.post(`${this.API}/logistica/yms/checklist`, checklist, {
            observe: 'response',
        });
    }
};
LogisticaYmsChecklistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsChecklistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsChecklistService);



/***/ }),

/***/ "KWs8":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/prazo-entrega/services/prazo-entrega.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaPrazoEntregaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaPrazoEntregaService", function() { return LogisticaPrazoEntregaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaPrazoEntregaService = class LogisticaPrazoEntregaService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    postPrazoEntrega(params) {
        return this.http.post(`${this.API}/logistica/prazos-entrega`, params, {
            observe: "response"
        });
    }
    getPrazosEntrega(params) {
        return this.http.get(`${this.API}/logistica/prazos-entrega`, {
            params: params,
            observe: "response"
        });
    }
    getPrazoEntrega(id) {
        return this.http.get(`${this.API}/logistica/prazos-entrega/${id}`, {
            observe: "response"
        });
    }
};
LogisticaPrazoEntregaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaPrazoEntregaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaPrazoEntregaService);



/***/ }),

/***/ "KwnO":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/requests/submodulos.service.ts ***!
  \****************************************************************/
/*! exports provided: SubModulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubModulosService", function() { return SubModulosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let SubModulosService = class SubModulosService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/core/submodulo`;
    }
    getSubModulo(idSubModulo) {
        return this.http
            .get(`${this.API}/${idSubModulo}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
SubModulosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SubModulosService);



/***/ }),

/***/ "LreX":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/associacao-linhas.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ComercialCadastrosAssociacaoLinhasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosAssociacaoLinhasService", function() { return ComercialCadastrosAssociacaoLinhasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tid-software/tid-software.service */ "zN97");




// Services


let ComercialCadastrosAssociacaoLinhasService = class ComercialCadastrosAssociacaoLinhasService {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/emailMarketing/associacao`;
    }
    getListaLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAssociacoesSetores(params) {
        return this.http.get(`${this.API}/lista-associacoes`, {
            params: params,
            observe: 'response',
        });
    }
    getLinhas(params) {
        return this.http.get(`${this.API}/linhas`, {
            params: params,
            observe: 'response',
        });
    }
    getSetoresFilter(params) {
        return this.http.get(`${this.API}/setor-atividade`, {
            params: params,
            observe: 'response',
        });
    }
    getDetalhes(params) {
        return this.http.get(`${this.API}/lista-associacoes`, {
            params: params,
            observe: 'response',
        });
    }
    saveLinha(record) {
        return this.http
            .post(`${this.API}/lista-associacoes`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    save(record) {
        return this.saveLinha(record);
    }
    getSetores(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/setor-atividade`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialCadastrosAssociacaoLinhasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"] }
];
ComercialCadastrosAssociacaoLinhasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"]])
], ComercialCadastrosAssociacaoLinhasService);



/***/ }),

/***/ "NIE8":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/requests/escritorios.service.ts ***!
  \*****************************************************************/
/*! exports provided: EscritoriosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscritoriosService", function() { return EscritoriosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let EscritoriosService = class EscritoriosService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/common/escritorios`;
    }
    getEscritorios() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
EscritoriosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EscritoriosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EscritoriosService);



/***/ }),

/***/ "NXOV":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/filiais/services/filiais.service.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticaFiliaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaFiliaisService", function() { return LogisticaFiliaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaFiliaisService = class LogisticaFiliaisService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getFiliais(params) {
        return this.http.get(`${this.API}/logistica/filiais`, {
            params: params,
            observe: 'response',
        });
    }
    getFilial(id) {
        return this.http.get(`${this.API}/logistica/filiais/${id}`, {
            observe: 'response',
        });
    }
    postFiliais(filiais) {
        return this.http.post(`${this.API}/logistica/filiais`, filiais, {
            observe: 'response',
        });
    }
    getUsuariosAssociados(params) {
        return this.http.get(`${this.API}/logistica/filiais/usuarios`, {
            params: params,
            observe: 'response',
        });
    }
    postUsuariosAssociados(associacao) {
        return this.http.post(`${this.API}/logistica/filiais/usuarios`, associacao, {
            observe: 'response',
        });
    }
    deleteAssociacoes(params) {
        return this.http.delete(`${this.API}/logistica/filiais/usuarios`, {
            params: params,
            observe: 'response',
        });
    }
    getUsuarios(params) {
        return this.http.get(`${this.API}/core/mtcorp/usuarios`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaFiliaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaFiliaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaFiliaisService);



/***/ }),

/***/ "PUeC":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/desmembramento/services/desmembramento.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaEntregaDesmembramentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoService", function() { return LogisticaEntregaDesmembramentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");

// angular


// services

let LogisticaEntregaDesmembramentoService = class LogisticaEntregaDesmembramentoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getProdutos(params) {
        return this.http.get(`${this.API}/logistica/pedidos/produtos`, {
            params: params,
            observe: "response"
        });
    }
    getTipoOperacao(params) {
        return this.http.get(`${this.API}/logistica/pedidos/tipo-operacao`, {
            params: params,
            observe: "response"
        });
    }
    post(params) {
        return this.http.post(`${this.API}/logistica/pedidos/desmembramento`, params, {
            observe: "response"
        });
    }
    put(params) {
        return this.http.put(`${this.API}/logistica/pedidos/desmembramento`, params, {
            observe: "response"
        });
    }
};
LogisticaEntregaDesmembramentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEntregaDesmembramentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEntregaDesmembramentoService);



/***/ }),

/***/ "T6IP":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/representantes.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ComercialCadastrosRepresentantesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesService", function() { return ComercialCadastrosRepresentantesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosRepresentantesService = class ComercialCadastrosRepresentantesService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/representantes`;
    }
    getListaRepresentantes(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    saveERP(record) {
        return this.http.post(`${this.API}/save`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateERP(record) {
        return this.http
            .put(`${this.API}/update`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(record, action) {
        console.log(record);
        if (action === 'update') {
            console.log(record);
            return this.updateERP(record);
        }
        return this.saveERP(record);
    }
    getDetalhes(codRepresentante) {
        return this.http
            .get(`${this.API}/detalhes/${codRepresentante}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTipoComissionamento() {
        return this.http.get(`${this.API}/tipo-comissionamento`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getBancos() {
        return this.http.get(`${this.API}/bancos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTipoVendedor() {
        return this.http.get(`${this.API}/tipo-vendedor`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    activateERP(codERP) {
        return this.http
            .post(`${this.API}/ativar`, codERP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    inactivateERP(codERP) {
        return this.http.post(`${this.API}/inativar`, codERP).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAnexos(codRepresentante) {
        return this.http
            .get(`${this.API}/anexo/documentos/${codRepresentante}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAnexos(params, codRepresentante) {
        return this.http.post(`${this.API}/anexo/documentos/salvar?codRepresentante=${codRepresentante}`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    deleteAnexo(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http
            .put(`${this.API}/anexo/documentos/excluir`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosRepresentantesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosRepresentantesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosRepresentantesService);



/***/ }),

/***/ "Tp9O":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/etapas/services/etapas.service.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaYmsEtapasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasService", function() { return LogisticaYmsEtapasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsEtapasService = class LogisticaYmsEtapasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getEtapas(params) {
        return this.http.get(`${this.API}/logistica/yms/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    getEtapa(id) {
        return this.http.get(`${this.API}/logistica/yms/etapas/${id}`, {
            observe: 'response',
        });
    }
    postEtapas(etapas) {
        return this.http.post(`${this.API}/logistica/yms/etapas`, etapas, {
            observe: 'response',
        });
    }
    getSetoresAssociados(params) {
        return this.http.get(`${this.API}/logistica/yms/etapas/setores`, {
            params: params,
            observe: 'response',
        });
    }
    getSetores(params) {
        return this.http.get(`${this.API}/logistica/yms/setores`, {
            params: params,
            observe: 'response',
        });
    }
    deleteAssociacoes(params) {
        return this.http.delete(`${this.API}/logistica/yms/etapas/setores`, {
            params: params,
            observe: 'response',
        });
    }
    postSetoresAssociados(associacao) {
        return this.http.post(`${this.API}/logistica/yms/etapas/setores`, associacao, {
            observe: 'response',
        });
    }
};
LogisticaYmsEtapasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsEtapasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsEtapasService);



/***/ }),

/***/ "WlQZ":
/*!*************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/animated.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/animated */ "tQmC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=animated.js.map

/***/ }),

/***/ "Z/u6":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/services/produtos.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueProdutosService", function() { return TecnologiaInformacaoEstoqueProdutosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoEstoqueProdutosService = class TecnologiaInformacaoEstoqueProdutosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getProdutos(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/produtos`, {
            params: params,
            observe: 'response',
        });
    }
    getProduto(id) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/produtos/${id}`, {
            observe: 'response',
        });
    }
    postProdutos(item) {
        return this.http.post(`${this.API}/tecnologia-informacao/estoque/produtos`, item, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoEstoqueProdutosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoEstoqueProdutosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoEstoqueProdutosService);



/***/ }),

/***/ "Z5a6":
/*!********************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/lang/pt_BR.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * amCharts 4 locale
 *
 * Locale: pt_BR
 * Language: Brazilian Portuguese
 *
 * Follow instructions in [on this page](https://www.amcharts.com/docs/v4/tutorials/creating-translations/) to make corrections or add new translations.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    // Number formatting options.
    // 
    // Please check with the local standards which separator is accepted to be
    // used for separating decimals, and which for thousands.
    "_decimalSeparator": ",",
    "_thousandSeparator": ".",
    // Default date formats for various periods.
    // 
    // This should reflect official or de facto formatting universally accepted
    // in the country translation is being made for
    // Available format codes here:
    // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-date-time/#Format_codes
    // 
    // This will be used when formatting date/time for particular granularity,
    // e.g. "_date_hour" will be shown whenever we need to show time as hours.
    "_date_millisecond": "mm:ss SSS",
    "_date_second": "HH:mm:ss",
    "_date_minute": "HH:mm",
    "_date_hour": "HH:mm",
    "_date_day": "dd MMM",
    "_date_week": "ww",
    "_date_month": "MMM",
    "_date_year": "yyyy",
    // Default duration formats for various base units.
    // 
    // This will be used by DurationFormatter to format numeric values into
    // duration.
    // 
    // Available codes here:
    // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-duration/#Available_Codes
    "_duration_millisecond": "SSS",
    "_duration_second": "ss",
    "_duration_minute": "mm",
    "_duration_hour": "hh",
    "_duration_day": "dd",
    "_duration_week": "ww",
    "_duration_month": "MM",
    "_duration_year": "yyyy",
    // Era translations
    "_era_ad": "DC",
    "_era_bc": "AC",
    // Day part, used in 12-hour formats, e.g. 5 P.M.
    // Please note that these come in 3 variants:
    // * one letter (e.g. "A")
    // * two letters (e.g. "AM")
    // * two letters with dots (e.g. "A.M.")
    // 
    // All three need to to be translated even if they are all the same. Some
    // users might use one, some the other.
    "A": "",
    "P": "",
    "AM": "",
    "PM": "",
    "A.M.": "",
    "P.M.": "",
    // Date-related stuff.
    // 
    // When translating months, if there's a difference, use the form which is
    // best for a full date, e.g. as you would use it in "2018 January 1".
    // 
    // Note that May is listed twice. This is because in English May is the same
    // in both long and short forms, while in other languages it may not be the
    // case. Translate "May" to full word, while "May(short)" to shortened
    // version.
    "January": "Janeiro",
    "February": "Fevereiro",
    "March": "Março",
    "April": "Abril",
    "May": "Maio",
    "June": "Junho",
    "July": "Julho",
    "August": "Agosto",
    "September": "Setembro",
    "October": "Outubro",
    "November": "Novembro",
    "December": "Dezembro",
    "Jan": "Jan",
    "Feb": "Fev",
    "Mar": "Mar",
    "Apr": "Abr",
    "May(short)": "Mai",
    "Jun": "Jun",
    "Jul": "Jul",
    "Aug": "Ago",
    "Sep": "Set",
    "Oct": "Out",
    "Nov": "Nov",
    "Dec": "Dez",
    // Weekdays.
    "Sunday": "Domingo",
    "Monday": "Segunda-feira",
    "Tuesday": "Terça-feira",
    "Wednesday": "Quarta-feira",
    "Thursday": "Quinta-feira",
    "Friday": "Sexta-feira",
    "Saturday": "Sábado",
    "Sun": "Dom",
    "Mon": "Seg",
    "Tue": "Ter",
    "Wed": "Qua",
    "Thu": "Qui",
    "Fri": "Sex",
    "Sat": "Sáb",
    // Date ordinal function.
    // 
    // This is used when adding number ordinal when formatting days in dates.
    // 
    // E.g. "January 1st", "February 2nd".
    // 
    // The function accepts day number, and returns a string to be added to the
    // day, like in default English translation, if we pass in 2, we will receive
    // "nd" back.
    "_dateOrd": function (day) {
        return "º";
    },
    // Various chart controls.
    // Shown as a tooltip on zoom out button.
    "Zoom Out": "Aumentar Zoom",
    // Timeline buttons
    "Play": "Play",
    "Stop": "Parar",
    // Chart's Legend screen reader title.
    "Legend": "Legenda",
    // Legend's item screen reader indicator.
    "Click, tap or press ENTER to toggle": "Clique, toque ou pressione ENTER para alternar",
    // Shown when the chart is busy loading something.
    "Loading": "Carregando",
    // Shown as the first button in the breadcrumb navigation, e.g.:
    // Home > First level > ...
    "Home": "Início",
    // Chart types.
    // Those are used as default screen reader titles for the main chart element
    // unless developer has set some more descriptive title.
    "Chart": "Gráfico",
    "Serial chart": "Gráfico Serial",
    "X/Y chart": "Gráfico XY",
    "Pie chart": "Gráfico de Pizza",
    "Gauge chart": "Gráfico Indicador",
    "Radar chart": "Gráfico de Radar",
    "Sankey diagram": "Diagrama Sankey",
    "Chord diagram": "Diagram Chord",
    "Flow diagram": "Diagrama Flow",
    "TreeMap chart": "Gráfico de Mapa de Árvore",
    // Series types.
    // Used to name series by type for screen readers if they do not have their
    // name set.
    "Series": "Séries",
    "Candlestick Series": "Séries do Candlestick",
    "Column Series": "Séries de Colunas",
    "Line Series": "Séries de Linhas",
    "Pie Slice Series": "Séries de Fatias de Pizza",
    "X/Y Series": "Séries de XY",
    // Map-related stuff.
    "Map": "Mapa",
    "Press ENTER to zoom in": "Pressione ENTER para aumentar o zoom",
    "Press ENTER to zoom out": "Pressione ENTER para diminuir o zoom",
    "Use arrow keys to zoom in and out": "Use as setas para diminuir ou aumentar o zoom",
    "Use plus and minus keys on your keyboard to zoom in and out": "Use as teclas mais ou menos no seu teclado para diminuir ou aumentar o zoom",
    // Export-related stuff.
    // These prompts are used in Export menu labels.
    // 
    // "Export" is the top-level menu item.
    // 
    // "Image", "Data", "Print" as second-level indicating type of export
    // operation.
    // 
    // Leave actual format untranslated, unless you absolutely know that they
    // would convey more meaning in some other way.
    "Export": "Exportar",
    "Image": "Imagem",
    "Data": "Dados",
    "Print": "Imprimir",
    "Click, tap or press ENTER to open": "Clique, toque ou pressione ENTER para abrir",
    "Click, tap or press ENTER to print.": "Clique, toque ou pressione ENTER para imprimir",
    "Click, tap or press ENTER to export as %1.": "Clique, toque ou pressione ENTER para exportar como %1.",
    'To save the image, right-click this link and choose "Save picture as..."': "Para salvar a imagem, clique no link com o botão da direira e escolha \"Salvar imagem como...\"",
    'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "Para salvar, clique na imagem à esquerda com o botão direito e escolha \"Salvar imagem como...\"",
    "(Press ESC to close this message)": "(Pressione ESC para fechar esta mensagem)",
    "Image Export Complete": "A exportação da imagem foi completada",
    "Export operation took longer than expected. Something might have gone wrong.": "A exportação da imagem demorou mais do que o experado. Algo deve ter dado errado.",
    "Saved from": "Salvo de",
    "PNG": "",
    "JPG": "",
    "GIF": "",
    "SVG": "",
    "PDF": "",
    "JSON": "",
    "CSV": "",
    "XLSX": "",
    // Scrollbar-related stuff.
    // 
    // Scrollbar is a control which can zoom and pan the axes on the chart.
    // 
    // Each scrollbar has two grips: left or right (for horizontal scrollbar) or
    // upper and lower (for vertical one).
    // 
    // Prompts change in relation to whether Scrollbar is vertical or horizontal.
    // 
    // The final section is used to indicate the current range of selection.
    "Use TAB to select grip buttons or left and right arrows to change selection": "Use TAB para selecionar os botões ou setas para a direita ou esquerda para mudar a seleção",
    "Use left and right arrows to move selection": "Use as setas para a esquerda ou direita para mover a seleção",
    "Use left and right arrows to move left selection": "Use as setas para a esquerda ou direita para mover a seleção da esquerda",
    "Use left and right arrows to move right selection": "Use as setas para a esquerda ou direita para mover a seleção da direita",
    "Use TAB select grip buttons or up and down arrows to change selection": "Use TAB para selecionar os botões ou setas para cima ou para baixo para mudar a seleção",
    "Use up and down arrows to move selection": "Use as setas para cima ou para baixo para mover a seleção",
    "Use up and down arrows to move lower selection": "Use as setas para cima ou para baixo para mover a seleção de baixo",
    "Use up and down arrows to move upper selection": "Use as setas para cima ou para baixo para mover a seleção de cima",
    "From %1 to %2": "De %1 para %2",
    "From %1": "De %1",
    "To %1": "Para %1",
    // Data loader-related.
    "No parser available for file: %1": "Não há um interpretador para este arquivo: %1",
    "Error parsing file: %1": "Erro analizando o arquivo: %1",
    "Unable to load file: %1": "O arquivo não pôde ser carregado: %1",
    "Invalid date": "Data inválida",
});
//# sourceMappingURL=pt_BR.js.map

/***/ }),

/***/ "ZeMZ":
/*!*************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/material.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/material */ "u3MO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_material__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=material.js.map

/***/ }),

/***/ "Ztrz":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/services/contrato.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastroContratoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroContratoService", function() { return TecnologiaInformacaoCadastroContratoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoCadastroContratoService = class TecnologiaInformacaoCadastroContratoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    //-----------------------------------ITENS--------------------------\\
    getContrato(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/contratos`, {
            params: params,
            observe: 'response',
        });
    }
    postContrato(contrato) {
        return this.http.post(`${this.API}/tecnologia-informacao/contrato`, contrato, {
            observe: 'response',
        });
    }
    //-----------------------------------Docuementos--------------------------\\
    getDocumento(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/contratos/documentos`, {
            params: params,
            observe: 'response',
        });
    }
    postDocumento(params, ID_TECN_INFO_CONT) {
        return this.http.post(`${this.API}/tecnologia-informacao/contrato/documento?ID_TECN_INFO_CONT=${ID_TECN_INFO_CONT}`, params, {
            observe: 'response',
        });
    }
    putDocumento(params) {
        return this.http.put(`${this.API}/tecnologia-informacao/contrato/documento`, params, {
            observe: 'response',
        });
    }
    //------------------------------------  EMPRESAS ------------------------------//
    getEmpresas(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/empresas`, {
            params: params,
            observe: 'response',
        });
    }
    getEmpresasAssoc(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/contratos/empresas`, {
            params: params,
            observe: 'response',
        });
    }
    postEmpresas(params) {
        return this.http.post(`${this.API}/tecnologia-informacao/contratos/empresas`, params, {
            observe: 'response',
        });
    }
    getIndices(params) {
        return this.http.get(`${this.API}/servicos/indices`, {
            params: params,
            observe: 'response',
        });
    }
};
TecnologiaInformacaoCadastroContratoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoCadastroContratoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoCadastroContratoService);



/***/ }),

/***/ "cy+q":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/tipo-contrato/services/tipo-contrato.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastroTipoContratoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroTipoContratoService", function() { return TecnologiaInformacaoCadastroTipoContratoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoCadastroTipoContratoService = class TecnologiaInformacaoCadastroTipoContratoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTipoContrato(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/contrato/tipo-contrato`, {
            params: params,
            observe: 'response',
        });
    }
    postTipoContrato(tipoContrato) {
        return this.http.post(`${this.API}/tecnologia-informacao/contrato/tipo-contrato`, tipoContrato, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoCadastroTipoContratoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoCadastroTipoContratoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoCadastroTipoContratoService);



/***/ }),

/***/ "dRIe":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/gestao-comissionamentos.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ComercialComissoesGestaoComissionamentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesGestaoComissionamentosService", function() { return ComercialComissoesGestaoComissionamentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialComissoesGestaoComissionamentosService = class ComercialComissoesGestaoComissionamentosService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/comissoes/representantes/gestao-comissionamentos`;
    }
    getComissionamentos(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getListaComissoes(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getListaEdicaoComissoes(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/lista-edicao`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetalhesRepresentante(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/representantes-detalhes`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetalhesUnidades(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/unidades-detalhes`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    // getDetalhesRepresentante(params): Observable<any> {
    //   return this.http.get(`${this.API}/comissoes-detalhes/${codGestao}/${codComissao}`)
    //   .pipe(
    //     take(1),
    //     retry(2)
    //     );
    // }
    getFormComissoes(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/dados-comissoes`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getHistorico(codComissaoRepresentante) {
        return this.http.get(`${this.API}/historico/${codComissaoRepresentante}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModelo(codGestao) {
        return this.http.get(`${this.API}/modelos/${codGestao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSituacao() {
        return this.http.get(`${this.API}/situacao`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    // getFilterValues(): Observable<Object | JsonResponse> {
    //   let escritorios = this.getEscritorios();
    //   let representantes = this.getRepresentantes();
    //   return forkJoin([
    //     escritorios,
    //     representantes,
    //   ]).pipe(take(1));
    // }
    getRepresentantes(codEscritorio) {
        return this.http.get(`${this.API}/representantes/${codEscritorio}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetalhes(idAnoMes) {
        return this.http
            .get(`${this.API}/detalhes/${idAnoMes}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPermissoesAcesso() {
        return this.http
            .get(`${this.API}/permissoes-acesso`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    saveComissao(record, action) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateComissao(record, action) {
        return this.http.put(`${this.API}/atualizar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    // getSolicitaNfEscritorio(){
    //   return this.http.get(`${this.API}/solicitar-nf-escritorio`).pipe(take(1));
    // }
    getSolicitaNfRepresentante(params) {
        return this.http
            .post(`${this.API}/solicitar-nf-representante`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postValores(params) {
        return this.http
            .post(`${this.API}/salvar-valores`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAprovar(params) {
        return this.http
            .post(`${this.API}/aprovar`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postReprovar(params) {
        return this.http
            .post(`${this.API}/reprovar`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAnexos(codComissao) {
        return this.http
            .get(`${this.API}/anexo/documentos/${codComissao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAnexos(params, codComissaoRepresentante) {
        return this.http.post(`${this.API}/anexo/documentos/salvar?codComissaoRepresentante=${codComissaoRepresentante}`, params);
    }
    deleteAnexo(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http
            .put(`${this.API}/anexo/documentos/excluir`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialComissoesGestaoComissionamentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialComissoesGestaoComissionamentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialComissoesGestaoComissionamentosService);



/***/ }),

/***/ "dunZ":
/*!**************************************************!*\
  !*** ./node_modules/file-saver/src/FileSaver.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/

// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
  ? window : typeof self === 'object' && self.self === self
  ? self : typeof global === 'object' && global.global === global
  ? global
  : this

function bom (blob, opts) {
  if (typeof opts === 'undefined') opts = { autoBom: false }
  else if (typeof opts !== 'object') {
    console.warn('Deprecated: Expected third argument to be a object')
    opts = { autoBom: !opts }
  }

  // prepend BOM for UTF-8 XML and text/* types (including HTML)
  // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
  }
  return blob
}

function download (url, name, opts) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    saveAs(xhr.response, name, opts)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function corsEnabled (url) {
  var xhr = new XMLHttpRequest()
  // use sync to avoid popup blocker
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
  } catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
                          20, false, false, false, false, 0, null)
    node.dispatchEvent(evt)
  }
}

var saveAs = _global.saveAs || (
  // probably in some web worker
  (typeof window !== 'object' || window !== _global)
    ? function saveAs () { /* noop */ }

  // Use download attribute first if possible (#193 Lumia mobile)
  : 'download' in HTMLAnchorElement.prototype
  ? function saveAs (blob, name, opts) {
    var URL = _global.URL || _global.webkitURL
    var a = document.createElement('a')
    name = name || blob.name || 'download'

    a.download = name
    a.rel = 'noopener' // tabnabbing

    // TODO: detect chrome extensions & packaged apps
    // a.target = '_blank'

    if (typeof blob === 'string') {
      // Support regular links
      a.href = blob
      if (a.origin !== location.origin) {
        corsEnabled(a.href)
          ? download(blob, name, opts)
          : click(a, a.target = '_blank')
      } else {
        click(a)
      }
    } else {
      // Support blobs
      a.href = URL.createObjectURL(blob)
      setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) // 40s
      setTimeout(function () { click(a) }, 0)
    }
  }

  // Use msSaveOrOpenBlob as a second approach
  : 'msSaveOrOpenBlob' in navigator
  ? function saveAs (blob, name, opts) {
    name = name || blob.name || 'download'

    if (typeof blob === 'string') {
      if (corsEnabled(blob)) {
        download(blob, name, opts)
      } else {
        var a = document.createElement('a')
        a.href = blob
        a.target = '_blank'
        setTimeout(function () { click(a) })
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name)
    }
  }

  // Fallback to using FileReader and a popup
  : function saveAs (blob, name, opts, popup) {
    // Open a popup immediately do go around popup blocker
    // Mostly only available on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank')
    if (popup) {
      popup.document.title =
      popup.document.body.innerText = 'downloading...'
    }

    if (typeof blob === 'string') return download(blob, name, opts)

    var force = blob.type === 'application/octet-stream'
    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

    if ((isChromeIOS || (force && isSafari)) && typeof FileReader === 'object') {
      // Safari doesn't allow downloading of blob URLs
      var reader = new FileReader()
      reader.onloadend = function () {
        var url = reader.result
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
        if (popup) popup.location.href = url
        else location = url
        popup = null // reverse-tabnabbing #460
      }
      reader.readAsDataURL(blob)
    } else {
      var URL = _global.URL || _global.webkitURL
      var url = URL.createObjectURL(blob)
      if (popup) popup.location = url
      else location.href = url
      popup = null // reverse-tabnabbing #460
      setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
    }
  }
)

_global.saveAs = saveAs.saveAs = saveAs

if (true) {
  module.exports = saveAs;
}


/***/ }),

/***/ "fKXl":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep not-found {\n  height: 100vh;\n}\n::ng-deep not-found .not-found {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n}\n::ng-deep not-found .not-found #img {\n  height: 70px;\n  margin-right: 15px;\n}\n::ng-deep not-found .not-found #title {\n  color: #586464;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n}\n::ng-deep not-found .not-found #message {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsYUFBQTtBQUhKO0FBSUk7RUFDRSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxXQUFBO0FBRk47QUFHTTtFQUNFLFlBQUE7RUFDQSxrQkNkQztBRGFUO0FBR007RUFDRSxjRWRNO0VGZU4sZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUdNO0VBQ0UsY0VyQkk7RUZzQkosZUFBQTtFQUNBLGdCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuXG4gIG5vdC1mb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAubm90LWZvdW5kIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgICNpbWcge1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGd1dHRlcjtcbiAgICAgIH1cbiAgICAgICN0aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkbWVkaXVtLWdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgIH1cbiAgICAgICNtZXNzYWdlIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRndXR0ZXI6IDE1cHg7XG4kc2lkZWJhci1zaXplOiA0OHB4O1xuJHNpZGViYXItb3Blbi1zaXplOiAyNTBweDtcbiRuYXZiYXItc2l6ZTogNDhweDtcbiRoZWFkZXItc2l6ZTogNDVweDtcbiIsIiRibGFjazogIzAwMDAwMDtcbiRncmF5OiAjNWE1YTVhO1xuJGRhcmstZ3JheTogIzIxMjUyOTtcbiRtZWRpdW0tZ3JheTogIzU4NjQ2NDtcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xuJGN5YW5vOiAjMDBlMGQ4O1xuJGJsdWU6ICMwMDVmZGM7XG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcbiRkYXJrLWJsdWU6ICMwNDMzNWU7XG4kcmVkOiAjYjgzNDJjO1xuJG9yYW5nZTogI2ZmNjYzMztcbiRsaWdodC1vcmFuZ2U6ICNmZjg0Mjk7XG4kYXF1YTogIzIyZmZhMTtcbiRncmVlbjogIzRkY2M3MTtcbiRsaWdodC1ncmVlbjogI2JmZmYwMDtcbiRkYXJrLWdyZWVuOiAjMDA4MDYwO1xuJHllbGxvdzogI2ZmZWEwMDtcbiRnb2xkZW46ICNjYTlmMWQ7XG4kcGluazogI2NjMDc2NjtcbiRwdXJwbGU6ICM3OTBhYTM7XG4kd2hpdGU6ICNmZmZmZmY7XG4kaWNlOiAjZjdmN2Y3O1xuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcbiRwdXJwbGVMaWdodE10Q29ycDogIzk2MjE4ZTtcbiRvcmFuZ2VNdENvcnA6ICNGQzlGM0E7XG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcbiJdfQ== */");

/***/ }),

/***/ "fMkk":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ComercialGestaoAssociacoesCoordenadoresEscritoriosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacoesCoordenadoresEscritoriosService", function() { return ComercialGestaoAssociacoesCoordenadoresEscritoriosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialGestaoAssociacoesCoordenadoresEscritoriosService = class ComercialGestaoAssociacoesCoordenadoresEscritoriosService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/gestao/associacao-coordenadores`;
    }
    getListaCoordenadoresEscritorios() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    putAssociacaoCoordenadorEscritorio(data) {
        return this.http.put(`${this.API}/salvar`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialGestaoAssociacoesCoordenadoresEscritoriosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialGestaoAssociacoesCoordenadoresEscritoriosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialGestaoAssociacoesCoordenadoresEscritoriosService);



/***/ }),

/***/ "fnxe":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js ***!
  \****************************************************************/
/*! exports provided: OrderModule, OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "UWrc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var OrderPipe_1;
let OrderPipe = OrderPipe_1 = class OrderPipe {
    /**
     * Check if a value is a string
     *
     * @param value
     */
    static isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    static caseInsensitiveSort(a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    }
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    static defaultCompare(a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    }
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    static parseExpression(expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    }
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    static getValue(object, expression) {
        for (let i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            const k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    }
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    static setValue(object, value, expression) {
        let i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    }
    transform(value, expression, reverse, isCaseInsensitive = false, comparator) {
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    }
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    sortArray(value, expression, reverse, isCaseInsensitive, comparator) {
        const isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        let compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe_1.caseInsensitiveSort
                : OrderPipe_1.defaultCompare;
        }
        const array = value.sort((a, b) => {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    }
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    transformObject(value, expression, reverse, isCaseInsensitive, comparator) {
        const parsedExpression = OrderPipe_1.parseExpression(expression);
        let lastPredicate = parsedExpression.pop();
        let oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    }
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    multiExpressionTransform(value, expressions, reverse, isCaseInsensitive = false, comparator) {
        return expressions.reverse().reduce((result, expression) => {
            return this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    }
};
OrderPipe = OrderPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "orderBy",
        pure: false
    })
], OrderPipe);

let OrderModule = class OrderModule {
};
OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [OrderPipe],
        exports: [OrderPipe],
        providers: [OrderPipe]
    })
], OrderModule);


//# sourceMappingURL=ngx-order-pipe.js.map


/***/ }),

/***/ "gK9Q":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/marcas/services/marcas.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueMarcasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMarcasService", function() { return TecnologiaInformacaoEstoqueMarcasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoEstoqueMarcasService = class TecnologiaInformacaoEstoqueMarcasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getMarcas(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/produtos/marcas`, {
            params: params,
            observe: 'response',
        });
    }
    postMarcas(marca) {
        return this.http.post(`${this.API}/tecnologia-informacao/estoque/produtos/marcas`, marca, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoEstoqueMarcasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoEstoqueMarcasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoEstoqueMarcasService);



/***/ }),

/***/ "hMv8":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/submodulos/services/submodulos.service.ts ***!
  \*************************************************************************/
/*! exports provided: AdminSubModulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSubModulosService", function() { return AdminSubModulosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AdminSubModulosService = class AdminSubModulosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getSubModulos(submodulo = {}) {
        return this.http.get(`${this.API}/core/submodulos`, {
            params: submodulo,
            observe: "response"
        });
    }
    getSubModulo(id) {
        return this.http.get(`${this.API}/core/submodulos/${id}`, {
            observe: "response"
        });
    }
    postSubModulo(subModulo) {
        return this.http.post(`${this.API}/core/submodulos`, subModulo, { observe: "response" });
    }
};
AdminSubModulosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminSubModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminSubModulosService);



/***/ }),

/***/ "hjNq":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaDashboardConferenciaCteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardConferenciaCteService", function() { return LogisticaDashboardConferenciaCteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaDashboardConferenciaCteService = class LogisticaDashboardConferenciaCteService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getConferencia(params) {
        return this.http.get(`${this.API}/logistica/indicadores/conferencia-cte`, {
            params: params,
            observe: 'response',
        });
    }
    getRelatorio(params) {
        return this.http.get(`${this.API}/logistica/indicadores/conferencia-cte/relatorio`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaDashboardConferenciaCteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaDashboardConferenciaCteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaDashboardConferenciaCteService);



/***/ }),

/***/ "j4Bn":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/tipos-circuito/services/tipos-circuito.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaYmsTiposCircuitoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsTiposCircuitoService", function() { return LogisticaYmsTiposCircuitoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsTiposCircuitoService = class LogisticaYmsTiposCircuitoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTiposCircuito(params) {
        return this.http.get(`${this.API}/logistica/yms/circuitos/tipo`, {
            params: params,
            observe: 'response',
        });
    }
    postTiposCircuito(tipo) {
        return this.http.post(`${this.API}/logistica/yms/circuitos/tipo`, tipo, {
            observe: 'response',
        });
    }
};
LogisticaYmsTiposCircuitoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsTiposCircuitoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsTiposCircuitoService);



/***/ }),

/***/ "jhlZ":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/analise-frete/services/analise-frete.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: LogisticaDashboardsAnaliseFreteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteService", function() { return LogisticaDashboardsAnaliseFreteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let LogisticaDashboardsAnaliseFreteService = class LogisticaDashboardsAnaliseFreteService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getIndicadores(params) {
        return this.http.get(`${this.API}/logistica/dashboards/analise-frete`, {
            params: params,
            observe: "response"
        });
    }
    getRotulos(params) {
        return this.http.get(`${this.API}/logistica/dashboards/analise-frete/rotulos`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaDashboardsAnaliseFreteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaDashboardsAnaliseFreteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaDashboardsAnaliseFreteService);



/***/ }),

/***/ "n2Rm":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/motivo-associacao/motivo-associacao.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ComercialCadastrosMotivoAssociacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMotivoAssociacaoService", function() { return ComercialCadastrosMotivoAssociacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosMotivoAssociacaoService = class ComercialCadastrosMotivoAssociacaoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/motivo-associacao`;
    }
    getListaMotivosAssociacao(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codMotivoAssociacao) {
        return this.http
            .get(`${this.API}/alteracoes/${codMotivoAssociacao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codMotivoAssociacao) {
        return this.http
            .get(`${this.API}/detalhes/${codMotivoAssociacao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveMotivoAssociacao(motivoAssociacao) {
        return this.http.post(`${this.API}/salvar`, motivoAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateMotivoAssociacao(motivoAssociacao) {
        return this.http
            .put(`${this.API}/atualizar`, motivoAssociacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(motivoAssociacao) {
        if (motivoAssociacao.codMotivoAssociacao !== null) {
            return this.updateMotivoAssociacao(motivoAssociacao);
        }
        return this.saveMotivoAssociacao(motivoAssociacao);
    }
    activateMotivoAssociacao(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateMotivoAssociacao(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosMotivoAssociacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosMotivoAssociacaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosMotivoAssociacaoService);



/***/ }),

/***/ "n8zn":
/*!***********************************************************************!*\
  !*** ./src/app/modules/servicos/contatos/services/contato.service.ts ***!
  \***********************************************************************/
/*! exports provided: ContatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoService", function() { return ContatoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ContatoService = class ContatoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    get(params) {
        return this.http.get(`${this.API}/servicos/contatos`, {
            observe: "response",
            params: params
        });
    }
};
ContatoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ContatoService);



/***/ }),

/***/ "nNBc":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/tipo-item/services/tipo-item.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastroTipoItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroTipoItemService", function() { return TecnologiaInformacaoCadastroTipoItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoCadastroTipoItemService = class TecnologiaInformacaoCadastroTipoItemService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTipoItem(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/item/tipo-item`, {
            params: params,
            observe: 'response',
        });
    }
    postTipoItem(tipoItem) {
        return this.http.post(`${this.API}/tecnologia-informacao/item/tipo-item`, tipoItem, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoCadastroTipoItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoCadastroTipoItemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoCadastroTipoItemService);



/***/ }),

/***/ "pK9/":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisService", function() { return ComercialGestaoContratosComerciaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialGestaoContratosComerciaisService = class ComercialGestaoContratosComerciaisService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/gestao/contratos-comerciais`;
    }
    getListaContratos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListaRepresentantes(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetailPanel(codContrato) {
        return this.http.get(`${this.API}/detail-panel/${codContrato}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codContrato) {
        return this.http.get(`${this.API}/detalhes/${codContrato}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    aprovaReprovaEndereco(record) {
        return this.http
            .put(`${this.API}/aprova-reprova-endereco`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getUltimaCompra(codCliente) {
        return this.http
            .get(`${this.API}/ultima-compra/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveContrato(record) {
        return this.http.post(`${this.API}/save`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateContrato(record) {
        return this.http
            .put(`${this.API}/atualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(record, action) {
        if (action === 'update') {
            return this.updateContrato(record);
        }
        return this.saveContrato(record);
    }
    getSituacao() {
        return this.http
            .get(`${this.API}/situacao`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTiposFrete() {
        return this.http
            .get(`${this.API}/tipos-frete`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTipoServico() {
        return this.http
            .get(`${this.API}/tipo-servico`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAprovacao(params) {
        return this.http
            .post(`${this.API}/aprovar`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postReprovacao(params) {
        return this.http
            .post(`${this.API}/reprovar`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAnexos(codContrato) {
        return this.http
            .get(`${this.API}/anexo/documentos/${codContrato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAnexos(params, codContrato) {
        return this.http.post(`${this.API}/anexo/documentos/salvar?codContrato=${codContrato}`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    deleteAnexo(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http
            .put(`${this.API}/anexo/documentos/excluir`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
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
};
ComercialGestaoContratosComerciaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialGestaoContratosComerciaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialGestaoContratosComerciaisService);



/***/ }),

/***/ "sCnT":
/*!****************************************************!*\
  !*** ./src/app/core/not-found/not-found.module.ts ***!
  \****************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "6nXq");



// Modules

// Components

let NotFoundModule = class NotFoundModule {
};
NotFoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]]
    })
], NotFoundModule);



/***/ }),

/***/ "tQmC":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/animated.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ "hM+/");

var theme = function (object) {
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SpriteState")) {
        object.transitionDuration = 400;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Component")) {
        object.rangeChangeDuration = 500;
        object.interpolationDuration = 500;
        object.sequencedInterpolation = false;
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SankeyDiagram")) {
            object.sequencedInterpolation = true;
        }
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSeries")) {
            object.sequencedInterpolation = true;
        }
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Chart")) {
        object.defaultState.transitionDuration = 2000;
        object.hiddenState.transitionDuration = 1000;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
        object.animationDuration = 400;
        object.defaultState.transitionDuration = 400;
        object.hiddenState.transitionDuration = 400;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Scrollbar")) {
        object.animationDuration = 500;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Series")) {
        object.defaultState.transitionDuration = 1000;
        object.hiddenState.transitionDuration = 700;
        object.hiddenState.properties.opacity = 1;
        object.showOnInit = true;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "MapSeries")) {
        object.hiddenState.properties.opacity = 0;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "PercentSeries")) {
        object.hiddenState.properties.opacity = 0;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSlice")) {
        object.defaultState.transitionDuration = 800;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Slice")) {
        object.defaultState.transitionDuration = 700;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Preloader")) {
        object.hiddenState.transitionDuration = 2000;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column")) {
        object.defaultState.transitionDuration = 700;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column3D")) {
        object.hiddenState.properties.opacity = 0;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=animated.js.map

/***/ }),

/***/ "u3MO":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/material.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ "hM+/");
/* harmony import */ var _core_utils_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/Color */ "A9VE");


var theme = function (object) {
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ColorSet")) {
        object.list = [
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F44336"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#E91E63"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#9C27B0"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#673AB7"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#3F51B5"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#2196F3"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#03A9F4"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#00BCD4"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#009688"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#4CAF50"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#8BC34A"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#CDDC39"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FFEB3B"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FFC107"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF9800"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF5722"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#795548"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#9E9E9E"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#607D8B")
        ];
        object.minLightness = 0.2;
        object.maxLightness = 0.7;
        object.reuse = true;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ResizeButton")) {
        object.background.cornerRadiusTopLeft = 20;
        object.background.cornerRadiusTopRight = 20;
        object.background.cornerRadiusBottomLeft = 20;
        object.background.cornerRadiusBottomRight = 20;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
        object.animationDuration = 800;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=material.js.map

/***/ }),

/***/ "uO4K":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/tipos-setor/services/tipos-setor.service.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaYmsTiposSetorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsTiposSetorService", function() { return LogisticaYmsTiposSetorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsTiposSetorService = class LogisticaYmsTiposSetorService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTiposSetor(params) {
        return this.http.get(`${this.API}/logistica/yms/setores/tipo`, {
            params: params,
            observe: 'response',
        });
    }
    getTipo(id) {
        return this.http.get(`${this.API}/logistica/yms/setores/tipo/${id}`, {
            observe: 'response',
        });
    }
    postTiposSetor(tipo) {
        return this.http.post(`${this.API}/logistica/yms/setores/tipo`, tipo, {
            observe: 'response',
        });
    }
};
LogisticaYmsTiposSetorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsTiposSetorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsTiposSetorService);



/***/ }),

/***/ "v9B3":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/tipo-comissionamento.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComercialCadastrosTipoComissionamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoService", function() { return ComercialCadastrosTipoComissionamentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ComercialCadastrosTipoComissionamentoService = class ComercialCadastrosTipoComissionamentoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/tipo-comissionamento`;
    }
    getTipoComissionamento(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAlteracoes(codTipoComissionamento) {
        return this.http
            .get(`${this.API}/alteracoes/${codTipoComissionamento}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getDetalhes(codTipoComissionamento) {
        return this.http
            .get(`${this.API}/detalhes/${codTipoComissionamento}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getDetailTipoComissionamento(codTipoComissionamento) {
        return this.http
            .get(`${this.API}/faixa-percentual/${codTipoComissionamento}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getFilterValues() {
        let linhas = this.getLinhas();
        let classes = this.getClasses(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            linhas,
            classes,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getLinhas() {
        return this.http
            .get(`${this.API}/linhas`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    saveTipoComissionamento(codTipoComissionamento) {
        return this.http.post(`${this.API}/salvar`, codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    updateTipoComissionamento(codTipoComissionamento) {
        return this.http.put(`${this.API}/atualizar`, codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    save(codTipoComissionamento) {
        if (codTipoComissionamento.codTipoComissionamento !== null) {
            return this.updateTipoComissionamento(codTipoComissionamento);
        }
        return this.saveTipoComissionamento(codTipoComissionamento);
    }
    deleteFaixa(params) {
        return this.http
            .put(`${this.API}/delete`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    activateTipoComissionamento(codTipoComissionamento) {
        return this.http.post(`${this.API}/ativar`, codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    inactivateTipoComissionamento(codTipoComissionamento) {
        return this.http.post(`${this.API}/inativar`, codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
ComercialCadastrosTipoComissionamentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosTipoComissionamentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosTipoComissionamentoService);



/***/ }),

/***/ "vGh7":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/tipos-etapa/services/tipos-etapa.service.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaYmsTiposEtapaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsTiposEtapaService", function() { return LogisticaYmsTiposEtapaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsTiposEtapaService = class LogisticaYmsTiposEtapaService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTiposEtapa(params) {
        return this.http.get(`${this.API}/logistica/yms/etapas/tipo`, {
            params: params,
            observe: 'response',
        });
    }
    getTipo(id) {
        return this.http.get(`${this.API}/logistica/yms/etapas/tipo/${id}`, {
            observe: 'response',
        });
    }
    postTiposEtapa(tipo) {
        return this.http.post(`${this.API}/logistica/yms/etapas/tipo`, tipo, {
            observe: 'response',
        });
    }
};
LogisticaYmsTiposEtapaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsTiposEtapaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsTiposEtapaService);



/***/ }),

/***/ "vpXL":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/setores/services/setores.service.ts ***!
  \***************************************************************************/
/*! exports provided: LogisticaYmsSetoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresService", function() { return LogisticaYmsSetoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsSetoresService = class LogisticaYmsSetoresService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getSetores(params) {
        return this.http.get(`${this.API}/logistica/yms/setores`, {
            params: params,
            observe: 'response',
        });
    }
    getSetor(id) {
        return this.http.get(`${this.API}/logistica/yms/setores/${id}`, {
            observe: 'response',
        });
    }
    postSetores(setores) {
        return this.http.post(`${this.API}/logistica/yms/setores`, setores, {
            observe: 'response',
        });
    }
    postIntervalos(params) {
        return this.http.post(`${this.API}/logistica/yms/setores/intervalos`, params, {
            observe: 'response',
        });
    }
    getIntervalos(params) {
        return this.http.get(`${this.API}/logistica/yms/setores/intervalos`, {
            params: params,
            observe: 'response',
        });
    }
    getMateriaisAssociados(params) {
        return this.http.get(`${this.API}/logistica/yms/setores/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    getMateriais(params) {
        return this.http.get(`${this.API}/common/v2/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    deleteAssociacoes(params) {
        return this.http.delete(`${this.API}/logistica/yms/setores/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    postMateriaisAssociados(associacao) {
        return this.http.post(`${this.API}/logistica/yms/setores/materiais`, associacao, {
            observe: 'response',
        });
    }
};
LogisticaYmsSetoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsSetoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsSetoresService);



/***/ }),

/***/ "w8N5":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/tipo-motorista/services/tipo-motorista.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: LogisticaTipoMotoristaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTipoMotoristaService", function() { return LogisticaTipoMotoristaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaTipoMotoristaService = class LogisticaTipoMotoristaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getTipoMotoristas(params) {
        return this.http.get(`${this.API}/logistica/tipo-motorista`, {
            params: params,
            observe: 'response',
        });
    }
    postTipoMotorista(params) {
        return this.http.post(`${this.API}/logistica/tipo-motorista`, params, {
            observe: 'response',
        });
    }
};
LogisticaTipoMotoristaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaTipoMotoristaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaTipoMotoristaService);



/***/ }),

/***/ "ylUn":
/*!***********************************************************************!*\
  !*** ./src/app/modules/comercial/akna/mensagens/mensagens.service.ts ***!
  \***********************************************************************/
/*! exports provided: ComercialAknaMensagensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaMensagensService", function() { return ComercialAknaMensagensService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");


// services


let ComercialAknaMensagensService = class ComercialAknaMensagensService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getMensagens(params) {
        return this.http.get(`${this.API}/comercial/integracoes/akna/lista-mensagens`, {
            params: params,
            observe: 'response',
        });
    }
    postMensagens(mensagens) {
        return this.http.post(`${this.API}/comercial/akna/mensagens`, mensagens, {
            observe: 'response',
        });
    }
};
ComercialAknaMensagensService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ComercialAknaMensagensService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ComercialAknaMensagensService);



/***/ }),

/***/ "yw/Z":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/services/circuitos.service.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaYmsCircuitosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosService", function() { return LogisticaYmsCircuitosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaYmsCircuitosService = class LogisticaYmsCircuitosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getCircuitos(params) {
        return this.http.get(`${this.API}/logistica/yms/circuitos`, {
            params: params,
            observe: 'response',
        });
    }
    getCircuito(id) {
        return this.http.get(`${this.API}/logistica/yms/circuitos/${id}`, {
            observe: 'response',
        });
    }
    postCircuitos(circuitos) {
        return this.http.post(`${this.API}/logistica/yms/circuitos`, circuitos, {
            observe: 'response',
        });
    }
    getEtapasAssociados(params) {
        return this.http.get(`${this.API}/logistica/yms/circuitos/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    getEtapas(params) {
        return this.http.get(`${this.API}/logistica/yms/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    deleteAssociacoes(params) {
        return this.http.delete(`${this.API}/logistica/yms/circuitos/etapas`, {
            params: params,
            observe: 'response',
        });
    }
    postEtapasAssociados(associacao) {
        return this.http.post(`${this.API}/logistica/yms/circuitos/etapas`, associacao, {
            observe: 'response',
        });
    }
};
LogisticaYmsCircuitosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaYmsCircuitosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaYmsCircuitosService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map