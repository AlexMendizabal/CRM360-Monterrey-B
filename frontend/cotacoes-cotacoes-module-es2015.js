(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cotacoes-cotacoes-module"],{

/***/ "34qa":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/formulario/guards/data-resolver.guard.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesFormularioDataResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesFormularioDataResolverGuard", function() { return ComercialCicloVendasCotacoesFormularioDataResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _cotacoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cotacoes.service */ "uuri");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



// Services



let ComercialCicloVendasCotacoesFormularioDataResolverGuard = class ComercialCicloVendasCotacoesFormularioDataResolverGuard {
    constructor(cotacoesService, authService, dateService) {
        this.cotacoesService = cotacoesService;
        this.authService = authService;
        this.dateService = dateService;
        this.user = this.authService.getCurrentUser().info;
    }
    resolve(route) {
        if (route.params && route.params.codCotacao) {
            return this.cotacoesService.getCotacao(route.params.codCotacao, route.params.idEmpresa);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: {
                codVendedor: 88,
                nomeVendedor: 'TIETE CC - LILIANE BUENO',
                /* codVendedor: this.user.idVendedor,
                nomeVendedor: this.user.nomeAbreviado || this.user.nomeCompleto, */
                tipoCotacao: 'Cotação',
                codSituacao: null,
                codCliente: typeof route.params.codCliente !== 'undefined'
                    ? parseInt(route.params.codCliente)
                    : null,
                codContato: null,
                codEndereco: null,
                codEmpresa: null,
                codDeposito: null,
                notaFiscalMae: null,
                codFormaPagamento: null,
                duplicatasSomenteCarteira: false,
                dataEntrega: null,
                dataEncerramento: null,
                dataValidade: null,
                dataLancamento: this.dateService.convert2PhpDate(new Date()),
                codFormaContato: null,
                codOrigemContato: null,
                observacoes: null,
                freteConta: null,
                codTransportadora: null,
                dadosAdicionais: null,
                carrinho: [],
            },
        });
    }
};
ComercialCicloVendasCotacoesFormularioDataResolverGuard.ctorParameters = () => [
    { type: _cotacoes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesService"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] }
];
ComercialCicloVendasCotacoesFormularioDataResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_cotacoes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesService"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])
], ComercialCicloVendasCotacoesFormularioDataResolverGuard);



/***/ }),

/***/ "6t/w":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/formulario/guards/profile-resolver.guard.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesFormularioProfilesResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesFormularioProfilesResolverGuard", function() { return ComercialCicloVendasCotacoesFormularioProfilesResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");


// Services

let ComercialCicloVendasCotacoesFormularioProfilesResolverGuard = class ComercialCicloVendasCotacoesFormularioProfilesResolverGuard {
    constructor(comercialService) {
        this.comercialService = comercialService;
    }
    resolve() {
        return this.comercialService.getPerfil();
    }
};
ComercialCicloVendasCotacoesFormularioProfilesResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_2__["ComercialService"] }
];
ComercialCicloVendasCotacoesFormularioProfilesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_2__["ComercialService"]])
], ComercialCicloVendasCotacoesFormularioProfilesResolverGuard);



/***/ }),

/***/ "CXdD":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/cotacoes.module.ts ***!
  \****************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesModule", function() { return ComercialCicloVendasCotacoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _cotacoes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cotacoes-routing.module */ "sa2A");
/* harmony import */ var _lista_lista_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.module */ "JEP3");
/* harmony import */ var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.module */ "1Ydl");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");



// Modules



// Interfaces

let ComercialCicloVendasCotacoesModule = class ComercialCicloVendasCotacoesModule {
};
ComercialCicloVendasCotacoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cotacoes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesRoutingModule"],
            _lista_lista_module__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesListaModule"],
            _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioModule"]
        ],
        providers: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__["FormDeactivateGuard"]],
    })
], ComercialCicloVendasCotacoesModule);



/***/ }),

/***/ "Ptlm":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/formulario/guards/permissoes-resolver.guard.ts ***!
  \********************************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard", function() { return ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _cotacoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cotacoes.service */ "uuri");


// Services

let ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard = class ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard {
    constructor(cotacoesService) {
        this.cotacoesService = cotacoesService;
    }
    resolve() {
        return this.cotacoesService.getPermissoesAcesso();
    }
};
ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard.ctorParameters = () => [
    { type: _cotacoes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialCicloVendasCotacoesService"] }
];
ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_cotacoes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialCicloVendasCotacoesService"]])
], ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard);



/***/ }),

/***/ "VOPv":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/lista/guards/profile-resolver.guard.ts ***!
  \************************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesListaProfilesResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesListaProfilesResolverGuard", function() { return ComercialCicloVendasCotacoesListaProfilesResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");


// Services

let ComercialCicloVendasCotacoesListaProfilesResolverGuard = class ComercialCicloVendasCotacoesListaProfilesResolverGuard {
    constructor(comercialService) {
        this.comercialService = comercialService;
    }
    resolve() {
        return this.comercialService.getPerfil();
    }
};
ComercialCicloVendasCotacoesListaProfilesResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_2__["ComercialService"] }
];
ComercialCicloVendasCotacoesListaProfilesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_2__["ComercialService"]])
], ComercialCicloVendasCotacoesListaProfilesResolverGuard);



/***/ }),

/***/ "rbnE":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/formulario/guards/cliente-resolver.guard.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesFormularioClienteResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesFormularioClienteResolverGuard", function() { return ComercialCicloVendasCotacoesFormularioClienteResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/comercial/services/vendedores.service */ "4xRd");



