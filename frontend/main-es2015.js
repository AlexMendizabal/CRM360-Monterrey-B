(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CRM360-Monterrey\src\main.ts */"zUnb");


/***/ }),

/***/ "09oW":
/*!************************************************************!*\
  !*** ./src/app/shared/pipes/expression-translator.pipe.ts ***!
  \************************************************************/
/*! exports provided: ExpressionTranslatorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionTranslatorPipe", function() { return ExpressionTranslatorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ExpressionTranslatorPipe = class ExpressionTranslatorPipe {
    transform(value, ...args) {
        if (value === undefined)
            return value;
        args.map(arg => value = value.replace('@valor', arg));
        return value;
    }
};
ExpressionTranslatorPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'expressionTranslator'
    })
], ExpressionTranslatorPipe);



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2QIn":
/*!******************************************************!*\
  !*** ./src/app/modules/comercial/comercial.guard.ts ***!
  \******************************************************/
/*! exports provided: ComercialGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGuard", function() { return ComercialGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");


// Services

let ComercialGuard = class ComercialGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
ComercialGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
ComercialGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], ComercialGuard);



/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "49uZ":
/*!********************************************************!*\
  !*** ./src/app/shared/services/core/window.service.ts ***!
  \********************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/providers/window.provider */ "My/9");


// Providers

let WindowService = class WindowService {
    constructor(window) {
        this.window = window;
    }
    getHost() {
        return this.window.location.origin;
    }
    getHostname() {
        return this.window.location.hostname;
    }
    getHostnameLogo() {
        return this.getHostname().replace(/\./g, '_');
    }
    getBase64ImageFromUrl(imageUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var res = yield fetch(imageUrl);
            var blob = yield res.blob();
            return new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.addEventListener('load', function () {
                    resolve(reader.result);
                }, false);
                reader.onerror = () => {
                    return reject(this);
                };
                reader.readAsDataURL(blob);
            });
        });
    }
};
WindowService.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
];
WindowService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Window])
], WindowService);



/***/ }),

/***/ "7JNW":
/*!*************************************************************!*\
  !*** ./src/app/shared/modules/iframe/iframe.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep custom-iframe {\n  height: calc(100vh - 155px);\n  display: block;\n}\n::ng-deep custom-iframe iframe {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgY3VzdG9tLWlmcmFtZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTVweCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "7RMb":
/*!**********************************************!*\
  !*** ./src/app/modules/admin/admin.guard.ts ***!
  \**********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let AdminGuard = class AdminGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
AdminGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], AdminGuard);



/***/ }),

/***/ "88Zu":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/empty-result/empty-result.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"empty-result\" [ngClass]=\"position\">\r\n  <img id=\"img\" src=\"../../../../assets/images/system-alerts/empty.png\">\r\n  <div id=\"message\">{{ message }}</div>\r\n</div>\r\n");

/***/ }),

/***/ "8JWU":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/iframe/iframe.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe [src]=\"url | safe\" frameborder=\"0\"></iframe>\r\n");

/***/ }),

/***/ "8qYg":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/thead-sorter/thead-sorter.component.ts ***!
  \***********************************************************************/
/*! exports provided: TheadSorterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheadSorterComponent", function() { return TheadSorterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thead_sorter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thead-sorter.component.html */ "VwtK");
/* harmony import */ var _thead_sorter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thead-sorter.component.scss */ "E/kX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TheadSorterComponent = class TheadSorterComponent {
    constructor() {
        this.value = '';
    }
    iconClass() {
        let iconClass;
        if (this.active === true) {
            if (this.sort.toLowerCase() === 'asc') {
                iconClass = 'fas fa-sort-up';
            }
            else if (this.sort.toLowerCase() === 'desc') {
                iconClass = 'fas fa-sort-down';
            }
        }
        else {
            iconClass = 'fas fa-sort';
        }
        return iconClass;
    }
};
TheadSorterComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['value',] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['active',] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['sort',] }]
};
TheadSorterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'thead-sorter',
        template: _raw_loader_thead_sorter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thead_sorter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TheadSorterComponent);



/***/ }),

/***/ "8rb8":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "ny86");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "AacJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap */ "SYky");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/window.service */ "49uZ");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_modules_admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/admin/modulos/services/modulos.service */ "RbS/");
/* harmony import */ var _change_password_modal_change_password_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../change-password-modal/change-password-modal.service */ "Ge6a");







// Services







let HeaderComponent = class HeaderComponent {
    constructor(router, authService, modulosService, _modulosService, pnotifyService, windowService, titleService, changePasswordModalService) {
        this.router = router;
        this.authService = authService;
        this.modulosService = modulosService;
        this._modulosService = _modulosService;
        this.pnotifyService = pnotifyService;
        this.windowService = windowService;
        this.titleService = titleService;
        this.changePasswordModalService = changePasswordModalService;
        this.showLogoCliente = true;
        this.user = {};
        this.modulos = [];
        this.modulosLoaded = false;
        this.modulosError = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.getCurrentUser();
        this.getClienteLogo();
        this.getModulos();
    }
    getClienteLogo() {
        this.srcLogoCliente = `/assets/images/logo/clientes/${this.windowService.getHostnameLogo()}_branco.png`;
    }
    onLogoClienteError(event) {
        this.showLogoCliente = false;
    }
    checkTipoAcessoUser() {
        return this.user.tipoAcesso == 'Externo' ? false : true;
    }
    getCurrentUser() {
        this.user = this.authService.getCurrentUser().info;
        if (this.user.nomeAbreviado.trim() != null ||
            this.user.nomeAbreviado.trim() != '') {
            this.userName = this.user.nomeAbreviado;
        }
        else if (this.user.nomeCompleto.trim() != null ||
            this.user.nomeCompleto.trim() != '') {
            this.userName = this.user.nomeCompleto;
        }
    }
    getModulos() {
        var _a, _b;
        this.modulos = [];
        this.modulosLoaded = false;
        this.modulosError = false;
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            this.pnotifyService.error('Você não tem permissão para isso.');
            this.authService.logout();
            return;
        }
        const matricula = (_b = (_a = (JSON.parse(currentUser))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
        if (!matricula) {
            this.pnotifyService.error('Você não tem permissão para isso.');
            this.authService.logout();
            return;
        }
        this._modulosService
            .getModulos({ matricula: matricula })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.modulosLoaded = true;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotifyService.error('Você não tem permissão para isso.');
                this.authService.logout();
                return;
            }
            this.modulos = response.body["data"];
        }, (error) => {
            this.modulosError = true;
            this.pnotifyService.error('Se ha producido un error al cargar los módulos.');
        });
        /* this.modulosService
          .getModulos()
          .pipe(
            finalize(() => {
              this.modulosLoaded = true;
            })
          )
          .subscribe(
            (response: any) => {
              if (response.responseCode === 200) {
                this.modulos = response.result;
              } else {
                this.pnotifyService.error('Você não tem permissão para isso.');
                this.authService.logout();
              }
            },
            (error: any) => {
              this.modulosError = true;
              this.pnotifyService.error('Ocorreu um erro ao carregar os módulos.');
            }
          ); */
    }
    onModulo(modulo) {
        this.titleService.resetTitle();
        this.modulosService.setCurrentModule(modulo);
        this.router.navigate([`/${modulo.rota}`]);
    }
    logout() {
        if (confirm('Tem certeza que deseja sair do MTCorp?')) {
            this.authService.logout();
        }
    }
    openModal(template) {
        this.changePasswordModalService.show(template);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"] },
    { type: src_app_modules_admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__["AdminModulosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_10__["WindowService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _change_password_modal_change_password_modal_service__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordModalService"] }
];
HeaderComponent.propDecorators = {
    showLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['showLoader',] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_10__["WindowService"]],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"],
        src_app_modules_admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__["AdminModulosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_10__["WindowService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _change_password_modal_change_password_modal_service__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordModalService"]])
], HeaderComponent);



/***/ }),

/***/ "8u9S":
/*!***************************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "97Y3":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/back-button/back-button.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep back-button {\n  margin-right: 15px;\n  line-height: 31px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxrQkNITztFRElQLGlCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBiYWNrLWJ1dHRvbiB7XHJcbiAgQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAkZ3V0dGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG59XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "9Xeq":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnpj.pipe */ "gJda");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capitalize-first.pipe */ "TSLY");
/* harmony import */ var _name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./name.pipe */ "XTVK");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe.pipe */ "ITC6");
/* harmony import */ var _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title-case.pipe */ "ciPE");
/* harmony import */ var _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upper-case.pipe */ "EZ6S");
/* harmony import */ var _cep_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cep.pipe */ "bNMV");
/* harmony import */ var _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hifen.pipe */ "qrKy");
/* harmony import */ var _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expression-translator.pipe */ "09oW");
var PipesModule_1;



// Pipes








let PipesModule = PipesModule_1 = class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule_1
        };
    }
};
PipesModule = PipesModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeFirstPipe"],
            _name_pipe__WEBPACK_IMPORTED_MODULE_4__["NamePipe"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"],
            _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"],
            _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"],
            _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__["CNPJPipe"],
            _cep_pipe__WEBPACK_IMPORTED_MODULE_8__["CEPPipe"],
            _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__["HifenPipe"],
            _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__["ExpressionTranslatorPipe"]
        ],
        imports: [],
        exports: [
            _capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeFirstPipe"],
            _name_pipe__WEBPACK_IMPORTED_MODULE_4__["NamePipe"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"],
            _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"],
            _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"],
            _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__["CNPJPipe"],
            _cep_pipe__WEBPACK_IMPORTED_MODULE_8__["CEPPipe"],
            _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__["HifenPipe"],
            _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__["ExpressionTranslatorPipe"]
        ],
        providers: [
            _capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeFirstPipe"],
            _name_pipe__WEBPACK_IMPORTED_MODULE_4__["NamePipe"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"],
            _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"],
            _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"],
            _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__["CNPJPipe"],
            _cep_pipe__WEBPACK_IMPORTED_MODULE_8__["CEPPipe"],
            _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__["HifenPipe"],
            _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__["ExpressionTranslatorPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "9tae":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/modules/permission-denied/permission-denied.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PermissionDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDeniedComponent", function() { return PermissionDeniedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permission_denied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permission-denied.component.html */ "s4qJ");
/* harmony import */ var _permission_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission-denied.component.scss */ "ERND");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let PermissionDeniedComponent = class PermissionDeniedComponent {
    constructor() { }
    ngOnInit() { }
};
PermissionDeniedComponent.ctorParameters = () => [];
PermissionDeniedComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['message',] }]
};
PermissionDeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'permission-denied',
        template: _raw_loader_permission_denied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_permission_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PermissionDeniedComponent);



/***/ }),

/***/ "AacJ":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #navbar {\n  background-color: #3e0752;\n  height: 48px;\n  padding: 0.4rem 1rem 0.4rem 3.5rem;\n  z-index: 1091;\n}\n::ng-deep #navbar .version {\n  color: white;\n}\n::ng-deep #navbar .nav-item {\n  margin: 0px 5px;\n}\n::ng-deep #navbar .nav-item .nav-link {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: transparent;\n  border: unset;\n  border-radius: 50%;\n  color: rgba(252, 159, 58, 0.75) !important;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 35px;\n  padding: 0px !important;\n  width: 35px;\n}\n::ng-deep #navbar .nav-item .nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #ffffff !important;\n}\n::ng-deep #navbar .nav-item .nav-link:focus {\n  outline: unset;\n}\n::ng-deep #navbar .nav-item .btn-group {\n  border: unset !important;\n  border-radius: unset !important;\n}\n::ng-deep #navbar #spinner {\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 1.25rem;\n}\n::ng-deep #navbar #spinner .spinner-border {\n  border-width: 0.2rem;\n  color: rgba(255, 255, 255, 0.75);\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 20px;\n  height: 20px;\n}\n@media (min-width: 400px) and (max-width: auto) {\n  .navbar {\n    padding: 0.4rem 1rem 0.4rem 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UseUJDaUJXO0VEaEJYLFlFSFU7RUZJVixrQ0FBQTtFQUNBLGFBQUE7QUFISjtBQVFJO0VBQ0UsWUFBQTtBQU5OO0FBUUk7RUFDRSxlQUFBO0FBTk47QUFPTTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNGLGtCQUFBO0VBQ0UscUJBQUE7TUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFMUjtBQU1RO0VBQ0UsMENBQUE7RUFDQSx5QkFBQTtBQUpWO0FBTVE7RUFDRSxjQUFBO0FBSlY7QUFPTTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7QUFMUjtBQVFJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7QUFOTjtBQU9NO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxSO0FBVUE7RUFDRTtJQUNFLGtDQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzJztcclxuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuICAjbmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGVNdENvcnA7XHJcbiAgICBoZWlnaHQ6ICRuYXZiYXItc2l6ZTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtIDAuNHJlbSAzLjVyZW07XHJcbiAgICB6LWluZGV4OiAxMDkxO1xyXG5cclxuICAgIC8vICNsb2dvLW1hbmV0b25pe1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlTXRDb3JwO1xyXG4gICAgLy8gfVxyXG4gICAgLnZlcnNpb257XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKCRvcmFuZ2VNdENvcnAsIDAuNzUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4xKTtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICNzcGlubmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC43NSk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiBhdXRvKSB7XHJcbiAgLm5hdmJhcntcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtIDAuNHJlbSAzLjVyZW07XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuIiwiJGJsYWNrOiAjMDAwMDAwO1xyXG4kZ3JheTogIzVhNWE1YTtcclxuJGRhcmstZ3JheTogIzIxMjUyOTtcclxuJG1lZGl1bS1ncmF5OiAjNTg2NDY0O1xyXG4kbGlnaHQtZ3JheTogI2U1ZTVlMztcclxuJGN5YW5vOiAjMDBlMGQ4O1xyXG4kYmx1ZTogIzAwNWZkYztcclxuJGxpZ2h0LWJsdWU6ICM4RkI5RUY7XHJcbiRkYXJrLWJsdWU6ICMwNDMzNWU7XHJcbiRyZWQ6ICNiODM0MmM7XHJcbiRvcmFuZ2U6ICNmZjY2MzM7XHJcbiRsaWdodC1vcmFuZ2U6ICNmZjg0Mjk7XHJcbiRhcXVhOiAjMjJmZmExO1xyXG4kZ3JlZW46ICM0ZGNjNzE7XHJcbiRsaWdodC1ncmVlbjogI2JmZmYwMDtcclxuJGRhcmstZ3JlZW46ICMwMDgwNjA7XHJcbiR5ZWxsb3c6ICNmZmVhMDA7XHJcbiRnb2xkZW46ICNjYTlmMWQ7XHJcbiRwaW5rOiAjY2MwNzY2O1xyXG4kcHVycGxlOiAjNzkwYWEzO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRpY2U6ICNmN2Y3Zjc7XHJcbiRwdXJwbGVNdENvcnA6ICMzZTA3NTI7XHJcbiRwdXJwbGVMaWdodE10Q29ycDogIzk2MjE4ZTtcclxuJG9yYW5nZU10Q29ycDogI0ZDOUYzQTtcclxuJG9yYW5nZURhcmtNdENvcnA6ICM5ZTUyMDE7XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API: '/api',
    URL_MTCORP: 'http://23.254.204.187/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BduS":
