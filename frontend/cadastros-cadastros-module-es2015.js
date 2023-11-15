(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastros-cadastros-module"],{

/***/ "+zq1":
/*!*********************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/cadastros.module.ts ***!
  \*********************************************************************/
/*! exports provided: AbastecimentoCadastrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosModule", function() { return AbastecimentoCadastrosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _cadastros_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cadastros-routing.module */ "8Iim");
/* harmony import */ var _cadastros_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cadastros.component */ "d/i2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a);





let AbastecimentoCadastrosModule = class AbastecimentoCadastrosModule {
};
AbastecimentoCadastrosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _cadastros_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _cadastros_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastroRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], AbastecimentoCadastrosModule);



/***/ }),

/***/ "/U+1":
/*!*************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/cadastros-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LogisticaCadastrosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaCadastrosRoutingModule", function() { return LogisticaCadastrosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastros.component */ "CwPp");





const routes = [
    {
        path: '',
        component: _cadastros_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaCadastrosComponent"],
    },
    {
        path: 'veiculos',
        loadChildren: () => Promise.all(/*! import() | veiculos-veiculos-module */[__webpack_require__.e("default~agendamentos-agendamentos-module~veiculos-veiculos-module"), __webpack_require__.e("veiculos-veiculos-module")]).then(__webpack_require__.bind(null, /*! ./veiculos/veiculos.module */ "O9Ya")).then((m) => m.LogisticaVeiculosModule),
    },
    {
        path: 'motoristas',
        loadChildren: () => Promise.all(/*! import() | motoristas-motoristas-module */[__webpack_require__.e("common"), __webpack_require__.e("motoristas-motoristas-module")]).then(__webpack_require__.bind(null, /*! ./motoristas/motoristas.module */ "ctpN")).then((m) => m.MotoristasModule),
    },
    {
        path: 'tipo-veiculo',
        loadChildren: () => __webpack_require__.e(/*! import() | tipo-veiculo-tipo-veiculo-module */ "tipo-veiculo-tipo-veiculo-module").then(__webpack_require__.bind(null, /*! ./tipo-veiculo/tipo-veiculo.module */ "o+Na")).then((m) => m.LogisticaTipoVeiculoModule),
    },
    {
        path: 'tipo-motorista',
        loadChildren: () => Promise.all(/*! import() | tipo-motorista-tipo-motorista-module */[__webpack_require__.e("common"), __webpack_require__.e("tipo-motorista-tipo-motorista-module")]).then(__webpack_require__.bind(null, /*! ./tipo-motorista/tipo-motorista.module */ "kywm")).then((m) => m.LogisticaTipoMotoristaModule),
    },
    {
        path: 'sucursais',
        loadChildren: () => Promise.all(/*! import() | filiais-filiais-module */[__webpack_require__.e("common"), __webpack_require__.e("filiais-filiais-module")]).then(__webpack_require__.bind(null, /*! ./filiais/filiais.module */ "k3PR")).then((m) => m.LogisticaFiliaisModule),
    },
    {
        path: 'turnos',
        loadChildren: () => __webpack_require__.e(/*! import() | turnos-turnos-module */ "turnos-turnos-module").then(__webpack_require__.bind(null, /*! ./turnos/turnos.module */ "M12J")).then((m) => m.LogisticaTurnosModule),
    },
    {
        path: 'transportadoras',
        loadChildren: () => Promise.all(/*! import() | transportadoras-transportadoras-module */[__webpack_require__.e("common"), __webpack_require__.e("transportadoras-transportadoras-module")]).then(__webpack_require__.bind(null, /*! ./transportadoras/transportadoras.module */ "inql")).then((m) => m.LogisticaTransportadorasModule),
    },
    {
        path: 'restricoes-transporte',
        loadChildren: () => Promise.all(/*! import() | restricoes-transporte-restricoes-transporte-module */[__webpack_require__.e("common"), __webpack_require__.e("restricoes-transporte-restricoes-transporte-module")]).then(__webpack_require__.bind(null, /*! ./restricoes-transporte/restricoes-transporte.module */ "4f6A")).then((m) => m.LogisticaRestricoesTransporteModule),
    },
    {
        path: 'prazos-entrega',
        loadChildren: () => Promise.all(/*! import() | prazo-entrega-prazo-entrega-module */[__webpack_require__.e("common"), __webpack_require__.e("prazo-entrega-prazo-entrega-module")]).then(__webpack_require__.bind(null, /*! ./prazo-entrega/prazo-entrega.module */ "RYhc")).then((m) => m.PrazoEntregaModule),
    },
    {
        path: 'regioes-entrega',
        loadChildren: () => Promise.all(/*! import() | regioes-entrega-regioes-entrega-module */[__webpack_require__.e("common"), __webpack_require__.e("regioes-entrega-regioes-entrega-module")]).then(__webpack_require__.bind(null, /*! ./regioes-entrega/regioes-entrega.module */ "VuEG")).then((m) => m.RegioesEntregaModule),
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaCadastrosRoutingModule = class LogisticaCadastrosRoutingModule {
};
LogisticaCadastrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaCadastrosRoutingModule);



/***/ }),

