(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controle-linhas-controle-linhas-module"], {
    /***/
    "4URI":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function URI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyb2xlLWxpbmhhcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "6F3Z":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/lista/lista.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaListaComponent */

    /***/
    function F3Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaListaComponent", function () {
        return TecnologiaInformacaoControleLinhaListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "8hX4");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "g3FG");
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../controle-linhas.service */
      "CH5F");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]); // Services

      var TecnologiaInformacaoControleLinhaListaComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoControleLinhaListaComponent(localeService, activatedRoute, router, formBuilder, xlsxService, controleLinhasService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService, dateService) {
          _classCallCheck(this, TecnologiaInformacaoControleLinhaListaComponent);

          this.localeService = localeService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.controleLinhasService = controleLinhasService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.dateService = dateService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/tecnologia-informacao/home'
          }, {
            descricao: 'Controle de Linhas'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Trabalhando',
            color: 'green'
          }, {
            id: 2,
            text: 'Demitido',
            color: 'red'
          }, {
            id: 3,
            text: 'Outro',
            color: 'yellow'
          }];
          this.showDetailPanel = false;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.orderBy = 'nomeUsuario';
          this.orderType = 'ASC';
          this.compararData = null;
          this.situacoes = [];
          this.loadingSituacoes = true;
          this.maxSize = 10;
          this.itemsPerPage = 25;
          this.currentPage = 1;
          this.totalItems = [];
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(TecnologiaInformacaoControleLinhaListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormFilter();
            this.getFuncionariosSituacoes();
            this.titleService.setTitle('Controle de linhas');
            this.onDetailPanelEmitter();
            this.setLinhaSelecionado();
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              numLinha: [formValue.numLinha],
              descricao: [formValue.descricao],
              nomeUsuario: [formValue.nomeUsuario],
              codEscritorio: [formValue.nomeUsuario],
              codEmpresa: [formValue.nomeUsuario],
              dsSituacao: [formValue.dsSituacao],
              nomeEmpresa: [formValue.nomeEmpresa],
              nomeEscritorio: [formValue.nomeEscritorio],
              codSituacao: [formValue.codSituacao],
              numContrato: [formValue.numContrato],
              dataVencimentoInicial: [formValue.dataVencimentoInicial],
              dataVencimentoFinal: [formValue.dataVencimentoFinal],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this = this;

            var formValue = {
              numLinha: null,
              matricula: null,
              descricao: null,
              nomeUsuario: null,
              nomeEmpresa: null,
              codEscritorio: null,
              nomeEscritorio: null,
              codSituacao: 1,
              dsSituacao: null,
              numContrato: null,
              dataContratoInicial: null,
              dataContratoFinal: null,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataVencimentoContrato') {
                        formValue[formKey] = _this.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
                      }
                    }
                  });
                });
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this2 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this2.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "checkOrder",
          value: function checkOrder() {
            if (this.form.value.orderBy !== this.orderBy) {
              this.orderBy = this.form.value.orderBy;
            }

            if (this.form.value.orderType !== this.orderType) {
              this.orderType = this.form.value.orderType;
            }
          }
        }, {
          key: "setLinhaSelecionado",
          value: function setLinhaSelecionado() {
            this.linhaSelecionado = {
              codLinha: -1,
              matricula: null,
              numLinha: null,
              descricao: null,
              codEscritorio: null,
              nomeEscritorio: null,
              codEmpresa: null,
              nomeEmpresa: null,
              codSituacao: null,
              dsSituacao: null,
              valor: null,
              numContrato: null,
              dataVencimentoContrato: null,
              codUsuario: null,
              nomeUsuario: null,
              dataCadastro: null,
              plano: null,
              gestorFun: null,
              dados: null,
              conta: null,
              codChip: null,
              numConta: null,
              senha: null,
              status: '1',
              documento: null,
              qtDocumentos: null
            };
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.dados.concat(this.totalItems);
            this.xlsxService.exportFile(listagemExport, "ControleLinhas_".concat(dataExport));
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
              } else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'ASC';
            }

            this.form.value.orderBy = this.orderBy;
            this.form.value.orderType = this.orderType;
            this.onFilter();
          }
        }, {
          key: "comparaData",
          value: function comparaData() {
            if (!this.form.get('dataVencimentoFinal').value) {
              return false;
            } else if (this.form.get('dataVencimentoInicial').value > this.form.get('dataVencimentoFinal').value) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.verificaParams());
            }
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            this.search(params);
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            if (this.form.value.nomeUsuario) {
              params.nomeUsuario = this.form.value.nomeUsuario;
            }

            if (this.form.value.numLinha) {
              params.numLinha = this.form.value.numLinha;
            }

            if (this.form.value.descricao) {
              params.descricao = this.form.value.descricao;
            }

            if (this.form.value.numContrato) {
              params.numContrato = this.form.value.numContrato;
            }

            if (this.form.value.nomeEmpresa) {
              params.nomeEmpresa = this.form.value.nomeEmpresa;
            }

            if (this.form.value.nomeEscritorio) {
              params.nomeEscritorio = this.form.value.nomeEscritorio;
            }

            if (this.form.value.dataVencimentoInicial) {
              params.dataVencimentoInicial = this.dateService.convertToUrlDate(this.form.value.dataVencimentoInicial);
            }

            if (this.form.value.dataVencimentoFinal) {
              params.dataVencimentoFinal = this.dateService.convertToUrlDate(this.form.value.dataVencimentoFinal);
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this3 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.controleLinhasService.getListaLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loaderNavbar = false;
              _this3.dadosLoaded = true;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this3.dados = response.data;
                _this3.dadosPagination = _this3.dados.slice(0, _this3.itemsPerPage);
                _this3.totalItems = _this3.dados.length;
                _this3.dadosLoaded = true;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                _this3.dadosEmpty = true;
              } else {
                _this3.pnotifyService.error();

                _this3.dadosEmpty = true;
              }
            }, function (error) {
              _this3.dadosEmpty = true;

              if (error.error.hasOwnProperty('mensagem')) {
                _this3.pnotifyService.error(error.error.mensagem);
              } else {
                _this3.pnotifyService.error();
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(linha) {
            var borderClass;

            if (linha.codSituacao == 1) {
              borderClass = 'border-success';
            } else if (linha.codSituacao == 7) {
              borderClass = 'border-danger';
            } else if (linha.codSituacao /= 7) {
              borderClass = 'border-warning';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.dadosPagination = this.dados.slice(startItem, endItem);
            this.scrollToFilter.nativeElement.scrollIntoView({
              behavior: 'instant'
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(linha) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.linhaSelecionado = linha;
            this.setLinhaSelecionado();
            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this4.loaderNavbar = false;
            }, 500);
          }
        }, {
          key: "onEdit",
          value: function onEdit(linha) {
            this.router.navigate(['../editar', linha.matricula], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onTermo",
          value: function onTermo(linha) {
            this.router.navigate(['../termo', linha.matricula], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(linha) {
            var _this5 = this;

            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this5.deleteLinha(linha.matricula) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loaderNavbar = false;
            })).subscribe(function (success) {
              _this5.pnotifyService.success();

              setTimeout(function () {
                _this5.onFilter();
              }, 500);
            }, function (error) {
              console.log(error);

              _this5.pnotifyService.error();
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteLinha",
          value: function deleteLinha(matricula) {
            this.loaderNavbar = true;
            var controleLinha = {
              matricula: matricula,
              status: '0'
            };
            return this.controleLinhasService.save(controleLinha);
          }
        }, {
          key: "getFuncionariosSituacoes",
          value: function getFuncionariosSituacoes() {
            var _this6 = this;

            this.controleLinhasService.getFuncionariosSituacoes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this6.loadingSituacoes = false;
            })).subscribe(function (response) {
              _this6.situacoes = response['data'];
            });
          }
        }]);

        return TecnologiaInformacaoControleLinhaListaComponent;
      }();

      TecnologiaInformacaoControleLinhaListaComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoControleLinhaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_18__["DateService"]
        }];
      };

      TecnologiaInformacaoControleLinhaListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      TecnologiaInformacaoControleLinhaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-controle-linhas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], _controle_linhas_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoControleLinhaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_18__["DateService"]])], TecnologiaInformacaoControleLinhaListaComponent);
      /***/
    },

    /***/
    "8hX4":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/controle-linhas/lista/lista.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hX4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Controle de Linhas\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onExport()\"\r\n    [disabled]=\"!dadosPagination.length > 0\"\r\n    *ngIf=\"!dadosEmpty\">\r\n    Exportar\r\n  </button>\r\n\r\n  <!-- <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button> -->\r\n  \r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"numLinha\">Número da Linha</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"numLinha\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"nomeUsuario\">Usuário</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"nomeUsuario\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"nomeEmpresa\">Empresa</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"nomeEmpresa\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"nomeEscritorio\">Escritório</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"nomeEscritorio\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"descricao\">Modelo do Aparelho</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"descricao\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"numContrato\">Núm. contrato</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"numContrato\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataVencimentoInicial\">Data inicial</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataVencimentoInicial\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataVencimentoInicial\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataVencimentoFinal\">Data final</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataVencimentoFinal\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataVencimentoFinal\"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"comparaData()\"\r\n                message=\"Data final deve ser maior que data inicial\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dsSituacao\">Situação</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"situacoes\"\r\n                [virtualScroll]=\"true\"\r\n                [loading]=\"loadingSituacoes\"\r\n                labelForId=\"dsSituacao\"\r\n                bindLabel=\"dsSituacao\"\r\n                bindValue=\"codSituacao\"\r\n                id=\"dsSituacao\"\r\n                formControlName=\"codSituacao\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Número da linha</th>\r\n            <th scope=\"col\">Usuário</th>\r\n            <th scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Plano</th>\r\n            <th scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Gestor</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let linha of dadosPagination\" [class.table-active]=\"linha.codLinha == linhaSelecionado.codLinha && showDetailPanel\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(linha)\"\r\n              (click)=\"onDetails(linha)\">\r\n              {{ linha.numLinha }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(linha)\">\r\n              {{ linha.nomeUsuario | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(linha)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ linha.plano | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(linha)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ linha.gestorFun | uppercase }}\r\n            </td>\r\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-3\" tooltip=\"Excluir\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDelete(linha)\">\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(linha)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\" Gerar Termo\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onTermo(linha)\">\r\n                  <i class=\"text-warning fas fa-file mr-3\" *ngIf= \"linha.qtDocumentos > 0\"  placement=\"right\"></i>\r\n                  <i class=\"text-black fas fa-file mr-3\" *ngIf=\"linha.qtDocumentos == 0\"  placement=\"right\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <div id=\"impressao\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Nome</label>\r\n              <div>{{ linhaSelecionado.nomeUsuario | uppercase}}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Número da Linha</label>\r\n              <div>{{ linhaSelecionado.numLinha }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Empresa</label>\r\n              <div>{{ linhaSelecionado.nomeEmpresa | uppercase}}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Escritório</label>\r\n              <div>{{ linhaSelecionado.nomeEscritorio | uppercase}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Modelo do Aparelho</label>\r\n              <div>{{ linhaSelecionado.descricao | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Valor</label>\r\n              <div>{{ linhaSelecionado.valor  | currency:'BRL' }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Nº Contrato</label>\r\n              <div>{{ linhaSelecionado.numContrato }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Data de Vencimento do Contrato</label>\r\n              <div>{{ linhaSelecionado.dataVencimentoContrato | date: 'dd/MM/yyyy' }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Plano</label>\r\n              <div>{{ linhaSelecionado.plano | uppercase}}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Dados</label>\r\n              <div>{{ linhaSelecionado.dados | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Número da Conta</label>\r\n              <div>{{ linhaSelecionado.numConta }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Cód. Chip</label>\r\n              <div>{{ linhaSelecionado.codChip }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Situação</label>\r\n              <div>{{ linhaSelecionado.dsSituacao | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Gestor Responsável</label>\r\n              <div>{{ linhaSelecionado.gestorFun | uppercase}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Conta</label>\r\n              <div>{{ linhaSelecionado.conta}}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Senha</label>\r\n              <div>{{ linhaSelecionado.senha}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "Az8B":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario-resolver.guard.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaFormularioResolverGuard */

    /***/
    function Az8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaFormularioResolverGuard", function () {
        return TecnologiaInformacaoControleLinhaFormularioResolverGuard;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../controle-linhas.service */
      "CH5F"); // Services


      var TecnologiaInformacaoControleLinhaFormularioResolverGuard = /*#__PURE__*/function () {
        function TecnologiaInformacaoControleLinhaFormularioResolverGuard(controleLinhasService) {
          _classCallCheck(this, TecnologiaInformacaoControleLinhaFormularioResolverGuard);

          this.controleLinhasService = controleLinhasService;
        }

        _createClass(TecnologiaInformacaoControleLinhaFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.controleLinhasService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codLinha: null,
                codPatrimonio: null,
                descricao: null,
                codEscritorio: null,
                nomeEscritorio: null,
                codEmpresa: null,
                nomeEmpresa: null,
                codSituacao: null,
                situacao: null,
                valor: null,
                numContrato: null,
                dataVencimentoContrato: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null
              }
            });
          }
        }]);

        return TecnologiaInformacaoControleLinhaFormularioResolverGuard;
      }();

      TecnologiaInformacaoControleLinhaFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"]
        }];
      };

      TecnologiaInformacaoControleLinhaFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"]])], TecnologiaInformacaoControleLinhaFormularioResolverGuard);
      /***/
    },

    /***/
    "CH5F":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/controle-linhas.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaService */

    /***/
    function CH5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaService", function () {
        return TecnologiaInformacaoControleLinhaService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/generic.service */
      "I/OU"); // Services


      var TecnologiaInformacaoControleLinhaService = /*#__PURE__*/function () {
        function TecnologiaInformacaoControleLinhaService(http, genericService) {
          _classCallCheck(this, TecnologiaInformacaoControleLinhaService);

          this.http = http;
          this.genericService = genericService;
          this.API = "https://crm360.monterrey.com.bo/api/tecnologia-informacao/controle-linhas";
        }

        _createClass(TecnologiaInformacaoControleLinhaService, [{
          key: "getFormFields",
          value: function getFormFields() {
            var empresas = this.genericService.getEmpresas();
            var escritorios = this.genericService.getEscritorios();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([empresas, escritorios]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getListaLinhas",
          value: function getListaLinhas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codLinha) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codLinha)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "saveLinha",
          value: function saveLinha(controleLinha) {
            return this.http.post("".concat(this.API, "/salvar"), controleLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "updateLinha",
          value: function updateLinha(controleLinha) {
            return this.http.put("".concat(this.API, "/atualizar"), controleLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getContadores",
          value: function getContadores() {
            return this.http.get("".concat(this.API, "/contadores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return this.http.get("".concat(this.API, "/pesquisa/status")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(controleLinha) {
            if (controleLinha.codLinha !== null) {
              return this.updateLinha(controleLinha);
            }

            return this.saveLinha(controleLinha);
          }
        }, {
          key: "postDocument",
          value: function postDocument(document, codLinha) {
            return this.http.post("".concat(this.API, "/documento?codLinha=").concat(codLinha), document);
          }
        }, {
          key: "getTermos",
          value: function getTermos(matricula) {
            return this.http.get("".concat(this.API, "/termo/").concat(matricula)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getFuncionariosSituacoes",
          value: function getFuncionariosSituacoes() {
            return this.http.get("".concat(this.API, "/funcionarios/situacoes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "deleteLinha",
          value: function deleteLinha(codLinha) {
            return this.http["delete"]("".concat(this.API, "/excluir/").concat(codLinha)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            return this.http.get("".concat(this.API, "/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/documento"), params, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoControleLinhaService;
      }();

      TecnologiaInformacaoControleLinhaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"]
        }];
      };

      TecnologiaInformacaoControleLinhaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"]])], TecnologiaInformacaoControleLinhaService);
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
    "H+Cz":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent */

    /***/
    function HCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent", function () {
        return TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termo-responsabilidade.component.html */
      "TTK6");
      /* harmony import */


      var _termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termo-responsabilidade.component.scss */
      "mstR");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../controle-linhas.service */
      "CH5F");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");

      var TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent(pdfService, activatedRoute, location, router, pnotifyService, formBuilder, dateService, controleLinhasService) {
          _classCallCheck(this, TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent);

          this.pdfService = pdfService;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.controleLinhasService = controleLinhasService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_11__["MASKS"];
          this.loaderNavbar = false;
          this.tipoVisao = 'formulario';
          this.breadCrumbTree = [];
          this.bairroEmpresa = [];
          this.dataFicha = [];
          this.formChanged = false;
          this.loaderFullScreen = true;
        }

        _createClass(TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.setFormBuilder();
            this.getTermos();
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "formCanDeactivate",
          value: function formCanDeactivate() {
            if (this.formChanged) {
              if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
              } else {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Controle de Linhas',
              routerLink: "/tecnologia-informacao/controle-linhas/lista"
            }, {
              descricao: 'Termo de Responsabilidade'
            }];
          }
        }, {
          key: "objetos",
          get: function get() {
            return this.form.get('objetos');
          }
        }, {
          key: "onAddObjeto",
          value: function onAddObjeto() {
            this.objetos.push(this.formBuilder.group({
              descricaoObj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              quantidadeObj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              valorObj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteObjeto",
          value: function onDeleteObjeto(index) {
            if (this.objetos.length > 1) {
              this.objetos.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um Objeto.');
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codLinha: [{
                  value: detalhes['codLinha'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                cnpjEmpresa: [{
                  value: detalhes['cnpjEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                endEmpresa: [{
                  value: detalhes['endEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                bairroEmpresa: [{
                  value: detalhes['bairroEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                cidEmpresa: [{
                  value: detalhes['cidEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                estEmpresa: [{
                  value: detalhes['estEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nomeEmpresa: [{
                  value: detalhes['nomeEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codEmpresa: [{
                  value: detalhes['codEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nomeUsuario: [{
                  value: detalhes['nomeUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                rgUsuario: [{
                  value: detalhes['rgUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                cpfUsuario: [{
                  value: detalhes['cpfUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                endUsuario: [{
                  value: detalhes['endUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                bairroUsuario: [{
                  value: detalhes['bairroUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                cidUsuario: [{
                  value: detalhes['cidUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                estUsuario: [{
                  value: detalhes['estUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                objetos: this.formBuilder.array([])
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.setFormObjetos();
          }
        }, {
          key: "setFormObjetos",
          value: function setFormObjetos() {
            this.onAddObjeto();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var dataHoje = new Date();
            var dataHojeC = this.dateService.getFullDate(dataHoje, null, false);

            if (this.form.valid) {
              this.loaderNavbar = true;
              setTimeout(function () {
                var formData = _this7.form.getRawValue();

                _this7.tipoVisao = 'ficha';
                _this7.dataFicha = {
                  nomeEmpresa: formData['nomeEmpresa'],
                  cnpjEmpresa: formData['cnpjEmpresa'],
                  endEmpresa: formData['endEmpresa'],
                  bairroEmpresa: formData['bairroEmpresa'],
                  cidEmpresa: formData['cidEmpresa'],
                  estEmpresa: formData['estEmpresa'],
                  nomeUsuario: formData['nomeUsuario'],
                  cpfUsuario: formData['cpfUsuario'],
                  rgUsuario: formData['rgUsuario'],
                  endUsuario: formData['endUsuario'],
                  bairroUsuario: formData['bairroUsuario'],
                  cidUsuario: formData['cidUsuario'],
                  estUsuario: formData['estUsuario'],
                  objetos: formData['objetos'],
                  dataHoje: [dataHojeC]
                };
                _this7.formChanged = false;
                _this7.loaderNavbar = false;
              }, 1000);
            }
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this8 = this;

            this.loaderNavbar = true;
            this.pdfService.download('termo-responsabilidade', "termo-responsabilidade");
            setTimeout(function () {
              _this8.loaderNavbar = false;
            }, 500);
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            var _this9 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this9.tipoVisao = 'formulario';
              _this9.loaderNavbar = false;
            }, 1000);
          }
        }, {
          key: "onNestedFieldError",
          value: function onNestedFieldError(formGroup, index, field) {
            if (this.onNestedFieldInvalid(formGroup, index, field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onNestedFieldInvalid",
          value: function onNestedFieldInvalid(formGroup, index, field) {
            var nestedForm = this.form.controls[formGroup];
            field = nestedForm.controls[index].get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onNestedFieldRequired",
          value: function onNestedFieldRequired(formGroup, index, field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
            var nestedForm = this.form.controls[formGroup];

            if (nestedForm.controls[index].get(field).validator) {
              var validationResult = nestedForm.controls[index].get(field).validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getTermos",
          value: function getTermos() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (response) {
              var matricula = response['id'];

              _this10.controleLinhasService.getTermos(matricula).subscribe(function (response) {
                _this10.form.patchValue(response['data']);
              }, function (error) {
                if (error.error.hasOwnProperty('mensagem')) {
                  _this10.pnotifyService.error(error.error.mensagem);
                } else {
                  _this10.pnotifyService.error();
                }
              });
            });
          }
        }]);

        return TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent;
      }();

      TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent.ctorParameters = function () {
        return [{
          type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__["PdfService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }, {
          type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoControleLinhaService"]
        }];
      };

      TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'termo-responsabilidade',
        template: _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__["PdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"], _controle_linhas_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoControleLinhaService"]])], TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent);
      /***/
    },

    /***/
    "Nlb9":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nlb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"nomeUsuario\">Usuário</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeUsuario\"\r\n              formControlName=\"nomeUsuario\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('nomeUsuario') + ' ' + onFieldRequired(form.controls.nomeUsuario)\"\r\n              >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeUsuario')\" message=\"Usuário é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"nomeEmpresa\">Empresa</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeEmpresa\"\r\n              formControlName=\"nomeEmpresa\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('nomeEmpresa') + ' ' + onFieldRequired(form.controls.nomeEmpresa)\"\r\n              >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeEmpresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"nomeEscritorio\">Escritório</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeEscritorio\"\r\n              formControlName=\"nomeEscritorio\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('nomeEscritorio') + ' ' + onFieldRequired(form.controls.nomeEscritorio)\" \r\n              >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeEscritorio')\" message=\"Escritório é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"numLinha\">Número da Linha</label>\r\n            <input\r\n            telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"numLinha\"\r\n              formControlName=\"numLinha\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('numLinha') + ' ' + onFieldRequired(form.controls.numLinha)\" >\r\n            <invalid-form-control [show]=\"onFieldInvalid('numLinha')\" message=\"Numero da Linha é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"dsSituacao\">Situação</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"situacoes\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingSituacoes\"\r\n              labelForId=\"dsSituacao\"\r\n              bindLabel=\"dsSituacao\"\r\n              bindValue=\"dsSituacao\"\r\n              id=\"dsSituacao\"\r\n              formControlName=\"dsSituacao\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"descricao\">Modelo do Aparelho</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"descricao\"\r\n              formControlName=\"descricao\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('descricao') + ' ' + onFieldRequired(form.controls.descricao)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('descricao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"gestorFun\">Gestor Responsável</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"gestorFun\"\r\n              formControlName=\"gestorFun\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('gestorFun') + ' ' + onFieldRequired(form.controls.gestorFun)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('gestorFun')\" message=\"Gestor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"plano\">Plano</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"plano\"\r\n              formControlName=\"plano\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('plano') + ' ' + onFieldRequired(form.controls.plano)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('plano')\" message=\"Plano é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"dados\">Dados</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"dados\"\r\n              formControlName=\"dados\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('dados') + ' ' + onFieldRequired(form.controls.dados)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('dados')\" message=\"Dados é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"numConta\">Nº Conta</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"numConta\"\r\n              formControlName=\"numConta\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('numConta') + ' ' + onFieldRequired(form.controls.numConta)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('numConta')\" message=\"Nº Conta é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codChip\">Cód Chip</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"codChip\"\r\n              formControlName=\"codChip\"\r\n              (input)=\"onInput()\"\r\n              pattern=\"[0-9]+$\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('codChip') + ' ' + onFieldRequired(form.controls.codChip)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('codChip')\" message=\"Cód CHIP é obrigatório com 20 números \"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"numContrato\">Núm. contrato</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"numContrato\"\r\n              formControlName=\"numContrato\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('numContrato') + ' ' + onFieldRequired(form.controls.numContrato)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('numContrato')\" message=\"Número do contrato é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"dataVencimentoContrato\">Vencimento Contrato</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataVencimentoContrato\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataVencimentoContrato\"\r\n              [ngClass]=\"onFieldError('dataVencimentoContrato') + ' ' + onFieldRequired(form.controls.dataVencimentoContrato)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('dataVencimentoContrato')\" message=\"Vencimento é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"conta\">Conta Gmail</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"conta\"\r\n              formControlName=\"conta\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('conta') + ' ' + onFieldRequired(form.controls.conta)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('conta')\" message=\"Conta é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"senha\">Senha Gmail</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"senha\"\r\n              formControlName=\"senha\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('senha') + ' ' + onFieldRequired(form.controls.senha)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('senha')\" message=\"Senha é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"valor\">Valor</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"valor\"\r\n              formControlName=\"valor\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n              [ngClass]=\"onFieldError('valor') + ' ' + onFieldRequired(form.controls.valor)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('valor')\" message=\"Valor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <div lass=\"form-group\">\r\n              <label for=\"documento\">Documento</label>\r\n              <input\r\n                id=\"documento\"\r\n                type=\"file\"\r\n                (change)=\"onFile($event.target.files)\"\r\n                >\r\n            </div>\r\n          </div>\r\n        </div><br>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-12\">\r\n            <div class=\"mtc-title\">Anexos</div>\r\n            <ul >\r\n              <li *ngFor=\"let item of documentos\">\r\n                <div class=\"d-flex\">\r\n                  <div>\r\n                    <i class=\"far fa-file-pdf text-danger\"></i><strong class=\"ml-2\">{{ item.nomeDocumento }}</strong>\r\n                  </div>\r\n                  <div class=\"ml-4\">\r\n                    <a href=\"{{ item.link }}\" target=\"_blank\" class=\"btn-icon-sm\">\r\n                      <i class=\"fas fa-eye\"></i>\r\n                    </a>\r\n                    <button type=\"button\" class=\"btn-icon-sm ml-4\" (click)=\"onDelete(item)\">\r\n                      <i class=\"fas fa-trash\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div><hr></div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "QRAf":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/controle-linhas-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaRoutingModule */

    /***/
    function QRAf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaRoutingModule", function () {
        return TecnologiaInformacaoControleLinhaRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_resolver_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade-resolver.guard */
      "Vq+B");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade.component */
      "H+Cz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/guards/form-deactivate.guard */
      "iMgG");
      /* harmony import */


      var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario-resolver.guard */
      "Az8B");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./lista/lista.component */
      "6F3Z");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "YnCI"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoControleLinhaListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoControleLinhaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoControleLinhaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoControleLinhaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoControleLinhaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["FormDeactivateGuard"]]
      }, {
        path: 'termo/:id',
        component: _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_2__["TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent"],
        resolve: {
          detalhes: _termo_responsabilidade_termo_responsabilidade_resolver_guard__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard"]
        }
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var TecnologiaInformacaoControleLinhaRoutingModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoControleLinhaRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoControleLinhaRoutingModule);
      });

      TecnologiaInformacaoControleLinhaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      })], TecnologiaInformacaoControleLinhaRoutingModule);
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
    "TTK6":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TTK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Termo de Responsabilidade\">\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'formulario'\"\r\n    [disabled]=\"!form.valid\"\r\n    (click)=\"onSubmit()\">\r\n    Gerar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onCancel()\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onDownload()\">\r\n    Download\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\r\n    <div class=\"col-6\" >\r\n      <h1>Termo de Responsabilidade</h1>\r\n      <form  [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <div class=\"mtc-title\">Dados da Empresa</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"nomeEmpresa\">Nome</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nomeEmpresa\"\r\n            formControlName=\"nomeEmpresa\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"cnpjEmpresa\">CNPJ </label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cnpjEmpresa\"\r\n            formControlName=\"cnpjEmpresa\"\r\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"endEmpresa\">Endereço</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"endEmpresa\"\r\n            formControlName=\"endEmpresa\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"bairroEmpresa\">Bairro</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"bairroEmpresa\"\r\n            formControlName=\"bairroEmpresa\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"cidEmpresa\">Cidade</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cidEmpresa\"\r\n            formControlName=\"cidEmpresa\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"estEmpresa\">Estado</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"estEmpresa\"\r\n            formControlName=\"estEmpresa\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <hr class=\"mt-0\">\r\n            <div class=\"mtc-title\">Dados do Funcionario</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nomeUsuario\">Nome</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nomeUsuario\"\r\n            formControlName=\"nomeUsuario\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"cpfUsuario\">CPF</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cpfUsuario\"\r\n            formControlName=\"cpfUsuario\"\r\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"rgUsuario\">RG</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"rgUsuario\"\r\n            formControlName=\"rgUsuario\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"endUsuario\">Endereço</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"endUsuario\"\r\n            formControlName=\"endUsuario\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"bairroUsuario\">Bairro</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"bairroUsuario\"\r\n            formControlName=\"bairroUsuario\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"cidUsuario\">Cidade</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cidUsuario\"\r\n            formControlName=\"cidUsuario\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"estUsuario\">Estado</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"estUsuario\"\r\n            formControlName=\"estUsuario\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"objetos\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <hr class=\"mt-0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\">Equipamentos/Linhas</div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddObjeto()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of objetos.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-6\">\r\n                  <label for=\"descricaoObj\">Descrição</label>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"descricaoObj\"\r\n                  formControlName=\"descricaoObj\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'descricaoObj') + ' ' + onNestedFieldRequired('objetos', i, 'descricaoObj')\">\r\n                </div>\r\n                <div class=\"form-group col-2\">\r\n                  <label for=\"quantidadeObj\">Quantidade</label>\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    id=\"quantidadeObj\"\r\n                    formControlName=\"quantidadeObj\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'quantidadeObj') + ' ' + onNestedFieldRequired('objetos', i, 'quantidadeObj')\">\r\n                </div>\r\n                <div class=\"form-group col-3\">\r\n                  <label for=\"valorObj\">Valor</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"valorObj\"\r\n                    formControlName=\"valorObj\"\r\n                    currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'valorObj') + ' ' + onNestedFieldRequired('objetos', i, 'valorObj')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteObjeto(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center pt-5 uk-margin-top\" id=\"termo-responsabilidade\" *ngIf=\"tipoVisao == 'ficha'\" >\r\n    <div class=\" row justify-content-center col-10 \">\r\n      <h1 >TERMO DE RESPONSABILIDADE</h1><br>\r\n      <div>\r\n        <div class=\" mt-5 pt-5\">\r\n          Pelo presente instrumento particular e na melhor forma de direito, \r\n          as partes a seguir qualificadas de um lado, a empresa {{dataFicha.nomeEmpresa | uppercase}} \r\n          inscrita no CNPJ/MF sob. Nº {{dataFicha.cnpjEmpresa | cnpj }}, com sede social na, {{dataFicha.endEmpresa | uppercase }},\r\n          bairro {{dataFicha.bairroEmpresa | uppercase}}, na cidade de {{dataFicha.cidEmpresa | uppercase}}, Estado de São Paulo, neste ato, representada pelo seu responsável\r\n          legal, doravante, designada COMODANTE e de outro lado, {{dataFicha.nomeUsuario | uppercase}} , portador do CPF nº {{dataFicha.cpfUsuario}} e do\r\n          RG nº {{dataFicha.rgUsuario}} residente e domiciliado na {{dataFicha.endUsuario | uppercase}} , {{dataFicha.bairroUsuario | uppercase}} na \r\n          cidade de, {{dataFicha.cidUsuario | uppercase}} no Estado de {{dataFicha.estUsuario | uppercase}}, designado COMODATÁRIO, decidem celebrar o \r\n          presente CONTRATO DE COMODATO DE EQUIPAMENTO, comprometendo-se cada uma das partes perante a outra a cumprir\r\n          por si e seus sucessores e herdeiros as seguintes cláusulas e condições\r\n        </div><br>\r\n        <div>\r\n          1. DO OBJETO.\r\n        </div><br>\r\n        <div>\r\n          1.1  O presente contrato tem com objeto, a teor dos artigos 579 e seguintes do Código Civil\r\n          Brasileiro, o comodato do equipamento abaixo discriminado, que a COMODANTE cede ao COMODATÁRIO de forma gratuita, a saber: \r\n        </div><br>\r\n        <div>\r\n          <div *ngIf=\"dataFicha.objetos.length == 0\">NÃO INFORMADO</div>\r\n          <div *ngIf=\"dataFicha.objetos.length > 0\">\r\n            <div class=\"row mt-2 col-10\" *ngFor=\"let item of dataFicha.objetos\">\r\n              <div class=\"col-6\">\r\n                <p class=\"mt-2 mb-0\">\r\n                  <strong class=\"mr-2\">Descrição:</strong>\r\n                  <span *ngIf=\"item.descricaoObj == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.descricaoObj != null\">{{ item.descricaoObj | uppercase }}</span>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <p class=\"mt-2 mb-2\">\r\n                  <strong class=\"mr-2\">Quantidade:</strong>\r\n                  <span *ngIf=\"item.quantidadeObj == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.quantidadeObj != null\">{{ item.quantidadeObj }}</span>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <p class=\"mt-2 mb-2\">\r\n                  <strong class=\"mr-2\">Valor:</strong>\r\n                  <span *ngIf=\"item.valorObj == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.valorObj != null\">{{ item.valorObj | currency:'BRL':'symbol':'1.2-2'}}</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <hr width = “2” size = “100”>\r\n          </div>\r\n        </div><br>\r\n        <div>\r\n          1.2  O COMODATÁRIO declara, neste ato, ter recebido o equipamento acima\r\n          descrito em perfeito estado de funcionamento (novo), conservação e limpeza, obrigando-se, \r\n          assim, a conservá-lo e restituí-lo, ao término deste comodato, conforme disposto neste contrato.\r\n        </div><br>\r\n        <div>\r\n          1.3  A finalidade do presente comodato é a utilização do equipamento pelo COMODATÁRIO com \r\n          vistas a ser utilizado no desempenho das atividades previstas no cargo ocupado por este.\r\n        </div><br>\r\n        <div>\r\n          2. DA MANUTENÇÃO E PROTEÇÃO DO EQUIPAMENTO\r\n        </div><br>\r\n        <div>\r\n          2.1  O COMODATÁRIO será responsável pela guarda, uso e manutenção do equipamento, não \r\n          podendo vendê-lo, aliená-lo, alugá-lo ou emprestá-lo a terceiros, devendo comunicar \r\n          imediatamente a COMODANTE sobre eventuais necessidades de reparo que observar. \r\n        </div><br>\r\n        <div>\r\n          2.2  Nenhum outro destino será dado ao equipamento, a não ser aquele ora pactuado,\r\n           qual seja, o desempenho das atividades profissionais junto a COMODANTE.\r\n        </div><br>\r\n        <div>\r\n          2.3  O COMODATÁRIO obriga-se a manter o equipamento em perfeito estado de funcionamento,\r\n          conservação e limpeza, para que assim seja restituído quando findo ou rescindido este\r\n          contrato, sem direito à indenização e/ou retenção do mesmo.\r\n        </div><br>\r\n        <div>\r\n          3. Dentre as outras obrigações consignadas neste instrumento, obriga-se o COMODATÁRIO \r\n          especificamente a:\r\n        </div><br>\r\n        <div>\r\n          (a) restituir o equipamento, quando for o caso, nas mesmas condições que o mesmo se \r\n          encontrava quando do início do contrato;\r\n        </div><br>\r\n        <div>\r\n          (b) não ceder, locar ou emprestar o equipamento, sem autorização prévia e por escrito\r\n           da COMODANTE, sob pena de rescisão imediata do presente contrato;\r\n        </div><br>\r\n        <div>\r\n          (c) responsabilizar-se perante a COMODANTE, na hipótese de destruição, incêndio, ou de \r\n          qualquer outro fato ou evento que, por qualquer forma, impossibilite, prejudique ou \r\n          dificulte o exercício pleno da posse e propriedade sobre os bens, desde que decorrentes \r\n          de ato culposo ou doloso. \r\n        </div><br>\r\n        <div>\r\n          Parágrafo Primeiro - Diante do previsto no item (c), o COMODATÁRIO, desde já, autoriza \r\n          a COMODANTE a efetuar descontos em seus salários ou rescisão contratual relativos aos \r\n          prejuízos em valor correspondente ao integral previsto na clausula 1.1 ou valor \r\n          equivalente a manutenção ou reparo do dano. \r\n        </div><br>\r\n        <div>\r\n          4. DO PRAZO DE RESCISÃO\r\n        </div><br>\r\n        <div>\r\n          4.1  O presente contrato entrará em vigor a partir da entrega efetiva do equipamento ao \r\n          COMODATÁRIO e vigorará pelo período necessário ao desenvolvimento das atividades \r\n          previstas no cargo ocupado por este. \r\n        </div><br>\r\n        <div>\r\n          4.2  O presente contrato poderá ser rescindido nas seguintes hipóteses:\r\n        </div><br>\r\n        <div>\r\n          (a) término do vínculo empregatício;\r\n        </div><br>\r\n        <div>\r\n          (b) alteração de cargo do COMODATÁRIO, em consonância à política adotada pela COMODANTE. \r\n        </div><br>\r\n        <div>\r\n          4.3  Em qualquer das hipóteses previstas no item 4.1, haverá a devolução imediata pelo \r\n          COMODATÁRIO do equipamento descrito no item 1.1, no mesmo estado em que o recebeu, \r\n          ressalvando o desgaste decorrente do uso normal do mesmo, sob pena de serem aplicados \r\n          os descontos relativos aos valores em suas verbas rescisórias ou salariais.\r\n        </div><br>\r\n        <div>\r\n          5. DAS DISPOSIÇÕES GERAIS\r\n        </div><br>\r\n        <div>\r\n          5.1  O COMODATÁRIO não poderá, sem o consentimento prévio e por escrito da COMODANTE, \r\n          ceder, transferir ou emprestar a terceiros, no todo ou em parte, os direitos e \r\n          obrigações decorrentes do presente contrato, bem como o veículo, objeto deste instrumento. \r\n        </div><br>\r\n        <div>\r\n          5.2  A eventual tolerância das partes na exigência do fiel cumprimento de qualquer \r\n          obrigação prevista neste instrumento ou no exercício das prerrogativas dele decorrentes \r\n          será considerada mera liberalidade, não implicando em transação, novação, alteração do \r\n          pactuado, renúncia aos respectivos termos e condições, nem afetará o direito de à \r\n          parte exercê-lo a qualquer tempo, cado a COMODANTE revise o termo acima elaborado, o COMODATÁRIO\r\n          deverá assinar desde que esteja em acordo.\r\n        </div><br><br>\r\n      </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\r\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.cidEmpresa | uppercase}}/{{dataFicha.estEmpresa | uppercase}}-{{dataFicha.dataHoje}} </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\r\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.nomeUsuario | uppercase}}</div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "Vq+B":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade-resolver.guard.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard */

    /***/
    function VqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard", function () {
        return TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../controle-linhas.service */
      "CH5F"); // Services


      var TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard = /*#__PURE__*/function () {
        function TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard(controleLinhasService) {
          _classCallCheck(this, TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard);

          this.controleLinhasService = controleLinhasService;
        }

        _createClass(TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.controleLinhasService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codLinha: null,
                codPatrimonio: null,
                descricao: null,
                codEscritorio: null,
                nomeEscritorio: null,
                codEmpresa: null,
                nomeEmpresa: null,
                codSituacao: null,
                situacao: null,
                valor: null,
                objetos: null,
                numContrato: null,
                dataVencimentoContrato: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null
              }
            });
          }
        }]);

        return TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard;
      }();

      TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard.ctorParameters = function () {
        return [{
          type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"]
        }];
      };

      TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"]])], TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard);
      /***/
    },

    /***/
    "YnCI":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaFormularioComponent */

    /***/
    function YnCI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaFormularioComponent", function () {
        return TecnologiaInformacaoControleLinhaFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "Nlb9");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "4URI");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../controle-linhas.service */
      "CH5F");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]); // Services

      var TecnologiaInformacaoControleLinhaFormularioComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoControleLinhaFormularioComponent(localeService, activatedRoute, router, location, confirmModalService, dateService, formBuilder, controleLinhaService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, TecnologiaInformacaoControleLinhaFormularioComponent);

          this.localeService = localeService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.confirmModalService = confirmModalService;
          this.dateService = dateService;
          this.formBuilder = formBuilder;
          this.controleLinhaService = controleLinhaService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_13__["utilsBr"].MASKS;
          this.breadCrumbTree = [];
          this.loadingSituacoes = false;
          this.situacoes = [];
          this.anexosLoaded = false;
          this.formChanged = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(TecnologiaInformacaoControleLinhaFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this11 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this11.appTitle = 'Editar linha';
              } else {
                _this11.appTitle = 'Novo linha';
              }

              _this11.titleService.setTitle(_this11.appTitle);

              _this11.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home'
              }, {
                descricao: 'Controle de linhas',
                routerLink: "/tecnologia-informacao/controle-linhas"
              }, {
                descricao: _this11.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              var data = detalhes.dataVencimentoContrato === null ? new Date() : new Date(detalhes.dataVencimentoContrato);
              this.form = this.formBuilder.group({
                codLinha: [{
                  value: detalhes['codLinha'],
                  disabled: false
                }],
                matricula: [{
                  value: detalhes['matricula'],
                  disabled: false
                }],
                numLinha: [{
                  value: detalhes['numLinha'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                descricao: [{
                  value: detalhes['descricao'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                nomeUsuario: [{
                  value: detalhes['nomeUsuario'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codEscritorio: [{
                  value: detalhes['codEscritorio'],
                  disabled: true
                }],
                nomeEscritorio: [{
                  value: detalhes['nomeEscritorio'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codEmpresa: [{
                  value: detalhes['codEmpresa'],
                  disabled: true
                }],
                nomeEmpresa: [{
                  value: detalhes['nomeEmpresa'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dsSituacao: [{
                  value: detalhes['dsSituacao'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codSituacao: [{
                  value: detalhes['codSituacao'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                valor: [{
                  value: detalhes['valor'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                numContrato: [{
                  value: detalhes['numContrato'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataVencimentoContrato: [{
                  value: detalhes['dataVencimentoContrato'] ? this.dateService.convertStringToDate(detalhes['dataVencimentoContrato'], 'usa') : null,
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                plano: [{
                  value: detalhes['plano'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                gestorFun: [{
                  value: detalhes['gestorFun'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dados: [{
                  value: detalhes['dados'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                conta: [{
                  value: detalhes['conta'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codChip: [{
                  value: detalhes['codChip'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(20)]],
                numConta: [{
                  value: detalhes['numConta'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                senha: [{
                  value: detalhes['senha'],
                  disabled: false
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]]
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.getDocumentos();
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.controleLinhaService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  _this12.loaderNavbar = false;
                  _this12.submittingForm = false;
                })).subscribe(function (response) {
                  if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                    _this12.form.reset();

                    _this12.formChanged = false;

                    _this12.pnotifyService.success(response.mensagem);

                    _this12.activatedRoute.params.subscribe(function (params) {
                      if (params.hasOwnProperty('id')) {
                        _this12.location.back();
                      } else {
                        _this12.router.navigate(['../lista'], {
                          relativeTo: _this12.activatedRoute
                        });
                      }
                    });
                  } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                    _this12.pnotifyService.notice(response.mensagem);
                  } else {
                    _this12.pnotifyService.error();
                  }
                }, function (error) {
                  _this12.pnotifyService.error();
                });
              }
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "getFuncionariosSituacoes",
          value: function getFuncionariosSituacoes() {
            var _this13 = this;

            this.controleLinhaService.getFuncionariosSituacoes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              return _this13.loadingSituacoes = false;
            })).subscribe(function (response) {
              _this13.situacoes = response['data'];
            });
          }
        }, {
          key: "formCanDeactivate",
          value: function formCanDeactivate() {
            if (this.formChanged) {
              if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
              } else {
                return false;
              }
            }

            return true;
          } //UPLOAD DE ARQUIVOS

        }, {
          key: "onFile",
          value: function onFile(files) {
            if (files.length === 0) return;
            var formData = new FormData();
            formData.append('file', files[0]);
            var codLinha = this.form.get('codLinha').value;
            this.controleLinhaService.postDocument(formData, codLinha).subscribe(function (response) {
              console.log(response);
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos() {
            var _this14 = this;

            if (!this.form.get('codLinha').value) return;
            this.controleLinhaService.getDocumentos({
              codLinha: this.form.get('codLinha').value
            }).subscribe(function (response) {
              _this14.documentos = response.body['data'];
              console.log(_this14.documentos);
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(documento) {
            var _this15 = this;

            var confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do anexo?', 'Cancelar', 'Confirmar');
            confirm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (result) {
              return result ? _this15.putDocumento(documento.idDocumento) : rxjs__WEBPACK_IMPORTED_MODULE_18__["EMPTY"];
            })).subscribe(function (success) {
              _this15.pnotifyService.success();

              _this15.documentos = [];

              _this15.getDocumentos();
            }, function (error) {
              _this15.pnotifyService.error('Erro ao excluir anexo. Tente novamente!');
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(idDocumento) {
            this.anexosLoaded = false;
            return this.controleLinhaService.putDocumento({
              idDocumento: idDocumento,
              status: '0'
            });
          }
        }]);

        return TecnologiaInformacaoControleLinhaFormularioComponent;
      }();

      TecnologiaInformacaoControleLinhaFormularioComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoControleLinhaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"]
        }];
      };

      TecnologiaInformacaoControleLinhaFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'tecnologia-informacao-controle-linha-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _controle_linhas_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoControleLinhaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"]])], TecnologiaInformacaoControleLinhaFormularioComponent);
      /***/
    },

    /***/
    "g3FG":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/lista/lista.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function g3FG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyb2xlLWxpbmhhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "iMgG":
    /*!*************************************************!*\
      !*** ./src/app/guards/form-deactivate.guard.ts ***!
      \*************************************************/

    /*! exports provided: FormDeactivateGuard */

    /***/
    function iMgG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function () {
        return FormDeactivateGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormDeactivateGuard = /*#__PURE__*/function () {
        function FormDeactivateGuard() {
          _classCallCheck(this, FormDeactivateGuard);
        }

        _createClass(FormDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component, route, state) {
            return component.formCanDeactivate();
          }
        }]);

        return FormDeactivateGuard;
      }();

      FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FormDeactivateGuard);
      /***/
    },

    /***/
    "k6H8":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/controle-linhas.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TecnologiaInformacaoControleLinhaModule */

    /***/
    function k6H8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaModule", function () {
        return TecnologiaInformacaoControleLinhaModule;
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


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _controle_linhas_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./controle-linhas-routing.module */
      "QRAf");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "6F3Z");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "YnCI");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade.component */
      "H+Cz"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components


      var TecnologiaInformacaoControleLinhaModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoControleLinhaModule() {
        _classCallCheck(this, TecnologiaInformacaoControleLinhaModule);
      });

      TecnologiaInformacaoControleLinhaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["TecnologiaInformacaoControleLinhaListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__["TecnologiaInformacaoControleLinhaFormularioComponent"], _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_18__["TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"], _controle_linhas_routing_module__WEBPACK_IMPORTED_MODULE_13__["TecnologiaInformacaoControleLinhaRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
      })], TecnologiaInformacaoControleLinhaModule);
      /***/
    },

    /***/
    "mstR":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade.component.scss ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mstR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyb2xlLWxpbmhhcy90ZXJtby1yZXNwb25zYWJpbGlkYWRlL3Rlcm1vLXJlc3BvbnNhYmlsaWRhZGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=controle-linhas-controle-linhas-module-es5.js.map