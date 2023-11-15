(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-cross-sell-cross-sell-module"], {
    /***/
    "7AYN":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/formulario/formulario.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvY3Jvc3Mtc2VsbC9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "ExJ7":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/cross-sell/lista/lista.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ExJ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cross-Sell de materiais\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"material\">\r\n                <span class=\"mr-1\">Material</span>\r\n                <ng-template #tooltipLabelMaterialTemplate>\r\n                  <p class=\"text-nowrap mb-0\">Código</p>\r\n                  <p class=\"text-nowrap mb-0\">do material</p>\r\n                </ng-template>\r\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelMaterialTemplate\" container=\"body\"></i>\r\n              </label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"material\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"0\">Inativos</option>\r\n                <option value=\"1\">Ativos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center hover\">\r\n              <thead-sorter\r\n                value=\"Código \"\r\n                [active]=\"orderBy == 'codMaterial'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codMaterial')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\">\r\n              <thead-sorter\r\n                value=\"Material\"\r\n                [active]=\"orderBy == 'nomeMaterial'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeMaterial')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Usuário cadastro</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let crossSell of dados; let i = index;\" [class.table-active]=\"crossSell.codMaterial == crossSellSelecionada.codMaterial && showDetailPanel\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(crossSell)\"\r\n              (click)=\"onDetails(crossSell)\">\r\n              {{ crossSell.codMaterial }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(crossSell)\">\r\n              {{ crossSell.nomeMaterial | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(crossSell)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"crossSell.nomeUsuario === null\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"crossSell.nomeUsuario !== null\">\r\n                {{ crossSell.nomeUsuario | uppercase }}\r\n              </span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <span *ngIf=\"crossSell.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, crossSell)\">\r\n                  <i class=\"fas fa-toggle-off\"></i>\r\n                </button>\r\n              </span>\r\n              <span *ngIf=\"crossSell.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, crossSell)\">\r\n                  <i class=\"fas fa-toggle-on\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(crossSell)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"materiais.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código</th>\r\n              <th scope=\"col\">Material</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiais\">\r\n              <td class=\"text-center\">{{ material.codMaterial }}</td>\r\n              <td>{{ material.nomeMaterial | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "FFK3":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/formulario/formulario.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisCrossSellFormularioComponent */

    /***/
    function FFK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisCrossSellFormularioComponent", function () {
        return ComercialCadastrosMateriaisCrossSellFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "ar0/");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "7AYN");
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


      var _cross_sell_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../cross-sell.service */
      "e7LK");
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
      "FOez"); // ng-brazil
      // Services


      var ComercialCadastrosMateriaisCrossSellFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisCrossSellFormularioComponent(activatedRoute, router, location, formBuilder, materiaisCrossSellService, pnotifyService, atividadesService, titleService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosMateriaisCrossSellFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.materiaisCrossSellService = materiaisCrossSellService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_8__["MASKS"];
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.formChanged = false;
          this.showMateriais = true;
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.toggleAll = false;
          this.searching = false;
          this.materiaisLista = [];
          this.materiaisListaLoaded = false;
          this.materiaisListaEmpty = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisCrossSellFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
            this.setFormBuilder();
            this.titleService.setTitle('Cadastro de cross-sell de materiais');
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
                _this.appTitle = 'Editar cross-sell de materiais';
                _this.action = 'update';
              } else {
                _this.appTitle = 'Nova cross-sell de materiais';
                _this.action = 'create';
              }

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Cross-Sell de materiais',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/materiais/cross-sell/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this2 = this;

            this.materiaisCrossSellService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
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
            var resolver = this.activatedRoute.snapshot.data.detalhes;

            if (resolver.success === true) {
              var detalhes = resolver.data;
              this.form = this.formBuilder.group({
                codCrossSell: [detalhes.codCrossSell],
                codLinha: [detalhes.codLinha],
                codClasse: [detalhes.codClasse],
                codMaterial: [{
                  value: detalhes.codMaterial,
                  disabled: true
                }],
                nomeMaterial: [{
                  value: detalhes.nomeMaterial,
                  disabled: true
                }],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                assocMateriais: this.formBuilder.array([])
              });
              this.setMateriais(detalhes.materiais);
            } else {
              this.pnotifyService.error();
              this.location.back();
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
           * */

        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(material, manipulateForm, source) {
            var _this3 = this;

            if (this.checkMaterialExists(material) === false) {
              this.assocMateriais.push(this.formBuilder.group({
                codAssociacao: [material.codAssociacao],
                codMaterial: [material.codMaterial],
                nomeMaterial: [material.nomeMaterial],
                source: [source]
              }));

              if (this.form.value.assocMateriais.length > 9) {
                if (this.tableConfigAssocMateriais.fixedHeader === false) {
                  this.showMateriais = false;
                  this.tableConfigAssocMateriais.fixedHeader = true;
                  setTimeout(function () {
                    _this3.showMateriais = true;
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
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index) {
            var _this4 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this4.deleteMaterial(index) : null;
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMaterial",
          value: function deleteMaterial(index) {
            var _this5 = this;

            if (this.form.value.assocMateriais[index].source === 'user') {
              this.assocMateriais.removeAt(index);
            } else if (this.form.value.assocMateriais[index].source === 'application') {
              this.loaderNavbar = true;
              this.activatedRoute.params.subscribe(function (params) {
                _this5.materiaisCrossSellService.desassociaMaterial(params.id, _this5.form.value.assocMateriais[index].codAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this5.loaderNavbar = false;
                })).subscribe(function (response) {
                  if (response.success) {
                    _this5.assocMateriais.removeAt(index);
                  } else {
                    _this5.pnotifyService.error();
                  }
                }, function (error) {
                  if (error.error.hasOwnProperty('mensagem') && (error.mensagem !== null || error.mensagem !== '')) {
                    _this5.pnotifyService.error(error.error.mensagem);
                  } else {
                    _this5.pnotifyService.error();
                  }
                });
              });
            }

            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "onSelectTabMaisVendidos",
          value: function onSelectTabMaisVendidos() {
            if (this.materiaisListaLoaded && this.materiaisLista.length > 0) return;
            this.onFilterMateriaisMaisVendidos();
          }
        }, {
          key: "onFilterMateriaisMaisVendidos",
          value: function onFilterMateriaisMaisVendidos() {
            var _this6 = this;

            if (this.form.getRawValue().codMaterial !== null) {
              this.searching = true;
              var params = {
                codMaterial: this.form.getRawValue().codMaterial
              };
              this.materiaisCrossSellService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this6.searching = false;
                _this6.loaderNavbar = false;
                _this6.materiaisListaLoaded = true;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this6.materiaisLista = response.data.map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });

                  if (_this6.materiaisLista.length > 9) {
                    _this6.tableConfigMateriais.fixedHeader = true;
                  } else {
                    _this6.tableConfigMateriais.fixedHeader = false;
                  }
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(response.mensagem);

                  _this6.materiaisListaEmpty = true;
                } else {
                  _this6.pnotifyService.error();

                  _this6.materiaisListaEmpty = true;
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
                  codMaterial: this.materiaisLista[index].codigoMaterial,
                  nomeMaterial: this.materiaisLista[index].descricao
                };
                this.onAddMaterial(material, true, 'user');
                this.materiaisLista[index].checked = 0;
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
            var _this7 = this;

            if (this.action === 'update' && this.form.pristine) {
              this.location.back();
            } else {
              if (this.checkFormValidation() && this.form.valid) {
                if (this.form.value.assocMateriais.length > 0) {
                  this.loaderNavbar = true;
                  this.submittingForm = true;
                  this.materiaisCrossSellService.save(this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this7.loaderNavbar = false;
                    _this7.submittingForm = false;
                  })).subscribe(function (response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this7.form.reset();

                      _this7.formChanged = false;

                      _this7.pnotifyService.success(response.mensagem);

                      _this7.activatedRoute.params.subscribe(function (params) {
                        var navigateTo;

                        if (params.hasOwnProperty('id')) {
                          navigateTo = '../../lista';
                        } else {
                          navigateTo = '../lista';
                        }

                        _this7.router.navigate([navigateTo], {
                          relativeTo: _this7.activatedRoute
                        });
                      });
                    } else if (response.hasOwnProperty('success') && response.success === false) {
                      _this7.pnotifyService.error(response.mensagem);
                    } else {
                      _this7.pnotifyService.error();
                    }
                  }, function (error) {
                    _this7.pnotifyService.error();
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
          key: "onLimparMaterialPrincipal",
          value: function onLimparMaterialPrincipal() {
            var _this8 = this;

            this.limparMaterialPrincipal = true;
            this.onInput();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.nomeMaterial.setValue(null);
            this.materiaisLista = [];
            setTimeout(function () {
              _this8.limparMaterialPrincipal = false;
            }, 100);
          }
        }, {
          key: "materialPrincipal",
          value: function materialPrincipal(material) {
            this.onInput();
            this.form.controls.codLinha.setValue(material.codLinha);
            this.form.controls.codClasse.setValue(material.codClasse);
            this.form.controls.codMaterial.setValue(material.codigoMaterial);
            this.form.controls.nomeMaterial.setValue(material.descricao);
            this.onFilterMateriaisMaisVendidos();
          }
        }, {
          key: "materialAssociado",
          value: function materialAssociado(material) {
            this.onAddMaterial(material, true, 'user');
          }
        }]);

        return ComercialCadastrosMateriaisCrossSellFormularioComponent;
      }();

      ComercialCadastrosMateriaisCrossSellFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _cross_sell_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisCrossSellService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosMateriaisCrossSellFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-cross-sell-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _cross_sell_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisCrossSellService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]])], ComercialCadastrosMateriaisCrossSellFormularioComponent);
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
    "Glss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/lista/lista.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisCrossSellListaComponent */

    /***/
    function Glss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisCrossSellListaComponent", function () {
        return ComercialCadastrosMateriaisCrossSellListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "ExJ7");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "auKB");
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


      var _cross_sell_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../cross-sell.service */
      "e7LK");
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


      var ComercialCadastrosMateriaisCrossSellListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisCrossSellListaComponent(activatedRoute, router, formBuilder, materiaisCrossSellService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosMateriaisCrossSellListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.materiaisCrossSellService = materiaisCrossSellService;
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
          this.orderBy = 'nomeMaterial';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.materiais = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisCrossSellListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Cross-Sell de materiais');
            this.onDetailPanelEmitter();
            this.setCrossSellSelecionada();
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
                descricao: 'Cross-Sell de materiais'
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
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this11 = this;

            var formValue = {
              material: null,
              codSituacao: '',
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
          key: "setCrossSellSelecionada",
          value: function setCrossSellSelecionada() {
            this.crossSellSelecionada = {
              codCrossSell: null,
              codMaterial: null,
              nomeMaterial: null,
              codUsuario: null,
              nomeUsuario: null,
              materiais: []
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

            params.pagina = this.form.value.pagina;
            params.registros = this.form.value.registros;
            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this12 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.materiaisCrossSellService.getListaCrossSell(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this12.loaderNavbar = false;
              _this12.dadosLoaded = true;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this12.dados = response.data;
                _this12.totalItems = _this12.dados[0].total;
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
          value: function classStatusBorder(crossSell) {
            var borderClass;

            if (crossSell.codSituacao === 0) {
              borderClass = 'border-danger';
            } else if (crossSell.codSituacao === 1) {
              borderClass = 'border-success';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.detailPanelService.hide();
              this.form.value.pagina = event.page;
              this.onFilter();
              this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
          }
        }, {
          key: "onDetails",
          value: function onDetails(crossSell) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "Associa\xE7\xF5es (".concat(crossSell.nomeMaterial, ")");
            this.setCrossSellSelecionada();
            this.crossSellSelecionada = crossSell;
            this.materiais = [];
            this.materiaisCrossSellService.getAssociacoesMateriais(crossSell.codCrossSell).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              setTimeout(function () {
                _this13.loaderNavbar = false;
              }, 500);
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                _this13.detailPanelService.loadedFinished(false);

                _this13.materiais = response.data;
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
          value: function onEdit(crossSell) {
            this.router.navigate(['../editar', crossSell.codCrossSell], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, crossSell) {
            var _this14 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this14.activateCrossSell(index, crossSell) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this14.loaderNavbar = false;
            })).subscribe(function (success) {
              _this14.pnotifyService.success();

              _this14.refreshMainData(crossSell);
            }, function (error) {
              _this14.pnotifyService.error();

              _this14.dados[index].codSituacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateCrossSell",
          value: function activateCrossSell(index, crossSell) {
            this.loaderNavbar = true;
            this.dados[index].codSituacao = 1;
            return this.materiaisCrossSellService.activateCrossSell(crossSell.codCrossSell);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, crossSell) {
            var _this15 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this15.inactivateCrossSell(index, crossSell) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this15.loaderNavbar = false;
            })).subscribe(function (success) {
              _this15.pnotifyService.success();

              _this15.refreshMainData(crossSell);
            }, function (error) {
              _this15.pnotifyService.error();

              _this15.dados[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateCrossSell",
          value: function inactivateCrossSell(index, crossSell) {
            this.loaderNavbar = true;
            this.dados[index].codSituacao = 0;
            return this.materiaisCrossSellService.inactivateCrossSell(crossSell.codCrossSell);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(crossSell) {
            for (var i = 0; i < this.dados.length; i++) {
              if (crossSell.codCrossSell === this.dados[i].codCrossSell) {
                this.dados[i].codSituacao = crossSell.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosMateriaisCrossSellListaComponent;
      }();

      ComercialCadastrosMateriaisCrossSellListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _cross_sell_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisCrossSellService"]
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

      ComercialCadastrosMateriaisCrossSellListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosMateriaisCrossSellListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-cross-sell-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _cross_sell_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisCrossSellService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosMateriaisCrossSellListaComponent);
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
    "ar0/":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/cross-sell/formulario/formulario.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ar0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n        <comercial-cadastros-materiais-templates-material-principal\r\n          [linhas]=\"linhas\"\r\n          [classes]=\"classes\"\r\n          [limparMaterialSelecionado]=\"limparMaterialPrincipal\"\r\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n          (materialPrincipal)=\"materialPrincipal($event)\">\r\n        </comercial-cadastros-materiais-templates-material-principal>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <form [formGroup]=\"form\">\r\n        <div [hidden]=\"form.getRawValue().codMaterial === null\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Principal material da associação</div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"form.getRawValue().codMaterial != null\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  (click)=\"onLimparMaterialPrincipal()\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                  <span>Limpar</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codMaterial\">Cód. Material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"codMaterial\"\r\n                formControlName=\"codMaterial\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('codMaterial')\" message=\"Código é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-7\">\r\n              <label for=\"nomeMaterial\">Material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeMaterial\"\r\n                formControlName=\"nomeMaterial\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('nomeMaterial')\" message=\"Material é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\"\r\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"1\">Ativo</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"col\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div formArrayName=\"assocMateriais\">\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\">\r\n            <div class=\"col\">\r\n              <div class=\"mtc-title\">Materiais associados</div>\r\n              <custom-table [config]=\"tableConfigAssocMateriais\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n                    <th scope=\"col\" style=\"width: 5%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let material of assocMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td style=\"width: 95%\">\r\n                      {{ form.value.assocMateriais[i].codMaterial }} - {{ form.value.assocMateriais[i].nomeMaterial | uppercase }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        (click)=\"onDeleteMaterial(i)\">\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhuma associação encontrada\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6 border-left\">\r\n      <tabset>\r\n        <tab heading=\"Pesquisar materiais\">\r\n          <div class=\"p-3 border-left border-right border-bottom\">\r\n            <comercial-cadastros-materiais-templates-associacoes\r\n              [linhas]=\"linhas\"\r\n              [classes]=\"classes\"\r\n              [linhaSelecionada]=\"form.value.codLinha\"\r\n              [classeSelecionada]=\"form.value.codClasse\"\r\n              (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n              (materialAssociado)=\"materialAssociado($event)\">\r\n            </comercial-cadastros-materiais-templates-associacoes>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Materiais mais vendidos\" (selectTab)=\"onSelectTabMaisVendidos()\">\r\n          <div class=\"p-3 border-left border-right border-bottom\">\r\n            <div *ngIf=\"form.getRawValue().codMaterial !== null && materiaisLista.length > 0\">\r\n              <div class=\"row mb-2\">\r\n                <div class=\"col mt-auto\">\r\n                  <div class=\"mtc-title mb-0\">Seleção de materiais</div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <div class=\"d-flex justify-content-end\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn btn-sm btn-outline-primary\"\r\n                      (click)=\"onAssociarMateriais()\"\r\n                      [disabled]=\"searching === true\">\r\n                      <i class=\"fas fa-exchange-alt\"></i>\r\n                      <span>Associar</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <custom-table [config]=\"tableConfigMateriais\">\r\n                    <ng-template #thead let-thead>\r\n                      <tr>\r\n                        <th\r\n                          scope=\"col\"\r\n                          class=\"text-center\"\r\n                          style=\"width: 5%\">\r\n                          <btn-icon\r\n                            [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\r\n                            size=\"small\"\r\n                            (click)=\"onToggleAll()\">\r\n                          </btn-icon>\r\n                        </th>\r\n                        <th scope=\"col\" style=\"width: 80%\">Material</th>\r\n                        <th scope=\"col\" class=\"text-center\" style=\"width: 15%\">Núm. vendas</th>\r\n                      </tr>\r\n                    </ng-template>\r\n                    <ng-template #tbody let-tbody>\r\n                      <tr *ngFor=\"let material of materiaisLista; let i = index;\">\r\n                        <td class=\"text-center\" style=\"width: 5%\">\r\n                          <btn-icon\r\n                            [icon]=\"material.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                            size=\"small\"\r\n                            (click)=\"onCheckMaterial(i, material)\">\r\n                          </btn-icon>\r\n                        </td>\r\n                        <td\r\n                          class=\"hover\"\r\n                          style=\"width: 80%\"\r\n                          (click)=\"onCheckMaterial(i, material)\">\r\n                          {{ material.codigoDescricaoMaterial | uppercase }}\r\n                        </td>\r\n                        <td\r\n                          class=\"text-center hover\"\r\n                          style=\"width: 15%\"\r\n                          (click)=\"onCheckMaterial(i, material)\">\r\n                          {{ material.nrVendas }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </custom-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"searching === true\">\r\n              <div class=\"col\">\r\n                <message\r\n                  icon=\"fas fa-cog fa-spin\"\r\n                  text=\"Estamos pesquisando os materiais para você...\">\r\n                </message>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"searching === false\">\r\n              <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\r\n                <div class=\"col\">\r\n                  <message\r\n                    icon=\"fas fa-box-open\"\r\n                    text=\"Nenhuma informação encontrada\">\r\n                  </message>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"form.getRawValue().codMaterial === null || materiaisLista.length === 0\">\r\n                <div class=\"col\">\r\n                  <message\r\n                    icon=\"fas fa-exclamation-circle\"\r\n                    text=\"Selecione um material principal ao lado para pesquisar os materiais mais vendidos\">\r\n                  </message>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "auKB":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/lista/lista.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function auKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvY3Jvc3Mtc2VsbC9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "b4Zi":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/cross-sell.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisCrossSellModule */

    /***/
    function b4Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisCrossSellModule", function () {
        return ComercialCadastrosMateriaisCrossSellModule;
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


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
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


      var _cross_sell_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./cross-sell-routing.module */
      "u67w");
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
      "Glss");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "FFK3");
      /* harmony import */


      var _cross_sell_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cross-sell.service */
      "e7LK"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialCadastrosMateriaisCrossSellModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisCrossSellModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisCrossSellModule);
      });

      ComercialCadastrosMateriaisCrossSellModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisCrossSellListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosMateriaisCrossSellFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], _cross_sell_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosMateriaisCrossSellRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _cross_sell_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosMateriaisCrossSellService"]]
      })], ComercialCadastrosMateriaisCrossSellModule);
      /***/
    },

    /***/
    "e7LK":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/cross-sell.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisCrossSellService */

    /***/
    function e7LK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisCrossSellService", function () {
        return ComercialCadastrosMateriaisCrossSellService;
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


      var ComercialCadastrosMateriaisCrossSellService = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisCrossSellService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosMateriaisCrossSellService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/cadastros/materiais/cross-sell";
        }

        _createClass(ComercialCadastrosMateriaisCrossSellService, [{
          key: "getListaCrossSell",
          value: function getListaCrossSell(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista-materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAssociacoesMateriais",
          value: function getAssociacoesMateriais(codCrossSell) {
            return this.http.get("".concat(this.API, "/associacoes/").concat(codCrossSell)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codCrossSell) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codCrossSell)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "saveCrossSell",
          value: function saveCrossSell(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "updateCrossSell",
          value: function updateCrossSell(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codCrossSell !== null) {
              return this.updateCrossSell(record);
            }

            return this.saveCrossSell(record);
          }
        }, {
          key: "activateCrossSell",
          value: function activateCrossSell(codCrossSell) {
            return this.http.post("".concat(this.API, "/ativar"), codCrossSell).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "inactivateCrossSell",
          value: function inactivateCrossSell(codCrossSell) {
            return this.http.post("".concat(this.API, "/inativar"), codCrossSell).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "desassociaMaterial",
          value: function desassociaMaterial(codCrossSell, codAssociacao) {
            return this.http["delete"]("".concat(this.API, "/desassociar/").concat(codCrossSell, "/").concat(codAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
          }
        }]);

        return ComercialCadastrosMateriaisCrossSellService;
      }();

      ComercialCadastrosMateriaisCrossSellService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosMateriaisCrossSellService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialCadastrosMateriaisCrossSellService);
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
    "u67w":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/cross-sell-routing.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisCrossSellRoutingModule */

    /***/
    function u67w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisCrossSellRoutingModule", function () {
        return ComercialCadastrosMateriaisCrossSellRoutingModule;
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
      "z8f+");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "Glss");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "FFK3"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisCrossSellListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisCrossSellFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisCrossSellFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisCrossSellFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisCrossSellFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosMateriaisCrossSellRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisCrossSellRoutingModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisCrossSellRoutingModule);
      });

      ComercialCadastrosMateriaisCrossSellRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosMateriaisCrossSellRoutingModule);
      /***/
    },

    /***/
    "z8f+":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/cross-sell/formulario/formulario-resolver.guard.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisCrossSellFormularioResolverGuard */

    /***/
    function z8f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisCrossSellFormularioResolverGuard", function () {
        return ComercialCadastrosMateriaisCrossSellFormularioResolverGuard;
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


      var _cross_sell_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../cross-sell.service */
      "e7LK"); // Services


      var ComercialCadastrosMateriaisCrossSellFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisCrossSellFormularioResolverGuard(materiaisCrossSellService) {
          _classCallCheck(this, ComercialCadastrosMateriaisCrossSellFormularioResolverGuard);

          this.materiaisCrossSellService = materiaisCrossSellService;
        }

        _createClass(ComercialCadastrosMateriaisCrossSellFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.materiaisCrossSellService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                codCrossSell: null,
                codLinha: null,
                codClasse: null,
                codMaterial: null,
                nomeMaterial: null,
                codSituacao: null,
                materiais: []
              }
            });
          }
        }]);

        return ComercialCadastrosMateriaisCrossSellFormularioResolverGuard;
      }();

      ComercialCadastrosMateriaisCrossSellFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _cross_sell_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisCrossSellService"]
        }];
      };

      ComercialCadastrosMateriaisCrossSellFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_cross_sell_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisCrossSellService"]])], ComercialCadastrosMateriaisCrossSellFormularioResolverGuard);
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
//# sourceMappingURL=materiais-cross-sell-cross-sell-module-es5.js.map