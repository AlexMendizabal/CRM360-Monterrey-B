(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parametros-gerais-estoque-parametros-gerais-estoque-module"], {
    /***/
    "+xEY":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/detalhes-materiais/detalhes-materiais.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent */

    /***/
    function xEY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent", function () {
        return AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes-materiais.component.html */
      "7ATi");
      /* harmony import */


      var _detalhes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes-materiais.component.scss */
      "6r7s");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../parametros-gerais-estoque.service */
      "atLl");

      var AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent = /*#__PURE__*/function () {
        /* CurrentMask */
        function AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent(activatedRoute, formBuilder, pnotifyService, localeService, routerService, titleService, confirmModalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.localeService = localeService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.loading = false;
          this.loadingLogs = false;
          this.noResult = false;
          this.noResultLogs = false;
          this.abledEdit = false;
          this.loaderModal = false;
          this.colsNivelEstoque = false;
          this.data = [];
          this.dataFull = [];
          this.dataTotal = [];
          this.dataLogs = [];
          this.tiposNiveisEstoque = [];
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.headerModalPeriodo = '';
          this.headerModalMediaVendas = '';
          this.headerModalEstoqueDisponivel = '';
          this.enableSave = false;
          this.minimoBool = false;
          this.medioBool = false;
          this.maximoBool = false;
          this.enableSaveModal = false;
          this.minimoBoolModal = false;
          this.medioBoolModal = false;
          this.maximoBoolModal = false;
          /* CurrentyMask para toneladas */

          this.ton = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 3
          };
          this.boolModalLogs = false;
          this.breadCrumbTree = [];
          this.dataMediaVendas = [];
          this.situations = [{
            ID: '0',
            NM_SITU: 'Inativo'
          }, {
            ID: '1',
            NM_SITU: 'Ativo'
          }];
          /* Ordenação */

          this.reverse = false;
          this.key = 'NM_EMPR';
          /* Ordenação */

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_CLAS';
          /* Ordenação modal */

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          /* Paginação Modal*/

          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          /* Paginação Modal*/

          /* CurrentMask */

          this.decimal = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 2
          };
          this.localeService.use('pt-br');
          this.form = this.formBuilder.group({
            _ID_APOI_TIPO_NIVE_ESTO: [null]
          });
          this.formModal = this.formBuilder.group({
            PERC_VARI_CONS: [null],
            TIPO_VARI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DIAS_ESTO_MINI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DIAS_ESTO_MEDI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DIAS_ESTO_MAXI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Parâmetros gerais de estoque');
            this.setBreadCrumb();
            this.checkRouterParams();
            this.getTiposNiveisdeEstoque();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/parametros-gerais-estoque/lista"),
                descricao: 'Parâmetros Gerais de Estoque'
              }, {
                descricao: 'Detalhes materiais'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this3.routerService.getBase64UrlParams(queryParams);

                _this3.setValueHeaders(_response.item);
              }
            });
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setValueHeaders",
          value: function setValueHeaders(data) {
            var _a, _b, _c;

            this.idSituacao = data['IN_STAT'];
            this.idLinha = data['ID_LINH'];
            this.linha = data['NM_LINH'];
            this.empresa = data['NM_EMPR'];
            this.deposito = data['NM_DEPO'];
            this.idDeposito = data['ID_DEPO'];
            this.idSubLinha = (_a = data['ID_SUB_LINH']) !== null && _a !== void 0 ? _a : '';
            this.subLinha = (_b = data['NM_SUB_LINH']) !== null && _b !== void 0 ? _b : '';
            this.idClasse = data['ID_CLAS'];
            this.classe = data['NM_CLAS'];
            this.idTipoMaterial = data['ID_TIPO_MATE'];
            this.tipoMaterial = data['NM_TIPO_MATE'];
            this.idTipoNivelEstoque = (_c = data['_ID_APOI_TIPO_NIVE_ESTO']) !== null && _c !== void 0 ? _c : '';

            if (this.idTipoNivelEstoque !== '') {
              this.form.get('_ID_APOI_TIPO_NIVE_ESTO').setValue(this.idTipoNivelEstoque);
            }

            this.search({
              IN_STAT: this.idSituacao,
              ID_DEPO: this.idDeposito,
              ID_TIPO_MATE: this.idTipoMaterial,
              ID_CLAS: this.idClasse,
              ID_APOI_TIPO_NIVE_ESTO: this.idTipoNivelEstoque
            });
          }
        }, {
          key: "getTiposNiveisdeEstoque",
          value: function getTiposNiveisdeEstoque() {
            var _this4 = this;

            this.tiposNiveisEstoque = [];
            this.loaderNavbar = true;
            this.service.getTiposNiveisdeEstoque().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this4.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this4.tiposNiveisEstoque = res['body']['result'];
                  } else {
                    _this4.pnotifyService.notice(res['body']['message']);
                  }
                }
              }
            }, function (error) {
              _this4.pnotifyService.error('Erro ao obter tipos de niveis de estoque');
            });
          }
        }, {
          key: "getCalculoPeriodoVendasRealizadas",
          value: function getCalculoPeriodoVendasRealizadas(params, item) {
            var _this5 = this;

            this.dataMediaVendas = [];
            this.loaderNavbar = true;
            this.service.getCalculoPeriodoVendasRealizadasMaterial(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this5.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this5.dataMediaVendas = res['body']['result'];
                    item.BOOL_CALC = true;
                    item.DATE_STAR_CALC = _this5.dataMediaVendas[0].DT_INIC_PERI_VEND;
                    item.DATE_END_CALC = _this5.dataMediaVendas[0].DT_FINA_PERI_VEND;
                    item.MEDI_VEND_CALC = _this5.dataMediaVendas[0].TT_MEDI_VEND_PERI;
                    item.VENDA_PERI_CALC = _this5.dataMediaVendas[0].TT_VEND_PERI;

                    _this5.handleCalcTotal();
                  } else {
                    _this5.pnotifyService.notice(res['body']['message']);
                  }
                }
              }
            }, function (error) {
              _this5.pnotifyService.error('Erro ao realizar calculo do período de vendas');
            });
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this6 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.data = [];
            this.dataFull = [];
            this.dataTotal = [];
            this.service.getNivelEstoqueMaterialDeposito(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this6.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  if (res['body']['responseCode'] == 200) {
                    _this6.loading = true;
                    _this6.noResult = false;
                    _this6.dataFull = res['body']['result'];
                    _this6.dataTotal = _this6.dataFull.shift();
                    _this6.data = _this6.dataFull;
                  } else if (res['body']['responseCode'] == 404) {
                    _this6.noResult = true;

                    _this6.pnotifyService.notice(res['body']['message']);
                  } else {
                    _this6.pnotifyService.notice(res['body']['message']);
                  }
                }
              }
            }, function (error) {
              _this6.noResult = true;

              _this6.pnotifyService.error("Erro ao carregar Detalhes de Materiais");
            });
          }
        }, {
          key: "getLogs",
          value: function getLogs(params) {
            var _this7 = this;

            this.loaderNavbar = true;
            this.loadingLogs = false;
            this.loaderModal = false;
            this.dataLogs = [];
            this.service.getNivelEstoqueMaterialDepositoLogs(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loaderNavbar = false, _this7.loaderModal = true;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  if (res['body']['responseCode'] == 200) {
                    _this7.loadingLogs = true;
                    _this7.noResultLogs = false;
                    _this7.dataLogs = res['body']['result'];
                  } else if (res['body']['responseCode'] == 404) {
                    _this7.noResultLogs = true;

                    _this7.pnotifyService.notice(res['body']['message']);
                  } else {
                    _this7.noResultLogs = true;

                    _this7.pnotifyService.notice(res['body']['message']);
                  }
                }
              }
            }, function (error) {
              _this7.noResultLogs = true;

              _this7.pnotifyService.error("Erro ao carregar Logs de detalhes de Materiais");
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var _a;

            this.search({
              IN_STAT: this.idSituacao,
              ID_DEPO: this.idDeposito,
              ID_TIPO_MATE: this.idTipoMaterial,
              ID_CLAS: this.idClasse,
              ID_APOI_TIPO_NIVE_ESTO: (_a = this.form.value['_ID_APOI_TIPO_NIVE_ESTO']) !== null && _a !== void 0 ? _a : ''
            });
          }
        }, {
          key: "openModalLogs",
          value: function openModalLogs(item) {
            var _a, _b;

            this.nameModal = 'Logs';
            this.boolModalLogs = true;
            var params = {
              ID_DEPO: (_a = item.ID_DEPO) !== null && _a !== void 0 ? _a : '',
              ID_MATE: (_b = item.ID_MATE) !== null && _b !== void 0 ? _b : ''
            };
            this.getLogs(params);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.nameModal = '';
            this.boolModalLogs = false;
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            var periodoVendas = (_a = item.FORM_PERI_VEND) !== null && _a !== void 0 ? _a : '';
            var estoqueMinimo = (_b = item.FORM_ESTO_MINI) !== null && _b !== void 0 ? _b : '';
            var estoqueMedio = (_c = item.FORM_ESTO_MEDI) !== null && _c !== void 0 ? _c : '';
            var estoqueMaximo = (_d = item.FORM_ESTO_MAXI) !== null && _d !== void 0 ? _d : '';
            var mediaVendas = (_e = item.MEDI_VEND_CALC) !== null && _e !== void 0 ? _e : '';
            var vendasPeriodo = (_f = item.VENDA_PERI_CALC) !== null && _f !== void 0 ? _f : '';
            var dateStart = (_g = item.DATE_STAR_CALC) !== null && _g !== void 0 ? _g : '';
            var dateEnd = (_h = item.DATE_END_CALC) !== null && _h !== void 0 ? _h : '';
            var idDeposito = (_j = item.ID_DEPO) !== null && _j !== void 0 ? _j : '';
            this.idMaterial = (_k = item.ID_MATE) !== null && _k !== void 0 ? _k : '';
            this.idAssociacaoMaterial = (_l = item.ID_ASSO_DEPO_MATE) !== null && _l !== void 0 ? _l : '';
            var arrayTemp = [{
              ID_DEPO: idDeposito,
              ID_MATE: this.idMaterial,
              TT_PERI_VEND_MESE: parseInt(periodoVendas),
              TT_VEND_PERI: vendasPeriodo,
              DT_INIC_PERI_VEND: dateStart,
              DT_FINA_PERI_VEND: dateEnd !== null && dateEnd !== void 0 ? dateEnd : '',
              TT_MEDI_VEND_PERI: mediaVendas !== null && mediaVendas !== void 0 ? mediaVendas : '',
              TT_ESTO_MINI: estoqueMinimo,
              TT_ESTO_MEDI: estoqueMedio,
              TT_ESTO_MAXI: estoqueMaximo,
              IN_STAT: 1
            }];
            var record = {
              ID_TIPO_GRAV: 2,
              ID_USUA: parseInt(this.idUsuario),
              DATA: arrayTemp
            };
            this.onConfirmChange(this.service.postNivelEstoqueMaterialDeposito(record));
          }
        }, {
          key: "onConfirmChange",
          value: function onConfirmChange(apiRoute) {
            var _this8 = this;

            this.confirmChange().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
              _this8.loaderNavbar = true;
              return apiRoute;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this8.loaderNavbar = false;
            })).subscribe(function (success) {
              setTimeout(function () {
                _this8.onFilter();
              }, 700);

              _this8.pnotifyService.success();
            }, function (error) {
              _this8.pnotifyService.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange() {
            return this.confirmModalService.showConfirm(null, 'Confirmar alteração', 'Deseja realmente prosseguir com a alteração do(s) registro(s)?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "ableEditCell",
          value: function ableEditCell(item) {
            item.FORM_PERI_VEND = null;
            item.FORM_ESTO_MINI = null;
            item.FORM_ESTO_MEDI = null;
            item.FORM_ESTO_MAXI = null;
            item.DATE_STAR_CALC = '';
            item.DATE_END_CALC = '';
            item.MEDI_VEND_CALC = 0;
            item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
          }
        }, {
          key: "disableEditCell",
          value: function disableEditCell(item) {
            item.FORM_PERI_VEND = null;
            item.DATE_STAR_CALC = '';
            item.DATE_END_CALC = '';
            item.MEDI_VEND_CALC = 0;
            item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
            this.handleCalcTotal();
          }
        }, {
          key: "calculateMediaVendas",
          value: function calculateMediaVendas(item) {
            var _a;

            var periodoMeses = (_a = item.FORM_PERI_VEND) !== null && _a !== void 0 ? _a : '';
            var params = {
              ID_DEPO: this.idDeposito,
              ID_MATE: item.ID_MATE,
              TT_MESE_PERI_VEND: periodoMeses
            };
            this.getCalculoPeriodoVendasRealizadas(params, item);
          }
          /* Validação para habilitar botão de salvar */

        }, {
          key: "validatorsSave",
          value: function validatorsSave(item) {
            var minimo = item.FORM_ESTO_MINI;
            var medio = item.FORM_ESTO_MEDI;
            var maximo = item.FORM_ESTO_MAXI;

            if (minimo > medio || minimo > maximo) {
              this.minimoBool = false;
            } else {
              this.minimoBool = true;
            }

            if (medio > maximo || medio < minimo) {
              this.medioBool = false;
            } else {
              this.medioBool = true;
            }

            if (maximo < minimo || maximo < medio) {
              this.maximoBool = false;
            } else {
              this.maximoBool = true;
            }

            if (this.minimoBool && this.medioBool && this.maximoBool) {
              this.enableSave = true;
            } else {
              this.enableSave = false;
            }

            return this.enableSave;
          }
          /* Realiza calculo dos dados do totalizador*/

        }, {
          key: "handleCalcTotal",
          value: function handleCalcTotal() {
            var getValueMediaVendas = 0;
            var total = 0;
            this.data.forEach(function (e) {
              if (e.MEDI_VEND_CALC != undefined) {
                getValueMediaVendas = e.MEDI_VEND_CALC;
              } else {
                getValueMediaVendas = e.TT_MEDI_VEND_PERI;
              }

              total = total + getValueMediaVendas;
            });
            this.dataTotal['TT_MEDI_VEND_PERI'] = total;
          }
        }, {
          key: "setDefaultValueFormModalNivelEstoque",
          value: function setDefaultValueFormModalNivelEstoque(item) {
            this.formModal.reset();
            this.formModal.get('TIPO_VARI').setValue('1');
            this.paramsRecord = {};

            if (item) {
              this.headerModalCodMaterial = item.ID_REFE_ERP;
              this.headerModalDescMaterial = item.NM_MATE;
              this.headerModalPeriodo = item.TT_PERI_VEND_MESE;
              this.headerModalMediaVendas = item.TT_MEDI_VEND_PERI;
              this.headerModalEstoqueDisponivel = item.TT_ESTO_DISP;
              this.paramsRecord = {
                ID_TIPO_GRAV: 3,
                ID_MATE: item.ID_MATE,
                ID_DEPO: item.ID_DEPO
              };
            }
          }
        }, {
          key: "OnSaveNivelEstoque",
          value: function OnSaveNivelEstoque() {
            var record = this.paramsRecord;
            var percetualVariacao = this.formModal.value['PERC_VARI_CONS'];
            var tipoVariacao = this.formModal.value['TIPO_VARI'];
            var diasEstoqueMinimo = this.formModal.value['DIAS_ESTO_MINI'];
            var diasEstoqueMedio = this.formModal.value['DIAS_ESTO_MEDI'];
            var diasEstoqueMaximo = this.formModal.value['DIAS_ESTO_MAXI'];
            record['VL_PERC_VARI_CONS'] = percetualVariacao ? parseFloat(percetualVariacao) : '', record['IN_PERC_VARI_CONS'] = tipoVariacao ? parseInt(tipoVariacao) : '', record['TT_DIAS_ESTO_MINI'] = diasEstoqueMinimo ? parseInt(diasEstoqueMinimo) : '', record['TT_DIAS_ESTO_MEDI'] = diasEstoqueMedio ? parseInt(diasEstoqueMedio) : '', record['TT_DIAS_ESTO_MAXI'] = diasEstoqueMaximo ? parseInt(diasEstoqueMaximo) : '', record['ID_USUA'] = parseInt(this.idUsuario), this.onConfirmChange(this.service.postNivelEstoque(record));
          }
        }, {
          key: "setColsNivelEstoqueTrue",
          value: function setColsNivelEstoqueTrue() {
            this.colsNivelEstoque = !this.colsNivelEstoque;
            this.data.forEach(function (e) {
              if (e.ON_EDIT_CELL) {
                e.ON_EDIT_CELL = !e.ON_EDIT_CELL;
              }
            });
          }
          /* Ordenação */

        }, {
          key: "sort",
          value: function sort(key) {
            this.key = key;
            this.reverse = !this.reverse;
          }
          /* Ordenação */

          /* Paginação Tabela Principal*/

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
          /* Paginação Modal*/

          /* Ordenação Modal*/

        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
          /* Ordenação Modal*/

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
          key: "onFieldErrorModal",
          value: function onFieldErrorModal(field) {
            if (this.onFieldInvalidModal(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalidModal",
          value: function onFieldInvalidModal(field) {
            field = this.formModal.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequiredModal",
          value: function onFieldRequiredModal(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.formModal.controls[field].validator) {
              var validationResult = this.formModal.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
          /* Realiza comparação para verificar se volume minimo < volumeMedio < volume maximo */

        }, {
          key: "compareValuesEstoque",
          value: function compareValuesEstoque(field) {
            var minimo = this.formModal.get("DIAS_ESTO_MINI").value;
            var medio = this.formModal.get("DIAS_ESTO_MEDI").value;
            var maximo = this.formModal.get("DIAS_ESTO_MAXI").value;
            minimo = parseInt(minimo);
            medio = parseInt(medio);
            maximo = parseInt(maximo);

            if (this.formModal.get("DIAS_ESTO_MAXI").touched) {
              if (field == "DIAS_ESTO_MINI") {
                if (minimo > medio || minimo > maximo) {
                  this.minimoBoolModal = false;
                  return true;
                } else {
                  this.minimoBoolModal = true;
                }
              }

              if (field == "DIAS_ESTO_MEDI") {
                if (medio > maximo || medio < minimo) {
                  this.medioBoolModal = false;
                  return true;
                } else {
                  this.medioBoolModal = true;
                }
              }

              if (field == "DIAS_ESTO_MAXI") {
                if (maximo < minimo || maximo < medio) {
                  this.maximoBoolModal = false;
                  return true;
                } else {
                  this.maximoBoolModal = true;
                }
              }
            }
          }
          /* Validação para habilitar botão de salvar no modal Nivel Estoque*/

        }, {
          key: "validatorsSaveModal",
          value: function validatorsSaveModal() {
            if (this.minimoBoolModal && this.minimoBoolModal && this.minimoBoolModal) {
              this.enableSaveModal = true;
            } else {
              this.enableSaveModal = false;
            }

            return this.enableSaveModal;
          }
        }]);

        return AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent;
      }();

      AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"]
        }, {
          type: _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]
        }];
      };

      AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'detalhes-materiais',
        template: _raw_loader_detalhes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"], _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]])], AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent);
      /***/
    },

    /***/
    "/124":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/parametros-gerais-estoque.module.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueModule */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueModule", function () {
        return AbastecimentoCadastrosParametrosGeraisEstoqueModule;
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


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _parametros_gerais_estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./parametros-gerais-estoque-routing.module */
      "qqwt");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "HqyD");
      /* harmony import */


      var _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./vinculo-depositos/vinculo-depositos.component */
      "gXJx");
      /* harmony import */


      var _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./detalhes-materiais/detalhes-materiais.component */
      "+xEY"); // ng2-currency-mask


      var AbastecimentoCadastrosParametrosGeraisEstoqueModule = function AbastecimentoCadastrosParametrosGeraisEstoqueModule() {
        _classCallCheck(this, AbastecimentoCadastrosParametrosGeraisEstoqueModule);
      };

      AbastecimentoCadastrosParametrosGeraisEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent"], _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent"], _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _parametros_gerais_estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"]]
      })], AbastecimentoCadastrosParametrosGeraisEstoqueModule);
      /***/
    },

    /***/
    "6r7s":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/detalhes-materiais/detalhes-materiais.component.scss ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r7s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#modal-cadastro-materiais > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL2RldGFsaGVzLW1hdGVyaWFpcy9kZXRhbGhlcy1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLGdFQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL2RldGFsaGVzLW1hdGVyaWFpcy9kZXRhbGhlcy1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW9kYWwtY2FkYXN0cm8tbWF0ZXJpYWlzID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2YwZjNmNiksIGNvbG9yLXN0b3AoOTAlLCAjZTZlYmYxKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xyXG59Il19 */";
      /***/
    },

    /***/
    "7ATi":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/detalhes-materiais/detalhes-materiais.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ATi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Detalhes materiais\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row pl-3 pr-3 pb-3\">\r\n    <div class=\"col-md-12 p-3 border rounded shadow\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            <strong>EMPRESA</strong><br />\r\n            {{ empresa }}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            <strong>DEPÓSITO</strong><br />\r\n            {{ deposito }}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            <strong>TIPO DE MATERIAL</strong><br />\r\n            {{ tipoMaterial }}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            <strong>LINHA</strong><br />\r\n            {{ linha }}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            <strong>SUB LINHA</strong><br />\r\n            {{ subLinha ? subLinha : '-' }}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <p>\r\n            <strong>CLASSE</strong><br />\r\n            {{ classe }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"_ID_APOI_TIPO_NIVE_ESTO\">NÍVEL ESTOQUE</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tiposNiveisEstoque\"\r\n                [virtualScroll]=\"true\"\r\n                [hideSelected]=\"true\"\r\n                [closeOnSelect]=\"true\"\r\n                placeholder=\"TODOS\"\r\n                bindLabel=\"NM_APOI_TIPO_NIVE_ESTO\"\r\n                bindValue=\"ID\"\r\n                formControlName=\"_ID_APOI_TIPO_NIVE_ESTO\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-2 table-responsive\" *ngIf=\"loading\">\r\n    <custom-table>\r\n      <ng-template #thead let-thead>\r\n        <tr class=\"text-center\">\r\n          <th nowrap scope=\"col\" (click)=\"sort('ID_REFE_ERP')\">\r\n            Código material\r\n            <span *ngIf=\"key == 'ID_REFE_ERP'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'ID_REFE_ERP'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('NM_MATE')\">\r\n            Descrição material\r\n            <span *ngIf=\"key == 'NM_MATE'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_MATE'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('TT_PERI_VEND_MESE')\" [hidden]=\"colsNivelEstoque\">\r\n            Período de vendas\r\n            <span *ngIf=\"key == 'TT_PERI_VEND_MESE'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'TT_PERI_VEND_MESE'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" [hidden]=\"colsNivelEstoque\">\r\n            Período\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('TT_MEDI_VEND_PERI')\" [hidden]=\"colsNivelEstoque\">\r\n            Média de Vendas\r\n            <span *ngIf=\"key == 'TT_MEDI_VEND_PERI'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'TT_MEDI_VEND_PERI'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_DISP')\">\r\n            Estoque Disponível\r\n            <span *ngIf=\"key == 'TT_ESTO_DISP'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'TT_ESTO_DISP'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('NR_DIAS_GIRO')\" [hidden]=\"colsNivelEstoque\">\r\n            Giro\r\n            <span *ngIf=\"key == 'NR_DIAS_GIRO'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NR_DIAS_GIRO'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\">\r\n          <!-- <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\"> -->\r\n            Nível Estoque\r\n            <button\r\n              class=\"btn-icon-sm\"\r\n              (click)=\"setColsNivelEstoqueTrue()\"\r\n            >\r\n              <i\r\n                [ngClass]=\"colsNivelEstoque ? 'fas fa-minus' : 'fas fa-plus'\"\r\n                title=\"Mostrar Nivel Estoque\"\r\n                aria-hidden=\"true\"\r\n              ></i>\r\n            </button>\r\n            <!-- <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span> -->\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MINI')\">\r\n            Estoque mínimo\r\n            <span *ngIf=\"key == 'TT_ESTO_MINI'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'TT_ESTO_MINI'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MEDI')\">\r\n            Estoque médio\r\n            <span *ngIf=\"key == 'TT_ESTO_MEDI'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'TT_ESTO_MEDI'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MAXI')\">\r\n            Estoque máximo\r\n            <span *ngIf=\"key == 'TT_ESTO_MAXI'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'TT_ESTO_MAXI'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" [hidden]=\"!colsNivelEstoque\">\r\n            % Variação\r\n            <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" [hidden]=\"!colsNivelEstoque\">\r\n            Último cálculo\r\n            <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th nowrap width=\"5%\" [hidden]=\"colsNivelEstoque\"></th>\r\n          <th nowrap width=\"5%\" [hidden]=\"colsNivelEstoque\"></th>\r\n          <th nowrap width=\"5%\" [hidden]=\"colsNivelEstoque\"></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\r\n          <td nowrap class=\"text-center\">{{ item.ID_REFE_ERP | number: '0.0' }}</td>\r\n          <td nowrap>{{ item.NM_MATE }}</td>\r\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\r\n            <span *ngIf=\"!item.ON_EDIT_CELL\">{{ item.TT_PERI_VEND_MESE | number: '0.0' }}</span>\r\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\r\n              <input\r\n                style=\"max-width: 80px;\"\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                placeholder=\"0\"\r\n                [(ngModel)]=\"item.FORM_PERI_VEND\"\r\n                #FORM_PERI_VEND_VALI=\"ngModel\"\r\n                [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\" \r\n                required\r\n              />\r\n              <button class=\"btn-icon-sm ml-1\" (click)=\"calculateMediaVendas(item)\">\r\n                <i class=\"fas fa-sync text-success\" tooltip=\"Calcular\"></i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\"> \r\n            <span *ngIf=\"!item.ON_EDIT_CELL\"> \r\n              {{ item.DT_INIC_PERI_VEND ? (item.DT_INIC_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }} \r\n                à \r\n              {{ item.DT_FINA_PERI_VEND ? (item.DT_FINA_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }} \r\n            </span>\r\n            <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL\"> \r\n              {{ item.DATE_STAR_CALC ? (item.DATE_STAR_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \r\n                à \r\n              {{ item.DATE_END_CALC ? (item.DATE_END_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \r\n            </span>\r\n          </td>\r\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\r\n            <span *ngIf=\"!item.ON_EDIT_CELL\"> \r\n              {{ item.TT_MEDI_VEND_PERI | number: '0.3'}}\r\n            </span>\r\n            <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL\"> {{ item.MEDI_VEND_CALC ? (item.MEDI_VEND_CALC | number:'0.3') : '0,000'}} </span>\r\n          </td>\r\n          <td nowrap class=\"text-center\">\r\n            {{ item.TT_ESTO_DISP | number: '0.3'}}   \r\n          </td>\r\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\r\n            {{ item.NR_DIAS_GIRO | number: '0.0'}}   \r\n          </td>\r\n          <td nowrap class=\"text-right\">\r\n              {{ item.DS_APOI_TIPO_NIVE_ESTO ? item.DS_APOI_TIPO_NIVE_ESTO  : 'Não Informado'}}\r\n              <button \r\n                class=\"btn-icon-sm\" \r\n                (click)=\"setDefaultValueFormModalNivelEstoque(item) + '' + smModal1.show()\"\r\n                [disabled]=\"item.TT_PERI_VEND_MESE == 0 || item.TT_PERI_VEND_MESE == null\" \r\n                *ngIf=\"!item.ON_EDIT_CELL\"\r\n              >\r\n                <i class=\"fas fa-calculator\" tooltip=\"Calcular nível de estoque\"></i>\r\n              </button>\r\n          </td>\r\n          <td nowrap class=\"text-center\">\r\n            <span *ngIf=\"!item.ON_EDIT_CELL\"> {{colsNivelEstoque ? item.TT_DIAS_ESTO_MINI + ' dias - ' : ''}} {{ item.TT_ESTO_MINI | number: '0.3' }}</span>\r\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\r\n              <input\r\n                style=\"max-width: 80px;\"\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                currencyMask [options]=\"ton\"\r\n                placeholder=\"0,000\"\r\n                [(ngModel)]=\"item.FORM_ESTO_MINI\"\r\n                #FORM_ESTO_MINI_VALI=\"ngModel\"\r\n                [ngClass]=\"{ 'is-invalid': FORM_ESTO_MINI_VALI.touched && (item.FORM_ESTO_MINI > item.FORM_ESTO_MEDI || item.FORM_ESTO_MINI > item.FORM_ESTO_MAXI ) }\" \r\n                required\r\n              />\r\n            </div>\r\n          </td>\r\n          <td nowrap class=\"text-center\">\r\n            <span *ngIf=\"!item.ON_EDIT_CELL\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MEDI + ' dias - ' : ''}} {{ item.TT_ESTO_MEDI | number: '0.3' }}</span>\r\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\r\n              <input\r\n                style=\"max-width: 80px;\"\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                currencyMask [options]=\"ton\"\r\n                placeholder=\"0,000\"\r\n                [(ngModel)]=\"item.FORM_ESTO_MEDI\"\r\n                #FORM_ESTO_MEDI_VALI=\"ngModel\"\r\n                [ngClass]=\"{ 'is-invalid': FORM_ESTO_MEDI_VALI.touched && (item.FORM_ESTO_MEDI > item.FORM_ESTO_MAXI || item.FORM_ESTO_MEDI < item.FORM_ESTO_MINI ) }\" \r\n                required\r\n              />\r\n            </div>\r\n          </td>\r\n          <td nowrap class=\"text-center\">\r\n            <span *ngIf=\"!item.ON_EDIT_CELL\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MAXI + ' dias - ' : ''}} {{ item.TT_ESTO_MAXI | number: '0.3' }}</span>\r\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\r\n              <input\r\n                style=\"max-width: 80px;\"\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                currencyMask [options]=\"ton\"\r\n                placeholder=\"0,000\"\r\n                [(ngModel)]=\"item.FORM_ESTO_MAXI\"\r\n                #FORM_ESTO_MAXI_VALI=\"ngModel\"\r\n                [ngClass]=\"{ 'is-invalid': FORM_ESTO_MAXI_VALI.touched && (item.FORM_ESTO_MAXI < item.FORM_ESTO_MINI || item.FORM_ESTO_MAXI < item.FORM_ESTO_MEDI ) }\" \r\n                required\r\n              />\r\n            </div>\r\n          </td>\r\n          <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.TT_PERC_VARI_CONS ? (item.TT_PERC_VARI_CONS | number: '0.2'): (0 | number:'0.2') }} %</td>\r\n          <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.DT_ULTI_CALC_ESTO ? (item.DT_ULTI_CALC_ESTO | date: 'dd/MM/yyyy HH:mm') : '--/--/----  --:--' }}</td>\r\n          <td nowrap class=\"text-center\" width=\"5%\" [hidden]=\"colsNivelEstoque\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                (click)=\"onEdit(item)\"\r\n                [disabled]=\"(item.FORM_PERI_VEND == '' || item.FORM_PERI_VEND == null) || !item.BOOL_CALC || !validatorsSave(item)\"\r\n              >\r\n                <i class=\"fas fa-save\"></i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td nowrap  class=\"text-center\" width=\"4%\" [hidden]=\"colsNivelEstoque\">\r\n            <div *ngIf=\"!item.ON_EDIT_CELL\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                placement=\"left\"\r\n                (click)=\"ableEditCell(item)\"\r\n              >\r\n                <i\r\n                  class=\"fas fa-edit\"\r\n                  tooltip=\"Editar\"\r\n                >\r\n                </i>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"item.ON_EDIT_CELL\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                placement=\"left\"\r\n                (click)=\"disableEditCell(item)\"\r\n              >\r\n                <i\r\n                  class=\"fas fa-times text-danger\"\r\n                  tooltip=\"Cancelar edição\"\r\n                >\r\n                </i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td nowrap class=\"text-center\" width=\"5%\" [hidden]=\"colsNivelEstoque\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Logs\"\r\n                (click)=\"lgModal.show() + '' + openModalLogs(item)\"\r\n              >\r\n                <i class=\"fas fa-external-link-alt text-primary\"></i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td nowrap class=\"bg-dark text-white text-left\">TOTAL</td>           \r\n          <td nowrap class=\"bg-dark text-white text-center\"></td>        \r\n          <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque\"></td>        \r\n          <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque\"></td>        \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['TT_MEDI_VEND_PERI'] | number: '0.3' }} </td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\"> {{ dataTotal['TT_ESTO_DISP'] | number: '0.3' }} </td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['NR_DIAS_GIRO'] | number: '0.0' }} </td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>                   \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>                                   \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \r\n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div class=\"col-12 mb-2 ml-2\" *ngIf=\"data.length > itemsPerPage && loading\">\r\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"data?.length\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\"\r\n    >\r\n    </pagination>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n  [hidden]=\"!loaderModal\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          {{ nameModal }}\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide() + '' + closeModal()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=\"modal-logs\" [hidden]=\"!boolModalLogs\">\r\n          <div class=\"table-responsive\">\r\n            <custom-table *ngIf=\"loadingLogs\">\r\n              <ng-template #thead let-thead>\r\n                <tr class=\"text-center\">\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('ID_REFE_ERP')\">\r\n                    Código\r\n                    <span *ngIf=\"keyA == 'ID_REFE_ERP'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'ID_REFE_ERP'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_MATE')\">\r\n                    Material\r\n                    <span *ngIf=\"keyA == 'NM_MATE'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'NM_MATE'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_DEPO')\">\r\n                    Depósito\r\n                    <span *ngIf=\"keyA == 'NM_DEPO'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'NM_DEPO'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_PERI_VEND_MESE')\">\r\n                    Período de vendas\r\n                    <span *ngIf=\"keyA == 'TT_PERI_VEND_MESE'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'TT_PERI_VEND_MESE'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_MEDI_VEND_PERI')\">\r\n                    Média de Vendas\r\n                    <span *ngIf=\"keyA == 'TT_MEDI_VEND_PERI'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'TT_MEDI_VEND_PERI'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_ESTO_MINI')\">\r\n                    Estoque mínimo\r\n                    <span *ngIf=\"keyA == 'TT_ESTO_MINI'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'TT_ESTO_MINI'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_ESTO_MEDI')\">\r\n                    Estoque médio\r\n                    <span *ngIf=\"keyA == 'TT_ESTO_MEDI'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'TT_ESTO_MEDI'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_ESTO_MAXI')\">\r\n                    Estoque máximo\r\n                    <span *ngIf=\"keyA == 'TT_ESTO_MAXI'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'TT_ESTO_MAXI'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('DS_APOI_TIPO_NIVE_ESTO')\">\r\n                    % Variação\r\n                    <span *ngIf=\"keyA == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('DS_APOI_TIPO_NIVE_ESTO')\">\r\n                    Último cálculo\r\n                    <span *ngIf=\"keyA == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('DS_STAT')\">\r\n                    Situação\r\n                    <span *ngIf=\"keyA == 'DS_STAT'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'DS_STAT'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('DT_ACAO')\">\r\n                    Data Ação\r\n                    <span *ngIf=\"keyA == 'DT_ACAO'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'DT_ACAO'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_ACAO')\">\r\n                    Ação\r\n                    <span *ngIf=\"keyA == 'NM_ACAO'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'NM_ACAO'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_USUA')\">\r\n                    Usuário\r\n                    <span *ngIf=\"keyA == 'NM_USUA'\"\r\n                      ><i\r\n                        [ngClass]=\"\r\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                        \"\r\n                      ></i\r\n                    ></span>\r\n                    <span *ngIf=\"keyA != 'NM_USUA'\"\r\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                    ></span>\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of dataLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\r\n                  <td nowrap class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.NM_MATE }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.TT_PERI_VEND_MESE | number : '0.0' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.TT_MEDI_VEND_PERI | number : '0.3' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.TT_DIAS_ESTO_MINI + ' dias -'}} {{ item.TT_ESTO_MINI | number : '0.3' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.TT_DIAS_ESTO_MEDI + ' dias -'}} {{ item.TT_ESTO_MEDI | number : '0.3' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.TT_DIAS_ESTO_MAXI + ' dias -'}} {{ item.TT_ESTO_MAXI | number : '0.3' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.TT_PERC_VARI_CONS ? item.TT_PERC_VARI_CONS : 0 }} %</td>\r\n                  <td nowrap class=\"text-center\">{{ item.DT_ULTI_CALC_ESTO ? (item.DT_ULTI_CALC_ESTO | date: 'dd/MM/yyyy HH:mm') : '--/--/----  --:--' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.DS_STAT }}</td>\r\n                  <td nowrap class=\"text-center\">\r\n                    {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\r\n                  </td>\r\n                  <td nowrap class=\"text-center\">{{ item.NM_ACAO }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.NM_USUA }}</td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n          <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\r\n            Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dataLogs?.length }}\r\n            <pagination\r\n              [maxSize]=\"10\"\r\n              [totalItems]=\"dataLogs?.length\"\r\n              (pageChanged)=\"onPageChangedA($event)\"\r\n              [(itemsPerPage)]=\"itemsPerPage\"\r\n              [boundaryLinks]=\"true\"\r\n              [(ngModel)]=\"currentPageA\"\r\n              previousText=\"&lsaquo;\"\r\n              nextText=\"&rsaquo;\"\r\n              firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\"\r\n            >\r\n            </pagination>\r\n          </div>\r\n          <div\r\n            *ngIf=\"noResultLogs\"\r\n            class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n            style=\"height: 80%;\"\r\n          >\r\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal Calcular Nível de estoque -->\r\n<div bsModal #smModal1=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">Calcular Nível Estoque - Por Material</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal1.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <p>\r\n              <strong>CÓD. MATERIAL</strong><br />\r\n              {{ headerModalCodMaterial }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <p>\r\n              <strong>DESCRIÇÃO</strong><br />\r\n              {{ headerModalDescMaterial }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <p>\r\n              <strong>PERÍODO</strong><br />\r\n              {{ headerModalPeriodo | number: '0.0' }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <p>\r\n              <strong>MÉDIA DE VENDAS</strong><br />\r\n              {{ headerModalMediaVendas | number: '0.3' }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <p>\r\n              <strong>ESTOQUE DISPONÍVEL</strong><br />\r\n              {{ headerModalEstoqueDisponivel | number: '0.3' }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <form [formGroup]=\"formModal\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"PERC_VARI_CONS\">% Variação de consumo </label>\r\n              <input\r\n                type=\"text\"\r\n                id=\"PERC_VARI_CONS\"\r\n                currencyMask\r\n                [options]=\"decimal\"\r\n                placeholder=\"0,00\"\r\n                formControlName=\"PERC_VARI_CONS\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                  onFieldErrorModal('PERC_VARI_CONS') + ' ' + onFieldRequiredModal('PERC_VARI_CONS')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('PERC_VARI_CONS')\"\r\n                message=\"% Variação de consumo é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-6 mt-4\">\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"TIPO_VARI_POSI\"\r\n                  name=\"TIPO_VARI\"\r\n                  class=\"custom-control-input\"\r\n                  value=\"1\"\r\n                  formControlName=\"TIPO_VARI\">\r\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_POSI\">Aumento</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"TIPO_VARI_NEGA\"\r\n                  name=\"TIPO_VARI\"\r\n                  class=\"custom-control-input\"\r\n                  value=\"0\"\r\n                  formControlName=\"TIPO_VARI\">\r\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_NEGA\">Redução</label>\r\n              </div>\r\n              <!-- <invalid-form-control [show]=\"onFieldInvalid('TIPO_VARI')\" message=\"Tipo variação é obrigatório.\"></invalid-form-control> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DIAS_ESTO_MINI\">Dias de estoque mínimo</label>\r\n              <input\r\n                type=\"number\"\r\n                id=\"DIAS_ESTO_MINI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"DIAS_ESTO_MINI\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                onFieldErrorModal('DIAS_ESTO_MINI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MINI')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MINI')\"\r\n                message=\"Dias de estoque mínimo é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n              <invalid-form-control\r\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MINI')\"\r\n                  message=\"Deve ser menor que volume máximo ou segurança\"\r\n                  >\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DIAS_ESTO_MEDI\">Dias de estoque médio</label>\r\n              <input\r\n                type=\"number\"\r\n                id=\"DIAS_ESTO_MEDI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"DIAS_ESTO_MEDI\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                onFieldErrorModal('DIAS_ESTO_MEDI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MEDI')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MEDI')\"\r\n                message=\"Dias de estoque médio é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n              <invalid-form-control\r\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MEDI')\"\r\n                  message=\"Deve ser menor que máximo ou maior que mínimo\"\r\n                  >\r\n                </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DIAS_ESTO_MAXI\">Dias de estoque máximo</label>\r\n              <input\r\n                type=\"number\"\r\n                id=\"DIAS_ESTO_MAXI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"DIAS_ESTO_MAXI\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                onFieldErrorModal('DIAS_ESTO_MAXI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MAXI')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MAXI')\"\r\n                message=\"Dias de estoque máximo é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n              <invalid-form-control\r\n                [show]=\"compareValuesEstoque('DIAS_ESTO_MAXI')\"\r\n                message=\"Deve ser maior que mínimo ou segurança\"\r\n              >\r\n              </invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"d-flex justify-content-end\">\r\n          <button \r\n            class=\"btn btn-primary\"\r\n            (click)=\"OnSaveNivelEstoque() + '' + smModal1.hide()\"\r\n            [disabled]=\"formModal.status == 'INVALID' || !validatorsSaveModal()\"\r\n          >\r\n            Enviar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "8C7E":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/vinculo-depositos/vinculo-depositos.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C7E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#modal-material-depositos > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL3ZpbmN1bG8tZGVwb3NpdG9zL3ZpbmN1bG8tZGVwb3NpdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxnRUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvcGFyYW1ldHJvcy1nZXJhaXMtZXN0b3F1ZS92aW5jdWxvLWRlcG9zaXRvcy92aW5jdWxvLWRlcG9zaXRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbC1tYXRlcmlhbC1kZXBvc2l0b3MgPiBkaXYgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjBmM2Y2KSwgY29sb3Itc3RvcCg5MCUsICNlNmViZjEpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "CAcG":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/lista/lista.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CAcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvcGFyYW1ldHJvcy1nZXJhaXMtZXN0b3F1ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1yb3ctc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWI4ZjAhaW1wb3J0YW50O1xyXG59Il19 */";
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
              modalRef.content.messageAlerts = ['Las informaciones serán inactivadas.'];
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
    "HqyD":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/lista/lista.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent */

    /***/
    function HqyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent", function () {
        return AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "abXP");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "CAcG");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../parametros-gerais-estoque.service */
      "atLl");

      var AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent = /*#__PURE__*/function () {
        /* CurrentMask */
        function AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent(activatedRoute, router, formBuilder, pnotifyService, atividadesService, confirmModalService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.loading = false;
          this.noResult = false;
          this.ableEditMassa = false;
          this.compressedTable = false;
          this.ableButtonEditMassa = false;
          this.ableButtonCallModal = false;
          this.colsNivelEstoque = false;
          this.ableHeaderModalNivelEstoque = false;
          this.minimoBool = false;
          this.medioBool = false;
          this.maximoBool = false;
          this.enableSaveModal = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.data = [];
          this.dataFull = [];
          this.dataTotal = [];
          this.dataMediaVendas = [];
          this.dataExcel = '';
          this.estoqueMinimo = '';
          this.estoqueMedio = '';
          this.estoqueMaximo = '';
          this.periodoVendasMassa = '';
          this.headerModalTipoMaterial = '';
          this.headerModalClasse = '';
          this.headerModalDeposito = '';
          this.headerModalPeriodo = '';
          this.headerModalMediaVendas = '';
          this.headerModalEstoqueDisponivel = '';
          this.situations = [{
            ID: '1',
            NM_SITU: 'Ativo'
          }, {
            ID: '0',
            NM_SITU: 'Inativo'
          }];
          /* Ordenação */

          this.reverse = false;
          this.key = 'NM_CLAS';
          /* Ordenação */

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.subtitles = [{
            text: 'Ativo',
            color: 'green'
          }, {
            text: 'Inativo',
            color: 'red'
          }, {
            text: 'Simulado',
            color: 'gray'
          }];
          /* CurrentMask */

          this.decimal = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 2
          };
          this.form = this.formBuilder.group({
            ID_EMPR: [null],
            ID_DEPO: [null],
            ID_TIPO_MATE: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_LINH: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            ID_MATE: [null],
            TT_MESE_PERI_VEND_SIMU: [null],
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.formModal = this.formBuilder.group({
            PERC_VARI_CONS: [null],
            TIPO_VARI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DIAS_ESTO_MINI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DIAS_ESTO_MEDI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DIAS_ESTO_MAXI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            setTimeout(function () {
              _this9.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Parâmetros Gerais de Estoque');
            this.form.get('IN_STAT').setValue('1');
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.setDisabledItemsForm();
            this.getDataFilter();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this10.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Parâmetros Gerais de Estoque'
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
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this12 = this;

            var _a, _b, _c, _d, _e;

            var ID_EMPR = (_a = queryParams['ID_EMPR']) !== null && _a !== void 0 ? _a : '';
            var ID_LINH = (_b = queryParams['ID_LINH']) !== null && _b !== void 0 ? _b : '';
            var ID_CLAS = (_c = queryParams['ID_CLAS']) !== null && _c !== void 0 ? _c : '';
            this.periodoVendasMassa = (_d = queryParams['TT_MESE_PERI_VEND_SIMU']) !== null && _d !== void 0 ? _d : '';
            this.ableButtonEditMassa = false;

            if (this.periodoVendasMassa != '') {
              this.ableEditMassa = true;
            } else {
              this.ableEditMassa = false;
            }
            /* depositos */


            if (Object.keys(ID_EMPR).length > 0) {
              var paramsDeposito = {
                idsEmpresa: queryParams['ID_EMPR'],
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getDepositos(paramsDeposito).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this12.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this12.depositos = res['body']['result'];

                      _this12.form.get('ID_DEPO').enable();
                    }
                  }
                }
              }, function (error) {
                _this12.pnotifyService.error('Erro ao carregar depósitos');
              });
            } else {
              this.form.get('ID_CLAS').disable();
            }
            /* classes */


            if (Object.keys(ID_LINH).length > 0) {
              var paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_e = queryParams['ID_SUB_LINH']) !== null && _e !== void 0 ? _e : "",
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getClasses(paramsClasse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this12.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this12.classes = res['body']['result'];

                      _this12.form.get('ID_CLAS').enable();
                    }
                  }
                }
              }, function (error) {
                _this12.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.form.get('ID_CLAS').disable();
            }
            /* sublinhas */


            if (Object.keys(ID_LINH).length > 0) {
              var paramsSubLinha = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getSubLinhas(paramsSubLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this12.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status == 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this12.subLinhas = res['body']['result'];

                      _this12.form.get('ID_SUB_LINH').enable();
                    }
                  }
                }
              }, function (error) {
                _this12.pnotifyService.error('Erro ao carregar subLinha');
              });
            } else {
              this.form.get('ID_SUB_LINH').disable();
            }
            /* materiais */


            if (Object.keys(ID_CLAS).length > 0) {
              var paramsMaterial = {
                idClasses: queryParams['ID_CLAS'],
                idTipoMaterial: queryParams['ID_TIPO_MATE'],
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.ableButtonEditMassa = true;
              this.service.getMateriais(paramsMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this12.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this12.form.get('ID_MATE').enable();

                    _this12.materiais = res['body']['result'];
                  }
                }
              }, function (error) {
                _this12.pnotifyService.error('Erro ao carregar materias');
              });
            }

            this.form.patchValue(queryParams);
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "getDataFilter",
          value: function getDataFilter() {
            this.getLinhas();
            this.getEmpresas();
            this.getTiposMateriais();
          }
        }, {
          key: "setDisabledItemsForm",
          value: function setDisabledItemsForm() {
            this.form.get('ID_DEPO').disable();
            this.form.get('ID_SUB_LINH').disable();
            this.form.get('ID_CLAS').disable();
            this.form.get('ID_MATE').disable();
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this13 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.empresas = [];
            this.service.getEmpresas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this13.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this13.empresas = res['body']['result'];
              }
            }, function (error) {
              _this13.pnotifyService.error('Erro ao carregar Empresas');
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this14 = this;

            this.loaderNavbar = true;
            this.depositos = [];
            var idsEmpresa = this.form.get('ID_EMPR').value;
            var idSituacao = 1;
            var params = {
              idsEmpresa: idsEmpresa !== null && idsEmpresa !== void 0 ? idsEmpresa : "",
              idSituacao: idSituacao
            };
            this.service.getDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this14.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this14.form.get('ID_DEPO').reset();

                  _this14.form.get('ID_DEPO').enable();

                  _this14.depositos = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this14.form.get('ID_DEPO').reset();

                  _this14.form.get('ID_DEPO').disable();
                }
              }
            }, function (error) {
              _this14.pnotifyService.error('Erro ao carregar Depositos');
            });
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais() {
            var _this15 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.tipoMateriais = [];
            this.service.getTiposMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this15.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this15.tipoMateriais = res['body']['result'];
              }
            }, function (error) {
              _this15.pnotifyService.error('Erro ao carregar tipos materiais');
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this16 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this16.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this16.linhas = res['body']['result'];
                }
              }
            }, function (error) {
              _this16.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this17 = this;

            this.loaderNavbar = true;
            this.subLinhas = [];

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
              };
              this.service.getSubLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this17.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this17.subLinhas = res['body']['result'];

                      _this17.form.get('ID_SUB_LINH').reset();

                      _this17.form.get('ID_SUB_LINH').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this17.form.get('ID_SUB_LINH').reset();

                      _this17.form.get('ID_SUB_LINH').disable();

                      _this17.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this17.pnotifyService.error('Erro ao carregar sublinhas');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_SUB_LINH').reset();
              this.form.get('ID_SUB_LINH').disable();
              this.form.get('ID_MATE').reset();
              this.form.get('ID_MATE').disable();
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this18 = this;

            this.classes = [];
            this.loaderNavbar = true;
            this.ableButtonEditMassa = false;

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSubLinha = this.form.get('ID_SUB_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao: idSituacao
              };
              this.service.getClasses(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this18.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this18.classes = res['body']['result'];

                      _this18.form.get('ID_CLAS').reset();

                      _this18.form.get('ID_CLAS').enable();

                      _this18.form.get('ID_MATE').reset();

                      _this18.form.get('ID_MATE').disable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this18.form.get('ID_CLAS').reset();

                      _this18.form.get('ID_CLAS').disable();
                    }
                  }
                }
              }, function (error) {
                _this18.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_CLAS').reset();
              this.form.get('ID_CLAS').disable();
              this.form.get('ID_MATE').reset();
              this.form.get('ID_MATE').disable();
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this19 = this;

            this.materiais = [];
            this.loaderNavbar = true;

            if (this.form.value['ID_CLAS'] != null && this.form.value['ID_CLAS'].length > 0) {
              var idClasses = this.form.get('ID_CLAS').value;
              var idTipoMaterial = this.form.get('ID_TIPO_MATE').value;
              var idSituacao = 1;
              this.ableButtonEditMassa = true;
              var params = {
                idClasses: idClasses !== null && idClasses !== void 0 ? idClasses : "",
                idTipoMaterial: idTipoMaterial !== null && idTipoMaterial !== void 0 ? idTipoMaterial : "",
                idSituacao: idSituacao
              };
              this.service.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this19.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this19.materiais = res['body'].result;

                    _this19.form.get('ID_MATE').reset();

                    _this19.form.get('ID_MATE').enable();
                  } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                    _this19.form.get('ID_MATE').reset();

                    _this19.form.get('ID_MATE').disable();

                    _this19.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this19.loaderNavbar = false;
              }, function (error) {
                _this19.pnotifyService.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.loaderNavbar = false;
              this.ableButtonEditMassa = false;
              this.form.get('ID_MATE').reset();
              this.form.get('ID_MATE').disable();
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.value['TT_MESE_PERI_VEND_SIMU'] = '';
            this.form.get('TT_MESE_PERI_VEND_SIMU').reset();
            this.ableEditMassa = false;
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
            this.search(this.getParams());
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this20 = this;

            var ID_CLAS = params['ID_CLAS'] ? params['ID_CLAS'] : '';
            this.begin = 0;

            if (Object.keys(ID_CLAS).length > 0) {
              this.ableButtonCallModal = true;
            } else {
              this.ableButtonCallModal = false;
            }

            this.loaderNavbar = true;
            this.loading = false;
            this.data = [];
            this.service.getNivelEstoqueClasseDeposito(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this20.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  if (res['body']['responseCode'] == 200) {
                    _this20.loading = true;
                    _this20.noResult = false;
                    _this20.dataFull = res['body']['result'];
                    _this20.dataTotal = _this20.dataFull.shift();
                    _this20.data = _this20.dataFull;
                  } else if (res['body']['responseCode'] == 404) {
                    _this20.noResult = true;

                    _this20.pnotifyService.notice("Não há itens a serem exibidos");
                  }
                }
              }
            }, function (error) {
              _this20.noResult = true;

              _this20.pnotifyService.error("Erro ao carregar Parâmetros gerais de estoque");
            });
          }
        }, {
          key: "getSearchExcel",
          value: function getSearchExcel(params) {
            var _this21 = this;

            this.loaderNavbar = true;
            this.dataExcel = '';
            this.service.getNivelEstoqueClasseDeposito(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this21.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this21.dataExcel = res['body']['result'];

                  _this21.pnotifyService.success(_this21.dataExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this21.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this21.pnotifyService.error('Erro ao carregar dados para excel');
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            var periodoVendas = item.FORM_PERI_VEND;
            var dateStart = item.DATE_STAR_CALC;
            var dateEnd = item.DATE_END_CALC;
            var mediaVendas = item.MEDI_VEND_CALC;
            var vendasPeriodo = item.PERI_VEND_CALC;
            var arrayTemp = [{
              ID_DEPO: item.ID_DEPO,
              ID_CLAS: item.ID_CLAS,
              ID_APOI_TIPO_MATE: item.ID_TIPO_MATE,
              TT_PERI_VEND_MESE: parseInt(periodoVendas),
              DT_INIC_PERI_VEND: dateStart,
              DT_FINA_PERI_VEND: dateEnd !== null && dateEnd !== void 0 ? dateEnd : '',
              TT_MEDI_VEND_PERI: mediaVendas !== null && mediaVendas !== void 0 ? mediaVendas : '',
              TT_VEND_PERI: vendasPeriodo,
              IN_STAT: 1
            }];
            var record = {
              ID_TIPO_GRAV: 1,
              ID_USUA: parseInt(this.idUsuario),
              DATA: arrayTemp
            };
            this.onConfirmChange(this.service.postNivelEstoqueMaterialDeposito(record));
          }
        }, {
          key: "onConfirmChange",
          value: function onConfirmChange(apiRoute) {
            var _this22 = this;

            this.confirmChange().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
              _this22.loaderNavbar = true;
              return apiRoute;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this22.loaderNavbar = false;
            })).subscribe(function (success) {
              setTimeout(function () {
                _this22.onFilter();
              }, 700);

              _this22.pnotifyService.success();
            }, function (error) {
              _this22.pnotifyService.error();
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(item) {
            this.router.navigate(["../detalhes-materiais"], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams({
                item: item
              })
            });
          }
        }, {
          key: "ableEditCell",
          value: function ableEditCell(item) {
            item.FORM_PERI_VEND = null;
            item.DATE_STAR_CALC = '';
            item.DATE_END_CALC = '';
            item.MEDI_VEND_CALC = 0;
            item.PERI_VEND_CALC = 0;
            item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
          }
        }, {
          key: "disableEditCell",
          value: function disableEditCell(item) {
            item.FORM_PERI_VEND = null;
            item.DATE_STAR_CALC = '';
            item.DATE_END_CALC = '';
            item.MEDI_VEND_CALC = 0;
            item.PERI_VEND_CALC = 0;
            item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
            this.handleCalcTotal();
          }
        }, {
          key: "calculateMediaVendas",
          value: function calculateMediaVendas(item) {
            var periodoMeses = item.FORM_PERI_VEND;
            var params = {
              ID_DEPO: item.ID_DEPO,
              ID_CLAS: item.ID_CLAS,
              ID_APOI_TIPO_MATE: item.ID_TIPO_MATE,
              TT_MESE_PERI_VEND: periodoMeses
            };
            this.getCalculoPeriodoVendasRealizadas(params, item);
          }
        }, {
          key: "getCalculoPeriodoVendasRealizadas",
          value: function getCalculoPeriodoVendasRealizadas(params, item) {
            var _this23 = this;

            this.dataMediaVendas = [];
            this.loaderNavbar = true;
            this.service.getCalculoPeriodoVendasRealizadas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this23.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this23.dataMediaVendas = res['body']['result'];
                    item.BOOL_CALC = true;
                    item.DATE_STAR_CALC = _this23.dataMediaVendas[0].DT_INIC_PERI_VEND;
                    item.DATE_END_CALC = _this23.dataMediaVendas[0].DT_FINA_PERI_VEND;
                    item.MEDI_VEND_CALC = _this23.dataMediaVendas[0].TT_MEDI_VEND_PERI;
                    item.PERI_VEND_CALC = _this23.dataMediaVendas[0].TT_VEND_PERI;

                    _this23.handleCalcTotal();
                  } else {
                    _this23.pnotifyService.notice(res['body']['message']);
                  }
                }
              }
            }, function (error) {
              _this23.pnotifyService.error('Erro ao realizar calculo do período de vendas');
            });
          }
        }, {
          key: "handleCalcTotal",
          value: function handleCalcTotal() {
            var getValueMediaVendas = 0;
            var total = 0;
            this.data.forEach(function (e) {
              if (e.MEDI_VEND_CALC != undefined) {
                getValueMediaVendas = e.MEDI_VEND_CALC;
              } else {
                getValueMediaVendas = e.TT_MEDI_VEND_PERI;
              }

              total = total + getValueMediaVendas;
            });
            this.dataTotal['TT_MEDI_VEND_PERI'] = total;
          }
        }, {
          key: "postNivelEstoqueMaterialDeposito",
          value: function postNivelEstoqueMaterialDeposito(record) {
            var _this24 = this;

            this.loaderNavbar = true;
            this.service.postNivelEstoqueMaterialDeposito(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this24.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  _this24.pnotifyService.success(res['message']);
                } else {
                  _this24.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this24.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "onCloseTabs",
          value: function onCloseTabs() {
            this.data.forEach(function (e) {
              e.SELECTED = false;
            });
            this.compressedTable = false;
          }
        }, {
          key: "OnExcel",
          value: function OnExcel() {
            var params = this.getParams();
            params['IN_RELA_EXCE'] = 1;
            params['ID_USUA'] = this.idUsuario;
            this.getSearchExcel(params);
          }
        }, {
          key: "OnEditMassa",
          value: function OnEditMassa() {
            this.periodoVendasMassa = this.form.value['TT_MESE_PERI_VEND_SIMU'];
            this.ableEditMassa = true;
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
            this.search(this.getParams());
          }
        }, {
          key: "OnSaveMassa",
          value: function OnSaveMassa() {
            var arrayTemp = [];
            this.data.map(function (e) {
              var periodoVendas = 0;
              var mesesVendas = 0;
              var mediaVendas = 0;
              var dateStart = '';
              var dateEnd = '';

              if (e.BOOL_CALC) {
                mesesVendas = parseInt(e.FORM_PERI_VEND);
                periodoVendas = e.PERI_VEND_CALC;
                mediaVendas = e.MEDI_VEND_CALC;
                dateStart = e.DATE_STAR_CALC;
                dateEnd = e.DATE_END_CALC;
              } else {
                mesesVendas = e.TT_MESE_PERI_VEND_SIMU;
                periodoVendas = e.TT_VEND_PERI_SIMU;
                mediaVendas = e.TT_MEDI_VEND_PERI_SIMU;
                dateStart = e.DT_INIC_PERI_VEND_SIMU;
                dateEnd = e.DT_FINA_PERI_VEND_SIMU;
              }

              var arrayTemp_ = {
                ID_DEPO: e.ID_DEPO,
                ID_CLAS: e.ID_CLAS,
                ID_APOI_TIPO_MATE: e.ID_TIPO_MATE,
                TT_PERI_VEND_MESE: mesesVendas,
                DT_INIC_PERI_VEND: dateStart,
                DT_FINA_PERI_VEND: dateEnd,
                TT_VEND_PERI: periodoVendas,
                TT_MEDI_VEND_PERI: mediaVendas,
                IN_STAT: 1
              };
              arrayTemp.push(arrayTemp_);
            });
            var record = {
              ID_TIPO_GRAV: 1,
              ID_USUA: parseInt(this.idUsuario),
              DATA: arrayTemp
            };
            this.onConfirmChange(this.service.postNivelEstoqueMaterialDeposito(record));
          }
        }, {
          key: "setDefaultValueFormModalNivelEstoque",
          value: function setDefaultValueFormModalNivelEstoque(item) {
            this.formModal.reset();
            this.formModal.get('TIPO_VARI').setValue('1');
            this.paramsRecord = {};

            if (item) {
              this.headerModalTipoMaterial = item.NM_TIPO_MATE;
              this.headerModalClasse = item.NM_CLAS;
              this.headerModalDeposito = item.NM_DEPO;
              this.headerModalPeriodo = item.TT_PERI_VEND_MESE;
              this.headerModalMediaVendas = item.TT_MEDI_VEND_PERI;
              this.headerModalEstoqueDisponivel = item.TT_ESTO_DISP;
              this.ableHeaderModalNivelEstoque = true;
              this.paramsRecord = {
                ID_TIPO_GRAV: 2,
                ID_CLAS: item.ID_CLAS,
                ID_APOI_TIPO_MATE: item.ID_TIPO_MATE,
                ID_DEPO: item.ID_DEPO
              };
            } else {
              this.ableHeaderModalNivelEstoque = false;
              this.paramsRecord = {
                ID_TIPO_GRAV: 1,
                ID_CLAS: this.form.value['ID_CLAS'],
                ID_APOI_TIPO_MATE: this.form.value['ID_TIPO_MATE']
              };
            }
          }
        }, {
          key: "OnSaveNivelEstoque",
          value: function OnSaveNivelEstoque() {
            var record = this.paramsRecord;
            var percetualVariacao = this.formModal.value['PERC_VARI_CONS'];
            var tipoVariacao = this.formModal.value['TIPO_VARI'];
            var diasEstoqueMinimo = this.formModal.value['DIAS_ESTO_MINI'];
            var diasEstoqueMedio = this.formModal.value['DIAS_ESTO_MEDI'];
            var diasEstoqueMaximo = this.formModal.value['DIAS_ESTO_MAXI'];
            record['VL_PERC_VARI_CONS'] = percetualVariacao ? parseFloat(percetualVariacao) : '', record['IN_PERC_VARI_CONS'] = tipoVariacao ? parseInt(tipoVariacao) : '', record['TT_DIAS_ESTO_MINI'] = diasEstoqueMinimo ? parseInt(diasEstoqueMinimo) : '', record['TT_DIAS_ESTO_MEDI'] = diasEstoqueMedio ? parseInt(diasEstoqueMedio) : '', record['TT_DIAS_ESTO_MAXI'] = diasEstoqueMaximo ? parseInt(diasEstoqueMaximo) : '', record['ID_USUA'] = parseInt(this.idUsuario), this.onConfirmChange(this.service.postNivelEstoque(record));
          }
        }, {
          key: "confirmChange",
          value: function confirmChange() {
            return this.confirmModalService.showConfirm(null, 'Confirmar alteração', 'Deseja realmente prosseguir com a alteração do(s) registro(s)?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "setColsNivelEstoqueTrue",
          value: function setColsNivelEstoqueTrue() {
            this.colsNivelEstoque = !this.colsNivelEstoque;
          }
          /* Ordenação */

        }, {
          key: "sort",
          value: function sort(key) {
            this.key = key;
            this.reverse = !this.reverse;
          }
          /* Ordenação */

          /* Paginação Tabela Principal*/

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

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
          key: "onFieldErrorModal",
          value: function onFieldErrorModal(field) {
            if (this.onFieldInvalidModal(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalidModal",
          value: function onFieldInvalidModal(field) {
            field = this.formModal.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequiredModal",
          value: function onFieldRequiredModal(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.formModal.controls[field].validator) {
              var validationResult = this.formModal.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
          /* Realiza comparação para verificar se volume minimo < volumeMedio < volume maximo */

        }, {
          key: "compareValuesEstoque",
          value: function compareValuesEstoque(field) {
            var minimo = this.formModal.get("DIAS_ESTO_MINI").value;
            var medio = this.formModal.get("DIAS_ESTO_MEDI").value;
            var maximo = this.formModal.get("DIAS_ESTO_MAXI").value;
            minimo = parseInt(minimo);
            medio = parseInt(medio);
            maximo = parseInt(maximo);

            if (this.formModal.get("DIAS_ESTO_MAXI").touched) {
              if (field == "DIAS_ESTO_MINI") {
                if (minimo > medio || minimo > maximo) {
                  this.minimoBool = false;
                  return true;
                } else {
                  this.minimoBool = true;
                }
              }

              if (field == "DIAS_ESTO_MEDI") {
                if (medio > maximo || medio < minimo) {
                  this.medioBool = false;
                  return true;
                } else {
                  this.medioBool = true;
                }
              }

              if (field == "DIAS_ESTO_MAXI") {
                if (maximo < minimo || maximo < medio) {
                  this.maximoBool = false;
                  return true;
                } else {
                  this.maximoBool = true;
                }
              }
            }
          }
          /* Validação para habilitar botão de salvar no modal Nivel Estoque*/

        }, {
          key: "validatorsSaveModal",
          value: function validatorsSaveModal() {
            if (this.minimoBool && this.medioBool && this.maximoBool) {
              this.enableSaveModal = true;
            } else {
              this.enableSaveModal = false;
            }

            return this.enableSaveModal;
          }
        }]);

        return AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent;
      }();

      AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]
        }];
      };

      AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]])], AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent);
      /***/
    },

    /***/
    "abXP":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/lista/lista.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function abXP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Parâmetros Gerais de Estoque\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"smModal.show()\"\r\n    [disabled]=\"!ableButtonEditMassa\"\r\n  >\r\n    Edição em massa\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"setDefaultValueFormModalNivelEstoque(null) + '' + smModal1.show()\"\r\n    [disabled]=\"!ableButtonCallModal\"\r\n  >\r\n    Calcular Nível Estoque\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [disabled]=\"true\"\r\n    (click)=\"OnExcel()\"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [disabled]=\"!ableEditMassa\"\r\n    (click)=\"OnSaveMassa()\"\r\n  >\r\n    Salvar em massa\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLink=\"../vinculo-deposito\"\r\n    >\r\n    Vincular depósitos\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"tipoMateriais\">Tipo de material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipoMateriais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_TIPO_MATE\"\r\n            [ngClass]=\"\r\n              onFieldError('ID_TIPO_MATE') + ' ' + onFieldRequired('ID_TIPO_MATE')\r\n            \"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('ID_TIPO_MATE')\"\r\n            message=\"Tipo de Materiais é obrigatório.\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            (change)=\"getSubLinhas() + '' + getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_LINH\"\r\n            [ngClass]=\"\r\n              onFieldError('ID_LINH') + ' ' + onFieldRequired('ID_LINH')\r\n            \"\r\n            >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('ID_LINH')\"\r\n            message=\"Linha é obrigatório.\"\r\n          >\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"subLinhas\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_SUB_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"classes\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getMateriais()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_CLAS\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"empresas\">Empresa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"empresas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getDepositos()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_FANT\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_EMPR\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"depositos\">Depósitos</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"depositos\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_DEPO\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_DEPO\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"materiais\">Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"materiais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"ID_REFE_ERP_NM_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_MATE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"situacoes\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"situations\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SITU\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"IN_STAT\"\r\n            [ngClass]=\"\r\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('IN_STAT')\"\r\n              message=\"Situação é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\" *ngIf=\"loading\">\r\n    <div class=\"col-lg-6\">\r\n      <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\r\n    </div>\r\n    <div class=\"col-lg-6 d-flex justify-content-end\" *ngIf=\"ableEditMassa\">\r\n      <p>\r\n        <strong>PERÍODO DE VENDAS SIMULADO:</strong> {{ periodoVendasMassa }} MESES\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row m-0\">\r\n    <div class=\"table-responsive\" [ngClass]=\"{'col-12': !compressedTable, 'col-7 pr-0': compressedTable}\" *ngIf=\"loading\">\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template let-thead #thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_TIPO_MATE')\">\r\n              Tipo material\r\n              <span *ngIf=\"key == 'NM_TIPO_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_TIPO_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\" [hidden]=\"colsNivelEstoque || ableEditMassa\">\r\n              Linha\r\n              <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\" [hidden]=\"colsNivelEstoque || ableEditMassa\">\r\n              Sublinha\r\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n              Classe\r\n              <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_EMPR')\" [hidden]=\"colsNivelEstoque || ableEditMassa\">\r\n              Empresa\r\n              <span *ngIf=\"key == 'NM_EMPR'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_DEPO')\">\r\n              Depósito\r\n              <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_PERI_VEND_MESE')\" [hidden]=\"colsNivelEstoque\">\r\n              Per. vendas\r\n              <span *ngIf=\"key == 'TT_PERI_VEND_MESE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_PERI_VEND_MESE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" [hidden]=\"colsNivelEstoque\">\r\n              Período\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_MEDI_VEND_PERI')\" [hidden]=\"colsNivelEstoque\">\r\n              Média Vendas\r\n              <span *ngIf=\"key == 'TT_MEDI_VEND_PERI'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_MEDI_VEND_PERI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_ESTO_DISP')\">\r\n              Estoque Disponível\r\n              <span *ngIf=\"key == 'TT_ESTO_DISP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_DISP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NR_DIAS_GIRO')\" [hidden]=\"colsNivelEstoque\">\r\n              GIRO\r\n              <span *ngIf=\"key == 'NR_DIAS_GIRO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NR_DIAS_GIRO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\">\r\n            <!-- <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\"> -->\r\n              Nível Estoque\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"setColsNivelEstoqueTrue()\"\r\n              >\r\n                <i\r\n                  [ngClass]=\"colsNivelEstoque ? 'fas fa-minus' : 'fas fa-plus'\"\r\n                  title=\"Mostrar Nivel Estoque\"\r\n                  aria-hidden=\"true\"\r\n                ></i>\r\n              </button>\r\n              <!-- <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span> -->\r\n            </th>\r\n            <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MINI')\" *ngIf=\"colsNivelEstoque\">\r\n              Estoque mínimo\r\n              <span *ngIf=\"key == 'TT_ESTO_MINI'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_MINI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MEDI')\" *ngIf=\"colsNivelEstoque\">\r\n              Estoque médio\r\n              <span *ngIf=\"key == 'TT_ESTO_MEDI'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_MEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MAXI')\" *ngIf=\"colsNivelEstoque\">\r\n              Estoque máximo\r\n              <span *ngIf=\"key == 'TT_ESTO_MAXI'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'TT_ESTO_MAXI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" *ngIf=\"colsNivelEstoque\">\r\n              % Variação\r\n              <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" *ngIf=\"colsNivelEstoque\">\r\n              Último cálculo\r\n              <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                ><i\r\n                  [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover bg-secondary text-white\" (click)=\"sort('TT_MESE_PERI_VEND_SIMU')\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\r\n              Per. vendas(Simulado)\r\n              <span *ngIf=\"key == 'TT_MESE_PERI_VEND_SIMU'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_MESE_PERI_VEND_SIMU'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover bg-secondary text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\r\n              Período(Simulado)\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover bg-secondary text-white\" (click)=\"sort('TT_MEDI_VEND_PERI_SIMU')\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\r\n              Média Vendas(Simulado)\r\n              <span *ngIf=\"key == 'TT_MEDI_VEND_PERI_SIMU'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_MEDI_VEND_PERI_SIMU'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\"></th>\r\n            <th nowrap scope=\"col\" class=\"hover\" [ngClass]=\"ableEditMassa ? 'bg-secondary' : ''\" [hidden]=\"colsNivelEstoque\" width=\"4%\"></th>\r\n            <th nowrap scope=\"col\" class=\"hover\" [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template let-tbody #tbody>\r\n          <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\r\n            <td nowrap class=\"text-left\" [ngClass]=\"{\r\n              'border-danger' :  item.IN_STAT == 0,\r\n              'border-success' :  item.IN_STAT == 1,\r\n              'bg-row-selected' :  item.SELECTED\r\n              }\">\r\n              {{ item.NM_TIPO_MATE }}\r\n            </td>\r\n            <td nowrap class=\"text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\">{{ item.NM_LINH }}</td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>\r\n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n            <td nowrap class=\"text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\">{{ item.NM_EMPR }}</td>\r\n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-left\">{{ item.NM_DEPO }}</td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\r\n              <span *ngIf=\"!item.ON_EDIT_CELL || ableEditMassa\">\r\n                {{ item.TT_PERI_VEND_MESE | number: '0.0' }}\r\n                <!-- <span class=\"btn-icon-sm ml-1\">\r\n                  <i\r\n                    class=\"fas fa-info-circle\"\r\n                    tooltip=\"Há materiais com parametrizações diferentes\"\r\n                    aria-hidden=\"true\"\r\n                  >\r\n                  </i>\r\n                </span> -->\r\n              </span>\r\n              <div class=\"d-flex align-items-center justify-content-end\" *ngIf=\"item.ON_EDIT_CELL && !ableEditMassa\">\r\n                <input\r\n                  style=\"max-width: 80px;\"\r\n                  type=\"text\"\r\n                  class=\"form-control form-control-sm\"\r\n                  placeholder=\"0\"\r\n                  [(ngModel)]=\"item.FORM_PERI_VEND\"\r\n                  #FORM_PERI_VEND_VALI=\"ngModel\"\r\n                  [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\"\r\n                  required\r\n                />\r\n                <!-- name=\"toneladaEditado_{{i}}\" -->\r\n                <button class=\"btn-icon-sm ml-1\" (click)=\"calculateMediaVendas(item)\">\r\n                  <i class=\"fas fa-sync text-success\" tooltip=\"Calcular\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\r\n              <span *ngIf=\"!item.ON_EDIT_CELL || ableEditMassa\">\r\n                {{ item.DT_INIC_PERI_VEND ? (item.DT_INIC_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }}\r\n                  à\r\n                {{ item.DT_FINA_PERI_VEND ? (item.DT_FINA_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }}\r\n              </span>\r\n              <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL  && !ableEditMassa\">\r\n                {{ item.DATE_STAR_CALC ? (item.DATE_STAR_CALC | date: 'dd/MM/yyyy') : '--/--/----' }}\r\n                  à\r\n                {{ item.DATE_END_CALC ? (item.DATE_END_CALC | date: 'dd/MM/yyyy') : '--/--/----' }}\r\n              </span>\r\n            </td>\r\n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\" [hidden]=\"colsNivelEstoque\">\r\n              <span *ngIf=\"!item.ON_EDIT_CELL || ableEditMassa\">\r\n                {{ item.TT_MEDI_VEND_PERI | number: '0.3'}}\r\n              </span>\r\n              <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL  && !ableEditMassa\">\r\n                {{ item.MEDI_VEND_CALC ? (item.MEDI_VEND_CALC | number:'0.3') : '0,000'}}\r\n              </span>\r\n            </td>\r\n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\"> {{ item.TT_ESTO_DISP | number: '0.3'}} </td>\r\n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\" [hidden]=\"colsNivelEstoque\"> {{ item.NR_DIAS_GIRO | number: '0.0'}} </td>\r\n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-right\">\r\n              {{ item.DS_APOI_TIPO_NIVE_ESTO }}\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"setDefaultValueFormModalNivelEstoque(item) + '' +smModal1.show()\"\r\n                [disabled]=\"item.TT_PERI_VEND_MESE == 0 || item.TT_PERI_VEND_MESE == null\"\r\n                *ngIf=\"!item.ON_EDIT_CELL\"\r\n              >\r\n                <i class=\"fas fa-calculator\" tooltip=\"Calcular nível de estoque\"></i>\r\n              </button>\r\n            </td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MINI + ' dias - ' : ''}} {{item.TT_ESTO_MINI | number: '0.3'}}</td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MEDI + ' dias - ' : ''}} {{item.TT_ESTO_MEDI | number: '0.3'}}</td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MAXI + ' dias - ' : ''}} {{item.TT_ESTO_MAXI | number: '0.3'}}</td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.TT_PERC_VARI_CONS ?  (item.TT_PERC_VARI_CONS | number: '0.2'): (0 | number:'0.2') }} %</td>\r\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.DT_ULTI_CALC_ESTO ? (item.DT_ULTI_CALC_ESTO | date: 'dd/MM/yyyy HH:mm') : '--/--/----  --:--' }}</td>\r\n            <td nowrap class=\"bg-secondary text-center text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\r\n              <span *ngIf=\"!item.ON_EDIT_CELL\">\r\n                {{ item.TT_MESE_PERI_VEND_SIMU }}\r\n              </span>\r\n              <div class=\"d-flex align-items-center justify-content-end\" *ngIf=\"item.ON_EDIT_CELL\">\r\n                <input\r\n                  style=\"max-width: 80px;\"\r\n                  type=\"text\"\r\n                  class=\"form-control form-control-sm\"\r\n                  placeholder=\"0\"\r\n                  [(ngModel)]=\"item.FORM_PERI_VEND\"\r\n                  #FORM_PERI_VEND_VALI=\"ngModel\"\r\n                  [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\"\r\n                  required\r\n                />\r\n                <!-- name=\"toneladaEditado_{{i}}\" -->\r\n                <button class=\"btn-icon-sm ml-1\" (click)=\"calculateMediaVendas(item)\">\r\n                  <i class=\"fas fa-sync text-success\" tooltip=\"Calcular\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td nowrap class=\"bg-secondary text-center text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\r\n              <span *ngIf=\"!item.ON_EDIT_CELL\">\r\n                {{ item.DT_INIC_PERI_VEND_SIMU ? (item.DT_INIC_PERI_VEND_SIMU | date: 'dd/MM/yyy') : '--/--/----' }}\r\n                  à\r\n                {{ item.DT_FINA_PERI_VEND_SIMU ? (item.DT_FINA_PERI_VEND_SIMU | date: 'dd/MM/yyy') : '--/--/----' }}\r\n              </span>\r\n              <span class=\"text-warning\" *ngIf=\"item.ON_EDIT_CELL\">\r\n                {{ item.DATE_STAR_CALC ? (item.DATE_STAR_CALC | date: 'dd/MM/yyyy') : '--/--/----' }}\r\n                  à\r\n                {{ item.DATE_END_CALC ? (item.DATE_END_CALC | date: 'dd/MM/yyyy') : '--/--/----' }}\r\n              </span>\r\n            </td>\r\n            <td nowrap class=\"bg-secondary text-center text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\r\n              <span *ngIf=\"!item.ON_EDIT_CELL\">\r\n                {{ item.TT_MEDI_VEND_PERI_SIMU | number:'0.3' }}\r\n              </span>\r\n              <span class=\"text-warning\" *ngIf=\"item.ON_EDIT_CELL\">\r\n                {{ item.MEDI_VEND_CALC ? (item.MEDI_VEND_CALC | number:'0.3') : '0,000'}}\r\n              </span>\r\n            </td>\r\n            <td nowrap class=\"text-center\"  [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Salvar\"\r\n                  (click)=\"onEdit(item)\"\r\n                  [disabled]=\"(item.FORM_PERI_VEND == '' || item.FORM_PERI_VEND == null) || !item.BOOL_CALC\"\r\n                >\r\n                <i class=\"fas fa-save\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"ableEditMassa ? 'bg-secondary' : ''\" [hidden]=\"colsNivelEstoque\" width=\"4%\">\r\n              <div *ngIf=\"!item.ON_EDIT_CELL\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  placement=\"left\"\r\n                  (click)=\"ableEditCell(item)\"\r\n                >\r\n                  <i\r\n                    class=\"fas fa-edit\"\r\n                    [ngClass]=\"ableEditMassa ? 'text-white' : ''\"\r\n                    tooltip=\"Editar\"\r\n                  >\r\n                  </i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"item.ON_EDIT_CELL\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  placement=\"left\"\r\n                  (click)=\"disableEditCell(item)\"\r\n                >\r\n                  <i\r\n                    class=\"fas fa-times text-danger\"\r\n                    [ngClass]=\"ableEditMassa ? 'text-white' : ''\"\r\n                    tooltip=\"Cancelar edição\"\r\n                  >\r\n                  </i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td nowrap  class=\"text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Detalles materiais\"\r\n                  placement=\"left\"\r\n                  (click)=\"onDetails(item)\"\r\n                >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td nowrap class=\"bg-dark text-white text-left border-dark\">TOTAL</td>\r\n            <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-left\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['TT_MEDI_VEND_PERI'] | number: '0.3' }} </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"> {{ dataTotal['TT_ESTO_DISP'] | number: '0.3' }} </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['NR_DIAS_GIRO'] | number: '0.0' }} </td>\r\n            <td nowrap class=\"bg-dark text-white text-center\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || !ableEditMassa\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || !ableEditMassa\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || !ableEditMassa\"> {{ dataTotal['TT_MEDI_VEND_PERI_SIMU'] | number: '0.3' }}</td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>\r\n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"col-lg-12 mb-2 ml-2\" *ngIf=\"data.length > itemsPerPage && loading\">\r\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"data?.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div\r\n      *ngIf=\"noResult\"\r\n      class=\"col-lg-12 d-flex justify-content-center align-items-center p-5\"\r\n      style=\"height: 80%;\"\r\n    >\r\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n<!-- Modal Edição em massa -->\r\n<div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">Período de Vendas</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"TT_MESE_PERI_VEND_SIMU\">Meses</label>\r\n              <input\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"TT_MESE_PERI_VEND_SIMU\"\r\n                class=\"form-control\"\r\n              >\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"d-flex justify-content-end\">\r\n          <button\r\n            class=\"btn btn-primary\"\r\n            (click)=\"OnEditMassa() + '' + smModal.hide()\"\r\n          >\r\n            Enviar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal Calcular Nível de estoque -->\r\n<div bsModal #smModal1=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\" *ngIf=\"ableHeaderModalNivelEstoque\">Calcular Nível Estoque - Por Classe</h4>\r\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\" *ngIf=\"!ableHeaderModalNivelEstoque\">Calcular Nível Estoque - Em Massa</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal1.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div *ngIf=\"ableHeaderModalNivelEstoque\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n              <p>\r\n                <strong>TIPO DE MATERIAL</strong><br />\r\n                {{ headerModalTipoMaterial }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <p>\r\n                <strong>DEPÓSITO</strong><br />\r\n                {{ headerModalDeposito }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <p>\r\n                <strong>CLASSE</strong><br />\r\n                {{ headerModalClasse }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n              <p>\r\n                <strong>PERÍODO</strong><br />\r\n                {{ headerModalPeriodo | number: '0.0' }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <p>\r\n                <strong>MÉDIA DE VENDAS</strong><br />\r\n                {{ headerModalMediaVendas | number: '0.3' }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <p>\r\n                <strong>ESTOQUE DISPONÍVEL</strong><br />\r\n                {{ headerModalEstoqueDisponivel | number: '0.3' }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <form [formGroup]=\"formModal\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"PERC_VARI_CONS\">% Variação de consumo </label>\r\n              <input\r\n                type=\"text\"\r\n                id=\"DIAS_ESTO_MINI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"PERC_VARI_CONS\"\r\n                currencyMask\r\n                [options]=\"decimal\"\r\n                placeholder=\"0,00\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                  onFieldErrorModal('PERC_VARI_CONS') + ' ' + onFieldRequiredModal('PERC_VARI_CONS')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('PERC_VARI_CONS')\"\r\n                message=\"% Variação de consumo é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-6 mt-4\">\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"TIPO_VARI_POSI\"\r\n                  name=\"TIPO_VARI\"\r\n                  class=\"custom-control-input\"\r\n                  value=\"1\"\r\n                  formControlName=\"TIPO_VARI\">\r\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_POSI\">Aumento</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"TIPO_VARI_NEGA\"\r\n                  name=\"TIPO_VARI\"\r\n                  class=\"custom-control-input\"\r\n                  value=\"0\"\r\n                  formControlName=\"TIPO_VARI\">\r\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_NEGA\">Redução</label>\r\n              </div>\r\n              <!-- <invalid-form-control [show]=\"onFieldInvalid('TIPO_VARI')\" message=\"Tipo variação é obrigatório.\"></invalid-form-control> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DIAS_ESTO_MINI\">Dias de estoque mínimo</label>\r\n              <input\r\n                type=\"number\"\r\n                id=\"DIAS_ESTO_MINI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"DIAS_ESTO_MINI\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                onFieldErrorModal('DIAS_ESTO_MINI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MINI')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MINI')\"\r\n                message=\"Dias de estoque mínimo é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n              <invalid-form-control\r\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MINI')\"\r\n                  message=\"Deve ser menor que volume máximo ou segurança\"\r\n                  >\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DIAS_ESTO_MEDI\">Dias de estoque médio</label>\r\n              <input\r\n                type=\"number\"\r\n                id=\"DIAS_ESTO_MEDI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"DIAS_ESTO_MEDI\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                onFieldErrorModal('DIAS_ESTO_MEDI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MEDI')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MEDI')\"\r\n                message=\"Dias de estoque médio é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n              <invalid-form-control\r\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MEDI')\"\r\n                  message=\"Deve ser menor que máximo ou maior que mínimo\"\r\n                  >\r\n                </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DIAS_ESTO_MAXI\">Dias de estoque máximo</label>\r\n              <input\r\n                type=\"number\"\r\n                id=\"DIAS_ESTO_MAXI\"\r\n                placeholder=\"INSERIR...\"\r\n                formControlName=\"DIAS_ESTO_MAXI\"\r\n                class=\"form-control\"\r\n                [ngClass]=\"\r\n                onFieldErrorModal('DIAS_ESTO_MAXI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MAXI')\r\n                \"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MAXI')\"\r\n                message=\"Dias de estoque máximo é obrigatório.\"\r\n              >\r\n              </invalid-form-control>\r\n              <invalid-form-control\r\n                [show]=\"compareValuesEstoque('DIAS_ESTO_MAXI')\"\r\n                message=\"Deve ser maior que mínimo ou segurança\"\r\n              >\r\n              </invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"d-flex justify-content-end\">\r\n          <button\r\n            class=\"btn btn-primary\"\r\n            (click)=\"OnSaveNivelEstoque() + '' + smModal1.hide()\"\r\n            [disabled]=\"formModal.status == 'INVALID' || !validatorsSaveModal()\"\r\n          >\r\n            Enviar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "atLl":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/parametros-gerais-estoque.service.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueService */

    /***/
    function atLl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueService", function () {
        return AbastecimentoCadastrosParametrosGeraisEstoqueService;
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

      var AbastecimentoCadastrosParametrosGeraisEstoqueService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosParametrosGeraisEstoqueService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosParametrosGeraisEstoqueService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosParametrosGeraisEstoqueService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/empresas"), {
              params: {
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/depositos"), {
              params: {
                ID_EMPR: params['idsEmpresa'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/tipos-material"), {
              params: {
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              params: {
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/sub-linhas"), {
              params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                ID_SUB_LINH: params['idSubLinha'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/materiais"), {
              params: {
                ID_CLAS: params['idClasses'].toString(),
                ID_APOI_TIPO_MATE: params['idTipoMaterial'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getNivelEstoqueClasseDeposito",
          value: function getNivelEstoqueClasseDeposito(_params) {
            var _a, _b, _c, _d;

            var params = {
              ID_EMPR: _params['ID_EMPR'] ? _params['ID_EMPR'].toString() : '',
              ID_CLAS: _params['ID_CLAS'] ? _params['ID_CLAS'].toString() : '',
              ID_DEPO: _params['ID_DEPO'] ? _params['ID_DEPO'].toString() : '',
              ID_LINH: _params['ID_LINH'] ? _params['ID_LINH'].toString() : '',
              ID_MATE: _params['ID_MATE'] ? _params['ID_MATE'].toString() : '',
              ID_SUB_LINH: _params['ID_SUB_LINH'] ? _params['ID_SUB_LINH'].toString() : '',
              ID_TIPO_MATE: _params['ID_TIPO_MATE'] ? _params['ID_TIPO_MATE'].toString() : '',
              IN_STAT: (_a = _params['IN_STAT']) !== null && _a !== void 0 ? _a : '',
              IN_RELA_EXCE: (_b = _params['IN_RELA_EXCE']) !== null && _b !== void 0 ? _b : '',
              TT_MESE_PERI_VEND_SIMU: (_c = _params['TT_MESE_PERI_VEND_SIMU']) !== null && _c !== void 0 ? _c : '',
              ID_USUA: (_d = _params['ID_USUA']) !== null && _d !== void 0 ? _d : ''
            };
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-classes-depositos"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getCalculoPeriodoVendasRealizadas",
          value: function getCalculoPeriodoVendasRealizadas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/vendas-realizadas-classe-periodo"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getCalculoPeriodoVendasRealizadasMaterial",
          value: function getCalculoPeriodoVendasRealizadasMaterial(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/vendas-realizadas-material-periodo"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getCalculoPeriodoVendasRealizadasClasseMaterial",
          value: function getCalculoPeriodoVendasRealizadasClasseMaterial(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/vendas-realizadas-classe-material-periodo"), {
              params: params,
              observe: "response"
            });
          }
          /* Detalhes de Materiais */

        }, {
          key: "getTiposNiveisdeEstoque",
          value: function getTiposNiveisdeEstoque() {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/tipos-niveis-estoque"), {
              observe: "response"
            });
          }
        }, {
          key: "getNivelEstoqueMaterialDeposito",
          value: function getNivelEstoqueMaterialDeposito(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-materiais-deposito"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postNivelEstoqueMaterialDeposito",
          value: function postNivelEstoqueMaterialDeposito(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-material-deposito"), record);
          }
        }, {
          key: "postNivelEstoqueMaterialDepositoAltearar",
          value: function postNivelEstoqueMaterialDepositoAltearar(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/deposito-associado-material-alterar"), record);
          }
        }, {
          key: "getNivelEstoqueMaterialDepositoLogs",
          value: function getNivelEstoqueMaterialDepositoLogs(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-material-deposito-auditoria"), {
              params: params,
              observe: "response"
            });
          }
          /* Detalhes de Materiais */

          /* Vinculo Material Depósito */

        }, {
          key: "getMaterialDepositos",
          value: function getMaterialDepositos(_params) {
            var _a;

            var params = {
              ID_DEPO: _params['ID_DEPO'] ? _params['ID_DEPO'].toString() : '',
              ID_APOI_TIPO_MATE: _params['ID_APOI_TIPO_MATE'] ? _params['ID_APOI_TIPO_MATE'].toString() : '',
              ID_LINH: _params['ID_LINH'] ? _params['ID_LINH'].toString() : '',
              ID_SUB_LINH: _params['ID_SUB_LINH'] ? _params['ID_SUB_LINH'].toString() : '',
              ID_CLAS: _params['ID_CLAS'] ? _params['ID_CLAS'].toString() : '',
              ID_SITU_MATE: (_a = _params['ID_SITU_MATE']) !== null && _a !== void 0 ? _a : ''
            };
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/materiais-disponiveis-associacao-depositos"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postMaterialDeposito",
          value: function postMaterialDeposito(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/deposito-associado-material"), record);
          }
        }, {
          key: "getMaterialDepositosDetalhes",
          value: function getMaterialDepositosDetalhes(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/depositos-associados-materiais"), {
              params: params,
              observe: "response"
            });
          }
          /* Vinculo Material Depósito */

          /* Cadastro de Niveis de Estoque */

        }, {
          key: "postNivelEstoque",
          value: function postNivelEstoque(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-totais"), record);
          }
        }]);

        return AbastecimentoCadastrosParametrosGeraisEstoqueService;
      }();

      AbastecimentoCadastrosParametrosGeraisEstoqueService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosParametrosGeraisEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AbastecimentoCadastrosParametrosGeraisEstoqueService);
      /***/
    },

    /***/
    "gXJx":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/vinculo-depositos/vinculo-depositos.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent */

    /***/
    function gXJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent", function () {
        return AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vinculo_depositos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vinculo-depositos.component.html */
      "rR6Q");
      /* harmony import */


      var _vinculo_depositos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vinculo-depositos.component.scss */
      "8C7E");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../parametros-gerais-estoque.service */
      "atLl");

      var AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent(activatedRoute, router, formBuilder, pnotifyService, confirmModalService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.loading = false;
          this.noResult = false;
          this.compressedTable = false;
          this.selectedRow = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.depositos = [];
          this.linhas = [];
          this.subLinhas = [];
          this.classes = [];
          this.data = [];
          this.tipoMateriais = [];
          /* Modal */

          this.loadingModal = false;
          this.noResultModal = false;
          this.dataModal = [];
          this.empresasModal = [];
          this.depositosModal = [];
          /* Modal */

          this.tipoSituacao = [{
            id: 1,
            name: "Não vínculado"
          }, {
            id: 2,
            name: "Vínculado"
          }, {
            id: 3,
            name: "Todos"
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.subtitles = [{
            text: 'Vínculado',
            color: 'green'
          }, {
            text: 'Não vínculado',
            color: 'red'
          }];
          /* Ordenação */

          this.reverse = false;
          this.key = 'TP_MATE';
          /* Ordenação */

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_APOI_TIPO_MATE';
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
          this.form = this.formBuilder.group({
            ID_DEPO: [null],
            ID_APOI_TIPO_MATE: [null],
            ID_LINH: [null],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            ID_SITU_MATE: [null]
          });
          this.formModal = this.formBuilder.group({
            ID_EMPR: [null],
            ID_DEPO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            setTimeout(function () {
              _this25.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Parâmetros gerais de estoque');
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getLinhas();
            this.getTiposMateriais();
            this.getDepositos();
            this.setDisabledItemsForm();
            this.checkRouterParams();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this26 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this26.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Parâmetros gerais de estoque',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/parametros-gerais-estoque/lista")
              }, {
                descricao: 'Víncular depósitos'
              }];
            });
          }
        }, {
          key: "setDisabledItemsForm",
          value: function setDisabledItemsForm() {
            this.form.get('ID_SITU_MATE').setValue(3);
            this.form.get('ID_SUB_LINH').disable();
            this.form.get('ID_CLAS').disable();
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this27 = this;

            this.loaderNavbar = true;
            this.depositos = [];
            var params = {
              idsEmpresa: "",
              idSituacao: 1
            };
            this.service.getDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this27.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this27.form.get('ID_DEPO').enable();

                  _this27.depositos = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this27.form.get('ID_DEPO').reset();

                  _this27.form.get('ID_DEPO').disable();
                }
              }
            }, function (error) {
              _this27.pnotifyService.error('Erro ao carregar Depositos');
            });
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais() {
            var _this28 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.tipoMateriais = [];
            this.service.getTiposMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this28.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this28.tipoMateriais = res['body']['result'];
              }
            }, function (error) {
              _this28.pnotifyService.error('Erro ao carregar tipos materiais');
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this29 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this29.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this29.linhas = res['body']['result'];
                }
              }
            }, function (error) {
              _this29.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this30 = this;

            this.loaderNavbar = true;
            this.subLinhas = [];

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
              };
              this.service.getSubLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this30.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this30.subLinhas = res['body']['result'];

                      _this30.form.get('ID_SUB_LINH').reset();

                      _this30.form.get('ID_SUB_LINH').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this30.form.get('ID_SUB_LINH').reset();

                      _this30.form.get('ID_SUB_LINH').disable();

                      _this30.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this30.pnotifyService.error('Erro ao carregar sublinhas');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_SUB_LINH').reset();
              this.form.get('ID_SUB_LINH').disable();
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this31 = this;

            this.classes = [];
            this.loaderNavbar = true;

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSubLinha = this.form.get('ID_SUB_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao: idSituacao
              };
              this.service.getClasses(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this31.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this31.classes = res['body']['result'];

                      _this31.form.get('ID_CLAS').reset();

                      _this31.form.get('ID_CLAS').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this31.form.get('ID_CLAS').reset();

                      _this31.form.get('ID_CLAS').disable();
                    }
                  }
                }
              }, function (error) {
                _this31.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_CLAS').reset();
              this.form.get('ID_CLAS').disable();
            }
          }
        }, {
          key: "getEmpresasModal",
          value: function getEmpresasModal() {
            var _this32 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.empresasModal = [];
            this.service.getEmpresas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this32.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this32.empresasModal = res['body']['result'];
              }
            }, function (error) {
              _this32.pnotifyService.error('Erro ao carregar Empresas');
            });
          }
        }, {
          key: "getDepositosModal",
          value: function getDepositosModal() {
            var _this33 = this;

            this.loaderNavbar = true;
            this.depositosModal = [];
            var idsEmpresa = this.formModal.get('ID_EMPR').value;
            var idSituacao = 1;
            var params = {
              idsEmpresa: idsEmpresa !== null && idsEmpresa !== void 0 ? idsEmpresa : "",
              idSituacao: idSituacao
            };
            this.service.getDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this33.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this33.formModal.get('ID_DEPO').reset();

                  _this33.formModal.get('ID_DEPO').enable();

                  _this33.depositosModal = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this33.formModal.get('ID_DEPO').reset();

                  _this33.formModal.get('ID_DEPO').disable();
                }
              }
            }, function (error) {
              _this33.pnotifyService.error('Erro ao carregar Depositos');
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this34 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this34.routerService.getBase64UrlParams(queryParams);

                _this34.search(_response);

                _this34.setFormValues(_response);
              }
            });
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this35 = this;

            var _a, _b;

            var linhas = (_a = queryParams['ID_LINH']) !== null && _a !== void 0 ? _a : '';
            /* classes */

            if (Object.keys(linhas).length > 0) {
              var paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_b = queryParams['ID_SUB_LINH']) !== null && _b !== void 0 ? _b : "",
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getClasses(paramsClasse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this35.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this35.classes = res['body']['result'];

                      _this35.form.get('ID_CLAS').enable();
                    }
                  }
                }
              }, function (error) {
                _this35.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.form.get('ID_CLAS').disable();
            }
            /* sublinhas */


            if (Object.keys(linhas).length > 0) {
              var paramsSubLinha = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getSubLinhas(paramsSubLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this35.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status == 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this35.subLinhas = res['body']['result'];

                      _this35.form.get('ID_SUB_LINH').enable();
                    }
                  }
                }
              }, function (error) {
                _this35.pnotifyService.error('Erro ao carregar subLinha');
              });
            } else {
              this.form.get('ID_SUB_LINH').disable();
            }

            this.form.patchValue(queryParams);
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
            this.search(this.getParams());
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this36 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.data = [];
            this.begin = 0;
            this.service.getMaterialDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this36.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this36.loading = true;
                  _this36.noResult = false;
                  _this36.data = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this36.noResult = true;
                  _this36.loading = false;

                  _this36.pnotifyService.notice('Não há data');
                }
              }
            }, function (error) {
              _this36.noResult = true;
              _this36.loading = false;

              _this36.pnotifyService.error('Erro ao carregar lista de material depósito');
            });
          }
          /* Modal */

        }, {
          key: "sendDataModal",
          value: function sendDataModal(item) {
            var _a, _b;

            this.linhaModal = item.NM_LINH;
            this.idSubLinhaModal = (_a = item.ID_SUB_LINH) !== null && _a !== void 0 ? _a : '';
            this.subLinhaModal = (_b = item.NM_SUB_LINH) !== null && _b !== void 0 ? _b : '';
            this.idClasseModal = item.ID_CLAS;
            this.classeModal = item.NM_CLAS;
            this.idTipoMaterialModal = item.ID_APOI_TIPO_MATE;
            this.tipoMaterialModal = item.NM_APOI_TIPO_MATE;
            this.depositosAssociadosModal = item.TT_DEPO_ASSO;
            this.getEmpresasModal();
            this.getDepositosModal();
            this.loadDepositosAssociados();
          }
        }, {
          key: "onSaveDataModal",
          value: function onSaveDataModal() {
            var depositos = this.formModal.get("ID_DEPO").value;
            var record = {
              ID_CLAS: this.idClasseModal,
              ID_APOI_TIPO_MATE: this.idTipoMaterialModal,
              ID_DEPO: depositos.toString(),
              IN_STAT: 1,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.postMaterialDeposito(record);
          }
        }, {
          key: "postMaterialDeposito",
          value: function postMaterialDeposito(record) {
            var _this37 = this;

            this.loaderNavbar = true;
            this.service.postMaterialDeposito(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this37.loaderNavbar = false, _this37.resetValuesForm(), _this37.loadDepositosAssociados();
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  _this37.pnotifyService.success(res['message']);
                } else {
                  _this37.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this37.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "loadDepositosAssociados",
          value: function loadDepositosAssociados() {
            this.getDepositosAssociados({
              ID_CLAS: this.idClasseModal,
              ID_APOI_TIPO_MATE: this.idTipoMaterialModal
            });
          }
        }, {
          key: "getDepositosAssociados",
          value: function getDepositosAssociados(params) {
            var _this38 = this;

            this.loaderNavbar = true;
            this.loadingModal = false;
            this.noResultModal = false;
            this.service.getMaterialDepositosDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this38.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this38.loadingModal = true;
                  _this38.dataModal = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this38.noResultModal = true;

                  _this38.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this38.pnotifyService.error('Erro ao carregar depósitos associados');
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            var _this39 = this;

            var stat = item.IN_STAT == 1 ? 0 : 1;
            var record = {
              ID_ASSO_DEPO_MATE: item.ID,
              ID_CLAS: item.ID_CLAS,
              ID_APOI_TIPO_MATE: item.ID_APOI_TIPO_MATE,
              ID_DEPO: item.ID_DEPO,
              IN_STAT: stat,
              ID_USUA: parseInt(this.idUsuario)
            }; // item.ID_USUA = parseInt(this.idUsuario);
            // item.ID_USUA = parseInt(this.idUsuario);

            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
              _this39.loaderNavbar = true;
              item.IN_STAT = stat; // console.log(item)

              return _this39.service.postNivelEstoqueMaterialDepositoAltearar(record);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this39.loaderNavbar = false;
            })).subscribe(function (success) {
              _this39.pnotifyService.success();
            }, function (error) {
              item.IN_STAT = item.IN_STAT == 1 ? 0 : 1;

              _this39.pnotifyService.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.formModal.get('ID_EMPR').reset();
            this.formModal.get('ID_DEPO').reset();
          }
        }, {
          key: "handleFormSituacao",
          value: function handleFormSituacao() {
            console.log(this.form.value['ID_DEPO']);

            if (this.form.value['ID_DEPO'] !== null) {
              this.form.get('ID_SITU_MATE').reset();
              this.tipoSituacao = [{
                id: 1,
                name: "Não vínculado"
              }, {
                id: 2,
                name: "Vínculado"
              }];
              this.form.get('ID_SITU_MATE').setValue(2);
            } else {
              this.form.get('ID_SITU_MATE').reset();
              this.tipoSituacao = [{
                id: 1,
                name: "Não vínculado"
              }, {
                id: 2,
                name: "Vínculado"
              }, {
                id: 3,
                name: "Todos"
              }];
              this.form.get('ID_SITU_MATE').setValue(3);
            } //this.formModal.get('ID_SITU_MATE').disable();

          }
          /* Modal */

        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldErrorModal",
          value: function onFieldErrorModal(field) {
            if (this.onFieldInvalidModal(field)) {
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
          key: "onFieldInvalidModal",
          value: function onFieldInvalidModal(field) {
            field = this.formModal.get(field);
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
          key: "onFieldRequiredModal",
          value: function onFieldRequiredModal(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.formModal.controls[field].validator) {
              var validationResult = this.formModal.controls[field].validator(formControl);
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

          /* Paginação Tabela Principal*/

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

        return AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent;
      }();

      AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]
        }];
      };

      AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'vinculo-depositos',
        template: _raw_loader_vinculo_depositos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vinculo_depositos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]])], AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent);
      /***/
    },

    /***/
    "qqwt":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/parametros-gerais-estoque-routing.module.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule */

    /***/
    function qqwt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule", function () {
        return AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule;
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
      "HqyD");
      /* harmony import */


      var _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vinculo-depositos/vinculo-depositos.component */
      "gXJx");
      /* harmony import */


      var _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detalhes-materiais/detalhes-materiais.component */
      "+xEY");

      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent"]
        }, {
          path: 'vinculo-deposito',
          component: _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent"]
        }, {
          path: 'detalhes-materiais',
          component: _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule = function AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule);
      };

      AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule);
      /***/
    },

    /***/
    "rR6Q":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/vinculo-depositos/vinculo-depositos.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rR6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Víncular depósitos\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_APOI_TIPO_MATE\">Tipo material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"tipoMateriais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_APOI_TIPO_MATE\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_LINH\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_LINH\"\r\n            (change)=\"getClasses() + ' ' + getSubLinhas()\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_SUB_LINH\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_SUB_LINH\"\r\n            (change)=\"getClasses()\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_CLAS\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_CLAS\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_DEPO\">Depósito</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"depositos\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_DEPO\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_DEPO\"\r\n            (change)=\"handleFormSituacao()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_SITU_MATE\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipoSituacao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"name\"\r\n            bindValue=\"id\"\r\n            formControlName=\"ID_SITU_MATE\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\r\n  <div class=\"table-responsive\"\r\n    *ngIf=\"loading\"\r\n  >\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template #thead let-thead>\r\n        <tr class=\"text-center\">\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\r\n            Tipo Material\r\n            <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\r\n              ><i\r\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n            Linha\r\n            <span *ngIf=\"key == 'NM_LINH'\"\r\n              ><i\r\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_LINH'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\r\n            Sublinha\r\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"\r\n              ><i\r\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n            Classe\r\n            <span *ngIf=\"key == 'NM_CLAS'\"\r\n              ><i\r\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_CLAS'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" width=\"5%\"></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr\r\n          *ngFor=\"\r\n            let item of data | orderBy: key:reverse | slice: begin:end;\r\n            let i = index\r\n          \"\r\n        >\r\n          <td\r\n            class=\"text-center\" \r\n            [ngClass]=\"item.TT_DEPO_ASSO == 0 ? 'border-danger' : 'border-success'\"\r\n          >\r\n            {{ item.NM_APOI_TIPO_MATE }}\r\n          </td>\r\n          <td class=\"text-center\">{{ item.NM_LINH }}</td>\r\n          <td class=\"text-center\">\r\n            {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\r\n          </td>\r\n          <td class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n          <td class=\"text-center\" width=\"5%\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n              <i\r\n                class=\"fas fa-edit\"\r\n                (click)=\"lgModal.show() + '' + sendDataModal(item)\" \r\n                >\r\n              </i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div\r\n    class=\"col-12 mb-2 ml-2\"\r\n    *ngIf=\"!noResult && data?.length > itemsPerPage\"\r\n  >\r\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\r\n    <div class=\"d-flex\">\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"data?.length\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\"\r\n      >\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n\r\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">VÍNCULAR DEPÓSITOS</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=\"modal-material-depositos\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"onSaveDataModal()\"\r\n              [disabled]=\"formModal.status == 'INVALID'\"\r\n              class=\"btn\"\r\n            >\r\n              Guardar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row justify-content-md-center mt-3\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <p class=\"pFont\">\r\n                    <strong>TIPO DE MATERIAL</strong><br />\r\n                    {{ tipoMaterialModal }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <p class=\"pFont\">\r\n                    <strong>LINHA</strong><br />\r\n                    {{ linhaModal }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <p class=\"pFont\">\r\n                    <strong>SUB LINHA</strong><br />\r\n                    {{ subLinhaModal ? subLinhaModal : '-' }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <p class=\"pFont\">\r\n                    <strong>CLASSE</strong><br />\r\n                    {{ classeModal }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <form [formGroup]=\"formModal\" autocomplete=\"off\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6 mb-lg-0\">\r\n                    <label for=\"ID_EMPR\">Empresas</label>\r\n                    <ng-select\r\n                      [searchable]=\"true\"\r\n                      [clearable]=\"true\"\r\n                      [multiple]=\"true\"\r\n                      [items]=\"empresasModal\"\r\n                      [virtualScroll]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      [closeOnSelect]=\"false\"\r\n                      placeholder=\"Selecione...\"\r\n                      bindLabel=\"NM_FANT\"\r\n                      bindValue=\"ID\"\r\n                      formControlName=\"ID_EMPR\"\r\n                      (change)=\"getDepositosModal()\"\r\n                    >\r\n                    </ng-select>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6 mb-lg-0\">\r\n                    <label for=\"ID_DEPO\">Depósitos</label>\r\n                    <ng-select\r\n                      [searchable]=\"true\"\r\n                      [clearable]=\"true\"\r\n                      [multiple]=\"true\"\r\n                      [items]=\"depositosModal\"\r\n                      [virtualScroll]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      [closeOnSelect]=\"false\"\r\n                      placeholder=\"Selecione...\"\r\n                      bindLabel=\"NM_DEPO\"\r\n                      bindValue=\"ID\"\r\n                      formControlName=\"ID_DEPO\"\r\n                      [ngClass]=\"onFieldErrorModal('ID_DEPO') + ' ' + onFieldRequiredModal('ID_DEPO')\"\r\n                    >\r\n                    </ng-select>\r\n                    <invalid-form-control\r\n                      [show]=\"onFieldInvalidModal('ID_DEPO')\"\r\n                      message=\"Depósito é obrigatório.\"\r\n                    >\r\n                    </invalid-form-control>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class=\"row justify-content-md-center mt-3 mb-3\"\r\n          >\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"depositosVinculados\">Depósitos Vinculados</label>\r\n              <div class=\"table-reponsive\" *ngIf=\"loadingModal\">\r\n                <custom-table>\r\n                  <ng-template #thead let-thead>\r\n                    <tr class=\"text-center\">\r\n                      <th scope=\"col\">Empresa</th>\r\n                      <th scope=\"col\">Depósito</th>\r\n                      <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let item of dataModal\">\r\n                      <td class=\"text-left\">{{ item.NM_EMPR }}</td>\r\n                      <td class=\"text-left\">{{ item.NM_DEPO }}</td>\r\n                      <td nowrap class=\"text-center\" width=\"4%\">\r\n                        <div>\r\n                          <button\r\n                            type=\"button\"\r\n                            class=\"btn-icon-sm\"\r\n                            [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\r\n                            (click)=\"onEdit(item)\"\r\n                          >\r\n                            <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </td>      \r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n              <div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"!loadingModal && !noResultModal\">\r\n                <div class=\"spinner-border\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </div>\r\n              <div\r\n                *ngIf=\"noResultModal\"\r\n                class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n                style=\"height: 80%;\"\r\n              >\r\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=parametros-gerais-estoque-parametros-gerais-estoque-module-es5.js.map