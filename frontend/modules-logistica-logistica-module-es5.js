(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <h1>Painel de Estoque Divergente</h1>\n    </div>\n  </div>\n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\">\n      <!-- acomodar botões -->\n      <button\n        (click)=\"getLista()\"\n        [disabled]=\"form.status  == 'INVALID'\"\n        >\n        Filtrar\n      </button>\n    </div>\n  </div>\n</div>\n<!-- Início dos Filtros -->\n<div class=\"row\" id=\"application-body\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"col-12 p-0\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"dataInicio\">DATA INICIAL</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"far fa-calendar-alt\"></i>\n                </span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"inicioData\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataInicio\"\n              [ngClass]=\"onFieldError('dataInicio') + ' ' + onFieldRequired('dataInicio')\"\n              >\n            </div>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataInicio')\"\n              message=\"Data Inicial é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"empresa\">EMPRESA</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              labelForId=\"empresa\"\n              bindLabel=\"nomeFantasia\"\n              bindValue=\"codigoEmpresa\"\n              placeholder=\"Selecione uma empresa\"\n              formControlName=\"empresas\"\n              (change) =\"getDepositos(); getMateriais()\"\n              (focus) =\"resetForm()\"\n              [ngClass]=\"onFieldError('empresas') + ' ' + onFieldRequired('empresas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('empresas')\"\n              message=\"Empresa é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"deposito\">DEPÓSITO</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"depositos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"deposito\"\n              bindLabel=\"depositoDescricao\"\n              bindValue=\"depositoId\"\n              formControlName=\"depositos\"\n              [ngClass]=\"onFieldError('depositos') + ' ' + onFieldRequired('depositos')\"\n              [placeholder]=\"placeholderDepositos\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('depositos')\"\n              message=\"Despósito é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"linha\">LINHA</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              labelForId=\"linha\"\n              bindLabel=\"linha\"\n              bindValue=\"linha\"\n              placeholder=\"Selecione uma linha\"\n              formControlName=\"linhas\"\n              (change)=\"getClasses(); getMateriais()\"\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('linhas')\"\n              message=\"Linha é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"classe\">CLASSE</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"classes\"\n              [multiple]=\"true\"\n              [virtualScroll]=\"true\"\n              labelForId=\"classe\"\n              bindLabel=\"classeDescricao\"\n              bindValue=\"classeId\"\n              formControlName=\"classes\"\n              (change)=\"getMateriais()\"\n              [ngClass]=\"onFieldError('classes') + ' ' + onFieldRequired('classes')\"\n              [placeholder]=\"placeholderClasses\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('classes')\"\n              message=\"Classe é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"material\">MATERIAL</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"materiais\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [virtualScroll]=\"true\"\n              labelForId=\"material\"\n              bindLabel=\"codigoDescricaoMaterial\"\n              bindValue=\"codigoMaterial\"\n              formControlName=\"materiais\"\n              [placeholder]=\"placeholderMateriais\"\n            >\n            </ng-select>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
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
          this.API = "https://crm360.monterrey.com.bo/api/core/mtcorp/usuarios";
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


      __webpack_exports__["default"] = ".c-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvbG9naXN0aWNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvbG9naXN0aWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";
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


      __webpack_exports__["default"] = "<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <h1>{{ 'logistica.home.titlePage' | translate }}</h1>\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"col\"></div>\n</div>\n";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <custom-iframe [url]=\"appUrl\"></custom-iframe>\n</app-body>";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!navBarLoading\"></loader-spinner-navbar>\n<app-header appTitle=\"Certificado de calidad\">\n  <button \n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n  <button\n    (click)=\"onResetForm()\">\n    Limpiar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form action=\"\" [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row p-0 col-6\">\n        <div class=\"form-group col\">\n          <label for=\"no_lote\">Lote</label>\n          <input id=\"no_lote\" type=\"text\" class=\"form-control\" formControlName=\"no_lote\" (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"no_cq\">Número de Certificado</label>\n          <input id=\"no_cq\" type=\"text\" class=\"form-control\" formControlName=\"no_cq\" (keyup.enter)=\"onFilter()\">\n        </div>\n      </div>\n    </form>\n    <div class=\"d-flex flex-wrap mt-2\">\n      <div *ngFor=\"let item of getValoresPesquisa(); let i = index\" class=\"mb-2\">\n        <div class=\"d-inline rounded-pill m-1 pl-2 pr-2 pt-1 pb-1 border border-dark\"\n          *ngIf=\"item\"\n          [ngClass]=\"validaCampoAtivo({'campo': 'no_lote', 'index': i}) ? 'bg-white text-black' : 'bg-black text-white'\">\n          <input type=\"text\" [value]=\"item\" class=\"input-search text-uppercase\" [attr.id]=\"'no_lote_' + i\" autocomplete=\"off\"\n            [ngClass]=\"validaCampoAtivo({'campo': 'no_lote', 'index': i}) ? 'text-black' : 'text-white'\"\n            (input)=\"alteraValorPesquisa({'index': i, 'campo': 'no_lote', 'valor': $event.target.value})\"\n            (focus)=\"setCampoAtivo({'campo': 'no_lote', 'index': i})\"\n            (blur)=\"setCampoAtivo()\"\n            (keyup.enter)=\"onFilter()\">\n          <i\n            class=\"far fa-times-circle hover\"\n            (click)=\"removeValoresPesquisa({'index': i, 'campo': 'no_lote'})\"\n            tooltip=\"eliminar\"\n            container=\"body\"\n          ></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex flex-wrap mt-2\">\n      <div *ngFor=\"let item of getValoresPesquisa({'campo': 'no_cq'}); let i = index\" class=\"mb-2\">\n        <div class=\"d-inline rounded-pill m-1 pl-2 pr-2 pt-1 pb-1\" \n          *ngIf=\"item\"\n          [ngClass]=\"validaCampoAtivo({'campo': 'no_cq', 'index': i}) ? 'bg-white text-black border border-dark' : 'bg-black text-white'\">\n          <input type=\"text\" [value]=\"item\" class=\"input-search text-uppercase\" [attr.id]=\"'no_cq_' + i\" autocomplete=\"off\"\n            [ngClass]=\"validaCampoAtivo({'campo': 'no_cq', 'index': i}) ? 'text-black' : 'text-white'\"\n            (input)=\"alteraValorPesquisa({'index': i, 'campo': 'no_cq', 'valor': $event.target.value})\"\n            (focus)=\"setCampoAtivo({'campo': 'no_cq', 'index': i})\"\n            (blur)=\"setCampoAtivo()\"\n            (keyup.enter)=\"onFilter()\">\n          <i\n            class=\"far fa-times-circle hover\"\n            (click)=\"removeValoresPesquisa({'index': i, 'campo': 'no_cq'})\"\n            tooltip=\"eliminar\"\n            container=\"body\"  \n          ></i>\n        </div>\n      </div>\n    </div>\n  </advanced-filter>\n  <div [hidden]=\"certificados.length === 0\">\n    <div style=\"min-height: 50vh;\">\n      <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th class=\"align-middle\">Producto</th>\n            <th class=\"align-middle\">Lote</th>\n            <th class=\"align-middle\">Número</th>\n            <th style=\"width: 5%;\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let certificado of certificados; let i = index\">\n            <td class=\"align-middle\">{{ certificado?.nome }}</td>\n            <td class=\"align-middle\">{{ certificado?.lote }}</td>\n            <td class=\"align-middle\">{{ certificado?.noCq }}</td>\n            <td class=\"align-middle\" style=\"width: 5%;\" >\n              <span tooltip=\"Para ver\" placement=\"left\" container=\"body\">\n                <a class=\"btn-icon-sm\"  [href]=\"certificado.link\" target=\"_blank\" download>\n                  <i class=\"fas fa-external-link-alt\"></i>\n                </a>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div>\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"certificados.length > 0 || loading\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 250px\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n</app-body>";
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


      __webpack_exports__["default"] = ".c-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvYmFpeGEtZGUtdGl0dWxvcy9iYWl4YS10aXR1bG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvYmFpeGEtZGUtdGl0dWxvcy9iYWl4YS10aXR1bG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtcG9pbnRlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
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
            [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("common"), __webpack_require__.e("relatorios-relatorios-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("common"), __webpack_require__.e("cadastros-cadastros-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("default~agendamentos-agendamentos-module~associacao-etapas-associacao-etapas-module~checklist-checkl~6711bf61"), __webpack_require__.e("common"), __webpack_require__.e("entrada-materiais-entrada-materiais-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("yms-yms-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("common"), __webpack_require__.e("estoque-inventario-inventario-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("common"), __webpack_require__.e("estoque-painel-inventario-painel-inventario-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("entrega-entrega-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("peacao-peacao-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("pedagio-pedagio-module")]).then(__webpack_require__.bind(null,
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

      var LogisticaRoutingModule = function LogisticaRoutingModule() {
        _classCallCheck(this, LogisticaRoutingModule);
      };

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


      __webpack_exports__["default"] = "<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Associação: Usuário x Empresa\">\n    <button\n      (click)=\"salvar()\"\n      [disabled] = \"!form.valid\">\n      Salvar\n    </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"d-flex justify-content-center\">\n    <form class=\"col-4\" [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"usuario_\">Usuário</label>\n          <ng-select\n            [items]=\"usuarios\"\n            labelForId=\"usuario_\"\n            bindValue=\"matricula\"\n            dropdownPosition=\"bottom\"\n            bindLabel=\"nome\"\n            [loading]=\"loadingUsuarios\"\n            formControlName=\"usuario\"\n            (change)=\"getEmpresas()\">\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n              ({{item.matricula}}) {{item.nome}}\n            </ng-template>\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"empresa\">Empresas</label>\n          <ng-select\n            [items]=\"empresas\"\n            [multiple]=\"true\"\n            dropdownPosition=\"bottom\"\n            [closeOnSelect]=\"false\"\n            [loading]=\"loadingEmpresas\"\n            labelForId=\"empresa\"\n            bindValue=\"idEmpresa\"\n            bindLabel=\"dsEmpresa\"\n            formControlName=\"empresa\">\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-body>";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-11\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3 text-center mb-4 mb-sm-0\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.iconeAtividade\"\n            [text]=\"atividade.nomeAtividade\"\n            (click)=\"onNavigate(atividade)\"\n            >\n          </card-button>\n          <!-- [routerLink]=\"[atividade.rotaAtividade + '/' + atividade.idAtividade]\" --> \n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Baixa de Títulos\">\n  <button\n    (click)=\"onReset()\"\n  >\n    Limpar\n  </button>\n  <button>\n    <form [formGroup]=\"form\" style=\"cursor: pointer\">\n      <label class=\"mb-0\" for=\"file\" (change)=\"onInput($event)\" style=\"cursor: pointer\">\n        Selecionar\n        <input type=\"file\" id=\"file\" formControlName=\"file\" class=\"d-none\">\n      </label>\n    </form>\n  </button>\n  <button \n    (click)=\"copiarParaAreaDeTransferencia()\">\n    Copiar\n  </button>\n  <button\n    (click)=\"salvar()\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"container\">\n    <div class=\"row col-12\">\n      <div class=\"legend blue hover\" [ngClass]=\"{'active': document}\" (click)=\"onTypeDocument('Cte')\">\n        <div class=\"square\"></div>\n        <div class=\"text\">CONHECIMENTO DE TRANSPORTE</div>\n      </div>\n      <div class=\"legend green hover\" [ngClass]=\"{'active': !document}\" (click)=\"onTypeDocument('NFs')\">\n        <div class=\"square\"></div>\n        <div class=\"text\">NOTA FISCAL DE SERVIÇOS</div>\n      </div>\n    </div>\n    <textarea rows=\"30\" class=\"mt-2\" style=\"font-size: 0.6em; width: 100%\" >{{ file }}</textarea>\n  </div>\n</app-body>\n";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Painel de Estoque Divergente\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div [ngClass]=\"{'col-12': !compressedTable, 'col-10 pr-0': compressedTable}\" *ngIf=\"listas.length > 0\">\n      <table class=\"table table-sm\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th class=\"text-center\" scope=\"col\">Cod. Material</th>\n            <th class=\"text-center\" scope=\"col\">Material</th>\n            <th class=\"text-center\" scope=\"col\">Empresa</th>\n            <th class=\"text-center\" scope=\"col\">Unidade</th>\n            <th class=\"text-center\" scope=\"col\">Tipo</th>\n            <th class=\"text-center\" scope=\"col\">Estoque Anterior</th>\n            <th class=\"text-center\" scope=\"col\">Estoque Atual</th>\n            <th class=\"text-center\" scope=\"col\">Estoque Lote</th>\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"compressedTable\">Entradas</th>\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"compressedTable\">Saídas</th>\n            <th class=\"text-center\" scope=\"col\" [hidden]=\"compressedTable\">Divergência Estoque</th>\n          </tr>\n        </thead>\n        <tbody class=\"hover\">\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\" class=\"hover\"\n              [ngClass]=\"lista.status ? 'bgRowTable' : ''\" (click)=\"openTab(i); clickEvent(lista)\">\n            <td class=\"text-center\">{{ lista.CD_MATE }}</td>\n            <td class=\"text-center\">{{ lista.DS_MATE }}</td>\n            <td class=\"text-center\">{{ lista.DS_EMPR }}</td>\n            <td class=\"text-center\">{{ lista.UNID_MEDI }}</td>\n            <td class=\"text-center\">{{ lista.DS_TIPO }}</td>\n            <td class=\"text-center\">{{ lista.ESTO_ANTE }}</td>\n            <td class=\"text-center\">{{ lista.ESTO_ATUA }}</td>\n            <td class=\"text-center\">{{ lista.ESTO_TOTA_LOTE }}</td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\">{{ lista.ENTR }}</td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\">{{ lista.SAID }}</td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\">{{ lista.DIVE_ESTO }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"mt-3\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <tabset class=\"col-2 tabsetCustom\" [hidden]=\"!compressedTable\">\n      <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onClose()\">\n        <i class=\"fas fa-times\"></i>\n      </button>\n      <tab heading=\"Detalhes\">\n        <div class=\"border-right border-left border-bottom border-top px-3 pt-3\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Divergência Estoque</label>\n              <div class=\"text-nowrap\">{{ divergenciaEstoque }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Entradas</label>\n              <div class=\"text-nowrap\">{{ entradas }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Saídas</label>\n              <div class=\"text-nowrap\">{{ saidas }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Data Movimentação</label>\n              <div class=\"text-nowrap\">{{ dataMovimentacao | date }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Linha</label>\n              <div class=\"text-nowrap\">{{ dsLinha }}</div>\n            </div>\n          </div>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n  <div [hidden]=\"spinnerFullScreen || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n\n\n  <!-- <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-child-name\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <div class=\"col-6\">\n            <div id=\"title\">\n              <h6>Data da divergência</h6>\n            </div>\n          </div>\n          <div class=\"actions w-100 justify-content-end d-flex\">\n            <button (click)=\"hideChildModal()\">\n              Fechar\n            </button>\n          </div>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"border-right border-left border-bottom border-top px-3 pt-3\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label>Data divengência</label>\n                <div class=\"text-nowrap\">{{ dtDivergencia | date }}</div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-10\">\n                <label>Divergência</label>\n                <div class=\"text-nowrap\">{{ divergencia }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n\n</app-body>\n";
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


      __webpack_exports__["default"] = ".bgRowTable {\n  background-color: #b6b8b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9lc3RvcXVlLWRpdmVyZ2VudGUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9lc3RvcXVlLWRpdmVyZ2VudGUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdSb3dUYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmI4Yjk7XG59XG4iXX0= */";
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

      var LogisticaModule = function LogisticaModule() {
        _classCallCheck(this, LogisticaModule);
      };

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


      __webpack_exports__["default"] = "button {\n  background-color: transparent;\n  border: none;\n}\n\n.input-search {\n  background: transparent;\n  border: none;\n}\n\n.input-search:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvY2VydGlmaWNhZG8tcXVhbGlkYWRlL2NlcnRpZmljYWRvLXF1YWxpZGFkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9jZXJ0aWZpY2Fkby1xdWFsaWRhZGUvY2VydGlmaWNhZG8tcXVhbGlkYWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5wdXQtc2VhcmNoe1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5wdXQtc2VhcmNoOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */";
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