/***/ "/hV+":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/cadastros.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jYWRhc3Ryb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "/rHm":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/cadastros.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n\r\n<app-header appTitle=\"Cadastros\">\r\n</app-header>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n        <card-button\r\n          [icon]=\"atividade.iconeAtividade\"\r\n          [text]=\"atividade.nomeAtividade\"\r\n          [routerLink]=\"[atividade.rotaAtividade]\">\r\n        </card-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "2s8L":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/cadastros-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialCadastrosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRoutingModule", function() { return ComercialCadastrosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastros.component */ "F2pR");



// Components

const routes = [
    {
        path: ':idSubModulo',
        children: [
            {
                path: '',
                component: _cadastros_component__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosComponent"],
            },
            {
                path: 'concorrentes',
                loadChildren: () => __webpack_require__.e(/*! import() | concorrentes-concorrentes-module */ "concorrentes-concorrentes-module").then(__webpack_require__.bind(null, /*! ./concorrentes/concorrentes.module */ "9g9u")).then((m) => m.ComercialCadastrosConcorrenteModule),
            },
            {
                path: 'dias-nao-uteis',
                loadChildren: () => __webpack_require__.e(/*! import() | dias-nao-uteis-dias-nao-uteis-module */ "dias-nao-uteis-dias-nao-uteis-module").then(__webpack_require__.bind(null, /*! ./dias-nao-uteis/dias-nao-uteis.module */ "/uTA")).then((m) => m.ComercialCadastrosDiaNaoUtilModule),
            },
            {
                path: 'equipe-venda',
                loadChildren: () => Promise.all(/*! import() | equipe-venda-equipe-venda-module */[__webpack_require__.e("common"), __webpack_require__.e("equipe-venda-equipe-venda-module")]).then(__webpack_require__.bind(null, /*! ./equipe-venda/equipe-venda.module */ "k7Xr")).then((m) => m.ComercialCadastrosEquipeVendaModule),
            },
            {
                path: 'tipos-comissionamento',
                loadChildren: () => Promise.all(/*! import() | tipos-comissionamento-tipo-comissionamento-module */[__webpack_require__.e("common"), __webpack_require__.e("tipos-comissionamento-tipo-comissionamento-module")]).then(__webpack_require__.bind(null, /*! ./tipos-comissionamento/tipo-comissionamento.module */ "cyqI")).then((m) => m.ComercialCadastrosTipoComissionamentoModule),
            },
            {
                path: 'escritorios',
                loadChildren: () => Promise.all(/*! import() | escritorios-escritorios-module */[__webpack_require__.e("common"), __webpack_require__.e("escritorios-escritorios-module")]).then(__webpack_require__.bind(null, /*! ./escritorios/escritorios.module */ "TwC3")).then((m) => m.ComercialCadastrosEscritorioModule),
            },
            {
                path: 'formas-pagamento',
                loadChildren: () => __webpack_require__.e(/*! import() | formas-pagamento-formas-pagamento-module */ "formas-pagamento-formas-pagamento-module").then(__webpack_require__.bind(null, /*! ./formas-pagamento/formas-pagamento.module */ "Fkbs")).then((m) => m.ComercialCadastrosFormasPagamentoModule),
            },
            {
                path: 'associacao-linhas',
                loadChildren: () => Promise.all(/*! import() | associacao-linhas-associacao-linhas-module */[__webpack_require__.e("default~associacao-linhas-associacao-linhas-module~contatos-contatos-module"), __webpack_require__.e("associacao-linhas-associacao-linhas-module")]).then(__webpack_require__.bind(null, /*! ./associacao-linhas/associacao-linhas.module */ "wwCg")).then((m) => m.ComercialCadastrosAssociacaoLinhasModule),
            },
            {
                path: 'materiais/combos',
                loadChildren: () => Promise.all(/*! import() | materiais-combos-combos-module */[__webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("common"), __webpack_require__.e("materiais-combos-combos-module")]).then(__webpack_require__.bind(null, /*! ./materiais/combos/combos.module */ "hEpI")).then((m) => m.ComercialCadastrosMateriaisComboModule),
            },
            {
                path: 'materiais/contratos',
                loadChildren: () => Promise.all(/*! import() | materiais-contratos-contratos-module */[__webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("materiais-contratos-contratos-module")]).then(__webpack_require__.bind(null, /*! ./materiais/contratos/contratos.module */ "L2eR")).then((m) => m.ComercialCadastrosMateriaisContratoModule),
            },
            {
                path: 'materiais/grupos',
                loadChildren: () => Promise.all(/*! import() | materiais-grupos-grupos-module */[__webpack_require__.e("common"), __webpack_require__.e("materiais-grupos-grupos-module")]).then(__webpack_require__.bind(null, /*! ./materiais/grupos/grupos.module */ "kZpS")).then((m) => m.ComercialCadastrosMateriaisGrupoModule),
            },
            {
                path: 'materiais/grupos-materiais-associados',
                loadChildren: () => __webpack_require__.e(/*! import() | materiais-grupos-materiais-associados-grupos-materiais-associados-module */ "materiais-grupos-materiais-associados-grupos-materiais-associados-module").then(__webpack_require__.bind(null, /*! ./materiais/grupos-materiais-associados/grupos-materiais-associados.module */ "7aYQ")).then((m) => m.ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule),
            },
            {
                path: 'materiais/similaridade',
                loadChildren: () => Promise.all(/*! import() | materiais-similaridade-similaridade-module */[__webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("materiais-similaridade-similaridade-module")]).then(__webpack_require__.bind(null, /*! ./materiais/similaridade/similaridade.module */ "Uuwr")).then((m) => m.ComercialCadastrosMateriaisSimilaridadeModule),
            },
            {
                path: 'materiais/ficha-cadastral',
                loadChildren: () => Promise.all(/*! import() | materiais-ficha-cadastral-ficha-cadastral-module */[__webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("materiais-ficha-cadastral-ficha-cadastral-module")]).then(__webpack_require__.bind(null, /*! ./materiais/ficha-cadastral/ficha-cadastral.module */ "BgPZ")).then((m) => m.ComercialCadastrosMateriaisFichaCadastralModule),
            },
            {
                path: 'materiais/cross-sell',
                loadChildren: () => Promise.all(/*! import() | materiais-cross-sell-cross-sell-module */[__webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("materiais-cross-sell-cross-sell-module")]).then(__webpack_require__.bind(null, /*! ./materiais/cross-sell/cross-sell.module */ "b4Zi")).then((m) => m.ComercialCadastrosMateriaisCrossSellModule),
            },
            {
                path: 'propostas/associacao-situacoes-proposta',
                loadChildren: () => __webpack_require__.e(/*! import() | propostas-associacao-situacoes-proposta-associacao-situacoes-proposta-module */ "propostas-associacao-situacoes-proposta-associacao-situacoes-proposta-module").then(__webpack_require__.bind(null, /*! ./propostas/associacao-situacoes-proposta/associacao-situacoes-proposta.module */ "BAy5")).then((m) => m.ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule),
            },
            {
                path: 'representantes',
                loadChildren: () => Promise.all(/*! import() | representantes-representantes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("common"), __webpack_require__.e("representantes-representantes-module")]).then(__webpack_require__.bind(null, /*! ./representantes/representantes.module */ "9lVW")).then((m) => m.ComercialCadastrosRepresentantesModule),
            },
            {
                path: 'contato/origem-contato',
                loadChildren: () => __webpack_require__.e(/*! import() | contato-origem-contato-origem-contato-module */ "contato-origem-contato-origem-contato-module").then(__webpack_require__.bind(null, /*! ./contato/origem-contato/origem-contato.module */ "oc4z")).then((m) => m.ComercialCadastrosContatoOrigemContatoModule),
            },
            {
                path: 'contato/formas-contato',
                loadChildren: () => __webpack_require__.e(/*! import() | contato-formas-contato-formas-contato-module */ "contato-formas-contato-formas-contato-module").then(__webpack_require__.bind(null, /*! ./contato/formas-contato/formas-contato.module */ "2kLB")).then((m) => m.ComercialCadastrosContatoFormasContatoModule),
            },
            {
                path: 'motivo-associacao',
                loadChildren: () => Promise.all(/*! import() | motivo-associacao-motivo-associacao-module */[__webpack_require__.e("common"), __webpack_require__.e("motivo-associacao-motivo-associacao-module")]).then(__webpack_require__.bind(null, /*! ./motivo-associacao/motivo-associacao.module */ "Y1xv")).then((m) => m.ComercialCadastrosMotivoAssociacaoModule),
            },
            {
                path: 'titulos-agenda',
                loadChildren: () => __webpack_require__.e(/*! import() | titulos-agenda-titulos-agenda-module */ "titulos-agenda-titulos-agenda-module").then(__webpack_require__.bind(null, /*! ./titulos-agenda/titulos-agenda.module */ "e5UK")).then((m) => m.ComercialCadastrosTitulosAgendaModule),
            },
            {
                path: 'cnaes',
                loadChildren: () => __webpack_require__.e(/*! import() | cnaes-cnaes-module */ "cnaes-cnaes-module").then(__webpack_require__.bind(null, /*! ./cnaes/cnaes.module */ "XtRM")).then((m) => m.ComercialCadastrosCnaesModule),
            },
            {
                path: 'tipos-frete',
                loadChildren: () => __webpack_require__.e(/*! import() | tipos-frete-tipos-frete-module */ "tipos-frete-tipos-frete-module").then(__webpack_require__.bind(null, /*! ./tipos-frete/tipos-frete.module */ "yPf+")).then((m) => m.ComercialCadastrosTiposFreteModule),
            },
            {
                path: 'operadores-comerciais',
                loadChildren: () => Promise.all(/*! import() | operadores-comerciais-operadores-comerciais-module */[__webpack_require__.e("common"), __webpack_require__.e("operadores-comerciais-operadores-comerciais-module")]).then(__webpack_require__.bind(null, /*! ./operadores-comerciais/operadores-comerciais.module */ "xxq8")).then((m) => m.ComercialCadastrosOperadorComercialModule),
            },
            {
                path: 'setor-atividade',
                loadChildren: () => __webpack_require__.e(/*! import() | setor-atividade-setor-atividade-module */ "setor-atividade-setor-atividade-module").then(__webpack_require__.bind(null, /*! ./setor-atividade/setor-atividade.module */ "plAL")).then((m) => m.ComercialCadastrosSetorAtividadeModule),
            },
            {
                path: 'situacao-propostas',
                loadChildren: () => __webpack_require__.e(/*! import() | situacao-proposta-situacao-proposta-module */ "situacao-proposta-situacao-proposta-module").then(__webpack_require__.bind(null, /*! ./situacao-proposta/situacao-proposta.module */ "czZR")).then((m) => m.ComercialCadastrosSituacaoPropostaModule),
            },
            {
                path: 'tipo-operadores',
                loadChildren: () => Promise.all(/*! import() | tipo-operadores-tipo-operadores-module */[__webpack_require__.e("common"), __webpack_require__.e("tipo-operadores-tipo-operadores-module")]).then(__webpack_require__.bind(null, /*! ./tipo-operadores/tipo-operadores.module */ "UkiM")).then((m) => m.ComercialCadastrosTipoOperadorModule),
            },
            {
                path: 'transportadoras',
                loadChildren: () => Promise.all(/*! import() | transportadoras-transportadoras-module */[__webpack_require__.e("common"), __webpack_require__.e("transportadoras-transportadoras-module")]).then(__webpack_require__.bind(null, /*! ./transportadoras/transportadoras.module */ "A5sv")).then((m) => m.ComercialCadastrosTransportadoraModule),
            },
            {
                path: 'contratos-comerciais/situacoes-contratos',
                loadChildren: () => __webpack_require__.e(/*! import() | contratos-comerciais-situacoes-contratos-comerciais-situacoes-contratos-comerciais-module */ "contratos-comerciais-situacoes-contratos-comerciais-situacoes-contratos-comerciais-module").then(__webpack_require__.bind(null, /*! ./contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais.module */ "qx42")).then((m) => m.ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule),
            },
            {
                path: 'painel-custos',
                loadChildren: () => Promise.all(/*! import() | painel-custos-painel-custos-module */[__webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~integracao-condicoes-pagamento-integracao-condicoes-pagamento-module~integracao-materiais-in~edf8f7c6"), __webpack_require__.e("painel-custos-painel-custos-module")]).then(__webpack_require__.bind(null, /*! ./painel-custos/painel-custos.module */ "+E1q")).then((m) => m.ComercialCadastroPainelCustosModule),
            },
        ],
    },
    {
        path: '',
        children: [
            {
                path: 'concorrentes',
                loadChildren: () => __webpack_require__.e(/*! import() | concorrentes-concorrentes-module */ "concorrentes-concorrentes-module").then(__webpack_require__.bind(null, /*! ./concorrentes/concorrentes.module */ "9g9u")).then((m) => m.ComercialCadastrosConcorrenteModule),
            },
        ],
    },
];
let ComercialCadastrosRoutingModule = class ComercialCadastrosRoutingModule {
};
ComercialCadastrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCadastrosRoutingModule);