// Services

let ComercialCicloVendasCotacoesFormularioClienteResolverGuard = class ComercialCicloVendasCotacoesFormularioClienteResolverGuard {
    constructor(vendedoresService) {
        this.vendedoresService = vendedoresService;
    }
    resolve(route) {
        if (route.params && route.params.codCliente) {
            return this.vendedoresService.getValidaClienteCarteira(route.params.codCliente);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: {
                podeAcessar: true,
            },
        });
    }
};
ComercialCicloVendasCotacoesFormularioClienteResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"] }
];
ComercialCicloVendasCotacoesFormularioClienteResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]])
], ComercialCicloVendasCotacoesFormularioClienteResolverGuard);



/***/ }),

/***/ "sa2A":
/*!************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/cotacoes-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesRoutingModule", function() { return ComercialCicloVendasCotacoesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _lista_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/guards/profile-resolver.guard */ "VOPv");
/* harmony import */ var _formulario_guards_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/guards/cliente-resolver.guard */ "rbnE");
/* harmony import */ var _formulario_guards_data_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/guards/data-resolver.guard */ "34qa");
/* harmony import */ var _formulario_guards_permissoes_resolver_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formulario/guards/permissoes-resolver.guard */ "Ptlm");
/* harmony import */ var _formulario_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formulario/guards/profile-resolver.guard */ "6t/w");
/* harmony import */ var _lista_guards_finalizacao_resolver_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lista/guards/finalizacao-resolver.guard */ "uCr6");
/* harmony import */ var _lista_lista_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lista/lista.module */ "JEP3");
/* harmony import */ var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulario/formulario.module */ "1Ydl");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "2MMy");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formulario/formulario.component */ "TgPE");



// Guards







// Modules


// Components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCicloVendasCotacoesListaComponent"],
        resolve: {
            profile: _lista_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesListaProfilesResolverGuard"],
        },
    },
    {
        path: 'lista/:codCotacao/:codEmpresa',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCicloVendasCotacoesListaComponent"],
        resolve: {
            data: _lista_guards_finalizacao_resolver_guard__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard"],
            profile: _lista_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesListaProfilesResolverGuard"]
        },
    },
    {
        path: 'novo/:idReservado/:codEmpresa',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCicloVendasCotacoesFormularioComponent"],
        resolve: {
            cliente: _formulario_guards_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioClienteResolverGuard"],
            data: _formulario_guards_data_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioDataResolverGuard"],
            permissoes: _formulario_guards_permissoes_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard"],
            profile: _formulario_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasCotacoesFormularioProfilesResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'novo/:idReservado',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCicloVendasCotacoesFormularioComponent"],
        resolve: {
            cliente: _formulario_guards_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioClienteResolverGuard"],
            data: _formulario_guards_data_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioDataResolverGuard"],
            permissoes: _formulario_guards_permissoes_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard"],
            profile: _formulario_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasCotacoesFormularioProfilesResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:codCotacao/:idEmpresa',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCicloVendasCotacoesFormularioComponent"],
        resolve: {
            cliente: _formulario_guards_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioClienteResolverGuard"],
            data: _formulario_guards_data_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioDataResolverGuard"],
            permissoes: _formulario_guards_permissoes_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard"],
            profile: _formulario_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasCotacoesFormularioProfilesResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'visualizar/:codCotacao/:idEmpresa',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCicloVendasCotacoesFormularioComponent"],
        resolve: {
            cliente: _formulario_guards_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioClienteResolverGuard"],
            data: _formulario_guards_data_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioDataResolverGuard"],
            permissoes: _formulario_guards_permissoes_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasCotacoesFormularioPermissoesResolverGuard"],
            profile: _formulario_guards_profile_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasCotacoesFormularioProfilesResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialCicloVendasCotacoesRoutingModule = class ComercialCicloVendasCotacoesRoutingModule {
};
ComercialCicloVendasCotacoesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _lista_lista_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCicloVendasCotacoesListaModule"],
            _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCicloVendasCotacoesFormularioModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCicloVendasCotacoesRoutingModule);



/***/ }),

/***/ "uCr6":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/lista/guards/finalizacao-resolver.guard.ts ***!
  \****************************************************************************************************/
/*! exports provided: ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard", function() { return ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _cotacoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cotacoes.service */ "uuri");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



// Services



let ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard = class ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard {
    constructor(cotacoesService, authService, dateService) {
        this.cotacoesService = cotacoesService;
        this.authService = authService;
        this.dateService = dateService;
        this.user = this.authService.getCurrentUser().info;
    }
    resolve(route) {
        if (route.params) {
            let date = new Date();
            let dataInicial = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 360);
            let dataFinal = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return this.cotacoesService.getCotacoes({
                nrPedido: route.params.codCotacao,
                codEmpresa: route.params.codEmpresa,
                pagina: 1,
                registros: 100,
                codVendedor: 0,
                codDeposito: null,
                dataInicial: this.dateService.convertToUrlDate(dataInicial),
                dataFinal: this.dateService.convertToUrlDate(dataFinal),
            });
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: {
                codVendedor: null,
                nrProposta: null,
            },
        });
    }
};
ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard.ctorParameters = () => [
    { type: _cotacoes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesService"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] }
];
ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_cotacoes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesService"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])
], ComercialCicloVendasCotacoesListaFinalizacaoResolverGuard);



/***/ })

}]);
//# sourceMappingURL=cotacoes-cotacoes-module-es2015.js.map