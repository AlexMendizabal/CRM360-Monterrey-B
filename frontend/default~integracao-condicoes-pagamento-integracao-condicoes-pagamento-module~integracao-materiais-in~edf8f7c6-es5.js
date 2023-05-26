(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~integracao-condicoes-pagamento-integracao-condicoes-pagamento-module~integracao-materiais-in~edf8f7c6"], {
    /***/
    "1gQg":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/templates/material-principal/material-principal.component.scss ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gQg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2RhZ2RhL3RlbXBsYXRlcy9tYXRlcmlhbC1wcmluY2lwYWwvbWF0ZXJpYWwtcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Dpyy":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/templates/material-principal/material-principal.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent */

    /***/
    function Dpyy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent", function () {
        return ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./material-principal.component.html */
      "m9Mb");
      /* harmony import */


      var _material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./material-principal.component.scss */
      "1gQg");
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
      "VgqD");
      /* harmony import */


      var _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/associacao-materiais.service */
      "Yaq/"); // Services


      var ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent = /*#__PURE__*/function () {
        function ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent(formBuilder, pnotifyService, comercialService, service) {
          _classCallCheck(this, ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent);

          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.comercialService = comercialService;
          this.service = service;
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

        _createClass(ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent, [{
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
            var _this = this;

            if (this.form.valid) {
              this.loaderNavbar.emit(true);
              this.searching = true;
              this.materiaisLista = [];
              this.materiaisListaLoaded = false;
              this.materiaisListaEmpty = false;
              var params = {
                codClasse: this.form.value.codClasse,
                tipoMaterial: 'Distribuidora'
              };

              if (this.form.value.codMaterial !== 0) {
                Object.assign(params, {
                  codMaterial: this.form.value.codMaterial,
                  tipoMaterial: 'Distribuidora'
                });
              }

              this.service.getMateriaisTid(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this.firstSearch = true;
                _this.searching = false;

                _this.loaderNavbar.emit(false);

                _this.materiaisListaLoaded = true;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    _this.materiaisLista = response.data;

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
                },
                error: function error(_error) {
                  if (_error['error'].hasOwnProperty('mensagem')) {
                    _this.pnotifyService.error(_error.error.mensagem);
                  } else {
                    _this.pnotifyService.error();
                  }
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
            var _this2 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              this.materiaisLoader = true;
              this.materiais = [];
              this.service.getMateriaisTid({
                codClasse: codClasse,
                tipoMaterial: 'Distribuidora'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this2.materiaisLoader = false;
              })).subscribe({
                next: function next(response) {
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
                },
                error: function error(_error2) {
                  if (_error2['error'].hasOwnProperty('mensagem')) {
                    _this2.pnotifyService.error(_error2.error.mensagem);
                  } else {
                    _this2.pnotifyService.error();
                  }
                }
              });
            }
          }
        }]);

        return ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent;
      }();

      ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]
        }, {
          type: _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]
        }];
      };

      ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent.propDecorators = {
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
      ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracao_dagda-materiais-templates-material-principal',
        template: _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"], _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesServicosIntegracaoMateriaisComponent"]])], ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent);
      /***/
    },

    /***/
    "EaA3":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/templates/templates.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaMateriaisTemplatesModule */

    /***/
    function EaA3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaMateriaisTemplatesModule", function () {
        return ComercialIntegracoesDagdaMateriaisTemplatesModule;
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
      "Dpyy"); // ng-select
      // Modules
      // Components


      var ComercialIntegracoesDagdaMateriaisTemplatesModule = function ComercialIntegracoesDagdaMateriaisTemplatesModule() {
        _classCallCheck(this, ComercialIntegracoesDagdaMateriaisTemplatesModule);
      };

      ComercialIntegracoesDagdaMateriaisTemplatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]],
        exports: [_material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracaoDagdaMateriaisTemplatesMaterialPrincipalComponent"]]
      })], ComercialIntegracoesDagdaMateriaisTemplatesModule);
      /***/
    },

    /***/
    "Rk3r":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/date.service.ts ***!
      \******************************************************/

    /*! exports provided: DateService */

    /***/
    function Rk3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.months = ['Enero', 'Febrero', 'Marzon', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          this.weeks = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        }

        _createClass(DateService, [{
          key: "sameDay",
          value: function sameDay(dateA, dateB) {
            return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
          }
        }, {
          key: "getHourMinute",
          value: function getHourMinute(date) {
            var getHours = date.getHours();
            var getMinutes = date.getMinutes();
            var hours, minutes;

            if (getHours < 10) {
              hours = "0".concat(getHours);
            } else {
              hours = getHours;
            }

            if (getMinutes < 10) {
              minutes = "0".concat(getMinutes);
            } else {
              minutes = getMinutes;
            }

            return "".concat(hours, ":").concat(minutes);
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(dateA, dateB) {
            var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var day = dateA.getDate();
            var weekDay = dateA.getDay();
            var month = dateA.getMonth();
            var year = dateA.getFullYear();
            var hour = this.getHourMinute(dateA);

            if (showTime) {
              if (dateB) {
                var hourB = this.getHourMinute(dateB);
                return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, ", desde ").concat(hour, " hasta ").concat(hourB);
              }

              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, " hasta ").concat(hour);
            } else {
              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year);
            }
          }
        }, {
          key: "getFullMonth",
          value: function getFullMonth(date) {
            return this.months[date.getMonth()];
          }
        }, {
          key: "getFirstDayYear",
          value: function getFirstDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 0, 1);
          }
        }, {
          key: "getLastDayYear",
          value: function getLastDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 11, 31);
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() + 1, 0);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
          }
        }, {
          key: "convert2PhpDate",
          value: function convert2PhpDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            if (m < 10) m = "0".concat(m);
            if (d < 10) d = "0".concat(d);
            if (h < 10) h = "0".concat(h);
            if (i < 10) i = "0".concat(i);
            return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(h, ":").concat(i);
          }
        }, {
          key: "convertToBrazilianDate",
          value: function convertToBrazilianDate(date) {
            var y = date.getFullYear().toString();
            var m = (date.getMonth() + 1).toString().padStart(2, '0');
            var d = date.getDate().toString().padStart(2, '0');
            var h = date.getHours().toString().padStart(2, '0');
            var i = date.getMinutes().toString().padStart(2, '0');
            var s = date.getSeconds().toString().padStart(2, '0');
            return "".concat(d, "/").concat(m, "/").concat(y, " ").concat(h, ":").concat(i, ":").concat(s);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            if (time !== null) {
              var timeSplit = time.split(':');
              return "".concat(timeSplit[0], ":").concat(timeSplit[1]);
            }

            return time;
          }
        }, {
          key: "convertToUrlDate",
          value: function convertToUrlDate(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (d < 10) d = "0".concat(d);
            if (m < 10) m = "0".concat(m);
            return "".concat(d, "-").concat(m, "-").concat(y);
          }
        }, {
          key: "convertStringToDate",
          value: function convertStringToDate(stringDate, dateType) {
            var date;

            if (stringDate.indexOf(':') > -1) {
              var stringDateSplit = stringDate.split(' ');
              var dateSplit = stringDateSplit[0].split('-');
              var timeSplit = stringDateSplit[1].split(':');

              if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              } else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              }
            } else {
              var _dateSplit = stringDate.split('-');

              if (dateType == 'latam') {
                date = new Date(_dateSplit[2], parseInt(_dateSplit[1]) - 1, _dateSplit[0].substr(0, 2));
              } else if (dateType == 'usa') {
                date = new Date(_dateSplit[0], parseInt(_dateSplit[1]) - 1, _dateSplit[2].substr(0, 2));
              }
            }

            return date;
          }
        }, {
          key: "formatWithSlashes",
          value: function formatWithSlashes(stringDate, dateType) {
            var dateSplit = stringDate.split('-');
            var date;

            if (dateType == 'latam') {
              date = "".concat(dateSplit[2], "/").concat(dateSplit[1], "/").concat(dateSplit[0]);
            } else if (dateType == 'usa') {
              date = "".concat(dateSplit[1], "/").concat(dateSplit[2], "/").concat(dateSplit[0]);
            }

            return date;
          }
        }, {
          key: "addDaysToDate",
          value: function addDaysToDate(date, days) {
            return new Date(date.setDate(date.getDate() + days));
          }
        }]);

        return DateService;
      }();

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "Yaq/":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/services/associacao-materiais.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialIntegracoesServicosIntegracaoMateriaisComponent */

    /***/
    function Yaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesServicosIntegracaoMateriaisComponent", function () {
        return ComercialIntegracoesServicosIntegracaoMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
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
      "zN97");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ComercialIntegracoesServicosIntegracaoMateriaisComponent = /*#__PURE__*/function () {
        function ComercialIntegracoesServicosIntegracaoMateriaisComponent(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialIntegracoesServicosIntegracaoMateriaisComponent);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
        }

        _createClass(ComercialIntegracoesServicosIntegracaoMateriaisComponent, [{
          key: "getAssociacao",
          value: function getAssociacao(param) {
            return this.http.get("".concat(this.BASE_URL, "/comercial/integracoes/dagda/associacao"), {
              params: param,
              observe: 'response'
            });
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(param) {
            return this.http.get("".concat(this.BASE_URL, "/comercial/integracoes/dagda/detalhes"), {
              params: param,
              observe: 'response'
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              observe: 'response'
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(param) {
            return this.http.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: param,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(param) {
            return this.http.get("".concat(this.BASE_URL, "/common/v2/materiais"), {
              params: param,
              observe: 'response'
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(param) {
            if (param.codigoMaterial) {
              return this.http.post("".concat(this.BASE_URL, "/comercial/integracoes/dagda/associacao"), param, {
                observe: 'response'
              });
            } else {
              return this.http.post("".concat(this.BASE_URL, "/comercial/integracoes/dagda/associacao-altera-integracao"), param, {
                observe: 'response'
              });
            }
          }
        }, {
          key: "deleteAssociacao",
          value: function deleteAssociacao(param) {
            return this.http.post("".concat(this.BASE_URL, "/comercial/integracoes/dagda/delete-associacao"), param, {
              observe: 'response'
            });
          }
        }, {
          key: "getMateriaisDagda",
          value: function getMateriaisDagda(param) {
            return this.http.get("".concat(this.BASE_URL, "/comercial/integracoes/dagda/materiais-dagda"), {
              params: param,
              observe: 'response'
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([linhas, classes]);
          }
        }, {
          key: "getMateriaisTid",
          value: function getMateriaisTid() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialIntegracoesServicosIntegracaoMateriaisComponent;
      }();

      ComercialIntegracoesServicosIntegracaoMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"]
        }];
      };

      ComercialIntegracoesServicosIntegracaoMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_5__["ComercialTidSoftwareService"]])], ComercialIntegracoesServicosIntegracaoMateriaisComponent);
      /***/
    },

    /***/
    "m9Mb":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/templates/material-principal/material-principal.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m9Mb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2\">\n  <div class=\"col mt-auto\">\n    <div class=\"mtc-title mb-0\">Pesquisar material principal</div>\n  </div>\n  <div class=\"col\">\n    <div class=\"d-flex justify-content-end\">\n      <button\n        type=\"button\"\n        class=\"btn btn-sm btn-outline-secondary\"\n        (click)=\"onFilter()\"\n        [disabled]=\"searching === true\">\n        <i class=\"fas fa-search\"></i>\n        <span>Pesquisar</span>\n      </button>\n    </div>\n  </div>\n</div>\n<advanced-filter>\n  <form [formGroup]=\"form\" autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-6\">\n        <label for=\"codLinha\">Linha</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"linhas\"\n          formControlName=\"codLinha\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codLinha\"\n          bindLabel=\"descricao\"\n          bindValue=\"id\"\n          (change)=\"onChangeLinha($event.id)\">\n        </ng-select>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <label for=\"codClasse\">Classe</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"filteredClasses\"\n          formControlName=\"codClasse\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codClasse\"\n          bindLabel=\"nomeClasse\"\n          bindValue=\"idClasse\"\n          (change)=\"onChangeClasse($event.idClasse)\">\n        </ng-select>\n      </div>\n    </div>\n      <div class=\"form-row\">\n      <div class=\"form-group col-lg-12\">\n        <label for=\"codMaterial\">Material</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"materiais\"\n          formControlName=\"codMaterial\"\n          [virtualScroll]=\"true\"\n          labelForId=\"codMaterial\"\n          bindLabel=\"codigoDescricaoMaterial\"\n          bindValue=\"codigoMaterial\"\n          [loading]=\"materiaisLoader\"\n          loadingText=\"Carregando...\">\n        </ng-select>\n      </div>\n    </div>\n  </form>\n</advanced-filter>\n<div *ngIf=\"materiaisLista.length > 0\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mtc-title\">Selecione o material principal</div>\n      <custom-table [config]=\"tableConfigMateriais\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\" style=\"width: 5%\"></th>\n            <th scope=\"col\" style=\"width: 95%\">Material</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let material of materiaisLista\" [class.table-active]=\"material.codigoMaterial == codMaterialSelecionado\">\n            <td class=\"text-center\" style=\"width: 5%\">\n              <btn-icon\n                [icon]=\"material.codigoMaterial == codMaterialSelecionado ? 'fas fa-check-square' : 'far fa-square'\"\n                size=\"small\"\n                (click)=\"onCheckMaterial(material)\">\n              </btn-icon>\n            </td>\n            <td\n              class=\"hover\"\n              style=\"width: 95%\"\n              (click)=\"onCheckMaterial(material)\">\n              {{ material.codigoDescricaoMaterial | uppercase }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"searching === true\">\n  <div class=\"col\">\n    <message\n      icon=\"fas fa-cog fa-spin\"\n      text=\"Estamos pesquisando os materiais para você...\">\n    </message>\n  </div>\n</div>\n<div *ngIf=\"searching === false\">\n  <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\n    <div class=\"col\">\n      <message\n        icon=\"fas fa-box-open\"\n        text=\"Nenhuma informação encontrada\">\n      </message>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\n    <div class=\"col\">\n      <message\n        icon=\"fas fa-search\"\n        text=\"Preecha os campos acima para pesquisar materiais\">\n      </message>\n    </div>\n  </div>\n</div>\n";
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
//# sourceMappingURL=default~integracao-condicoes-pagamento-integracao-condicoes-pagamento-module~integracao-materiais-in~edf8f7c6-es5.js.map