(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contatos-contatos-module"], {
    /***/
    "0OhI":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/formulario/clientes/clientes.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvY29udGF0b3MvZm9ybXVsYXJpby9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "2NBD":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/contatos/formulario/formulario.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NBD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen> -->\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Contatos\">\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postContatos()\"\n    >\n    Salvar\n  </button>\n  <button\n  type=\"button\"\n  (click)=\"onFilter()\">\n  Filtrar\n</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" >\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\n        <legend>Dados da Lista de Contatos</legend>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DESCRICAO\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DESCRICAO\"\n              formControlName=\"DESCRICAO\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('DESCRICAO') + ' ' + onFieldRequired('DESCRICAO')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DESCRICAO')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n    </fieldset>\n  </form><br><br>\n  <blockquote class=\"blockquote  text-center\" *ngIf=\"!idLista\">\n    <p class=\"mb-0 text-danger\">Associação de Clientes</p>\n    <footer class=\"blockquote-footer\">Associação de clientes é realizada somente com registros já existentes!</footer>\n  </blockquote>\n  <div  >\n    <hr>\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\n        <legend>Pesquisar Clientes</legend>\n        <comercial-akna-contatos-clientes></comercial-akna-contatos-clientes>\n        <br>\n      </fieldset>\n    </fieldset>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "4xRd":
    /*!******************************************************************!*\
      !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
      \******************************************************************/

    /*! exports provided: ComercialVendedoresService */

    /***/
    function xRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function () {
        return ComercialVendedoresService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialVendedoresService = /*#__PURE__*/function () {
        function ComercialVendedoresService(http) {
          _classCallCheck(this, ComercialVendedoresService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/vendedor";
        }

        _createClass(ComercialVendedoresService, [{
          key: "getDetalhesCadastro",
          value: function getDetalhesCadastro() {
            return this.http.get("".concat(this.API, "/detalhes-cadastro")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            return this.http.get("".concat(this.API, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCarteiraClientes",
          value: function getCarteiraClientes(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getValidaClienteCarteira",
          value: function getValidaClienteCarteira(codCliente) {
            return this.http.get("".concat(this.API, "/valida-cliente-carteira/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVinculoOperadores",
          value: function getVinculoOperadores() {
            return this.http.get("".concat(this.API, "/vinculo-operadores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialVendedoresService;
      }();

      ComercialVendedoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialVendedoresService);
      /***/
    },

    /***/
    "5Ujk":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/formulario/formulario.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ComercialAknaContatosFormularioComponent */

    /***/
    function Ujk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosFormularioComponent", function () {
        return ComercialAknaContatosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "2NBD");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "bIcV");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _contatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../contatos.service */
      "916M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Angular
      //Bootstrap
      //rxjs


      var ComercialAknaContatosFormularioComponent = /*#__PURE__*/function () {
        function ComercialAknaContatosFormularioComponent(formBuilder, pnotify, activatedRoute, router, localeService, titleService, atividadesService, contatoService, routerService, dateService, route) {
          _classCallCheck(this, ComercialAknaContatosFormularioComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.localeService = localeService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.contatoService = contatoService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.route = route;
          this.breadCrumbTree = [];
          this.formData = [];
          this.compararData = null; //loading

          this.loading = true;
          this.loadingNavBar = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(ComercialAknaContatosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.appTitle = 'Cadastro';
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/postContatos/home'
            }, {
              descricao: 'Akna',
              routerLink: "/comercial/akna/".concat(id)
            }, {
              descricao: 'Contatos',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;

            if (params.hasOwnProperty('id')) {
              this.idLista = params.id;
            }
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID: [null],
              DESCRICAO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]]
            });
          } // Validação de formulário

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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.contatoService.onEventFilter();
          }
        }, {
          key: "postContatos",
          value: function postContatos() {
            var _this = this;

            this.loadingNavBar = true;
            this.contatoService.postContatos(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this.loadingNavBar = false;
            })).subscribe({
              next: function next(response) {
                if (response.status === 200) {
                  _this.pnotify.success();

                  _this.router.navigate(['../'], {
                    relativeTo: _this.activatedRoute
                  });
                } else {
                  _this.pnotify.error();
                }
              },
              error: function error(_error) {
                _this.pnotify.error();
              }
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }]);

        return ComercialAknaContatosFormularioComponent;
      }();

      ComercialAknaContatosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"]
        }, {
          type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      ComercialAknaContatosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'comercial-akna-contatos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"], _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ComercialAknaContatosFormularioComponent);
      /***/
    },

    /***/
    "7R0/":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/lista/lista.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ComercialAknaContatosListaComponent */

    /***/
    function R0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosListaComponent", function () {
        return ComercialAknaContatosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "hlq3");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Xj53");
      /* harmony import */


      var _contatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../contatos.service */
      "916M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); //angular
      //servicos
      // rxjs


      var ComercialAknaContatosListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function ComercialAknaContatosListaComponent(route, pnotify, activatedRoute, formBuilder, localeService, contatoService, confirmModalService, routerService, dateService) {
          _classCallCheck(this, ComercialAknaContatosListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.contatoService = contatoService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.noResult = false;
          this.loading = false; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR

          this.tableConfig = {
            subtitleBorder: true
          };
          this.contatos = [];
          this.contatosFiltrados = []; // Tipos de Situação dos Tipos de Items (Ativo/Inativo)

          this.tipos = [{
            cod: 'N',
            nome: 'Ativos'
          }, {
            cod: 'S',
            nome: 'Arquivado'
          }];
          this.subtitles = [{
            id: 1,
            text: 'ATIVO',
            color: 'green'
          }, {
            id: 2,
            text: 'ARQUIVADO',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(ComercialAknaContatosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this2 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this2.routerService.getBase64UrlParams(response);

              _this2.form.patchValue(_response);

              _this2.getContatos(_this2.getParams());
            });
          }
        }, {
          key: "getContatos",
          value: function getContatos(params) {
            var _this3 = this;

            this.loading = true;
            this.contatoService.getContatos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe({
              next: function next(response) {
                if (response.status === 200) {
                  _this3.contatos = response.body;
                  _this3.contatosFiltrados = response.body;
                  _this3.totalItems = response.body.length;
                  _this3.loading = false;
                } else {
                  _this3.noResult = true;
                  _this3.contatos = [];
                }
              },
              error: function error(_error2) {
                _this3.pnotify.error();

                _this3.noResult = true;
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID: [null],
              DESCRICAO: [null],
              ARQUIVADA: [null],
              CONTATOS_VALIDOS: [null],
              PAGI: [1],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/comercial/home"
            }, {
              descricao: 'Akna',
              routerLink: "/comercial/akna/".concat(id)
            }, {
              descricao: 'Contatos'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var _this$getParams, ID, DESCRICAO, ARQUIVADA, _params, promise;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _this$getParams = this.getParams(), ID = _this$getParams.ID, DESCRICAO = _this$getParams.DESCRICAO, ARQUIVADA = _this$getParams.ARQUIVADA;
                      _params = {};
                      if (ID) _params['ID'] = ID;
                      if (DESCRICAO) _params['DESCRICAO'] = DESCRICAO;
                      if (ARQUIVADA) _params['ARQUIVADA'] = ARQUIVADA;

                      if (!(Object.keys(_params).length === 0)) {
                        _context.next = 8;
                        break;
                      }

                      this.contatosFiltrados = this.contatos;
                      return _context.abrupt("return");

                    case 8:
                      promise = new Promise(function (resolve, reject) {
                        try {
                          var filter = _this4.contatos.filter(function (contato) {
                            var _match = false;

                            for (var key in _params) {
                              if (key === 'DESCRICAO') {
                                if (contato[key].toString().toLowerCase().indexOf(_params[key].toString().toLowerCase()) == -1) {
                                  _match = false;
                                  break;
                                }
                              } else if (contato[key] !== _params[key]) {
                                _match = false;
                                break;
                              }

                              _match = true;
                            }

                            return _match;
                          });

                          resolve(filter);
                        } catch (error) {
                          reject(error);
                        }
                      });
                      _context.next = 11;
                      return promise.then(function (contatos) {
                        _this4.contatosFiltrados = contatos;
                        console.log(contatos);
                      })["catch"](function (error) {
                        console.log(error);
                      });

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openRegister",
          value: function openRegister(contato) {
            this.route.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(contato)
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(contato) {
            var borderClass;

            if (contato.ARQUIVADA == 'N') {
              borderClass = 'border-success';
            } else if (contato.ARQUIVADA == 'S') {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }]);

        return ComercialAknaContatosListaComponent;
      }();

      ComercialAknaContatosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"]
        }, {
          type: _contatos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaContatosService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }];
      };

      ComercialAknaContatosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'comercial-akna-contatos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"], _contatos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaContatosService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])], ComercialAknaContatosListaComponent);
      /***/
    },

    /***/
    "8ouN":
    /*!****************************************************************!*\
      !*** ./src/app/modules/comercial/services/clientes.service.ts ***!
      \****************************************************************/

    /*! exports provided: ComercialClientesService */

    /***/
    function ouN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesService", function () {
        return ComercialClientesService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialClientesService = /*#__PURE__*/function () {
        function ComercialClientesService(http) {
          _classCallCheck(this, ComercialClientesService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/clientes";
        }

        _createClass(ComercialClientesService, [{
          key: "getStatus",
          value: function getStatus() {
            return this.http.get("".concat(this.API, "/pesquisa/status")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClientes",
          value: function getClientes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/pesquisa/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClientesGrupoEconomico",
          value: function getClientesGrupoEconomico(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/grupo-economico/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPermissaoAcesso",
          value: function getPermissaoAcesso(id) {
            return this.http.get("".concat(this.API, "/permissao-acesso/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatosResumido",
          value: function getContatosResumido(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/contatos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getExisteCpfCnpj",
          value: function getExisteCpfCnpj(documento, getDadosCliente) {
            return this.http.get("".concat(this.API, "/verificar-cpf-cnpj/").concat(documento, "?getDadosCliente=").concat(getDadosCliente === true ? 1 : 0)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCliente",
          value: function postCliente(data) {
            return this.http.post("".concat(this.API, "/pre-cadastro"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPropostaAnaliseCredito",
          value: function getPropostaAnaliseCredito(codCliente) {
            return this.http.get("".concat(this.API, "/proposta-analise-credito/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDadosFaturamento",
          value: function getDadosFaturamento(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/dados-faturamento/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateDadosFaturamento",
          value: function updateDadosFaturamento(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/dados-faturamento"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteAtividadeSecundaria",
          value: function deleteAtividadeSecundaria(codCliente, id) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/atividade-secundaria/").concat(codCliente, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEnderecos",
          value: function getEnderecos(codCliente, params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/cadastro/carregar/enderecos/").concat(codCliente), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEndereco",
          value: function getEndereco(codCliente, idEndereco, idSituacao) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/endereco/").concat(codCliente, "/").concat(idEndereco, "/").concat(idSituacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateEndereco",
          value: function updateEndereco(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/endereco"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteEndereco",
          value: function deleteEndereco(codCliente, id) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/endereco/").concat(codCliente, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatos",
          value: function getContatos(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/contatos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContato",
          value: function getContato(codCliente, idContato) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/contato/").concat(codCliente, "/").concat(idContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateContato",
          value: function updateContato(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/contato"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(codCliente, id, idSeqTid) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/contato/").concat(codCliente, "/").concat(id, "/").concat(idSeqTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteMeioContato",
          value: function deleteMeioContato(codCliente, id, idSeqTid) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/meio-contato/").concat(codCliente, "/").concat(id, "/").concat(idSeqTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteFilho",
          value: function deleteFilho(idFilho) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/filho/").concat(idFilho)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDadosRelacionamento",
          value: function getDadosRelacionamento(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/dados-relacionamento/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateDadosRelacionamento",
          value: function updateDadosRelacionamento(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/dados-relacionamento"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPotencialCompra",
          value: function getPotencialCompra(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/potencial-compra/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updatePotencialCompra",
          value: function updatePotencialCompra(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/potencial-compra"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/anexos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // , retry(2)
            );
          }
        }, {
          key: "uploadAnexo",
          value: function uploadAnexo(data) {
            return this.http.post("".concat(this.API, "/cadastro/upload/anexo"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // , retry(2)
            );
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(idAnexo) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/anexo/").concat(idAnexo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getFilial",
          value: function getFilial(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/filial/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTravas",
          value: function getTravas(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/travas/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getInformacoesFinanceiras",
          value: function getInformacoesFinanceiras(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/informacoes-financeiras/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getInformacoesComerciais",
          value: function getInformacoesComerciais(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/informacoes-comerciais/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getListaEmails",
          value: function getListaEmails(codCliente) {
            return this.http.get("".concat(this.API, "/emails/lista/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialClientesService;
      }();

      ComercialClientesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesService);
      /***/
    },

    /***/
    "916M":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/contatos.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ComercialAknaContatosService */

    /***/
    function M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosService", function () {
        return ComercialAknaContatosService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); // services


      var ComercialAknaContatosService = /*#__PURE__*/function () {
        function ComercialAknaContatosService(http) {
          _classCallCheck(this, ComercialAknaContatosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ComercialAknaContatosService, [{
          key: "getContatos",
          value: function getContatos(params) {
            return this.http.get("".concat(this.API, "/comercial/integracoes/akna/listas-contatos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postContatos",
          value: function postContatos(contatos) {
            return this.http.post("".concat(this.API, "/comercial/akna/contatos"), contatos, {
              observe: 'response'
            });
          } // -------------------------------------------Clientes-------------------------------

        }, {
          key: "getClientes",
          value: function getClientes(params) {
            return this.http.get("".concat(this.API, "/comercial/integracoes/akna/listas-contatos-clientes"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getSetorAtividades",
          value: function getSetorAtividades(params) {
            return this.http.get("".concat(this.API, "/comercial/emailMarketing/associacao/setor-atividade"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postVinculoClientes",
          value: function postVinculoClientes(params) {
            return this.http.post("".concat(this.API), params, {
              observe: 'response'
            });
          }
        }, {
          key: "onEventLoading",
          value: function onEventLoading(value) {
            this.event.emit({
              loading: value
            });
          }
        }, {
          key: "onEventFilter",
          value: function onEventFilter() {
            this.event.emit({
              filter: true
            });
          }
        }]);

        return ComercialAknaContatosService;
      }();

      ComercialAknaContatosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ComercialAknaContatosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ComercialAknaContatosService);
      /***/
    },

    /***/
    "Ade5":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/contatos/formulario/clientes/clientes.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ade5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div>\n  <advanced-filter>\n    <form [formGroup]=\"formFilter\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3  pl-0\">\n          <label for=\"buscarPor\">Buscar por</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"buscarPor\"\n            formControlName=\"buscarPor\">\n            <option value=\"1\">Código, nome fantasia ou razão social</option>\n            <option value=\"2\">CPF ou CNPJ</option>\n            <option value=\"3\">Cidade</option>\n            <option value=\"4\">Código SAP</option>\n            <option value=\"5\">Contatos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-4  pl-0\">\n          <label for=\"pesquisa\">Termo de pesquisa</label>\n          <input\n            type=\"text\"\n            placeholder=\"digite...\"\n            class=\"form-control\"\n            formControlName=\"pesquisa\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-lg-3  pl-0\">\n          <label for=\"linhas\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            placeholder=\"Selecione...\"\n            labelForId=\"ID_LINH\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"linha\"\n            id=\"linha\"\n            formControlName=\"linha\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2  pl-0\">\n          <label for=\"tipoPessoa\">Tipo de pessoa</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"tipoPessoa\"\n            formControlName=\"tipoPessoa\">\n            <option value=\"F\">Pessoa física</option>\n            <option value=\"J\">Pessoa jurídica</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3  pl-0\">\n          <label for=\"tipoData\">Tipo de Data</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"tipoData\"\n            formControlName=\"tipoData\">\n            <option value=\"1\">Data de Inclusão</option>\n            <option value=\"2\">Data do Último Faturamento</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2 pl-0\">\n          <label for=\"dataInicio\">Data Inicial</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dataInicio\"\n            type=\"text\"\n            bsDatepicker\n            data-placement=\"top\"\n            placeholder=\"Selecione...\"\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataInicio\"\n            >\n          </div>\n        </div>\n        <div class=\"form-group col-md-2 pl-0\">\n          <label for=\"dataFinal\">Data Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            data-placement=\"top\"\n            placeholder=\"Selecione...\"\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataFinal\"\n            >\n          </div>\n        </div>\n        \n        <div class=\"form-group col-lg-3  pl-0\">\n          <label for=\"situacao\">Situação</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"situacao\"\n            formControlName=\"situacao\">\n            <option value=\"Ativo\">Ativos</option>\n            <option value=\"Inativo\">Inativos</option>\n            <option value=\"Potenci\">Potenciais</option>\n            <option value=\"Arquivo\">Arquivados</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-2  pl-0\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"registros\"\n            formControlName=\"registros\">\n            <option>10</option>\n            <option>25</option>\n            <option>50</option>\n            <option>100</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3  pl-0\">\n          <label for=\"gerentes\">Gerencia</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"gerentes\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            placeholder=\"Selecione...\"\n            labelForId=\"gerente\"\n            bindLabel=\"DS_GERE\"\n            bindValue=\"gerente\"\n            id=\"gerente\"\n            formControlName=\"gerente\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-4  pl-0\">\n          <label for=\"vendedores\">Vendedor</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"vendedores\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            placeholder=\"Selecione...\"\n            labelForId=\"vendedor\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            id=\"vendedor\"\n            formControlName=\"vendedor\"\n            >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row mt-3\" *ngIf=\"dataLoaded && clientes.length > 0\">\n    <div class=\"col-12\" *ngIf=\"clientes.length > 1\">\n      <div class=\"custom-control custom-checkbox mr-sm-2 hover\">\n        <input \n        class=\"custom-control-input hover\" \n        type=\"checkbox\" \n        id=\"toggleAll\"\n        (click)=\"onToggleAll()\">\n        <label class=\"custom-control-label hover font-weight-bold\" for=\"toggleAll\">\n          SELECIONAR OS {{totalClientes}} REGISTROS ENCONTRADOS\n        </label>\n      </div>\n    </div>\n    <br><br>\n    <div class=\"col-12\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\"></th>\n            <th\n              scope=\"col\"\n              class=\"text-center hover\"\n              (click)=\"setOrderBy('codCliente')\">\n              <thead-sorter value=\"Código\" [active]=\"orderBy == 'codCliente'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n            <th\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"setOrderBy('razaoSocial')\">\n              <thead-sorter value=\"Razon Social\" [active]=\"orderBy == 'razaoSocial'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let cliente of clientes\" [class.table-active]=\"cliente.codCliente == clienteSelecionado\">\n            <td class=\"text-center\" style=\"width: 5%\">\n              <btn-icon\n                [icon]=\"cliente.checked ? 'fas fa-check-square' : 'far fa-square'\"\n                size=\"small\"\n                (click)=\"onCheckClientes(cliente)\">\n              </btn-icon>\n            </td>\n            <td class=\"text-center hover\" (click)=\"onCheckClientes(cliente)\">{{ cliente.codCliente | number: '6.0-0' }}</td>\n            <td (click)=\"onCheckClientes(cliente)\">\n              <i class=\"text-success  fas fa-circle mr-3\" tooltip=\"Ativo\" *ngIf= \"cliente.situacao == 'Ativo'\" ></i>\n              <i class=\"text-danger fas fa-circle mr-3\" tooltip=\"Inativo\" *ngIf= \"cliente.situacao == 'Inativo'\" ></i>\n              <i class=\"text-primary fas fa-circle mr-3\" tooltip=\"Potencial\" *ngIf= \"cliente.situacao == 'Potenci'\"></i>\n              <i class=\"text-warning fas fa-circle mr-3\"  tooltip=\"Arquivado\" *ngIf= \"cliente.situacao == 'Arquivo'\" ></i>\n              <span>{{ cliente.razaoSocial}}</span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"clientes[0]['total'] > itemsPerPage\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalClientes\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "FOez":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
      \***********************************************************************/

    /*! exports provided: ConfirmModalService */

    /***/
    function FOez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function () {
        return ConfirmModalService;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-modal.component */
      "SMoX"); // Components


      var ConfirmModalService = /*#__PURE__*/function () {
        function ConfirmModalService(modalService) {
          _classCallCheck(this, ConfirmModalService);

          this.modalService = modalService;
        }

        _createClass(ConfirmModalService, [{
          key: "showConfirm",
          value: function showConfirm(type, title, message, cancelTxt, okTxt) {
            var modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
              animated: false,
              ignoreBackdropClick: true,
              keyboard: false,
              "class": 'confirm'
            });
            modalRef.content.type = type;
            modalRef.content.title = title;
            modalRef.content.message = message;

            if (type === 'delete') {
              modalRef.content.messageAlerts = ["Se eliminará toda la información relacionada.", "Esta acción no se puede deshacer."];
            }

            if (type === 'inactivate') {
              modalRef.content.messageAlerts = ['Las informacion serán inactivadas.'];
            }

            if (cancelTxt) {
              modalRef.content.cancelTxt = cancelTxt;
            }

            if (okTxt) {
              modalRef.content.okTxt = okTxt;
            } // É uma boa prática tipar o retorno.
            // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.


            return modalRef.content.confirmResult;
          }
        }]);

        return ConfirmModalService;
      }();

      ConfirmModalService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      };

      ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])], ConfirmModalService);
      /***/
    },

    /***/
    "Rk3r":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/date.service.ts ***!
      \******************************************************/

    /*! exports provided: DateService */

    /***/
    function Rk3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.months = ['Enero', 'Febrero', 'Marzon', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          this.weeks = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        }

        _createClass(DateService, [{
          key: "sameDay",
          value: function sameDay(dateA, dateB) {
            return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
          }
        }, {
          key: "getHourMinute",
          value: function getHourMinute(date) {
            var getHours = date.getHours();
            var getMinutes = date.getMinutes();
            var hours, minutes;

            if (getHours < 10) {
              hours = "0".concat(getHours);
            } else {
              hours = getHours;
            }

            if (getMinutes < 10) {
              minutes = "0".concat(getMinutes);
            } else {
              minutes = getMinutes;
            }

            return "".concat(hours, ":").concat(minutes);
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(dateA, dateB) {
            var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var day = dateA.getDate();
            var weekDay = dateA.getDay();
            var month = dateA.getMonth();
            var year = dateA.getFullYear();
            var hour = this.getHourMinute(dateA);

            if (showTime) {
              if (dateB) {
                var hourB = this.getHourMinute(dateB);
                return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, ", desde ").concat(hour, " hasta ").concat(hourB);
              }

              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, " hasta ").concat(hour);
            } else {
              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year);
            }
          }
        }, {
          key: "getFullMonth",
          value: function getFullMonth(date) {
            return this.months[date.getMonth()];
          }
        }, {
          key: "getFirstDayYear",
          value: function getFirstDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 0, 1);
          }
        }, {
          key: "getLastDayYear",
          value: function getLastDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 11, 31);
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() + 1, 0);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
          }
        }, {
          key: "convert2PhpDate",
          value: function convert2PhpDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            if (m < 10) m = "0".concat(m);
            if (d < 10) d = "0".concat(d);
            if (h < 10) h = "0".concat(h);
            if (i < 10) i = "0".concat(i);
            return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(h, ":").concat(i);
          }
        }, {
          key: "convertToBrazilianDate",
          value: function convertToBrazilianDate(date) {
            var y = date.getFullYear().toString();
            var m = (date.getMonth() + 1).toString().padStart(2, '0');
            var d = date.getDate().toString().padStart(2, '0');
            var h = date.getHours().toString().padStart(2, '0');
            var i = date.getMinutes().toString().padStart(2, '0');
            var s = date.getSeconds().toString().padStart(2, '0');
            return "".concat(d, "/").concat(m, "/").concat(y, " ").concat(h, ":").concat(i, ":").concat(s);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            if (time !== null) {
              var timeSplit = time.split(':');
              return "".concat(timeSplit[0], ":").concat(timeSplit[1]);
            }

            return time;
          }
        }, {
          key: "convertToUrlDate",
          value: function convertToUrlDate(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (d < 10) d = "0".concat(d);
            if (m < 10) m = "0".concat(m);
            return "".concat(d, "-").concat(m, "-").concat(y);
          }
        }, {
          key: "convertStringToDate",
          value: function convertStringToDate(stringDate, dateType) {
            var date;

            if (stringDate.indexOf(':') > -1) {
              var stringDateSplit = stringDate.split(' ');
              var dateSplit = stringDateSplit[0].split('-');
              var timeSplit = stringDateSplit[1].split(':');

              if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              } else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              }
            } else {
              var _dateSplit = stringDate.split('-');

              if (dateType == 'latam') {
                date = new Date(_dateSplit[2], parseInt(_dateSplit[1]) - 1, _dateSplit[0].substr(0, 2));
              } else if (dateType == 'usa') {
                date = new Date(_dateSplit[0], parseInt(_dateSplit[1]) - 1, _dateSplit[2].substr(0, 2));
              }
            }

            return date;
          }
        }, {
          key: "formatWithSlashes",
          value: function formatWithSlashes(stringDate, dateType) {
            var dateSplit = stringDate.split('-');
            var date;

            if (dateType == 'latam') {
              date = "".concat(dateSplit[2], "/").concat(dateSplit[1], "/").concat(dateSplit[0]);
            } else if (dateType == 'usa') {
              date = "".concat(dateSplit[1], "/").concat(dateSplit[2], "/").concat(dateSplit[0]);
            }

            return date;
          }
        }, {
          key: "addDaysToDate",
          value: function addDaysToDate(date, days) {
            return new Date(date.setDate(date.getDate() + days));
          }
        }]);

        return DateService;
      }();

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "VgqD":
    /*!********************************************************!*\
      !*** ./src/app/modules/comercial/comercial.service.ts ***!
      \********************************************************/

    /*! exports provided: ComercialService */

    /***/
    function VgqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialService", function () {
        return ComercialService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialService = /*#__PURE__*/function () {
        function ComercialService(http) {
          _classCallCheck(this, ComercialService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
        }

        _createClass(ComercialService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/empresas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/depositos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/linhas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/classes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.http.get("".concat(this.API, "/perfil")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialService;
      }();

      ComercialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialService);
      /***/
    },

    /***/
    "XhaH":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/formulario/clientes/clientes.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ComercialAknaContatosClientesComponent */

    /***/
    function XhaH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosClientesComponent", function () {
        return ComercialAknaContatosClientesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "Ade5");
      /* harmony import */


      var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clientes.component.scss */
      "0OhI");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _cadastros_associacao_linhas_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../cadastros/associacao-linhas/associacao-linhas.service */
      "LreX");
      /* harmony import */


      var _contatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../contatos.service */
      "916M");
      /* harmony import */


      var _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../services/clientes.service */
      "8ouN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR"); //angular
      //services
      //rxjs


      var ComercialAknaContatosClientesComponent = /*#__PURE__*/function () {
        function ComercialAknaContatosClientesComponent(activatedRoute, router, contatosService, clientesService, formBuilder, pnotifyService, atividadesService, localeService, comercialService, setoresLinhaService, titleService) {
          _classCallCheck(this, ComercialAknaContatosClientesComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.contatosService = contatosService;
          this.clientesService = clientesService;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.localeService = localeService;
          this.comercialService = comercialService;
          this.setoresLinhaService = setoresLinhaService;
          this.titleService = titleService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Busqueda de clientes'
          }];
          this.tableConfig = {
            subtitleBorder: false
          };
          this.$subscriptions = [];
          this.linhas = [];
          this.vendedores = [];
          this.dataLoaded = false;
          this.dadosCadastraisLoaded = false;
          this.dadosCadastraisEmpty = false;
          this.contatosLoaded = false;
          this.contatosEmpty = false;
          this.toggleAll = false;
          this.searchSubmitted = false;
          this.showAdvancedFilter = true;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = this.currentUser['info']['matricula'];
          this.ativos = 0;
          this.inativos = 0;
          this.potencial = 0;
          this.arquivados = 0;
          this.orderBy = 'codCliente';
          this.orderType = 'desc';
          this.maxSize = 10;
          this.itemsPerPage = 50;
          this.currentPage = 1;
          this.totalClientes = 0;
          this.gerentes = [];
          this.clientes = [];
          this.allClientes = [];
          this.clientesPagination = [];
          this.dadosCadastrais = {};
          this.contatos = [];
          {
            this.localeService.use('pt-br');
            this.bsConfig = Object.assign({}, {
              containerClass: 'theme-dark-blue'
            }, {
              adaptivePosition: true
            }, {
              showWeekNumbers: false
            });
          }
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialAknaContatosClientesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.onEventSubscription();
            this.getFormFilters();
            this.setFormFilter();
            this.titleService.setTitle('Busqueda de clientes');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFormFilters",
          value: function getFormFilters() {
            var _this5 = this;

            if (!this.idLista) {
              this.setoresLinhaService.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {})).subscribe(function (response) {
                if (response.status === 200) {
                  _this5.linhas = response.body['data'];
                }
              });
              this.comercialService.getVendedores().pipe().subscribe(function (response) {
                if (response.responseCode === 200) {
                  _this5.vendedores = response.result;
                }
              });
            }
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.formFilter = this.formBuilder.group({
              pesquisa: [formValue['pesquisa']],
              linha: [formValue['linha']],
              gerente: [formValue['gerente']],
              dataFinal: [formValue['dataFinal']],
              dataInicio: [formValue['dataInicio']],
              vendedor: [formValue['vendedor']],
              tipoPessoa: [formValue['tipoPessoa'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              buscarPor: [formValue['buscarPor'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              tipoData: [formValue['tipoData'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              situacao: [formValue['situacao'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              pagina: [formValue['pagina']],
              registros: [formValue['registros'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var formValue = {
              pesquisa: null,
              buscarPor: 1,
              tipoData: 1,
              situacao: 'Ativo',
              tipoPessoa: 'T',
              pagina: 1,
              linha: null,
              registros: this.itemsPerPage
            };
            var queryParams = this.activatedRoute.snapshot.queryParams;

            if (Object.keys(queryParams).length > 0) {
              var _params2 = atob(queryParams['q']);

              _params2 = JSON.parse(_params2);
              this.setSubmittedSearch();
              this.search(_params2);

              if (_params2['registros']) {
                this.itemsPerPage = _params2['registros'];
              }

              Object.keys(formValue).forEach(function (formKey) {
                Object.keys(_params2).forEach(function (paramKey) {
                  if (formKey == paramKey && formValue[formKey] != _params2[paramKey]) {
                    if (!isNaN(Number(_params2[paramKey]))) {
                      formValue[formKey] = Number(_params2[paramKey]);
                    } else {
                      formValue[formKey] = _params2[paramKey];
                    }
                  }
                });
              });
            }

            var params = this.activatedRoute.snapshot.params;

            if (params.hasOwnProperty('id')) {
              this.idLista = params.id;
            }

            return formValue;
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'desc') {
                this.orderType = 'asc';
              } else if (this.orderType == 'asc') {
                this.orderType = 'desc';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'asc';
            }

            this.onFilter();
          }
        }, {
          key: "onAdvancedFilter",
          value: function onAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "filterByStatus",
          value: function filterByStatus(status) {
            this.formFilter.get('situacao').setValue(status);
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.contatosService.onEventLoading(true);
            var params = this.formFilter.value;
            params['orderBy'] = this.orderBy;
            params['orderType'] = this.orderType;
            this.itemsPerPage = this.formFilter.value['registros'];
            this.currentPage = 1;
            this.setRouterParams(params);
          }
        }, {
          key: "setSubmittedSearch",
          value: function setSubmittedSearch() {
            this.searchSubmitted = true;
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              },
              queryParamsHandling: 'merge'
            });
            this.setSubmittedSearch();
            this.search(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this6 = this;

            if (this.searchSubmitted) {
              this.loaderNavbar = true;
              this.dataLoaded = false;
              this.clientes = [];
              this.buscandoPor = params['buscarPor'];
              this.tiposDatas = params['tipoData'];
              this.pesquisa = params['pesquisa'];
              this.clientesService.getClientes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                _this6.loaderNavbar = false;
                _this6.dataLoaded = true;
              })).subscribe({
                next: function next(response) {
                  if (response['responseCode'] === 200) {
                    var clientes = response.result.analitico; // clientes.map(function (el: any) {
                    //   el.checked = 0;
                    // });

                    _this6.clientes = clientes.slice(0, _this6.itemsPerPage);
                    _this6.allClientes = response['result']['sintetico'][1]['quantidade'];
                    _this6.totalClientes = _this6.clientes[0]['total'];
                  } else if (response['responseCode'] === 204) {
                    _this6.ativos = 0;
                    _this6.inativos = 0;
                    _this6.potencial = 0;
                    _this6.arquivados = 0;

                    _this6.pnotifyService.notice('Nenhum registro encontrado!');
                  }
                },
                error: function error(_error3) {
                  _this6.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            var _this7 = this;

            this.toggleAll = !this.toggleAll;
            this.clientes.map(function (cliente) {
              return cliente.checked = _this7.toggleAll;
            });
            this.postVinculoAllClientes();
          }
        }, {
          key: "onCheckClientes",
          value: function onCheckClientes(cliente) {
            cliente.checked = !cliente.checked;
            this.postVinculoClientes(cliente);
          }
        }, {
          key: "postVinculoAllClientes",
          value: function postVinculoAllClientes(cliente) {
            var _this8 = this;

            var _params = {};
            this.contatosService.onEventLoading(true);
            _params['filtros'] = this.formFilter.value;
            _params['idLista'] = this.idLista;

            if (this.toggleAll) {
              _params['selectAll'] = '1';
            } else {
              _params['selectAll'] = '0';
            }

            this.contatosService.postVinculoClientes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this8.contatosService.onEventLoading(false);
            })).subscribe({
              next: function next(response) {
                _this8.pnotifyService.success();
              },
              error: function error(_error4) {
                _this8.pnotifyService.error();
              }
            });
          }
        }, {
          key: "postVinculoClientes",
          value: function postVinculoClientes(cliente) {
            var _this9 = this;

            var _params = {};
            this.contatosService.onEventLoading(true);
            _params['situacao'] = cliente.checked == true ? 1 : 0;
            _params['codCliente'] = cliente.codCliente;
            _params['idLista'] = this.idLista;
            this.contatosService.postVinculoClientes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this9.contatosService.onEventLoading(false);
            })).subscribe({
              next: function next(response) {
                _this9.pnotifyService.success();
              },
              error: function error(_error5) {
                _this9.pnotifyService.error();
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass;

            if (status == 'Ativo') {
              borderClass = 'border-success';
            } else if (status == 'Inativo') {
              borderClass = 'border-danger';
            } else if (status == 'Potenci') {
              borderClass = 'border-primary';
            } else if (status == 'Arquivo') {
              borderClass = 'border-secondary';
            }

            return borderClass;
          }
        }, {
          key: "onEventSubscription",
          value: function onEventSubscription() {
            var _this10 = this;

            this.$subscriptions[2] = this.contatosService.event.subscribe(function (response) {
              if (response.filter === true) {
                _this10.onFilter();
              }
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.formFilter.value['pagina'] != event.page) {
              this.resetClienteSelecionado();
              this.formFilter.value['pagina'] = event.page;
              this.onFilter();
            }
          }
        }, {
          key: "onPreCadastroCpfCnpj",
          value: function onPreCadastroCpfCnpj() {
            var pesquisa = this.pesquisa.replace(/\D/g, '');

            if (pesquisa.length === 11) {
              return {
                cpf: pesquisa
              };
            } else if (pesquisa.length === 14) {
              return {
                cnpj: pesquisa
              };
            }

            return {};
          }
        }, {
          key: "handleCounter",
          value: function handleCounter(value) {
            return value.toFixed(0);
          }
        }, {
          key: "resetClienteSelecionado",
          value: function resetClienteSelecionado() {
            this.clienteSelecionado = null;
          }
        }]);

        return ComercialAknaContatosClientesComponent;
      }();

      ComercialAknaContatosClientesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"]
        }, {
          type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]
        }, {
          type: _cadastros_associacao_linhas_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosAssociacaoLinhasService"]
        }, {
          type: _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]
        }];
      };

      ComercialAknaContatosClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'comercial-akna-contatos-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"], _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"], _cadastros_associacao_linhas_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosAssociacaoLinhasService"], _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]])], ComercialAknaContatosClientesComponent);
      /***/
    },

    /***/
    "Xj53":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/lista/lista.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function Xj53(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvY29udGF0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "bIcV":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/formulario/formulario.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function bIcV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvY29udGF0b3MvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "hlq3":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/contatos/lista/lista.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hlq3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"CONTATOS\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"ID\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID\"\n                formControlName=\"ID\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DESCRICAO\">Descrição</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DESCRICAO\"\n                formControlName=\"DESCRICAO\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"ARQUIVADA\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"ARQUIVADA\"\n              placeholder=\"Selecione...\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n              </ng-template>\n            </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">ID </th>\n            <th scope=\"col\" class=\"text-center\">Descrição</th>\n            <th scope=\"col\" class=\"text-center\">Quantidade de e-mails</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let contato of contatosFiltrados | slice : begin : end; let i = index\">\n            <td\n              class=\"text-center hover\"\n              [ngClass]=\"classStatusBorder(contato)\">\n              {{contato.ID}}\n            </td>\n            <td  class=\"text-center hover\">{{ contato.DESCRICAO }}</td>\n            <td  class=\"text-center hover\">{{ contato.CONTATOS_VALIDOS}}</td>\n          </tr>\n        </ng-template>\n      </custom-table><br>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"noResult\">\n      </empty-result>\n      <div *ngIf=\"!noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "nwB5":
    /*!********************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/contatos.module.ts ***!
      \********************************************************************/

    /*! exports provided: ComercialAknaContatosModule */

    /***/
    function nwB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosModule", function () {
        return ComercialAknaContatosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./lista/lista.component */
      "7R0/");
      /* harmony import */


      var _contatos_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./contatos-routing.module */
      "t69G");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "5Ujk");
      /* harmony import */


      var _formulario_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./formulario/clientes/clientes.component */
      "XhaH");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // Modules
      // Components

      var ComercialAknaContatosModule = function ComercialAknaContatosModule() {
        _classCallCheck(this, ComercialAknaContatosModule);
      };

      ComercialAknaContatosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["ComercialAknaContatosListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_25__["ComercialAknaContatosFormularioComponent"], _formulario_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__["ComercialAknaContatosClientesComponent"]],
        imports: [_contatos_routing_module__WEBPACK_IMPORTED_MODULE_24__["ComercialAknaContatosRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__["CurrencyMaskModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"],
          useValue: 'pt-br'
        }]
      })], ComercialAknaContatosModule);
      /***/
    },

    /***/
    "t69G":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/comercial/akna/contatos/contatos-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ComercialAknaContatosRoutingModule */

    /***/
    function t69G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosRoutingModule", function () {
        return ComercialAknaContatosRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "7R0/");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "5Ujk"); //components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaContatosListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialAknaContatosFormularioComponent"]
      }, {
        path: ':id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialAknaContatosFormularioComponent"]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialAknaContatosRoutingModule = function ComercialAknaContatosRoutingModule() {
        _classCallCheck(this, ComercialAknaContatosRoutingModule);
      };

      ComercialAknaContatosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialAknaContatosRoutingModule);
      /***/
    },

    /***/
    "zN97":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialTidSoftwareService */

    /***/
    function zN97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function () {
        return ComercialTidSoftwareService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ComercialTidSoftwareService = /*#__PURE__*/function () {
        function ComercialTidSoftwareService(http) {
          _classCallCheck(this, ComercialTidSoftwareService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/tid-software";
        }

        _createClass(ComercialTidSoftwareService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var empresas = this.getEmpresas('vendas');
            var linhas = this.getLinhas();
            var modulosVendas = this.getModulosVendas();
            var modulosProducaoTela = this.getModulosProducaoTela();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([empresas, linhas, modulosVendas, modulosProducaoTela]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(acao) {
            return this.http.get("".concat(this.API, "/empresas/").concat(acao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosVendas",
          value: function getModulosVendas() {
            return this.http.get("".concat(this.API, "/modulos/vendas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosProducaoTela",
          value: function getModulosProducaoTela() {
            return this.http.get("".concat(this.API, "/modulos/producao-tela")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarAcesso",
          value: function postGerarAcesso(data) {
            return this.http.post("".concat(this.API, "/gerar-acesso"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialTidSoftwareService;
      }();

      ComercialTidSoftwareService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialTidSoftwareService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contatos-contatos-module-es5.js.map