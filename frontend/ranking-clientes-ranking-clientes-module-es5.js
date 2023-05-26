(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ranking-clientes-ranking-clientes-module"], {
    /***/
    "/l5/":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/lista/lista.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function l5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9yYW5raW5nLWNsaWVudGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "5ZUT":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/formulario/formulario.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9yYW5raW5nLWNsaWVudGVzL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "EPem":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/lista/lista.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ComercialGestaoRankingClientesListaComponent */

    /***/
    function EPem(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRankingClientesListaComponent", function () {
        return ComercialGestaoRankingClientesListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "Tnx+");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "/l5/");
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


      var _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../ranking-clientes.service */
      "SEPr");
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


      var ComercialGestaoRankingClientesListaComponent = /*#__PURE__*/function () {
        function ComercialGestaoRankingClientesListaComponent(activatedRoute, router, location, formBuilder, rankingClientesService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialGestaoRankingClientesListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.rankingClientesService = rankingClientesService;
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
            id: 0,
            text: 'Inativo',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.orderBy = 'codClassificacao';
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

        _createClass(ComercialGestaoRankingClientesListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Ranking de  Clientes');
            this.onDetailPanelEmitter();
            this.setRankingSelecionado();
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
                descricao: 'Gestão',
                routerLink: "/comercial/gestao/".concat(params['idSubModulo'])
              }, {
                descricao: 'Ranking de Clientes'
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
              nomeClassificacao: [formValue.nomeClassificacao],
              situacao: [formValue.situacao],
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
              nomeClassificacao: null,
              situacao: 1,
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
          key: "setRankingSelecionado",
          value: function setRankingSelecionado() {
            this.rankingSelecionado = {
              codClassificacao: null,
              nomeClassificacao: null,
              peso: null,
              nota1Fim: null,
              nota2Inicio: null,
              nota2Fim: null,
              nota3Inicio: null,
              nota3Fim: null,
              nota4Inicio: null,
              nota4Fim: null,
              nota5Inicio: null,
              situacao: 1
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

            if (this.form.value.nomeClassificacao) {
              params.nomeClassificacao = this.form.value.nomeClassificacao;
            }

            if (this.form.value.situacao) {
              params.situacao = this.form.value.situacao;
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
            this.rankingClientesService.getListaRanking(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
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
          value: function classStatusBorder(ranking) {
            var borderClass;

            if (ranking.situacao === 1) {
              borderClass = 'border-success';
            } else if (ranking.situacao === 0) {
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
          value: function onDetails(ranking) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setRankingSelecionado();
            this.rankingSelecionado = ranking;
            this.alteracoes = [];
            this.rankingClientesService.getAlteracoes(ranking.codClassificacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              setTimeout(function () {
                _this5.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  // Não está vazio.
                  _this5.detailPanelService.loadedFinished(false);

                  _this5.alteracoes = response.data;
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
          }
        }, {
          key: "onEdit",
          value: function onEdit(ranking) {
            this.router.navigate(['../editar', ranking.codClassificacao], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, ranking) {
            var _this6 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this6.activateRanking(index, ranking) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe(function (success) {
              _this6.pnotifyService.success();

              _this6.refreshMainData(ranking);
            }, function (error) {
              _this6.pnotifyService.error();

              _this6.dadosPagination[index].situacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateRanking",
          value: function activateRanking(index, ranking) {
            this.loaderNavbar = true;
            this.dadosPagination[index].situacao = 1;
            return this.rankingClientesService.activateRanking(ranking.codClassificacao);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, ranking) {
            var _this7 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this7.inactivateRanking(index, ranking) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this7.loaderNavbar = false;
            })).subscribe(function (success) {
              _this7.pnotifyService.success();

              _this7.refreshMainData(ranking);
            }, function (error) {
              _this7.pnotifyService.error();

              _this7.dadosPagination[index].situacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateRanking",
          value: function inactivateRanking(index, ranking) {
            this.loaderNavbar = true;
            this.dadosPagination[index].situacao = 0;
            return this.rankingClientesService.inactivateRanking(ranking.codClassificacao);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(ranking) {
            for (var i = 0; i < this.dados.length; i++) {
              if (ranking.codClassificacao === this.dados[i].codClassificacao) {
                this.dados[i].situacao = ranking.situacao;
                return;
              }
            }
          }
        }]);

        return ComercialGestaoRankingClientesListaComponent;
      }();

      ComercialGestaoRankingClientesListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialGestaoRankingClientesService"]
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

      ComercialGestaoRankingClientesListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialGestaoRankingClientesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-ranking-clientes-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialGestaoRankingClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]])], ComercialGestaoRankingClientesListaComponent);
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
    "J+Mk":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/ranking-clientes/formulario/formulario.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-4\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-6\">\n                <label for=\"nomeClassificacao\">Parâmetro</label>\n                <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"nomeClassificacao\"\n                formControlName=\"nomeClassificacao\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('nomeClassificacao') + ' ' + onFieldRequired(form.controls.nomeClassificacao)\">\n                <invalid-form-control [show]=\"onFieldInvalid('nomeClassificacao')\" message=\"Parâmetro é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-3\">\n                <label for=\"peso\">Peso</label>\n                <input type=\"text\"\n                class=\"form-control\"\n                id=\"peso\"\n                formControlName=\"peso\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('peso') + ' ' + onFieldRequired(form.controls.peso)\">\n                <invalid-form-control [show]=\"onFieldInvalid('peso')\" message=\"Peso é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-3\">\n                <label for=\"situacao\">Situação</label>\n                <select\n                class=\"form-control custom-select\"\n                id=\"situacao\"\n                formControlName=\"situacao\"\n                [ngClass]=\"onFieldError('situacao') + ' ' + onFieldRequired(form.controls.situacao)\">\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n                </select>\n                <invalid-form-control [show]=\"onFieldInvalid('situacao')\" message=\"Situação é obrigatório.\"></invalid-form-control> \n            </div>\n        </div>\n        <br>\n        <div class=\"container\">\n            <div class=\"form-row text-center justify-content-md-center\">\n                <div class=\"form-group col-4\">\n                    <label>Nota</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <label>De</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <label>Até</label>\n                </div>\n            </div>\n            <!-- nota1 -->\n            <div class=\"form-row text-center justify-content-md-center\">\n                <div class=\"form-group col-4\">\n                    <label>1</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\" readonly\n                    class=\"form-control\"\n                    value=\"0.01\">\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota1Fim\"\n                    formControlName=\"nota1Fim\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota1Fim') + ' ' + onFieldRequired(form.controls.nota1Fim)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota1Fim')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n              </div>\n              <!-- nota2 -->\n              <div class=\"form-row text-center justify-content-md-center\">\n                <div class=\"form-group col-4\">\n                    <label>2</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota2Inicio\"\n                    formControlName=\"nota2Inicio\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota2Inicio') + ' ' + onFieldRequired(form.controls.nota2Inicio)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota2Inicio')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota2Fim\"\n                    formControlName=\"nota2Fim\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota2Fim') + ' ' + onFieldRequired(form.controls.nota2Fim)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota2Fim')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n              </div>\n              <!-- nota3 -->\n              <div class=\"form-row text-center justify-content-md-center\">\n                <div class=\"form-group col-4\">\n                    <label>3</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota3Inicio\"\n                    formControlName=\"nota3Inicio\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota3Inicio') + ' ' + onFieldRequired(form.controls.nota3Inicio)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota3Inicio')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota3Fim\"\n                    formControlName=\"nota3Fim\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota3Fim') + ' ' + onFieldRequired(form.controls.nota3Fim)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota3Fim')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n              </div>\n              <!-- nota4 -->\n              <div class=\"form-row text-center justify-content-md-center\">\n                <div class=\"form-group col-4\">\n                    <label>4</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota4Inicio\"\n                    formControlName=\"nota4Inicio\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota4Inicio') + ' ' + onFieldRequired(form.controls.nota4Inicio)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota4Inicio')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota4Fim\"\n                    formControlName=\"nota4Fim\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota4Fim') + ' ' + onFieldRequired(form.controls.nota4Fim)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota4Fim')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n              </div>\n              <!-- nota5 -->\n              <div class=\"form-row text-center justify-content-md-center\">\n                <div class=\"form-group col-4\">\n                    <label>5</label>\n                </div>\n                <div class=\"form-group col-4\">\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"nota5Inicio\"\n                    formControlName=\"nota5Inicio\"\n                    (input)=\"onInput()\"\n                    autocomplete=\"new-password\"\n                    [ngClass]=\"onFieldError('nota5Inicio') + ' ' + onFieldRequired(form.controls.nota5Inicio)\">\n                    <invalid-form-control [show]=\"onFieldInvalid('nota5Inicio')\" message=\"Nota é obrigatório.\"></invalid-form-control>\n                </div>\n                <!-- <div class=\"form-group col-4\">\n                    <input type=\"text\" readonly\n                    class=\"form-control\"\n                    value=\"999999\">\n                </div> -->\n                <div class=\"form-group col-4\">\n                    <label> </label>\n                </div>\n              </div>\n              \n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "O1JO":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/formulario/formulario.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialGestaoRankingClientesFormularioComponent */

    /***/
    function O1JO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRankingClientesFormularioComponent", function () {
        return ComercialGestaoRankingClientesFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "J+Mk");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "5ZUT");
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


      var _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../ranking-clientes.service */
      "SEPr");
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


      var ComercialGestaoRankingClientesFormularioComponent = /*#__PURE__*/function () {
        function ComercialGestaoRankingClientesFormularioComponent(activatedRoute, router, location, formBuilder, rankingClientesService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialGestaoRankingClientesFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.rankingClientesService = rankingClientesService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialGestaoRankingClientesFormularioComponent, [{
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
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this8.appTitle = 'Editar parâmetro';
                /* } else {
                  this.appTitle = 'Novo parâmetro'; */
              }

              _this8.titleService.setTitle(_this8.appTitle);

              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Gestão',
                routerLink: "/comercial/gestao/".concat(params['idSubModulo'])
              }, {
                descricao: 'Ranking de Clientes',
                routerLink: "/comercial/gestao/".concat(params.idSubModulo, "/ranking-clientes/lista")
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
                codClassificacao: [detalhes.codClassificacao],
                nomeClassificacao: [detalhes.nomeClassificacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                peso: [detalhes.peso, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota1Fim: [detalhes.nota1Fim, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota2Inicio: [detalhes.nota2Inicio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota2Fim: [detalhes.nota2Fim, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota3Inicio: [detalhes.nota3Inicio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota3Fim: [detalhes.nota3Fim, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota4Inicio: [detalhes.nota4Inicio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota4Fim: [detalhes.nota4Fim, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nota5Inicio: [detalhes.nota5Inicio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                situacao: [detalhes.situacao ? detalhes.situacao : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
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
            var _this9 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.rankingClientesService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
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

        return ComercialGestaoRankingClientesFormularioComponent;
      }();

      ComercialGestaoRankingClientesFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoRankingClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialGestaoRankingClientesFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-ranking-clientes-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoRankingClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialGestaoRankingClientesFormularioComponent);
      /***/
    },

    /***/
    "SEPr":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/ranking-clientes.service.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialGestaoRankingClientesService */

    /***/
    function SEPr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRankingClientesService", function () {
        return ComercialGestaoRankingClientesService;
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

      var ComercialGestaoRankingClientesService = /*#__PURE__*/function () {
        function ComercialGestaoRankingClientesService(http) {
          _classCallCheck(this, ComercialGestaoRankingClientesService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/gestao/ranking-clientes";
        }

        _createClass(ComercialGestaoRankingClientesService, [{
          key: "getListaRanking",
          value: function getListaRanking(params) {
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
          value: function getAlteracoes(codRanking) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codRanking)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codRanking) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codRanking)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveRanking",
          value: function saveRanking(ranking) {
            return this.http.post("".concat(this.API, "/salvar"), ranking).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateRanking",
          value: function updateRanking(ranking) {
            return this.http.put("".concat(this.API, "/atualizar"), ranking).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(ranking) {
            if (ranking.codClassificacao !== null) {
              return this.updateRanking(ranking);
            }

            return this.saveRanking(ranking);
          }
        }, {
          key: "activateRanking",
          value: function activateRanking(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateRanking",
          value: function inactivateRanking(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialGestaoRankingClientesService;
      }();

      ComercialGestaoRankingClientesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialGestaoRankingClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialGestaoRankingClientesService);
      /***/
    },

    /***/
    "Tnx+":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/ranking-clientes/lista/lista.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Ranking de Clientes\">\n  <!-- <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button> -->\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n     <div class=\"row\" #scrollToFilter>\n      <div class=\"col\">\n        <advanced-filter>\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-3\">\n                <label for=\"nomeClassificacao\">\n                  <span class=\"mr-1\">Parâmetro</span>\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"nomeClassificacao\"\n                  (keydown.enter)=\"onFilter()\">\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label for=\"situacao\">Situação</label>\n                <select\n                  class=\"form-control custom-select\"\n                  id=\"situacao\"\n                  formControlName=\"situacao\">\n                  <option value=\"\">Todos</option>\n                  <option value=\"1\">Ativos</option>\n                  <option value=\"0\">Inativos</option>\n                </select>\n              </div>\n              <div class=\"form-group col-lg-1\">\n                <label for=\"registros\">Registros</label>\n                <select\n                  class=\"form-control\"\n                  id=\"registros\"\n                  formControlName=\"registros\">\n                  <option>25</option>\n                  <option>50</option>\n                  <option>100</option>\n                  <option>200</option>\n                  <option>300</option>\n                </select>\n              </div>\n            </div>\n          </form>\n        </advanced-filter>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <subtitles\n          [data]=\"subtitles\"\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n        </subtitles>\n      </div>\n    </div>\n    <div class=\"row text-center justify-content-center\">\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col-4\">Parâmetro</th>\n              <th scope=\"col-2\">Peso</th>\n              <th scope=\"col-2\" [hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let lista of dadosPagination; let i = index\" [class.table-active]=\"lista.codClassificacao == rankingSelecionado.codClassificacao\">\n              <td [ngClass]=\"classStatusBorder(lista)\">\n                {{ lista.nomeClassificacao | uppercase}}\n              </td>\n              <td>\n                {{ lista.peso }}\n              </td>\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n                <span *ngIf=\"lista.situacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, lista)\">\n                    <i class=\"fas fa-toggle-on\"></i>\n                  </button>\n                </span>\n                <span *ngIf=\"lista.situacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, lista)\">\n                    <i class=\"fas fa-toggle-off\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(lista)\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        <empty-result\n          message=\"Nenhuma informação encontrada\"\n          class=\"my-3\"\n          *ngIf=\"dadosEmpty\">\n        </empty-result>\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n          <pagination\n            [maxSize]=\"maxSize\"\n            [(totalItems)]=\"totalItems\"\n            (pageChanged)=\"onPageChanged($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPage\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\">\n          </pagination>\n        </div>\n      </div>\n      <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n        <detail-panel panelTitle=\"Histórico de alterações\">\n          <custom-table *ngIf=\"alteracoes.length > 0\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" class=\"text-center\">Data</th>\n                <th scope=\"col\">Usuário</th>\n                <th scope=\"col\">Alteração</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let alteracao of alteracoes\">\n                <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\n                <td>{{ alteracao.nomeUsuario | uppercase }}</td>\n                <td>{{ alteracao.mensagem | uppercase }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </detail-panel>\n      </div>\n    </div>\n  </app-body>";
      /***/
    },

    /***/
    "feN0":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/ranking-clientes-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialGestaoRankingClientesRoutingModule */

    /***/
    function feN0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRankingClientesRoutingModule", function () {
        return ComercialGestaoRankingClientesRoutingModule;
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
      "n2BU");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "EPem");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "O1JO"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoRankingClientesListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialGestaoRankingClientesFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoRankingClientesFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialGestaoRankingClientesFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoRankingClientesFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialGestaoRankingClientesRoutingModule = function ComercialGestaoRankingClientesRoutingModule() {
        _classCallCheck(this, ComercialGestaoRankingClientesRoutingModule);
      };

      ComercialGestaoRankingClientesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialGestaoRankingClientesRoutingModule);
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
    "n2BU":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/formulario/formulario-resolver.guard.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialGestaoRankingClientesFormularioResolverGuard */

    /***/
    function n2BU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRankingClientesFormularioResolverGuard", function () {
        return ComercialGestaoRankingClientesFormularioResolverGuard;
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


      var _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ranking-clientes.service */
      "SEPr"); // Services


      var ComercialGestaoRankingClientesFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialGestaoRankingClientesFormularioResolverGuard(rankingClientesService) {
          _classCallCheck(this, ComercialGestaoRankingClientesFormularioResolverGuard);

          this.rankingClientesService = rankingClientesService;
        }

        _createClass(ComercialGestaoRankingClientesFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.rankingClientesService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codClassificacao: null,
                nomeClassificacao: null,
                peso: null,
                nota1Fim: null,
                nota2Inicio: null,
                nota2Fim: null,
                nota3Inicio: null,
                nota3Fim: null,
                nota4Inicio: null,
                nota4Fim: null,
                nota5Inicio: null,
                situacao: null
              }
            });
          }
        }]);

        return ComercialGestaoRankingClientesFormularioResolverGuard;
      }();

      ComercialGestaoRankingClientesFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _ranking_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoRankingClientesService"]
        }];
      };

      ComercialGestaoRankingClientesFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ranking_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoRankingClientesService"]])], ComercialGestaoRankingClientesFormularioResolverGuard);
      /***/
    },

    /***/
    "xxsU":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/ranking-clientes/ranking-clientes.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ComercialGestaoRankingClientesModule */

    /***/
    function xxsU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRankingClientesModule", function () {
        return ComercialGestaoRankingClientesModule;
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


      var _ranking_clientes_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ranking-clientes-routing.module */
      "feN0");
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
      "EPem");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "O1JO"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialGestaoRankingClientesModule = function ComercialGestaoRankingClientesModule() {
        _classCallCheck(this, ComercialGestaoRankingClientesModule);
      };

      ComercialGestaoRankingClientesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoRankingClientesListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialGestaoRankingClientesFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _ranking_clientes_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialGestaoRankingClientesRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialGestaoRankingClientesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ranking-clientes-ranking-clientes-module-es5.js.map