/*!************************************************!*\
  !*** ./src/app/modules/fiscal/fiscal.guard.ts ***!
  \************************************************/
/*! exports provided: FiscalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalGuard", function() { return FiscalGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let FiscalGuard = class FiscalGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
FiscalGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
FiscalGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], FiscalGuard);



/***/ }),

/***/ "Dpis":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/xlsx/xlsx.component.ts ***!
  \*******************************************************/
/*! exports provided: XlsxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsxComponent", function() { return XlsxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_xlsx_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./xlsx.component.html */ "rrhx");
/* harmony import */ var _xlsx_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xlsx.component.scss */ "yeGK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _xlsx_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xlsx.service */ "eOmW");




// xlsx


let XlsxComponent = class XlsxComponent {
    constructor(xlsxEventEmitter) {
        this.xlsxEventEmitter = xlsxEventEmitter;
        this.files = [];
        this.headers = [];
        this.data = [[1, 2], [3, 4]];
        this.wopts = { bookType: 'xlsx', type: 'array' };
    }
    ngOnInit() { }
    //fileName: string = 'export.xlsx';
    onFileChange(evt) {
        /* wire up file reader */
        const target = evt.target;
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        const reader = new FileReader();
        reader.onload = (e) => {
            /* read workbook */
            const bstr = e.target.result;
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* save data */
            this.data = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(ws, { header: 1 });
            this.xlsxEventEmitter.fileEventEmitter.emit(this.data);
            this.data = [];
        };
        reader.readAsBinaryString(target.files[0]);
    }
    export(obj, filename = 'relatório') {
        const argument = this.makeArray(obj);
        /* generate worksheet */
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].aoa_to_sheet(argument);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](wb, filename + '.xlsx');
    }
    makeArray(data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (index === 0)
                this.headers = element;
            else {
                if (element[0] > 0) {
                    const qtElementos = this.files.length;
                    this.files[qtElementos] = {};
                    for (let i = 0; i < this.headers.length; i++)
                        this.files[qtElementos][this.headers[i]] = element[i];
                }
            }
        }
    }
};
XlsxComponent.ctorParameters = () => [
    { type: _xlsx_service__WEBPACK_IMPORTED_MODULE_5__["XlsxService"] }
];
XlsxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'xlsx',
        template: _raw_loader_xlsx_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_xlsx_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_xlsx_service__WEBPACK_IMPORTED_MODULE_5__["XlsxService"]])
], XlsxComponent);



/***/ }),

/***/ "E/kX":
/*!*************************************************************************!*\
  !*** ./src/app/shared/modules/thead-sorter/thead-sorter.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep thead-sorter {\n  display: block;\n  width: 100%;\n}\n::ng-deep thead-sorter button {\n  color: #000000;\n  background-color: transparent;\n  border: unset;\n  padding: 0;\n}\n::ng-deep thead-sorter button i {\n  margin-right: 0.5rem;\n}\n::ng-deep thead-sorter button span {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n::ng-deep thead-sorter:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvdGhlYWQtc29ydGVyL3RoZWFkLXNvcnRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBRko7QUFHSTtFQUNFLGNDUEU7RURRRiw2QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRE47QUFFTTtFQUNFLG9CQUFBO0FBQVI7QUFFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQVI7QUFHSTtFQUNFLGVBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3RoZWFkLXNvcnRlci90aGVhZC1zb3J0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XHJcblxyXG4gIHRoZWFkLXNvcnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzAwMDAwMDtcclxuJGdyYXk6ICM1YTVhNWE7XHJcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XHJcbiRtZWRpdW0tZ3JheTogIzU4NjQ2NDtcclxuJGxpZ2h0LWdyYXk6ICNlNWU1ZTM7XHJcbiRjeWFubzogIzAwZTBkODtcclxuJGJsdWU6ICMwMDVmZGM7XHJcbiRsaWdodC1ibHVlOiAjOEZCOUVGO1xyXG4kZGFyay1ibHVlOiAjMDQzMzVlO1xyXG4kcmVkOiAjYjgzNDJjO1xyXG4kb3JhbmdlOiAjZmY2NjMzO1xyXG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xyXG4kYXF1YTogIzIyZmZhMTtcclxuJGdyZWVuOiAjNGRjYzcxO1xyXG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XHJcbiRkYXJrLWdyZWVuOiAjMDA4MDYwO1xyXG4keWVsbG93OiAjZmZlYTAwO1xyXG4kZ29sZGVuOiAjY2E5ZjFkO1xyXG4kcGluazogI2NjMDc2NjtcclxuJHB1cnBsZTogIzc5MGFhMztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kaWNlOiAjZjdmN2Y3O1xyXG4kcHVycGxlTXRDb3JwOiAjM2UwNzUyO1xyXG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XHJcbiRvcmFuZ2VNdENvcnA6ICNGQzlGM0E7XHJcbiRvcmFuZ2VEYXJrTXRDb3JwOiAjOWU1MjAxO1xyXG4iXX0= */");

/***/ }),

/***/ "ERND":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/modules/permission-denied/permission-denied.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep permission-denied {\n  width: 100%;\n}\n::ng-deep permission-denied .permission-denied {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n}\n::ng-deep permission-denied .permission-denied #img {\n  height: 70px;\n  margin-right: 15px;\n}\n::ng-deep permission-denied .permission-denied #title {\n  color: #586464;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n}\n::ng-deep permission-denied .permission-denied #message {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvcGVybWlzc2lvbi1kZW5pZWQvcGVybWlzc2lvbi1kZW5pZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxXQUFBO0FBSEo7QUFJSTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLFdBQUE7QUFGTjtBQUdNO0VBQ0UsWUFBQTtFQUNBLGtCQ2RDO0FEYVQ7QUFHTTtFQUNFLGNFZE07RUZlTixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURSO0FBR007RUFDRSxjRXJCSTtFRnNCSixlQUFBO0VBQ0EsZ0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3Blcm1pc3Npb24tZGVuaWVkL3Blcm1pc3Npb24tZGVuaWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XHJcblxyXG4gIHBlcm1pc3Npb24tZGVuaWVkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnBlcm1pc3Npb24tZGVuaWVkIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICNpbWcge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRndXR0ZXI7XHJcbiAgICAgIH1cclxuICAgICAgI3RpdGxlIHtcclxuICAgICAgICBjb2xvcjogJG1lZGl1bS1ncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgI21lc3NhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iLCIkYmxhY2s6ICMwMDAwMDA7XHJcbiRncmF5OiAjNWE1YTVhO1xyXG4kZGFyay1ncmF5OiAjMjEyNTI5O1xyXG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XHJcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xyXG4kY3lhbm86ICMwMGUwZDg7XHJcbiRibHVlOiAjMDA1ZmRjO1xyXG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcclxuJGRhcmstYmx1ZTogIzA0MzM1ZTtcclxuJHJlZDogI2I4MzQyYztcclxuJG9yYW5nZTogI2ZmNjYzMztcclxuJGxpZ2h0LW9yYW5nZTogI2ZmODQyOTtcclxuJGFxdWE6ICMyMmZmYTE7XHJcbiRncmVlbjogIzRkY2M3MTtcclxuJGxpZ2h0LWdyZWVuOiAjYmZmZjAwO1xyXG4kZGFyay1ncmVlbjogIzAwODA2MDtcclxuJHllbGxvdzogI2ZmZWEwMDtcclxuJGdvbGRlbjogI2NhOWYxZDtcclxuJHBpbms6ICNjYzA3NjY7XHJcbiRwdXJwbGU6ICM3OTBhYTM7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGljZTogI2Y3ZjdmNztcclxuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcclxuJHB1cnBsZUxpZ2h0TXRDb3JwOiAjOTYyMThlO1xyXG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xyXG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcclxuIl19 */");

/***/ }),

/***/ "EZ6S":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/upper-case.pipe.ts ***!
  \*************************************************/
/*! exports provided: UpperCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperCasePipe", function() { return UpperCasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let UpperCasePipe = class UpperCasePipe {
    constructor() { }
    transform(string) {
        return string.toUpperCase();
    }
};
UpperCasePipe.ctorParameters = () => [];
UpperCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'upperCase' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UpperCasePipe);



/***/ }),

/***/ "Ge6a":
/*!*****************************************************************************!*\
  !*** ./src/app/core/change-password-modal/change-password-modal.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ChangePasswordModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModalService", function() { return ChangePasswordModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");




let ChangePasswordModalService = class ChangePasswordModalService {
    constructor(authService, bsModalService) {
        this.authService = authService;
        this.bsModalService = bsModalService;
    }
    show(template) {
        this.modalRef = this.bsModalService.show(template, {
            class: 'modal-lg',
        });
    }
    hide() {
        this.modalRef.hide();
    }
    changePassword(data) {
        return this.authService.changePassword(data);
    }
};
ChangePasswordModalService.ctorParameters = () => [
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ChangePasswordModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ChangePasswordModalService);



/***/ }),

/***/ "Gkya":
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/loader/spinner-navbar/spinner-navbar.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep loader-spinner-navbar {\n  right: 295px;\n  position: absolute;\n  top: 14px;\n  z-index: 1092;\n}\n::ng-deep loader-spinner-navbar .spinner-border {\n  color: rgba(255, 255, 255, 0.75);\n  border-width: 0.2rem;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvbG9hZGVyL3NwaW5uZXItbmF2YmFyL3NwaW5uZXItbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFGSjtBQUdJO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9sb2FkZXIvc3Bpbm5lci1uYXZiYXIvc3Bpbm5lci1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XHJcblxyXG4gIGxvYWRlci1zcGlubmVyLW5hdmJhciB7XHJcbiAgICByaWdodDogMjk1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICB6LWluZGV4OiAxMDkyO1xyXG4gICAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjc1KTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwLjJyZW07XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "H0fO":
/*!*************************************************************************!*\
  !*** ./src/app/shared/modules/empty-result/empty-result.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep empty-result {\n  display: block;\n}\n::ng-deep empty-result .empty-result {\n  display: -ms-flexbox;\n  display: flex;\n}\n::ng-deep empty-result .empty-result.left {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n::ng-deep empty-result .empty-result.center {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n::ng-deep empty-result .empty-result.right {\n  -ms-flex-pack: end;\n      justify-content: end;\n}\n::ng-deep empty-result .empty-result #img {\n  height: 40px;\n  margin-right: 15px;\n}\n::ng-deep empty-result .empty-result #message {\n  color: #586464;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvZW1wdHktcmVzdWx0L2VtcHR5LXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGNBQUE7QUFISjtBQUlJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FBRk47QUFHTTtFQUNFLG9CQUFBO01BQUEsc0JBQUE7QUFEUjtBQUdNO0VBQ0UscUJBQUE7TUFBQSx1QkFBQTtBQURSO0FBR007RUFDRSxrQkFBQTtNQUFBLG9CQUFBO0FBRFI7QUFHTTtFQUNFLFlBQUE7RUFDQSxrQkNuQkM7QURrQlQ7QUFHTTtFQUNFLGNFbkJNO0VGb0JOLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2VtcHR5LXJlc3VsdC9lbXB0eS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XHJcbiAgQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiAgZW1wdHktcmVzdWx0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLmVtcHR5LXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICYubGVmdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgICAmLmNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgIH1cclxuICAgICAgI2ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogJGd1dHRlcjtcclxuICAgICAgfVxyXG4gICAgICAjbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6ICRtZWRpdW0tZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iLCIkYmxhY2s6ICMwMDAwMDA7XHJcbiRncmF5OiAjNWE1YTVhO1xyXG4kZGFyay1ncmF5OiAjMjEyNTI5O1xyXG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XHJcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xyXG4kY3lhbm86ICMwMGUwZDg7XHJcbiRibHVlOiAjMDA1ZmRjO1xyXG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcclxuJGRhcmstYmx1ZTogIzA0MzM1ZTtcclxuJHJlZDogI2I4MzQyYztcclxuJG9yYW5nZTogI2ZmNjYzMztcclxuJGxpZ2h0LW9yYW5nZTogI2ZmODQyOTtcclxuJGFxdWE6ICMyMmZmYTE7XHJcbiRncmVlbjogIzRkY2M3MTtcclxuJGxpZ2h0LWdyZWVuOiAjYmZmZjAwO1xyXG4kZGFyay1ncmVlbjogIzAwODA2MDtcclxuJHllbGxvdzogI2ZmZWEwMDtcclxuJGdvbGRlbjogI2NhOWYxZDtcclxuJHBpbms6ICNjYzA3NjY7XHJcbiRwdXJwbGU6ICM3OTBhYTM7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGljZTogI2Y3ZjdmNztcclxuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcclxuJHB1cnBsZUxpZ2h0TXRDb3JwOiAjOTYyMThlO1xyXG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xyXG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcclxuIl19 */");

/***/ }),

