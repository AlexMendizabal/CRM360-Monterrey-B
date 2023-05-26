(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipos-comissionamento-tipo-comissionamento-module"], {
    /***/
    "+ARP":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/tipo-comissionamento-routing.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoComissionamentoModuleRoutingModule */

    /***/
    function ARP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoModuleRoutingModule", function () {
        return ComercialCadastrosTipoComissionamentoModuleRoutingModule;
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
      "7BBq");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "ovr/");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "Pzkn"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTipoComissionamentoListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosTipoComissionamentoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTipoComissionamentoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosTipoComissionamentoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTipoComissionamentoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosTipoComissionamentoModuleRoutingModule = function ComercialCadastrosTipoComissionamentoModuleRoutingModule() {
        _classCallCheck(this, ComercialCadastrosTipoComissionamentoModuleRoutingModule);
      };

      ComercialCadastrosTipoComissionamentoModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosTipoComissionamentoModuleRoutingModule);
      /***/
    },

    /***/
    "7BBq":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario-resolver.guard.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoComissionamentoFormularioResolverGuard */

    /***/
    function BBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoFormularioResolverGuard", function () {
        return ComercialCadastrosTipoComissionamentoFormularioResolverGuard;
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


      var _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tipo-comissionamento.service */
      "v9B3"); // Services


      var ComercialCadastrosTipoComissionamentoFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosTipoComissionamentoFormularioResolverGuard(tipoComissionamentoService) {
          _classCallCheck(this, ComercialCadastrosTipoComissionamentoFormularioResolverGuard);

          this.tipoComissionamentoService = tipoComissionamentoService;
        }

        _createClass(ComercialCadastrosTipoComissionamentoFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.tipoComissionamentoService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: [{
                codTipoComissionamento: null,
                dsTipoComissionamento: null,
                qtdeRegistros: null,
                codSituacao: null,
                codLinha: null,
                nomeLinha: null,
                codClasse: null,
                nomeClasse: null,
                percentual: []
              }]
            });
          }
        }]);

        return ComercialCadastrosTipoComissionamentoFormularioResolverGuard;
      }();

      ComercialCadastrosTipoComissionamentoFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTipoComissionamentoService"]
        }];
      };

      ComercialCadastrosTipoComissionamentoFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTipoComissionamentoService"]])], ComercialCadastrosTipoComissionamentoFormularioResolverGuard);
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
    "IUlZ":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IUlZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy90aXBvcy1jb21pc3Npb25hbWVudG8vZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Pzkn":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoComissionamentoFormularioComponent */

    /***/
    function Pzkn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoFormularioComponent", function () {
        return ComercialCadastrosTipoComissionamentoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "hYBt");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "IUlZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
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


      var _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../tipo-comissionamento.service */
      "v9B3"); // Services


      var ComercialCadastrosTipoComissionamentoFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosTipoComissionamentoFormularioComponent(activatedRoute, router, location, formBuilder, tipoComissionamentoService, pnotifyService, atividadesService, titleService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosTipoComissionamentoFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.tipoComissionamentoService = tipoComissionamentoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.dadosPercentual = [];
          this.show = false;
          this.formChanged = false;
          this.formPercentualIndex = null;
          this.dadosPerc = false;
          this.linhasMaterial = [];
          this.classesMaterial = []; // filteredClasses: Array<any> = [];

          this.filteredClasses = {};
          this.firstAccess = false;
          this.codLinha = 0;
          this.tableConfigPercentual = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosTipoComissionamentoFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getFilterValues();
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder(); // this.getFormFields();
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
                _this.appTitle = 'Editar Tipo de comissionamento';
              } else {
                _this.appTitle = 'Novo Tipo de comissionamento';
              }

              _this.titleService.setTitle(_this.appTitle);

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Lista',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/tipos-comissionamento/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;

              if (detalhes[0].codSituacao != null) {
                this.situacao = detalhes[0].codSituacao.toString();
              }

              this.form = this.formBuilder.group({
                codTipoComissionamento: [detalhes[0].codTipoComissionamento],
                dsTipoComissionamento: [detalhes[0].dsTipoComissionamento, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                codSituacao: [this.situacao ? detalhes[0].codSituacao : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                linhas: this.formBuilder.array([])
              });
              this.onAddLinha(null, detalhes);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "onAddLinha",
          value: function onAddLinha(index, data) {
            var indexLinhas = 1;

            if (data) {
              indexLinhas = data.length;
            }

            ;

            for (var i = 0; i < indexLinhas; i++) {
              this.linhas.push(this.formBuilder.group({
                codLinha: [data ? data[i].codLinha : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                codClasse: [data ? data[i].codClasse : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                classes: [[]],
                percentual: this.formBuilder.array([])
              }));

              if (data) {
                for (var indice = 0; indice < data[i].percentual.length; indice++) {
                  this.onAddPercentual(index, data[i].percentual[indice], i);
                }
              }
            }
          }
        }, {
          key: "onAssociarPercentual",
          value: function onAssociarPercentual(data) {
            var percentualAdd = data.percentual;
            this.percentualAssociado(percentualAdd);
          }
        }, {
          key: "percentualAssociado",
          value: function percentualAssociado(data) {
            this.onAddPercentual(null, data);
          }
        }, {
          key: "getPercentual",
          value: function getPercentual(index) {
            return this.linhas.at(index).get("percentual");
          }
        }, {
          key: "onAddPercentual",
          value: function onAddPercentual(index, data, indexLinhas) {
            var indexData = 0;
            !data ? indexData = index : indexData = indexLinhas;
            this.getPercentual(indexData).push(this.formBuilder.group({
              codFaixa: data ? data.codFaixa : null,
              percDescontoDe: [data ? data.percDescontoDe : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              percDescontoAte: [data ? data.percDescontoAte : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              percPago: [data ? data.percPago : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteValor",
          value: function onDeleteValor(index, item, indexPercentual, action) {
            var _this2 = this;

            this.loaderNavbar = true;
            var dados = [];
            var valida = [];

            if (action == 'one') {
              dados.push(item);
              valida.push(item);
            } else {
              dados = item;
              valida = item;
            }

            console.log();
            console.log(dados);
            this.confirmDelete().subscribe(function (response) {
              if (response) {
                if (dados[0].codFaixa != null) {
                  _this2.tipoComissionamentoService.deleteFaixa(dados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    _this2.loaderNavbar = false;
                  })).subscribe({
                    next: function next(response) {
                      if (response.success) {
                        // this.form.get('linhas')['controls'][index].get('percentual').clear();
                        // this.form.get('linhas')['controls'][index].splice(0, 1);
                        // this.form.get('linhas')['controls'].splice(index, 1);
                        if (action == 'all') {
                          _this2.form.get('linhas')['controls'][index].get('percentual').clear();

                          _this2.form.get('linhas')['controls'].splice(index, 1);
                        } else {
                          _this2.form.get('linhas')['controls'][index].get('percentual')['controls'].splice(indexPercentual, 1);
                        }

                        if (_this2.form.get('linhas')['controls'].length < 1) {
                          _this2.onAddLinha(index);
                        }
                      } else {
                        _this2.pnotifyService.error();
                      }
                    },
                    error: function error(_error) {
                      if (_error.error.hasOwnProperty('mensagem') && (_error.mensagem !== null || _error.mensagem !== '')) {
                        _this2.pnotifyService.error(_error.error.mensagem);
                      } else {
                        _this2.pnotifyService.error();
                      }
                    }
                  });
                } else {
                  // this.form.get('linhas')['controls'][index].get('percentual').clear();
                  // this.form.get('linhas')['controls'].splice(index, 1);
                  if (action == 'all') {
                    _this2.form.get('linhas')['controls'][index].get('percentual').clear();

                    _this2.form.get('linhas')['controls'].splice(index, 1);
                  } else {
                    _this2.form.get('linhas')['controls'][index].get('percentual')['controls'].splice(indexPercentual, 1);
                  }
                }

                _this2.loaderNavbar = false;
              }
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "setFormMateriais",
          value: function setFormMateriais() {
            this.formMateriais = this.formBuilder.group({
              codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              checked: [false]
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this3 = this;

            this.tipoComissionamentoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this3.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].success === true) {
                _this3.linhasMaterial = response[0].data;
              } else {
                _this3.pnotifyService.error();

                _this3.location.back();
              }

              if (response[1].success === true) {
                _this3.classesMaterial = response[1].data;
                var linhas = _this3.form.controls['linhas'].value;
                linhas.forEach(function (linha, index) {
                  _this3.onChangeLinha(linha.codLinha, index);
                }); // this.onChangeLinha();
              } else {
                _this3.pnotifyService.error();

                _this3.location.back();
              }
            });
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha, index) {
            var classes = this.classesMaterial.filter(function (classe) {
              return classe.idLinha == codLinha;
            });
            this.filteredClasses[index] = classes;
            this.filteredClasses[index].unshift({
              idClasse: 0,
              nomeClasse: 'TODOS'
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.tipoComissionamentoService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                  _this4.loaderNavbar = false;
                  _this4.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this4.form.reset();

                      _this4.formChanged = false;

                      _this4.pnotifyService.success(response.mensagem);

                      _this4.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this4.location.back();
                        } else {
                          _this4.router.navigate(['../lista'], {
                            relativeTo: _this4.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this4.pnotifyService.notice(response.mensagem);
                    } else {
                      _this4.pnotifyService.error();
                    }
                  },
                  error: function error(_error2) {
                    _this4.pnotifyService.error();
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
        }, {
          key: "onMoreNestedFieldError",
          value: function onMoreNestedFieldError(formGroup, index, formArray, indexNested, field) {
            if (this.onMoreNestedFieldInvalid(formGroup, index, formArray, indexNested, field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onMoreNestedFieldInvalid",
          value: function onMoreNestedFieldInvalid(formGroup, index, formArray, indexNested, field) {
            var linhaNestedForm = this.form.controls[formGroup];
            var percentualNestedForm = linhaNestedForm.controls[index].controls[formArray];
            field = percentualNestedForm.controls[indexNested].get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onMoreNestedFieldRequired",
          value: function onMoreNestedFieldRequired(formGroup, index, formArray, indexNested, field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
            var linhaNestedForm = this.form.controls[formGroup];
            var percentualNestedForm = linhaNestedForm.controls[index].controls[formArray];

            if (percentualNestedForm.controls[indexNested].get(field).validator) {
              var validationResult = percentualNestedForm.controls[indexNested].get(field).validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
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
          key: "linhas",
          get: function get() {
            return this.form.get('linhas');
          }
        }]);

        return ComercialCadastrosTipoComissionamentoFormularioComponent;
      }();

      ComercialCadastrosTipoComissionamentoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosTipoComissionamentoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosTipoComissionamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-tipo-comissionamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosTipoComissionamentoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"]])], ComercialCadastrosTipoComissionamentoFormularioComponent);
      /***/
    },

    /***/
    "Rolq":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/tipos-comissionamento/lista/lista.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rolq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Tipo de Comissionamento\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n    <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-7\">\n              <label for=\"dsTiposComissionamento\">Tipo de Comissionamento</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"dsTiposComissionamento\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option value=\"\">Todos</option>\n                <option value=\"1\">Ativos</option>\n                <option value=\"0\">Inativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-8 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Descrição</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let tipoComissionamento of dadosPagination; let i = index\"\n          [class.table-active]=\"tipoComissionamento.codTipoComissionamento == codigo\">\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(tipoComissionamento)\"\n              (click)=\"onDetails(tipoComissionamento)\">\n              {{ tipoComissionamento.dsTipoComissionamento }}\n            </td>\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n              <!-- <span *ngIf=\"tipoComissionamento.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, tipoComissionamento)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"tipoComissionamento.codSituacao == 2\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, tipoComissionamento)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span> -->\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(tipoComissionamento)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty && dadosPagination.length < 1\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-4 mb-2\" [hidden]=\"!showDetailPanel\" >\n      <detail-panel panelTitle=\"Faixa de valores\" #scrollToFilter>\n        <div class=\"mtc-title\"*ngIf=\"faixaPerc.length > 0\">{{ faixaPerc[0].dsTipoComissionamento }}</div>\n        <div class=\"col-12 mb-4\" *ngFor=\"let dados of faixaPerc\">\n          <custom-table *ngIf=\"faixaPerc.length > 0\">\n            <ng-template #thead let-thead  >\n              <tr>\n                <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Linha</th>\n                <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Classe</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr>\n                <td class=\"text-center\">{{ dados.nomeLinha }}</td>\n                <td class=\"text-center\" *ngIf=\"dados.codClasse === 0\" >TODOS</td>\n                <td class=\"text-center\" *ngIf=\"dados.codClasse != 0\">{{ dados.nomeClasse }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n\n        <custom-table *ngIf=\"faixaPerc.length > 0\" [config]=\"tableConfigDetail\">\n          <ng-template #thead let-thead  >\n            <tr>\n              <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\n              <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of dados.percentual\">\n              <td class=\"text-center\">{{ item.percDescontoDe }} a {{ item.percDescontoAte }} %</td>\n              <td class=\"text-center\">{{ item.percPago }} %</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n";
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
    "cyqI":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/tipo-comissionamento.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoComissionamentoModule */

    /***/
    function cyqI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoModule", function () {
        return ComercialCadastrosTipoComissionamentoModule;
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


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _tipo_comissionamento_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tipo-comissionamento-routing.module */
      "+ARP");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./lista/lista.component */
      "ovr/");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "Pzkn"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosTipoComissionamentoModule = function ComercialCadastrosTipoComissionamentoModule() {
        _classCallCheck(this, ComercialCadastrosTipoComissionamentoModule);
      };

      ComercialCadastrosTipoComissionamentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosTipoComissionamentoListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosTipoComissionamentoFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _tipo_comissionamento_routing_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosTipoComissionamentoModuleRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]]
      })], ComercialCadastrosTipoComissionamentoModule);
      /***/
    },

    /***/
    "hYBt":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hYBt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm \">\n    Salvar\n  </button>\n  <!-- || submittingForm -->\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n<form [formGroup]=\"form\">\n  <div class=\"col-12 mt-3\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6\">\n\n          <div class=\"form-row\">\n            <div class=\"form-group col-9\">\n              <label for=\"dsTipoComissionamento\">Tipo de Recebimento</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"dsTipoComissionamento\"\n                formControlName=\"dsTipoComissionamento\"\n\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('dsTipoComissionamento') + ' ' + onFieldRequired(form.controls.dsTipoComissionamento)\">\n              <invalid-form-control [show]=\"onFieldInvalid('dsTipoComissionamento')\" message=\"Tipo de recebimento é obrigatório.\"></invalid-form-control>\n            </div>\n\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\"\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n                <option value=\"0\">Inativo</option>\n                <option value=\"1\">Ativo</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Qtde. parcelas é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 mt-3\" formArrayName=\"linhas\">\n\n    <div class=\"col-12\" *ngFor=\"let item of linhas.controls; let i = index\" [formGroupName]=\"i\">\n    <div class=\"form-row justify-content-center\" >\n        <div class=\"col-lg-6 border mb-3\" >\n          <!-- <hr> -->\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-5\" >\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"linhasMaterial\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                (change)=\"onChangeLinha($event.id, i)\"\n                [ngClass]=\"onNestedFieldError('linhas', i, 'codLinha') + ' ' + onNestedFieldRequired('linhas', i, 'codLinha')\">\n            </ng-select>\n\n            </div>\n            <div class=\"form-group col-lg-5\">\n              <label for=\"codSituacao\">Classe</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"filteredClasses[i]\"\n                formControlName=\"codClasse\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codClasse\"\n                bindLabel=\"nomeClasse\"\n                bindValue=\"idClasse\"\n                [ngClass]=\"onNestedFieldError('linhas', i, 'codClasse') + ' ' + onNestedFieldRequired('linhas', i, 'codClasse')\">\n            </ng-select>\n\n            </div>\n            <div class=\"form-group col-lg-1\"></div>\n            <div class=\"form-group col-lg-1 pt-3\">\n              <btn-icon\n                  icon=\"fas fa-plus-square\"\n                  class=\"justify-content-center pt-2\"\n                  size=\"medium\"\n                  color=\"primary\"\n                  tooltip=\"Novo Percentual\"\n                  (click)=\"onAddPercentual(i)\">\n              </btn-icon>\n              <!-- onDeleteValor(i, item.value, 'change'); -->\n            </div>\n          </div>\n\n          <div class=\"form-row mb-2\" *ngIf=\"getPercentual(i).controls.length > 0\">\n            <div class=\"col-lg-12 mb-2\">\n            <custom-table [config]=\"tableConfigPercentual\" formArrayName=\"percentual\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\n                  <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody >\n                <tr  *ngFor=\"let percentual of getPercentual(i).controls; let j = index\"  class=\"colorBody\" [formGroupName]=\"j\">\n\n                  <td class=\"border\">\n                    <div class=\"form-row\">\n\n                      <div class=\"col-5\">\n                          <input\n                            style=\"text-align: center;\"\n                            class=\"form-control\"\n                            id=\"percDescontoDe\"\n                            type=\"text\"\n                            formControlName=\"percDescontoDe\"\n                            (input)=\"onInput()\"\n                            currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 2, suffix: '%' }\"\n                            [ngClass]=\"onMoreNestedFieldError('linhas', i, 'percentual', j, 'percDescontoDe') + ' '\n                            + onMoreNestedFieldRequired('linhas', i, 'percentual', j, 'percDescontoDe')\">\n\n\n                      </div>\n                      <div class=\"col-2\"> a </div>\n                      <div class=\"col-5\">\n                          <input\n                            style=\"text-align: center;\"\n                            class=\"form-control\"\n                            id=\"percDescontoAte\"\n                            type=\"text\"\n                            formControlName=\"percDescontoAte\"\n                            (input)=\"onInput()\"\n                            currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 2, suffix: '%' }\"\n                            [ngClass]=\"onMoreNestedFieldError('linhas', i, 'percentual', j, 'percDescontoAte') + ' '\n                            + onMoreNestedFieldRequired('linhas', i, 'percentual', j, 'percDescontoAte')\">\n                      </div>\n                      </div>\n                  </td>\n\n                  <td class=\"border\">\n                    <div class=\"form-row\">\n                      <div class=\"col-2\"></div>\n                      <div class=\"col-8\">\n                        <input\n                          style=\"text-align: center;\"\n                          class=\"form-control\"\n                          id=\"percPago\"\n                          type=\"text\"\n                          formControlName=\"percPago\"\n                          (input)=\"onInput()\"\n                          currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 2, suffix: '%' }\"\n                          [ngClass]=\"onMoreNestedFieldError('linhas', i, 'percentual', j, 'percPago') + ' '\n                            + onMoreNestedFieldRequired('linhas', i, 'percentual', j, 'percPago')\">\n                      </div>\n                      <div class=\"col-2\">\n                        <div class=\"form-row justify-content-end\">\n                          <div class=\"col-lg-12 mb-2\">\n                            <button type=\"button\" class=\"btn-icon-sm float-right\" (click)=\"onDeleteValor(i, item.value.percentual[j], j, 'one')\" tooltip=\"Limpar Registro\" >\n                              <i class=\"fas fa-trash\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          </div>\n          <div class=\"form-row justify-content-end\" *ngIf=\"getPercentual(i).controls.length > 0\">\n            <div class=\"col-lg-12 mb-2\">\n              <btn-icon\n                  icon=\"fas fa-trash\"\n                  class=\"float-right\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Limpar Tudo\"\n                  (click)=\"onDeleteValor(i, item.value.percentual, j, 'all')\">\n              </btn-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto\" *ngIf=\"getPercentual(i).controls.length > 0\">\n      <div class=\"form-row\" >\n        <div class=\"col-lg-12 mb-3 justify-content-center\">\n          <btn-icon\n            icon=\"fas fa-plus\"\n            size=\"small\"\n            class=\"float-right\"\n            tooltip=\"Nova faixa de valores\"\n            (click)=\"onAddLinha(i)\">\n          </btn-icon>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </form>\n</app-body>\n\n\n";
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
    "ovr/":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/lista/lista.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoComissionamentoListaComponent */

    /***/
    function ovr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoListaComponent", function () {
        return ComercialCadastrosTipoComissionamentoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "Rolq");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "uQi+");
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
      "gIxL");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../tipo-comissionamento.service */
      "v9B3"); // Services


      var ComercialCadastrosTipoComissionamentoListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosTipoComissionamentoListaComponent(activatedRoute, router, location, formBuilder, tipoComissionamentoService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService, comercialService) {
          _classCallCheck(this, ComercialCadastrosTipoComissionamentoListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.tipoComissionamentoService = tipoComissionamentoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.comercialService = comercialService;
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
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.codigo = 0;
          this.faixaPerc = [];
          this.tableConfigDetail = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosTipoComissionamentoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Tipo de Comissionamento');
            this.onDetailPanelEmitter();
            this.setTipoComissionamentoSelecionado();
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
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this5.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Lista'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this6 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this6.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dsTiposComissionamento: [formValue.dsTiposComissionamento],
              codTiposComissionamento: [formValue.codTiposComissionamento],
              codSituacao: [formValue.codSituacao],
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
            var _this7 = this;

            var formValue = {
              dsTiposComissionamento: null,
              codSituacao: 1,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this7.search(params);

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
          key: "setTipoComissionamentoSelecionado",
          value: function setTipoComissionamentoSelecionado() {
            this.tipoComissionamentoSelecionado = {
              codTipoComissionamento: null,
              dsTiposComissionamento: null,
              codSituacao: null,
              qtdeRegistros: null,
              situacao: null,
              codUsuario: null,
              nomeUsuario: null,
              dataCadastro: null,
              linhas: []
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

            if (this.form.value.dsTiposComissionamento) {
              params.dsTiposComissionamento = this.form.value.dsTiposComissionamento;
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
            var _this8 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            this.tipoComissionamentoService.getTipoComissionamento(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this8.loaderNavbar = false;
              _this8.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this8.dados = response.data;
                  _this8.dadosPagination = _this8.dados.slice(0, _this8.itemsPerPage);
                  _this8.totalItems = _this8.dados.length;
                  _this8.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this8.dadosEmpty = true;
                } else {
                  _this8.pnotifyService.error();

                  _this8.dadosEmpty = true;
                }
              },
              error: function error(_error3) {
                _this8.dadosEmpty = true;

                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this8.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this8.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(equipeVenda) {
            var borderClass;

            if (equipeVenda.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (equipeVenda.codSituacao === 0) {
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
          value: function onDetails(tipoComissionamento) {
            var _this9 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.faixaPerc = [];
            this.tipoComissionamentoService.getDetailTipoComissionamento(tipoComissionamento.codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              setTimeout(function () {
                _this9.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this9.detailPanelService.loadedFinished(false);

                  _this9.faixaPerc = response.data;
                  _this9.codigo = _this9.faixaPerc[0].codTipoComissionamento;
                } else {
                  _this9.detailPanelService.loadedFinished(true);

                  _this9.pnotifyService.error();
                }
              },
              error: function error(_error4) {
                _this9.detailPanelService.loadedFinished(true);

                if (_error4.error.hasOwnProperty('mensagem')) {
                  _this9.pnotifyService.error(_error4.error.mensagem);
                } else {
                  _this9.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(tipoComissionamento) {
            this.router.navigate(['../editar', tipoComissionamento.codTipoComissionamento], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, tipoComissionamento) {
            var _this10 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this10.activateTipoComissionamento(index, tipoComissionamento) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this10.loaderNavbar = false;
            })).subscribe(function (success) {
              _this10.pnotifyService.success();

              _this10.refreshMainData(tipoComissionamento);
            }, function (error) {
              _this10.pnotifyService.error();

              _this10.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateTipoComissionamento",
          value: function activateTipoComissionamento(index, tipoComissionamento) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.tipoComissionamentoService.activateTipoComissionamento(tipoComissionamento.codTipoComissionamento);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, tipoComissionamento) {
            var _this11 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this11.inactivateTipoComissionamento(index, tipoComissionamento) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this11.loaderNavbar = false;
            })).subscribe(function (success) {
              _this11.pnotifyService.success();

              _this11.refreshMainData(tipoComissionamento);
            }, function (error) {
              _this11.pnotifyService.error();

              _this11.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateTipoComissionamento",
          value: function inactivateTipoComissionamento(index, tipoComissionamento) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 2;
            return this.tipoComissionamentoService.inactivateTipoComissionamento(tipoComissionamento.codTipoComissionamento);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(tipoComissionamento) {
            for (var i = 0; i < this.dados.length; i++) {
              if (tipoComissionamento.codTipoComissionamento === this.dados[i].codTipoComissionamento) {
                this.dados[i].codSituacao = tipoComissionamento.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosTipoComissionamentoListaComponent;
      }();

      ComercialCadastrosTipoComissionamentoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosTipoComissionamentoService"]
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
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"]
        }];
      };

      ComercialCadastrosTipoComissionamentoListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosTipoComissionamentoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-tipos-comissionamento-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosTipoComissionamentoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"], _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"]])], ComercialCadastrosTipoComissionamentoListaComponent);
      /***/
    },

    /***/
    "uQi+":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/lista/lista.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function uQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy90aXBvcy1jb21pc3Npb25hbWVudG8vbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tipos-comissionamento-tipo-comissionamento-module-es5.js.map