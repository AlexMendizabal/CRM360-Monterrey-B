(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contrato-contrato-module"], {
    /***/
    "Da5R":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/cadastro/cadastro.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosContratoCadastroComponent */

    /***/
    function Da5R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosContratoCadastroComponent", function () {
        return TecnologiaInformacaoCadastrosContratoCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "Zwa6");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "xGKK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../modelo/services/modelo.service */
      "9Yla");
      /* harmony import */


      var _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../tipo-contrato/services/tipo-contrato.service */
      "cy+q");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _services_contrato_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/contrato.service */
      "Ztrz");
      /* harmony import */


      var src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/requests/moedas.service */
      "zWKM");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW"); //Angular
      //Services
      //Bootstrap
      //rxjs


      var TecnologiaInformacaoCadastrosContratoCadastroComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastrosContratoCadastroComponent(formBuilder, pnotify, activatedRoute, router, moedasService, localeService, confirmModalService, titleService, atividadesService, contratoService, tipoContratoService, modeloService) {
          _classCallCheck(this, TecnologiaInformacaoCadastrosContratoCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.moedasService = moedasService;
          this.localeService = localeService;
          this.confirmModalService = confirmModalService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.contratoService = contratoService;
          this.tipoContratoService = tipoContratoService;
          this.modeloService = modeloService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_17__["MASKS"];
          this.breadCrumbTree = [];
          this.formData = [];
          this.prefixoMoeda = '';
          this.compararData = null; //loading

          this.loading = true;
          this.loadingMoeda = false;
          this.loadingNavBar = false;
          this.anexosLoaded = false; //Interfaces

          this.modelo = [];
          this.moedas = [];
          this.tipoContrato = [];
          this.filiais = [];
          this.indices = [];
          this.documentos = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(TecnologiaInformacaoCadastrosContratoCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getTipoContrato();
            this.getMoedas();
            this.getContratoPai();
            this.getEmpresas();
            this.getIndices();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getTipoContrato",
          value: function getTipoContrato(params) {
            var _this = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            this.loadingTipoContrato = true;
            this.tipoContratoService.getTipoContrato(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this.loadingTipoContrato = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.tipoContrato = response.body['data'];
              } else {
                _this.tipoContrato = [];
              }
            }, function (error) {
              _this.tipoContrato = [];
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this2 = this;

            this.loadingFiliais = true;
            this.contratoService.getEmpresas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this2.loadingFiliais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.filiais = response.body['data'];
                var params = _this2.activatedRoute.snapshot.params;
                if (!params.hasOwnProperty('id')) return;

                _this2.getEmpresasAssoc({
                  ID_TECN_INFO_CONT: params.id
                });
              } else {
                _this2.filiais = [];
              }
            }, function (error) {
              _this2.pnotify.error('Erro ao carregar empresas');

              _this2.filiais = [];
            });
          }
        }, {
          key: "getEmpresasAssoc",
          value: function getEmpresasAssoc(params) {
            var _this3 = this;

            this.contratoService.getEmpresasAssoc(params).subscribe(function (response) {
              if (response.status === 200) {
                var empresas = response.body['data'];
                var filiaisId = [];
                empresas.map(function (empresa) {
                  var filial = _this3.filiais.filter(function (filial) {
                    return filial['CD_EMPR'] == empresa['CD_EMPR'] && filial['CD_FILI'] == empresa['CD_FILI'];
                  });

                  if (filial.length === 1) {
                    filiaisId.push(filial[0]['RAW']);
                  }
                });

                _this3.form.get('CD_EMPR').setValue(filiaisId);
              }
            });
          }
        }, {
          key: "getIndices",
          value: function getIndices(params) {
            var _this4 = this;

            this.loadingIndices = true;
            this.contratoService.getIndices().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this4.loadingIndices = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.indices = response.body['data'];
              } else {
                _this4.indices = [];
              }
            }, function (error) {
              _this4.indices = [];

              _this4.pnotify.error('Erro ao carregar indices');
            });
          }
        }, {
          key: "getMoedas",
          value: function getMoedas(params) {
            var _this5 = this;

            this.loadingMoeda = true;
            this.moedasService.getMoedas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this5.loadingMoeda = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.moedas = response.body['data'];
              }
            }, function (error) {
              _this5.moedas = [];

              _this5.pnotify.error('Erro ao carregar moedas');
            });
          }
        }, {
          key: "getModelo",
          value: function getModelo() {
            var _this6 = this;

            this.loadingModelo = true;
            this.modeloService.getModelo({
              IN_STAT: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this6.loadingModelo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.modelo = response.body['data'];
              } else {
                _this6.modelo = [];
              }
            }, function (error) {
              _this6.pnotify.error('Erro ao carregar modelos');

              _this6.modelo = [];
            });
          }
        }, {
          key: "getContrato",
          value: function getContrato(params) {
            var _this7 = this;

            this.loading = true;
            this.contratoService.getContrato(params).subscribe(function (response) {
              if (response.status === 200) {
                _this7.loading = false;
                var _items = response.body['data'][0];
                _items.DT_INIC = new Date(_items.DT_INIC);
                _items.DT_VENC = new Date(_items.DT_VENC);
                _items.PRAZ_CANC = new Date(_items.PRAZ_CANC);

                _this7.form.patchValue(_items);

                _this7.setPrefixoMoeda(_items.PREF_MOED);
              }

              _this7.loading = false;
            }, function (error) {
              _this7.pnotify.error('Erro ao carregar Contratos');

              _this7.pnotify.error();
            });
          }
        }, {
          key: "getContratoPai",
          value: function getContratoPai(params) {
            var _this8 = this;

            this.contratoService.getContrato(params).subscribe(function (response) {
              if (response.status === 200) {
                _this8.contratos = response.body['data'];
              }
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            var _this9 = this;

            this.contratoService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this9.documentos = response.body['data'];
              } else {
                _this9.documentos = [];
              }
            }, function (error) {
              _this9.documentos = [];
            });
          }
        }, {
          key: "postContrato",
          value: function postContrato() {
            var _this10 = this;

            this.loadingNavBar = true;

            var _contrato = JSON.parse(JSON.stringify(this.form.value));

            _contrato['IN_ITEM_COMP'] = _contrato['IN_ITEM_COMP'] ? '1' : '0';
            this.contratoService.postContrato(_contrato).subscribe(function (response) {
              if (response.status === 200) {
                var id = response.body['data'];

                _this10.form.get('ID_TECN_INFO_CONT').setValue(id);

                _this10.sendChilds();
              } else {
                _this10.pnotify.error();
              }
            }, function (error) {
              _this10.loadingNavBar = false;
              if (error.error.hasOwnProperty('message')) _this10.pnotify.error(error.error.message);else _this10.pnotify.error();
            });
          }
        }, {
          key: "sendChilds",
          value: function sendChilds() {
            var _this11 = this;

            var documentos = this.postDocumentos(this.form.value);
            var empresas = this.postEmpresas(this.form.value);
            var requests = [].concat(_toConsumableArray(documentos), _toConsumableArray(empresas));

            if (requests.length === 0) {
              this.loadingNavBar = false;
              this.form.reset();
              this.pnotify.success("Registro salvo com sucesso");
              this.router.navigate(['./../'], {
                relativeTo: this.activatedRoute
              });
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["forkJoin"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this11.loadingNavBar = false;
            })).subscribe(function (responses) {
              var hasError = false;
              responses.forEach(function (response) {
                if (response.status !== 200) {
                  _this11.pnotify.error();

                  hasError = true;
                  _this11.loadingNavBar = false;
                }
              });

              if (!hasError) {
                _this11.loadingNavBar = false;

                _this11.form.reset();

                _this11.pnotify.success("Registro salvo com sucesso");

                _this11.router.navigate(['./../'], {
                  relativeTo: _this11.activatedRoute
                });
              }
            }, function (error) {
              _this11.pnotify.error();
            });
          }
        }, {
          key: "postDocumentos",
          value: function postDocumentos(params) {
            var _this12 = this;

            var requests = [];

            if (this.formData.length === 0) {
              return requests;
            }

            var id = this.form.get('ID_TECN_INFO_CONT').value;
            this.formData.forEach(function (element, index) {
              requests.push(_this12.contratoService.postDocumento(element, id));
            });
            return requests;
          }
        }, {
          key: "postEmpresas",
          value: function postEmpresas(params) {
            var empresasId = params.CD_EMPR;
            if (!empresasId) return [];
            var empresasFiltradas = this.filiais.filter(function (filial) {
              return empresasId.includes(filial['RAW']);
            });
            if (empresasFiltradas.length == 0) return [];
            var _params = {
              ID_TECN_INFO_CONT: params.ID_TECN_INFO_CONT,
              EMPR: empresasFiltradas
            };
            return [this.contratoService.postEmpresas(_params)];
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(documento) {
            var _this13 = this;

            var type = 'inactivate',
                title = 'Confirmar inativação',
                message = 'Deseja realmente prosseguir com a inativação do registro?',
                cancelTxt = 'Cancelar',
                okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
              _this13.loadingNavBar = true;
              return _this13.contratoService.putDocumento(documento);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this13.loadingNavBar = false;
            })).subscribe(function (response) {
              _this13.pnotify.success('Anexos atualizado com sucesso');

              _this13.getDocumentos({
                ID_TECN_INFO_CONT: _this13.form.get('ID_TECN_INFO_CONT').value,
                IN_STAT: '1'
              });
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.appTitle = 'Cadastro';
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Contratos',
              routerLink: "/tecnologia-informacao/contratos/".concat(id)
            }, {
              descricao: 'Contratos',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "setPrefixoMoeda",
          value: function setPrefixoMoeda(prefixoMoeda) {
            prefixoMoeda = prefixoMoeda !== null && prefixoMoeda !== void 0 ? prefixoMoeda : 'R$ ';

            if (prefixoMoeda.toString().slice(-1) === ' ') {
              this.prefixoMoeda = prefixoMoeda;
              return;
            }

            this.prefixoMoeda = prefixoMoeda.toString() + ' ';
            return;
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              DS_CONT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)]],
              ID_TECN_INFO_CONT_REFE: [null],
              ID_TECN_INFO_CONT_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              ID_TECN_INFO_CONT: [null],
              VL_CONT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              DS_OBSE: [null],
              DT_INIC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              DT_VENC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              DT_INCL: [null],
              MULT_CANC: [null],
              PRAZ_CANC: [null],
              ID_MOED: ['1'],
              IN_VL_VARI: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              SG_MOED: [null],
              PREF_MOED: ['R$ '],
              IN_ITEM_COMP: [false],
              VL_ITEM_COMP: [null],
              CD_EMPR: [null],
              INTE_REAJ: [12],
              ID_INDI: [null]
            });
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (!_params.hasOwnProperty('id')) return;
            this.getContrato({
              ID_TECN_INFO_CONT: _params.id
            });
            this.getDocumentos({
              ID_TECN_INFO_CONT: _params['id'],
              IN_STAT: '1'
            });
          } // Validação de formulário

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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onRemove",
          value: function onRemove(documento) {
            documento.IN_STAT = '0';
            this.putDocumento(documento);
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.documentos.push({
              NM_DOCU: files[0]['name']
            });
          }
        }, {
          key: "comparaData",
          value: function comparaData() {
            if (!this.form.get('DT_VENC').value) {
              return false;
            } else if (this.form.get('DT_INIC').value > this.form.get('DT_VENC').value) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }]);

        return TecnologiaInformacaoCadastrosContratoCadastroComponent;
      }();

      TecnologiaInformacaoCadastrosContratoCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_12__["MoedasService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: _services_contrato_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroContratoService"]
        }, {
          type: _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroTipoContratoService"]
        }, {
          type: _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroModeloService"]
        }];
      };

      TecnologiaInformacaoCadastrosContratoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tecnologia-informacao-cadastros-contrato-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_12__["MoedasService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], _services_contrato_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroContratoService"], _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroTipoContratoService"], _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroModeloService"]])], TecnologiaInformacaoCadastrosContratoCadastroComponent);
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
    "VpvV":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/contrato/lista/lista.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VpvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"CONTRATOS\">\n  <button\n  type=\"button\"\n  (click)=\"getTotalContrato()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"ID_TECN_INFO_CONT\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_TECN_INFO_CONT\"\n                formControlName=\"ID_TECN_INFO_CONT\"\n                placeholder=\"Digite...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"tipoContrato\">Tipo de Contrato</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tipoContrato\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingTipoContrato\"\n                labelForId=\"ID_TECN_INFO_CONT_TIPO\"\n                bindLabel=\"NM_CONT_TIPO\"\n                bindValue=\"ID_TECN_INFO_CONT_TIPO\"\n                id=\"ID_TECN_INFO_CONT_TIPO\"\n                formControlName=\"ID_TECN_INFO_CONT_TIPO\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DS_CONT\">Descrição</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DS_CONT\"\n                formControlName=\"DS_CONT\"\n                placeholder=\"Digite...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n              </ng-template>\n            </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <table  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" width=\"5%\">ID </th>\n              <th scope=\"col\">Descrição</th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\">Tipo do Contrato</th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" width=\"15%\">Inicio do Contrato</th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" width=\"15%\">Fim do Contrato</th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" width=\"20%\"><span class=\"d-flex\">Expiração do Prazo</span></th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\" style=\"width:80px\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let contrato of contratos | slice : begin : end; let i = index\" [class.table-active]=\"contrato?.ID_TECN_INFO_CONT == contratoSelecionado?.ID_TECN_INFO_CONT && showDetailPanel\">\n              <td (click)=\"onDetails(contrato)\"[ngClass]=\"contrato.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{contrato.ID_TECN_INFO_CONT}}\n              </td>\n              <td (click)=\"onDetails(contrato)\">{{ contrato.DS_CONT | uppercase }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">{{ contrato.NM_CONT_TIPO | uppercase }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">{{ contrato.DT_INIC | date : 'dd/MM/yyyy'}}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">{{ contrato.DT_VENC | date : 'dd/MM/yyyy'}}</td>\n              <td class=\"d-flex\" [hidden]=\"showDetailPanel\" (click)=\"onDetails(contrato)\">\n                <i class=\"text-danger  fas fa-circle mr-3\" *ngIf= \"contrato.DS_STAT_VENC == 'VENCIDO'\" ></i>\n                <i class=\"text-warning fas fa-circle mr-3\" *ngIf= \"contrato.DS_STAT_VENC == 'FALTA MENOS DE 30 DIAS'\" ></i>\n                <i class=\"text-primary fas fa-circle mr-3\" *ngIf=\"contrato.DS_STAT_VENC == 'FALTA MENOS DE 60 DIAS'\"></i>\n                <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"contrato.DS_STAT_VENC == 'EM VIGÊNCIA'\" ></i>\n                <span class=\"nowrap\">{{ contrato.DS_STAT_VENC | uppercase }}</span>\n              </td>\n              <td [hidden]=\"showDetailPanel\" class=\"align-middle\" style=\"width:80px\">\n                <span class=\"mr-3\" [tooltip]=\"contrato.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(contrato)\">\n                    <i [ngClass]=\"contrato.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', contrato.ID_TECN_INFO_CONT]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div>\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <tabset>\n          <tab heading=\"Dados cadastrais\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Descrição do Contrato</label>\n                    <div>{{ contratoSelecionado?.DS_CONT | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Tipo de Contrato</label>\n                    <div>{{ contratoSelecionado?.NM_CONT_TIPO | uppercase}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Tipo de Valor (Váriavel/Fixo)</label>\n                    <div *ngIf=\"contratoSelecionado?.IN_VL_VARI == 1\">VÁRIAVEL</div>\n                    <div *ngIf=\"contratoSelecionado?.IN_VL_VARI == 0\">FIXO</div>\n                    <div *ngIf=\"contratoSelecionado?.IN_VL_VARI == ''\">NÃO INFORMADO</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Valor do Contrato</label>\n                    <div>{{contratoSelecionado?.VL_CONT | currency: contratoSelecionado?.SG_MOED }}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Prazo de Cancelamento</label>\n                    <div>{{contratoSelecionado?.PRAZ_CANC | date: 'dd/MM/yyyy'}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label >Valor da Multa</label>\n                    <div>{{contratoSelecionado?.MULT_CANC | currency: contratoSelecionado?.SG_MOED }}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Inicio do Contrato</label>\n                    <div>{{ contratoSelecionado?.DT_INIC | date: 'dd/MM/yyyy' }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Fim do Contrato</label>\n                    <div>{{ contratoSelecionado?.DT_VENC | date: 'dd/MM/yyyy'}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-12\">\n                    <label>OBSERVAÇÃO</label>\n                    <div>{{ contratoSelecionado?.DS_OBSE | uppercase}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Expiração do Prazo</label>\n                    <div>{{ contratoSelecionado?.DS_STAT_VENC | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group text-primary col-lg-6\" *ngIf=\"contratoSelecionado?.IN_ITEM_COMP == 1\">\n                    <label>Contrato com aquisição de produto</label>\n                    <div> Valor para aquisição é de {{contratoSelecionado?.VL_ITEM_COMP | currency: contratoSelecionado?.SG_MOED }}</div>\n                  </div>\n                </div><hr>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Usuário Responsável Pelo Cadastro</label>\n                    <div>{{ contratoSelecionado?.NM_USUA_CADA | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Data do Cadastro</label>\n                    <div>{{ contratoSelecionado?.DT_INCL | date: 'dd/MM/yyyy' }}</div>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"mb-3\" *ngIf=\"dadosCadastraisLoaded && dadosCadastraisEmpty\">\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n              </div>\n               -->\n            </div>\n          </tab>\n          <tab heading=\"Contratos Vinculados\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n              <div *ngIf=\"!loadingVinculo && !noVinculo\">\n                <table  class=\"table table-borderless text-center\" >\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"width:40px\"></th>\n                        <th scope=\"col\">ID </th>\n                        <th scope=\"col\">Descrição</th>\n                        <th scope=\"col\">Inicio do Contrato</th>\n                        <th scope=\"col\">Fim do Contrato</th>\n                        <th scope=\"col\" style=\"width:40px\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let contrato of contratosVinculados; let i = index\">\n                        <td class=\"d-flex\">\n                          <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"contrato.IN_STAT == 1\" tooltip=\"Ativo\" ></i>\n                          <i class=\"text-danger  fas fa-circle mr-3\" *ngIf=\"contrato.IN_STAT == 0\" tooltip=\"Inativo\"></i>\n                        </td>\n                        <td>{{ contrato.ID_TECN_INFO_CONT }}</td>\n                        <td>{{ contrato.DS_CONT | uppercase}}</td>\n                        <td>{{ contrato.DT_INIC | date: 'dd/MM/yyyy' }}</td>\n                        <td>{{ contrato.DT_VENC | date: 'dd/MM/yyyy'}}</td>\n                        <td style=\"text-align: right;\">\n                          <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                            <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', contrato.ID_TECN_INFO_CONT]\">\n                              <i class=\"fas fa-edit\"></i>\n                            </button>\n                          </span>\n                        </td>\n                      </tr>\n                    </tbody>\n                </table>\n              </div>\n              <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"loadingVinculo\">\n                <div class=\"spinner-border text-dark\"></div>\n              </div>\n              <div *ngIf=\"!loadingVinculo && noVinculo\" class=\"d-flex justify-content-center mb-3\">\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n              </div>\n            </div>\n          </tab>\n        </tabset>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "WOri":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/lista/lista.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WOri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9jb250cmF0by9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Zwa6":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/contrato/cadastro/cadastro.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zwa6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen> -->\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Contratos\">\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postContrato()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" >\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 mx-auto\">\n        <legend>Dados do Contrato</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DS_CONT\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_CONT\"\n              formControlName=\"DS_CONT\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('DS_CONT') + ' ' + onFieldRequired('DS_CONT')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_CONT')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"tipoContrato\">Tipo de Contrato</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipoContrato\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingTipoContrato\"\n              labelForId=\"ID_TECN_INFO_CONT_TIPO\"\n              bindLabel=\"NM_CONT_TIPO\"\n              bindValue=\"ID_TECN_INFO_CONT_TIPO\"\n              id=\"ID_TECN_INFO_CONT_TIPO\"\n              formControlName=\"ID_TECN_INFO_CONT_TIPO\"\n              [ngClass]=\"onFieldRequired('ID_TECN_INFO_CONT_TIPO')\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TECN_INFO_CONT_TIPO')\" message=\"Tipo de Contrato é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DT_INIC\">Inicio do Contrato</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"DT_INIC\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"Selecione...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_INIC\"\n                [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\n              <invalid-form-control [show]=\"onFieldInvalid('DT_INIC')\" message=\"Data de inicio do contrato é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DT_VENC\">Fim do Contrato</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"DT_VENC\"\n              type=\"text\"\n              placeholder=\"Selecione...\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_VENC\"\n                [ngClass]=\"onFieldError('DT_VENC') + ' ' + onFieldRequired('DT_VENC')\">\n              <invalid-form-control [show]=\"onFieldInvalid('DT_VENC')\" message=\"Data de fim do contrato é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <invalid-form-control\n          [show]=\"comparaData()\"\n          message=\"Data final deve ser maior que data inicial\">\n        </invalid-form-control>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"PRAZ_CANC\">Prazo de Cancelamento</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n                class=\"form-control\"\n                id=\"PRAZ_CANC\"\n                type=\"text\"\n                placeholder=\"Selecione...\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"PRAZ_CANC\"\n                [ngClass]=\"onFieldError('PRAZ_CANC') + ' ' + onFieldRequired('PRAZ_CANC')\"\n              >\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"MULT_CANC\">Multa de Cancelamento</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Digite...\"\n              id=\"MULT_CANC\"\n              formControlName=\"MULT_CANC\"\n              autocomplete=\"new-password\"\n              currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: prefixoMoeda }\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"indices\">Índice de reajuste</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"indices\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingIndices\"\n              labelForId=\"ID_INDI\"\n              bindLabel=\"SG_INDI\"\n              bindValue=\"ID_INDI\"\n              id=\"ID_INDI\"\n              formControlName=\"ID_INDI\">\n            </ng-select>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"INTE_REAJ\">Intervalo de reajuste (meses) </label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"INTE_REAJ\"\n              formControlName=\"INTE_REAJ\"\n              placeholder=\"Digite...\"\n            />\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-8 pl-0\">\n            <label for=\"contratoPai\">Associar a um contrato pai</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"contratos\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingMoeda\"\n              labelForId=\"ID_TECN_INFO_CONT_REFE\"\n              bindValue=\"ID_TECN_INFO_CONT\"\n              id=\"contratoPai\"\n              formControlName=\"ID_TECN_INFO_CONT_REFE\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                ({{item.ID_TECN_INFO_CONT | number: '3.0-0'}}) - {{ item.DS_CONT }} - {{ item.NM_CONT_TIPO }}\n              </ng-template>\n              <ng-template ng-label-tmp let-item=\"item\">\n                ({{item.ID_TECN_INFO_CONT | number: '3.0-0'}}) - {{ item.DS_CONT }} - {{ item.NM_CONT_TIPO }}\n              </ng-template>\n            </ng-select>\n          </div>\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"IN_STAT\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_STAT\"\n              formControlName=\"IN_STAT\"\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"0\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"IN_VL_VARI\">Tipo de Valor (Variável/Fixo)</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_VL_VARI\"\n              formControlName=\"IN_VL_VARI\"\n              [ngClass]=\"onFieldRequired('IN_VL_VARI')\">\n              <option value=\"1\">Variável</option>\n              <option value=\"0\">Fixo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_VL_VARI')\" message=\"Tipo de valor é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"ID_MOED\">Moeda</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"moedas\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingMoeda\"\n              labelForId=\"ID_MOED\"\n              bindLabel=\"SG_MOED\"\n              bindValue=\"ID\"\n              id=\"ID_MOED\"\n              formControlName=\"ID_MOED\"\n              (change)=\"setPrefixoMoeda($event?.PREF_MOED)\"  \n            >\n              <ng-template ng-option-tmp let-item=\"item\">\n                {{item.SG_MOED}} - {{ item.NM_MOED }}\n              </ng-template>\n              <ng-template ng-label-tmp let-item=\"item\">\n                {{item.SG_MOED}} - {{ item.NM_MOED }}\n              </ng-template>\n            </ng-select>\n          </div>\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"VL_CONT\">Valor</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"VL_CONT\"\n              formControlName=\"VL_CONT\"\n              placeholder=\"Digite...\"\n              autocomplete=\"new-password\"\n              currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: prefixoMoeda }\"\n              [ngClass]=\"onFieldError('VL_CONT') + ' ' + onFieldRequired('VL_CONT')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('VL_CONT')\" message=\"Valor do Contrato é obrigatório.\"></invalid-form-control>\n          </div>\n        </div><br>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <div class=\"custom-control custom-checkbox\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_ITEM_COMP\"\n                formControlName=\"IN_ITEM_COMP\">\n              <label class=\"custom-control-label\" for=\"IN_ITEM_COMP\">Aquisição de Produtos</label>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\"></div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4 pl-0\" [hidden]=\"form.get('IN_ITEM_COMP').value == 0\">\n            <label for=\"VL_ITEM_COMP\">Valor para aquisição do produto</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"VL_ITEM_COMP\"\n              formControlName=\"VL_ITEM_COMP\"\n              placeholder=\"Digite...\"\n              autocomplete=\"new-password\"\n              currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: prefixoMoeda }\"\n              [ngClass]=\"onFieldError('VL_ITEM_COMP') + ' ' + onFieldRequired('VL_ITEM_COMP')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('VL_ITEM_COMP')\" message=\"Valor do Contrato é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\"></div>\n        </div>\n        \n\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 mx-auto\">\n        <legend>Associação de Empresas</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"filiais\">Empresas</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"filiais\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [hideSelected]=\"true\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [loading]=\"loadingFiliais\"\n              bindLabel=\"DS_FILIAL\"\n              bindValue=\"RAW\"\n              id=\"CD_EMPR\"\n              formControlName=\"CD_EMPR\">\n            </ng-select>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-7 pt-2 pb-2 mx-auto\">\n        <legend>Anexos</legend>\n        <div class=\"form-group border rounded p-1\">\n          <div>\n            <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\n              <span>Novo Documento</span>\n            </label>\n            <input\n              id=\"documento\"\n              type=\"file\"\n              (change)=\"appendFile($event.target.files)\"\n              class=\"d-none\"\n              >\n          </div>\n        </div>\n        <ul>\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos\">\n            <div>{{ item.NM_DOCU | uppercase }}</div>\n            <div [hidden]=\"!item.ID_TECN_INFO_CONT_DOCU\">\n              <a\n                [href]=\"item.LINK\"\n                target=\"_blank\"\n                class=\"btn-icon-sm mx-2 text-black\"\n                tooltip=\"visualizar\"\n              >\n                <i class=\"far fa-eye\"></i>\n              </a>\n              <button\n                class=\"btn-icon-sm mx-2 hover\"\n                tooltip=\"excluir\"\n                (click)=\"onRemove(item)\"\n                >\n                <i class=\"fas fa-trash\"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>";
      /***/
    },

    /***/
    "fs7y":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/contrato.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: TecnologiaInformacaoContratoModule */

    /***/
    function fs7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoContratoModule", function () {
        return TecnologiaInformacaoContratoModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./lista/lista.component */
      "j+78");
      /* harmony import */


      var _contrato_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./contrato-routing.module */
      "twyt");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Da5R");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // Modules
      // Components

      var TecnologiaInformacaoContratoModule = function TecnologiaInformacaoContratoModule() {
        _classCallCheck(this, TecnologiaInformacaoContratoModule);
      };

      TecnologiaInformacaoContratoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoCadastrosContratoListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoCadastrosContratoCadastroComponent"]],
        imports: [_contrato_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoCadastrosContratoModuleRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_17__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__["CurrencyMaskModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"],
          useValue: 'pt-br'
        }]
      })], TecnologiaInformacaoContratoModule);
      /***/
    },

    /***/
    "j+78":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/lista/lista.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosContratoListaComponent */

    /***/
    function j78(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosContratoListaComponent", function () {
        return TecnologiaInformacaoCadastrosContratoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "VpvV");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "WOri");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_contrato_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/contrato.service */
      "Ztrz");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../tipo-contrato/services/tipo-contrato.service */
      "cy+q");
      /* harmony import */


      var src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/requests/moedas.service */
      "zWKM");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW"); //angular
      //servicos
      // rxjs


      var TecnologiaInformacaoCadastrosContratoListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function TecnologiaInformacaoCadastrosContratoListaComponent(route, pnotify, activatedRoute, contratoService, formBuilder, xlsxService, confirmModalService, routerService, dateService, moedasService, detailPanelService, tipoContratoService) {
          _classCallCheck(this, TecnologiaInformacaoCadastrosContratoListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.contratoService = contratoService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.moedasService = moedasService;
          this.detailPanelService = detailPanelService;
          this.tipoContratoService = tipoContratoService;
          this.contratosVinculados = [];
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR

          this.itensLoading = false; //Loading dos Itens no Modal

          this.itens = new Array();
          this.noVinculo = true;
          this.loadingVinculo = true;
          this.tipoContrato = [];
          this.tipoMoeda = [];
          this.totalContratosExp = [];
          this.showDetailPanel = false; // Tipos de Situação dos Tipos de Contratos (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
            nome: 'Inativos'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
        }

        _createClass(TecnologiaInformacaoCadastrosContratoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getTipoContrato();
            this.onDetailPanelEmitter();
            this.getMoedas();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this14 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this14.routerService.getBase64UrlParams(response);

              _this14.form.patchValue(_response);

              _this14.getContrato(_this14.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this15 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this15.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(contrato) {
            var _this16 = this;

            this.getContratosVinculados({
              ID_TECN_INFO_CONT_REFE: contrato.ID_TECN_INFO_CONT
            });
            this.loadingNavBar = true;
            this.detailPanelService.show();
            this.contratoSelecionado = contrato;
            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this16.loadingNavBar = false;
            }, 500);
          }
        }, {
          key: "getTipoContrato",
          value: function getTipoContrato(params) {
            var _this17 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            this.loadingTipoContrato = true;
            this.tipoContratoService.getTipoContrato(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this17.loadingTipoContrato = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this17.tipoContrato = response.body['data'];
              }
            });
          }
        }, {
          key: "getTotalContrato",
          value: function getTotalContrato(params) {
            var _this18 = this;

            this.loadingNavBar = true;
            params = this.getParams();

            var _params = Object.assign(Object.assign({}, params), {
              IN_PAGI: '0'
            });

            this.contratoService.getContrato(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this18.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this18.totalContratosExp = response.body['data'];

                _this18.onExport();
              } else {
                _this18.totalContratosExp = [];
              }
            }, function (error) {
              _this18.pnotify.error();
            });
          }
        }, {
          key: "getMoedas",
          value: function getMoedas(params) {
            var _this19 = this;

            this.moedasService.getMoedas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {})).subscribe(function (response) {
              if (response.status === 200) {
                _this19.tipoMoeda = response.body['data'];
              }
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(item) {
            item.IN_SELE = !item.IN_SELE;
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_TECN_INFO_CONT: [null],
              DS_CONT: [null],
              VL_CONT: [null],
              ID_TECN_INFO_CONT_TIPO: [null],
              IN_STAT: [null],
              QT_DOCU: [null],
              PAGI: [1],
              IN_SELE: [false],
              TIME: [new Date().getTime()],
              DT_INIC: [null],
              DT_VENC: [null],
              DT_INCL: [null],
              NM_USUA_CADA: [null],
              PRAZ_CANC: [null]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/tecnologia-informacao/home"
            }, {
              descricao: 'Contratos',
              routerLink: "/tecnologia-informacao/contratos/".concat(id)
            }, {
              descricao: 'Contratos'
            }];
          }
        }, {
          key: "getContratosVinculados",
          value: function getContratosVinculados(params) {
            var _this20 = this;

            this.loadingVinculo = true;
            this.noVinculo = true;
            this.contratoService.getContrato(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this20.loading = false;
              _this20.loadingVinculo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this20.contratosVinculados = response.body['data'];
                _this20.noVinculo = false;
              } else {
                _this20.noVinculo = true;
                _this20.contratosVinculados = [];
              }
            }, function (error) {
              _this20.pnotify.error();
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getContrato",
          value: function getContrato(params) {
            var _this21 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.contratoService.getContrato(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this21.loading = false;
              _this21.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this21.contratos = response.body['data'];
                _this21.totalItems = response.body['total'];
                _this21.noResult = false;
              } else {
                _this21.noResult = true;
                _this21.contratos = [];
              }
            }, function (error) {
              _this21.pnotify.error();

              _this21.noResult = true;
            });
          }
        }, {
          key: "changeType",
          value: function changeType(contrato) {
            var _this22 = this;

            var stat = contrato.IN_STAT == '1' ? '0' : '1';
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
              _this22.loadingNavBar = true;
              contrato.IN_STAT = stat;
              return _this22.contratoService.postContrato(contrato);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this22.loadingNavBar = false;
            })).subscribe(function (success) {
              _this22.pnotify.success();
            }, function (error) {
              contrato.IN_STAT = contrato.IN_STAT == '1' ? '0' : '1';

              _this22.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == '1') return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
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
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.totalContratosExp;
            this.xlsxService.exportFile(listagemExport, "Controle_Contratos_".concat(dataExport));
          }
        }]);

        return TecnologiaInformacaoCadastrosContratoListaComponent;
      }();

      TecnologiaInformacaoCadastrosContratoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroContratoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_13__["MoedasService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"]
        }, {
          type: _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroTipoContratoService"]
        }];
      };

      TecnologiaInformacaoCadastrosContratoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-cadastros-contrato-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_contrato_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroContratoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], src_app_shared_services_requests_moedas_service__WEBPACK_IMPORTED_MODULE_13__["MoedasService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"], _tipo_contrato_services_tipo_contrato_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroTipoContratoService"]])], TecnologiaInformacaoCadastrosContratoListaComponent);
      /***/
    },

    /***/
    "twyt":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/contrato-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosContratoModuleRoutingModule */

    /***/
    function twyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosContratoModuleRoutingModule", function () {
        return TecnologiaInformacaoCadastrosContratoModuleRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "j+78");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Da5R"); //components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastrosContratoListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosContratoCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosContratoCadastroComponent"]
      }];

      var TecnologiaInformacaoCadastrosContratoModuleRoutingModule = function TecnologiaInformacaoCadastrosContratoModuleRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoCadastrosContratoModuleRoutingModule);
      };

      TecnologiaInformacaoCadastrosContratoModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TecnologiaInformacaoCadastrosContratoModuleRoutingModule);
      /***/
    },

    /***/
    "xGKK":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/cadastro/cadastro.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xGKK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9jb250cmF0by9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zWKM":
    /*!************************************************************!*\
      !*** ./src/app/shared/services/requests/moedas.service.ts ***!
      \************************************************************/

    /*! exports provided: MoedasService */

    /***/
    function zWKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MoedasService", function () {
        return MoedasService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var MoedasService = /*#__PURE__*/function () {
        function MoedasService(http) {
          _classCallCheck(this, MoedasService);

          this.http = http;
          this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(MoedasService, [{
          key: "getMoedas",
          value: function getMoedas(params) {
            var _params = params;
            return this.http.get("".concat(this.api, "/servicos/moedas"), {
              params: _params,
              observe: "response"
            });
          }
        }]);

        return MoedasService;
      }();

      MoedasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      MoedasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MoedasService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contrato-contrato-module-es5.js.map