/***/ "Htkx":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/confirm-modal/confirm-modal.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\" *ngIf=\"showHeader()\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close\"\r\n      (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p [ngClass]=\"bodyMessageClass()\">\r\n      {{ message }}\r\n    </p>\r\n    <div *ngIf=\"showBodyMessage()\">\r\n      <p class=\"mb-0\" *ngFor=\"let alert of messageAlerts\">\r\n        <strong>{{ alert }}</strong>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-light\"\r\n      (click)=\"onClose()\">\r\n      {{ cancelTxt }}\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn\"\r\n      [ngClass]=\"buttonClass()\"\r\n      (click)=\"onConfirm()\">\r\n      {{ okTxt }}\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ITC6":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "MTSh":
/*!**************************************************************!*\
  !*** ./src/app/modules/controladoria/controladoria.guard.ts ***!
  \**************************************************************/
/*! exports provided: ControladoriaGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaGuard", function() { return ControladoriaGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let ControladoriaGuard = class ControladoriaGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
ControladoriaGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
ControladoriaGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], ControladoriaGuard);



/***/ }),

/***/ "MaMn":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/empty-result/empty-result.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmptyResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyResultComponent", function() { return EmptyResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empty_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empty-result.component.html */ "88Zu");
/* harmony import */ var _empty_result_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty-result.component.scss */ "H0fO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let EmptyResultComponent = class EmptyResultComponent {
    constructor() {
        this.position = 'center';
    }
};
EmptyResultComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['position',] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['message',] }]
};
EmptyResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'empty-result',
        template: _raw_loader_empty_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empty_result_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmptyResultComponent);



/***/ }),

/***/ "My/9":
/*!*****************************************************!*\
  !*** ./src/app/shared/providers/window.provider.ts ***!
  \*****************************************************/
/*! exports provided: WINDOW, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('window');
const windowProvider = {
    provide: WINDOW,
    useFactory: () => window
};
const WINDOW_PROVIDERS = [windowProvider];


/***/ }),

/***/ "OKcB":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/subtitles/subtitles.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2\" *ngIf=\"show && data.length > 0\">\r\n  <div class=\"col\">\r\n    <ul class=\"list-unstyled d-flex mb-0\">\r\n      <li *ngFor=\"let item of data; let i = index\" (click)=\"setActive(i)\">\r\n        <div\r\n          class=\"subtitle\"\r\n          [ngClass]=\"subtitleClass(i, item)\"\r\n          [ngStyle]=\"subtitleStyle(i, item)\"\r\n        >\r\n          <div class=\"square\" [ngStyle]=\"squareStyle(item)\"></div>\r\n          <div class=\"text\" [ngStyle]=\"textStyle(item)\">{{ item.text }}</div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "PIKo":
/*!*******************************************************************************!*\
  !*** ./src/app/core/change-password-modal/change-password-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChangePasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModalComponent", function() { return ChangePasswordModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password-modal.component.html */ "heMU");
/* harmony import */ var _change_password_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password-modal.component.scss */ "YRwd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _change_password_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password-modal.service */ "Ge6a");







// ngx-bootstrap

let ChangePasswordModalComponent = class ChangePasswordModalComponent {
    constructor(changePassWordModalService, pnotifyService, formBuilder) {
        this.changePassWordModalService = changePassWordModalService;
        this.pnotifyService = pnotifyService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            novaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            confirmarNovaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    onClose() {
        this.changePassWordModalService.hide();
    }
    onConfirm() {
        this.loading = true;
        this.changePassWordModalService.changePassword(this.form.getRawValue())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotifyService.error();
            }
            else {
                this.pnotifyService.success();
                this.onClose();
            }
        }, (error) => {
            this.pnotifyService.error(error.error.message);
        });
    }
};
ChangePasswordModalComponent.ctorParameters = () => [
    { type: _change_password_modal_service__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ChangePasswordModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-password-modal',
        template: _raw_loader_change_password_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_change_password_modal_service__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ChangePasswordModalComponent);



/***/ }),

/***/ "RbS/":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/modulos/services/modulos.service.ts ***!
  \*******************************************************************/
/*! exports provided: AdminModulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModulosService", function() { return AdminModulosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AdminModulosService = class AdminModulosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getModulos(modulo = {}) {
        return this.http.get(`${this.API}/core/modulos`, {
            params: modulo,
            observe: "response"
        });
    }
    getModulosComAcesso(matricula) {
        return this.http.get(`${this.API}/core/modulos/${matricula}`, {
            observe: "response"
        });
    }
    getModulo(id) {
        return this.http.get(`${this.API}/core/modulo/${id}`, {
            observe: "response"
        });
    }
    postModulo(modulo) {
        return this.http.post(`${this.API}/core/modulos`, modulo, { observe: "response" });
    }
};
AdminModulosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminModulosService);



/***/ }),

/***/ "SMoX":
/*!*************************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "Htkx");
/* harmony import */ var _confirm_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-modal.component.scss */ "8u9S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





// ngx-bootstrap

let ConfirmModalComponent = class ConfirmModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.cancelTxt = 'Cancelar';
        this.okTxt = 'Sim';
    }
    ngOnInit() {
        this.confirmResult = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    onConfirm() {
        this.confirmAndClose(true);
    }
    onClose() {
        this.confirmAndClose(false);
    }
    confirmAndClose(value) {
        this.confirmResult.next(value);
        this.bsModalRef.hide();
    }
    showHeader() {
        if (this.type === 'delete' ||
            this.type === 'inactivate' ||
            this.title !== null)
            return true;
        return false;
    }
    showBodyMessage() {
        if (this.type === 'delete' || this.type === 'inactivate')
            return true;
        return false;
    }
    bodyMessageClass() {
        if (this.type === 'delete' || this.type === 'inactivate')
            return '';
        return 'mb-0';
    }
    buttonClass() {
        let buttonClass = '';
        if (this.type === null || this.type === '') {
            buttonClass = 'btn-primary';
        }
        else if (this.type === 'delete' || this.type === 'inactivate') {
            buttonClass = 'btn-danger';
        }
        return buttonClass;
    }
};
ConfirmModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] }
];
ConfirmModalComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    messageAlerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    cancelTxt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    okTxt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ConfirmModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-modal',
        template: _raw_loader_confirm_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]])
], ConfirmModalComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/core/translation.service */ "V++w");
/* harmony import */ var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/core/auth.service */ "yxCR");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/core/pnotify.service */ "g+W+");





// Services



let AppComponent = class AppComponent {
    constructor(translationService, authService, router, pnotifyService) {
        this.translationService = translationService;
        this.authService = authService;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.showingMenu = false;
        this.loadingRouteConfig = false;
        this.showingRouteConfigError = false;
        this.translationService.setDefaultLang('es');
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.onMenuEmitter();
    }
    ngAfterViewChecked() {
        this.onRouterNavigation();
    }
    ngOnDestroy() {
        this.authService.showMenuEmitter.unsubscribe();
    }
    onMenuEmitter() {
        this.authService.showMenuEmitter.subscribe((show) => {
            this.showingMenu = show;
        });
    }
    onRouterNavigation() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                this.loadingRouteConfig = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
                this.loadingRouteConfig = false;
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
                    if (this.showingRouteConfigError === false) {
                        this.showingRouteConfigError = true;
                        this.pnotifyService.error();
                        setTimeout(() => {
                            this.showingRouteConfigError = false;
                        }, 5000);
                    }
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"] },
    { type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"],
        _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]])
], AppComponent);



/***/ }),

/***/ "TGTg":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/modules/invalid-form-control/invalid-form-control.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep invalid-form-control {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaW52YWxpZC1mb3JtLWNvbnRyb2wvaW52YWxpZC1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaW52YWxpZC1mb3JtLWNvbnRyb2wvaW52YWxpZC1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGludmFsaWQtZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "TSLY":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/capitalize-first.pipe.ts ***!
  \*******************************************************/
/*! exports provided: CapitalizeFirstPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeFirstPipe", function() { return CapitalizeFirstPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let CapitalizeFirstPipe = class CapitalizeFirstPipe {
    transform(value, args) {
        if (value === null || value.length <= 3) {
            return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
};
CapitalizeFirstPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'capitalizeFirst'
    })
], CapitalizeFirstPipe);



/***/ }),

/***/ "Tx5+":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/modules/invalid-form-control/invalid-form-control.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InvalidFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidFormControlComponent", function() { return InvalidFormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invalid_form_control_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invalid-form-control.component.html */ "mkuG");
/* harmony import */ var _invalid_form_control_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid-form-control.component.scss */ "TGTg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let InvalidFormControlComponent = class InvalidFormControlComponent {
    constructor() { }
    ngOnInit() { }
};
InvalidFormControlComponent.ctorParameters = () => [];
InvalidFormControlComponent.propDecorators = {
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InvalidFormControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'invalid-form-control',
        template: _raw_loader_invalid_form_control_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invalid_form_control_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InvalidFormControlComponent);



/***/ }),

/***/ "U2u/":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/breadcrumb/breadcrumb.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n::ng-deep breadcrumb {\n  display: block;\n  width: 100%;\n}\n::ng-deep breadcrumb .custom {\n  background-color: transparent;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0;\n  text-transform: uppercase;\n}\n::ng-deep breadcrumb .custom a {\n  color: #3e0752;\n}\n::ng-deep breadcrumb .custom a:hover {\n  text-decoration: unset;\n}\n::ng-deep breadcrumb .custom span {\n  color: #586464;\n}\n::ng-deep breadcrumb .custom .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-size: 9px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdkO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUNNO0VBQ0UsY0NTTztBRFJmO0FBQVE7RUFDRSxzQkFBQTtBQUVWO0FBQ007RUFDRSxjQ2hCTTtBRGlCZDtBQUNNO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46Om5nLWRlZXAgYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCBicmVhZGNydW1iIC5jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOjpuZy1kZWVwIGJyZWFkY3J1bWIgLmN1c3RvbSBhIHtcbiAgY29sb3I6ICMzZTA3NTI7XG59XG46Om5nLWRlZXAgYnJlYWRjcnVtYiAuY3VzdG9tIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xufVxuOjpuZy1kZWVwIGJyZWFkY3J1bWIgLmN1c3RvbSBzcGFuIHtcbiAgY29sb3I6ICM1ODY0NjQ7XG59XG46Om5nLWRlZXAgYnJlYWRjcnVtYiAuY3VzdG9tIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BlFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogOTAwO1xufSIsIiRibGFjazogIzAwMDAwMDtcclxuJGdyYXk6ICM1YTVhNWE7XHJcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XHJcbiRtZWRpdW0tZ3JheTogIzU4NjQ2NDtcclxuJGxpZ2h0LWdyYXk6ICNlNWU1ZTM7XHJcbiRjeWFubzogIzAwZTBkODtcclxuJGJsdWU6ICMwMDVmZGM7XHJcbiRsaWdodC1ibHVlOiAjOEZCOUVGO1xyXG4kZGFyay1ibHVlOiAjMDQzMzVlO1xyXG4kcmVkOiAjYjgzNDJjO1xyXG4kb3JhbmdlOiAjZmY2NjMzO1xyXG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xyXG4kYXF1YTogIzIyZmZhMTtcclxuJGdyZWVuOiAjNGRjYzcxO1xyXG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XHJcbiRkYXJrLWdyZWVuOiAjMDA4MDYwO1xyXG4keWVsbG93OiAjZmZlYTAwO1xyXG4kZ29sZGVuOiAjY2E5ZjFkO1xyXG4kcGluazogI2NjMDc2NjtcclxuJHB1cnBsZTogIzc5MGFhMztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kaWNlOiAjZjdmN2Y3O1xyXG4kcHVycGxlTXRDb3JwOiAjM2UwNzUyO1xyXG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XHJcbiRvcmFuZ2VNdENvcnA6ICNGQzlGM0E7XHJcbiRvcmFuZ2VEYXJrTXRDb3JwOiAjOWU1MjAxO1xyXG4iXX0= */");

/***/ }),

/***/ "UKGz":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ "9Xeq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./back-button/back-button.component */ "luz8");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "hDo6");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ "SMoX");
/* harmony import */ var _empty_result_empty_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./empty-result/empty-result.component */ "MaMn");
/* harmony import */ var _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./iframe/iframe.component */ "yjbs");
/* harmony import */ var _invalid_form_control_invalid_form_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invalid-form-control/invalid-form-control.component */ "Tx5+");
/* harmony import */ var _loader_spinner_full_screen_spinner_full_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loader/spinner-full-screen/spinner-full-screen.component */ "cuJr");
/* harmony import */ var _loader_spinner_navbar_spinner_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loader/spinner-navbar/spinner-navbar.component */ "UOde");
/* harmony import */ var _permission_denied_permission_denied_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./permission-denied/permission-denied.component */ "9tae");
/* harmony import */ var _subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subtitles/subtitles.component */ "lDLK");
/* harmony import */ var _thead_sorter_thead_sorter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./thead-sorter/thead-sorter.component */ "8qYg");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "Dpis");
var SharedModule_1;




