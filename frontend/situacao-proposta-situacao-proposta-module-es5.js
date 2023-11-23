(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["situacao-proposta-situacao-proposta-module"], {
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
          this.API = "http://23.254.204.187/api/comercial/cadastros/situacao-proposta";
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
    "IHtI":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/lista/lista.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function IHtI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9zaXR1YWNhby1wcm9wb3N0YS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "PW3i":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/formulario/formulario.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaFormularioComponent */

    /***/
    function PW3i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaFormularioComponent", function () {
        return ComercialCadastrosSituacaoPropostaFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "oroa");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "glAy");
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


      var _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../situacao-proposta.service */
      "3WN2");
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


      var ComercialCadastrosSituacaoPropostaFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosSituacaoPropostaFormularioComponent(activatedRoute, router, location, formBuilder, situacaoPropostaService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialCadastrosSituacaoPropostaFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.situacaoPropostaService = situacaoPropostaService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.situacoesPropostaTid = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosSituacaoPropostaFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFormFields();
            this.setFormBuilder();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this = this;

            this.loaderFullScreen = true;
            this.situacaoPropostaService.getListaSituacaoPropostaTid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this.situacoesPropostaTid = response.data;

                _this.situacoesPropostaTid.unshift({
                  codSituacao: 0,
                  nomeSituacao: 'NENHUM'
                });
              }
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this2.appTitle = 'Editar Situação de Proposta';
              } else {
                _this2.appTitle = 'Nova Situação de Proposta';
              }

              _this2.titleService.setTitle(_this2.appTitle);

              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Situação de Proposta',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/situacao-propostas/lista")
              }, {
                descricao: _this2.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codSituacaoProposta: [detalhes.codSituacaoProposta],
                situacaoProposta: [detalhes.situacaoProposta, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codParametroSituacaoProposta: [detalhes.codParametroSituacaoProposta, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codTipoFinalizacao: [detalhes.codTipoFinalizacao],
                permiteAlterarEmpresa: [detalhes.permiteAlterarEmpresa]
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
            var _this3 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.situacaoPropostaService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this3.loaderNavbar = false;
                  _this3.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this3.formChanged = false;

                      _this3.pnotifyService.success(response.mensagem);

                      _this3.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this3.location.back();
                        } else {
                          _this3.router.navigate(['../lista'], {
                            relativeTo: _this3.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this3.pnotifyService.notice(response.mensagem);
                    } else {
                      _this3.pnotifyService.error();
                    }
                  },
                  error: function error(_error) {
                    _this3.pnotifyService.error();
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

        return ComercialCadastrosSituacaoPropostaFormularioComponent;
      }();

      ComercialCadastrosSituacaoPropostaFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosSituacaoPropostaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialCadastrosSituacaoPropostaFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-situacao-proposta-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosSituacaoPropostaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialCadastrosSituacaoPropostaFormularioComponent);
      /***/
    },

    /***/
    "QNKj":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/formulario/formulario-resolver.guard.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaFormularioResolverGuard */

    /***/
    function QNKj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaFormularioResolverGuard", function () {
        return ComercialCadastrosSituacaoPropostaFormularioResolverGuard;
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


      var _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../situacao-proposta.service */
      "3WN2"); // Services


      var ComercialCadastrosSituacaoPropostaFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosSituacaoPropostaFormularioResolverGuard(situacaoPropostaService) {
          _classCallCheck(this, ComercialCadastrosSituacaoPropostaFormularioResolverGuard);

          this.situacaoPropostaService = situacaoPropostaService;
        }

        _createClass(ComercialCadastrosSituacaoPropostaFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.situacaoPropostaService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codSituacaoProposta: null,
                situacaoProposta: null,
                codParametroSituacaoProposta: 0,
                codSituacao: null,
                codTipoFinalizacao: 0,
                permiteAlterarEmpresa: 0
              }
            });
          }
        }]);

        return ComercialCadastrosSituacaoPropostaFormularioResolverGuard;
      }();

      ComercialCadastrosSituacaoPropostaFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosSituacaoPropostaService"]
        }];
      };

      ComercialCadastrosSituacaoPropostaFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosSituacaoPropostaService"]])], ComercialCadastrosSituacaoPropostaFormularioResolverGuard);
      /***/
    },

    /***/
    "RFKq":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/lista/lista.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaListaComponent */

    /***/
    function RFKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaListaComponent", function () {
        return ComercialCadastrosSituacaoPropostaListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "cJV4");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "IHtI");
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


      var _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../situacao-proposta.service */
      "3WN2");
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


      var ComercialCadastrosSituacaoPropostaListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosSituacaoPropostaListaComponent(activatedRoute, router, location, formBuilder, situacaoPropostaService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosSituacaoPropostaListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.situacaoPropostaService = situacaoPropostaService;
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
          this.orderBy = 'codSituacaoProposta';
          this.orderType = 'ASC';
          /* motivosAssociacao: Array<any> = []; */

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

        _createClass(ComercialCadastrosSituacaoPropostaListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Situação de Proposta');
            this.onDetailPanelEmitter();
            this.setSituacaoPropostaSelecionado();
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
            var _this4 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this4.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Situação de Proposta'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this5 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this5.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              situacaoProposta: [formValue.situacaoProposta],
              codSituacaoProposta: [formValue.codSituacaoProposta],
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
            var _this6 = this;

            var formValue = {
              situacaoProposta: null,
              codSituacaoProposta: 0,
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

                _this6.search(params);

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
          key: "setSituacaoPropostaSelecionado",
          value: function setSituacaoPropostaSelecionado() {
            this.situacaoPropostaSelecionado = {
              situacaoProposta: null,
              codSituacaoProposta: 0,
              codParametroSituacaoProposta: 0,
              codSituacao: 1,
              situacao: null,
              codTipoFinalizacao: null,
              permiteAlterarEmpresa: null
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
            var _this7 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            this.situacaoPropostaService.getListaSituacaoProposta(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this7.loaderNavbar = false;
              _this7.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this7.dados = response.data;
                  _this7.dadosPagination = _this7.dados.slice(0, _this7.itemsPerPage);
                  _this7.totalItems = _this7.dados.length;
                  _this7.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this7.dadosEmpty = true;
                } else {
                  _this7.pnotifyService.error();

                  _this7.dadosEmpty = true;
                }
              },
              error: function error(_error2) {
                _this7.dadosEmpty = true;

                if (_error2.error.hasOwnProperty('mensagem')) {
                  _this7.pnotifyService.error(_error2.error.mensagem);
                } else {
                  _this7.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(situacaoProposta) {
            var borderClass;

            if (situacaoProposta.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (situacaoProposta.codSituacao === 2) {
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
          value: function onDetails(situacaoProposta) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setSituacaoPropostaSelecionado();
            this.situacaoPropostaSelecionado = situacaoProposta;
            this.alteracoes = [];
            this.situacaoPropostaService.getAlteracoes(situacaoProposta.codSituacaoProposta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              setTimeout(function () {
                _this8.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  // Não está vazio.
                  _this8.detailPanelService.loadedFinished(false);

                  _this8.alteracoes = response.data;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  // Vazio.
                  _this8.detailPanelService.loadedFinished(true);
                } else {
                  // Vazio e com possível erro.
                  _this8.pnotifyService.error();

                  _this8.detailPanelService.loadedFinished(true);
                }
              },
              error: function error(_error3) {
                // Vazio e com erro.
                _this8.detailPanelService.loadedFinished(true);

                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this8.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this8.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(situacaoProposta) {
            this.router.navigate(['../editar', situacaoProposta.codSituacaoProposta], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, situacaoProposta) {
            var _this9 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this9.activateSituacaoProposta(index, situacaoProposta) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe(function (success) {
              _this9.pnotifyService.success();

              _this9.refreshMainData(situacaoProposta);
            }, function (error) {
              _this9.pnotifyService.error();

              _this9.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateSituacaoProposta",
          value: function activateSituacaoProposta(index, situacaoProposta) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.situacaoPropostaService.activateSituacaoProposta(situacaoProposta.codSituacaoProposta);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, situacaoProposta) {
            var _this10 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this10.inactivateSituacaoProposta(index, situacaoProposta) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this10.loaderNavbar = false;
            })).subscribe(function (success) {
              _this10.pnotifyService.success();

              _this10.refreshMainData(situacaoProposta);
            }, function (error) {
              _this10.pnotifyService.error();

              _this10.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateSituacaoProposta",
          value: function inactivateSituacaoProposta(index, situacaoProposta) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 2;
            return this.situacaoPropostaService.inactivateSituacaoProposta(situacaoProposta.codSituacaoProposta);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(situacaoProposta) {
            for (var i = 0; i < this.dados.length; i++) {
              if (situacaoProposta.codSituacaoProposta === this.dados[i].codSituacaoProposta) {
                this.dados[i].codSituacao = situacaoProposta.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosSituacaoPropostaListaComponent;
      }();

      ComercialCadastrosSituacaoPropostaListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosSituacaoPropostaService"]
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

      ComercialCadastrosSituacaoPropostaListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosSituacaoPropostaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-situacao-proposta-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _situacao_proposta_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosSituacaoPropostaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]])], ComercialCadastrosSituacaoPropostaListaComponent);
      /***/
    },

    /***/
    "cJV4":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/situacao-proposta/lista/lista.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cJV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Situação de proposta\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n     <div class=\"row\" #scrollToFilter>\r\n      <div class=\"col\">\r\n        <advanced-filter>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-7\">\r\n                <label for=\"situacaoProposta\">Situação de Proposta</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"situacaoProposta\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-3\">\r\n                <label for=\"codSituacao\">Situação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"codSituacao\"\r\n                  formControlName=\"codSituacao\">\r\n                  <option value=\"0\">Todos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                  <option value=\"2\">Inativos</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"registros\">Registros</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"registros\"\r\n                  formControlName=\"registros\">\r\n                  <option>25</option>\r\n                  <option>50</option>\r\n                  <option>100</option>\r\n                  <option>200</option>\r\n                  <option>300</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </advanced-filter>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <subtitles\r\n          [data]=\"subtitles\"\r\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        </subtitles>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\">Motivo de Associação</th>\r\n              <th scope=\"col\">Parâmetro ERP Local</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr\r\n              *ngFor=\"let situacaoProposta of dadosPagination; let i = index\"\r\n              [class.table-active]=\"situacaoProposta.codSituacaoProposta == situacaoPropostaSelecionado.codSituacaoProposta\">\r\n              <td\r\n                class=\"hover\"\r\n                [ngClass]=\"classStatusBorder(situacaoProposta)\"\r\n                (click)=\"onDetails(situacaoProposta)\">\r\n                {{ situacaoProposta.situacaoProposta | uppercase }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(situacaoProposta)\">\r\n                {{ situacaoProposta.codParametroSituacaoProposta }}\r\n              </td>\r\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n                <span *ngIf=\"situacaoProposta.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, situacaoProposta)\">\r\n                    <i class=\"fas fa-toggle-on\"></i>\r\n                  </button>\r\n                </span>\r\n                <span *ngIf=\"situacaoProposta.codSituacao == 2\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, situacaoProposta)\">\r\n                    <i class=\"fas fa-toggle-off\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(situacaoProposta)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel panelTitle=\"Histórico de alterações\">\r\n          <custom-table *ngIf=\"alteracoes.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Data</th>\r\n                <th scope=\"col\">Usuário</th>\r\n                <th scope=\"col\">Alteração</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let alteracao of alteracoes\">\r\n                <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{ alteracao.nomeUsuario | uppercase }}</td>\r\n                <td>{{ alteracao.mensagem | uppercase }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </app-body>\r\n";
      /***/
    },

    /***/
    "czZR":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/situacao-proposta.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaModule */

    /***/
    function czZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaModule", function () {
        return ComercialCadastrosSituacaoPropostaModule;
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


      var _situacao_proposta_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./situacao-proposta-routing.module */
      "kbkf");
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
      "RFKq");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "PW3i"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosSituacaoPropostaModule = function ComercialCadastrosSituacaoPropostaModule() {
        _classCallCheck(this, ComercialCadastrosSituacaoPropostaModule);
      };

      ComercialCadastrosSituacaoPropostaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosSituacaoPropostaListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosSituacaoPropostaFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"], _situacao_proposta_routing_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosSituacaoPropostaModuleRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]]
      })], ComercialCadastrosSituacaoPropostaModule);
      /***/
    },

    /***/
    "glAy":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/formulario/formulario.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function glAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9zaXR1YWNhby1wcm9wb3N0YS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
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
    "kbkf":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/situacao-proposta-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaModuleRoutingModule */

    /***/
    function kbkf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaModuleRoutingModule", function () {
        return ComercialCadastrosSituacaoPropostaModuleRoutingModule;
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
      "QNKj");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "RFKq");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "PW3i"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosSituacaoPropostaListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosSituacaoPropostaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosSituacaoPropostaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosSituacaoPropostaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosSituacaoPropostaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosSituacaoPropostaModuleRoutingModule = function ComercialCadastrosSituacaoPropostaModuleRoutingModule() {
        _classCallCheck(this, ComercialCadastrosSituacaoPropostaModuleRoutingModule);
      };

      ComercialCadastrosSituacaoPropostaModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosSituacaoPropostaModuleRoutingModule);
      /***/
    },

    /***/
    "oroa":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/situacao-proposta/formulario/formulario.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oroa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"situacaoProposta\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"situacaoProposta\"\r\n              formControlName=\"situacaoProposta\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('situacaoProposta') + ' ' + onFieldRequired(form.controls.situacaoProposta)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('situacaoProposta')\" message=\"Situação de Proposta é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codParametroSituacaoProposta\">Descrição do Parâmetro</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"situacoesPropostaTid\"\r\n              formControlName=\"codParametroSituacaoProposta\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codParametroSituacaoProposta\"\r\n              bindLabel=\"nomeSituacao\"\r\n              bindValue=\"codSituacao\"\r\n              [ngClass]=\"onFieldError('codParametroSituacaoProposta') + ' ' + onFieldRequired(form.controls.codParametroSituacaoProposta)\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codSituacao\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codSituacao\"\r\n              formControlName=\"codSituacao\"\r\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"2\">Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codTipoFinalizacao\">Finalização</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codTipoFinalizacao\"\r\n              formControlName=\"codTipoFinalizacao\"\r\n              [ngClass]=\"onFieldError('codTipoFinalizacao') + ' ' + onFieldRequired(form.controls.codTipoFinalizacao)\">\r\n              <option value=\"0\">Padrão</option>\r\n              <option value=\"1\">Perdido para concorrente</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Finalização é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6 d-flex mb-0\">\r\n            <div class=\"custom-control custom-checkbox mt-auto mb-2\">\r\n              <input\r\n               type=\"checkbox\"\r\n               class=\"custom-control-input\"\r\n               id=\"pode-alterar-empresa\"\r\n               formControlName=\"permiteAlterarEmpresa\">\r\n              <label\r\n                class=\"custom-control-label\"\r\n                for=\"pode-alterar-empresa\">\r\n                Permite realizar alteração de empresa\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=situacao-proposta-situacao-proposta-module-es5.js.map