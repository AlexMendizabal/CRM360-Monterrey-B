(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propostas-associacao-situacoes-proposta-associacao-situacoes-proposta-module"], {
    /***/
    "03Ab":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/formulario/formulario.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent */

    /***/
    function Ab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent", function () {
        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "3UTN");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "LMxZ");
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


      var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../associacao-situacoes-proposta.service */
      "SuPn");
      /* harmony import */


      var _situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../situacao-proposta/situacao-proposta.service */
      "3WN2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // ng-brazil
      // Services


      var ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent(activatedRoute, router, location, formBuilder, associacaoSituacoesPropostaService, situacoesPropostaService, pnotifyService, atividadesService, titleService, comercialService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.associacaoSituacoesPropostaService = associacaoSituacoesPropostaService;
          this.situacoesPropostaService = situacoesPropostaService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.comercialService = comercialService;
          this.confirmModalService = confirmModalService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_8__["MASKS"];
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfigAssocSituacoes = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.tableConfigSituacoes = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.colors = [{
            hex: '#FFFF01',
            descricao: 'Amarillo'
          }, {
            hex: '#0033FF',
            descricao: 'Azul'
          }, {
            hex: '#FB6602',
            descricao: 'Naranja'
          }, {
            hex: '#FF0087',
            descricao: 'Rosado'
          }, {
            hex: '#610069',
            descricao: 'Morado'
          }, {
            hex: '#FA1100',
            descricao: 'Rojo'
          }];
          this.codClasse = null;
          this.formChanged = false;
          this.showSituacoes = true;
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.materiais = [];
          this.toggleAll = false;
          this.searching = false;
          this.firstSearch = false;
          this.situacoesLista = [];
          this.situacoesListaLoaded = false;
          this.situacoesListaEmpty = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
            this.setFormBuilder();
            /* this.setFormMateriais(); */

            this.titleService.setTitle('Associação de Situações das propostas');
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
              if (params.id) {
                _this.appTitle = 'Editar associação';
              } else {
                _this.appTitle = 'Nova associação';
              }

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Associação de situações',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/propostas/associacao-situacoes-proposta/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this2 = this;

            this.searching = true;
            this.situacoesListaEmpty = false;
            this.situacoes = [];
            this.situacoesLista = [];
            this.situacoesPropostaService.getListaSituacaoProposta().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
              _this2.searching = false;
              _this2.situacoesListaLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this2.situacoes = response.data;
                  /* this.situacoesLista = response.data; */

                  _this2.situacoesLista = response.data.map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this2.pnotifyService.error(response.mensagem);

                  _this2.situacoesListaEmpty = true;
                } else {
                  _this2.pnotifyService.error();
                }
              },
              error: function error(_error) {
                if (_error['error'].hasOwnProperty('mensagem')) {
                  _this2.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this2.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            var resolver = this.activatedRoute.snapshot.data.detalhes;

            if (resolver.success === true) {
              var detalhes = resolver.data;
              this.form = this.formBuilder.group({
                codAssociacao: [detalhes.codAssociacao],
                descLegenda: [detalhes.descLegenda, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                ordemExibicao: [detalhes.ordemExibicao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                cor: [detalhes.cor],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                assocSituacoes: this.formBuilder.array([])
              });
              this.setSituacoes(detalhes.situacoesAssociadas);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "onColorChange",
          value: function onColorChange(color) {
            this.form.controls.cor.setValue(color.hex);
          }
          /* buscaMate(): void {
            let codMaterial = this.form.getRawValue().codMaterial;
                if (typeof codMaterial !== 'undefined' && codMaterial !== null) {
              this.loaderNavbar = true;
                  this.comercialService
                .getMateriais({
                  codMaterial: codMaterial,
                })
                .pipe(
                  finalize(() => {
                    this.loaderNavbar = false;
                  })
                )
                .subscribe(
                  (response: JsonResponse) => {
                    if (
                      response.hasOwnProperty('success') &&
                      response.success === true
                    ) {
                      this.form.controls.nomeMaterial.setValue(
                        response.data[0].descricao
                      );
                      this.form.controls.nomeMaterial.setValidators([
                        Validators.required,
                      ]);
                      this.form.controls.nomeMaterial.updateValueAndValidity();
                    } else if (
                      response.hasOwnProperty('success') &&
                      response.success === false &&
                      response.hasOwnProperty('mensagem')
                    ) {
                      this.pnotifyService.error(response.mensagem);
                    } else {
                      this.pnotifyService.error();
                    }
                  },
                  (error: any) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                      this.pnotifyService.error(error.error.mensagem);
                    } else {
                      this.pnotifyService.error();
                    }
                  }
                );
            }
          } */

        }, {
          key: "setSituacoes",
          value: function setSituacoes(situacoes) {
            if (situacoes.length > 0) {
              for (var i = 0; i < situacoes.length; i++) {
                this.onAddSituacao(situacoes[i]);
              }
            }
          }
        }, {
          key: "onAddSituacao",
          value: function onAddSituacao(situacaoProposta, manipulateForm) {
            var _this3 = this;

            if (this.checkSituacaoExists(situacaoProposta) === false) {
              this.assocSituacoes.push(this.formBuilder.group({
                codSituacaoProposta: [situacaoProposta.codSituacaoProposta],
                descSituacaoProposta: [situacaoProposta.descSituacaoProposta]
              }));

              if (this.form.value.assocSituacoes.length > 9) {
                if (this.tableConfigAssocSituacoes.fixedHeader === false) {
                  this.showSituacoes = false;
                  this.tableConfigAssocSituacoes.fixedHeader = true;
                  setTimeout(function () {
                    _this3.showSituacoes = true;
                  }, 1);
                }
              }

              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            }
          }
        }, {
          key: "checkSituacaoExists",
          value: function checkSituacaoExists(situacaoProposta) {
            return this.form.value.assocSituacoes.some(function (el) {
              return el.codSituacaoProposta === situacaoProposta.codSituacaoProposta;
            });
          }
        }, {
          key: "onLimparAssociacoes",
          value: function onLimparAssociacoes() {
            var assocSituacoes = this.form.get('assocSituacoes');
            assocSituacoes.clear();
          }
        }, {
          key: "onDeleteSituacao",
          value: function onDeleteSituacao(index) {
            var _this4 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this4.deleteSituacao(index) : null;
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteSituacao",
          value: function deleteSituacao(index) {
            this.assocSituacoes.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            this.toggleAll = !this.toggleAll;

            for (var index = 0; index < this.situacoesLista.length; index++) {
              this.situacoesLista[index].checked = this.toggleAll === true ? 1 : 0;
            }
          }
        }, {
          key: "onCheckSituacao",
          value: function onCheckSituacao(index, situacao) {
            this.situacoesLista[index].checked = situacao.checked == 0 ? 1 : 0;
          }
        }, {
          key: "onAssociarSituacoes",
          value: function onAssociarSituacoes() {
            this.toggleAll = false;

            for (var index = 0; index < this.situacoesLista.length; index++) {
              if (this.situacoesLista[index].checked === 1) {
                var situacao = {
                  codSituacaoProposta: this.situacoesLista[index].codSituacaoProposta,
                  descSituacaoProposta: this.situacoesLista[index].situacaoProposta
                };
                this.onAddSituacao(situacao, true);
                this.situacoesLista[index].checked = 0;
              }
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
            var _this5 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                if (this.form.value.assocSituacoes.length > 0) {
                  this.loaderNavbar = true;
                  this.submittingForm = true;
                  this.associacaoSituacoesPropostaService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this5.loaderNavbar = false;
                    _this5.submittingForm = false;
                  })).subscribe({
                    next: function next(response) {
                      if (response.hasOwnProperty('success') && response.success === true) {
                        _this5.form.reset();

                        _this5.formChanged = false;

                        _this5.pnotifyService.success(response.mensagem);

                        _this5.activatedRoute.params.subscribe(function (params) {
                          var navigateTo;

                          if (params.hasOwnProperty('id')) {
                            navigateTo = '../../lista';
                          } else {
                            navigateTo = '../lista';
                          }

                          _this5.router.navigate([navigateTo], {
                            relativeTo: _this5.activatedRoute
                          });
                        });
                      } else if (response.hasOwnProperty('success') && response.success === false) {
                        _this5.pnotifyService.error(response.mensagem);
                      } else {
                        _this5.pnotifyService.error();
                      }
                    },
                    error: function error(_error2) {
                      _this5.pnotifyService.error();
                    }
                  });
                } else {
                  this.pnotifyService.notice('Associe pelo menos uma situação.');
                }
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
        }, {
          key: "assocSituacoes",
          get: function get() {
            return this.form.get('assocSituacoes');
          }
        }]);

        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent;
      }();

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]
        }, {
          type: _situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosSituacaoPropostaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-propostas-associacao-situacoes-proposta-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"], _situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosSituacaoPropostaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]])], ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent);
      /***/
    },

    /***/
    "3UTN":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/formulario/formulario.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UTN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\">\n        <div class=\"mtc-title\">Associação de Situações das Propostas</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-8\">\n            <label for=\"descLegenda\">Legenda</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <div class=\"btn-group\" dropdown>\n                    <button dropdownToggle type=\"button\" class=\"color-dropdown dropdown-toggle\" aria-controls=\"color-dropdown\">\n                      <div [ngStyle]=\"{'backgroundColor': form.value.cor}\"></div>\n                    </button>\n                    <ul id=\"color-dropdown\" *dropdownMenu class=\"dropdown-menu\">\n                      <li role=\"menuitem\">\n                        <a\n                          class=\"dropdown-item\"\n                          href=\"javascript:void(0)\"\n                          *ngFor=\"let color of colors\"\n                          (click)=\"onColorChange(color)\">\n                          <div class=\"color-hex\" [ngStyle]=\"{'backgroundColor': color.hex}\"></div>\n                          <div>{{ color.descricao }}</div>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </span>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"descLegenda\"\n                formControlName=\"descLegenda\"\n                (input)=\"onInput()\"\n                [ngClass]=\"onFieldError('descLegenda') + ' ' + onFieldRequired(form.controls.descLegenda)\">\n              <invalid-form-control [show]=\"onFieldInvalid('descLegenda')\" message=\"Legenda é obrigatória.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"ordemExibicao\">Ord. exibição</label>\n            <select\n              class=\"form-control\"\n              id=\"ordemExibicao\"\n              formControlName=\"ordemExibicao\"\n              (change)=\"onInput()\"\n              [ngClass]=\"onFieldError('ordemExibicao') + ' ' + onFieldRequired(form.controls.ordemExibicao)\">\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\n              <option value=\"1\">Primeira</option>\n              <option value=\"2\">Segunda</option>\n              <option value=\"3\">Terceira</option>\n              <option value=\"4\">Quarta</option>\n              <option value=\"5\">Quinta</option>\n              <option value=\"6\">Sexta</option>\n              <option value=\"7\">Sétima</option>\n              <option value=\"8\">Oitava</option>\n              <option value=\"9\">Nona</option>\n              <option value=\"10\">Décima</option>\n            </select>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"codSituacao\">Situação</label>\n            <select\n              class=\"form-control\"\n              id=\"codSituacao\"\n              formControlName=\"codSituacao\"\n              (change)=\"onInput()\"\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\n              <option value=\"0\">Inativo</option>\n              <option value=\"1\">Ativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <hr>\n          </div>\n        </div>\n        <div formArrayName=\"assocSituacoes\">\n          <div class=\"row mb-2\">\n            <div class=\"col mt-auto\">\n              <div class=\"mtc-title mb-0\">Situações Similares</div>\n            </div>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-danger\"\n                  (click)=\"onLimparAssociacoes()\">\n                  <i class=\"fas fa-trash\"></i>\n                  <span>Limpar</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showSituacoes && form.value.assocSituacoes.length > 0\">\n            <div class=\"col\">\n              <custom-table [config]=\"tableConfigAssocSituacoes\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" style=\"width: 95%\">Situação</th>\n                    <th scope=\"col\" style=\"width: 5%\"></th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let situacao of assocSituacoes.controls; let i = index\" [formGroupName]=\"i\">\n                    <td style=\"width: 95%\">\n                      {{ form.value.assocSituacoes[i].codSituacaoProposta }} - {{ form.value.assocSituacoes[i].descSituacaoProposta | uppercase }}\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        icon=\"fas fa-trash\"\n                        size=\"small\"\n                        (click)=\"onDeleteSituacao(i)\">\n                      </btn-icon>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showSituacoes && form.value.assocSituacoes.length === 0\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-exchange-alt\"\n                text=\"Nenhuma associação encontrada\">\n              </message>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div *ngIf=\"situacoesLista.length > 0\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de situações</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarSituacoes()\"\n                [disabled]=\"searching === true\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span>Associar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigSituacoes\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll()\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 95%\">Situação</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let situacao of situacoesLista; let i = index;\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"situacao.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onCheckSituacao(i, situacao)\">\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 95%\"\n                    (click)=\"onCheckSituacao(i, situacao)\">\n                    {{ situacao.situacaoProposta | uppercase}}\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"searching === true\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando as situações para você...\">\n          </message>\n        </div>\n      </div>\n      <div *ngIf=\"searching === false\">\n        <div class=\"row\" *ngIf=\"situacoesListaEmpty && situacoesListaLoaded\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"Nenhuma informação encontrada\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "3WN2":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/situacao-proposta.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaService */

    /***/
    function WN2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaService", function () {
        return ComercialCadastrosSituacaoPropostaService;
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

      var ComercialCadastrosSituacaoPropostaService = /*#__PURE__*/function () {
        function ComercialCadastrosSituacaoPropostaService(http) {
          _classCallCheck(this, ComercialCadastrosSituacaoPropostaService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/cadastros/situacao-proposta";
        }

        _createClass(ComercialCadastrosSituacaoPropostaService, [{
          key: "getListaSituacaoProposta",
          value: function getListaSituacaoProposta(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaSituacaoPropostaTid",
          value: function getListaSituacaoPropostaTid() {
            return this.http.get("".concat(this.API, "/tid/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codSituacaoProposta) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codSituacaoProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codSituacaoProposta) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codSituacaoProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveSituacaoProposta",
          value: function saveSituacaoProposta(situacaoProposta) {
            return this.http.post("".concat(this.API, "/salvar"), situacaoProposta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateSituacaoProposta",
          value: function updateSituacaoProposta(situacaoProposta) {
            return this.http.put("".concat(this.API, "/atualizar"), situacaoProposta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(situacaoProposta) {
            if (situacaoProposta.codSituacaoProposta !== null) {
              return this.updateSituacaoProposta(situacaoProposta);
            }

            return this.saveSituacaoProposta(situacaoProposta);
          }
        }, {
          key: "activateSituacaoProposta",
          value: function activateSituacaoProposta(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateSituacaoProposta",
          value: function inactivateSituacaoProposta(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosSituacaoPropostaService;
      }();

      ComercialCadastrosSituacaoPropostaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosSituacaoPropostaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosSituacaoPropostaService);
      /***/
    },

    /***/
    "6SpV":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/formulario/formulario-resolver.guard.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard */

    /***/
    function SpV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard", function () {
        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard;
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


      var _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../associacao-situacoes-proposta.service */
      "SuPn"); // Services


      var ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard(materiaisSimilaridadeService) {
          _classCallCheck(this, ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard);

          this.materiaisSimilaridadeService = materiaisSimilaridadeService;
        }

        _createClass(ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.materiaisSimilaridadeService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                codAssociacao: null,
                descLegenda: null,
                cor: '#0033FF',
                ordemExibicao: '',
                codSituacao: 1,
                situacoesAssociadas: []
              }
            });
          }
        }]);

        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard;
      }();

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]
        }];
      };

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]])], ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard);
      /***/
    },

    /***/
    "BAy5":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/associacao-situacoes-proposta.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule */

    /***/
    function BAy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule", function () {
        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule;
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


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _associacao_situacoes_proposta_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./associacao-situacoes-proposta-routing.module */
      "dx5U");
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
      "soX5");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "03Ab");
      /* harmony import */


      var _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./associacao-situacoes-proposta.service */
      "SuPn"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule = function ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule() {
        _classCallCheck(this, ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule);
      };

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent"]],
        imports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], _associacao_situacoes_proposta_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]]
      })], ComercialCadastrosPropostasAssociacaoSituacoesPropostaModule);
      /***/
    },

    /***/
    "BgiK":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/lista/lista.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BgiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9wcm9wb3N0YXMvYXNzb2NpYWNhby1zaXR1YWNvZXMtcHJvcG9zdGEvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
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
    "LMxZ":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/formulario/formulario.component.scss ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LMxZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .input-group .custom-select:not(:last-child),\n::ng-deep .input-group .form-control:not(:last-child) {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n::ng-deep .color-dropdown {\n  background-color: transparent;\n  border: unset;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0px;\n}\n::ng-deep .color-dropdown div {\n  border-radius: 50%;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n}\n::ng-deep .color-dropdown::after {\n  margin-top: 4px;\n  margin-left: 5px !important;\n}\n::ng-deep .color-dropdown:focus {\n  outline: unset;\n}\n::ng-deep ul#color-dropdown li a.dropdown-item {\n  display: -ms-flexbox;\n  display: flex;\n}\n::ng-deep ul#color-dropdown li a.dropdown-item .color-hex {\n  border-radius: 50%;\n  content: \"\";\n  height: 15px;\n  margin-right: 8px;\n  margin-top: 4px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2FkYXN0cm9zL3Byb3Bvc3Rhcy9hc3NvY2lhY2FvLXNpdHVhY29lcy1wcm9wb3N0YS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07O0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQUZSO0FBTUU7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FBSko7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSE47QUFLSTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQUhOO0FBS0k7RUFDRSxjQUFBO0FBSE47QUFRTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQU5SO0FBT1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUxWIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2FkYXN0cm9zL3Byb3Bvc3Rhcy9hc3NvY2lhY2FvLXNpdHVhY29lcy1wcm9wb3N0YS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAuaW5wdXQtZ3JvdXAge1xuICAgIC5jdXN0b20tc2VsZWN0LFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29sb3ItZHJvcGRvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGl2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiB1bnNldDtcbiAgICB9XG4gIH1cbiAgdWwjY29sb3ItZHJvcGRvd24ge1xuICAgIGxpIHtcbiAgICAgIGEuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5jb2xvci1oZXgge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "SuPn":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/associacao-situacoes-proposta.service.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosPropostasAssociacaoSituacoesPropostaService */

    /***/
    function SuPn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosPropostasAssociacaoSituacoesPropostaService", function () {
        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaService;
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


      var _comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialCadastrosPropostasAssociacaoSituacoesPropostaService = /*#__PURE__*/function () {
        function ComercialCadastrosPropostasAssociacaoSituacoesPropostaService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosPropostasAssociacaoSituacoesPropostaService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/cadastros/propostas/associacao-situacoes-proposta";
        }

        _createClass(ComercialCadastrosPropostasAssociacaoSituacoesPropostaService, [{
          key: "getListaAssociacoes",
          value: function getListaAssociacoes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAssociacoesSituacoesProposta",
          value: function getAssociacoesSituacoesProposta(codAssociacao) {
            return this.http.get("".concat(this.API, "/associacoes/").concat(codAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codAssociacao) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "saveAssociacao",
          value: function saveAssociacao(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateAssociacao",
          value: function updateAssociacao(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codAssociacao !== null) {
              return this.updateAssociacao(record);
            }

            return this.saveAssociacao(record);
          }
        }, {
          key: "activateAssociacao",
          value: function activateAssociacao(codAssociacao) {
            return this.http.post("".concat(this.API, "/ativar"), codAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "inactivateAssociacao",
          value: function inactivateAssociacao(codAssociacao) {
            return this.http.post("".concat(this.API, "/inativar"), codAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaService;
      }();

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"]])], ComercialCadastrosPropostasAssociacaoSituacoesPropostaService);
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
    "aw03":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/lista/lista.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aw03(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Associação de Situações das propostas\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"situacaoProposta\">\n                <span class=\"mr-1\">Situação da Proposta</span>\n                <ng-template #tooltipLabelSituacaoPropostaTemplate>\n                  <p class=\"text-nowrap mb-0\">Código ou Descrição </p>\n                  <p class=\"text-nowrap mb-0\">da Situação da Proposta</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelSituacaoPropostaTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"situacaoProposta\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option value=\"\">Todos</option>\n                <option value=\"0\">Inativos</option>\n                <option value=\"1\">Ativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center hover\">\n              <thead-sorter\n                value=\"Código\"\n                [active]=\"orderBy == 'codAssociacao'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('codAssociacao')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Legenda\"\n                [active]=\"orderBy == 'descLegenda'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('descLegenda')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Ord. de exibição</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Dt. Cadastro</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Usuário cadastro</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let associacao of dadosPagination; let i = index;\" [class.table-active]=\"associacao.codAssociacao == associacaoSelecionada.codAssociacao && showDetailPanel\">\n            <td\n              class=\"text-center hover\"\n              [ngClass]=\"classStatusBorder(associacao)\"\n              (click)=\"onDetails(associacao)\">\n              {{ associacao.codAssociacao }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(associacao)\">\n              {{ associacao.descLegenda | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(associacao)\">\n              {{ associacao.ordemExibicao }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(associacao)\">\n              {{ associacao.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(associacao)\"\n              [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"associacao.nomeUsuario === null\">NÃO INFORMADO</span>\n              <span *ngIf=\"associacao.nomeUsuario !== null\">\n                {{ associacao.nomeUsuario | uppercase }}\n              </span>\n            </td>\n            <td class=\"text-right\">\n              <span *ngIf=\"associacao.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, associacao)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"associacao.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, associacao)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(associacao)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"situacoesAssociadas.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código</th>\n              <th scope=\"col\">Material</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let situacao of situacoesAssociadas\">\n              <td class=\"text-center\">{{ situacao.codSituacaoProposta }}</td>\n              <td>{{ situacao.descSituacaoProposta | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "dx5U":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/associacao-situacoes-proposta-routing.module.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule */

    /***/
    function dx5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule", function () {
        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule;
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
      "6SpV");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "soX5");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "03Ab"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule = function ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule() {
        _classCallCheck(this, ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule);
      };

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosPropostasAssociacaoSituacoesPropostaRoutingModule);
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
    "soX5":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/propostas/associacao-situacoes-proposta/lista/lista.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent */

    /***/
    function soX5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent", function () {
        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "aw03");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "BgiK");
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


      var _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../associacao-situacoes-proposta.service */
      "SuPn");
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


      var ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent(activatedRoute, router, formBuilder, associacaoSituacoesPropostaService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.associacaoSituacoesPropostaService = associacaoSituacoesPropostaService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
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
          this.tableConfigMateriais = {
            hover: false
          };
          this.showDetailPanel = false;
          this.orderBy = 'codSituacaoProposta';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.situacoesAssociadas = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Associação de situações da proposta');
            this.onDetailPanelEmitter();
            this.setAssociacaoSelecionada();
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
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Associação de situações da proposta'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this7 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this7.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              situacaoProposta: [formValue.situacaoProposta],
              codSituacao: [formValue.codSituacao ? formValue.codSituacao : 1],
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
            var _this8 = this;

            var formValue = {
              situacaoProposta: null,
              codSituacao: null,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this8.search(params);

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
          key: "setAssociacaoSelecionada",
          value: function setAssociacaoSelecionada() {
            this.associacaoSelecionada = {
              codAssociacao: null,
              ordemExibicao: null,
              descLegenda: null,
              cor: null,
              codSituacao: null,
              situacoesAssociadas: []
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

            if (this.form.value.situacaoProposta) {
              params.situacaoProposta = this.form.value.situacaoProposta;
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this9 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.associacaoSituacoesPropostaService.getListaAssociacoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this9.dados = response.data;
                  _this9.dadosPagination = _this9.dados.slice(0, _this9.itemsPerPage);
                  _this9.totalItems = _this9.dados.length;
                  _this9.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this9.dadosEmpty = true;
                } else {
                  _this9.pnotifyService.error();

                  _this9.dadosEmpty = true;
                }
              },
              error: function error(_error3) {
                _this9.dadosEmpty = true;

                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this9.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this9.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(associacao) {
            var borderClass;

            if (associacao.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (associacao.codSituacao === 0) {
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
          value: function onDetails(associacao) {
            var _this10 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "Associa\xE7\xF5es (".concat(associacao.descLegenda, ")");
            this.setAssociacaoSelecionada();
            this.associacaoSelecionada = associacao;
            this.situacoesAssociadas = [];
            this.associacaoSituacoesPropostaService.getAssociacoesSituacoesProposta(associacao.codAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              setTimeout(function () {
                _this10.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  // Não está vazio.
                  _this10.detailPanelService.loadedFinished(false);

                  _this10.situacoesAssociadas = response.data;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  // Vazio.
                  _this10.detailPanelService.loadedFinished(true);
                } else {
                  // Vazio e com possível erro.
                  _this10.pnotifyService.error();

                  _this10.detailPanelService.loadedFinished(true);
                }
              },
              error: function error(_error4) {
                // Vazio e com erro.
                _this10.detailPanelService.loadedFinished(true);

                if (_error4.error.hasOwnProperty('mensagem')) {
                  _this10.pnotifyService.error(_error4.error.mensagem);
                } else {
                  _this10.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(associacao) {
            this.router.navigate(['../editar', associacao.codAssociacao], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, associacao) {
            var _this11 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this11.activateAssociacao(index, associacao) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this11.loaderNavbar = false;
            })).subscribe(function (success) {
              _this11.pnotifyService.success();

              _this11.refreshMainData(associacao);
            }, function (error) {
              _this11.pnotifyService.error();

              _this11.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateAssociacao",
          value: function activateAssociacao(index, associacao) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.associacaoSituacoesPropostaService.activateAssociacao(associacao.codAssociacao);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, associacao) {
            var _this12 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this12.inactivateAssociacao(index, associacao) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this12.loaderNavbar = false;
            })).subscribe(function (success) {
              _this12.pnotifyService.success();

              _this12.refreshMainData(associacao);
            }, function (error) {
              _this12.pnotifyService.error();

              _this12.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateAssociacao",
          value: function inactivateAssociacao(index, associacao) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 0;
            return this.associacaoSituacoesPropostaService.inactivateAssociacao(associacao.codAssociacao);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(associacao) {
            for (var i = 0; i < this.dados.length; i++) {
              if (associacao.codAssociacao === this.dados[i].codAssociacao) {
                this.dados[i].codSituacao = associacao.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent;
      }();

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]
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

      ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-similaridade-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosPropostasAssociacaoSituacoesPropostaListaComponent);
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
//# sourceMappingURL=propostas-associacao-situacoes-proposta-associacao-situacoes-proposta-module-es5.js.map