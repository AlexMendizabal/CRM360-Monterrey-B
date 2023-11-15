(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-contratos-contratos-module"], {
    /***/
    "/B0g":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/formulario/formulario.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisContratoFormularioComponent */

    /***/
    function B0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisContratoFormularioComponent", function () {
        return ComercialCadastrosMateriaisContratoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "PmT9");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "OpFw");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
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


      var ng_brazil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../contratos.service */
      "pskp");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // ng-brazil
      // Services


      var ComercialCadastrosMateriaisContratoFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisContratoFormularioComponent(activatedRoute, router, location, clientesService, formBuilder, materiaisContratoService, pnotifyService, localeService, atividadesService, titleService, comercialService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosMateriaisContratoFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.clientesService = clientesService;
          this.formBuilder = formBuilder;
          this.materiaisContratoService = materiaisContratoService;
          this.pnotifyService = pnotifyService;
          this.localeService = localeService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.comercialService = comercialService;
          this.confirmModalService = confirmModalService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_10__["MASKS"];
          this.loaderFullScreen = true;
          this.compararData = null;
          this.breadCrumbTree = [];
          this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.formChanged = false;
          this.submittingForm = false;
          this.showMateriais = true;
          this.clientes = [];
          this.linhas = [];
          this.classes = [];
          this.pnotifyService.getPNotify();
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(ComercialCadastrosMateriaisContratoFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
            this.getClientes();
            this.setFormBuilder();
            this.titleService.setTitle('Cadastro de contrato de materiais');
          }
        }, {
          key: "getClientes",
          value: function getClientes() {
            var _this = this;

            this.loaderFullScreen = true;
            this.clientesService.getClientes({
              situacao: 'Ativo'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.responseCode === 200) {
                _this.clientes = response.result.analitico;
                return;
              } else {
                _this.clientes = [];
              }
            }, function (error) {
              _this.pnotifyService.error('Erro ao carregar modelos');

              _this.clientes = [];
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this2.appTitle = 'Editar contrato';
                _this2.action = 'update';
              } else {
                _this2.appTitle = 'Novo contrato';
                _this2.action = 'create';
              }

              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Contratos',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/materiais/contratos/lista")
              }, {
                descricao: _this2.appTitle
              }];
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this3 = this;

            this.materiaisContratoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this3.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this3.linhas = response[0].result;
              } else {
                _this3.pnotifyService.error();

                _this3.location.back();
              }

              if (response[1].responseCode === 200) {
                _this3.classes = response[1].result;
              } else {
                _this3.pnotifyService.error();

                _this3.location.back();
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
                codContrato: [detalhes.codContrato],
                nomeContrato: [detalhes.nomeContrato, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codCliente: [detalhes.codCliente, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataInicial: [detalhes.dataInicial, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataFinal: [detalhes.dataFinal, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                motivo: [{
                  value: detalhes.motivo,
                  disabled: true
                }],
                quantidade: [detalhes.quantidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codStatus: [{
                  value: detalhes.codStatus,
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                assocMateriais: this.formBuilder.array([])
              });
              this.setMateriais(detalhes.materiais);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "comparaData",
          value: function comparaData() {
            if (!this.form.get('dataFinal').value) {
              return false;
            } else if (this.form.get('dataInicial').value > this.form.get('dataFinal').value) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }, {
          key: "setMateriais",
          value: function setMateriais(materiais) {
            if (materiais.length > 0) {
              for (var i = 0; i < materiais.length; i++) {
                this.onAddMaterial(materiais[i], false, 'application');
              }
            }
          }
        }, {
          key: "assocMateriais",
          get: function get() {
            return this.form.get('assocMateriais');
          }
          /**
           * @source = 'application' || 'user'
           */

        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(material, manipulateForm, source) {
            var _this4 = this;

            if (this.checkMaterialExists(material) === false) {
              this.assocMateriais.push(this.formBuilder.group({
                codAssociacao: [material.codAssociacao],
                codMaterial: [material.codMaterial],
                nomeMaterial: [material.nomeMaterial],
                quantidade: [source === 'user' ? 0 : material.quantidade],
                valor: [source === 'user' ? 0 : material.valor],
                source: [source]
              }));

              if (this.form.value.assocMateriais.length > 9) {
                if (this.tableConfigAssocMateriais.fixedHeader === false) {
                  this.showMateriais = false;
                  this.tableConfigAssocMateriais.fixedHeader = true;
                  setTimeout(function () {
                    _this4.showMateriais = true;
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
          key: "checkMaterialExists",
          value: function checkMaterialExists(material) {
            return this.form.value.assocMateriais.some(function (el) {
              return el.codMaterial === material.codMaterial;
            });
          }
        }, {
          key: "onLimparMaterialPrincipal",
          value: function onLimparMaterialPrincipal() {
            var _this5 = this;

            this.limparMaterialPrincipal = true;
            this.onInput();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.nomeMaterial.setValue(null);
            setTimeout(function () {
              _this5.limparMaterialPrincipal = false;
            }, 100);
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index) {
            var _this6 = this;

            if (this.submittingForm === false) {
              this.confirmDelete().subscribe(function (response) {
                return response ? _this6.deleteMaterial(index) : null;
              });
            }
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMaterial",
          value: function deleteMaterial(index) {
            var _this7 = this;

            if (this.form.value.assocMateriais[index].source === 'user') {
              this.assocMateriais.removeAt(index);
            } else if (this.form.value.assocMateriais[index].source === 'application') {
              this.loaderNavbar = true;
              this.activatedRoute.params.subscribe(function (params) {
                _this7.materiaisContratoService.deleteAssociacao(params.id, _this7.form.value.assocMateriais[index].codAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  _this7.loaderNavbar = false;
                })).subscribe(function (response) {
                  if (response.success) {
                    _this7.assocMateriais.removeAt(index);
                  } else {
                    _this7.pnotifyService.error();
                  }
                }, function (error) {
                  if (error.error.hasOwnProperty('mensagem') && (error.mensagem !== null || error.mensagem !== '')) {
                    _this7.pnotifyService.error(error.error.mensagem);
                  } else {
                    _this7.pnotifyService.error();
                  }
                });
              });
            }

            this.form.markAsTouched();
            this.form.markAsDirty();
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

            if (this.action === 'update' && this.form.pristine) {
              this.location.back();
            } else {
              if (this.checkFormValidation() && this.form.valid) {
                if (this.form.value.assocMateriais.length > 0) {
                  this.loaderNavbar = true;
                  this.submittingForm = true;
                  this.materiaisContratoService.save(this.form.getRawValue(), this.action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                    _this8.loaderNavbar = false;
                    _this8.submittingForm = false;
                  })).subscribe(function (response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this8.form.reset();

                      _this8.formChanged = false;

                      _this8.pnotifyService.success(response.mensagem);

                      _this8.activatedRoute.params.subscribe(function (params) {
                        var navigateTo;

                        if (params.hasOwnProperty('id')) {
                          navigateTo = '../../lista';
                        } else {
                          navigateTo = '../lista';
                        }

                        _this8.router.navigate([navigateTo], {
                          relativeTo: _this8.activatedRoute
                        });
                      });
                    } else if (response.hasOwnProperty('success') && response.success === false) {
                      _this8.pnotifyService.error(response.mensagem);
                    } else {
                      _this8.pnotifyService.error();
                    }
                  }, function (error) {
                    _this8.pnotifyService.error();
                  });
                } else {
                  this.pnotifyService.notice('Associe pelo menos um material.');
                }
              } else {
                this.pnotifyService.notice('Selecione um material.');
              }
            }
          }
        }, {
          key: "checkFormValidation",
          value: function checkFormValidation() {
            var isValid = true;

            if (this.form.getRawValue().codMaterial === null) {
              isValid = false;
            }

            return isValid;
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
          key: "onLoaderNavbar",
          value: function onLoaderNavbar(event) {
            this.loaderNavbar = event;
          }
        }, {
          key: "materialPrincipal",
          value: function materialPrincipal(material) {
            this.onInput();
            this.form.controls.codLinha.setValue(material.codLinha);
            this.form.controls.codClasse.setValue(material.codClasse);
            this.form.controls.codMaterial.setValue(material.codigoMaterial);
            this.form.controls.nomeMaterial.setValue(material.descricao);
          }
        }, {
          key: "materialAssociado",
          value: function materialAssociado(material) {
            this.onAddMaterial(material, true, 'user');
          }
        }]);

        return ComercialCadastrosMateriaisContratoFormularioComponent;
      }();

      ComercialCadastrosMateriaisContratoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _contratos_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosMateriaisContratoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_15__["ComercialService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosMateriaisContratoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'comercial-cadastros-materiais-contratos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _contratos_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosMateriaisContratoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_15__["ComercialService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]])], ComercialCadastrosMateriaisContratoFormularioComponent);
      /***/
    },

    /***/
    "8ouN":
    /*!****************************************************************!*\
      !*** ./src/app/modules/comercial/services/clientes.service.ts ***!
      \****************************************************************/

    /*! exports provided: ComercialClientesService */

    /***/
    function ouN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesService", function () {
        return ComercialClientesService;
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

      var ComercialClientesService = /*#__PURE__*/function () {
        function ComercialClientesService(http) {
          _classCallCheck(this, ComercialClientesService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/clientes";
        }

        _createClass(ComercialClientesService, [{
          key: "getStatus",
          value: function getStatus() {
            return this.http.get("".concat(this.API, "/pesquisa/status")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClientes",
          value: function getClientes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/pesquisa/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClientesGrupoEconomico",
          value: function getClientesGrupoEconomico(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/grupo-economico/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedorCiudad",
          value: function getVendedorCiudad(id_vendedor) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_vendedor', id_vendedor);
            return this.http.get("".concat(this.API, "/vendedor/ciudad"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPermissaoAcesso",
          value: function getPermissaoAcesso(id) {
            return this.http.get("".concat(this.API, "/permissao-acesso/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sapUpdateClient",
          value: function sapUpdateClient(codigo_cliente, data) {
            console.log("update Cliente:", data);
            return this.http.post("".concat(this.API, "/pesquisa/updatesap"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sapUpdateContacto",
          value: function sapUpdateContacto(codigo_cliente, data) {
            console.log("update Contacto:", data);
            return this.http.post("".concat(this.API, "/pesquisa/updatesapcontacto"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatosResumido",
          value: function getContatosResumido(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/contactodetalle/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTipoClientes",
          value: function getTipoClientes() {
            return this.http.get("".concat(this.API, "/tipo_cliente")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getExisteCpfCnpj",
          value: function getExisteCpfCnpj(documento, getDadosCliente) {
            return this.http.get("".concat(this.API, "/verificar-cpf-cnpj/").concat(documento, "?getDadosCliente=").concat(getDadosCliente === true ? 1 : 0)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCliente",
          value: function postCliente(data) {
            return this.http.post("".concat(this.API, "/pre-cadastro"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sapPostClient",
          value: function sapPostClient(data) {
            return this.http.post("".concat(this.API, "/postsap"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(0));
          }
        }, {
          key: "getPropostaAnaliseCredito",
          value: function getPropostaAnaliseCredito(codCliente) {
            return this.http.get("".concat(this.API, "/proposta-analise-credito/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDadosFaturamento",
          value: function getDadosFaturamento(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/dados-faturamento/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateDadosFaturamento",
          value: function updateDadosFaturamento(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/dados-faturamento"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteAtividadeSecundaria",
          value: function deleteAtividadeSecundaria(codCliente, id) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/atividade-secundaria/").concat(codCliente, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEnderecos",
          value: function getEnderecos(codCliente, params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/cadastro/carregar/enderecos/").concat(codCliente), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEndereco",
          value: function getEndereco(codCliente, idEndereco, idSituacao) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/endereco/").concat(codCliente, "/").concat(idEndereco, "/").concat(idSituacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateEndereco",
          value: function updateEndereco(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/endereco"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteEndereco",
          value: function deleteEndereco(codCliente, id) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/endereco/").concat(codCliente, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatos",
          value: function getContatos(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/contatos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContato",
          value: function getContato(codCliente, idContato) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/contato/").concat(codCliente, "/").concat(idContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateContato",
          value: function updateContato(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/contato"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(codCliente, id, idSeqTid) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/contato/").concat(codCliente, "/").concat(id, "/").concat(idSeqTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteMeioContato",
          value: function deleteMeioContato(codCliente, id, idSeqTid) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/meio-contato/").concat(codCliente, "/").concat(id, "/").concat(idSeqTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteFilho",
          value: function deleteFilho(idFilho) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/filho/").concat(idFilho)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDadosRelacionamento",
          value: function getDadosRelacionamento(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/dados-relacionamento/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateDadosRelacionamento",
          value: function updateDadosRelacionamento(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/dados-relacionamento"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPotencialCompra",
          value: function getPotencialCompra(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/potencial-compra/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updatePotencialCompra",
          value: function updatePotencialCompra(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/potencial-compra"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/anexos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // , retry(2)
            );
          }
        }, {
          key: "uploadAnexo",
          value: function uploadAnexo(data) {
            return this.http.post("".concat(this.API, "/cadastro/upload/anexo"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // , retry(2)
            );
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(idAnexo) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/anexo/").concat(idAnexo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getFilial",
          value: function getFilial(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/filial/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTravas",
          value: function getTravas(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/travas/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getInformacoesFinanceiras",
          value: function getInformacoesFinanceiras(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/informacoes-financeiras/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getInformacoesComerciais",
          value: function getInformacoesComerciais(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/informacoes-comerciais/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getListaEmails",
          value: function getListaEmails(codCliente) {
            return this.http.get("".concat(this.API, "/emails/lista/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialClientesService;
      }();

      ComercialClientesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesService);
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
    "L2eR":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/contratos.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisContratoModule */

    /***/
    function L2eR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisContratoModule", function () {
        return ComercialCadastrosMateriaisContratoModule;
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


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./contratos-routing.module */
      "hnNz");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../templates/templates.module */
      "11Wi");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./lista/lista.component */
      "mxF1");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "/B0g");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./contratos.service */
      "pskp"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default.a);
      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_4__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_5__["ptBrLocale"]);

      var ComercialCadastrosMateriaisContratoModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisContratoModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisContratoModule);
      });

      ComercialCadastrosMateriaisContratoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__["ComercialCadastrosMateriaisContratoListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialCadastrosMateriaisContratoFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__["CurrencyMaskModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisContratoRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosMateriaisTemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _contratos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCadastrosMateriaisContratoService"]]
      })], ComercialCadastrosMateriaisContratoModule);
      /***/
    },

    /***/
    "OpFw":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/formulario/formulario.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OpFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvY29udHJhdG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "PmT9":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/contratos/formulario/formulario.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PmT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form [formGroup]=\"form\">\r\n        <div >\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Dados do Contrato</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"nomeContrato\">Nome Contrato</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"nomeContrato\"\r\n                formControlName=\"nomeContrato\"\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('nomeContrato') + ' ' + onFieldRequired(form.controls.nomeContrato)\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('nomeContrato')\" message=\"Nome do contrato é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"clientes\">Clientes</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"clientes\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [hideSelected]=\"true\"\r\n                [multiple]=\"true\"\r\n                [closeOnSelect]=\"false\"\r\n                bindLabel=\"razaoSocial\"\r\n                bindValue=\"codCliente\"\r\n                id=\"codCliente\"\r\n                formControlName=\"codCliente\" \r\n                [ngClass]=\"onFieldError('codCliente') + ' ' + onFieldRequired(form.controls.codCliente)\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('codCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n              <label for=\"dataInicial\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"dataInicial\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataInicial\"\r\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired(form.controls.dataInicial)\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Data Inicial obrigatório.\"></invalid-form-control>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label for=\"dataFinal\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"dataFinal\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataFinal\"\r\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired(form.controls.dataFinal)\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Data Final é obrigatório.\"></invalid-form-control>\r\n              </div>\r\n              <invalid-form-control\r\n                [show]=\"comparaData()\"\r\n                message=\"A data inicial está maior que a data final\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codStatus\">Status</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codStatus\"\r\n                formControlName=\"codStatus\"\r\n                [ngClass]=\"onFieldError('codStatus') + ' ' + onFieldRequired(form.controls.codStatus)\">\r\n                <option value=\"0\">Reprovado</option>\r\n                <option value=\"1\">Aprovado</option>\r\n                <option value=\"2\">Aguardando Aprovação</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codStatus')\" message=\"Status é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-8\">\r\n              <label for=\"quantidade\">Qtde.</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"quantidade\"\r\n                placeholder=\"Digite...\"\r\n                formControlName=\"quantidade\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\"\r\n                [ngClass]=\"onFieldError('quantidade') + ' ' + onFieldRequired(form.controls.quantidade)\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('quantidade')\" message=\"Quantidade é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\"\r\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"1\">Ativo</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\" [hidden]=\"form.get('codStatus').value != 0\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"motivo\" >Motivo:</label>\r\n                <textarea class=\"form-control\" id=\"motivo\" formControlName=\"motivo\" rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n\r\n        <div formArrayName=\"assocMateriais\">\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\">\r\n            <div class=\"col\">\r\n              <div class=\"mtc-title\">Materiais associados ao Contrato</div>\r\n              <custom-table [config]=\"tableConfigAssocMateriais\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" style=\"width: 55%\">Material</th>\r\n                    <th scope=\"col\" class=\"text-center\" style=\"width: 20%\">Valor Un.</th>\r\n                    <th scope=\"col\" class=\"text-center\" style=\"width: 20%\">Qtde.</th>\r\n                    <th scope=\"col\" style=\"width: 5%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let material of assocMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td style=\"width: 55%\">\r\n                      {{ form.value.assocMateriais[i].codMaterial }} - {{ form.value.assocMateriais[i].nomeMaterial | uppercase }}\r\n                    </td>\r\n                    <td style=\"width: 20%\">\r\n                      <input\r\n                        type=\"text\"\r\n                        id=\"valor\"\r\n                        class=\"form-control text-center\"\r\n                        formControlName=\"valor\"\r\n                        currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: 'R$ ' }\">\r\n                    </td>\r\n                    <td style=\"width: 20%\">\r\n                      <input\r\n                        type=\"text\"\r\n                        id=\"quantidade\"\r\n                        class=\"form-control text-center\"\r\n                        formControlName=\"quantidade\"\r\n                        currencyMask [options]=\"{ align: 'left', prefix: 'ton  ', thousands: '.', decimal: ',', precision: 3 }\">\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        (click)=\"onDeleteMaterial(i)\">\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhuma associação encontrada\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <!-- <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n        <comercial-cadastros-materiais-templates-material-principal\r\n          [linhas]=\"linhas\"\r\n          [classes]=\"classes\"\r\n          [limparMaterialSelecionado]=\"limparMaterialPrincipal\"\r\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n          (materialPrincipal)=\"materialPrincipal($event)\">\r\n        </comercial-cadastros-materiais-templates-material-principal>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <comercial-cadastros-materiais-templates-associacoes\r\n        [linhas]=\"linhas\"\r\n        [classes]=\"classes\"\r\n        [linhaSelecionada]=\"form.value.codLinha\"\r\n        [classeSelecionada]=\"form.value.codClasse\"\r\n        (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n        (materialAssociado)=\"materialAssociado($event)\">\r\n      </comercial-cadastros-materiais-templates-associacoes>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "RCrd":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/formulario/formulario-resolver.guard.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisContratoFormularioResolverGuard */

    /***/
    function RCrd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisContratoFormularioResolverGuard", function () {
        return ComercialCadastrosMateriaisContratoFormularioResolverGuard;
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


      var _contratos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../contratos.service */
      "pskp"); // Services


      var ComercialCadastrosMateriaisContratoFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisContratoFormularioResolverGuard(materiaisContratosService) {
          _classCallCheck(this, ComercialCadastrosMateriaisContratoFormularioResolverGuard);

          this.materiaisContratosService = materiaisContratosService;
        }

        _createClass(ComercialCadastrosMateriaisContratoFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.materiaisContratosService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                codContrato: null,
                codLinha: null,
                codClasse: null,
                codMaterial: null,
                codSituacao: 1,
                codStatus: 2,
                dataInicial: null,
                dataFinal: null,
                nomeContrato: null,
                motivo: null,
                quantidade: null,
                materiais: []
              }
            });
          }
        }]);

        return ComercialCadastrosMateriaisContratoFormularioResolverGuard;
      }();

      ComercialCadastrosMateriaisContratoFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _contratos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisContratoService"]
        }];
      };

      ComercialCadastrosMateriaisContratoFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_contratos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisContratoService"]])], ComercialCadastrosMateriaisContratoFormularioResolverGuard);
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
          this.API = "http://23.254.204.187/api/comercial";
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
          key: "getAlmacen",
          value: function getAlmacen(params) {
            return this.http.get("".concat(this.API, "/almacen")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhasId",
          value: function getLinhasId(id) {
            return this.http.get("".concat(this.API, "/linhas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSublineasId",
          value: function getSublineasId(id) {
            return this.http.get("".concat(this.API, "/sublineas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sincronizarMateriales",
          value: function sincronizarMateriales() {
            return this.http.get("".concat(this.API, "/sincronizar")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriales",
          value: function getMateriales(params) {
            return this.http.get("".concat(this.API, "/materiales"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesLista",
          value: function getMaterialesLista(params) {
            return this.http.get("".concat(this.API, "/materiales/lista"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOferta",
          value: function getMaterialesOferta(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOfertaVendedor",
          value: function getMaterialesOfertaVendedor(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio_vendedor"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getUpSellService",
          value: function getUpSellService(params) {
            return this.http.get("".concat(this.API, "/materiales_suplementarios"), {
              params: params
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
        }, {
          key: "getPresentacionMaterial",
          value: function getPresentacionMaterial() {
            return this.http.get("".concat(this.API, "/presentacion_materiales")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            return this.http.get("".concat(this.API, "/clientes/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListarPrecios",
          value: function getListarPrecios() {
            return this.http.get("".concat(this.API, "/vendedor/lista_precio")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTodosVendedores",
          value: function getTodosVendedores() {
            return this.http.get("".concat(this.API, "/vendedor/allvendedor")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCentrosLogisticos",
          value: function getCentrosLogisticos() {
            return this.http.get("".concat(this.API, "/almacen/centros_logisticos"));
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
    "hnNz":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/contratos-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisContratoRoutingModule */

    /***/
    function hnNz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisContratoRoutingModule", function () {
        return ComercialCadastrosMateriaisContratoRoutingModule;
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
      "RCrd");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "mxF1");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "/B0g"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisContratoListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisContratoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisContratoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisContratoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisContratoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosMateriaisContratoRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisContratoRoutingModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisContratoRoutingModule);
      });

      ComercialCadastrosMateriaisContratoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosMateriaisContratoRoutingModule);
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
    "mxF1":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/lista/lista.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisContratoListaComponent */

    /***/
    function mxF1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisContratoListaComponent", function () {
        return ComercialCadastrosMateriaisContratoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "wuF6");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "vifG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
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


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../contratos.service */
      "pskp");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // Services


      var ComercialCadastrosMateriaisContratoListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisContratoListaComponent(activatedRoute, router, location, formBuilder, pnotifyService, atividadesService, titleService, detailPanelService, comercialService, materiaisContratoService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosMateriaisContratoListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.detailPanelService = detailPanelService;
          this.comercialService = comercialService;
          this.materiaisContratoService = materiaisContratoService;
          this.confirmModalService = confirmModalService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.tableConfigMateriais = {
            hover: false
          };
          this.showDetailPanel = false;
          this.orderBy = 'codContrato';
          this.orderType = 'ASC';
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.materiais = [];
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.compararData = null;
          this.dados = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.materiaisAssociados = [];
        }

        _createClass(ComercialCadastrosMateriaisContratoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
            this.setFormFilter();
            this.titleService.setTitle('Contratos de materiais');
            this.onDetailPanelEmitter();
            this.setContratoSelecionado();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this9 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this9.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Contratos'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this10 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this10.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this11 = this;

            this.materiaisContratoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this11.loaderFullScreen = false;

              _this11.checkValuesLinhaClasse();
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this11.linhas = response[0].result;

                _this11.linhas.unshift({
                  id: 0,
                  descricao: 'EXIBIR TODOS'
                });
              } else {
                _this11.pnotifyService.error();

                _this11.location.back();
              }

              if (response[1].responseCode === 200) {
                _this11.classes = response[1].result;

                _this11.filteredClasses.unshift({
                  idClasse: 0,
                  nomeClasse: 'EXIBIR TODOS'
                });
              } else {
                _this11.pnotifyService.error();

                _this11.location.back();
              }
            });
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha, reset) {
            if (reset) {
              if (this.form.value.codLinha !== 0) {
                this.form.controls.codClasse.enable();
                this.form.controls.codClasse.setValue(0);
              } else {
                this.form.controls.codClasse.disable();
                this.form.controls.codClasse.setValue(null);
              }

              this.form.controls.codClasse.updateValueAndValidity();
              this.materiais = [];
              this.form.controls.codContrato.reset();
              this.form.controls.codContrato.disable();
              this.form.controls.codContrato.setValue(null);
              this.form.controls.codContrato.updateValueAndValidity();
            }

            this.filteredClasses = this.classes.filter(function (value) {
              return value.idLinha == codLinha;
            });
            this.filteredClasses.unshift({
              idClasse: 0,
              nomeClasse: 'EXIBIR TODOS'
            });
          }
        }, {
          key: "onChangeClasse",
          value: function onChangeClasse(codClasse, reset, src) {
            if (reset) {
              this.form.controls.codContrato.reset();
              this.form.controls.codContrato.enable();
              this.form.controls.codContrato.setValue(0);
              this.form.controls.codContrato.updateValueAndValidity();
            }

            this.getMateriais(codClasse, src);
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(codClasse, src) {
            var _this12 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              if (src === 'application') {
                this.loaderNavbar = true;
              }

              this.materiaisLoader = true;
              this.materiais = [];
              var params = {
                codClasse: codClasse,
                tipoMaterial: 'Distribuidora',
                comercializa: 0
              };
              this.comercialService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                if (src === 'application') {
                  _this12.loaderNavbar = false;
                }

                _this12.materiaisLoader = false;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this12.materiais = response.data;

                  _this12.materiais.unshift({
                    codigoMaterial: 0,
                    codigoDescricaoMaterial: 'EXIBIR TODOS'
                  });
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this12.pnotifyService.error(response.mensagem);
                } else {
                  _this12.pnotifyService.error();
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this12.pnotifyService.error(error.error.mensagem);
                } else {
                  _this12.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              nomeContrato: [formValue.codSituacao],
              codContrato: [formValue.codSituacao],
              codSituacao: [formValue.codSituacao],
              codStatus: [formValue.codStatus],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "comparaData",
          value: function comparaData() {
            if (!this.form.get('dataFinal').value) {
              return false;
            } else if (this.form.get('dataInicial').value > this.form.get('dataFinal').value) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this13 = this;

            var formValue = {
              nomeContrato: null,
              codContrato: 0,
              codSituacao: '',
              codStatus: '',
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this13.search(params);

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
          key: "checkValuesLinhaClasse",
          value: function checkValuesLinhaClasse() {
            if (this.form.value.codLinha !== 0) {
              this.onChangeLinha(this.form.value.codLinha, false);
            }

            if (this.form.value.codClasse !== 0) {
              this.onChangeClasse(this.form.value.codClasse, false, 'verify');
            } else {
              this.form.controls.codClasse.disable();
              this.form.controls.codContrato.disable();
              this.form.controls.codClasse.updateValueAndValidity();
              this.form.controls.codContrato.updateValueAndValidity();
            }
          }
        }, {
          key: "setContratoSelecionado",
          value: function setContratoSelecionado() {
            this.contratoSelecionado = {
              codContrato: null,
              codLinha: null,
              codClasse: null,
              codSituacao: null,
              codStatus: null,
              nomeContrato: null,
              motivo: null,
              codCliente: null,
              dataInicial: null,
              dataFinal: null,
              quantidade: null,
              nomeUsuario: null
            };
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

            if (this.form.value.nomeContrato) {
              params.nomeContrato = this.form.value.nomeContrato;
            }

            if (this.form.value.codContrato) {
              params.codContrato = this.form.value.codContrato;
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            if (this.form.value.codStatus) {
              params.codStatus = this.form.value.codStatus;
            }

            params.pagina = this.form.value.pagina;
            params.registros = this.form.value.registros;
            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this14 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.materiaisContratoService.getListaContratos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this14.loaderNavbar = false;
              _this14.dadosLoaded = true;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this14.dados = response.data;
                _this14.totalItems = _this14.dados[0]['total'];
              } else if (response.hasOwnProperty('success') && response.success === false) {
                _this14.dadosEmpty = true;
              } else {
                _this14.pnotifyService.error();

                _this14.dadosEmpty = true;
              }
            }, function (error) {
              _this14.dadosEmpty = true;

              if (error.error.hasOwnProperty('mensagem')) {
                _this14.pnotifyService.error(error.error.mensagem);
              } else {
                _this14.pnotifyService.error();
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(contrato) {
            var borderClass;

            if (contrato.codSituacao === 0) {
              borderClass = 'border-danger';
            } else if (contrato.codSituacao === 1) {
              borderClass = 'border-success';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.detailPanelService.hide();
              this.setContratoSelecionado();
              this.form.value.pagina = event.page;
              this.onFilter();
              this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
          }
        }, {
          key: "onDetails",
          value: function onDetails(contrato) {
            var _this15 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "Materiais associados ao contrato ".concat(contrato.nomeContrato);
            this.setContratoSelecionado();
            this.contratoSelecionado = contrato;
            this.materiaisAssociados = [];
            this.materiaisContratoService.getAssociacoesMateriais(contrato.codContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              setTimeout(function () {
                _this15.loaderNavbar = false;
              }, 500);
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                _this15.detailPanelService.loadedFinished(false);

                _this15.materiaisAssociados = response.data;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                // Vazio.
                _this15.detailPanelService.loadedFinished(true);
              } else {
                // Vazio e com possível erro.
                _this15.pnotifyService.error();

                _this15.detailPanelService.loadedFinished(true);
              }
            }, function (error) {
              // Vazio e com erro.
              _this15.detailPanelService.loadedFinished(true);

              if (error.error.hasOwnProperty('mensagem')) {
                _this15.pnotifyService.error(error.error.mensagem);
              } else {
                _this15.pnotifyService.error();
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(contrato) {
            this.router.navigate(['../editar', contrato.codContrato], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, contrato) {
            var _this16 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this16.activateContrato(index, contrato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this16.loaderNavbar = false;
            })).subscribe(function (success) {
              _this16.pnotifyService.success();

              _this16.refreshMainData(contrato);
            }, function (error) {
              _this16.pnotifyService.error();

              _this16.dados[index].codSituacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateContrato",
          value: function activateContrato(index, contrato) {
            this.loaderNavbar = true;
            this.dados[index].codSituacao = 1;
            return this.materiaisContratoService.activateContrato(contrato.codContrato);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, contrato) {
            var _this17 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this17.inactivateContrato(index, contrato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this17.loaderNavbar = false;
            })).subscribe(function (success) {
              _this17.pnotifyService.success();

              _this17.refreshMainData(contrato);
            }, function (error) {
              _this17.pnotifyService.error();

              _this17.dados[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateContrato",
          value: function inactivateContrato(index, contrato) {
            this.loaderNavbar = true;
            this.dados[index].codSituacao = 0;
            return this.materiaisContratoService.inactivateContrato(contrato.codContrato);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(contrato) {
            for (var i = 0; i < this.dados.length; i++) {
              if (contrato.codContrato === this.dados[i].codContrato) {
                this.dados[i].codSituacao = contrato.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosMateriaisContratoListaComponent;
      }();

      ComercialCadastrosMateriaisContratoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"]
        }, {
          type: _contratos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisContratoService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosMateriaisContratoListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosMateriaisContratoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-contratos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"], _contratos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisContratoService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]])], ComercialCadastrosMateriaisContratoListaComponent);
      /***/
    },

    /***/
    "pskp":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/contratos.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisContratoService */

    /***/
    function pskp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisContratoService", function () {
        return ComercialCadastrosMateriaisContratoService;
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


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialCadastrosMateriaisContratoService = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisContratoService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosMateriaisContratoService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/cadastros/materiais/contratos";
        }

        _createClass(ComercialCadastrosMateriaisContratoService, [{
          key: "getListaContratos",
          value: function getListaContratos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAssociacoesMateriais",
          value: function getAssociacoesMateriais(codContrato, params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/associacoes/").concat(codContrato), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codContrato) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codContrato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "saveContrato",
          value: function saveContrato(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "updateContrato",
          value: function updateContrato(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(record, action) {
            if (action === 'update') {
              return this.updateContrato(record);
            }

            return this.saveContrato(record);
          }
        }, {
          key: "deleteAssociacao",
          value: function deleteAssociacao(codContrato, codAssociacao) {
            return this.http["delete"]("".concat(this.API, "/associacao/remover/").concat(codContrato, "/").concat(codAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "activateContrato",
          value: function activateContrato(codContrato) {
            return this.http.post("".concat(this.API, "/ativar"), codContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "inactivateContrato",
          value: function inactivateContrato(codContrato) {
            return this.http.post("".concat(this.API, "/inativar"), codContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
          }
        }]);

        return ComercialCadastrosMateriaisContratoService;
      }();

      ComercialCadastrosMateriaisContratoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosMateriaisContratoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialCadastrosMateriaisContratoService);
      /***/
    },

    /***/
    "vifG":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/contratos/lista/lista.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function vifG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvY29udHJhdG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "wuF6":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/contratos/lista/lista.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wuF6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Contratos\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-lg-2\">\r\n              <label for=\"codLinha\">Linha</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"linhas\"\r\n                formControlName=\"codLinha\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codLinha\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                (change)=\"onChangeLinha($event.id, true)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codClasse\">Classe</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"filteredClasses\"\r\n                formControlName=\"codClasse\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codClasse\"\r\n                bindLabel=\"nomeClasse\"\r\n                bindValue=\"idClasse\"\r\n                (change)=\"onChangeClasse($event.idClasse, true, 'application')\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codMaterial\">Material</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"materiais\"\r\n                formControlName=\"codMaterial\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codMaterial\"\r\n                bindLabel=\"codigoDescricaoMaterial\"\r\n                bindValue=\"codigoMaterial\"\r\n                [loading]=\"materiaisLoader\"\r\n                loadingText=\"Carregando...\">\r\n              </ng-select>\r\n            </div> -->\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codContrato\">Cód. Contrato</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"codContrato\"\r\n                formControlName=\"codContrato\"\r\n                autocomplete=\"new-password\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"nomeContrato\">Nome Contrato</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"nomeContrato\"\r\n                formControlName=\"nomeContrato\"\r\n                autocomplete=\"new-password\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codStatus\">Status</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codStatus\"\r\n                formControlName=\"codStatus\"\r\n                >\r\n                <option value=\"\" >Todos</option>\r\n                <option value=\"0\">Reprovado</option>\r\n                <option value=\"1\">Aprovado</option>\r\n                <option value=\"2\">Aguardando Aprovação</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"0\">Inativos</option>\r\n                <option value=\"1\">Ativos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center hover\">\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'codContrato'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codContrato')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\">\r\n              <thead-sorter\r\n                value=\"Nome Contrato\"\r\n                [active]=\"orderBy == 'nomeContrato'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeContrato')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"text-center\">Quantidade</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Usuário cadastro</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"let contrato of dados; let i = index;\"\r\n            [class.table-active]=\"contrato.codContrato == contratoSelecionado.codContrato && showDetailPanel\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(contrato)\"\r\n              (click)=\"onDetails(contrato)\">\r\n              {{ contrato.codContrato }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(contrato)\">\r\n              {{ contrato.nomeContrato | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(contrato)\">\r\n              {{ contrato.quantidade | number:'1.3-3' }} TON\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(contrato)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"contrato.nomeUsuario === null\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"contrato.nomeUsuario !== null\">\r\n                {{ contrato.nomeUsuario | uppercase }}\r\n              </span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <span *ngIf=\"contrato.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, contrato)\">\r\n                  <i class=\"fas fa-toggle-off\"></i>\r\n                </button>\r\n              </span>\r\n              <span *ngIf=\"contrato.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, contrato)\">\r\n                  <i class=\"fas fa-toggle-on\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(contrato)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"materiaisAssociados.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código</th>\r\n              <th scope=\"col\">Material</th>\r\n              <th scope=\"col\" class=\"text-center\">Qtde.</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiaisAssociados\">\r\n              <td class=\"text-center\">{{ material.codContrato }}</td>\r\n              <td>{{ material.nomeContrato | uppercase }}</td>\r\n              <td class=\"text-center\">{{ material.quantidade | number:'1.3-3' }} {{ material.unidade | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
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
          this.API = "http://23.254.204.187/api/comercial/tid-software";
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
//# sourceMappingURL=materiais-contratos-contratos-module-es5.js.map