(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-logistica-logistica-module"], {
    /***/
    "/mAj":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/estoque-divergente/estoque-divergente.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <h1>Painel de Estoque Divergente</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <!-- acomodar botões -->\r\n      <button\r\n        (click)=\"getLista()\"\r\n        [disabled]=\"form.status  == 'INVALID'\"\r\n        >\r\n        Filtrar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Início dos Filtros -->\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"container-fluid\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"col-12 p-0\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"dataInicio\">DATA INICIAL</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">\r\n                  <i class=\"far fa-calendar-alt\"></i>\r\n                </span>\r\n              </div>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"inicioData\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataInicio\"\r\n              [ngClass]=\"onFieldError('dataInicio') + ' ' + onFieldRequired('dataInicio')\"\r\n              >\r\n            </div>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('dataInicio')\"\r\n              message=\"Data Inicial é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"empresa\">EMPRESA</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"empresa\"\r\n              bindLabel=\"nomeFantasia\"\r\n              bindValue=\"codigoEmpresa\"\r\n              placeholder=\"Selecione uma empresa\"\r\n              formControlName=\"empresas\"\r\n              (change) =\"getDepositos(); getMateriais()\"\r\n              (focus) =\"resetForm()\"\r\n              [ngClass]=\"onFieldError('empresas') + ' ' + onFieldRequired('empresas')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('empresas')\"\r\n              message=\"Empresa é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"deposito\">DEPÓSITO</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"depositos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"deposito\"\r\n              bindLabel=\"depositoDescricao\"\r\n              bindValue=\"depositoId\"\r\n              formControlName=\"depositos\"\r\n              [ngClass]=\"onFieldError('depositos') + ' ' + onFieldRequired('depositos')\"\r\n              [placeholder]=\"placeholderDepositos\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('depositos')\"\r\n              message=\"Despósito é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"linha\">LINHA</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"linhas\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"linha\"\r\n              bindLabel=\"linha\"\r\n              bindValue=\"linha\"\r\n              placeholder=\"Selecione uma linha\"\r\n              formControlName=\"linhas\"\r\n              (change)=\"getClasses(); getMateriais()\"\r\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('linhas')\"\r\n              message=\"Linha é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"classe\">CLASSE</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"classes\"\r\n              [multiple]=\"true\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"classe\"\r\n              bindLabel=\"classeDescricao\"\r\n              bindValue=\"classeId\"\r\n              formControlName=\"classes\"\r\n              (change)=\"getMateriais()\"\r\n              [ngClass]=\"onFieldError('classes') + ' ' + onFieldRequired('classes')\"\r\n              [placeholder]=\"placeholderClasses\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('classes')\"\r\n              message=\"Classe é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"material\">MATERIAL</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"materiais\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"material\"\r\n              bindLabel=\"codigoDescricaoMaterial\"\r\n              bindValue=\"codigoMaterial\"\r\n              formControlName=\"materiais\"\r\n              [placeholder]=\"placeholderMateriais\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "2Lsl":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/certificado-qualidade/certificado-qualidade.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaCertificadoQualidadeComponent */

    /***/
    function Lsl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaCertificadoQualidadeComponent", function () {
        return LogisticaCertificadoQualidadeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_certificado_qualidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./certificado-qualidade.component.html */
      "KvdO");
      /* harmony import */


      var _certificado_qualidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./certificado-qualidade.component.scss */
      "x7VE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _certificado_qualidade_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./certificado-qualidade.service */
      "8M4J");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/window.service */
      "49uZ");

      var LogisticaCertificadoQualidadeComponent = /*#__PURE__*/function () {
        function LogisticaCertificadoQualidadeComponent(service, pnotify, router, formBuilder, localeService, activatedRoute, atividadesService, http, windowService) {
          _classCallCheck(this, LogisticaCertificadoQualidadeComponent);

          this.service = service;
          this.pnotify = pnotify;
          this.router = router;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.http = http;
          this.windowService = windowService;
          this.certificados = [];
          this.loading = true;
          this.navBarLoading = false;
          this.resetForm = true;
          this.itemsPerPage = 100;
          this.totalItems = 100;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 100;
          this.breadCrumbTree = [{
            descricao: 'Logistica'
          }, {
            descricao: 'Certificado de Calidad'
          }];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            no_lote: [null],
            no_cq: [null],
            espessura: [null],
            largura: [null],
            pagina: [1]
          });
        }

        _createClass(LogisticaCertificadoQualidadeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.atividadesService.registrarAcesso().subscribe();
            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (data) {
              _this.form.patchValue({
                no_lote: data['lote'],
                no_cq: data['noCq'],
                pagina: data['pagina']
              });

              _this.getCertificados();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "getCertificados",
          value: function getCertificados() {
            var _this2 = this;

            var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.navBarLoading = true;
            var _req = [];

            var _lotes = this.getValoresPesquisa();

            var _noCq = this.getValoresPesquisa({
              campo: 'no_cq'
            });

            if (_lotes.length !== 0) {
              _lotes.map(function (element) {
                _req.push(_this2.service.getCertificados({
                  lote: element,
                  pagina: pagina
                }));
              });
            }

            if (_noCq.length !== 0) {
              _noCq.map(function (element) {
                _req.push(_this2.service.getCertificados({
                  noCq: element,
                  pagina: pagina
                }));
              });
            }

            if (_lotes.length === 0 && _noCq.length === 0) {
              _req.push(this.service.getCertificados({
                pagina: pagina
              }));
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(_req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this2.loading = false;
              _this2.navBarLoading = false;
            })).subscribe(function (data) {
              _this2.certificados = [];
              data.map(function (element) {
                if (element.status === 200) {
                  _this2.certificados = _this2.certificados.concat(element['body']['data']);
                  _this2.totalItems = element['body']['total'];
                }
              });
            }, function (error) {
              _this2.pnotify.error(error.message);
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.navBarLoading = true;
            this.getCertificados(event.page);
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                noCq: this.form.get('no_cq').value,
                lote: this.form.get('no_lote').value
              }
            });
            this.getCertificados();
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
            this.router.navigate(['logistica/certificado-qualidade']);
          }
        }, {
          key: "getValoresPesquisa",
          value: function getValoresPesquisa() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              campo: 'no_lote'
            };
            var _q = this.form.get(params.campo).value;
            return _q ? _q.trim().split(',') : [];
          }
        }, {
          key: "removeValoresPesquisa",
          value: function removeValoresPesquisa() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              index: null,
              campo: 'no_lote'
            };

            var _q;

            if (this.form.get(params.campo).value) {
              _q = this.form.get(params.campo).value.split(',');

              _q.splice(params.index, 1);

              this.form.get(params.campo).setValue(_q.join(','));
              return this.onFilter();
            }

            return;
          }
        }, {
          key: "alteraValorPesquisa",
          value: function alteraValorPesquisa() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              index: null,
              campo: 'no_lote',
              valor: null
            };

            var _q;

            this.indiceAtivoPesquisa = params.index;

            if (this.form.get(params.campo).value && params.valor) {
              _q = this.form.get(params.campo).value.split(',');
              _q[params.index] = params.valor;
              this.form.get(params.campo).setValue(_q.join(','));

              var _id = params.campo + '_' + params.index;

              return setTimeout(function () {
                document.getElementById(_id).focus();
              }, 0);
            }

            this.removeValoresPesquisa(params);
            return;
          }
        }, {
          key: "getLen",
          value: function getLen(params) {
            var _id = params.campo + '_' + params.index;

            var _element = document.getElementById(_id);

            return _element ? _element.innerText.length + 'ch' : 'auto';
          }
        }, {
          key: "validaCampoAtivo",
          value: function validaCampoAtivo() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              campo: null,
              index: null
            };
            return this.campoAtivo == params.campo + '_' + params.index;
          }
        }, {
          key: "setCampoAtivo",
          value: function setCampoAtivo() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              campo: null,
              index: null
            };
            return this.campoAtivo = params.campo + '_' + params.index;
          }
        }]);

        return LogisticaCertificadoQualidadeComponent;
      }();

      LogisticaCertificadoQualidadeComponent.ctorParameters = function () {
        return [{
          type: _certificado_qualidade_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaCertificadoQualidadeService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
        }, {
          type: src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_13__["WindowService"]
        }];
      };

      LogisticaCertificadoQualidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-certificado-qualidade',
        template: _raw_loader_certificado_qualidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_13__["WindowService"]],
        styles: [_certificado_qualidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_certificado_qualidade_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaCertificadoQualidadeService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_13__["WindowService"]])], LogisticaCertificadoQualidadeComponent);
      /***/
    },

    /***/
    "36JT":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/baixa-de-titulos/baixa-titulos.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaBaixaTitulosComponent */

    /***/
    function JT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaBaixaTitulosComponent", function () {
        return LogisticaBaixaTitulosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_baixa_titulos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./baixa-titulos.component.html */
      "ieE/");
      /* harmony import */


      var _baixa_titulos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./baixa-titulos.component.scss */
      "asFl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! file-saver/src/FileSaver */
      "dunZ");
      /* harmony import */


      var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _services_baixa_titulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/baixa-titulos.service */
      "CeQx");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LogisticaBaixaTitulosComponent = /*#__PURE__*/function () {
        function LogisticaBaixaTitulosComponent(pnotify, formBuilder, atividadesService, baixaTituloService, xlsxService) {
          _classCallCheck(this, LogisticaBaixaTitulosComponent);

          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.atividadesService = atividadesService;
          this.baixaTituloService = baixaTituloService;
          this.xlsxService = xlsxService;
          this.loading = false;
          this.loadingNavBar = false;
          this.file = [];
          this.document = true;
          this.routeId = 2;
          this.breadCrumbTree = [{
            descricao: 'Logistica'
          }, {
            descricao: 'Baixa de Títulos'
          }];
          this.form = this.formBuilder.group({
            file: [null]
          });
        }

        _createClass(LogisticaBaixaTitulosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.onSubscription();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$xlsxSubscription.unsubscribe();
          }
        }, {
          key: "copiarParaAreaDeTransferencia",
          value: function copiarParaAreaDeTransferencia() {
            var element = document.querySelector('textarea');
            element.select();
            document.execCommand('copy');
            this.pnotify.success('Copiado com sucesso!');
          }
        }, {
          key: "salvar",
          value: function salvar() {
            var blob = new Blob([this.file], {
              type: "text/plain;charset=utf-8"
            });
            Object(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, "titulo.ref");
            this.pnotify.success('Download iniciado com sucesso!');
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.file = "";
            this.form.reset();
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            this.loadingNavBar = true;
            this.file = undefined;
            this.xlsxService.getFile(event);
          }
        }, {
          key: "onSubscription",
          value: function onSubscription() {
            var _this3 = this;

            this.$xlsxSubscription = this.xlsxService.fileLoaded.subscribe(function (response) {
              _this3.getTitulos(response);
            });
          }
        }, {
          key: "getTitulos",
          value: function getTitulos(args) {
            var _this4 = this;

            this.loadingNavBar = true;
            /* const _length = args.length
            const _interval = 50;
            const _n = Math.ceil(_length / _interval);
                  let req = [];
                  for (let i = 0; i <= _n; i++) {
                    const current = args.slice((_interval * i) + 1, _interval * (i + 1))
                    req.push(
                this.baixaTituloService
                  .getTitulos(this.routeId, current)
              )
            } */

            this.file = ""; //forkJoin(req)

            this.baixaTituloService.getTitulos(this.routeId, args).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this4.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.file = response.body['data'];
              }
              /* response.forEach((element, index) => {
                if (element['status'] === 200) {
                  this.file += element['body']['data'];
                } else if (element['status'] === 204) {
                  //this.pnotify.notice(`Nenhum título localizado para o lote ${index}`);
                } else {
                  this.pnotify.error(`Erro ao processar títulos para o lote ${index}`);
                }
              }); */

            }, function (error) {
              _this4.pnotify.error();
            });
            this.form.reset();
          }
        }, {
          key: "onTypeDocument",
          value: function onTypeDocument(document) {
            this.document = document == 'Cte' ? true : false;
            this.routeId = document == 'Cte' ? 2 : 4;
          }
        }]);

        return LogisticaBaixaTitulosComponent;
      }();

      LogisticaBaixaTitulosComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: _services_baixa_titulos_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaBaixaTitulosService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"]
        }];
      };

      LogisticaBaixaTitulosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'baixa-titulos',
        template: _raw_loader_baixa_titulos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_baixa_titulos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], _services_baixa_titulos_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaBaixaTitulosService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"]])], LogisticaBaixaTitulosComponent);
      /***/
    },

    /***/
    "36ko":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/requests/contatos.service.ts ***!
      \**************************************************************/

    /*! exports provided: ContatosService */

    /***/
    function ko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContatosService", function () {
        return ContatosService;
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

      var ContatosService = /*#__PURE__*/function () {
        function ContatosService(http) {
          _classCallCheck(this, ContatosService);

          this.http = http;
          this.API = "http://23.254.204.187/api/core/mtcorp/usuarios";
        }

        _createClass(ContatosService, [{
          key: "getContatos",
          value: function getContatos(params) {
            //let httpParams = new HttpParams();

            /* for (let param in params) {
              httpParams = httpParams.append(param, params[param]);
            } */
            return this.http.get("".concat(this.API), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          } // Método obsoleto, aponta para a tabela do MTCorp 1

        }, {
          key: "getDetalhes",
          value: function getDetalhes(matricula) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(matricula)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ContatosService;
      }();

      ContatosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ContatosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ContatosService);
      /***/
    },

    /***/
    "3b/N":
    /*!************************************************************!*\
      !*** ./src/app/modules/logistica/logistica.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function bN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".c-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvbG9naXN0aWNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvbG9naXN0aWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "6JbW":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/home/home.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JbW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6 col-sm-6\">\r\n    <div id=\"title\">\r\n      <h1>{{ 'logistica.home.titlePage' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col-lg col-sm\"></div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "8M4J":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/certificado-qualidade/certificado-qualidade.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: LogisticaCertificadoQualidadeService */

    /***/
    function M4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaCertificadoQualidadeService", function () {
        return LogisticaCertificadoQualidadeService;
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

      var LogisticaCertificadoQualidadeService = /*#__PURE__*/function () {
        function LogisticaCertificadoQualidadeService(http) {
          _classCallCheck(this, LogisticaCertificadoQualidadeService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaCertificadoQualidadeService, [{
          key: "getCertificados",
          value: function getCertificados(params) {
            return this.http.get("".concat(this.API, "/logistica/certificado-qualidade/v2"), {
              params: params,
              observe: "response"
            });
          }
        }]);

        return LogisticaCertificadoQualidadeService;
      }();

      LogisticaCertificadoQualidadeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaCertificadoQualidadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaCertificadoQualidadeService);
      /***/
    },

    /***/
    "CeQx":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/baixa-de-titulos/services/baixa-titulos.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaBaixaTitulosService */

    /***/
    function CeQx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaBaixaTitulosService", function () {
        return LogisticaBaixaTitulosService;
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
      "IheW"); //angular


      var LogisticaBaixaTitulosService = /*#__PURE__*/function () {
        function LogisticaBaixaTitulosService(http) {
          _classCallCheck(this, LogisticaBaixaTitulosService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaBaixaTitulosService, [{
          key: "getTitulos",
          value: function getTitulos(parametro, params) {
            return this.http.post("".concat(this.API, "/logistica/baixa-titulo/").concat(parametro), params, {
              observe: "response"
            });
          }
        }]);

        return LogisticaBaixaTitulosService;
      }();

      LogisticaBaixaTitulosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaBaixaTitulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaBaixaTitulosService);
      /***/
    },

    /***/
    "CwQz":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/gestao/associacao-usuario-empresa/associacao-usuario-empresa.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: LogisticaGestaoAssociacaoUsuarioEmpresaComponent */

    /***/
    function CwQz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaGestaoAssociacaoUsuarioEmpresaComponent", function () {
        return LogisticaGestaoAssociacaoUsuarioEmpresaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_associacao_usuario_empresa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./associacao-usuario-empresa.component.html */
      "d7fO");
      /* harmony import */


      var _associacao_usuario_empresa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./associacao-usuario-empresa.component.scss */
      "SuQg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_requests_contatos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/contatos.service */
      "36ko");

      var LogisticaGestaoAssociacaoUsuarioEmpresaComponent = /*#__PURE__*/function () {
        function LogisticaGestaoAssociacaoUsuarioEmpresaComponent(http, formBuilder, pnotify, atividadesService, contatosService) {
          _classCallCheck(this, LogisticaGestaoAssociacaoUsuarioEmpresaComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.atividadesService = atividadesService;
          this.contatosService = contatosService;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API;
          this.usuarios = [];
          this.empresas = [];
          this.loadingNavBar = false;
          this.loadingEmpresas = false;
          this.loadingUsuarios = true;
          this.breadCrumbTree = [{
            descricao: 'Logistica'
          }, {
            descricao: 'Associação: Usuário x Empresa'
          }];
          this.form = this.formBuilder.group({
            usuario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            empresa: [null]
          });
        }

        _createClass(LogisticaGestaoAssociacaoUsuarioEmpresaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.getUsuarios();
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios() {
            var _this5 = this;

            this.usuarios = [];
            this.http.get("".concat(this.API, "/core/mtcorp/usuarios"), {
              params: {
                "situacao": "1",
                "qtItensPagina": "1000000",
                "naoCarregaFoto": "1"
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loadingUsuarios = false;
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                _this5.usuarios = response['body']['usuarios'];
              }
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this6 = this;

            this.empresas = [];
            this.loadingEmpresas = true;
            this.form.get("empresa").reset();
            var matricula = this.form.get("usuario").value;
            var empresasAtivas = [];

            if (!matricula) {
              this.loadingEmpresas = false;
              return;
            }

            this.http.get("".concat(this.API, "/logistica/associacao-usuario-empresa/").concat(matricula), {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.form.get("empresa").setValue(empresasAtivas);

              _this6.loadingEmpresas = false;
            })).subscribe(function (data) {
              if (data.status === 200) {
                _this6.empresas = data["body"];

                _this6.empresas.forEach(function (element) {
                  if (element.acesso == 1) empresasAtivas.push(element.idEmpresa);
                });
              }
            }, function (error) {
              _this6.pnotify.error(error["error"].toString());
            });
          }
        }, {
          key: "salvar",
          value: function salvar() {
            var _this7 = this;

            this.loadingNavBar = true;
            var matricula = this.form.get("usuario").value;
            var empresasSelecionadas = this.form.get("empresa").value;
            this.http.put("".concat(this.API, "/logistica/associacao-usuario-empresa/").concat(matricula), {
              "empresas": empresasSelecionadas
            }, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loadingNavBar = false;
            })).subscribe(function (data) {
              if (data["status"] == 200) {
                _this7.pnotify.success(data["body"].toString());
              } else {
                _this7.pnotify.notice(data["body"].toString());
              }
            }, function (error) {
              if (error["status"] == 500) {
                _this7.pnotify.error("Ocorreu erro durante a requisição");
              } else {
                _this7.pnotify.error(error["error"].toString());
              }
            });
          }
        }]);

        return LogisticaGestaoAssociacaoUsuarioEmpresaComponent;
      }();

      LogisticaGestaoAssociacaoUsuarioEmpresaComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_requests_contatos_service__WEBPACK_IMPORTED_MODULE_10__["ContatosService"]
        }];
      };

      LogisticaGestaoAssociacaoUsuarioEmpresaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-gestao-associacao-usuario-empresa',
        template: _raw_loader_associacao_usuario_empresa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacao_usuario_empresa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_requests_contatos_service__WEBPACK_IMPORTED_MODULE_10__["ContatosService"]])], LogisticaGestaoAssociacaoUsuarioEmpresaComponent);
      /***/
    },

    /***/
    "HjXd":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/renderizador/iframe/iframe.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HjXd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <custom-iframe [url]=\"appUrl\"></custom-iframe>\r\n</app-body>";
      /***/
    },

    /***/
    "KvdO":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/certificado-qualidade/certificado-qualidade.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KvdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!navBarLoading\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Certificado de calidad\">\r\n  <button \r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    (click)=\"onResetForm()\">\r\n    Limpiar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form action=\"\" [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row p-0 col-6\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"no_lote\">Lote</label>\r\n          <input id=\"no_lote\" type=\"text\" class=\"form-control\" formControlName=\"no_lote\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"no_cq\">Número de Certificado</label>\r\n          <input id=\"no_cq\" type=\"text\" class=\"form-control\" formControlName=\"no_cq\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"d-flex flex-wrap mt-2\">\r\n      <div *ngFor=\"let item of getValoresPesquisa(); let i = index\" class=\"mb-2\">\r\n        <div class=\"d-inline rounded-pill m-1 pl-2 pr-2 pt-1 pb-1 border border-dark\"\r\n          *ngIf=\"item\"\r\n          [ngClass]=\"validaCampoAtivo({'campo': 'no_lote', 'index': i}) ? 'bg-white text-black' : 'bg-black text-white'\">\r\n          <input type=\"text\" [value]=\"item\" class=\"input-search text-uppercase\" [attr.id]=\"'no_lote_' + i\" autocomplete=\"off\"\r\n            [ngClass]=\"validaCampoAtivo({'campo': 'no_lote', 'index': i}) ? 'text-black' : 'text-white'\"\r\n            (input)=\"alteraValorPesquisa({'index': i, 'campo': 'no_lote', 'valor': $event.target.value})\"\r\n            (focus)=\"setCampoAtivo({'campo': 'no_lote', 'index': i})\"\r\n            (blur)=\"setCampoAtivo()\"\r\n            (keyup.enter)=\"onFilter()\">\r\n          <i\r\n            class=\"far fa-times-circle hover\"\r\n            (click)=\"removeValoresPesquisa({'index': i, 'campo': 'no_lote'})\"\r\n            tooltip=\"eliminar\"\r\n            container=\"body\"\r\n          ></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex flex-wrap mt-2\">\r\n      <div *ngFor=\"let item of getValoresPesquisa({'campo': 'no_cq'}); let i = index\" class=\"mb-2\">\r\n        <div class=\"d-inline rounded-pill m-1 pl-2 pr-2 pt-1 pb-1\" \r\n          *ngIf=\"item\"\r\n          [ngClass]=\"validaCampoAtivo({'campo': 'no_cq', 'index': i}) ? 'bg-white text-black border border-dark' : 'bg-black text-white'\">\r\n          <input type=\"text\" [value]=\"item\" class=\"input-search text-uppercase\" [attr.id]=\"'no_cq_' + i\" autocomplete=\"off\"\r\n            [ngClass]=\"validaCampoAtivo({'campo': 'no_cq', 'index': i}) ? 'text-black' : 'text-white'\"\r\n            (input)=\"alteraValorPesquisa({'index': i, 'campo': 'no_cq', 'valor': $event.target.value})\"\r\n            (focus)=\"setCampoAtivo({'campo': 'no_cq', 'index': i})\"\r\n            (blur)=\"setCampoAtivo()\"\r\n            (keyup.enter)=\"onFilter()\">\r\n          <i\r\n            class=\"far fa-times-circle hover\"\r\n            (click)=\"removeValoresPesquisa({'index': i, 'campo': 'no_cq'})\"\r\n            tooltip=\"eliminar\"\r\n            container=\"body\"  \r\n          ></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </advanced-filter>\r\n  <div [hidden]=\"certificados.length === 0\">\r\n    <div style=\"min-height: 50vh;\">\r\n      <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th class=\"align-middle\">Producto</th>\r\n            <th class=\"align-middle\">Lote</th>\r\n            <th class=\"align-middle\">Número</th>\r\n            <th style=\"width: 5%;\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let certificado of certificados; let i = index\">\r\n            <td class=\"align-middle\">{{ certificado?.nome }}</td>\r\n            <td class=\"align-middle\">{{ certificado?.lote }}</td>\r\n            <td class=\"align-middle\">{{ certificado?.noCq }}</td>\r\n            <td class=\"align-middle\" style=\"width: 5%;\" >\r\n              <span tooltip=\"Para ver\" placement=\"left\" container=\"body\">\r\n                <a class=\"btn-icon-sm\"  [href]=\"certificado.link\" target=\"_blank\" download>\r\n                  <i class=\"fas fa-external-link-alt\"></i>\r\n                </a>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"certificados.length > 0 || loading\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 250px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "LnZk":
    /*!**********************************************************!*\
      !*** ./src/app/modules/logistica/home/home.component.ts ***!
      \**********************************************************/

    /*! exports provided: LogisticaHomeComponent */

    /***/
    function LnZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaHomeComponent", function () {
        return LogisticaHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "6JbW");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "Nj76");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LogisticaHomeComponent = /*#__PURE__*/function () {
        function LogisticaHomeComponent() {
          _classCallCheck(this, LogisticaHomeComponent);
        }

        _createClass(LogisticaHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogisticaHomeComponent;
      }();

      LogisticaHomeComponent.ctorParameters = function () {
        return [];
      };

      LogisticaHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LogisticaHomeComponent);
      /***/
    },

    /***/
    "Nj76":
    /*!************************************************************!*\
      !*** ./src/app/modules/logistica/home/home.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function Nj76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "P5TL":
    /*!**********************************************************!*\
      !*** ./src/app/modules/logistica/logistica.component.ts ***!
      \**********************************************************/

    /*! exports provided: LogisticaComponent */

    /***/
    function P5TL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaComponent", function () {
        return LogisticaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logistica_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logistica.component.html */
      "q2FX");
      /* harmony import */


      var _logistica_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logistica.component.scss */
      "3b/N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LogisticaComponent = /*#__PURE__*/function () {
        function LogisticaComponent() {
          _classCallCheck(this, LogisticaComponent);
        }

        _createClass(LogisticaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogisticaComponent;
      }();

      LogisticaComponent.ctorParameters = function () {
        return [];
      };

      LogisticaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica',
        template: _raw_loader_logistica_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logistica_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LogisticaComponent);
      /***/
    },

    /***/
    "R/6H":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/renderizador/iframe/iframe.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function R6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3JlbmRlcml6YWRvci9pZnJhbWUvaWZyYW1lLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "R9YF":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/estoque-divergente/estoque-divergente.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R9YF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvZXN0b3F1ZS1kaXZlcmdlbnRlL2VzdG9xdWUtZGl2ZXJnZW50ZS5jb21wb25lbnQuc2NzcyJ9 */";
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

          this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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
          } // Función para obtener la fecha de inicio de la semana actual (lunes)

        }, {
          key: "getStartOfWeek",
          value: function getStartOfWeek() {
            var currentDate = new Date();
            var startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
            startOfWeek.setHours(0, 0, 0, 0);
            return startOfWeek;
          } // Función para obtener la fecha de fin de la semana actual (domingo)

        }, {
          key: "getEndOfWeek",
          value: function getEndOfWeek() {
            var currentDate = new Date();
            var endOfWeek = new Date(currentDate);
            endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
            endOfWeek.setHours(23, 59, 59, 999);
            return endOfWeek;
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
    "SuQg":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/gestao/associacao-usuario-empresa/associacao-usuario-empresa.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SuQg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2dlc3Rhby9hc3NvY2lhY2FvLXVzdWFyaW8tZW1wcmVzYS9hc3NvY2lhY2FvLXVzdWFyaW8tZW1wcmVzYS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "asFl":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/baixa-de-titulos/baixa-titulos.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function asFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".c-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvYmFpeGEtZGUtdGl0dWxvcy9iYWl4YS10aXR1bG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvYmFpeGEtZGUtdGl0dWxvcy9iYWl4YS10aXR1bG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtcG9pbnRlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "brDs":
    /*!***************************************************************!*\
      !*** ./src/app/modules/logistica/logistica-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: LogisticaRoutingModule */

    /***/
    function brDs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRoutingModule", function () {
        return LogisticaRoutingModule;
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


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _logistica_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./logistica.component */
      "P5TL");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "LnZk");
      /* harmony import */


      var _baixa_de_titulos_baixa_titulos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./baixa-de-titulos/baixa-titulos.component */
      "36JT");
      /* harmony import */


      var _certificado_qualidade_certificado_qualidade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./certificado-qualidade/certificado-qualidade.component */
      "2Lsl");
      /* harmony import */


      var _estoque_estoque_divergente_estoque_divergente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./estoque/estoque-divergente/estoque-divergente.component */
      "qGHC");
      /* harmony import */


      var _estoque_estoque_divergente_lista_lista_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./estoque/estoque-divergente/lista/lista.component */
      "cGQ4");
      /* harmony import */


      var _gestao_associacao_usuario_empresa_associacao_usuario_empresa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./gestao/associacao-usuario-empresa/associacao-usuario-empresa.component */
      "CwQz");
      /* harmony import */


      var _renderizador_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./renderizador/iframe/iframe.component */
      "nAWW");
      /* harmony import */


      var _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./renderizador/renderizador.component */
      "wWWT");

      var routes = [{
        path: '',
        component: _logistica_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaComponent"],
        children: [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaHomeComponent"]
        }, {
          path: 'relatorios/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | relatorios-relatorios-module */
            [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("common"), __webpack_require__.e("relatorios-relatorios-module")]).then(__webpack_require__.bind(null,
            /*! ./relatorios/relatorios.module */
            "VT94")).then(function (m) {
              return m.LogisticaRelatoriosModule;
            });
          }
        }, {
          path: 'baixa-titulo',
          component: _baixa_de_titulos_baixa_titulos_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaBaixaTitulosComponent"]
        }, {
          path: 'certificado-qualidade',
          component: _certificado_qualidade_certificado_qualidade_component__WEBPACK_IMPORTED_MODULE_7__["LogisticaCertificadoQualidadeComponent"]
        }, {
          path: 'estoque/estoque-divergente',
          component: _estoque_estoque_divergente_estoque_divergente_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoqueEstoqueDivergenteComponent"]
        }, {
          path: 'estoque/estoque-divergente/lista',
          component: _estoque_estoque_divergente_lista_lista_component__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoqueEstoqueDivergenteListaComponent"]
        }, {
          path: 'associacao-usuario-empresa',
          component: _gestao_associacao_usuario_empresa_associacao_usuario_empresa_component__WEBPACK_IMPORTED_MODULE_10__["LogisticaGestaoAssociacaoUsuarioEmpresaComponent"]
        }, {
          path: 'renderizador/submodulos/:nomeSubmodulo/:idSubModulo',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaRenderizadorComponent"]
        }, {
          path: 'renderizador/:nomeAtividade/:idAtividade',
          component: _renderizador_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_11__["LogisticaRenderizadorIframeComponent"]
        }, {
          path: 'dashboards/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboards-dashboards-module */
            [__webpack_require__.e("common"), __webpack_require__.e("dashboards-dashboards-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboards/dashboards.module */
            "WXCU")).then(function (m) {
              return m.LogisticaDashboardsModule;
            });
          }
        }, {
          path: 'cadastros/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | cadastros-cadastros-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("common"), __webpack_require__.e("cadastros-cadastros-module")]).then(__webpack_require__.bind(null,
            /*! ./cadastros/cadastros.module */
            "CrqY")).then(function (m) {
              return m.CadastrosModule;
            });
          }
        }, {
          path: 'entrada-materiais/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | entrada-materiais-entrada-materiais-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("default~agendamentos-agendamentos-module~associacao-etapas-associacao-etapas-module~checklist-checkl~6711bf61"), __webpack_require__.e("common"), __webpack_require__.e("entrada-materiais-entrada-materiais-module")]).then(__webpack_require__.bind(null,
            /*! ./entrada-materiais/entrada-materiais.module */
            "zSPA")).then(function (m) {
              return m.LogisticaEntradaMateriaisModule;
            });
          }
        }, {
          path: 'yms/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | yms-yms-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("yms-yms-module")]).then(__webpack_require__.bind(null,
            /*! ./yms/yms.module */
            "A5BG")).then(function (m) {
              return m.LogisticaYmsModule;
            });
          }
        }, {
          path: 'estoque/inventario',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | estoque-inventario-inventario-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("common"), __webpack_require__.e("estoque-inventario-inventario-module")]).then(__webpack_require__.bind(null,
            /*! ./estoque/inventario/inventario.module */
            "0B+E")).then(function (m) {
              return m.LogisticaEstoqueInventarioModule;
            });
          }
        }, {
          path: 'estoque/painel-inventario',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | estoque-painel-inventario-painel-inventario-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("common"), __webpack_require__.e("estoque-painel-inventario-painel-inventario-module")]).then(__webpack_require__.bind(null,
            /*! ./estoque/painel-inventario/painel-inventario.module */
            "+vhV")).then(function (m) {
              return m.LogisticaEstoquePainelInventarioModule;
            });
          }
        }, {
          path: 'entrega/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | entrega-entrega-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("common"), __webpack_require__.e("entrega-entrega-module")]).then(__webpack_require__.bind(null,
            /*! ./entrega/entrega.module */
            "93OK")).then(function (m) {
              return m.LogisticaEntregaModule;
            });
          }
        }, {
          path: 'integracoes',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | integracao-integracao-module */
            "integracao-integracao-module").then(__webpack_require__.bind(null,
            /*! ./integracao/integracao.module */
            "5iJw")).then(function (m) {
              return m.LogisticaIntegracaoModule;
            });
          }
        }, {
          path: 'peacao',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | peacao-peacao-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("common"), __webpack_require__.e("peacao-peacao-module")]).then(__webpack_require__.bind(null,
            /*! ./peacao/peacao.module */
            "fsvQ")).then(function (m) {
              return m.LogisticaPeacaoModule;
            });
          }
        }, {
          path: 'pedagio',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pedagio-pedagio-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("common"), __webpack_require__.e("pedagio-pedagio-module")]).then(__webpack_require__.bind(null,
            /*! ./pedagio/pedagio.module */
            "/koB")).then(function (m) {
              return m.PedadioModule;
            });
          }
        }, {
          path: 'senhas',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | senhas-senhas-module */
            "senhas-senhas-module").then(__webpack_require__.bind(null,
            /*! ./senhas/senhas.module */
            "cNs9")).then(function (m) {
              return m.SenhasModule;
            });
          }
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        }]
      }];

      var LogisticaRoutingModule = /*#__PURE__*/_createClass(function LogisticaRoutingModule() {
        _classCallCheck(this, LogisticaRoutingModule);
      });

      LogisticaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaRoutingModule);
      /***/
    },

    /***/
    "cGQ4":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/estoque-divergente/lista/lista.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: LogisticaEstoqueEstoqueDivergenteListaComponent */

    /***/
    function cGQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueEstoqueDivergenteListaComponent", function () {
        return LogisticaEstoqueEstoqueDivergenteListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "jto+");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "rgnT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _lista_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./lista.service */
      "hwhj");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");

      var LogisticaEstoqueEstoqueDivergenteListaComponent = /*#__PURE__*/function () {
        /* Paginação */
        function LogisticaEstoqueEstoqueDivergenteListaComponent(activatedRoute, notice, empresasService, dateSevice, atividadesService) {
          _classCallCheck(this, LogisticaEstoqueEstoqueDivergenteListaComponent);

          this.activatedRoute = activatedRoute;
          this.notice = notice;
          this.empresasService = empresasService;
          this.dateSevice = dateSevice;
          this.atividadesService = atividadesService;
          this.spinnerFullScreen = true;
          this.listas = [];
          this.parametros = {};
          this.divergencia = '';
          this.dtDivergencia = '';
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/logistica/home'
          }, {
            descricao: 'Filtros',
            routerLink: '/logistica/estoque/estoque-divergente'
          }, {
            descricao: 'Listagem de Estoque Divergente'
          }];
          this.noResult = false;
          this.compressedTable = false;
          this.divergenciaEstoque = '';
          this.entradas = '';
          this.saidas = '';
          this.dataMovimentacao = '';
          this.dsLinha = '';
          /* Paginação */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.beginP = 0;
          this.endP = 10;
        }

        _createClass(LogisticaEstoqueEstoqueDivergenteListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.totalItems = 0;
            this.activatedRoute.queryParams.subscribe(function (data) {
              _this8.empresasService.getLista({
                empresas: data['empresas'] ? data['empresas'] : '',
                depositos: data['depositos'] ? data['depositos'] : '',
                linhas: data['linhas'] ? data['linhas'] : '',
                classes: data['classes'] ? data['classes'] : '',
                codigoMaterial: data['materiais'] ? data['materiais'] : '',
                dataInicio: _this8.dateSevice.convert2PhpDate(new Date(data['dataInicio']))
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this8.spinnerFullScreen = false;
              })).subscribe(function (data) {
                if (data.status === 204) {
                  _this8.notice.notice('Não há divengências.');

                  _this8.noResult = true;
                } else {
                  _this8.noResult = false;
                  _this8.listas = data.body;

                  _this8.listas.forEach(function (element, i) {
                    element.indice = i + 1;
                  });

                  _this8.totalItems = data.body['length'];
                }
              }, function (error) {
                _this8.noResult = true;

                _this8.notice.error();
              });
            });
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getData",
          value: function getData(material, codigoDeptData) {
            var _this9 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              _this9.empresasService.getData({
                deposito: codigoDeptData,
                codigoMaterial: material,
                dataInicio: _this9.dateSevice.convert2PhpDate(new Date(data['dataInicio']))
              }).subscribe(function (response) {
                if (response.status === 204) {
                  _this9.notice.notice('Não há informações.');
                } else {
                  _this9.divergencia = response.body['divergencia'];
                  _this9.dtDivergencia = response.body['dtDivergencia'];
                }
              }, function (error) {
                return _this9.notice.error();
              });
            });
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "openModal",
          value: function openModal(index) {
            var codigoMaterialData = this.listas[index].CD_MATE;
            var codigoDeptData = this.listas[index].CD_DEPO;
            this.getData(codigoMaterialData, codigoDeptData);
            this.childModal.show();
          }
        }, {
          key: "hideChildModal",
          value: function hideChildModal() {
            this.childModal.hide();
          }
        }, {
          key: "openTab",
          value: function openTab(index) {
            var _i = this.currentPage * this.itemsPerPage - this.itemsPerPage + index;

            this.divergenciaEstoque = this.listas[_i].DIVE_ESTO;
            this.entradas = this.listas[_i].ENTR;
            this.saidas = this.listas[_i].SAID;
            this.dataMovimentacao = this.listas[_i].DATA;
            this.dsLinha = this.listas[_i].DS_LINHA;
            this.compressedTable = true;
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.compressedTable = false;
          }
        }, {
          key: "clickEvent",
          value: function clickEvent(lista) {
            this.listas.forEach(function (element) {
              if (element.indice != lista.indice) {
                element.status = false;
              } else if (lista.status == true) {
                lista.status = true;
              } else {
                lista.status = !lista.status;
              }
            });
          }
        }]);

        return LogisticaEstoqueEstoqueDivergenteListaComponent;
      }();

      LogisticaEstoqueEstoqueDivergenteListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]
        }, {
          type: _lista_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEstoqueEstoqueDivergenteListaService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }];
      };

      LogisticaEstoqueEstoqueDivergenteListaComponent.propDecorators = {
        childModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['childModal', {
            "static": false
          }]
        }]
      };
      LogisticaEstoqueEstoqueDivergenteListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-estoque-estoqueDivergente-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"], _lista_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEstoqueEstoqueDivergenteListaService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]])], LogisticaEstoqueEstoqueDivergenteListaComponent);
      /***/
    },

    /***/
    "d7fO":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/gestao/associacao-usuario-empresa/associacao-usuario-empresa.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d7fO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Associação: Usuário x Empresa\">\r\n    <button\r\n      (click)=\"salvar()\"\r\n      [disabled] = \"!form.valid\">\r\n      Salvar\r\n    </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <form class=\"col-4\" [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"usuario_\">Usuário</label>\r\n          <ng-select\r\n            [items]=\"usuarios\"\r\n            labelForId=\"usuario_\"\r\n            bindValue=\"matricula\"\r\n            dropdownPosition=\"bottom\"\r\n            bindLabel=\"nome\"\r\n            [loading]=\"loadingUsuarios\"\r\n            formControlName=\"usuario\"\r\n            (change)=\"getEmpresas()\">\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.matricula}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"empresa\">Empresas</label>\r\n          <ng-select\r\n            [items]=\"empresas\"\r\n            [multiple]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            [closeOnSelect]=\"false\"\r\n            [loading]=\"loadingEmpresas\"\r\n            labelForId=\"empresa\"\r\n            bindValue=\"idEmpresa\"\r\n            bindLabel=\"dsEmpresa\"\r\n            formControlName=\"empresa\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "dqvJ":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/renderizador/renderizador.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dqvJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-11\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3 text-center mb-4 mb-sm-0\" *ngFor=\"let atividade of atividades\">\r\n          <card-button\r\n            [icon]=\"atividade.iconeAtividade\"\r\n            [text]=\"atividade.nomeAtividade\"\r\n            (click)=\"onNavigate(atividade)\"\r\n            >\r\n          </card-button>\r\n          <!-- [routerLink]=\"[atividade.rotaAtividade + '/' + atividade.idAtividade]\" --> \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "hwhj":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/estoque-divergente/lista/lista.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: LogisticaEstoqueEstoqueDivergenteListaService */

    /***/
    function hwhj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueEstoqueDivergenteListaService", function () {
        return LogisticaEstoqueEstoqueDivergenteListaService;
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

      var LogisticaEstoqueEstoqueDivergenteListaService = /*#__PURE__*/function () {
        function LogisticaEstoqueEstoqueDivergenteListaService(http) {
          _classCallCheck(this, LogisticaEstoqueEstoqueDivergenteListaService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoqueEstoqueDivergenteListaService, [{
          key: "getLista",
          value: function getLista(data) {
            return this.http.get("".concat(this.BASE_URL, "/abastecimento/estoque-divergente"), {
              params: {
                dtInicial: data.dataInicio,
                cdEmpresa: data.empresas,
                depositos: btoa(data.depositos),
                linhas: btoa(data.linhas),
                classes: btoa(data.classes),
                materiais: btoa(data.codigoMaterial)
              },
              observe: 'response'
            });
          }
        }, {
          key: "getData",
          value: function getData(data) {
            return this.http.get("".concat(this.BASE_URL, "/abastecimento/estoque-divergente/data"), {
              params: {
                dtInicial: data.dataInicio,
                cdEmpresa: data.deposito,
                cdMaterial: data.codigoMaterial
              },
              observe: 'response'
            });
          }
        }]);

        return LogisticaEstoqueEstoqueDivergenteListaService;
      }();

      LogisticaEstoqueEstoqueDivergenteListaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaEstoqueEstoqueDivergenteListaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaEstoqueEstoqueDivergenteListaService);
      /***/
    },

    /***/
    "ieE/":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/baixa-de-titulos/baixa-titulos.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ieE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Baixa de Títulos\">\r\n  <button\r\n    (click)=\"onReset()\"\r\n  >\r\n    Limpar\r\n  </button>\r\n  <button>\r\n    <form [formGroup]=\"form\" style=\"cursor: pointer\">\r\n      <label class=\"mb-0\" for=\"file\" (change)=\"onInput($event)\" style=\"cursor: pointer\">\r\n        Selecionar\r\n        <input type=\"file\" id=\"file\" formControlName=\"file\" class=\"d-none\">\r\n      </label>\r\n    </form>\r\n  </button>\r\n  <button \r\n    (click)=\"copiarParaAreaDeTransferencia()\">\r\n    Copiar\r\n  </button>\r\n  <button\r\n    (click)=\"salvar()\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"container\">\r\n    <div class=\"row col-12\">\r\n      <div class=\"legend blue hover\" [ngClass]=\"{'active': document}\" (click)=\"onTypeDocument('Cte')\">\r\n        <div class=\"square\"></div>\r\n        <div class=\"text\">CONHECIMENTO DE TRANSPORTE</div>\r\n      </div>\r\n      <div class=\"legend green hover\" [ngClass]=\"{'active': !document}\" (click)=\"onTypeDocument('NFs')\">\r\n        <div class=\"square\"></div>\r\n        <div class=\"text\">NOTA FISCAL DE SERVIÇOS</div>\r\n      </div>\r\n    </div>\r\n    <textarea rows=\"30\" class=\"mt-2\" style=\"font-size: 0.6em; width: 100%\" >{{ file }}</textarea>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "jto+":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/estoque-divergente/lista/lista.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jto(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Painel de Estoque Divergente\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col-12': !compressedTable, 'col-10 pr-0': compressedTable}\" *ngIf=\"listas.length > 0\">\r\n      <table class=\"table table-sm\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th class=\"text-center\" scope=\"col\">Cod. Material</th>\r\n            <th class=\"text-center\" scope=\"col\">Material</th>\r\n            <th class=\"text-center\" scope=\"col\">Empresa</th>\r\n            <th class=\"text-center\" scope=\"col\">Unidade</th>\r\n            <th class=\"text-center\" scope=\"col\">Tipo</th>\r\n            <th class=\"text-center\" scope=\"col\">Estoque Anterior</th>\r\n            <th class=\"text-center\" scope=\"col\">Estoque Atual</th>\r\n            <th class=\"text-center\" scope=\"col\">Estoque Lote</th>\r\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"compressedTable\">Entradas</th>\r\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"compressedTable\">Saídas</th>\r\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"compressedTable\">Divergência Estoque</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"hover\">\r\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\" class=\"hover\"\r\n              [ngClass]=\"lista.status ? 'bgRowTable' : ''\" (click)=\"openTab(i); clickEvent(lista)\">\r\n            <td class=\"text-center\">{{ lista.CD_MATE }}</td>\r\n            <td class=\"text-center\">{{ lista.DS_MATE }}</td>\r\n            <td class=\"text-center\">{{ lista.DS_EMPR }}</td>\r\n            <td class=\"text-center\">{{ lista.UNID_MEDI }}</td>\r\n            <td class=\"text-center\">{{ lista.DS_TIPO }}</td>\r\n            <td class=\"text-center\">{{ lista.ESTO_ANTE }}</td>\r\n            <td class=\"text-center\">{{ lista.ESTO_ATUA }}</td>\r\n            <td class=\"text-center\">{{ lista.ESTO_TOTA_LOTE }}</td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\">{{ lista.ENTR }}</td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\">{{ lista.SAID }}</td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\">{{ lista.DIVE_ESTO }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"mt-3\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <tabset class=\"col-2 tabsetCustom\" [hidden]=\"!compressedTable\">\r\n      <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onClose()\">\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n      <tab heading=\"Detalhes\">\r\n        <div class=\"border-right border-left border-bottom border-top px-3 pt-3\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Divergência Estoque</label>\r\n              <div class=\"text-nowrap\">{{ divergenciaEstoque }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Entradas</label>\r\n              <div class=\"text-nowrap\">{{ entradas }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Saídas</label>\r\n              <div class=\"text-nowrap\">{{ saidas }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Data Movimentação</label>\r\n              <div class=\"text-nowrap\">{{ dataMovimentacao | date }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Linha</label>\r\n              <div class=\"text-nowrap\">{{ dsLinha }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n  <div [hidden]=\"spinnerFullScreen || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n\r\n\r\n  <!-- <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-child-name\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"col-6\">\r\n            <div id=\"title\">\r\n              <h6>Data da divergência</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"actions w-100 justify-content-end d-flex\">\r\n            <button (click)=\"hideChildModal()\">\r\n              Fechar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"border-right border-left border-bottom border-top px-3 pt-3\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Data divengência</label>\r\n                <div class=\"text-nowrap\">{{ dtDivergencia | date }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-10\">\r\n                <label>Divergência</label>\r\n                <div class=\"text-nowrap\">{{ divergencia }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "nAWW":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/logistica/renderizador/iframe/iframe.component.ts ***!
      \***************************************************************************/

    /*! exports provided: LogisticaRenderizadorIframeComponent */

    /***/
    function nAWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRenderizadorIframeComponent", function () {
        return LogisticaRenderizadorIframeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./iframe.component.html */
      "HjXd");
      /* harmony import */


      var _iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iframe.component.scss */
      "R/6H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/pipes/title-case.pipe */
      "ciPE"); // Services


      var LogisticaRenderizadorIframeComponent = /*#__PURE__*/function () {
        function LogisticaRenderizadorIframeComponent(activatedRoute, location, atividadesService, pnotifyService, titleCasePipe) {
          _classCallCheck(this, LogisticaRenderizadorIframeComponent);

          this.activatedRoute = activatedRoute;
          this.location = location;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleCasePipe = titleCasePipe;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(LogisticaRenderizadorIframeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAtividade();
          }
        }, {
          key: "getAtividade",
          value: function getAtividade() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this10.atividadesService.getAtividade(params['idAtividade']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this10.loaderFullScreen = false;
              })).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this10.appName = _this10.titleCasePipe.transform(response['result']['nomeAtividade']);
                  _this10.appUrl = response['result']['urlExterna'];

                  _this10.setBreadCrumb();
                } else {
                  _this10.handleAtividadeError();
                }
              }, function (error) {
                _this10.handleAtividadeError();
              });
            });
          }
        }, {
          key: "handleAtividadeError",
          value: function handleAtividadeError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: this.appName
            }];
          }
        }]);

        return LogisticaRenderizadorIframeComponent;
      }();

      LogisticaRenderizadorIframeComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]
        }];
      };

      LogisticaRenderizadorIframeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-renderizador-iframe',
        template: _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
        styles: [_iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]])], LogisticaRenderizadorIframeComponent);
      /***/
    },

    /***/
    "pKic":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/logistica/renderizador/renderizador.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function pKic(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3JlbmRlcml6YWRvci9yZW5kZXJpemFkb3IuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "q2FX":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/logistica.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q2FX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper></core-module-wrapper>";
      /***/
    },

    /***/
    "qGHC":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/estoque-divergente/estoque-divergente.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaEstoqueEstoqueDivergenteComponent */

    /***/
    function qGHC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueEstoqueDivergenteComponent", function () {
        return LogisticaEstoqueEstoqueDivergenteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_estoque_divergente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./estoque-divergente.component.html */
      "/mAj");
      /* harmony import */


      var _estoque_divergente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estoque-divergente.component.scss */
      "R9YF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _estoque_divergente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./estoque-divergente.service */
      "yZoB");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");

      var LogisticaEstoqueEstoqueDivergenteComponent = /*#__PURE__*/function () {
        function LogisticaEstoqueEstoqueDivergenteComponent(formBuilder, notice, localeService, empresasService, route, dateService, atividadesService) {
          _classCallCheck(this, LogisticaEstoqueEstoqueDivergenteComponent);

          this.formBuilder = formBuilder;
          this.notice = notice;
          this.localeService = localeService;
          this.empresasService = empresasService;
          this.route = route;
          this.dateService = dateService;
          this.atividadesService = atividadesService;
          this.spinnerFullScreen = true;
          this.loaderNavbar = false;
          this.data = new Date();
          this.empresas = [];
          this.depositos = [];
          this.linhas = [];
          this.classes = [];
          this.materiais = [];
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/logistica/home'
          }, {
            descricao: 'Filtros'
          }];
          this.placeholderDepositos = 'Selecione um deposito';
          this.placeholderClasses = 'Selecione uma classe';
          this.placeholderMateriais = 'Selecione um material';
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEstoqueEstoqueDivergenteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.form = this.formBuilder.group({
              dataInicio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              empresas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              depositos: [],
              linhas: [],
              classes: [],
              materiais: [null]
            });
            this.form.get('dataInicio').setValue(this.data);
            this.atividadesService.registrarAcesso().subscribe();
            /* INICIO FILTROS INICIAIS */

            this.empresasService.getEmpresas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this11.spinnerFullScreen = false;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this11.empresas = response;
              }
            });
            this.empresasService.getLinhas().subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this11.linhas = response;
              }
            });
            /* FIM FILTROS INICIAIS */
          }
          /* INICIO FUNÇÕES FILTROS COM PARÂMETROS */

        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this12 = this;

            this.placeholderDepositos = 'Carregando...';
            this.loaderNavbar = true;

            if (this.form.get('empresas').status === 'VALID') {
              var idEmpresa = this.form.get('empresas').value;
              this.empresasService.getDepositos(idEmpresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this12.loaderNavbar = false;
                _this12.placeholderDepositos = 'Selecione um deposito';
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this12.depositos = response;
                }
              });
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this13 = this;

            this.placeholderClasses = 'Carregando...';
            this.loaderNavbar = true;
            var descricaoLinhas = [];

            if (this.form.get('linhas').status === 'VALID') {
              descricaoLinhas.push(this.form.get('linhas').value);
              this.empresasService.getClasses(descricaoLinhas).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this13.loaderNavbar = false;
                _this13.placeholderClasses = 'Selecione uma classe';
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this13.classes = response;
                }

                _this13.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this14 = this;

            var params = {};
            this.placeholderMateriais = 'Carregando...';
            this.materiais = [];
            this.loaderNavbar = true;

            if (this.form.get('classes').value) {
              params['classes'] = btoa(this.form.get('classes').value);
            }

            if (this.form.get('linhas').value) {
              params['linhas'] = btoa(this.form.get('linhas').value);
            }

            this.empresasService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this14.loaderNavbar = false;
              _this14.placeholderMateriais = 'Selecione um material';
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this14.materiais = response.result;
              }
            });
          }
          /* FIM FUNÇÕES FILTROS COM PARÂMETROS */

          /* INICIO CONSULTA ESTOQUE DIVERGENTE */

        }, {
          key: "getLista",
          value: function getLista() {
            if (this.form.status === 'VALID') {
              this.route.navigate(['logistica/estoque/estoque-divergente/lista'], {
                queryParams: {
                  empresas: this.form.get('empresas').value,
                  depositos: this.form.get('depositos').value,
                  linhas: this.form.get('linhas').value,
                  classes: this.form.get('classes').value,
                  materiais: this.form.get('materiais').value,
                  dataInicio: this.form.get('dataInicio').value
                }
              });
            }
          }
          /* INICIO CONSULTA ESTOQUE DIVERGENTE */

          /* CONTROLE VALIDAÇÕES DOS CAMPOS */

        }, {
          key: "resetForm",
          value: function resetForm() {
            this.form.get('depositos').reset();
            this.form.get('linhas').reset();
            this.form.get('classes').reset();
            this.form.get('materiais').reset();
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return LogisticaEstoqueEstoqueDivergenteComponent;
      }();

      LogisticaEstoqueEstoqueDivergenteComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _estoque_divergente_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoqueEstoqueDivergenteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }];
      };

      LogisticaEstoqueEstoqueDivergenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'logistica-estoque-estoque-divergente',
        template: _raw_loader_estoque_divergente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estoque_divergente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _estoque_divergente_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoqueEstoqueDivergenteService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]])], LogisticaEstoqueEstoqueDivergenteComponent);
      /***/
    },

    /***/
    "rgnT":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/estoque-divergente/lista/lista.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function rgnT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgRowTable {\n  background-color: #b6b8b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9lc3RvcXVlLWRpdmVyZ2VudGUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9lc3RvcXVlLWRpdmVyZ2VudGUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdSb3dUYWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjhiOTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "wWWT":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/logistica/renderizador/renderizador.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LogisticaRenderizadorComponent */

    /***/
    function wWWT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRenderizadorComponent", function () {
        return LogisticaRenderizadorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_renderizador_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./renderizador.component.html */
      "dqvJ");
      /* harmony import */


      var _renderizador_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./renderizador.component.scss */
      "pKic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/submodulos.service */
      "KwnO");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/pipes/title-case.pipe */
      "ciPE");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");

      var LogisticaRenderizadorComponent = /*#__PURE__*/function () {
        function LogisticaRenderizadorComponent(activatedRoute, router, subModulosService, atividadesService, pnotifyService, titleCasePipe, routerService) {
          _classCallCheck(this, LogisticaRenderizadorComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.subModulosService = subModulosService;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleCasePipe = titleCasePipe;
          this.routerService = routerService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(LogisticaRenderizadorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this15.registrarAcesso();

              _this15.getSubmodulo(params['idSubModulo']);

              _this15.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getSubmodulo",
          value: function getSubmodulo(idSubModulo) {
            var _this16 = this;

            this.subModulosService.getSubModulo(idSubModulo).subscribe(function (response) {
              if (response['status'] === 200) {
                _this16.appName = _this16.titleCasePipe.transform(response['body']['nome']);

                _this16.setBreadCrumb(_this16.appName);
              }
            });
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this17 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this17.atividades = response['result'];
                _this17.loaderFullScreen = false;
              } else {
                _this17.handleAtividadesInternasError();
              }
            }, function (error) {
              _this17.handleAtividadesInternasError();
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(nomeSubModulo) {
            this.breadCrumbTree = [{
              descricao: 'Logistica',
              routerLink: '/logistica/home'
            }, {
              descricao: nomeSubModulo
            }];
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.loaderFullScreen = false;
          }
        }, {
          key: "onNavigate",
          value: function onNavigate(atividade) {
            var matricula = JSON.parse(localStorage.getItem("currentUser"))["info"]["matricula"];
            this.router.navigate([atividade.rotaAtividade, atividade.idAtividade], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams({
                matricula: matricula
              })
            });
          }
        }]);

        return LogisticaRenderizadorComponent;
      }();

      LogisticaRenderizadorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }];
      };

      LogisticaRenderizadorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-renderizador',
        template: _raw_loader_renderizador_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_renderizador_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]])], LogisticaRenderizadorComponent);
      /***/
    },

    /***/
    "x5Jk":
    /*!*******************************************************!*\
      !*** ./src/app/modules/logistica/logistica.module.ts ***!
      \*******************************************************/

    /*! exports provided: LogisticaModule */

    /***/
    function x5Jk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaModule", function () {
        return LogisticaModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _logistica_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./logistica-routing.module */
      "brDs");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./home/home.component */
      "LnZk");
      /* harmony import */


      var _baixa_de_titulos_baixa_titulos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./baixa-de-titulos/baixa-titulos.component */
      "36JT");
      /* harmony import */


      var _logistica_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./logistica.component */
      "P5TL");
      /* harmony import */


      var _certificado_qualidade_certificado_qualidade_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./certificado-qualidade/certificado-qualidade.component */
      "2Lsl");
      /* harmony import */


      var _gestao_associacao_usuario_empresa_associacao_usuario_empresa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./gestao/associacao-usuario-empresa/associacao-usuario-empresa.component */
      "CwQz");
      /* harmony import */


      var _estoque_estoque_divergente_estoque_divergente_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./estoque/estoque-divergente/estoque-divergente.component */
      "qGHC");
      /* harmony import */


      var _estoque_estoque_divergente_lista_lista_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./estoque/estoque-divergente/lista/lista.component */
      "cGQ4");
      /* harmony import */


      var _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./renderizador/renderizador.component */
      "wWWT");
      /* harmony import */


      var _renderizador_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./renderizador/iframe/iframe.component */
      "nAWW");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_31__);

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      //masks

      var LogisticaModule = /*#__PURE__*/_createClass(function LogisticaModule() {
        _classCallCheck(this, LogisticaModule);
      });

      LogisticaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_logistica_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaHomeComponent"], _baixa_de_titulos_baixa_titulos_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaBaixaTitulosComponent"], _certificado_qualidade_certificado_qualidade_component__WEBPACK_IMPORTED_MODULE_24__["LogisticaCertificadoQualidadeComponent"], _renderizador_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_29__["LogisticaRenderizadorIframeComponent"], _estoque_estoque_divergente_estoque_divergente_component__WEBPACK_IMPORTED_MODULE_26__["LogisticaEstoqueEstoqueDivergenteComponent"], _estoque_estoque_divergente_lista_lista_component__WEBPACK_IMPORTED_MODULE_27__["LogisticaEstoqueEstoqueDivergenteListaComponent"], _gestao_associacao_usuario_empresa_associacao_usuario_empresa_component__WEBPACK_IMPORTED_MODULE_25__["LogisticaGestaoAssociacaoUsuarioEmpresaComponent"], _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_28__["LogisticaRenderizadorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"], _logistica_routing_module__WEBPACK_IMPORTED_MODULE_19__["LogisticaRoutingModule"], _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_20__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_30__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_31__["TextMaskModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
          useValue: 'pt-br'
        }]
      })], LogisticaModule);
      /***/
    },

    /***/
    "x7VE":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/certificado-qualidade/certificado-qualidade.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function x7VE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button {\n  background-color: transparent;\n  border: none;\n}\n\n.input-search {\n  background: transparent;\n  border: none;\n}\n\n.input-search:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvY2VydGlmaWNhZG8tcXVhbGlkYWRlL2NlcnRpZmljYWRvLXF1YWxpZGFkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9jZXJ0aWZpY2Fkby1xdWFsaWRhZGUvY2VydGlmaWNhZG8tcXVhbGlkYWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LXNlYXJjaHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1zZWFyY2g6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "yZoB":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/estoque-divergente/estoque-divergente.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaEstoqueEstoqueDivergenteService */

    /***/
    function yZoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueEstoqueDivergenteService", function () {
        return LogisticaEstoqueEstoqueDivergenteService;
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

      var LogisticaEstoqueEstoqueDivergenteService = /*#__PURE__*/function () {
        function LogisticaEstoqueEstoqueDivergenteService(http) {
          _classCallCheck(this, LogisticaEstoqueEstoqueDivergenteService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoqueEstoqueDivergenteService, [{
          key: "getEmpresas",
          value: function getEmpresas() {
            return this.http.get("".concat(this.BASE_URL, "/common/empresas"));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(idEmpresa) {
            return this.http.get("".concat(this.BASE_URL, "/common/depositos/").concat(idEmpresa));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.BASE_URL, "/common/linhas"));
          }
        }, {
          key: "getClasses",
          value: function getClasses(descricaoLinhas) {
            return this.http.get("".concat(this.BASE_URL, "/common/classes"), {
              params: {
                linhas: btoa(descricaoLinhas)
              }
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.BASE_URL, "/common/materiais"), {
              params: params
            });
          }
        }]);

        return LogisticaEstoqueEstoqueDivergenteService;
      }();

      LogisticaEstoqueEstoqueDivergenteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaEstoqueEstoqueDivergenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaEstoqueEstoqueDivergenteService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-logistica-logistica-module-es5.js.map