/***/ }),

/***/ "8Iim":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/cadastros-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AbastecimentoCadastroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastroRoutingModule", function() { return AbastecimentoCadastroRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _cadastros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastros.component */ "d/i2");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _cadastros_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosComponent"]
            },
            {
                path: 'vinculo-material-deposito',
                loadChildren: () => Promise.all(/*! import() | vinculo-material-deposito-new-vinculo-material-deposito-new-module */[__webpack_require__.e("common"), __webpack_require__.e("vinculo-material-deposito-new-vinculo-material-deposito-new-module")]).then(__webpack_require__.bind(null, /*! ./vinculo-material-deposito-new/vinculo-material-deposito-new.module */ "j3AB")).then(m => m.AbastecimentoCadastrosVinculoMaterialDepositoNewModule)
            },
            {
                path: 'media-vendas',
                loadChildren: () => Promise.all(/*! import() | media-vendas-media-vendas-module */[__webpack_require__.e("common"), __webpack_require__.e("media-vendas-media-vendas-module")]).then(__webpack_require__.bind(null, /*! ./media-vendas/media-vendas.module */ "92u1")).then(m => m.AbastecimentoCadastroMediaVendasModule)
            },
            {
                path: 'nivel-material-estoque',
                loadChildren: () => Promise.all(/*! import() | nivel-estoque-deposito-new-nivel-estoque-deposito-new-module */[__webpack_require__.e("common"), __webpack_require__.e("nivel-estoque-deposito-new-nivel-estoque-deposito-new-module")]).then(__webpack_require__.bind(null, /*! ./nivel-estoque-deposito-new/nivel-estoque-deposito-new.module */ "UOSk")).then(m => m.AbastecimentoCadastrosNivelEstoqueDepositoNewModule)
            },
            {
                path: 'grupo-fornecedores',
                loadChildren: () => Promise.all(/*! import() | grupo-fornecedores-grupo-fornecedores-module */[__webpack_require__.e("common"), __webpack_require__.e("grupo-fornecedores-grupo-fornecedores-module")]).then(__webpack_require__.bind(null, /*! ./grupo-fornecedores/grupo-fornecedores.module */ "C9+i")).then(m => m.AbastecimentoCadastrosGrupoFornecedoresModule)
            },
            {
                path: 'integrador-depositos',
                loadChildren: () => Promise.all(/*! import() | integrador-depositos-integrador-depositos-module */[__webpack_require__.e("common"), __webpack_require__.e("integrador-depositos-integrador-depositos-module")]).then(__webpack_require__.bind(null, /*! ./integrador-depositos/integrador-depositos.module */ "Y3Cv")).then(m => m.AbastecimentoCadastrosIntegradorDepositosModule)
            },
            {
                path: 'parametros-gerais-estoque',
                loadChildren: () => Promise.all(/*! import() | parametros-gerais-estoque-parametros-gerais-estoque-module */[__webpack_require__.e("common"), __webpack_require__.e("parametros-gerais-estoque-parametros-gerais-estoque-module")]).then(__webpack_require__.bind(null, /*! ./parametros-gerais-estoque/parametros-gerais-estoque.module */ "/124")).then(m => m.AbastecimentoCadastrosParametrosGeraisEstoqueModule)
            },
            {
                path: 'classes-materiais',
                loadChildren: () => Promise.all(/*! import() | classes-materiais-classes-materiais-module */[__webpack_require__.e("common"), __webpack_require__.e("classes-materiais-classes-materiais-module")]).then(__webpack_require__.bind(null, /*! ./classes-materiais/classes-materiais.module */ "lJB2")).then(m => m.AbastecimentoCadastrosClassesMateriaisModule)
            },
            {
                path: 'manutencao-classes',
                loadChildren: () => Promise.all(/*! import() | manutencao-classes-manutencao-classes-module */[__webpack_require__.e("common"), __webpack_require__.e("manutencao-classes-manutencao-classes-module")]).then(__webpack_require__.bind(null, /*! ./manutencao-classes/manutencao-classes.module */ "f8DH")).then(m => m.AbastecimentoCadastrosManutencaoClassesModule)
            },
            {
                path: 'manutencao-materiais',
                loadChildren: () => Promise.all(/*! import() | manutencao-materiais-manutencao-materiais-module */[__webpack_require__.e("common"), __webpack_require__.e("manutencao-materiais-manutencao-materiais-module")]).then(__webpack_require__.bind(null, /*! ./manutencao-materiais/manutencao-materiais.module */ "gswh")).then(m => m.AbastecimentoCadastrosManutencaoMateriaisModule)
            },
            {
                path: 'amarracao-materiais',
                loadChildren: () => Promise.all(/*! import() | amarracao-materiais-amarracao-materiais-module */[__webpack_require__.e("common"), __webpack_require__.e("amarracao-materiais-amarracao-materiais-module")]).then(__webpack_require__.bind(null, /*! ./amarracao-materiais/amarracao-materiais.module */ "fkOy")).then(m => m.AbastecimentoCadastrosAmarracaoMateriaisModule)
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
            }
        ]
    }
];
let AbastecimentoCadastroRoutingModule = class AbastecimentoCadastroRoutingModule {
};
AbastecimentoCadastroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoCadastroRoutingModule);



