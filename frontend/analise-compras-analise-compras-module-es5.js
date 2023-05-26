(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analise-compras-analise-compras-module"], {
    /***/
    "0iJp":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-carteira/modal-carteira.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent */

    /***/
    function iJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent", function () {
        return AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_carteira_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-carteira.component.html */
      "DZqO");
      /* harmony import */


      var _modal_carteira_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-carteira.component.scss */
      "5bL4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../analise-compras.service */
      "yPm9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]); //Converte rota em base64

      var AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent = /*#__PURE__*/function () {
        /* dados do usuário */
        function AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent);

          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.service = service;
          this.pnotifyService = pnotifyService;
          this.loadingDetalhesModal = false;
          this.noResultModal = false;
          this.loaderBody = false;
          this.enableTabAbastFornecedor = false;
          this.enableTabAbastInterno = false;
          this.empresas = [];
          this.depositos = [];
          this.pedidoPai = [];
          this.dataPedido = [];
          this.pedidoRemessa = [];
          this.previsaoEntrega = [];
          this.fornecedor = [];
          this.modal = [];
          this.dadosExcel = [];
          this.dadosCarteiraDetalhe = [];
          this.dadosCarteiraDetalhesAbastGeralTT = [];
          this.dadosCarteiraDetalhesAbastGeralFull = [];
          this.dadosCarteiraDetalhesAbastGeral = [];
          this.dadosCarteiraDetalhesAbastInterno = [];
          this.dadosCarteiraDetalhesAbastTotal = [];
          this.dadosCarteiraDetalhesAbastFornecedor = [];
          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_EMPR';
          this.reverseB = false;
          this.keyB = 'NM_EMPR';
          this.reverseC = false;
          this.keyC = 'NM_EMPR';
          /* PaginationModal*/

          this.itemsPerPage = 15;
          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          this.currentPageB = 1;
          this.beginB = 0;
          this.endB = 15;
          this.currentPageC = 1;
          this.beginC = 0;
          this.endC = 15;
          /* dados do usuário */

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
            empresas: [null],
            depositos: [null],
            pedidoPai: [null],
            dataPedido: [null],
            pedidoRemessa: [null],
            previsaoEntrega: [null],
            fornecedor: [null]
          });
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.codMaterial = this.item.ID_REFE_ERP;
            this.modal.descMaterial = this.item.NM_MATE;
            this.modal.unidadeMedida = this.item.NM_UNID_MEDI;
            this.resetValuesForm();
            this.setParamsCarteira();
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get('empresas').reset();
            this.form.get('depositos').reset();
            this.form.get('pedidoPai').reset();
            this.form.get('dataPedido').reset();
            this.form.get('pedidoRemessa').reset();
            this.form.get('previsaoEntrega').reset();
            this.form.get('fornecedor').reset();
          }
        }, {
          key: "setParamsCarteira",
          value: function setParamsCarteira() {
            var queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
            var params = [];
            var tipoVisualizacao = queryParams["tipoVisualizacao"];
            var idMaterial = this.item["ID_MATE"];
            var idMesAno = this.idMesAno;

            if (tipoVisualizacao == 'S') {
              this.idEmpresa = queryParams["empresas"];
              this.idDeposito = queryParams["depositos"];
            } else if (tipoVisualizacao == 'A') {
              this.idEmpresa = "";
              this.idDeposito = this.item["ID_DEPO"];
            }

            params = {
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: this.idMesAno ? this.idMesAno : "",
              ID_MATE: idMaterial ? idMaterial : "",
              NM_EMPR: "",
              NM_DEPO: "",
              NR_PEDI_ORIG: "",
              DT_PEDI_ORIG: "",
              NR_PEDI_REME: "",
              DT_PREV_ENTR: "",
              NM_FORN: ""
            };
            this.getCarteiraDetalhes(params);
          }
        }, {
          key: "getCarteiraDetalhes",
          value: function getCarteiraDetalhes(params) {
            var _this = this;

            this.dadosCarteiraDetalhesAbastFornecedor = [];
            this.dadosCarteiraDetalhesAbastInterno = [];
            this.dadosCarteiraDetalhesAbastGeral = [];
            this.dadosCarteiraDetalhesAbastGeralFull = [];
            this.dadosCarteiraDetalhesAbastGeralTT = [];
            this.loaderBody = true;
            this.noResultModal = false;
            this.loadingDetalhesModal = false;
            this.loadingDetalhesModal = false;
            this.enableTabAbastInterno = false;
            this.enableTabAbastFornecedor = false;
            this.service.getCarteiraDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              return _this.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this.loadingDetalhesModal = true;
                  _this.noResultModal = false;
                  _this.dadosCarteiraDetalhesAbastFornecedor = res['body']['result']['ABAS_FORN'];
                  _this.dadosCarteiraDetalhesAbastInterno = res['body']['result']['ABAS_INTE'];
                  _this.dadosCarteiraDetalhesAbastTotal = res['body']['result']['TOTA_DETA_CART_ABER'];
                  _this.dadosCarteiraDetalhesAbastGeralFull = res['body']['result']['INFO_GERA'];
                  _this.dadosCarteiraDetalhesAbastGeralTT = _this.dadosCarteiraDetalhesAbastGeralFull.shift();
                  _this.dadosCarteiraDetalhesAbastGeral = _this.dadosCarteiraDetalhesAbastGeralFull;

                  if (_this.dadosCarteiraDetalhesAbastInterno != (false || undefined)) {
                    _this.enableTabAbastInterno = true;
                  }

                  if (_this.dadosCarteiraDetalhesAbastFornecedor != (false || undefined)) {
                    _this.enableTabAbastFornecedor = true;
                  }

                  if (!_this.enableTabAbastInterno && _this.enableTabAbastFornecedor) {
                    _this.form.get('pedidoRemessa').reset();

                    _this.form.get('pedidoRemessa').disable();
                  }
                } else if (res['body']['responseCode'] === 404) {
                  _this.loadingDetalhesModal = false;
                  _this.noResultModal = true;

                  _this.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this.pnotifyService.error('Erro ao detalhes de Carteira');
            });
          }
        }, {
          key: "getCarteiraDetalhesExcel",
          value: function getCarteiraDetalhesExcel(params) {
            var _this2 = this;

            this.dadosExcel = [];
            this.service.getCarteiraDetalhes(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this2.dadosExcel = res['body']['result'];

                  _this2.pnotifyService.success(_this2.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this2.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this2.pnotifyService.error('Erro ao detalhes de Carteira');
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var dataPedido = this.setDateValid(this.form.value['dataPedido']);
            var previsaoEntrega = this.setDateValid(this.form.value['previsaoEntrega']);
            var params = {
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: this.idMesAno ? this.idMesAno : "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_PEDI_ORIG: this.form.value['pedidoPai'] ? this.form.value['pedidoPai'] : "",
              DT_PEDI_ORIG: dataPedido ? dataPedido : "",
              NR_PEDI_REME: this.form.value['pedidoRemessa'] ? this.form.value['pedidoRemessa'] : "",
              DT_PREV_ENTR: previsaoEntrega ? previsaoEntrega : "",
              NM_FORN: this.form.value['fornecedor'] ? this.form.value['fornecedor'] : "",
              IN_GERA_RELA_EXCE: "",
              ID_USUA: ""
            };
            this.getCarteiraDetalhes(params);
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataPedido = this.setDateValid(this.form.value['dataPedido']);
            var previsaoEntrega = this.setDateValid(this.form.value['previsaoEntrega']);
            var params = {
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: this.idMesAno ? this.idMesAno : "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_PEDI_ORIG: this.form.value['pedidoPai'] ? this.form.value['pedidoPai'] : "",
              DT_PEDI_ORIG: dataPedido ? dataPedido : "",
              NR_PEDI_REME: this.form.value['pedidoRemessa'] ? this.form.value['pedidoRemessa'] : "",
              DT_PREV_ENTR: previsaoEntrega ? previsaoEntrega : "",
              NM_FORN: this.form.value['fornecedor'] ? this.form.value['fornecedor'] : "",
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: this.idUsuario
            };
            this.getCarteiraDetalhesExcel(params);
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
        }, {
          key: "sortB",
          value: function sortB(keyB) {
            this.keyB = keyB;
            this.reverseB = !this.reverseB;
          }
        }, {
          key: "sortC",
          value: function sortC(keyC) {
            this.keyC = keyC;
            this.reverseC = !this.reverseC;
          }
          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }, {
          key: "onPageChangedB",
          value: function onPageChangedB(event) {
            this.beginB = (event.page - 1) * event.itemsPerPage;
            this.endB = event.page * event.itemsPerPage;
          }
        }, {
          key: "onPageChangedC",
          value: function onPageChangedC(event) {
            this.beginC = (event.page - 1) * event.itemsPerPage;
            this.endC = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent;
      }();

      AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idMesAno: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-carteira',
        template: _raw_loader_modal_carteira_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_carteira_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]])], AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent);
      /***/
    },

    /***/
    "0opu":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-realizadas/modal-vendas-realizadas.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent */

    /***/
    function opu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent", function () {
        return AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_vendas_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-vendas-realizadas.component.html */
      "6IHY");
      /* harmony import */


      var _modal_vendas_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-vendas-realizadas.component.scss */
      "WXyx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../analise-compras.service */
      "yPm9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]); //Converte rota em base64

      var AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent = /*#__PURE__*/function () {
        /* dados do usuário */
        function AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent);

          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.service = service;
          this.pnotifyService = pnotifyService;
          this.loadingDetalhesModal = false;
          this.noResultModal = false;
          this.loaderBody = false;
          this.compararDataFinal = false;
          this.compararDataInicial = false;
          this.compararDataFinalAtual = false;
          this.empresas = [];
          this.depositos = [];
          this.proposta = [];
          this.dataEntrada = [];
          this.dataEncerramento = [];
          this.cliente = [];
          this.modal = [];
          this.dadosExcel = [];
          this.dadosVendasRealDetalhesModalFull = [];
          this.dadosVendasRealDetalhesModal = [];
          this.dadosVendasRealDetalhesModalTotal = [];
          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_EMPR';
          /* PaginationModal*/

          this.itemsPerPage = 15;
          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          /* dados do usuário */

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
            dataInicial: [null],
            dataFinal: [null],
            empresas: [null],
            depositos: [null],
            numeroNF: [null],
            dataNF: [null],
            cliente: [null],
            vendedor: [null]
          });
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.codMaterial = this.item.ID_REFE_ERP;
            this.modal.descMaterial = this.item.NM_MATE;
            this.modal.unidadeMedida = this.item.NM_UNID_MEDI;
            this.resetValuesForm();
            this.setParamsVendasRealizadas();
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get('dataInicial').reset();
            this.form.get('dataFinal').reset();
            this.form.get('empresas').reset();
            this.form.get('depositos').reset();
            this.form.get('numeroNF').reset();
            this.form.get('dataNF').reset();
            this.form.get('cliente').reset();
            this.form.get('vendedor').reset();
          }
        }, {
          key: "setParamsVendasRealizadas",
          value: function setParamsVendasRealizadas() {
            var queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
            var dataInicial = queryParams["dataInicial"];
            var dataFinal = queryParams["dataFinal"];
            var dataInicialParam = dataInicial;
            var dataFinalParam = dataFinal;
            var params = [];
            var tipoVisualizacao = queryParams["tipoVisualizacao"];
            var idMaterial = this.item["ID_MATE"];
            var idMesAno = this.idMesAno;

            if (this.idMesAno) {
              dataInicialParam = "";
              dataFinalParam = "";
              var mesAno = this.idMesAno.replace('_', '/01/');
              var date = new Date(mesAno);
              var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
              var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
              var primeiroDiaC = this.setDateValid(primeiroDia);
              var ultimoDiaC = this.setDateValid(ultimoDia);
              primeiroDiaC = new Date(primeiroDiaC.split('-').reverse().join('-'));
              ultimoDiaC = new Date(ultimoDiaC.split('-').reverse().join('-'));
              var dataInicialC = new Date(dataInicial.split('-').reverse().join('-'));
              var dataFinalC = new Date(dataFinal.split('-').reverse().join('-'));

              if (primeiroDiaC > dataInicialC) {
                dataInicial = this.setDateValid(primeiroDia);
              }

              if (ultimoDiaC < dataFinalC) {
                dataFinal = this.setDateValid(ultimoDia);
              }
            }

            if (tipoVisualizacao == 'S') {
              this.idEmpresa = queryParams["empresas"];
              this.idDeposito = queryParams["depositos"];
            } else if (tipoVisualizacao == 'A') {
              this.idEmpresa = "";
              this.idDeposito = this.item["ID_DEPO"];
            }

            params = {
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              DT_INIC: dataInicial ? dataInicial : "",
              DT_FINA: dataFinal ? dataFinal : "",
              NM_MES_ANO: "",
              ID_MATE: idMaterial ? idMaterial : "",
              NM_EMPR: "",
              NM_DEPO: "",
              NR_NOTA_FISC: "",
              DT_NOTA_FISC: "",
              NM_CLIE: "",
              NM_VEND: ""
            };
            this.getVendasRealizadasDetalhes(params);
            this.form.get("dataInicial").setValue(dataInicial);
            this.form.get("dataFinal").setValue(dataFinal);
          }
        }, {
          key: "getVendasRealizadasDetalhes",
          value: function getVendasRealizadasDetalhes(params) {
            var _this3 = this;

            this.dadosVendasRealDetalhesModalFull = [];
            this.dadosVendasRealDetalhesModal = [];
            this.dadosVendasRealDetalhesModalTotal = [];
            this.loaderBody = true;
            this.noResultModal = false;
            this.loadingDetalhesModal = false;
            this.service.getVendasRealizadasDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              return _this3.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this3.dadosVendasRealDetalhesModalFull = res['body']['result'];
                  _this3.dadosVendasRealDetalhesModalTotal = _this3.dadosVendasRealDetalhesModalFull.shift();
                  _this3.dadosVendasRealDetalhesModal = _this3.dadosVendasRealDetalhesModalFull;
                  _this3.loadingDetalhesModal = true;
                  _this3.noResultModal = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this3.loadingDetalhesModal = false;
                  _this3.noResultModal = true;

                  _this3.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this3.pnotifyService.error('Erro ao Vendas Realizadas Detalhes');
            });
          }
        }, {
          key: "getVendasRealizadasDetalhesExcel",
          value: function getVendasRealizadasDetalhesExcel(params) {
            var _this4 = this;

            this.dadosExcel = [];
            this.service.getVendasRealizadasDetalhes(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this4.dadosExcel = res['body']['result'];

                  _this4.pnotifyService.success(_this4.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this4.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this4.pnotifyService.error('Erro ao detalhes de Carteira');
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            var dataNF = this.setDateValid(this.form.value['dataNF']);
            var params = {
              DT_INIC: dataInicial ? dataInicial : "",
              DT_FINA: dataFinal ? dataFinal : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_NOTA_FISC: this.form.value['numeroNF'] ? this.form.value['numeroNF'] : "",
              DT_NOTA_FISC: dataNF ? dataNF : "",
              NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
              NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
              IN_GERA_RELA_EXCE: "",
              ID_USUA: ""
            };
            this.getVendasRealizadasDetalhes(params);
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            var dataNF = this.setDateValid(this.form.value['dataNF']);
            var params = {
              DT_INIC: dataInicial ? dataInicial : "",
              DT_FINA: dataFinal ? dataFinal : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_NOTA_FISC: this.form.value['numeroNF'] ? this.form.value['numeroNF'] : "",
              DT_NOTA_FISC: dataNF ? dataNF : "",
              NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
              NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: this.idUsuario
            };
            this.getVendasRealizadasDetalhesExcel(params);
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
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
              ;
            }

            if (!dataInicial) {
              this.compararDataFinal = false;
              return false;
            } else if (dataInicial > dataFinal) {
              this.compararDataFinal = true;
              return this.compararDataFinal;
            }
          }
        }, {
          key: "comparaDataFinal",
          value: function comparaDataFinal() {
            var now = new Date();

            if (!this.form.get('dataFinal').value) {
              this.compararDataFinalAtual = false;
              return false;
            } else if (this.form.get('dataFinal').value > now) {
              this.compararDataFinalAtual = true;
              return this.compararDataFinalAtual;
            }
          }
        }, {
          key: "comparaDataInicial",
          value: function comparaDataInicial() {
            var now = new Date();

            if (!this.form.get('dataInicial').value) {
              this.compararDataInicial = false;
              return false;
            } else if (this.form.get('dataInicial').value > now) {
              this.compararDataInicial = true;
              return this.compararDataInicial;
            }
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent;
      }();

      AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idMesAno: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-vendas-realizadas',
        template: _raw_loader_modal_vendas_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_vendas_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]])], AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent);
      /***/
    },

    /***/
    "5bL4":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-carteira/modal-carteira.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bL4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLWNhcnRlaXJhL21vZGFsLWNhcnRlaXJhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "6IHY":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-realizadas/modal-vendas-realizadas.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\n  <div class=\"col-3\">\n    <p style=\"font-size: 14px;\">\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\n    </p>\n  </div>\n  <div class=\"col-4\">\n    <p style=\"font-size: 14px;\">\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> UN. MEDIDA: </strong> {{ modal.unidadeMedida }}\n    </p>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button\n      type=\"button\"\n      (click)=\"onFilter()\"\n      class=\"btn mr-2\"\n       [disabled]=\"\n        comparaData() ||\n        comparaDataInicial() ||\n        comparaDataFinal()\n      \"\n    >\n      Filtrar\n    </button>\n    <button\n      type=\"button\"\n      (click)=\"excelExport()\"\n      class=\"btn\"\n      [disabled]=\"\n        comparaData() ||\n        comparaDataInicial() ||\n        comparaDataFinal()\n      \"\n    >\n      Exportar Excel\n    </button>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">   \n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataNF\">Data Inicial</label>\n        <input\n          class=\"form-control\"\n          id=\"dataInicial\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataInicial\"\n        >\n        <invalid-form-control\n          [show]=\"comparaDataInicial()\"\n          message=\"Data inicial não pode ser maior que data atual\"\n        >\n        </invalid-form-control>\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataFinal\">Data Final</label>\n        <input\n          class=\"form-control\"\n          id=\"dataFinal\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataFinal\"\n        >\n        <invalid-form-control\n          [show]=\"comparaData()\"\n          message=\"Data final deve ser maior que data inicial\"\n        >\n        </invalid-form-control>\n        <invalid-form-control\n          [show]=\"comparaDataFinal()\"\n          message=\"Data final não pode ser maior que data atual\"\n        >\n        </invalid-form-control>\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"empresas\">Empresas</label>\n        <input\n          class=\"form-control\"\n          id=\"empresas\"\n          type=\"text\"\n          formControlName=\"empresas\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"depositos\">Depósito</label>\n        <input\n          class=\"form-control\"\n          id=\"depositos\"\n          type=\"text\"\n          formControlName=\"depositos\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"numeroNF\">Número NF</label>\n        <input\n          class=\"form-control\"\n          id=\"numeroNF\"\n          type=\"text\"\n          formControlName=\"numeroNF\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataNF\">Data NF</label>\n        <input\n          class=\"form-control\"\n          id=\"dataNF\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataNF\"\n        >\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"cliente\">Cliente</label>\n        <input\n          class=\"form-control\"\n          id=\"cliente\"\n          type=\"text\"\n          formControlName=\"cliente\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"vendedor\">Vendedor</label>\n        <input\n          class=\"form-control\"\n          id=\"vendedor\"\n          type=\"text\"\n          formControlName=\"vendedor\"\n        >\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<div class=\"table-responsive\" *ngIf=\"loadingDetalhesModal\">\n  <custom-table subtitleBorder=\"true\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th\n          nowrap\n          (click)=\"sortA('NM_EMPR')\"\n          class=\"hover text-center\"\n        >\n          Empresa\n          <span *ngIf=\"keyA == 'NM_EMPR'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_EMPR'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NM_DEPO')\"\n          class=\"hover text-center\"\n        >\n          Depósito\n          <span *ngIf=\"keyA == 'NM_DEPO'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_DEPO'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NR_NOTA_FISC_SAID')\"\n          class=\"hover text-center\"\n        >\n          Número de NF\n          <span *ngIf=\"keyA == 'NR_NOTA_FISC_SAID'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NR_NOTA_FISC_SAID'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('DT_EMIS_NOTA_FISC_SAID')\"\n          class=\"hover text-center\"\n        >\n          Data de NF\n          <span *ngIf=\"keyA == 'DT_EMIS_NOTA_FISC_SAID'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'DT_EMIS_NOTA_FISC_SAID'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NM_CLIE')\"\n          class=\"hover text-center\"\n        >\n          Cliente\n          <span *ngIf=\"keyA == 'NM_CLIE'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_CLIE'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NM_VEND')\"\n          class=\"hover text-center\"\n        >\n          Vendedor\n          <span *ngIf=\"keyA == 'NM_VEND'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_VEND'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('TT_ITEM_PEDI_TONE')\"\n          class=\"hover text-center\"\n          *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n        >\n          Quantidade(Ton)\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI_TONE'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI_TONE'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('TT_ITEM_PEDI')\"\n          class=\"hover text-center\"\n        >\n          Quantidade\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr\n        *ngFor=\"\n          let item of dadosVendasRealDetalhesModal\n            | orderBy: keyA:reverseA\n            | slice: beginA:endA;\n          let i = index\n        \"\n      >\n        <td nowrap>{{ item.NM_EMPR }}</td>\n        <td nowrap>{{ item.NM_DEPO }}</td>\n        <td nowrap class=\"text-center\">\n          {{ item.NR_NOTA_FISC_SAID | number: '0.0' }}\n        </td>\n        <td nowrap class=\"text-center\">\n          {{ item.DT_EMIS_NOTA_FISC_SAID | date: 'dd/MM/yyyy' }}\n        </td>\n        <td nowrap>{{ item.NM_CLIE }}</td>\n        <td nowrap>{{ item.NM_VEND }}</td>\n        <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n          {{ item.TT_ITEM_PEDI_TONE | number: '0.3' }}\n        </td>\n        <td nowrap class=\"text-right\">\n          {{ this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI | number: '0.0') : (item.TT_ITEM_PEDI | number: '0.3') }}\n        </td>\n      </tr>\n      <tr>\n        <td nowrap class=\"bg-dark text-white\">TOTAL</td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n          {{ dadosVendasRealDetalhesModalTotal[\"TT_ITEM_PEDI_TONE\"] | number: '0.3' }}\n        </td>\n        <td nowrap class=\"bg-dark text-white text-right\">\n          {{this.modal.unidadeMedida != 'TON' ? (dadosVendasRealDetalhesModalTotal[\"TT_ITEM_PEDI\"] | number: '0.0') : (dadosVendasRealDetalhesModalTotal[\"TT_ITEM_PEDI\"] | number: '0.3')}}\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n</div>\n<div\n  class=\"mt-2 mb-2\"\n  *ngIf=\"dadosVendasRealDetalhesModal?.length > itemsPerPage\"\n>\n  Exibindo {{ beginA + 1 }} a {{ endA }} de\n  {{ dadosVendasRealDetalhesModal?.length }}\n  <div class=\"d-flex\">\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"dadosVendasRealDetalhesModal?.length\"\n      (pageChanged)=\"onPageChangedA($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPageA\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\"\n    >\n    </pagination>\n  </div>\n</div>\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\n  <div class=\"spinner-border\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\n  style=\"height: 80%;\"\n  >\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "BD19":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-comprometido/modal-estoque-comprometido.component.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BD19(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#header-modal-estoque-comprometido > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8vbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLGdFQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8vbW9kYWwtZXN0b3F1ZS1jb21wcm9tZXRpZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLW1vZGFsLWVzdG9xdWUtY29tcHJvbWV0aWRvPiBkaXYgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmMGYzZjYpLCBjb2xvci1zdG9wKDkwJSwgI2U2ZWJmMSkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbn0iXX0= */";
      /***/
    },

    /***/
    "BKQW":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BKQW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Análise de Compras\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter(currentPage=1)\"\n    [disabled]=\"\n      form.status == 'INVALID' ||\n      (form.get('dataInicial').value == null &&\n        form.get('paramData').value != 1) ||\n      (form.get('dataFinal').value == null &&\n        form.get('paramData').value != 1) ||\n      comparaData() ||\n      comparaDataInicial() ||\n      comparaDataFinal()\n    \"\n  >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"excelExport()\"\n    [disabled]=\"\n      form.status == 'INVALID' ||\n      (form.get('dataInicial').value == null &&\n        form.get('paramData').value != 1) ||\n      (form.get('dataFinal').value == null &&\n        form.get('paramData').value != 1) ||\n      comparaData() ||\n      comparaDataInicial() ||\n      comparaDataFinal()\n    \"\n  >\n    Exportar Excel\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"tipoMaterial\">Tipo de Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tiposMateriais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            [multiple]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"tipoMaterial\"\n            (change)=\"resetForm()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"situacao\">Situação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"situacoes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            formControlName=\"situacao\"\n            (change)=\"resetForm()\"\n            [ngClass]=\"\n              onFieldError('situacao') + ' ' + onFieldRequired('situacao')\n            \"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('situacao')\"\n            message=\"Situação é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"linha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"linha\"\n            (change)=\"\n              getSubLinhas() +\n                ' ' +\n                getClasses() +\n                ' ' +\n                getDepositosAssociados()\n            \"\n            [ngClass]=\"onFieldError('linha') + ' ' + onFieldRequired('linha')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('linha')\"\n            message=\"Linha é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"subLinha\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            (change)=\"getClasses()\"\n            formControlName=\"subLinha\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            maxSelectedItems=\"6\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"classe\"\n            (change)=\"getMateriais() + ' ' + getDepositosAssociados()\"\n          >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-6\">\n          <label for=\"material\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"materiais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            [multiple]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"ID_REFE_ERP_NM_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"material\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"empresas\">Empresas</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"depositosAssociados\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            [multiple]=\"true\"\n            (change)=\"getDepositos($event)\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_EMPR\"\n            bindValue=\"ID_EMPR\"\n            formControlName=\"empresas\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"depositos\">Depósitos</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"depositos\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            [multiple]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_DEPO\"\n            bindValue=\"ID\"\n            formControlName=\"depositos\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"nivelEstoque\">Nível de Estoque</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tiposNiveisEstoques\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            [multiple]=\"false\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_NIVE_ESTO\"\n            bindValue=\"ID\"\n            formControlName=\"nivelEstoque\"\n          >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"paramData\">Período de Vendas</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"periodosBusca\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            (change)=\"activeInputDate()\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            formControlName=\"paramData\"\n            [ngClass]=\"\n              onFieldError('paramData') + ' ' + onFieldRequired('paramData')\n            \"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('paramData')\"\n            message=\"Período de vendas é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"dataInicial\">Data Inicial</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataInicial\"\n          />\n          <invalid-form-control\n            [show]=\"comparaDataInicial()\"\n            message=\"Data inicial não pode ser maior que data atual\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"dataFinal\">Data Final</label>\n          <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataFinal\"\n          />\n          <invalid-form-control\n            [show]=\"comparaData()\"\n            message=\"Data final deve ser maior que data inicial\"\n          >\n          </invalid-form-control>\n          <invalid-form-control\n            [show]=\"comparaDataFinal()\"\n            message=\"Data final não pode ser maior que data atual\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"tipoVisualizacao\">Tipo Visualização</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tiposVisualizacao\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            formControlName=\"tipoVisualizacao\"\n            [ngClass]=\"\n              onFieldError('tipoVisualizacao') +\n              ' ' +\n              onFieldRequired('tipoVisualizacao')\n            \"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('tipoVisualizacao')\"\n            message=\"Tipo visualização é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"infAdicionais\">Inf. Adicionais</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"infAdicionaisDados\"\n            [virtualScroll]=\"true\"\n            [closeOnSelect]=\"false\"\n            [multiple]=\"true\"\n            dropdownPosition=\"bottom\"\n            bindLabel=\"NM_INFO\"\n            bindValue=\"ID_INFO\"\n            groupBy=\"INFO\"\n            placeholder=\"Selecione...\"\n            formControlName=\"infAdicionais\"\n          >\n            <ng-template ng-optgroup-tmp let-item=\"item\">\n              {{ item.NM_GRUP }}\n            </ng-template>\n            <ng-template ng-option-tmp let-item=\"item\">\n              {{ item.NM_INFO }}\n            </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-1\">\n          <label for=\"qtItensPagina\">Registros</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"numberOfItems\"\n            [virtualScroll]=\"true\"\n            labelForId=\"qtItensPagina\"\n            formControlName=\"qtItensPagina\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"totalItems > 0 && loading\"> </subtitles>\n  <div class=\"mt-3\" *ngIf=\"loading && totalItems > 0\">\n    <div class=\"table-responsive\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th\n              nowrap\n              class=\"sticky\"\n              scope=\"col\"\n              colspan=\"1\"\n              *ngIf=\"depositoBool\"\n              [ngStyle]=\"{ left: '0px' }\"\n              style=\"background-color: #fff;\"\n              width=\"180px\"\n            >\n              Grupo\n            </th>\n            <th\n              nowrap\n              class=\"sticky\"\n              scope=\"col\"\n              colspan=\"2\"\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\n              style=\"background-color: #fff;\"\n            >\n              Material\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              [attr.colspan]=\"colsMat\"\n              *ngIf=\"colsMat != 0\"\n            ></th>\n            <th nowrap scope=\"col\" [attr.colspan]=\"colsEstoque ? colsEst : 1\">\n              Estoque(TON)\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"setColsEstoqueTrue()\"\n                *ngIf=\"colsEst > 1\"\n              >\n                <i\n                  [ngClass]=\"colsEstoque ? 'fas fa-minus' : 'fas fa-plus'\"\n                  title=\"Mostrar detalhes Estoque\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </th>\n            <th nowrap scope=\"col\" [attr.colspan]=\"colsCarteira ? colsCar : 1\">\n              Carteira(TON)\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"setColsCarteiraTrue()\"\n                *ngIf=\"colsCar > 1\"\n              >\n                <i\n                  [ngClass]=\"colsCarteira ? 'fas fa-minus' : 'fas fa-plus'\"\n                  title=\"Mostrar Carteira/mês\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              [attr.colspan]=\"colsVendasReal ? colsVenRea : 2\"\n            >\n              Vendas Realizadas (TON)\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"setColsVendasRealTrue()\"\n                *ngIf=\"colsVenRea > 2\"\n              >\n                <i\n                  [ngClass]=\"colsVendasReal ? 'fas fa-minus' : 'fas fa-plus'\"\n                  title=\"Mostrar Vendas Realizadas/mês\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              [attr.colspan]=\"colsVendasPerd ? colsVenPed : 2\"\n            >\n              Vendas Perdidas (TON)\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"setColsVendasPerdTrue()\"\n                *ngIf=\"colsVenPed > 2\"\n              >\n                <i\n                  [ngClass]=\"colsVendasPerd ? 'fas fa-minus' : 'fas fa-plus'\"\n                  title=\"Mostrar Vendas Perdidas/mês\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </th>\n            <th nowrap scope=\"col\" colspan=\"2\">Estatístico</th>\n          </tr>\n          <tr class=\"text-center\">\n            <!-- Inicio - Materiais -->\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover sticky\"\n              [ngStyle]=\"{ left: '0px' }\"\n              style=\"background-color: #fff;\"\n              width=\"180px\"\n              (click)=\"sort('NM_DEPO')\"\n              *ngIf=\"depositoBool\"\n            >\n              Depósito\n              <span *ngIf=\"key == 'NM_DEPO'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_DEPO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover sticky\"\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\n              style=\"background-color: #fff;\"\n              width=\"105px\"\n              (click)=\"sort('ID_REFE_ERP')\"\n            >\n              Cód. Material\n              <span *ngIf=\"key == 'ID_REFE_ERP'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'ID_REFE_ERP'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover sticky\"\n              [ngStyle]=\"{ left: !depositoBool ? '105px' : '285px' }\"\n              style=\"background-color: #fff;\"\n              (click)=\"sort('NM_MATE')\"\n            >\n              Descrição\n              <span *ngIf=\"key == 'NM_MATE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_MATE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_LINH')\"\n              *ngIf=\"linhaBool\"\n            >\n              Linha\n              <span *ngIf=\"key == 'NM_LINH'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_LINH'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_SUB_LINH')\"\n              *ngIf=\"subLinhaBool\"\n            >\n              Sublinha\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_CLAS')\"\n              *ngIf=\"classeBool\"\n            >\n              Classe\n              <span *ngIf=\"key == 'NM_CLAS'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_CLAS'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"uniMedidaBool\"\n            >\n              Unidade de Medida\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"bitolaBool\"\n            >\n              Bitola\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"larguraBool\"\n            >\n              Largura\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"comprimentoBool\"\n            >\n              Comprimento\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"qualidadeBool\"\n            >\n              Qualidade\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"revestimentoBool\"\n            >\n              Revestimento\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NM_APOI_UNID_MEDI')\"\n              *ngIf=\"tipoAcoBool\"\n            >\n              Tipo de Aço\n              <span *ngIf=\"key == 'NM_APOI_UNID_MEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_UNID_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <!-- FIM - Materiais -->\n            <!-- Inicio - Estoque -->\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_ESTO_ATUA_TONE')\"\n              *ngIf=\"estAtualBool && colsEstoque\"\n            >\n              Atual\n              <span *ngIf=\"key == 'TT_ESTO_ATUA_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_ATUA_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_ESTO_COMP_TONE')\"\n              *ngIf=\"estComprBool && colsEstoque\"\n            >\n              Comprometido\n              <span *ngIf=\"key == 'TT_ESTO_COMP_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_COMP_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_ESTO_SUSP_TONE')\"\n              *ngIf=\"estSuspBool && colsEstoque\"\n            >\n              Supenso\n              <span *ngIf=\"key == 'TT_ESTO_SUSP_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_SUSP_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_ESTO_DISP_TONE')\"\n            >\n              Disponível\n              <span *ngIf=\"key == 'TT_ESTO_DISP_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_DISP_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <!-- FIM - Estoque -->\n            <!-- Inicio - Carteira -->\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort(item.row)\"\n              *ngFor=\"let item of dadosCarteiraDetalhe\"\n              [hidden]=\"!colsCarteira\"\n            >\n              {{ item.header }}\n              <span *ngIf=\"key == item.row\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != item.row\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_CART_ABER_TONE')\"\n            >\n              Carteira\n              <span *ngIf=\"key == 'TT_CART_ABER_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_CART_ABER_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <!-- FIM - Carteira -->\n            <!-- Inicio - Vendas Realizadas -->\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort(item.row)\"\n              *ngFor=\"let item of dadosVendasRealDetalhe\"\n              [hidden]=\"!colsVendasReal\"\n            >\n              {{ item.header }}\n              <span *ngIf=\"key == item.row\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != item.row\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_VEND_REAL_TONE')\"\n            >\n              Vendas\n              <span *ngIf=\"key == 'TT_VEND_REAL_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_VEND_REAL_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_MEDI_VEND_REAL_TONE')\"\n              tooltip=\"(Vol. vendas / Período) * 30\"\n              placement=\"top\"\n            >\n              Média\n              <span *ngIf=\"key == 'TT_MEDI_VEND_REAL_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_MEDI_VEND_REAL_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <!-- FIM - Vendas Realizadas -->\n            <!-- Inicio - Vendas Perdidas -->\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort(item.row)\"\n              *ngFor=\"let item of dadosVendasPerdDetalhe\"\n              [hidden]=\"!colsVendasPerd\"\n            >\n              {{ item.header }}\n              <span *ngIf=\"key == item.row\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != item.row\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_VEND_PERD_TONE')\"\n            >\n              Perdas\n              <span *ngIf=\"key == 'TT_VEND_PERD_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_VEND_PERD_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('TT_MEDI_VEND_PERD_TONE')\"\n              tooltip=\"(Vol. vendas perd / Período) * 30\"\n              placement=\"top\"\n            >\n              Média\n              <span *ngIf=\"key == 'TT_MEDI_VEND_PERD_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_MEDI_VEND_PERD_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <!-- FIM - Vendas Realizadas -->\n            <!-- Inicio - Estatistico -->\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('VL_RITM_VEND_TONE')\"\n              tooltip=\"(Vendas mês / Dia mês) * 30\"\n              placement=\"top\"\n            >\n              Ritmo\n              <span *ngIf=\"key == 'VL_RITM_VEND_TONE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'VL_RITM_VEND_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"sort('NR_DIAS_GIRO')\"\n              tooltip=\"Est. disponível / Med. diária\"\n              placement=\"left\"\n            >\n              Giro\n              <span *ngIf=\"key == 'NR_DIAS_GIRO'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NR_DIAS_GIRO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <!-- FIM - Estatistico -->\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dados\">\n            <!-- Inicio - Materiais -->\n            <td\n              nowrap\n              class=\"text-center hover sticky\"\n              *ngIf=\"depositoBool\"\n              [ngClass]=\"setColorBorder(item.DS_COR_TIPO_NIVE_ESTO)\"\n              [ngStyle]=\"{ left: '0px' }\"\n              width=\"180px\"\n              (click)=\"lgModal.show() + ' ' + getNivelEstoqueModal(item)\"\n              >\n              {{ item.NM_DEPO }}\n            </td>\n            <td\n              nowrap\n              class=\"text-center hover sticky\"\n              [ngClass]=\"!depositoBool ? setColorBorder(item.DS_COR_TIPO_NIVE_ESTO) : ''\"\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\n              width=\"105px\"\n              (click)=\"lgModal.show() + ' ' + getNivelEstoqueModal(item)\"\n              >\n              {{ item.ID_REFE_ERP | number }}\n            </td>\n            <td\n              nowrap\n              class=\"sticky\"\n              [ngStyle]=\"{ left: !depositoBool ? '105px' : '285px' }\"\n            >\n              {{ item.NM_MATE }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"linhaBool\">\n              {{ item.NM_LINH }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"subLinhaBool\">\n              {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"classeBool\">\n              {{ item.NM_CLAS }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"uniMedidaBool\">\n              {{ item.NM_APOI_UNID_MEDI ? item.NM_APOI_UNID_MEDI : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"bitolaBool\">\n              {{ item.VL_MEDI ? item.VL_MEDI : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"larguraBool\">\n              {{ item.VL_LARG ? item.VL_LARG : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"comprimentoBool\">\n              {{ item.VL_COMP ? item.VL_COMP : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"qualidadeBool\">\n              {{ item.DS_QUAL ? item.DS_QUAL : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"revestimentoBool\">\n              {{ item.DS_REVE ? item.DS_REVE : '-' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"tipoAcoBool\">\n              {{ item.DS_TIPO_ACO ? item.DS_TIPO_ACO : '-' }}\n            </td>\n            <!-- FIM - Materiais -->\n            <!-- Inicio - Estoque -->\n            <td nowrap class=\"text-center\" *ngIf=\"estAtualBool && colsEstoque\">\n              {{ item.TT_ESTO_ATUA_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"estComprBool && colsEstoque\">\n              {{ item.TT_ESTO_COMP_TONE | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"\n                  lgModal.show() + ' ' + getEstoqueComprometidoModal(item)\n                \"\n                [disabled]=\"item.TT_ESTO_COMP_TONE == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Estoque Comprometido\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-center\" *ngIf=\"estSuspBool && colsEstoque\">\n              {{ item.TT_ESTO_SUSP_TONE | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"\n                  lgModal.show() + ' ' + getEstoqueSupensoModal(item)\n                \"\n                [disabled]=\"item.TT_ESTO_SUSP_TONE == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Estoque Suspendo\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.TT_ESTO_DISP_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Estoque -->\n            <!-- Inicio - Carteira -->\n            <td\n              nowrap\n              class=\"text-right\"\n              *ngFor=\"let column of dadosCarteiraDetalhe\"\n              [hidden]=\"!colsCarteira\"\n            >\n              {{ item[column.row] | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"\n                  lgModal.show() + ' ' + getCarteiraModal(item, column.id)\n                \"\n                [disabled]=\"item[column.row] == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Carteira/mês\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-right\">\n              {{ item.TT_CART_ABER_TONE | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"lgModal.show() + ' ' + getCarteiraModal(item)\"\n                [disabled]=\"item.TT_CART_ABER_TONE == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Carteira\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <!-- FIM - Carteira -->\n            <!-- Inicio - Vendas Realizadas -->\n            <td\n              nowrap\n              class=\"text-right\"\n              *ngFor=\"let column of dadosVendasRealDetalhe\"\n              [hidden]=\"!colsVendasReal\"\n            >\n              {{ item[column.row] | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"\n                  lgModal.show() + ' ' + getVendasRealModal(item, column.id)\n                \"\n                [disabled]=\"item[column.row] == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Vendas Realizadas/mês\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-right\">\n              {{ item.TT_VEND_REAL_TONE | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"lgModal.show() + ' ' + getVendasRealModal(item)\"\n                [disabled]=\"item.TT_VEND_REAL_TONE == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Vendas Realizadas\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.TT_MEDI_VEND_REAL_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Vendas Realizadas -->\n            <!-- Inicio - Vendas Perdidas -->\n            <td\n              nowrap\n              class=\"text-right\"\n              *ngFor=\"let column of dadosVendasPerdDetalhe\"\n              [hidden]=\"!colsVendasPerd\"\n            >\n              {{ item[column.row] | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"\n                  lgModal.show() + ' ' + getVendasPerdModal(item, column.id)\n                \"\n                [disabled]=\"item[column.row] == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Vendas Perdidas/mês\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-right\">\n              {{ item.TT_VEND_PERD_TONE | number: '0.3' }}\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"lgModal.show() + ' ' + getVendasPerdModal(item)\"\n                [disabled]=\"item.TT_VEND_PERD_TONE == 0\"\n              >\n                <i\n                  class=\"fa fa-search text-primary\"\n                  title=\"Detalhes Vendas Perdidas\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.TT_MEDI_VEND_PERD_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Vendas Perdidas -->\n            <!-- Inicio - Estatístico -->\n            <td nowrap class=\"text-center\">\n              {{ item.VL_RITM_VEND_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-center\">{{ item.NR_DIAS_GIRO | number }}</td>\n            <!-- FIM - Estatístico -->\n          </tr>\n          <!-- Totalizadores -->\n          <tr>\n            <!-- Inicio - Materiais -->\n            <td\n              nowrap\n              class=\"bg-dark border-dark text-white text-center\"\n              *ngIf=\"depositoBool\"\n              [ngStyle]=\"{ left: '0px' }\"\n              style=\"position: sticky;\"\n              width=\"180px\"\n            >\n              <strong>TOTAL</strong>\n            </td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              [ngStyle]=\"{ left: !depositoBool ? '0px' : '180px' }\"\n              [ngClass]=\"!depositoBool ? 'border-dark' : ''\"\n              style=\"position: sticky;\"\n              width=\"105px\"\n            >\n              <strong>{{ !depositoBool ? 'TOTAL' : '' }}</strong>\n            </td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              [ngStyle]=\"{ left: !depositoBool ? '105px' : '272px' }\"\n              style=\"position: sticky;\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"linhaBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"subLinhaBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"classeBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"uniMedidaBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"bitolaBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"larguraBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"comprimentoBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"qualidadeBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"revestimentoBool\"\n            ></td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"tipoAcoBool\"\n            ></td>\n            <!-- FIM - Materiais -->\n            <!-- Inicio - Estoque -->\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"estAtualBool && colsEstoque\"\n            >\n              {{ dadosTotalizadores.TT_ESTO_ATUA_TONE | number: '0.3' }}\n            </td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"estComprBool && colsEstoque\"\n            >\n              {{ dadosTotalizadores.TT_ESTO_COMP_TONE | number: '0.3' }}\n            </td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngIf=\"estSuspBool && colsEstoque\"\n            >\n              {{ dadosTotalizadores.TT_ESTO_SUSP_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.TT_ESTO_DISP_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Estoque -->\n            <!-- Inicio - Carteira -->\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngFor=\"let column of dadosCarteiraDetalhe\"\n              [hidden]=\"!colsCarteira\"\n            >\n              {{ dadosTotalizadores[column.row] | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.TT_CART_ABER_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Carteira -->\n            <!-- Inicio - Vendas Realizadas -->\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngFor=\"let column of dadosVendasRealDetalhe\"\n              [hidden]=\"!colsVendasReal\"\n            >\n              {{ dadosTotalizadores[column.row] | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.TT_VEND_REAL_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.TT_MEDI_VEND_REAL_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Vendas Realizadas -->\n            <!-- Inicio - Vendas Perdidas -->\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center\"\n              *ngFor=\"let column of dadosVendasPerdDetalhe\"\n              [hidden]=\"!colsVendasPerd\"\n            >\n              {{ dadosTotalizadores[column.row] | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.TT_VEND_PERD_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.TT_MEDI_VEND_PERD_TONE | number: '0.3' }}\n            </td>\n            <!-- FIM - Vendas Perdidas -->\n            <!-- Inicio - Estatístico -->\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.VL_RITM_VEND_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\">\n              {{ dadosTotalizadores.NR_DIAS_GIRO | number: '0.0' }}\n            </td>\n            <!-- FIM - Estatístico -->\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2\" *ngIf=\"totalItems > itemsPerPageParam\">\n      Exibindo {{ itemsPerPageParam * (currentPage - 1) + 1 }} a\n      {{\n        currentPage * itemsPerPageParam > totalItems\n          ? totalItems\n          : currentPage * itemsPerPageParam\n      }}\n      de {{ totalItems }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPageParam\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult && !loading\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n<div\n  bsModal\n  #lgModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n  [hidden]=\"!loadingDetalhesModal\"\n>\n  <div class=\"modal-dialog modal-xl\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          {{ modal.title }}\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModal.hide() + ' ' + closeModal()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- Detalhes nível de estoque -->\n        <div class=\"container\" *ngIf=\"nivelEstBool\">\n          <abastecimento-monitores-analise-compras-modal-nivel-estoque [item]=itemNivelEstoque>\n          </abastecimento-monitores-analise-compras-modal-nivel-estoque>\n        </div>\n        <!-- Detalhes Carteira -->\n        <div class=\"container\" *ngIf=\"carteiraBool\">\n          <abastecimento-monitores-analise-compras-modal-carteira [item]=itemCarteira [idMesAno]=idMesAnoCarteira>\n          </abastecimento-monitores-analise-compras-modal-carteira>\n        </div>\n        <!-- Detalhes Vendas Realizadas -->\n        <div\n          class=\"container\"\n          *ngIf=\"vendasRealBool\"\n        >\n          <abastecimento-monitores-analise-compras-modal-vendas-realizadas [item]=itemVendasRealizadas [idMesAno]=idMesAnoVendasRealizadas>\n          </abastecimento-monitores-analise-compras-modal-vendas-realizadas>\n        </div>\n        <!-- Detalhes Vendas Perdidas -->\n        <div\n          class=\"container\"\n          *ngIf=\"vendasPerdBool\"\n        >\n          <abastecimento-monitores-analise-compras-modal-vendas-perdidas [item]=itemVendasPerdidas [idMesAno]=idMesAnoVendasPerdidas>\n          </abastecimento-monitores-analise-compras-modal-vendas-perdidas>\n        </div>\n        <!-- Detalhes Estoque Supenso -->\n        <div\n        class=\"container\"\n        *ngIf=\"estoqueSuspBool\"\n        >\n          <abastecimento-monitores-analise-compras-modal-estoque-suspenso [item]=itemEstoqueSupenso>\n          </abastecimento-monitores-analise-compras-modal-estoque-suspenso>\n        </div>\n        <!-- Detalhes Estoque Comprometido -->\n        <div\n          class=\"container\"\n          *ngIf=\"estoqueCompBool\"\n        >\n          <abastecimento-monitores-analise-compras-modal-estoque-comprometido [item]=itemEstoqueComprometido>\n          </abastecimento-monitores-analise-compras-modal-estoque-comprometido>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "DZqO":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-carteira/modal-carteira.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DZqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\n  <div class=\"col-3\">\n    <p style=\"font-size: 14px;\">\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\n    </p>\n  </div>\n  <div class=\"col-4\">\n    <p style=\"font-size: 14px;\">\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> UN. MEDIDA: </strong> {{ modal.unidadeMedida }}\n    </p>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button\n      type=\"button\"\n      (click)=\"onFilter()\"\n      class=\"btn mr-2\"\n    >\n      Filtrar\n    </button>\n    <button\n      type=\"button\"\n      (click)=\"excelExport()\"\n      class=\"btn\"\n    >\n      Exportar Excel\n    </button>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">   \n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"empresas\">Empresa</label>\n        <input\n          class=\"form-control\"\n          id=\"empresas\"\n          type=\"text\"\n          formControlName=\"empresas\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"depositos\">Deposito</label>\n        <input\n          class=\"form-control\"\n          id=\"depositos\"\n          type=\"text\"\n          formControlName=\"depositos\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"pedidoPai\">Pedido/ Pedido Pai</label>\n        <input\n          class=\"form-control\"\n          id=\"pedidoPai\"\n          type=\"text\"\n          formControlName=\"pedidoPai\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataPedido\">Data Pedido</label>\n        <input\n          class=\"form-control\"\n          id=\"dataPedido\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataPedido\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"pedidoRemessa\">Pedido Remessa</label>\n        <input\n          class=\"form-control\"\n          id=\"pedidoRemessa\"\n          type=\"text\"\n          formControlName=\"pedidoRemessa\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"previsaoEntrega\">Previsão Entrega</label>\n        <input\n          class=\"form-control\"\n          id=\"previsaoEntrega\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"previsaoEntrega\"\n        >\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"fornecedor\">Fornecedor</label>\n        <input\n          class=\"form-control\"\n          id=\"fornecedor\"\n          type=\"text\"\n          formControlName=\"fornecedor\"\n        >\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<tabset *ngIf=\"loadingDetalhesModal\">\n  <tab heading=\"Geral\" *ngIf=\"this.enableTabAbastInterno && this.enableTabAbastFornecedor\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              nowrap\n              (click)=\"sortC('NM_EMPR_DEST')\"\n              class=\"hover text-center sticky\"\n              style=\"background-color: #fff; left: 0px;\"\n              width=\"190px\"\n            >\n              Empresa\n              <span *ngIf=\"keyC == 'NM_EMPR_DEST'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'NM_EMPR_DEST'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('NM_DEPO_DEST')\"\n              class=\"hover text-center sticky\"\n              style=\"background-color: #fff; left: 190px;\"\n            >\n              Depósito\n              <span *ngIf=\"keyC == 'NM_DEPO_DEST'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'NM_DEPO_DEST'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Pedido\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('DT_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Data pedido\n              <span *ngIf=\"keyC == 'DT_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'DT_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('DT_PREV_ENTR')\"\n              class=\"hover text-center\"\n            >\n              Previsão entrega\n              <span *ngIf=\"keyC == 'DT_PREV_ENTR'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'DT_PREV_ENTR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('NM_FORN')\"\n              class=\"hover text-center\"\n            >\n              Fornecedor\n              <span *ngIf=\"keyC == 'NM_FORN'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'NM_FORN'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('TT_ITEM_PEDI_SOLI_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume demanda (TON)\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SOLI_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SOLI_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('TT_ITEM_PEDI_RECE_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume recebido (TON)\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_RECE_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_RECE_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('TT_ITEM_PEDI_SALD_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume saldo (TON)\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SALD_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SALD_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('TT_ITEM_PEDI_SOLI')\"\n              class=\"hover text-center\"\n            >\n              Volume demanda\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SOLI'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SOLI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('TT_ITEM_PEDI_RECE')\"\n              class=\"hover text-center\"\n            >\n              Volume recebido\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_RECE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_RECE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortC('TT_ITEM_PEDI_SALD')\"\n              class=\"hover text-center\"\n            >\n              Volume saldo\n              <span *ngIf=\"keyC == 'TT_ITEM_PEDI_SALD'\"\n                ><i\n                  [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyC != 'TT_ITEM_PEDI_SALD'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosCarteiraDetalhesAbastGeral | orderBy: keyC:reverseC | slice: beginC:endC;\">\n            <td \n              nowrap\n              class=\"sticky\"\n              style=\"left: 0px;\"\n              width=\"190px\"\n            >\n              {{item.NM_EMPR_DEST}}\n            </td>\n            <td \n              nowrap \n              class=\"sticky\" \n              style=\"left: 190px;\"\n            >\n              {{item.NM_DEPO_DEST}}\n            </td>\n            <td nowrap>{{item.NR_PEDI_ORIG | number: '0.0' }}</td>\n            <td nowrap>{{item.DT_PEDI_ORIG | date: 'dd/MM/yyyy' }}</td>\n            <td nowrap>{{item.DT_PREV_ENTR | date: 'dd/MM/yyyy' }}</td>\n            <td nowrap>{{item.NM_FORN}}</td>\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{item.TT_ITEM_PEDI_SOLI_TONE | number: '0.3' }}</td>\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{item.TT_ITEM_PEDI_RECE_TONE | number: '0.3' }}</td>\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{item.TT_ITEM_PEDI_SALD_TONE | number: '0.3' }}</td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI | number: '0.0') : (item.TT_ITEM_PEDI_SOLI | number: '0.3')}}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE | number: '0.0') : (item.TT_ITEM_PEDI_RECE | number: '0.3')}}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD | number: '0.0') : (item.TT_ITEM_PEDI_SALD | number: '0.3')}}\n            </td>\n          </tr>\n          <tr>\n            <td \n              nowrap\n              style=\"left: 0px;\"\n              width=\"190px\" class=\"bg-dark text-white sticky\">\n              TOTAL\n            </td>\n            <td \n              nowrap \n              style=\"left: 190px;\" \n              class=\"bg-dark text-white text-center sticky\">\n            </td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SOLI_TONE | number: '0.' }}</td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_RECE_TONE | number: '0.' }}</td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">{{dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SALD_TONE | number: '0.' }}</td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SOLI | number: '0.0') : (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SOLI | number: '0.3')}}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_RECE | number: '0.0') : (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_RECE | number: '0.3')}}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SALD | number: '0.0') : (dadosCarteiraDetalhesAbastGeralTT.TT_ITEM_PEDI_SALD | number: '0.3')}}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div\n      class=\"mt-2 mb-2\"\n      *ngIf=\"dadosCarteiraDetalhesAbastGeral?.length > itemsPerPage\"\n    >\n      Exibindo {{ beginC + 1 }} a {{ endC }} de\n      {{ dadosCarteiraDetalhesAbastGeral?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dadosCarteiraDetalhesAbastGeral?.length\"\n          (pageChanged)=\"onPageChangedC($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageC\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </tab>\n  <tab heading=\"Abastecimento Interno\" *ngIf=\"enableTabAbastInterno\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              nowrap\n              (click)=\"sortA('NM_EMPR_DEST')\"\n              class=\"hover text-center sticky\"\n              style=\"background-color: #fff; left: 0px;\"\n              width=\"190px\"\n            >\n              Empresa\n              <span *ngIf=\"keyA == 'NM_EMPR_DEST'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NM_EMPR_DEST'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NM_DEPO_DEST')\"\n              class=\"hover text-center sticky\"\n              style=\"background-color: #fff; left: 190px;\"\n            >\n              Depósito\n              <span *ngIf=\"keyA == 'NM_DEPO_DEST'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NM_DEPO_DEST'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Pedido PAI\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('DT_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Data pedido\n              <span *ngIf=\"keyA == 'DT_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'DT_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_REME')\"\n              class=\"hover text-center\"\n            >\n              Pedido remessa\n              <span *ngIf=\"keyA == 'NR_PEDI_REME'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_REME'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('DT_PREV_ENTR')\"\n              class=\"hover text-center\"\n            >\n              Previsão entrega\n              <span *ngIf=\"keyA == 'DT_PREV_ENTR'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'DT_PREV_ENTR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NM_FORN')\"\n              class=\"hover text-center\"\n            >\n              Fornecedor\n              <span *ngIf=\"keyA == 'NM_FORN'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NM_FORN'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('TT_ITEM_PEDI_SOLI_DEPO_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume demanda (TON)\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SOLI_DEPO_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SOLI_DEPO_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('TT_ITEM_PEDI_RECE_DEPO_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume recebido (TON)\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_RECE_DEPO_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_RECE_DEPO_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('TT_ITEM_PEDI_SALD_DEPO_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume saldo (TON)\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SALD_DEPO_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SALD_DEPO_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('TT_ITEM_PEDI_SOLI_DEPO')\"\n              class=\"hover text-center\"\n            >\n              Volume demanda\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SOLI_DEPO'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SOLI_DEPO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('TT_ITEM_PEDI_RECE_DEPO')\"\n              class=\"hover text-center\"\n            >\n              Volume recebido\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_RECE_DEPO'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_RECE_DEPO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('TT_ITEM_PEDI_SALD_DEPO')\"\n              class=\"hover text-center\"\n            >\n              Volume saldo\n              <span *ngIf=\"keyA == 'TT_ITEM_PEDI_SALD_DEPO'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'TT_ITEM_PEDI_SALD_DEPO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of dadosCarteiraDetalhesAbastInterno\n                | orderBy: keyA:reverseA\n                | slice: beginA:endA;\n              let i = index\n            \"\n          >\n            <td\n              nowrap\n              class=\"sticky\"\n              style=\"left: 0px;\"\n              width=\"190px\"\n            >\n              {{ item.NM_EMPR_DEST }}\n            </td>\n            <td nowrap class=\"sticky\" style=\"left: 190px;\">\n              {{ item.NM_DEPO_DEST }}\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.NR_PEDI_ORIG | number: '0.0' }}\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.DT_PEDI_ORIG | date: 'dd/MM/yyyy' }}\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.NR_PEDI_REME | number: '0.0' }}\n            </td>\n            <td nowrap class=\"text-center\">\n              {{ item.DT_PREV_ENTR | date: 'dd/MM/yyyy' }}\n            </td>\n            <td nowrap>{{ item.NM_FORN }}</td>\n            <td nowrap class=\"text-right\"  *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SOLI_DEPO_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-right\"  *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_RECE_DEPO_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-right\"  *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SALD_DEPO_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.3')}}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.3')}}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.3')}}\n            </td>\n          </tr>\n          <tr *ngFor=\"let item of dadosCarteiraDetalhesAbastTotal\">\n            <td\n              nowrap\n              class=\"bg-dark text-white sticky\"\n              style=\"left: 0px;\"\n              width=\"190px\"\n            >\n              TOTAL\n            </td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center sticky\"\n              style=\"left: 190px;\"\n            ></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SOLI_DEPO_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_RECE_DEPO_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SALD_DEPO_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_DEPO | number: '0.3')}}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_RECE_DEPO | number: '0.3')}}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.0') : (item.TT_ITEM_PEDI_SALD_DEPO | number: '0.3')}}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div\n      class=\"mt-2 mb-2\"\n      *ngIf=\"dadosCarteiraDetalhesAbastInterno?.length > itemsPerPage\"\n    >\n      Exibindo {{ beginA + 1 }} a {{ endA }} de\n      {{ dadosCarteiraDetalhesAbastInterno?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dadosCarteiraDetalhesAbastInterno?.length\"\n          (pageChanged)=\"onPageChangedA($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageA\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </tab>\n  <tab\n    heading=\"Abastecimento Fornecedor\"\n    *ngIf=\"enableTabAbastFornecedor\"\n  >\n    <div class=\"table-responsive mt-4\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              nowrap\n              (click)=\"sortB('NM_EMPR_DEST')\"\n              class=\"hover text-center sticky\"\n              style=\"background-color: #fff; left: 0px;\"\n              width=\"190px\"\n            >\n              Empresa\n              <span *ngIf=\"keyB == 'NM_EMPR_DEST'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'NM_EMPR_DEST'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('NM_DEPO_DEST')\"\n              class=\"hover text-center sticky\"\n              style=\"background-color: #fff; left: 190px;\"\n            >\n              Depósito\n              <span *ngIf=\"keyB == 'NM_DEPO_DEST'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'NM_DEPO_DEST'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Pedido\n              <span *ngIf=\"keyB == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('DT_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Data pedido\n              <span *ngIf=\"keyB == 'DT_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'DT_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('DT_PREV_ENTR')\"\n              class=\"hover text-center\"\n            >\n              Previsão entrega\n              <span *ngIf=\"keyB == 'DT_PREV_ENTR'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'DT_PREV_ENTR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('NM_FORN')\"\n              class=\"hover text-center\"\n            >\n              Fornecedor\n              <span *ngIf=\"keyB == 'NM_FORN'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'NM_FORN'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('TT_ITEM_PEDI_SOLI_EMPR_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume demanda (TON)\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SOLI_EMPR_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SOLI_EMPR_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('TT_ITEM_PEDI_RECE_EMPR_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume recebido (TON)\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_RECE_EMPR_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_RECE_EMPR_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('TT_ITEM_PEDI_SALD_EMPR_TONE')\"\n              class=\"hover text-center\"\n              *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n            >\n              Volume saldo (TON)\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SALD_EMPR_TONE'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SALD_EMPR_TONE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('TT_ITEM_PEDI_SOLI_EMPR')\"\n              class=\"hover text-center\"\n            >\n              Volume demanda\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SOLI_EMPR'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SOLI_EMPR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('TT_ITEM_PEDI_RECE_EMPR')\"\n              class=\"hover text-center\"\n            >\n              Volume recebido\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_RECE_EMPR'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_RECE_EMPR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortB('TT_ITEM_PEDI_SALD_EMPR')\"\n              class=\"hover text-center\"\n            >\n              Volume saldo\n              <span *ngIf=\"keyB == 'TT_ITEM_PEDI_SALD_EMPR'\"\n                ><i\n                  [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyB != 'TT_ITEM_PEDI_SALD_EMPR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of dadosCarteiraDetalhesAbastFornecedor\n                | orderBy: keyB:reverseB\n                | slice: beginB:endB;\n              let i = index\n            \"\n          >\n            <td\n              nowrap\n              class=\"sticky\"\n              style=\"left: 0px;\"\n              width=\"190px\"\n            >\n              {{ item.NM_EMPR_DEST }}\n            </td>\n            <td nowrap class=\"sticky\" style=\"left: 190px;\">\n              {{ item.NM_DEPO_DEST }}\n            </td>\n            <td nowrap>{{ item.NR_PEDI_ORIG | number: '0.0' }}</td>\n            <td nowrap>\n              {{ item.DT_PEDI_ORIG | date: 'dd/MM/yyyy' }}\n            </td>\n            <td nowrap>\n              {{ item.DT_PREV_ENTR | date: 'dd/MM/yyyy' }}\n            </td>\n            <td nowrap>{{ item.NM_FORN }}</td>\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SOLI_EMPR_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_RECE_EMPR_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SALD_EMPR_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.3')}}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.3')}}\n            </td>\n            <td nowrap class=\"text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.3')}}\n            </td>\n          </tr>\n          <tr *ngFor=\"let item of dadosCarteiraDetalhesAbastTotal\">\n            <td\n              nowrap\n              class=\"bg-dark text-white sticky\"\n              style=\"left: 0px;\"\n              width=\"190px\"\n            >\n              TOTAL\n            </td>\n            <td\n              nowrap\n              class=\"bg-dark text-white text-center sticky\"\n              style=\"left: 190px;\"\n            ></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SOLI_EMPR_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_RECE_EMPR_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n              {{ item.TT_ITEM_PEDI_SALD_EMPR_TONE | number: '0.3' }}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SOLI_EMPR | number: '0.3')}}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_RECE_EMPR | number: '0.3')}}\n            </td>\n            <td nowrap class=\"bg-dark text-white text-right\">\n              {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.0') : (item.TT_ITEM_PEDI_SALD_EMPR | number: '0.3')}}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div\n      class=\"mt-2 mb-2\"\n      *ngIf=\"\n        dadosCarteiraDetalhesAbastFornecedor?.length > itemsPerPage\n      \"\n    >\n      Exibindo {{ beginB + 1 }} a {{ endB }} de\n      {{ dadosCarteiraDetalhesAbastFornecedor?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dadosCarteiraDetalhesAbastFornecedor?.length\"\n          (pageChanged)=\"onPageChangedB($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageB\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </tab>\n</tabset>\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\n  <div class=\"spinner-border\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\n  style=\"height: 80%;\"\n  >\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "GRp8":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasComponent */

    /***/
    function GRp8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasComponent", function () {
        return AbastecimentoMonitoresAnaliseComprasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_analise_compras_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./analise-compras.component.html */
      "BKQW");
      /* harmony import */


      var _analise_compras_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./analise-compras.component.scss */
      "o4Lb");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./analise-compras.service */
      "yPm9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Converte rota em base64


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);

      var AbastecimentoMonitoresAnaliseComprasComponent = /*#__PURE__*/function () {
        /* dados do usuário */
        function AbastecimentoMonitoresAnaliseComprasComponent(activatedRoute, router, formBuilder, localeService, pnotifyService, atividadesService, routerService, titleService, dateService, service) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.dateService = dateService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loading = false;
          this.loadingDetalhesModal = false;
          this.noResult = false;
          this.ativarCampoData = false;
          this.compararDataFinal = false;
          this.compararDataInicial = false;
          this.compararDataFinalAtual = false;
          /* Exibir Colunas */

          this.depositoBool = false;
          this.linhaBool = false;
          this.subLinhaBool = false;
          this.classeBool = false;
          this.uniMedidaBool = false;
          this.bitolaBool = false;
          this.larguraBool = false;
          this.comprimentoBool = false;
          this.qualidadeBool = false;
          this.revestimentoBool = false;
          this.tipoAcoBool = false;
          this.estAtualBool = false;
          this.estComprBool = false;
          this.estSuspBool = false;
          this.colsCarteira = false;
          this.colsVendasReal = false;
          this.colsVendasPerd = false;
          this.colsEstoque = false;
          /* Exibir Colunas */

          /* Modais */

          this.nivelEstBool = false;
          this.carteiraBool = false;
          this.vendasRealBool = false;
          this.vendasPerdBool = false;
          this.estoqueCompBool = false;
          this.estoqueSuspBool = false;
          this.loadingDetalhesNivelEstoque = false;
          this.breadCrumbTree = [];
          this.depositos = [];
          this.linhas = [];
          this.subLinhas = [];
          this.classes = [];
          this.dados = [];
          this.dadosFull = [];
          this.dadosTotalizadores = [];
          this.dadosExcel = [];
          this.dadosCarteiraDetalhe = [];
          this.dadosVendasRealDetalhe = [];
          this.dadosDetalhesNivelEstoqueModal = [];
          this.dadosVendasPerdDetalhe = [];
          this.colsInfAdicionais = [];
          this.depositosAssociados = [];
          this.tiposMateriais = [];
          this.tiposNiveisEstoques = [];
          this.materiais = [];
          this.itemEstoqueSupenso = [];
          this.itemEstoqueComprometido = [];
          this.itemVendasPerdidas = [];
          this.itemVendasRealizadas = [];
          this.itemCarteira = [];
          this.itemNivelEstoque = [];
          this.colsMat = 0;
          this.colsEst = 1;
          this.colsCar = 1;
          this.colsVenRea = 2;
          this.colsVenPed = 2;
          /* Ordenação */

          this.reverse = false;
          this.key = 'NM_MATE';
          /* Ordenação */

          /* Pagination */

          this.itemsPerPageParam = 15;
          this.totalItems = 10;
          this.currentPage = 1;
          this.numberOfItems = [15, 25, 50];
          /* Pagination */

          this.arrayDepositos = [];
          this.periodosBusca = [// { id: 1, nome: 'Padrão' },
          {
            id: 2,
            nome: 'Customizado'
          }];
          this.situacoes = [{
            id: 1,
            nome: 'Ativo'
          }, {
            id: 0,
            nome: 'Inativo'
          }];
          this.infAdicionaisDados = [];
          this.tiposVisualizacao = [{
            id: 'S',
            nome: 'Sintética por material'
          }, {
            id: 'A',
            nome: 'Analítica por depósito'
          }];
          this.modal = [];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.subtitles = [{
            text: 'Acima do máximo',
            color: 'blue'
          }, {
            text: 'Máximo',
            color: 'green'
          }, {
            text: 'Médio',
            color: 'yellow'
          }, {
            text: 'Mínimo',
            color: 'red'
          }, {
            text: 'Sem cadastro',
            color: 'gray'
          }];
          /* dados do usuário */

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
            empresas: [null],
            depositos: [null],
            dataInicial: [null],
            dataFinal: [null],
            nivelEstoque: [null],
            tipoMaterial: [null],
            linha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subLinha: [null],
            classe: [null],
            material: [null],
            paramData: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tipoVisualizacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            infAdicionais: [null],
            situacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qtItensPagina: [this.itemsPerPageParam],
            pagina: [this.currentPage],
            orderBy: [null],
            orderType: [null]
          });
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.setValueParamData();
            setTimeout(function () {
              _this5.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.titleService.setTitle('Análise de Compras');
            this.checkRouterParams();
            this.getTiposMateriais();
            this.getTiposNiveisEstoque();
            this.getInfAdicionais();
            this.getLinhas();
          }
        }, {
          key: "setValueParamData",
          value: function setValueParamData() {
            this.form.get('paramData').setValue(2);
            this.form.get('situacao').setValue(1);
            this.form.get('tipoVisualizacao').setValue("S");
            this.enabledDate();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this6 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this6.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Monitores',
                routerLink: "/abastecimento/monitores/".concat(params['idSubModulo'])
              }, {
                descricao: 'Análise de Compras'
              }];
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this7 = this;

            this.loaderNavbar = true;
            this.linhas = [];
            var campos = ['classe', 'subLinha', 'material', 'empresas', 'depositos'];
            this.setFormDisable(campos);
            var idSituacao = 1;
            this.service.getLinhas(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this7.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this7.linhas = res['body']['result'];
                }
              }
            }, function (error) {
              _this7.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this8 = this;

            this.loaderNavbar = true;
            var campos = ['subLinha', 'classe', 'material', 'empresas', 'depositos'];
            this.setFormReset(campos);
            this.setFormDisable(campos);
            this.subLinhas = [];

            if (this.form.get('linha').status === 'VALID') {
              var descricaoLinhas = this.form.get('linha').value;
              var idSituacao = 1;
              this.service.getSubLinhas(descricaoLinhas, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this8.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this8.subLinhas = res['body']['result'];

                      _this8.setFormEnable(['subLinha']);
                    } else if (res['body']['responseCode'] === 404) {
                      _this8.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this8.pnotifyService.error('Erro ao carregar sublinhas');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(['subLinha']);
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this9 = this;

            this.classes = [];
            this.loaderNavbar = true;
            var campos = ['classe'];
            this.setFormReset(campos);

            if (this.form.value['linha'] != null && this.form.value['linha'].length > 0) {
              var descricaoLinhas = this.form.get('linha').value;
              var idSubLinha = this.form.get('subLinha').value;
              var idSituacao = 1;
              this.service.getClasses(descricaoLinhas, idSubLinha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this9.classes = res['body']['result'];

                    _this9.setFormEnable(campos);
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(campos);
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this10 = this;

            this.materiais = [];
            this.loaderNavbar = true;
            var campos = ['material'];
            this.setFormReset(campos);
            var idClasses = this.form.get('classe').value;
            var idTipoMaterial = this.form.get('tipoMaterial').value;
            var idSituacao = this.form.get('situacao').value;

            if (this.form.value['classe'] != null && this.form.value['classe'].length > 0) {
              this.service.getMateriais(idClasses, idTipoMaterial, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this10.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this10.materiais = res['body'].result;

                    _this10.setFormEnable(campos);
                  } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                    _this10.materiais = [];

                    _this10.setFormDisable(campos);

                    _this10.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this10.loaderNavbar = false;
              }, function (error) {
                _this10.pnotifyService.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(campos);
            }
          }
        }, {
          key: "getDepositosAssociados",
          value: function getDepositosAssociados() {
            var _this11 = this;

            this.loaderNavbar = true;
            this.depositosAssociados = [];
            var campos = ['empresas', 'depositos'];
            this.setFormReset(campos);
            this.setFormDisable(campos);
            var idLinhas = this.form.get('linha').value;
            var idClasses = this.form.get('classe').value;
            var idTipoMaterial = this.form.get('tipoMaterial').value;
            var idSituacao = 1;

            if (this.form.value['classe'] != null && this.form.value['classe'].length > 0 || this.form.value['linha'] != null && this.form.value['linha'].length > 0) {
              this.service.getDepositosAssociados(idLinhas, idClasses, idTipoMaterial, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this11.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body']['responseCode'] === 200) {
                    _this11.depositosAssociados = res['body']['result'];

                    _this11.setFormEnable(['empresas']);
                  } else if (res['body']['responseCode'] === 404) {
                    _this11.pnotifyService.notice('Não há empresa vinculada');
                  }
                }
              }, function (error) {
                _this11.pnotifyService.error('Erro ao carregar Empresas associadas');
              });
            } else {
              this.loaderNavbar = false;
            }
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(param) {
            var _this12 = this;

            this.loaderNavbar = true;
            this.depositos = [];
            var campos = ['depositos'];
            this.setFormReset(campos);
            this.setFormDisable(campos);

            if (Object.keys(this.form.get('empresas').value).length > 0) {
              var idsEmpresa = this.form.get('empresas').value;
              var idSituacao = 1;
              this.service.getDepositos(idsEmpresa, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this12.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body']['responseCode'] === 200) {
                    _this12.depositos = res['body']['result'];

                    _this12.getArrayDepositos(param);

                    _this12.setFormEnable(campos);
                  } else if (res['body']['responseCode'] === 404) {
                    _this12.setFormDisable(campos);
                  }
                }
              }, function (error) {
                _this12.pnotifyService.error('Erro ao carregar Depositos');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(campos);
            }
          }
          /* Função para filtrar os depositos que possue vinculo com as classes */

        }, {
          key: "getArrayDepositos",
          value: function getArrayDepositos(event) {
            var depositosFiltrados = [];
            this.depositos.forEach(function (deposito) {
              event.forEach(function (element) {
                element['DEPO'].forEach(function (d) {
                  if (d['ID_DEPO'] == deposito['ID']) depositosFiltrados.push(deposito);
                });
              });
            });
            this.depositos = depositosFiltrados;
          }
          /* Função para filtrar os depositos que possue vinculo com as classes */

        }, {
          key: "getInfAdicionais",
          value: function getInfAdicionais() {
            var _this13 = this;

            this.loaderNavbar = true;
            this.service.getInfAdicionais().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this13.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this13.infAdicionaisDados = res['body']['result'];
                }
              }
            }, function (error) {
              _this13.pnotifyService.error('Erro ao carregar Informações adicionais');
            });
          }
        }, {
          key: "getTiposNiveisEstoque",
          value: function getTiposNiveisEstoque() {
            var _this14 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.tiposNiveisEstoques = [];
            this.service.getTiposNiveisEstoque(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this14.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this14.tiposNiveisEstoques = res['body']['result'];
                }
              }
            }, function (error) {
              _this14.pnotifyService.error('Erro ao carregar Tipos de Niveis de Estoque');
            });
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais() {
            var _this15 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.tiposMateriais = [];
            this.service.getTiposMateriais(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this15.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this15.tiposMateriais = res['body']['result'];
                }
              }
            }, function (error) {
              _this15.pnotifyService.error('Erro ao carregar Tipos de Materiais');
            });
          }
        }, {
          key: "getAnaliseCompras",
          value: function getAnaliseCompras(params) {
            var _this16 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.dados = [];
            this.dadosTotalizadores = [];
            this.colsInfAdicionais = [];
            /* função para resetar colunas adicionais */

            this.resetColsInfAdicionais();
            this.service.getAnaliseCompras(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this16.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  /* função para habilitar as colunas adicionais */
                  _this16.colsInfAdicionais = Object.keys(res['body']['result'][0]);

                  _this16.setColsInfAdicionaisTrue();
                  /* função para habilitar as colunas adicionais */


                  _this16.setColsMesAno();

                  _this16.totalItems = res['body']['result'][1]['TT_REGI'];
                  _this16.dadosFull = res['body']['result'];
                  _this16.dadosTotalizadores = _this16.dadosFull.shift();
                  _this16.dados = _this16.dadosFull;
                  _this16.noResult = false;
                  _this16.loading = true;
                } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                  _this16.noResult = true;
                  _this16.loading = false;

                  _this16.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this16.noResult = true;
              _this16.loading = false;

              _this16.pnotifyService.error('Erro ao carregar dados');
            });
          }
        }, {
          key: "getAnaliseComprasExcel",
          value: function getAnaliseComprasExcel(params) {
            var _this17 = this;

            this.loaderNavbar = true;
            this.dadosExcel = [];
            this.service.getAnaliseCompras(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this17.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this17.dadosExcel = res['body']['result'];

                  _this17.pnotifyService.success(_this17.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this17.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this17.pnotifyService.error('Erro ao carregar para excel dados');
            });
          }
        }, {
          key: "setColsMesAno",
          value: function setColsMesAno() {
            var _this18 = this;

            this.colsCar = 1;
            this.colsVenRea = 2;
            this.colsVenPed = 2;
            this.dadosCarteiraDetalhe = [];
            this.dadosVendasRealDetalhe = [];
            this.dadosVendasPerdDetalhe = [];
            var colunasCarteira = this.colsInfAdicionais;
            colunasCarteira.forEach(function (e) {
              if (e.match(/^CART_ABER_/)) {
                _this18.colsCar = _this18.colsCar + 1;

                _this18.dadosCarteiraDetalhe.push({
                  id: e.substring(10),
                  row: e,
                  header: e.substring(10).replace(/_/g, '/')
                });
              }

              ;

              if (e.match(/^VEND_REAL_/)) {
                _this18.colsVenRea = _this18.colsVenRea + 1;

                _this18.dadosVendasRealDetalhe.push({
                  id: e.substring(10),
                  row: e,
                  header: e.substring(10).replace(/_/g, '/')
                });
              }

              ;

              if (e.match(/^VEND_PERD_/)) {
                _this18.colsVenPed = _this18.colsVenPed + 1;

                _this18.dadosVendasPerdDetalhe.push({
                  id: e.substring(10),
                  row: e,
                  header: e.substring(10).replace(/_/g, '/')
                });
              }

              ;
            });
          }
        }, {
          key: "setColsCarteiraTrue",
          value: function setColsCarteiraTrue() {
            this.colsCarteira = !this.colsCarteira;
          }
        }, {
          key: "setColsVendasRealTrue",
          value: function setColsVendasRealTrue() {
            this.colsVendasReal = !this.colsVendasReal;
          }
        }, {
          key: "setColsVendasPerdTrue",
          value: function setColsVendasPerdTrue() {
            this.colsVendasPerd = !this.colsVendasPerd;
          }
        }, {
          key: "setColsEstoqueTrue",
          value: function setColsEstoqueTrue() {
            this.colsEstoque = !this.colsEstoque;
          }
          /* Seta como true as colunas que serão exibidas na tabela */

        }, {
          key: "setColsInfAdicionaisTrue",
          value: function setColsInfAdicionaisTrue() {
            var _this19 = this;

            this.colsMat = 0;
            this.colsEst = 1;
            this.colsInfAdicionais.forEach(function (element) {
              if (element == 'NM_DEPO') {
                _this19.depositoBool = true;
              }

              if (element == 'NM_LINH') {
                _this19.linhaBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'NM_SUB_LINH') {
                _this19.subLinhaBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'NM_CLAS') {
                _this19.classeBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'NM_APOI_UNID_MEDI') {
                _this19.uniMedidaBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'VL_MEDI') {
                _this19.bitolaBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'VL_LARG') {
                _this19.larguraBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'VL_COMP') {
                _this19.comprimentoBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'DS_QUAL') {
                _this19.qualidadeBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'DS_REVE') {
                _this19.revestimentoBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'DS_TIPO_ACO') {
                _this19.tipoAcoBool = true;
                _this19.colsMat = _this19.colsMat + 1;
              }

              if (element == 'TT_ESTO_ATUA') {
                _this19.estAtualBool = true;
                _this19.colsEst = _this19.colsEst + 1;
              }

              if (element == 'TT_ESTO_COMP') {
                _this19.estComprBool = true;
                _this19.colsEst = _this19.colsEst + 1;
              }

              if (element == 'TT_ESTO_SUSP') {
                _this19.estSuspBool = true;
                _this19.colsEst = _this19.colsEst + 1;
              }
            });
          }
          /* Seta como true as colunas que serão exibidas na tabela */

          /* Resetas as colunas que serão exibidas */

        }, {
          key: "resetColsInfAdicionais",
          value: function resetColsInfAdicionais() {
            this.depositoBool = false;
            this.linhaBool = false;
            this.subLinhaBool = false;
            this.classeBool = false;
            this.uniMedidaBool = false;
            this.bitolaBool = false;
            this.larguraBool = false;
            this.comprimentoBool = false;
            this.qualidadeBool = false;
            this.revestimentoBool = false;
            this.tipoAcoBool = false;
            this.estAtualBool = false;
            this.estComprBool = false;
            this.estSuspBool = false;
          }
          /* Resetas as colunas que serão exibidas */

        }, {
          key: "setFormDisable",
          value: function setFormDisable(selects) {
            var _this20 = this;

            selects.forEach(function (element) {
              return _this20.form.get(element).disable();
            });
          }
        }, {
          key: "setFormEnable",
          value: function setFormEnable(selects) {
            var _this21 = this;

            selects.forEach(function (element) {
              return _this21.form.get(element).enable();
            });
          }
        }, {
          key: "setFormReset",
          value: function setFormReset(selects) {
            var _this22 = this;

            selects.forEach(function (element) {
              return _this22.form.get(element).reset();
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this23 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this23.routerService.getBase64UrlParams(queryParams); //busca de dados


                _this23.getAnaliseCompras(_response);

                _this23.setFormValues(_response);
              }
            });
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var empresas = queryParams['empresas'] ? queryParams['empresas'] : null;
            var depositos = queryParams['depositos'] ? queryParams['depositos'] : null;
            var nivelEstoque = queryParams['nivelEstoque'] ? queryParams['nivelEstoque'] : null;
            var tipoMaterial = queryParams['tipoMaterial'] ? queryParams['tipoMaterial'] : null;
            var situacao = queryParams['situacao'];
            var linha = queryParams['linha'] ? queryParams['linha'] : null;
            var subLinha = queryParams['subLinha'] ? queryParams['subLinha'] : null;
            var classe = queryParams['classe'] ? queryParams['classe'] : [];
            var material = queryParams['material'] ? queryParams['material'] : null;
            var paramData = queryParams['paramData'] ? queryParams['paramData'] : null;
            var dataInicial = queryParams['dataInicial'] ? queryParams['dataInicial'] : null;
            var dataFinal = queryParams['dataFinal'] ? queryParams['dataFinal'] : null;
            var tipoVisualizacao = queryParams['tipoVisualizacao'] ? queryParams['tipoVisualizacao'] : null;
            var infAdicionais = queryParams['infAdicionais'] ? queryParams['infAdicionais'] : null; //let pagina = queryParams['pagina'];

            var orderBy = queryParams['orderBy'];
            var orderType = queryParams['orderType'];

            if (paramData == 2) {
              this.setFormEnable(['dataInicial', 'dataFinal']);
            }

            this.currentPage = queryParams['pagina'];
            this.itemsPerPageParam = queryParams['qtItensPagina'];
            this.key = orderBy;

            if (orderType === "ASC") {
              this.reverse = false;
            } else if (orderType === "DESC") {
              this.reverse = true;
            } //consulta para recarregamento dos dados no form


            this.getDadosForm({
              empresas: empresas,
              linha: linha,
              classe: classe,
              tipoMaterial: tipoMaterial,
              situacao: situacao
            });
            this.form.patchValue({
              empresas: empresas,
              depositos: depositos,
              nivelEstoque: nivelEstoque,
              tipoMaterial: tipoMaterial,
              situacao: situacao,
              linha: linha,
              subLinha: subLinha,
              classe: classe,
              material: material,
              paramData: paramData,
              dataInicial: dataInicial,
              dataFinal: dataFinal,
              tipoVisualizacao: tipoVisualizacao,
              infAdicionais: infAdicionais,
              qtItensPagina: this.itemsPerPageParam,
              pagina: this.currentPage,
              orderBy: orderBy,
              orderType: orderType
            });
          }
          /* Consulta para recarregamento de dados nos selects dos form */

        }, {
          key: "getDadosForm",
          value: function getDadosForm(params) {
            var _this24 = this;

            /* Alimenta select Sublinha */
            if (params['linha'] !== null) {
              var campos = ['subLinha'];
              this.service.getSubLinhas(params['linha'], 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this24.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this24.subLinhas = res['body']['result'];

                      _this24.setFormEnable(campos);
                    } else if (res['body']['responseCode'] === 404) {
                      _this24.setFormDisable(campos);
                    }
                  }
                }
              }, function (error) {
                _this24.pnotifyService.error('Erro ao carregar Sublinhas');
              });
            } else {
              this.setFormDisable(['subLinha']);
            }
            /* Alimenta select Classes */


            if (params['linha'] !== null) {
              var _campos = ['classe'];
              this.service.getClasses(params['linha'], params['subLinha'], 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this24.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this24.classes = res['body']['result'];

                    _this24.setFormEnable(_campos);
                  }
                }
              }, function (error) {
                _this24.pnotifyService.error('Erro ao carregar Classes');
              });
            }
            /* Alimenta select Materiais */


            if (Object.keys(params['classe']).length > 0) {
              var _campos2 = ['material'];
              this.service.getMateriais(params['classe'], params['tipoMaterial'], params['situacao']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this24.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this24.materiais = res['body'].result;

                    _this24.setFormEnable(_campos2);
                  } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                    _this24.setFormDisable(_campos2);

                    _this24.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this24.loaderNavbar = false;
              }, function (error) {
                _this24.pnotifyService.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(['material']);
            }
            /* Alimenta o select de empresas */


            if (Object.keys(params['linha']).length > 0) {
              var _campos3 = ['empresas'];
              this.service.getDepositosAssociados(params['linha'], params['classe'], params['tipoMaterial'], 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this24.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this24.depositosAssociados = res['body']['result'];

                    _this24.setFormEnable(_campos3);
                  }
                }
              }, function (error) {
                _this24.pnotifyService.error('Erro ao carregar Depositos associados');
              });
            }
            /* Alimenta select depositos */


            if (params['empresas'] !== null) {
              var _campos4 = ['depositos'];
              this.service.getDepositos(params['empresas'], 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this24.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this24.depositos = res['body']['result'];

                    _this24.setFormEnable(_campos4);
                  }
                }
              }, function (error) {
                _this24.pnotifyService.error('Erro ao carregar Depositos');
              });
            } else {
              this.setFormEnable(['depositos']);
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            var camposReset = ['linha', 'subLinha', 'classe', 'material', 'empresas', 'depositos'];
            var camposDisable = ['subLinha', 'classe', 'material', 'empresas', 'depositos'];
            this.setFormReset(camposReset);
            this.setFormDisable(camposDisable);
          }
        }, {
          key: "onFilter",
          value: function onFilter(pagina) {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            this.itemsPerPageParam = this.form.value['qtItensPagina'];
            this.key = this.form.value['orderBy'];
            this.setRouterParams({
              empresas: this.form.value['empresas'],
              depositos: this.form.value['depositos'],
              nivelEstoque: this.form.value['nivelEstoque'],
              tipoMaterial: this.form.value['tipoMaterial'],
              situacao: this.form.value['situacao'],
              linha: this.form.value['linha'],
              subLinha: this.form.value['subLinha'],
              classe: this.form.value['classe'],
              material: this.form.value['material'],
              paramData: this.form.value['paramData'],
              dataInicial: dataInicial,
              dataFinal: dataFinal,
              tipoVisualizacao: this.form.value['tipoVisualizacao'],
              infAdicionais: this.form.value['infAdicionais'],
              qtItensPagina: this.form.value['qtItensPagina'],
              pagina: pagina,
              orderBy: this.form.value['orderBy'],
              orderType: this.form.value['orderType']
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(params)
            });
            this.getAnaliseCompras(params);
          }
          /* Modals */

        }, {
          key: "getNivelEstoqueModal",
          value: function getNivelEstoqueModal(item) {
            this.itemNivelEstoque = item;
            this.modal.title = "NÍVEL DE ESTOQUE";
            this.loadingDetalhesModal = true;
            this.nivelEstBool = true;
          }
        }, {
          key: "getCarteiraModal",
          value: function getCarteiraModal(item, idMesAno) {
            this.itemCarteira = item;
            this.idMesAnoCarteira = idMesAno;
            this.modal.title = "CARTEIRA";
            this.carteiraBool = true;
            this.loadingDetalhesModal = true;
          }
        }, {
          key: "getVendasRealModal",
          value: function getVendasRealModal(item, idMesAno) {
            this.itemVendasRealizadas = item;
            this.idMesAnoVendasRealizadas = idMesAno;
            this.modal.title = "VENDAS REALIZADAS";
            this.loadingDetalhesModal = true;
            this.vendasRealBool = true;
          }
        }, {
          key: "getVendasPerdModal",
          value: function getVendasPerdModal(item, idMesAno) {
            this.vendasPerdBool = true;
            this.loadingDetalhesModal = true;
            this.modal.title = "VENDAS PERDIDAS";
            this.itemVendasPerdidas = item;
            this.idMesAnoVendasPerdidas = idMesAno;
          }
        }, {
          key: "getEstoqueSupensoModal",
          value: function getEstoqueSupensoModal(item) {
            this.loadingDetalhesModal = true;
            this.estoqueSuspBool = true;
            this.modal.title = "ESTOQUE SUSPENSO";
            this.itemEstoqueSupenso = item;
          }
        }, {
          key: "getEstoqueComprometidoModal",
          value: function getEstoqueComprometidoModal(item) {
            this.loadingDetalhesModal = true;
            this.estoqueCompBool = true;
            this.modal.title = "ESTOQUE COMPROMETIDO";
            this.itemEstoqueComprometido = item;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.vendasPerdBool = false;
            this.vendasRealBool = false;
            this.carteiraBool = false;
            this.nivelEstBool = false;
            this.estoqueSuspBool = false;
            this.estoqueCompBool = false;
          }
          /* Modals */

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
          key: "activeInputDate",
          value: function activeInputDate() {
            if (this.form.value['paramData'] == 2) {
              this.enabledDate();
            } else if (this.form.value['paramData'] == 1) {
              this.disabledDate();
            }
          }
        }, {
          key: "disabledDate",
          value: function disabledDate() {
            var campoData = ['dataInicial', 'dataFinal'];
            this.setFormReset(campoData);
            this.setFormDisable(campoData);
          }
        }, {
          key: "enabledDate",
          value: function enabledDate() {
            var campoData = ['dataInicial', 'dataFinal'];
            var today = new Date();
            this.setFormReset(campoData);
            this.setFormEnable(campoData);
            this.form.get('dataInicial').setValue(this.getLastThreeMonthsDay());
            this.form.get('dataFinal').setValue(today);
          }
        }, {
          key: "getLastThreeMonthsDay",
          value: function getLastThreeMonthsDay() {
            var date = new Date();
            date.setMonth(date.getMonth() - 3);
            return date;
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
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
              ;
            }

            if (!dataInicial) {
              this.compararDataFinal = false;
              return false;
            } else if (dataInicial > dataFinal) {
              this.compararDataFinal = true;
              return this.compararDataFinal;
            }
          }
        }, {
          key: "comparaDataFinal",
          value: function comparaDataFinal() {
            var now = new Date();

            if (!this.form.get('dataFinal').value) {
              this.compararDataFinalAtual = false;
              return false;
            } else if (this.form.get('dataFinal').value > now) {
              this.compararDataFinalAtual = true;
              return this.compararDataFinalAtual;
            }
          }
        }, {
          key: "comparaDataInicial",
          value: function comparaDataInicial() {
            var now = new Date();

            if (!this.form.get('dataInicial').value) {
              this.compararDataInicial = false;
              return false;
            } else if (this.form.get('dataInicial').value > now) {
              this.compararDataInicial = true;
              return this.compararDataInicial;
            }
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            var queryParams = {
              empresas: this.form.value['empresas'],
              depositos: this.form.value['depositos'],
              nivelEstoque: this.form.value['nivelEstoque'],
              tipoMaterial: this.form.value['tipoMaterial'],
              situacao: this.form.value['situacao'],
              linha: this.form.value['linha'],
              subLinha: this.form.value['subLinha'],
              classe: this.form.value['classe'],
              material: this.form.value['material'],
              paramData: this.form.value['paramData'],
              dataInicial: dataInicial,
              dataFinal: dataFinal,
              tipoVisualizacao: this.form.value['tipoVisualizacao'],
              infAdicionais: this.form.value['infAdicionais'],
              qtItensPagina: "",
              pagina: "",
              idUsuario: this.idUsuario,
              relatorioExcel: 1
            };
            this.getAnaliseComprasExcel(queryParams);
          }
        }, {
          key: "setColorBorder",
          value: function setColorBorder(i) {
            var border;

            if (i == 'RED') {
              border = 'border-danger';
            }

            if (i == 'YELLOW') {
              border = 'border-warning';
            }

            if (i == 'GREEN') {
              border = 'border-success';
            }

            if (i == 'BLUE') {
              border = 'border-primary';
            }

            if (i == 'GREY') {
              border = 'border-secondary';
            }

            return border;
          }
          /* Ordenação via API*/

        }, {
          key: "sort",
          value: function sort(key) {
            if (this.key != key) {
              this.reverse = true;
            } else if (this.key == key) {
              this.reverse = !this.reverse;
            }

            this.key = key;

            if (this.reverse == false) {
              this.form.get('orderType').setValue("ASC");
            } else if (this.reverse == true) {
              this.form.get('orderType').setValue("DESC");
            }

            this.form.get('orderBy').setValue(this.key);
            this.onFilter(this.currentPage);
          }
          /* Ordenação via API*/

          /* Paginação Tabela Principal*/

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.currentPage != event.page) {
              this.currentPage = event.page;
              this.onFilter(this.currentPage);
            }
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasComponent;
      }();

      AbastecimentoMonitoresAnaliseComprasComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseComprasService"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'analise-compras',
        template: _raw_loader_analise_compras_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analise_compras_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseComprasService"]])], AbastecimentoMonitoresAnaliseComprasComponent);
      /***/
    },

    /***/
    "Jf9T":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-suspenso/modal-estoque-suspenso.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jf9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\" id=\"header-modal-estoque-suspenso\">\n  <div class=\"col-3\">\n    <p style=\"font-size: 14px;\">\n      <strong> CÓD. MATERIAL: </strong>\n      {{ modal.codMaterial }}\n    </p>\n  </div>\n  <div class=\"col-6\">\n    <p style=\"font-size: 14px;\">\n      <strong> DESCRIÇÃO: </strong>\n      {{ modal.descMaterial }}\n    </p>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button type=\"button\" (click)=\"onFilter()\" class=\"btn mr-2\">\n      Filtrar\n    </button>\n    <button type=\"button\" (click)=\"excelExport()\" class=\"btn\">\n      Exportar Excel\n    </button>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"empresas\">Empresas</label>\n        <input class=\"form-control\" id=\"empresas\" type=\"text\" formControlName=\"empresas\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"depositos\">Depósito</label>\n        <input class=\"form-control\" id=\"depositos\" type=\"text\" formControlName=\"depositos\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataEntrada\">Data entrada/lançamento</label>\n        <input class=\"form-control\" id=\"dataEntrada\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\"\n          formControlName=\"dataEntrada\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"notaFiscal\">Nota Fiscal</label>\n        <input class=\"form-control\" id=\"notaFiscal\" type=\"text\" formControlName=\"notaFiscal\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"motivo\">Motivo</label>\n        <input class=\"form-control\" id=\"motivo\" type=\"text\" formControlName=\"motivo\">\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<tabset *ngIf=\"(!estoqueSupensoEntradaMaterialEmpty || !estoqueSupensoGeralEmpty)  && !loaderBody\">\n  <tab heading=\"Inventário\" *ngIf=\"!estoqueSupensoGeralEmpty\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th nowrap (click)=\"sortA('NM_EMPR')\" class=\"hover text-center\">\n              Empresa\n              <span *ngIf=\"keyA == 'NM_EMPR'\"><i [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyA != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortA('NM_DEPO')\" class=\"hover text-center\">\n              Depósito\n              <span *ngIf=\"keyA == 'NM_DEPO'\"><i [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyA != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <!-- <th nowrap (click)=\"sortA('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Data Lançamento\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th> -->\n            <th nowrap (click)=\"sortA('DS_MOTI')\" class=\"hover text-center\">\n              Motivo\n              <span *ngIf=\"keyA == 'DS_MOTI'\"><i [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyA != 'DS_MOTI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortA('TT_ITEM')\" class=\"hover text-center\">\n              Volume\n              <span *ngIf=\"keyA == 'TT_ITEM'\"><i [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyA != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosEstoqueSuspensoInventario | orderBy: keyA:reverseA | slice: beginA:endA;\">\n            <td nowrap class=\"text-center\">{{item.NM_EMPR}}</td>\n            <td nowrap class=\"text-center\">{{item.NM_DEPO}}</td>\n<!--             <td nowrap class=\"text-center\">sem data lançamento</td> -->\n            <td nowrap class=\"text-center\">{{item.DS_MOTI}}</td>\n            <td nowrap class=\"text-center\">{{item.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n          <tr>\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <!-- <td nowrap class=\"text-center text-white bg-dark\"></td> -->\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\">{{dadosEstoqueSuspensoInventarioTotal.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2 mb-2\" *ngIf=\"dadosEstoqueSuspensoInventario?.length > itemsPerPage\">\n      Exibindo {{ beginA + 1 }} a {{ endA }} de\n      {{ dadosEstoqueSuspensoInventario?.length }}\n      <div class=\"d-flex\">\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueSuspensoInventario?.length\"\n          (pageChanged)=\"onPageChangedA($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageA\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </tab>\n  <tab heading=\"Entrada de materias\" *ngIf=\"!estoqueSupensoEntradaMaterialEmpty\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th nowrap (click)=\"sortB('NM_EMPR')\" class=\"hover text-center\">\n              Empresa\n              <span *ngIf=\"keyB == 'NM_EMPR'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NM_DEPO')\" class=\"hover text-center\">\n              Depósito\n              <span *ngIf=\"keyB == 'NM_DEPO'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NR_RELA')\" class=\"hover text-center\">\n              Relatório\n              <span *ngIf=\"keyB == 'NR_RELA'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NR_RELA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('DT_ENTR')\" class=\"hover text-center\">\n              Data Entrada\n              <span *ngIf=\"keyB == 'DT_ENTR'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'DT_ENTR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NR_NOTA_FISC')\" class=\"hover text-center\">\n              Nota Fiscal\n              <span *ngIf=\"keyB == 'NR_NOTA_FISC'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NR_NOTA_FISC'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NM_FORN')\" class=\"hover text-center\">\n              Fornecedor\n              <span *ngIf=\"keyB == 'NM_FORN'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_FORN'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NR_LOTE')\" class=\"hover text-center\">\n              Lote\n              <span *ngIf=\"keyB == 'NR_LOTE'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NR_LOTE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('TT_ITEM')\" class=\"hover text-center\">\n              Volume\n              <span *ngIf=\"keyB == 'TT_ITEM'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosEstoqueSuspensoEntradaMaterial | orderBy: keyB:reverseB | slice: beginB:endB;\">\n            <td nowrap class=\"text-center\">{{item.NM_EMPR}}</td>\n            <td nowrap class=\"text-center\">{{item.NM_DEPO}}</td>\n            <td nowrap class=\"text-center\">{{item.NR_RELA | number: '0.0'}}</td>\n            <td nowrap class=\"text-center\">{{item.DT_ENTR | date: 'dd/MM/yyyy'}}</td>\n            <td nowrap class=\"text-center\">{{item.NR_NOTA_FISC | number: '0.0'}}</td>\n            <td nowrap class=\"text-center\">{{item.NM_FORN}}</td>\n            <td nowrap class=\"text-center\">{{item.NR_LOTE | number: '0.0'}}</td>\n            <td nowrap class=\"text-center\">{{item.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n          <tr>\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\">{{dadosEstoqueSuspensoEntradaMaterialTotal.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2 mb-2\" *ngIf=\"\n        dadosEstoqueSuspensoEntradaMaterial?.length > itemsPerPage\n      \">\n      Exibindo {{ beginB + 1 }} a {{ endB }} de\n      {{ dadosEstoqueSuspensoEntradaMaterial?.length }}\n      <div class=\"d-flex\">\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueSuspensoEntradaMaterial?.length\"\n          (pageChanged)=\"onPageChangedB($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageB\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </tab>\n  <!-- <tab heading=\"Inventário\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Empresa\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Depósito\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Relatório\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Data lançamento\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Usuário\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Motivo\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PEDI_ORIG')\" class=\"hover text-center\">\n              Volume\n              <span *ngIf=\"keyC == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosEstoqueSuspensoInventario | orderBy: keyC:reverseC | slice: beginC:endC;\">\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2 mb-2\" *ngIf=\"dadosEstoqueSuspensoInventario?.length > itemsPerPage\">\n      Exibindo {{ beginC + 1 }} a {{ endC }} de\n      {{ dadosEstoqueSuspensoInventario?.length }}\n      <div class=\"d-flex\">\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueSuspensoInventario?.length\"\n          (pageChanged)=\"onPageChangedC($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageC\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </tab> -->\n</tabset>\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\n  <div class=\"spinner-border\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"estoqueSupensoEntradaMaterialEmpty && estoqueSupensoGeralEmpty && !loaderBody\"\n  class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "JtkM":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-nivel-estoque/modal-nivel-estoque.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent */

    /***/
    function JtkM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent", function () {
        return AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_nivel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-nivel-estoque.component.html */
      "X0Wq");
      /* harmony import */


      var _modal_nivel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-nivel-estoque.component.scss */
      "Uqvq");
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../analise-compras.service */
      "yPm9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent = /*#__PURE__*/function () {
        function AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent);

          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.service = service;
          this.pnotifyService = pnotifyService;
          this.loadingDetalhesModal = false;
          this.noResultModal = false;
          this.loaderBody = false;
          this.dadosDetalhesNivelEstoqueModal = [];
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setParamsNivelEstoque();
          }
        }, {
          key: "setParamsNivelEstoque",
          value: function setParamsNivelEstoque() {
            var queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
            var dataInicial = queryParams["dataInicial"];
            var dataFinal = queryParams["dataFinal"];
            var params = [];
            var tipoVisualizacao = queryParams["tipoVisualizacao"];
            var idDeposito;
            var idMaterial = this.item["ID_MATE"];

            if (tipoVisualizacao == 'S') {
              idDeposito = queryParams["depositos"];
            } else if (tipoVisualizacao == 'A') {
              idDeposito = this.item["ID_DEPO"];
            }

            params = {
              idMaterial: idMaterial,
              idDeposito: idDeposito,
              dataInicial: dataInicial,
              dataFinal: dataFinal
            };
            this.getNivelEstoqueDetalhes(params);
          }
        }, {
          key: "getNivelEstoqueDetalhes",
          value: function getNivelEstoqueDetalhes(params) {
            var _this25 = this;

            this.loaderBody = true;
            this.loadingDetalhesModal = false;
            this.noResultModal = false;
            this.dadosDetalhesNivelEstoqueModal = [];
            this.service.getNiveisEstoqueDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              return _this25.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this25.loadingDetalhesModal = true;
                    _this25.noResultModal = false;
                    _this25.dadosDetalhesNivelEstoqueModal = res['body']['result'][0];
                  } else if (res['body']['responseCode'] === 404) {
                    _this25.noResultModal = true;
                    _this25.loadingDetalhesModal = false;

                    _this25.pnotifyService.notice('Não há dados');
                  }
                }
              }
            }, function (error) {
              _this25.noResultModal = true;
              _this25.loadingDetalhesModal = false;

              _this25.pnotifyService.error('Erro ao detalhes de niveis de estoque');
            });
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent;
      }();

      AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoMonitoresAnaliseComprasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-nivel-estoque',
        template: _raw_loader_modal_nivel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_nivel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoMonitoresAnaliseComprasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]])], AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent);
      /***/
    },

    /***/
    "LOgi":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-suspenso/modal-estoque-suspenso.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LOgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#header-modal-estoque-suspenso > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvbW9kYWwtZXN0b3F1ZS1zdXNwZW5zby9tb2RhbC1lc3RvcXVlLXN1c3BlbnNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxnRUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLWVzdG9xdWUtc3VzcGVuc28vbW9kYWwtZXN0b3F1ZS1zdXNwZW5zby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXItbW9kYWwtZXN0b3F1ZS1zdXNwZW5zbyA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2YwZjNmNiksIGNvbG9yLXN0b3AoOTAlLCAjZTZlYmYxKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "O4ok":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-comprometido/modal-estoque-comprometido.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O4ok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\" id=\"header-modal-estoque-comprometido\">\n  <div class=\"col-3\">\n    <p style=\"font-size: 14px;\">\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\n    </p>\n  </div>\n  <div class=\"col-6\">\n    <p style=\"font-size: 14px;\">\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\n    </p>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button type=\"button\" (click)=\"onFilter()\" class=\"btn mr-2\">\n      Filtrar\n    </button>\n    <button type=\"button\" (click)=\"excelExport()\" class=\"btn\">\n      Exportar Excel\n    </button>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"empresas\">Empresas</label>\n        <input class=\"form-control\" id=\"empresas\" type=\"text\" formControlName=\"empresas\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"depositos\">Depósito</label>\n        <input class=\"form-control\" id=\"depositos\" type=\"text\" formControlName=\"depositos\">\n      </div>\n      <div class=\"form-group col-lg-1\">\n        <label for=\"numero\">Número</label>\n        <input class=\"form-control\" id=\"numero\" type=\"text\" formControlName=\"numero\">\n      </div>\n      <div class=\"form-group col-lg-1\">\n        <label for=\"itemFiltro\">Item</label>\n        <input class=\"form-control\" id=\"itemFiltro\" type=\"text\" formControlName=\"itemFiltro\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"data\">Data</label>\n        <input class=\"form-control\" id=\"data\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\" formControlName=\"data\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"cliente\">Cliente</label>\n        <input class=\"form-control\" id=\"cliente\" type=\"text\" formControlName=\"cliente\">\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"vendedor\">Vendedor</label>\n        <input class=\"form-control\" id=\"vendedor\" type=\"text\" formControlName=\"vendedor\">\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<tabset *ngIf=\"(!estoqueComprometidoPlanoCorteEmpty || !estoqueComprometidoPedidoVendasEmpty) && !loaderBody\">\n  <!-- <tab heading=\"Geral\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Empresa\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Depósito\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Número\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Item\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Data Lançamento\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th\n              nowrap\n              (click)=\"sortA('NR_PEDI_ORIG')\"\n              class=\"hover text-center\"\n            >\n              Volume\n              <span *ngIf=\"keyA == 'NR_PEDI_ORIG'\"\n                ><i\n                  [ngClass]=\"\n                    reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"keyA != 'NR_PEDI_ORIG'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosEstoqueComprometidoGeral | orderBy: keyA:reverseA | slice: beginA:endA;\">\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n            <td nowrap class=\"text-center\">asdasdas</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div\n      class=\"mt-2 mb-2\"\n      *ngIf=\"dadosEstoqueComprometidoGeral?.length > itemsPerPage\"\n    >\n      Exibindo {{ beginA + 1 }} a {{ endA }} de\n      {{ dadosEstoqueComprometidoGeral?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dadosEstoqueComprometidoGeral?.length\"\n          (pageChanged)=\"onPageChangedA($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageA\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </tab> -->\n  <tab heading=\"Pedido de Vendas\" *ngIf=\"!estoqueComprometidoPedidoVendasEmpty\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th nowrap (click)=\"sortB('NM_EMPR')\" class=\"hover text-center\">\n              Empresa\n              <span *ngIf=\"keyB == 'NM_EMPR'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NM_DEPO')\" class=\"hover text-center\">\n              Depósito\n              <span *ngIf=\"keyB == 'NM_DEPO'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NR_PEDI')\" class=\"hover text-center\">\n              Número\n              <span *ngIf=\"keyB == 'NR_PEDI'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NR_PEDI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NR_ITEM_PEDI')\" class=\"hover text-center\">\n              Item\n              <span *ngIf=\"keyB == 'NR_ITEM_PEDI'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NR_ITEM_PEDI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('DT_EMIS')\" class=\"hover text-center\">\n              Data\n              <span *ngIf=\"keyB == 'DT_EMIS'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'DT_EMIS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NM_CLIE')\" class=\"hover text-center\">\n              Cliente\n              <span *ngIf=\"keyB == 'NM_CLIE'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_CLIE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('NM_VEND')\" class=\"hover text-center\">\n              Vendedor\n              <span *ngIf=\"keyB == 'NM_VEND'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'NM_VEND'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortB('TT_ITEM')\" class=\"hover text-center\">\n              Volume\n              <span *ngIf=\"keyB == 'TT_ITEM'\"><i [ngClass]=\"\n                    reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyB != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosEstoqueComprometidoPedidoVendas | orderBy: keyB:reverseB | slice: beginB:endB;\">\n            <td nowrap class=\"text-center\">{{item.NM_EMPR}}</td>\n            <td nowrap class=\"text-center\">{{item.NM_DEPO}}</td>\n            <td nowrap class=\"text-center\">{{item.NR_PEDI | number: '0.0'}}</td>\n            <td nowrap class=\"text-center\">{{item.NR_ITEM_PEDI | number: '0.0'}}</td>\n            <td nowrap class=\"text-center\">{{item.DT_EMIS | date: 'dd/MM/yyyy'}}</td>\n            <td nowrap class=\"text-center\">{{item.NM_CLIE}}</td>\n            <td nowrap class=\"text-center\">{{item.NM_VEND}}</td>\n            <td nowrap class=\"text-center\">{{item.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n          <tr>\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\">\n              {{dadosEstoqueComprometidoPedidoVendasTotal.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2 mb-2\" *ngIf=\"\n        dadosEstoqueComprometidoPedidoVendas?.length > itemsPerPage\n      \">\n      Exibindo {{ beginB + 1 }} a {{ endB }} de\n      {{ dadosEstoqueComprometidoPedidoVendas?.length }}\n      <div class=\"d-flex\">\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueComprometidoPedidoVendas?.length\"\n          (pageChanged)=\"onPageChangedB($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageB\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </tab>\n  <tab heading=\"Plano de Corte\" *ngIf=\"!estoqueComprometidoPlanoCorteEmpty\">\n    <div class=\"table-responsive mt-2\">\n      <custom-table subtitleBorder=\"true\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th nowrap (click)=\"sortC('NM_EMPR')\" class=\"hover text-center\">\n              Empresa\n              <span *ngIf=\"keyC == 'NM_EMPR'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NM_DEPO')\" class=\"hover text-center\">\n              Depósito\n              <span *ngIf=\"keyC == 'NM_DEPO'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('NR_PLAN_CORT')\" class=\"hover text-center\">\n              Plano de Corte\n              <span *ngIf=\"keyC == 'NR_PLAN_CORT'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'NR_PLAN_CORT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('DT_PLAN_CORT')\" class=\"hover text-center\">\n              Data Plano\n              <span *ngIf=\"keyC == 'DT_PLAN_CORT'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'DT_PLAN_CORT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap (click)=\"sortC('TT_ITEM')\" class=\"hover text-center\">\n              Volume\n              <span *ngIf=\"keyC == 'TT_ITEM'\"><i [ngClass]=\"\n                    reverseC ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"></i></span>\n              <span *ngIf=\"keyC != 'TT_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosEstoqueComprometidoPlanoCorte | orderBy: keyC:reverseC | slice: beginC:endC;\">\n            <td nowrap class=\"text-center\">{{ item.NM_EMPR }}</td>\n            <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\n            <td nowrap class=\"text-center\">{{ item.NR_PLAN_CORT | number : '0.0' }}</td>\n            <td nowrap class=\"text-center\">{{ item.DT_PLAN_CORT | date: 'dd/MM/yyyy' }}</td>\n            <td nowrap class=\"text-center\">{{ item.TT_ITEM | number : '0.3' }}</td>\n          </tr>\n          <tr>\n            <td nowrap class=\"text-center text-white bg-dark\">Total</td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\"></td>\n            <td nowrap class=\"text-center text-white bg-dark\">\n              {{dadosEstoqueComprometidoPlanoCorteTotal.TT_ITEM | number: '0.3'}}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2 mb-2\" *ngIf=\"dadosEstoqueComprometidoPlanoCorte?.length > itemsPerPage\">\n      Exibindo {{ beginC + 1 }} a {{ endC }} de\n      {{ dadosEstoqueComprometidoPlanoCorte?.length }}\n      <div class=\"d-flex\">\n        <pagination [maxSize]=\"10\" [totalItems]=\"dadosEstoqueComprometidoPlanoCorte?.length\"\n          (pageChanged)=\"onPageChangedC($event)\" [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPageC\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </tab>\n</tabset>\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\n  <div class=\"spinner-border\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"estoqueComprometidoPlanoCorteEmpty && estoqueComprometidoPedidoVendasEmpty && !loaderBody\"\n  class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "PxAZ":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-suspenso/modal-estoque-suspenso.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent */

    /***/
    function PxAZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent", function () {
        return AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_estoque_suspenso_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-estoque-suspenso.component.html */
      "Jf9T");
      /* harmony import */


      var _modal_estoque_suspenso_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-estoque-suspenso.component.scss */
      "LOgi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../analise-compras.service */
      "yPm9");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);

      var AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent = /*#__PURE__*/function () {
        /* dados do usuário */
        function AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent(formBuilder, dateService, localeService, service, pnotifyService) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent);

          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.localeService = localeService;
          this.service = service;
          this.pnotifyService = pnotifyService;
          this.loaderBody = false;
          this.loadingDetalhesModal = false;
          this.noResultModal = false;
          this.estoqueSupensoGeralEmpty = false;
          this.estoqueSupensoEntradaMaterialEmpty = false;
          this.empresas = [];
          this.depositos = [];
          this.dataEntrada = [];
          this.notaFiscal = [];
          this.usuario = [];
          this.lote = [];
          this.modal = [];
          this.idEmpresa = '';
          this.idDeposito = '';
          this.dadosEstoqueSuspensoGeral = [];
          this.dadosEstoqueSuspensoGeralFull = [];
          this.dadosEstoqueSuspensoGeralTotal = [];
          this.dadosEstoqueSuspensoInventario = [];
          this.dadosEstoqueSuspensoInventarioFull = [];
          this.dadosEstoqueSuspensoInventarioTotal = [];
          this.dadosEstoqueSuspensoEntradaMaterial = [];
          this.dadosEstoqueSuspensoEntradaMaterialFull = [];
          this.dadosEstoqueSuspensoEntradaMaterialTotal = [];
          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_EMPR';
          this.reverseB = false;
          this.keyB = 'NM_EMPR';
          this.reverseC = false;
          this.keyC = 'NM_EMPR';
          /* PaginationModal*/

          this.itemsPerPage = 15;
          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          this.currentPageB = 1;
          this.beginB = 0;
          this.endB = 15;
          this.currentPageC = 1;
          this.beginC = 0;
          this.endC = 15;
          /* dados do usuário */

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
            empresas: [null],
            depositos: [null],
            dataEntrada: [null],
            notaFiscal: [null],
            motivo: [null]
          });
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.codMaterial = this.item.ID_REFE_ERP;
            this.modal.descMaterial = this.item.NM_MATE;
            this.idEmpresa = this.item.ID_EMPR ? this.item.ID_EMPR : "";
            this.idDeposito = this.item.ID_DEPO ? this.item.ID_DEPO : "";
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var dataPedido = this.setDateValid(this.form.value['dataEntrada']);
            var params = {
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_NOTA_FISC: this.form.value['notaFiscal'] ? this.form.value['notaFiscal'] : "",
              DS_MOTI: this.form.value['motivo'] ? this.form.value['motivo'] : "",
              DT_ENTR: dataPedido ? dataPedido : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NR_PAGE_INIC: "",
              TT_REGI_PAGI: "",
              ORDE_BY: "",
              ORDE_TYPE: "",
              IN_GERA_RELA_EXCE: "",
              ID_USUA: ""
            };
            this.getEstoqueSuspenso(params);
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataPedido = this.setDateValid(this.form.value['dataEntrada']);
            var params = {
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_NOTA_FISC: this.form.value['notaFiscal'] ? this.form.value['notaFiscal'] : "",
              DS_MOTI: this.form.value['motivo'] ? this.form.value['motivo'] : "",
              DT_ENTR: dataPedido ? dataPedido : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NR_PAGE_INIC: "",
              TT_REGI_PAGI: "",
              ORDE_BY: "",
              ORDE_TYPE: "",
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: this.idUsuario
            };
            this.getEstoqueSuspensoExcel(params);
          }
        }, {
          key: "getEstoqueSuspenso",
          value: function getEstoqueSuspenso(params) {
            var _this26 = this;

            this.dadosEstoqueSuspensoGeralFull = [];
            this.dadosEstoqueSuspensoGeral = [];
            this.dadosEstoqueSuspensoGeralTotal = [];
            this.dadosEstoqueSuspensoEntradaMaterial = [];
            this.dadosEstoqueSuspensoEntradaMaterialFull = [];
            this.dadosEstoqueSuspensoEntradaMaterialTotal = [];
            this.dadosEstoqueSuspensoInventario = [];
            this.dadosEstoqueSuspensoInventarioFull = [];
            this.dadosEstoqueSuspensoInventarioTotal = [];
            this.loaderBody = true;
            this.loadingDetalhesModal = false;
            this.noResultModal = false;
            this.estoqueSupensoGeralEmpty = true;
            this.estoqueSupensoEntradaMaterialEmpty = true;
            this.service.getEstoqueSupensoGeral(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this26.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this26.dadosEstoqueSuspensoInventarioFull = res['body']['result'];
                  _this26.dadosEstoqueSuspensoInventarioTotal = _this26.dadosEstoqueSuspensoInventarioFull.shift();
                  _this26.dadosEstoqueSuspensoInventario = _this26.dadosEstoqueSuspensoInventarioFull;
                  _this26.estoqueSupensoGeralEmpty = false;
                  _this26.loadingDetalhesModal = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this26.loadingDetalhesModal = true;
                  _this26.estoqueSupensoGeralEmpty = true;

                  _this26.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this26.pnotifyService.error('Erro ao carregar Estoque Suspenso');

              _this26.loadingDetalhesModal = true;
              _this26.estoqueSupensoGeralEmpty = true;
            });
            this.service.getEstoqueSupensoEntrada(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this26.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this26.dadosEstoqueSuspensoEntradaMaterialFull = res['body']['result'];
                  _this26.dadosEstoqueSuspensoEntradaMaterialTotal = _this26.dadosEstoqueSuspensoEntradaMaterialFull.shift();
                  _this26.dadosEstoqueSuspensoEntradaMaterial = _this26.dadosEstoqueSuspensoEntradaMaterialFull;
                  _this26.estoqueSupensoEntradaMaterialEmpty = false;
                  _this26.loadingDetalhesModal = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this26.loadingDetalhesModal = true;
                  _this26.estoqueSupensoEntradaMaterialEmpty = true;

                  _this26.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this26.pnotifyService.error('Erro ao carregar Estoque Suspenso');

              _this26.loadingDetalhesModal = true;
              _this26.estoqueSupensoEntradaMaterialEmpty = true;
            });
          }
        }, {
          key: "getEstoqueSuspensoExcel",
          value: function getEstoqueSuspensoExcel(params) {
            var _this27 = this;

            this.service.getEstoqueSupensoGeral(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this27.pnotifyService.success(res['body']['result']);
                } else if (res['body']['responseCode'] === 404) {
                  _this27.pnotifyService.notice(res['body']['result']);
                }
              }
            }, function (error) {
              _this27.pnotifyService.error('Erro ao gerar Excel - Estoque Suspenso');
            });
            this.service.getEstoqueSupensoEntrada(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this27.pnotifyService.success(res['body']['result']);
                } else if (res['body']['responseCode'] === 404) {
                  _this27.pnotifyService.notice(res['body']['result']);
                }
              }
            }, function (error) {
              _this27.pnotifyService.error('Erro ao gerar Excel - Estoque Suspenso');
            });
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
        }, {
          key: "sortB",
          value: function sortB(keyB) {
            this.keyB = keyB;
            this.reverseB = !this.reverseB;
          }
        }, {
          key: "sortC",
          value: function sortC(keyC) {
            this.keyC = keyC;
            this.reverseC = !this.reverseC;
          }
          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }, {
          key: "onPageChangedB",
          value: function onPageChangedB(event) {
            this.beginB = (event.page - 1) * event.itemsPerPage;
            this.endB = event.page * event.itemsPerPage;
          }
        }, {
          key: "onPageChangedC",
          value: function onPageChangedC(event) {
            this.beginC = (event.page - 1) * event.itemsPerPage;
            this.endC = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent;
      }();

      AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-estoque-suspenso',
        template: _raw_loader_modal_estoque_suspenso_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_estoque_suspenso_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])], AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent);
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
    "Uqvq":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-nivel-estoque/modal-nivel-estoque.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Uqvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLW5pdmVsLWVzdG9xdWUvbW9kYWwtbml2ZWwtZXN0b3F1ZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "VQTc":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-perdidas/modal-vendas-perdidas.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VQTc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\n  <div class=\"col-3\">\n    <p style=\"font-size: 14px;\">\n      <strong> CÓD. MATERIAL: </strong> {{ modal.codMaterial }}\n    </p>\n  </div>\n  <div class=\"col-4\">\n    <p style=\"font-size: 14px;\">\n      <strong> DESCRIÇÃO: </strong> {{ modal.descMaterial }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> UN. MEDIDA: </strong> {{ modal.unidadeMedida }}\n    </p>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button\n      type=\"button\"\n      (click)=\"onFilter()\"\n      class=\"btn mr-2\"\n      [disabled]=\"\n        comparaData() ||\n        comparaDataInicial() ||\n        comparaDataFinal()\n      \"\n    >\n      Filtrar\n    </button>\n    <button\n      type=\"button\"\n      (click)=\"excelExport()\"\n      class=\"btn\"\n      [disabled]=\"\n        comparaData() ||\n        comparaDataInicial() ||\n        comparaDataFinal()\n      \"\n    >\n      Exportar Excel\n  </button>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataNF\">Data Inicial</label>\n        <input\n          class=\"form-control\"\n          id=\"dataInicial\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataInicial\"\n        >\n        <invalid-form-control\n          [show]=\"comparaDataInicial()\"\n          message=\"Data inicial não pode ser maior que data atual\"\n        >\n        </invalid-form-control>\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataFinal\">Data Final</label>\n        <input\n          class=\"form-control\"\n          id=\"dataFinal\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataFinal\"\n        >\n       <invalid-form-control\n          [show]=\"comparaData()\"\n          message=\"Data final deve ser maior que data inicial\"\n        >\n        </invalid-form-control>\n        <invalid-form-control\n          [show]=\"comparaDataFinal()\"\n          message=\"Data final não pode ser maior que data atual\"\n        >\n        </invalid-form-control>\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"empresas\">Empresas</label>\n        <input\n          class=\"form-control\"\n          id=\"empresas\"\n          type=\"text\"\n          formControlName=\"empresas\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"depositos\">Depósito</label>\n        <input\n          class=\"form-control\"\n          id=\"depositos\"\n          type=\"text\"\n          formControlName=\"depositos\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"proposta\">Proposta</label>\n        <input\n          class=\"form-control\"\n          id=\"proposta\"\n          type=\"text\"\n          formControlName=\"proposta\"\n        >\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataEncerramento\">Data Encerramento</label>\n        <input\n          class=\"form-control\"\n          id=\"dataEncerramento\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataEncerramento\"\n        >\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label for=\"cliente\">Cliente</label>\n        <input\n          class=\"form-control\"\n          id=\"cliente\"\n          type=\"text\"\n          formControlName=\"cliente\"\n        >\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<div class=\"table-responsive\" *ngIf=\"loadingDetalhesModal\">\n  <custom-table subtitleBorder=\"true\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th\n          nowrap\n          (click)=\"sortA('NM_EMPR')\"\n          class=\"hover text-center\"\n        >\n          Empresa\n          <span *ngIf=\"keyA == 'NM_EMPR'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_EMPR'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NM_DEPO')\"\n          class=\"hover text-center\"\n        >\n          Depósito\n          <span *ngIf=\"keyA == 'NM_DEPO'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_DEPO'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NR_PEDI')\"\n          class=\"hover text-center\"\n        >\n          Proposta\n          <span *ngIf=\"keyA == 'NR_PEDI'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NR_PEDI'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('DT_ENCE_PEDI')\"\n          class=\"hover text-center\"\n        >\n          Data encerramento\n          <span *ngIf=\"keyA == 'DT_ENCE_PEDI'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'DT_ENCE_PEDI'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('NM_CLIE')\"\n          class=\"hover text-center\"\n        >\n          Cliente\n          <span *ngIf=\"keyA == 'NM_CLIE'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'NM_CLIE'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <!--                   <th nowrap (click)=\"sortA('NM_VEND')\" class=\"hover text-center\">\n          Usuário\n          <span *ngIf=\"keyA == 'NM_VEND'\"><i [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n          <span *ngIf=\"keyA != 'NM_VEND'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th> -->\n        <th\n          nowrap\n          (click)=\"sortA('TT_ITEM_PEDI_TONE')\"\n          class=\"hover text-center\"\n          *ngIf=\"this.modal.unidadeMedida != 'TON'\"\n        >\n          Quantidade(Ton)\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI_TONE'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI_TONE'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n        <th\n          nowrap\n          (click)=\"sortA('TT_ITEM_PEDI')\"\n          class=\"hover text-center\"\n        >\n          Quantidade\n          <span *ngIf=\"keyA == 'TT_ITEM_PEDI'\"\n            ><i\n              [ngClass]=\"\n                reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"\n            ></i\n          ></span>\n          <span *ngIf=\"keyA != 'TT_ITEM_PEDI'\"\n            ><i [ngClass]=\"'fas fa-sort'\"></i\n          ></span>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr\n        *ngFor=\"\n          let item of dadosVendasPerdDetalhesModal\n            | orderBy: keyA:reverseA\n            | slice: beginA:endA;\n          let i = index\n        \"\n      >\n        <td nowrap>{{ item.NM_EMPR }}</td>\n        <td nowrap>{{ item.NM_DEPO }}</td>\n        <td nowrap class=\"text-center\">\n          {{ item.NR_PEDI | number: '0.0' }}\n        </td>\n        <td nowrap class=\"text-center\">\n          {{ item.DT_ENCE_PEDI | date: 'dd/MM/yyyy' }}\n        </td>\n        <td nowrap>{{ item.NM_CLIE }}</td>\n        <!--    <td nowrap>{{ item.NM_VEND }}</td> -->\n        <td nowrap class=\"text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n          {{ item.TT_ITEM_PEDI_TONE | number: '0.3' }}\n        </td>\n        <td nowrap class=\"text-right\">\n          {{this.modal.unidadeMedida != 'TON' ? (item.TT_ITEM_PEDI | number: '0.0') : (item.TT_ITEM_PEDI | number: '0.3')}}\n        </td>\n      </tr>\n      <tr>\n        <td nowrap class=\"bg-dark text-white\">TOTAL</td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <td nowrap class=\"bg-dark text-white text-center\"></td>\n        <!--  <td nowrap class=\"bg-dark text-white text-center\"></td> -->\n        <td nowrap class=\"bg-dark text-white text-right\" *ngIf=\"this.modal.unidadeMedida != 'TON'\">\n          {{\n            dadosVendasPerdDetalhesModalTotal.TT_ITEM_PEDI_TONE\n              | number: '0.3'\n          }}\n        </td>\n        <td nowrap class=\"bg-dark text-white text-right\">\n          {{this.modal.unidadeMedida != 'TON' ? (dadosVendasPerdDetalhesModalTotal.TT_ITEM_PEDI | number: '0.0') : (dadosVendasPerdDetalhesModalTotal.TT_ITEM_PEDI | number: '0.3')}}\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n</div>\n<div\n  class=\"mt-2 mb-2\"\n  *ngIf=\"dadosVendasPerdDetalhesModal?.length > itemsPerPage\"\n>\n  Exibindo {{ beginA + 1 }} a {{ endA }} de\n  {{ dadosVendasPerdDetalhesModal?.length }}\n  <div class=\"d-flex\">\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"dadosVendasPerdDetalhesModal?.length\"\n      (pageChanged)=\"onPageChangedA($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPageA\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\"\n    >\n    </pagination>\n  </div>\n</div>\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\n  <div class=\"spinner-border\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\n  style=\"height: 80%;\"\n  >\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "WXyx":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-realizadas/modal-vendas-realizadas.component.scss ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WXyx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLXZlbmRhcy1yZWFsaXphZGFzL21vZGFsLXZlbmRhcy1yZWFsaXphZGFzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "X0Wq":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/analise-compras/modal-nivel-estoque/modal-nivel-estoque.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X0Wq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"loadingDetalhesModal\">\n  <div class=\"row mb-2 mt-2 text-center\">\n    <div class=\"col-2\">\n      <p style=\"font-size: 14px;\">\n        <strong> CÓD. MATERIAL: </strong> {{ dadosDetalhesNivelEstoqueModal.ID_REFE_ERP | number: '0.0' }}\n      </p>\n    </div>\n    <div class=\"col-6\">\n      <p style=\"font-size: 14px;\">\n        <strong> DESCRIÇÃO: </strong> {{ dadosDetalhesNivelEstoqueModal.NM_MATE }}\n      </p>\n    </div>\n    <div class=\"col-2\">\n      <p style=\"font-size: 14px;\"><strong> LINHA: </strong>{{ dadosDetalhesNivelEstoqueModal.NM_LINH }} </p>\n    </div>\n    <div class=\"col-2\">\n      <p style=\"font-size: 14px;\"><strong> CLASSE: </strong>{{ dadosDetalhesNivelEstoqueModal.NM_CLAS }} </p>\n    </div>\n  </div>\n  <div class=\"row mb-2 mt-2 text-center\">\n    <div class=\"col-4\"><strong> ESTOQUE DIPONÍVEL: </strong> {{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_DISP_TONE ? dadosDetalhesNivelEstoqueModal.TT_ESTO_DISP_TONE : 0) | number: '0.3'}} </div>\n    <div class=\"col-4\"><strong> VENDAS REALIZADAS: </strong> {{ (dadosDetalhesNivelEstoqueModal.TT_VEND_REAL_TONE ? dadosDetalhesNivelEstoqueModal.TT_VEND_REAL_TONE : 0) | number: '0.3' }} </div>\n    <div class=\"col-4\"><strong> DIAS ANALIZADOS: </strong>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_PERI_ANAL ? dadosDetalhesNivelEstoqueModal.NR_DIAS_PERI_ANAL : 0) | number: '0.0' }}</div>\n  </div>\n  <div class=\"table-responsive mt-4\">\n    <custom-table>\n      <ng-template #thead let-thead>\n        <tr>\n          <th>Tipo</th>\n          <th>Volume</th>\n          <th>Giro</th>\n          <th>Diferença</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr>\n          <td><i class=\"fas fa-circle text-danger\"></i> Mínimo</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_MINI ? dadosDetalhesNivelEstoqueModal.TT_ESTO_MINI : 0) | number: '0.3'  }}</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MINI ? dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MINI : 0) | number: '0.0'  }}</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MINI ? dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MINI: 0) | number: '0.3'  }}</td>\n  \n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-warning\"></i> Médio</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_SEGU ? dadosDetalhesNivelEstoqueModal.TT_ESTO_SEGU : 0)| number: '0.3'  }}</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_SEGU ? dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_SEGU : 0)| number: '0.0'  }}</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_SEGU ? dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_SEGU : 0)| number: '0.3'  }}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-success\"></i> Máximo</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_ESTO_MAXI ? dadosDetalhesNivelEstoqueModal.TT_ESTO_MAXI : 0) | number: '0.3'  }}</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MAXI ? dadosDetalhesNivelEstoqueModal.NR_DIAS_GIRO_ESTO_MAXI : 0) | number: '0.0'  }}</td>\n          <td>{{ (dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MAXI ? dadosDetalhesNivelEstoqueModal.TT_DIFE_ESTO_DISP_MAXI : 0) | number: '0.3'  }}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  <div class=\"table-responsive mt-4\">\n    <custom-table>\n      <ng-template #thead let-thead>\n        <tr>\n          <th>Código Correspondente</th>\n          <th>Descrição</th>\n          <th>Sul Fluminense</th>\n          <th>Avançado</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr>\n          <td>{{dadosDetalhesNivelEstoqueModal.ID_REFE_CORR_ERP | number: '0.0'}}</td>\n          <td>{{dadosDetalhesNivelEstoqueModal.DS_MATE_REFE_CORR_ERP}}</td>\n          <td>{{(dadosDetalhesNivelEstoqueModal.TT_ESTO_SUL_FLUM_TONE ? dadosDetalhesNivelEstoqueModal.TT_ESTO_SUL_FLUM_TONE : 0) | number: '0.3'}}</td>\n          <td>{{(dadosDetalhesNivelEstoqueModal.TT_ESTO_AVAN_TONE ? dadosDetalhesNivelEstoqueModal.TT_ESTO_AVAN_TONE : 0) | number: '0.3'}}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n</div>\n<div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"loaderBody\">\n  <div class=\"spinner-border\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div\n  *ngIf=\"noResultModal && !loadingDetalhesModal\"\n  class=\"text-center d-flex justify-content-center align-items-center p-5\"\n  style=\"height: 80%;\"\n  >\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "gF9Z":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasRoutingModule */

    /***/
    function gF9Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasRoutingModule", function () {
        return AbastecimentoMonitoresAnaliseComprasRoutingModule;
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


      var _analise_compras_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./analise-compras.component */
      "GRp8");

      var routes = [{
        path: '',
        component: _analise_compras_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoMonitoresAnaliseComprasComponent"]
      }];

      var AbastecimentoMonitoresAnaliseComprasRoutingModule = function AbastecimentoMonitoresAnaliseComprasRoutingModule() {
        _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasRoutingModule);
      };

      AbastecimentoMonitoresAnaliseComprasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoMonitoresAnaliseComprasRoutingModule);
      /***/
    },

    /***/
    "ijAw":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-perdidas/modal-vendas-perdidas.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent */

    /***/
    function ijAw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent", function () {
        return AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_vendas_perdidas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-vendas-perdidas.component.html */
      "VQTc");
      /* harmony import */


      var _modal_vendas_perdidas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-vendas-perdidas.component.scss */
      "sEmW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../analise-compras.service */
      "yPm9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]); //Converte rota em base64

      var AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent = /*#__PURE__*/function () {
        /* dados do usuário */
        function AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent(formBuilder, localeService, routerService, activatedRoute, dateService, service, pnotifyService) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent);

          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.service = service;
          this.pnotifyService = pnotifyService;
          this.loadingDetalhesModal = false;
          this.noResultModal = false;
          this.loaderBody = false;
          this.compararDataFinal = false;
          this.compararDataInicial = false;
          this.compararDataFinalAtual = false;
          this.empresas = [];
          this.depositos = [];
          this.proposta = [];
          this.dataEntrada = [];
          this.dataEncerramento = [];
          this.cliente = [];
          this.modal = [];
          this.dadosExcel = [];
          this.dadosVendasPerdDetalhesModalFull = [];
          this.dadosVendasPerdDetalhesModal = [];
          this.dadosVendasPerdDetalhesModalTotal = [];
          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_EMPR';
          /* PaginationModal*/

          this.itemsPerPage = 15;
          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          /* dados do usuário */

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
            dataInicial: [null],
            dataFinal: [null],
            empresas: [null],
            depositos: [null],
            proposta: [null],
            dataEncerramento: [null],
            cliente: [null]
          });
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.codMaterial = this.item.ID_REFE_ERP;
            this.modal.descMaterial = this.item.NM_MATE;
            this.modal.unidadeMedida = this.item.NM_UNID_MEDI;
            this.resetValuesForm();
            this.setParamsVendasPerdidas();
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get('dataInicial').reset();
            this.form.get('dataFinal').reset();
            this.form.get('empresas').reset();
            this.form.get('depositos').reset();
            this.form.get('proposta').reset();
            this.form.get('dataEncerramento').reset();
            this.form.get('cliente').reset();
          }
        }, {
          key: "setParamsVendasPerdidas",
          value: function setParamsVendasPerdidas() {
            var queryParams = this.routerService.getBase64UrlParams(this.activatedRoute.snapshot.queryParams);
            var dataInicial = queryParams["dataInicial"];
            var dataFinal = queryParams["dataFinal"];
            var dataInicialParam = dataInicial;
            var dataFinalParam = dataFinal;
            var params = [];
            var tipoVisualizacao = queryParams["tipoVisualizacao"];
            var idMaterial = this.item["ID_MATE"];
            var idMesAno = this.idMesAno;

            if (tipoVisualizacao == 'S') {
              this.idEmpresa = queryParams["empresas"];
              this.idDeposito = queryParams["depositos"];
            } else if (tipoVisualizacao == 'A') {
              this.idEmpresa = "";
              this.idDeposito = this.item["ID_DEPO"];
            }

            if (this.idMesAno) {
              dataInicialParam = "";
              dataFinalParam = "";
              var mesAno = this.idMesAno.replace('_', '/01/');
              var date = new Date(mesAno);
              var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
              var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
              var primeiroDiaC = this.setDateValid(primeiroDia);
              var ultimoDiaC = this.setDateValid(ultimoDia);
              primeiroDiaC = new Date(primeiroDiaC.split('-').reverse().join('-'));
              ultimoDiaC = new Date(ultimoDiaC.split('-').reverse().join('-'));
              var dataInicialC = new Date(dataInicial.split('-').reverse().join('-'));
              var dataFinalC = new Date(dataFinal.split('-').reverse().join('-'));

              if (primeiroDiaC > dataInicialC) {
                dataInicial = this.setDateValid(primeiroDia);
              }

              if (ultimoDiaC < dataFinalC) {
                dataFinal = this.setDateValid(ultimoDia);
              }
            }

            params = {
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              DT_INIC: dataInicial ? dataInicial : "",
              DT_FINA: dataFinal ? dataFinal : "",
              NM_MES_ANO: "",
              ID_MATE: idMaterial ? idMaterial : "",
              NM_EMPR: "",
              NM_DEPO: "",
              NR_PROP: "",
              DT_ENCE_PROP: "",
              NM_CLIE: ""
            };
            this.getVendasPerdidasDetalhes(params);
            this.form.get("dataInicial").setValue(dataInicial);
            this.form.get("dataFinal").setValue(dataFinal);
          }
        }, {
          key: "getVendasPerdidasDetalhes",
          value: function getVendasPerdidasDetalhes(params) {
            var _this28 = this;

            this.dadosVendasPerdDetalhesModalFull = [];
            this.dadosVendasPerdDetalhesModal = [];
            this.dadosVendasPerdDetalhesModalTotal = [];
            this.loaderBody = true; //this.loadingDetalhesVendPerd = false;

            this.loadingDetalhesModal = false;
            this.noResultModal = false;
            this.service.getVendasPerdidasDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              return _this28.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this28.dadosVendasPerdDetalhesModalFull = res['body']['result'];
                  _this28.dadosVendasPerdDetalhesModalTotal = _this28.dadosVendasPerdDetalhesModalFull.shift();
                  _this28.dadosVendasPerdDetalhesModal = _this28.dadosVendasPerdDetalhesModalFull; //this.loadingDetalhesVendPerd = true;

                  _this28.noResultModal = false;
                  _this28.loadingDetalhesModal = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this28.loadingDetalhesModal = false;
                  _this28.noResultModal = true;

                  _this28.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this28.pnotifyService.error('Erro ao Vendas Perdidadas Detalhes');
            });
          }
        }, {
          key: "getVendasPerdidasDetalhesExcel",
          value: function getVendasPerdidasDetalhesExcel(params) {
            var _this29 = this;

            this.dadosExcel = [];
            this.service.getVendasPerdidasDetalhes(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this29.dadosExcel = res['body']['result'];

                  _this29.pnotifyService.success(_this29.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this29.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this29.pnotifyService.error('Erro ao detalhes de Carteira');
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            var dataEncerramento = this.setDateValid(this.form.value['dataEncerramento']);
            var params = {
              DT_INIC: dataInicial ? dataInicial : "",
              DT_FINA: dataFinal ? dataFinal : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_PROP: this.form.value['proposta'] ? this.form.value['proposta'] : "",
              DT_ENCE_PROP: dataEncerramento ? dataEncerramento : "",
              NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
              IN_GERA_RELA_EXCE: "",
              ID_USUA: ""
            };
            this.getVendasPerdidasDetalhes(params);
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            var dataEncerramento = this.setDateValid(this.form.value['dataEncerramento']);
            var params = {
              DT_INIC: dataInicial ? dataInicial : "",
              DT_FINA: dataFinal ? dataFinal : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              NM_MES_ANO: "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NR_PROP: this.form.value['proposta'] ? this.form.value['proposta'] : "",
              DT_ENCE_PROP: dataEncerramento ? dataEncerramento : "",
              NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: this.idUsuario
            };
            this.getVendasPerdidasDetalhesExcel(params);
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
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
              this.compararDataFinal = false;
              return false;
            } else if (dataInicial > dataFinal) {
              this.compararDataFinal = true;
              return this.compararDataFinal;
            }
          }
        }, {
          key: "comparaDataFinal",
          value: function comparaDataFinal() {
            var now = new Date();

            if (!this.form.get('dataFinal').value) {
              this.compararDataFinalAtual = false;
              return false;
            } else if (this.form.get('dataFinal').value > now) {
              this.compararDataFinalAtual = true;
              return this.compararDataFinalAtual;
            }
          }
        }, {
          key: "comparaDataInicial",
          value: function comparaDataInicial() {
            var now = new Date();

            if (!this.form.get('dataInicial').value) {
              this.compararDataInicial = false;
              return false;
            } else if (this.form.get('dataInicial').value > now) {
              this.compararDataInicial = true;
              return this.compararDataInicial;
            }
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent;
      }();

      AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idMesAno: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-vendas-perdidas',
        template: _raw_loader_modal_vendas_perdidas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_vendas_perdidas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]])], AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent);
      /***/
    },

    /***/
    "njR8":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasModule */

    /***/
    function njR8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasModule", function () {
        return AbastecimentoMonitoresAnaliseComprasModule;
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


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _analise_compras_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./analise-compras-routing.module */
      "gF9Z");
      /* harmony import */


      var _analise_compras_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./analise-compras.component */
      "GRp8");
      /* harmony import */


      var _modal_estoque_suspenso_modal_estoque_suspenso_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modal-estoque-suspenso/modal-estoque-suspenso.component */
      "PxAZ");
      /* harmony import */


      var _modal_estoque_comprometido_modal_estoque_comprometido_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modal-estoque-comprometido/modal-estoque-comprometido.component */
      "taCn");
      /* harmony import */


      var _modal_vendas_perdidas_modal_vendas_perdidas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modal-vendas-perdidas/modal-vendas-perdidas.component */
      "ijAw");
      /* harmony import */


      var _modal_vendas_realizadas_modal_vendas_realizadas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./modal-vendas-realizadas/modal-vendas-realizadas.component */
      "0opu");
      /* harmony import */


      var _modal_carteira_modal_carteira_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modal-carteira/modal-carteira.component */
      "0iJp");
      /* harmony import */


      var _modal_nivel_estoque_modal_nivel_estoque_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./modal-nivel-estoque/modal-nivel-estoque.component */
      "JtkM");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__);
      /* Localização Brasil */


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default.a);
      /* Localização Brasil */

      var AbastecimentoMonitoresAnaliseComprasModule = function AbastecimentoMonitoresAnaliseComprasModule() {
        _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasModule);
      };

      AbastecimentoMonitoresAnaliseComprasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_analise_compras_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoMonitoresAnaliseComprasComponent"], _modal_estoque_suspenso_modal_estoque_suspenso_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoMonitoresAnaliseComprasModalEstoqueSuspensoComponent"], _modal_estoque_comprometido_modal_estoque_comprometido_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent"], _modal_vendas_perdidas_modal_vendas_perdidas_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoMonitoresAnaliseComprasModalVendasPerdidasComponent"], _modal_vendas_realizadas_modal_vendas_realizadas_component__WEBPACK_IMPORTED_MODULE_16__["AbastecimentoMonitoresAnaliseComprasModalVendasRealizadasComponent"], _modal_carteira_modal_carteira_component__WEBPACK_IMPORTED_MODULE_17__["AbastecimentoMonitoresAnaliseComprasModalCarteiraComponent"], _modal_nivel_estoque_modal_nivel_estoque_component__WEBPACK_IMPORTED_MODULE_18__["AbastecimentoMonitoresAnaliseComprasModalNivelEstoqueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _analise_compras_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoMonitoresAnaliseComprasModule);
      /***/
    },

    /***/
    "o4Lb":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o4Lb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.btn-xm {\n  padding: 0.05rem 0.15rem;\n  font-size: 0.7rem;\n  border-radius: 0.2rem;\n}\n\n.btn-open-modal:disabled {\n  color: #fff;\n  background-color: #66c0ce;\n  border-color: #66c0ce;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9hbmFsaXNlLWNvbXByYXMvYW5hbGlzZS1jb21wcmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Msd0JBQUE7RUFDRyxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL2FuYWxpc2UtY29tcHJhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4uYnRuLXhtIHtcblx0cGFkZGluZzogMC4wNXJlbSAwLjE1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLmJ0bi1vcGVuLW1vZGFsOmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmMwY2U7XG4gIGJvcmRlci1jb2xvcjogIzY2YzBjZTtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */";
      /***/
    },

    /***/
    "sEmW":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-vendas-perdidas/modal-vendas-perdidas.component.scss ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sEmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvYW5hbGlzZS1jb21wcmFzL21vZGFsLXZlbmRhcy1wZXJkaWRhcy9tb2RhbC12ZW5kYXMtcGVyZGlkYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "taCn":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/modal-estoque-comprometido/modal-estoque-comprometido.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent */

    /***/
    function taCn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent", function () {
        return AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_estoque_comprometido_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-estoque-comprometido.component.html */
      "O4ok");
      /* harmony import */


      var _modal_estoque_comprometido_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-estoque-comprometido.component.scss */
      "BD19");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../analise-compras.service */
      "yPm9");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);

      var AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent = /*#__PURE__*/function () {
        /* dados do usuário */
        function AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent(formBuilder, dateService, localeService, service, pnotifyService) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent);

          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.localeService = localeService;
          this.service = service;
          this.pnotifyService = pnotifyService;
          this.loaderBody = false;
          this.loadingDetalhesModal = false;
          this.noResultModal = false;
          this.estoqueComprometidoPedidoVendasEmpty = false;
          this.estoqueComprometidoPlanoCorteEmpty = false;
          this.modal = [];
          this.empresas = [];
          this.depositos = [];
          this.numero = [];
          this.itemFiltro = [];
          this.data = [];
          this.cliente = [];
          this.vendedor = [];
          this.idEmpresa = '';
          this.idDeposito = '';
          this.dadosEstoqueComprometidoPedidoVendas = [];
          this.dadosEstoqueComprometidoPedidoVendaslFull = [];
          this.dadosEstoqueComprometidoPedidoVendasTotal = [];
          this.dadosEstoqueComprometidoPlanoCorte = [];
          this.dadosEstoqueComprometidoPlanoCorteFull = [];
          this.dadosEstoqueComprometidoPlanoCorteTotal = [];
          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_EMPR';
          this.reverseB = false;
          this.keyB = 'NM_EMPR';
          this.reverseC = false;
          this.keyC = 'NM_EMPR';
          /* PaginationModal*/

          this.itemsPerPage = 15;
          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          this.currentPageB = 1;
          this.beginB = 0;
          this.endB = 15;
          this.currentPageC = 1;
          this.beginC = 0;
          this.endC = 15;
          /* dados do usuário */

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
            empresas: [null],
            depositos: [null],
            numero: [null],
            itemFiltro: [null],
            data: [null],
            cliente: [null],
            vendedor: [null]
          });
        }

        _createClass(AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.codMaterial = this.item.ID_REFE_ERP;
            this.modal.descMaterial = this.item.NM_MATE;
            this.idEmpresa = this.item.ID_EMPR ? this.item.ID_EMPR : "";
            this.idDeposito = this.item.ID_DEPO ? this.item.ID_DEPO : "";
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var dataEmissao = this.setDateValid(this.form.value['data']);
            var params = {
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
              NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
              NR_PEDI: this.form.value['numero'] ? this.form.value['numero'] : "",
              NR_ITEM_PEDI: this.form.value['itemFiltro'] ? this.form.value['itemFiltro'] : "",
              DT_EMIS: dataEmissao ? dataEmissao : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NR_PAGE_INIC: "",
              TT_REGI_PAGI: "",
              ORDE_BY: "",
              ORDE_TYPE: "",
              IN_GERA_RELA_EXCE: "",
              ID_USUA: ""
            };
            this.getEstoqueComprometido(params);
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataEmissao = this.setDateValid(this.form.value['data']);
            var params = {
              NM_EMPR: this.form.value['empresas'] ? this.form.value['empresas'] : "",
              NM_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              NM_CLIE: this.form.value['cliente'] ? this.form.value['cliente'] : "",
              NM_VEND: this.form.value['vendedor'] ? this.form.value['vendedor'] : "",
              NR_PEDI: this.form.value['numero'] ? this.form.value['numero'] : "",
              NR_ITEM_PEDI: this.form.value['itemFiltro'] ? this.form.value['itemFiltro'] : "",
              DT_EMIS: dataEmissao ? dataEmissao : "",
              ID_EMPR: this.idEmpresa ? this.idEmpresa : "",
              ID_DEPO: this.idDeposito ? this.idDeposito : "",
              ID_MATE: this.item["ID_MATE"] ? this.item["ID_MATE"] : "",
              NR_PAGE_INIC: "",
              TT_REGI_PAGI: "",
              ORDE_BY: "",
              ORDE_TYPE: "",
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: this.idUsuario
            };
            this.getEstoqueComprometidoExcel(params);
          }
        }, {
          key: "getEstoqueComprometido",
          value: function getEstoqueComprometido(params) {
            var _this30 = this;

            this.dadosEstoqueComprometidoPedidoVendaslFull = [];
            this.dadosEstoqueComprometidoPedidoVendas = [];
            this.dadosEstoqueComprometidoPedidoVendasTotal = [];
            this.dadosEstoqueComprometidoPlanoCorteFull = [];
            this.dadosEstoqueComprometidoPlanoCorte = [];
            this.dadosEstoqueComprometidoPlanoCorteTotal = [];
            this.loaderBody = true;
            this.loadingDetalhesModal = false;
            this.noResultModal = false;
            this.estoqueComprometidoPedidoVendasEmpty = false;
            this.estoqueComprometidoPlanoCorteEmpty = false;
            this.service.getEstoqueComprometidoPedidoVenda(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this30.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this30.dadosEstoqueComprometidoPedidoVendaslFull = res['body']['result'];
                  _this30.dadosEstoqueComprometidoPedidoVendasTotal = _this30.dadosEstoqueComprometidoPedidoVendaslFull.shift();
                  _this30.dadosEstoqueComprometidoPedidoVendas = _this30.dadosEstoqueComprometidoPedidoVendaslFull;
                  _this30.estoqueComprometidoPedidoVendasEmpty = false;
                  _this30.loadingDetalhesModal = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this30.loadingDetalhesModal = true;
                  _this30.estoqueComprometidoPedidoVendasEmpty = true;

                  _this30.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this30.pnotifyService.error('Erro ao carregar Estoque Comprometido');

              _this30.loadingDetalhesModal = true;
              _this30.estoqueComprometidoPedidoVendasEmpty = true;
            });
            this.service.getEstoqueComprometidoPlanoCorte(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this30.loaderBody = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this30.dadosEstoqueComprometidoPlanoCorteFull = res['body']['result'];
                  _this30.dadosEstoqueComprometidoPlanoCorteTotal = _this30.dadosEstoqueComprometidoPlanoCorteFull.shift();
                  _this30.dadosEstoqueComprometidoPlanoCorte = _this30.dadosEstoqueComprometidoPlanoCorteFull;
                  _this30.estoqueComprometidoPlanoCorteEmpty = false;
                  _this30.loadingDetalhesModal = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this30.loadingDetalhesModal = true;
                  _this30.estoqueComprometidoPlanoCorteEmpty = true;

                  _this30.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this30.pnotifyService.error('Erro ao carregar Estoque Comprometido');

              _this30.loadingDetalhesModal = true;
              _this30.estoqueComprometidoPlanoCorteEmpty = true;
            });
          }
        }, {
          key: "getEstoqueComprometidoExcel",
          value: function getEstoqueComprometidoExcel(params) {
            var _this31 = this;

            this.service.getEstoqueComprometidoPedidoVenda(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this31.pnotifyService.success(res['body']['result']);
                } else if (res['body']['responseCode'] === 404) {
                  _this31.pnotifyService.notice(res['body']['result']);
                }
              }
            }, function (error) {
              _this31.pnotifyService.error('Erro ao gerar Excel - Estoque Comprometido');
            });
            this.service.getEstoqueComprometidoPlanoCorte(params).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this31.pnotifyService.success(res['body']['result']);
                } else if (res['body']['responseCode'] === 404) {
                  _this31.pnotifyService.notice(res['body']['result']);
                }
              }
            }, function (error) {
              _this31.pnotifyService.error('Erro ao gerar Excel - Estoque Comprometido');
            });
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
        }, {
          key: "sortB",
          value: function sortB(keyB) {
            this.keyB = keyB;
            this.reverseB = !this.reverseB;
          }
        }, {
          key: "sortC",
          value: function sortC(keyC) {
            this.keyC = keyC;
            this.reverseC = !this.reverseC;
          }
          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }, {
          key: "onPageChangedB",
          value: function onPageChangedB(event) {
            this.beginB = (event.page - 1) * event.itemsPerPage;
            this.endB = event.page * event.itemsPerPage;
          }
        }, {
          key: "onPageChangedC",
          value: function onPageChangedC(event) {
            this.beginC = (event.page - 1) * event.itemsPerPage;
            this.endC = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent;
      }();

      AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }];
      };

      AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-monitores-analise-compras-modal-estoque-comprometido',
        template: _raw_loader_modal_estoque_comprometido_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_estoque_comprometido_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _analise_compras_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresAnaliseComprasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])], AbastecimentoMonitoresAnaliseCompraModalEstoqueComprometidoComponent);
      /***/
    },

    /***/
    "yPm9":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/analise-compras/analise-compras.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresAnaliseComprasService */

    /***/
    function yPm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresAnaliseComprasService", function () {
        return AbastecimentoMonitoresAnaliseComprasService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AbastecimentoMonitoresAnaliseComprasService = /*#__PURE__*/function () {
        function AbastecimentoMonitoresAnaliseComprasService(httpClient) {
          _classCallCheck(this, AbastecimentoMonitoresAnaliseComprasService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoMonitoresAnaliseComprasService, [{
          key: "getDepositosAssociados",
          value: function getDepositosAssociados(idLinhas, idClasses, idTipoMaterial, idSituacao) {
            var linhas;
            if (!idLinhas) linhas = null;else linhas = idLinhas.toString();
            if (!idClasses) idClasses = "";
            if (!idTipoMaterial) idTipoMaterial = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/depositos-associados-materiais"), {
              params: {
                ID_CLAS: idClasses.toString(),
                ID_LINH: linhas,
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao,
                IN_SELE_COMB: "1"
              },
              observe: "response"
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(idsEmpresa, idSituacao) {
            if (!idsEmpresa) idsEmpresa = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/depositos"), {
              params: {
                ID_EMPR: idsEmpresa.toString(),
                IN_STAT: idSituacao
              },
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
        }, {
          key: "getLinhas",
          value: function getLinhas(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas(descricaoLinhas, idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/sub-linhas"), {
              params: {
                ID_LINH: descricaoLinhas.toString(),
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(descricaoLinhas, idSubLinha, idSituacao) {
            if (!idSubLinha) idSubLinha = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: {
                ID_LINH: descricaoLinhas.toString(),
                ID_SUB_LINH: idSubLinha,
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(idClasses, idTipoMaterial, idSituacao) {
            if (!idClasses) idClasses = "";
            if (!idTipoMaterial) idTipoMaterial = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/materiais"), {
              params: {
                ID_CLAS: idClasses.toString(),
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getTiposNiveisEstoque",
          value: function getTiposNiveisEstoque(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/tipos-niveis-estoque"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/tipos-material"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getInfAdicionais",
          value: function getInfAdicionais() {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/informacoes-adicionais-atividade/1"), {
              observe: "response"
            });
          }
        }, {
          key: "getAnaliseCompras",
          value: function getAnaliseCompras(params) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;

            var idEmpresas = (_a = params["empresas"]) !== null && _a !== void 0 ? _a : "";
            var idDeposito = (_b = params["depositos"]) !== null && _b !== void 0 ? _b : "";
            var idNivelEstoque = (_c = params["nivelEstoque"]) !== null && _c !== void 0 ? _c : "";
            var idTipoMaterial = (_d = params["tipoMaterial"]) !== null && _d !== void 0 ? _d : "";
            var idSituacao = params["situacao"];
            var idLinha = (_e = params["linha"]) !== null && _e !== void 0 ? _e : "";
            var idSubLinha = (_f = params["subLinha"]) !== null && _f !== void 0 ? _f : "";
            var idClasse = (_g = params["classe"]) !== null && _g !== void 0 ? _g : "";
            var idMaterial = (_h = params["material"]) !== null && _h !== void 0 ? _h : "";
            var paramData = (_j = params["paramData"]) !== null && _j !== void 0 ? _j : "";
            var dataInicial = (_k = params["dataInicial"]) !== null && _k !== void 0 ? _k : "";
            var dataFinal = (_l = params["dataFinal"]) !== null && _l !== void 0 ? _l : "";
            var tipoVisualizacao = (_m = params["tipoVisualizacao"]) !== null && _m !== void 0 ? _m : "";
            var idInfAdicionais = (_o = params["infAdicionais"]) !== null && _o !== void 0 ? _o : "";
            var qtItensPagina = (_p = params["qtItensPagina"]) !== null && _p !== void 0 ? _p : "";
            var pagina = (_q = params["pagina"]) !== null && _q !== void 0 ? _q : "";
            var relatorioExcel = (_r = params["relatorioExcel"]) !== null && _r !== void 0 ? _r : "";
            var idUsuario = (_s = params["idUsuario"]) !== null && _s !== void 0 ? _s : "";
            var orderType = (_t = params["orderType"]) !== null && _t !== void 0 ? _t : "";
            var orderBy = (_u = params["orderBy"]) !== null && _u !== void 0 ? _u : "";
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/analise-compras"), {
              params: {
                ID_EMPR: idEmpresas.toString(),
                ID_DEPO: idDeposito.toString(),
                ID_APOI_NIVE_ESTO: idNivelEstoque,
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao,
                ID_LINH: idLinha,
                ID_SUB_LINH: idSubLinha,
                ID_CLAS: idClasse.toString(),
                ID_MATE: idMaterial.toString(),

                /* paramData, */
                DT_INIC_VEND: dataInicial,
                DT_FINA_VEND: dataFinal,
                TP_VISU_PAIN: tipoVisualizacao,
                ID_INFO_ADIC_ATIV: idInfAdicionais.toString(),
                NR_PAGE_INIC: pagina,
                TT_REGI_PAGI: qtItensPagina,
                IN_GERA_RELA_EXCE: relatorioExcel,
                ID_USUA: idUsuario,
                ORDE_TYPE: orderType,
                ORDE_BY: orderBy
              },
              observe: "response"
            });
          }
        }, {
          key: "getVendasRealizadasDetalhes",
          value: function getVendasRealizadasDetalhes(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/vendas-realizadas/detalhes"), {
              params: {
                ID_EMPR: params["ID_EMPR"].toString(),
                ID_DEPO: params["ID_DEPO"].toString(),
                DT_INIC: params["DT_INIC"],
                DT_FINA: params["DT_FINA"],
                NM_MES_ANO: params["NM_MES_ANO"],
                ID_MATE: params["ID_MATE"],
                NM_EMPR: params["NM_EMPR"],
                NM_DEPO: params["NM_DEPO"],
                NR_NOTA_FISC: params["NR_NOTA_FISC"],
                DT_NOTA_FISC: params["DT_NOTA_FISC"],
                NM_CLIE: params["NM_CLIE"],
                NM_VEND: params["NM_VEND"],
                IN_GERA_RELA_EXCE: params["IN_GERA_RELA_EXCE"],
                ID_USUA: params["ID_USUA"],
                NR_PAGE_INIC: '',
                TT_REGI_PAGI: '',
                ORDE_TYPE: '',
                ORDER_BY: ''
              },
              observe: "response"
            });
          }
        }, {
          key: "getVendasPerdidasDetalhes",
          value: function getVendasPerdidasDetalhes(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/vendas-perdidas/detalhes"), {
              params: {
                ID_EMPR: params["ID_EMPR"].toString(),
                ID_DEPO: params["ID_DEPO"].toString(),
                DT_INIC: params["DT_INIC"],
                DT_FINA: params["DT_FINA"],
                NM_MES_ANO: params["NM_MES_ANO"],
                ID_MATE: params["ID_MATE"],
                NM_EMPR: params["NM_EMPR"],
                NM_DEPO: params["NM_DEPO"],
                NR_PROP: params["NR_PROP"],
                DT_ENCE_PROP: params["DT_ENCE_PROP"],
                NM_CLIE: params["NM_CLIE"],
                IN_DATA_ENCE_PEDI: '1',
                ID_MOTI_VEND_PERD_REFE_ERP: '4',
                IN_GERA_RELA_EXCE: params["IN_GERA_RELA_EXCE"],
                ID_USUA: params["ID_USUA"],
                NR_PAGE_INIC: '',
                TT_REGI_PAGI: '',
                ORDE_TYPE: '',
                ORDER_BY: ''
              },
              observe: "response"
            });
          }
        }, {
          key: "getCarteiraDetalhes",
          value: function getCarteiraDetalhes(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/carteira-em-aberto/detalhes"), {
              params: {
                ID_EMPR: params["ID_EMPR"].toString(),
                ID_DEPO: params["ID_DEPO"].toString(),
                NM_MES_ANO: params["NM_MES_ANO"],
                ID_MATE: params["ID_MATE"],
                NM_EMPR: params["NM_EMPR"],
                NM_DEPO: params["NM_DEPO"],
                NR_PEDI_ORIG: params["NR_PEDI_ORIG"],
                DT_PEDI_ORIG: params["DT_PEDI_ORIG"],
                NR_PEDI_REME: params["NR_PEDI_REME"],
                DT_PREV_ENTR: params["DT_PREV_ENTR"],
                NM_FORN: params["NM_FORN"],
                IN_GERA_RELA_EXCE: params["IN_GERA_RELA_EXCE"],
                ID_USUA: params["ID_USUA"],
                NR_PAGE_INIC: '',
                TT_REGI_PAGI: '',
                ORDE_TYPE: '',
                ORDER_BY: ''
              },
              observe: "response"
            });
          }
        }, {
          key: "getNiveisEstoqueDetalhes",
          value: function getNiveisEstoqueDetalhes(params) {
            var _a, _b, _c, _d;

            var idMaterial = (_a = params["idMaterial"]) !== null && _a !== void 0 ? _a : "";
            var idDeposito = (_b = params["idDeposito"]) !== null && _b !== void 0 ? _b : "";
            var dataInicial = (_c = params["dataInicial"]) !== null && _c !== void 0 ? _c : "";
            var dataFinal = (_d = params["dataFinal"]) !== null && _d !== void 0 ? _d : "";
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/situacao-material-deposito/detalhes"), {
              params: {
                ID_MATE: idMaterial,
                ID_DEPO: idDeposito,
                DT_INIC: dataInicial,
                DT_FINA: dataFinal
              },
              observe: "response"
            });
          }
        }, {
          key: "getEstoqueComprometidoPedidoVenda",
          value: function getEstoqueComprometidoPedidoVenda(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/comprometido-pedido-venda/detalhes"), {
              params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NM_CLIE: params['NM_CLIE'],
                NM_VEND: params['NM_VEND'],
                NR_PEDI: params['NR_PEDI'],
                NR_ITEM_PEDI: params['NR_ITEM_PEDI'],
                DT_EMIS: params['DT_EMIS'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
              },
              observe: "response"
            });
          }
        }, {
          key: "getEstoqueComprometidoPlanoCorte",
          value: function getEstoqueComprometidoPlanoCorte(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/comprometido-plano-corte/detalhes"), {
              params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NM_CLIE: params['NM_CLIE'],
                NM_VEND: params['NM_VEND'],
                NR_PEDI: params['NR_PEDI'],
                NR_ITEM_PEDI: params['NR_ITEM_PEDI'],
                DT_EMIS: params['DT_EMIS'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
              },
              observe: "response"
            });
          }
        }, {
          key: "getEstoqueSupensoEntrada",
          value: function getEstoqueSupensoEntrada(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/suspenso-entrada/detalhes"), {
              params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NR_NOTA_FISC: params['NR_NOTA_FISC'],
                DS_MOTI: params['DS_MOTI'],
                DT_ENTR: params['DT_ENTR'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
              },
              observe: "response"
            });
          }
        }, {
          key: "getEstoqueSupensoGeral",
          value: function getEstoqueSupensoGeral(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/estoque/suspenso-geral/detalhes"), {
              params: {
                NM_EMPR: params['NM_EMPR'],
                NM_DEPO: params['NM_DEPO'],
                NR_NOTA_FISC: params['NR_NOTA_FISC'],
                DS_MOTI: params['DS_MOTI'],
                DT_ENTR: params['DT_ENTR'],
                ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'],
                ID_MATE: params['ID_MATE'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
              },
              observe: "response"
            });
          }
        }]);

        return AbastecimentoMonitoresAnaliseComprasService;
      }();

      AbastecimentoMonitoresAnaliseComprasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AbastecimentoMonitoresAnaliseComprasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AbastecimentoMonitoresAnaliseComprasService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=analise-compras-analise-compras-module-es5.js.map