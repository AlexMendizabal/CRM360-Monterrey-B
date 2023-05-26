(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integracao-materiais-integracao-materiais-module"], {
    /***/
    "0eUS":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-materiais/formulario/formulario.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent */

    /***/
    function eUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent", function () {
        return ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "u3vl");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "7jsM");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/associacao-materiais.service */
      "Yaq/");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");

      var ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent = /*#__PURE__*/function () {
        function ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent(activatedRoute, formBuilder, dateService, localeService, routerService, route, pnotify, location, confirmModalService, associacaoService) {
          _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.localeService = localeService;
          this.routerService = routerService;
          this.route = route;
          this.pnotify = pnotify;
          this.location = location;
          this.confirmModalService = confirmModalService;
          this.associacaoService = associacaoService;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idMtcorp = this.currentUser['info']['id'];
          this.spinnerFullScreen = true;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.data = new Date();
          this.linhas = [];
          this.classes = [];
          this.matDagda = [];
          this.materiaisLista = [];
          this.loadingDagda = false;
          this.noResult = false;
          this.toggleAll = false;
          this.searchingDagda = false;
          this.inactiveForDelete = false;
          this.validForm = false;
          this.showMateriais = true;
          this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.appTitle = 'Cadastro de Associação';
          this.situacao = [{
            cd: '',
            ds: 'Todos'
          }, {
            cd: 0,
            ds: 'Inativos'
          }, {
            cd: 1,
            ds: 'Ativos'
          }];
          /* Config Table */

          this.tableConfig = {
            subtitleBorder: false
          };
          this.form = this.formBuilder.group({
            ID_LINH: [null],
            NM_LINH: [{
              value: [null],
              disabled: true
            }],
            ID_CLAS: [null],
            NM_CLAS: [{
              value: [null],
              disabled: true
            }],
            codigoMaterial: [null],
            NM_MATE_TID: [{
              value: [null],
              disabled: true
            }],
            cdDagda: [null],
            idMatTidDagda: null,
            inCada: null,
            status: 1,
            parametro: 1,
            user: this.idMtcorp,
            codSimilaridade: [null],
            codLinha: [null],
            codClasse: [null],
            codMaterial: [null],
            nomeMaterial: [null],
            codSituacao: [null],
            assocMateriais: this.formBuilder.array([])
          });
        }

        _createClass(ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinnerFullScreen = false;
            this.noResult = true;
            this.onActivatedRoute();
            this.setBreadCrumb();
            this.getFilterValues();
            this.getListaMateriaisDagda();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;

            if (params.id) {
              //this.form.get('idMatTidDagda').setValue(params.id);
              this.getAssociacao(params.id);
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.route.navigate(['/comercial/integracoes/dagda/${id}/integracao-materiais'], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/comercial/home"
            }, {
              descricao: 'Integração Dagda',
              routerLink: "/comercial/integracoes/dagda/".concat(id)
            }, {
              descricao: 'Integração de Materiais',
              routerLink: "/comercial/integracoes/dagda/".concat(id, "/integracao-materiais")
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToBrazilianDate(_obj[prop]).substring(0, 10);
                if (_obj[prop] instanceof Array) _params[prop] = _obj[prop].toString();else _params[prop] = _obj[prop];
              }
            }

            return _params;
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
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "resetDagda",
          value: function resetDagda() {
            if (this.form.get('cdDagda').value.length == 0) this.getListaMateriaisDagda(this.getParams());
          }
        }, {
          key: "getMateriaisDagda",
          value: function getMateriaisDagda() {
            var _this = this;

            this.matDagda = [];
            this.searchingDagda = true;
            var param = this.getParams();
            this.associacaoService.getMateriaisDagda(param).subscribe(function (response) {
              if (response.body['success'] == true) {
                //this.matDagda = response.body['data'];
                _this.searchingDagda = false;
                _this.matDagda = response.body['data'].map(function (el) {
                  var o = Object.assign({}, el);
                  o.checked = 0;
                  return o;
                });
              } else {
                _this.pnotify.notice('Nenhum material Dagda foi encontrado!');

                _this.searchingDagda = false;
              }
            });
          }
        }, {
          key: "getListaMateriaisDagda",
          value: function getListaMateriaisDagda(param) {
            var _this2 = this;

            this.loadingDagda = true;
            param = param == null ? '' : param;
            this.associacaoService.getMateriaisDagda(param).subscribe(function (response) {
              if (response.body['success'] == true) {
                _this2.loadingDagda = false;
                _this2.materiaisLista = response.body['data'];
              } else {
                _this2.pnotify.notice('Nenhum material Dagda foi encontrado!');

                _this2.loadingDagda = false;
              }
            });
          }
        }, {
          key: "getAssociacao",
          value: function getAssociacao(params) {
            var _this3 = this;

            var param = {
              codigoMaterial: params
            };
            this.associacaoService.getAssociacao(param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this3.spinnerFullScreen = false;
            })).subscribe(function (response) {
              _this3.altera(response.body['data'][0]);
            });
          }
        }, {
          key: "altera",
          value: function altera(param) {
            this.form.controls['idMatTidDagda'].setValue(param.ID_MATE_TID_DAGD);
            this.form.controls['ID_LINH'].setValue(param.ID_LINH);
            this.form.controls['codLinha'].setValue(param.NM_LINH);
            this.form.controls['ID_CLAS'].setValue(param.ID_CLAS);
            this.form.controls['NM_CLAS'].setValue(param.NM_CLAS);
            this.form.controls['codMaterial'].setValue(param.ID_MATE_TID);
            this.form.controls['nomeMaterial'].setValue(param.NM_MATE_TID);
            this.form.controls['status'].setValue(param.IN_STAT);
            this.getDetalhes(param.ID_MATE_TID);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            var params = {
              idMatTidDagda: this.form.get('idMatTidDagda').value,
              codigoMaterial: this.form.get('codMaterial').value,
              cdDagda: this.form.get('assocMateriais').value,
              user: this.form.get('user').value,
              stat: this.form.get('status').value
            };
            this.loaderNavbar = true;
            this.associacaoService.onSubmit(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this4.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response['status'] == 200) _this4.pnotify.success(response.body['mensagem']);

                _this4.location.back();
              },
              error: function error(_error) {
                return _this4.pnotify.error();
              }
            });
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
            this.form.controls.nomeMaterial.setValue(material.descricao); //Valida informação para ativar o botão de salvar

            if (this.form.value.assocMateriais.length > 0 && this.form.get('codMaterial').value !== null) {
              this.validForm = true;
            } // fim da validação

          }
        }, {
          key: "materialAssociado",
          value: function materialAssociado(material) {
            this.onAddMaterial(material, true);
          }
        }, {
          key: "onInput",
          value: function onInput() {}
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this5 = this;

            this.associacaoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this5.spinnerFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this5.linhas = response[0].result;
              } else {
                _this5.pnotify.error();

                _this5.location.back();
              }

              if (response[1].responseCode === 200) {
                _this5.classes = response[1].result;
              } else {
                _this5.pnotify.error();

                _this5.location.back();
              }
            });
          }
        }, {
          key: "setMateriais",
          value: function setMateriais(materiais) {
            if (materiais.length > 0) {
              for (var i = 0; i < materiais.length; i++) {
                this.onAddMaterial(materiais[i]);
              }
            }
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(material, manipulateForm) {
            var _this6 = this;

            if (this.checkMaterialExists(material) === false) {
              this.assocMateriais.push(this.formBuilder.group({
                codMaterial: [material.codMaterial],
                nomeMaterial: [material.nomeMaterial]
              }));

              if (this.form.value.assocMateriais.length > 9) {
                if (this.tableConfigAssocMateriais.fixedHeader === false) {
                  this.showMateriais = false;
                  this.tableConfigAssocMateriais.fixedHeader = true;
                  setTimeout(function () {
                    _this6.showMateriais = true;
                  }, 1);
                }
              } //Valida informação para ativar o botão de salvar


              if (this.form.value.assocMateriais.length > 0 && this.form.get('codMaterial').value !== null) {
                this.validForm = true;
              } // fim da validação


              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            } else {//this.pnotify.notice('Associe apenas materiais da mesma classe.');
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
          key: "onToggleAll",
          value: function onToggleAll() {
            this.toggleAll = !this.toggleAll;

            for (var index = 0; index < this.matDagda.length; index++) {
              this.matDagda[index].checked = this.toggleAll === true ? 1 : 0;
            }
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(index, lista) {
            this.matDagda[index].checked = lista.checked == 0 ? 1 : 0;
          }
        }, {
          key: "onAssociarMateriais",
          value: function onAssociarMateriais() {
            this.toggleAll = false;

            for (var index = 0; index < this.matDagda.length; index++) {
              if (this.matDagda[index].checked === 1) {
                var material = {
                  codMaterial: this.matDagda[index].CD_MATE,
                  nomeMaterial: this.matDagda[index].NM_MATE
                };
                this.materialAssociado(material);
                this.matDagda[index].checked = 0;
                this.inactiveForDelete = false;
              }
            }
          }
        }, {
          key: "onLimparMaterialPrincipal",
          value: function onLimparMaterialPrincipal() {
            var _this7 = this;

            this.limparMaterialPrincipal = true;
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.nomeMaterial.setValue(null);
            setTimeout(function () {
              _this7.limparMaterialPrincipal = false;
            }, 100);
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(param) {
            var _this8 = this;

            param = {
              codigoMaterial: param
            };
            var material = [];
            this.associacaoService.getDetalhes(param).subscribe(function (response) {
              if (response.status == 200) {
                response.body['data'].forEach(function (e) {
                  material.push({
                    codMaterial: e.ID_MATE_DAGD,
                    nomeMaterial: e.NM_MATE_DAGD
                  });
                });

                _this8.setMateriais(material);
              }
            });
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index, param) {
            this.inactiveForDelete = true;
            this.deleteMaterial(index);
            this.getDetalhesDagd(param);
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMaterial",
          value: function deleteMaterial(index) {
            this.assocMateriais.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "getDetalhesDagd",
          value: function getDetalhesDagd(item) {
            var _this9 = this;

            var param = {
              codigoMaterial: item
            };
            this.associacaoService.getDetalhes(param).subscribe(function (response) {
              if (response.status == 200) {
                _this9.deleteAssociacao(response.body['data'][0]);
              } else {
                _this9.pnotify.success('Associação removida com sucesso');
              }
            });
          }
        }, {
          key: "deleteAssociacao",
          value: function deleteAssociacao(item) {
            var _this10 = this;

            var param = item;
            var params = {
              idMatTidDagda: param.ID,
              cdMatTid: param.ID_MATE_TID,
              cdMatDagda: param.ID_MATE_DAGD,
              user: this.idMtcorp
            };
            this.associacaoService.deleteAssociacao(params).subscribe(function (response) {
              _this10.pnotify.success('Associação removida com sucesso');

              _this10.getDetalhes(param.ID_MATE_TID);

              if (_this10.form.value.assocMateriais.length > 0) {
                _this10.inactiveForDelete = false;
              }
            });
          }
        }, {
          key: "assocMateriais",
          get: function get() {
            return this.form.get('assocMateriais');
          }
        }]);

        return ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent;
      }();

      ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"]
        }, {
          type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]
        }];
      };

      ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"], _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]])], ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent);
      /***/
    },

    /***/
    "7jsM":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-materiais/formulario/formulario.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jsM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2RhZ2RhL2ludGVncmFjYW8tbWF0ZXJpYWlzL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "8WXO":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-materiais/lista/lista.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent */

    /***/
    function WXO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent", function () {
        return ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "YGvT");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "wQHf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/associacao-materiais.service */
      "Yaq/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");

      var ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent = /*#__PURE__*/function () {
        function ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent(formBuilder, activatedRoute, dateService, localeService, routerService, pnotify, route, detailPanelService, associacaoService) {
          _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.localeService = localeService;
          this.routerService = routerService;
          this.pnotify = pnotify;
          this.route = route;
          this.detailPanelService = detailPanelService;
          this.associacaoService = associacaoService;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idMtcorp = this.currentUser['info']['id'];
          this.spinnerFullScreen = true;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.noResult = false;
          this.listas = [];
          this.detalhes = [];
          this.data = new Date();
          this.dadosEmpty = false;
          this.dadosEmptyDetalhes = false;
          this.appTitle = 'Integração de Materiais';
          this.panelTitle = 'Associações';
          this.situacao = [{
            cd: '',
            ds: 'Todos'
          }, {
            cd: '0',
            ds: 'Inativos'
          }, {
            cd: '1',
            ds: 'Ativos'
          }];
          this.reg = [{
            cd: 10,
            ds: '10'
          }, {
            cd: 25,
            ds: '25'
          }, {
            cd: 50,
            ds: '50'
          }, {
            cd: 100,
            ds: '100'
          }, {
            cd: 200,
            ds: '200'
          }, {
            cd: 300,
            ds: '300'
          }];
          this.integrados = [{
            cd: '1',
            ds: 'Vinculados'
          }, {
            cd: '0',
            ds: 'Não Vinculados'
          }];
          /* Paginação */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = this.itemsPerPage;
          this.orderBy = 'ID_MATE_TID_DAGD';
          this.orderType = 'DESC';
          /* Config Table */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            codigoMaterial: [null],
            cdDagda: [null],
            status: [null],
            ID_LINH: [null],
            ID_CLAS: [null],
            idMatTidDagda: null,
            inCada: null,
            registros: 10,
            pagina: this.currentPage,
            orderBy: this.orderBy,
            orderType: this.orderType,
            time: [new Date().getTime()]
          });
        }

        _createClass(ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.getActiveRoute();
            this.getLinhas();
            this.getClasses();
            this.onSubscription();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activateRoutedSubscription.unsubscribe();
            this.$showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('time').setValue(new Date().getTime());
            this.loaderNavbar = true;
            this.detailPanelService.hide();

            if (this.form.value['registros']) {
              this.itemsPerPage = this.form.value['registros'];
              this.end = this.form.value['registros'];
            }

            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getActiveRoute",
          value: function getActiveRoute() {
            var _this11 = this;

            this.spinnerFullScreen = true;
            this.$activateRoutedSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                var _response = _this11.routerService.getBase64UrlParams(response);

                _this11.form.patchValue(_response);
              }

              if (_this11.form.get('cdDagda').value) {
                _this11.getDetalhes({
                  cdDagda: _this11.getParams()['cdDagda']
                });
              } else {
                _this11.getAssociacao(_this11.getParams());
              }
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/comercial/home"
            }, {
              descricao: 'Integração Dagda',
              routerLink: "/comercial/integracoes/dagda/".concat(id)
            }, {
              descricao: this.appTitle
            }];
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
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getAssociacao",
          value: function getAssociacao(params) {
            var _this12 = this;

            if (params === 0) {
              this.dadosEmpty = true;
              this.noResult = false;
              this.spinnerFullScreen = false;
              this.loaderNavbar = false;
              return;
            } else {
              this.loaderNavbar = true;
              this.associacaoService.getAssociacao(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                _this12.spinnerFullScreen = false;
                _this12.loaderNavbar = false;
              })).subscribe({
                next: function next(response) {
                  if (response.status != 200) {
                    _this12.dadosEmpty = true;
                    _this12.noResult = false;

                    _this12.pnotify.notice('Nenhum resgistro foi encontrado!');

                    _this12.listas = [];
                    return;
                  }

                  _this12.listas = response.body['data'];
                  _this12.totalItems = response.body['data'].length;
                  _this12.noResult = true;
                },
                error: function error(_error2) {
                  return _this12.pnotify.error();
                }
              });
            }
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToBrazilianDate(_obj[prop]).substring(0, 10);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'desc') {
                this.orderType = 'asc';
              } else if (this.orderType == 'asc') {
                this.orderType = 'desc';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'asc';
            }

            this.form.get('orderBy').setValue(this.orderBy);
            this.form.get('orderType').setValue(this.orderType);
            this.onFilter();
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            this.route.navigate(['./', item.ID_MATE_TID], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(item)
            });
          }
        }, {
          key: "onEditStatus",
          value: function onEditStatus(param) {
            var _this13 = this;

            this.loaderNavbar = true;
            param.IN_STAT = param.IN_STAT == 1 ? 0 : 1;
            var params = {
              idMatTidDagda: param.ID_MATE_TID_DAGD,
              status: param.IN_STAT,
              user: this.idMtcorp
            };
            this.associacaoService.onSubmit(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this13.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.status === 200) {
                  _this13.pnotify.success('Status alterado com sucesso');

                  _this13.getAssociacao(_this13.getParams());
                }
              },
              error: function error(_error3) {
                return _this13.pnotify.error();
              }
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this14 = this;

            this.loadingLinhas = true;
            this.associacaoService.getLinhas().subscribe(function (response) {
              if (response.body['responseCode'] != 200) {
                _this14.pnotify.notice('Nenhuma linha foi encontrada!');

                _this14.loadingLinhas = false;
              } else {
                _this14.loadingLinhas = false;
                _this14.linhas = response.body['result'];
              }
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this15 = this;

            this.loadingClasses = true;
            var idlinha = {
              ID_LINH: this.form.get('ID_LINH').value == null ? '' : this.form.get('ID_LINH').value
            };
            this.associacaoService.getClasses(idlinha).subscribe(function (response) {
              if (response.body['responseCode'] == 200) {
                _this15.loadingClasses = false;
                _this15.classes = response.body['result'];
              } else {
                _this15.pnotify.notice('Nenhuma classe foi encontrada!');

                _this15.loadingClasses = false;
              }
            });
          }
        }, {
          key: "onSubscription",
          value: function onSubscription() {
            var _this16 = this;

            this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this16.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "onDetailPanel",
          value: function onDetailPanel(param) {
            if (param.IN_STAT == 0) {
              return;
            } else {
              this.detailPanelService.show();
              this.getDetalhes({
                codigoMaterial: param.ID_MATE_TID
              });
            }
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(param) {
            var _this17 = this;

            var params = {};
            this.associacaoService.getDetalhes(param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              if (_this17.showDetailPanel) {
                _this17.detailPanelService.loadedFinished(false);
              }
            })).subscribe(function (response) {
              if (response.status == 200) {
                _this17.detalhes = response.body['data'];
                params = {
                  codigoMaterial: _this17.detalhes[0]['ID_MATE_TID']
                };
                _this17.dadosEmptyDetalhes = false;

                if (_this17.form.get('cdDagda').value && _this17.showDetailPanel == false) {
                  _this17.getAssociacao({
                    params: params
                  });
                }
              } else {
                _this17.pnotify.notice('Nenhuma associação encontrada!');

                _this17.detalhes = [];
                _this17.dadosEmptyDetalhes = true;

                _this17.getAssociacao(0);
              }
            });
          }
        }, {
          key: "deleteAssociacao",
          value: function deleteAssociacao(i, param) {
            var _this18 = this;

            this.detalhes.splice(i, 1);
            var params = {
              idMatTidDagda: param.ID,
              cdMatTid: param.ID_MATE_TID,
              cdMatDagda: param.ID_MATE_DAGD,
              user: this.idMtcorp
            };
            this.associacaoService.deleteAssociacao(params).subscribe(function (response) {
              _this18.pnotify.success('Associação removida com sucesso');

              _this18.getDetalhes({
                codigoMaterial: param.ID_MATE_TID
              });
            });
          }
        }, {
          key: "disableForm",
          value: function disableForm() {
            if (this.form.get('cdDagda').value) {
              this.form.get('ID_LINH').disable();
              this.form.get('ID_CLAS').disable();
            } else {
              this.form.get('ID_LINH').enable();
              this.form.get('ID_CLAS').enable();
            }
          }
        }]);

        return ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent;
      }();

      ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }, {
          type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"]
        }, {
          type: _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_10__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]
        }];
      };

      ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"]],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"], _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_10__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]])], ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent);
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
    "YGvT":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/integracao-materiais/lista/lista.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YGvT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label for=\"de\">\n                <span class=\"mr-1\">De</span>\n                <ng-template #tooltipLabelDeTemplate>\n                  <p class=\"mb-0\">Código do Material no TID</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelDeTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"codigoMaterial\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"para\">\n                <span class=\"mr-1\">Para</span>\n                <ng-template #tooltipLabelParaTemplate>\n                  <p class=\"text-nowrap mb-0\">Código do Material no Dagda</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelParaTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"cdDagda\"\n                (input)=\"disableForm()\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"linhas\">Linhas</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"linhas\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingLinhas\"\n                labelForId=\"linhas\"\n                bindLabel=\"NM_LINH\"\n                bindValue=\"ID\"\n                id=\"linhas\"\n                formControlName=\"ID_LINH\"\n                (change) =\"getClasses()\"\n                [ngClass]=\"onFieldError('ID_LINH') + ' ' + onFieldRequired('ID_LINH')\"\n                >\n              </ng-select>\n              <invalid-form-control\n                [show]=\"onFieldInvalid('ID_LINH')\"\n                message=\"Linha é obrigatório.\">\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"classes\">Classes</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"classes\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingClasses\"\n                labelForId=\"classes\"\n                bindLabel=\"NM_CLAS\"\n                bindValue=\"ID\"\n                id=\"classes\"\n                formControlName=\"ID_CLAS\"\n                [ngClass]=\"onFieldError('ID_CLAS') + ' ' + onFieldRequired('ID_CLAS')\"\n                >\n              </ng-select>\n              <invalid-form-control\n                [show]=\"onFieldInvalid('ID_CLAS')\"\n                message=\"Classe é obrigatório.\">\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-3\">\n\t\t\t\t\t\t\t<label for=\"status\"> Situação </label>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[items]=\"situacao\"\n\t\t\t\t\t\t\t\t[virtualScroll]=\"true\"\n\t\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\t\tbindLabel=\"ds\"\n\t\t\t\t\t\t\t\tbindValue=\"cd\"\n\t\t\t\t\t\t\t\tplaceholder=\"Selecione...\"\n\t\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\t\t[ngClass]=\"onFieldError('status') + ' ' + onFieldRequired('status')\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<invalid-form-control\n\t\t\t\t\t\t\t\t[show]=\"onFieldInvalid('status')\"\n\t\t\t\t\t\t\t\tmessage=\"Situação é obrigatório.\">\n\t\t\t\t\t\t\t</invalid-form-control>\n\t\t\t\t\t\t</div>\n            <div class=\"form-group col-md-3\">\n\t\t\t\t\t\t\t<label for=\"registros\"> Registros </label>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[items]=\"reg\"\n\t\t\t\t\t\t\t\t[virtualScroll]=\"true\"\n\t\t\t\t\t\t\t\tlabelForId=\"registros\"\n\t\t\t\t\t\t\t\tbindLabel=\"ds\"\n\t\t\t\t\t\t\t\tbindValue=\"cd\"\n\t\t\t\t\t\t\t\tplaceholder=\"Selecione...\"\n\t\t\t\t\t\t\t\tformControlName=\"registros\"\n\t\t\t\t\t\t\t\t[ngClass]=\"onFieldError('registros') + ' ' + onFieldRequired('registros')\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<invalid-form-control\n\t\t\t\t\t\t\t\t[show]=\"onFieldInvalid('registros')\"\n\t\t\t\t\t\t\t\tmessage=\"Registros é obrigatório.\">\n\t\t\t\t\t\t\t</invalid-form-control>\n\t\t\t\t\t\t</div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n\t<div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-7 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n\t\t\t\t\t\t<th></th>\n            <th class=\"text-nowrap\" (click)=\"setOrderBy('ID_MATE_TID')\">\n              <thead-sorter value=\"Cod. TID\" [active]=\"orderBy == 'ID_MATE_TID'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n\t\t\t\t\t\t<th (click)=\"setOrderBy('NM_MATE_TID')\">\n\t\t\t\t\t\t\t<thead-sorter value=\"Material\" [active]=\"orderBy == 'NM_MATE_TID'\" [sort]=\"orderType\"></thead-sorter>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"text-left\"> Usuário Cadastro</th>\n            <th [hidden]=\"showDetailPanel\"></th>\n            <th></th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody >\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\" [tooltip]=\"lista.IN_STAT == 0 ? 'Editar' : ''\"\n               class=\"hover\">\n\t\t\t\t\t\t<td [ngClass]=\"{ \n                'border-success' : lista.IN_STAT == 1, \n                'border-danger'  : lista.IN_STAT == 0\n              }\">\n            </td>\n            <td class=\"text-center\" (click)=\"onDetailPanel(lista)\">{{ lista.ID_MATE_TID }}</td>\n            <td class=\"text-left\" style=\"width: 50rem\" (click)=\"onDetailPanel(lista)\">{{ lista.NM_MATE_TID | uppercase }}</td>\n            <td class=\"text-left\" style=\"width: 15rem\" (click)=\"onDetailPanel(lista)\">{{ lista.NR_MATR }}</td>\n            <td  style=\"width: 10rem\" [hidden]=\"showDetailPanel\" (click)=\"onDetailPanel(lista)\"></td>\n            <td class=\"text-right px-0\" style=\"width: 10rem\">\n              <span class=\"\" [tooltip]=\"lista.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" [style]=\"lista.IN_STAT == 1 ? 'color: green;' : 'color: red;'\" (click)=\"onEditStatus(lista)\" [disabled]=\"lista.IN_STAT == null\">\n                  <i [ngClass]=\"lista.IN_STAT == 1 ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                </button>\n              </span>\n            </td>\n            <td class=\"text-center px-0\" style=\"width: 4rem\">\n              <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button class=\"btn-icon-sm\" style=\"color: blue;\" (click)=\"onEdit(lista)\" [disabled]=\"lista.IN_STAT == 0\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n    </div>\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"panelTitle\">\n        <custom-table [hidden]=\"dadosEmptyDetalhes\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th class=\"text-center\">Cod. Dagda</th>\n              <th class=\"text-center\">Material</th>\n              <th></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let detalhe of detalhes let i = index\">\n              <td class=\"text-center\">{{ detalhe.ID_MATE_DAGD }}</td>\n              <td class=\"text-center nowrap\">{{ detalhe.DS_MATE }}</td>\n              <td class=\"text-left px-0\">\n                <span class=\"\" tooltip=\"Excluir Associação\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" style=\"color: red;\" (click)=\"deleteAssociacao(i, detalhe)\">\n                    <i class=\"fas fa-trash-alt\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        <empty-result\n          message=\"Nenhuma informação encontrada\"\n          class=\"my-3\"\n          *ngIf=\"dadosEmptyDetalhes\">\n        </empty-result>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n";
      /***/
    },

    /***/
    "oROG":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-materiais/integracao-materiais-routing.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule */

    /***/
    function oROG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule", function () {
        return ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule;
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


      var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "8WXO");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "0eUS");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent"]
      }, {
        path: ':id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent"]
      }, {
        path: '**',
        component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule = function ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule() {
        _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule);
      };

      ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule);
      /***/
    },

    /***/
    "paU0":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-materiais/integracao-materiais.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoMateriaisModule */

    /***/
    function paU0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoMateriaisModule", function () {
        return ComercialIntegracoesDagdaIntegracaoMateriaisModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _integracao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./integracao-materiais-routing.module */
      "oROG");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./lista/lista.component */
      "8WXO");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "0eUS");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../cadastros/materiais/templates/templates.module */
      "11Wi");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../templates/templates.module */
      "EaA3");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");

      var ComercialIntegracoesDagdaIntegracaoMateriaisModule = function ComercialIntegracoesDagdaIntegracaoMateriaisModule() {
        _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoMateriaisModule);
      };

      ComercialIntegracoesDagdaIntegracaoMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesDagdaIntegracaoMateriaisListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__["ComercialIntegracoesDagdaIntegracaoMateriaisFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["TemplatesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["ComercialIntegracoesDagdaMateriaisTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosMateriaisTemplatesModule"], _integracao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComercialIntegracoesDagdaIntegracaoMateriaisRoutingModule"]]
      })], ComercialIntegracoesDagdaIntegracaoMateriaisModule);
      /***/
    },

    /***/
    "u3vl":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/integracao-materiais/formulario/formulario.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u3vl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!validForm || submittingForm || inactiveForDelete\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!spinnerFullScreen\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div [hidden]=\"form.getRawValue().codMaterial != null\">\n        <comercial-integracao_dagda-materiais-templates-material-principal\n          [linhas]=\"linhas\"\n          [classes]=\"classes\"\n          [limparMaterialSelecionado]=\"limparMaterialPrincipal\"\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\n          (materialPrincipal)=\"materialPrincipal($event)\">\n        </comercial-integracao_dagda-materiais-templates-material-principal>\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <hr>\n          </div>\n        </div>\n      </div>\n\n      <form [formGroup]=\"form\">\n        <div [hidden]=\"form.getRawValue().codMaterial === null\">\n          <div class=\"row mb-3\">\n            <div class=\"col mt-auto\">\n              <div class=\"mtc-title mb-0\">Associação material TID</div>\n            </div>\n            <div class=\"col\" *ngIf=\"form.getRawValue().codMaterial != null && form.getRawValue().idMatTidDagda == null\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-danger\"\n                  (click)=\"onLimparMaterialPrincipal()\">\n                  <i class=\"fas fa-trash\"></i>\n                  <span>Limpar</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codMaterial\">Cód. Material</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"nomeGrupo\"\n                formControlName=\"codMaterial\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\">\n              <invalid-form-control [show]=\"onFieldInvalid('codMaterial')\" message=\"Código é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-7\">\n              <label for=\"nomeMaterial\">Material</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"nomeGrupo\"\n                formControlName=\"nomeMaterial\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\">\n              <invalid-form-control [show]=\"onFieldInvalid('nomeMaterial')\" message=\"Material é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-3\">\n\t\t\t\t\t\t\t<label for=\"status\"> Situação </label>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[items]=\"situacao\"\n\t\t\t\t\t\t\t\t[virtualScroll]=\"true\"\n\t\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\t\tbindLabel=\"ds\"\n\t\t\t\t\t\t\t\tbindValue=\"cd\"\n\t\t\t\t\t\t\t\tplaceholder=\"Selecione...\"\n\t\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\t\t[ngClass]=\"onFieldError('status') + ' ' + onFieldRequired('status')\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<invalid-form-control\n\t\t\t\t\t\t\t\t[show]=\"onFieldInvalid('status')\"\n\t\t\t\t\t\t\t\tmessage=\"Situação é obrigatório.\">\n\t\t\t\t\t\t\t</invalid-form-control>\n\t\t\t\t\t\t</div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col\">\n              <hr>\n            </div>\n          </div>\n        </div>\n\n        <div formArrayName=\"assocMateriais\">\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\">\n            <div class=\"col\">\n              <div class=\"mtc-title\">Materiais Associados</div>\n              <custom-table [config]=\"tableConfigAssocMateriais\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" style=\"width: 95%\">Material</th>\n                    <th scope=\"col\" style=\"width: 5%\"></th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let material of assocMateriais.controls; let i = index\" [formGroupName]=\"i\">\n                    <td style=\"width: 95%\">\n                      {{ form.value.assocMateriais[i].codMaterial }} - {{ form.value.assocMateriais[i].nomeMaterial | uppercase }}\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        icon=\"fas fa-trash\"\n                        size=\"small\"\n                        (click)=\"onDeleteMaterial(i, form.value.codMaterial)\">\n                      </btn-icon>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length == 0\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-exchange-alt\"\n                text=\"Nenhuma associação encontrada\">\n              </message>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row\" #scrollToFilter>\n        <div class=\"col\">\n          <div class=\"row mb-2\">\n            <div class=\"col mt-auto\">\n              <div class=\"mtc-title mb-0\">Pesquisar por materiais dagda para associação</div>\n            </div>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-secondary\"\n                  (click)=\"getMateriaisDagda()\"\n                  >\n                  <i class=\"fas fa-search\"></i>\n                  <span>Pesquisar</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <advanced-filter>\n            <form [formGroup]=\"form\" autocomplete=\"off\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label for=\"cdDagda\">Código Dagda</label>\n                  <ng-select\n                    [searchable]=\"true\"\n                    [clearable]=\"true\"\n                    [items]=\"materiaisLista\"\n                    [virtualScroll]=\"true\"\n                    [multiple]=\"true\"\n                    [closeOnSelect]=\"false\"\n                    placeholder=\"Selecione...\"\n                    [loading]=\"loadingDagda\"\n                    labelForId=\"cdDagda\"\n                    bindLabel=\"DS_MATE\"\n                    bindValue=\"CD_MATE\"\n                    id=\"cdDagda\"\n                    (change) =\"resetDagda()\"\n                    formControlName=\"cdDagda\"\n                    [ngClass]=\"onFieldError('cdDagda') + ' ' + onFieldRequired('cdDagda')\"\n                    >\n                  </ng-select>\n                  <invalid-form-control\n                    [show]=\"onFieldInvalid('cdDagda')\"\n                    message=\"Código Dagda é obrigatório.\">\n                  </invalid-form-control>\n                </div>\n              </div>\n            </form>\n          </advanced-filter>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"searchingDagda === true\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando os materiais para você...\">\n          </message>\n        </div>\n      </div>\n      <div class=\"col\" *ngIf=\"matDagda.length > 0\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de materiais</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                (click)=\"onAssociarMateriais()\"\n                class=\"btn btn-sm btn-outline-primary\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span>Associar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\" class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll()\">\n                    </btn-icon>\n                  </th>\n                  <th class=\"text-center\"> Código</th>\n                  <th class=\"text-left\"> Material</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody >\n                <tr *ngFor=\"let lista of matDagda; let i = index\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"lista.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onCheckMaterial(i, lista)\">\n                    </btn-icon>\n                  </td>\n                  <td class=\"text-center\">{{ lista.CD_MATE }}</td>\n                  <td class=\"text-left\">{{ lista.NM_MATE }}</td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "wQHf":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-materiais/lista/lista.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wQHf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".border-secondary {\n  border-color: #929090 !important;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvaW50ZWdyYWNvZXMvZGFnZGEvaW50ZWdyYWNhby1tYXRlcmlhaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTs7RUFFRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvaW50ZWdyYWNvZXMvZGFnZGEvaW50ZWdyYWNhby1tYXRlcmlhaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLXNlY29uZGFyeSB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE0NiwgMTQ0LCAxNDQpICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9J251bWJlciddIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=integracao-materiais-integracao-materiais-module-es5.js.map