/***/ }),

/***/ "CrqY":
/*!*****************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/cadastros.module.ts ***!
  \*****************************************************************/
/*! exports provided: CadastrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrosModule", function() { return CadastrosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _cadastros_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastros.component */ "CwPp");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _cadastros_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cadastros-routing.module */ "/U+1");

















let CadastrosModule = class CadastrosModule {
};
CadastrosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _cadastros_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaCadastrosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__["CurrencyMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_14__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__["TextMaskModule"],
            _cadastros_routing_module__WEBPACK_IMPORTED_MODULE_16__["LogisticaCadastrosRoutingModule"],
        ],
    })
], CadastrosModule);



/***/ }),

/***/ "CwPp":
/*!********************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/cadastros.component.ts ***!
  \********************************************************************/
/*! exports provided: LogisticaCadastrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaCadastrosComponent", function() { return LogisticaCadastrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastros_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastros.component.html */ "oHeI");
/* harmony import */ var _cadastros_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastros.component.scss */ "h/xn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/title-case.pipe */ "ciPE");
/* harmony import */ var _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/submodulos/services/submodulos.service */ "hMv8");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");










let LogisticaCadastrosComponent = class LogisticaCadastrosComponent {
    constructor(activatedRoute, router, subModulosService, atividadesService, _atividadesService, pnotifyService, titleCasePipe) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subModulosService = subModulosService;
        this.atividadesService = atividadesService;
        this._atividadesService = _atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleCasePipe = titleCasePipe;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getSubmodulo(params['idSubModulo']);
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
    getSubmodulo(idSubModulo) {
        this.subModulosService
            .getSubModulo(idSubModulo)
            .subscribe((response) => {
            if (response.status === 200) {
                let nome = response['body']['nome'];
                this.appName = this.titleCasePipe.transform(nome);
                this.setBreadCrumb(this.appName);
            }
        });
    }
    getAtividadesInternas(idSubModulo) {
        var _a, _b;
        let matricula = (_b = (_a = (JSON.parse(localStorage.getItem('currentUser')))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
        let params = {
            submoduloId: idSubModulo,
            matricula: matricula,
            exibeSidebar: 0
        };
        this._atividadesService
            .getAtividades(params)
            .subscribe(response => {
            if (response.status !== 200) {
                this.handleAtividadesInternasError();
                return;
            }
            this.atividades = response.body["data"];
            this.loaderFullScreen = false;
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    setBreadCrumb(nomeSubModulo) {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica',
                routerLink: '/logistica/home'
            },
            {
                descricao: nomeSubModulo
            }
        ];
    }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.loaderFullScreen = false;
    }
};
LogisticaCadastrosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"] }
];
LogisticaCadastrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-cadastros',
        template: _raw_loader_cadastros_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastros_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]])
], LogisticaCadastrosComponent);



