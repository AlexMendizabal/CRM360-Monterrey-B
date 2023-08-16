(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["concorrentes-concorrentes-module"], {
    /***/
    "5564":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nomeConcorrente\">Nome do concorrente</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeConcorrente\"\r\n              formControlName=\"nomeConcorrente\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('nomeConcorrente') + ' ' + onFieldRequired(form.controls.nomeConcorrente)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeConcorrente')\" message=\"Nome do concorrente é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nomeMarcaAco\">Nome da marca de aço</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeMarcaAco\"\r\n              formControlName=\"nomeMarcaAco\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"codSituacao\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codSituacao\"\r\n              formControlName=\"codSituacao\"\r\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n              <option value='1'>Ativo</option>\r\n              <option value='0'>Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "6pv4":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/lista/lista.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ComercialCadastrosConcorrenteListaComponent */

    /***/
    function pv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteListaComponent", function () {
        return ComercialCadastrosConcorrenteListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "fN8E");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "OX+Z");
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


      var _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../concorrentes.service */
      "9ua6");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL"); // Services


      var ComercialCadastrosConcorrenteListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosConcorrenteListaComponent(activatedRoute, router, formBuilder, concorrenteService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosConcorrenteListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.concorrenteService = concorrenteService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.breadCrumbTree = [];
          this.showDetailPanel = false;
          this.orderBy = 'nomeConcorrente';
          this.orderType = 'ASC';
          this.showAdvancedFilter = true;
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.alteracoes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosConcorrenteListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Concorrentes');
            this.onDetailPanelEmitter();
            this.setConcorrenteSelecionado();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Concorrentes'
              }];
            });
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
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              codConcorrenteTid: [formValue.codConcorrenteTid],
              nomeConcorrente: [formValue.nomeConcorrente],
              nomeMarcaAco: [formValue.nomeMarcaAco],
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
            var _this3 = this;

            var formValue = {
              codConcorrenteTid: null,
              nomeConcorrente: null,
              nomeMarcaAco: null,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this3.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
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
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
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

            if (this.form.value.codConcorrenteTid) {
              params.codConcorrenteTid = this.form.value.codConcorrenteTid;
            }

            if (this.form.value.nomeConcorrente) {
              params.nomeConcorrente = this.form.value.nomeConcorrente;
            }

            if (this.form.value.nomeMarcaAco) {
              params.nomeMarcaAco = this.form.value.nomeMarcaAco;
            }

            if (this.form.value.nomeMarcaAco) {
              params.nomeMarcaAco = this.form.value.nomeMarcaAco;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "onAdvancedFilter",
          value: function onAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "onInput",
          value: function onInput(field) {
            if (field === 'codConcorrenteTid') {
              if (this.form.value.codConcorrenteTid.length > 0) {
                this.form.controls.nomeConcorrente.setValue(null);
                this.form.controls.nomeConcorrente.disable();
                this.form.controls.nomeMarcaAco.setValue(null);
                this.form.controls.nomeMarcaAco.disable();
              } else {
                this.form.controls.nomeConcorrente.enable();
                this.form.controls.nomeMarcaAco.enable();
              }
            } else if (field === 'nomeConcorrente' || field === 'nomeMarcaAco') {
              if (field === 'nomeConcorrente' && this.form.value.nomeConcorrente.length > 0 || field === 'nomeMarcaAco' && this.form.value.nomeMarcaAco.length > 0) {
                this.form.controls.codConcorrenteTid.setValue(null);
                this.form.controls.codConcorrenteTid.disable();
              } else {
                this.form.controls.codConcorrenteTid.enable();
              }
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.concorrenteService.getListaConcorrentes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderNavbar = false;
              _this4.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.dados = response.data;
                  console.log(_this4.dados);
                  _this4.dadosPagination = _this4.dados.slice(0, _this4.itemsPerPage);
                  _this4.totalItems = _this4.dados.length;
                  _this4.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this4.dadosEmpty = true;
                } else {
                  _this4.pnotifyService.error();

                  _this4.dadosEmpty = true;
                }
              },
              error: function error(_error) {
                _this4.dadosEmpty = true;

                if (_error.error.hasOwnProperty('mensagem')) {
                  _this4.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              }
            });
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
          key: "viewRegister",
          value: function viewRegister(concorrente) {
            this.router.navigate(['../editar', concorrente.codConcorrenteTid], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "setConcorrenteSelecionado",
          value: function setConcorrenteSelecionado() {
            this.concorrenteSelecionado = {
              codConcorrente: null,
              codConcorrenteTid: null,
              nomeConcorrente: null,
              nomeMarcaAco: null,
              codSituacao: null,
              codUsuarioCadastro: null,
              nomeUsuarioCadastro: null,
              dataCadastro: null
            };
          }
        }, {
          key: "onDetails",
          value: function onDetails(concorrente) {
            var _this5 = this;

            if (concorrente.codConcorrente != null) {
              this.loaderNavbar = true;
              this.detailPanelService.show();
              this.setConcorrenteSelecionado();
              this.concorrenteSelecionado = concorrente;
              this.alteracoes = [];
              this.concorrenteService.getAlteracoes(concorrente.codConcorrente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                setTimeout(function () {
                  _this5.loaderNavbar = false;
                }, 500);
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    // Não está vazio.
                    _this5.detailPanelService.loadedFinished(false);

                    _this5.alteracoes = response.data;

                    for (var i = 0; i < _this5.alteracoes.length; i++) {
                      if (_this5.alteracoes[i].nomeCampo == "Situação") {
                        if (_this5.alteracoes[i].de == 1) {
                          _this5.alteracoes[i].de = "Ativo";
                        } else if (_this5.alteracoes[i].de == 0) {
                          _this5.alteracoes[i].de = "Inativo";
                        }

                        if (_this5.alteracoes[i].para == 1) {
                          _this5.alteracoes[i].para = "Ativo";
                        } else if (_this5.alteracoes[i].para == 0) {
                          _this5.alteracoes[i].para = "Inativo";
                        }
                      }
                    }
                  } else if (response.hasOwnProperty('success') && response.success === false) {
                    // Vazio.
                    _this5.detailPanelService.loadedFinished(true);
                  } else {
                    // Vazio e com possível erro.
                    _this5.pnotifyService.error();

                    _this5.detailPanelService.loadedFinished(true);
                  }
                },
                error: function error(_error2) {
                  // Vazio e com erro.
                  _this5.detailPanelService.loadedFinished(true);

                  if (_error2.error.hasOwnProperty('mensagem')) {
                    _this5.pnotifyService.error(_error2.error.mensagem);
                  } else {
                    _this5.pnotifyService.error();
                  }
                }
              });
            } else {
              this.detailPanelService.show();
              this.alteracoes = [];
              this.detailPanelService.loadedFinished(true);
            }
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, concorrente) {
            var _this6 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this6.activateConcorrente(index, concorrente) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe(function (success) {
              _this6.pnotifyService.success();

              _this6.refreshMainData(concorrente);
            }, function (error) {
              _this6.pnotifyService.error();

              _this6.dadosPagination[index].codSituacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateConcorrente",
          value: function activateConcorrente(index, concorrente) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.concorrenteService.activateConcorrente(concorrente.codConcorrenteTid);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, concorrente) {
            var _this7 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this7.inactivateConcorrente(index, concorrente) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loaderNavbar = false;
            })).subscribe(function (success) {
              _this7.pnotifyService.success();

              _this7.refreshMainData(concorrente);
            }, function (error) {
              _this7.pnotifyService.error();

              _this7.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateConcorrente",
          value: function inactivateConcorrente(index, concorrente) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 0;
            return this.concorrenteService.inactivateConcorrente(concorrente.codConcorrenteTid);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(concorrente) {
            for (var i = 0; i < this.dados.length; i++) {
              if (concorrente.codConcorrenteTid === this.dados[i].codConcorrenteTid) {
                this.dados[i].codSituacao = concorrente.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosConcorrenteListaComponent;
      }();

      ComercialCadastrosConcorrenteListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]
        }];
      };

      ComercialCadastrosConcorrenteListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosConcorrenteListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-concorrente-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosConcorrenteListaComponent);
      /***/
    },

    /***/
    "9g9u":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/concorrentes.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ComercialCadastrosConcorrenteModule */

    /***/
    function g9u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteModule", function () {
        return ComercialCadastrosConcorrenteModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _concorrentes_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./concorrentes-routing.module */
      "UEp9");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./lista/lista.component */
      "6pv4");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "q8P8"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosConcorrenteModule = /*#__PURE__*/_createClass(function ComercialCadastrosConcorrenteModule() {
        _classCallCheck(this, ComercialCadastrosConcorrenteModule);
      });

      ComercialCadastrosConcorrenteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosConcorrenteListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosConcorrenteFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _concorrentes_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosConcorrenteRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialCadastrosConcorrenteModule);
      /***/
    },

    /***/
    "9ua6":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/concorrentes.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: ComercialCadastrosConcorrenteService */

    /***/
    function ua6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteService", function () {
        return ComercialCadastrosConcorrenteService;
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

      var ComercialCadastrosConcorrenteService = /*#__PURE__*/function () {
        function ComercialCadastrosConcorrenteService(http) {
          _classCallCheck(this, ComercialCadastrosConcorrenteService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/concorrentes";
        }

        _createClass(ComercialCadastrosConcorrenteService, [{
          key: "getListaConcorrentes",
          value: function getListaConcorrentes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getConcorrente",
          value: function getConcorrente(codConcorrenteTid) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codConcorrenteTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codCnae) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codCnae)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveConcorrente",
          value: function saveConcorrente(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateConcorrente",
          value: function updateConcorrente(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codConcorrenteTid !== null) {
              return this.updateConcorrente(record);
            }

            return this.saveConcorrente(record);
          }
        }, {
          key: "activateConcorrente",
          value: function activateConcorrente(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateConcorrente",
          value: function inactivateConcorrente(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosConcorrenteService;
      }();

      ComercialCadastrosConcorrenteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosConcorrenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosConcorrenteService);
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
    "OX+Z":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/lista/lista.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function OXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb25jb3JyZW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "UEp9":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/concorrentes-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ComercialCadastrosConcorrenteRoutingModule */

    /***/
    function UEp9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteRoutingModule", function () {
        return ComercialCadastrosConcorrenteRoutingModule;
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


      var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/guards/form-deactivate.guard */
      "iMgG");
      /* harmony import */


      var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario/formulario-resolver.guard */
      "eB7R");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "6pv4");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "q8P8"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosConcorrenteListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosConcorrenteFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTransportadoraFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosConcorrenteFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTransportadoraFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosConcorrenteRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosConcorrenteRoutingModule() {
        _classCallCheck(this, ComercialCadastrosConcorrenteRoutingModule);
      });

      ComercialCadastrosConcorrenteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosConcorrenteRoutingModule);
      /***/
    },

    /***/
    "eB7R":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario-resolver.guard.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraFormularioResolverGuard */

    /***/
    function eB7R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraFormularioResolverGuard", function () {
        return ComercialCadastrosTransportadoraFormularioResolverGuard;
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


      var _concorrentes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../concorrentes.service */
      "9ua6"); // Services


      var ComercialCadastrosTransportadoraFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosTransportadoraFormularioResolverGuard(concorrenteService) {
          _classCallCheck(this, ComercialCadastrosTransportadoraFormularioResolverGuard);

          this.concorrenteService = concorrenteService;
        }

        _createClass(ComercialCadastrosTransportadoraFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.concorrenteService.getConcorrente(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codConcorrenteTid: null,
                nomeConcorrente: null,
                nomeMarcaAco: null,
                codSituacao: null
              }
            });
          }
        }]);

        return ComercialCadastrosTransportadoraFormularioResolverGuard;
      }();

      ComercialCadastrosTransportadoraFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _concorrentes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosConcorrenteService"]
        }];
      };

      ComercialCadastrosTransportadoraFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_concorrentes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosConcorrenteService"]])], ComercialCadastrosTransportadoraFormularioResolverGuard);
      /***/
    },

    /***/
    "fN8E":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/concorrentes/lista/lista.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fN8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Concorrentes\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2 mb-lg-0\">\r\n              <label for=\"codConcorrenteTid\">Código do concorrente</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"codConcorrenteTid\"\r\n                (input)=\"onInput('codConcorrenteTid')\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 mb-lg-0\">\r\n              <label for=\"nomeConcorrente\">Nome do concorrente</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"nomeConcorrente\"\r\n                (input)=\"onInput('nomeConcorrente')\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 mb-lg-0\">\r\n              <label for=\"nomeMarcaAco\">Nome da marca de aço</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"nomeMarcaAco\"\r\n                (input)=\"onInput('nomeMarcaAco')\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2 mb-lg-0\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <ng-template #tooltipUltimaAlteracaoTemplate>\r\n        <p class=\"text-nowrap mb-0\">Última alteração</p>\r\n      </ng-template>\r\n      <custom-table *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center hover\">\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'codConcorrente'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codConcorrenteTid')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\">\r\n              <thead-sorter\r\n                value=\"Nome concorrente\"\r\n                [active]=\"orderBy == 'nomeConcorrente'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeConcorrente')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Marca de aço</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-1\">Usuário</span>\r\n              <i class=\"far fa-question-circle\" [tooltip]=\"tooltipUltimaAlteracaoTemplate\"></i>\r\n            </th>\r\n            <th scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-1\">data última atualização</span>\r\n            </th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let concorrente of dadosPagination; let i = index\" [class.table-active]=\"concorrente.codConcorrenteTid == concorrenteSelecionado.codConcorrenteTid\">\r\n            <td class=\"text-center hover\" (click)=\"onDetails(concorrente)\">{{ concorrente.codConcorrenteTid }}</td>\r\n            <td class=\"hover\" (click)=\"onDetails(concorrente)\">{{ concorrente.nomeConcorrente | uppercase }}</td>\r\n            <td class=\"hover\" (click)=\"onDetails(concorrente)\" [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"concorrente.nomeMarcaAco == null || concorrente.nomeMarcaAco ==''\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"concorrente.nomeMarcaAco != null\">{{ concorrente.nomeMarcaAco | uppercase }}</span>\r\n            </td>\r\n            <td class=\"hover\" (click)=\"onDetails(concorrente)\" [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"concorrente.nomeUsuarioCadastro == null || concorrente.nomeUsuarioCadastro ==''\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"concorrente.nomeUsuarioCadastro != null\">{{ concorrente.nomeUsuarioCadastro | uppercase }}</span>\r\n            </td>\r\n            <td class=\"text-center hover\" (click)=\"onDetails(concorrente)\" [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"concorrente.dataCadastro == null || concorrente.dataCadastro == ''\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"concorrente.dataCadastro != null\">{{ concorrente.dataCadastro | date: 'dd/MM/yyyy' }}</span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <span *ngIf=\"concorrente.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, concorrente)\">\r\n                  <i class=\"fas fa-toggle-on\"></i>\r\n                </button>\r\n              </span>\r\n              <span *ngIf=\"concorrente.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, concorrente)\">\r\n                  <i class=\"fas fa-toggle-off\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"viewRegister(concorrente)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Histórico de alterações\">\r\n        <custom-table *ngIf=\"alteracoes.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n              <th scope=\"col\">Tipo</th>\r\n              <th scope=\"col\">Campo</th>\r\n              <th scope=\"col\">de</th>\r\n              <th scope=\"col\">para</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let alteracao of alteracoes\">\r\n              <td class=\"text-center\">{{ alteracao.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td>{{ alteracao.nomeUsuario | uppercase }}</td>\r\n              <td>{{ alteracao.nomeTipoOperacao | uppercase }}</td>\r\n              <td>{{ alteracao.nomeCampo | uppercase }}</td>\r\n              <td>{{ alteracao.de | uppercase }}</td>\r\n              <td>{{ alteracao.para | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
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
    "pGPt":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function pGPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb25jb3JyZW50ZXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "q8P8":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialCadastrosConcorrenteFormularioComponent */

    /***/
    function q8P8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteFormularioComponent", function () {
        return ComercialCadastrosConcorrenteFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "5564");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "pGPt");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../concorrentes.service */
      "9ua6");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialCadastrosConcorrenteFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosConcorrenteFormularioComponent(activatedRoute, router, location, formBuilder, concorrenteService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialCadastrosConcorrenteFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.concorrenteService = concorrenteService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosConcorrenteFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.titleService.setTitle('Cadastro de concorrente');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this8.appTitle = 'Editar concorrente';
              } else {
                _this8.appTitle = 'Novo concorrente';
              }

              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Concorrentes',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'], "/concorrentes/lista")
              }, {
                descricao: _this8.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codConcorrenteTid: [detalhes.codConcorrenteTid],
                nomeConcorrente: [detalhes.nomeConcorrente, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(40)]],
                nomeMarcaAco: [detalhes.nomeMarcaAco, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
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
            var _this9 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.concorrenteService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this9.loaderNavbar = false;
                  _this9.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this9.form.reset();

                      _this9.formChanged = false;

                      _this9.pnotifyService.success(response.mensagem);

                      _this9.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this9.location.back();
                        } else {
                          _this9.router.navigate(['../lista'], {
                            relativeTo: _this9.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this9.pnotifyService.notice(response.mensagem);
                    } else {
                      _this9.pnotifyService.error();
                    }
                  },
                  error: function error(_error3) {
                    _this9.pnotifyService.error();
                  }
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
        }]);

        return ComercialCadastrosConcorrenteFormularioComponent;
      }();

      ComercialCadastrosConcorrenteFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialCadastrosConcorrenteFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-concorrente-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialCadastrosConcorrenteFormularioComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=concorrentes-concorrentes-module-es5.js.map