// Modules

// Translater

// Components












let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"]]
        };
    }
};
SharedModule = SharedModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_6__["BackButtonComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
            _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"],
            _empty_result_empty_result_component__WEBPACK_IMPORTED_MODULE_9__["EmptyResultComponent"],
            _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_10__["IframeComponent"],
            _invalid_form_control_invalid_form_control_component__WEBPACK_IMPORTED_MODULE_11__["InvalidFormControlComponent"],
            _loader_spinner_full_screen_spinner_full_screen_component__WEBPACK_IMPORTED_MODULE_12__["LoaderSpinnerFullScreenComponent"],
            _loader_spinner_navbar_spinner_navbar_component__WEBPACK_IMPORTED_MODULE_13__["LoaderSpinnerNavbarComponent"],
            _permission_denied_permission_denied_component__WEBPACK_IMPORTED_MODULE_14__["PermissionDeniedComponent"],
            _subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_15__["SubtitlesComponent"],
            _thead_sorter_thead_sorter_component__WEBPACK_IMPORTED_MODULE_16__["TheadSorterComponent"],
            _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__["XlsxComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]],
        exports: [
            _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_6__["BackButtonComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
            _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"],
            _empty_result_empty_result_component__WEBPACK_IMPORTED_MODULE_9__["EmptyResultComponent"],
            _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_10__["IframeComponent"],
            _invalid_form_control_invalid_form_control_component__WEBPACK_IMPORTED_MODULE_11__["InvalidFormControlComponent"],
            _loader_spinner_full_screen_spinner_full_screen_component__WEBPACK_IMPORTED_MODULE_12__["LoaderSpinnerFullScreenComponent"],
            _loader_spinner_navbar_spinner_navbar_component__WEBPACK_IMPORTED_MODULE_13__["LoaderSpinnerNavbarComponent"],
            _permission_denied_permission_denied_component__WEBPACK_IMPORTED_MODULE_14__["PermissionDeniedComponent"],
            _subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_15__["SubtitlesComponent"],
            _thead_sorter_thead_sorter_component__WEBPACK_IMPORTED_MODULE_16__["TheadSorterComponent"],
            _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__["XlsxComponent"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
        ],
        entryComponents: [_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "UOde":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/loader/spinner-navbar/spinner-navbar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoaderSpinnerNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderSpinnerNavbarComponent", function() { return LoaderSpinnerNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner-navbar.component.html */ "UOhI");
/* harmony import */ var _spinner_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner-navbar.component.scss */ "Gkya");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let LoaderSpinnerNavbarComponent = class LoaderSpinnerNavbarComponent {
    constructor() { }
    ngOnInit() { }
};
LoaderSpinnerNavbarComponent.ctorParameters = () => [];
LoaderSpinnerNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'loader-spinner-navbar',
        template: _raw_loader_spinner_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoaderSpinnerNavbarComponent);



/***/ }),

/***/ "UOhI":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/loader/spinner-navbar/spinner-navbar.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-border\" role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n");

/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");



// Services

let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.checkAccess();
    }
    canLoad(route) {
        return this.checkAccess();
    }
    checkAccess() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "V++w":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/core/translation.service.ts ***!
  \*************************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title.service */ "dNnS");


// ngx-translate

// Services

let TranslationService = class TranslationService {
    constructor(translateService, titleService) {
        this.translateService = translateService;
        this.titleService = titleService;
    }
    setDefaultLang(language) {
        this.translateService.setDefaultLang(language);
    }
    browserTitle(value) {
        this.translateService.get(value).subscribe((browserTitle) => {
            this.titleService.setTitle(browserTitle);
        });
    }
};
TranslationService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] }
];
TranslationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]])
], TranslationService);



/***/ }),

/***/ "VwtK":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/thead-sorter/thead-sorter.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\">\r\n  <i [ngClass]=\"iconClass()\"></i>\r\n  <span *ngIf=\"value.length > 0\">{{ value }}</span>\r\n</button>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mtcorp\">\r\n  <header [showLoader]=\"loadingRouteConfig\" *ngIf=\"showingMenu\"></header>\r\n  <div id=\"body\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "XTVK":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/name.pipe.ts ***!
  \*******************************************/
/*! exports provided: NamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePipe", function() { return NamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let NamePipe = class NamePipe {
    transform(value) {
        let valueSplit = value.split(' ');
        for (let i = 0; i < valueSplit.length; i++) {
            if (this.isInArray(valueSplit[i])) {
                valueSplit[i] = valueSplit[i].toLowerCase();
            }
            else {
                valueSplit[i] =
                    valueSplit[i].charAt(0).toUpperCase() +
                        valueSplit[i].slice(1).toLowerCase();
            }
        }
        valueSplit = valueSplit.join(' ');
        return valueSplit;
    }
    isInArray(str) {
        const forbiddenStr = ['da', 'das', 'de', 'do', 'dos'];
        return forbiddenStr.indexOf(str.toLowerCase()) > -1;
    }
};
NamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'name'
    })
], NamePipe);



/***/ }),

/***/ "YEQF":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/breadcrumb/breadcrumb.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav aria-label=\"breadcrumb\" *ngIf=\"tree.length > 0\">\r\n  <ol class=\"breadcrumb custom\">\r\n    <li class=\"breadcrumb-item\" [ngClass]=\"{'active': !item.routerLink}\" *ngFor=\"let item of tree\">\r\n      <a [routerLink]=\"[item.routerLink]\" *ngIf=\"item.routerLink\">{{ item.descricao }}</a>\r\n      <span *ngIf=\"!item.routerLink\">{{ item.descricao }}</span>\r\n    </li>\r\n  </ol>\r\n</nav>\r\n");

/***/ }),

/***/ "YRwd":
/*!*********************************************************************************!*\
  !*** ./src/app/core/change-password-modal/change-password-modal.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY2hhbmdlLXBhc3N3b3JkLW1vZGFsL2NoYW5nZS1wYXNzd29yZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "hzlp");
/* harmony import */ var _shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/providers/window.provider */ "My/9");
/* harmony import */ var _shared_providers_custom_url_serializer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/providers/custom-url-serializer */ "v9bo");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/modules/shared.module */ "UKGz");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/login/login.component */ "ZpOo");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/header/header.component */ "8rb8");
/* harmony import */ var _core_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/change-password-modal/change-password-modal.component */ "PIKo");









Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a, 'pt-BR');
// ngx-translate


// ngx-bootstrap



// PNotify

// Interceptors

// Providers


// Modules



// Components




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"], _core_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordModalComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            /*  AgmCoreModule.forRoot({
               apiKey: 'AIzaSyDl5b7STz9xYNDhybTTer2POVncX9FYqCc' // Reemplaza con tu propia clave de API de Google Maps
             }), */
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                },
            }),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"],
        ],
        exports: [_core_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordModalComponent"]],
        providers: [
            src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"],
            _shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_16__["WINDOW_PROVIDERS"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["UrlSerializer"], useClass: _shared_providers_custom_url_serializer__WEBPACK_IMPORTED_MODULE_17__["CustomUrlSerializer"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
    })
], AppModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "Zjgr":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/loader/spinner-full-screen/spinner-full-screen.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader-spinner\">\r\n  <div class=\"spinner-border text-light\" role=\"status\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ZpOo":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "owUd");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "vWSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/window.service */ "49uZ");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");
/* harmony import */ var src_app_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/translation.service */ "V++w");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../admin/modulos/services/modulos.service */ "RbS/");







// Services







let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, activatedRoute, router, pnotifyService, windowService, modulosService, _modulosService, translationService, routerService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.windowService = windowService;
        this.modulosService = modulosService;
        this._modulosService = _modulosService;
        this.translationService = translationService;
        this.routerService = routerService;
        this.waitingLoginResponse = false;
        this.redirectTo = false;
        this.passwordType = 'password';
        this.login = {
            form: {
                user: 'Xuxa'
            }
        };
        this.pnotifyService.getPNotify();
        this.translationService.browserTitle('login.browserTitle');
    }
    ngOnInit() {
        this.redirectTo = false;
        this.authService.resetCurrentUser();
        this.modulosService.resetCurrentModule();
        this.getClienteLogo();
        this.setFormBuilder();
    }
    getLogoInicio() {
        this.srcLogoInicio = `src/assets/images/logo/Short-Degrade-Morado.png`;
    }
    getClienteLogo() {
        this.srcLogoCliente = `/assets/images/logo/crm-360.png`;
        // this.srcLogoCliente = '/assets/images/logo/logo-roxo.png';
    }
    onLogoClienteError(event) {
        this.srcLogoCliente = '/assets/images/logo/crm-360.png';
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            usuario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            senha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onChangePasswordType() {
        if (this.passwordType === 'password') {
            this.passwordType = 'text';
        }
        else if (this.passwordType === 'text') {
            this.passwordType = 'password';
        }
    }
    passwordIconClass() {
        let iconClass;
        if (this.passwordType === 'password') {
            iconClass = 'fas fa-eye';
        }
        else if (this.passwordType === 'text') {
            iconClass = 'fas fa-eye-slash';
        }
        return iconClass;
    }
    onSubmit() {
        if (this.form.valid) {
            this.waitingLoginResponse = true;
            const loginObj = {
                nr_matr_usua: this.form.value.usuario,
                ds_senh_usua: this.form.value.senha
            };
            this.authService
                .login(loginObj)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.waitingLoginResponse = false;
            }))
                .subscribe((response) => {
                if (response.responseCode === 200) {
                    this.setUserLogin(response);
                    /*  console.log(response); */
                    if (response.token) { /*
                      var params = {
                        Usuario: 'crm360',
                        Password: 'M1ddlewareCRM360$/',
                      }
                      this.authService.loginSAP(params).subscribe(
                        (respuesta: any) => {
                          if (respuesta.CodigoRespuesta === 0) {
                            if (respuesta.Mensaje) {
                              response['tokenSAP'] = response.Mensaje;
                              this.setUserLogin(response);
                            }
                          } else {
                            this.pnotifyService.error(
                              'Se ha producido un error al generar su acceso.'
                            );
                          }
                        }
                      );
                    } else {
                      this.pnotifyService.error(
                        'Se ha producido un error al generar su acceso.'
                      );
                    } */
                    }
                }
                else {
                    this.pnotifyService.error('Nombre de usuario o contraseña incorrectos.');
                }
            }, (error) => {
                this.pnotifyService.error();
            });
        }
    }
    setUserLogin(response) {
        let matriculaTid;
        let idVendedor;
        let idEscritorio;
        let idModuloPrincipal;
        let nomeModuloPrincipal;
        let rotaModuloPrincipal;
        if (response.result.versao_mtcorp != 2) {
            this.pnotifyService.notice('No tiene acceso a MTCorp.');
        }
        else {
            if (response.result.id_modulo_home != null) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
                    /* console.log(response.result)  */
                    matriculaTid =
                        response.result.matricula_tid != null
                            ? response.result.matricula_tid
                            : 1642;
                    idVendedor =
                        response.result.id_vendedor != null
                            ? response.result.id_vendedor
                            : 88;
                    idEscritorio =
                        response.result.id_escritorio != null
                            ? response.result.id_escritorio
                            : 58;
                    idModuloPrincipal =
                        response.result.id_modulo_home != null
                            ? response.result.id_modulo_home
                            : 1;
                    nomeModuloPrincipal =
                        response.result.modu_nome != null
                            ? response.result.modu_nome
                            : 'Comercial';
                    rotaModuloPrincipal =
                        response.result.modu_rota != null
                            ? response.result.modu_rota
                            : 'comercial';
                }
                else {
                    matriculaTid = response.result.matricula_tid;
                    idVendedor = response.result.matricula_vendedor;
                    idEscritorio = response.result.id_escritorio
                        ? response.result.id_escritorio
                        : null;
                    idModuloPrincipal = response.result.id_modulo_home;
                    nomeModuloPrincipal = response.result.modu_nome;
                    rotaModuloPrincipal = response.result.modu_rota;
                }
                const user = {
                    info: {
                        id: response.result.id_usuario,
                        matricula: response.result.matricula,
                        matriculaTid: matriculaTid,
                        idVendedor: idVendedor,
                        idEscritorio: idEscritorio,
                        nomeCompleto: response.result.func_nome,
                        nomeAbreviado: response.result.nome_abreviado,
                        tipoAcesso: response.result.tipo_acesso,
                        moduloPrincipal: {
                            id: idModuloPrincipal,
                            nome: nomeModuloPrincipal,
                            rota: rotaModuloPrincipal
                        }
                    },
                    token: response.token
                };
                this.redirectTo = true;
                this.authService.setCurrentUser(user);
                this.checkCurrentModule(user.info.moduloPrincipal);
            }
            else {
                this.pnotifyService.notice('No tiene ningún módulo configurado.');
            }
        }
    }
    checkCurrentModule(moduloPrincipal) {
        const routerParams = this.activatedRoute.snapshot.queryParams;
        const urlAfterLogin = routerParams === null || routerParams === void 0 ? void 0 : routerParams.urlAfterLogin;
        const modulo = urlAfterLogin ? urlAfterLogin === null || urlAfterLogin === void 0 ? void 0 : urlAfterLogin.split('/')[1] : undefined;
        if (!modulo) {
            this.modulosService.setCurrentModule(moduloPrincipal);
            this.router.navigate([moduloPrincipal.rota]);
            return;
        }
        this._modulosService
            .getModulos({ rota: moduloPrincipal.rota })
            .subscribe(response => {
            if (response.status !== 200) {
                this.modulosService.setCurrentModule(moduloPrincipal);
                this.router.navigate([moduloPrincipal.rota]);
                return;
            }
            let data = response.body["data"][0];
            this.modulosService.setCurrentModule(data);
            this.router.navigate([urlAfterLogin]);
        }, (error) => {
            this.modulosService.setCurrentModule(moduloPrincipal);
            this.router.navigate([moduloPrincipal.rota]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"] },
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_10__["ModulosService"] },
    { type: _admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_13__["AdminModulosService"] },
    { type: src_app_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"]],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"],
        src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_10__["ModulosService"],
        _admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_13__["AdminModulosService"],
        src_app_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]])
], LoginComponent);