/***/ }),

/***/ "F2pR":
/*!********************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/cadastros.component.ts ***!
  \********************************************************************/
/*! exports provided: ComercialCadastrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosComponent", function() { return ComercialCadastrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastros_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastros.component.html */ "S0s9");
/* harmony import */ var _cadastros_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastros.component.scss */ "/hV+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");





// Services




let ComercialCadastrosComponent = class ComercialCadastrosComponent {
    constructor(activatedRoute, router, atividadesService, _atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.atividadesService = atividadesService;
        this._atividadesService = _atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home',
            },
            {
                descricao: 'Cadastros',
            },
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Cadastros');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params.idSubModulo);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        var _a, _b;
        let matricula = (_b = (_a = (JSON.parse(localStorage.getItem('currentUser')))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
        let params = {
            submoduloId: idSubModulo,
            matricula: matricula,
            exibeSidebar: 0
        };
        this._atividadesService
            .getAtividades(params)
            .subscribe(response => {
            if (response.status !== 200) {
                this.handleAtividadesInternasError();
                return;
            }
            this.atividades = response.body["data"];
            this.loaderFullScreen = false;
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    // getAtividadesInternas(idSubModulo: number) {
    //   this.atividadesService.getAtividadesInternas(idSubModulo).subscribe({
    //     next: (response: any) => {
    //       if (response.responseCode === 200) {
    //         this.atividades = response.result;
    //         this.loaderFullScreen = false;
    //       } else {
    //         this.handleAtividadesInternasError();
    //       }
    //     },
    //     error: (error: any) => {
    //       this.handleAtividadesInternasError();
    //     }
    //   });
    // }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.router.navigate(['/comercial/home']);
    }
};
ComercialCadastrosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
ComercialCadastrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros',
        template: _raw_loader_cadastros_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastros_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], ComercialCadastrosComponent);



/***/ }),

