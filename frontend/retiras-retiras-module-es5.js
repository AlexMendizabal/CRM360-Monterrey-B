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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retiras-retiras-module"], {
    /***/
    "0yQ1":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/cadastro/cadastro.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: LogisticaEntregaRetirasCadastroComponent */

    /***/
    function yQ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasCadastroComponent", function () {
        return LogisticaEntregaRetirasCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "KGU2");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "C+Rl");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _services_retiras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/retiras.service */
      "WL+P");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../cadastros/motoristas/services/motorista.service */
      "z/iS");
      /* harmony import */


      var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/estados.service */
      "H0sO");
      /* harmony import */


      var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../cadastros/veiculos/services/veiculo.service */
      "3ocw");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/modules/admin/atividades/services/atividades.service */
      "UNg1"); //angular
      //rxjs
      //ngx
      // services
      //masks


      var LogisticaEntregaRetirasCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntregaRetirasCadastroComponent(service, formBuilder, localeService, routerService, atividadesService, atividaesAdminService, activatedRoute, dateService, route, pnotify, motoristasService, veiculosService, estadosService, modalService) {
          _classCallCheck(this, LogisticaEntregaRetirasCadastroComponent);

          this.service = service;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.routerService = routerService;
          this.atividadesService = atividadesService;
          this.atividaesAdminService = atividaesAdminService;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.route = route;
          this.pnotify = pnotify;
          this.motoristasService = motoristasService;
          this.veiculosService = veiculosService;
          this.estadosService = estadosService;
          this.modalService = modalService;
          this.appTitle = 'Cadastro';
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_16__["MASKS"];
          this.loading = true;
          this.loadingNavBar = false;
          this.loadingSalvarRomaneio = false;
          this.breadCrumbTree = [{
            descricao: 'Logística'
          }, {
            descricao: 'GESTIÓN DE ENTREGAS',
            routerLink: '../../'
          }, {
            descricao: 'Retiras',
            routerLink: '../'
          }, {
            descricao: this.appTitle
          }];
          this.filiais = [];
          /* Pagination */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.totalItems = 0;
          this.begin = 0;
          this.end = this.itemsPerPage;
          /* Pagination */

          this.pedidos = new Array();
          this.pedidosSelecionados = new Array();
          this.pedidosSelecionadosLoading = false;
          this.materiais = new Array();
          this.materiaisLoading = false;
          this.motoristas = new Array();
          this.loadingMotoristas = true;
          this.veiculos = new Array();
          this.loadingVeiculos = true;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.formTransporte = this.formBuilder.group({
            ID_LOGI_MOTO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ID_LOGI_VEIC: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ID_LOGI_ROMA: [null],
            CD_FILI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.form = this.formBuilder.group({
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            CD_FILI: [null],
            CD_CLIE: [null],
            CD_PEDI: [null],
            DS_ESTA: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)],
            CD_CEP: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(9)],
            DS_CIDA: [null],
            NM_CLIE: [null],
            NOTA_FISC: [null],
            TIME: [new Date().getTime()]
          });
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntregaRetirasCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.getRoutesRegister();
            this.onActivatedRoute();
            this.getMotoristas({
              IN_PAGI: '0',
              IN_STAT: '1'
            });
            this.getVeiculos({
              IN_PAGI: '0',
              IN_STAT: '1'
            });
            this.getEstados();
            this.getFiliais();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              if (!_response) {
                return;
              }

              if (_response.hasOwnProperty('ID_LOGI_ROMA')) {
                _this.loading = false;

                _this.getRomaneio({
                  ID_LOGI_ROMA: _response['ID_LOGI_ROMA']
                });

                _this.getPedidosRomaneio({
                  ID_LOGI_ROMA: _response['ID_LOGI_ROMA'],
                  IN_STAT: 1
                });

                return;
              }

              _this.form.patchValue(_response);

              _this.getPedidos(_this.getParams());
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this2 = this;

            this.service.getFiliais().subscribe(function (response) {
              _this2.filiais = response;
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this3 = this;

            this.pedidos = [];
            if (!this.loading) this.loadingNavBar = true;
            this.service.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.pedidos = response.body['data'];
                _this3.totalItems = response.body['total'];
                _this3.begin = 0;
                _this3.end = _this3.itemsPerPage;
              } else if (response.status === 204) {} else {
                _this3.pnotify.error();
              }
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this3.pnotify.error(message) : _this3.pnotify.error();
            });
          }
        }, {
          key: "getPedidosRomaneio",
          value: function getPedidosRomaneio(params) {
            var _this4 = this;

            this.pedidosSelecionados = [];
            this.pedidosSelecionadosLoading = true;
            this.service.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this4.pedidosSelecionadosLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this4.pedidosSelecionados = response.body['data'];
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this4.pnotify.error(message) : _this4.pnotify.error();
            });
          }
        }, {
          key: "getRomaneio",
          value: function getRomaneio(params) {
            var _this5 = this;

            this.service.getRomaneios(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {})).subscribe(function (response) {
              if (response.status !== 200) {
                _this5.pnotify.error('Falha ao carregar o romaneio.');

                return;
              }

              var romaneio = response.body['data'][0];

              _this5.formTransporte.patchValue(romaneio);
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this5.pnotify.error(message) : _this5.pnotify.error();
            });
          }
        }, {
          key: "postRomaneio",
          value: function postRomaneio() {
            var _this6 = this;

            this.loadingSalvarRomaneio = true;
            var romaneio = this.formTransporte.value;
            this.service.postRomaneio(romaneio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {})).subscribe(function (response) {
              if (response.status !== 200 || !response.body['data']) {
                _this6.pnotify.error('Falha ao salvar o romaneio.');

                return;
              }

              _this6.formTransporte.get('ID_LOGI_ROMA').setValue(response.body['data']);

              _this6.postPedidos();
            }, function (error) {
              _this6.pnotify.error(error.error['message']);
            });
          }
        }, {
          key: "postPedidos",
          value: function postPedidos() {
            var _this7 = this;

            var params = {
              'ID_LOGI_ROMA': this.formTransporte.get('ID_LOGI_ROMA').value,
              'PEDI': this.pedidosSelecionados
            };
            this.service.postPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this7.loadingSalvarRomaneio = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.pedidosSelecionados = [];

                _this7.formTransporte.reset();

                _this7.route.navigate([]);

                _this7.pnotify.success();
              } else {
                _this7.pnotify.error();
              }
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this7.pnotify.error(message) : _this7.pnotify.error();
            });
          }
        }, {
          key: "getParams",
          value: function getParams(params) {
            var _params = {};

            var _obj = params !== null && params !== void 0 ? params : this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToBrazilianDate(_obj[prop]).substring(0, 10);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.updateValueAndValidity();
            this.pedidos = [];
            this.route.navigate([]);
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
          } // Validação de formulário

          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            /* this.form.get('PAGINA').setValue(event.page);
            this.onSearch(); */
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "getMotoristas",
          value: function getMotoristas(params) {
            var _this8 = this;

            this.loadingMotoristas = true;
            this.motoristasService.getMotoristas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this8.loadingMotoristas = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this8.pnotify.notice("Nenhum motorista localizado");

                return;
              }

              _this8.motoristas = response.body['data'];
            }, function (error) {
              _this8.pnotify.error('Erro ao carregar motoristas.');
            });
          }
        }, {
          key: "getVeiculos",
          value: function getVeiculos(params) {
            var _this9 = this;

            this.loadingVeiculos = true;
            this.veiculosService.getVeiculos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this9.loadingVeiculos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.veiculos = response.body['data'];
              }
            }, function (error) {
              _this9.pnotify.error('Erro ao carregar motoristas');
            });
          }
        }, {
          key: "getEstados",
          value: function getEstados() {
            this.estados = this.estadosService.getEstados();
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(pedido) {
            var _this10 = this;

            this.materiaisLoading = true;
            this.service.getMateriais(pedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this10.materiaisLoading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.materiais = response.body['data'];
              } else {
                _this10.pnotify.error('Falha ao carregar materiais');

                _this10.materiais = [];
              }
            }, function (error) {
              _this10.pnotify.error('Falha ao carregar materiais');

              _this10.materiais = [];
            });
          }
        }, {
          key: "openDetails",
          value: function openDetails(pedido, template) {
            /* this.setPedido(pedido); */
            this.getMateriais(pedido);
            this.openModal(template);
          }
        }, {
          key: "getRoutesRegister",
          value: function getRoutesRegister() {
            var _this11 = this;

            this.atividaesAdminService.getAtividades({
              'rota': '/logistica/cadastros/@id'
            }).subscribe(function (response) {
              _this11.routeTrucker = "/logistica/cadastros/".concat(response.body['atividades'][0]['idSubmodulo'], "/motoristas/novo");
              _this11.routeTruck = "/logistica/cadastros/".concat(response.body['atividades'][0]['idSubmodulo'], "/veiculos/novo");
            });
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.end = itemsPerPage;
            return this.itemsPerPage;
          }
        }, {
          key: "onAdd",
          value: function onAdd(pedido) {
            this.pedidosSelecionados = this.pedidosSelecionados.filter(function (el) {
              return !((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI) && (el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI));
            });
            this.pedidosSelecionados = [].concat(_toConsumableArray(this.pedidosSelecionados), [pedido]);
            this.pedidos = this.pedidos.filter(function (el) {
              return !((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI) && (el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI));
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(pedido) {
            this.pedidosSelecionados = this.pedidosSelecionados.filter(function (el) {
              return !((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI) && (el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI));
            });
            this.pedidos = this.pedidos.filter(function (el) {
              return !((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI) && (el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI));
            });
            this.pedidos = [].concat(_toConsumableArray(this.pedidos), [pedido]);
          }
        }, {
          key: "isValidForm",
          value: function isValidForm(form) {
            return form.valid;
          }
        }]);

        return LogisticaEntregaRetirasCadastroComponent;
      }();

      LogisticaEntregaRetirasCadastroComponent.ctorParameters = function () {
        return [{
          type: _services_retiras_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaRetirasService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_17__["AdminAtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"]
        }, {
          type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaVeiculoService"]
        }, {
          type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__["EstadosService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }];
      };

      LogisticaEntregaRetirasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-retiras-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_retiras_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaRetirasService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_17__["AdminAtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"], _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaVeiculoService"], src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__["EstadosService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]])], LogisticaEntregaRetirasCadastroComponent);
      /***/
    },

    /***/
    "3ocw":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/services/veiculo.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: LogisticaVeiculoService */

    /***/
    function ocw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculoService", function () {
        return LogisticaVeiculoService;
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

      var LogisticaVeiculoService = /*#__PURE__*/function () {
        function LogisticaVeiculoService(http) {
          _classCallCheck(this, LogisticaVeiculoService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaVeiculoService, [{
          key: "getVeiculos",
          value: function getVeiculos(params) {
            return this.http.get("".concat(this.API, "/logistica/veiculos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postVeiculo",
          value: function postVeiculo(params) {
            return this.http.post("".concat(this.API, "/logistica/veiculo"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaVeiculoService;
      }();

      LogisticaVeiculoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaVeiculoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaVeiculoService);
      /***/
    },

    /***/
    "BEC7":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/lista/lista.component.ts ***!
      \****************************************************************************/

    /*! exports provided: LogisticaEntregaRetirasListaComponent */

    /***/
    function BEC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasListaComponent", function () {
        return LogisticaEntregaRetirasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "f3SA");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Lnhk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _services_retiras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/retiras.service */
      "WL+P");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../cadastros/veiculos/services/veiculo.service */
      "3ocw");
      /* harmony import */


      var _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../cadastros/motoristas/services/motorista.service */
      "z/iS");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6"); //angular
      //ngx
      //services
      //masks


      var LogisticaEntregaRetirasListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntregaRetirasListaComponent(service, formBuilder, localeService, routerService, dateService, atividadesService, activatedRoute, route, pnotify, motoristasService, veiculosService, modalService, xlsxService) {
          _classCallCheck(this, LogisticaEntregaRetirasListaComponent);

          this.service = service;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.atividadesService = atividadesService;
          this.activatedRoute = activatedRoute;
          this.route = route;
          this.pnotify = pnotify;
          this.motoristasService = motoristasService;
          this.veiculosService = veiculosService;
          this.modalService = modalService;
          this.xlsxService = xlsxService;
          this.appTitle = 'Retiras';
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_15__["MASKS"];
          this.loading = true;
          this.loadingNavBar = false;
          this.romaneios = new Array();
          this.pedidos = new Array();
          this.pedidosLoading = false;
          this.filiais = [];
          this.loadingMotoristas = true;
          this.loadingVeiculos = true;
          this.tableConfig = {
            subtitleBorder: true
          };
          /* Pagination */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.totalItems = 0;
          this.begin = 0;
          this.end = this.itemsPerPage;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = formBuilder.group({
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            CD_FILI: [null],
            IN_STAT: ["T"],
            ID_LOGI_ROMA: [null],
            ID_LOGI_MOTO: [null],
            ID_LOGI_VEIC: [null],
            CD_PEDI: [null],
            TIME: [new Date().getTime()]
          });
        }

        _createClass(LogisticaEntregaRetirasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.onActivatedRoute();
            this.setBreadCrumb();
            this.getMotoristas({
              'IN_PAGI': '0'
            });
            this.getVeiculos({
              'IN_PAGI': '0'
            });
            this.getFiliais();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this12 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this12.routerService.getBase64UrlParams(response);

              _this12.form.patchValue(_response);

              _this12.getRomaneios(_this12.getParams());
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this13 = this;

            this.service.getFiliais().subscribe(function (response) {
              _this13.filiais = response;
              console.log(_this13.filiais);
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _a;

            var submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: "/logistica/entrega/".concat(submoduloId)
            }, {
              descricao: 'Retiras'
            }];
          }
        }, {
          key: "getRomaneios",
          value: function getRomaneios(params) {
            var _this14 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.service.getRomaneios(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this14.loading = false;
              _this14.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this14.romaneios = response.body['data'];
                _this14.totalItems = response.body['total'];
                _this14.begin = 0;
                _this14.end = _this14.itemsPerPage;
              } else if (response.status === 204) {
                _this14.pnotify.notice('Não houve resultados para sua consulta');

                _this14.romaneios = [];
              } else {
                _this14.pnotify.error();

                _this14.romaneios = [];
              }
            }, function (error) {
              _this14.pnotify.error();

              _this14.romaneios = [];
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(romaneio) {
            var _this15 = this;

            if (romaneio["pedidos"]) {
              this.pedidos = romaneio["pedidos"];
              return;
            }

            this.pedidosLoading = true;
            this.service.getPedidos(romaneio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this15.pedidosLoading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this15.pedidos = response.body['data'];
                romaneio["pedidos"] = _this15.pedidos;
              } else if (response.status === 204) {
                _this15.pnotify.notice('Nenhum pedido disponível');

                _this15.pedidos = [];
              } else {
                _this15.pnotify.error('Falha ao carregar pedidos');

                _this15.pedidos = [];
              }
            }, function (error) {
              _this15.pnotify.error('Falha ao carregar pedidos');

              _this15.pedidos = [];
            });
          }
        }, {
          key: "getRelatorio",
          value: function getRelatorio(params) {
            var _this16 = this;

            this.loadingNavBar = true;
            this.service.getRelatorio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this16.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.xlsxService["export"]({
                  "data": response.body['data']
                });
              } else if (response.status === 204) {
                _this16.pnotify.notice('Nenhuma informação localizada.');
              } else {
                _this16.pnotify.error('Falha ao carregar dados do relatório.');
              }
            }, function (error) {
              _this16.pnotify.error('Falha ao carregar dados do relatório.');
            });
          }
        }, {
          key: "onExport",
          value: function onExport() {
            this.getRelatorio(this.getParams());
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
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "openRegister",
          value: function openRegister(params) {
            this.route.navigate(["../cadastro"], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify({
                  ID_LOGI_ROMA: params === null || params === void 0 ? void 0 : params.ID_LOGI_ROMA
                }))
              }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // Validação de formulário

        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.get("DT_INIC").setValue(new Date());
            this.form.get("DT_FINA").setValue(new Date());
            this.route.navigate([]);
          }
        }, {
          key: "getMotoristas",
          value: function getMotoristas(params) {
            var _this17 = this;

            this.motoristasService.getMotoristas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this17.loadingMotoristas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this17.motoristas = response.body['data'];
              }
            }, function (error) {
              _this17.pnotify.error('Erro ao carregar motoristas');
            });
          }
        }, {
          key: "getVeiculos",
          value: function getVeiculos(params) {
            var _this18 = this;

            this.veiculosService.getVeiculos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this18.loadingVeiculos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this18.veiculos = response.body['data'];
              }
            }, function (error) {
              _this18.pnotify.error('Erro ao carregar veículos');
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel(romaneio) {
            var _this19 = this;

            this.loadingNavBar = true;

            var _romaneio = JSON.parse(JSON.stringify(romaneio));

            _romaneio.IN_STAT = _romaneio.IN_STAT == '0' ? '1' : '0';
            this.service.postRomaneio(_romaneio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this19.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this19.pnotify.success();

                romaneio.IN_STAT = _romaneio.IN_STAT;
                romaneio.DS_OBSE = undefined;
              } else {
                _this19.pnotify.error();
              }
            }, function (error) {
              try {
                _this19.pnotify.error(error.error.message);
              } catch (error) {
                _this19.pnotify.error();
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              ignoreBackdropClick: false
            });
          }
        }, {
          key: "showModalReasonCancellation",
          value: function showModalReasonCancellation(romaneio, template) {
            this.romaneio = romaneio;
            romaneio.IN_STAT == '1' ? this.openModal(template) : this.onCancel(romaneio);
          }
        }, {
          key: "setRomaneio",
          value: function setRomaneio(romaneio) {
            this.romaneio = romaneio;
          }
        }, {
          key: "openDetails",
          value: function openDetails(romaneio) {
            this.setRomaneio(romaneio);
            this.getPedidos(romaneio);
            /* this.openModal(template); */
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.end = itemsPerPage;
            return this.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            /* this.form.get('PAGINA').setValue(event.page);
            this.onSearch(); */
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "setTipoEmpresa",
          value: function setTipoEmpresa(empresa) {
            /* this.form.get('CD_EMPR').setValue(empresa['empresa']); */
            this.form.get('TP_EMPR').setValue(empresa['tipoEmpresa']);
            this.onFilter();
          }
        }]);

        return LogisticaEntregaRetirasListaComponent;
      }();

      LogisticaEntregaRetirasListaComponent.ctorParameters = function () {
        return [{
          type: _services_retiras_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRetirasService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"]
        }, {
          type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaVeiculoService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"]
        }];
      };

      LogisticaEntregaRetirasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_retiras_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRetirasService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"], _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaVeiculoService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"]])], LogisticaEntregaRetirasListaComponent);
      /***/
    },

    /***/
    "C+Rl":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/cadastro/cadastro.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function CRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".green {\n  color: green;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-grab {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n\n.input-sequence {\n  font-size: 1.25rem;\n  width: 4ch;\n  border: none;\n  padding: 0.1em;\n  border-bottom: 1px solid transparent;\n  background-color: transparent;\n}\n\n.input-sequence:focus {\n  outline: none;\n  border-bottom: 1px solid lightgrey;\n}\n\n/* a{\n  text-decoration: none;\n  color: #000000;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yZXRpcmFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFBQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTs7O0dBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL3JldGlyYXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW57XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmN1cnNvci1wb2ludGVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXJzb3ItZ3JhYntcbiAgY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1zZXF1ZW5jZXtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB3aWR0aDogNGNoOyBcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmlucHV0LXNlcXVlbmNlOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG4vKiBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufSAqLyJdfQ== */";
      /***/
    },

    /***/
    "KGU2":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/retiras/cadastro/cadastro.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KGU2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    (click)=\"onReset()\"\n    >\n    Limpiar\n  </button>\n  <button \n  [disabled]=\"form.status == 'INVALID'\"\n  (click)=\"onSearch()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"dtInicial\">Inicio</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DT_INIC\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"dtFinal\">Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DT_FINA\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"filial\">Filial</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"filiais\"\n            [virtualScroll]=\"true\"\n            bindLabel=\"NM_FILI\"\n            bindValue=\"CD_FILI\"\n            formControlName=\"CD_FILI\"\n            placeholder=\"SELECCIONE...\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"pedido\">Pedido</label>\n          <input\n            class=\"form-control\"\n            id=\"pedido\"\n            type=\"text\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"CD_PEDI\"\n            (keyup.enter)=\"onSearch()\"\n          />\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"notaFiscal\">Nota Fiscal</label>\n          <input\n            class=\"form-control\"\n            id=\"notaFiscal\"\n            type=\"text\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"NOTA_FISC\"\n            (keyup.enter)=\"onSearch()\"\n          />\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"uf\">UF</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"estados\"\n            [virtualScroll]=\"true\"\n            labelForId=\"uf\"\n            bindLabel=\"sigla\"\n            bindValue=\"sigla\"\n            id=\"sigla\"\n            formControlName=\"DS_ESTA\"\n            placeholder=\"SELECCIONE...\"\n            (keyup.enter)=\"onSearch()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"cep\">CEP</label>\n          <input\n            class=\"form-control\"\n            id=\"cep\"\n            type=\"text\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"CD_CEP\"\n            (keyup.enter)=\"onSearch()\"\n            max=\"9\"\n          />\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"cidade\">Cidade</label>\n          <input\n            class=\"form-control\"\n            id=\"cidade\"\n            type=\"text\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DS_CIDA\"\n            (keyup.enter)=\"onSearch()\"\n          />\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"cdCliente\">Cód. cliente</label>\n          <input\n            class=\"form-control\"\n            id=\"cdCliente\"\n            type=\"text\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"CD_CLIE\"\n            (keyup.enter)=\"onSearch()\"\n          />\n        </div>\n        <div class=\"form-group col-6\">\n          <label for=\"nomeCliente\">Nome Cliente</label>\n          <input\n            class=\"form-control\"\n            id=\"nomeCliente\"\n            type=\"text\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"NM_CLIE\"\n            (keyup.enter)=\"onSearch()\"\n          />\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"registros\">Registros</label>\n          <select\n            name=\"registros\"\n            id=\"registros\"\n            class=\"form-control\"\n            (change)=\"setItensPerPage($event.target.value)\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\" selected>100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"d-flex\">\n    <div class=\"col-7 pl-0\" *ngIf=\"pedidos.length !== 0\">\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr>\n            <!-- <th scope=\"col\" style=\"width: 70px;\"></th> -->\n            <th scope=\"col\" class=\"text-center\">Pedido</th>\n            <th scope=\"col\" class=\"text-center\">Cliente</th>\n            <th scope=\"col\"></th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of pedidos | slice : begin : end; let index = index\">\n            <td class=\"text-center\">\n              <span>{{ item.CD_PEDI }}</span>\n              <span *ngIf=\"item?.CD_PEDI_ORIG\"> / OV:&nbsp;{{ item.CD_PEDI_ORIG }}</span></td>\n            <td class=\"text-center\">{{ item.NM_CLIE | uppercase}}</td>\n            <td>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Detalhes\"\n                container=\"body\"\n                (click)=\"openDetails(item, pedidoDetalhes)\"\n                >\n                <i class=\"fas fa-search\"></i>\n              </button>\n            </td>\n            <td>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Adicionar\"\n                container=\"body\"\n                (click)=\"onAdd(item)\"\n                >\n                <i class=\"fas fa-long-arrow-alt-right\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div>\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"w-100 d-flex align-items-center justify-content-center\" *ngIf=\"pedidos.length === 0\">\n      <empty-result message=\"Nenhum pedido disponível\"></empty-result>\n    </div>\n    <div class=\"col-5 pr-0 border-left\" >\n      <div>\n        <div class=\"d-flex justify-content-between pt-1\">\n          <h6>{{ formTransporte.get('ID_LOGI_ROMA').value }}</h6>\n          <div class=\"d-flex\">\n            <button\n              class=\"btn\"\n              [ngClass]=\"isValidForm(formTransporte) ? 'btn-outline-success' : 'btn-outline-danger'\"\n              [disabled]=\"!isValidForm(formTransporte)\"\n              (click)=\"postRomaneio()\"\n            >\n              <span *ngIf=\"loadingSalvarRomaneio\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n              <span *ngIf=\"!loadingSalvarRomaneio\">Salvar</span>\n            </button>\n          </div>\n        </div>\n        <form autocomplete=\"off\" class=\"mt-2\" [formGroup]=\"formTransporte\">\n            <div class=\"form-group\">\n              <label for=\"filial\">Filial</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"filiais\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                bindLabel=\"NM_FILI\"\n                bindValue=\"CD_FILI\"\n                formControlName=\"CD_FILI\"\n                placeholder=\"SELECCIONE...\"\n                [ngClass]=\"'is-required'\" \n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"d-flex justify-content-between align-items-end w-100\">\n                <label for=\"motorista\">Motorista</label>\n                <button\n                  class=\"btn border-0\"\n                  [disabled]=\"!routeTrucker\">\n                <a [routerLink]=\"[routeTrucker]\" target=\"_blank\">\n                  Novo motorista\n                </a>\n                </button>\n              </div>\n              <div class=\"d-flex\">\n                <ng-select\n                  [searchable]=\"true\"\n                  [items]=\"motoristas\"\n                  [virtualScroll]=\"true\"\n                  [loading]=\"loadingMotoristas\"\n                  class=\"col px-0 is-required\"\n                  dropdownPosition=\"bottom\"\n                  labelForId=\"motorista\"\n                  bindLabel=\"NM_MOTO\"\n                  bindValue=\"ID_LOGI_MOTO\"\n                  id=\"motorista\"\n                  formControlName=\"ID_LOGI_MOTO\"\n                  placeholder=\"SELECCIONE...\"\n                  >\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                    {{item.CPF | cpf }} - {{item.NM_MOTO}}\n                  </ng-template>\n                </ng-select>\n                <button\n                  class=\"btn-icon-sm mx-3 my-auto\"\n                  tooltip=\"Atualizar\"\n                  conatiner=\"body\"\n                  (click)=\"getMotoristas({ IN_PAGI: '0', IN_STAT: '1' })\"\n                >\n                  <i class=\"fas fa-sync\"></i>\n                </button>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"d-flex justify-content-between align-items-end\">\n                <label for=\"veiculo\">Veículo</label>\n                <button\n                  class=\"btn border-0\"\n                  [disabled]=\"!routeTruck\"\n                >\n                <a [routerLink]=\"[routeTruck]\" target=\"_blank\">\n                  Novo veículo\n                </a>\n                </button>\n              </div>\n              <div class=\"d-flex\">\n                <ng-select\n                  [searchable]=\"true\"\n                  [items]=\"veiculos\"\n                  [virtualScroll]=\"true\"\n                  [loading]=\"loadingVeiculos\"\n                  class=\"col px-0 is-required\"\n                  dropdownPosition=\"bottom\"\n                  labelForId=\"veiculo\"\n                  bindLabel=\"PLAC\"\n                  bindValue=\"ID_LOGI_VEIC\"\n                  id=\"veiculo\"\n                  formControlName=\"ID_LOGI_VEIC\"\n                  placeholder=\"SELECCIONE...\"\n                  >\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                    {{item.PLAC}}\n                  </ng-template>\n                </ng-select>\n                <button\n                  class=\"btn-icon-sm mx-3 my-auto\"\n                  tooltip=\"Atualizar\"\n                  conatiner=\"body\"\n                  (click)=\"getVeiculos({ IN_PAGI: '0', IN_STAT: '1' })\"\n                >\n                  <i class=\"fas fa-sync\"></i>\n                </button>\n              </div>\n            <!-- </div> -->\n          </div>\n        </form>\n        <hr>\n        <!-- <small>PEDIDOS</small> -->\n        <div class=\"spinner-border text-primary d-block\" role=\"status\" *ngIf=\"pedidosSelecionadosLoading && pedidosSelecionados.length === 0\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <div><!-- pedidosSelecionadosLoading &&   [hidden]=\"pedidosSelecionados.length == 0\"-->\n          <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\n            <div class=\"shadow-sm border rounded p-2 d-flex\">\n              <div class=\"d-flex align-items-center text-muted mr-2 flex-column\">\n                <label style=\"font-size: 0.9em;\">Sequência</label>\n                <strong>\n                  <input\n                    type=\"number\"\n                    [ngModel]=\"item.value.NR_SQNC\"\n                    (ngModelChange)=\" item.value.NR_SQNC = $event\"\n                    class=\"input-sequence\"\n                    min=\"1\"\n                    >\n                </strong>\n              </div>\n              <div class=\"col p-0 pl-1\">\n                <div class=\"mb-1\">\n                  <span class=\"d-block text-uppercase\">{{ item.value.NM_CLIE }}</span>\n                  <small class=\"d-block text-uppercase\">\n                    <span *ngIf=\"item.value.DS_LOCA_ENTR\">{{ item.value.DS_LOCA_ENTR }}</span> \n                    <span *ngIf=\"item.value.DS_BAIR\">,&nbsp;{{ item.value.DS_BAIR }}</span>\n                    <span *ngIf=\"item.value.DS_CIDA\">,&nbsp;{{ item.value.DS_CIDA }}</span>\n                    <span *ngIf=\"item.value.DS_ESTA\">- {{ item.value.DS_ESTA }}</span>\n                  </small>\n                </div>\n                <div class=\"d-flex\">\n                  <div class=\"form-group mb-0\">\n                    <label>Pedido: &nbsp;</label>\n                    <span>{{ item.value.CD_PEDI}}</span>\n                  </div>\n                  &nbsp;|&nbsp;\n                  <div class=\"form-group mb-0\">\n                    <label>Peso: &nbsp;</label>\n                    <span>{{ item.value.TT_PESO | number: '1.3-3' }}</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"d-flex align-items-center\">\n                <button class=\"btn-icon-sm text-danger\" tooltip=\"Remover\" (click)=\"onRemove(item.value)\">\n                  <i class=\"far fa-trash-alt\"></i>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <bs-sortable\n            [(ngModel)]=\"pedidosSelecionados\"\n            [itemTemplate]=\"itemTemplate\"\n            itemClass=\"sortable-item mb-2\"\n            itemActiveClass=\"sortable-item-active\"\n            wrapperClass=\"sortable-wrapper\"\n            placeholderClass=\"placeholderStyle\"\n          ></bs-sortable>\n        </div>\n        <empty-result *ngIf=\"pedidosSelecionadosLoading === false && pedidosSelecionados.length === 0\" message=\"Nenhum pedido importado\"></empty-result>\n      </div>\n    </div>\n  </div>\n  <ng-template #pedidoDetalhes>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">({{ pedido.CD_CLIE }}) &nbsp; {{ pedido.NM_CLIE }}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">NOTA FISCAL</h5>\n      <table>\n        <tbody>\n          <tr>\n            <th>Número:</th>\n            <td>&nbsp; {{ pedido.NR_NOTA_FISC }}</td>\n          </tr>\n          <tr>\n            <th>Emissão</th>\n            <td>&nbsp; {{ pedido.DT_EMIS_NOTA_FISC | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\n          </tr>\n          <tr>\n            <th>Chave de acesso:</th>\n            <td>&nbsp; {{ pedido.CD_CHAV_ACES }}</td>\n          </tr>\n          <tr>\n            <th>Pedido:</th>\n            <td>&nbsp; {{ pedido.CD_PEDI }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">LOCAL DE ENTREGA</h5>\n      <table>\n        <tbody>\n          <tr>\n            <th>Cidade:</th>\n            <td>&nbsp; {{ pedido.DS_CIDA }} - {{ pedido.DS_ESTA }}</td>\n          </tr>\n          <tr>\n            <th>Bairro:</th>\n            <td>&nbsp; {{ pedido.DS_BAIR }}</td>\n          </tr>\n          <tr>\n            <th>Endereço:</th>\n            <td>&nbsp; {{ pedido.DS_LOCA_ENTR }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">MATERIAIS</h5>\n      <custom-table *ngIf=\"materiais.length !== 0 && materiaisLoading == false\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">Código</th>\n            <th scope=\"col\" class=\"text-center\">Material</th>\n            <th scope=\"col\" class=\"text-center\">Quantidade</th>\n            <th scope=\"col\" class=\"text-center\">Valor</th>\n            <th scope=\"col\" class=\"text-center\">Observação</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let material of materiais\">\n            <td class=\"text-center\">{{ material.CD_MATE }}</td>\n            <td class=\"text-center\">{{ material.DS_MATE }}</td>\n            <td class=\"text-center\">{{ material.QT_PESO | number: '1.3-3' }}</td>\n            <td class=\"text-center\">{{ material.VL_ITEM | currency : 'BRL' : 'symbol' : '1.2-2'}}</td>\n            <td class=\"text-center\">{{ material.DS_OBSE }}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"materiaisLoading\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <empty-result class=\"d-flex align-items-center justify-content-center\" *ngIf=\"materiais.length === 0 && materiaisLoading == false\" message=\"Nenhum material disponível\"></empty-result>\n    </div>\n  </ng-template>\n</app-body>\n";
      /***/
    },

    /***/
    "Lnhk":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/lista/lista.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Lnhk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2EvcmV0aXJhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "WL+P":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/services/retiras.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaEntregaRetirasService */

    /***/
    function WLP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasService", function () {
        return LogisticaEntregaRetirasService;
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
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // angular
      // services


      var LogisticaEntregaRetirasService = /*#__PURE__*/function () {
        function LogisticaEntregaRetirasService(http) {
          _classCallCheck(this, LogisticaEntregaRetirasService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaEntregaRetirasService, [{
          key: "getPedidos",
          value: function getPedidos(params) {
            return this.http.get("".concat(this.API, "/logistica/entrega/formacao-carga/pedidos"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.http.get("".concat(this.API, "/logistica/entrega/formacao-carga/pedido/").concat(params.CD_PEDI, "/materiais"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getRomaneios",
          value: function getRomaneios(params) {
            return this.http.get("".concat(this.API, "/logistica/entrega/formacao-carga/romaneios"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postRomaneio",
          value: function postRomaneio(params) {
            return this.http.post("".concat(this.API, "/logistica/entrega/formacao-carga/romaneio"), params, {
              observe: "response"
            });
          }
        }, {
          key: "postPedidos",
          value: function postPedidos(params) {
            return this.http.post("".concat(this.API, "/logistica/entrega/formacao-carga/romaneio/pedidos"), params, {
              observe: "response"
            });
          }
        }, {
          key: "getRelatorio",
          value: function getRelatorio(params) {
            return this.http.get("".concat(this.API, "/logistica/entrega/formacao-carga/pedidos/relatorio"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var filiais = [{
              "CD_FILI": "18",
              "NM_FILI": "Distribuição Tiete"
            }, {
              "CD_FILI": "79",
              "NM_FILI": "Distribuição Taipas"
            }, {
              "CD_FILI": "6",
              "NM_FILI": "Distribuição Osasco"
            }, {
              "CD_FILI": "77",
              "NM_FILI": "Distribuição Camanducaia"
            }, {
              "CD_FILI": "41",
              "NM_FILI": "Distribuição Valença"
            }, {
              "CD_FILI": "19",
              "NM_FILI": "Distribuição Volta Redonda"
            }, {
              "CD_FILI": "3",
              "NM_FILI": "C&D Rio das Pedras"
            }, {
              "CD_FILI": "46",
              "NM_FILI": "C&D Cajamar"
            }, {
              "CD_FILI": "72",
              "NM_FILI": "C&D Praia Grande"
            }, {
              "CD_FILI": "9661",
              "NM_FILI": "DBA Aço Especial"
            }, {
              "CD_FILI": "9645",
              "NM_FILI": "DBA Piracicaba"
            }, {
              "CD_FILI": "9636",
              "NM_FILI": "DBA Praia Grande"
            }, {
              "CD_FILI": "9639",
              "NM_FILI": "DBA Jacarei"
            }];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(filiais);
          }
        }]);

        return LogisticaEntregaRetirasService;
      }();

      LogisticaEntregaRetirasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEntregaRetirasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEntregaRetirasService);
      /***/
    },

    /***/
    "f3SA":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/retiras/lista/lista.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f3SA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    [disabled]=\"form.status == 'INVALID'\"\n    (click)=\"onExport()\"  \n  >\n    Gerar Relatório\n  </button>\n  <button (click)=\"onReset()\">\n    Limpiar\n  </button>\n  <button \n  [disabled]=\"form.status == 'INVALID'\"\n  (click)=\"onFilter()\">\n    Filtrar\n  </button>\n  <button \n  [routerLink]=\"['../novo']\" \n  >\n    Adicionar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dtInicial\">Inicio</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DT_INIC\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"dtFinal\">Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DT_FINA\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"filiais\">Filial</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"filiais\"\n            [virtualScroll]=\"true\"\n            bindLabel=\"NM_FILI\"\n            bindValue=\"CD_FILI\"\n            formControlName=\"CD_FILI\"\n            placeholder=\"SELECCIONE...\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"romaneio\">Romaneio</label>\n          <input \n            class=\"form-control\"\n            id=\"romaneio\"\n            type=\"text\"\n            (keyup.enter)=\"onFilter()\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"ID_LOGI_ROMA\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Pedido</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"pedido\"\n            (keyup.enter)=\"onFilter()\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"CD_PEDI\"\n          >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"motorista\">Motorista</label>\n          <ng-select\n            [searchable]=\"true\"\n            [items]=\"motoristas\"\n            [virtualScroll]=\"true\"\n            [loading]=\"loadingMotoristas\"\n            labelForId=\"motorista\"\n            editableSearchTerm=\"true\"\n            bindLabel=\"NM_MOTO\"\n            bindValue=\"ID_LOGI_MOTO\"\n            id=\"motorista\"\n            formControlName=\"ID_LOGI_MOTO\"\n            placeholder=\"SELECCIONE...\"\n            (change)=\"onFilter()\"\n          >\n          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n            {{item.CPF | cpf }} - {{item.NM_MOTO}}\n          </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"veiculo\">Placa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [items]=\"veiculos\"\n            [virtualScroll]=\"true\"\n            [loading]=\"loadingVeiculos\"\n            labelForId=\"veiculo\"\n            editableSearchTerm=\"true\"\n            bindLabel=\"PLAC\"\n            bindValue=\"ID_LOGI_VEIC\"\n            id=\"veiculo\"\n            formControlName=\"ID_LOGI_VEIC\"\n            placeholder=\"SELECCIONE...\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"status\">Status</label>\n          <select\n            name=\"status\"\n            id=\"status\"\n            class=\"form-control\"\n            formControlName=\"IN_STAT\"\n            (change)=\"onFilter()\"\n          >\n            <option value=\"T\" selected>TODOS</option>\n            <option value=\"1\">Ativo</option>\n            <option value=\"0\">Inativo</option>\n          </select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"registros\">Registros</label>\n          <select\n            name=\"registros\"\n            id=\"registros\"\n            class=\"form-control\"\n            (change)=\"setItensPerPage($event.target.value)\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\" selected>100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"d-flex w-100\">\n    <div class=\"w-100\" *ngIf=\"romaneios.length !== 0\">\n      <custom-table class=\"w-100\" [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">Filial</th>\n            <th scope=\"col\" class=\"text-center\">Romaneio</th>\n            <th scope=\"col\" class=\"text-center\">Veículo</th>\n            <th scope=\"col\" class=\"text-center\">Motorista</th>\n            <th scope=\"col\" class=\"text-center\">Data de criação</th>\n            <th></th>\n            <th></th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of romaneios | slice : begin : end\">\n            <td class=\"text-center text-truncate\" [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}</td>\n            <td class=\"text-center\" >{{ item.ID_LOGI_ROMA | number : '6.0-0'}}</td>\n            <td class=\"text-center\" >{{ item.PLAC}}</td>\n            <td class=\"text-center\" >{{ item.NM_MOTO}}</td>\n            <td class=\"text-center\" >{{ item.DT_INCL | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\n            <td class=\"align-middle\">\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Editar\"\n                placement=\"left\"\n                (click)=\"openRegister(item)\"\n              >\n                <i class=\"fas fa-edit\"></i>\n              </button>\n            </td>\n            <td class=\"align-middle\">\n              <button\n                class=\"btn-icon-sm\"\n                [tooltip]=\"item.IN_STAT == 1 ? 'Cancelar' : 'Ativar'\"\n                placement=\"left\"\n                (click)=\"showModalReasonCancellation(item, motivoCancelamento)\"\n                >\n                <i *ngIf=\"item.IN_STAT == 0\" class=\"fas fa-ban text-danger\"></i>\n                <i *ngIf=\"item.IN_STAT == 1\" class=\"fas fa-check text-success\"></i>\n              </button>\n            </td>\n            <td class=\"align-middle\">\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Detalhes\"\n                placement=\"left\"\n                (click)=\"romaneioDetalhes.show(); openDetails(item)\"\n              >\n                <i class=\"fas fa-search\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div>\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <empty-result class=\"d-flex align-items-center justify-content-center w-100\" *ngIf=\"romaneios.length === 0\" message=\"Nenhum romaneio disponível\" style=\"height: 50vh;\"></empty-result>\n  </div>\n  <div class=\"modal\" bsModal #romaneioDetalhes=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n    <div class=\"modal-dialog modal-xxl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">{{ romaneio?.ID_LOGI_ROMA | number: '6.0-0' }}</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"romaneioDetalhes.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <table>\n            <tbody>\n              <tr>\n                <th>Número:</th>\n                <td>&nbsp; {{ romaneio?.ID_LOGI_ROMA | number:'6.0-0' }}</td>\n              </tr>\n              <tr>\n                <th>Emissão</th>\n                <td>&nbsp; {{ romaneio?.DT_INCL | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\n              </tr>\n              <tr>\n                <th>Placa do Veículo:</th>\n                <td>&nbsp; {{ romaneio?.PLAC }}</td>\n              </tr>\n              <tr>\n                <th>Nome do Motorista:</th>\n                <td>&nbsp; {{ romaneio?.NM_MOTO }}</td>\n              </tr>\n              <tr>\n                <th>CPF do Motorista:</th>\n                <td>&nbsp; {{ romaneio?.CPF | cpf}}</td>\n              </tr>\n              <tr>\n                <th>Status do Romaneio:</th>\n                <td>&nbsp; \n                  <span *ngIf=\"romaneio?.IN_STAT == 1\">ATIVO</span>\n                  <span *ngIf=\"romaneio?.IN_STAT == 0\">INATIVO</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <hr>\n          <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">PEDIDOS</h5>\n          <custom-table *ngIf=\"pedidos.length !== 0 && pedidosLoading == false\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" class=\"text-center\">Pedido</th>\n                <th scope=\"col\" class=\"text-center\">Nota Fiscal</th>\n                <th scope=\"col\" class=\"text-left\">Cliente</th>\n                <th scope=\"col\">Cidade</th>\n                <th scope=\"col\">Bairro</th>\n                <th scope=\"col\">Local de Entrega</th>\n                <th scope=\"col\" class=\"text-center\">Quantidade</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let pedido of pedidos\">\n                <td class=\"text-center\">{{ pedido?.CD_PEDI }}</td>\n                <td class=\"text-center\">{{ pedido?.NOTA_FISC }}</td>\n                <td>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_CLIE }}</td>\n                <td>{{ pedido?.DS_CIDA }}-{{ pedido?.DS_ESTA }}</td>\n                <td>{{ pedido?.DS_BAIR }}</td>\n                <td>{{ pedido?.DS_LOCA_ENTR }}</td>\n                <td class=\"text-center\">{{ pedido?.TT_PESO | number: '1.3-3'}}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"pedidosLoading\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n          <empty-result class=\"d-flex align-items-center justify-content-center\" *ngIf=\"pedidos.length === 0 && pedidosLoading == false\" message=\"Nenhum pedido disponível\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #motivoCancelamento>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Escribelo o motivo para o cancelamento do romaneio {{ romaneio?.ID_LOGI_ROMA | number: '6.0-0' }}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <textarea\n        name=\"motivoCancelamento\"\n        id=\"motivoCancelamento\"\n        cols=\"30\"\n        rows=\"10\"\n        class=\"form-control\"\n        [(ngModel)]=\"romaneio.DS_OBSE\"\n      >\n      </textarea>\n      <div\n        class=\"d-flex justify-content-end mt-3\"\n      >\n        <button\n          type=\"button\"\n          class=\"btn btn-danger mr-2\"\n          (click)=\"modalRef.hide()\"  \n        >Cancelar</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-outline-success\"\n          [disabled]=\"!romaneio?.DS_OBSE\"\n          (click)=\"modalRef.hide(); onCancel(romaneio)\"\n        >Confirmar</button>\n      </div>\n    </div>\n  </ng-template>\n</app-body>";
      /***/
    },

    /***/
    "pFht":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/retiras.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LogisticaEntregaRetirasModule */

    /***/
    function pFht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasModule", function () {
        return LogisticaEntregaRetirasModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var _retiras_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./retiras-routing.module */
      "qSTB");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./lista/lista.component */
      "BEC7");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "0yQ1");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      //masks

      var LogisticaEntregaRetirasModule = function LogisticaEntregaRetirasModule() {
        _classCallCheck(this, LogisticaEntregaRetirasModule);
      };

      LogisticaEntregaRetirasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEntregaRetirasListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__["LogisticaEntregaRetirasCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _retiras_routing_module__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntregaRetirasRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__["CurrencyMaskModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["SortableModule"].forRoot()]
      })], LogisticaEntregaRetirasModule);
      /***/
    },

    /***/
    "qSTB":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/retiras/retiras-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaEntregaRetirasRoutingModule */

    /***/
    function qSTB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasRoutingModule", function () {
        return LogisticaEntregaRetirasRoutingModule;
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


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "0yQ1");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "BEC7");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaRetirasListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaRetirasCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaRetirasCadastroComponent"]
      }];

      var LogisticaEntregaRetirasRoutingModule = function LogisticaEntregaRetirasRoutingModule() {
        _classCallCheck(this, LogisticaEntregaRetirasRoutingModule);
      };

      LogisticaEntregaRetirasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaEntregaRetirasRoutingModule);
      /***/
    },

    /***/
    "z/iS":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/motoristas/services/motorista.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaMotoristaService */

    /***/
    function zIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaMotoristaService", function () {
        return LogisticaMotoristaService;
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

      var LogisticaMotoristaService = /*#__PURE__*/function () {
        function LogisticaMotoristaService(http) {
          _classCallCheck(this, LogisticaMotoristaService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaMotoristaService, [{
          key: "getMotoristas",
          value: function getMotoristas(params) {
            return this.http.get("".concat(this.API, "/logistica/motoristas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMotorista",
          value: function postMotorista(params) {
            return this.http.post("".concat(this.API, "/logistica/motorista"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaMotoristaService;
      }();

      LogisticaMotoristaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaMotoristaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaMotoristaService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=retiras-retiras-module-es5.js.map