(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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


      __webpack_exports__["default"] = ".green {\n  color: green;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-grab {\n  cursor: grab !important;\n}\n\n.input-sequence {\n  font-size: 1.25rem;\n  width: 4ch;\n  border: none;\n  padding: 0.1em;\n  border-bottom: 1px solid transparent;\n  background-color: transparent;\n}\n\n.input-sequence:focus {\n  outline: none;\n  border-bottom: 1px solid lightgrey;\n}\n\n/* a{\n  text-decoration: none;\n  color: #000000;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yZXRpcmFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7OztHQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yZXRpcmFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVue1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmN1cnNvci1wb2ludGVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN1cnNvci1ncmFie1xyXG4gIGN1cnNvcjogZ3JhYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtc2VxdWVuY2V7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHdpZHRoOiA0Y2g7IFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjFlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1zZXF1ZW5jZTpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi8qIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59ICovIl19 */";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"onReset()\"\r\n    >\r\n    Limpiar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtInicial\">Inicio</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"filial\">Filial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            bindLabel=\"NM_FILI\"\r\n            bindValue=\"CD_FILI\"\r\n            formControlName=\"CD_FILI\"\r\n            placeholder=\"SELECCIONE...\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"pedido\">Pedido</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"pedido\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_PEDI\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"notaFiscal\">Nota Fiscal</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"notaFiscal\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"NOTA_FISC\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"uf\">UF</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"estados\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"uf\"\r\n            bindLabel=\"sigla\"\r\n            bindValue=\"sigla\"\r\n            id=\"sigla\"\r\n            formControlName=\"DS_ESTA\"\r\n            placeholder=\"SELECCIONE...\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"cep\">CEP</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cep\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_CEP\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            max=\"9\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"cidade\">Cidade</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cidade\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DS_CIDA\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cdCliente\">Cód. cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cdCliente\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_CLIE\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-6\">\r\n          <label for=\"nomeCliente\">Nome Cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"nomeCliente\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"NM_CLIE\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            name=\"registros\"\r\n            id=\"registros\"\r\n            class=\"form-control\"\r\n            (change)=\"setItensPerPage($event.target.value)\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\" selected>100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"d-flex\">\r\n    <div class=\"col-7 pl-0\" *ngIf=\"pedidos.length !== 0\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <!-- <th scope=\"col\" style=\"width: 70px;\"></th> -->\r\n            <th scope=\"col\" class=\"text-center\">Pedido</th>\r\n            <th scope=\"col\" class=\"text-center\">Cliente</th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of pedidos | slice : begin : end; let index = index\">\r\n            <td class=\"text-center\">\r\n              <span>{{ item.CD_PEDI }}</span>\r\n              <span *ngIf=\"item?.CD_PEDI_ORIG\"> / OV:&nbsp;{{ item.CD_PEDI_ORIG }}</span></td>\r\n            <td class=\"text-center\">{{ item.NM_CLIE | uppercase}}</td>\r\n            <td>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Detalhes\"\r\n                container=\"body\"\r\n                (click)=\"openDetails(item, pedidoDetalhes)\"\r\n                >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n            <td>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Adicionar\"\r\n                container=\"body\"\r\n                (click)=\"onAdd(item)\"\r\n                >\r\n                <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex align-items-center justify-content-center\" *ngIf=\"pedidos.length === 0\">\r\n      <empty-result message=\"Nenhum pedido disponível\"></empty-result>\r\n    </div>\r\n    <div class=\"col-5 pr-0 border-left\" >\r\n      <div>\r\n        <div class=\"d-flex justify-content-between pt-1\">\r\n          <h6>{{ formTransporte.get('ID_LOGI_ROMA').value }}</h6>\r\n          <div class=\"d-flex\">\r\n            <button\r\n              class=\"btn\"\r\n              [ngClass]=\"isValidForm(formTransporte) ? 'btn-outline-success' : 'btn-outline-danger'\"\r\n              [disabled]=\"!isValidForm(formTransporte)\"\r\n              (click)=\"postRomaneio()\"\r\n            >\r\n              <span *ngIf=\"loadingSalvarRomaneio\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              <span *ngIf=\"!loadingSalvarRomaneio\">Salvar</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <form autocomplete=\"off\" class=\"mt-2\" [formGroup]=\"formTransporte\">\r\n            <div class=\"form-group\">\r\n              <label for=\"filial\">Filial</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"filiais\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                bindLabel=\"NM_FILI\"\r\n                bindValue=\"CD_FILI\"\r\n                formControlName=\"CD_FILI\"\r\n                placeholder=\"SELECCIONE...\"\r\n                [ngClass]=\"'is-required'\" \r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"d-flex justify-content-between align-items-end w-100\">\r\n                <label for=\"motorista\">Motorista</label>\r\n                <button\r\n                  class=\"btn border-0\"\r\n                  [disabled]=\"!routeTrucker\">\r\n                <a [routerLink]=\"[routeTrucker]\" target=\"_blank\">\r\n                  Novo motorista\r\n                </a>\r\n                </button>\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [items]=\"motoristas\"\r\n                  [virtualScroll]=\"true\"\r\n                  [loading]=\"loadingMotoristas\"\r\n                  class=\"col px-0 is-required\"\r\n                  dropdownPosition=\"bottom\"\r\n                  labelForId=\"motorista\"\r\n                  bindLabel=\"NM_MOTO\"\r\n                  bindValue=\"ID_LOGI_MOTO\"\r\n                  id=\"motorista\"\r\n                  formControlName=\"ID_LOGI_MOTO\"\r\n                  placeholder=\"SELECCIONE...\"\r\n                  >\r\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                    {{item.CPF | cpf }} - {{item.NM_MOTO}}\r\n                  </ng-template>\r\n                </ng-select>\r\n                <button\r\n                  class=\"btn-icon-sm mx-3 my-auto\"\r\n                  tooltip=\"Atualizar\"\r\n                  conatiner=\"body\"\r\n                  (click)=\"getMotoristas({ IN_PAGI: '0', IN_STAT: '1' })\"\r\n                >\r\n                  <i class=\"fas fa-sync\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"d-flex justify-content-between align-items-end\">\r\n                <label for=\"veiculo\">Veículo</label>\r\n                <button\r\n                  class=\"btn border-0\"\r\n                  [disabled]=\"!routeTruck\"\r\n                >\r\n                <a [routerLink]=\"[routeTruck]\" target=\"_blank\">\r\n                  Novo veículo\r\n                </a>\r\n                </button>\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [items]=\"veiculos\"\r\n                  [virtualScroll]=\"true\"\r\n                  [loading]=\"loadingVeiculos\"\r\n                  class=\"col px-0 is-required\"\r\n                  dropdownPosition=\"bottom\"\r\n                  labelForId=\"veiculo\"\r\n                  bindLabel=\"PLAC\"\r\n                  bindValue=\"ID_LOGI_VEIC\"\r\n                  id=\"veiculo\"\r\n                  formControlName=\"ID_LOGI_VEIC\"\r\n                  placeholder=\"SELECCIONE...\"\r\n                  >\r\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                    {{item.PLAC}}\r\n                  </ng-template>\r\n                </ng-select>\r\n                <button\r\n                  class=\"btn-icon-sm mx-3 my-auto\"\r\n                  tooltip=\"Atualizar\"\r\n                  conatiner=\"body\"\r\n                  (click)=\"getVeiculos({ IN_PAGI: '0', IN_STAT: '1' })\"\r\n                >\r\n                  <i class=\"fas fa-sync\"></i>\r\n                </button>\r\n              </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        </form>\r\n        <hr>\r\n        <!-- <small>PEDIDOS</small> -->\r\n        <div class=\"spinner-border text-primary d-block\" role=\"status\" *ngIf=\"pedidosSelecionadosLoading && pedidosSelecionados.length === 0\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div><!-- pedidosSelecionadosLoading &&   [hidden]=\"pedidosSelecionados.length == 0\"-->\r\n          <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\r\n            <div class=\"shadow-sm border rounded p-2 d-flex\">\r\n              <div class=\"d-flex align-items-center text-muted mr-2 flex-column\">\r\n                <label style=\"font-size: 0.9em;\">Sequência</label>\r\n                <strong>\r\n                  <input\r\n                    type=\"number\"\r\n                    [ngModel]=\"item.value.NR_SQNC\"\r\n                    (ngModelChange)=\" item.value.NR_SQNC = $event\"\r\n                    class=\"input-sequence\"\r\n                    min=\"1\"\r\n                    >\r\n                </strong>\r\n              </div>\r\n              <div class=\"col p-0 pl-1\">\r\n                <div class=\"mb-1\">\r\n                  <span class=\"d-block text-uppercase\">{{ item.value.NM_CLIE }}</span>\r\n                  <small class=\"d-block text-uppercase\">\r\n                    <span *ngIf=\"item.value.DS_LOCA_ENTR\">{{ item.value.DS_LOCA_ENTR }}</span> \r\n                    <span *ngIf=\"item.value.DS_BAIR\">,&nbsp;{{ item.value.DS_BAIR }}</span>\r\n                    <span *ngIf=\"item.value.DS_CIDA\">,&nbsp;{{ item.value.DS_CIDA }}</span>\r\n                    <span *ngIf=\"item.value.DS_ESTA\">- {{ item.value.DS_ESTA }}</span>\r\n                  </small>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <div class=\"form-group mb-0\">\r\n                    <label>Pedido: &nbsp;</label>\r\n                    <span>{{ item.value.CD_PEDI}}</span>\r\n                  </div>\r\n                  &nbsp;|&nbsp;\r\n                  <div class=\"form-group mb-0\">\r\n                    <label>Peso: &nbsp;</label>\r\n                    <span>{{ item.value.TT_PESO | number: '1.3-3' }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex align-items-center\">\r\n                <button class=\"btn-icon-sm text-danger\" tooltip=\"Remover\" (click)=\"onRemove(item.value)\">\r\n                  <i class=\"far fa-trash-alt\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <bs-sortable\r\n            [(ngModel)]=\"pedidosSelecionados\"\r\n            [itemTemplate]=\"itemTemplate\"\r\n            itemClass=\"sortable-item mb-2\"\r\n            itemActiveClass=\"sortable-item-active\"\r\n            wrapperClass=\"sortable-wrapper\"\r\n            placeholderClass=\"placeholderStyle\"\r\n          ></bs-sortable>\r\n        </div>\r\n        <empty-result *ngIf=\"pedidosSelecionadosLoading === false && pedidosSelecionados.length === 0\" message=\"Nenhum pedido importado\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #pedidoDetalhes>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">({{ pedido.CD_CLIE }}) &nbsp; {{ pedido.NM_CLIE }}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">NOTA FISCAL</h5>\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <th>Número:</th>\r\n            <td>&nbsp; {{ pedido.NR_NOTA_FISC }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Emissão</th>\r\n            <td>&nbsp; {{ pedido.DT_EMIS_NOTA_FISC | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Chave de acesso:</th>\r\n            <td>&nbsp; {{ pedido.CD_CHAV_ACES }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Pedido:</th>\r\n            <td>&nbsp; {{ pedido.CD_PEDI }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <hr>\r\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">LOCAL DE ENTREGA</h5>\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <th>Cidade:</th>\r\n            <td>&nbsp; {{ pedido.DS_CIDA }} - {{ pedido.DS_ESTA }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Bairro:</th>\r\n            <td>&nbsp; {{ pedido.DS_BAIR }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Endereço:</th>\r\n            <td>&nbsp; {{ pedido.DS_LOCA_ENTR }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <hr>\r\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">MATERIAIS</h5>\r\n      <custom-table *ngIf=\"materiais.length !== 0 && materiaisLoading == false\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Código</th>\r\n            <th scope=\"col\" class=\"text-center\">Material</th>\r\n            <th scope=\"col\" class=\"text-center\">Quantidade</th>\r\n            <th scope=\"col\" class=\"text-center\">Valor</th>\r\n            <th scope=\"col\" class=\"text-center\">Observação</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of materiais\">\r\n            <td class=\"text-center\">{{ material.CD_MATE }}</td>\r\n            <td class=\"text-center\">{{ material.DS_MATE }}</td>\r\n            <td class=\"text-center\">{{ material.QT_PESO | number: '1.3-3' }}</td>\r\n            <td class=\"text-center\">{{ material.VL_ITEM | currency : 'BRL' : 'symbol' : '1.2-2'}}</td>\r\n            <td class=\"text-center\">{{ material.DS_OBSE }}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"materiaisLoading\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <empty-result class=\"d-flex align-items-center justify-content-center\" *ngIf=\"materiais.length === 0 && materiaisLoading == false\" message=\"Nenhum material disponível\"></empty-result>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    (click)=\"onExport()\"  \r\n  >\r\n    Gerar Relatório\r\n  </button>\r\n  <button (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button \r\n  [routerLink]=\"['../novo']\" \r\n  >\r\n    Adicionar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtInicial\">Inicio</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"filiais\">Filial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            bindLabel=\"NM_FILI\"\r\n            bindValue=\"CD_FILI\"\r\n            formControlName=\"CD_FILI\"\r\n            placeholder=\"SELECCIONE...\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"romaneio\">Romaneio</label>\r\n          <input \r\n            class=\"form-control\"\r\n            id=\"romaneio\"\r\n            type=\"text\"\r\n            (keyup.enter)=\"onFilter()\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"ID_LOGI_ROMA\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Pedido</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"pedido\"\r\n            (keyup.enter)=\"onFilter()\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_PEDI\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"motorista\">Motorista</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [items]=\"motoristas\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingMotoristas\"\r\n            labelForId=\"motorista\"\r\n            editableSearchTerm=\"true\"\r\n            bindLabel=\"NM_MOTO\"\r\n            bindValue=\"ID_LOGI_MOTO\"\r\n            id=\"motorista\"\r\n            formControlName=\"ID_LOGI_MOTO\"\r\n            placeholder=\"SELECCIONE...\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n            {{item.CPF | cpf }} - {{item.NM_MOTO}}\r\n          </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"veiculo\">Placa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [items]=\"veiculos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingVeiculos\"\r\n            labelForId=\"veiculo\"\r\n            editableSearchTerm=\"true\"\r\n            bindLabel=\"PLAC\"\r\n            bindValue=\"ID_LOGI_VEIC\"\r\n            id=\"veiculo\"\r\n            formControlName=\"ID_LOGI_VEIC\"\r\n            placeholder=\"SELECCIONE...\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            name=\"status\"\r\n            id=\"status\"\r\n            class=\"form-control\"\r\n            formControlName=\"IN_STAT\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"T\" selected>TODOS</option>\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            name=\"registros\"\r\n            id=\"registros\"\r\n            class=\"form-control\"\r\n            (change)=\"setItensPerPage($event.target.value)\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\" selected>100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"d-flex w-100\">\r\n    <div class=\"w-100\" *ngIf=\"romaneios.length !== 0\">\r\n      <custom-table class=\"w-100\" [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Filial</th>\r\n            <th scope=\"col\" class=\"text-center\">Romaneio</th>\r\n            <th scope=\"col\" class=\"text-center\">Veículo</th>\r\n            <th scope=\"col\" class=\"text-center\">Motorista</th>\r\n            <th scope=\"col\" class=\"text-center\">Data de criação</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of romaneios | slice : begin : end\">\r\n            <td class=\"text-center text-truncate\" [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}</td>\r\n            <td class=\"text-center\" >{{ item.ID_LOGI_ROMA | number : '6.0-0'}}</td>\r\n            <td class=\"text-center\" >{{ item.PLAC}}</td>\r\n            <td class=\"text-center\" >{{ item.NM_MOTO}}</td>\r\n            <td class=\"text-center\" >{{ item.DT_INCL | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                placement=\"left\"\r\n                (click)=\"openRegister(item)\"\r\n              >\r\n                <i class=\"fas fa-edit\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                [tooltip]=\"item.IN_STAT == 1 ? 'Cancelar' : 'Ativar'\"\r\n                placement=\"left\"\r\n                (click)=\"showModalReasonCancellation(item, motivoCancelamento)\"\r\n                >\r\n                <i *ngIf=\"item.IN_STAT == 0\" class=\"fas fa-ban text-danger\"></i>\r\n                <i *ngIf=\"item.IN_STAT == 1\" class=\"fas fa-check text-success\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Detalhes\"\r\n                placement=\"left\"\r\n                (click)=\"romaneioDetalhes.show(); openDetails(item)\"\r\n              >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <empty-result class=\"d-flex align-items-center justify-content-center w-100\" *ngIf=\"romaneios.length === 0\" message=\"Nenhum romaneio disponível\" style=\"height: 50vh;\"></empty-result>\r\n  </div>\r\n  <div class=\"modal\" bsModal #romaneioDetalhes=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n    <div class=\"modal-dialog modal-xxl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">{{ romaneio?.ID_LOGI_ROMA | number: '6.0-0' }}</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"romaneioDetalhes.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table>\r\n            <tbody>\r\n              <tr>\r\n                <th>Número:</th>\r\n                <td>&nbsp; {{ romaneio?.ID_LOGI_ROMA | number:'6.0-0' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Emissão</th>\r\n                <td>&nbsp; {{ romaneio?.DT_INCL | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Placa do Veículo:</th>\r\n                <td>&nbsp; {{ romaneio?.PLAC }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Nome do Motorista:</th>\r\n                <td>&nbsp; {{ romaneio?.NM_MOTO }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>CPF do Motorista:</th>\r\n                <td>&nbsp; {{ romaneio?.CPF | cpf}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Status do Romaneio:</th>\r\n                <td>&nbsp; \r\n                  <span *ngIf=\"romaneio?.IN_STAT == 1\">ATIVO</span>\r\n                  <span *ngIf=\"romaneio?.IN_STAT == 0\">INATIVO</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">PEDIDOS</h5>\r\n          <custom-table *ngIf=\"pedidos.length !== 0 && pedidosLoading == false\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Pedido</th>\r\n                <th scope=\"col\" class=\"text-center\">Nota Fiscal</th>\r\n                <th scope=\"col\" class=\"text-left\">Cliente</th>\r\n                <th scope=\"col\">Cidade</th>\r\n                <th scope=\"col\">Bairro</th>\r\n                <th scope=\"col\">Local de Entrega</th>\r\n                <th scope=\"col\" class=\"text-center\">Quantidade</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let pedido of pedidos\">\r\n                <td class=\"text-center\">{{ pedido?.CD_PEDI }}</td>\r\n                <td class=\"text-center\">{{ pedido?.NOTA_FISC }}</td>\r\n                <td>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_CLIE }}</td>\r\n                <td>{{ pedido?.DS_CIDA }}-{{ pedido?.DS_ESTA }}</td>\r\n                <td>{{ pedido?.DS_BAIR }}</td>\r\n                <td>{{ pedido?.DS_LOCA_ENTR }}</td>\r\n                <td class=\"text-center\">{{ pedido?.TT_PESO | number: '1.3-3'}}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"pedidosLoading\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n          <empty-result class=\"d-flex align-items-center justify-content-center\" *ngIf=\"pedidos.length === 0 && pedidosLoading == false\" message=\"Nenhum pedido disponível\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #motivoCancelamento>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Escribelo o motivo para o cancelamento do romaneio {{ romaneio?.ID_LOGI_ROMA | number: '6.0-0' }}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <textarea\r\n        name=\"motivoCancelamento\"\r\n        id=\"motivoCancelamento\"\r\n        cols=\"30\"\r\n        rows=\"10\"\r\n        class=\"form-control\"\r\n        [(ngModel)]=\"romaneio.DS_OBSE\"\r\n      >\r\n      </textarea>\r\n      <div\r\n        class=\"d-flex justify-content-end mt-3\"\r\n      >\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger mr-2\"\r\n          (click)=\"modalRef.hide()\"  \r\n        >Cancelar</button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-success\"\r\n          [disabled]=\"!romaneio?.DS_OBSE\"\r\n          (click)=\"modalRef.hide(); onCancel(romaneio)\"\r\n        >Confirmar</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
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

      var LogisticaEntregaRetirasModule = /*#__PURE__*/_createClass(function LogisticaEntregaRetirasModule() {
        _classCallCheck(this, LogisticaEntregaRetirasModule);
      });

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

      var LogisticaEntregaRetirasRoutingModule = /*#__PURE__*/_createClass(function LogisticaEntregaRetirasRoutingModule() {
        _classCallCheck(this, LogisticaEntregaRetirasRoutingModule);
      });

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