/***/ "S0s9":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/cadastros.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Registros\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Selecione un registro\" [list]=\"atividades\"></card-group>\r\n</app-body>\r\n");

/***/ }),

/***/ "c572":
/*!*****************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/cadastros.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComercialCadastrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosModule", function() { return ComercialCadastrosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _cadastros_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastros-routing.module */ "2s8L");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _cadastros_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastros.component */ "F2pR");



// Modules




// Components

let ComercialCadastrosModule = class ComercialCadastrosModule {
};
ComercialCadastrosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cadastros_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cadastros_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"]
        ]
    })
], ComercialCadastrosModule);



/***/ }),

/***/ "d/i2":
/*!************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/cadastros.component.ts ***!
  \************************************************************************/
/*! exports provided: AbastecimentoCadastrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosComponent", function() { return AbastecimentoCadastrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastros_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastros.component.html */ "/rHm");
/* harmony import */ var _cadastros_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastros.component.scss */ "oOTv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








let AbastecimentoCadastrosComponent = class AbastecimentoCadastrosComponent {
    constructor(atividadesService, router, pnotify, titleService, activatedRoute) {
        this.atividadesService = atividadesService;
        this.router = router;
        this.pnotify = pnotify;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/abastecimento/home'
            },
            {
                descricao: 'Cadastros'
            }
        ];
        this.atividades = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.titleService.setTitle('Cadastros');
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
AbastecimentoCadastrosComponent.ctorParameters = () => [
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AbastecimentoCadastrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-cadastros',
        template: _raw_loader_cadastros_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastros_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], AbastecimentoCadastrosComponent);



/***/ }),

/***/ "h/xn":
/*!**********************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/cadastros.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9jYWRhc3Ryb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "oHeI":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/cadastros.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Prontuário\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Seleccionar una actividad\" [list]=\"atividades\"></card-group>\r\n</app-body>");

/***/ }),

/***/ "oOTv":
/*!**************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/cadastros.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvY2FkYXN0cm9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=cadastros-cadastros-module-es2015.js.map