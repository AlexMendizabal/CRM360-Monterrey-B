(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contratos-comerciais-situacoes-contratos-comerciais-situacoes-contratos-comerciais-module"], {
    /***/
    "+//A":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/lista/lista.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent */

    /***/
    function A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent", function () {
        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "x5WO");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Vv1H");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../situacoes-contratos-comerciais.service */
      "/2xy");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL"); // Services


      var ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent(activatedRoute, router, location, formBuilder, situacaoContratossService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.situacaoContratossService = situacaoContratossService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.orderBy = 'nomeSituacao';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.alteracoes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Situação dos contratos comerciais');
            this.onDetailPanelEmitter();
            this.setSituacaoContratoSelecionada();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.showDetailPanelSubscription.unsubscribe();
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
                descricao: 'Situação dos contratos comerciais'
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
              situacaoContrato: [formValue.situacaoContrato],
              inEditar: [formValue.inEditar],
              inAprovacao: [formValue.inAprovacao],
              inSituacao: [formValue.inSituacao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
            this.checkOrder();
            this.loaderFullScreen = false;
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            var formValue = {
              situacaoContrato: null,
              inEditar: 0,
              inAprovacao: 0,
              inSituacao: 0,
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
          key: "setSituacaoContratoSelecionada",
          value: function setSituacaoContratoSelecionada() {
            this.situacaoContratoSelecionada = {
              codSituacao: null,
              nomeSituacao: null,
              inEditar: 0,
              inAprovacao: 0,
              inSituacao: 0,
              situacao: null,
              codUsuario: null
            };
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

            if (this.form.value.situacaoContrato) {
              params.situacaoContrato = this.form.value.situacaoContrato;
            }

            if (this.form.value.inEditar) {
              params.inEditar = this.form.value.inEditar;
            }

            if (this.form.value.inAprovacao) {
              params.inAprovacao = this.form.value.inAprovacao;
            }

            if (this.form.value.inSituacao) {
              params.inSituacao = this.form.value.inSituacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
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
            this.detailPanelService.hide();
            this.situacaoContratossService.getListaSituacoesContratosComerciais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this4.loaderNavbar = false;
              _this4.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.dados = response.data;
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
          key: "classStatusBorder",
          value: function classStatusBorder(situacaoContrato) {
            var borderClass;

            if (situacaoContrato.inSituacao === 1) {
              borderClass = 'border-success';
            } else if (situacaoContrato.inSituacao === 0) {
              borderClass = 'border-danger';
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
          value: function onDetails(situacaoContrato) {
            /* this.loaderNavbar = true;
            this.detailPanelService.show(); */
            this.setSituacaoContratoSelecionada();
            this.situacaoContratoSelecionada = situacaoContrato;
            /* this.alteracoes = []; */

            /* this.situacaoContratossService
              .getAlteracoes(situacaoContrato.codigo)
              .pipe(
                finalize(() => {
                  setTimeout(() => {
                    this.loaderNavbar = false;
                  }, 500);
                })
              )
              .subscribe(
                (response: any) => {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    // Não está vazio.
                    this.detailPanelService.loadedFinished(false);
                    this.alteracoes = response.data;
                  } else if (
                    response.hasOwnProperty('success') &&
                    response.success === false
                  ) {
                    // Vazio.
                    this.detailPanelService.loadedFinished(true);
                  } else {
                    // Vazio e com possível erro.
                    this.pnotifyService.error();
                    this.detailPanelService.loadedFinished(true);
                  }
                },
                (error: any) => {
                  // Vazio e com erro.
                  this.detailPanelService.loadedFinished(true);
                        if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                  } else {
                    this.pnotifyService.error();
                  }
                }
              ); */
          }
        }, {
          key: "onEdit",
          value: function onEdit(situacaoContrato) {
            this.router.navigate(['../editar', situacaoContrato.codSituacao], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, situacaoContrato) {
            var _this5 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this5.activateSituacaoContrato(index, situacaoContrato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this5.loaderNavbar = false;
            })).subscribe(function (success) {
              _this5.pnotifyService.success();

              _this5.refreshMainData(situacaoContrato);
            }, function (error) {
              _this5.pnotifyService.error();

              _this5.dadosPagination[index].inSituacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateSituacaoContrato",
          value: function activateSituacaoContrato(index, situacaoContrato) {
            this.loaderNavbar = true;
            this.dadosPagination[index].inSituacao = 1;
            return this.situacaoContratossService.activateSituacaoContratoComercial(situacaoContrato.codSituacao);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, situacaoContrato) {
            var _this6 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this6.inactivateSituacaoContrato(index, situacaoContrato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe(function (success) {
              _this6.pnotifyService.success();

              _this6.refreshMainData(situacaoContrato);
            }, function (error) {
              _this6.pnotifyService.error();

              _this6.dadosPagination[index].inSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateSituacaoContrato",
          value: function inactivateSituacaoContrato(index, situacaoContrato) {
            this.loaderNavbar = true;
            this.dadosPagination[index].inSituacao = 0;
            return this.situacaoContratossService.inactivateSituacaoContratoComercial(situacaoContrato.codSituacao);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(situacaoContrato) {
            for (var i = 0; i < this.dados.length; i++) {
              if (situacaoContrato.codSituacao === this.dados[i].codSituacao) {
                this.dados[i].inSituacao = situacaoContrato.inSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent;
      }();

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]
        }];
      };

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-contratos-situacao-contratos-comerciais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]])], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent);
      /***/
    },

    /***/
    "/2xy":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais.service.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService */

    /***/
    function xy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService", function () {
        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService;
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

      var ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService = /*#__PURE__*/function () {
        function ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService(http) {
          _classCallCheck(this, ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais";
        }

        _createClass(ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService, [{
          key: "getListaSituacoesContratosComerciais",
          value: function getListaSituacoesContratosComerciais(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codSituacaoContrato) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codSituacaoContrato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codSituacaoContrato) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codSituacaoContrato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveSituacaoContratoComercial",
          value: function saveSituacaoContratoComercial(situacaoContrato) {
            return this.http.post("".concat(this.API, "/salvar"), situacaoContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateSituacaoContratoComercial",
          value: function updateSituacaoContratoComercial(situacaoContrato) {
            return this.http.put("".concat(this.API, "/atualizar"), situacaoContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(situacaoContrato) {
            if (situacaoContrato.codSituacao !== null) {
              return this.updateSituacaoContratoComercial(situacaoContrato);
            }

            return this.saveSituacaoContratoComercial(situacaoContrato);
          }
        }, {
          key: "activateSituacaoContratoComercial",
          value: function activateSituacaoContratoComercial(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateSituacaoContratoComercial",
          value: function inactivateSituacaoContratoComercial(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService;
      }();

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService);
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
    "Vv1H":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/lista/lista.component.scss ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vv1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb250cmF0b3MtY29tZXJjaWFpcy9zaXR1YWNvZXMtY29udHJhdG9zLWNvbWVyY2lhaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "c/j8":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent */

    /***/
    function cJ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent", function () {
        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "jN6f");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "rJzd");
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


      var _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../situacoes-contratos-comerciais.service */
      "/2xy");
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


      var ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent(activatedRoute, router, location, formBuilder, situacaoContratosService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.situacaoContratosService = situacaoContratosService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent, [{
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
            var _this7 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this7.appTitle = 'Editar Situação de contrato';
              } else {
                _this7.appTitle = 'Nova Situação de contrato';
              }

              _this7.titleService.setTitle(_this7.appTitle);

              _this7.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Situação dos contratos comerciais',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/contratos-comerciais/lista")
              }, {
                descricao: _this7.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codSituacao: [detalhes.codSituacao],
                nomeSituacao: [detalhes.nomeSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                inEditar: [detalhes.inEditar, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                inAprovacao: [detalhes.inAprovacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                inSituacao: [detalhes.inSituacao ? detalhes.inSituacao : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.loaderFullScreen = false;
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
            var _this8 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.situacaoContratosService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this8.loaderNavbar = false;
                  _this8.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this8.form.reset();

                      _this8.formChanged = false;

                      _this8.pnotifyService.success(response.mensagem);

                      _this8.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this8.location.back();
                        } else {
                          _this8.router.navigate(['../lista'], {
                            relativeTo: _this8.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this8.pnotifyService.notice(response.mensagem);
                    } else {
                      _this8.pnotifyService.error();
                    }
                  },
                  error: function error(_error2) {
                    _this8.pnotifyService.error();
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

        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent;
      }();

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-cnaes-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent);
      /***/
    },

    /***/
    "f0ez":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario-resolver.guard.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard */

    /***/
    function f0ez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard", function () {
        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard;
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


      var _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../situacoes-contratos-comerciais.service */
      "/2xy"); // Services


      var ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard(situacoesContratosService) {
          _classCallCheck(this, ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard);

          this.situacoesContratosService = situacoesContratosService;
        }

        _createClass(ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.situacoesContratosService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codSituacao: null,
                nomeSituacao: null,
                inEditar: 1,
                inAprovacao: 1,
                inSituacao: 1,
                situacao: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null
              }
            });
          }
        }]);

        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard;
      }();

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"]
        }];
      };

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"]])], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard);
      /***/
    },

    /***/
    "hu0+":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais-routing.module.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule */

    /***/
    function hu0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule", function () {
        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule;
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
      "f0ez");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "+//A");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "c/j8"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule() {
        _classCallCheck(this, ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule);
      });

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule);
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
    "jN6f":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jN6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nomeSituacao\">Descrição da Situação</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeSituacao\"\r\n              formControlName=\"nomeSituacao\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('nomeSituacao') + ' ' + onFieldRequired(form.controls.nomeSituacao)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeSituacao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"inEditar\">Habilita Edição</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"inEditar\"\r\n              formControlName=\"inEditar\"\r\n              [ngClass]=\"onFieldError('inEditar') + ' ' + onFieldRequired(form.controls.inEditar)\">\r\n              <option value=\"1\">Sim</option>\r\n              <option value=\"0\">Não</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('inEditar')\" message=\"Habilita Edição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"inAprovacao\">Habilita Aprovação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"inAprovacao\"\r\n              formControlName=\"inAprovacao\"\r\n              [ngClass]=\"onFieldError('inAprovacao') + ' ' + onFieldRequired(form.controls.inAprovacao)\">\r\n              <option value=\"1\">Sim</option>\r\n              <option value=\"0\">Não</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('inAprovacao')\" message=\"Habilita Aprovação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"inSituacao\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"inSituacao\"\r\n              formControlName=\"inSituacao\"\r\n              [ngClass]=\"onFieldError('inSituacao') + ' ' + onFieldRequired(form.controls.inSituacao)\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"0\">Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('inSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "qx42":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais.module.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule */

    /***/
    function qx42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule", function () {
        return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule;
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


      var _situacoes_contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./situacoes-contratos-comerciais-routing.module */
      "hu0+");
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
      "+//A");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "c/j8"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule = /*#__PURE__*/_createClass(function ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule() {
        _classCallCheck(this, ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule);
      });

      ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _situacoes_contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule);
      /***/
    },

    /***/
    "rJzd":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario.component.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rJzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb250cmF0b3MtY29tZXJjaWFpcy9zaXR1YWNvZXMtY29udHJhdG9zLWNvbWVyY2lhaXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "x5WO":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/lista/lista.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x5WO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Situações dos contratos comerciais\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n     <div class=\"row\" #scrollToFilter>\r\n      <div class=\"col\">\r\n        <advanced-filter>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-4\">\r\n                <label for=\"situacaoContrato\">\r\n                  <span class=\"mr-1\">Situação de contrato</span>\r\n                  <ng-template #tooltipLabelSituacaoContratoTemplate>\r\n                    <p class=\"text-nowrap mb-0\">Código ou Descrição</p>\r\n                    <p class=\"text-nowrap mb-0\">da situação de contrato</p>\r\n                  </ng-template>\r\n                  <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelSituacaoContratoTemplate\" container=\"body\"></i>\r\n                </label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"situacaoContrato\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"inEditar\">Habilita Edição</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"inEditar\"\r\n                  formControlName=\"inEditar\">\r\n                  <option value=\"0\">Todos</option>\r\n                  <option value=\"1\">Sim</option>\r\n                  <option value=\"2\">Não</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"inAprovacao\">Habilita Aprovação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"inAprovacao\"\r\n                  formControlName=\"inAprovacao\">\r\n                  <option value=\"0\">Todos</option>\r\n                  <option value=\"1\">Sim</option>\r\n                  <option value=\"2\">Não</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"inSituacao\">Situação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"inSituacao\"\r\n                  formControlName=\"inSituacao\">\r\n                  <option value=\"0\">Todos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                  <option value=\"2\">Inativos</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"registros\">Registros</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"registros\"\r\n                  formControlName=\"registros\">\r\n                  <option>25</option>\r\n                  <option>50</option>\r\n                  <option>100</option>\r\n                  <option>200</option>\r\n                  <option>300</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </advanced-filter>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col-1\">Código</th>\r\n              <th scope=\"col-2\">Descrição</th>\r\n              <th scope=\"col-2\">Habilita Edição</th>\r\n              <th scope=\"col-2\">Habilita Aprovação</th>\r\n              <th scope=\"col-2\">Dt. Cadastro</th>\r\n              <th scope=\"col-2\">Usuario Cadastro</th>\r\n              <th scope=\"col-1\" [hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let situacao of dadosPagination; let i = index\" [class.table-active]=\"situacao.codSituacao == situacaoContratoSelecionada.codSituacao\">\r\n              <td\r\n                class=\"hover\"\r\n                [ngClass]=\"classStatusBorder(situacao)\"\r\n                (click)=\"onDetails(situacao)\">\r\n                {{ situacao.codSituacao }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(situacao)\">\r\n                {{ situacao.nomeSituacao | uppercase }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(situacao)\">\r\n                <span *ngIf=\"situacao.inEditar == 1\">SIM</span>\r\n                <span *ngIf=\"situacao.inEditar == 0\">NÃO</span>\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(situacao)\">\r\n                <span *ngIf=\"situacao.inAprovacao == 1\">SIM</span>\r\n                <span *ngIf=\"situacao.inAprovacao == 0\">NÃO</span>\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(situacao)\">\r\n                {{ situacao.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(situacao)\">\r\n                {{ situacao.nomeUsuario | uppercase }}\r\n              </td>\r\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n                <span *ngIf=\"situacao.inSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, situacao)\">\r\n                    <i class=\"fas fa-toggle-on\"></i>\r\n                  </button>\r\n                </span>\r\n                <span *ngIf=\"situacao.inSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, situacao)\">\r\n                    <i class=\"fas fa-toggle-off\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(situacao)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel panelTitle=\"Histórico de alterações\">\r\n          <custom-table *ngIf=\"alteracoes.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Data</th>\r\n                <th scope=\"col\">Usuário</th>\r\n                <th scope=\"col\">Alteração</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let alteracao of alteracoes\">\r\n                <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{ alteracao.nomeUsuario | uppercase }}</td>\r\n                <td>{{ alteracao.mensagem | uppercase }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </detail-panel>\r\n      </div> -->\r\n    </div>\r\n  </app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=contratos-comerciais-situacoes-contratos-comerciais-situacoes-contratos-comerciais-module-es5.js.map