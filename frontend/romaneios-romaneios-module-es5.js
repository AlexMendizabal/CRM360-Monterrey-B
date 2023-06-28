(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["romaneios-romaneios-module"], {
    /***/
    "0bSm":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/components/pedidos/pedidos.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bSm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-border-left-danger {\n  border-left: 5px solid #b8342c !important;\n}\n\n#pedidos {\n  display: block;\n  overflow: auto;\n}\n\n.table {\n  color: #6c757d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvY29tcG9uZW50cy9wZWRpZG9zL3BlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL3JvbWFuZWlvcy9jb21wb25lbnRzL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYm9yZGVyLWxlZnQtZGFuZ2Vye1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2I4MzQyYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcGVkaWRvc3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRhYmxle1xyXG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "2VLj":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/services/romaneios.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaEntregaRomaneiosService */

    /***/
    function VLj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosService", function () {
        return LogisticaEntregaRomaneiosService;
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

      var LogisticaEntregaRomaneiosService = /*#__PURE__*/function () {
        function LogisticaEntregaRomaneiosService(http) {
          _classCallCheck(this, LogisticaEntregaRomaneiosService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
          this.downloadEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(LogisticaEntregaRomaneiosService, [{
          key: "getEmpresas",
          value: function getEmpresas() {
            return this.http.get("".concat(this.BASE_URL, "/common/empresas"));
          }
        }, {
          key: "getRomaneio",
          value: function getRomaneio(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/painel-romaneios/romaneios"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "sincronizarRomaneiosFusion",
          value: function sincronizarRomaneiosFusion() {
            return this.http.post("".concat(this.BASE_URL, "/logistica/integracoes/fusion/romaneios"), {}, {
              observe: 'response'
            });
          }
        }, {
          key: "enviarRomaneioParaFaturamento",
          value: function enviarRomaneioParaFaturamento(params) {
            return this.http.post("".concat(this.BASE_URL, "/logistica/painel-romaneios/romaneio/faturamento"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "finalizarRomnaneio",
          value: function finalizarRomnaneio(params) {
            return this.http.post("".concat(this.BASE_URL, "/logistica/painel-romaneios/finaliza-romaneio"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "postRomaneio",
          value: function postRomaneio(params) {
            return this.http.put("".concat(this.BASE_URL, "/logistica/painel-romaneios/status-romaneio"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putRomaneio",
          value: function putRomaneio(params) {
            return this.http.put("".concat(this.BASE_URL, "/logistica/integracoes/fusion/romaneios"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/painel-romaneios/romaneios/pedidos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/painel-romaneios/romaneios/pedidos/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getCtes",
          value: function getCtes(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/painel-romaneios/ctes"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "download",
          value: function download(romaneio) {
            return this.downloadEmmiter.emit(romaneio);
          }
        }, {
          key: "onDownloadEmmiter",
          value: function onDownloadEmmiter() {
            return this.downloadEmmiter;
          }
        }, {
          key: "getEntregas",
          value: function getEntregas(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/painel-romaneios/entregas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getRelatorios",
          value: function getRelatorios(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/painel-romaneios/relatorios"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntregaRomaneiosService;
      }();

      LogisticaEntregaRomaneiosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEntregaRomaneiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEntregaRomaneiosService);
      /***/
    },

    /***/
    "5MU/":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/lista/lista.component.ts ***!
      \******************************************************************************/

    /*! exports provided: LogisticaEntregaRomaneiosListaComponent */

    /***/
    function MU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosListaComponent", function () {
        return LogisticaEntregaRomaneiosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "lVFv");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "KHlC");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _services_romaneios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/romaneios.service */
      "2VLj");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/modules/admin/perfis/services/perfis.service */
      "6bs2");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // rxjs
      // services


      var LogisticaEntregaRomaneiosListaComponent = /*#__PURE__*/function () {
        function LogisticaEntregaRomaneiosListaComponent(activatedRoute, route, localeService, notice, formBuilder, dateService, romaneiosService, atividadesService, perfilService, detailPanelService, pnotify, xlsxService, routerService, modalService, filiaisService) {
          _classCallCheck(this, LogisticaEntregaRomaneiosListaComponent);

          this.activatedRoute = activatedRoute;
          this.route = route;
          this.localeService = localeService;
          this.notice = notice;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.romaneiosService = romaneiosService;
          this.atividadesService = atividadesService;
          this.perfilService = perfilService;
          this.detailPanelService = detailPanelService;
          this.pnotify = pnotify;
          this.xlsxService = xlsxService;
          this.routerService = routerService;
          this.modalService = modalService;
          this.filiaisService = filiaisService;
          this.pedidosAtivos = [];
          this.pedidosInativos = [];
          /* showActiveOrder: boolean = true;
          showInactiveOrder: boolean = false; */

          this.inSomenteEntregaFaturamento = false;
          this.isChecked = false; //spinner

          this.loading = true;
          this.loaderNavbar = false;
          this.loadingEntregas = false;
          this.loadingFiliais = false;
          this.romaneios = [];
          this.entregas = [];
          this.totalItems = [];
          this.noResult = true;
          this.romaneioFinalizado = 1;
          this.breadCrumbTree = [];
          this.loadingPedidos = false;
          this.showDetailPanel = false;
          this.detailPanelTitle = 'Detalhes';
          this.appTitle = 'Painel de Empaque';
          this.orderBy = 'CD_ROMA';
          this.orderType = 'DESC';
          this.situacao = [{
            id: '1',
            nome: 'Activo'
          }, {
            id: '0',
            nome: 'Llamado fuera'
          }];
          this.situacaoCarregamento = [{
            id: '0',
            nome: 'EN CARGA'
          }, {
            id: '1',
            nome: 'FINALIZADO'
          }];
          this.inicioViagem = [{
            id: '0',
            nome: 'NO EMPEZADO'
          }, {
            id: '1',
            nome: 'COMENZÓ'
          }];
          /* Paginação */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.begin = 0;
          this.end = this.itemsPerPage;
          /* Paginação */

          this.permiteAlterarStatus = false;
          this.tableConfig = {
            subtitleBorder: true,
            isFixed: true
          };
          this.visualizarPedidosRemovidos = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntregaRomaneiosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.atividadesService.registrarAcesso().subscribe();
            this.verificaPerfil();
            this.setBreadCrumb();
            this.onDetailPanelEmitter();
            this.onActivatedRoute();
            this.getFiliais();
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this.loadingFiliais = false;
            })).subscribe({
              next: function next(response) {
                _this.filiais = response.body['data'];
              },
              error: function error() {
                _this.pnotify.error();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "onScrollEvent",
          value: function onScrollEvent() {
            this.datepicker.hide();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var params = this.activatedRoute.snapshot.params;
            var submoduloId = params === null || params === void 0 ? void 0 : params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: "/logistica/entrega/".concat(submoduloId)
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              CD_FILI: [null],
              CD_MOTO: [null],
              CD_PRIO: [null],
              CD_ROMA: [null],
              CD_STAT: [null],
              DS_OBSE: [null],
              DT_ATUA: [null],
              DT_INCL: [null],
              DT_PREV_SAID: [null],
              ID_LOGI_FUSI_ROMA: [null],
              INT_ID: [null],
              IN_STAT: [null],
              FINA_IN_STAT: [null],
              IN_VIAG_INIC: [null],
              KM_PREV: [null],
              PLAC: [null],
              VL_FRET: [null],
              CD_PEDI: [null],
              DS_MOTO: [null],
              NR_NOTA_FISC: [null],
              IN_CTE_EMIT: ['T'],
              DT_INIC: [new Date()],
              DT_FINA: [new Date()],
              PAGI: [1],
              TT_REGI_PAGI: [100],
              ORDE_BY: [' CD_ROMA '],
              ORDE_TYPE: [' DESC '],
              TIME: new Date().getTime(),
              TP_EMPR: ['DISTRIBUIDORA']
            });
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this2 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _a;

              var _response = _this2.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length > 0) {
                _response['CD_FILI'] = (_response === null || _response === void 0 ? void 0 : _response.CD_FILI) ? (_a = _response === null || _response === void 0 ? void 0 : _response.CD_FILI) === null || _a === void 0 ? void 0 : _a.split(',') : [];

                _this2.form.patchValue(_response);

                _this2.getRomaneios(_this2.getParams());
              } else {
                _this2.loading = false;
              }
            });
          }
        }, {
          key: "getRomaneios",
          value: function getRomaneios(params) {
            var _this3 = this;

            this.itemsPerPage = params['TT_REGI_PAGI'];
            this.end = params['TT_REGI_PAGI'];
            if (!this.loading) this.loaderNavbar = true;
            this.romaneiosService.getRomaneio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this3.loaderNavbar = false;
              _this3.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.noResult = false;
                _this3.romaneios = response.body['data'];
                _this3.totalItems = response.body['total'];
              } else if (response.status === 204) {
                _this3.pnotify.notice('No se encontró la lista de empaque');

                _this3.noResult = true;
              }
            }, function (error) {
              _this3.pnotify.error(error.error['message']);

              _this3.noResult = true;
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
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(event.page);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
          /* Paginação */

        }, {
          key: "onFinalizaRomaneio",
          value: function onFinalizaRomaneio(romaneio) {
            var _this4 = this;

            romaneio['loadingFinalizando'] = true;
            var status = romaneio.FINA_IN_STAT == '1' ? '0' : '1';
            var params = {
              ID_LOGI_FUSI_ROMA: romaneio === null || romaneio === void 0 ? void 0 : romaneio.ID_LOGI_FUSI_ROMA,
              IN_STAT: status
            };
            this.romaneiosService.finalizarRomnaneio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              romaneio['loadingFinalizando'] = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this4.pnotify.error("No se pudo finalizar la lista de empaque ".concat(romaneio === null || romaneio === void 0 ? void 0 : romaneio.CD_ROMA));

                return;
              }

              romaneio.DT_FINA = new Date();
              romaneio.FINA_IN_STAT = status;

              _this4.pnotify.success("\xA1El empaque ".concat(romaneio === null || romaneio === void 0 ? void 0 : romaneio.CD_ROMA, " se ha completado con \xE9xito!"));
            }, function (error) {
              try {
                _this4.pnotify.error(error.error.message);
              } catch (error) {
                _this4.pnotify.error();
              }
            }); //this.postRomaneios(romaneio);
          }
        }, {
          key: "onInicioViagem",
          value: function onInicioViagem(romaneio) {
            romaneio.IN_VIAG_INIC = romaneio.IN_VIAG_INIC == '1' ? '0' : '1';
            romaneio.DT_SAID = new Date();
            this.postRomaneios(romaneio);
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(1);
            this.currentPage = 1;
            this.showDetailPanel = false;
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
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else if (Array.isArray(_obj[prop])) {
                  _params[prop] = _obj[prop].join(',');
                } else _params[prop] = _obj[prop];
              }
            }
            /* if (_params['CD_FILI']) {
              const current = this.filiais.filter((empresa) => empresa.CD_FILI == _params['CD_FILI'])
              _params = Object.assign(_params, current[0]);
            } */


            return _params;
          }
        }, {
          key: "postRomaneios",
          value: function postRomaneios(romaneio) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.romaneiosService.postRomaneio(romaneio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this5.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                _this5.notice.success();
              } else {
                _this5.notice.error('Algunos registros no se pudieron actualizar');
              }
            }, function (error) {
              _this5.notice.error();
            });
          }
        }, {
          key: "verificaPerfil",
          value: function verificaPerfil() {
            var _this6 = this;

            var matricula = JSON.parse(localStorage.getItem('currentUser'))['info']['matricula'];
            this.permiteAlterarStatus = false;
            this.perfilService.getPerfil({
              sigla: 'LOGI_CONT_ACES_PAIN_ROMA',
              matricula: matricula
            }).subscribe(function (response) {
              if (response.status === 200) {
                _this6.permiteAlterarStatus = true;
              }
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this7 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this7.showDetailPanel = event.showing;
              if (!event.showing) _this7.romaneios.map(function (element) {
                return element.selected = false;
              });
            });
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(romaneio) {
            this.romaneio = romaneio;
            this.romaneios.map(function (element) {
              return element.selected = false;
            });
            this.romaneio['selected'] = true;
            this.isChecked = false;
            this.detailPanelService.show();
            this.detailPanelService.loadedFinished(false);
            this.detailPanelTitle = romaneio.CD_ROMA;
            this.showDetailPanel = true;
            /* this.visualizarPedidosRemovidos = false; */

            this.getEntregas(romaneio);
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this8 = this;

            this.pedidosAtivos = [];
            this.pedidosInativos = [];
            this.romaneiosService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {})).subscribe(function (response) {
              if (response.status !== 200) {
                _this8.detailPanelService.loadedFinished(true);

                return;
              }

              var pedidos = response.body['data'];
              _this8.pedidosAtivos = pedidos.filter(function (pedido) {
                return pedido.IN_STAT == '1';
              });
              _this8.pedidosInativos = pedidos.filter(function (pedido) {
                return pedido.IN_STAT == '0';
              });
              /* this.showActiveOrder = true;
              this.showInactiveOrder = false; */

              _this8.detailPanelService.loadedFinished(false);
            }, function (error) {
              _this8.detailPanelService.loadedFinished(true);
            });
          }
          /* onShowActiveOrder(event: boolean){
            this.showActiveOrder = event;
          } */

          /* onShowInactiveOrder(event: boolean){
            this.showInactiveOrder = event;
          } */

        }, {
          key: "putRomaneio",
          value: function putRomaneio(romaneio) {
            var _this9 = this;

            romaneio.syncFusion = true;
            this.romaneiosService.putRomaneio(romaneio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              romaneio.syncFusion = false;
            })).subscribe(function (response) {
              _this9.pnotify.success("\xA1Paquete ".concat(romaneio.CD_ROMA, " sincronizado correctamente!"));
            }, function (error) {
              _this9.pnotify.error("No se pudo sincronizar la lista de empaque ".concat(romaneio.CD_ROMA));
            });
          }
        }, {
          key: "onPrint",
          value: function onPrint(romaneio) {
            this.romaneiosService.download(romaneio);
          }
        }, {
          key: "sincronizarRomaneiosFusion",
          value: function sincronizarRomaneiosFusion() {
            var _this10 = this;

            this.loaderNavbar = true;
            this.romaneiosService.sincronizarRomaneiosFusion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this10.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.status === 200) _this10.pnotify.success("\xA1Sincronizado con \xE9xito!");else _this10.pnotify.notice("No se encontraron pendientes.");
            }, function (error) {
              _this10.pnotify.error("No se pudo sincronizar las listas de empaque con Fusion.");
            });
          }
        }, {
          key: "enviarRomaneioParaFaturamento",
          value: function enviarRomaneioParaFaturamento(romaneio) {
            var _this11 = this;

            romaneio.loadingFaturamento = true;
            this.romaneiosService.enviarRomaneioParaFaturamento(romaneio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              romaneio.loadingFaturamento = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this11.pnotify.notice("No se pudo enviar la lista de empaque ".concat(romaneio.CD_ROMA, " para facturaci\xF3n."));

                return;
              }

              var usuario = JSON.parse(localStorage.getItem('currentUser'));
              var nome = usuario['info']['nomeCompleto'];
              var matricula = usuario['info']['matricula'];
              romaneio.DS_FATU_NM_USUA = nome;
              romaneio.DS_FATU_NR_MATR = matricula;
              var options = {
                timeStyle: 'medium',
                dateStyle: 'short'
              };
              romaneio.DS_FATU_DT_INCL = new Intl.DateTimeFormat('br', options).format(new Date());
              romaneio.FATU_IN_STAT = '1';

              _this11.pnotify.success("\xA1Paquete ".concat(romaneio.CD_ROMA, " enviado correctamente para facturaci\xF3n."));
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;

              if (message) {
                _this11.pnotify.error("".concat(romaneio.CD_ROMA, ": ").concat(message));

                return;
              }

              _this11.pnotify.error("No se pudo enviar el paquete ".concat(romaneio.CD_ROMA, " para la facturaci\xF3n."));
            });
          }
        }, {
          key: "getEntregasSomenteFaturamento",
          value: function getEntregasSomenteFaturamento(romaneio) {
            romaneio.IN_FATU = (+this.isChecked).toString();
            this.getEntregas(romaneio);
          }
        }, {
          key: "getEntregas",
          value: function getEntregas(romaneio) {
            var _this12 = this;

            this.loadingEntregas = true;
            var params = {
              CD_ROMA: romaneio === null || romaneio === void 0 ? void 0 : romaneio.CD_ROMA,
              IN_FATU: (romaneio === null || romaneio === void 0 ? void 0 : romaneio.IN_FATU) ? romaneio === null || romaneio === void 0 ? void 0 : romaneio.IN_FATU : ''
            };
            this.romaneiosService.getEntregas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this12.loadingEntregas = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this12.entregas = [];
                return;
              }

              _this12.entregas = response.body['data'];
              romaneio.entregas = _this12.entregas;
            }, function (error) {
              _this12.entregas = [];
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xxl',
              backdrop: 'static'
            });
          }
        }, {
          key: "onCorFaturamento",
          value: function onCorFaturamento(romaneio) {
            if (romaneio.FINA_IN_STAT == '0') return 'text-muted';
            if (romaneio.FATU_IN_STAT == '0') return 'text-warning';
            return 'text-success';
          }
        }, {
          key: "onInEnviarFaturamento",
          value: function onInEnviarFaturamento(romaneio) {
            return romaneio.FATU_IN_STAT == 1 || romaneio.FINA_IN_STAT == 0 || !this.permiteAlterarStatus;
          }
        }, {
          key: "getDadosRelatorio",
          value: function getDadosRelatorio() {
            var _this13 = this;

            this.loaderNavbar = true;
            var params = this.getParams();
            this.romaneiosService.getRelatorios(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this13.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this13.pnotify.notice('No se encontraron registros.');

                return;
              }

              _this13.xlsxService["export"]({
                data: response.body['data']
              });
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this13.pnotify.error(message) : _this13.pnotify.error();
            });
          }
        }, {
          key: "onPodeFinalizarRomaneio",
          value: function onPodeFinalizarRomaneio(romaneio) {
            if ((romaneio === null || romaneio === void 0 ? void 0 : romaneio.IN_STAT) == 0) return false;
            return this.permiteAlterarStatus;
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

            this.form.get('ORDE_BY').setValue(this.orderBy);
            this.form.get('ORDE_TYPE').setValue(this.orderType);
            this.onFilter();
          }
        }]);

        return LogisticaEntregaRomaneiosListaComponent;
      }();

      LogisticaEntregaRomaneiosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: _services_romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntregaRomaneiosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_16__["AdminPerfisService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaFiliaisService"]
        }];
      };

      LogisticaEntregaRomaneiosListaComponent.propDecorators = {
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"], {
            "static": false
          }]
        }],
        onScrollEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      };
      LogisticaEntregaRomaneiosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-romaneios-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], _services_romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntregaRomaneiosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_16__["AdminPerfisService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaFiliaisService"]])], LogisticaEntregaRomaneiosListaComponent);
      /***/
    },

    /***/
    "H0Si":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/romaneios-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: LogisticaEntregaRomaneiosRoutingModule */

    /***/
    function H0Si(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosRoutingModule", function () {
        return LogisticaEntregaRomaneiosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "5MU/");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaRomaneiosListaComponent"]
      }];

      var LogisticaEntregaRomaneiosRoutingModule = /*#__PURE__*/_createClass(function LogisticaEntregaRomaneiosRoutingModule() {
        _classCallCheck(this, LogisticaEntregaRomaneiosRoutingModule);
      });

      LogisticaEntregaRomaneiosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], LogisticaEntregaRomaneiosRoutingModule);
      /***/
    },

    /***/
    "KHlC":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/lista/lista.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function KHlC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-switch .custom-control-label::after {\n  background-color: #fff;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #28a745;\n  background-color: #28a745;\n}\n\nbutton:disabled {\n  cursor: no-drop;\n  color: #b9bdb9 !important;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n}\n\n::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n\ntr {\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2Evcm9tYW5laW9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBuby1kcm9wO1xyXG4gIGNvbG9yOiAjYjliZGI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRvb2x0aXAtaW5uZXJ7XHJcbiAgbWF4LXdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50cntcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59Il19 */";
      /***/
    },

    /***/
    "RscU":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/components/capa-romaneio/capa-romaneio.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: LogisticaEntregaRomaneiosCapaRomaneioComponent */

    /***/
    function RscU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosCapaRomaneioComponent", function () {
        return LogisticaEntregaRomaneiosCapaRomaneioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_capa_romaneio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./capa-romaneio.component.html */
      "rkY/");
      /* harmony import */


      var _capa_romaneio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./capa-romaneio.component.scss */
      "dzwu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var _services_romaneios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/romaneios.service */
      "2VLj");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* import { LogisticaEntregaRelatoriosService } from '../../services/relatorios.service'; */


      var LogisticaEntregaRomaneiosCapaRomaneioComponent = /*#__PURE__*/function () {
        function LogisticaEntregaRomaneiosCapaRomaneioComponent(romaneiosService,
        /* private relatoriosService: LogisticaEntregaRelatoriosService, */
        pnotify, xlsxService, modalService, pdfService) {
          _classCallCheck(this, LogisticaEntregaRomaneiosCapaRomaneioComponent);

          this.romaneiosService = romaneiosService;
          this.pnotify = pnotify;
          this.xlsxService = xlsxService;
          this.modalService = modalService;
          this.pdfService = pdfService;
          this.pedidos = [];
          this.materiais = [];
          this.loadingPedidos = true;
        }

        _createClass(LogisticaEntregaRomaneiosCapaRomaneioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLogos();
            this.onSubscriptions();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.$subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            if (this.modalRef !== undefined) this.modalRef.hide();
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xxl',
              backdrop: 'static'
            });
          }
        }, {
          key: "onSubscriptions",
          value: function onSubscriptions() {
            var _this14 = this;

            this.$subscription = this.romaneiosService.onDownloadEmmiter().subscribe(function (romaneio) {
              _this14.romaneio = romaneio;
              var params = {
                CD_ROMA: romaneio.CD_ROMA,
                CD_FILI: romaneio.CD_FILI,
                ROMA_PEDI_IN_STAT: 1,
                TP_PEDI: 'FATURAMENTO',
                ORDE_BY: ' ENTR_NR_SQNC ',
                ORDE_TYPE: ' ASC '
              };
              _this14.pedidos = [];

              _this14.getPedidos(params);

              _this14.openModal(_this14.template);
            });
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var txt = document.querySelector('textarea');
            if (!(txt === null || txt === void 0 ? void 0 : txt.value)) txt === null || txt === void 0 ? void 0 : txt.classList.add('d-none');
            this.pdfService.download('capaRomaneio', this.getNomeDownload());
            txt === null || txt === void 0 ? void 0 : txt.classList.remove('d-none');
          }
        }, {
          key: "getNomeDownload",
          value: function getNomeDownload() {
            var _a;

            var d = new Date();
            var timestamp = "".concat(d.getFullYear(), "_").concat(d.getMonth(), "_").concat(d.getDate(), "_").concat(d.getHours(), "_").concat(d.getMinutes(), "_").concat(d.getSeconds());
            return "romaneio__".concat((_a = this.romaneio) === null || _a === void 0 ? void 0 : _a.CD_ROMA, "__").concat(timestamp);
          }
        }, {
          key: "onPrint",
          value: function onPrint() {
            var txt = document.querySelector('textarea');
            if (!(txt === null || txt === void 0 ? void 0 : txt.value)) txt === null || txt === void 0 ? void 0 : txt.classList.add('d-none');
            window.print();
            txt === null || txt === void 0 ? void 0 : txt.classList.remove('d-none');
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this15 = this;

            this.loadingPedidos = true;
            this.romaneiosService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this15.loadingPedidos = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this15.pedidos = response.body['data'];

              _this15.pedidos.map(function (pedido) {
                return _this15.getMateriais(pedido);
              });
            }, function (error) {});
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(pedido) {
            if (pedido.hasOwnProperty("MATE")) return;
            pedido.materialLoading = true;
            var _params = {
              "CD_PEDI": pedido["CD_PEDI"],
              "CD_EMPR": pedido["CD_EMPR"]
            };
            this.romaneiosService.getMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              pedido.materialLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              pedido["MATE"] = response.body['data'];
            }, function (error) {});
          }
        }, {
          key: "getLogos",
          value: function getLogos() {
            return ["/assets/images/logo/clientes/monterrey_mtcorp_com_br_colorido.png"];
          }
        }, {
          key: "onExcel",
          value: function onExcel() {
            var _this16 = this;

            var params = {
              "CD_ROMA": this.romaneio["CD_ROMA"]
            };
            this.pnotify.success('Seu relatório será gerado em instantes.');
            this.romaneiosService.getRelatorios(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this16.xlsxService["export"]({
                "data": response.body['data'],
                "filename": _this16.getNomeDownload()
              });
            }, function (error) {});
          }
        }]);

        return LogisticaEntregaRomaneiosCapaRomaneioComponent;
      }();

      LogisticaEntregaRomaneiosCapaRomaneioComponent.ctorParameters = function () {
        return [{
          type: _services_romaneios_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRomaneiosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_5__["PdfService"]
        }];
      };

      LogisticaEntregaRomaneiosCapaRomaneioComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['template', {
            "static": false
          }]
        }]
      };
      LogisticaEntregaRomaneiosCapaRomaneioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-romaneios-capa-romaneio',
        template: _raw_loader_capa_romaneio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_capa_romaneio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_romaneios_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRomaneiosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"], src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_5__["PdfService"]])], LogisticaEntregaRomaneiosCapaRomaneioComponent);
      /***/
    },

    /***/
    "XTH6":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/romaneios/components/pedidos/pedidos.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XTH6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\r\n  class=\"px-2 py-1 mb-4 border rounded shadow-sm\"\r\n  style=\"background-color: #CCCCCC10;\"\r\n  [ngClass]=\"{'border-danger text-muted': entrega?.IN_STAT == 0}\"\r\n  >\r\n  <!-- \r\n  *ngIf=\"(entrega.IN_STAT_ROMA_PEDI_FATU == 1 && inSomenteEntregaFaturamento) || !inSomenteEntregaFaturamento\" -->\r\n  <div>\r\n    <div class=\"mb-1 d-flex align-items-center\">\r\n      <div\r\n        class=\"d-flex justify-content-center align-items-center rounded-circle mr-2\"\r\n        style=\"width: 2rem; height: 2rem; font-size: 1.5rem;\"\r\n      >\r\n        <span>{{ entrega?.ENTR_NR_SQNC }}</span>\r\n      </div>\r\n      <div class=\"w-100\">\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div>\r\n            <div class=\"mb-1 d-flex justify-content-between\">\r\n              <span class=\"d-block text-uppercase font-weight-bolder\" *ngIf=\"entrega?.CD_CLIE\">({{ entrega?.CD_CLIE }}) &nbsp; {{ entrega?.NM_CLIE }}</span>\r\n            </div>\r\n            <div class=\"d-block text-uppercase\">\r\n              <span *ngIf=\"entrega?.DS_LOCA_ENTR\">{{ entrega?.DS_LOCA_ENTR }}</span> \r\n              <span *ngIf=\"entrega?.DS_BAIRR\">, {{ entrega?.DS_BAIR }}</span>\r\n              <span *ngIf=\"entrega?.DS_CIDA\">, {{ entrega?.DS_CIDA }}</span>\r\n              <span *ngIf=\"entrega?.DS_ESTA\">-{{ entrega.DS_ESTA }}</span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- <i\r\n              class=\"fas fa-file-invoice-dollar ml-2\"\r\n              [tooltip]=\"notificacoes.entrega.faturamento.tooltips[entrega?.IN_STAT_ROMA_PEDI_FATU]\"\r\n              container=\"body\"\r\n              placement=\"left\"\r\n              [ngClass]=\"notificacoes.entrega.faturamento.cor[entrega?.IN_STAT_ROMA_PEDI_FATU]\"\r\n              style=\"font-size: 1rem;\"\r\n            ></i> -->\r\n            <i\r\n              class=\"fas fa-receipt ml-2\"\r\n              [tooltip]=\"notificacoes.entrega.cte.tooltips[entrega?.CTRC_IN_STAT]\"\r\n              container=\"body\"\r\n              placement=\"left\"\r\n              [ngClass]=\"notificacoes.entrega.cte.cor[entrega?.CTRC_IN_STAT]\"\r\n              style=\"font-size: 1rem;\"\r\n            ></i>\r\n            <i\r\n              class=\"fas fa-truck-moving ml-2\"\r\n              [tooltip]=\"notificacoes.entrega.entrega.tooltips[entrega?.IN_ENTR]\"\r\n              container=\"body\"\r\n              placement=\"left\"\r\n              [ngClass]=\"notificacoes.entrega.entrega.cor[entrega?.IN_ENTR]\"\r\n              style=\"font-size: 1rem;\"  \r\n            ></i>\r\n            <i\r\n              class=\"fas fa-power-off ml-2\"\r\n              [tooltip]=\"notificacoes.entrega.situacao.tooltips[entrega?.IN_STAT]\"\r\n              container=\"body\"\r\n              placement=\"left\"\r\n              [ngClass]=\"notificacoes.entrega.situacao.cor[entrega?.IN_STAT]\"\r\n              style=\"font-size: 1rem;\"  \r\n            ></i>\r\n            <btn-arrow (onStatus)=\"onToggleArrow($event, 'entrega')\" ></btn-arrow>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between mt-1\">\r\n          <div class=\"col-3 p-0\">\r\n            <div class=\"border-bottom rounded py-1 mr-1 d-flex flex-column align-items-center\">\r\n              <div class=\"font-weight-bolder\">{{ entrega?.ENTR_VL_FRET || 0 | currency:'Bs'}}</div>\r\n              <div>Flete Estimado</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3 p-0\">\r\n            <div class=\"border-bottom rounded py-1 mr-1 d-flex flex-column align-items-center\">\r\n              <div class=\"font-weight-bolder\">{{ entrega?.CTRC_VL_LIQD || 0 | currency:'Bs'}}</div>\r\n              <div>Flete Sin Impuesto</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3 p-0\">\r\n            <div class=\"border-bottom rounded py-1 mr-1 d-flex flex-column align-items-center\">\r\n              <div class=\"font-weight-bolder\">{{ entrega?.CTRC_VL_BRUT || 0 | currency:'Bs'}}</div>\r\n              <div>Flete Con Impuesto</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"arrow?.entrega\">\r\n      <!-- <hr>\r\n      <div>\r\n        <div style=\"height: 1.5rem;\" class=\"d-flex justify-content-between\">\r\n          <span class=\"float-left\" style=\"font-size: 11px; font-weight: 700;\">CTE' s</span>\r\n          <btn-arrow (onStatus)=\"onToggleArrow($event, 'ctes')\" (click)=\"getCtes()\"></btn-arrow>\r\n        </div>\r\n        <div *ngIf=\"arrow?.ctes\">\r\n          <div \r\n            class=\"spinner-border text-primary\"\r\n            role=\"status\"\r\n            *ngIf=\"loadingCtes\"  \r\n          >\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n          <custom-table *ngIf=\"ctes?.length > 0 && !loadingCtes\">\r\n            <ng-template let-thead #thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-left\">CTE</th>\r\n                <th scope=\"col\" class=\"text-center\">Data de emissão</th>\r\n                <th scope=\"col\">Chave de acesso</th>\r\n                <th scope=\"col\" class=\"text-center\">Valor</th>\r\n                <th scope=\"col\" class=\"text-center\">Tipo</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template let-tbody #tbody>\r\n              <tr *ngFor=\"let cte of ctes\">\r\n                <td class=\"text-left\">{{cte?.NR_CTRC }}</td>\r\n                <td class=\"text-center\">{{ cte?.DT_EMIS  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{ cte?.DS_CTRC_CHAV_ACES }}</td>\r\n                <td class=\"text-center\">\r\n                  <span *ngIf=\"cte?.VL_BRUT\">{{ cte?.VL_BRUT | currency:'Bs'}}</span>\r\n                  <span *ngIf=\"!cte?.VL_BRUT\">-</span>\r\n                </td>\r\n                <td class=\"text-center\">{{ cte?.DS_TP_CTRC }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div *ngIf=\"ctes?.length == 0 && !loadingCtes\">\r\n            <empty-result message=\"No se encontró información\"></empty-result>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <hr>\r\n      <div style=\"height: 1.5rem;\" class=\"d-flex justify-content-between\">\r\n        <span class=\"float-left\" style=\"font-size: 11px; font-weight: 700;\">ORDEN DE VIENDA</span>\r\n        <btn-arrow (onStatus)=\"onToggleArrow($event, 'pedidos')\" (click)=\"getPedidos()\" ></btn-arrow>\r\n      </div>\r\n      <div \r\n        class=\"spinner-border text-primary\"\r\n        role=\"status\"\r\n        *ngIf=\"loadingPedidos\"  \r\n      >\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <div *ngIf=\"arrow?.pedidos && !loadingPedidos\">\r\n        <div *ngFor=\"let pedido of pedidos; let index = index\" class=\"bg-white\">\r\n          <div\r\n            [class]=\"'shadow-sm border rounded p-2 mb-2 d-flex ' + 'pedido__' + index\"\r\n            [ngClass]=\"{'border-danger text-muted': pedido.ROMA_PEDI_IN_STAT == 0}\"\r\n            >\r\n            <!-- \r\n            *ngIf=\"(item.IN_STAT_ROMA_PEDI_FATU == 1 && inSomenteEntregaFaturamento) || !inSomenteEntregaFaturamento\" -->\r\n            <div class=\"col p-0\">\r\n              <custom-table>\r\n                <ng-template let-thead #thead>\r\n                  <tr>\r\n                    <th>ORDEN DE VIENDA</th>\r\n                    <th>FACTURA</th>\r\n                    <th>PESO</th>\r\n                    <th>\r\n                      <div class=\"d-flex justify-content-between\">\r\n                        <span>LLAVE DE ACCESO</span>\r\n                        <div>\r\n                          <!-- <i\r\n                            class=\"fas fa-file-invoice-dollar ml-2\"\r\n                            [tooltip]=\"notificacoes.pedido.faturamento.tooltips[pedido?.IN_STAT_ROMA_PEDI_FATU]\"\r\n                            container=\"body\"\r\n                            placement=\"left\"\r\n                            [ngClass]=\"notificacoes.pedido.faturamento.cor[pedido?.IN_STAT_ROMA_PEDI_FATU]\"\r\n                            style=\"font-size: 1rem;\"\r\n                          ></i> -->\r\n                          <i\r\n                            class=\"fas fa-receipt ml-2\"\r\n                            [tooltip]=\"notificacoes.pedido.cte.tooltips[pedido?.CTRC_IN_STAT]\"\r\n                            container=\"body\"\r\n                            placement=\"left\"\r\n                            [ngClass]=\"notificacoes.pedido.cte.cor[pedido?.CTRC_IN_STAT]\"\r\n                            style=\"font-size: 1rem;\"\r\n                          ></i>\r\n                          <i\r\n                            class=\"fas fa-truck-moving ml-2\"\r\n                            [tooltip]=\"notificacoes.pedido.entrega.tooltips[pedido?.IN_ENTR]\"\r\n                            container=\"body\"\r\n                            placement=\"left\"\r\n                            [ngClass]=\"notificacoes.pedido.entrega.cor[pedido?.IN_ENTR]\"\r\n                            style=\"font-size: 1rem;\"  \r\n                          ></i>\r\n                          <i\r\n                            class=\"fas fa-power-off ml-2\"\r\n                            [tooltip]=\"notificacoes.pedido.situacao.tooltips[pedido?.IN_STAT]\"\r\n                            container=\"body\"\r\n                            placement=\"left\"\r\n                            [ngClass]=\"notificacoes.pedido.situacao.cor[pedido?.IN_STAT]\"\r\n                            style=\"font-size: 1rem;\"  \r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template let-tbody #tbody>\r\n                  <tr>\r\n                    <td>{{ pedido.CD_PEDI }}</td>\r\n                    <td>{{ pedido.NOTA_FISC }}</td>\r\n                    <td>{{ pedido.TT_PESO | number : '0.3-3' }}</td>\r\n                    <td>\r\n                      <div class=\"d-flex justify-content-between\">\r\n                        <span>{{ pedido.DS_NOFI_CHAV_ACES }}</span>\r\n                        <button\r\n                          class=\"btn-icon-sm\"\r\n                          tooltip=\"copiar\"\r\n                          container=\"body\"\r\n                          placement=\"left\"\r\n                          (click)=\"copyToClipboard(pedido.DS_NOFI_CHAV_ACES)\"\r\n                          [disabled]=\"!pedido.DS_NOFI_CHAV_ACES\">\r\n                          <i class=\"far fa-copy\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <hr>\r\n              <div>\r\n                <div style=\"height: 1.5rem;\" class=\"d-flex justify-content-between\">\r\n                  <span class=\"float-left\" style=\"font-size: 11px; font-weight: 700;\">PRODUCTOS</span>\r\n                  <btn-arrow (onStatus)=\"onToggleArrow($event, 'materiais')\" (click)=\"getMateriais(pedido)\" ></btn-arrow>\r\n                </div>\r\n                <div \r\n                  class=\"spinner-border text-primary\"\r\n                  role=\"status\"\r\n                  *ngIf=\"pedido?.loadingMateriais\"  \r\n                >\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf=\"pedido?.materiais && !pedido?.loadingMateriais\">\r\n                  <custom-table *ngIf=\"pedido?.materiais?.length != 0 && !pedido?.loadingMateriais\">\r\n                    <ng-template let-thead #thead>\r\n                      <tr>\r\n                        <th class=\"text-center\">#</th>\r\n                        <th class=\"text-center\">CODIGO</th>\r\n                        <th>DESCRIPCIÓN</th>\r\n                        <th class=\"text-center\">UNIDAD</th>\r\n                        <th class=\"text-center\">MONTO</th>\r\n                      </tr>\r\n                    </ng-template>\r\n                    <ng-template let-tbody #tbody>\r\n                      <tr *ngFor=\"let material of pedido?.materiais\">\r\n                        <td class=\"text-center\">{{ material?.NR_SQNC }}</td>\r\n                        <td class=\"text-center\">{{ material?.CD_PROD }}</td>\r\n                        <td>{{ material?.NM_PROD }}</td>\r\n                        <td class=\"text-center\">\r\n                          <span *ngIf=\"material?.DS_UNID_MEDI\">{{ material?.DS_UNID_MEDI }}</span>\r\n                          <span *ngIf=\"!material?.DS_UNID_MEDI\">-</span>\r\n                        </td>\r\n                        <td class=\"text-center\">{{ material?.TT_PROD_PESO | number: '1.3-3' }}</td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </custom-table>\r\n                  <div *ngIf=\"pedido?.materiais?.length == 0 && !pedido?.loadingMateriais\" style=\"height: 5rem;\">\r\n                    <empty-result message=\"No se encontró información\"></empty-result>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-1\">\r\n                <span *ngIf=\"pedido?.ROMA_PEDI_IN_STAT == 0\">** Esta orden de vienda está inactiva en esta entrega</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div *ngIf=\"pedidos.length === 0\" style=\"height: 5rem;\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div> -->\r\n  <div class=\"mt-1\">\r\n    <span *ngIf=\"entrega.IN_STAT == 0\">** Esta entrega está inactiva en esta carga</span>\r\n  </div> \r\n</div>";
      /***/
    },

    /***/
    "ZD/H":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/romaneios.module.ts ***!
      \*************************************************************************/

    /*! exports provided: LogisticaEntregaRomaneiosModule */

    /***/
    function ZDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosModule", function () {
        return LogisticaEntregaRomaneiosModule;
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _romaneios_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./romaneios-routing.module */
      "H0Si");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "5MU/");
      /* harmony import */


      var _components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/pedidos/pedidos.component */
      "w3SC");
      /* harmony import */


      var _components_capa_romaneio_capa_romaneio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/capa-romaneio/capa-romaneio.component */
      "RscU");

      var LogisticaEntregaRomaneiosModule = /*#__PURE__*/_createClass(function LogisticaEntregaRomaneiosModule() {
        _classCallCheck(this, LogisticaEntregaRomaneiosModule);
      });

      LogisticaEntregaRomaneiosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaEntregaRomaneiosListaComponent"], _components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntregaRomaneiosPedidosComponent"], _components_capa_romaneio_capa_romaneio_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntregaRomaneiosCapaRomaneioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _romaneios_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaRomaneiosRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["SortableModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_8__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ProgressbarModule"].forRoot(), ng_brazil__WEBPACK_IMPORTED_MODULE_11__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__["CurrencyMaskModule"]]
      })], LogisticaEntregaRomaneiosModule);
      /***/
    },

    /***/
    "dzwu":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/components/capa-romaneio/capa-romaneio.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dzwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media print {\n  #capaRomaneio {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 15px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\ntextarea {\n  width: 100%;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvY29tcG9uZW50cy9jYXBhLXJvbWFuZWlvL2NhcGEtcm9tYW5laW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yb21hbmVpb3MvY29tcG9uZW50cy9jYXBhLXJvbWFuZWlvL2NhcGEtcm9tYW5laW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xyXG4gICAgI2NhcGFSb21hbmVpbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "lVFv":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/romaneios/lista/lista.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lVFv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"getDadosRelatorio()\"\r\n    >\r\n    Generar informe\r\n  </button>\r\n  <button\r\n    (click)=\"sincronizarRomaneiosFusion()\"\r\n  >\r\n    Sincronizar\r\n    <i class=\"fas fa-sync\"></i>\r\n  </button>\r\n  <button\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status  == 'INVALID'\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtInicial\"> Comienzo </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"inicioData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_INIC\"\r\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('DT_INIC')\"\r\n            message=\"El inicio es obligatorio.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group  col-3\">\r\n          <label for=\"dtFinal\"> Final </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_FINA\"\r\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('DT_FINA')\"\r\n            message=\"La final es obligatoria.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"filial\">Subsidiaria</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [loading]=\"loadingFiliais\"\r\n            [closeOnSelect]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            labelForId=\"filial\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"idFilial\"\r\n            placeholder=\"SELECCIONE...\"\r\n            formControlName=\"CD_FILI\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cdRomaneio\"> Ruta </label>\r\n          <input\r\n            id=\"cdRomaneio\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_ROMA\"\r\n            (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"placa\"> Placa del vehículo </label>\r\n          <input\r\n            id=\"placa\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"PLAC\"\r\n            (keyup.enter)=\"onFilter()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"motorista\">Conductor</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"DS_MOTO\"\r\n            placeholder=\"CPF OU NOME\" \r\n            (keyup.enter)=\"onFilter()\" \r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Orden de venta</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"CD_PEDI\"\r\n            placeholder=\"Escribelo...\"  \r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"notaFiscal\">Factura</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"NR_NOTA_FISC\"\r\n            placeholder=\"Escribelo...\"  \r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"itemsPerPage\">Cargando</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"situacaoCarregamento\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"situacaoCarregamento\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"FINA_IN_STAT\"\r\n            placeholder=\"SELECCIONE...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"itemsPerPage\">Inicio del viaje</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"inicioViagem\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"inicioViagem\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"IN_VIAG_INIC\"\r\n            placeholder=\"SELECCIONE...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"situacao\">Situación</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"situacao\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"situacao\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"IN_STAT\"\r\n            placeholder=\"SELECCIONE...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"itemsPerPage\">Registros</label>\r\n          <select\r\n           class=\"form-control\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"d-flex\">\r\n    <div [ngClass]=\"showDetailPanel ? 'col-4 px-0' : 'w-100'\">\r\n      <custom-table [hidden] =\"noResult\" [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th\r\n              class=\"text-center align-middle\"\r\n              scope=\"col\"\r\n              [ngStyle]=\"{width: showDetailPanel ? '25%' : '13%' }\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Filial\"\r\n                [active]=\"orderBy == 'CD_FILI'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('CD_FILI')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center align-middle\"\r\n              scope=\"col\"\r\n              [ngStyle]=\"{width: showDetailPanel ? '20%' : '08%' }\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Ruta\"\r\n                [active]=\"orderBy == 'CD_ROMA'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('CD_ROMA')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-left align-middle\"\r\n              scope=\"col\"\r\n              [ngStyle]=\"{width: showDetailPanel ? '15%' : '06%' }\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Placa\"\r\n                [active]=\"orderBy == 'PLAC'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('PLAC')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-left    align-middle\"\r\n              scope=\"col\"  style=\"width:12%\"\r\n              *ngIf=\"!showDetailPanel\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Conductor\"\r\n                [active]=\"orderBy == 'NM_MOTO'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('NM_MOTO')\">\r\n              </thead-sorter> \r\n            </th>\r\n            <th\r\n              class=\"text-center  align-middle\"\r\n              scope=\"col\"\r\n              style=\"width:05%\"\r\n              *ngIf=\"!showDetailPanel\"\r\n            >\r\n              <thead-sorter\r\n                value=\"PESO\"\r\n                [active]=\"orderBy == 'TT_PESO'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('TT_PESO')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center  align-middle\"\r\n              scope=\"col\"\r\n              style=\"width:08%\"\r\n              *ngIf=\"!showDetailPanel\"\r\n              >\r\n              <thead-sorter\r\n                value=\"Distancia\"\r\n                [active]=\"orderBy == 'KM_PREV'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('KM_PREV')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center  align-middle\"\r\n              scope=\"col\"\r\n              style=\"width:10%\"\r\n              *ngIf=\"!showDetailPanel\"\r\n            >\r\n                <thead-sorter\r\n                value=\"Prev. Salida\"\r\n                [active]=\"orderBy == 'DT_PREV_SAID'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('DT_PREV_SAID')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center  align-middle\"\r\n              scope=\"col\"\r\n              style=\"width:10%\"\r\n              *ngIf=\"!showDetailPanel\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Salida Real\"\r\n                [active]=\"orderBy == 'DT_VIAG_INIC'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('DT_VIAG_INIC')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n            class=\"text-left align-middle\"\r\n            scope=\"col\"\r\n            style=\"width:12%\"\r\n            *ngIf=\"!showDetailPanel\"\r\n            >\r\n              Fin de carga\r\n            </th>\r\n            <th\r\n              class=\"text-center align-middle\"\r\n              scope=\"col\"\r\n            >\r\n            </th>\r\n            <th\r\n              class=\"text-center align-middle\"\r\n              scope=\"col\"\r\n            >\r\n            </th>\r\n            <th\r\n              class=\"text-center align-middle\"\r\n              scope=\"col\"\r\n            >\r\n            </th>\r\n            <th\r\n              class=\"text-center align-middle\"\r\n              scope=\"col\"\r\n            >\r\n            </th>\r\n            <th\r\n              class=\"text-center  align-middle\"\r\n              scope=\"col\"\r\n            >\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let romaneio of romaneios; let i = index\" [ngClass]=\"{'table-active': romaneio.selected == true}\">\r\n            <td class=\"text-left align-middle text-truncate\"  [ngClass]=\"romaneio.IN_STAT == 1 ? 'border-success' : 'border-danger'\">({{romaneio.CD_FILI}})&nbsp; {{ romaneio.NM_FILI }}</td>\r\n            <td class=\"text-center align-middle\">{{ romaneio.CD_ROMA }}</td>\r\n            <td class=\"text-left align-middle\">\r\n              <span>{{ romaneio.PLAC | hifen}}</span>\r\n            </td>\r\n            <td class=\"text-left align-middle text-truncate\" *ngIf=\"!showDetailPanel\">\r\n              <span>{{ romaneio?.NM_MOTO | hifen}}</span>\r\n            </td>\r\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">\r\n              <span >{{ romaneio?.TT_PESO | number:'0.3-3' | hifen}}</span>  \r\n            </td>\r\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">\r\n              <span>{{ romaneio?.KM_PREV  | number: '0.0-0' | hifen}}</span>\r\n            </td>\r\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">{{ romaneio?.DT_PREV_SAID | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n            <td class=\"text-center align-middle\" *ngIf=\"!showDetailPanel\">{{ romaneio?.DT_VIAG_INIC | date: 'dd/MM/yyyy HH:mm' | hifen }}</td>\r\n            <td class=\"text-left\" *ngIf=\"!showDetailPanel\">\r\n              <div *ngIf=\"!romaneio?.loadingFinalizando\">\r\n                <button\r\n                  (click)=\"onFinalizaRomaneio(romaneio);\"\r\n                  [disabled]=\"!onPodeFinalizarRomaneio(romaneio)\"\r\n                  style=\"font-size: 1.25em;\"  \r\n                >\r\n                  <i *ngIf=\"romaneio.FINA_IN_STAT == 0\" class=\"fas fa-toggle-off\"></i>\r\n                  <i *ngIf=\"romaneio.FINA_IN_STAT == 1\" class=\"fas fa-toggle-on text-success\"></i>\r\n                </button>\r\n                <span *ngIf=\"!showDetailPanel\">{{ romaneio.DT_FINA | date: 'dd/MM/yyyy HH:mm' }}</span>\r\n              </div>\r\n              <div *ngIf=\"romaneio?.loadingFinalizando\" class=\"font-weight-bold text-muted\">Finalizando...</div>\r\n            </td>\r\n            <td class=\"font-weight-bold text-center\">\r\n              <span\r\n                [tooltip]=\"romaneio.TT_PEDI_ENTR + ' pedidos entregados de ' + romaneio.TT_PEDI\"\r\n                container=\"body\"\r\n                placement=\"left\"  \r\n              >\r\n                {{ romaneio.TT_PEDI_ENTR }}/{{ romaneio.TT_PEDI }}\r\n              </span>\r\n            </td>\r\n            <td class=\"text-right align-middle\">\r\n              <button\r\n                tooltip=\"Sincronizar con Fusion\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n                (click)=\"putRomaneio(romaneio)\"\r\n              >\r\n                <i class=\"fas fa-sync\" *ngIf=\"!romaneio.syncFusion\"></i>\r\n                <div\r\n                  class=\"spinner-border spinner-border-sm text-primary\"\r\n                  role=\"status\"\r\n                  *ngIf=\"romaneio.syncFusion\"\r\n                >\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </button>\r\n            </td>\r\n            <td class=\"text-right align-middle\">\r\n              <button\r\n                tooltip=\"Generar PDF\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n                (click)=\"onPrint(romaneio)\"\r\n              >\r\n                <i class=\"far fa-file-pdf\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"text-right align-middle\">\r\n              <span\r\n                [tooltip]=\"romaneio?.DS_FATU\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n                <button\r\n                  [disabled]=\"onInEnviarFaturamento(romaneio)\"\r\n                  *ngIf=\"!romaneio.loadingFaturamento\"\r\n                  (click)=\"enviarRomaneioParaFaturamento(romaneio)\"\r\n                >\r\n                  <i class=\"far fa-paper-plane\" [ngClass]=\"onCorFaturamento(romaneio)\"></i>\r\n                </button>\r\n                <div\r\n                  class=\"spinner-border spinner-border-sm text-primary\"\r\n                  role=\"status\"\r\n                  *ngIf=\"romaneio.loadingFaturamento\"\r\n                >\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </span>\r\n            </td>\r\n            <td class=\"text-right align-middle\">\r\n              <button\r\n                tooltip=\"Detalles\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n                (click)=\"viewDetails(romaneio)\"\r\n              >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3 col p-0\" [hidden]=\"noResult\">\r\n        Demostración {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"5\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <div>\r\n          <table>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"col\">Conductor:</th>\r\n                <td>{{ romaneio?.NM_MOTO | uppercase }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"col\">Vehiculo:</th>\r\n                <td>{{ romaneio?.PLAC | uppercase}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"col\">Peso:</th>\r\n                <td>\r\n                  <span *ngIf=\"!isChecked\">{{romaneio?.TT_PESO | number:'0.3-3' | hifen }}</span>\r\n                  <span *ngIf=\"isChecked\">{{romaneio?.FATU_TT_PESO | number:'0.3-3' | hifen }}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"col\">Flete estimado:</th>\r\n                <td>\r\n                  <span *ngIf=\"!isChecked\">{{romaneio?.VL_FRET | currency:'Bs' | hifen }}</span>\r\n                  <span *ngIf=\"isChecked\">{{romaneio?.FATU_VL_FRET | currency:'Bs' | hifen }}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"col\">Flete (sin impuestos):</th>\r\n                <td>\r\n                  <span>{{romaneio?.CTRC_VL_LIQD | currency:'Bs' | hifen }}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"col\">Flete (con impuestos):</th>\r\n                <td>\r\n                  <span>{{romaneio?.CTRC_VL_BRUT | currency:'Bs' | hifen }}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Distancia (KM):</th>\r\n                <td>\r\n                  <span *ngIf=\"!isChecked\">{{romaneio?.KM_PREV | number: '0.0-0' | hifen}}</span>\r\n                  <span *ngIf=\"isChecked\">{{romaneio?.FATU_KM_PREV | number: '0.0-0' | hifen}}</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div>\r\n          <hr>\r\n          <div class=\"custom-control custom-checkbox mb-2\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"customCheck\"\r\n              name=\"example1\"\r\n              [(ngModel)]=\"isChecked\" \r\n              (change)=\"getEntregasSomenteFaturamento(romaneio)\"\r\n            >\r\n            <label class=\"custom-control-label\" for=\"customCheck\">Facturación solo entregas</label>\r\n          </div>\r\n          <div>\r\n            <div *ngIf=\"loadingEntregas\">\r\n              <span>Cargando...</span>\r\n            </div>\r\n            <div *ngIf=\"!loadingEntregas\">\r\n              <div *ngFor=\"let entrega of entregas\">\r\n                <logistica-entrega-romaneios-pedidos\r\n                  [entrega]=\"entrega\"\r\n                  >\r\n                </logistica-entrega-romaneios-pedidos>\r\n              </div>\r\n              <div [hidden]=\"loadingEntregas || (entregas.length != 0)\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n                <empty-result message=\"No se encontró información\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n  <logistica-entrega-romaneios-capa-romaneio></logistica-entrega-romaneios-capa-romaneio>\r\n</app-body>";
      /***/
    },

    /***/
    "rkY/":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/romaneios/components/capa-romaneio/capa-romaneio.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rkY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{romaneio?.CD_ROMA}}</h4>\r\n    <div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm\"\r\n        tooltip=\"Exportar\"\r\n        container=\"body\"\r\n        (click)=\"onExcel()\"\r\n      >\r\n        <i class=\"far fa-file-excel\"></i>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm mx-3\"\r\n        tooltip=\"Download\"\r\n        container=\"body\"\r\n        (click)=\"onDownload()\"\r\n      >\r\n        <i class=\"far fa-save\"></i>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm mr-3\"\r\n        tooltip=\"Imprimir\"\r\n        container=\"body\"  \r\n        (click)=\"onPrint()\"\r\n      >\r\n        <i class=\"fas fa-print\"></i>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm\"\r\n        tooltip=\"Fechar\"\r\n        container=\"body\"\r\n        (click)=\"modalRef.hide()\"\r\n      >\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"p-5\" id=\"capaRomaneio\">\r\n      <div class=\"d-flex justify-content-between align-items-center\">\r\n        <table style=\"font-size: 1.25rem;\">\r\n          <tbody>\r\n            <tr>\r\n              <th>Rota:&nbsp;</th>\r\n              <td>{{ romaneio?.CD_ROMA }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Inicio:&nbsp;</th>\r\n              <td>{{ romaneio?.DT_PREV_SAID | date: 'dd/MM/yyyy HH:mm'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Chofer:&nbsp;</th>\r\n              <td>{{ romaneio?.NM_MOTO | hifen | uppercase }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Vehículo:&nbsp;</th>\r\n              <td>{{ romaneio?.PLAC | hifen | uppercase }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Peso:&nbsp;</th>\r\n              <td>\r\n                <span *ngIf=\"romaneio?.TT_PESO\">{{ romaneio?.TT_PESO | number:'0.3-3'}}&nbsp; Tons</span>\r\n                <span *ngIf=\"!romaneio?.TT_PESO\">-</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>Distancia:&nbsp;</th>\r\n              <td>{{ romaneio?.KM_PREV | number:'0.0-0'}}KM</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Destino:&nbsp;</th>\r\n              <td>{{ romaneio?.DS_DEST | hifen | uppercase }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div>\r\n          <img [src]=\"url\" alt=\"Logo\" class=\"mr-2\" height=\"80px\" *ngFor=\"let url of getLogos()\">\r\n        </div>\r\n      </div>\r\n      <textarea rows=\"1\"></textarea>\r\n      <div *ngIf=\"!loadingPedidos\">\r\n        <div *ngFor=\"let pedido of pedidos\">\r\n          <div class=\"mt-5 px-2 py-3 border border-dark d-flex w-100\">\r\n            <div class=\"mx-2 d-flex align-items-center\" style=\"font-size: 2.5rem;\">\r\n              <span>{{pedido?.ENTR_NR_SQNC}}</span>\r\n            </div>\r\n            <div class=\"w-100\">\r\n              <div class=\"d-flex\" style=\"border-bottom: 1px dashed; padding-bottom: 0.5em;\">\r\n                <div class=\"d-flex col-6 p-0\">\r\n                  <table>\r\n                    <tbody>\r\n                      <tr>\r\n                        <th>Factura:</th>\r\n                        <td>{{ pedido?.NOTA_FISC }}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>Orden de vienda:</th>\r\n                        <td>{{ pedido?.CD_PEDI }}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>Peso:</th>\r\n                        <td>{{ pedido?.TT_PESO | number : '0.3-3' }}&nbsp;Tons</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-6 p-0 d-flex justify-content-end flex-column\">\r\n                  <span class=\"font-weight-bolder d-block\">\r\n                    ({{ pedido?.CD_CLIE }})&nbsp;{{ pedido?.NM_CLIE }}\r\n                  </span>\r\n                  <span>\r\n                    {{pedido?.DS_ENDE | uppercase}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-1 d-flex justify-content-center\" *ngIf=\"!pedido.materialLoading && pedido?.MATE\">\r\n                <table width=\"100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"10%\">#</th>\r\n                      <th width=\"10%\">Código</th>\r\n                      <th width=\"40%\">Descripción</th>\r\n                      <th width=\"10%\" class=\"text-center\">Unidade</th>\r\n                      <th width=\"10%\" class=\"text-right\">Monto</th>\r\n                      <th width=\"20%\" class=\"text-left pl-3\">Nota</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let material of pedido?.MATE; let index = index;\">\r\n                      <td width=\"10%\">\r\n                        <span *ngIf=\"material?.CD_SEQU_MATE\">{{ material?.NR_SQNC }}</span>\r\n                        <span *ngIf=\"!material?.CD_SEQU_MATE\">{{ index + 1 }}</span>\r\n                      </td>\r\n                      <td width=\"10%\">{{ material?.CD_PROD }}</td>\r\n                      <td width=\"35%\">{{ material?.NM_PROD | uppercase }}</td>\r\n                      <td width=\"10%\" class=\"text-center\">{{ material?.DS_UNID_MEDI }}</td>\r\n                      <td width=\"15%\" class=\"text-right\">{{ material?.TT_PROD | number:'0.3-3' }}</td>\r\n                      <td width=\"20%\" class=\"text-left pl-3\">\r\n                        <span *ngIf=\"material?.DS_OBSE\">{{ material?.DS_OBSE }}</span>\r\n                        <span *ngIf=\"!material?.DS_OBSE\" class=\"d-block w-100 text-center\">-</span>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div *ngIf=\"pedido.materialLoading\" class=\"spinner-border text-primary mt-1\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"loadingPedidos\" class=\"spinner-border text-primary mt-3\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "w3SC":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/romaneios/components/pedidos/pedidos.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LogisticaEntregaRomaneiosPedidosComponent */

    /***/
    function w3SC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRomaneiosPedidosComponent", function () {
        return LogisticaEntregaRomaneiosPedidosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pedidos.component.html */
      "XTH6");
      /* harmony import */


      var _pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pedidos.component.scss */
      "0bSm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_romaneios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/romaneios.service */
      "2VLj");

      var LogisticaEntregaRomaneiosPedidosComponent = /*#__PURE__*/function () {
        function LogisticaEntregaRomaneiosPedidosComponent(romaneiosService, pnotifyService) {
          _classCallCheck(this, LogisticaEntregaRomaneiosPedidosComponent);

          this.romaneiosService = romaneiosService;
          this.pnotifyService = pnotifyService;
          this.pedidos = [];
          this.loadingPedidos = false;
          this.ctes = [];
          this.loadingCtes = false;
          this.notificacoes = {
            entrega: {
              faturamento: {
                tooltips: {
                  0: 'Entrega não marcada para faturamento de cte',
                  1: 'Entrega para faturamento de cte'
                },
                cor: {
                  0: 'text-warning',
                  1: 'text-success'
                }
              },
              cte: {
                tooltips: {
                  0: 'Cte\'s não emitidos',
                  1: 'Cte\'s emitidos'
                },
                cor: {
                  0: 'text-danger',
                  1: 'text-success'
                }
              },
              entrega: {
                tooltips: {
                  0: 'Entrega realizada',
                  1: 'Entrega não realizada'
                },
                cor: {
                  0: 'text-danger',
                  1: 'text-success'
                }
              },
              situacao: {
                tooltips: {
                  0: 'Entrega inativa',
                  1: 'Entrega ativa'
                },
                cor: {
                  0: 'text-danger',
                  1: 'text-success'
                }
              }
            },
            pedido: {
              faturamento: {
                tooltips: {
                  0: 'Nota Fiscal não marcada para faturamento de cte',
                  1: 'Nota Fiscal para faturamento de cte'
                },
                cor: {
                  0: 'text-warning',
                  1: 'text-success'
                }
              },
              cte: {
                tooltips: {
                  0: 'Cte\'s não emitidos',
                  1: 'Cte\'s emitidos'
                },
                cor: {
                  0: 'text-danger',
                  1: 'text-success'
                }
              },
              entrega: {
                tooltips: {
                  0: 'Entrega realizada',
                  1: 'Entrega não realizada'
                },
                cor: {
                  0: 'text-danger',
                  1: 'text-success'
                }
              },
              situacao: {
                tooltips: {
                  0: 'Nota Fiscal inativa',
                  1: 'Nota Fiscal ativa'
                },
                cor: {
                  0: 'text-danger',
                  1: 'text-success'
                }
              }
            }
          };
          this.arrow = {
            entrega: true,
            pedidos: true
          };
        }

        _createClass(LogisticaEntregaRomaneiosPedidosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b, _c, _d;

            if (!((_a = changes === null || changes === void 0 ? void 0 : changes.entrega) === null || _a === void 0 ? void 0 : _a.currentValue)) {
              return;
            }

            if (((_c = Object.keys((_b = changes === null || changes === void 0 ? void 0 : changes.entrega) === null || _b === void 0 ? void 0 : _b.currentValue)) === null || _c === void 0 ? void 0 : _c.length) != 0 && ((_d = changes === null || changes === void 0 ? void 0 : changes.entrega) === null || _d === void 0 ? void 0 : _d.firstChange)) {
              this.getPedidos();
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(pedido) {
            var _a, _b, _c;

            if (pedido === null || pedido === void 0 ? void 0 : pedido.materiais) return;
            pedido.loadingMateriais = true;
            var _params = {
              "CD_PEDI": (_a = pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI) !== null && _a !== void 0 ? _a : '',
              "CD_EMPR": (_b = pedido === null || pedido === void 0 ? void 0 : pedido.CD_EMPR) !== null && _b !== void 0 ? _b : '',
              "CD_ROMA": (_c = pedido === null || pedido === void 0 ? void 0 : pedido.CD_ROMA) !== null && _c !== void 0 ? _c : ''
            };
            this.romaneiosService.getMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              pedido.loadingMateriais = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {}

              pedido.materiais = response.body['data'];
            }, function (error) {});
          }
        }, {
          key: "getCtes",
          value: function getCtes() {
            var _this17 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

            if (this.ctes.length !== 0) return;
            if (this.arrow['ctes'] === false) return;
            this.loadingCtes = true;
            var params = {
              'CD_ROMA': (_b = (_a = this.entrega) === null || _a === void 0 ? void 0 : _a.CD_ROMA) !== null && _b !== void 0 ? _b : '',
              'CD_PEDI': (_d = (_c = this.entrega) === null || _c === void 0 ? void 0 : _c.CD_PEDI) !== null && _d !== void 0 ? _d : '',
              'CD_CLIE': (_f = (_e = this.entrega) === null || _e === void 0 ? void 0 : _e.CD_CLIE) !== null && _f !== void 0 ? _f : '',
              'DS_LOCA_ENTR': (_h = (_g = this.entrega) === null || _g === void 0 ? void 0 : _g.DS_LOCA_ENTR) !== null && _h !== void 0 ? _h : '',
              'DS_CIDA': (_k = (_j = this.entrega) === null || _j === void 0 ? void 0 : _j.DS_CIDA) !== null && _k !== void 0 ? _k : '',
              'DS_BAIR': (_m = (_l = this.entrega) === null || _l === void 0 ? void 0 : _l.DS_BAIR) !== null && _m !== void 0 ? _m : '',
              'DS_ESTA': (_p = (_o = this.entrega) === null || _o === void 0 ? void 0 : _o.DS_ESTA) !== null && _p !== void 0 ? _p : ''
            };
            this.romaneiosService.getCtes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this17.loadingCtes = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this17.ctes = [];
                return;
              }

              _this17.ctes = response.body['data'];
            }, function (error) {
              _this17.ctes = [];
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos() {
            var _this18 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

            if (this.pedidos.length !== 0) {
              return;
            }

            this.loadingPedidos = true;
            var params = {
              'CD_ROMA': (_b = (_a = this.entrega) === null || _a === void 0 ? void 0 : _a.CD_ROMA) !== null && _b !== void 0 ? _b : '',
              'CD_CLIE': (_d = (_c = this.entrega) === null || _c === void 0 ? void 0 : _c.CD_CLIE) !== null && _d !== void 0 ? _d : '',
              'DS_LOCA_ENTR': (_f = (_e = this.entrega) === null || _e === void 0 ? void 0 : _e.DS_LOCA_ENTR) !== null && _f !== void 0 ? _f : '',
              'DS_CIDA': (_h = (_g = this.entrega) === null || _g === void 0 ? void 0 : _g.DS_CIDA) !== null && _h !== void 0 ? _h : '',
              'DS_BAIR': (_k = (_j = this.entrega) === null || _j === void 0 ? void 0 : _j.DS_BAIR) !== null && _k !== void 0 ? _k : '',
              'DS_ESTA': (_m = (_l = this.entrega) === null || _l === void 0 ? void 0 : _l.DS_ESTA) !== null && _m !== void 0 ? _m : ''
            };
            this.romaneiosService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this18.loadingPedidos = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              var pedidos = response.body['data'];
              _this18.pedidos = pedidos;
            }, function (error) {});
          }
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard(value) {
            var txtArea = document.createElement("textarea");
            txtArea.id = 'txt';
            txtArea.style.position = 'fixed';
            txtArea.style.top = '0';
            txtArea.style.left = '0';
            txtArea.style.opacity = '0';
            txtArea.value = value;
            document.body.appendChild(txtArea);
            txtArea.select();
            document.execCommand("copy");
            this.pnotifyService.success("Copiado");
          }
        }, {
          key: "onToggleArrow",
          value: function onToggleArrow(status, type) {
            this.arrow[type] = status;
          }
        }, {
          key: "onCorCancelado",
          value: function onCorCancelado(item) {
            if (item.IN_STAT == 0) return 'text-muted';
            return;
          }
        }]);

        return LogisticaEntregaRomaneiosPedidosComponent;
      }();

      LogisticaEntregaRomaneiosPedidosComponent.ctorParameters = function () {
        return [{
          type: _services_romaneios_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntregaRomaneiosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }];
      };

      LogisticaEntregaRomaneiosPedidosComponent.propDecorators = {
        entrega: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inSomenteEntregaFaturamento: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LogisticaEntregaRomaneiosPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-romaneios-pedidos',
        template: _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_romaneios_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntregaRomaneiosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])], LogisticaEntregaRomaneiosPedidosComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=romaneios-romaneios-module-es5.js.map