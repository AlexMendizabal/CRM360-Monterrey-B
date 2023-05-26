(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grupo-fornecedores-grupo-fornecedores-module"], {
    /***/
    "2tNg":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/cadastro/cadastro.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tNg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvZ3J1cG8tZm9ybmVjZWRvcmVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "C9+i":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/grupo-fornecedores.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosGrupoFornecedoresModule */

    /***/
    function C9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresModule", function () {
        return AbastecimentoCadastrosGrupoFornecedoresModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _grupo_fornecedores_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./grupo-fornecedores-routing.module */
      "jqcQ");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./lista/lista.component */
      "sOUy");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "SN2+");
      /* Localização Brasil */


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
      /* Localização Brasil */

      var AbastecimentoCadastrosGrupoFornecedoresModule = function AbastecimentoCadastrosGrupoFornecedoresModule() {
        _classCallCheck(this, AbastecimentoCadastrosGrupoFornecedoresModule);
      };

      AbastecimentoCadastrosGrupoFornecedoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosGrupoFornecedoresListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosGrupoFornecedoresCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _grupo_fornecedores_routing_module__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosGrupoFornecedoresRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastrosGrupoFornecedoresModule);
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
    "SN2+":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/cadastro/cadastro.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosGrupoFornecedoresCadastroComponent */

    /***/
    function SN2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresCadastroComponent", function () {
        return AbastecimentoCadastrosGrupoFornecedoresCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "zXAD");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "2tNg");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../grupo-fornecedores.service */
      "i/v9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AbastecimentoCadastrosGrupoFornecedoresCadastroComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosGrupoFornecedoresCadastroComponent(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosGrupoFornecedoresCadastroComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.enableCadastroFornecedor = false;
          this.loadingDadosFornecedores = false;
          this.noResult = false;
          this.noResultDados = false;
          this.editBool = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.integradores = [];
          this.fornecedores = [];
          this.dadosFornecedores = [];
          this.dados = [];
          this.form = this.formBuilder.group({
            grupo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            integrador: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fornecedor: [null]
          });
        }

        _createClass(AbastecimentoCadastrosGrupoFornecedoresCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 9000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.getIntegradores();
            this.titleService.setTitle('Grupo e Fornecedores');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Grupo e fornecedores',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/grupo-fornecedores/lista")
              }, {
                descricao: 'Cadastro'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this3.routerService.getBase64UrlParams(queryParams);

                _this3.getFornecedores();

                _this3.setValuesGrupoFornecedor(_response.item);
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setValuesGrupoFornecedor",
          value: function setValuesGrupoFornecedor(item) {
            this.idAssociacaoGrupoFornecedor = item["ID"], this.editBool = item["edit"];
            this.getAssociacaoGrupoFornecedoresIntPed({
              ID_ASSO_GRUP_FORN_INTE_PEDI: this.idAssociacaoGrupoFornecedor,
              ID_GRUP_FORN: '',
              ID_APOI_INTE_PEDI: '',
              ID_FORN: '',
              IN_STAT: '',
              NR_PAGE_INIC: '',
              TT_REGI_PAGI: '',
              ORDE_BY: '',
              ORDE_TYPE: ''
            });
          }
        }, {
          key: "getAssociacaoGrupoFornecedoresIntPed",
          value: function getAssociacaoGrupoFornecedoresIntPed(params) {
            var _this4 = this;

            //this.loaderNavbar = true;
            this.service.getAssociacaoGrupoFornecedoresIntPed(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this4.searchAssociacaoGrupoFornecedores();
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this4.dados = res['body']['result'];
                  _this4.idGrupoFornecedor = _this4.dados[0]["ID_GRUP_FORN"], _this4.idGrupoFornecedorIntPed = _this4.dados[0]['ID_APOI_INTE_PEDI'], _this4.descGrupoFornecedor = _this4.dados[0]['NM_GRUP_FORN'], _this4.descGrupoFornecedorIntPed = _this4.dados[0]["NM_APOI_INTE_PEDI"], _this4.idSituacao = _this4.dados[0]['IN_STAT'];

                  _this4.form.get('grupo').setValue(_this4.descGrupoFornecedor);

                  _this4.form.get('situacao').setValue(_this4.idSituacao);

                  _this4.form.get('integrador').setValue(_this4.idGrupoFornecedorIntPed);

                  _this4.noResultDados = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this4.noResultDados = true;

                  _this4.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this4.pnotifyService.error('Erro ao carregar dados');

              _this4.noResult = true;
            });
          }
        }, {
          key: "getFornecedores",
          value: function getFornecedores() {
            var _this5 = this;

            this.loaderFullScreen = true;
            this.loaderNavbar = true;
            var idSituacao = 1;
            this.fornecedores = [];
            this.service.getFornecedores(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this5.loaderNavbar = false;
              _this5.enableCadastroFornecedor = true;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this5.fornecedores = res['body']['result'];

                _this5.fornecedores.map(function (fornecedor) {
                  fornecedor.full_name = fornecedor.ID_REFE_ERP + ' - ' + fornecedor.NM_FANT;
                  return fornecedor;
                });

                _this5.loaderFullScreen = false;
              }
            }, function (error) {
              _this5.enableCadastroFornecedor = false;

              _this5.pnotifyService.error('Erro ao carregar fornecedor');
            });
          }
        }, {
          key: "searchAssociacaoGrupoFornecedores",
          value: function searchAssociacaoGrupoFornecedores() {
            this.getAssociacaoGrupoFornecedorFornecedores({
              ID_ASSO_GRUP_FORN_FORN: '',
              ID_INTE_PEDI: '',
              ID_GRUP_FORN: this.idGrupoFornecedor,
              ID_FORN: '',
              IN_STAT: '',
              NR_PAGE_INIC: '',
              TT_REGI_PAGI: '',
              ORDE_BY: '',
              ORDE_TYPE: ''
            });
          }
        }, {
          key: "getAssociacaoGrupoFornecedorFornecedores",
          value: function getAssociacaoGrupoFornecedorFornecedores(params) {
            var _this6 = this;

            this.loadingDadosFornecedores = false;
            this.dadosFornecedores = [];
            this.loaderNavbar = true;
            this.service.getAssociacaoGrupoFornecedorFornecedores(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this6.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this6.dadosFornecedores = res['body']['result'];
                  _this6.loadingDadosFornecedores = true;
                  _this6.noResult = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this6.noResult = true;

                  _this6.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this6.loadingDadosFornecedores = false;
              _this6.noResult = true;

              _this6.pnotifyService.error('Erro ao carregar fornecedor');
            });
          }
        }, {
          key: "getIntegradores",
          value: function getIntegradores() {
            var _this7 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.integradores = [];
            this.service.getIntegradoresPedidos(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this7.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this7.integradores = res['body']['result'];
              }
            }, function (error) {
              _this7.pnotifyService.error('Erro ao carregar fornecedor');
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            if (this.editBool) {
              this.updateCadastro();
            } else {
              this.createCadastro();
            }
          }
        }, {
          key: "createCadastro",
          value: function createCadastro() {
            this.saveGrupoFornecedor();
          }
        }, {
          key: "updateCadastro",
          value: function updateCadastro() {
            this.saveGrupoFornecedor();
            this.saveAssociacaoGrupoFornecedores();
          }
        }, {
          key: "saveGrupoFornecedor",
          value: function saveGrupoFornecedor() {
            var grupo = this.form.get("grupo").value;
            var idSituacao = this.form.get("situacao").value;
            var record = [];

            if (this.editBool) {
              record = {
                ID_GRUP_FORN: this.idGrupoFornecedor,
                NM_GRUP_FORN: grupo,
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario)
              };
            } else {
              record = {
                NM_GRUP_FORN: grupo,
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario)
              };
            }

            this.postGrupoFornecedor(record);
          }
        }, {
          key: "saveGrupoFornecedorIntPed",
          value: function saveGrupoFornecedorIntPed(params) {
            var integrador = this.form.get("integrador").value;
            var idSituacao = this.form.get("situacao").value;
            var record = [];

            if (this.editBool) {
              record = {
                ID_ASSO_GRUP_FORN_INTE_PEDI: this.idAssociacaoGrupoFornecedor,
                ID_APOI_INTE_PEDI: this.idGrupoFornecedorIntPed,
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario)
              };
            } else {
              record = {
                ID_APOI_INTE_PEDI: integrador,
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                IN_STAT: parseInt(idSituacao),
                ID_USUA: parseInt(this.idUsuario)
              };
            }

            this.postGrupoFornecedorIntPed(record);
          }
        }, {
          key: "postGrupoFornecedor",
          value: function postGrupoFornecedor(record) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.service.postGrupoFornecedores(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this8.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  var params = {
                    ID_GRUP_FORN: res['ID_GRUP_FORN']
                  };

                  _this8.saveGrupoFornecedorIntPed(params);

                  _this8.pnotifyService.success(res['message']);

                  ;
                } else {
                  _this8.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this8.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "postGrupoFornecedorIntPed",
          value: function postGrupoFornecedorIntPed(record) {
            var _this9 = this;

            this.loaderNavbar = true;
            this.service.postAssociacaoGrupoFornecedoresIntPed(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  _this9.pnotifyService.success(res['message']);

                  if (!_this9.editBool) {
                    _this9.resetValuesForm();
                  }
                } else {
                  _this9.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this9.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "saveAssociacaoGrupoFornecedores",
          value: function saveAssociacaoGrupoFornecedores() {
            var idFornecedor = this.form.get("fornecedor").value;

            if (idFornecedor != null || idFornecedor != undefined) {
              this.postAssociacaoGrupoFornecedores({
                ID_GRUP_FORN: this.idGrupoFornecedor,
                ID_FORN: idFornecedor,
                IN_STAT: 1,
                ID_USUA: parseInt(this.idUsuario)
              });
            }
          }
        }, {
          key: "postAssociacaoGrupoFornecedores",
          value: function postAssociacaoGrupoFornecedores(record) {
            var _this10 = this;

            this.loaderNavbar = true;
            this.service.postAssociacaoGrupoFornecedorFornecedores(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this10.loaderNavbar = false, _this10.form.get("fornecedor").reset(), _this10.searchAssociacaoGrupoFornecedores();
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  _this10.pnotifyService.success(res['message']);
                } else {
                  _this10.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this10.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(item) {
            var _this11 = this;

            this.loaderNavbar = true;
            var record = {
              ID_ASSO_FORN_GRUP_FORN: item.ID_ASSO_GRUP_FORN_FORN,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (result) {
              return result ? _this11.deleteMaterialGrupoFornecedor(record) : rxjs__WEBPACK_IMPORTED_MODULE_13__["EMPTY"];
            })).subscribe(function (success) {
              _this11.pnotifyService.success();

              _this11.loaderNavbar = false;

              _this11.searchAssociacaoGrupoFornecedores();
            }, function (error) {
              _this11.pnotifyService.error();

              _this11.loaderNavbar = false;

              _this11.searchAssociacaoGrupoFornecedores();
            });
            this.deleteMaterialGrupoFornecedor(record);
          }
        }, {
          key: "deleteMaterialGrupoFornecedor",
          value: function deleteMaterialGrupoFornecedor(record) {
            return this.service.deleteAssociacaoGrupoFornecedorFornecedores(record);
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get("grupo").reset();
            this.form.get("situacao").reset();
            this.form.get("integrador").reset();
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
        }]);

        return AbastecimentoCadastrosGrupoFornecedoresCadastroComponent;
      }();

      AbastecimentoCadastrosGrupoFornecedoresCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosGrupoFornecedoresService"]
        }];
      };

      AbastecimentoCadastrosGrupoFornecedoresCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosGrupoFornecedoresService"]])], AbastecimentoCadastrosGrupoFornecedoresCadastroComponent);
      /***/
    },

    /***/
    "VuXe":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/grupo-fornecedores/lista/lista.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VuXe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Grupo e Fornecedores\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n  >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"excelExport()\"\n  >\n    Exportar Excel\n  </button>\n  <button\n    type=\"button\"\n    routerLink=\"../cadastro\"\n    >\n    Adicionar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3\">\n          <label for=\"integrador\">Integrador</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"false\"\n            [items]=\"integradores\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_INTE_PEDI\"\n            bindValue=\"ID\"\n            formControlName=\"integrador\"\n            (change)=\"this.getGrupoFornecedores()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"grupoFornecedor\">Grupo de Fornecedores</label>\n          <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"true\"\n          [multiple]=\"false\"\n          [items]=\"grupoFornecedores\"\n          [virtualScroll]=\"true\"\n          [hideSelected]=\"true\"\n          [closeOnSelect]=\"true\"\n          placeholder=\"Selecione...\"\n          bindLabel=\"NM_GRUP_FORN\"\n          bindValue=\"ID_GRUP_FORN\"\n          formControlName=\"grupoFornecedor\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n  <div class=\"row\">\n    <div\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\n      *ngIf=\"loading\"\n    >\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n              Integrador\n              <span *ngIf=\"key == 'NM_LINH'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_LINH'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\n              Grupo\n              <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of dados | orderBy: key:reverse | slice: begin:end;\n              let i = index\n            \"\n          >\n            <td class=\"text-center\" [ngClass]=\"[item.select ? 'bg-row-selected' : '', item.IN_STAT == 0 ? 'border-danger' : 'border-success']\">{{ item.NM_APOI_INTE_PEDI }}</td>\n            <td\n              class=\"text-truncate text-center\"\n              [ngClass]=\"item.select ? 'bg-row-selected' : ''\"\n            >\n              {{ item.NM_GRUP_FORN }}\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Editar\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                <i\n                  class=\"fas fa-edit\"\n                  (click)=\"onAdd(item)\" \n                  >\n                </i>\n                </button>\n              </div>\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  (click)=\"openTab(item)\"\n                  tooltip=\"Detalhes\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-6\">\n      <tabset [hidden]=\"!compressedTable\">\n        <button\n          type=\"button\"\n          class=\"btn-icon close position-absolute\"\n          (click)=\"onClose()\"\n        >\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes\">\n          <div\n            class=\"border-right border-left border-bottom px-3 pt-3\"\n            style=\"overflow: auto; height: 338px;\"\n          >\n            <custom-table *ngIf=\"!noResultDetalhes && loadingDetalhes\">\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Cód.</th>\n                  <th scope=\"col\">Razão social</th>\n                  <th scope=\"col\">Nome fantasia</th>\n                  <th scope=\"col\">CNPJ do Fornecedor</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosDetalhes\">\n                  <td class=\"text-center\"> {{ item.ID_REFE_ERP }} </td>\n                  <td class=\"text-center\"> {{ item.NM_RAZA_SOCI ? item.NM_RAZA_SOCI : '-' }} </td>\n                  <td class=\"text-center\"> {{ item.NM_FANT }} </td>\n                  <td class=\"text-center\"> {{ item.NR_CNPJ_CPF ? (item.NR_CNPJ_CPF | cnpj) : '-' }} </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <div\n              *ngIf=\"noResultDetalhes\"\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\n              style=\"height: 80%;\"\n            >\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n              ></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n    <div\n      class=\"col-12 mb-2 ml-2\"\n      *ngIf=\"!noResult && dados?.length > itemsPerPage\"\n    >\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dados?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n";
      /***/
    },

    /***/
    "i/v9":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/grupo-fornecedores.service.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosGrupoFornecedoresService */

    /***/
    function iV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresService", function () {
        return AbastecimentoCadastrosGrupoFornecedoresService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AbastecimentoCadastrosGrupoFornecedoresService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosGrupoFornecedoresService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosGrupoFornecedoresService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosGrupoFornecedoresService, [{
          key: "getFornecedores",
          value: function getFornecedores(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/fornecedores"), {
              params: {
                IN_STAT: params
              },
              observe: "response"
            });
          }
        }, {
          key: "getIntegradoresPedidos",
          value: function getIntegradoresPedidos(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/integradores-pedidos"), {
              params: {
                IN_STAT: params
              },
              observe: "response"
            });
          }
        }, {
          key: "getGrupoFornecedoresFiltro",
          value: function getGrupoFornecedoresFiltro(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos"), {
              params: {
                ID_APOI_INTE_PEDI: params
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getGrupoFornecedores",
          value: function getGrupoFornecedores(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/grupo-fornecedores"), {
              params: {
                ID_GRUP_FORN: params['ID_GRUP_FORN'].toString(),
                NM_GRUP_FORN: params['NM_GRUP_FORN'],
                IN_STAT: params['IN_STAT'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE']
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postGrupoFornecedores",
          value: function postGrupoFornecedores(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/grupo-fornecedores"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAssociacaoGrupoFornecedoresIntPed",
          value: function getAssociacaoGrupoFornecedoresIntPed(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos"), {
              params: {
                ID_ASSO_GRUP_FORN_INTE_PEDI: params['ID_ASSO_GRUP_FORN_INTE_PEDI'].toString(),
                ID_APOI_INTE_PEDI: params['ID_APOI_INTE_PEDI'],
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                ID_FORN: params['ID_FORN'],
                IN_STAT: params['IN_STAT'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE']
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postAssociacaoGrupoFornecedoresIntPed",
          value: function postAssociacaoGrupoFornecedoresIntPed(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "deleteAssociacaoGrupoFornecedoresIntPed",
          value: function deleteAssociacaoGrupoFornecedoresIntPed(record) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              body: record
            };
            return this.httpClient["delete"]("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedores-integrador-pedidos"), options);
          }
        }, {
          key: "getAssociacaoGrupoFornecedorFornecedores",
          value: function getAssociacaoGrupoFornecedorFornecedores(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedores"), {
              params: {
                ID_ASSO_GRUP_FORN_FORN: params['ID_ASSO_GRUP_FORN_FORN'].toString(),
                ID_INTE_PEDI: params['ID_INTE_PEDI'],
                ID_GRUP_FORN: params['ID_GRUP_FORN'],
                ID_FORN: params['ID_FORN'],
                IN_STAT: params['IN_STAT'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA']
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAssociacaoGrupoFornecedorFornecedoresFiltro",
          value: function getAssociacaoGrupoFornecedorFornecedoresFiltro(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedores"), {
              params: {
                ID_GRUP_FORN: params
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postAssociacaoGrupoFornecedorFornecedores",
          value: function postAssociacaoGrupoFornecedorFornecedores(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedores"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "deleteAssociacaoGrupoFornecedorFornecedores",
          value: function deleteAssociacaoGrupoFornecedorFornecedores(record) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              body: record
            };
            return this.httpClient["delete"]("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-grupo-fornecedor-fornecedor"), options);
          }
        }]);

        return AbastecimentoCadastrosGrupoFornecedoresService;
      }();

      AbastecimentoCadastrosGrupoFornecedoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosGrupoFornecedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AbastecimentoCadastrosGrupoFornecedoresService);
      /***/
    },

    /***/
    "i8GH":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/lista/lista.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function i8GH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9ncnVwby1mb3JuZWNlZG9yZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9ncnVwby1mb3JuZWNlZG9yZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcm93LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYjhmMCFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "jqcQ":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/grupo-fornecedores-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosGrupoFornecedoresRoutingModule */

    /***/
    function jqcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresRoutingModule", function () {
        return AbastecimentoCadastrosGrupoFornecedoresRoutingModule;
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
      "SN2+");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "sOUy");

      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosGrupoFornecedoresListaComponent"]
        }, {
          path: 'cadastro',
          component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosGrupoFornecedoresCadastroComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var AbastecimentoCadastrosGrupoFornecedoresRoutingModule = function AbastecimentoCadastrosGrupoFornecedoresRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosGrupoFornecedoresRoutingModule);
      };

      AbastecimentoCadastrosGrupoFornecedoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosGrupoFornecedoresRoutingModule);
      /***/
    },

    /***/
    "sOUy":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/grupo-fornecedores/lista/lista.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosGrupoFornecedoresListaComponent */

    /***/
    function sOUy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosGrupoFornecedoresListaComponent", function () {
        return AbastecimentoCadastrosGrupoFornecedoresListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "VuXe");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "i8GH");
      /* harmony import */


      var _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../grupo-fornecedores.service */
      "i/v9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm"); //Converte rota em base64


      var AbastecimentoCadastrosGrupoFornecedoresListaComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosGrupoFornecedoresListaComponent(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosGrupoFornecedoresListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loading = false;
          this.loadingDetalhes = false;
          this.noResult = false;
          this.noResultDetalhes = false;
          this.compressedTable = false;
          this.selectedRow = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.dados = [];
          this.dadosExcel = [];
          this.dadosDetalhes = [];
          this.fornecedores = [];
          this.grupoFornecedores = [];
          this.integradores = [];
          /* Ordenação */

          this.reverse = false;
          this.key = 'TP_MATE';
          /* Ordenação */

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.subtitles = [{
            text: 'Ativo',
            color: 'green'
          }, {
            text: 'Inativo',
            color: 'red'
          }];
          this.form = this.formBuilder.group({
            integrador: [null],
            grupoFornecedor: [null],
            fornecedor: [null]
          });
        }

        _createClass(AbastecimentoCadastrosGrupoFornecedoresListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            setTimeout(function () {
              _this12.loaderFullScreen = false;
            }, 1000);
            this.disabledForms();
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.getIntegradores();
            this.titleService.setTitle('Grupo e fornecedores');
          }
        }, {
          key: "disabledForms",
          value: function disabledForms() {
            this.form.get('grupoFornecedor').disable();
            this.form.get('fornecedor').disable();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this13 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this13.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Grupo e fornecedores'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this14 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this14.routerService.getBase64UrlParams(queryParams);

                _this14.search(_response);

                _this14.setFormValues(_response);
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this15 = this;

            var idSituacao = 1;
            var integrador = queryParams['ID_APOI_INTE_PEDI'] ? queryParams['ID_APOI_INTE_PEDI'] : "";
            var fornecedor = queryParams['ID_FORN'] ? queryParams['ID_FORN'] : "";
            var grupoFornecedor = queryParams['ID_GRUP_FORN'] ? queryParams['ID_GRUP_FORN'] : "";

            if (Object.keys(integrador).length > 0) {
              this.loaderNavbar = true;
              /* grupoFornecedor */

              this.service.getGrupoFornecedoresFiltro(integrador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this15.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this15.grupoFornecedores = res['body']['result'];

                      _this15.form.get('grupoFornecedor').enable();
                    }
                  }
                }
              }, function (error) {
                _this15.pnotifyService.error('Erro ao carregar grupo fornecedor');
              });
            } else {
              this.form.get('grupoFornecedor').disable();
            }
            /* fornecedor */


            if (Object.keys(integrador).length > 0) {
              this.loaderNavbar = true;
              this.service.getAssociacaoGrupoFornecedorFornecedoresFiltro(grupoFornecedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this15.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this15.fornecedores = res['body']['result'];

                      _this15.form.get('fornecedor').enable();
                    }
                  }
                }
              }, function (error) {
                _this15.pnotifyService.error('Erro ao carregar fornecedor');
              });
            } else {
              this.form.get('fornecedor').disable();
            }

            this.form.patchValue({
              integrador: integrador,
              fornecedor: fornecedor,
              grupoFornecedor: grupoFornecedor
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.setRouterParams({
              ID_ASSO_GRUP_FORN_INTE_PEDI: '',
              ID_GRUP_FORN: this.form.value['grupoFornecedor'] === null || this.form.value['grupoFornecedor'] === undefined ? '' : this.form.value['grupoFornecedor'],
              ID_APOI_INTE_PEDI: this.form.value['integrador'] === null || this.form.value['integrador'] === undefined ? '' : this.form.value['integrador'],
              ID_FORN: this.form.value['fornecedor'] === null || this.form.value['fornecedor'] === undefined ? '' : this.form.value['fornecedor'],
              IN_STAT: '',
              NR_PAGE_INIC: '',
              TT_REGI_PAGI: '',
              ORDE_BY: '',
              ORDE_TYPE: ''
            });
            this.onClose();
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(params)
            });
            this.search(params);
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            this.getDadosExcel({
              ID_ASSO_GRUP_FORN_FORN: '',
              ID_INTE_PEDI: this.form.value['integrador'] === null || this.form.value['integrador'] === undefined ? '' : this.form.value['integrador'],
              ID_GRUP_FORN: this.form.value['grupoFornecedor'] === null || this.form.value['grupoFornecedor'] === undefined ? '' : this.form.value['grupoFornecedor'],
              ID_FORN: this.form.value['fornecedor'] === null || this.form.value['fornecedor'] === undefined ? '' : this.form.value['fornecedor'],
              IN_STAT: '',
              NR_PAGE_INIC: '',
              TT_REGI_PAGI: '',
              ORDE_BY: '',
              ORDE_TYPE: '',
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: parseInt(this.idUsuario)
            });
          }
        }, {
          key: "getFornecedores",
          value: function getFornecedores() {
            var _this16 = this;

            var params = this.form.get('grupoFornecedor').value;
            this.loaderNavbar = true;
            this.fornecedores = [];

            if (this.form.get('grupoFornecedor').status === 'VALID') {
              this.service.getAssociacaoGrupoFornecedorFornecedoresFiltro(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this16.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body']['responseCode'] === 200) {
                    _this16.fornecedores = res['body']['result'];

                    _this16.form.get('fornecedor').reset();

                    _this16.form.get('fornecedor').enable();
                  } else if (res['body']['responseCode'] === 404) {
                    _this16.form.get('fornecedor').reset();

                    _this16.form.get('fornecedor').disable();

                    _this16.pnotifyService.notice(res['body']['message']);
                  }
                }
              }, function (error) {
                _this16.form.get('fornecedor').reset();

                _this16.form.get('fornecedor').disable();
              });
            } else {
              this.form.get('fornecedor').reset();
              this.form.get('fornecedor').disable();
            }
          }
        }, {
          key: "getGrupoFornecedores",
          value: function getGrupoFornecedores() {
            var _this17 = this;

            var params = this.form.get('integrador').value;
            this.loaderNavbar = true;
            this.fornecedores = [];

            if (this.form.get('integrador').status === 'VALID') {
              this.service.getGrupoFornecedoresFiltro(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this17.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body']['responseCode'] === 200) {
                    _this17.grupoFornecedores = res['body']['result'];

                    _this17.form.get('grupoFornecedor').reset();

                    _this17.form.get('grupoFornecedor').enable();
                  } else if (res['body']['responseCode'] === 404) {
                    _this17.form.get('grupoFornecedor').reset();

                    _this17.form.get('grupoFornecedor').disable();

                    _this17.pnotifyService.notice(res['body']['message']);
                  }
                }
              }, function (error) {
                _this17.form.get('grupoFornecedor').reset();

                _this17.form.get('fornecedor').reset();

                _this17.form.get('grupoFornecedor').disable();

                _this17.form.get('fornecedor').disable();
              });
            } else {
              this.form.get('grupoFornecedor').reset();
              this.form.get('fornecedor').reset();
              this.form.get('grupoFornecedor').disable();
              this.form.get('fornecedor').disable();
            }
          }
        }, {
          key: "getIntegradores",
          value: function getIntegradores() {
            var _this18 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.integradores = [];
            this.service.getIntegradoresPedidos(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this18.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this18.integradores = res['body']['result'];
              }
            }, function (error) {
              _this18.pnotifyService.error('Erro ao carregar fornecedor');
            });
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this19 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.service.getAssociacaoGrupoFornecedoresIntPed(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this19.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this19.dados = res['body']['result'];
                  _this19.loading = true;
                  _this19.noResult = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this19.noResult = true;

                  _this19.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this19.pnotifyService.error('Erro ao carregar dados');

              _this19.noResult = true;
            });
          }
        }, {
          key: "getDadosExcel",
          value: function getDadosExcel(params) {
            var _this20 = this;

            this.loaderNavbar = true;
            this.dadosExcel = [];
            this.service.getAssociacaoGrupoFornecedorFornecedores(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this20.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                  _this20.dadosExcel = res['body']['result'];

                  _this20.pnotifyService.success(_this20.dadosExcel);
                } else if (res['body']['responseCode'] == 404) {
                  _this20.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this20.loadingDetalhes = false;

              _this20.pnotifyService.error('Erro ao gerar Excel');
            });
          }
        }, {
          key: "getGrupoFornecedoresDetalhes",
          value: function getGrupoFornecedoresDetalhes(params) {
            var _this21 = this;

            this.loadingDetalhes = false;
            this.noResultDetalhes = false;
            this.loaderNavbar = true;
            this.dadosDetalhes = [];
            this.service.getAssociacaoGrupoFornecedorFornecedores(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this21.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                  _this21.dadosDetalhes = res['body']['result'];
                  _this21.noResultDetalhes = false;
                  _this21.loadingDetalhes = true;
                } else if (res['body']['responseCode'] == 404) {
                  _this21.loadingDetalhes = false;
                  _this21.noResultDetalhes = true;

                  _this21.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this21.loadingDetalhes = false;

              _this21.pnotifyService.error('Erro ao carregar fornecedor');
            });
          }
        }, {
          key: "openTab",
          value: function openTab(i) {
            i.select = !i.select;
            this.getGrupoFornecedoresDetalhes({
              ID_ASSO_GRUP_FORN_FORN: '',
              ID_INTE_PEDI: '',
              ID_GRUP_FORN: i['ID_GRUP_FORN'],
              ID_FORN: '',
              IN_STAT: '',
              NR_PAGE_INIC: '',
              TT_REGI_PAGI: '',
              ORDE_BY: '',
              ORDE_TYPE: '',
              IN_GERA_EXCE: '',
              ID_USUA: ''
            });
            this.compressedTable = true;
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.dados.forEach(function (e) {
              e.select = false;
            });
            this.selectedRow = false;
            this.compressedTable = false;
          }
        }, {
          key: "onAdd",
          value: function onAdd(item) {
            this.router.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams({
                item: {
                  ID: item.ID,
                  edit: true
                }
              })
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
          /* Ordenação */

        }, {
          key: "sort",
          value: function sort(key) {
            this.key = key;
            this.reverse = !this.reverse;
          }
          /* Ordenação */

          /* Paginação Tabela Principal*/

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoCadastrosGrupoFornecedoresListaComponent;
      }();

      AbastecimentoCadastrosGrupoFornecedoresListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]
        }, {
          type: _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosGrupoFornecedoresService"]
        }];
      };

      AbastecimentoCadastrosGrupoFornecedoresListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], _grupo_fornecedores_service__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosGrupoFornecedoresService"]])], AbastecimentoCadastrosGrupoFornecedoresListaComponent);
      /***/
    },

    /***/
    "zXAD":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/grupo-fornecedores/cadastro/cadastro.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zXAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button\n    type=\"button\"\n    (click)=\"onSave()\"\n    [disabled]=\"form.status == 'INVALID'\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-4\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"grupo\">Grupo de Fornecedor</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"grupo\"\n                formControlName=\"grupo\"\n                placeholder=\"Digite...\"\n                [ngClass]=\"onFieldError('grupo') + ' ' + onFieldRequired('grupo')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('grupo')\" message=\"Grupo de Fornecedor é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"situacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"situacao\"\n                formControlName=\"situacao\"\n                [ngClass]=\"onFieldRequired('situacao')\">\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('situacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"integrador\">Integrador</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [multiple]=\"false\"\n                [items]=\"integradores\"\n                [virtualScroll]=\"true\"\n                [hideSelected]=\"true\"\n                [closeOnSelect]=\"true\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"NM_APOI_INTE_PEDI\"\n                bindValue=\"ID\"\n                formControlName=\"integrador\"\n                [ngClass]=\"onFieldRequired('integrador')\">\n              >\n              </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('integrador')\" message=\"Integrador é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\" *ngIf=\"enableCadastroFornecedor\">\n            <div class=\"form-group col\">\n              <label for=\"fornecedores\">Fornecedor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [multiple]=\"false\"\n                [items]=\"fornecedores\"\n                [virtualScroll]=\"true\"\n                [hideSelected]=\"true\"\n                [closeOnSelect]=\"true\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"full_name\"\n                bindValue=\"ID\"\n                formControlName=\"fornecedor\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div\n      class=\"row justify-content-center mt-3\"\n      [hidden]=\"!loadingDadosFornecedores\"\n    >\n      <div class=\"form-group col-md-8\">\n        <label for=\"depositosVinculados\">Fornecedores Vinculados</label>\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr class=\"text-center\">\n              <th scope=\"col\">Cód.</th>\n              <th scope=\"col\">Razão Social</th>\n              <th scope=\"col\">Nome Fantasia</th>\n              <th scope=\"col\">CNPJ do Fornecedor</th>\n              <th scope=\"col\" class=\"hover\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of dadosFornecedores\">\n              <td class=\"text-center\"> {{ item.ID_REFE_ERP }} </td>\n              <td class=\"text-center\"> {{ item.NM_RAZA_SOCI ? item.NM_RAZA_SOCI : '-' }} </td>\n              <td class=\"text-center\"> {{ item.NM_FANT }} </td>\n              <td class=\"text-center\"> {{ item.NR_CNPJ_CPF ? (item.NR_CNPJ_CPF | cnpj) : '-' }} </td>\n              <td style=\"width: 40px;\">\n                <button\n                  class=\"btn-icon-sm\"\n                  style=\"color: red;\"\n                  tooltip=\"Excluir\"\n                  (click)=\"onDelete(item)\"\n                >\n                  <i class=\"far fa-trash-alt\"></i>\n                </button>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=grupo-fornecedores-grupo-fornecedores-module-es5.js.map