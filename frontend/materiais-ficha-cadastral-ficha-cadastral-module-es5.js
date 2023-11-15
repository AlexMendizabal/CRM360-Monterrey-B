(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-ficha-cadastral-ficha-cadastral-module"], {
    /***/
    "+MGG":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      \r\n      <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n        <comercial-cadastros-materiais-templates-material-principal\r\n          [linhas]=\"linhas\"\r\n          [classes]=\"classes\"\r\n          [limparMaterialSelecionado]=\"limparMaterialPrincipal\"\r\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n          (materialPrincipal)=\"materialPrincipal($event)\">\r\n        </comercial-cadastros-materiais-templates-material-principal>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <form [formGroup]=\"form\">\r\n        <div [hidden]=\"form.getRawValue().codMaterial === null\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Dados do Material</div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"form.getRawValue().codMaterial != null && form.getRawValue().codFichaCadastral == null\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  (click)=\"onLimparMaterialPrincipal()\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                  <span>Limpar</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codMaterial\">Cód. Mat</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeGrupo\"\r\n                formControlName=\"codMaterial\"\r\n                (input)=\"onInput()\"\r\n                disabled\r\n                (click)=\"buscaMate()\"\r\n                (blur)=\"buscaMate()\"\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('codMaterial') + ' ' + onFieldRequired(form.controls.codMaterial)\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('codMaterial')\" message=\"Código é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-8\">\r\n              <label for=\"nomeMaterial\">Material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeGrupo\"\r\n                formControlName=\"nomeMaterial\"\r\n                (input)=\"onInput()\"\r\n                disabled\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('nomeMaterial') + ' ' + onFieldRequired(form.controls.nomeMaterial)\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('nomeMaterial')\" message=\"Material é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\"\r\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n                <option value=\"1\">Ativo</option>\r\n                <option value=\"0\">Inativo</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>        \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"descMaterial\">Descrição</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                rows=\"10\" \r\n                id=\"descMaterial\"\r\n                formControlName=\"descMaterial\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('descMaterial') + ' ' + onFieldRequired(form.controls.descMaterial)\"></textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div formArrayName=\"anexos\">\r\n            <div class=\"row\">\r\n              <div class=\"col d-flex align-items-start\">\r\n                <div class=\"mtc-title mb-0\">Anexos</div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <label for=\"novoAnexo\" class=\"d-flex justify-content-end align-items-center\" style=\"cursor: pointer;\">\r\n                  <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                    <i class=\"fas fa-plus\"></i>\r\n                    <span>Novo</span>\r\n                  </p>\r\n                </label>\r\n                <input\r\n                  id=\"novoAnexo\"\r\n                  type=\"file\"\r\n                  (change)=\"appendFile($event.target.files)\"\r\n                  class=\"d-none\"\r\n                  >\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n              <div class=\"col\">\r\n                <custom-table [config]=\"tableConfigAnexos\">\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let anexo of anexos.controls; let i = index\" [formGroupName]=\"i\">\r\n                      <td style=\"width: 90%\">\r\n                        {{ form.value.anexos[i].codAnexo }} - {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <a\r\n                          [href]=\"form.value.anexos[i].linkAnexo\"\r\n                          *ngIf=\"form.value.anexos[i].linkAnexo != null\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm mx-2 text-black\"\r\n                          tooltip=\"visualizar\">\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <btn-icon\r\n                          icon=\"fas fa-trash\"\r\n                          size=\"small\"\r\n                          tooltip=\"Excluir\"\r\n                          (click)=\"onDeleteAnexo(form.value.anexos[i].codAnexo, i)\">\r\n                        </btn-icon>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n              <div class=\"col\">\r\n                <message\r\n                  icon=\"fas fa-exchange-alt\"\r\n                  text=\"Nenhum documento encontrado\">\r\n                </message>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "/Sd9":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/lista/lista.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZmljaGEtY2FkYXN0cmFsL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "3fl7":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisFichaCadastralFormularioComponent */

    /***/
    function fl7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralFormularioComponent", function () {
        return ComercialCadastrosMateriaisFichaCadastralFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "+MGG");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "yaTe");
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


      var _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../ficha-cadastral.service */
      "RKj2");
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


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); //rxjs
      // Services


      var ComercialCadastrosMateriaisFichaCadastralFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisFichaCadastralFormularioComponent(activatedRoute, router, location, formBuilder, fichaCadastralService, confirmModalService, pnotifyService, atividadesService, titleService, comercialService) {
          _classCallCheck(this, ComercialCadastrosMateriaisFichaCadastralFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.fichaCadastralService = fichaCadastralService;
          this.confirmModalService = confirmModalService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.comercialService = comercialService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.formChanged = false;
          this.formData = [];
          this.showAnexos = false;
          this.linhas = [];
          this.classes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisFichaCadastralFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
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
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this.appTitle = 'Editar Ficha Cadastral';
              } else {
                _this.appTitle = 'Nova Ficha Cadastral';
              }

              _this.titleService.setTitle(_this.appTitle);

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Ficha Cadastral',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/materiais/ficha-cadastral/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this2 = this;

            this.fichaCadastralService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this2.linhas = response[0].result;
              } else {
                _this2.pnotifyService.error();

                _this2.location.back();
              }

              if (response[1].responseCode === 200) {
                _this2.classes = response[1].result;
              } else {
                _this2.pnotifyService.error();

                _this2.location.back();
              }
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codFichaCadastral: [detalhes.codFichaCadastral],
                codMaterial: [detalhes.codMaterial, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nomeMaterial: [detalhes.nomeMaterial],
                descMaterial: [detalhes.descMaterial, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                anexos: this.formBuilder.array([])
              });

              if (detalhes.codMaterial != null && detalhes.codFichaCadastral != null) {
                this.getAnexos(detalhes.codMaterial);
              }
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.loaderFullScreen = false;
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codMaterial) {
            var _this3 = this;

            this.loaderNavbar = true;
            this.showAnexos = false;
            this.fichaCadastralService.getAnexos(codMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this3.setAnexos(response.data);

                _this3.showAnexos = true;
              } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                _this3.pnotifyService.error(response.mensagem);
              } else {
                _this3.pnotifyService.error();
              }
            }, function (error) {
              if (error['error'].hasOwnProperty('mensagem')) {
                _this3.pnotifyService.error(error.error.mensagem);
              } else {
                _this3.pnotifyService.error();
              }
            });
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
          key: "setAnexos",
          value: function setAnexos(anexos) {
            if (anexos.length > 0) {
              for (var i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
              }
            }
          }
        }, {
          key: "anexos",
          get: function get() {
            return this.form.get('anexos');
          }
        }, {
          key: "onAddAnexos",
          value: function onAddAnexos(anexo, manipulateForm) {
            if (this.checkAnexoExists(anexo) === false) {
              this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo]
              }));

              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            }
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.anexos.push(this.formBuilder.group({
              nomeAnexo: [files[0]['name']]
            }));

            if (this.showAnexos === false) {
              this.showAnexos = true;
            }
          }
          /* onLimparAnexos(): void {
            const anexos = this.form.get('anexos') as FormArray;
            anexos.clear();
          } */

        }, {
          key: "checkAnexoExists",
          value: function checkAnexoExists(anexo) {
            return this.form.value.anexos.some(function (el) {
              return el.codAnexo === anexo.codAnexo;
            });
          }
        }, {
          key: "onDeleteAnexo",
          value: function onDeleteAnexo(codAnexo, index) {
            var _this4 = this;

            this.confirmDelete().subscribe(function (r) {
              if (codAnexo) {
                _this4.loaderNavbar = true;

                _this4.fichaCadastralService.deleteAnexo(codAnexo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this4.loaderNavbar = false;
                })).subscribe(function (response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    r ? _this4.deleteDocumento(index) : null;
                  } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                    _this4.pnotifyService.error(response.mensagem);
                  } else {
                    _this4.pnotifyService.error();
                  }
                }, function (error) {
                  if (error['error'].hasOwnProperty('mensagem')) {
                    _this4.pnotifyService.error(error.error.mensagem);
                  } else {
                    _this4.pnotifyService.error();
                  }
                });
              } else {
                r ? _this4.deleteDocumento(index) : null;

                _this4.formData.splice(index, 1);
              }
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteDocumento",
          value: function deleteDocumento(index) {
            this.anexos.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "buscaMate",
          value: function buscaMate() {
            var _this5 = this;

            var codMaterial = this.form.getRawValue().codMaterial;

            if (typeof codMaterial !== 'undefined' && codMaterial !== null) {
              this.loaderNavbar = true;
              this.comercialService.getMateriais({
                codMaterial: codMaterial
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this5.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this5.form.controls.nomeMaterial.setValue(response.data[0].descricao);

                  _this5.form.controls.nomeMaterial.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);

                  _this5.form.controls.nomeMaterial.updateValueAndValidity();
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this5.pnotifyService.error(response.mensagem);
                } else {
                  _this5.pnotifyService.error();
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this5.pnotifyService.error(error.error.mensagem);
                } else {
                  _this5.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            this.codMaterial = null;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.codMaterial = this.form.value.codMaterial;
                this.fichaCadastralService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this6.loaderNavbar = false;
                  _this6.submittingForm = false;
                })).subscribe(function (response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    if (_this6.formData.length > 0 && response.data.codFichaCadastral) {
                      _this6.onPostAnexos(response.data.codFichaCadastral);
                    }

                    _this6.form.reset();

                    _this6.formChanged = false;

                    _this6.pnotifyService.success(response.mensagem);

                    _this6.activatedRoute.params.subscribe(function (params) {
                      if (params.hasOwnProperty('id')) {
                        _this6.location.back();
                      } else {
                        _this6.router.navigate(['../lista'], {
                          relativeTo: _this6.activatedRoute
                        });
                      }
                    });
                  } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                    _this6.pnotifyService.notice(response.mensagem);
                  } else {
                    _this6.pnotifyService.error();
                  }
                }, function (error) {
                  if (error['error'].hasOwnProperty('mensagem')) {
                    _this6.pnotifyService.error(error.error.mensagem);
                  } else {
                    _this6.pnotifyService.error();
                  }
                });
              }
            }
          }
        }, {
          key: "onPostAnexos",
          value: function onPostAnexos(codFichaCadastral) {
            var _this7 = this;

            if (this.formData.length === 0) {
              this.pnotifyService.notice('Erro');
              return;
            }

            var id = this.form.value.codMaterial;
            this.formData.forEach(function (element, index) {
              _this7.fichaCadastralService.postAnexos(element, id, codFichaCadastral).subscribe();
            });
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
          key: "onLimparMaterialPrincipal",
          value: function onLimparMaterialPrincipal() {
            var _this8 = this;

            if (this.form.value.codFichaCadastral == null) {
              this.limparMaterialPrincipal = true;
              this.onInput();
              this.form.controls.codMaterial.setValue(null);
              this.form.controls.nomeMaterial.setValue(null);
              setTimeout(function () {
                _this8.limparMaterialPrincipal = false;
              }, 100);
            } else this.pnotifyService.notice('Não é possivel alterar um material já cadastrado');
          }
        }, {
          key: "materialPrincipal",
          value: function materialPrincipal(material) {
            this.onInput();
            /* this.form.controls.codLinha.setValue(material.codLinha);
            this.form.controls.codClasse.setValue(material.codClasse); */

            this.form.controls.codMaterial.setValue(material.codigoMaterial);
            this.form.controls.nomeMaterial.setValue(material.descricao);
          }
        }]);

        return ComercialCadastrosMateriaisFichaCadastralFormularioComponent;
      }();

      ComercialCadastrosMateriaisFichaCadastralFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisFichaCadastralService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"]
        }];
      };

      ComercialCadastrosMateriaisFichaCadastralFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-setor-atividade-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisFichaCadastralService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"]])], ComercialCadastrosMateriaisFichaCadastralFormularioComponent);
      /***/
    },

    /***/
    "53vl":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario-resolver.guard.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ComercialCadastrosSetorAtividadeFormularioResolverGuard */

    /***/
    function vl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSetorAtividadeFormularioResolverGuard", function () {
        return ComercialCadastrosSetorAtividadeFormularioResolverGuard;
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


      var _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ficha-cadastral.service */
      "RKj2"); // Services


      var ComercialCadastrosSetorAtividadeFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosSetorAtividadeFormularioResolverGuard(fichaCadastralService) {
          _classCallCheck(this, ComercialCadastrosSetorAtividadeFormularioResolverGuard);

          this.fichaCadastralService = fichaCadastralService;
        }

        _createClass(ComercialCadastrosSetorAtividadeFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.fichaCadastralService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codFichaCadastral: null,
                codMaterial: null,
                nomeMaterial: null,
                descMaterial: null,
                codSituacao: 1,
                situacao: null,
                anexos: []
              }
            });
          }
        }]);

        return ComercialCadastrosSetorAtividadeFormularioResolverGuard;
      }();

      ComercialCadastrosSetorAtividadeFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisFichaCadastralService"]
        }];
      };

      ComercialCadastrosSetorAtividadeFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisFichaCadastralService"]])], ComercialCadastrosSetorAtividadeFormularioResolverGuard);
      /***/
    },

    /***/
    "BgPZ":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/ficha-cadastral.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisFichaCadastralModule */

    /***/
    function BgPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralModule", function () {
        return ComercialCadastrosMateriaisFichaCadastralModule;
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


      var _ficha_cadastral_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ficha-cadastral-routing.module */
      "udhY");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../templates/templates.module */
      "11Wi");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./lista/lista.component */
      "m+wZ");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "3fl7"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosMateriaisFichaCadastralModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisFichaCadastralModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisFichaCadastralModule);
      });

      ComercialCadastrosMateriaisFichaCadastralModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisFichaCadastralListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosMateriaisFichaCadastralFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _ficha_cadastral_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialCadastrosMateriaisFichaCadastralModule);
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
    "Hd2l":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/lista/lista.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hd2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Ficha cadastral de materiais\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n     <div class=\"row\" #scrollToFilter>\r\n      <div class=\"col\">\r\n        <advanced-filter>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-7\">\r\n                <label for=\"material\">Material</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"material\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-3\">\r\n                <label for=\"codSituacao\">Situação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"codSituacao\"\r\n                  formControlName=\"codSituacao\">\r\n                  <option value=\"\">Todos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                  <option value=\"0\">Inativos</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"registros\">Registros</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"registros\"\r\n                  formControlName=\"registros\">\r\n                  <option>25</option>\r\n                  <option>50</option>\r\n                  <option>100</option>\r\n                  <option>200</option>\r\n                  <option>300</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </advanced-filter>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <subtitles\r\n          [data]=\"subtitles\"\r\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        </subtitles>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\">Cód. Material</th>\r\n              <th scope=\"col\">Nome Material</th>\r\n              <!-- <th scope=\"col\">Usuario</th> -->\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let fichaCadastral of dadosPagination; let i = index\" [class.table-active]=\"fichaCadastral.codFichaCadastral == fichaCadastralSelecionada.codFichaCadastral\">\r\n              <td\r\n                class=\"hover\"\r\n                [ngClass]=\"classStatusBorder(fichaCadastral)\"\r\n                (click)=\"onDetails(fichaCadastral)\">\r\n                {{ fichaCadastral.codMaterial }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(fichaCadastral)\">\r\n                {{ fichaCadastral.nomeMaterial }}\r\n              </td>\r\n              <!-- <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(fichaCadastral)\">\r\n                {{ fichaCadastral.nomeUsuario }}\r\n              </td> -->\r\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n                <span *ngIf=\"fichaCadastral.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, fichaCadastral)\">\r\n                    <i class=\"fas fa-toggle-on\"></i>\r\n                  </button>\r\n                </span>\r\n                <span *ngIf=\"fichaCadastral.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, fichaCadastral)\">\r\n                    <i class=\"fas fa-toggle-off\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(fichaCadastral)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel panelTitle=\"Anexos\">\r\n          <custom-table *ngIf=\"anexos.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Cód. Anexo</th>\r\n                <th scope=\"col\">Nome Arquivo</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let anexo of anexos\">\r\n                <td class=\"text-center\">{{ anexo.codAnexo }}</td>\r\n                <td>{{ anexo.nomeAnexo | uppercase }}</td>\r\n                <td class=\"text-center\">\r\n                  <a\r\n                    [href]=\"anexo.linkAnexo\"\r\n                    target=\"_blank\"\r\n                    class=\"btn-icon-sm mx-2 text-black\"\r\n                    tooltip=\"visualizar\">\r\n                    <i class=\"far fa-eye\"></i>\r\n                  </a>\r\n                </td>\r\n                <!-- <td>{{ anex.mensagem | uppercase }}</td> -->\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </app-body>\r\n";
      /***/
    },

    /***/
    "RKj2":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/ficha-cadastral.service.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisFichaCadastralService */

    /***/
    function RKj2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralService", function () {
        return ComercialCadastrosMateriaisFichaCadastralService;
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


      var ComercialCadastrosMateriaisFichaCadastralService = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisFichaCadastralService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosMateriaisFichaCadastralService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/cadastros/materiais/ficha-cadastral";
        }

        _createClass(ComercialCadastrosMateriaisFichaCadastralService, [{
          key: "getListaFichaCadastral",
          value: function getListaFichaCadastral(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codFichaCadastral) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codFichaCadastral)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codMaterial) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "saveFichaCadastral",
          value: function saveFichaCadastral(fichaCadastral) {
            return this.http.post("".concat(this.API, "/salvar"), fichaCadastral).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "updateFichaCadastral",
          value: function updateFichaCadastral(fichaCadastral) {
            return this.http.put("".concat(this.API, "/atualizar"), fichaCadastral).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(fichaCadastral) {
            if (fichaCadastral.codFichaCadastral !== null) {
              return this.updateFichaCadastral(fichaCadastral);
            }

            return this.saveFichaCadastral(fichaCadastral);
          }
        }, {
          key: "activateFichaCadastral",
          value: function activateFichaCadastral(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "inactivateFichaCadastral",
          value: function inactivateFichaCadastral(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codMaterial) {
            return this.http.get("".concat(this.API, "/documentos/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postAnexos",
          value: function postAnexos(params, codMaterial, codFichaCadastral) {
            return this.http.post("".concat(this.API, "/anexos/salvar?codMaterial=").concat(codMaterial, "&codFichaCadastral=").concat(codFichaCadastral), params);
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(codAnexo) {
            var params = {
              codAnexo: codAnexo
            };
            return this.http.put("".concat(this.API, "/anexos/excluir"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
          }
        }]);

        return ComercialCadastrosMateriaisFichaCadastralService;
      }();

      ComercialCadastrosMateriaisFichaCadastralService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosMateriaisFichaCadastralService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialCadastrosMateriaisFichaCadastralService);
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
    "m+wZ":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/lista/lista.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisFichaCadastralListaComponent */

    /***/
    function mWZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralListaComponent", function () {
        return ComercialCadastrosMateriaisFichaCadastralListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "Hd2l");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "/Sd9");
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


      var _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../ficha-cadastral.service */
      "RKj2");
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


      var ComercialCadastrosMateriaisFichaCadastralListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisFichaCadastralListaComponent(activatedRoute, router, location, formBuilder, fichaCadastralService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosMateriaisFichaCadastralListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.fichaCadastralService = fichaCadastralService;
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
          this.orderBy = 'codFichaCadastral';
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
          this.anexos = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisFichaCadastralListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Ficha Cadastral');
            this.onDetailPanelEmitter();
            this.setFichaCadastralSelecionada();
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
            var _this9 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this9.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Ficha Cadastral'
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
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              material: [formValue.material],
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
            var _this11 = this;

            var formValue = {
              material: null,
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

                _this11.search(params);

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
          key: "setFichaCadastralSelecionada",
          value: function setFichaCadastralSelecionada() {
            this.fichaCadastralSelecionada = {
              codFichaCadastral: 0,
              codMaterial: null,
              nomeMaterial: null,
              descMaterial: null,
              codSituacao: 1,
              situacao: null
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

            if (this.form.value.material) {
              params.material = this.form.value.material;
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
            var _this12 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            this.fichaCadastralService.getListaFichaCadastral(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this12.loaderNavbar = false;
              _this12.dadosLoaded = true;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this12.dados = response.data;
                _this12.dadosPagination = _this12.dados.slice(0, _this12.itemsPerPage);
                _this12.totalItems = _this12.dados.length;
                _this12.dadosLoaded = true;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                _this12.dadosEmpty = true;
              } else {
                _this12.pnotifyService.error();

                _this12.dadosEmpty = true;
              }
            }, function (error) {
              _this12.dadosEmpty = true;

              if (error.error.hasOwnProperty('mensagem')) {
                _this12.pnotifyService.error(error.error.mensagem);
              } else {
                _this12.pnotifyService.error();
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(fichaCadastral) {
            var borderClass;

            if (fichaCadastral.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (fichaCadastral.codSituacao === 0) {
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
          value: function onDetails(fichaCadastral) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setFichaCadastralSelecionada();
            this.fichaCadastralSelecionada = fichaCadastral;
            this.anexos = [];
            this.fichaCadastralService.getAnexos(fichaCadastral.codMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              setTimeout(function () {
                _this13.loaderNavbar = false;
              }, 500);
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                _this13.detailPanelService.loadedFinished(false);

                _this13.anexos = response.data;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                // Vazio.
                _this13.detailPanelService.loadedFinished(true);
              } else {
                // Vazio e com possível erro.
                _this13.pnotifyService.error();

                _this13.detailPanelService.loadedFinished(true);
              }
            }, function (error) {
              // Vazio e com erro.
              _this13.detailPanelService.loadedFinished(true);

              if (error.error.hasOwnProperty('mensagem')) {
                _this13.pnotifyService.error(error.error.mensagem);
              } else {
                _this13.pnotifyService.error();
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(fichaCadastral) {
            this.router.navigate(['../editar', fichaCadastral.codFichaCadastral], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, fichaCadastral) {
            var _this14 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this14.activateFichaCadastral(index, fichaCadastral) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this14.loaderNavbar = false;
            })).subscribe(function (success) {
              _this14.pnotifyService.success();

              _this14.refreshMainData(fichaCadastral);
            }, function (error) {
              _this14.pnotifyService.error();

              _this14.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateFichaCadastral",
          value: function activateFichaCadastral(index, fichaCadastral) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.fichaCadastralService.activateFichaCadastral(fichaCadastral.codFichaCadastral);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, fichaCadastral) {
            var _this15 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this15.inactivateFichaCadastral(index, fichaCadastral) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this15.loaderNavbar = false;
            })).subscribe(function (success) {
              _this15.pnotifyService.success();

              _this15.refreshMainData(fichaCadastral);
            }, function (error) {
              _this15.pnotifyService.error();

              _this15.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateFichaCadastral",
          value: function inactivateFichaCadastral(index, fichaCadastral) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 0;
            return this.fichaCadastralService.inactivateFichaCadastral(fichaCadastral.codFichaCadastral);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(fichaCadastral) {
            for (var i = 0; i < this.dados.length; i++) {
              if (fichaCadastral.codFichaCadastral === this.dados[i].codFichaCadastral) {
                this.dados[i].codSituacao = fichaCadastral.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosMateriaisFichaCadastralListaComponent;
      }();

      ComercialCadastrosMateriaisFichaCadastralListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisFichaCadastralService"]
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

      ComercialCadastrosMateriaisFichaCadastralListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosMateriaisFichaCadastralListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-ficha-cadastral-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisFichaCadastralService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]])], ComercialCadastrosMateriaisFichaCadastralListaComponent);
      /***/
    },

    /***/
    "udhY":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/ficha-cadastral-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule */

    /***/
    function udhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule", function () {
        return ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule;
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
      "53vl");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "m+wZ");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "3fl7"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisFichaCadastralListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisFichaCadastralFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosSetorAtividadeFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisFichaCadastralFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosSetorAtividadeFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule);
      });

      ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule);
      /***/
    },

    /***/
    "yaTe":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yaTe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZmljaGEtY2FkYXN0cmFsL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
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
//# sourceMappingURL=materiais-ficha-cadastral-ficha-cadastral-module-es5.js.map