(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-producao-telas-pedidos-producao-telas-module"], {
    /***/
    "+Sdq":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/material/calculo/calculo.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent */

    /***/
    function Sdq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calculo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calculo.component.html */
      "aIse");
      /* harmony import */


      var _calculo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calculo.component.scss */
      "Z8pR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../formulario.service */
      "8O77");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // ngx-bootstrap
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent(formBuilder, bsModalRef, pnotifyService, confirmModalService, formularioService, pedidosProducaoTelas) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent);

          this.formBuilder = formBuilder;
          this.bsModalRef = bsModalRef;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.formularioService = formularioService;
          this.pedidosProducaoTelas = pedidosProducaoTelas;
          this.calculo = {
            index: null,
            tipoCalculo: 0,
            tonelada: 0,
            qtde: 0,
            valorUnitario: 0,
            valorItem: 0,
            aliquotaIpi: 0,
            valorIpi: 0,
            aliquotaIcms: 0,
            valorIcms: 0,
            valorIcmsSt: 0,
            valorTotal: 0
          };
          this.currencyMaskOptions = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ','
          };
          this.resultCaculo = [];
          this.showImpostos = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
            this.setUnidadeCalculo();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            var valor = this.material.valor !== 0 ? this.material.valor : 0;
            this.form = this.formBuilder.group({
              unidadeCalculo: ['m²'],
              quantidade: [this.material.quantidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              preco: [valor, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              medida: [this.material.medida1]
            }); // this.setFormValidators();

            this.checkTotais();
          }
        }, {
          key: "setUnidadeCalculo",
          value: function setUnidadeCalculo() {
            this.resultCaculo = [];
            this.resetTotais();
            this.descQtde = '(Qtde m²)';
            this.descPreco = 'Preço por m²';
          }
        }, {
          key: "disabledUnidadeCalculo",
          value: function disabledUnidadeCalculo() {
            var isDisabled = null;

            if (this.tipoCalculo === 3 || this.tipoCalculo === 4 || this.tipoCalculo === 5) {
              isDisabled = true;
            }

            return isDisabled;
          }
        }, {
          key: "showInputMedida",
          value: function showInputMedida() {
            var show = false;

            if (this.tipoCalculo === 4) {
              show = true;
            }

            return show;
          }
        }, {
          key: "showInfoMetragem",
          value: function showInfoMetragem() {
            var show = false;

            if (this.tipoCalculo === 2 || this.tipoCalculo === 4) {
              show = true;
            }

            return show;
          }
        }, {
          key: "showInfoFatorMultiplo",
          value: function showInfoFatorMultiplo() {
            var show = false;

            if (this.tipoCalculo === 5) {
              show = true;
            }

            return show;
          }
        }, {
          key: "onCalcular",
          value: function onCalcular() {
            var _this = this;

            if (this.checkFormValidators() === false) {
              if (Math.floor(this.material.valorUnit * 100) / 100 > this.form.value.preco) {
                this.confirmModalService.showConfirm(null, 'Preço abaixo do mínimo', 'O preço informado está abaixo do valor mínimo. Deseja continuar mesmo assim?', 'Cancelar', 'Confirmar').subscribe(function (response) {
                  return response ? _this.postCalculoMaterial() : rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
                });
              } else {
                this.postCalculoMaterial();
              }
            }
          }
        }, {
          key: "checkFormValidators",
          value: function checkFormValidators() {
            var hasError = false;
            this.form.controls.quantidade.setErrors(null);
            this.form.controls.preco.setErrors(null);

            if (this.form.value.quantidade == 0) {
              this.form.controls.quantidade.setErrors({
                incorrect: true
              });
              hasError = true;
              this.pnotifyService.notice('Informe a quantidade para realizar o cálculo.');
            } else {
              if (this.tipoCalculo === 5) {
                var fatorMultiplo = 10;

                if (this.form.value.quantidade % fatorMultiplo !== 0) {
                  this.form.controls.quantidade.setErrors({
                    incorrect: true
                  });
                  hasError = true;
                  this.pnotifyService.notice("A quantidade tem que ser m\xFAltipla de ".concat(fatorMultiplo, "."));
                }
              }
            }

            if (this.form.value.preco == 0) {
              this.form.controls.preco.setErrors({
                incorrect: true
              });
              hasError = true;
              this.pnotifyService.notice('Informe o preço para realizar o cálculo.');
            }

            return hasError;
          }
        }, {
          key: "postCalculoMaterial",
          value: function postCalculoMaterial() {
            var _this2 = this;

            this.loaderModal = true;
            this.resetTotais();
            this.resultCaculo = [];
            var params = {
              codMaterial: this.material.codMaterial,
              quantidade: this.form.value.quantidade
            };
            console.log(params);
            this.pedidosProducaoTelas.getCalculoMaterial(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this2.loaderModal = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                if (response.data.length === 1) {
                  console.log(response.data);

                  _this2.calcularTotais(response.data[0]);
                } else {
                  _this2.resultCaculo = response.data;
                }
              }
            });
          }
        }, {
          key: "checkTotais",
          value: function checkTotais() {
            if (this.material.quantidade > 0) {
              this.calculo.tonelada = this.material.pesoEspecifico; // this.calculo.valorUnitario = this.material.valor;
              // this.calculo.valorItem = this.material.valorTotalOri;
              // this.calculo.valorIpi = this.material.valorIpi;
              // this.calculo.valorIcms = this.material.valorIcms;
              // this.calculo.valorIcmsSt = this.material.valorIcmsSt;
              // this.calculo.valorTotal = this.material.valorTotalOri;
            } // this.calculo.aliquotaIpi = this.material.percentualIpi;
            // this.calculo.aliquotaIcms = this.material.percentualIcms;

          }
        }, {
          key: "calcularTotais",
          value: function calcularTotais(data) {
            this.resetTotais();
            this.calculo.tonelada = data.Peso;
            this.calculo.qtde = this.form.value.quantidade; // this.calculo.valorUnitario = data.valorUnitario;
            // this.calculo.valorItem = data.valorItem;
            // this.calculo.aliquotaIpi = data.aliquotaIpi;
            // this.calculo.valorIpi = data.valorIpi;
            // this.calculo.aliquotaIcms = data.aliquotaIcms;
            // this.calculo.valorIcms = data.valorIcms;
            // this.calculo.valorIcmsSt = data.valorIcmsSt;
            // this.calculo.valorTotal = data.valorTotal;
            // this.calculoEmitter();
          }
        }, {
          key: "resetTotais",
          value: function resetTotais() {
            this.calculo = {
              index: null,
              tipoCalculo: 0,
              tonelada: 0,
              qtde: 0,
              valorUnitario: 0,
              valorItem: 0,
              aliquotaIpi: 0,
              valorIpi: 0,
              aliquotaIcms: 0,
              valorIcms: 0,
              valorIcmsSt: 0,
              valorTotal: 0
            };
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            var calculos = this.calculo;
            this.calculo.index = this.index;
            this.formularioService.calculoSubject.next(calculos);

            if (this.calculo.tonelada === 0) {
              this.confirmModalService.showConfirm(null, 'Cálculo não efetuado', 'O cálculo não foi efetuado, pois o material precisa ter altura, comprimento e peso, verifique no cadastro do material. Deseja continuar mesmo assim?', 'Cancelar', 'Confirmar').subscribe(function (response) {
                return response ? _this3.postCalculoMaterial() : rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
              });
            } else {
              this.postCalculoMaterial();
            }

            {} // this.formularioService.calculoSubject.next(calculos);

            this.onClose(); // this.addCalculo();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.bsModalRef.hide();
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
          key: "onShowImpostos",
          value: function onShowImpostos() {
            this.showImpostos = !this.showImpostos;
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent.propDecorators = {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['index']
        }],
        material: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['material']
        }],
        tipoCalculo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['tipoCalculo']
        }],
        codCliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['codCliente']
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario-modal-material-calculo',
        template: _raw_loader_calculo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioService"], _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent);
      /***/
    },

    /***/
    "/3kc":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/selecionar/selecionar.service.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService */

    /***/
    function kc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService;
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService = function ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService(pnotifyService) {
        _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService);

        this.pnotifyService = pnotifyService;
        this.pnotifyService.getPNotify();
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService);
      /***/
    },

    /***/
    "/OQ1":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/perdida/perdida.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OQ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\" *ngIf=\"dataCotacao\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-0 my-auto\">\n      COTAÇÃO #{{ dataCotacao.codCotacao }} / {{ dataCotacao.situacao.situacaoProposta | uppercase }}\n    </h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\" [disabled]=\"submittingForm === true\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body py-5\">\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row mb-4\">\n        <div class=\"form-group col-lg-6\">\n          <div class=\"mb-1 d-flex justify-content-between w-100\" style=\"height: 19px\">\n            <label class=\"my-auto\" for=\"codConcorrente\">Concorrente</label>\n            <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\n              <a\n                class=\"text-secondary\"\n                href=\"javascript:void(0)\"\n                (click)=\"onDetalhesConcorrente()\"\n                *ngIf=\"form.value.codConcorrente != null\">\n                <strong>Detalhes</strong>\n              </a>\n              <span class=\"mx-2\" *ngIf=\"form.value.codConcorrente != null\">|</span>\n              <a\n                class=\"text-primary\"\n                href=\"javascript:void(0)\"\n                [routerLink]=\"[getLinkAddConcorrente()]\"\n                target=\"_blank\">\n                <strong>Adicionar</strong>\n              </a>\n              <span class=\"mx-2\">|</span>\n              <btn-icon\n                icon=\"fas fa-redo-alt\"\n                size=\"small\"\n                class=\"mr-2\"\n                tooltip=\"Recarregar\"\n                (click)=\"onReloadConcorrentes()\">\n              </btn-icon>\n            </div>\n          </div>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"concorrentes\"\n            formControlName=\"codConcorrente\"\n            [virtualScroll]=\"true\"\n            bindLabel=\"nomeConcorrente\"\n            bindValue=\"codConcorrenteTid\"\n            [loading]=\"concorrentesLoader\"\n            loadingText=\"Carregando...\">\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"mtc-title\">Resumo do pedido</div>\n          <custom-table [config]=\"tableConfig\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" width=\"35%\">Material</th>\n                <th scope=\"col\" width=\"12%\" class=\"text-center\">Ton</th>\n                <th scope=\"col\" width=\"12%\" class=\"text-center\">Unit.</th>\n                <th scope=\"col\" width=\"12%\" class=\"text-center\">R$</th>\n                <th scope=\"col\" width=\"14%\" class=\"text-center\">Concorrente</th>\n                <th scope=\"col\" width=\"15%\">Depósito</th>\n              </tr>\n            </ng-template>\n            <div formArrayName=\"materiais\">\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let material of materiais.controls; let i = index\" [formGroupName]=\"i\">\n                  <td width=\"35%\" class=\"text-truncate\">\n                    {{ form.value.materiais[i].codMaterial }} - {{ form.value.materiais[i].nomeMaterial | uppercase }}\n                  </td>\n                  <td width=\"12%\" class=\"text-center\">{{ form.value.materiais[i].quantidade | number:'1.3-3' }} TON</td>\n                  <td width=\"12%\" class=\"text-center\">{{ form.value.materiais[i].valorUnit | currency:'BRL':symbol:'1.2-2' }}</td>\n                  <td width=\"12%\" class=\"text-center\">{{ form.value.materiais[i].valorTotal | currency:'BRL':symbol:'1.2-2' }}</td>\n                  <td width=\"14%\">\n                    <input\n                      type=\"text\"\n                      id=\"valorConcorrente\"\n                      class=\"form-control text-center\"\n                      formControlName=\"valorConcorrente\"\n                      currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\">\n                  </td>\n                  <td width=\"15%\" class=\"text-truncate\">{{ form.value.materiais[i].nomeDeposito | uppercase }}</td>\n                </tr>\n                <tr>\n                  <td width=\"35%\" class=\"text-right\">TOTAL</td>\n                  <td width=\"12%\" class=\"text-center\">{{ calcularTotais('quantidade') | number:'1.3-3' }} TON</td>\n                  <td width=\"12%\" class=\"text-center\"></td>\n                  <td width=\"12%\" class=\"text-center\">{{ calcularTotais('valor') | currency:'BRL':'symbol':'1.2-2' }}</td>\n                  <td width=\"14%\" class=\"text-center\">{{ calcularTotais('concorrente') | currency:'BRL':'symbol':'1.2-2' }}</td>\n                  <td width=\"15%\"></td>\n                </tr>\n              </ng-template>\n            </div>\n          </custom-table>\n        </div>\n      </div>\n    </form>\n    <div class=\"row mt-5\">\n      <div class=\"col\">\n        <span class=\"mtc-title mb-0 mr-2\">Cotação realizada para:</span>\n        <span>{{ dataCotacao.razaoSocial | uppercase }}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\"\n      class=\"btn btn-danger\"\n      (click)=\"onClose()\"\n      [disabled]=\"submittingForm === true\">\n      Fechar\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"onSubmit()\"\n      [disabled]=\"submittingForm === true\">\n      Enviar\n    </button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "1Ts5":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/perdida/perdida.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent */

    /***/
    function Ts5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_perdida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./perdida.component.html */
      "/OQ1");
      /* harmony import */


      var _perdida_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./perdida.component.scss */
      "GncS");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_cadastros_concorrentes_concorrentes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modules/comercial/cadastros/concorrentes/concorrentes.service */
      "9ua6");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../formulario.service */
      "8O77"); // ngx-bootstrap
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent(router, bsModalRef, formBuilder, pnotifyService, cotacoesService, concorrentesService, formularioService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent);

          this.router = router;
          this.bsModalRef = bsModalRef;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.cotacoesService = cotacoesService;
          this.concorrentesService = concorrentesService;
          this.formularioService = formularioService;
          this.tableConfig = {
            isFixed: true,
            border: false,
            small: false,
            hover: false,
            theme: {
              color: 'white'
            }
          };
          this.concorrentes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getConcorrentes();
            this.setFormBuilder();
          }
        }, {
          key: "getConcorrentes",
          value: function getConcorrentes() {
            var _this4 = this;

            this.concorrentes = [];
            this.concorrentesLoader = true;
            this.concorrentesService.getListaConcorrentes({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.concorrentesLoader = false;
            })).subscribe(function (response) {
              _this4.concorrentes = response.data;
            });
          }
        }, {
          key: "getLinkAddConcorrente",
          value: function getLinkAddConcorrente() {
            return '/comercial/cadastros/concorrentes/novo';
          }
        }, {
          key: "onReloadConcorrentes",
          value: function onReloadConcorrentes() {
            this.getConcorrentes();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              codConcorrente: [null],
              materiais: this.formBuilder.array([])
            });
            this.onAddMaterial(this.dataCotacao.carrinho);
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(materiais) {
            if (materiais.length > 0) {
              for (var i = 0; i < materiais.length; i++) {
                this.materiais.push(this.formBuilder.group({
                  idReservado: [materiais[i].idReservado],
                  codCotacao: [materiais[i].codCotacao],
                  codMaterial: [materiais[i].codMaterial],
                  nomeMaterial: [materiais[i].nomeMaterial],
                  quantidade: [materiais[i].quantidade],
                  valorUnit: [materiais[i].valorUnit],
                  valor: [materiais[i].valor],
                  percentualIpi: [materiais[i].percentualIpi],
                  valorIpi: [materiais[i].valorIpi],
                  percentualIcms: [materiais[i].percentualIcms],
                  valorIcms: [materiais[i].valorIcms],
                  valorIcmsSt: [materiais[i].valorIcmsSt],
                  valorConcorrente: [materiais[i].valorConcorrente],
                  tipoDesc: [materiais[i].tipoDesc],
                  valorDesc: [materiais[i].valorDesc],
                  percentualDesc: [materiais[i].percentualDesc],
                  valorTotalOri: [materiais[i].valorTotalOri],
                  valorTotal: [materiais[i].valorTotal],
                  codDeposito: [materiais[i].codDeposito],
                  nomeDeposito: [materiais[i].nomeDeposito],
                  medida1: [materiais[i].medida1],
                  medida2: [materiais[i].medida2],
                  pesoEspecifico: [materiais[i].pesoEspecifico]
                }));
              }
            }
          }
        }, {
          key: "calcularTotais",
          value: function calcularTotais(field) {
            var total = {
              quantidade: 0,
              valor: 0,
              concorrente: 0
            };

            for (var index = 0; index < this.dataCotacao.carrinho.length; index++) {
              total.quantidade += this.dataCotacao.carrinho[index].quantidade;
              total.valor += this.dataCotacao.carrinho[index].valorTotal;
            }

            if (field === 'concorrente') {
              for (var _index = 0; _index < this.form.value.materiais.length; _index++) {
                var material = this.form.value.materiais[_index];
                total.concorrente += material.valorConcorrente;
              }
            }

            return total[field];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            if (this.checkFormValidators() === true) {
              return;
            }

            this.submittingForm = true;
            var formValue = {
              codConcorrenteTid: this.form.value.codConcorrente,
              carrinho: this.form.value.materiais
            };
            var dataCotacao = Object.assign(this.dataCotacao, formValue);
            this.cotacoesService.postCotacaoPerdida(dataCotacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.submittingForm = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this5.onClose();
                } else {
                  _this5.pnotifyService.error();
                }
              },
              error: function error(_error) {
                _this5.pnotifyService.error();
              }
            });
            this.onClose();
          }
        }, {
          key: "checkFormValidators",
          value: function checkFormValidators() {
            var hasError = false;
            var mapError = {
              codConcorrente: true,
              valorConcorrente: true
            };

            if (this.form.value.codConcorrente !== null) {
              mapError.codConcorrente = false;
            }

            for (var index = 0; index < this.form.value.materiais.length; index++) {
              var material = this.form.value.materiais[index];

              if (material.valorConcorrente > 0) {
                mapError.valorConcorrente = false;
              }
            }

            if (mapError.codConcorrente === true && mapError.valorConcorrente === true) {
              hasError = true;
              this.pnotifyService.notice('Selecione um concorrente ou informe o valor.');
            }

            return hasError;
          }
        }, {
          key: "onClose",
          value: function onClose() {
            var _this6 = this;

            this.formularioService.limparCarrinhoSubject.next(true);
            this.bsModalRef.hide();
            setTimeout(function () {
              _this6.router.navigate(['/comercial/ciclo-vendas/cotacoes-pedidos/lista']);
            }, 100);
          }
        }, {
          key: "materiais",
          get: function get() {
            return this.form.get('materiais');
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasService"]
        }, {
          type: src_app_modules_comercial_cadastros_concorrentes_concorrentes_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosConcorrenteService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent.propDecorators = {
        dataCotacao: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['dataCotacao']
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario-modal-finalizacao-perdida',
        template: _raw_loader_perdida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perdida_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasService"], src_app_modules_comercial_cadastros_concorrentes_concorrentes_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosConcorrenteService"], _formulario_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent);
      /***/
    },

    /***/
    "2S9i":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/materiais/lista/lista.component.scss ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S9i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vbWF0ZXJpYWlzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "2f6T":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/pedidos-producao-telas.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasModule */

    /***/
    function f6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasModule", function () {
        return ComercialCicloVendasPedidosProducaoTelasModule;
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


      var _pedidos_producao_telas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pedidos-producao-telas-routing.module */
      "XmKC");
      /* harmony import */


      var _lista_lista_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.module */
      "Tb44");
      /* harmony import */


      var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formulario/formulario.module */
      "oHon");
      /* harmony import */


      var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/guards/form-deactivate.guard */
      "iMgG"); // Modules
      // Interfaces


      var ComercialCicloVendasPedidosProducaoTelasModule = function ComercialCicloVendasPedidosProducaoTelasModule() {
        _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasModule);
      };

      ComercialCicloVendasPedidosProducaoTelasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pedidos_producao_telas_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasRoutingModule"], _lista_lista_module__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPedidosProducaoTelasListaModule"], _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioModule"]],
        providers: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__["FormDeactivateGuard"]]
      })], ComercialCicloVendasPedidosProducaoTelasModule);
      /***/
    },

    /***/
    "7gwv":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/detalhes/cliente.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gwv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-0 my-auto\">DETALHES DO CLIENTE</h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\" *ngIf=\"cliente\">\n      <div class=\"col\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\" *ngIf=\"cliente.tipoPessoa == 'F'\">\n            <label>CPF</label>\n            <div *ngIf=\"cliente.cpf == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cpf != null\">{{ cliente.cpf }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\" *ngIf=\"cliente.tipoPessoa == 'J'\">\n            <label>CNPJ</label>\n            <div *ngIf=\"cliente.cnpj == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cnpj != null\">{{ cliente.cnpj }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label>Nome fantasia</label>\n            <div *ngIf=\"cliente.nomeFantasia == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.nomeFantasia != null\">{{ cliente.nomeFantasia }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Razão social</label>\n            <div *ngIf=\"cliente.razaoSocial == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.razaoSocial != null\">{{ cliente.razaoSocial }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Endereço</label>\n            <div *ngIf=\"cliente.endereco == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.endereco != null\">{{ cliente.endereco }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-8\">\n            <label>Bairro</label>\n            <div *ngIf=\"cliente.bairro == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.bairro != null\">{{ cliente.bairro }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\">\n            <label>CEP</label>\n            <div *ngIf=\"cliente.cep == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cep != null\">{{ cliente.cep }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-8\">\n            <label>Cidade</label>\n            <div *ngIf=\"cliente.cidade == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cidade != null\">{{ cliente.cidade }} / {{ cliente.uf }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\">\n            <label>Segurado</label>\n            <div *ngIf=\"cliente.segurado != ''\">SIM</div>\n            <div *ngIf=\"cliente.segurado == ''\">NÃO</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label>Vendedor</label>\n            <div *ngIf=\"cliente.vendedor == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.vendedor != null\">{{ cliente.vendedor }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label>Escritório</label>\n            <div *ngIf=\"cliente.escritorio == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.escritorio != null\">{{ cliente.escritorio }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.codSAP != '' && cliente.codSAP != null\">\n            <label>Código DBA</label>\n            <div>{{ cliente.codSAP }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.escritorioDba != '' && cliente.escritorioDba != null\">\n            <label>Escritório</label>\n            <div>{{ cliente.escritorioDba }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.ultimaCompraDba != '' && cliente.ultimaCompraDba != null\">\n            <label>Última compra</label>\n            <div>{{ cliente.ultimaCompraDba }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "AJQa":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/lista/lista.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AJQa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Pedidos Produção de Telas\">\n  <button\n    type=\"button\"\n    (click)=\"onAdd()\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"loaderNavbar || !form.valid\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div #scrollToFilter>\n    <advanced-filter>\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-3\">\n            <label for=\"tipoData\">Buscar por</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"tipoData\"\n              formControlName=\"tipoData\">\n              <option value=\"1\">Data de lançamento</option>\n            </select>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"dataInicial\">Data inicial</label>\n            <input\n              class=\"form-control\"\n              id=\"dataInicial\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataInicial\">\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"dataFinal\">Data final</label>\n            <input\n              class=\"form-control\"\n              id=\"dataFinal\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataFinal\">\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label for=\"codSituacao\">Situação</label>\n            <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tipos\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipo\"\n            bindLabel=\"nome\"\n            bindValue=\"cod\"\n            id=\"tipo\"\n            formControlName=\"codSituacao\"\n            placeholder=\"Selecione...\"\n          >\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n            </ng-template>\n          </ng-select>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"nrProposta\">Núm. proposta</label>\n            <input\n              type=\"text\"\n              placeholder=\"Digite...\"\n              id=\"nrProposta\"\n              class=\"form-control\"\n              formControlName=\"nrProposta\"\n              (keydown.enter)=\"onFilter()\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-5\">\n            <label for=\"cliente\">Cliente</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Digite...\"\n              id=\"cliente\"\n              formControlName=\"cliente\"\n              (keydown.enter)=\"onFilter()\">\n          </div>\n          <div class=\"form-group col-lg-5\">\n            <label for=\"usuarioLancamento\">Usuário de Lançamento</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Digite...\"\n              id=\"usuarioLancamento\"\n              formControlName=\"usuarioLancamento\"\n              (keydown.enter)=\"onFilter()\">\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"registros\">Registros</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"registros\"\n              formControlName=\"registros\">\n              <option>100</option>\n              <option>200</option>\n              <option>300</option>\n            </select>\n          </div>\n        </div>\n      </form>\n    </advanced-filter>\n  </div>\n  <subtitles\n    [data]=\"subtitles\"\n    [show]=\"dados.length > 0 && !dadosEmpty\">\n  </subtitles>\n  <div class=\"row\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\n    <div [ngClass]=\"{'col-12': !showDetailPanel, 'col-6 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">\n              <thead-sorter\n                value=\"Núm.\"\n                [active]=\"orderBy == 'nrProposta'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nrProposta')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"text-center\">\n              <thead-sorter\n                value=\"Prioridade\"\n                [active]=\"orderBy == 'codPrioridade'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('codPrioridade')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"text-center\">\n              <thead-sorter\n                value=\"Lançamento\"\n                [active]=\"orderBy == 'dataLancamento'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataLancamento')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\">\n              <thead-sorter\n                value=\"Cliente\"\n                [active]=\"orderBy == 'razaoSocial'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('razaoSocial')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Lançado por</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let pedido of dados; let i = index\" [class.table-active]=\"i == activeRow\">\n            <td (click)=\"viewRegister(i, pedido)\"  class=\"text-center hover\" [ngClass]=\"styleStatusBorder(pedido)\" >{{ pedido.nrPedido }}</td>\n            <td class=\"text-center hover\" (click)=\"viewRegister(i, pedido)\">{{ pedido.prioridade }}</td>\n            <td class=\"text-center hover\" (click)=\"viewRegister(i, pedido)\">{{ pedido.dataCadastro  | date: 'dd/MM/yyyy HH:mm' }}</td>\n            <td class=\"hover\" (click)=\"viewRegister(i, pedido)\">{{ pedido.razaoSocial | uppercase }}</td>\n            <td class=\"hover\" (click)=\"viewRegister(i, pedido)\" [hidden]=\"showDetailPanel\">{{ pedido.nomeUsuarioCadastro | uppercase }}</td>\n            <td class=\"hover\" style=\"width:160px\">\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\" *ngIf=\"pedido.codSituacao == 1\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(pedido)\" >\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n              <span\n              *ngIf=\"pedido.codSituacao == 1\"\n              class=\"mr-3\"\n              tooltip=\"Alterar para Produção\"\n              placement=\"left\"\n              container=\"body\"\n              >\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalProducao(producao); setFormProducao(pedido);\">\n                  <i class=\"fab fa-deviantart\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\"\n              tooltip=\"ver Observação Produção\"\n              placement=\"left\" container=\"body\"\n              *ngIf=\"pedido.codSituacao == 2 || pedido.codSituacao == 3\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalProducao(producao); setFormProducao(pedido);\">\n                  <i class=\"fas fa-eye\"></i>\n                </button>\n              </span>\n              <span\n              *ngIf=\"pedido.codSituacao == 2\"\n              class=\"mr-3\"\n              tooltip=\"Alterar para Expedição\"\n              placement=\"left\"\n              container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalExpedicao(expedicao); setFormExpedicao(pedido);\">\n                  <i class=\"fab fa-deviantart\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\"\n              tooltip=\"ver Localização de expedição\"\n              placement=\"left\" container=\"body\"\n              *ngIf=\"pedido.codSituacao == 3\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalExpedicao(expedicao); setFormExpedicao(pedido);\">\n                  <i class=\"far fa-eye\"></i>\n                </button>\n              </span>\n              <!-- <span class=\"mr-3\" tooltip=\"Imprimir Proposta\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" >\n                  <i class=\"fas fa-print\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Imprimir Etiqueta\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" >\n                  <i class=\"fas fa-copy\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Deletar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" >\n                  <i class=\"fas fa-trash-alt\"></i>\n                </button>\n              </span> -->\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !dadosEmpty && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel\" #scrollToDetails>\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <!-- <div class=\"row mt-1\">\n          <div class=\"col\" >\n            <button\n              type=\"button\"\n              class=\"btn-icon mr-3\"\n              tooltip=\"Editar\"\n              placement=\"right\"s\n              (click)=\"onEdit(pedido)\">\n              <i class=\"fas fa-edit\"></i>\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn-icon mr-3\"\n              tooltip=\"Imprimir Proposta\"\n              placement=\"right\">\n              <i class=\"fas fa-print\"></i>\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn-icon mr-3\"\n              tooltip=\"Imprimir Etiqueta\"\n              placement=\"right\">\n              <i class=\"fas fa-copy\"></i>\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn-icon mr-3\"\n              tooltip=\"Deletar\"\n              placement=\"right\">\n              <i class=\"fas fa-trash-alt\"></i>\n            </button>\n          </div>\n        </div> -->\n        <!-- <div class=\"row\">\n          <div class=\"col\"><hr></div>\n        </div> -->\n        <div class=\"mtc-title\">Detalhes do Pedido</div>\n        <div class=\"row\" *ngFor = \"let item of detalhes;\">\n          <div class=\"col\">\n            <div >\n              <div class=\"form-row mt-3\">\n                <div class=\"form-group col-6\">\n                  <label>Número do Pedido</label>\n                  <div *ngIf=\"item.nrPedido == null || item.nrPedido == ''\">NÃO INFORMADO</div>\n                  <div *ngIf=\"item.nrPedido != null && item.nrPedido != ''\">{{ item.nrPedido }}</div>\n                </div>\n                <div class=\"form-group col-6\">\n                  <label>Cliente</label>\n                  <div *ngIf=\"item.razaoSocial == null || item.razaoSocial == ''\">NÃO INFORMADO</div>\n                  <div *ngIf=\"item.razaoSocial != null && item.razaoSocial != ''\">{{ item.razaoSocial }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-6\">\n                  <label>Data de Lançamento</label>\n                  <div *ngIf=\"item.dataCadastro == null || item.dataCadastro == ''\">NÃO INFORMADO</div>\n                  <div *ngIf=\"item.dataCadastro != null && item.dataCadastro != ''\">{{ item.dataCadastro  | date: 'dd/MM/yyyy HH:mm' }}</div>\n                </div>\n                <div class=\"form-group col-6\">\n                  <label>Data Prevista de Entrega</label>\n                  <div *ngIf=\"item.dataPrevisaoEntrega == null || item.dataPrevisaoEntrega == ''\">NÃO INFORMADO</div>\n                  <div *ngIf=\"item.dataPrevisaoEntrega != null && item.dataPrevisaoEntrega != ''\">{{ item.dataPrevisaoEntrega  | date: 'dd/MM/yyyy HH:mm'}}</div>\n                </div>\n              </div>\n              <!-- <div class=\"form-row\">\n                <div class=\"form-group col\">\n                  <label>Observações</label>\n                  <div *ngIf=\"item.observacao == null || item.observacao == ''\">\n                    NÃO INFORMADO\n                  </div>\n                  <div *ngIf=\"item.observacao != null && item.observacao != ''\">\n                    {{ item.observacao }}\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\"><hr></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\" *ngIf=\"itensLoaded && !itensEmpty\">\n            <div class=\"mtc-title\">Itens da proposta</div>\n            <custom-table >\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\">Material</th>\n                  <th scope=\"col\" class=\"text-center\">Qtde.</th>\n                  <th scope=\"col\" class=\"text-center\">Peso</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of detalhesCarrinho\" >\n                  <td>{{ item.codMaterial }} - {{ item.nomeMaterial | uppercase }}</td>\n                  <td class=\"text-center\">{{ item.qtdeItem | number:'1.3-3' }}</td>\n                  <td class=\"text-center\">{{ item.peso }} TON</td>\n                </tr>\n                <tr>\n                  <td class=\"bg-dark text-white text-center\">TOTAL</td>\n                  <td class=\"bg-dark text-white text-center\">{{ detalhes.qtdeTotal | number:'1.3-3' }}</td>\n                  <td class=\"bg-dark text-white text-center\">{{ detalhes.pesoTotal  }} TON</td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <div *ngIf=\"itensLoaded && itensEmpty\">\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n            </div>\n            <div class=\"d-flex w-100\" *ngIf=\"!itensLoaded\">\n              <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n              <strong>Carregando itens...</strong>\n            </div>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n\n  <!-- Modal alteração produção -->\n<ng-template #producao>\n\n  <div>\n    <div class=\"modal-body\">\n\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(producao)\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"mtc-title\">Alteração para Produção</div>\n        <form [formGroup]=\"formProducao\" autocomplete=\"off\" #scrollToFormOnTop>\n            <div class=\"form-group\">\n              <textarea\n                class=\"form-control\"\n                id=\"text-area\"\n                rows=\"3\"\n                formControlName=\"observacao\"\n                [readonly]=\"comentario\">\n            </textarea>\n            </div>\n          </form>\n        <div class=\"row mt-2\">\n          <div class=\"col\" style=\"text-align: center;\" >\n\n          <button\n            *ngIf = \"!comentario\"\n            type=\"button\"\n            class=\"btn btn-success\"\n            (click)=\"modalRef.hide(); onChangeProducao();\"\n            >\n            Enviar\n          </button>\n\n        </div>\n      </div>\n\n  </div>\n</div>\n</ng-template>\n\n<!-- Modal alteração expedição -->\n<ng-template #expedicao>\n\n  <div>\n    <div class=\"modal-body\">\n\n      <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(expedicao)\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n        <div class=\"mtc-title\">Alteração para Expedição</div>\n            <div class=\"form-group\">\n              <form [formGroup]=\"formExpedicao\" autocomplete=\"off\" #scrollToFormOnTop>\n              <label>Localização de Expedição</label>\n                <select\n                  class=\"form-control custom-select\"\n                  id=\"codLocalizacao\"\n                  placeholder=\"Selecione...\"\n                  formControlName=\"codLocalizacao\">\n                  <option value=\"\">Todos</option>\n                  <option value=\"1\">Piracicaba</option>\n                  <option value=\"2\">Rio das Pedras-CD</option>\n                  <option value=\"3\">Rio das Pedras-Civil</option>\n                  <option value=\"4\">Retira</option>\n                </select>\n              </form>\n          </div>\n\n          <div class=\"row mt-2\">\n            <div class=\"col\" style=\"text-align: center;\">\n\n            <button\n              *ngIf=\"!localizacao\"\n              type=\"button\"\n              class=\"btn btn-success\"\n              (click)=\"modalRef.hide(); onChangeExpedicao();\"\n              >\n              Enviar\n            </button>\n\n          </div>\n    </div>\n\n  </div>\n</div>\n</ng-template>\n</app-body>\n";
      /***/
    },

    /***/
    "DQic":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/detalhes/cliente.service.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService */

    /***/
    function DQic(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cliente.component */
      "xGkr");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // ngx-bootstrap
      // Components
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService(modalService, pnotifyService, clientesService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService);

          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.clientesService = clientesService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService, [{
          key: "showModal",
          value: function showModal(codCliente) {
            var _this7 = this;

            this.loaderNavbar.emit(true);
            this.clientesService.getDetalhes(codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              _this7.loaderNavbar.emit(false);
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  var modalConfig = {
                    animated: false
                  };
                  var initialState = {
                    cliente: response.data
                  };

                  _this7.modalService.show(_cliente_component__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent"], Object.assign({}, modalConfig, {
                    initialState: initialState
                  }));
                } else {
                  _this7.pnotifyService.error();
                }
              },
              error: function error(_error2) {
                _this7.pnotifyService.error();
              }
            });
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService);
      /***/
    },

    /***/
    "EKao":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/padrao/padrao.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EKao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep comercial-ciclo-vendas-cotacoes-formulario-finalizacao #progress-bar-mapa-metas {\n  margin-top: -70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2ljbG8tdmVuZGFzL3BlZGlkb3MtcHJvZHVjYW8tdGVsYXMvZm9ybXVsYXJpby9tb2RhbC9maW5hbGl6YWNhby9wYWRyYW8vcGFkcmFvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsaUJBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vbW9kYWwvZmluYWxpemFjYW8vcGFkcmFvL3BhZHJhby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIGNvbWVyY2lhbC1jaWNsby12ZW5kYXMtY290YWNvZXMtZm9ybXVsYXJpby1maW5hbGl6YWNhbyB7XG4gICAgI3Byb2dyZXNzLWJhci1tYXBhLW1ldGFzIHtcbiAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "GOSO":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/lista/lista.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasListaService */

    /***/
    function GOSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasListaService", function () {
        return ComercialCicloVendasPedidosProducaoTelasListaService;
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


      var _cadastros_propostas_associacao_situacoes_proposta_associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../cadastros/propostas/associacao-situacoes-proposta/associacao-situacoes-proposta.service */
      "SuPn"); // Services


      var ComercialCicloVendasPedidosProducaoTelasListaService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasListaService(http, associacaoSituacoesPropostaService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasListaService);

          this.http = http;
          this.associacaoSituacoesPropostaService = associacaoSituacoesPropostaService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/ciclo-vendas/pedidos-producao-telas";
          this.onChangeClienteCotacao = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.clienteCotacao = this.onChangeClienteCotacao.asObservable();
          this.onCotacaoDuplicada = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.pedidoDuplicada = this.onCotacaoDuplicada.asObservable();
          this.onCotacaoDesdobrada = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.pedidoDesdobrada = this.onCotacaoDesdobrada.asObservable();
          this.onChangeEmpresaCotacao = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.empresaCotacao = this.onChangeEmpresaCotacao.asObservable();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasListaService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var associacoes = this.associacaoSituacoesPropostaService.getListaAssociacoes({
              codSituacao: 1
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([associacoes]);
          }
        }, {
          key: "updateClienteCotacao",
          value: function updateClienteCotacao(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                selectedCliente = _ref2[0],
                pedido = _ref2[1];

            this.onChangeClienteCotacao.next([selectedCliente, pedido]);
          }
        }, {
          key: "updateCotacaoDuplicada",
          value: function updateCotacaoDuplicada(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 3),
                nrProposta = _ref4[0],
                codVendedor = _ref4[1],
                pedido = _ref4[2];

            this.onCotacaoDuplicada.next([nrProposta, codVendedor, pedido]);
          }
        }, {
          key: "updateCotacaoDesdobrada",
          value: function updateCotacaoDesdobrada(_ref5) {
            var _ref6 = _slicedToArray(_ref5, 3),
                nrProposta = _ref6[0],
                pedido = _ref6[1],
                materiais = _ref6[2];

            this.onCotacaoDesdobrada.next([nrProposta, pedido, materiais]);
          }
        }, {
          key: "updateEmpresaCotacao",
          value: function updateEmpresaCotacao(_ref7) {
            var _ref8 = _slicedToArray(_ref7, 3),
                selectedEmpresa = _ref8[0],
                selectedDeposito = _ref8[1],
                nrProposta = _ref8[2];

            this.onChangeEmpresaCotacao.next([selectedEmpresa, selectedDeposito, nrProposta]);
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasListaService;
      }();

      ComercialCicloVendasPedidosProducaoTelasListaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _cadastros_propostas_associacao_situacoes_proposta_associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasListaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _cadastros_propostas_associacao_situacoes_proposta_associacao_situacoes_proposta_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosPropostasAssociacaoSituacoesPropostaService"]])], ComercialCicloVendasPedidosProducaoTelasListaService);
      /***/
    },

    /***/
    "GncS":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/perdida/perdida.component.scss ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GncS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vbW9kYWwvZmluYWxpemFjYW8vcGVyZGlkYS9wZXJkaWRhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "JLzM":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/guards/formulario-resolver.guard.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard */

    /***/
    function JLzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard;
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


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../pedidos-producao-telas.service */
      "Kh+k"); // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard(pedidosProducaoTelasService, authService, dateService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard);

          this.pedidosProducaoTelasService = pedidosProducaoTelasService;
          this.authService = authService;
          this.dateService = dateService;
          this.user = this.authService.getCurrentUser().info;
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.nrProposta) {
              return this.pedidosProducaoTelasService.getDetalhesPedidos(route.params.nrProposta);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                codCliente: null,
                codLocalizacaoEstoque: null,
                codSituacao: null,
                codUsuarioCadastro: null,
                dataCadastro: null,
                dataPrevisaoEntrega: null,
                descPedido: null,
                descSituacao: null,
                nomeCliente: null,
                nomeLocalizacaoEstoque: '',
                nomeUsuarioCadastro: null,
                nrPedido: null,
                pesoTotal: null,
                prioridade: null,
                razaoSocial: null,
                codRazaoSocial: null,
                codEndereco: null,
                carrinho: []
              }
            });
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasService"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasService"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard);
      /***/
    },

    /***/
    "KEd5":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/historico-exclusao/historico-exclusao.service.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService */

    /***/
    function KEd5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _historico_exclusao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./historico-exclusao.component */
      "xsRv");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // ngx-bootstrap
      // Components
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService(modalService, pnotifyService, cotacoesService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService);

          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.cotacoesService = cotacoesService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService, [{
          key: "showModal",
          value: function showModal(codCotacao) {
            var _this8 = this;

            this.loaderNavbar.emit(true);
            this.cotacoesService.getHistoricoExclusao(codCotacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this8.loaderNavbar.emit(false);
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  var modalConfig = {
                    animated: false,
                    "class": 'modal-lg'
                  };
                  var initialState = {
                    exclusoes: response.data
                  };

                  _this8.modalService.show(_historico_exclusao_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent"], Object.assign({}, modalConfig, {
                    initialState: initialState
                  }));
                } else {
                  _this8.pnotifyService.notice('Nenhuma informação encontrada.');
                }
              },
              error: function error(_error3) {
                _this8.pnotifyService.error();
              }
            });
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasPedidosProducaoTelasService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasPedidosProducaoTelasService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService);
      /***/
    },

    /***/
    "Kh+k":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/pedidos-producao-telas.service.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasService */

    /***/
    function KhK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasService", function () {
        return ComercialCicloVendasPedidosProducaoTelasService;
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
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../tid-software/tid-software.service */
      "zN97");
      /* harmony import */


      var _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../estoque/estoque.service */
      "nkG6"); // Services


      var ComercialCicloVendasPedidosProducaoTelasService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasService(http, comercialService, tidSoftwareService, estoqueService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.estoqueService = estoqueService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/ciclo-vendas/pedidos-producao-telas";
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasService, [{
          key: "getPermissoesAcesso",
          value: function getPermissoesAcesso() {
            return this.http.get("".concat(this.API, "/permissoes-acesso")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPedidosProducaoTelas",
          value: function getPedidosProducaoTelas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhesPedidosProducaoTelas",
          value: function getDetalhesPedidosProducaoTelas(codEmpresa, nrProposta) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(nrProposta)) // .get(`${this.API}/detalhes/${codEmpresa}/${nrProposta}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriaisPedidosProducaoTelas",
          value: function getMateriaisPedidosProducaoTelas(codEmpresa, nrProposta) {
            return this.http.get("".concat(this.API, "/materiais/detalhes/").concat(codEmpresa, "/").concat(nrProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSituacaoLiberacao",
          value: function getSituacaoLiberacao(nrProposta) {
            return this.http.get("".concat(this.API, "/situacao-liberacao/").concat(nrProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postTrocarCliente",
          value: function postTrocarCliente(params) {
            return this.http.post("".concat(this.API, "/trocar/cliente"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postDuplicarProposta",
          value: function postDuplicarProposta(params) {
            return this.http.post("".concat(this.API, "/duplicar-proposta"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postDesdobrarProposta",
          value: function postDesdobrarProposta(params) {
            return this.http.post("".concat(this.API, "/desdobrar-proposta"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postTrocarEmpresa",
          value: function postTrocarEmpresa(params) {
            return this.http.post("".concat(this.API, "/trocar/empresa"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getImprimirCotacao",
          value: function getImprimirCotacao(nrProposta) {
            return this.http.get("".concat(this.API, "/imprimir-cotacao/").concat(nrProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postEmailCotacao",
          value: function postEmailCotacao(params) {
            return this.http.post("".concat(this.API, "/email-cotacao"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getReservarIdCotacao",
          value: function getReservarIdCotacao() {
            return this.http.get("".concat(this.API, "/reservar")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCotacao",
          value: function getCotacao(codCotacao, idEmpresa) {
            return this.http.get("".concat(this.API, "/").concat(codCotacao, "/").concat(idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCotacaoFilterValues",
          value: function getCotacaoFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([linhas, classes]);
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEstoqueDetalhes",
          value: function getEstoqueDetalhes(params) {
            return this.estoqueService.getEstoqueAtual(params);
          }
        }, {
          key: "getEstoqueDepositos",
          value: function getEstoqueDepositos(codDeposito, codMaterial) {
            return this.http.get("".concat(this.API, "/materiais/estoque-depositos/").concat(codMaterial, "/").concat(codDeposito)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriaisCombo",
          value: function getMateriaisCombo(codEmpresa, codMaterial) {
            return this.http.get("".concat(this.API, "/materiais/combo/").concat(codEmpresa, "/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postVendasGerais",
          value: function postVendasGerais(params) {
            return this.http.post("".concat(this.API, "/materiais/relacionados"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postVendasCliente",
          value: function postVendasCliente(params) {
            return this.http.post("".concat(this.API, "/materiais/relacionados"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postMateriaisRelacionados",
          value: function postMateriaisRelacionados(params) {
            return this.http.post("".concat(this.API, "/materiais/relacionados"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getFichaCadastralMaterial",
          value: function getFichaCadastralMaterial(codMaterial) {
            return this.http.get("".concat(this.API, "/material/ficha-cadastral/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSimilaridadeMaterial",
          value: function getSimilaridadeMaterial(codEmpresa, codMaterial) {
            return this.http.get("".concat(this.API, "/material/similaridade/").concat(codEmpresa, "/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTipoCalculoMaterial",
          value: function getTipoCalculoMaterial(codMaterial) {
            return this.http.get("".concat(this.API, "/material/tipo-calculo/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCalculoMaterial",
          value: function getCalculoMaterial(params) {
            return this.http.get("".concat(this.API, "/material/calculo"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          } // postCalculoMaterial(params: any): Observable<Object | JsonResponse> {
          //   return this.http
          //     .post(`${this.API}/material/calculo`, params)
          //     .pipe(take(1), retry(2));
          // }

        }, {
          key: "getHistoricoCompras",
          value: function getHistoricoCompras(codEmpresa, codCliente) {
            return this.http.get("".concat(this.API, "/historico-compras/").concat(codEmpresa, "/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarDuplicatas",
          value: function postGerarDuplicatas(params) {
            return this.http.post("".concat(this.API, "/duplicatas/gerar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postAlterarDuplicatas",
          value: function postAlterarDuplicatas(params) {
            return this.http.post("".concat(this.API, "/duplicatas/alterar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getHistoricoExclusao",
          value: function getHistoricoExclusao(codCotacao) {
            return this.http.get("".concat(this.API, "/historico-exclusao/").concat(codCotacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCotacaoPerdida",
          value: function postCotacaoPerdida(params) {
            return this.http.post("".concat(this.API, "/perdida/salvar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getComissaoCotacao",
          value: function getComissaoCotacao(codCotacao, codEmpresa) {
            return this.http.get("".concat(this.API, "/comissao/").concat(codCotacao, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getProgressoCotacao",
          value: function getProgressoCotacao(codCotacao, codEmpresa) {
            return this.http.get("".concat(this.API, "/progresso/").concat(codCotacao, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhesPedidos",
          value: function getDetalhesPedidos(nrPedido) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(nrPedido)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetailPanel",
          value: function getDetailPanel(nrPedido) {
            return this.http.get("".concat(this.API, "/detail-panel/").concat(nrPedido)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCotacao",
          value: function postCotacao(params) {
            return this.http.post("".concat(this.API, "/salvar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "putCotacao",
          value: function putCotacao(params) {
            return this.http.put("".concat(this.API, "/atualizar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteMaterialCotacao",
          value: function deleteMaterialCotacao(index, codMaterial) {
            return this.http["delete"]("".concat(this.API, "/materiais/excluir/").concat(codMaterial, "/").concat(index)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasService;
      }();

      ComercialCicloVendasPedidosProducaoTelasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }, {
          type: _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_7__["ComercialEstoqueService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"], _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_7__["ComercialEstoqueService"]])], ComercialCicloVendasPedidosProducaoTelasService);
      /***/
    },

    /***/
    "LLqO":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/materiais/lista/lista.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LLqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"showApp\">\n  <div class=\"row mb-2\">\n    <div class=\"col mt-auto\">\n      <div class=\"mtc-title mb-0\">Pesquisa de materiais</div>\n    </div>\n    <div class=\"col\">\n      <div class=\"d-flex justify-content-end\">\n        <button\n          type=\"button\"\n          class=\"btn btn-sm btn-secondary\"\n          (click)=\"onFilter()\"\n          [disabled]=\"materiaisLoader || searching\">\n          <i class=\"fas fa-search\"></i>\n          <span>Pesquisar</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <advanced-filter class=\"mb-4\">\n    <form [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"codLinha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            formControlName=\"codLinha\"\n            [virtualScroll]=\"true\"\n            placeholder=\"Selecione...\"\n            labelForId=\"codLinha\"\n            bindLabel=\"descricao\"\n            bindValue=\"id\"\n            (change)=\"onChangeLinha($event.id, true)\"\n            [ngClass]=\"onFieldError('codLinha') + ' ' + onFieldRequired(form.controls.codLinha)\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"codClasse\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"filteredClasses\"\n            formControlName=\"codClasse\"\n            [virtualScroll]=\"true\"\n            labelForId=\"codClasse\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"nomeClasse\"\n            bindValue=\"idClasse\"\n            (change)=\"onChangeClasse($event.idClasse, true, 'application')\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label for=\"codMaterial\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"materiais\"\n            formControlName=\"codMaterial\"\n            [virtualScroll]=\"true\"\n            placeholder=\"Selecione...\"\n            labelForId=\"codMaterial\"\n            bindLabel=\"codigoDescricaoMaterial\"\n            bindValue=\"codigoMaterial\"\n            [loading]=\"materiaisLoader\"\n            loadingText=\"Carregando...\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"comEstoque\">Somente c/ estoque</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"comEstoque\"\n            formControlName=\"comEstoque\"\n            [ngClass]=\"onFieldError('comEstoque') + ' ' + onFieldRequired(form.controls.comEstoque)\">\n            <option value=\"0\">Exibir todos</option>\n            <option value=\"1\">Sim</option>\n            <option value=\"2\">Não</option>\n          </select>\n          <invalid-form-control [show]=\"onFieldInvalid('comEstoque')\" message=\"Estoque é obrigatório.\"></invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-1\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"registros\"\n            formControlName=\"registros\">\n            <option>100</option>\n            <option>200</option>\n            <option>300</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div *ngIf=\"dados.length > 0 && !dadosEmpty\">\n    <div class=\"row\">\n      <div class=\"col my-auto\">\n        <subtitles [data]=\"subtitles\" [show]=\"true\"></subtitles>\n      </div>\n      <div class=\"col mb-2\">\n        <div class=\"d-flex justify-content-end\">\n          <div class=\"form-group pt-1 mb-0 mr-3\">\n            <div class=\"custom-control custom-checkbox\">\n              <input\n               type=\"checkbox\"\n               class=\"custom-control-input\"\n               id=\"auto-scroll\"\n               [(ngModel)]=\"autoScroll\"\n               [ngModelOptions]=\"{ standalone: true }\">\n              <label class=\"custom-control-label\" for=\"auto-scroll\">\n                <span class=\"mr-1\">Auto-scroll</span>\n                <ng-template #tooltipAutoScrollTemplate>\n                  <p class=\"text-nowrap mb-0\">Habilitar essa opção</p>\n                  <p class=\"text-nowrap mb-0\">redireciona para o carrinho</p>\n                  <p class=\"text-nowrap mb-0\">ao adicionar um material</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group mb-0\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-success\"\n              (click)=\"onAddMaterial()\">\n              <i class=\"fas fa-shopping-cart\"></i>\n              <span>Adicionar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mb-3\">\n      <div class=\"col\">\n        <custom-table [config]=\"tableConfig\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center\"\n                [ngStyle]=\"{ width: columSize('disponibilidade') }\">\n                <btn-icon\n                  [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                  size=\"small\"\n                  (click)=\"onToggleAll()\">\n                </btn-icon>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center\"\n                [ngStyle]=\"{ width: columSize('codMaterial') }\">\n                <thead-sorter\n                  value=\"Código\"\n                  [active]=\"orderBy == 'codMaterial'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('codMaterial')\">\n                </thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                [ngStyle]=\"{ width: columSize('nomeMaterial') }\">\n                <thead-sorter\n                  value=\"Nome do material\"\n                  [active]=\"orderBy == 'nomeMaterial'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('nomeMaterial')\">\n                </thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                [ngStyle]=\"{ width: columSize('nomeLinha') }\">\n                Linha\n              </th>\n              <th\n                scope=\"col\"\n                [ngStyle]=\"{ width: columSize('nomeDeposito') }\">\n                Depósito\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center\"\n                [ngStyle]=\"{ width: columSize('estoqueAtual') }\">\n                Est. Atual\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center\"\n                [ngStyle]=\"{ width: columSize('estoqueDisponivel') }\">\n                Est. Disponível\n              </th>\n              <th scope=\"col\" [ngStyle]=\"{ width: columSize('buttons') }\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let material of dados; let i = index\" [class.table-active]=\"i == activeRow\">\n              <td\n                class=\"text-truncate text-center\"\n                [ngClass]=\"classStatusBorder(material.disponibilidade)\"\n                [ngStyle]=\"{ width: columSize('disponibilidade') }\">\n                <ng-template #tooltipMaterialSemEstoqueTemplate>\n                  <p class=\"text-nowrap mb-0\">Material sem estoque</p>\n                </ng-template>\n                <btn-icon\n                  [icon]=\"material.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                  size=\"small\"\n                  [isDisabled]=\"material.disponibilidade === 1\"\n                  [tooltip]=\"tooltipMaterialSemEstoqueTemplate\"\n                  placement=\"left\"\n                  (click)=\"onCheckMaterial(i, material)\">\n                </btn-icon>\n              </td>\n              <td\n                class=\"text-truncate text-center hover\"\n                [ngStyle]=\"{ width: columSize('codMaterial') }\"\n                (click)=\"onClickMaterial(i, material)\">\n                {{ material.codMaterial }}\n              </td>\n              <td\n                class=\"text-truncate hover\"\n                [ngStyle]=\"{ width: columSize('nomeMaterial') }\"\n                (click)=\"onClickMaterial(i, material)\">\n                {{ material.nomeMaterial | uppercase }}\n              </td>\n              <td\n                class=\"text-truncate hover\"\n                [ngStyle]=\"{ width: columSize('nomeLinha') }\"\n                (click)=\"onClickMaterial(i, material)\">\n                {{ material.nomeLinha | uppercase }}\n              </td>\n              <td\n                class=\"text-truncate hover\"\n                [ngStyle]=\"{ width: columSize('nomeDeposito') }\"\n                (click)=\"onClickMaterial(i, material)\">\n                {{ material.nomeDeposito | uppercase }}\n              </td>\n              <td\n                class=\"text-truncate text-center hover\"\n                [ngStyle]=\"{ width: columSize('estoqueAtual') }\"\n                (click)=\"onClickMaterial(i, material)\">\n                {{ material.estoqueAtual | number:'1.3-3' }} {{ material.unidade | uppercase }}\n              </td>\n              <td\n                class=\"text-truncate text-center hover\"\n                [ngStyle]=\"{ width: columSize('estoqueDisponivel') }\"\n                (click)=\"onClickMaterial(i, material)\">\n                {{ material.estoqueDisponivel | number:'1.3-3' }} {{ material.unidade | uppercase }}\n              </td>\n              <td class=\"text-right\" [ngStyle]=\"{ width: columSize('buttons') }\">\n                <btn-icon\n                  icon=\"fas fa-warehouse\"\n                  size=\"small\"\n                  class=\"mr-3\"\n                  tooltip=\"Detalhamento do estoque\"\n                  container=\"body\"\n                  (click)=\"onEstoqueDetalhes(material)\">\n                </btn-icon>\n                <!-- <comercial-ciclo-vendas-cotacoes-formulario-template-button-disponibilidade\n                  [index]=\"i\"\n                  [codMaterial]=\"material.codMaterial\"\n                  [deposito]=\"{ codDeposito: material.codDeposito, nomeDeposito: material.nomeDeposito, quantidade: material.estoqueAtual, unidade: material.unidade }\"\n                  (onChange)=\"onChangeDeposito($event)\"\n                  (activeRow)=\"onActiveRow($event)\"\n                  tooltip=\"Estoque em outras unidades\"\n                  container=\"body\">\n                </comercial-ciclo-vendas-cotacoes-formulario-template-button-disponibilidade>\n                <comercial-ciclo-vendas-cotacoes-formulario-template-button-outros\n                  [index]=\"i\"\n                  [material]=\"material\"\n                  (activeRow)=\"onActiveRow($event)\">\n                </comercial-ciclo-vendas-cotacoes-formulario-template-button-outros> -->\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"searching === true\">\n    <div class=\"col\">\n      <message\n        icon=\"fas fa-cog fa-spin\"\n        text=\"Estamos pesquisando os materiais para você...\">\n      </message>\n    </div>\n  </div>\n  <div *ngIf=\"searching === false\">\n    <div class=\"row\" *ngIf=\"dadosEmpty && dadosLoaded\">\n      <div class=\"col\">\n        <message\n          icon=\"fas fa-box-open\"\n          text=\"Nenhuma informação encontrada\">\n        </message>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"dados.length === 0 && !firstSearch\">\n      <div class=\"col\">\n        <message\n          icon=\"fas fa-search\"\n          text=\"Preecha os campos acima para pesquisar materiais\">\n        </message>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "MJy7":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/lista/lista.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MJy7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "OOMa":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/detalhes/cliente.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OOMa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vbW9kYWwvZGV0YWxoZXMvY2xpZW50ZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "SBeU":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/carrinho/carrinho.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SBeU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vY2FycmluaG8vY2FycmluaG8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Tb44":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/lista/lista.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasListaModule */

    /***/
    function Tb44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasListaModule", function () {
        return ComercialCicloVendasPedidosProducaoTelasListaModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _cotacoes_lista_lista_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../cotacoes/lista/lista.module */
      "JEP3");
      /* harmony import */


      var _lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component */
      "iruA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _clientes_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../clientes/dashboard/dashboard.module */
      "gN2J");
      /* harmony import */


      var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../formulario/formulario.module */
      "oHon"); // Components
      // ngx-bootstrap
      // ng-select
      // Modules


      var ComercialCicloVendasPedidosProducaoTelasListaModule = function ComercialCicloVendasPedidosProducaoTelasListaModule() {
        _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasListaModule);
      };

      ComercialCicloVendasPedidosProducaoTelasListaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_lista_component__WEBPACK_IMPORTED_MODULE_2__["ComercialCicloVendasPedidosProducaoTelasListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _clientes_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesDashboardModule"], _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_14__["ComercialCicloVendasPedidosProducaoTelasFormularioModule"], _cotacoes_lista_lista_module__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasCotacoesListaModule"]],
        exports: [_lista_component__WEBPACK_IMPORTED_MODULE_2__["ComercialCicloVendasPedidosProducaoTelasListaComponent"]]
      })], ComercialCicloVendasPedidosProducaoTelasListaModule);
      /***/
    },

    /***/
    "Wp2j":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/selecionar/selecionar.component.scss ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wp2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2ljbG8tdmVuZGFzL3BlZGlkb3MtcHJvZHVjYW8tdGVsYXMvZm9ybXVsYXJpby9tb2RhbC9zZWxlY2lvbmFyL3NlbGVjaW9uYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9jaWNsby12ZW5kYXMvcGVkaWRvcy1wcm9kdWNhby10ZWxhcy9mb3JtdWxhcmlvL21vZGFsL3NlbGVjaW9uYXIvc2VsZWNpb25hci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "XmKC":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/pedidos-producao-telas-routing.module.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasRoutingModule */

    /***/
    function XmKC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasRoutingModule", function () {
        return ComercialCicloVendasPedidosProducaoTelasRoutingModule;
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


      var _lista_lista_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.module */
      "Tb44");
      /* harmony import */


      var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formulario/formulario.module */
      "oHon");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lista/lista.component */
      "iruA");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "YJ5Z");
      /* harmony import */


      var _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./guards/formulario-resolver.guard */
      "JLzM"); // Guards
      // Modules
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasPedidosProducaoTelasFormularioComponent"],
        resolve: {
          data: _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:nrProposta',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasPedidosProducaoTelasFormularioComponent"],
        resolve: {
          data: _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasPedidosProducaoTelasFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCicloVendasPedidosProducaoTelasRoutingModule = function ComercialCicloVendasPedidosProducaoTelasRoutingModule() {
        _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasRoutingModule);
      };

      ComercialCicloVendasPedidosProducaoTelasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _lista_lista_module__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPedidosProducaoTelasListaModule"], _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCicloVendasPedidosProducaoTelasRoutingModule);
      /***/
    },

    /***/
    "Y0py":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/selecionar/selecionar.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent */

    /***/
    function Y0py(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_selecionar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./selecionar.component.html */
      "Y7W8");
      /* harmony import */


      var _selecionar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./selecionar.component.scss */
      "Wp2j");
      /* harmony import */


      var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/comercial/services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent = /*#__PURE__*/function () {
        /* Pagination */
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent(formBuilder, pnotifyService, bsModalRef, comercialService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent);

          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.bsModalRef = bsModalRef;
          this.comercialService = comercialService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.cliente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.fecharModal = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.noClientes = true;
          this.clientes = [];
          /* Pagination */

          this.itemsPerPage = 10;
          this.begin = 0;
          this.end = 20;
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.fecharModal.emit(true);
          }
        }, {
          key: "getClientes",
          value: function getClientes(params) {
            var _this9 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            var _obj = this.formClientes.value;
            this.loadingClientes = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.comercialService.getCarteiraClientes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this9.loadingClientes = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this9.noClientes = false;
                  _this9.clientes = response.data;
                } else {
                  _this9.noClientes = true;

                  _this9.pnotifyService.notice('Nenhum cliente encontrado!');
                }
              },
              error: function error(_error4) {
                _this9.pnotifyService.error();
              }
            });
          }
        }, {
          key: "setCliente",
          value: function setCliente(cliente) {
            console.log(cliente);
            this.cliente.emit(cliente);
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.formClientes = this.formBuilder.group({
              buscarPor: ['NM_CLIE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              NM_CLIE: [null],
              registros: [this.itemsPerPage]
            });
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"]
        }, {
          type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent.propDecorators = {
        cliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }],
        fecharModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'comercial-cliclo-vendas-pedidos-producao-telas-formulario-modal-selecionar',
        template: _raw_loader_selecionar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selecionar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"], src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent);
      /***/
    },

    /***/
    "Y7W8":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/selecionar/selecionar.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y7W8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Busqueda de clientes</h4>\n  <div class=\"d-flex justify-content-center align-items-center\">\n    <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"formClientes\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-4\">\n          <label for=\"cdItem\">BUSCAR POR</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"buscarPor\"\n          >\n            <option value=\"NM_CLIE\" selected>Código, nombre de fantasía o razón social</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-8\">\n          <label>TÉRMINOS DE BÚSQUEDA</label>\n          <div class=\"input-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"pesquisa\"\n              >\n              <div class=\"input-group-append\">\n                <span \n                  [tooltip]=\"formClientes.valid == false ? 'Digite um termo de pesquisa':''\"\n                  container=\"body\"\n                  placement =\"left\"\n                >\n                  <button\n                  style=\"height: 25px;\"\n                    [disabled]=\"formClientes.valid == false\"\n                    class=\"input-group-text hover\"\n                    (click)=\"getClientes()\"\n                    >\n                    <i class=\"fas fa-search\"></i>\n                  </button>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <custom-table *ngIf=\"!noClientes\" class=\"text-center\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th>Cód Cliente </th>\n        <th>Nombre Fantasia</th>\n        <th>Razon Social </th>\n        <th></th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr *ngFor=\"let cliente of clientes | slice : begin : end; let i = index\">\n        <td>{{ cliente.codCliente }}</td>\n        <td>{{ cliente.nomeCliente }}</td>\n        <td>{{ cliente.razaoSocial }}</td>\n        <td>\n          <button\n            class=\"btn-icon-sm\"\n            tooltip=\"Salvar Informações\"\n            container=\"body\"\n            (click)=\"setCliente(cliente);onClose()\"\n          >\n            <i class=\"far fa-save\"></i>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n</div>";
      /***/
    },

    /***/
    "YJ5Z":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/formulario.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioComponent */

    /***/
    function YJ5Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "egEa");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "ozjm");
      /* harmony import */


      var _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/detalhes/cliente.service */
      "DQic");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var _cotacoes_formulario_modal_material_combo_combo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../cotacoes/formulario/modal/material/combo/combo.service */
      "vISg");
      /* harmony import */


      var _cotacoes_formulario_modal_material_desconto_desconto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../cotacoes/formulario/modal/material/desconto/desconto.service */
      "q7sL");
      /* harmony import */


      var _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal/material/calculo/calculo.service */
      "kmA5");
      /* harmony import */


      var _modal_finalizacao_finalizacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modal/finalizacao/finalizacao.service */
      "iZ+r");
      /* harmony import */


      var _cotacoes_formulario_modal_cliente_historico_compras_historico_compras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../cotacoes/formulario/modal/cliente/historico-compras/historico-compras.service */
      "fkdV");
      /* harmony import */


      var _cotacoes_formulario_modal_material_estoque_estoque_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../cotacoes/formulario/modal/material/estoque/estoque.service */
      "ArSq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./formulario.service */
      "8O77");
      /* harmony import */


      var _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../cotacoes/formulario/formulario.service */
      "/Zk1");
      /* harmony import */


      var _cotacoes_formulario_modal_detalhes_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../cotacoes/formulario/modal/detalhes/endereco/endereco.service */
      "rMK4"); // import { ComercialCicloVendasCotacoesFormularioModalDetalhesClienteService } from './../../cotacoes/formulario/modal/detalhes/cliente/cliente.service';
      // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_19__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_20__["ptBrLocale"]); // Services

      var ComercialCicloVendasPedidosProducaoTelasFormularioComponent = /*#__PURE__*/function () {
        // // Tipos de Situação dos Pedidos (Ativo/Inativo)
        // tipos = [
        //   {
        //     cod: '1',
        //     nome: 'Em Aberto',
        //   },
        //   {
        //     cod: '2',
        //     nome: 'Produção',
        //   },
        //   {
        //     cod: '3',
        //     nome: 'Expedição',
        //   },
        //   {
        //     cod: '4',
        //     nome: 'Cancelado',
        //   },
        // ];
        function ComercialCicloVendasPedidosProducaoTelasFormularioComponent(activatedRoute, location, formBuilder, localeService, pnotifyService, confirmModalService, atividadesService, titleService, dateService, formularioService, formularioCotacoesService, enderecoDetalhesService, historicoComprasService, // private clienteDetalhesService: ComercialCicloVendasCotacoesFormularioModalDetalhesClienteService,
        finalizacaoService, calculoService, descontoService, estoqueService, comboService, bsModalService, pedidosProducaoTelasService, router, modalService, clienteDetalhesService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.location = location;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.dateService = dateService;
          this.formularioService = formularioService;
          this.formularioCotacoesService = formularioCotacoesService;
          this.enderecoDetalhesService = enderecoDetalhesService;
          this.historicoComprasService = historicoComprasService;
          this.finalizacaoService = finalizacaoService;
          this.calculoService = calculoService;
          this.descontoService = descontoService;
          this.estoqueService = estoqueService;
          this.comboService = comboService;
          this.bsModalService = bsModalService;
          this.pedidosProducaoTelasService = pedidosProducaoTelasService;
          this.router = router;
          this.modalService = modalService;
          this.clienteDetalhesService = clienteDetalhesService;
          this.permissoesAcesso = {
            acessoClientes: false,
            historicoExclusao: false,
            duplicataCarteira: false
          };
          this.loaderFullScreen = true;
          this.autoScrollToCarrinho = true;
          this.breadCrumbTree = [];
          this.dependenciesLoaded = false;
          this.carrinhoHasError = false;
          this.codClientErrors = false;
          this.situacoes = [];
          this.empresas = [];
          this.depositos = [];
          this.filteredDepositos = [];
          this.formasPagamento = [];
          this.formasContato = [];
          this.origensContato = [];
          this.transportadoras = [];
          this.formData = [];
          this.carrinho = [];
          this.materiais = [];
          this.producao = false;
          this.expedicao = false;
          this.unsaved = true;
          this.locaisEntrega = [];
          this.contatos = [];
          this.dadosLancamento = {
            data: null,
            codVendedor: null,
            nomeVendedor: null
          };
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hasAccessToClient();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsetLoaderEvents();
            this.activatedRouteSubscription.unsubscribe();
            this.codClienteSubscription.unsubscribe();
            this.formularioService.clearCarteiraClientes();
          }
        }, {
          key: "hasAccessToClient",
          value: function hasAccessToClient() {
            var resolver = this.activatedRoute.snapshot.data.data;

            if (resolver.success === true) {
              this.registrarAcesso();
              this.setBreadCrumb();
              this.getFormFields();
              this.setFormBuilder();
              this.setLoaderEvents();
              this.setClienteSubscription();
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.nrProposta) {
                _this10.appTitle = 'Editar Pedido';
                _this10.action = 'update';
              } else {
                _this10.appTitle = 'Novo Pedido';
                _this10.action = 'create';
              }

              _this10.idSubModulo = params.idSubModulo;
              console.log(params);
              _this10.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Ciclo de vendas',
                routerLink: "/comercial/ciclo-vendas/".concat(_this10.idSubModulo)
              }, {
                descricao: 'Pedidos Produção de Telas',
                routerLink: "/comercial/ciclo-vendas/".concat(_this10.idSubModulo, "/pedidos-producao-telas/lista")
              }, {
                descricao: _this10.appTitle
              }];
            });
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this11 = this;

            this.formularioCotacoesService.loadDependencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
              _this11.dependenciesLoaded = true;
            })).subscribe(function (response) {
              _this11.situacoes = response[0].data || [];
              _this11.empresas = response[1].result || [];
              _this11.depositos = response[2].result || [];
              _this11.formasPagamento = response[3].data || [];
              _this11.filteredDepositos = _this11.depositos.filter(function (value) {
                return value.idEmpresa == 18;
              });
            });
          }
        }, {
          key: "getDate",
          value: function getDate() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10);
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            var resolver = this.activatedRoute.snapshot.data.data;

            if (resolver.success === true) {
              var data = resolver.data;
              var formValue = this.checkRouterParams();
              var codCotacao = typeof this.codCotacao == 'undefined' ? this.idReservado : this.codCotacao;
              this.codEndereco = data.codEndereco;
              this.form = this.formBuilder.group({
                nrPedido: [data.nrPedido],
                codCotacao: [{
                  value: codCotacao,
                  disabled: true
                }],
                codSituacao: [data.codSituacao != 0 ? data.codSituacao : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
                codPrioridade: [{
                  value: data.prioridade,
                  disabled: false
                }],
                codCliente: [data.codCliente],
                codRazaoSocial: [data.codRazaoSocial],
                codDeposito: [data.codLocalizacaoEstoque, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
                //codLocalizacao: [data.codLocalizacaoExpedicao, [Validators.required]],
                dataEntrega: data.dataPrevisaoEntrega ? [this.dateService.convertStringToDate(data.dataPrevisaoEntrega, 'usa'), _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required] : [this.getDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
                codEndereco: [data.codEndereco != 0 ? data.codEndereco : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
                codFormaPagamento: [118,
                /*data.codFormaPagamento != 0 ? data.codFormaPagamento : null,*/
                [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
                duplicatasSomenteCarteira: [{
                  value: data.duplicatasSomenteCarteira,
                  disabled: true
                }],
                observacoes: [data.observacao],
                obsProducao: [data.obsProducao]
              });
              this.checkPermissoesAcesso();
              this.getLocaisEntrega(data.codCliente);
              this.dadosLancamento.data = data.dataCadastro;
              this.dadosLancamento.codVendedor = data.codUsuarioCadastro;
              this.dadosLancamento.nomeVendedor = data.nomeUsuarioCadastro;
              this.carrinho = data.carrinho;
              this.formularioService.dataSubject.next(data);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "getUserPermissoes",
          value: function getUserPermissoes() {
            var resolver = this.activatedRoute.snapshot.data.permissoes;

            if (resolver.success === true) {
              var permissoesAcesso = resolver.data;
              this.permissoesAcesso = permissoesAcesso;
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "checkPermissoesAcesso",
          value: function checkPermissoesAcesso() {
            if (this.permissoesAcesso.duplicataCarteira === true) {
              this.form.controls.duplicatasSomenteCarteira.enable();
            }
          }
          /**
          * @source = 'application' || 'user'
          */

        }, {
          key: "onChangeCliente",
          value: function onChangeCliente(codCliente, source) {
            this.form.controls.codCliente.setValue(codCliente);
            this.codClientErrors = false;

            if (codCliente === null) {
              this.form.controls.codEndereco.setValue(null);
              this.locaisEntrega = [];
            } else {
              this.getLocaisEntrega(codCliente, source);
            }
          }
        }, {
          key: "onFecharModal",
          value: function onFecharModal(event) {
            this.modalRef.hide();
          }
        }, {
          key: "onDetalhesLocalEntrega",
          value: function onDetalhesLocalEntrega() {
            if (this.form.value.codEndereco != null) {
              this.enderecoDetalhesService.showModal(this.form.value.codCliente, this.form.value.codEndereco);
            }
          }
        }, {
          key: "getLinkAddLocalEntrega",
          value: function getLinkAddLocalEntrega() {
            return "/comercial/clientes/cadastro/".concat(this.form.value.codCliente, "/enderecos/novo");
          }
        }, {
          key: "onReloadLocalEntrega",
          value: function onReloadLocalEntrega() {
            if (this.locaisEntregaLoader === false) {
              this.getLocaisEntrega(this.form.value.codCliente, 'user');
            }
          }
        }, {
          key: "getLocaisEntrega",
          value: function getLocaisEntrega(codCliente, source) {
            var _this12 = this;

            if (source != 'application') {
              this.form.controls.codEndereco.markAsUntouched();
              this.form.controls.codEndereco.setValue(null);
              this.form.controls.codEndereco.disable();
            }

            this.locaisEntrega = [];
            this.locaisEntregaLoader = true;
            this.formularioCotacoesService.getLocaisEntrega(codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
              _this12.locaisEntregaLoader = false;

              _this12.form.controls.codEndereco.enable();

              _this12.form.controls.codEndereco.setValue(_this12.codEndereco);

              _this12.form.controls.codEndereco.updateValueAndValidity();
            })).subscribe(function (response) {
              if (response.success === true) {
                var _enderecos = response.data.enderecos;

                var _enderecosAguardando = response.data.enderecosAguardando || [];

                var enderecos = [],
                    enderecosAguardando = [];

                for (var i = 0; i < _enderecos.length; i++) {
                  enderecos.push({
                    codEndereco: _enderecos[i].id,
                    descricao: _this12.formatLocalEntrega(_enderecos[i]),
                    tipo: 'Aprovados'
                  });
                }

                for (var _i2 = 0; _i2 < _enderecosAguardando.length; _i2++) {
                  enderecosAguardando.push({
                    codEndereco: _enderecosAguardando[_i2].id,
                    descricao: _this12.formatLocalEntrega(_enderecosAguardando[_i2]),
                    tipo: 'Aguardando aprovação'
                  });
                }

                _this12.locaisEntrega = [].concat(enderecos, enderecosAguardando);
              }
            });
          }
        }, {
          key: "formatLocalEntrega",
          value: function formatLocalEntrega(localEntrega) {
            return "".concat(localEntrega.endereco, " - ").concat(localEntrega.bairro, ", ").concat(localEntrega.cidade, " - ").concat(localEntrega.uf, " - ").concat(localEntrega.cep);
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var formValue = {
              codDeposito: null,
              codLocalizacao: null
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                if (queryParams.f) {
                  var params = atob(queryParams.f);
                  params = JSON.parse(params);
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
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "checkSituacaoCotacao",
          value: function checkSituacaoCotacao(codSituacao) {
            if (codSituacao !== 2) {
              this.form.controls.dataEntrega.disable();
            }
          }
        }, {
          key: "checkClienteCotacao",
          value: function checkClienteCotacao(codCliente) {
            if (codCliente !== null) {
              this.onChangeCliente(codCliente, 'application');
            }
          }
        }, {
          key: "checkMateriaisCarrinho",
          value: function checkMateriaisCarrinho(carrinho) {
            if (carrinho.length > 0) {
              this.formularioService.materiaisSubject.next(carrinho);
            }
          }
        }, {
          key: "setLoaderEvents",
          value: function setLoaderEvents() {
            var _this13 = this;

            this.loaderCalculoSubscription = this.calculoService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
            this.loaderDescontoSubscription = this.descontoService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
            this.loaderComboSubscription = this.comboService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
            this.loaderEstoqueDetalhesSubscription = this.estoqueService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
            this.loaderHistoricoComprasSubscription = this.historicoComprasService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
            this.loaderDetalhesClienteSubscription = this.clienteDetalhesService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
            this.loaderFinalizacaoSubscription = this.finalizacaoService.loaderNavbar.subscribe(function (response) {
              _this13.loaderNavbar = response;
            });
          }
        }, {
          key: "unsetLoaderEvents",
          value: function unsetLoaderEvents() {
            this.loaderCalculoSubscription.unsubscribe();
            this.loaderDescontoSubscription.unsubscribe();
            this.loaderComboSubscription.unsubscribe();
            this.loaderEstoqueDetalhesSubscription.unsubscribe();
            this.loaderHistoricoComprasSubscription.unsubscribe();
            this.loaderDetalhesClienteSubscription.unsubscribe();
            this.loaderFinalizacaoSubscription.unsubscribe();
          }
        }, {
          key: "onLoaderNavbar",
          value: function onLoaderNavbar(event) {
            this.loaderNavbar = event;
          }
        }, {
          key: "onLoaderFullScreen",
          value: function onLoaderFullScreen(event) {
            this.loaderFullScreen = event;
          }
        }, {
          key: "onChangeEmpresa",
          value: function onChangeEmpresa(idEmpresa) {
            this.form.controls.codLocalizacao.reset();
            this.filteredDepositos = this.depositos.filter(function (value) {
              return value.idEmpresa == idEmpresa;
            });

            if (this.filteredDepositos.length === 1) {
              this.form.controls.codLocalizacao.setValue(this.filteredDepositos[0]['idDeposito']);
            }
          } // onChangeDeposito(deposito: any): void {
          //   this.form.controls.codDeposito.setValue(deposito.idEmpresa);
          // }

        }, {
          key: "onChangeValidadeProposta",
          value: function onChangeValidadeProposta(value) {
            var _this14 = this;

            var isValid = true;
            var maxDate = this.dateService.addDaysToDate(new Date(), 15);

            if (value > maxDate) {
              setTimeout(function () {
                isValid = false;

                _this14.form.controls.dataValidade.markAsTouched();

                _this14.form.controls.dataValidade.setErrors({
                  maxDate: true
                });

                _this14.pnotifyService.notice('Data de validade não deve ser superior a 15 dias.');
              }, 250);
            }

            return isValid;
          }
        }, {
          key: "onScrollToCarrinho",
          value: function onScrollToCarrinho(event) {
            var _this15 = this;

            this.autoScrollToCarrinho = event;

            if (this.autoScrollToCarrinho === true) {
              setTimeout(function () {
                _this15.scrollToCarrinho.nativeElement.scrollIntoView({
                  behavior: 'instant'
                });
              }, 500);
            }
          }
        }, {
          key: "onMateriaisScrollTop",
          value: function onMateriaisScrollTop(event) {
            if (event === true) {
              this.onScrollToForm('top');

              if (this.form.value.codDeposito === null) {
                this.form.controls.codDeposito.markAsTouched();
                this.form.controls.codDeposito.markAsDirty();
                this.form.controls.codDeposito.setErrors({
                  required: true
                });
                this.pnotifyService.notice('Selecione um Depósito.');
              }

              if (this.form.value.codLocalizacao === null) {
                this.form.controls.codLocalizacao.markAsTouched();
                this.form.controls.codLocalizacao.markAsDirty();
                this.form.controls.codLocalizacao.setErrors({
                  required: true
                });
                this.pnotifyService.notice('Selecione uma Localização.');
              }
            }
          }
        }, {
          key: "onCarrinho",
          value: function onCarrinho(carrinho) {
            this.materiais = carrinho.materiais;
            this.valorProposta = carrinho.total.valorProposta;
          }
        }, {
          key: "onCarrinhoError",
          value: function onCarrinhoError(event) {
            this.carrinhoHasError = event;
          }
        }, {
          key: "onCarrinhoScrollTop",
          value: function onCarrinhoScrollTop(event) {
            if (event === true) {
              this.onScrollToForm('top');
              this.codClientErrors = true;
              this.form.controls.codCliente.markAsTouched();
              this.form.controls.codCliente.setErrors({
                required: true
              });
              this.pnotifyService.notice('Selecione um cliente.');
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.unsaved = false;
            this.location.back();
            this.sendForm();
            this.formularioService.onNotifySubmit(true);
          }
        }, {
          key: "sendForm",
          value: function sendForm() {
            var _this16 = this;

            if (this.checkFormErrors() === false) {
              var hasPrecoMinimo = false;

              for (var i = 0; i < this.materiais.length; i++) {
                if (Math.floor(this.materiais[i].valorUnit * 100) / 100 > this.materiais[i].valor) {
                  hasPrecoMinimo = true;
                }
              }

              if (hasPrecoMinimo === true) {
                this.confirmModalService.showConfirm(null, 'Preço abaixo do mínimo', 'Existem materiais com preço abaixo do mínimo. Deseja continuar mesmo assim?', 'Cancelar', 'Confirmar').subscribe(function (response) {
                  return response ? _this16.valoresPesoQtde() : rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
                });
              } else {
                this.valoresPesoQtde();
              }
            }
          } // modal

        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "valoresPesoQtde",
          value: function valoresPesoQtde() {
            var _this17 = this;

            this.pesoQtdade = false;

            for (var i = 0; i < this.materiais.length; i++) {
              if (this.materiais[i].quantidade === null || this.materiais[i].pesoEspecifico === null) {
                this.pesoQtdade = true;
              }
            }

            if (this.pesoQtdade === true) {
              this.confirmModalService.showConfirm(null, 'Peso ou quantidade não permitidos', 'O Peso ou valor está com valor 0, favor rever materiais!', null, 'Confirmar').subscribe(function (response) {
                return response ? _this17.pesoQtdade = false : _this17.pesoQtdade = false;
              });
            } else {
              this.sendCotacao();
            }
          }
        }, {
          key: "sendCotacao",
          value: function sendCotacao() {
            var formValue = this.form.getRawValue();
            var dataCotacao = {
              nrPedido: formValue.nrPedido,
              codCotacao: formValue.codCotacao,
              codSituacao: Number(formValue.codSituacao),
              situacao: formValue.codSituacao,
              codCliente: formValue.codCliente,
              razaoSocial: formValue.razaoSocial,
              codEndereco: formValue.codEndereco,
              codContato: formValue.codContato,
              codPrioridade: formValue.codPrioridade,
              codDeposito: formValue.codDeposito,
              codLocalizacao: formValue.codLocalizacao,
              dataEntrega: formValue.dataEntrega,
              observacoes: formValue.observacoes,
              carrinho: this.materiais
            };

            if (this.pesoQtdade = true) {
              this.sentCotacao(dataCotacao);
            } // this.finalizacaoService.sendCotacao(dataCotacao);

          }
        }, {
          key: "sentCotacao",
          value: function sentCotacao(dataCotacao) {
            var _this18 = this;

            this.loaderNavbar = true;

            if (this.action === 'update') {
              this.pedidosProducaoTelasService.putCotacao(dataCotacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
                _this18.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response.success === true) {
                  dataCotacao.carrinho = [];
                  dataCotacao.carrinho = response.data;

                  _this18.activatedRoute.params.subscribe(function (params) {
                    if (params.hasOwnProperty('id')) {
                      _this18.location.back();
                    } else {
                      _this18.router.navigate(["/comercial/ciclo-vendas/".concat(_this18.idSubModulo, "/pedidos-producao-telas/lista")]);
                    }
                  });

                  _this18.pnotifyService.success('Pedido atualizado com sucesso');
                } else {
                  _this18.pnotifyService.error();
                }
              }, function (error) {
                _this18.pnotifyService.error();
              });
            } else {
              this.pedidosProducaoTelasService.postCotacao(dataCotacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
                _this18.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response.success === true) {
                  dataCotacao.carrinho = [];
                  dataCotacao.carrinho = response.data;

                  _this18.pnotifyService.success();

                  _this18.router.navigate(["/comercial/ciclo-vendas/".concat(_this18.idSubModulo, "/pedidos-producao-telas/lista")]);
                } else {
                  _this18.pnotifyService.error();
                }
              }, function (error) {
                _this18.pnotifyService.error();
              });
            }
          } //modal

        }, {
          key: "openModalProducao",
          value: function openModalProducao(producao) {
            this.modalRef = this.bsModalService.show(producao);
          }
        }, {
          key: "openModalExpedicao",
          value: function openModalExpedicao(expedicao) {
            this.modalRef = this.bsModalService.show(expedicao);
          }
        }, {
          key: "closeModal",
          value: function closeModal(modalRef) {
            this.modalRef.hide();
          }
        }, {
          key: "changeSituacao",
          value: function changeSituacao() {
            if (this.form.value.codSituacao == 2) {
              this.producao = true;
              this.expedicao = false;
            } else if (this.form.value.codSituacao == 3) {
              this.expedicao = true;
              this.producao = false;
            }
          }
        }, {
          key: "checkFormErrors",
          value: function checkFormErrors() {
            var hasError = false;

            if (this.carrinhoHasError === true) {
              this.scrollToCarrinho.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
              hasError = true;
            } else {
              if (this.form.controls.codSituacao.errors !== null) {
                this.onScrollToForm('top');
                this.form.controls.codSituacao.markAsTouched();
                this.form.controls.codSituacao.setErrors({
                  incorrect: true
                });
                this.pnotifyService.notice('Selecione a situação.');
                hasError = true;
              }

              if (this.form.controls.codCliente.errors !== null) {
                this.onScrollToForm('top');
                this.codClientErrors = true;
                this.form.controls.codCliente.markAsTouched();
                this.form.controls.codCliente.setErrors({
                  incorrect: true
                });
                this.pnotifyService.notice('Selecione um cliente.');
                hasError = true;
              }

              if (this.form.controls.dataEntrega.errors !== null) {
                this.onScrollToForm('top');
                this.form.controls.dataEntrega.markAsTouched();
                this.form.controls.dataEntrega.setErrors({
                  incorrect: true
                });
                this.pnotifyService.notice('Informe a data de entrega.');
                hasError = true;
              }
            }

            return hasError;
          }
        }, {
          key: "setClienteSubscription",
          value: function setClienteSubscription() {
            var _this19 = this;

            this.codClienteSubscription = this.formularioService.codCliente.subscribe(function (codCliente) {
              _this19.form.controls.codCliente.setValue(codCliente);

              _this19.onChangeCliente(codCliente, 'user');
            });
          }
        }, {
          key: "onScrollToForm",
          value: function onScrollToForm(position) {
            if (position === 'top') {
              this.scrollToFormOnTop.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            } else if (position === 'bottom') {
              this.scrollToFormOnBottom.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
          }
        }, {
          key: "onLoadCliente",
          value: function onLoadCliente(event) {
            this.isCarteiraClientesLoaded = event;
          } // onClienteDetalhes(): void {
          //   if (this.isCarteiraClientesLoaded === true) {
          //     this.clienteDetalhesService.showModal(this.form.value.codCliente);
          //   } else {
          //     this.pnotifyService.notice('Aguardando a carteira de clientes.');
          //   }
          // }

        }, {
          key: "onHistoricoCompras",
          value: function onHistoricoCompras() {
            var params = this.form.value;

            if (this.isCarteiraClientesLoaded === true) {
              if (this.form.value.codLocalizacao !== null) {
                this.historicoComprasService.showModal(this.setParamsHistoricoCompras(params));
              } else {
                this.onMateriaisScrollTop(true);
              }
            } else {
              this.pnotifyService.notice('Aguardando a carteira de clientes.');
            }
          }
        }, {
          key: "setParamsHistoricoCompras",
          value: function setParamsHistoricoCompras(params) {
            var _params = {};
            _params.codCliente = params.codCliente;
            _params.codEmpresa = params.codEmpresa;
            _params.codEndereco = params.codEndereco;
            return _params;
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field) != '') {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }

              if (field.errors.hasOwnProperty('maxDate') && field.touched) {
                return 'maxDate';
              }
            }

            return '';
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
          key: "hasUnsavedData",
          value: function hasUnsavedData() {
            var unsaved = this.form.dirty && this.unsaved;
            return unsaved;
          }
        }, {
          key: "handleBeforeUnload",
          value: function handleBeforeUnload($event) {
            if (this.hasUnsavedData()) {
              $event.returnValue = true;
            }
          }
        }, {
          key: "formCanDeactivate",
          value: function formCanDeactivate() {
            if (this.hasUnsavedData()) {
              if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
              } else {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "onClienteDetalhes",
          value: function onClienteDetalhes() {
            this.clienteDetalhesService.showModal(this.form.value.codCliente);
          }
        }, {
          key: "onCliente",
          value: function onCliente(event) {
            this.form.patchValue(event);
            console.log(event);
            this.onChangeCliente(event.codCliente, 'user');
            this.onLoadCliente(true);
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_21__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_22__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_23__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_24__["TitleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_25__["DateService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_26__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }, {
          type: _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_27__["ComercialCicloVendasCotacoesFormularioService"]
        }, {
          type: _cotacoes_formulario_modal_detalhes_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_28__["ComercialCicloVendasCotacoesFormularioModalDetalhesEnderecoService"]
        }, {
          type: _cotacoes_formulario_modal_cliente_historico_compras_historico_compras_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasCotacoesFormularioModalHistoricoComprasService"]
        }, {
          type: _modal_finalizacao_finalizacao_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService"]
        }, {
          type: _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService"]
        }, {
          type: _cotacoes_formulario_modal_material_desconto_desconto_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioModalMaterialDescontoService"]
        }, {
          type: _cotacoes_formulario_modal_material_estoque_estoque_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCicloVendasCotacoesFormularioModalMaterialEstoqueService"]
        }, {
          type: _cotacoes_formulario_modal_material_combo_combo_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioModalMaterialComboService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["BsModalService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPedidosProducaoTelasService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["BsModalService"]
        }, {
          type: _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioComponent.propDecorators = {
        scrollToFormOnTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
          args: ['scrollToFormOnTop', {}]
        }],
        scrollToFormOnBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
          args: ['scrollToFormOnBottom', {}]
        }],
        scrollToCarrinho: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
          args: ['scrollToCarrinho', {}]
        }],
        handleBeforeUnload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsLocaleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_21__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_22__["ConfirmModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_23__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_24__["TitleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_25__["DateService"], _formulario_service__WEBPACK_IMPORTED_MODULE_26__["ComercialCicloVendasPedidosProducaoTelasFormularioService"], _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_27__["ComercialCicloVendasCotacoesFormularioService"], _cotacoes_formulario_modal_detalhes_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_28__["ComercialCicloVendasCotacoesFormularioModalDetalhesEnderecoService"], _cotacoes_formulario_modal_cliente_historico_compras_historico_compras_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasCotacoesFormularioModalHistoricoComprasService"], _modal_finalizacao_finalizacao_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService"], _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService"], _cotacoes_formulario_modal_material_desconto_desconto_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioModalMaterialDescontoService"], _cotacoes_formulario_modal_material_estoque_estoque_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCicloVendasCotacoesFormularioModalMaterialEstoqueService"], _cotacoes_formulario_modal_material_combo_combo_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioModalMaterialComboService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["BsModalService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPedidosProducaoTelasService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["BsModalService"], _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioComponent);
      /***/
    },

    /***/
    "Z8pR":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/material/calculo/calculo.component.scss ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z8pR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vbW9kYWwvbWF0ZXJpYWwvY2FsY3Vsby9jYWxjdWxvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "aIse":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/material/calculo/calculo.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aIse(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-auto\">#{{ material.codMaterial }} - {{ material.nomeMaterial | uppercase }}</h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\" *ngIf=\"!loaderModal\">&times;</span>\n      <div class=\"spinner-border spinner-border-sm text-dark ml-auto\" *ngIf=\"loaderModal\"></div>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\" >\n      <!-- *ngIf=\"material && tipoCalculo\" -->\n      <div class=\"col\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"row\">\n                <div class=\"col-7\">\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <p class=\"mb-1\"><label>Unidade para cálculo</label></p>\n                      <p> {{ form.value.unidadeCalculo }} </p>\n                      <!-- <div class=\"custom-control custom-radio\">\n                        <input\n                          type=\"radio\"\n                          id=\"unidadeCalculo_TON\"\n                          name=\"unidadeCalculo\"\n                          class=\"custom-control-input\"\n                          formControlName=\"unidadeCalculo\"\n                          value=\"toneladas\"\n                          (click)=\"onChangeUnidadeCalculo('toneladas', true)\"\n                          [attr.disabled]=\"disabledUnidadeCalculo()\">\n                        <label class=\"custom-control-label\" for=\"unidadeCalculo_TON\">Toneladas</label>\n                      </div>\n                      <div class=\"custom-control custom-radio\">\n                        <input\n                          type=\"radio\"\n                          id=\"unidadeCalculo_BARRA\"\n                          name=\"unidadeCalculo\"\n                          class=\"custom-control-input\"\n                          formControlName=\"unidadeCalculo\"\n                          value=\"barrasPecas\"\n                          (click)=\"onChangeUnidadeCalculo('barrasPecas', true)\"\n                          [attr.disabled]=\"disabledUnidadeCalculo()\">\n                        <label class=\"custom-control-label\" for=\"unidadeCalculo_BARRA\">Barras/Peças</label>\n                      </div> -->\n                      <!-- <div class=\"custom-control custom-radio\">\n                        <input\n                          type=\"radio\"\n                          id=\"unidadeCalculo_BARRA\"\n                          name=\"unidadeCalculo\"\n                          class=\"custom-control-input\"\n                          formControlName=\"unidadeCalculo\"\n                          value=\"m2\"\n                          (click)=\"onChangeUnidadeCalculo('m2', true)\"\n                          [attr.disabled]=\"disabledUnidadeCalculo()\">\n                        <label class=\"custom-control-label\" for=\"unidadeCalculo_BARRA\">M2</label>\n                      </div> -->\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <!-- {{ descQtde }} -->\n                      <label for=\"quantidade\">(QTDE M²)</label>\n                      <input\n                        type=\"text\"\n                        id=\"quantidade\"\n                        class=\"form-control\"\n                        formControlName=\"quantidade\"\n                        currencyMask [options]=\"currencyMaskOptions\"\n                        [ngClass]=\"onFieldError('quantidade') + ' ' + onFieldRequired(form.controls.quantidade)\">\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <label for=\"preco\">{{ descPreco }}</label>\n                      <input\n                        type=\"text\"\n                        id=\"preco\"\n                        class=\"form-control\"\n                        formControlName=\"preco\"\n                        currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\"\n                        [ngClass]=\"onFieldError('preco') + ' ' + onFieldRequired(form.controls.preco)\"\n                        aria-describedby=\"preco-help\">\n                      <small id=\"preco-help\" class=\"form-text text-muted\" style=\"font-size: 11px\">\n                        Preço ideal acima de <strong>{{ material.valorUnit | currency:'BRL':'symbol':'1.2-2' }}</strong>\n                      </small>\n                    </div>\n                  </div>\n                  <div class=\"form-row\" *ngIf=\"showInputMedida()\">\n                    <div class=\"form-group col\">\n                      <label for=\"medida\">Medida (metros)</label>\n                      <input\n                        type=\"text\"\n                        id=\"medida\"\n                        class=\"form-control\"\n                        formControlName=\"medida\"\n                        currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n                        [ngClass]=\"onFieldError('medida') + ' ' + onFieldRequired(form.controls.medida)\">\n                    </div>\n                  </div>\n                  <div class=\"form-row mt-1\">\n                    <div class=\"form-group col mb-0\">\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-block btn-secondary mt-auto\"\n                        (click)=\"onCalcular()\"\n                        [disabled]=\"loaderModal\">\n                        <div *ngIf=\"!loaderModal\">\n                          <i class=\"fas fa-calculator\"></i>\n                          <span>Calcular</span>\n                        </div>\n                        <div *ngIf=\"loaderModal\">\n                          <i class=\"fas fa-cog fa-spin\"></i>\n                          <span>Aguarde</span>\n                        </div>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div *ngIf=\"showInfoMetragem()\">\n                    <div class=\"form-row\">\n                      <div class=\"col\"><hr></div>\n                    </div>\n                    <div class=\"form-row\" *ngIf=\"!showInputMedida()\">\n                      <div class=\"form-group col mb-0\">\n                        <label class=\"mr-1\">Medida 01:</label>\n                        <span>{{ material.medida1 | number:'1.2-2' }} metro(s)</span>\n                      </div>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col mb-0\">\n                        <label class=\"mr-1\">Medida 02:</label>\n                        <span>{{ material.medida2 | number:'1.2-2' }} metro(s)</span>\n                      </div>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col mb-0\">\n                        <label class=\"mb-0 mr-1\">Peso específico:</label>\n                        <span>{{ material.pesoEspecifico | number:'1.2-2' }} kg(s)</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"showInfoFatorMultiplo()\">\n                    <div class=\"form-row\">\n                      <div class=\"col\"><hr></div>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col mb-0\">\n                        <label class=\"mr-1\">Fator múltiplo:</label>\n                        <span>10</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"resultCaculo.length > 0\">\n                    <div class=\"form-row\">\n                      <div class=\"col\"><hr></div>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col\">\n                        <label>Selecione uma opção</label>\n                      </div>\n                    </div>\n                    <div class=\"form-row\" *ngFor=\"let opcaoVenda of resultCaculo; let i = index\">\n                      <div class=\"form-group col mb-0\">\n                        <div class=\"custom-control custom-radio\">\n                          <input\n                            type=\"radio\"\n                            id=\"opcaoVenda_{{ i }}\"\n                            name=\"opcaoVenda\"\n                            class=\"custom-control-input\"\n                            (click)=\"calcularTotais(opcaoVenda)\">\n                          <label class=\"custom-control-label\" for=\"opcaoVenda_{{ i }}\">\n                            {{ opcaoVenda.tonelada | number:'1.3-3' }} Toneladas ({{ opcaoVenda.qtde }} Barras/Peças)\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-6 pl-0 my-auto\">\n              <div class=\"text-right text-uppercase mr-1 mb-2\" style=\"font-size: 11px\">\n                <a class=\"text-primary\" href=\"javascript:void(0)\" (click)=\"onShowImpostos()\">\n                  <i class=\"fas mr-2\" [ngClass]=\"{'fa-chevron-up': showImpostos, 'fa-chevron-down': !showImpostos}\"></i>\n                  <strong>Detalhes</strong>\n                </a>\n              </div>\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                  <div class=\"d-flex justify-content-between w-100\">\n                    <div class=\"my-auto\">\n                      <strong>Peso item</strong>\n                    </div>\n                    <strong class=\"text-secondary\">{{ calculo.tonelada | number:'1.3-3' }} Ton</strong>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\"\n      class=\"btn btn-danger\"\n      (click)=\"onClose()\">\n      Cancelar\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"onSubmit()\"\n      >\n      Confirmar\n    </button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "b/Ws":
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/historico-exclusao/historico-exclusao.component.html ***!
      \***********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bWs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-0 my-auto\">Histórico de exclusões do pedido de venda</h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row mb-3\">\n      <div class=\"col\">\n        <custom-table [config]=\"tableConfig\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Seq.</th>\n              <th scope=\"col\" class=\"text-center\">Data/Hora</th>\n              <th scope=\"col\" class=\"text-center\">Usuário</th>\n              <th scope=\"col\" class=\"text-center\">Tipo</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr\n              *ngFor=\"let item of exclusoes; let i = index\"\n              [class.table-active]=\"i == activeRow\"\n              (click)=\"onShowDescricao(i, item)\">\n              <td class=\"text-center hover\">{{ item.idSeq }}</td>\n              <td class=\"text-center hover\">{{ item.datahora | date:'dd/MM/yyyy HH:mm' }}</td>\n              <td class=\"text-center hover\">{{ item.nomeUsuario | uppercase }}</td>\n              <td class=\"text-center hover\">{{ item.tipo | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Descrição</label>\n            <div class=\"border rounded p-2\">\n              {{ selectedItem.descricao | uppercase }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "bQVD":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/padrao/padrao.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent */

    /***/
    function bQVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_padrao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./padrao.component.html */
      "mPEE");
      /* harmony import */


      var _padrao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./padrao.component.scss */
      "EKao");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../formulario.service */
      "8O77"); // ngx-bootstrap
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent(router, bsModalRef, authService, cotacoesService, formularioService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent);

          this.router = router;
          this.bsModalRef = bsModalRef;
          this.authService = authService;
          this.cotacoesService = cotacoesService;
          this.formularioService = formularioService;
          this.viewChecked = false;
          this.user = {
            idVendedor: 88,
            idEscritorio: 58
          };
          this.tableConfig = {
            isFixed: true,
            border: false,
            small: false,
            hover: false,
            theme: {
              color: 'white'
            }
          };
          this.metasProgresso = {
            toneladas: {
              valor: 0,
              progresso: 0
            },
            clientes: {
              valor: 0,
              progresso: 0
            },
            extras: {
              valor: 0,
              progresso: 0
            }
          };
          this.comissao = 0;
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.user = this.authService.getCurrentUser().info;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.dataCotacao) {
              this.setViewChecked();
            }
          }
        }, {
          key: "setViewChecked",
          value: function setViewChecked() {
            this.loadComponentData();
            this.viewChecked = true;
          }
        }, {
          key: "loadComponentData",
          value: function loadComponentData() {
            this.getComissao();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            var _this20 = this;

            this.formularioService.limparCarrinhoSubject.next(true);
            this.bsModalRef.hide();
            setTimeout(function () {
              _this20.router.navigate(['/comercial/ciclo-vendas/cotacoes-pedidos/lista']);
            }, 100);
          }
        }, {
          key: "calcularTotais",
          value: function calcularTotais(field) {
            var total = {
              quantidade: 0,
              valor: 0
            };

            for (var index = 0; index < this.dataCotacao.carrinho.length; index++) {
              total.quantidade += this.dataCotacao.carrinho[index].quantidade;
              total.valor += this.dataCotacao.carrinho[index].valorTotal;
            }

            return total[field];
          }
        }, {
          key: "onData",
          value: function onData(event) {
            if (event.corrente && Object.entries(event.corrente).length > 0) {
              this.metasEmpty = false;
              this.metasProgresso.toneladas.valor = event.corrente.toneladas.percentual;
              this.metasProgresso.clientes.valor = event.corrente.clientes.percentual;
              this.metasProgresso.extras.valor = event.corrente.extras.percentual;
              this.getProgresso();
            } else {
              this.metasEmpty = true;
            }
          }
        }, {
          key: "getProgresso",
          value: function getProgresso() {
            var _this21 = this;

            if (this.user.idVendedor !== null) {
              this.metasLoaded = false;
              this.cotacoesService.getProgressoCotacao(this.dataCotacao.codCotacao, this.dataCotacao.codEmpresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this21.metasLoaded = true;
              })).subscribe(function (response) {
                if (response.success === true) {
                  _this21.metasProgresso.toneladas.progresso = response.data.toneladas;
                  _this21.metasProgresso.clientes.progresso = response.data.clientes;
                  _this21.metasProgresso.extras.progresso = response.data.extras;
                }
              });
            }
          }
        }, {
          key: "getComissao",
          value: function getComissao() {
            var _this22 = this;

            if (this.viewChecked === false) {
              if (this.user.idVendedor !== null) {
                this.cotacoesService.getComissaoCotacao(this.dataCotacao.codCotacao, this.dataCotacao.codEmpresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                  _this22.comissaoLoaded = true;
                })).subscribe(function (response) {
                  if (response.success === true) {
                    _this22.comissao = response.data.valorComissao;
                  }
                });
              }
            }
          }
        }, {
          key: "classVariacaoPreco",
          value: function classVariacaoPreco(variacaoPreco) {
            var variacaoClass;

            if (variacaoPreco > 0) {
              variacaoClass = 'fas fa-caret-up text-success';
            } else if (variacaoPreco < 0) {
              variacaoClass = 'fas fa-caret-down text-danger';
            }

            return variacaoClass;
          }
        }, {
          key: "formatVariacaoPreco",
          value: function formatVariacaoPreco(variacaoPreco) {
            var valor;

            if (variacaoPreco > 0) {
              valor = "+".concat(variacaoPreco, "%");
            } else if (variacaoPreco < 0) {
              valor = "".concat(variacaoPreco, "%");
            }

            return valor;
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent.propDecorators = {
        dataCotacao: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['dataCotacao']
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario-modal-finalizacao-padrao',
        template: _raw_loader_padrao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_padrao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasService"], _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent);
      /***/
    },

    /***/
    "egEa":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/formulario.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function egEa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<!-- <loader-spinner-full-screen [hidden]=\"!loaderFullScreen\"></loader-spinner-full-screen> -->\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"materiais.length == 0 || pesoQtdade\">\n    Finalizar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" #scrollToFormOnTop>\n    <div class=\"row\">\n      <div class=\"col\">\n        <hr class=\"mt-0 mb-4\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"mtc-title\">Dados de lançamento</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-2\">\n            <label>Data/Hora</label>\n            <p class=\"mb-0\">\n              {{ dadosLancamento.data | date:'dd/MM/yyyy' }} às {{ dadosLancamento.data | date:'HH:mm' }}\n            </p>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label>Usuário</label>\n            <p class=\"mb-0\">\n              #{{ dadosLancamento.codVendedor }} / {{ dadosLancamento.nomeVendedor | uppercase }}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <hr class=\"mt-4 mb-5\">\n      </div>\n    </div>\n    <div class=\"mtc-title\">Dados do Pedido</div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-2\">\n        <label>Situação</label>\n        <select\n          class=\"form-control custom-select\"\n          id=\"codSituacao\"\n          placeholder=\"Selecione...\"\n          formControlName=\"codSituacao\"\n          (change)=\"changeSituacao();\"\n          [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n          <option value=\"1\">Em aberto</option>\n          <option value=\"2\">Produção</option>\n          <option value=\"3\">Expedição</option>\n          <option value=\"4\">Cancelado</option>\n        </select>\n      <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação da cotação é obrigatório.\"></invalid-form-control>\n      </div>\n\n      <div class=\"form-group col-lg-2\">\n        <label class=\"mb-1\" for=\"codPrioridade\">Cód. Prioridade</label>\n        <input\n          type=\"number\"\n          id=\"codPrioridade\"\n          placeholder=\"Digite...\"\n          class=\"form-control\"\n          formControlName=\"codPrioridade\">\n      </div>\n        <!-- <comercial-ciclo-vendas-cotacoes-formulario-template-clientes\n          [acessoClientes]=\"permissoesAcesso.acessoClientes\"\n          [codCliente]=\"form.value.codCliente\"\n          [asFormField]=\"true\"\n          [setErrors]=\"codClientErrors\"\n          (onChange)=\"onChangeCliente($event, 'user')\"\n          (onLoad)=\"onLoadCliente($event)\">\n        </comercial-ciclo-vendas-cotacoes-formulario-template-clientes> -->\n        <div class=\"form-group col-lg-8\">\n          <div\n            class=\"mb-1 d-flex justify-content-between w-100\"\n            style=\"height: 19px\">\n            <label class=\"my-auto\" for=\"codCliente\">Cliente</label>\n            <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\n              <a\n                class=\"text-primary mr-2\"\n                href=\"javascript:void(0)\"\n                (click)=\"openModal(selecionarCliente)\">\n                <strong>Selecionar</strong>\n              </a>\n              <span class=\"mx-2\" *ngIf=\"form.value.codCliente != null\">|</span>\n              <a\n                *ngIf=\"form.value.codCliente != null\"\n                class=\"text-primary mr-2\"\n                href=\"javascript:void(0)\"\n                (click)=\"onClienteDetalhes()\">\n                <strong>Detalhes</strong>\n              </a>\n            </div>\n          </div>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"codRazaoSocial\"\n            formControlName=\"codRazaoSocial\"\n            placeholder=\"Selecionar...\"\n            [attr.disabled]=\"true\"/>\n        </div>\n    </div>\n    <div class=\"form-row\">\n      <!-- <div class=\"form-group col-lg-2\">\n        <label for=\"codDeposito\">Depósito</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"filteredDepositos\"\n          formControlName=\"codDeposito\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codDeposito\"\n          placeholder = \"Selecione...\"\n          bindLabel=\"nomeDeposito\"\n          bindValue=\"idDeposito\"\n          [ngClass]=\"onFieldError('codDeposito') + ' ' + onFieldRequired(form.controls.codDeposito)\">\n        </ng-select>\n        <invalid-form-control [show]=\"onFieldInvalid('codDeposito')\" message=\"Depósito é obrigatório.\"></invalid-form-control>\n      </div> -->\n      <div class=\"form-group col-lg-2\">\n        <label>Localização do Estoque</label>\n        <select\n          class=\"form-control custom-select\"\n          id=\"codDeposito\"\n          formControlName=\"codDeposito\"\n          [ngClass]=\"onFieldError('codDeposito') + ' ' + onFieldRequired(form.controls.codDeposito)\">\n          <option value=\"\">Todos</option>\n          <option value=\"1\">Piracicaba</option>\n          <option value=\"2\">Rio das Pedras</option>\n        </select>\n        <invalid-form-control [show]=\"onFieldInvalid('codDeposito')\" message=\"Localização é obrigatório.\"></invalid-form-control>\n      </div>\n      <!-- <div class=\"form-group col-lg-2\">\n        <label>Localização</label>\n        <select\n          class=\"form-control custom-select\"\n          id=\"codLocalizacao\"\n          placeholder=\"Selecione...\"\n          formControlName=\"codLocalizacao\">\n          <option value=\"\">Todos</option>\n          <option value=\"1\">Piracicaba</option>\n          <option value=\"2\">Rio das Pedras-CD</option>\n          <option value=\"3\">Rio das Pedras-Civil</option>\n          <option value=\"4\">Retira</option>\n        </select>\n      </div> -->\n      <div class=\"form-group col-lg-2\">\n        <label for=\"dataEntrega\">Data de entrega</label>\n        <input\n          class=\"form-control\"\n          id=\"dataEntrega\"\n          type=\"text\"\n          bsDatepicker\n          placeholder=\"Selecione...\"\n          [bsConfig]=\"bsConfig\"\n          formControlName=\"dataEntrega\"\n          [ngClass]=\"onFieldError('dataEntrega') + ' ' + onFieldRequired(form.controls.dataEntrega)\">\n        <invalid-form-control [show]=\"onFieldInvalid('dataEntrega')\" message=\"Data de entrega é obrigatório.\"></invalid-form-control>\n      </div>\n      <div class=\"form-group col-lg-8\">\n        <div class=\"mb-1 d-flex justify-content-between w-100\" style=\"height: 19px\">\n          <label class=\"my-auto\" for=\"codEndereco\">Local de Entrega</label>\n          <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"form.value.codCliente != null\">\n            <a\n              class=\"text-primary mr-2\"\n              href=\"javascript:void(0)\"\n              (click)=\"onDetalhesLocalEntrega()\">\n              <strong>Detalhes</strong> \n            </a>\n            <!-- <span class=\"mx-2\" *ngIf=\"form.value.codCliente != null\">|</span> -->\n            <!-- <a\n              class=\"text-primary mr-2\"\n              href=\"javascript:void(0)\"\n              [routerLink]=\"[getLinkAddLocalEntrega()]\"\n              target=\"_blank\">\n              <strong>Adicionar</strong> \n            </a> -->\n            <span class=\"mx-2\" *ngIf=\"form.value.codCliente != null\">|</span>\n            <a\n            class=\"text-primary mr-2\"\n            href=\"javascript:void(0)\"\n            tooltip=\"Recarregar\"\n            (click)=\"onReloadLocalEntrega()\"\n            >\n              <i class=\"fas fa-redo-alt text-dark\"></i>\n            </a>\n            \n          </div>\n        </div>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"locaisEntrega\"\n          formControlName=\"codEndereco\"\n          [virtualScroll]=\"true\"\n          bindLabel=\"descricao\"\n          bindValue=\"codEndereco\"\n          placeholder = \"Selecione...\"\n          [loading]=\"locaisEntregaLoader\"\n          loadingText=\"Carregando...\"\n          groupBy=\"tipo\"\n          [ngClass]=\"onFieldError('codEndereco') + ' ' + onFieldRequired(form.controls.codEndereco)\">\n        </ng-select>\n        <invalid-form-control [show]=\"onFieldInvalid('codEndereco')\" message=\"Local de entrega é obrigatório.\"></invalid-form-control>\n      </div>\n      \n      <!-- <div class=\"form-group col-lg-4\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <div class=\"mb-1 d-flex justify-content-between w-100\" style=\"height: 19px\">\n              <label class=\"my-auto\" for=\"codFormaPagamento\">Forma de Pagamento</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\n                <a\n                  id=\"top-links\"\n                  class=\"text-primary mr-2\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"onVisualizarDuplicatas()\">\n                  <strong>Visualizar duplicatas</strong> \n                </a>\n              </div>\n            </div>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"formasPagamento\"\n              formControlName=\"codFormaPagamento\"\n              [virtualScroll]=\"true\"\n              placeholder = \"Selecione...\"\n              bindLabel=\"descricao\"\n              bindValue=\"codFormaPagamento\"\n              [ngClass]=\"onFieldError('codFormaPagamento') + ' ' + onFieldRequired(form.controls.codFormaPagamento)\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('codFormaPagamento')\" message=\"Forma de pagamento é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col d-flex\">\n            <div class=\"custom-control custom-checkbox mt-auto\">\n              <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              id=\"duplicatas-somente-carteira\"\n              formControlName=\"duplicatasSomenteCarteira\"\n              [attr.disabled]=\"visualizar ? '' : null\">\n              <label\n                class=\"custom-control-label\"\n                for=\"duplicatas-somente-carteira\">\n                Duplicatas somente carteira\n              </label>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <hr class=\"mt-4 mb-5\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <comercial-ciclo-vendas-pedidos-producao-telas-formulario-materiais-lista\n          [codDeposito]=\"form.value.codDeposito\"\n          [codCliente]=\"form.value.codCliente\"\n          [codEndereco]=\"form.value.codEndereco\"\n          [codFormaPagamento]=\"form.value.codFormaPagamento\"\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\n          (loaderFullScreen)=\"onLoaderFullScreen($event)\"\n          (scrollToFormOnTop)=\"onMateriaisScrollTop($event)\"\n          (scrollToCarrinho)=\"onScrollToCarrinho($event)\">\n        </comercial-ciclo-vendas-pedidos-producao-telas-formulario-materiais-lista>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <hr class=\"my-5\">\n      </div>\n    </div>\n    <div class=\"row\" #scrollToCarrinho>\n      <div class=\"col\">\n        <comercial-ciclo-vendas-pedidos-producao-telas-formulario-carrinho\n          [idReservado]=\"idReservado\"\n          [codCotacao]=\"codCotacao\"\n          [codCliente]=\"form.value.codCliente\"\n          [initialValue]=\"carrinho\"\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\n          (hasError)=\"onCarrinhoError($event)\"\n          (scrollTop)=\"onCarrinhoScrollTop($event)\"\n          (carrinho)=\"onCarrinho($event)\">\n        </comercial-ciclo-vendas-pedidos-producao-telas-formulario-carrinho>\n      </div>\n    </div>\n    <div #scrollToFormOnBottom *ngIf=\"dependenciesLoaded\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col\">\n          <!-- <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"observacoes\">Observações</label>\n              <textarea\n                class=\"form-control\"\n                id=\"observacoes\"\n                formControlName=\"observacoes\">\n              </textarea>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </form>\n  <ng-template #selecionarCliente>\n    <comercial-cliclo-vendas-pedidos-producao-telas-formulario-modal-selecionar\n      (fecharModal)=\"onFecharModal($event)\"\n      (cliente)=\"onCliente($event)\">\n    </comercial-cliclo-vendas-pedidos-producao-telas-formulario-modal-selecionar>\n  </ng-template>\n</app-body>\n";
      /***/
    },

    /***/
    "fU5a":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/carrinho/carrinho.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent */

    /***/
    function fU5a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_carrinho_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./carrinho.component.html */
      "hcmP");
      /* harmony import */


      var _carrinho_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carrinho.component.scss */
      "SBeU");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../formulario.service */
      "8O77");
      /* harmony import */


      var _cotacoes_formulario_modal_material_combo_combo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../cotacoes/formulario/modal/material/combo/combo.service */
      "vISg");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var _cotacoes_formulario_modal_material_desconto_desconto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../cotacoes/formulario/modal/material/desconto/desconto.service */
      "q7sL");
      /* harmony import */


      var _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../cotacoes/formulario/formulario.service */
      "/Zk1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../modal/material/calculo/calculo.service */
      "kmA5"); // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent(formBuilder, pnotifyService, confirmModalService, formularioService, calculoService, descontoService, comboService, pedidosProducaoTelasService, formularioProducaoService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent);

          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.formularioService = formularioService;
          this.calculoService = calculoService;
          this.descontoService = descontoService;
          this.comboService = comboService;
          this.pedidosProducaoTelasService = pedidosProducaoTelasService;
          this.formularioProducaoService = formularioProducaoService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.hasError = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.scrollTop = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.carrinho = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.subtitles = [{
            id: 1,
            text: 'Preço acima do mínimo',
            color: 'green'
          }, {
            id: 2,
            text: 'Preço abaixo do mínimo',
            color: 'red'
          }];
          this.tableHeadConfig = {
            border: false,
            small: false,
            theme: {
              color: 'white'
            }
          };
          this.tableBodyConfig = {
            subtitleBorder: true,
            isFixed: true,
            border: false,
            small: false,
            hover: false,
            theme: {
              color: 'white'
            }
          };
          this.selectedCodEmpresa = null;
          this.descontoCarrinho = {
            tipo: null,
            desconto: null
          };
          this.total = {
            quantidade: 0,
            pesoEspecifico: 0,
            valor: 0,
            valorIpi: 0,
            valorIcms: 0,
            valorDescMaterial: 0,
            valorDescCarrinho: 0,
            valorTotalOri: 0,
            valorTotal: 0,
            valorProposta: 0
          };
          this.cardCounterConfig = {
            showDecimals: true,
            format: 'currency'
          };
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.submitSubscription();
            this.materiaisSubject();
            this.calculoSubject();
            this.setFormBuilder(); // this.checkPreviously();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionSubmit.unsubscribe();
            this.materiaisSubscription.unsubscribe();
            this.calculoSubscription.unsubscribe();
            this.clearLocalStorage();
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this23 = this;

            this.subscriptionSubmit = this.formularioService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                if (_this23.form.valid) {
                  _this23.carrinhoEmitter();
                } else {
                  _this23.hasError.emit(true);

                  _this23.pnotifyService.notice('Preencha os valores de todos os materiais.');
                }
              }
            });
          }
        }, {
          key: "materiaisSubject",
          value: function materiaisSubject() {
            var _this24 = this;

            this.newMaterial = false;
            this.materiaisSubscription = this.formularioService.materiaisSubject.subscribe(function (response) {
              if (_this24.nrPedido === undefined) {
                var materiais = _this24.formatMateriais(response);

                _this24.newMaterial = true;

                _this24.onAddMaterial(materiais);
              } else {
                var materiaisUpdate = _this24.formatMateriaisUpdate(response);

                _this24.onAddMaterial(materiaisUpdate);
              }
            });
          }
        }, {
          key: "limparCarrinhoSubject",
          value: function limparCarrinhoSubject() {
            var _this25 = this;

            this.limparCarrinhoSubscription = this.formularioService.limparCarrinhoSubject.subscribe(function (response) {
              if (response === true) {
                _this25.onLimparCarrinho();
              }
            });
          }
        }, {
          key: "calculoSubject",
          value: function calculoSubject() {
            var _this26 = this;

            this.calculoSubscription = this.formularioProducaoService.calculoSubject.subscribe(function (calculo) {
              var formArray = _this26.form.controls.materiais;
              var formGroup = formArray.controls[calculo.index];
              formGroup.controls.quantidade.setValue(calculo.qtde);
              formGroup.controls.pesoEspecifico.setValue(calculo.tonelada);
              formGroup.controls.valor.setValue(calculo.valorUnitario);
              formGroup.controls.percentualIpi.setValue(calculo.aliquotaIpi);
              formGroup.controls.valorIpi.setValue(calculo.valorIpi);
              formGroup.controls.percentualIcms.setValue(calculo.aliquotaIcms);
              formGroup.controls.valorIcms.setValue(calculo.valorIcms);
              formGroup.controls.valorIcmsSt.setValue(calculo.valorIcmsSt);
              formGroup.controls.valorTotalOri.setValue(calculo.tonelada * calculo.valorUnitario);
              formGroup.controls.valorTotal.setValue(calculo.tonelada * calculo.valorUnitario);

              _this26.onCalcularTotais(true);
            });
          }
        }, {
          key: "carrinhoEmitter",
          value: function carrinhoEmitter() {
            this.hasError.emit(false);
            this.carrinho.emit({
              materiais: this.form.value.materiais,
              total: this.total
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              materiais: this.formBuilder.array([])
            });
            this.checkInitialValues();
          }
        }, {
          key: "checkInitialValues",
          value: function checkInitialValues() {
            if (this.initialValue.length > 0) {
              this.newMaterial = true;
              this.onAddMaterial(this.initialValue);
            }
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(materiais) {
            this.nrPedido = materiais[0].nrPedido;

            if (this.newMaterial === true) {
              if (materiais.length > 0) {
                var hasError = false,
                    qtdeAdicionados = 0;

                for (var i = 0; i < materiais.length; i++) {
                  if ((this.selectedCodEmpresa === null || this.selectedCodEmpresa === materiais[i].codEmpresa) && hasError === false) {
                    if (this.checkMaterialExists(materiais[i]) === false) {
                      this.materiais.push(this.formBuilder.group({
                        nrItem: [materiais[i].nrItem],
                        idReservado: [materiais[i].idReservado],
                        codCotacao: [materiais[i].codCotacao],
                        codMaterial: [materiais[i].codMaterial],
                        nomeMaterial: [materiais[i].nomeMaterial],
                        quantidade: [materiais[i].qtdeItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        valorUnit: [materiais[i].valorUnit],
                        valor: [materiais[i].valor, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        percentualIpi: [materiais[i].percentualIpi],
                        valorIpi: [materiais[i].valorIpi, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        percentualIcms: [materiais[i].percentualIcms],
                        valorIcms: [materiais[i].valorIcms, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        valorIcmsSt: [materiais[i].valorIcmsSt != null ? materiais[i].valorIcmsSt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        tipoDesc: [materiais[i].tipoDesc],
                        valorDesc: [materiais[i].valorDesc],
                        percentualDesc: [materiais[i].percentualDesc],
                        valorTotalOri: [materiais[i].valorTotalOri],
                        valorTotal: [materiais[i].valorTotal, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        codEmpresa: [materiais[i].codEmpresa],
                        nomeEmpresa: [materiais[i].nomeEmpresa],
                        codDeposito: [materiais[i].codDeposito],
                        nomeDeposito: [materiais[i].nomeDeposito],
                        medida1: [materiais[i].medida1],
                        medida2: [materiais[i].medida2],
                        pesoEspecifico: [materiais[i].peso],
                        materialAssociado: [materiais[i].materialAssociado]
                      }));
                      this.setSelectedCodEmpresa(materiais[i].codEmpresa);
                      qtdeAdicionados++;
                    }
                  } else {
                    hasError = true;
                  }
                }

                if (qtdeAdicionados > 0) {
                  this.setLocalStorage(this.form.value.materiais);
                  console.log(this.form.value.materiais);
                  this.onCalcularTotais(true);
                  setTimeout(function () {}, 500);
                }
              }

              this.newMaterial = false;
            } else {
              if (materiais.length > 0) {
                var _hasError = false,
                    _qtdeAdicionados = 0;

                for (var _i3 = 0; _i3 < materiais[0].length; _i3++) {
                  if (this.checkMaterialExists(materiais[_i3]) === false) {
                    this.materiais.push(this.formBuilder.group({
                      nrItem: [this.nrItem],
                      idReservado: [materiais[0][_i3].idReservado],
                      codCotacao: [materiais[0][_i3].codCotacao],
                      codMaterial: [materiais[0][_i3].codMaterial],
                      nomeMaterial: [materiais[0][_i3].nomeMaterial],
                      quantidade: [materiais[0][_i3].qtdeItem, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                      valorUnit: [materiais[0][_i3].valorUnit],
                      valor: [materiais[0][_i3].valor, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                      percentualIpi: [materiais[0][_i3].percentualIpi],
                      valorIpi: [materiais[0][_i3].valorIpi, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                      percentualIcms: [materiais[0][_i3].percentualIcms],
                      valorIcms: [materiais[0][_i3].valorIcms, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                      valorIcmsSt: [materiais[0][_i3].valorIcmsSt != null ? materiais[0][_i3].valorIcmsSt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                      tipoDesc: [materiais[0][_i3].tipoDesc],
                      valorDesc: [materiais[0][_i3].valorDesc],
                      percentualDesc: [materiais[0][_i3].percentualDesc],
                      valorTotalOri: [materiais[0][_i3].valorTotalOri],
                      valorTotal: [materiais[0][_i3].valorTotal, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                      codEmpresa: [materiais[0][_i3].codEmpresa],
                      nomeEmpresa: [materiais[0][_i3].nomeEmpresa],
                      codDeposito: [materiais[0][_i3].codDeposito],
                      nomeDeposito: [materiais[0][_i3].nomeDeposito],
                      medida1: [materiais[0][_i3].medida1],
                      medida2: [materiais[0][_i3].medida2],
                      pesoEspecifico: [materiais[0][_i3].peso],
                      materialAssociado: [materiais[0][_i3].materialAssociado]
                    }));
                    this.setSelectedCodEmpresa(materiais[0][_i3].codEmpresa);
                    _qtdeAdicionados++;
                  }
                }

                if (_qtdeAdicionados > 0) {
                  this.setLocalStorage(this.form.value.materiais);
                  console.log(this.form.value.materiais);
                  this.onCalcularTotais(true);
                  setTimeout(function () {}, 500);
                }
              }
            }

            ;
          }
        }, {
          key: "checkMaterialExists",
          value: function checkMaterialExists(material) {
            return this.form.value.materiais.some(function (el) {
              return el.codMaterial === material.codMaterial;
            });
          }
        }, {
          key: "onAssocMaterial",
          value: function onAssocMaterial(material) {
            if (material.materialAssociado === 1) {
              this.comboService.showModal(material);
            }
          }
        }, {
          key: "onCalcMaterial",
          value: function onCalcMaterial(index, material) {
            if (this.codCliente !== null) {
              this.calculoService.showModal(index, material, this.codCliente);
            } else {
              this.scrollTop.emit(true);
            }
          }
        }, {
          key: "onDescontoMaterial",
          value: function onDescontoMaterial(index, material) {
            if (material.valorTotal > 0) {
              this.descontoService.descontoMaterial(index, material);
            } else {
              this.pnotifyService.notice('Realize o cálculo de quantidades para continuar.');
            }
          }
        }, {
          key: "onDescontoCarrinho",
          value: function onDescontoCarrinho() {
            var hasError = false;
            var materiais = this.form.value.materiais;

            for (var i = 0; i < materiais.length; i++) {
              if (materiais[i].valorTotal === 0) {
                hasError = true;
              }
            }

            if (hasError === false) {
              this.descontoService.descontoCarrinho(this.descontoCarrinho);
            } else {
              this.pnotifyService.notice('Realize o cálculo de quantidades para continuar.');
            }
          }
        }, {
          key: "onLimparCarrinho",
          value: function onLimparCarrinho() {
            var materiais = this.form.get('materiais');
            materiais.clear();
            this.setSelectedCodEmpresa(null);
            this.onCalcularTotais(true);
            this.clearLocalStorage();
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index, material) {
            var _this27 = this;

            var nrItem = index + 1;

            if (this.nrPedido != undefined) {
              this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (result) {
                return result ? _this27.deleteMaterialCotacao(nrItem, _this27.nrPedido) : rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                _this27.loaderNavbar.emit(false);
              })).subscribe(function (response) {
                if (response.success === true) {
                  _this27.materiais.removeAt(index);

                  _this27.onCalcularTotais(false);

                  _this27.carrinhoEmitter();

                  _this27.setLocalStorage(_this27.form.value.materiais);

                  if (_this27.form.value.materiais.length === 0) {
                    _this27.setSelectedCodEmpresa(null);
                  }
                } else {
                  _this27.pnotifyService.error();
                }
              }, function (error) {
                _this27.pnotifyService.error();
              });
            } else {
              this.materiais.removeAt(index);
            }
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do material?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMaterialCotacao",
          value: function deleteMaterialCotacao(index, codMaterial) {
            this.loaderNavbar.emit(true);
            return this.pedidosProducaoTelasService.deleteMaterialCotacao(index, codMaterial);
          }
        }, {
          key: "formatMateriais",
          value: function formatMateriais(data) {
            var materiais = [];

            for (var index = 0; index < data.length; index++) {
              var material = {
                idReservado: this.idReservado !== null ? this.idReservado : null,
                codCotacao: this.codCotacao !== null ? this.codCotacao : null,
                codMaterial: data[index].codMaterial,
                nomeMaterial: data[index].nomeMaterial,
                quantidade: 0,
                valorUnit: data[index].valorUnit,
                valor: 0,
                percentualIpi: data[index].percentualIpi,
                valorIpi: 0,
                percentualIcms: data[index].percentualIcms,
                valorIcms: 0,
                valorIcmsSt: 0,
                tipoDesc: null,
                valorDesc: 0,
                percentualDesc: 0,
                valorTotalOri: 0,
                valorTotal: 0,
                codEmpresa: data[index].codEmpresa,
                nomeEmpresa: data[index].nomeEmpresa,
                codDeposito: data[index].codDeposito,
                nomeDeposito: data[index].nomeDeposito,
                medida1: data[index].medida1,
                medida2: data[index].medida2,
                pesoEspecifico: data[index].pesoEspecifico,
                materialAssociado: data[index].materialAssociado
              };
              materiais.push(material);
            }

            return materiais;
          }
        }, {
          key: "formatMateriaisUpdate",
          value: function formatMateriaisUpdate(data) {
            var materiais = [];

            for (var index = 0; index < data.length; index++) {
              var material = [{
                idReservado: this.idReservado !== null ? this.idReservado : null,
                codCotacao: this.codCotacao !== null ? this.codCotacao : null,
                codMaterial: data[index].codMaterial,
                nomeMaterial: data[index].nomeMaterial,
                quantidade: 0,
                valorUnit: data[index].valorUnit,
                valor: 0,
                percentualIpi: data[index].percentualIpi,
                valorIpi: 0,
                percentualIcms: data[index].percentualIcms,
                valorIcms: 0,
                valorIcmsSt: 0,
                tipoDesc: null,
                valorDesc: 0,
                percentualDesc: 0,
                valorTotalOri: 0,
                valorTotal: 0,
                codEmpresa: data[index].codEmpresa,
                nomeEmpresa: data[index].nomeEmpresa,
                codDeposito: data[index].codDeposito,
                nomeDeposito: data[index].nomeDeposito,
                medida1: data[index].medida1,
                medida2: data[index].medida2,
                pesoEspecifico: data[index].pesoEspecifico,
                materialAssociado: data[index].materialAssociado
              }];
              materiais.push(material);
            }

            return materiais;
          } // checkPreviously(): void {
          //   const _localStorage = localStorage.getItem('materiais');
          //   if (_localStorage !== null) {
          //     const materiais = JSON.parse(atob(_localStorage));
          //     if (
          //       materiais.length > 0 &&
          //       this.idReservado !== null &&
          //       this.idReservado == materiais[0].idReservado
          //     ) {
          //       this.confirmModalService
          //         .showConfirm(
          //           null,
          //           `#${this.idReservado} / Cotação não finalizada`,
          //           'Parece que essa cotação foi iniciada e não foi finalizada. Deseja recuperar os materiais da cotação?',
          //           'Cancelar',
          //           'Confirmar'
          //         )
          //         .subscribe((response: boolean) =>
          //           response
          //             ? this.onConfirmAddMaterial(materiais)
          //             : this.clearLocalStorage()
          //         );
          //     }
          //   }
          // }

        }, {
          key: "onConfirmAddMaterial",
          value: function onConfirmAddMaterial(materiais) {
            var _this28 = this;

            this.onAddMaterial(materiais);
            setTimeout(function () {
              _this28.scrollToCarrinho.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }, 500);
          }
        }, {
          key: "setLocalStorage",
          value: function setLocalStorage(data) {
            this.clearLocalStorage();
            localStorage.setItem('materiais', btoa(JSON.stringify(data)));
          }
        }, {
          key: "clearLocalStorage",
          value: function clearLocalStorage() {
            localStorage.removeItem('materiais');
          }
        }, {
          key: "onCalcularTotais",
          value: function onCalcularTotais(emitter) {
            var materiais = this.form.value.materiais;
            this.total.quantidade = 0;
            this.total.pesoEspecifico = 0;
            this.total.valor = 0;
            this.total.valorIcms = 0;
            this.total.valorIpi = 0;
            this.total.valorDescMaterial = 0;
            this.total.valorDescCarrinho = 0;
            this.total.valorTotalOri = 0;
            this.total.valorTotal = 0;
            this.total.valorProposta = 0;

            if (materiais.length > 0) {
              for (var index = 0; index < materiais.length; index++) {
                this.total.quantidade += materiais[index].quantidade;
                this.total.pesoEspecifico += materiais[index].pesoEspecifico;
                this.total.valor += materiais[index].valor;
                this.total.valorIcms += materiais[index].valorIcms;
                this.total.valorIpi += materiais[index].valorIpi;
                this.total.valorDescMaterial += materiais[index].valorDesc;
                this.total.valorTotalOri += materiais[index].valorTotalOri;
                this.total.valorTotal += materiais[index].valorTotal;
              }

              if (this.descontoCarrinho.tipo !== null) {
                if (this.descontoCarrinho.tipo === 'valor') {
                  this.total.valorDescCarrinho = this.total.valorDescMaterial + this.descontoCarrinho.desconto;
                  this.total.valorProposta = this.total.valorTotal + this.total.valorIpi - this.total.valorDescCarrinho;
                } else if (this.descontoCarrinho.tipo === 'percentual') {
                  this.total.valorTotal = (100 - this.descontoCarrinho.desconto) / 100 * this.total.valorTotal;
                  this.total.valorDescCarrinho = this.total.valorDescMaterial + (this.total.valorTotalOri - this.total.valorTotal);
                  this.total.valorProposta = this.total.valorTotal + this.total.valorIpi - this.total.valorDescCarrinho;
                } else {
                  this.total.valorDescCarrinho = this.total.valorDescMaterial;
                  this.total.valorProposta = this.total.valorTotal + this.total.valorIpi;
                }
              } else {
                this.total.valorDescCarrinho = this.total.valorDescMaterial;
                this.total.valorProposta = this.total.valorTotal + this.total.valorIpi;
              }

              this.setLocalStorage(this.form.value.materiais);
            }

            if (emitter === true) {
              this.carrinhoEmitter();
            }
          }
        }, {
          key: "resetDescontoCarrinho",
          value: function resetDescontoCarrinho() {
            this.descontoCarrinho = {
              tipo: null,
              desconto: null
            };
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
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
          key: "classStatusBorder",
          value: function classStatusBorder(material) {
            var borderClass;

            if (Math.floor(material.valorUnit * 100) / 100 > material.valor) {
              borderClass = 'border-danger';
            } else {
              borderClass = 'border-success';
            }

            return borderClass;
          }
        }, {
          key: "checkValorMaterial",
          value: function checkValorMaterial(material) {
            var validator;

            if (Math.floor(material.valorUnit * 100) / 100 > material.valor) {
              validator = false;
            } else {
              validator = true;
            }

            return validator;
          }
        }, {
          key: "columSize",
          value: function columSize(key) {
            var size;

            switch (key) {
              case 'index':
                size = 4;
                break;

              case 'nomeMaterial':
                size = 22;
                break;

              case 'quantidade':
                size = 8;
                break;

              case 'valor':
                size = 8;
                break;

              case 'valorIcms':
                size = 8;
                break;

              case 'valorIpi':
                size = 8;
                break;

              case 'valorDesc':
                size = 8;
                break;

              case 'valorTotal':
                size = 9;
                break;

              case 'nomeDeposito':
                size = 11;
                break;

              case 'buttons':
                size = 13;
                break;
            }

            return "".concat(size, "%");
          }
        }, {
          key: "setSelectedCodEmpresa",
          value: function setSelectedCodEmpresa(codEmpresa) {
            this.selectedCodEmpresa = codEmpresa;
          }
        }, {
          key: "materiais",
          get: function get() {
            return this.form.get('materiais');
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasCotacoesFormularioService"]
        }, {
          type: _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService"]
        }, {
          type: _cotacoes_formulario_modal_material_desconto_desconto_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioModalMaterialDescontoService"]
        }, {
          type: _cotacoes_formulario_modal_material_combo_combo_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesFormularioModalMaterialComboService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent.propDecorators = {
        idReservado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
          args: ['idReservado']
        }],
        codCotacao: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
          args: ['codCotacao']
        }],
        codCliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
          args: ['codCliente']
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
          args: ['initialValue']
        }],
        dadosCalculo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
          args: ['dadosCalculo']
        }],
        loaderNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
          args: ['loaderNavbar']
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
          args: ['hasError']
        }],
        scrollTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
          args: ['scrollTop']
        }],
        carrinho: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
          args: ['carrinho']
        }],
        scrollToCarrinho: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
          args: ['scrollToCarrinho', {}]
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario-carrinho',
        template: _raw_loader_carrinho_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carrinho_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasCotacoesFormularioService"], _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService"], _cotacoes_formulario_modal_material_desconto_desconto_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasCotacoesFormularioModalMaterialDescontoService"], _cotacoes_formulario_modal_material_combo_combo_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesFormularioModalMaterialComboService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasService"], _formulario_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent);
      /***/
    },

    /***/
    "hcmP":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/carrinho/carrinho.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hcmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"materiais.length > 0\">\n  <div class=\"row\" #scrollToCarrinho>\n    <div class=\"col\">\n      <div class=\"mtc-title mb-3\">Resumo da cotação</div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <subtitles [data]=\"subtitles\" [show]=\"true\"></subtitles>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <!-- <button\n              type=\"button\"\n              class=\"btn btn-sm btn-primary mr-3\"\n              (click)=\"onDescontoCarrinho()\">\n              <i class=\"fas fa-percentage\"></i>\n              <span>Desconto</span>\n            </button> -->\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-danger\"\n              (click)=\"onLimparCarrinho()\">\n              <i class=\"fas fa-trash\"></i>\n              <span>Limpar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <custom-table [config]=\"tableHeadConfig\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center border-light\" [ngStyle]=\"{ width: columSize('index') }\">\n                <span class=\"ml-1\">Item</span>\n              </th>\n              <th scope=\"col\" [ngStyle]=\"{ width: columSize('nomeMaterial') }\">Material</th>\n              <th scope=\"col\" class=\"text-center\" [ngStyle]=\"{ width: columSize('quantidade') }\">Qtde.</th>\n              <th scope=\"col\" class=\"text-center\" [ngStyle]=\"{ width: columSize('quantidade') }\">Peso</th>\n              <th scope=\"col\" [ngStyle]=\"{ width: columSize('nomeDeposito') }\">Depósito</th>\n              <th scope=\"col\" [ngStyle]=\"{ width: columSize('buttons') }\"></th>\n            </tr>\n          </ng-template>\n        </custom-table>\n        <custom-table [config]=\"tableBodyConfig\" style=\"position: relative; top: -2px;\">\n          <div formArrayName=\"materiais\">\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let material of materiais.controls; let i = index\" [formGroupName]=\"i\">\n                <td\n                  class=\"align-middle text-center\"\n                  [ngClass]=\"classStatusBorder(form.value.materiais[i])\"\n                  [ngStyle]=\"{ width: columSize('index') }\">\n                  {{ i + 1 }}\n                </td>\n                <td class=\"align-middle text-truncate\" [ngStyle]=\"{ width: columSize('nomeMaterial') }\">\n                  {{ form.value.materiais[i].codMaterial }} - {{ form.value.materiais[i].nomeMaterial | uppercase }}\n                </td>\n                <td class=\"align-middle text-center\" [ngStyle]=\"{ width: columSize('quantidade') }\">\n                  {{ form.value.materiais[i].quantidade }}\n                </td>\n                <td class=\"align-middle text-center\" [ngStyle]=\"{ width: columSize('quantidade') }\">\n                  {{ form.value.materiais[i].pesoEspecifico | number:'1.3-3' }} TON\n                </td>\n                <td width=\"20%\" [ngStyle]=\"{ width: columSize('nomeDeposito') }\">\n                  <ng-template #tooltipDescontoTemplate>\n                    <p class=\"text-left mb-0\"><u>Empresa:</u></p>\n                    <p class=\"text-left text-nowrap mb-0\">{{ form.value.materiais[i].nomeEmpresa | uppercase }}</p>\n                  </ng-template>\n                  <i class=\"far fa-question-circle\" [tooltip]=\"tooltipDescontoTemplate\" container=\"body\"></i>\n                  <span class=\"ml-1\">\n                    {{ form.value.materiais[i].nomeDeposito | uppercase }}\n                  </span>\n                </td>\n                <td class=\"align-middle text-right\" [ngStyle]=\"{ width: columSize('buttons') }\">\n                  <btn-icon\n                    icon=\"fas fa-th\"\n                    class=\"mr-3\"\n                    tooltip=\"Materiais associados\"\n                    container=\"body\"\n                    (click)=\"onAssocMaterial(form.value.materiais[i])\"\n                    *ngIf=\"form.value.materiais[i].materialAssociado === 1\">\n                  </btn-icon>\n                  <btn-icon\n                    icon=\"fas fa-calculator\"\n                    class=\"mr-3\"\n                    tooltip=\"Calcular quantidades\"\n                    container=\"body\"\n                    (click)=\"onCalcMaterial(i, form.value.materiais[i]);\">\n                  </btn-icon>\n                  <btn-icon\n                    icon=\"fas fa-percentage\"\n                    class=\"mr-3\"\n                    tooltip=\"Aplicar desconto\"\n                    container=\"body\"\n                    (click)=\"onDescontoMaterial(i, form.value.materiais[i])\">\n                  </btn-icon>\n                  <btn-icon\n                    icon=\"fas fa-trash\"\n                    class=\"mr-3\"\n                    tooltip=\"Remover\"\n                    container=\"body\"\n                    (click)=\"onDeleteMaterial(i, form.value.materiais[i])\">\n                  </btn-icon>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"border-white\" [ngStyle]=\"{ width: columSize('index') }\"></td>\n                <td [ngStyle]=\"{ width: columSize('nomeMaterial') }\"></td>\n                <td class=\"text-center\" [ngStyle]=\"{ width: columSize('quantidade') }\">\n                  {{ total.quantidade }}\n                </td>\n                <td class=\"text-center\" [ngStyle]=\"{ width: columSize('pesoEspecifico') }\">\n                  {{ total.pesoEspecifico | number:'1.3-3' }} TON\n                </td>\n                <td [ngStyle]=\"{ width: columSize('codDeposito') }\"></td>\n                <td [ngStyle]=\"{ width: columSize('buttons') }\"></td>\n              </tr>\n            </ng-template>\n          </div>\n        </custom-table>\n      </form>\n    </div>\n  </div>\n  <!-- <div class=\"row pt-5\">\n    <div class=\"col-lg-3\">\n      <card-counter\n        icon=\"fas fa-industry\"\n        color=\"bg-gray\"\n        [counter]=\"total.valorIpi\"\n        duration=\"2\"\n        text=\"Valor total do IPI\"\n        [config]=\"cardCounterConfig\">\n      </card-counter>\n    </div>\n    <div class=\"col-lg-3\">\n      <card-counter\n        icon=\"fas fa-truck-loading\"\n        color=\"bg-blue\"\n        [counter]=\"total.valorIcms\"\n        duration=\"2\"\n        text=\"Valor total do ICMS\"\n        [config]=\"cardCounterConfig\">\n      </card-counter>\n    </div>\n    <div class=\"col-lg-3\">\n      <ng-template #tooltipDescontoTemplate>\n        <p\n          class=\"text-nowrap\"\n          [ngClass]=\"{'mb-0': total.valorDescMaterial === 0}\"\n          *ngIf=\"total.valorDescCarrinho - total.valorDescMaterial > 0\">\n          <b><u>Carrinho:</u></b> {{ total.valorDescCarrinho - total.valorDescMaterial | currency:'BRL':'symbol':'1.2-2' }}\n        </p>\n        <p class=\"text-nowrap mb-0\" *ngIf=\"total.valorDescMaterial > 0\">\n          <b><u>Material:</u></b> {{ total.valorDescMaterial | currency:'BRL':'symbol':'1.2-2' }}\n        </p>\n      </ng-template>\n      <card-counter\n        icon=\"fas fa-percentage\"\n        color=\"bg-red\"\n        [counter]=\"total.valorDescCarrinho\"\n        duration=\"2\"\n        text=\"Valor total do desconto\"\n        [config]=\"cardCounterConfig\"\n        [isDisabled]=\"total.valorDescCarrinho === 0\"\n        [tooltip]=\"tooltipDescontoTemplate\"\n        container=\"body\">\n      </card-counter>\n    </div>\n    <div class=\"col-lg-3\">\n      <card-counter\n        icon=\"fas fa-dollar-sign\"\n        color=\"bg-green\"\n        [counter]=\"total.valorProposta\"\n        duration=\"2\"\n        text=\"Valor final da proposta\"\n        [config]=\"cardCounterConfig\">\n      </card-counter>\n    </div>\n  </div> -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <hr class=\"my-5\">\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "iZ+r":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/finalizacao.service.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService */

    /***/
    function iZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _padrao_padrao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./padrao/padrao.component */
      "bQVD");
      /* harmony import */


      var _perdida_perdida_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perdida/perdida.component */
      "1Ts5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // ngx-bootstrap
      // Components
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService(modalService, pnotifyService, cotacoesService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService);

          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.cotacoesService = cotacoesService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService, [{
          key: "sendCotacao",
          value: function sendCotacao(dataCotacao) {
            var _this29 = this;

            this.loaderNavbar.emit(true);

            if (this.action === 'update') {}

            this.cotacoesService.postCotacao(dataCotacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this29.loaderNavbar.emit(false);
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  dataCotacao.carrinho = [];
                  dataCotacao.carrinho = response.data;

                  if (dataCotacao.situacao.codTipoFinalizacao === 1) {
                    _this29.showModal(_perdida_perdida_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent"], dataCotacao);
                  } else {
                    _this29.showModal(_padrao_padrao_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent"], dataCotacao);
                  }
                } else {
                  _this29.pnotifyService.error();
                }
              },
              error: function error(_error5) {
                _this29.pnotifyService.error();
              }
            });
          }
        }, {
          key: "showModal",
          value: function showModal(component, dataCotacao) {
            var modalConfig = {
              animated: false,
              "class": 'modal-xl',
              keyboard: false,
              ignoreBackdropClick: true
            };
            var initialState = {
              dataCotacao: dataCotacao
            };
            this.modalService.show(component, Object.assign({}, modalConfig, {
              initialState: initialState
            }));
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasPedidosProducaoTelasService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasPedidosProducaoTelasService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService);
      /***/
    },

    /***/
    "iruA":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/lista/lista.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasListaComponent */

    /***/
    function iruA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasListaComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "AJQa");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "MJy7");
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../pedidos-producao-telas.service */
      "Kh+k");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _formulario_formulario_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../formulario/formulario.service */
      "8O77");
      /* harmony import */


      var _lista_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./lista.service */
      "GOSO");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialCicloVendasPedidosProducaoTelasListaComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasListaComponent(router, activatedRoute, location, localeService, formBuilder, authService, pnotifyService, dateService, titleService, atividadesService, pedidosProducaoTelasService, listaService, detailPanelService, pedidosProducaoTelas, bsModalService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasListaComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.localeService = localeService;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.pnotifyService = pnotifyService;
          this.dateService = dateService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.pedidosProducaoTelasService = pedidosProducaoTelasService;
          this.listaService = listaService;
          this.detailPanelService = detailPanelService;
          this.pedidosProducaoTelas = pedidosProducaoTelas;
          this.bsModalService = bsModalService;
          this.user = this.authService.getCurrentUser();
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.producao = [];
          this.expedicao = [];
          this.subtitles = [{
            id: 1,
            text: 'EM ABERTO',
            color: 'green'
          }, {
            id: 2,
            text: 'PRODUÇÃO',
            color: 'blue'
          }, {
            id: 3,
            text: 'EXPEDIÇÃO',
            color: 'yellow'
          }, {
            id: 4,
            text: 'CANCELADO',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.orderBy = 'nrProposta';
          this.orderType = 'DESC';
          this.filteredDepositos = [];
          this.situacoesCores = [];
          this.dados = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.comentario = false;
          this.localizacao = false;
          this.detalhes = [];
          this.detalhesCarrinho = []; // detalhes = {
          //   contatos: [],
          //   itens: {
          //     materiais: [],
          //     total: {},
          //   },
          // };
          // Tipos de Situação dos Pedidos (Ativo/Inativo)

          this.tipos = [{
            cod: 0,
            nome: 'EXIBIR TODOS'
          }, {
            cod: 1,
            nome: 'EM ABERTO'
          }, {
            cod: 2,
            nome: 'PRODUÇÃO'
          }, {
            cod: 3,
            nome: 'EXPEDIÇÃO'
          }, {
            cod: 4,
            nome: 'CANCELADO'
          }];
          this.contatosLoaded = false;
          this.contatosEmpty = false;
          this.pedidoSelected = {};
          this.itensLoaded = false;
          this.itensEmpty = false;
          this.maxSize = 10;
          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.totalItems = 0;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
            this.setFormFilter();
            this.titleService.setTitle('Cotações e pedidos');
            this.onDetailPanelEmitter(); // this.setFormProducao();
            // this.setFormExpedicao();
          } // ngOnDestroy(): void {
          //   this.unsetLoaderEvents();
          //   this.unsetChangeEvents();
          //   this.showDetailPanelSubscription.unsubscribe();
          // }

        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/comercial/home"
            }, {
              descricao: 'Ciclo de Vendas',
              routerLink: "/comercial/ciclo-vendas"
            }, {
              descricao: 'Pedidos Produção de Telas'
            }];
          }
        }, {
          key: "unsetLoaderEvents",
          value: function unsetLoaderEvents() {
            this.loaderConsultaLiberacaoSubscription.unsubscribe();
            this.loaderEmailCotacaoSubscription.unsubscribe();
          }
        }, {
          key: "unsetChangeEvents",
          value: function unsetChangeEvents() {
            this.pedidoDuplicadaSubscription.unsubscribe();
            this.pedidoDesdobradaSubscription.unsubscribe();
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this30 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this30.showDetailPanel = event.showing;

              if (_this30.showDetailPanel === false) {
                _this30.onCloseDetailPanel();
              }
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this31 = this;

            this.listaService.loadDependencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this31.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                _this31.situacoesCores = response[0].data || [];
              },
              error: function error(_error6) {
                _this31.pnotifyService.error('Ocorreu um erro ao carregar filtros.');

                _this31.location.back();
              }
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              tipoData: [formValue.tipoData],
              dataInicial: [formValue.dataInicial],
              dataFinal: [formValue.dataFinal],
              dataLancamento: [formValue.dataLancamento],
              dataEntrega: [formValue.dataEntrega],
              nrProposta: [formValue.nrProposta],
              codPrioridade: [formValue.codPrioridade],
              codSituacao: [formValue.codSituacao],
              cliente: [formValue.cliente],
              usuarioLancamento: [formValue.usuarioLancamento],
              codVendedor: [formValue.codVendedor, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              pagina: [formValue.pagina],
              registros: [this.itemsPerPage, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this32 = this;

            var formValue = {
              tipoData: 1,
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              nrProposta: null,
              codDeposito: null,
              codSituacao: 0,
              cliente: null,
              codVendedor: 0,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams.q);
                params = JSON.parse(params);

                _this32.search(params);

                if (params['pagina']) {
                  _this32.currentPage = params['pagina'];
                }

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this32.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
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
              this.orderType = 'DESC';
            }

            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.detailPanelService.hide();
              this.setRouterParams(this.getFormFilterValues());
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
          key: "getFormFilterValues",
          value: function getFormFilterValues() {
            var params = {};

            if (this.form.value.tipoData) {
              params.tipoData = this.form.value.tipoData;
            }

            if (this.form.value.dataInicial) {
              params.dataInicial = this.dateService.convertToUrlDate(new Date(this.form.value.dataInicial));
            }

            if (this.form.value.dataFinal) {
              params.dataFinal = this.dateService.convertToUrlDate(new Date(this.form.value.dataFinal));
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            if (this.form.value.nrProposta) {
              params.nrProposta = this.form.value.nrProposta;
            }

            if (this.form.value.codPrioridade) {
              params.codPrioridade = this.form.value.codPrioridade;
            }

            if (this.form.value.cliente) {
              params.cliente = this.form.value.cliente;
            }

            if (this.form.value.usuarioLancamento) {
              params.usuarioLancamento = this.form.value.usuarioLancamento;
            }

            if (this.form.value.codVendedor) {
              params.codVendedor = this.form.value.codVendedor;
            }

            if (this.form.value.pagina) {
              params.pagina = this.form.value.pagina;
            }

            if (this.form.value.registros) {
              params.registros = this.form.value.registros;
            }

            params.orderBy = this.orderBy;
            params.orderType = this.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this33 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.pedidosProducaoTelasService.getPedidosProducaoTelas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this33.loaderNavbar = false;
              _this33.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this33.dados = response.data;
                  _this33.loaderNavbar = false;
                  _this33.totalItems = _this33.dados[0].qtdeRegistros;
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem') && response.mensagem.length > 0 && response.mensagem !== null) {
                  _this33.pnotifyService.error(response.mensagem);

                  _this33.dadosEmpty = true;
                } else {
                  _this33.pnotifyService.error();

                  _this33.dadosEmpty = true;
                }
              },
              error: function error(_error7) {
                if (_error7.error.hasOwnProperty('mensagem')) {
                  _this33.pnotifyService.error(_error7.error.mensagem);
                } else {
                  _this33.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.form.controls.pagina.setValue(event.page);
              this.onCloseDetailPanel();
              this.setRouterParams(this.getFormFilterValues());
              this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
          }
        }, {
          key: "styleStatusBorder",
          value: function styleStatusBorder(pedido) {
            var borderClass;

            if (pedido.codSituacao == 1) {
              borderClass = 'border-success';
            } else if (pedido.codSituacao == 2) {
              borderClass = 'border-primary';
            } else if (pedido.codSituacao == 3) {
              borderClass = 'border-warning';
            } else if (pedido.codSituacao == 4) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "viewRegister",
          value: function viewRegister(index, pedido) {
            var _this34 = this;

            this.loaderNavbar = true;
            console.log('pedido');
            console.log(pedido);
            this.detailPanelService.show();
            this.detailPanelTitle = "#".concat(pedido.nrPedido, " / ").concat(pedido.razaoSocial.toUpperCase());
            this.showDetailPanel = true;
            this.setActiveRow(index);
            this.setactivePedido(pedido); // this.resetRegister();

            this.pedidosProducaoTelasService.getDetailPanel(pedido.nrPedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this34.loaderNavbar = false;
              _this34.contatosLoaded = true;
              _this34.itensLoaded = true;
              _this34.itensEmpty = false;

              _this34.scrollToDetails.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this34.detailPanelService.loadedFinished(false);

                  console.log(response);
                  console.log(response.data);
                  console.log(response.data.carrinho);
                  _this34.detalhes = response.data;
                  _this34.loaderNavbar = false;
                  _this34.itensLoaded = true;
                } else {
                  _this34.contatosEmpty = true;
                  _this34.itensEmpty = true;
                  _this34.itensLoaded = false;

                  _this34.detailPanelService.loadedFinished(true);

                  _this34.pnotifyService.error();
                }
              },
              error: function error(_error8) {
                _this34.detailPanelService.loadedFinished(true);

                if (_error8.error.hasOwnProperty('mensagem')) {
                  _this34.pnotifyService.error(_error8.error.mensagem);
                } else {
                  _this34.pnotifyService.error();
                }
              }
            });
            this.pedidosProducaoTelasService.getDetalhesPedidos(pedido.nrPedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this34.loaderNavbar = false;
              _this34.contatosLoaded = true;
              _this34.itensLoaded = true;
              _this34.itensEmpty = false;

              _this34.scrollToDetails.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this34.detailPanelService.loadedFinished(false);

                  console.log(response.data);
                  _this34.detalhesCarrinho = response.data.carrinho;
                  _this34.loaderNavbar = false;
                  _this34.itensLoaded = true;
                } else {
                  _this34.contatosEmpty = true;
                  _this34.itensEmpty = true;
                  _this34.itensLoaded = false;

                  _this34.detailPanelService.loadedFinished(true);

                  _this34.pnotifyService.error();
                }
              },
              error: function error(_error9) {
                _this34.detailPanelService.loadedFinished(true);

                if (_error9.error.hasOwnProperty('mensagem')) {
                  _this34.pnotifyService.error(_error9.error.mensagem);
                } else {
                  _this34.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "viewContato",
          value: function viewContato(contato) {
            this.pedidoSelected = contato;
          }
        }, {
          key: "onCloseDetailPanel",
          value: function onCloseDetailPanel() {
            this.resetactivePedido();
            this.resetActiveRow(); // this.resetRegister();
          }
        }, {
          key: "setactivePedido",
          value: function setactivePedido(pedido) {
            this.activePedido = pedido;
          }
        }, {
          key: "resetactivePedido",
          value: function resetactivePedido() {
            this.activePedido = null;
          }
        }, {
          key: "setActiveRow",
          value: function setActiveRow(index) {
            this.activeRow = index;
          }
        }, {
          key: "resetActiveRow",
          value: function resetActiveRow() {
            this.activeRow = null;
          }
        }, {
          key: "onSubtitleActivationChange",
          value: function onSubtitleActivationChange(event) {
            console.log(event);
          }
        }, {
          key: "showLoaderNavbar",
          value: function showLoaderNavbar(event) {
            this.loaderNavbar = event;
          } // onChangeClienteCotacao(data: [any, IComercialCicloVendasPedidosProducaoTelas]): void {
          //   const selectedCliente = data[0];
          //   const updatedCotacao: IComercialCicloVendasPedidosProducaoTelas = data[1];
          //   this.dados.map((pedido: IComercialCicloVendasPedidosProducaoTelas) => {
          //     if (updatedCotacao.nrProposta === pedido.nrProposta) {
          //       pedido.codCliente = selectedCliente.codCliente;
          //       pedido.razaoSocial = selectedCliente.razaoSocial;
          //     }
          //   });
          //   this.detailPanelTitle = `#${
          //     updatedCotacao.nrProposta
          //   } / ${selectedCliente.razaoSocial.toUpperCase()}`;
          // }

        }, {
          key: "onPropostaDuplicada",
          value: function onPropostaDuplicada(data) {
            var nrProposta = data[0];
            var codVendedor = data[1];
            var pedido = data[2];
            this.form.controls.nrProposta.setValue(nrProposta);
            this.form.controls.codEmpresa.setValue(pedido.codEmpresa);
            this.form.controls.codVendedor.setValue(codVendedor);
            this.onFilter();
          }
        }, {
          key: "onPropostaDesdobrada",
          value: function onPropostaDesdobrada(data) {
            var nrProposta = data[0];
            var pedido = data[1];
            var materiais = data[2];
            this.form.controls.nrProposta.setValue(nrProposta);
            this.form.controls.codEmpresa.setValue(pedido.codEmpresa);
            this.onFilter();
            /* if (materiais.length > 0) {
              this.itensLoaded = false;
                    const filteredMateriais = this.detalhes.itens['materiais'].filter(
                (_material: any) =>
                  !materiais.some(
                    (material: any) => material.codigo === _material.codigo
                  )
              );
                    let total = {
                quantidade: 0,
                valor: 0,
              };
                    filteredMateriais.map((material: any) => {
                total.quantidade += material.quantidade;
                total.valor += material.valorTotal;
              });
                    this.detalhes.itens = {
                materiais: filteredMateriais,
                total: total,
              };
                    setTimeout(() => {
                this.itensLoaded = true;
              }, 1000);
            } */
          }
        }, {
          key: "onChangeEmpresaCotacao",
          value: function onChangeEmpresaCotacao(data) {
            var selectedEmpresa = data[0];
            var selectedDeposito = data[1];
            var nrProposta = data[2];
            this.form.controls.nrProposta.setValue(nrProposta);
            this.form.controls.codEmpresa.setValue(selectedEmpresa);
            this.form.controls.codDeposito.setValue(selectedDeposito);
            this.onFilter();
          } // onImprimir(): void {
          //   this.loaderNavbar = true;
          //   this.pedidosProducaoTelasService
          //     .getImprimirCotacao(this.activePedido.nrProposta)
          //     .pipe(
          //       finalize(() => {
          //         this.loaderNavbar = false;
          //       })
          //     )
          //     .subscribe(
          //       (response: JsonResponse) => {
          //         if (response.hasOwnProperty('success') && response.success === true) {
          //           this.pnotifyService.success();
          //         } else {
          //           this.pnotifyService.error();
          //         }
          //       },
          //       (error: any) => {
          //         if (error.error.hasOwnProperty('mensagem')) {
          //           this.pnotifyService.error(error.error.mensagem);
          //         } else {
          //           this.pnotifyService.error();
          //         }
          //       }
          //     );
          // }

        }, {
          key: "onAdd",
          value: function onAdd() {
            console.log();
            this.router.navigate(['../novo'], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            this.router.navigate(['../editar', item.nrPedido], {
              relativeTo: this.activatedRoute
            });
          } // formProducao

        }, {
          key: "setFormProducao",
          value: function setFormProducao(item) {
            this.formProducao = this.formBuilder.group({
              nrPedido: [item.nrPedido],
              observacao: [item.descComentarioProducao]
            });
            this.comentario = false;

            if (item.descComentarioProducao != '') {
              this.comentario = true;
            }
          }
        }, {
          key: "onChangeProducao",
          value: function onChangeProducao() {
            var _this35 = this;

            console.log(this.formProducao.getRawValue());
            this.pedidosProducaoTelas.postProducao(this.formProducao.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this35.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                console.log(response);

                if (response.hasOwnProperty('success') && response.success === true) {
                  _this35.producao = response.data;

                  _this35.pnotifyService.success();

                  _this35.onFilter();
                } else {
                  _this35.pnotifyService.error();
                }
              },
              error: function error(_error10) {
                if (_error10.error.hasOwnProperty('mensagem')) {
                  _this35.pnotifyService.error(_error10.error.mensagem);
                } else {
                  _this35.pnotifyService.error();
                }
              }
            });
          } // formExpedicao

        }, {
          key: "setFormExpedicao",
          value: function setFormExpedicao(item) {
            this.formExpedicao = this.formBuilder.group({
              nrPedido: [item.nrPedido],
              codLocalizacao: [item.codLocalizacaoExpedicao]
            });
            this.localizacao = false;

            if (item.codLocalizacaoExpedicao != null) {
              this.localizacaoDisable();
              this.localizacao = true;
            }
          }
        }, {
          key: "localizacaoDisable",
          value: function localizacaoDisable() {
            this.formExpedicao.get('codLocalizacao').disable();
          }
        }, {
          key: "onChangeExpedicao",
          value: function onChangeExpedicao() {
            var _this36 = this;

            console.log(this.formExpedicao.getRawValue());
            this.pedidosProducaoTelas.postExpedicao(this.formExpedicao.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this36.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this36.pnotifyService.success();

                  _this36.onFilter();
                } else {
                  _this36.pnotifyService.error();
                }
              },
              error: function error(_error11) {
                if (_error11.error.hasOwnProperty('mensagem')) {
                  _this36.pnotifyService.error(_error11.error.mensagem);
                } else {
                  _this36.pnotifyService.error();
                }
              }
            });
          } // modal

        }, {
          key: "openModalProducao",
          value: function openModalProducao(producao) {
            this.modalRef = this.bsModalService.show(producao);
          }
        }, {
          key: "openModalExpedicao",
          value: function openModalExpedicao(expedicao) {
            this.modalRef = this.bsModalService.show(expedicao);
          }
        }, {
          key: "closeModal",
          value: function closeModal(modalRef) {
            this.modalRef.hide();
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field) != '') {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }

              if (field.errors.hasOwnProperty('maxDate') && field.touched) {
                return 'maxDate';
              }
            }

            return '';
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
        }]);

        return ComercialCicloVendasPedidosProducaoTelasListaComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"]
        }, {
          type: _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_17__["ComercialCicloVendasPedidosProducaoTelasService"]
        }, {
          type: _lista_service__WEBPACK_IMPORTED_MODULE_20__["ComercialCicloVendasPedidosProducaoTelasListaService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_18__["DetailPanelService"]
        }, {
          type: _formulario_formulario_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }],
        scrollToDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToDetails', {}]
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"], _pedidos_producao_telas_service__WEBPACK_IMPORTED_MODULE_17__["ComercialCicloVendasPedidosProducaoTelasService"], _lista_service__WEBPACK_IMPORTED_MODULE_20__["ComercialCicloVendasPedidosProducaoTelasListaService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_18__["DetailPanelService"], _formulario_formulario_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCicloVendasPedidosProducaoTelasFormularioService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])], ComercialCicloVendasPedidosProducaoTelasListaComponent);
      /***/
    },

    /***/
    "jkj0":
    /*!*********************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/historico-exclusao/historico-exclusao.component.scss ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jkj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vbW9kYWwvaGlzdG9yaWNvLWV4Y2x1c2FvL2hpc3Rvcmljby1leGNsdXNhby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "kmA5":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/material/calculo/calculo.service.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService */

    /***/
    function kmA5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService;
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


      var _calculo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calculo.component */
      "+Sdq");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // ngx-bootstrap
      // Components
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService(modalService, pnotifyService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService);

          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService, [{
          key: "showModal",
          value: function showModal(index, material, codCliente) {
            this.loaderNavbar.emit(false);
            var modalConfig = {
              animated: false,
              "class": 'modal-lg',
              ignoreBackdropClick: true,
              keyboard: false
            };
            var initialState = {
              index: index,
              material: material,
              codCliente: codCliente
            };
            this.modalService.show(_calculo_component__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent"], Object.assign({}, modalConfig, {
              initialState: initialState
            }));
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService);
      /***/
    },

    /***/
    "mPEE":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/finalizacao/padrao/padrao.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mPEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\" *ngIf=\"dataCotacao\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-0 my-auto\">COTAÇÃO #{{ dataCotacao.codCotacao }} / REALIZADA COM SUCESSO</h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body py-5\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"mtc-title\">Resumo do pedido</div>\n        <custom-table [config]=\"tableConfig\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" width=\"10%\" class=\"text-center\">Código</th>\n              <th scope=\"col\" width=\"34%\">Descrição</th>\n              <th scope=\"col\" width=\"12%\" class=\"text-center\">Ton</th>\n              <th scope=\"col\" width=\"12%\" class=\"text-center\">Unit.</th>\n              <th scope=\"col\" width=\"12%\" class=\"text-center\">R$</th>\n              <th scope=\"col\" width=\"20%\">Depósito</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let material of dataCotacao.carrinho; let i = index\">\n              <td width=\"10%\" class=\"text-center\">{{ material.codMaterial }}</td>\n              <td width=\"34%\" class=\"text-truncate\">{{ material.nomeMaterial | uppercase }}</td>\n              <td width=\"12%\" class=\"text-center\">{{ material.quantidade | number:'1.3-3' }}</td>\n              <td width=\"12%\" class=\"text-center\">\n                <span class=\"mr-2\">{{ material.valorUnit | currency:'BRL':symbol:'1.2-2' }}</span>\n                <i\n                  *ngIf=\"material.variacaoPreco !== 0\"\n                  [ngClass]=\"classVariacaoPreco(material.variacaoPreco)\"\n                  [tooltip]=\"formatVariacaoPreco(material.variacaoPreco)\">\n                </i>\n              </td>\n              <td width=\"12%\" class=\"text-center\">{{ material.valorTotal | currency:'BRL':symbol:'1.2-2' }}</td>\n              <td width=\"20%\" class=\"text-truncate\">{{ material.nomeDeposito | uppercase }}</td>\n            </tr>\n            <tr>\n              <td width=\"10%\"></td>\n              <td width=\"34%\" class=\"text-right\">TOTAL</td>\n              <td width=\"12%\" class=\"text-center\">{{ calcularTotais('quantidade') | number:'1.3-3' }} TON</td>\n              <td width=\"12%\" class=\"text-center\"></td>\n              <td width=\"12%\" class=\"text-center\">{{ calcularTotais('valor') | currency:'BRL':'symbol':'1.2-2' }}</td>\n              <td width=\"20%\"></td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n    <div class=\"row py-5\">\n      <div class=\"col-8 d-flex\">\n        <div class=\"my-auto\">\n          <span class=\"mtc-title mb-0 mr-2\">Cotação realizada para:</span>\n          <span>{{ dataCotacao.razaoSocial | uppercase }}</span>\n        </div>\n      </div>\n      <div class=\"col-3\" *ngIf=\"user.idVendedor !== null\">\n        <div class=\"border rounded bg-light text-center py-3 px-2\">\n          <div class=\"mb-2\">Comissão aproximada</div>\n          <h6 class=\"mb-0\">\n            <span *ngIf=\"!comissaoLoaded\" class=\"spinner-border spinner-border-sm text-dark\"></span>\n            <span\n              counto\n              [step]=\"30\"\n              [countTo]=\"comissao\"\n              [countFrom]=\"0\"\n              [duration]=\"3\"\n              (countoChange)=\"countoComissao = $event\"\n              [hidden]=\"comissao == 0 || !comissaoLoaded\">\n              {{ countoComissao | currency:'BRL':'symbol':'1.2-2' }}\n            </span>\n          </h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"user.idVendedor !== null\">\n      <div class=\"col\" *ngIf=\"!metasEmpty\">\n        <div class=\"mtc-title mb-0\">Seu progresso após o faturamento dessa cotação:</div>\n        <div class=\"row justify-content-center\">\n          <div class=\"col\">\n            <comercial-templates-mapa-metas\n              [idVendedor]=\"user.idVendedor\"\n              [idEscritorio]=\"user.idEscritorio\"\n              [showHeader]=\"false\"\n              loaderStyle=\"tiny\"\n              (onData)=\"onData($event)\">\n            </comercial-templates-mapa-metas>\n            <div id=\"progress-bar-mapa-metas\" class=\"row\" *ngIf=\"metasLoaded\">\n              <div class=\"col-lg-4\">\n                <comercial-ciclo-vendas-cotacoes-formulario-template-progress-bar\n                  [metaAtual]=\"metasProgresso.toneladas.valor\"\n                  [somaCotacao]=\"metasProgresso.toneladas.progresso\">\n                </comercial-ciclo-vendas-cotacoes-formulario-template-progress-bar>\n              </div>\n              <div class=\"col-lg-4\">\n                <comercial-ciclo-vendas-cotacoes-formulario-template-progress-bar\n                  [metaAtual]=\"metasProgresso.clientes.valor\"\n                  [somaCotacao]=\"metasProgresso.clientes.progresso\">\n                </comercial-ciclo-vendas-cotacoes-formulario-template-progress-bar>\n              </div>\n              <div class=\"col-lg-4\">\n                <comercial-ciclo-vendas-cotacoes-formulario-template-progress-bar\n                  [metaAtual]=\"metasProgresso.extras.valor\"\n                  [somaCotacao]=\"metasProgresso.extras.progresso\">\n                </comercial-ciclo-vendas-cotacoes-formulario-template-progress-bar>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\" *ngIf=\"metasEmpty\">\n        <span class=\"mtc-title mb-0 mr-2\">ATENÇÃO:</span>\n        <span>Não foi possível localizar seu mapa de metas deste mês.</span>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "oHon":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/formulario.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModule */

    /***/
    function oHon(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModule", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal/detalhes/cliente.component */
      "xGkr");
      /* harmony import */


      var _modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal/selecionar/selecionar.component */
      "Y0py");
      /* harmony import */


      var _modal_selecionar_selecionar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/selecionar/selecionar.service */
      "/3kc");
      /* harmony import */


      var _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modal/detalhes/cliente.service */
      "DQic");
      /* harmony import */


      var _cotacoes_formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../cotacoes/formulario/formulario.module */
      "1Ydl");
      /* harmony import */


      var _modal_finalizacao_finalizacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal/finalizacao/finalizacao.service */
      "iZ+r");
      /* harmony import */


      var _modal_historico_exclusao_historico_exclusao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal/historico-exclusao/historico-exclusao.service */
      "KEd5");
      /* harmony import */


      var _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modal/material/calculo/calculo.service */
      "kmA5");
      /* harmony import */


      var _modal_finalizacao_perdida_perdida_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modal/finalizacao/perdida/perdida.component */
      "1Ts5");
      /* harmony import */


      var _modal_finalizacao_padrao_padrao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modal/finalizacao/padrao/padrao.component */
      "bQVD");
      /* harmony import */


      var _modal_historico_exclusao_historico_exclusao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modal/historico-exclusao/historico-exclusao.component */
      "xsRv");
      /* harmony import */


      var _modal_material_calculo_calculo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modal/material/calculo/calculo.component */
      "+Sdq");
      /* harmony import */


      var _carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./carrinho/carrinho.component */
      "fU5a");
      /* harmony import */


      var _materiais_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./materiais/lista/lista.component */
      "xS3C");
      /* harmony import */


      var _formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario.component */
      "YJ5Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-bootstrap/popover */
      "KOzp");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "Osdn");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_28__);
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_29__);
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_30__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../../templates/templates.module */
      "9lCC"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // ng-brazil
      // angular2-counto
      // Modules
      // Components
      // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioModule = function ComercialCicloVendasPedidosProducaoTelasFormularioModule() {
        _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModule);
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
        declarations: [_materiais_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent"], _formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCicloVendasPedidosProducaoTelasFormularioComponent"], _carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCicloVendasPedidosProducaoTelasFormularioCarrinhoComponent"], _modal_historico_exclusao_historico_exclusao_component__WEBPACK_IMPORTED_MODULE_11__["ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent"], _modal_finalizacao_padrao_padrao_component__WEBPACK_IMPORTED_MODULE_10__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPadraoComponent"], _modal_finalizacao_perdida_perdida_component__WEBPACK_IMPORTED_MODULE_9__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoPerdidaComponent"], _modal_material_calculo_calculo_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent"], _modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_2__["ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent"], _modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__["PopoverModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_24__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_25__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_28__["CurrencyMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_29__["TextMaskModule"], //NgBrazil,
        angular2_counto__WEBPACK_IMPORTED_MODULE_30__["CountoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_31__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_32__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_33__["ComercialTemplatesModule"], _cotacoes_formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesFormularioModule"]],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["BsModalRef"], _modal_material_calculo_calculo_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoService"], _modal_historico_exclusao_historico_exclusao_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoService"], _modal_finalizacao_finalizacao_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasFormularioModalFinalizacaoService"], _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesService"], _modal_selecionar_selecionar_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarService"]],
        entryComponents: [_modal_material_calculo_calculo_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCicloVendasPedidosProducaoTelasFormularioModalMaterialCalculoComponent"], _modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_2__["ComercialCicloVendasPedidosProducaoTelasFormularioModalSelecionarComponent"], _modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_1__["ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent"]]
      })], ComercialCicloVendasPedidosProducaoTelasFormularioModule);
      /***/
    },

    /***/
    "ozjm":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/formulario.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ozjm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wZWRpZG9zLXByb2R1Y2FvLXRlbGFzL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "xGkr":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/detalhes/cliente.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent */

    /***/
    function xGkr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cliente.component.html */
      "7gwv");
      /* harmony import */


      var _cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cliente.component.scss */
      "OOMa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI"); // ngx-bootstrap


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent(bsModalRef) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent);

          this.bsModalRef = bsModalRef;
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.bsModalRef.hide();
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent.propDecorators = {
        cliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cliente']
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cliclo-vendas-pedidos-producao-telas-formulario-modal-detalhes',
        template: _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalDetalhesComponent);
      /***/
    },

    /***/
    "xS3C":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/materiais/lista/lista.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent */

    /***/
    function xS3C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "LLqO");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "2S9i");
      /* harmony import */


      var _cotacoes_formulario_modal_material_estoque_estoque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../cotacoes/formulario/modal/material/estoque/estoque.service */
      "ArSq");
      /* harmony import */


      var _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../cotacoes/formulario/formulario.service */
      "/Zk1");
      /* harmony import */


      var _cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../cotacoes/cotacoes.service */
      "uuri");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent(router, activatedRoute, location, formBuilder, pnotifyService, cotacoesService, formularioService, comercialService, estoqueService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.cotacoesService = cotacoesService;
          this.formularioService = formularioService;
          this.comercialService = comercialService;
          this.estoqueService = estoqueService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
          this.loaderFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
          this.scrollToCarrinho = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
          this.scrollToFormOnTop = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
          this.showApp = false;
          this.subtitles = [{
            id: 1,
            text: 'Disponível em estoque',
            color: 'green'
          }, {
            id: 2,
            text: 'Indisponível em estoque',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true,
            fixedHeader: false,
            bodyHeight: 230,
            select: false
          };
          this.searching = false;
          this.searchParams = {};
          this.orderBy = 'nrPedido';
          this.orderType = 'desc';
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.materiais = [];
          this.autoScroll = true;
          this.firstSearch = false;
          this.dados = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.toggleAll = false;
          this.clickCounter = 0;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getFilterValues();
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this37 = this;

            this.loaderFullScreen.emit(true);
            this.cotacoesService.getCotacaoFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this37.loaderFullScreen.emit(false);

              _this37.setFormFilter();

              _this37.showApp = true;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this37.linhas = response[0].result;
                _this37.linhas = _this37.linhas.filter(function (value) {
                  return value.descricao == 'CERCAS';
                });
              } else {
                _this37.pnotifyService.error();

                _this37.location.back();
              }

              if (response[1].responseCode === 200) {
                _this37.classes = response[1].result;
              } else {
                _this37.pnotifyService.error();

                _this37.location.back();
              }
            });
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha, reset) {
            if (reset) {
              this.form.controls.codClasse.reset();
              this.form.controls.codClasse.setValue(0);
              this.form.controls.codMaterial.reset();
              this.form.controls.codMaterial.disable();
              this.form.controls.codMaterial.setValue(null);
              this.form.controls.codMaterial.updateValueAndValidity();
            }

            this.form.controls.codClasse.enable();
            this.form.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]);
            this.form.controls.codClasse.updateValueAndValidity();
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
              this.form.controls.codMaterial.reset();

              if (this.form.value.codClasse === 0) {
                this.form.controls.codMaterial.reset();
                this.form.controls.codMaterial.disable();
                this.form.controls.codMaterial.setValue(null);
                this.form.controls.codMaterial.updateValueAndValidity();
              } else {
                this.getMateriais(codClasse, src);
              }
            } else {
              if (this.form.value.codClasse !== 0) {
                this.getMateriais(codClasse, src);
              }
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(codClasse, src) {
            var _this38 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              if (src === 'application') {
                this.loaderNavbar.emit(true);
              }

              this.materiaisLoader = true;
              this.materiais = [];
              var params = {
                codClasse: codClasse,
                // tipoMaterial: 'Distribuidora',
                comercializa: 0
              };
              this.comercialService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                if (src === 'application') {
                  _this38.loaderNavbar.emit(false);
                }

                _this38.materiaisLoader = false;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    _this38.materiais = response.data;

                    _this38.materiais.unshift({
                      codigoMaterial: 0,
                      codigoDescricaoMaterial: 'EXIBIR TODOS'
                    });

                    _this38.form.controls.codMaterial.enable();

                    _this38.form.controls.codMaterial.setValue(0);

                    _this38.form.controls.codMaterial.updateValueAndValidity();
                  } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                    _this38.pnotifyService.error(response.mensagem);
                  } else {
                    _this38.pnotifyService.error();
                  }
                },
                error: function error(_error12) {
                  if (_error12['error'].hasOwnProperty('mensagem')) {
                    _this38.pnotifyService.error(_error12.error.mensagem);
                  } else {
                    _this38.pnotifyService.error();
                  }
                }
              });
            }
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              codLinha: [formValue.codLinha, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              codClasse: [{
                value: formValue.codClasse,
                disabled: formValue.codLinha === null ? true : false
              }],
              codMaterial: [{
                value: formValue.codMaterial,
                disabled: formValue.codMaterial === null ? true : false
              }],
              comEstoque: [formValue.comEstoque, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              registros: [formValue.registros]
            });
            this.checkValuesLinhaClasse();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this39 = this;

            var formValue = {
              codLinha: this.linhas[0]['id'],
              codClasse: 0,
              codMaterial: null,
              comEstoque: 1,
              registros: 100
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                if (queryParams.q) {
                  var params = atob(queryParams.q);
                  params = JSON.parse(params);

                  _this39.search(params);

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
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "checkValuesLinhaClasse",
          value: function checkValuesLinhaClasse() {
            if (this.form.value.codLinha !== '' && this.form.value.codLinha !== null) {
              this.onChangeLinha(this.form.value.codLinha, false);
            }

            if (this.form.value.codClasse !== '' && this.form.value.codClasse !== null) {
              this.onChangeClasse(this.form.value.codClasse, false, 'verify');
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

            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.codEmpresa !== null && this.codDeposito !== null) {
              if (this.searching === false && this.form.valid) {
                this.setRouterParams(this.getFormFilterValues());
              }
            } else {
              this.scrollToFormOnTop.emit(true);
            }
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                f: btoa(JSON.stringify({
                  codEmpresa: this.codEmpresa,
                  codDeposito: this.codDeposito,
                  codCliente: this.codCliente
                })),
                q: btoa(JSON.stringify(params))
              },
              queryParamsHandling: 'merge'
            });
            this.search(params);
          }
        }, {
          key: "getFormFilterValues",
          value: function getFormFilterValues() {
            var params = {};

            if (this.form.value.codLinha) {
              params.codLinha = this.form.value.codLinha;
            }

            if (this.form.value.codClasse && this.form.value.codClasse !== 0) {
              params.codClasse = this.form.value.codClasse;
            }

            if (this.form.value.codMaterial && this.form.value.codMaterial !== 0) {
              params.codMaterial = this.form.value.codMaterial;
            }

            if (this.codEmpresa) {
              params.codEmpresa = this.codEmpresa;
            } //if (this.codDeposito) {


            params.codDeposito = 18; //}

            if (this.codCliente) {
              params.codCliente = this.codCliente;
            }

            if (this.form.value.comEstoque) {
              params.comEstoque = this.form.value.comEstoque;
            }

            if (this.form.value.registros) {
              params.registros = this.form.value.registros;
            }

            if (this.codEndereco) {
              params.codEndereco = this.codEndereco;
            }

            if (this.codFormaPagamento) {
              params.codFormaPagamento = this.codFormaPagamento;
            }

            params.orderBy = this.orderBy;
            params.orderType = this.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this40 = this;

            this.loaderNavbar.emit(true);
            this.searching = true;
            this.searchParams = params;
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;

            var _params = Object.assign(Object.assign({}, params), {
              situacao: 'A'
            });

            this.cotacoesService.getMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this40.loaderNavbar.emit(false);

              _this40.searching = false;
              _this40.firstSearch = true;
              _this40.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this40.dados = response.data.map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });

                  if (_this40.dados.length > 10) {
                    _this40.tableConfig.fixedHeader = true;
                  } else {
                    _this40.tableConfig.fixedHeader = false;
                  }
                } else {
                  _this40.dadosEmpty = true;
                }
              },
              error: function error(_error13) {
                if (_error13['error'].hasOwnProperty('mensagem')) {
                  _this40.pnotifyService.error(_error13.error.mensagem);
                } else {
                  _this40.pnotifyService.error();
                }

                _this40.dadosEmpty = true;
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(disponibilidade) {
            var borderClass;

            if (disponibilidade == 1) {
              borderClass = 'border-success';
            } else if (disponibilidade == 2) {
              borderClass = 'border-danger';
            } else {
              borderClass = 'border-secondary';
            }

            return borderClass;
          }
        }, {
          key: "columSize",
          value: function columSize(key) {
            var size;

            switch (key) {
              case 'disponibilidade':
                size = 5;
                break;

              case 'codMaterial':
                size = 10;
                break;

              case 'nomeMaterial':
                size = 30;
                break;

              case 'nomeLinha':
                size = 12;
                break;

              case 'nomeDeposito':
                size = 13;
                break;

              case 'estoqueDisponivel':
                size = 10;
                break;

              case 'estoqueAtual':
                size = 10;
                break;

              case 'buttons':
                size = 10;
                break;
            }

            return "".concat(size, "%");
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            this.toggleAll = !this.toggleAll;

            for (var index = 0; index < this.dados.length; index++) {
              if (this.dados[index].codSituacao == "A") {
                this.dados[index].checked = this.toggleAll === true ? 1 : 0;
              }
            }
          }
        }, {
          key: "onClickMaterial",
          value: function onClickMaterial(index, material) {
            var _this41 = this;

            this.clickCounter++;
            setTimeout(function () {
              if (_this41.clickCounter === 1) {
                _this41.onCheckMaterial(index, material);
              } else if (_this41.clickCounter === 2) {
                _this41.onDoubleClickMaterial(index);
              }

              _this41.clickCounter = 0;
            }, 250);
          }
        }, {
          key: "onDoubleClickMaterial",
          value: function onDoubleClickMaterial(index) {
            if (this.dados[index].codSituacao == "A") {
              var materiais = [];
              materiais.push(this.dados[index]);
              this.formularioService.materiaisSubject.next(materiais);
              this.scrollToCarrinho.emit(this.autoScroll);
              this.dados[index].checked = 0;
            } else {
              this.pnotifyService.notice('Material inativo, favor entrar em contato com o Marketing');
            }
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(index, material) {
            if (this.dados[index].codSituacao == "A") {
              this.dados[index].checked = material.checked == 0 ? 1 : 0;
            } else {
              this.pnotifyService.notice('Material inativo, favor entrar em contato com o Marketing');
            }
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial() {
            var materiais = [];

            for (var index = 0; index < this.dados.length; index++) {
              if (this.dados[index].checked == 1) {
                materiais.push(this.dados[index]);
                this.dados[index].checked = 0;
              }
            }

            if (materiais.length > 0) {
              this.formularioService.materiaisSubject.next(materiais);
              this.toggleAll = this.toggleAll === true ? false : this.toggleAll;
              this.scrollToCarrinho.emit(this.autoScroll);
            } else {
              this.pnotifyService.notice('Selecione ao menos um material.');
            }
          }
        }, {
          key: "onActiveRow",
          value: function onActiveRow(index) {
            this.activeRow = index;
          }
        }, {
          key: "onChangeDeposito",
          value: function onChangeDeposito(event) {
            /* this.dados[event.index].codDeposito = event.deposito.codDeposito;
            this.dados[event.index].nomeDeposito = event.deposito.nomeDeposito;
            this.dados[event.index].quantidade = event.deposito.quantidade; */
            // Validar o que vai fazer aqui.

            /* this.form.controls.codDeposito.setValue(event.deposito.codDeposito);
            this.onFilter(); */
          }
        }, {
          key: "onEstoqueDetalhes",
          value: function onEstoqueDetalhes(material) {
            if (material.disponibilidade === 1) {
              this.estoqueService.showModal({
                pesquisa: {
                  deposito: material.codDeposito,
                  codMaterial: material.codMaterial,
                  estoqueDisponivel: this.form.value.comEstoque
                },
                material: material
              });
            } else {
              this.pnotifyService.notice('Material sem estoque');
            }
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesService"]
        }, {
          type: _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesFormularioService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"]
        }, {
          type: _cotacoes_formulario_modal_material_estoque_estoque_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesFormularioModalMaterialEstoqueService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent.propDecorators = {
        codEmpresa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
          args: ['codEmpresa']
        }],
        codDeposito: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
          args: ['codDeposito']
        }],
        codCliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
          args: ['codCliente']
        }],
        codEndereco: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
          args: ['codEndereco']
        }],
        codFormaPagamento: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
          args: ['codFormaPagamento']
        }],
        loaderNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
          args: ['loaderNavbar']
        }],
        loaderFullScreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
          args: ['loaderFullScreen']
        }],
        scrollToCarrinho: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
          args: ['scrollToCarrinho']
        }],
        scrollToFormOnTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
          args: ['scrollToFormOnTop']
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario-materiais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _cotacoes_cotacoes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasCotacoesService"], _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesFormularioService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"], _cotacoes_formulario_modal_material_estoque_estoque_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesFormularioModalMaterialEstoqueService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioMateriaisListaComponent);
      /***/
    },

    /***/
    "xsRv":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/modal/historico-exclusao/historico-exclusao.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent */

    /***/
    function xsRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_historico_exclusao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./historico-exclusao.component.html */
      "b/Ws");
      /* harmony import */


      var _historico_exclusao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./historico-exclusao.component.scss */
      "jkj0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI"); // ngx-bootstrap


      var ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent(bsModalRef) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent);

          this.bsModalRef = bsModalRef;
          this.activeRow = null;
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkTableConfig();
            this.onShowDescricao(0, this.exclusoes[0]);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.bsModalRef.hide();
          }
        }, {
          key: "checkTableConfig",
          value: function checkTableConfig() {
            if (this.exclusoes.length > 10) {
              this.tableConfig.fixedHeader = true;
              this.tableConfig.bodyHeight = 200;
            }
          }
        }, {
          key: "onShowDescricao",
          value: function onShowDescricao(index, item) {
            if (this.activeRow !== index) {
              this.activeRow = index;
              this.selectedItem = item;
            }
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent.propDecorators = {
        exclusoes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['exclusoes']
        }]
      };
      ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas-pedidos-producao-telas-formulario-modal-historico-exclusao',
        template: _raw_loader_historico_exclusao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historico_exclusao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])], ComercialCicloVendasPedidosProducaoTelasFormularioModalHistoricoExclusaoComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pedidos-producao-telas-pedidos-producao-telas-module-es5.js.map