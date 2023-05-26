(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"],{

/***/ "/Zk1":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/formulario/formulario.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesFormularioService", function() { return ComercialCicloVendasCotacoesFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/vendedores.service */ "4xRd");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/clientes.service */ "8ouN");
/* harmony import */ var _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cadastros/transportadoras/transportadoras.service */ "n0wP");
/* harmony import */ var _agenda_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../agenda/formulario/formulario.service */ "L7KI");
/* harmony import */ var _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../cadastros/situacao-proposta/situacao-proposta.service */ "3WN2");
/* harmony import */ var _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../cadastros/formas-pagamento/formas-pagamento.service */ "tVei");
/* harmony import */ var _cadastros_contato_formas_contato_formas_contato_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../cadastros/contato/formas-contato/formas-contato.service */ "T2FF");
/* harmony import */ var _cadastros_contato_origem_contato_origem_contato_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../cadastros/contato/origem-contato/origem-contato.service */ "RAv3");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../tid-software/tid-software.service */ "zN97");





// Services










let ComercialCicloVendasCotacoesFormularioService = class ComercialCicloVendasCotacoesFormularioService {
    constructor(http, comercialService, vendedoresService, clientesService, tidService, transportadorasService, agendaService, situacoesService, formasPagamentoService, formasContatoService, origensContatoService) {
        this.http = http;
        this.comercialService = comercialService;
        this.vendedoresService = vendedoresService;
        this.clientesService = clientesService;
        this.tidService = tidService;
        this.transportadorasService = transportadorasService;
        this.agendaService = agendaService;
        this.situacoesService = situacoesService;
        this.formasPagamentoService = formasPagamentoService;
        this.formasContatoService = formasContatoService;
        this.origensContatoService = origensContatoService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/ciclo-vendas/cotacoes`;
        this.notifySubmit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.notifySubmitObservable$ = this.notifySubmit.asObservable();
        this.materiaisSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.limparCarrinhoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.calculoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.descontoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.codCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onNotifySubmit(data) {
        this.notifySubmit.next(data);
    }
    loadDependencies() {
        const situacoes = this.situacoesService.getListaSituacaoProposta(null);
        // const depositos = this.comercialService.getDepositos({ idDeposito: [1,18,60,79,/*77*/], tipo: 'ssv' }); 
        // const empresas = this.comercialService.getEmpresas({ idEmpresa: [4,18,55,79,77], tipo: 'search' });
        const empresas = this.tidService.getEmpresas('vendas');
        const depositos = this.comercialService.getDepositos(null);
        const formasPagamento = this.formasPagamentoService.getListaFormasPagamento({ tipoConsulta: 2 });
        const formasContato = this.formasContatoService.getListaFormasContato(null);
        const origensContato = this.origensContatoService.getListaOrigemContato(null);
        const transportadoras = this.transportadorasService.getListaTransportadoras({ tipoConsulta: 2 });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            situacoes,
            empresas,
            depositos,
            formasPagamento,
            formasContato,
            origensContato,
            transportadoras
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
        // {
        //   codCliente: 78919,
        //   razaoSocial: 'LINDSAY',
        // },
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    }
    getLocaisEntrega(codCliente) {
        return this.clientesService.getEnderecos(codCliente, { localEntrega: 1 });
    }
    getAnexos(codCotacao) {
        return this.http
            .get(`${this.API}/anexo/documentos/${codCotacao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postAnexos(params, codCotacao) {
        return this.http.post(`${this.API}/anexo/documentos/salvar?codCotacao=${codCotacao}`, params);
    }
    deleteAnexo(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http
            .put(`${this.API}/anexo/documentos/excluir`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getCliente(codCliente) {
        return this.http.get(`https://crm360.monterrey.com.bo/api/comercial/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
ComercialCicloVendasCotacoesFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"] },
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_14__["ComercialTidSoftwareService"] },
    { type: _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosTransportadoraService"] },
    { type: _agenda_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialAgendaFormularioService"] },
    { type: _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosSituacaoPropostaService"] },
    { type: _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosFormasPagamentoService"] },
    { type: _cadastros_contato_formas_contato_formas_contato_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosContatoFormasContatoService"] },
    { type: _cadastros_contato_origem_contato_origem_contato_service__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContatoOrigemContatoService"] }
];
ComercialCicloVendasCotacoesFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"],
        _services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_14__["ComercialTidSoftwareService"],
        _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosTransportadoraService"],
        _agenda_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialAgendaFormularioService"],
        _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosSituacaoPropostaService"],
        _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosFormasPagamentoService"],
        _cadastros_contato_formas_contato_formas_contato_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosContatoFormasContatoService"],
        _cadastros_contato_origem_contato_origem_contato_service__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContatoOrigemContatoService"]])
], ComercialCicloVendasCotacoesFormularioService);



/***/ }),

/***/ "3WN2":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/situacao-proposta/situacao-proposta.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ComercialCadastrosSituacaoPropostaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaService", function() { return ComercialCadastrosSituacaoPropostaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosSituacaoPropostaService = class ComercialCadastrosSituacaoPropostaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/situacao-proposta`;
    }
    getListaSituacaoProposta(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListaSituacaoPropostaTid() {
        return this.http.get(`${this.API}/tid/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codSituacaoProposta) {
        return this.http
            .get(`${this.API}/alteracoes/${codSituacaoProposta}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codSituacaoProposta) {
        return this.http
            .get(`${this.API}/detalhes/${codSituacaoProposta}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveSituacaoProposta(situacaoProposta) {
        return this.http.post(`${this.API}/salvar`, situacaoProposta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateSituacaoProposta(situacaoProposta) {
        return this.http
            .put(`${this.API}/atualizar`, situacaoProposta)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(situacaoProposta) {
        if (situacaoProposta.codSituacaoProposta !== null) {
            return this.updateSituacaoProposta(situacaoProposta);
        }
        return this.saveSituacaoProposta(situacaoProposta);
    }
    activateSituacaoProposta(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateSituacaoProposta(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosSituacaoPropostaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosSituacaoPropostaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosSituacaoPropostaService);



/***/ }),

/***/ "8ouN":
/*!****************************************************************!*\
  !*** ./src/app/modules/comercial/services/clientes.service.ts ***!
  \****************************************************************/
/*! exports provided: ComercialClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesService", function() { return ComercialClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialClientesService = class ComercialClientesService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/clientes`;
    }
    getStatus() {
        return this.http.get(`${this.API}/pesquisa/status`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClientes(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/pesquisa/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClientesGrupoEconomico(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/grupo-economico/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPermissaoAcesso(id) {
        return this.http
            .get(`${this.API}/permissao-acesso/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetalhes(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/detalhes/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContatosResumido(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/contatos/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getExisteCpfCnpj(documento, getDadosCliente) {
        return this.http
            .get(`${this.API}/verificar-cpf-cnpj/${documento}?getDadosCliente=${getDadosCliente === true ? 1 : 0}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postCliente(data) {
        return this.http
            .post(`${this.API}/pre-cadastro`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPropostaAnaliseCredito(codCliente) {
        return this.http
            .get(`${this.API}/proposta-analise-credito/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDadosFaturamento(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/dados-faturamento/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateDadosFaturamento(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/dados-faturamento`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteAtividadeSecundaria(codCliente, id) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/atividade-secundaria/${codCliente}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEnderecos(codCliente, params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/cadastro/carregar/enderecos/${codCliente}`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEndereco(codCliente, idEndereco, idSituacao) {
        return this.http
            .get(`${this.API}/cadastro/carregar/endereco/${codCliente}/${idEndereco}/${idSituacao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateEndereco(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/endereco`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteEndereco(codCliente, id) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/endereco/${codCliente}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContatos(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/contatos/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContato(codCliente, idContato) {
        return this.http
            .get(`${this.API}/cadastro/carregar/contato/${codCliente}/${idContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateContato(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/contato`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteContato(codCliente, id, idSeqTid) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/contato/${codCliente}/${id}/${idSeqTid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteMeioContato(codCliente, id, idSeqTid) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/meio-contato/${codCliente}/${id}/${idSeqTid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteFilho(idFilho) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/filho/${idFilho}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDadosRelacionamento(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/dados-relacionamento/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateDadosRelacionamento(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/dados-relacionamento`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPotencialCompra(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/potencial-compra/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updatePotencialCompra(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/potencial-compra`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAnexos(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/anexos/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)
        // , retry(2)
        );
    }
    uploadAnexo(data) {
        return this.http
            .post(`${this.API}/cadastro/upload/anexo`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)
        // , retry(2)
        );
    }
    deleteAnexo(idAnexo) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/anexo/${idAnexo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getFilial(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/filial/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTravas(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/travas/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getInformacoesFinanceiras(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/informacoes-financeiras/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getInformacoesComerciais(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/informacoes-comerciais/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getListaEmails(codCliente) {
        return this.http
            .get(`${this.API}/emails/lista/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialClientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialClientesService);



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

/***/ "L7KI":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/agenda/formulario/formulario.service.ts ***!
  \***************************************************************************/
/*! exports provided: ComercialAgendaFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAgendaFormularioService", function() { return ComercialAgendaFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../cadastros/titulos-agenda/titulos-agenda.service */ "yZjN");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vendedores.service */ "4xRd");





// Services


let ComercialAgendaFormularioService = class ComercialAgendaFormularioService {
    constructor(http, vendedoresService, titulosAgendaService) {
        this.http = http;
        this.vendedoresService = vendedoresService;
        this.titulosAgendaService = titulosAgendaService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/agenda/formulario`;
    }
    loadDependencies() {
        let clientes = this.vendedoresService.getCarteiraClientes();
        let vendedores = this.vendedoresService.getVendedores();
        let formasContato = this.getFormasContato();
        let origensContato = this.getOrigensContato();
        let motivosReagendamento = this.getMotivosReagendamento();
        let listarTitulosAgenda = this.titulosAgendaService.getListaTitulosAgenda({
            codSituacao: '1',
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            clientes,
            formasContato,
            origensContato,
            motivosReagendamento,
            listarTitulosAgenda,
            vendedores,
        ]);
    }
    getFormasContato() {
        return this.http.get(`${this.API}/formas-contato`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getOrigensContato() {
        return this.http.get(`${this.API}/origens-contato`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMotivosReagendamento() {
        return this.http
            .get(`${this.API}/motivos-reagendamento`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialAgendaFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"] },
    { type: _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTitulosAgendaService"] }
];
ComercialAgendaFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"],
        _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTitulosAgendaService"]])
], ComercialAgendaFormularioService);



/***/ }),

/***/ "RAv3":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contato/origem-contato/origem-contato.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialCadastrosContatoOrigemContatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoOrigemContatoService", function() { return ComercialCadastrosContatoOrigemContatoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosContatoOrigemContatoService = class ComercialCadastrosContatoOrigemContatoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/contato/origem-contato`;
    }
    getListaOrigemContato(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codOrigemContato) {
        return this.http
            .get(`${this.API}/alteracoes/${codOrigemContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getOrigemContato(codOrigemContato) {
        return this.http
            .get(`${this.API}/detalhes/${codOrigemContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveOrigemContato(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateOrigemContato(record) {
        return this.http.put(`${this.API}/atualizar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(record) {
        if (record.codOrigemContato !== null) {
            return this.updateOrigemContato(record);
        }
        return this.saveOrigemContato(record);
    }
    deleteOrigemContato(codOrigemContato) {
        return this.http
            .delete(`${this.API}/excluir/${codOrigemContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    activateOrigemContato(codOrigemContato) {
        return this.http.post(`${this.API}/ativar`, codOrigemContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateOrigemContato(codOrigemContato) {
        return this.http
            .post(`${this.API}/inativar`, codOrigemContato)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListaOrigemERP() {
        return this.http.get(`${this.API}/erp/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosContatoOrigemContatoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosContatoOrigemContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosContatoOrigemContatoService);



/***/ }),

/***/ "T2FF":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formas-contato.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialCadastrosContatoFormasContatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoService", function() { return ComercialCadastrosContatoFormasContatoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosContatoFormasContatoService = class ComercialCadastrosContatoFormasContatoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/contato/forma-contato`;
    }
    getListaFormasContato(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codFormaContato) {
        return this.http
            .get(`${this.API}/alteracoes/${codFormaContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFormaContato(codFormaContato) {
        return this.http
            .get(`${this.API}/detalhes/${codFormaContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveFormaContato(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateFormaContato(record) {
        return this.http.put(`${this.API}/atualizar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(record) {
        if (record.codFormaContato !== null) {
            return this.updateFormaContato(record);
        }
        return this.saveFormaContato(record);
    }
    deleteFormaContato(codFormaContato) {
        return this.http
            .delete(`${this.API}/excluir/${codFormaContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    activateFormaContato(codFormaContato) {
        return this.http.post(`${this.API}/ativar`, codFormaContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateFormaContato(codFormaContato) {
        return this.http
            .post(`${this.API}/inativar`, codFormaContato)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListaFormasERP() {
        return this.http.get(`${this.API}/erp/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosContatoFormasContatoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosContatoFormasContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosContatoFormasContatoService);



/***/ }),

/***/ "n0wP":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/transportadoras/transportadoras.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialCadastrosTransportadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraService", function() { return ComercialCadastrosTransportadoraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosTransportadoraService = class ComercialCadastrosTransportadoraService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/transportadora`;
    }
    getListaTransportadoras(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTransportadora(id) {
        return this.http.get(`${this.API}/editar/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postTransportadora(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    deleteTransportadora(transportadora) {
        return this.http
            .delete(`${this.API}/excluir/${transportadora.codTransportadoraTid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    deleteContato(codTransportdora, id) {
        return this.http
            .delete(`${this.API}/contato/excluir/${codTransportdora}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosTransportadoraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosTransportadoraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosTransportadoraService);



/***/ }),

/***/ "tVei":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formas-pagamento.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ComercialCadastrosFormasPagamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoService", function() { return ComercialCadastrosFormasPagamentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosFormasPagamentoService = class ComercialCadastrosFormasPagamentoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/formas-pagamento`;
    }
    getListaFormasPagamento(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codFormaPagamento) {
        return this.http
            .get(`${this.API}/alteracoes/${codFormaPagamento}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codFormaPagamento) {
        return this.http
            .get(`${this.API}/detalhes/${codFormaPagamento}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveFormasPagamento(formaPagamento) {
        return this.http.post(`${this.API}/salvar`, formaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateFormasPagamento(formaPagamento) {
        return this.http.put(`${this.API}/atualizar`, formaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(formaPagamento) {
        if (formaPagamento.codFormaPagamento !== null) {
            return this.updateFormasPagamento(formaPagamento);
        }
        return this.saveFormasPagamento(formaPagamento);
    }
    activateFormasPagamento(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateFormasPagamento(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListaFormasERP() {
        return this.http.get(`${this.API}/erp/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosFormasPagamentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosFormasPagamentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosFormasPagamentoService);



/***/ }),

/***/ "yZjN":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/titulos-agenda/titulos-agenda.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ComercialCadastrosTitulosAgendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTitulosAgendaService", function() { return ComercialCadastrosTitulosAgendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosTitulosAgendaService = class ComercialCadastrosTitulosAgendaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/titulos-agenda`;
    }
    getListaTitulosAgenda(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codTitulo) {
        return this.http
            .get(`${this.API}/detalhes/${codTitulo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveTitulosAgenda(titulosAgenda) {
        return this.http.post(`${this.API}/salvar`, titulosAgenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateTitulosAgenda(titulosAgenda) {
        return this.http.put(`${this.API}/atualizar`, titulosAgenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(titulosAgenda) {
        if (titulosAgenda.codTitulo !== null) {
            return this.updateTitulosAgenda(titulosAgenda);
        }
        return this.saveTitulosAgenda(titulosAgenda);
    }
    activateTitulosAgenda(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateTitulosAgenda(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosTitulosAgendaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosTitulosAgendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosTitulosAgendaService);



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
//# sourceMappingURL=default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97-es2015.js.map