/***/ }),

/***/ "a2A9":
/*!******************************************************!*\
  !*** ./src/app/modules/logistica/logistica.guard.ts ***!
  \******************************************************/
/*! exports provided: LogisticaGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaGuard", function() { return LogisticaGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let LogisticaGuard = class LogisticaGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
LogisticaGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
LogisticaGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], LogisticaGuard);



/***/ }),

/***/ "bNMV":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/cep.pipe.ts ***!
  \******************************************/
/*! exports provided: CEPPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CEPPipe", function() { return CEPPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let CEPPipe = class CEPPipe {
    transform(value) {
        return value.replace(/(\d{1})(\d{2})(\d{3})/g, '$1.$2-$3');
    }
};
CEPPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'cep' })
], CEPPipe);



/***/ }),

/***/ "c5Rp":
/*!**********************************************************!*\
  !*** ./src/app/modules/corte-dobra/corte-dobra.guard.ts ***!
  \**********************************************************/
/*! exports provided: CorteDobraGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraGuard", function() { return CorteDobraGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let CorteDobraGuard = class CorteDobraGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
CorteDobraGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
CorteDobraGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], CorteDobraGuard);



/***/ }),

/***/ "ciPE":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/title-case.pipe.ts ***!
  \*************************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let TitleCasePipe = class TitleCasePipe {
    transform(value) {
        if (value === null || value === undefined || typeof value === 'undefined')
            return value;
        value = value.toLocaleLowerCase();
        let valueSplit = value.split(' ');
        for (let i = 0; i < valueSplit.length; i++) {
            if (!this.forbiddenWords(valueSplit[i]) && valueSplit[i].length <= 3) {
                valueSplit[i] = valueSplit[i].toUpperCase();
            }
            else {
                valueSplit[i] = this.exceptionWords(valueSplit[i]);
            }
        }
        valueSplit = valueSplit.join(' ');
        return valueSplit.charAt(0).toUpperCase() + valueSplit.slice(1);
    }
    forbiddenWords(string) {
        const strings = ['da', 'das', 'de', 'do', 'dos', 'com'];
        return strings.indexOf(string) > -1;
    }
    exceptionWords(string) {
        const strings = ['manetoni', 'arcelor', 'mittal', 'software', 'duque'];
        if (strings.indexOf(string) > -1) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return string;
    }
};
TitleCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'titleCase'
    })
], TitleCasePipe);



/***/ }),

/***/ "cuJr":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/modules/loader/spinner-full-screen/spinner-full-screen.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LoaderSpinnerFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderSpinnerFullScreenComponent", function() { return LoaderSpinnerFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_full_screen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner-full-screen.component.html */ "Zjgr");
/* harmony import */ var _spinner_full_screen_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner-full-screen.component.scss */ "iLAa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let LoaderSpinnerFullScreenComponent = class LoaderSpinnerFullScreenComponent {
    constructor() { }
    ngOnInit() { }
};
LoaderSpinnerFullScreenComponent.ctorParameters = () => [];
LoaderSpinnerFullScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'loader-spinner-full-screen',
        template: _raw_loader_spinner_full_screen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_full_screen_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoaderSpinnerFullScreenComponent);



/***/ }),

/***/ "dNnS":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/core/title.service.ts ***!
  \*******************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _requests_modulos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requests/modulos.service */ "dljt");
/* harmony import */ var _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/upper-case.pipe */ "EZ6S");



// Services

// Pipes

let TitleService = class TitleService {
    constructor(title, modulosService, upperCase) {
        this.title = title;
        this.modulosService = modulosService;
        this.upperCase = upperCase;
    }
    setTitle(newTitle) {
        if (newTitle.length > 0) {
            const currenteModule = this.modulosService.getCurrentModule();
            let moduleName = '';
            if (currenteModule !== null &&
                typeof currenteModule['nome'] !== 'undefined') {
                moduleName = `${currenteModule['nome']} -`;
            }
            this.title.setTitle(`${this.upperCase.transform(newTitle)} | ${this.upperCase.transform(moduleName)} MTCORP`);
        }
    }
    resetTitle() {
        this.title.setTitle('MTCORP');
    }
};
TitleService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _requests_modulos_service__WEBPACK_IMPORTED_MODULE_3__["ModulosService"] },
    { type: _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"] }
];
TitleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
        _requests_modulos_service__WEBPACK_IMPORTED_MODULE_3__["ModulosService"],
        _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]])
], TitleService);



/***/ }),

/***/ "dljt":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/requests/modulos.service.ts ***!
  \*************************************************************/
/*! exports provided: ModulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulosService", function() { return ModulosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ModulosService = class ModulosService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/common`;
        if (typeof localStorage.getItem('currentModule') == 'undefined' ||
            localStorage.getItem('currentModule') == 'undefined') {
            localStorage.removeItem('currentModule');
        }
        this.currentModuleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentModule')));
        this.currentModule = this.currentModuleSubject.asObservable();
    }
    getModulo(rotaModulo) {
        return this.http
            .get(`${this.API}/modulo/${rotaModulo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    _getModulo(rota) {
        return this.http
            .get(`http://23.254.204.187/api/core/modulos`, {
            "params": { "rota": rota },
            "observe": "response"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getModulos() {
        return this.http.get(`${this.API}/modulos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    checkAccess(rotaModulo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this._getModulo(rotaModulo)
                .toPromise()
                .then((response) => {
                if (response.status === 200) {
                    return true;
                }
                return false;
            })
                .catch((error) => {
                return false;
            });
        });
    }
    setCurrentModule(module) {
        if (module && module != null && module != '') {
            localStorage.setItem('currentModule', JSON.stringify(module));
            this.currentModuleSubject.next(module);
        }
    }
    getCurrentModule() {
        return this.currentModuleSubject.value;
    }
    resetCurrentModule() {
        localStorage.removeItem('currentModule');
        this.currentModuleSubject.next(null);
    }
};
ModulosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ModulosService);



/***/ }),

/***/ "eOmW":
/*!*****************************************************!*\
  !*** ./src/app/shared/modules/xlsx/xlsx.service.ts ***!
  \*****************************************************/
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
        this.fileEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = [[1, 2], [3, 4]];
        this.wopts = { bookType: 'xlsx', type: 'array' };
    }
    loadFile(evt) {
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
            this.data = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { header: 1 });
            this.fileEventEmitter.emit(this.data);
        };
        reader.readAsBinaryString(target.files[0]);
    }
    getFile() {
        return this.fileEventEmitter;
    }
    sendFile(file) {
        this.fileEventEmitter.emit(file);
    }
    exportFile(data, filename) {
        let varExport = [];
        varExport.push(Object.keys(data[0]));
        data.forEach(element => {
            varExport.push(Object.values(element));
        });
        /* generate worksheet */
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(varExport);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, filename + '.xlsx');
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

/***/ "g+W+":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/core/pnotify.service.ts ***!
  \*********************************************************/
/*! exports provided: PNotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PNotifyService", function() { return PNotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "XBVm");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "N1Zt");




let PNotifyService = class PNotifyService {
    constructor() {
        this.stack = {
            dir1: 'up',
            dir2: 'left',
            firstpos1: 25,
            firstpos2: 25
        };
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.styling = 'bootstrap4';
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.icons = 'fontawesome5';
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.delay = 5000;
    }
    getPNotify() {
        // Inicializa a biblioteca.
        pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_3__["default"];
        return pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    success(message = 'Operación realizada con éxito.') {
        this.showMessage('success', 'Éxito.', message);
    }
    error(message = 'Inténtelo de nuevo.') {
        this.showMessage('error', 'Algo salio mal.', message);
    }
    notice(message) {
        this.showMessage('notice', 'Advertencia', message);
    }
    delete(message = 'Operación eliminada con éxito.') {
        this.showMessage('error', 'Algo salió mal.', message);
    }
    showMessage(type, title, message) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].alert({
            addClass: 'custom',
            type: type,
            title: title,
            text: message,
            hide: true,
            modules: {
                Buttons: {
                    sticker: false
                }
            },
            stack: this.stack
        });
    }
};
PNotifyService.ctorParameters = () => [];
PNotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PNotifyService);



/***/ }),

/***/ "gGr+":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/back-button/back-button.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn-icon\" (click)=\"onClick()\">\r\n  <i class=\"fas fa-arrow-left\"></i>\r\n</button>\r\n");

/***/ }),

/***/ "gJda":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/cnpj.pipe.ts ***!
  \*******************************************/
/*! exports provided: CNPJPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CNPJPipe", function() { return CNPJPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let CNPJPipe = class CNPJPipe {
    transform(value) {
        value = ('00000000000000' + value).slice(-14);
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
    }
};
CNPJPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'cnpj' })
], CNPJPipe);



/***/ }),

/***/ "gdVc":
/*!****************************************************!*\
  !*** ./src/app/modules/power-bi/power-bi.guard.ts ***!
  \****************************************************/
/*! exports provided: PowerBiGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerBiGuard", function() { return PowerBiGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");


// Services

let PowerBiGuard = class PowerBiGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
PowerBiGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
PowerBiGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], PowerBiGuard);



/***/ }),

/***/ "gt7n":
/*!************************************************************!*\
  !*** ./src/app/modules/tid-software/tid-software.guard.ts ***!
  \************************************************************/
/*! exports provided: TidSoftwareGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareGuard", function() { return TidSoftwareGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");


// Services

let TidSoftwareGuard = class TidSoftwareGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
TidSoftwareGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
TidSoftwareGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], TidSoftwareGuard);



/***/ }),

/***/ "hDo6":
/*!*******************************************************************!*\
  !*** ./src/app/shared/modules/breadcrumb/breadcrumb.component.ts ***!
  \*******************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "YEQF");
/* harmony import */ var _breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component.scss */ "U2u/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() {
        this.tree = [];
    }
    ngOnInit() { }
};
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    tree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['tree',] }]
};
BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BreadcrumbComponent);



/***/ }),

/***/ "heMU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/change-password-modal/change-password-modal.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Cambiar la contraseña</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-12\">\r\n          <label for=\"senha\">Contraseña actual</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"senha\" formControlName=\"senha\"\r\n            autocomplete=\"new-password\"\r\n            [ngClass]=\"onFieldError('senha') + ' ' + onFieldRequired(form.controls.senha)\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('senha')\" message=\"Contraseña actual es obligatorio.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-12\">\r\n          <label for=\"novaSenha\">Nueva contraseña</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"novaSenha\" formControlName=\"novaSenha\"\r\n            autocomplete=\"new-password\"\r\n            [ngClass]=\"onFieldError('novaSenha') + ' ' + onFieldRequired(form.controls.novaSenha)\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('novaSenha')\" message=\"Nueva contraseña es obligatorio.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-12\">\r\n          <label for=\"confirmarNovaSenha\">Repita la nueva contraseña</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"confirmarNovaSenha\" formControlName=\"confirmarNovaSenha\"\r\n            autocomplete=\"new-password\"\r\n            [ngClass]=\"onFieldError('confirmarNovaSenha') + ' ' + onFieldRequired(form.controls.confirmarNovaSenha)\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('confirmarNovaSenha')\"\r\n            message=\"Repita nueva contraseña es obligatorio.\">\r\n          </invalid-form-control>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"onClose()\">\r\n      Cancelar\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onConfirm()\" [disabled]=\"!form.valid || loading\">\r\n      Cambiar contraseña\r\n    </button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "hzlp":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/core/auth.service */ "yxCR");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/core/pnotify.service */ "g+W+");




// Services


