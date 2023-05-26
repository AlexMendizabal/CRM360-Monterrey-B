(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"], {
    /***/
    "11Wi":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/templates/templates.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisTemplatesModule */

    /***/
    function Wi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisTemplatesModule", function () {
        return ComercialCadastrosMateriaisTemplatesModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./material-principal/material-principal.component */
      "GaHy");
      /* harmony import */


      var _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./associacoes/associacoes.component */
      "6eNT"); // ng-select
      // Modules
      // Components


      var ComercialCadastrosMateriaisTemplatesModule = function ComercialCadastrosMateriaisTemplatesModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisTemplatesModule);
      };

      ComercialCadastrosMateriaisTemplatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent"], _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosMateriaisTemplatesAssociacoesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]],
        exports: [_material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent"], _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosMateriaisTemplatesAssociacoesComponent"]]
      })], ComercialCadastrosMateriaisTemplatesModule);
      /***/
    },

    /***/
    "6eNT":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/templates/associacoes/associacoes.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisTemplatesAssociacoesComponent */

    /***/
    function eNT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisTemplatesAssociacoesComponent", function () {
        return ComercialCadastrosMateriaisTemplatesAssociacoesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./associacoes.component.html */
      "nXSr");
      /* harmony import */


      var _associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./associacoes.component.scss */
      "Jz99");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // Services


      var ComercialCadastrosMateriaisTemplatesAssociacoesComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisTemplatesAssociacoesComponent(formBuilder, pnotifyService, comercialService) {
          _classCallCheck(this, ComercialCadastrosMateriaisTemplatesAssociacoesComponent);

          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.comercialService = comercialService;
          this.linhas = [];
          this.classes = [];
          this.linhaSelecionada = null;
          this.classeSelecionada = null;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.materialAssociado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.filteredClasses = [];
          this.materiais = [];
          this.toggleAll = false;
          this.searching = false;
          this.firstSearch = false;
          this.materiaisLista = [];
          this.materiaisListaLoaded = false;
          this.materiaisListaEmpty = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisTemplatesAssociacoesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(events) {
            if (events.linhas && events.linhas.currentValue.length > 0) {
              this.onChangeLinha(this.form.value.codLinha, false);
            }

            if (events.classes && events.classes.currentValue.length > 0) {
              this.onChangeClasse(this.form.value.codClasse);
            }

            if (events.linhaSelecionada && events.linhaSelecionada.currentValue !== null && !events.linhaSelecionada.firstChange) {
              this.setLinhaSelecionada(events.linhaSelecionada.currentValue);
            }

            if (events.classeSelecionada && events.classeSelecionada.currentValue !== null && !events.classeSelecionada.firstChange) {
              this.setClasseSelecionada(events.classeSelecionada.currentValue);
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              codLinha: [this.linhaSelecionada, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              codClasse: [this.classeSelecionada, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var _this = this;

            if (this.form.valid) {
              this.loaderNavbar.emit(true);
              this.searching = true;
              this.materiaisLista = [];
              this.materiaisListaLoaded = false;
              this.materiaisListaEmpty = false;
              var params = {
                codClasse: this.form.value.codClasse
              };

              if (this.form.value.codMaterial !== 0) {
                Object.assign(params, {
                  codMaterial: this.form.value.codMaterial
                });
              }

              this.comercialService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this.firstSearch = true;
                _this.searching = false;

                _this.loaderNavbar.emit(false);

                _this.materiaisListaLoaded = true;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this.materiaisLista = response.data.map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });

                  if (_this.materiaisLista.length > 9) {
                    _this.tableConfigMateriais.fixedHeader = true;
                  } else {
                    _this.tableConfigMateriais.fixedHeader = false;
                  }
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this.pnotifyService.error(response.mensagem);

                  _this.materiaisListaEmpty = true;
                } else {
                  _this.pnotifyService.error();

                  _this.materiaisListaEmpty = true;
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this.pnotifyService.error(error.error.mensagem);
                } else {
                  _this.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            this.toggleAll = !this.toggleAll;

            for (var index = 0; index < this.materiaisLista.length; index++) {
              this.materiaisLista[index].checked = this.toggleAll === true ? 1 : 0;
            }
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(index, material) {
            this.materiaisLista[index].checked = material.checked == 0 ? 1 : 0;
          }
        }, {
          key: "onAssociarMateriais",
          value: function onAssociarMateriais() {
            this.toggleAll = false;

            for (var index = 0; index < this.materiaisLista.length; index++) {
              if (this.materiaisLista[index].checked === 1) {
                var material = {
                  codClasse: this.materiaisLista[index].codClasse,
                  codMaterial: this.materiaisLista[index].codigoMaterial,
                  nomeMaterial: this.materiaisLista[index].descricao
                };
                this.materialAssociado.emit(material);
                this.materiaisLista[index].checked = 0;
              }
            }
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha) {
            var resetClasse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (resetClasse) {
              this.form.controls.codClasse.reset();
              this.form.controls.codClasse.setValue(null);
            }

            this.form.controls.codClasse.enable();
            this.form.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.form.controls.codClasse.updateValueAndValidity();
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.disable();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.codMaterial.updateValueAndValidity();
            this.filteredClasses = this.classes.filter(function (value) {
              return value.idLinha == codLinha;
            });
          }
        }, {
          key: "onChangeClasse",
          value: function onChangeClasse(codClasse) {
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.enable();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.codMaterial.updateValueAndValidity();
            this.getMateriais(codClasse);
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(codClasse) {
            var _this2 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              this.materiaisLoader = true;
              this.materiais = [];
              this.comercialService.getMateriais({
                codClasse: codClasse,
                situacao: 'A'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this2.materiaisLoader = false;
              })).subscribe(function (response) {
                if (response.success === true) {
                  _this2.materiais = response.data;

                  _this2.materiais.unshift({
                    codigoMaterial: 0,
                    codigoDescricaoMaterial: 'EXIBIR TODOS'
                  });

                  _this2.form.controls.codMaterial.setValue(0);
                } else {
                  _this2.pnotifyService.error();
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this2.pnotifyService.error(error.error.mensagem);
                } else {
                  _this2.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "setLinhaSelecionada",
          value: function setLinhaSelecionada(codLinha) {
            this.form.controls.codLinha.setValue(codLinha);
            this.onChangeLinha(codLinha, false);
          }
        }, {
          key: "setClasseSelecionada",
          value: function setClasseSelecionada(codClasse) {
            this.form.controls.codClasse.setValue(codClasse);
            this.onChangeClasse(codClasse);
            this.materiaisLista = [];
          }
        }]);

        return ComercialCadastrosMateriaisTemplatesAssociacoesComponent;
      }();

      ComercialCadastrosMateriaisTemplatesAssociacoesComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]
        }];
      };

      ComercialCadastrosMateriaisTemplatesAssociacoesComponent.propDecorators = {
        linhas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['linhas']
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['classes']
        }],
        linhaSelecionada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['linhaSelecionada']
        }],
        classeSelecionada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['classeSelecionada']
        }],
        loaderNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['loaderNavbar']
        }],
        materialAssociado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['materialAssociado']
        }]
      };
      ComercialCadastrosMateriaisTemplatesAssociacoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-templates-associacoes',
        template: _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]])], ComercialCadastrosMateriaisTemplatesAssociacoesComponent);
      /***/
    },

    /***/
    "FrF2":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/templates/material-principal/material-principal.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FrF2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2\">\n  <div class=\"col mt-auto\">\n    <div class=\"mtc-title mb-0\">Pesquisar material principal</div>\n  </div>\n  <div class=\"col\">\n    <div class=\"d-flex justify-content-end\">\n      <button\n        type=\"button\"\n        class=\"btn btn-sm btn-outline-secondary\"\n        (click)=\"onFilter()\"\n        [disabled]=\"searching === true\">\n        <i class=\"fas fa-search\"></i>\n        <span>Pesquisar</span>\n      </button>\n    </div>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-6\">\n        <label for=\"codLinha\">Linha</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"linhas\"\n          formControlName=\"codLinha\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codLinha\"\n          bindLabel=\"descricao\"\n          bindValue=\"id\"\n          (change)=\"onChangeLinha($event.id)\">\n        </ng-select>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <label for=\"codClasse\">Classe</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"filteredClasses\"\n          formControlName=\"codClasse\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codClasse\"\n          bindLabel=\"nomeClasse\"\n          bindValue=\"idClasse\"\n          (change)=\"onChangeClasse($event.idClasse)\">\n        </ng-select>\n      </div>\n    </div>\n      <div class=\"form-row\">\n      <div class=\"form-group col-lg-12\">\n        <label for=\"codMaterial\">Material</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"materiais\"\n          formControlName=\"codMaterial\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codMaterial\"\n          bindLabel=\"codigoDescricaoMaterial\"\n          bindValue=\"codigoMaterial\"\n          [loading]=\"materiaisLoader\"\n          loadingText=\"Carregando...\">\n        </ng-select>\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<div *ngIf=\"materiaisLista.length > 0\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mtc-title\">Selecione o material principal</div>\n      <custom-table [config]=\"tableConfigMateriais\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\" style=\"width: 5%\"></th>\n            <th scope=\"col\" style=\"width: 95%\">Material</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let material of materiaisLista\" [class.table-active]=\"material.codigoMaterial == codMaterialSelecionado\">\n            <td class=\"text-center\" style=\"width: 5%\">\n              <btn-icon\n                [icon]=\"material.codigoMaterial == codMaterialSelecionado ? 'fas fa-check-square' : 'far fa-square'\"\n                size=\"small\"\n                (click)=\"onCheckMaterial(material)\">\n              </btn-icon>\n            </td>\n            <td\n              class=\"hover\"\n              style=\"width: 95%\"\n              (click)=\"onCheckMaterial(material)\">\n              {{ material.codigoDescricaoMaterial | uppercase }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"searching === true\">\n  <div class=\"col\">\n    <message\n      icon=\"fas fa-cog fa-spin\"\n      text=\"Estamos pesquisando os materiais para você...\">\n    </message>\n  </div>\n</div>\n<div *ngIf=\"searching === false\">\n  <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\n    <div class=\"col\">\n      <message\n        icon=\"fas fa-box-open\"\n        text=\"Nenhuma informação encontrada\">\n      </message>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\n    <div class=\"col\">\n      <message\n        icon=\"fas fa-search\"\n        text=\"Preecha os campos acima para pesquisar materiais\">\n      </message>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "GaHy":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/templates/material-principal/material-principal.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent */

    /***/
    function GaHy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent", function () {
        return ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./material-principal.component.html */
      "FrF2");
      /* harmony import */


      var _material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./material-principal.component.scss */
      "fEJ3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // Services


      var ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent(formBuilder, pnotifyService, comercialService) {
          _classCallCheck(this, ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent);

          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.comercialService = comercialService;
          this.linhas = [];
          this.classes = [];
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.materialPrincipal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.filteredClasses = [];
          this.materiais = [];
          this.searching = false;
          this.firstSearch = false;
          this.materiaisLista = [];
          this.materiaisListaLoaded = false;
          this.materiaisListaEmpty = false;
          this.codMaterialSelecionado = null;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(events) {
            if (events.limparMaterialSelecionado && events.limparMaterialSelecionado.currentValue === true) {
              this.setMaterialSelecionado(null);
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var _this3 = this;

            if (this.form.valid) {
              this.loaderNavbar.emit(true);
              this.searching = true;
              this.materiaisLista = [];
              this.materiaisListaLoaded = false;
              this.materiaisListaEmpty = false;
              var params = {
                codClasse: this.form.value.codClasse
              };

              if (this.form.value.codMaterial !== 0) {
                Object.assign(params, {
                  codMaterial: this.form.value.codMaterial
                });
              }

              this.comercialService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this3.firstSearch = true;
                _this3.searching = false;

                _this3.loaderNavbar.emit(false);

                _this3.materiaisListaLoaded = true;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this3.materiaisLista = response.data;

                  if (_this3.materiaisLista.length > 9) {
                    _this3.tableConfigMateriais.fixedHeader = true;
                  } else {
                    _this3.tableConfigMateriais.fixedHeader = false;
                  }
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this3.pnotifyService.error(response.mensagem);

                  _this3.materiaisListaEmpty = true;
                } else {
                  _this3.pnotifyService.error();

                  _this3.materiaisListaEmpty = true;
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this3.pnotifyService.error(error.error.mensagem);
                } else {
                  _this3.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(material) {
            this.setMaterialSelecionado(material.codigoMaterial);
            this.materialPrincipal.emit(material);
          }
        }, {
          key: "setMaterialSelecionado",
          value: function setMaterialSelecionado(codMaterial) {
            this.codMaterialSelecionado = codMaterial;
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha) {
            this.form.controls.codClasse.reset();
            this.form.controls.codClasse.setValue(null);
            this.form.controls.codClasse.enable();
            this.form.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.form.controls.codClasse.updateValueAndValidity();
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.disable();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.codMaterial.updateValueAndValidity();
            this.filteredClasses = this.classes.filter(function (value) {
              return value.idLinha == codLinha;
            });
          }
        }, {
          key: "onChangeClasse",
          value: function onChangeClasse(codClasse) {
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.enable();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.codMaterial.updateValueAndValidity();
            this.getMateriais(codClasse);
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(codClasse) {
            var _this4 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              this.materiaisLoader = true;
              this.materiais = [];
              this.comercialService.getMateriais({
                codClasse: codClasse
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this4.materiaisLoader = false;
              })).subscribe(function (response) {
                if (response.success === true) {
                  _this4.materiais = response.data;

                  _this4.materiais.unshift({
                    codigoMaterial: 0,
                    codigoDescricaoMaterial: 'EXIBIR TODOS'
                  });

                  _this4.form.controls.codMaterial.setValue(0);
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
            }
          }
        }]);

        return ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent;
      }();

      ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]
        }];
      };

      ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent.propDecorators = {
        linhas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['linhas']
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['classes']
        }],
        limparMaterialSelecionado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['limparMaterialSelecionado']
        }],
        loaderNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['loaderNavbar']
        }],
        materialPrincipal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['materialPrincipal']
        }]
      };
      ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-templates-material-principal',
        template: _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]])], ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent);
      /***/
    },

    /***/
    "Jz99":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/templates/associacoes/associacoes.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jz99(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvdGVtcGxhdGVzL2Fzc29jaWFjb2VzL2Fzc29jaWFjb2VzLmNvbXBvbmVudC5zY3NzIn0= */";
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
    "fEJ3":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/templates/material-principal/material-principal.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fEJ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvdGVtcGxhdGVzL21hdGVyaWFsLXByaW5jaXBhbC9tYXRlcmlhbC1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "nXSr":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/templates/associacoes/associacoes.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nXSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"linhas.length > 0 && classes.length > 0\">\n  <div class=\"row mb-2\">\n    <div class=\"col mt-auto\">\n      <div class=\"mtc-title mb-0\">Pesquisar por materiais para associação</div>\n    </div>\n    <div class=\"col\">\n      <div class=\"d-flex justify-content-end\">\n        <button\n          type=\"button\"\n          class=\"btn btn-sm btn-outline-secondary\"\n          (click)=\"onFilter()\"\n          [disabled]=\"searching === true\">\n          <i class=\"fas fa-search\"></i>\n          <span>Pesquisar</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-6\">\n          <label for=\"codLinha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            formControlName=\"codLinha\"\n            [virtualScroll]=\"true\"\n            labelForId=\"codLinha\"\n            bindLabel=\"descricao\"\n            bindValue=\"id\"\n            (change)=\"onChangeLinha($event.id)\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-6\">\n          <label for=\"codClasse\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"filteredClasses\"\n            formControlName=\"codClasse\"\n            [virtualScroll]=\"true\"\n            labelForId=\"codClasse\"\n            bindLabel=\"nomeClasse\"\n            bindValue=\"idClasse\"\n            (change)=\"onChangeClasse($event.idClasse)\">\n          </ng-select>\n        </div>\n        </div>\n        <div class=\"form-row\">\n        <div class=\"form-group col-lg-12\">\n          <label for=\"codMaterial\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"materiais\"\n            formControlName=\"codMaterial\"\n            [virtualScroll]=\"true\"\n            labelForId=\"codMaterial\"\n            bindLabel=\"codigoDescricaoMaterial\"\n            bindValue=\"codigoMaterial\"\n            [loading]=\"materiaisLoader\"\n            loadingText=\"Carregando...\">\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div *ngIf=\"materiaisLista.length > 0\">\n    <div class=\"row mb-2\">\n      <div class=\"col mt-auto\">\n        <div class=\"mtc-title mb-0\">Seleção de materiais</div>\n      </div>\n      <div class=\"col\">\n        <div class=\"d-flex justify-content-end\">\n          <button\n            type=\"button\"\n            class=\"btn btn-sm btn-outline-primary\"\n            (click)=\"onAssociarMateriais()\"\n            [disabled]=\"searching === true\">\n            <i class=\"fas fa-exchange-alt\"></i>\n            <span>Associar</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <custom-table [config]=\"tableConfigMateriais\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center\"\n                style=\"width: 5%\">\n                <btn-icon\n                  [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                  size=\"small\"\n                  (click)=\"onToggleAll()\">\n                </btn-icon>\n              </th>\n              <th scope=\"col\" style=\"width: 95%\">Material</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let material of materiaisLista; let i = index;\">\n              <td class=\"text-center\" style=\"width: 5%\">\n                <btn-icon\n                  [icon]=\"material.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                  size=\"small\"\n                  (click)=\"onCheckMaterial(i, material)\">\n                </btn-icon>\n              </td>\n              <td\n                class=\"hover\"\n                style=\"width: 95%\"\n                (click)=\"onCheckMaterial(i, material)\">\n                {{ material.codigoDescricaoMaterial | uppercase }}\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"searching === true\">\n    <div class=\"col\">\n      <message\n        icon=\"fas fa-cog fa-spin\"\n        text=\"Estamos pesquisando os materiais para você...\">\n      </message>\n    </div>\n  </div>\n  <div *ngIf=\"searching === false\">\n    <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\n      <div class=\"col\">\n        <message\n          icon=\"fas fa-box-open\"\n          text=\"Nenhuma informação encontrada\">\n        </message>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\n      <div class=\"col\">\n        <message\n          icon=\"fas fa-search\"\n          text=\"Preecha os campos acima para pesquisar materiais\">\n        </message>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944-es5.js.map