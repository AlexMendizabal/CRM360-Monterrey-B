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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacao-materiais-associacao-materiais-module"], {
    /***/
    "+YLw":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/services/associacao-materiais.service.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoMateriaisService */

    /***/
    function YLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoMateriaisService", function () {
        return LogisticaYmsAssociacaoMateriaisService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); //angular
      // services


      var LogisticaYmsAssociacaoMateriaisService = /*#__PURE__*/function () {
        function LogisticaYmsAssociacaoMateriaisService(http) {
          _classCallCheck(this, LogisticaYmsAssociacaoMateriaisService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsAssociacaoMateriaisService, [{
          key: "getAssociacaoMateriais",
          value: function getAssociacaoMateriais(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.http.get("".concat(this.API, "/common/v2/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            return this.http["delete"]("".concat(this.API, "/logistica/yms/setores/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postAssociacaoMateriais",
          value: function postAssociacaoMateriais(associacao) {
            return this.http.post("".concat(this.API, "/logistica/yms/setores/materiais"), associacao, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsAssociacaoMateriaisService;
      }();

      LogisticaYmsAssociacaoMateriaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsAssociacaoMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsAssociacaoMateriaisService);
      /***/
    },

    /***/
    "93xu":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/cadastro/cadastro.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoMateriaisCadastroComponent */

    /***/
    function xu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoMateriaisCadastroComponent", function () {
        return LogisticaYmsAssociacaoMateriaisCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "SqrX");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "MgIp");
      /* harmony import */


      var _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../tipos-setor/services/tipos-setor.service */
      "uO4K");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../setores/services/setores.service */
      "vpXL");
      /* harmony import */


      var _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/associacao-materiais.service */
      "+YLw");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Services
      //Bootstrap
      //Angular
      //rxjs


      var LogisticaYmsAssociacaoMateriaisCadastroComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsAssociacaoMateriaisCadastroComponent(pnotify, formBuilder, titleService, activatedRoute, localeService, atividadesService, setoresService, tiposSetorService, confirmModalService, associacaoMateriaisService) {
          _classCallCheck(this, LogisticaYmsAssociacaoMateriaisCadastroComponent);

          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.titleService = titleService;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.atividadesService = atividadesService;
          this.setoresService = setoresService;
          this.tiposSetorService = tiposSetorService;
          this.confirmModalService = confirmModalService;
          this.associacaoMateriaisService = associacaoMateriaisService;
          this.materiais = [];
          this.materiaisLista = [];
          this.breadCrumbTree = [];
          this.materiaisAssociados = [];
          this.toggleAll = false;
          this.searching = false;
          this.noMateriais = true;
          this.firstSearch = false;
          this.showMateriais = true;
          this.disabledForm = false;
          this.materiaisListaEmpty = false; //loading

          this.loading = false;
          this.loadingNavBar = false;
          this.loadingConsulta = false;
          this.loadingMateriaisLista = false;
          this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false
          };
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
          };
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_10__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaYmsAssociacaoMateriaisCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getSetores();
            this.getTiposSetor();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;

            if (_params === null || _params === void 0 ? void 0 : _params.id) {
              this.getAssociacao(_params['id']);
              this.getSetor(_params['id']);
            }
          }
        }, {
          key: "consultaFilial",
          value: function consultaFilial(event) {
            this.getAssociacao(event.UUID_LOGI_YMS_SETO);
            this.loadingConsulta = true;
          }
        }, {
          key: "getAssociacao",
          value: function getAssociacao(id) {
            var _this = this;

            this.associacaoMateriaisService.getAssociacaoMateriais({
              UUID_LOGI_YMS_SETO: id,
              IN_STAT: 1
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this.loadingNavBar = false;
              _this.loadingConsulta = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.materiaisAssociados = response.body['data'];
              } else {
                _this.materiaisAssociados = [];
                _this.noResult = true;
              }

              if (_this.materiaisAssociados.length > 9) {
                _this.tableConfigAssocMateriais.fixedHeader = true;
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this.pnotify.error(message) : _this.pnotify.error();
              _this.noResult = true;
            });
          }
        }, {
          key: "getSetor",
          value: function getSetor(id) {
            var _this2 = this;

            this.loading = true;
            this.setoresService.getSetor(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.form.patchValue(response.body['data']);

                _this2.noResult = false;
              } else {
                _this2.noResult = true;
              }
            }, function (error) {
              try {
                _this2.pnotify.error(error.error.message);

                _this2.noResult = true;
              } catch (error) {
                _this2.pnotify.error();
              }
            });
          }
        }, {
          key: "getSetores",
          value: function getSetores(params) {
            var _this3 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loadingSetores = true;
            this.setoresService.getSetores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this3.loadingSetores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.setores = response.body['data'];
              } else {
                _this3.pnotify.notice('Nenhum registro encontrado!');
              }
            }, function (error) {
              try {
                _this3.pnotify.error(error.error.message);
              } catch (error) {
                _this3.pnotify.error();
              }
            });
          }
        }, {
          key: "getTiposSetor",
          value: function getTiposSetor() {
            var _this4 = this;

            this.loadingTiposSetor = true;
            this.tiposSetorService.getTiposSetor({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this4.loadingTiposSetor = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.tiposSetor = response.body['data'];
              } else {
                _this4.pnotify.notice('Nenhum registro encontrado!');
              }
            }, function (error) {
              try {
                _this4.pnotify.error(error.error.message);

                _this4.noResult = true;
              } catch (error) {
                _this4.pnotify.error();
              }
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.appTitle = 'Cadastro';
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'Cadastro',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Materiais por Área',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              UUID_LOGI_YMS_AREA_MATE: [null],
              UUID_LOGI_YMS_SETO_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
              UUID_LOGI_YMS_SETO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
              NM_AREA: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              assocMateriais: this.formBuilder.array([])
            });
            this.formMateriais = this.formBuilder.group({
              buscarPor: ['NM_MATE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              UUID_REFE_ERP: [null],
              NM_MATE: [null],
              NM_CLAS: [null],
              NM_LINH: [null]
            });
          }
        }, {
          key: "onLimparAssociacoes",
          value: function onLimparAssociacoes() {
            var _this5 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this5.deleteAssociacoes(_this5.form.get('UUID_LOGI_YMS_SETO').value) : null;
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            var _this6 = this;

            this.associacaoMateriaisService.deleteAssociacoes({
              UUID_LOGI_YMS_SETO: params
            }).subscribe(function (response) {
              if (response.status === 200) {
                _this6.materiaisAssociados = [];

                _this6.pnotify.success(response.body['message']);
              } else {
                _this6.pnotify.error();
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this6.pnotify.error(message) : _this6.pnotify.error();
              _this6.noResult = true;
            });
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(material) {
            var _this7 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this7.deleteMaterial(material) : null;
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMaterial",
          value: function deleteMaterial(material) {
            var _this8 = this;

            if (!material) {
              this.pnotify.notice('Nenhum usuário associado!');
              return;
            }

            material['IN_STAT'] = 0;
            this.loadingNavBar = true;
            this.associacaoMateriaisService.postAssociacaoMateriais(material).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this8.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var materialId = material.UUID_MATE + '@' + material.UUID_LOGI_YMS_SETO;
                _this8.materiaisAssociados = _this8.materiaisAssociados.filter(function (materialAssociado) {
                  var materialCorrenteId = materialAssociado.UUID_MATE + '@' + materialAssociado.UUID_LOGI_YMS_SETO;
                  return materialId != materialCorrenteId;
                });

                _this8.pnotify.success();
              } else {
                _this8.pnotify.error();
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this8.pnotify.error(message) : _this8.pnotify.error();
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            var _this9 = this;

            if (this.formMateriais.valid) {
              this.loadingNavBar = true;
              this.searching = true;
              this.materiaisLista = [];
              this.loadingMateriaisLista = false;
              this.materiaisListaEmpty = false;

              var _params = params !== null && params !== void 0 ? params : {};

              _params.situacao = '1';
              _params.qtItensPagina = 100;
              var _obj = this.formMateriais.value;
              if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
              this.associacaoMateriaisService.getMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                _this9.firstSearch = true;
                _this9.searching = false;
                _this9.loadingNavBar = false;
                _this9.loadingMateriaisLista = true;
              })).subscribe(function (response) {
                if (response.status === 200) {
                  console.log(response.body['result']);
                  _this9.materiaisLista = response.body['result'].map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });

                  if (_this9.materiaisLista.length > 9) {
                    _this9.tableConfigMateriais.fixedHeader = true;
                  } else {
                    _this9.tableConfigMateriais.fixedHeader = false;
                  }
                } else if (response.hasOwnProperty('success') && response.hasOwnProperty('mensagem')) {
                  _this9.pnotify.error();

                  _this9.materiaisListaEmpty = true;
                } else {
                  _this9.pnotify.error();

                  _this9.materiaisListaEmpty = true;
                }
              }, function (error) {
                var message = error.error.message;
                message ? _this9.pnotify.error(message) : _this9.pnotify.error();
              });
            }
          }
        }, {
          key: "onAssociarMateriais",
          value: function onAssociarMateriais() {
            var _this10 = this;

            this.toggleAll = false;
            this.materiaisLista.forEach(function (el) {
              if (el.checked === 1) {
                var material = {
                  UUID_MATE: el.ID,
                  ID_REFE_ERP: el.ID_REFE_ERP,
                  NM_MATE: el.NM_MATE,
                  UUID_LOGI_YMS_SETO: _this10.form.get('UUID_LOGI_YMS_SETO').value
                };

                _this10.onAddMaterial(material);

                el.checked = 0;
              }
            });
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(material) {
            if (this.checkMaterialExists(this.materiaisAssociados, material) === true) {
              this.pnotify.notice('Material já está associado!');
              return;
            }

            if (this.materiaisAssociados.length > 9) {
              this.tableConfigAssocMateriais.fixedHeader = true;
            }

            this.postAssociacaoMateriais(Object.assign(Object.assign({}, material), {
              IN_STAT: 1
            }));
          }
        }, {
          key: "checkMaterialExists",
          value: function checkMaterialExists(lista, material) {
            return lista.some(function (materialAssociado) {
              return materialAssociado.UUID_LOGI_YMS_SETO == material.UUID_LOGI_YMS_SETO && materialAssociado.UUID_MATE == material.UUID_MATE;
            });
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            var _this11 = this;

            this.toggleAll = !this.toggleAll;
            this.materiaisLista.forEach(function (el) {
              el.checked = _this11.toggleAll === true ? 1 : 0;
            });
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(index, material) {
            this.materiaisLista[index].checked = material.checked == 0 ? 1 : 0;
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postAssociacaoMateriais",
          value: function postAssociacaoMateriais(material) {
            var _this12 = this;

            this.associacaoMateriaisService.postAssociacaoMateriais(material).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this12.loading = false;
              _this12.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this12.materiaisAssociados = [].concat(_toConsumableArray(_this12.materiaisAssociados), [material]);
              } else {
                _this12.pnotify.error();
              }
            });

            (function (error) {
              var message = error.error.message;
              message ? _this12.pnotify.error(message) : _this12.pnotify.error();
            });
          }
        }]);

        return LogisticaYmsAssociacaoMateriaisCadastroComponent;
      }();

      LogisticaYmsAssociacaoMateriaisCadastroComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaYmsSetoresService"]
        }, {
          type: _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposSetorService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"]
        }, {
          type: _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaYmsAssociacaoMateriaisService"]
        }];
      };

      LogisticaYmsAssociacaoMateriaisCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: 'logistica-associacao-materiais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaYmsSetoresService"], _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposSetorService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"], _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaYmsAssociacaoMateriaisService"]])], LogisticaYmsAssociacaoMateriaisCadastroComponent);
      /***/
    },

    /***/
    "ATYN":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/lista/lista.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function ATYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hc3NvY2lhY2FvLW1hdGVyaWFpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "FArF":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/lista/lista.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoMateriaisListaComponent */

    /***/
    function FArF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoMateriaisListaComponent", function () {
        return LogisticaYmsAssociacaoMateriaisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "eC/F");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "ATYN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../setores/services/setores.service */
      "vpXL");
      /* harmony import */


      var _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/associacao-materiais.service */
      "+YLw");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //angular
      //servicos
      // rxjs


      var LogisticaYmsAssociacaoMateriaisListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsAssociacaoMateriaisListaComponent(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, setoresService, detailPanelService, associacaoMateriaisService) {
          _classCallCheck(this, LogisticaYmsAssociacaoMateriaisListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.dateService = dateService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.setoresService = setoresService;
          this.detailPanelService = detailPanelService;
          this.associacaoMateriaisService = associacaoMateriaisService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false;
          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: false
          };
          this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          }; // Tipos de Situação dos Setores (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '2',
            nome: 'Inativos'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(LogisticaYmsAssociacaoMateriaisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getFilterSetores();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this13 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this13.routerService.getBase64UrlParams(response);

              _this13.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this13.itemsPerPage = _response.TT_REGI_PAGI;

              _this13.getSetores(_this13.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this14 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this14.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              UUID_LOGI_YMS_AREA: [null],
              UUID_LOGI_YMS_AREA_USUA: [null],
              NM_AREA: [null],
              NM_SETO: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              CD_CEP: [null],
              DS_ESTA: [null],
              DS_CIDA: [null],
              DS_BAIR: [null],
              DS_LOGR: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'YMS',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Materiais por Setor'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(associacaoMateriais) {
            this.getAssociacaoMateriais({
              UUID_LOGI_YMS_SETO: associacaoMateriais.UUID_LOGI_YMS_SETO,
              IN_STAT: 1
            });
            this.detailPanelService.show();
            this.associacaoSelecionada = associacaoMateriais;
            this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "getSetores",
          value: function getSetores(params) {
            var _this15 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.setoresService.getSetores(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this15.loading = false;
              _this15.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this15.setores = response.body['data'];
                _this15.totalItems = response.body['total'];
                _this15.noResult = false;
              } else {
                _this15.noResult = true;
                _this15.setores = [];
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this15.pnotify.error(message) : _this15.pnotify.error();
              _this15.noResult = true;
            });
          }
        }, {
          key: "getFilterSetores",
          value: function getFilterSetores() {
            var _this16 = this;

            this.loadingSetores = true;
            this.setoresService.getSetores({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this16.loadingSetores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.filterSetores = response.body['data'];
              } else {
                _this16.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              var message = error.error.message;
              message ? _this16.pnotify.error(message) : _this16.pnotify.error();
            };
          }
        }, {
          key: "getAssociacaoMateriais",
          value: function getAssociacaoMateriais(params) {
            var _this17 = this;

            this.noAssocMateriais = true;
            this.loadingAssociacaoMateriais = true;
            this.associacaoMateriaisService.getAssociacaoMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this17.loadingAssociacaoMateriais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this17.associacaoMateriais = response.body['data'];

                if (_this17.associacaoMateriais.length > 9) {
                  _this17.tableConfigAssocMateriais.fixedHeader = true;
                }

                _this17.noAssocMateriais = false;
              } else {
                _this17.pnotify.notice('Nenhuma associação encontrada!');

                _this17.noAssocMateriais = true;
                _this17.associacaoMateriais = [];
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this17.pnotify.error(message) : _this17.pnotify.error();
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
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
            listagemExport = this.associacaoMateriais.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "AssociacaoMateriais".concat(dataExport));
          }
        }]);

        return LogisticaYmsAssociacaoMateriaisListaComponent;
      }();

      LogisticaYmsAssociacaoMateriaisListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsSetoresService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"]
        }, {
          type: _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoMateriaisService"]
        }];
      };

      LogisticaYmsAssociacaoMateriaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-associacao-materiais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsSetoresService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"], _services_associacao_materiais_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoMateriaisService"]])], LogisticaYmsAssociacaoMateriaisListaComponent);
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
    "MgIp":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/cadastro/cadastro.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function MgIp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2Fzc29jaWFjYW8tbWF0ZXJpYWlzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2Fzc29jaWFjYW8tbWF0ZXJpYWlzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufSJdfQ== */";
      /***/
    },

    /***/
    "SKcO":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/associacao-materiais-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoMateriaisRoutingModule */

    /***/
    function SKcO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoMateriaisRoutingModule", function () {
        return LogisticaYmsAssociacaoMateriaisRoutingModule;
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


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "93xu");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "FArF");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAssociacaoMateriaisListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsAssociacaoMateriaisCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsAssociacaoMateriaisCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaYmsAssociacaoMateriaisRoutingModule = function LogisticaYmsAssociacaoMateriaisRoutingModule() {
        _classCallCheck(this, LogisticaYmsAssociacaoMateriaisRoutingModule);
      };

      LogisticaYmsAssociacaoMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaYmsAssociacaoMateriaisRoutingModule);
      /***/
    },

    /***/
    "SqrX":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/associacao-materiais/cadastro/cadastro.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SqrX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Materiais por Setor\">\n  <button \n    [disabled]=\"loadingNavBar === true\"\n    [routerLink]=\"['../']\"\n    >\n    Voltar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\">\n        <div class=\"mtc-title\">Dados da Setor</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"tiposSetor\">Tipo de Setor</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tiposSetor\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingTiposSetor\"\n              labelForId=\"tiposSetor\"\n              bindLabel=\"NM_SETO_TIPO\"\n              bindValue=\"UUID_LOGI_YMS_SETO_TIPO\"\n              id=\"tiposSetor\"\n              formControlName=\"UUID_LOGI_YMS_SETO_TIPO\"\n              (change)=\"getSetores({'UUID_LOGI_YMS_SETO_TIPO': $event?.UUID_LOGI_YMS_SETO_TIPO || ''})\"\n              [ngClass]=\"onFieldError('UUID_LOGI_YMS_SETO_TIPO') + ' ' + onFieldRequired('UUID_LOGI_YMS_SETO_TIPO')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_YMS_SETO_TIPO')\" message=\"Tipo de setor é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col pl-0\">\n            <label for=\"setores\">Setor</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"setores\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingSetores\"\n              labelForId=\"setores\"\n              bindLabel=\"NM_SETO\"\n              bindValue=\"UUID_LOGI_YMS_SETO\"\n              id=\"setores\"\n              formControlName=\"UUID_LOGI_YMS_SETO\" \n              [ngClass]=\"onFieldError('UUID_LOGI_YMS_SETO') + ' ' + onFieldRequired('UUID_LOGI_YMS_SETO')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_YMS_SETO')\" message=\"Setor é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </form>\n      <div class=\"row mb-4\">\n        <div class=\"col mb-3\">\n          <hr>\n        </div>\n      </div>\n      <message\n        *ngIf=\"loadingConsulta\"\n        icon=\"fas fa-cog fa-spin\"\n        text=\"Estamos buscando informações da Setor selecionada...\">\n      </message>\n      <div [hidden]=\"loadingConsulta\">\n        <div class=\"row mb-2 mt-4\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Materiais associados ao Setor</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger\"\n                (click)=\"onLimparAssociacoes()\">\n                <i class=\"fas fa-trash\"></i>\n                <span>Limpar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"showMateriais && materiaisAssociados.length > 0\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigAssocMateriais\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\" width=\"20%\">ID</th>\n                  <th scope=\"col\" width=\"75%\">Material</th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let material of materiaisAssociados\" >\n                  <td width=\"20%\">{{ material.ID_REFE_ERP }}</td>\n                  <td width=\"75%\">\n                   {{ material.NM_MATE | uppercase }}\n                  </td>\n                  <td class=\"text-center\" width=\"5%\">\n                    <btn-icon\n                      icon=\"fas fa-trash\"\n                      size=\"small\"\n                      (click)=\"onDeleteMaterial(material)\">\n                    </btn-icon>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"showMateriais && materiaisAssociados.length === 0\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-exchange-alt\"\n              text=\"Nenhuma associação encontrada\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Pesquisa de materiais</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"getMateriais()\"\n              [disabled]=\"searching === true || formMateriais.valid == false\">\n              <i class=\"fas fa-search\"></i>\n              <span \n              [tooltip]=\"formMateriais.valid == false ? 'Digite um termo de pesquisa':''\"\n              container=\"body\"\n              placement =\"left\">Pesquisar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_REFE_ERP\">ID ERP</option>\n                <option value=\"NM_MATE\" selected> Nome Material</option>\n                <option value=\"NM_CLAS\">Classe</option>\n                <option value=\"NM_LINH\">Linha</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-9\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keydown.enter)=\"getMateriais()\"\n                >\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div *ngIf=\"materiaisLista.length > 0\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de materiais</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarMateriais()\"\n                [disabled]=\"searching === true || form.valid === false\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span\n                  [tooltip]=\"form.valid == false ? 'Selecione uma Setor':''\"\n                  container=\"body\"\n                  placement =\"left\">Associar\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigMateriais\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    width=\"5%\">\n                    <btn-icon\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll()\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" width=\"85%\">Materiais</th>\n                  <th scope=\"col\" width=\"10%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let material of materiaisLista; let i = index;\">\n                  <td class=\"text-center\" width=\"5%\">\n                    <btn-icon\n                      [icon]=\"material.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onCheckMaterial(i, material)\">\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    width=\"85%\"\n                    (click)=\"onCheckMaterial(i, material)\">\n                    {{ material.ID_REFE_ERP }} - {{ material.NM_MATE | uppercase }}\n                  </td>\n                  <td\n                  width=\"10%\"\n                  class=\"hover\">\n                    <div>\n                      <i\n                      class=\"far fa-question-circle\"\n                      [tooltip]=\"tooltipDetalhesMaterial\"\n                      placement=\"left\"\n                      container=\"body\"\n                      >\n                      </i>\n\n                      <ng-template #tooltipDetalhesMaterial>\n                        <table>\n                          <tbody>\n                            <tr>\n                              <th>Classe: </th>\n                              <td class=\"text-left\">{{material.NM_CLAS || 'NENHUMA INFORMAÇÃO'}}</td>\n                            </tr>\n                            <tr>\n                              <th>Linha: </th>\n                              <td class=\"text-left\">{{material.NM_LINH || 'NENHUMA INFORMAÇÃO'}}</td>\n                            </tr>\n                            <tr *ngIf = \"material.IN_STAT == 1\">\n                              <th><i class=\"far fa-check-circle text-success\"></i></th>\n                              <td class=\"text-left\">Material {{material.DS_STAT}}</td>\n                            </tr>\n                            <tr *ngIf = \"material.IN_STAT != 1\">\n                              <th><i class=\"fas fa-ban text-danger \"></i></th>\n                              <td class=\"text-left\">Material {{material.DS_STAT}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </ng-template>\n\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"searching === true\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando os materiais para você...\">\n          </message>\n        </div>\n      </div>\n      <div *ngIf=\"searching === false\">\n        <div class=\"row\" *ngIf=\"materiaisListaEmpty && loadingMateriaisLista\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"Nenhuma informação encontrada\">\n            </message>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-search\"\n              text=\"Preecha os campos acima para pesquisar materiais\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n\n\n";
      /***/
    },

    /***/
    "eC/F":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/associacao-materiais/lista/lista.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"MATERIAIS POR SETOR\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"filterSetores\">Setor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filterSetores\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingSetores\"\n                labelForId=\"UUID_LOGI_YMS_SETO\"\n                bindLabel=\"NM_SETO\"\n                bindValue=\"UUID_LOGI_YMS_SETO\"\n                id=\"UUID_LOGI_YMS_SETO\"\n                formControlName=\"UUID_LOGI_YMS_SETO\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Setor</th>\n              <th scope=\"col\" >Tipo de Setor</th>\n              <th scope=\"col\" style=\"width:30px\"[hidden]=\"showDetailPanel\"></th>\n              <th scope=\"col\" style=\"width:30px\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let setor of setores\"  [class.table-active]=\"setor?.UUID_LOGI_YMS_SETO == associacaoSelecionada?.UUID_LOGI_YMS_SETO && showDetailPanel\">\n              <td>\n              {{setor.UUID_LOGI_YMS_SETO }}\n              </td>\n              <td >{{ setor.NM_SETO | uppercase}}</td>\n              <td >{{ setor.NM_SETO_TIPO | uppercase}}</td>\n              <td class=\"align-middle\"  [hidden]=\"showDetailPanel\">\n                <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', setor.UUID_LOGI_YMS_SETO]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n              </td>\n              <td class=\"align-middle\">\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(setor)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <tabset>\n          <tab heading=\"Dados da Area\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div>\n                <div class=\"form-row mt-3\">\n                  <div class=\"form-group col-lg-5\">\n                    <label>ID do Setor</label>\n                    <div>{{ associacaoSelecionada?.UUID_LOGI_YMS_SETO }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-7\">\n                    <label>Descrição do Setor</label>\n                    <div>{{ associacaoSelecionada?.NM_SETO | uppercase}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tab>\n          <tab  heading=\"Materiais Associados\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div class=\"mb-3\">\n                <custom-table  [config]=\"tableConfigAssocMateriais\" *ngIf=\"!loadingAssociacaoMateriais && !noAssocMateriais\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th scope=\"col\"  width=\"20%\">ID ERP</th>\n                      <th scope=\"col\"  width=\"80%\">Material</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let material of associacaoMateriais\">\n                      <td  width=\"20%\">{{ material?.UUID_MATE }}</td>\n                      <td  width=\"80%\">{{ material?.NM_MATE_ASSO | uppercase }}</td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n                <message\n                  *ngIf=\"loadingAssociacaoMateriais\"\n                  icon=\"fas fa-cog fa-spin\"\n                  text=\"Estamos pesquisando os materiais para você...\">\n                </message>\n                <div [hidden]=\"loadingAssociacaoMateriais || !noAssocMateriais\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n                </div>\n              </div>\n            </div>\n          </tab>       \n        </tabset> \n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "vI1m":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-materiais/associacao-materiais.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoMateriaisModule */

    /***/
    function vI1m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoMateriaisModule", function () {
        return LogisticaYmsAssociacaoMateriaisModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "FArF");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "93xu");
      /* harmony import */


      var _associacao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./associacao-materiais-routing.module */
      "SKcO");

      var LogisticaYmsAssociacaoMateriaisModule = function LogisticaYmsAssociacaoMateriaisModule() {
        _classCallCheck(this, LogisticaYmsAssociacaoMateriaisModule);
      };

      LogisticaYmsAssociacaoMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoMateriaisListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaYmsAssociacaoMateriaisCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], _associacao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsAssociacaoMateriaisRoutingModule"]]
      })], LogisticaYmsAssociacaoMateriaisModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=associacao-materiais-associacao-materiais-module-es5.js.map