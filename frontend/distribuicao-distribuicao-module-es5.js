(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["distribuicao-distribuicao-module"], {
    /***/
    "8pCL":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/filtro.service.ts ***!
      \****************************************************************************************************/

    /*! exports provided: SulFluminenseFiltroService */

    /***/
    function pCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseFiltroService", function () {
        return SulFluminenseFiltroService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SulFluminenseFiltroService = /*#__PURE__*/function () {
        function SulFluminenseFiltroService(httpClient) {
          _classCallCheck(this, SulFluminenseFiltroService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(SulFluminenseFiltroService, [{
          key: "getLinhas",
          value: function getLinhas() {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/linhas"), {
              observe: "response"
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(descricaoLinhas) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/classes"), {
              params: {
                linhas: btoa(descricaoLinhas)
              },
              observe: "response"
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(descricaoLinhas, idClasses) {
            if (!idClasses) idClasses = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/common/materiais"), {
              params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses),
                tipo_material: "Sul Fluminense",
                situacao: "A"
              },
              observe: "response"
            });
          }
        }, {
          key: "getUnidades",
          value: function getUnidades() {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/unidades"), {
              observe: "response"
            });
          }
        }, {
          key: "getFiltroNivelCritico",
          value: function getFiltroNivelCritico() {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/niveis-criticos"), {
              observe: "response"
            });
          }
        }]);

        return SulFluminenseFiltroService;
      }();

      SulFluminenseFiltroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SulFluminenseFiltroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SulFluminenseFiltroService);
      /***/
    },

    /***/
    "9Itx":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Itx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZGlzdHJpYnVpY2FvL3BhaW5lbC1kZWNpc2FvLWFiYXN0ZWNpbWVudG8vcGFpbmVsLWRlY2lzYW8tYWJhc3RlY2ltZW50by5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "G4zF":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: SulFluminenseDistribuicaoRoutingModule */

    /***/
    function G4zF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseDistribuicaoRoutingModule", function () {
        return SulFluminenseDistribuicaoRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _painel_decisao_abastecimento_painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./painel-decisao-abastecimento/painel-decisao-abastecimento.component */
      "KYn1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _distribuicao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./distribuicao.component */
      "RBxI");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _distribuicao_component__WEBPACK_IMPORTED_MODULE_5__["SulFluminenseDistribuicaoComponent"]
        }, {
          path: 'painel-decisao-abastecimento',
          component: _painel_decisao_abastecimento_painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_1__["SulFluminensePainelDecisaoAbastecimentoComponent"]
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
        }]
      }];

      var SulFluminenseDistribuicaoRoutingModule = /*#__PURE__*/_createClass(function SulFluminenseDistribuicaoRoutingModule() {
        _classCallCheck(this, SulFluminenseDistribuicaoRoutingModule);
      });

      SulFluminenseDistribuicaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SulFluminenseDistribuicaoRoutingModule);
      /***/
    },

    /***/
    "HmgV":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HmgV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Painel de decisão de abastecimento\">\r\n  <button type=\"button\" [disabled]=\"form.status === 'INVALID'\" (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button type=\"button\" (click)=\"onResetForm()\">\r\n    Limpar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form id=\"form-abastecimento-painel-decisao-abastecimento\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-3\">\r\n            <label for=\"unidadeAbastecimento\">Unidade abastecimento</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"unidades\"\r\n            [virtualScroll]=\"true\"\r\n            [multiple]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            labelForId=\"unidade\"\r\n            bindLabel=\"Descricao\"\r\n            bindValue=\"Codigo\"\r\n            placeholder=\"Todas unidades\"\r\n            formControlName=\"unidades\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"linha\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [multiple]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            maxSelectedItems = 3\r\n            placeholder=\"Selecione linha\"\r\n            bindLabel=\"linha\"\r\n            bindValue=\"linha\"\r\n            formControlName=\"linhas\"\r\n            (change) = \"getClasses()\"\r\n            [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('linhas')\"\r\n            message=\"Linha é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [multiple]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            maxSelectedItems = 6\r\n            labelForId=\"classe\"\r\n            bindLabel=\"classeDescricao\"\r\n            bindValue=\"classeId\"\r\n            placeholder=\"Selecione classe\"\r\n            formControlName=\"classes\"\r\n            (change) = \"getMateriais()\"\r\n            [ngClass]=\"onFieldError('classes') + ' ' + onFieldRequired('classes')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('classes')\"\r\n            message=\"Classes é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"ordenacao\">Ordenação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"ordenacao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            labelForId=\"ordenacao\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            placeholder=\"Ordenação\"\r\n            formControlName=\"ordenacao\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"material\">Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"materiais\"\r\n            [virtualScroll]=\"true\"\r\n            [multiple]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            maxSelectedItems = 30\r\n            labelForId=\"material\"\r\n            bindLabel=\"codigoDescricaoMaterial\"\r\n            bindValue=\"codigoMaterial\"\r\n            placeholder=\"Selecione material\"\r\n            formControlName=\"materiais\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-md-12 mb-4\">\r\n    <sul-fluminense-cards-materiais></sul-fluminense-cards-materiais>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "I+wB":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function IWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZGlzdHJpYnVpY2FvL2Rpc3RyaWJ1aWNhby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Ju/8":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/filter.pipe.ts ***!
      \*************************************************************************************************/

    /*! exports provided: SulFluminensePainelDecisaoFilterPipe */

    /***/
    function Ju8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminensePainelDecisaoFilterPipe", function () {
        return SulFluminensePainelDecisaoFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SulFluminensePainelDecisaoFilterPipe = /*#__PURE__*/function () {
        function SulFluminensePainelDecisaoFilterPipe() {
          _classCallCheck(this, SulFluminensePainelDecisaoFilterPipe);
        }

        _createClass(SulFluminensePainelDecisaoFilterPipe, [{
          key: "transform",
          value: function transform(value, arg) {
            if (arg === '') return value;
            var aux = false;

            var _iterator = _createForOfIteratorHelper(value),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var unidade = _step.value;

                if (unidade.CodigoNivelCritico == arg) {
                  aux = true;
                }

                ;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            ;
            return aux ? value : [];
          }
        }]);

        return SulFluminensePainelDecisaoFilterPipe;
      }();

      SulFluminensePainelDecisaoFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
      })], SulFluminensePainelDecisaoFilterPipe);
      /***/
    },

    /***/
    "KYn1":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: SulFluminensePainelDecisaoAbastecimentoComponent */

    /***/
    function KYn1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminensePainelDecisaoAbastecimentoComponent", function () {
        return SulFluminensePainelDecisaoAbastecimentoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_painel_decisao_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./painel-decisao-abastecimento.component.html */
      "HmgV");
      /* harmony import */


      var _painel_decisao_abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./painel-decisao-abastecimento.component.scss */
      "9Itx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _filtro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./filtro.service */
      "8pCL");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); //Converte rota em base64


      var SulFluminensePainelDecisaoAbastecimentoComponent = /*#__PURE__*/function () {
        function SulFluminensePainelDecisaoAbastecimentoComponent(formBuilder, filtroService, atividadesService, routerService, pnotify, titleService, router, activateRoute) {
          _classCallCheck(this, SulFluminensePainelDecisaoAbastecimentoComponent);

          this.formBuilder = formBuilder;
          this.filtroService = filtroService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.pnotify = pnotify;
          this.titleService = titleService;
          this.router = router;
          this.activateRoute = activateRoute;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.enableCards = false;
          this.unidades = [];
          this.linhas = [];
          this.classes = [];
          this.materiais = [];
          this.materiaisID = [];
          this.breadCrumbTree = [];
          this.nivelCritico = [];
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matriculaUsuario = this.currentUser['info']['matricula'];
          this.ordenacao = [{
            id: 1,
            descricao: 'Codigo Material'
          }, {
            id: 2,
            descricao: 'Descrição Material'
          }, {
            id: 3,
            descricao: 'Linha'
          }, {
            id: 4,
            descricao: 'Classe'
          }];
          this.form = this.formBuilder.group({
            linhas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classes: [null],
            materiais: [null],
            unidades: [null],
            ordenacao: [null]
          });
        }

        _createClass(SulFluminensePainelDecisaoAbastecimentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormValues();
            this.getLinhas();
            this.getUnidades();
            this.titleService.setTitle('Painel de decisão de abastecimento');
            this.form.get('ordenacao').setValue(1);
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activateRoute.params.subscribe(function (params) {
              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
              }, {
                descricao: 'Distribuição',
                routerLink: "/sul-fluminense/distribuicao/".concat(params['idSubModulo'])
              }, {
                descricao: 'Painel de decisão de abastecimento'
              }];
            });
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            var _this3 = this;

            var _response = this.activateRoute.snapshot.queryParams;
            var parametros = this.routerService.getBase64UrlParams(_response);
            var unidades = parametros['unidades'] ? atob(parametros['unidades']).split(',') : [];
            var linhas = parametros['linhas'] ? atob(parametros['linhas']).split(',') : [];
            var classes = [];
            var materiais = [];
            this.form.get('linhas').setValue(linhas);
            this.form.get('unidades').setValue(unidades);

            var _materiais = parametros['materiais'] ? atob(parametros['materiais']).split(',') : [];

            var _classes = parametros['classes'] ? atob(parametros['classes']).split(',') : [];

            for (var index = 0; index < _classes.length; index++) {
              classes.push(parseInt(_classes[index]));
            }

            for (var _index = 0; _index < _materiais.length; _index++) {
              materiais.push(parseInt(_materiais[_index]));
            }

            if (this.form.get('linhas').status == 'VALID') {
              this.filtroService.getClasses(linhas).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this3.form.patchValue({
                  classes: classes
                });
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  if (response['status'] === 200) {
                    _this3.classes = response['body'];

                    _this3.form.get('classes').enable();
                  }
                }
              });
            } else {
              this.form.get('classes').disable();
            }

            if (this.form.get('classes').status == 'VALID') {
              this.filtroService.getMateriais(linhas, classes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this3.form.patchValue({
                  materiais: materiais
                });
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  if (response['body'].responseCode === 200) {
                    _this3.materiais = response.result;

                    _this3.form.get('materiais').enable();
                  }
                }
              });
            } else {
              this.form.get('materiais').disable();
            }
          }
          /* INICIO - CARREGA DADOS DO FILTRO */

        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this4 = this;

            this.filtroService.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this4.loaderNavbar = false;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                if (response['status'] === 200) {
                  _this4.linhas = response['body'];
                }
              }
            }, function (error) {
              _this4.pnotify.error('Erro ao carregar Filtro Linhas');
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this5 = this;

            this.classes = [];

            if (this.form.get('linhas').value.length > 1) {
              this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            } else {
              this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]);
              this.form.get('materiais').disable();
            }

            if (this.form.get('linhas').status === 'VALID') {
              this.loaderNavbar = true;
              var descricaoLinhas = this.form.get('linhas').value;
              this.filtroService.getClasses(descricaoLinhas).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this5.loaderNavbar = false;
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  if (response['status'] === 200) {
                    _this5.classes = response['body'];

                    _this5.form.get('classes').reset();

                    _this5.form.get('classes').enable();
                  }
                }
              }, function (error) {
                _this5.pnotify.error('Erro ao carregar filtro Classes');
              });
            } else {
              this.form.get('classes').reset();
              this.form.get('materiais').reset();
              this.form.get('classes').disable();
              this.form.get('materiais').disable();
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this6 = this;

            this.materiais = [];

            if (this.form.get('classes').value.length > 0 && (this.form.get('linhas').status === 'VALID' || this.form.get('classes').status === 'VALID')) {
              this.loaderNavbar = true;
              var descricaoLinhas = this.form.get('linhas').value;
              var idClasses = this.form.get('classes').value;
              this.filtroService.getMateriais(descricaoLinhas, idClasses).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this6.loaderNavbar = false;
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  if (response['body'].responseCode === 200) {
                    _this6.materiais = response['body'].result;

                    _this6.form.get('materiais').reset();

                    _this6.form.get('materiais').enable();
                  } else if (response['body'].responseCode === 204) {
                    _this6.materiais = [];

                    _this6.pnotify.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this6.loaderNavbar = false;
              }, function (error) {
                _this6.pnotify.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.form.get('materiais').reset();
              this.form.get('materiais').disable();
            }
          }
        }, {
          key: "getUnidades",
          value: function getUnidades() {
            var _this7 = this;

            this.unidades = [];
            this.loaderNavbar = true;
            this.filtroService.getUnidades().subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                if (response['status'] === 200) {
                  _this7.unidades = response['body'];
                }
              }

              _this7.loaderNavbar = false;
            }, function (error) {
              _this7.pnotify.error('Erro ao carregar filtro Unidades');
            });
          }
          /* FIM - CARREGA DADOS DO FILTRO */

        }, {
          key: "onFilter",
          value: function onFilter() {
            var unidades = this.form.get('unidades').value;
            var linhas = this.form.get('linhas').value;
            var classes = this.form.get('classes').value;
            var materiais = this.form.get('materiais').value;
            var ordenacao = this.form.get('ordenacao').value;
            /* define millesegundos para enviar na rota e sempre poder filtrar */

            var aux = new Date();
            var m = aux.getMilliseconds();
            this.setRouterParams({
              matriculaUsuario: this.matriculaUsuario,
              unidades: unidades ? btoa(unidades) : '',
              linhas: linhas ? btoa(linhas) : '',
              classes: classes ? btoa(classes) : '',
              materiais: materiais ? btoa(materiais) : '',
              ordenacao: ordenacao,
              r: m
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activateRoute,
              queryParams: this.routerService.setBase64UrlParams(params)
            });
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
            this.router.navigate([], {
              relativeTo: this.activateRoute
            })["finally"](function () {
              return window.location.reload();
            });
          }
          /* VALIDAÇÕES DO FILTRO */

        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return SulFluminensePainelDecisaoAbastecimentoComponent;
      }();

      SulFluminensePainelDecisaoAbastecimentoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _filtro_service__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseFiltroService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      SulFluminensePainelDecisaoAbastecimentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'painel-decisao-abastecimento',
        template: _raw_loader_painel_decisao_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_decisao_abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _filtro_service__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseFiltroService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], SulFluminensePainelDecisaoAbastecimentoComponent);
      /***/
    },

    /***/
    "RBxI":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SulFluminenseDistribuicaoComponent */

    /***/
    function RBxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseDistribuicaoComponent", function () {
        return SulFluminenseDistribuicaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_distribuicao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./distribuicao.component.html */
      "SzxC");
      /* harmony import */


      var _distribuicao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./distribuicao.component.scss */
      "I+wB");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      var SulFluminenseDistribuicaoComponent = /*#__PURE__*/function () {
        function SulFluminenseDistribuicaoComponent(atividadesService, router, titleService, pnotify, activatedRoute) {
          _classCallCheck(this, SulFluminenseDistribuicaoComponent);

          this.atividadesService = atividadesService;
          this.router = router;
          this.titleService = titleService;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.loading = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/sul-fluminense/home'
          }, {
            descricao: 'Distribuição'
          }];
          this.atividades = [];
        }

        _createClass(SulFluminenseDistribuicaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            setTimeout(function () {
              _this8.loading = false;
            }, 1000);
            this.titleService.setTitle('Distribuição');
            this.registrarAcesso();
            this.onActivedRoute();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivedRoute",
          value: function onActivedRoute() {
            var _this9 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this9.registrarAcesso();

              _this9.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this10 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (res) {
              if (res['responseCode'] === 200) {
                _this10.atividades = res['result'];
                _this10.loading = false;
              } else {
                _this10.handleAtividadesInternasError();
              }
            }, function (error) {
              _this10.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotify.error();
            this.router.navigate(['/abastecimento/home']);
          }
        }]);

        return SulFluminenseDistribuicaoComponent;
      }();

      SulFluminenseDistribuicaoComponent.ctorParameters = function () {
        return [{
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SulFluminenseDistribuicaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'sul-fluminense-distribuicao',
        template: _raw_loader_distribuicao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_distribuicao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], SulFluminenseDistribuicaoComponent);
      /***/
    },

    /***/
    "SzxC":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/distribuicao/distribuicao.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SzxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n\r\n<app-header appTitle=\"Distribuição\">\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n      <card-button\r\n        [icon]=\"atividade.iconeAtividade\"\r\n        [text]=\"atividade.nomeAtividade\"\r\n        [routerLink]=\"[atividade.rotaAtividade]\">\r\n      </card-button>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "V1MU":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/cards-materiais/cards-materiais.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V1MU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<div class=\"row justify-content-between mb-3\" [hidden]=\"!viewLegend\">\r\n  <div class=\"col-6\">\r\n    <div class=\"d-flex\" *ngIf=\"materiaisID.length > 0\">\r\n      <div *ngFor=\"let item of nivelCritico\">\r\n        <div\r\n          class=\"legend hover\"\r\n          [tooltip]=\"item.Descricao\"\r\n          (click)=\"filterPipe(item.Codigo)\"\r\n          [class.active]=\"filterUnidade === item.Codigo\"\r\n          [ngClass]=\"item.Cor\">\r\n          <div class=\"square\"></div>\r\n          <div class=\"text\">{{ item.Nome | uppercase }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #itemTemplate let-item=\"item\">\r\n  <div>\r\n    <div class=\"card-body\">\r\n      <div [ngClass]=\"item.value.MensagemErro != null ? 'alert alert-danger' : 'bg-light2'\" class=\"rounded\" [tooltip]=\"item.value.MensagemErro\" >\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2 ml-3\">\r\n            <strong>Cod:</strong> {{item.value.CodigoMaterial}}\r\n          </div>\r\n          <div class=\"col-md-3 text-truncate\">\r\n            <strong>Desc:</strong> {{item.value.DescricaoMaterial}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <strong>Linha:</strong> {{item.value.DescricaoLinha}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <strong>Classe:</strong> {{item.value.DescricaoClasse}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"icone-sem-borda\"></th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item, 'DescricaoUnidadeAbastecimento')\" >Unidade de abastecimento\r\n              <span *ngIf=\"item.campoVisivel =='DescricaoUnidadeAbastecimento'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='DescricaoUnidadeAbastecimento'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorDemanda')\">Demanda\r\n              <span *ngIf=\"item.campoVisivel =='ValorDemanda'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='ValorDemanda'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'EmEnvio')\"><span tooltip=\"Peso em toneladas do material em envio\">Em envio</span>&nbsp;\r\n              <span *ngIf=\"item.campoVisivel =='EmEnvio'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='EmEnvio'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'EmTransferencia')\"><span tooltip=\"Peso em toneladas do material em transferência\">Em transferência</span>&nbsp;\r\n              <span *ngIf=\"item.campoVisivel =='EmTransferencia'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='EmTransferencia'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorAtendido')\">Atendido\r\n              <span *ngIf=\"item.campoVisivel =='ValorAtendido'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='ValorAtendido'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorSaldo')\"><span tooltip=\"Cálculo: Demanda - (Em envio + Em transferência + Atendido)\">Saldo</span>&nbsp; \r\n              <span *ngIf=\"item.campoVisivel =='ValorSaldo'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='ValorSaldo'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorEstoqueDisponivel')\">Estoque Disponível\r\n              <span *ngIf=\"item.campoVisivel =='ValorEstoqueDisponivel'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='ValorEstoqueDisponivel'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'MediaVendas')\">Média de Vendas\r\n              <span *ngIf=\"item.campoVisivel =='MediaVendas'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='MediaVendas'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'Giro')\">Giro\r\n              <span *ngIf=\"item.campoVisivel =='Giro'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"item.campoVisivel !='Giro'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let unidade of item.value.Unidades | filter: filterUnidade; let index = index\" [ngClass]=\"{'bg-info2': unidade.Detalhes}\">\r\n            <th  class=\"icone-sem-borda hover\">\r\n              <div (click)=\"alteraIcone(unidade, item, index)\">\r\n                <i [ngClass]=\"iconClass(unidade.Detalhes)\"></i>\r\n              </div>\r\n            </th>\r\n            <td class=\"text-truncate\" [ngClass]=\"{\r\n            'border-danger1' : unidade.CodigoNivelCritico == 1, \r\n            'border-warning1' : unidade.CodigoNivelCritico == 2, \r\n            'border-success1' : unidade.CodigoNivelCritico == 3, \r\n            'border-primary1' : unidade.CodigoNivelCritico == 4\r\n            }\">\r\n              {{ unidade.DescricaoUnidadeAbastecimento}}\r\n            </td>\r\n            <td>{{ unidade.ValorDemanda | number: '0.3-3'}}</td>\r\n            <td>{{ unidade.EmEnvio | number: '0.3-3' }}</td>\r\n            <td>{{ unidade.EmTransferencia | number: '0.3-3' }}</td>\r\n            <td>{{ unidade.ValorAtendido | number: '0.3-3' }}</td>\r\n            <td>{{ unidade.ValorSaldo | number: '0.3-3' }}</td>\r\n            <td>\r\n              <span *ngIf=\"item.value.PesoEspecifico > 0\">{{ unidade.ValorEstoqueDisponivel | number: '0.3-3' }}</span>\r\n              <span *ngIf=\"item.value.PesoEspecifico == 0\">-</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"item.value.PesoEspecifico > 0\">{{ unidade.MediaVendas | number: '0.3-3' }}</span>\r\n              <span *ngIf=\"item.value.PesoEspecifico == 0\">-</span>\r\n            </td>\r\n            <td>\r\n                <span *ngIf=\"item.value.PesoEspecifico > 0\">{{ unidade.Giro | number: '0.0-0' }}</span>\r\n                <span *ngIf=\"item.value.PesoEspecifico == 0\">-</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"table table-sm\" *ngIf=\"index == item.id && itemDetalhes\">\r\n        <thead class=\"thead-color\">\r\n          <tr>\r\n            <th scope=\"col\" class=\"bg-info2\">Pedido Pai</th>\r\n            <th scope=\"col\" class=\"bg-info2\"> Item</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Pedido Remessa</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Item</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Demanda</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Em envio</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Em transferência</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Atendido</th>\r\n            <th scope=\"col\" class=\"bg-info2\">Saldo</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let materialDetalhe of this.materiaisDetalhes\">\r\n            <td>{{ materialDetalhe.NumeroPedidoPai | number: '0.0-0' }}</td>\r\n            <td>{{ materialDetalhe.ItemPedidoPai | number: '0.0-0' }}</td>\r\n            <td>{{ materialDetalhe.NumeroPedidoRemessa | number: '0.0-0' }}</td>\r\n            <td>{{ materialDetalhe.ItemPedidoRemessa | number: '0.0-0' }}</td>\r\n            <td>{{ materialDetalhe.Demanda | number: '0.3-3' }}</td>\r\n            <td>{{ materialDetalhe.EmEnvio | number: '0.3-3' }}</td>\r\n            <td>{{ materialDetalhe.EmTransferencia | number: '0.3-3' }}</td>\r\n            <td>{{ materialDetalhe.Atendido | number: '0.3-3' }}</td>\r\n            <td>{{ materialDetalhe.Saldo | number: '0.3-3' }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<bs-sortable\r\n  [(ngModel)]=\"materiaisID\"\r\n  [itemTemplate]=\"itemTemplate\"\r\n  itemClass=\"card mb-3\"\r\n  itemActiveClass=\"border-card bg-info2 shadow\"\r\n  wrapperClass=\"sortable-wrapper\"\r\n></bs-sortable>\r\n<div *ngIf=\"emptyMateriais\"class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>";
      /***/
    },

    /***/
    "Wcjn":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/cards-materiais/cards-materiais.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wcjn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "th {\n  background-color: #d5e7fb;\n}\n\ntd, th {\n  text-align: center;\n  font-size: 13px;\n}\n\ntable th, table td {\n  padding: 1px;\n}\n\n.card-body {\n  padding: 12px;\n  text-align: -webkit-center;\n}\n\n.bg-light2 {\n  background-color: #b6d6f9;\n  padding: 0.2rem;\n  margin-bottom: 0.6rem;\n}\n\ni.fas.fa-plus, i.fas.fa-minus {\n  border: 1px solid #a59a9a;\n  border-radius: 0.2rem !important;\n  padding: 0.05rem;\n}\n\n.fa-plus {\n  color: #01a700;\n}\n\n.fa-minus {\n  color: #01a700;\n}\n\n.table-sm {\n  width: 80%;\n}\n\n.bg-info2 {\n  background-color: #f1f1f1;\n}\n\n.icone-sem-borda {\n  background: white;\n  border: hidden;\n  -webkit-border-end: inherit;\n          border-inline-end: inherit;\n}\n\n::ng-deep .border-card {\n  border: 3px dashed rgba(80, 136, 240, 0.795);\n}\n\n::ng-deep .border-danger1 {\n  border-left-color: #dc3545 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-warning1 {\n  border-left-color: #ffc107 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-success1 {\n  border-left-color: #28a745 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-primary1 {\n  border-left-color: #007bff !important;\n  border-left-width: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdWwtZmx1bWluZW5zZS9kaXN0cmlidWljYW8vcGFpbmVsLWRlY2lzYW8tYWJhc3RlY2ltZW50by9jYXJkcy1tYXRlcmlhaXMvY2FyZHMtbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtBQUNKOztBQUlJO0VBQ0ksNENBQUE7QUFEUjs7QUFHSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFEUjs7QUFJSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFGUjs7QUFLSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFIUjs7QUFNSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZGlzdHJpYnVpY2FvL3BhaW5lbC1kZWNpc2FvLWFiYXN0ZWNpbWVudG8vY2FyZHMtbWF0ZXJpYWlzL2NhcmRzLW1hdGVyaWFpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkNWU3ZmI7XHJcbn1cclxudGQsIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxudGFibGUgdGgsIHRhYmxlIHRke1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufVxyXG5cclxuLmJnLWxpZ2h0MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkNmY5O1xyXG4gICAgcGFkZGluZzogLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcclxufVxyXG5cclxuaS5mYXMuZmEtcGx1cyxpLmZhcy5mYS1taW51c3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNTlhOWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjByZW0haW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogLjA1cmVtO1xyXG59XHJcblxyXG4uZmEtcGx1c3tcclxuICAgIGNvbG9yOiAjMDFhNzAwO1xyXG59XHJcblxyXG4uZmEtbWludXN7XHJcbiAgICBjb2xvcjogIzAxYTcwMDtcclxufVxyXG5cclxuLnRhYmxlLXNte1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJnLWluZm8ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmljb25lLXNlbS1ib3JkYXtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBoaWRkZW47XHJcbiAgICBib3JkZXItaW5saW5lLWVuZDogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCB7IFxyXG4gICAgLmJvcmRlci1jYXJke1xyXG4gICAgICAgIGJvcmRlcjogM3B4IGRhc2hlZCByZ2JhKDgwLCAxMzYsIDI0MCwgMC43OTUpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1kYW5nZXIxe1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3JkZXItd2FybmluZzF7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmMxMDchaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlci1zdWNjZXNzMXtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI4YTc0NSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVyLXByaW1hcnkxe1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
      /***/
    },

    /***/
    "dpkx":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.service.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: PainelDecisaoAbastecimentoService */

    /***/
    function dpkx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PainelDecisaoAbastecimentoService", function () {
        return PainelDecisaoAbastecimentoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var PainelDecisaoAbastecimentoService = /*#__PURE__*/function () {
        function PainelDecisaoAbastecimentoService(httpClient) {
          _classCallCheck(this, PainelDecisaoAbastecimentoService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(PainelDecisaoAbastecimentoService, [{
          key: "getMateriaisId",
          value: function getMateriaisId(dados) {
            var unidades = dados["unidades"];
            var materiais = dados["materiais"];
            var linhas = dados["linhas"];
            var classes = dados["classes"];
            var matriculaUsuario = dados["matriculaUsuario"];
            var pagina = dados["pagina"];
            var ordenacao = dados["ordenacao"];
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/demandas-materiais"), {
              params: {
                Unidades: unidades == undefined ? '' : unidades,
                Materiais: materiais == undefined ? '' : materiais,
                Linhas: linhas,
                Classes: classes == undefined ? '' : classes,
                MatriculaUsuario: matriculaUsuario,
                Pagina: pagina,
                CampoOrdenacao: ordenacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getDemandasMateriais",
          value: function getDemandasMateriais(dados) {
            var unidades = dados["unidades"];
            var materiais = dados["materiais"];
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/demandas-materiais"), {
              params: {
                Unidades: unidades == undefined ? '' : unidades,
                Materiais: materiais == undefined ? '' : materiais
              },
              observe: "response"
            });
          }
        }, {
          key: "getMateriaisDetalhes",
          value: function getMateriaisDetalhes(idUnidade, idMaterial, pesoEspecifico) {
            var unidades = idUnidade;
            var materiais = idMaterial; //let pesoEsp = 

            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/demandas-materiais/detalhes"), {
              params: {
                Unidade: unidades == undefined ? '' : unidades,
                Material: materiais == undefined ? '' : materiais,
                PesoEspecifico: pesoEspecifico == undefined ? '' : pesoEspecifico
              },
              observe: "response"
            });
          }
        }, {
          key: "getCountMateriais",
          value: function getCountMateriais(dados) {
            var unidades = dados["unidades"];
            var materiais = dados["materiais"];
            var linhas = dados["linhas"];
            var classes = dados["classes"];
            var matriculaUsuario = dados["matriculaUsuario"];
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/materiais-em-carteira"), {
              params: {
                Unidades: unidades == undefined ? '' : unidades,
                Materiais: materiais == undefined ? '' : materiais,
                Linhas: linhas,
                Classes: classes == undefined ? '' : classes,
                MatriculaUsuario: matriculaUsuario,
                CampoOrdenacao: "1"
              },
              observe: "response"
            });
          }
        }]);

        return PainelDecisaoAbastecimentoService;
      }();

      PainelDecisaoAbastecimentoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PainelDecisaoAbastecimentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], PainelDecisaoAbastecimentoService);
      /***/
    },

    /***/
    "o1gm":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: SulFluminensePainelDecisaoAbastecimentoModule */

    /***/
    function o1gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminensePainelDecisaoAbastecimentoModule", function () {
        return SulFluminensePainelDecisaoAbastecimentoModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/sortable */
      "p4Ho");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _cards_materiais_cards_materiais_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./cards-materiais/cards-materiais.component */
      "rZDR");
      /* harmony import */


      var _painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./painel-decisao-abastecimento.component */
      "KYn1");
      /* harmony import */


      var _filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./filter.pipe */
      "Ju/8"); //locale pt-BR


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a); // ngx-bootstrap
      // Counto

      var SulFluminensePainelDecisaoAbastecimentoModule = /*#__PURE__*/_createClass(function SulFluminensePainelDecisaoAbastecimentoModule() {
        _classCallCheck(this, SulFluminensePainelDecisaoAbastecimentoModule);
      });

      SulFluminensePainelDecisaoAbastecimentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_cards_materiais_cards_materiais_component__WEBPACK_IMPORTED_MODULE_14__["SulFluminenseCardsMateriaisComponent"], _painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_15__["SulFluminensePainelDecisaoAbastecimentoComponent"], _filter_pipe__WEBPACK_IMPORTED_MODULE_16__["SulFluminensePainelDecisaoFilterPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["TemplatesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_10__["SortableModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_12__["CountoModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"].forRoot(), src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], SulFluminensePainelDecisaoAbastecimentoModule);
      /***/
    },

    /***/
    "rZDR":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/cards-materiais/cards-materiais.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: SulFluminenseCardsMateriaisComponent */

    /***/
    function rZDR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseCardsMateriaisComponent", function () {
        return SulFluminenseCardsMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cards_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cards-materiais.component.html */
      "V1MU");
      /* harmony import */


      var _cards_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cards-materiais.component.scss */
      "Wcjn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _filtro_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../filtro.service */
      "8pCL");
      /* harmony import */


      var _painel_decisao_abastecimento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../painel-decisao-abastecimento.service */
      "dpkx"); //Converte rota em base64


      var SulFluminenseCardsMateriaisComponent = /*#__PURE__*/function () {
        function SulFluminenseCardsMateriaisComponent(getDataService, activatedRoute, routerService, pnotify, filtroService) {
          _classCallCheck(this, SulFluminenseCardsMateriaisComponent);

          this.getDataService = getDataService;
          this.activatedRoute = activatedRoute;
          this.routerService = routerService;
          this.pnotify = pnotify;
          this.filtroService = filtroService;
          this.materiaisID = [];
          this.materiaisID_ = [];
          this.materiaisIDFilter = [];
          this.materiaisDetalhes = [];
          this.nivelCritico = [];
          this.reqMateriais = [];
          this.reqCodMateriais = [];
          this.loading = false;
          this.openDetalhes = false;
          this.viewLegend = false;
          this.itemDetalhes = false;
          this.isColapsed = true;
          this.emptyMateriais = false;
          this.filterUnidade = '';
        }

        _createClass(SulFluminenseCardsMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onActivedRoute();
            this.getFiltroNivelCritico();
          }
        }, {
          key: "filterPipe",
          value: function filterPipe(value) {
            this.itemDetalhes = false;

            if (this.filterUnidade != value) {
              this.filterUnidade = value;
            } else if (this.filterUnidade == value) {
              this.filterUnidade = '';
            }
          }
        }, {
          key: "onActivedRoute",
          value: function onActivedRoute() {
            var _this11 = this;

            this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this11.routerService.getBase64UrlParams(queryParams);

                _this11.getCountMateriais(_response);

                _this11.pagina = _response['pagina'];
              }
            });
          } //traz os codigos do materiais

        }, {
          key: "getCountMateriais",
          value: function getCountMateriais(response) {
            var _this12 = this;

            this.reqMateriais = [];
            this.reqCodMateriais = [];
            this.getDataService.getCountMateriais(response).subscribe(function (res) {
              if (res.status === 200) {
                _this12.emptyMateriais = false;
                _this12.reqMateriais = res['body'];

                _this12.reqMateriais.forEach(function (element) {
                  _this12.reqCodMateriais.push(element.CODIGOMATERIAL);
                });

                _this12.getMateriais(response);
              } else if (res.status === 204) {
                _this12.materiaisID_ = [];
                _this12.materiaisID = [];
                _this12.emptyMateriais = true;

                _this12.pnotify.notice('Não há itens a serem exibidos');
              } else {
                _this12.emptyMateriais = true;

                _this12.pnotify.error('Erro ao carregar Cards Materiais');
              }
            }, function (error) {
              _this12.emptyMateriais = true;

              _this12.pnotify.error('Erro ao carregar Cards Materiais');
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(response) {
            var _this13 = this;

            this.materiaisID_ = [];
            this.materiaisID = [];
            this.loading = true; //armazena as requisições

            var request = [];
            var itensRequest = 5;
            var totalItens = this.reqCodMateriais.length;
            var i = 0;
            var reqCodMateriais = "";
            var qtdRequest = Math.ceil(totalItens / itensRequest);

            for (var index = 0; index < qtdRequest; index++) {
              reqCodMateriais = this.reqCodMateriais.slice(i, i + 5);
              i += 5;
              request.push(this.getDataService.getDemandasMateriais({
                materiais: btoa(reqCodMateriais),
                unidades: response['unidades']
              }));
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this13.loading = false;
              _this13.viewLegend = true;
              _this13.materiaisID = _this13.materiaisID_;
            })).subscribe(function (response) {
              response.forEach(function (element) {
                if (element['status'] === 200) {
                  element['body'].forEach(function (material) {
                    _this13.materiaisID_.push(material);
                  });
                }
              });
            });
          }
        }, {
          key: "getMateriaisDetalhes",
          value: function getMateriaisDetalhes(unidade, material, pesoEspecifico) {
            var _this14 = this;

            this.loading = true;
            this.materiaisDetalhes = [];
            this.getDataService.getMateriaisDetalhes(unidade, material, pesoEspecifico).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                if (response.status === 200) {
                  _this14.materiaisDetalhes = response['body'];
                }
              } else if (response.status === 204) {
                _this14.pnotify.notice('Não há itens a serem exibidos');
              } else {
                _this14.pnotify.error('Erro ao carregar detalhes dos Materiais');
              }

              _this14.loading = false;
            }, function (error) {
              _this14.pnotify.error('Erro ao carregar detalhes dos Materiais');
            });
          }
        }, {
          key: "iconClass",
          value: function iconClass(unidade) {
            var iconClass;

            if (unidade === true && this.itemDetalhes === true) {
              iconClass = 'fas fa-minus';
            } else {
              iconClass = 'fas fa-plus';
            }

            return iconClass;
          }
        }, {
          key: "alteraIcone",
          value: function alteraIcone(unidade, item, index) {
            var validaIcone = false;
            this.materiaisID.forEach(function (element, i) {
              return element['Unidades'].forEach(function (unidades, j) {
                if (element.CodigoMaterial === item.initData.CodigoMaterial && j === index) {
                  validaIcone = !unidades['Detalhes'];
                  return unidades['Detalhes'] = validaIcone;
                } else {
                  return unidades['Detalhes'] = false;
                }
              });
            });
            item.detalhes = validaIcone;
            this.itemDetalhes = item.detalhes;
            this.index = item.id;
            this.unidadeAbt = unidade.CodigoDeposito;
            this.codMaterial = item.value.CodigoMaterial;
            this.pesoEspecifico = item.value.PesoEspecifico;

            if (item.detalhes) {
              this.getMateriaisDetalhes(this.unidadeAbt, this.codMaterial, this.pesoEspecifico);
            }
          }
        }, {
          key: "sortItems",
          value: function sortItems(item, campo) {
            var index = item.initData.CodigoMaterial;
            item.campoVisivel = campo;
            item.sort = !item.sort;
            this.materiaisID.forEach(function (element) {
              if (element.CodigoMaterial === index) {
                element.sort = !element.sort;
                element.Unidades.sort(function (a, b) {
                  if (a[campo] < b[campo]) {
                    return element.sort ? 1 : -1;
                  } else if (a[campo] > b[campo]) {
                    return element.sort ? -1 : 1;
                  } else {
                    return 0;
                  }
                });
              }
            });
          }
        }, {
          key: "filterNivelCritico",
          value: function filterNivelCritico(nivelCritico) {
            var _this15 = this;

            this.materiaisID.forEach(function (material, i) {
              var unidadeEncontrada = false;
              material['Unidades'].forEach(function (unidade, j) {
                if (unidade.CodigoNivelCritico === nivelCritico) {
                  unidadeEncontrada = true;
                }
              });

              if (unidadeEncontrada) {
                _this15.materiaisIDFilter.push(material);
              }
            });
          }
        }, {
          key: "getFiltroNivelCritico",
          value: function getFiltroNivelCritico() {
            var _this16 = this;

            this.filtroService.getFiltroNivelCritico().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this16.viewLegend = true;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this16.nivelCritico = response['body'];
              }
            });
          }
        }]);

        return SulFluminenseCardsMateriaisComponent;
      }();

      SulFluminenseCardsMateriaisComponent.ctorParameters = function () {
        return [{
          type: _painel_decisao_abastecimento_service__WEBPACK_IMPORTED_MODULE_10__["PainelDecisaoAbastecimentoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _filtro_service__WEBPACK_IMPORTED_MODULE_9__["SulFluminenseFiltroService"]
        }];
      };

      SulFluminenseCardsMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sul-fluminense-cards-materiais',
        template: _raw_loader_cards_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cards_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_painel_decisao_abastecimento_service__WEBPACK_IMPORTED_MODULE_10__["PainelDecisaoAbastecimentoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _filtro_service__WEBPACK_IMPORTED_MODULE_9__["SulFluminenseFiltroService"]])], SulFluminenseCardsMateriaisComponent);
      /***/
    },

    /***/
    "um/L":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SulFluminenseDistribuicaoModule */

    /***/
    function umL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseDistribuicaoModule", function () {
        return SulFluminenseDistribuicaoModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _painel_decisao_abastecimento_painel_decisao_abastecimento_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./painel-decisao-abastecimento/painel-decisao-abastecimento.module */
      "o1gm");
      /* harmony import */


      var _distribuicao_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./distribuicao-routing.module */
      "G4zF");
      /* harmony import */


      var _distribuicao_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./distribuicao.component */
      "RBxI");

      var SulFluminenseDistribuicaoModule = /*#__PURE__*/_createClass(function SulFluminenseDistribuicaoModule() {
        _classCallCheck(this, SulFluminenseDistribuicaoModule);
      });

      SulFluminenseDistribuicaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_distribuicao_component__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseDistribuicaoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _painel_decisao_abastecimento_painel_decisao_abastecimento_module__WEBPACK_IMPORTED_MODULE_11__["SulFluminensePainelDecisaoAbastecimentoModule"], _distribuicao_routing_module__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseDistribuicaoRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]]
      })], SulFluminenseDistribuicaoModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=distribuicao-distribuicao-module-es5.js.map