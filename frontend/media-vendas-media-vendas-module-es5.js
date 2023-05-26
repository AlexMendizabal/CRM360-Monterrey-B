(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-vendas-media-vendas-module"], {
    /***/
    "0NqH":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/media-vendas/edita/edita.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NqH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button \n  (click)=\"onEdit()\"\n  [disabled]=\"form.status=='INVALID' || comparaData()\"\n  >\n  Salvar\n</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"container-fluid\">\n    <div class=\"col-12 p-0\">\n      <form id=\"form-abastecimento-painel-decisao-abastecimento\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"linha\">Linha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              placeholder=\"Selecione linha\"\n              bindLabel=\"linha\"\n              bindValue=\"linha\"\n              formControlName=\"linha\"\n              (change) = \"getClasses(linha)\"\n              [ngClass]=\"onFieldError('linha') + ' ' + onFieldRequired('linha')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('linha')\"\n              message=\"Linha é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"classe\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"classes\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              labelForId=\"classe\"\n              bindLabel=\"classeDescricao\"\n              bindValue=\"classeId\"\n              placeholder=\"TODOS\"\n              formControlName=\"classe\"\n            >\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"peridoInicial\">Data Inicial</label>\n            <input\n              class=\"form-control\"\n              id=\"dataInicial\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataInicial\"\n              [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataInicial')\"\n              message=\"Data inicial é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"peridoFinal\">Data Final</label>\n            <input\n              class=\"form-control\"\n              id=\"dataFinal\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataFinal\"\n              [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataFinal')\"\n              message=\"Data final é obrigatório.\">\n            </invalid-form-control>\n            <invalid-form-control\n              [show]=\"comparaData()\"\n              message=\"Data final deve ser maior que data inicial\">\n            </invalid-form-control>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "2q10":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/media-vendas/cadastro/cadastro.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button \n  (click)=\"onSave()\"\n  [disabled]=\"form.status=='INVALID' || comparaData()\"\n  >\n  Salvar\n</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"container-fluid\">\n    <div class=\"col-12 p-0\">\n      <form id=\"form-abastecimento-painel-decisao-abastecimento\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"linha\">Linha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              placeholder=\"Selecione linha\"\n              bindLabel=\"linha\"\n              bindValue=\"linha\"\n              formControlName=\"linhas\"\n              (change) = \"getClasses()\"\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('linhas')\"\n              message=\"Linha é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"classe\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"classes\"\n              [virtualScroll]=\"true\"\n              [multiple]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              labelForId=\"classe\"\n              bindLabel=\"classeDescricao\"\n              bindValue=\"classeId\"\n              placeholder=\"TODOS\"\n              formControlName=\"classes\"\n            >\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"peridoInicial\">Data Inicial</label>\n            <input\n              class=\"form-control\"\n              id=\"dataInicial\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataInicial\"\n              [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataInicial')\"\n              message=\"Data inicial é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"peridoFinal\">Data Final</label>\n            <input\n              class=\"form-control\"\n              id=\"dataFinal\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataFinal\"\n              [ngClass]=\"onFieldRequired('dataFinal') + ' ' + onFieldRequired('dataInicial')\">\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataFinal')\"\n              message=\"Data final é obrigatório.\">\n            </invalid-form-control>\n            <invalid-form-control\n              [show]=\"comparaData()\"\n              message=\"Data final deve ser maior que data inicial\">\n            </invalid-form-control>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "92u1":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/media-vendas.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: AbastecimentoCadastroMediaVendasModule */

    /***/
    function u1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastroMediaVendasModule", function () {
        return AbastecimentoCadastroMediaVendasModule;
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _media_vendas_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./media-vendas-routing.module */
      "bkx8");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./lista/lista.component */
      "nrw8");
      /* harmony import */


      var _edita_edita_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./edita/edita.component */
      "CpPM");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "n2hY");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default.a);

      var AbastecimentoCadastroMediaVendasModule = function AbastecimentoCadastroMediaVendasModule() {
        _classCallCheck(this, AbastecimentoCadastroMediaVendasModule);
      };

      AbastecimentoCadastroMediaVendasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosMediaVendasListaComponent"], _edita_edita_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosMediaVendasEditaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosMediaVendasCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _media_vendas_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastroMediaVendasRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_14__["OrderModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastroMediaVendasModule);
      /***/
    },

    /***/
    "A+Ic":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/cadastro/cadastro.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AIc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWVkaWEtdmVuZGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "CpPM":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/edita/edita.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosMediaVendasEditaComponent */

    /***/
    function CpPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosMediaVendasEditaComponent", function () {
        return AbastecimentoCadastrosMediaVendasEditaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edita_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edita.component.html */
      "0NqH");
      /* harmony import */


      var _edita_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edita.component.scss */
      "f2IR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _media_vendas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../media-vendas.service */
      "SfH9");

      var AbastecimentoCadastrosMediaVendasEditaComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosMediaVendasEditaComponent(formBuilder, pnotify, activatedRoute, routerService, service, localeService) {
          _classCallCheck(this, AbastecimentoCadastrosMediaVendasEditaComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.routerService = routerService;
          this.service = service;
          this.localeService = localeService;
          this.loading = false;
          this.loaderNavBar = true;
          this.compararData = false;
          this.linhas = [];
          this.classes = [];
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            linha: [null],
            classe: [null],
            dataInicial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dataFinal: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
        }

        _createClass(AbastecimentoCadastrosMediaVendasEditaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onBreadCumbTree();
            this.setValuesForm();
            this.disableForms();
          }
        }, {
          key: "setValuesForm",
          value: function setValuesForm() {
            var parametros = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
            var classeId = parseInt(parametros["CodigoClasse"]);
            var linha = parametros["Linha"];
            var periodoInicial = parametros["PeriodoInicial"];
            var periodoFinal = parametros["PeriodoFinal"];

            if (periodoInicial != undefined) {
              periodoInicial = this.formatDate(periodoInicial);
            }

            if (periodoFinal != undefined) {
              periodoFinal = this.formatDate(periodoFinal);
            }

            this.getLinhas();
            this.getClasses(linha);
            this.form.get("linha").setValue(linha);
            this.form.get("classe").setValue(classeId);
            this.form.get("dataInicial").setValue(periodoInicial);
            this.form.get("dataFinal").setValue(periodoFinal);
          }
        }, {
          key: "disableForms",
          value: function disableForms() {
            this.form.get('linha').disable();
            this.form.get('classe').disable();
          }
        }, {
          key: "onBreadCumbTree",
          value: function onBreadCumbTree() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Média de vendas',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/media-vendas/lista")
              }, {
                descricao: 'Cadastro'
              }];
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit() {
            var _this2 = this;

            this.loaderNavBar = true;
            var linhas = [this.form.get("linha").value];
            var classes = [this.form.get("classe").value];
            this.service.putMediaVendas({
              idUsuario: this.idUsuario,
              linha: linhas.toString(),
              classes: classes,
              periodoInicial: this.form.get("dataInicial").value,
              periodoFinal: this.form.get("dataFinal").value
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this2.loaderNavBar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                _this2.pnotify.success(res['body']);
              } else if (res.status === 204) {
                _this2.pnotify.notice(res['body']);
              } else {
                _this2.pnotify.error("Ocorreu um erro durante a consulta");
              }
            }, function (error) {
              _this2.pnotify.error(error["error"]);
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this3 = this;

            this.service.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this3.loading = false, _this3.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this3.linhas = res["body"];
              }
            }, function (error) {
              _this3.pnotify.error("Erro ao carregar Linhas");
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(linha) {
            var _this4 = this;

            this.classes = [];
            this.loaderNavBar = true;
            var descricaoLinhas = this.form.get('linha').value;

            if (descricaoLinhas) {
              this.form.get('classe').reset();
            }

            this.service.getClasses(descricaoLinhas || linha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this4.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this4.classes = res["body"];
              }
            }, function (error) {
              _this4.pnotify.error("Erro ao carregar Classes");
            });
          }
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
        }, {
          key: "formatDate",
          value: function formatDate(data) {
            return data.substr(0, 10).split('-').reverse().join('-');
          }
        }, {
          key: "comparaData",
          value: function comparaData() {
            var stra = this.form.get('dataInicial').value;
            var strb = this.form.get('dataFinal').value;
            var dataInicial = {};
            var dataFinal = {};

            if (stra instanceof Date) {
              dataInicial = stra;
            } else if (stra !== null) {
              dataInicial = new Date(stra.split('-').reverse().join('-'));
            }

            if (strb instanceof Date) {
              dataFinal = strb;
            } else if (strb !== null) {
              dataFinal = new Date(strb.split('-').reverse().join('-'));
            }

            if (!dataInicial) {
              this.compararData = false;
              return false;
            } else if (dataInicial > dataFinal) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }]);

        return AbastecimentoCadastrosMediaVendasEditaComponent;
      }();

      AbastecimentoCadastrosMediaVendasEditaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: _media_vendas_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastroMediaVendasService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }];
      };

      AbastecimentoCadastrosMediaVendasEditaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'abastecimento-cadastros-edita',
        template: _raw_loader_edita_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edita_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], _media_vendas_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastroMediaVendasService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]])], AbastecimentoCadastrosMediaVendasEditaComponent);
      /***/
    },

    /***/
    "SfH9":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/media-vendas.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: AbastecimentoCadastroMediaVendasService */

    /***/
    function SfH9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastroMediaVendasService", function () {
        return AbastecimentoCadastroMediaVendasService;
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

      var AbastecimentoCadastroMediaVendasService = /*#__PURE__*/function () {
        function AbastecimentoCadastroMediaVendasService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastroMediaVendasService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastroMediaVendasService, [{
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
          key: "postMediaVendas",
          value: function postMediaVendas(dados) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/medias-venda"), dados, {
              observe: "response"
            });
          }
        }, {
          key: "putMediaVendas",
          value: function putMediaVendas(dados) {
            return this.httpClient.put("".concat(this.BASE_URL, "/abastecimento/cadastros/medias-venda"), dados, {
              observe: "response"
            });
          }
        }, {
          key: "getMediaVendas",
          value: function getMediaVendas(parametros) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/medias-venda"), {
              params: {
                "linhas": parametros["linhas"].toString(),
                "classes": parametros["classes"].toString(),
                "situacao": parametros["situacao"]
              },
              observe: "response"
            });
          }
        }, {
          key: "getMediaVendasLogs",
          value: function getMediaVendasLogs(parametros) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/medias-venda-auditoria"), {
              params: {
                "linha": parametros["linha"].toString(),
                "classes": parametros["classe"].toString()
              },
              observe: "response"
            });
          }
        }]);

        return AbastecimentoCadastroMediaVendasService;
      }();

      AbastecimentoCadastroMediaVendasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AbastecimentoCadastroMediaVendasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AbastecimentoCadastroMediaVendasService);
      /***/
    },

    /***/
    "bkx8":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/media-vendas-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: AbastecimentoCadastroMediaVendasRoutingModule */

    /***/
    function bkx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastroMediaVendasRoutingModule", function () {
        return AbastecimentoCadastroMediaVendasRoutingModule;
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
      "nrw8");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "n2hY");
      /* harmony import */


      var _edita_edita_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edita/edita.component */
      "CpPM");

      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosMediaVendasListaComponent"]
        }, {
          path: 'cadastro',
          component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosMediaVendasCadastroComponent"]
        }, {
          path: 'edita',
          component: _edita_edita_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoCadastrosMediaVendasEditaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var AbastecimentoCadastroMediaVendasRoutingModule = function AbastecimentoCadastroMediaVendasRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastroMediaVendasRoutingModule);
      };

      AbastecimentoCadastroMediaVendasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastroMediaVendasRoutingModule);
      /***/
    },

    /***/
    "ciHw":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/media-vendas/lista/lista.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ciHw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Média de vendas\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status == 'INVALID'\"\n  >\n    Filtrar\n  </button>\n  <button type=\"button\" (click)=\"onNew()\">Novo</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3\">\n          <label for=\"linha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            placeholder=\"Selecione linha\"\n            bindLabel=\"linha\"\n            bindValue=\"linha\"\n            formControlName=\"linhas\"\n            (change)=\"getClasses()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            labelForId=\"classe\"\n            bindLabel=\"classeDescricao\"\n            bindValue=\"classeId\"\n            placeholder=\"TODOS\"\n            formControlName=\"classes\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"situacao\">Situação</label>\n          <ng-select\n            [items]=\"situacao\"\n            bindLabel=\"name\"\n            autofocus\n            bindValue=\"id\"\n            formControlName=\"situacao\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n  <div class=\"mt-3\" *ngIf=\"loading\">\n    <div class=\"table-responsive\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th (click)=\"sort('Linha')\">\n              Linha\n              <span *ngIf=\"key == 'Linha'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'Linha'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th (click)=\"sort('Classe')\">\n              Classe\n              <span *ngIf=\"key == 'Classe'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'Classe'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th (click)=\"sort('PeriodoInicial')\">\n              Data inicial\n              <span *ngIf=\"key == 'PeriodoInicial'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'PeriodoInicial'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th (click)=\"sort('PeriodoFinal')\">\n              Data final\n              <span *ngIf=\"key == 'PeriodoFinal'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'PeriodoFinal'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th class=\"align-middle\" style=\"width: 70px;\"></th>\n            <th class=\"align-middle\" style=\"width: 70px;\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of mediaVendas | orderBy: key:reverse | slice: begin:end;\n              let i = index\n            \"\n          >\n            <td\n              class=\"text-truncate\"\n              [ngClass]=\"\n                item.Situacao == 1 ? 'border-success' : 'border-danger'\n              \"\n            >\n              {{ item.Linha }}\n            </td>\n            <td class=\"text-truncate\">{{ item.Classe }}</td>\n            <td class=\"text-center\">\n              {{\n                item.PeriodoInicial\n                  ? (item.PeriodoInicial | date: 'dd/MM/yyyy')\n                  : '-'\n              }}\n            </td>\n            <td class=\"text-center\">\n              {{\n                item.PeriodoFinal\n                  ? (item.PeriodoFinal | date: 'dd/MM/yyyy')\n                  : '-'\n              }}\n            </td>\n            <td class=\"align-middle\" style=\"width: 70px;\">\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Editar\"\n                (click)=\"onSearch(item)\"\n              >\n                <i class=\"fas fa-edit\"></i>\n              </button>\n            </td>\n            <td>\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  placement=\"left\"\n                  tooltip=\"Logs\"\n                  (click)=\"openModal(item) + '' + lgModal.show()\"\n                  container=\"body\"\n                >\n                  <i class=\"fas fa-external-link-alt text-primary\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2 text-center\" *ngIf=\"mediaVendas.length > itemsPerPage\">\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ mediaVendas?.length }}\n      <div class=\"d-flex align-items-center justify-content-center\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"mediaVendas?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n<div\n  bsModal\n  #lgModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n>\n  <div class=\"modal-dialog modal-xl\" [hidden]=\"!loadingDetalhesLog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          LOGS MÉDIA VENDAS\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"table-responsive\">\n          <custom-table *ngIf=\"loadingLogs\">\n            <ng-template #thead let-thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\" (click)=\"sortA('DS_LINH')\">\n                  Linha\n                  <span *ngIf=\"keyA == 'DS_LINH'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DS_LINH'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_CLAS')\">\n                  Classe\n                  <span *ngIf=\"keyA == 'NM_CLAS'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_CLAS'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('DT_PERI_INIC')\">\n                  Data Inicial\n                  <span *ngIf=\"keyA == 'DT_PERI_INIC'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DT_PERI_INIC'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('DT_PERI_FINA')\">\n                  Data Final\n                  <span *ngIf=\"keyA == 'DT_PERI_FINA'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DT_PERI_FINA'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('DT_ACAO')\">\n                  Data\n                  <span *ngIf=\"keyA == 'DT_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DT_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_ACAO')\">\n                  Ação\n                  <span *ngIf=\"keyA == 'NM_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_USUA')\">\n                  Usuário\n                  <span *ngIf=\"keyA == 'NM_USUA'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_USUA'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of dadosLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\n                <td class=\"text-center\">{{ item.DS_LINH }}</td>\n                <td class=\"text-center\">{{ item.NM_CLAS }}</td>\n                <td class=\"text-center\">\n                  {{ item.DT_PERI_INIC | date: 'dd/MM/yyyy' }}\n                </td>\n                <td class=\"text-center\">\n                  {{ item.DT_PERI_FINA | date: 'dd/MM/yyyy' }}\n                </td>\n                <td class=\"text-center\">\n                  {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\n                </td>\n                <td class=\"text-center\">{{ item.NM_ACAO }}</td>\n                <td class=\"text-center\">{{ item.NM_USUA }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dadosLogs.length > itemsPerPage && loadingLogs\">\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dadosLogs?.length }}\n          <pagination\n            [maxSize]=\"10\"\n            [totalItems]=\"dadosLogs?.length\"\n            (pageChanged)=\"onPageChangedA($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPageA\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\"\n          >\n          </pagination>\n        </div>\n        <div\n          *ngIf=\"noResultLogs\"\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\n          style=\"height: 80%;\"\n        >\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "f2IR":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/edita/edita.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function f2IR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWVkaWEtdmVuZGFzL2VkaXRhL2VkaXRhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "n2hY":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/cadastro/cadastro.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosMediaVendasCadastroComponent */

    /***/
    function n2hY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosMediaVendasCadastroComponent", function () {
        return AbastecimentoCadastrosMediaVendasCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "2q10");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "A+Ic");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _media_vendas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../media-vendas.service */
      "SfH9");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]);

      var AbastecimentoCadastrosMediaVendasCadastroComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosMediaVendasCadastroComponent(formBuilder, pnotify, activatedRoute, localeService, service) {
          _classCallCheck(this, AbastecimentoCadastrosMediaVendasCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.service = service;
          this.loading = false;
          this.loaderNavBar = true;
          this.compararData = false;
          this.linhas = [];
          this.classes = [];
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            linhas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            classes: [null],
            dataInicial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            dataFinal: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
        }

        _createClass(AbastecimentoCadastrosMediaVendasCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onBreadCumbTree();
            this.getLinhas();
          }
        }, {
          key: "onBreadCumbTree",
          value: function onBreadCumbTree() {
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this5.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Média de vendas',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/media-vendas/lista")
              }, {
                descricao: 'Cadastro'
              }];
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this6 = this;

            this.service.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              return _this6.loading = false, _this6.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this6.linhas = res["body"];
              }
            }, function (error) {
              _this6.pnotify.error("Erro ao carregar Linhas");
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this7 = this;

            this.classes = [];
            this.loaderNavBar = true;

            if (this.form.get('linhas').status === "VALID") {
              var descricaoLinhas = this.form.get('linhas').value;
              this.service.getClasses(descricaoLinhas).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  _this7.classes = res["body"];
                }

                _this7.loaderNavBar = false;
              }, function (error) {
                _this7.pnotify.error("Erro ao carregar Classes");
              });
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this8 = this;

            this.loaderNavBar = true;
            this.service.postMediaVendas({
              idUsuario: this.idUsuario,
              linha: this.form.get("linhas").value.toString(),
              classes: this.form.get("classes").value,
              periodoInicial: this.form.get("dataInicial").value,
              periodoFinal: this.form.get("dataFinal").value
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              return _this8.loaderNavBar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                _this8.pnotify.success(res['body']);

                _this8.form.reset();
              } else if (res.status === 204) {
                _this8.pnotify.notice(res['body']);
              } else {
                _this8.pnotify.error("Ocorreu um erro durante a consulta");
              }
            }, function (error) {
              _this8.pnotify.error(error["error"]);
            });
          }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "comparaData",
          value: function comparaData() {
            var stra = this.form.get('dataInicial').value;
            var strb = this.form.get('dataFinal').value;
            var dataInicial = {};
            var dataFinal = {};

            if (stra instanceof Date) {
              dataInicial = stra;
            } else if (stra !== null) {
              dataInicial = new Date(stra.split('-').reverse().join('-'));
            }

            if (strb instanceof Date) {
              dataFinal = strb;
            } else if (strb !== null) {
              dataFinal = new Date(strb.split('-').reverse().join('-'));
            }

            if (!dataInicial) {
              this.compararData = false;
              return false;
            } else if (dataInicial > dataFinal) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }]);

        return AbastecimentoCadastrosMediaVendasCadastroComponent;
      }();

      AbastecimentoCadastrosMediaVendasCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"]
        }, {
          type: _media_vendas_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastroMediaVendasService"]
        }];
      };

      AbastecimentoCadastrosMediaVendasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'abastecimento-cadastros-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"], _media_vendas_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastroMediaVendasService"]])], AbastecimentoCadastrosMediaVendasCadastroComponent);
      /***/
    },

    /***/
    "nrw8":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/lista/lista.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosMediaVendasListaComponent */

    /***/
    function nrw8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosMediaVendasListaComponent", function () {
        return AbastecimentoCadastrosMediaVendasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "ciHw");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "wt5m");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _media_vendas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../media-vendas.service */
      "SfH9");

      var AbastecimentoCadastrosMediaVendasListaComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosMediaVendasListaComponent(pnotify, formBuilder, atividadesService, titleService, routerService, router, activatedRoute, service) {
          _classCallCheck(this, AbastecimentoCadastrosMediaVendasListaComponent);

          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.routerService = routerService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.service = service;
          this.loaderFullScreen = true;
          this.loading = false;
          this.loaderNavBar = false;
          this.loadingDetalhesLog = false;
          this.loadingLogs = false;
          this.noResult = false;
          this.noResultLogs = false;
          this.mediaVendas = [];
          this.dadosLogs = [];
          this.linhas = [];
          this.classes = [];
          this.situacao = [{
            id: 0,
            name: "Não cadastrado"
          }, {
            id: 1,
            name: "Cadastrado"
          }];
          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.subtitles = [{
            text: 'Com cadastro',
            color: 'green'
          }, {
            text: 'Sem cadastro',
            color: 'red'
          }];
          /* Ordenação */

          this.reverse = false;
          this.key = 'Linha';
          /* Ordenação */

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'DS_LINH';
          this.form = this.formBuilder.group({
            linhas: [null],
            classes: [null],
            situacao: [null]
          });
        }

        _createClass(AbastecimentoCadastrosMediaVendasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.disabledForms();
            setTimeout(function () {
              _this9.loaderFullScreen = false;
            }, 1000);
            this.onBreadCumbTree();
            this.registrarAcesso();
            this.checkRouterParams();
            this.getLinhas();
            this.titleService.setTitle('Média de Vendas');
          }
        }, {
          key: "disabledForms",
          value: function disabledForms() {
            this.form.get('situacao').setValue(1);
            this.form.get('classes').disable();
          }
        }, {
          key: "onBreadCumbTree",
          value: function onBreadCumbTree() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this10.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Média de vendas'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this11 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this11.routerService.getBase64UrlParams(queryParams);

                _this11.search(_response);

                _this11.setFormValues(_response);
              }
            });
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this12 = this;

            this.service.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this12.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this12.linhas = res["body"];
              }
            }, function (error) {
              _this12.pnotify.error("Erro ao carregar Linhas");
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this13 = this;

            this.classes = [];
            this.loaderNavBar = true;
            var descricaoLinhas = this.form.get('linhas').value;
            this.service.getClasses(descricaoLinhas).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this13.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  _this13.form.get('classes').reset();

                  _this13.form.get('classes').enable();

                  _this13.classes = res["body"];
                } else if (res.status == 204) {
                  _this13.form.get('classes').reset();

                  _this13.form.get('classes').disable();

                  _this13.pnotify.error("Não há dados");
                }
              }
            }, function (error) {
              _this13.form.get('classes').reset();

              _this13.form.get('classes').disable();
            });
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this14 = this;

            var linhas = queryParams["linhas"];
            var classes = queryParams["classes"];
            var situacao = queryParams["situacao"];

            if (Object.keys(linhas).length > 0) {
              this.loaderNavBar = true;
              this.service.getClasses(linhas).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                return _this14.loaderNavBar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status == 200) {
                    _this14.form.get('classes').enable();

                    _this14.classes = res["body"];
                  } else if (res.status == 204) {
                    _this14.form.get('classes').reset();

                    _this14.form.get('classes').disable();

                    _this14.pnotify.error("Não há dados");
                  }
                }
              }, function (error) {
                _this14.form.get('classes').reset();

                _this14.form.get('classes').disable();

                _this14.pnotify.error("Erro ao carregar Classes");
              });
            } else {
              this.form.get('classes').disable();
            }

            this.form.patchValue({
              linhas: linhas,
              classes: classes,
              situacao: situacao
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(item) {
            this.router.navigate(["../edita"], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(item)
            });
          }
        }, {
          key: "openModal",
          value: function openModal(item) {
            console.log(item);
            var params = {
              linha: item.Linha,
              classe: item.CodigoClasse
            };
            this.getLogs(params);
          }
        }, {
          key: "onNew",
          value: function onNew() {
            this.router.navigate(["../cadastro"], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.setRouterParams({
              linhas: this.form.value['linhas'] === null || this.form.value['linhas'] === undefined ? '' : this.form.value['linhas'],
              classes: this.form.value['classes'] === null || this.form.value['classes'] === undefined ? '' : this.form.value['classes'],
              situacao: this.form.value['situacao'] === null || this.form.value['situacao'] === undefined ? '' : this.form.value['situacao']
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(params)
            });
            this.search(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this15 = this;

            this.loaderNavBar = true;
            this.loading = false;
            this.mediaVendas = [];
            this.service.getMediaVendas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this15.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  _this15.loading = true;
                  _this15.noResult = false;
                  _this15.mediaVendas = res["body"];
                  _this15.loadingDetalhesLog = true;
                } else if (res.status == 204) {
                  _this15.noResult = true;

                  _this15.pnotify.notice("Não há itens a serem exibidos");

                  _this15.loadingDetalhesLog = true;
                }
              }
            }, function (error) {
              _this15.noResult = true;

              _this15.pnotify.error("Erro ao carregar Média de vendas");
            });
          }
        }, {
          key: "getLogs",
          value: function getLogs(params) {
            var _this16 = this;

            this.loadingLogs = false;
            this.loaderNavBar = true;
            this.loadingDetalhesLog = false;
            this.dadosLogs = [];
            this.service.getMediaVendasLogs(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this16.loaderNavBar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  _this16.loadingDetalhesLog = true;
                  _this16.loadingLogs = true;
                  _this16.noResultLogs = false;
                  _this16.dadosLogs = res["body"];
                } else if (res.status == 204) {
                  _this16.loadingDetalhesLog = true;
                  _this16.loadingLogs = false;
                  _this16.noResultLogs = true;

                  _this16.pnotify.notice("Não há itens a serem exibidos");
                }
              }
            }, function (error) {
              _this16.loadingDetalhesLog = true;
              _this16.noResultLogs = true;

              _this16.pnotify.error("Erro ao carregar Média de vendas");
            });
          }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
          /* Ordenação */

        }, {
          key: "sort",
          value: function sort(key) {
            this.key = key;
            this.reverse = !this.reverse;
          }
          /* Ordenação */

          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
        }]);

        return AbastecimentoCadastrosMediaVendasListaComponent;
      }();

      AbastecimentoCadastrosMediaVendasListaComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _media_vendas_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastroMediaVendasService"]
        }];
      };

      AbastecimentoCadastrosMediaVendasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'abastecimento-cadastros-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _media_vendas_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastroMediaVendasService"]])], AbastecimentoCadastrosMediaVendasListaComponent);
      /***/
    },

    /***/
    "wt5m":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/media-vendas/lista/lista.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function wt5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWVkaWEtdmVuZGFzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=media-vendas-media-vendas-module-es5.js.map