let JwtInterceptor = class JwtInterceptor {
    constructor(authService, pnotifyService) {
        this.authService = authService;
        this.pnotifyService = pnotifyService;
        this.pnotifyService.getPNotify();
    }
    intercept(request, next) {
        const user = this.authService.getCurrentUser();
        if (user !== null) {
            // ERROR MODULO COMERCIAL - LISTA CLIENTES
            // La idVendedor del administrador es 88
            // Y no permite acceder a Registros ("Cadastros") del cliente
            /* user.info.idVendedor = 1; */
        }
        if (user && user.token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`,
                    'X-User-Info': btoa(JSON.stringify(user.info))
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 401) {
                this.authService.sessionExpired();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])
], JwtInterceptor);



/***/ }),

/***/ "iLAa":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/modules/loader/spinner-full-screen/spinner-full-screen.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep loader-spinner-full-screen .loader-spinner {\n  background-color: rgba(33, 37, 41, 0.5);\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100vh + 48px);\n  left: 0;\n  position: fixed;\n  top: -48px;\n  width: 100%;\n  z-index: 1090;\n}\n::ng-deep loader-spinner-full-screen .loader-spinner .spinner-border {\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvbG9hZGVyL3NwaW5uZXItZnVsbC1zY3JlZW4vc3Bpbm5lci1mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLHVDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpOO0FBS007RUFDRSwyQkFBQTtNQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvbG9hZGVyL3NwaW5uZXItZnVsbC1zY3JlZW4vc3Bpbm5lci1mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzJztcclxuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuICBsb2FkZXItc3Bpbm5lci1mdWxsLXNjcmVlbiB7XHJcbiAgICAubG9hZGVyLXNwaW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrLWdyYXksIDAuNSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCArICN7JHNpZGViYXItc2l6ZX0pO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogLSRuYXZiYXItc2l6ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDEwOTA7XHJcbiAgICAgIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "jLu9":
/*!*******************************************************************!*\
  !*** ./src/app/shared/modules/subtitles/subtitles.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep subtitles .subtitle {\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 5px;\n  padding: 4px;\n}\n::ng-deep subtitles .subtitle.active.green {\n  border-color: #4dcc71;\n}\n::ng-deep subtitles .subtitle.active.blue {\n  border-color: #005fdc;\n}\n::ng-deep subtitles .subtitle.active.yellow {\n  border-color: #ca9f1d;\n}\n::ng-deep subtitles .subtitle.active.red {\n  border-color: #b8342c;\n}\n::ng-deep subtitles .subtitle.active.gray {\n  border-color: #586464;\n}\n::ng-deep subtitles .subtitle .square {\n  border-radius: 0.25rem;\n  height: 15px;\n  margin-bottom: auto;\n  margin-top: auto;\n  width: 15px;\n}\n::ng-deep subtitles .subtitle .text {\n  line-height: 15px;\n  margin-top: auto;\n  margin-left: 5px;\n  margin-bottom: auto;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n::ng-deep subtitles .subtitle.green .square {\n  background-color: #4dcc71;\n}\n::ng-deep subtitles .subtitle.green .text {\n  color: #4dcc71;\n}\n::ng-deep subtitles .subtitle.blue .square {\n  background-color: #005fdc;\n}\n::ng-deep subtitles .subtitle.blue .text {\n  color: #005fdc;\n}\n::ng-deep subtitles .subtitle.yellow .square {\n  background-color: #ca9f1d;\n}\n::ng-deep subtitles .subtitle.yellow .text {\n  color: #ca9f1d;\n}\n::ng-deep subtitles .subtitle.red .square {\n  background-color: #b8342c;\n}\n::ng-deep subtitles .subtitle.red .text {\n  color: #b8342c;\n}\n::ng-deep subtitles .subtitle.gray .square {\n  background-color: #586464;\n}\n::ng-deep subtitles .subtitle.gray .text {\n  color: #586464;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvc3VidGl0bGVzL3N1YnRpdGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0UscUJDQ0E7QURKUjtBQU1NO0VBQ0UscUJDVkQ7QURNUDtBQU9NO0VBQ0UscUJDSEM7QURGVDtBQVFNO0VBQ0UscUJDZkY7QURTTjtBQVNNO0VBQ0UscUJDekJNO0FEa0JkO0FBVU07RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVJSO0FBV007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBVFI7QUFhUTtFQUNFLHlCQ3RDRjtBRDJCUjtBQWFRO0VBQ0UsY0N6Q0Y7QUQ4QlI7QUFnQlE7RUFDRSx5QkN0REg7QUR3Q1A7QUFnQlE7RUFDRSxjQ3pESDtBRDJDUDtBQW1CUTtFQUNFLHlCQ3BERDtBRG1DVDtBQW1CUTtFQUNFLGNDdkREO0FEc0NUO0FBc0JRO0VBQ0UseUJDckVKO0FEaUROO0FBc0JRO0VBQ0UsY0N4RUo7QURvRE47QUF5QlE7RUFDRSx5QkNwRkk7QUQ2RGQ7QUF5QlE7RUFDRSxjQ3ZGSTtBRGdFZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N1YnRpdGxlcy9zdWJ0aXRsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XHJcblxyXG4gIHN1YnRpdGxlcyB7XHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgICAgICYuYWN0aXZlLmdyZWVuIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUuYmx1ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUueWVsbG93IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRnb2xkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlLnJlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZS5ncmF5IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRtZWRpdW0tZ3JheTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNxdWFyZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5ncmVlbiB7XHJcbiAgICAgICAgLnNxdWFyZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJsdWUge1xyXG4gICAgICAgIC5zcXVhcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYueWVsbG93IHtcclxuICAgICAgICAuc3F1YXJlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiAkZ29sZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5yZWQge1xyXG4gICAgICAgIC5zcXVhcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmdyYXkge1xyXG4gICAgICAgIC5zcXVhcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1ncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogJG1lZGl1bS1ncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMwMDAwMDA7XHJcbiRncmF5OiAjNWE1YTVhO1xyXG4kZGFyay1ncmF5OiAjMjEyNTI5O1xyXG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XHJcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xyXG4kY3lhbm86ICMwMGUwZDg7XHJcbiRibHVlOiAjMDA1ZmRjO1xyXG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcclxuJGRhcmstYmx1ZTogIzA0MzM1ZTtcclxuJHJlZDogI2I4MzQyYztcclxuJG9yYW5nZTogI2ZmNjYzMztcclxuJGxpZ2h0LW9yYW5nZTogI2ZmODQyOTtcclxuJGFxdWE6ICMyMmZmYTE7XHJcbiRncmVlbjogIzRkY2M3MTtcclxuJGxpZ2h0LWdyZWVuOiAjYmZmZjAwO1xyXG4kZGFyay1ncmVlbjogIzAwODA2MDtcclxuJHllbGxvdzogI2ZmZWEwMDtcclxuJGdvbGRlbjogI2NhOWYxZDtcclxuJHBpbms6ICNjYzA3NjY7XHJcbiRwdXJwbGU6ICM3OTBhYTM7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGljZTogI2Y3ZjdmNztcclxuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcclxuJHB1cnBsZUxpZ2h0TXRDb3JwOiAjOTYyMThlO1xyXG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xyXG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcclxuIl19 */");

/***/ }),

/***/ "lDLK":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/subtitles/subtitles.component.ts ***!
  \*****************************************************************/
/*! exports provided: SubtitlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtitlesComponent", function() { return SubtitlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subtitles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subtitles.component.html */ "OKcB");
/* harmony import */ var _subtitles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtitles.component.scss */ "jLu9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let SubtitlesComponent = class SubtitlesComponent {
    constructor() {
        this.data = [];
        this.allowActivation = false;
        this.activationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    setActive(index) {
        if (this.activeIndex !== index && this.allowActivation === true) {
            this.activeIndex = index;
            this.activationChange.emit(this.data[index]);
        }
        else {
            this.activeIndex = null;
            if (this.allowActivation === true) {
                this.activationChange.emit(null);
            }
        }
    }
    subtitleClass(index, item) {
        let subtitleClass = item.color ? item.color : '';
        if (this.activeIndex === index) {
            subtitleClass = `${subtitleClass} active`;
        }
        if (this.allowActivation === true) {
            subtitleClass = `${subtitleClass} hover`;
        }
        return subtitleClass;
    }
    subtitleStyle(index, item) {
        if (this.activeIndex === index && item.hex) {
            return {
                'border-color': item.hex,
            };
        }
        return {};
    }
    squareStyle(item) {
        if (item.hex) {
            return {
                'background-color': item.hex,
            };
        }
        return {};
    }
    textStyle(item) {
        if (item.hex) {
            return {
                color: item.hex,
            };
        }
        return {};
    }
};
SubtitlesComponent.ctorParameters = () => [];
SubtitlesComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    allowActivation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    activationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SubtitlesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'subtitles',
        template: _raw_loader_subtitles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subtitles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SubtitlesComponent);



/***/ }),

/***/ "luz8":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/back-button/back-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_back_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./back-button.component.html */ "gGr+");
/* harmony import */ var _back_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-button.component.scss */ "97Y3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/core/router.service */ "w8rm");






// Services

let BackButtonComponent = class BackButtonComponent {
    constructor(activatedRoute, router, location, routerService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.routerService = routerService;
        this.btnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isDisabled = false;
    }
    ngOnInit() {
        this.setRouter();
    }
    setRouter() {
        this.previousUrl = this.routerService.getPreviousUrl();
        this.currentUrl = this.routerService.getCurrentUrl();
        this.isDisabled = this.previousUrl === this.currentUrl ? true : false;
        this.onRouterChange();
    }
    onRouterChange() {
        this.router.events.subscribe(event => {
            this.previousUrl = this.routerService.getPreviousUrl();
            this.currentUrl = this.routerService.getCurrentUrl();
            this.isDisabled = this.previousUrl === this.currentUrl ? true : false;
        });
    }
    onClick() {
        this.btnClicked.emit(true);
        if (this.isDisabled) {
            this.router.navigate([], {
                relativeTo: this.activatedRoute
            });
        }
        else {
            this.location.back();
        }
    }
};
BackButtonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"] }
];
BackButtonComponent.propDecorators = {
    btnClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
BackButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'back-button',
        template: _raw_loader_back_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_back_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]])
], BackButtonComponent);



/***/ }),

/***/ "mD87":
/*!**************************************************************!*\
  !*** ./src/app/modules/abastecimento/abastecimento.guard.ts ***!
  \**************************************************************/
/*! exports provided: AbastecimentoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoGuard", function() { return AbastecimentoGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let AbastecimentoGuard = class AbastecimentoGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
AbastecimentoGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
AbastecimentoGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], AbastecimentoGuard);



/***/ }),

/***/ "mebq":
/*!********************************************************!*\
  !*** ./src/app/modules/financeiro/financeiro.guard.ts ***!
  \********************************************************/
/*! exports provided: FinanceiroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroGuard", function() { return FinanceiroGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let FinanceiroGuard = class FinanceiroGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
FinanceiroGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
FinanceiroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], FinanceiroGuard);



/***/ }),

/***/ "mkuG":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/invalid-form-control/invalid-form-control.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-block invalid-feedback\" *ngIf=\"show\">{{ message }}</div>\r\n");

/***/ }),

/***/ "ny86":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar\" class=\"navbar fixed-top navbar-expand navbar-light\">\r\n  <img [src]=\"srcLogoCliente\" (error)=\"onLogoClienteError($event)\" id=\"logo-manetoni\" height=\"20\"\r\n    *ngIf=\"showLogoCliente\">\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li id=\"spinner\" [hidden]=\"!showLoader\">\r\n      <div class=\"spinner-border\"></div>\r\n    </li>\r\n    <li class=\"d-flex mr-2\">\r\n      <span class=\"my-auto version\">Version 1.1.55</span>\r\n    </li>\r\n    <li class=\"d-flex mr-2\">\r\n      <img\r\n        src=\"/assets/images/logo/logo-branco.png\"\r\n        height=\"22\"\r\n        class=\"my-auto\"\r\n      />\r\n    </li>\r\n    <li\r\n      class=\"nav-item\"\r\n      placement=\"left\"\r\n      tooltip=\"Módulos\"\r\n      *ngIf=\"checkTipoAcessoUser()\"\r\n    >\r\n      <div class=\"btn-group\" dropdown>\r\n        <button dropdownToggle type=\"button\" class=\"nav-link\">\r\n          <i class=\"fas fa-th\"></i>\r\n        </button>\r\n        <ul *dropdownMenu id=\"dropdown-modulos\" class=\"dropdown-menu left\">\r\n          <div *ngIf=\"modulosLoaded && !modulosError\">\r\n            <li *ngFor=\"let modulo of modulos\">\r\n              <a\r\n                class=\"dropdown-item\"\r\n                href=\"javascript:void(0)\"\r\n                (click)=\"onModulo(modulo)\"\r\n              >\r\n                <i [class]=\"modulo.icone\"></i>\r\n                <span>{{ modulo.nome | uppercase }}</span>\r\n              </a>\r\n            </li>\r\n          </div>\r\n          <div *ngIf=\"modulosLoaded && modulosError\">\r\n            <li>\r\n              <a class=\"dropdown-item hover\" (click)=\"getModulos()\">\r\n                <i class=\"fas fa-redo-alt\"></i>\r\n                <span class=\"ml-3\">Recarregar</span>\r\n              </a>\r\n            </li>\r\n          </div>\r\n          <div *ngIf=\"!modulosLoaded\">\r\n            <li>\r\n              <a class=\"dropdown-item\">\r\n                <i class=\"fas fa-circle-notch fa-spin\"></i>\r\n                <span class=\"ml-3\">Carregando módulos...</span>\r\n              </a>\r\n            </li>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n\r\n      <li class=\"nav-item\" placement=\"bottom\" tooltip=\"Reserva de Salas\" *ngIf=\"checkTipoAcessoUser()\" style=\"display: none;\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home/reserva-salas']\">\r\n          <i class=\"fas fa-calendar-alt\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" placement=\"bottom\" tooltip=\"Contatos\" *ngIf=\"checkTipoAcessoUser()\" style=\"display: none;\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home/contatos']\">\r\n          <i class=\"fas fa-id-card\"></i>\r\n        </a>\r\n      </li>\r\n\r\n\r\n    <li class=\"nav-item\">\r\n      <div class=\"btn-group\" dropdown>\r\n        <button dropdownToggle type=\"button\" class=\"nav-link\">\r\n          <i class=\"fas fa-user-circle\"></i>\r\n        </button>\r\n        <ul *dropdownMenu class=\"dropdown-menu left\">\r\n          <li>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n              <i class=\"fas fa-user\"></i>\r\n              <span>{{ userName | uppercase }} ({{ user.matricula }})</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"divider dropdown-divider\"></li>\r\n          <li>\r\n            <a\r\n              class=\"dropdown-item\"\r\n              href=\"javascript:void(0)\"\r\n              (click)=\"openModal(template)\"\r\n            >\r\n              <i class=\"fas fa-key\"></i>\r\n              <span>Cambiar la contraseña</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"divider dropdown-divider\"></li>\r\n          <li>\r\n            <a\r\n              class=\"dropdown-item\"\r\n              href=\"javascript:void(0)\"\r\n              (click)=\"logout()\"\r\n            >\r\n              <i class=\"fas fa-sign-out-alt\"></i>\r\n              <span>SAIR</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<ng-template #template>\r\n  <app-change-password-modal></app-change-password-modal>\r\n</ng-template>\r\n");

/***/ }),

/***/ "owUd":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"redirectTo\"></loader-spinner-full-screen>\r\n<div *ngIf=\"!redirectTo\">\r\n  <div id=\"background-login\"></div>\r\n  <div id=\"login\" class=\"container\">\r\n    <img src=\"/assets/images/logo/Short-Degrade-Morado.png\" class=\"\" id=\"logo-fin\" >\r\n    <div class=\"row justify-content-center h-100\">\r\n      <div class=\"my-auto\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-row justify-content-center mb-4\">\r\n            <img [src]=\"srcLogoCliente\" (error)=\"onLogoClienteError($event)\" height=\"35\">\r\n          </div>\r\n          <div class=\"form-row text-center mb-5\">\r\n            <div class=\"col-12 mb-2\">\r\n              <h4>{{ 'login.title' | translate }}</h4>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h6>{{ 'login.text' | translate }}</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"usuario\"\r\n                placeholder=\"{{ 'login.form.user' | translate }}\"\r\n                formControlName=\"usuario\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group input-group col\">\r\n              <input\r\n                [type]=\"passwordType\"\r\n                class=\"form-control\"\r\n                id=\"senha\"\r\n                placeholder=\"{{ 'login.form.password' | translate }}\"\r\n                formControlName=\"senha\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text hover\" (click)=\"onChangePasswordType()\">\r\n                  <i id=\"password-icon\" [ngClass]=\"passwordIconClass()\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"col\">\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn  btn-block\"\r\n                [disabled]=\"!form.valid || waitingLoginResponse\">\r\n                <span *ngIf=\"!waitingLoginResponse\">{{ 'login.form.button' | translate }}</span>\r\n                <div class=\"spinner-border text-light\" *ngIf=\"waitingLoginResponse\"></div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "qrKy":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/hifen.pipe.ts ***!
  \********************************************/
/*! exports provided: HifenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HifenPipe", function() { return HifenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let HifenPipe = class HifenPipe {
    transform(value) {
        return value ? value : '-';
    }
};
HifenPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'hifen' })
], HifenPipe);



/***/ }),

/***/ "rrhx":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/xlsx/xlsx.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-attachment-list\" (change)=\"onFileChange($event)\" (click)=\"fileInput.click();\">\r\n  <div class=\"item d-flex justify-content-between\">\r\n      <div class=\"d-flex\">\r\n          <input hidden #fileInput type=\"file\" ><!-- (change)=\"onFileChange($event)\" -->\r\n          <div class=\"icon my-auto mr-3\"><i class=\"fas fa-cloud-upload-alt\"></i></div>\r\n          <div class=\"info\">Selecione o arquivo</div>\r\n      </div>\r\n      <button class=\"btn--icon\" type=\"button\"><i class=\"fas fa-search\"></i></button>\r\n  </div>\r\n</div><!--  \" -->");

/***/ }),

/***/ "s4qJ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/permission-denied/permission-denied.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"permission-denied\">\r\n  <img id=\"img\" src=\"../../../../assets/images/system-alerts/warning.png\">\r\n  <div>\r\n    <div id=\"title\">Permissão negada</div>\r\n    <div id=\"message\">{{ message }}</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "utrB":
/*!****************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/sul-fluminense.guard.ts ***!
  \****************************************************************/
/*! exports provided: SulFluminenseGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseGuard", function() { return SulFluminenseGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");



let SulFluminenseGuard = class SulFluminenseGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
SulFluminenseGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
SulFluminenseGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], SulFluminenseGuard);



/***/ }),

/***/ "v9bo":
/*!***********************************************************!*\
  !*** ./src/app/shared/providers/custom-url-serializer.ts ***!
  \***********************************************************/
/*! exports provided: CustomUrlSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomUrlSerializer", function() { return CustomUrlSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let CustomUrlSerializer = class CustomUrlSerializer {
    parse(url) {
        let dus = new _angular_router__WEBPACK_IMPORTED_MODULE_1__["DefaultUrlSerializer"]();
        return dus.parse(url);
    }
    serialize(tree) {
        let dus = new _angular_router__WEBPACK_IMPORTED_MODULE_1__["DefaultUrlSerializer"](), path = dus.serialize(tree);
        // use your regex to replace as per your requirement.
        return path
            .replace(/%40/gi, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/gi, '$')
            .replace(/%2C/gi, ',')
            .replace(/%3B/gi, ';')
            .replace(/%20/gi, '+')
            .replace(/%3D/gi, '=')
            .replace(/%3F/gi, '?')
            .replace(/%2F/gi, '/');
    }
};
CustomUrlSerializer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CustomUrlSerializer);



/***/ }),

/***/ "vWSQ":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep login {\n  background-color: #000000;\n  display: block;\n}\n::ng-deep #logo-fin {\n  position: absolute;\n  width: 15%;\n  height: 15%;\n  z-index: 10;\n  left: 15px;\n  margin-left: 20px;\n  bottom: 80%;\n}\n::ng-deep #background-login {\n  background-image: url('hand-shake.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(2px);\n  height: 100vh;\n  margin-top: -48px;\n  -webkit-filter: blur(2px);\n}\n::ng-deep #login {\n  height: 100vh;\n  max-width: 100% !important;\n  position: absolute;\n  top: 0px;\n  width: 100vw;\n}\n::ng-deep #login form {\n  background: #ffffff;\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  height: auto;\n  padding: 48px 40px 36px;\n  width: 380px;\n}\n::ng-deep #login form h4 {\n  color: #212529;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1.3333;\n  margin: 0;\n}\n::ng-deep #login form h6 {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.1px;\n  line-height: 1.5;\n  margin: 0;\n}\n::ng-deep #login form .form-control {\n  font-size: 15px;\n  height: 35px;\n  min-height: 35px;\n  text-transform: unset;\n}\n::ng-deep #login form .form-group input {\n  text-transform: unset !important;\n}\n::ng-deep #login form .form-group #password-icon {\n  min-width: 20px;\n  text-align: center;\n}\n::ng-deep #login form .btn {\n  background-color: #3e0752;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: 36px;\n  letter-spacing: 0.25px;\n  padding: 4px 16px;\n  color: #ffffff;\n}\n::ng-deep #login form .btn .spinner-border {\n  font-size: 10px;\n  height: 25px;\n  width: 25px;\n}\n::ng-deep #login form .btn:hover {\n  background-color: #96218e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLHlCQ0xJO0VETUosY0FBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFISjtBQUtFO0VBQ0UsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBSEo7QUFLRTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFISjtBQUlJO0VBQ0UsbUJDZEU7RURlRix5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7RUFFQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSE47QUFJTTtFQUNFLGNDekNJO0VEMENKLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUZSO0FBSU07RUFDRSxjQ2hESTtFRGlESixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUZSO0FBSU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGUjtBQUtRO0VBQ0UsZ0NBQUE7QUFIVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSFY7QUFNTTtFQUNFLHlCQ25ETztFRG9EUCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzNEQTtBRHVEUjtBQUtRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSFY7QUFNTTtFQUNFLHlCQ2hFWTtBRDREcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4gIGxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjbG9nby1maW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJvdHRvbTogODAlO1xyXG4gIH1cclxuICAjYmFja2dyb3VuZC1sb2dpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvaGFuZC1zaGFrZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogLSRuYXZiYXItc2l6ZTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgfVxyXG4gICNsb2dpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZvcm0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogNDhweCA0MHB4IDM2cHg7XHJcbiAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzM7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwYXNzd29yZC1pY29uIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZU10Q29ycDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZUxpZ2h0TXRDb3JwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzAwMDAwMDtcclxuJGdyYXk6ICM1YTVhNWE7XHJcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XHJcbiRtZWRpdW0tZ3JheTogIzU4NjQ2NDtcclxuJGxpZ2h0LWdyYXk6ICNlNWU1ZTM7XHJcbiRjeWFubzogIzAwZTBkODtcclxuJGJsdWU6ICMwMDVmZGM7XHJcbiRsaWdodC1ibHVlOiAjOEZCOUVGO1xyXG4kZGFyay1ibHVlOiAjMDQzMzVlO1xyXG4kcmVkOiAjYjgzNDJjO1xyXG4kb3JhbmdlOiAjZmY2NjMzO1xyXG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xyXG4kYXF1YTogIzIyZmZhMTtcclxuJGdyZWVuOiAjNGRjYzcxO1xyXG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XHJcbiRkYXJrLWdyZWVuOiAjMDA4MDYwO1xyXG4keWVsbG93OiAjZmZlYTAwO1xyXG4kZ29sZGVuOiAjY2E5ZjFkO1xyXG4kcGluazogI2NjMDc2NjtcclxuJHB1cnBsZTogIzc5MGFhMztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kaWNlOiAjZjdmN2Y3O1xyXG4kcHVycGxlTXRDb3JwOiAjM2UwNzUyO1xyXG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XHJcbiRvcmFuZ2VNdENvcnA6ICNGQzlGM0E7XHJcbiRvcmFuZ2VEYXJrTXRDb3JwOiAjOWU1MjAxO1xyXG4iXX0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _modules_abastecimento_abastecimento_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/abastecimento/abastecimento.guard */ "mD87");
/* harmony import */ var _modules_admin_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/admin/admin.guard */ "7RMb");
/* harmony import */ var _modules_comercial_comercial_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/comercial/comercial.guard */ "2QIn");
/* harmony import */ var _modules_corte_dobra_corte_dobra_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/corte-dobra/corte-dobra.guard */ "c5Rp");
/* harmony import */ var _modules_financeiro_financeiro_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/financeiro/financeiro.guard */ "mebq");
/* harmony import */ var _modules_fiscal_fiscal_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fiscal/fiscal.guard */ "BduS");
/* harmony import */ var _modules_logistica_logistica_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/logistica/logistica.guard */ "a2A9");
/* harmony import */ var _modules_power_bi_power_bi_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/power-bi/power-bi.guard */ "gdVc");
/* harmony import */ var _modules_sistemas_sistemas_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/sistemas/sistemas.guard */ "zIoi");
/* harmony import */ var _modules_sul_fluminense_sul_fluminense_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sul-fluminense/sul-fluminense.guard */ "utrB");
/* harmony import */ var _modules_tecnologia_informacao_tecnologia_informacao_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/tecnologia-informacao/tecnologia-informacao.guard */ "zzfK");
/* harmony import */ var _modules_tid_software_tid_software_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/tid-software/tid-software.guard */ "gt7n");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/login/login.component */ "ZpOo");
/* harmony import */ var _modules_controladoria_controladoria_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/controladoria/controladoria.guard */ "MTSh");



// Guards













// Components


const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | modules-core-core-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("modules-core-core-module")]).then(__webpack_require__.bind(null, /*! ./modules/core/core.module */ "6ZYd")).then((m) => m.CoreModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'abastecimento',
        loadChildren: () => Promise.all(/*! import() | modules-abastecimento-abastecimento-module */[__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-abastecimento-abastecimento-module")]).then(__webpack_require__.bind(null, /*! ./modules/abastecimento/abastecimento.module */ "sDlk")).then((m) => m.AbastecimentoModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_abastecimento_abastecimento_guard__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoGuard"]],
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | modules-admin-admin-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./modules/admin/admin.module */ "13Ib")).then((m) => m.AdminModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_admin_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]],
    },
    {
        path: 'comercial',
        loadChildren: () => Promise.all(/*! import() | modules-comercial-comercial-module */[__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-comercial-comercial-module")]).then(__webpack_require__.bind(null, /*! ./modules/comercial/comercial.module */ "LrpI")).then((m) => m.ComercialModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_comercial_comercial_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialGuard"]],
    },
    {
        path: 'controladoria',
        loadChildren: () => Promise.all(/*! import() | modules-controladoria-controladoria-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-controladoria-controladoria-module")]).then(__webpack_require__.bind(null, /*! ./modules/controladoria/controladoria.module */ "Lj/C")).then((m) => m.ControladoriaModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_controladoria_controladoria_guard__WEBPACK_IMPORTED_MODULE_17__["ControladoriaGuard"]],
    },
    {
        path: 'corte-dobra',
        loadChildren: () => Promise.all(/*! import() | modules-corte-dobra-corte-dobra-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-corte-dobra-corte-dobra-module")]).then(__webpack_require__.bind(null, /*! ./modules/corte-dobra/corte-dobra.module */ "PFW6")).then((m) => m.CorteDobraModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_corte_dobra_corte_dobra_guard__WEBPACK_IMPORTED_MODULE_7__["CorteDobraGuard"]],
    },
    {
        path: 'financeiro',
        loadChildren: () => Promise.all(/*! import() | modules-financeiro-financeiro-module */[__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-financeiro-financeiro-module")]).then(__webpack_require__.bind(null, /*! ./modules/financeiro/financeiro.module */ "uC7c")).then((m) => m.FinanceiroModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_financeiro_financeiro_guard__WEBPACK_IMPORTED_MODULE_8__["FinanceiroGuard"]],
    },
    {
        path: 'fiscal',
        loadChildren: () => Promise.all(/*! import() | modules-fiscal-fiscal-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-fiscal-fiscal-module")]).then(__webpack_require__.bind(null, /*! ./modules/fiscal/fiscal.module */ "XUMf")).then((m) => m.FiscalModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_fiscal_fiscal_guard__WEBPACK_IMPORTED_MODULE_9__["FiscalGuard"]],
    },
    {
        path: 'logistica',
        loadChildren: () => Promise.all(/*! import() | modules-logistica-logistica-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-logistica-logistica-module")]).then(__webpack_require__.bind(null, /*! ./modules/logistica/logistica.module */ "x5Jk")).then((m) => m.LogisticaModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_logistica_logistica_guard__WEBPACK_IMPORTED_MODULE_10__["LogisticaGuard"]],
    },
    {
        path: 'power-bi',
        loadChildren: () => Promise.all(/*! import() | modules-power-bi-power-bi-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-power-bi-power-bi-module")]).then(__webpack_require__.bind(null, /*! ./modules/power-bi/power-bi.module */ "TAKq")).then((m) => m.PowerBiModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_power_bi_power_bi_guard__WEBPACK_IMPORTED_MODULE_11__["PowerBiGuard"]],
    },
    {
        path: 'sistemas',
        loadChildren: () => Promise.all(/*! import() | modules-sistemas-sistemas-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-sistemas-sistemas-module")]).then(__webpack_require__.bind(null, /*! ./modules/sistemas/sistemas.module */ "IVVp")).then((m) => m.SistemasModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_sistemas_sistemas_guard__WEBPACK_IMPORTED_MODULE_12__["SistemasGuard"]],
    },
    {
        path: 'sul-fluminense',
        loadChildren: () => Promise.all(/*! import() | modules-sul-fluminense-sul-fluminense-module */[__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-sul-fluminense-sul-fluminense-module")]).then(__webpack_require__.bind(null, /*! ./modules/sul-fluminense/sul-fluminense.module */ "ako9")).then((m) => m.SulFluminenseModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_sul_fluminense_sul_fluminense_guard__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseGuard"]],
    },
    {
        path: 'tid-software',
        loadChildren: () => Promise.all(/*! import() | modules-tid-software-tid-software-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-tid-software-tid-software-module")]).then(__webpack_require__.bind(null, /*! ./modules/tid-software/tid-software.module */ "LjlV")).then((m) => m.TidSoftwareModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_tid_software_tid_software_guard__WEBPACK_IMPORTED_MODULE_15__["TidSoftwareGuard"]],
    },
    {
        path: 'tecnologia-informacao',
        loadChildren: () => Promise.all(/*! import() | modules-tecnologia-informacao-tecnologia-informacao-module */[__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-tecnologia-informacao-tecnologia-informacao-module")]).then(__webpack_require__.bind(null, /*! ./modules/tecnologia-informacao/tecnologia-informacao.module */ "wHlO")).then((m) => m.TecnologiaInformacaoModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_tecnologia_informacao_tecnologia_informacao_guard__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoGuard"]],
    },
    {
        path: 'login',
        component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                useHash: true,
                onSameUrlNavigation: 'reload',
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "w8rm":
/*!********************************************************!*\
  !*** ./src/app/shared/services/core/router.service.ts ***!
  \********************************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



let RouterService = class RouterService {
    constructor(router) {
        this.router = router;
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            }
        });
    }
    getPreviousUrl() {
        return this.previousUrl;
    }
    getCurrentUrl() {
        return this.currentUrl;
    }
    getFullUrl() {
        return this.router.url;
    }
    setBase64UrlParams(params) {
        return { q: btoa(JSON.stringify(params)) };
    }
    getBase64UrlParams(params) {
        if (params['q']) {
            return JSON.parse(atob(params['q']));
        }
        else {
            return params;
        }
    }
};
RouterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RouterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RouterService);



/***/ }),

/***/ "yeGK":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/xlsx/xlsx.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  border: none;\n  background-color: transparent;\n  color: #848588;\n}\n\n.upload-attachment-list {\n  cursor: pointer;\n}\n\n.upload-attachment-list .item {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px dashed transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n  margin-top: 10px;\n  padding: 10px 24px;\n  position: relative;\n  text-transform: none;\n  transition: box-shadow 0.08s linear, min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n}\n\n.upload-attachment-list .item:hover {\n  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149);\n}\n\n.upload-attachment-list .item.dragover {\n  border: 1px dashed #1a73e8;\n  box-shadow: 0 1px 3px 0 rgba(26, 115, 232, 0.302), 0 4px 8px 3px rgba(26, 115, 232, 0.149);\n}\n\n.upload-attachment-list .icon i {\n  color: #d3d3d5;\n  font-size: 2.25rem;\n}\n\n.upload-attachment-list .icon.uploading i {\n  color: #1a73e8;\n}\n\n.upload-attachment-list .info {\n  color: #848588;\n  line-height: 37px;\n}\n\n.upload-attachment-list .progress-bar {\n  background-color: #1a73e8 !important;\n}\n\n.attachment-list .item {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n  font-size: 1.175rem;\n  letter-spacing: 0.25px;\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: #ffffff;\n  background-image: none;\n  border-radius: 4px;\n  color: #3c4043;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-weight: 500;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 10px 24px;\n  position: relative;\n  text-transform: none;\n  transition: box-shadow 0.08s linear, min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n}\n\n.attachment-list .item:hover {\n  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149);\n}\n\n.attachment-list .icon i {\n  color: #1a73e8;\n  font-size: 2.25rem;\n}\n\n.attachment-list .type {\n  color: #000000;\n  font-size: 0.775rem;\n}\n\n.attachment-list .actions {\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.attachment-list .item:hover .actions {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.attachment-list .actions .btn--icon {\n  font-size: 1rem;\n}\n\n.uploadfilecontainer {\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n  height: 200px;\n  width: 80%;\n  margin: 20px auto;\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n}\n\n.uploadfilecontainer:hover {\n  cursor: pointer;\n  background-color: #9ecbec !important;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMveGxzeC94bHN4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0ZBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlGQUFBO0VBRUEsV0FBQTtBQUNGOztBQUNBO0VBQ0Usc0ZBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsMEZBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxvQ0FBQTtBQUtGOztBQUZBO0VBQ0Usc0ZBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUZBQUE7RUFFQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxzRkFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7QUFRRjs7QUFKQTtFQUVJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy94bHN4L3hsc3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjODQ4NTg4O1xyXG59XHJcbi51cGxvYWQtYXR0YWNobWVudC1saXN0e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udXBsb2FkLWF0dGFjaG1lbnQtbGlzdCAuaXRlbSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMzAyKSxcclxuICAgIDAgMXB4IDNweCAxcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4wOHMgbGluZWFyLFxyXG4gIG1pbi13aWR0aCAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51cGxvYWQtYXR0YWNobWVudC1saXN0IC5pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMzAyKSxcclxuICAgIDAgNHB4IDhweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XHJcbn1cclxuLnVwbG9hZC1hdHRhY2htZW50LWxpc3QgLml0ZW0uZHJhZ292ZXIge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMWE3M2U4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMjYsIDExNSwgMjMyLCAwLjMwMiksXHJcbiAgICAwIDRweCA4cHggM3B4IHJnYmEoMjYsIDExNSwgMjMyLCAwLjE0OSk7XHJcbn1cclxuLnVwbG9hZC1hdHRhY2htZW50LWxpc3QgLmljb24gaSB7XHJcbiAgY29sb3I6ICNkM2QzZDU7XHJcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcbi51cGxvYWQtYXR0YWNobWVudC1saXN0IC5pY29uLnVwbG9hZGluZyBpIHtcclxuICBjb2xvcjogIzFhNzNlODtcclxufVxyXG4udXBsb2FkLWF0dGFjaG1lbnQtbGlzdCAuaW5mbyB7XHJcbiAgY29sb3I6ICM4NDg1ODg7XHJcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbn1cclxuLnVwbG9hZC1hdHRhY2htZW50LWxpc3QgLnByb2dyZXNzLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXR0YWNobWVudC1saXN0IC5pdGVtIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMzAyKSxcclxuICAgIDAgMXB4IDNweCAxcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XHJcbiAgZm9udC1zaXplOiAxLjE3NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogIzNjNDA0MztcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4wOHMgbGluZWFyLFxyXG4gICAgbWluLXdpZHRoIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF0dGFjaG1lbnQtbGlzdCAuaXRlbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksXHJcbiAgICAwIDRweCA4cHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4xNDkpO1xyXG59XHJcbi5hdHRhY2htZW50LWxpc3QgLmljb24gaSB7XHJcbiAgY29sb3I6ICMxYTczZTg7XHJcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcbi5hdHRhY2htZW50LWxpc3QgLnR5cGUge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMC43NzVyZW07XHJcbn1cclxuLmF0dGFjaG1lbnQtbGlzdCAuYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcbi5hdHRhY2htZW50LWxpc3QgLml0ZW06aG92ZXIgLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmF0dGFjaG1lbnQtbGlzdCAuYWN0aW9ucyAuYnRuLS1pY29uIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lciB7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jbG91ZC0yMDQ0ODIzXzk2MF83MjAucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICMxQzhBREI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjYmVjICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn0iXX0= */");

/***/ }),

/***/ "yjbs":
/*!***********************************************************!*\
  !*** ./src/app/shared/modules/iframe/iframe.component.ts ***!
  \***********************************************************/
/*! exports provided: IframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeComponent", function() { return IframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./iframe.component.html */ "8JWU");
/* harmony import */ var _iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe.component.scss */ "7JNW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let IframeComponent = class IframeComponent {
    constructor() { }
    ngOnInit() { }
};
IframeComponent.ctorParameters = () => [];
IframeComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
IframeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'custom-iframe',
        template: _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IframeComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #mtcorp {\n  position: relative;\n  width: 100%;\n}\n::ng-deep #mtcorp #body {\n  padding-top: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRko7QUFHSTtFQUNFLGlCQ0pRO0FER2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIEBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4gICNtdGNvcnAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAjYm9keSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAkbmF2YmFyLXNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iXX0= */");

/***/ }),

/***/ "yxCR":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pnotify.service */ "g+W+");
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router.service */ "w8rm");
/* harmony import */ var _requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../requests/modulos.service */ "dljt");






// Services



let AuthService = class AuthService {
    constructor(http, router, pnotifyService, routerService, modulosService) {
        this.http = http;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.routerService = routerService;
        this.modulosService = modulosService;
        this.API = `http://23.254.204.187/api/usuario`;
        this.showMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasSession = true;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.pnotifyService.getPNotify();
    }
    login(data) {
        this.hasSession = true;
        return this.http.post(`${this.API}/login`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2));
    }
    loginSAP(data) {
        this.hasSession = true;
        return this.http.post(`http://192.168.0.123:4100/api/Login`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2));
    }
    logout() {
        this.resetCurrentUser();
        this.showMenuEmitter.emit(false);
        this.router.navigate(['/login']);
        return false;
    }
    changePassword(data) {
        return this.http.post(`http://23.254.204.187/api/core/contra-senha`, data, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    }
    sessionExpired() {
        setTimeout(() => {
            if (!this.hasSession) {
                return;
            }
            const router = this.router.url;
            const queryParams = router != '/login' ? { urlAfterLogin: router } : undefined;
            this.hasSession = false;
            this.resetCurrentUser();
            this.pnotifyService.notice('Su sesión expiro intente nuevamente.');
            this.router.navigate(['/login'], {
                queryParams: queryParams
            });
            //.then(() => {window.location.reload()});
        }, 500);
    }
    setCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    resetCurrentUser() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.modulosService.resetCurrentModule();
        this.hideMenu();
    }
    hideMenu() {
        this.showMenuEmitter.emit(false);
    }
    isAuthenticated() {
        if (this.getCurrentUser() != null) {
            this.showMenuEmitter.emit(true);
            return true;
        }
        this.showMenuEmitter.emit(false);
        return false;
    }
    checkTokenValidity() {
        return this.http.get(`${this.API}/check-token`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"] },
    { type: _requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"],
        _requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"]])
], AuthService);



/***/ }),

/***/ "zIoi":
/*!****************************************************!*\
  !*** ./src/app/modules/sistemas/sistemas.guard.ts ***!
  \****************************************************/
/*! exports provided: SistemasGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemasGuard", function() { return SistemasGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");


// Services

let SistemasGuard = class SistemasGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
SistemasGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
SistemasGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], SistemasGuard);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzfK":
/*!******************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/tecnologia-informacao.guard.ts ***!
  \******************************************************************************/
/*! exports provided: TecnologiaInformacaoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoGuard", function() { return TecnologiaInformacaoGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/requests/modulos.service */ "dljt");


// Services

let TecnologiaInformacaoGuard = class TecnologiaInformacaoGuard {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    canActivate(next, state) {
        return this.modulosService.checkAccess(state.url.split('/')[1]);
    }
};
TecnologiaInformacaoGuard.ctorParameters = () => [
    { type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"] }
];
TecnologiaInformacaoGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])
], TecnologiaInformacaoGuard);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map