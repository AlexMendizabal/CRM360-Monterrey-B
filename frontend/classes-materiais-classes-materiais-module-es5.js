(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classes-materiais-classes-materiais-module"], {
    /***/
    "9+u2":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosClassesMateriaisComponent */

    /***/
    function u2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisComponent", function () {
        return AbastecimentoCadastrosClassesMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_classes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./classes-materiais.component.html */
      "c8EI");
      /* harmony import */


      var _classes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./classes-materiais.component.scss */
      "qTC0");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _classes_materiais_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./classes-materiais.service */
      "fSeu");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");

      var AbastecimentoCadastrosClassesMateriaisComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosClassesMateriaisComponent(activatedRoute, router, formBuilder, pnotifyService, confirmModalService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosClassesMateriaisComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.loading = false;
          this.noResult = false;
          this.loadingLogs = false;
          this.noResultLogs = false;
          this.loaderModal = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.data = [];
          this.dataLogs = [];
          this.dataExcel = '';
          this.situations = [{
            ID: '0',
            NM_SITU: 'Inativo'
          }, {
            ID: '1',
            NM_SITU: 'Ativo'
          }];
          /* Ordenação principal*/

          this.reverse = false;
          this.key = 'NM_CLAS';
          /* Ordenação principal*/

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_CLAS';
          /* Ordenação modal */

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          /* Paginação Modal*/

          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          /* Paginação Modal*/

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
            ID_LINH: [null],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosClassesMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Classes de Materiais');
            this.setDisabledItemsForm();
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.getLinhas();
          }
        }, {
          key: "setDisabledItemsForm",
          value: function setDisabledItemsForm() {
            this.form.get('ID_SUB_LINH').disable();
            this.form.get('ID_CLAS').disable();
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
                descricao: 'Classes de Materiais'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this3.routerService.getBase64UrlParams(queryParams);

                _this3.search(_response);

                _this3.setFormValues(_response);
              }
            });
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this4 = this;

            var _a, _b;

            var ID_LINH = (_a = queryParams['ID_LINH']) !== null && _a !== void 0 ? _a : '';
            /* classes */

            if (Object.keys(ID_LINH).length > 0) {
              var paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_b = queryParams['ID_SUB_LINH']) !== null && _b !== void 0 ? _b : "",
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getClasses(paramsClasse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                return _this4.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this4.classes = res['body']['result'];

                      _this4.form.get('ID_CLAS').enable();
                    }
                  }
                }
              }, function (error) {
                _this4.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.form.get('ID_CLAS').disable();
            }
            /* sublinhas */


            if (Object.keys(ID_LINH).length > 0) {
              var paramsSubLinha = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getSubLinhas(paramsSubLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                return _this4.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status == 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this4.subLinhas = res['body']['result'];

                      _this4.form.get('ID_SUB_LINH').enable();
                    }
                  }
                }
              }, function (error) {
                _this4.pnotifyService.error('Erro ao carregar subLinha');
              });
            } else {
              this.form.get('ID_SUB_LINH').disable();
            }

            this.form.patchValue(queryParams);
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this5 = this;

            var params = {
              idSituacao: 1
            };
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this5.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this5.linhas = res['body']['result'];
                }
              }
            }, function (error) {
              _this5.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this6 = this;

            this.loaderNavbar = true;
            this.subLinhas = [];

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
              };
              this.service.getSubLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                return _this6.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this6.subLinhas = res['body']['result'];

                      _this6.form.get('ID_SUB_LINH').reset();

                      _this6.form.get('ID_SUB_LINH').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this6.form.get('ID_SUB_LINH').reset();

                      _this6.form.get('ID_SUB_LINH').disable();

                      _this6.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this6.pnotifyService.error('Erro ao carregar sublinhas');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_SUB_LINH').reset();
              this.form.get('ID_SUB_LINH').disable();
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this7 = this;

            this.classes = [];
            this.loaderNavbar = true;

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSubLinha = this.form.get('ID_SUB_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao: idSituacao
              };
              this.service.getClasses(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                return _this7.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this7.classes = res['body']['result'];

                      _this7.form.get('ID_CLAS').reset();

                      _this7.form.get('ID_CLAS').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this7.form.get('ID_CLAS').reset();

                      _this7.form.get('ID_CLAS').disable();
                    }
                  }
                }
              }, function (error) {
                _this7.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_CLAS').reset();
              this.form.get('ID_CLAS').disable();
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
            this.search(this.getParams());
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.data = [];
            this.service.getClassesMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this8.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  if (res['body']['responseCode'] == 200) {
                    _this8.loading = true;
                    _this8.noResult = false;
                    _this8.data = res['body']['result'];
                  } else if (res['body']['responseCode'] == 404) {
                    _this8.noResult = true;

                    _this8.pnotifyService.notice("Não há itens a serem exibidos");
                  }
                }
              }
            }, function (error) {
              _this8.noResult = true;

              _this8.pnotifyService.error("Erro ao carregar Classes de Materiais");
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            var _this9 = this;

            var stat = item.IN_STAT == 1 ? 0 : 1;
            item.ID_USUA = parseInt(this.idUsuario);
            item.ID_CLAS = item.ID;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
              _this9.loaderNavbar = true;
              item.IN_STAT = stat;
              return _this9.service.postClasses(item);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe(function (success) {
              _this9.pnotifyService.success();
            }, function (error) {
              item.IN_STAT = item.IN_STAT == 1 ? 0 : 1;

              _this9.pnotifyService.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onLogs",
          value: function onLogs(item) {
            console.log(item);
            var params = {
              ID_CLAS: item['ID']
            };
            this.getLogs(params);
          }
        }, {
          key: "getLogs",
          value: function getLogs(params) {
            var _this10 = this;

            this.loaderNavbar = true;
            this.loadingLogs = false;
            this.loaderModal = false;
            this.dataLogs = [];
            this.service.getClassesMateriaisLogs(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this10.loaderNavbar = false, _this10.loaderModal = true;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                  if (res['body']['responseCode'] == 200) {
                    _this10.loadingLogs = true;
                    _this10.noResultLogs = false;
                    _this10.dataLogs = res['body']['result'];
                  } else if (res['body']['responseCode'] == 404) {
                    _this10.noResultLogs = true;

                    _this10.pnotifyService.notice("Não há itens a serem exibidos");
                  }
                }
              }
            }, function (error) {
              _this10.noResultLogs = true;

              _this10.pnotifyService.error("Erro ao carregar Classes de Materiais");
            });
          }
        }, {
          key: "getSearchExcel",
          value: function getSearchExcel(params) {
            var _this11 = this;

            this.loaderNavbar = true;
            this.dataExcel = '';
            this.service.getClassesMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this11.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this11.dataExcel = res['body']['result'];

                  _this11.pnotifyService.success(_this11.dataExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this11.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this11.pnotifyService.error('Erro ao carregar dados para excel');
            });
          }
        }, {
          key: "OnExcel",
          value: function OnExcel() {
            var params = this.getParams();
            params['IN_GERA_RELA_EXCE'] = 1;
            params['ID_USUA'] = this.idUsuario;
            this.getSearchExcel(params);
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
          /* Paginação */

          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
          /* Paginação Modal*/

          /* Ordenação Modal*/

        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
          /* Ordenação Modal*/

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
        }]);

        return AbastecimentoCadastrosClassesMateriaisComponent;
      }();

      AbastecimentoCadastrosClassesMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: _classes_materiais_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosClassesMateriaisService"]
        }];
      };

      AbastecimentoCadastrosClassesMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'classes-materiais',
        template: _raw_loader_classes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_classes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], _classes_materiais_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosClassesMateriaisService"]])], AbastecimentoCadastrosClassesMateriaisComponent);
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
    "c8EI":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c8EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Classes de Materiais\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status == 'INVALID'\"\n  >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"OnExcel()\"\n    [disabled]=\"form.status == 'INVALID'\"\n  >\n    Exportar Excel\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"linhas\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getSubLinhas() + '' + getClasses()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_LINH\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"subLinhas\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getClasses()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_SUB_LINH\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"classes\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"ID_CLAS\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"situacoes\">Situação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"situations\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SITU\"\n            bindValue=\"ID\"\n            formControlName=\"IN_STAT\"\n            [ngClass]=\"\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\n            \"\n            >\n            <invalid-form-control\n              [show]=\"onFieldInvalid('IN_STAT')\"\n              message=\"Situação é obrigatório.\"\n            >\n            </invalid-form-control>\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n  <div class=\"table-responsive\" *ngIf=\"loading\">\n    <custom-table [config]=\"tableConfig\">\n      <ng-template let-thead #thead>\n        <tr class=\"text-center\">\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('ID_REFE_ERP')\">\n            Código\n            <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n            <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n          </th>\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\n            Classe\n            <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n            <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n          </th>\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\n            Sublinha\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n          </th>\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n            Linha\n            <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n            <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n          </th>\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\n        </tr>\n      </ng-template>\n      <ng-template let-tbody #tbody>\n        <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\n          <td nowrap class=\"text-center\" [ngClass]=\"item.IN_STAT == 0 ? 'border-danger' : 'border-success'\">{{ item.ID_REFE_ERP }}</td>        \n          <td nowrap class=\"text-center\">{{ item.NM_CLAS }}</td>        \n          <td nowrap class=\"text-center\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>         \n          <td nowrap class=\"text-center\">{{ item.NM_LINH }}</td>              \n          <td nowrap class=\"text-center\" width=\"4%\">\n            <div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\n                (click)=\"onEdit(item)\"\n              >\n                <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\n              </button>\n            </div>\n          </td>       \n          <td nowrap  class=\"text-center\" width=\"4%\">\n            <div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Logs\"\n                (click)=\"onLogs(item) + ' ' + lgModal.show()\"\n              >\n                <i class=\"fas fa-external-link-alt text-primary\"></i>\n              </button>\n            </div>\n          </td>       \n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  <div class=\"col-12 mt-2\" *ngIf=\"data.length > itemsPerPage && loading\">\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\n    <div class=\"d-flex\">\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"data?.length\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n<div\n  bsModal\n  #lgModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n>\n  <div class=\"modal-dialog modal-xl\" [hidden]=\"!loaderModal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          LOGS CLASSES DE MATERIAIS\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"table-responsive\">\n          <custom-table *ngIf=\"loadingLogs\">\n            <ng-template #thead let-thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\" (click)=\"sortA('ID_REFE_ERP')\">\n                  Código\n                  <span *ngIf=\"keyA == 'ID_REFE_ERP'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'ID_REFE_ERP'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_CLAS')\">\n                  Classe\n                  <span *ngIf=\"keyA == 'NM_CLAS'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_CLAS'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_SUB_LINH')\">\n                  Sub Linha\n                  <span *ngIf=\"keyA == 'NM_SUB_LINH'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_SUB_LINH'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_LINH')\">\n                  Linha\n                  <span *ngIf=\"keyA == 'NM_LINH'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_LINH'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('DS_STAT')\">\n                  Situação\n                  <span *ngIf=\"keyA == 'DS_STAT'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DS_STAT'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('DT_ACAO')\">\n                  Data Ação\n                  <span *ngIf=\"keyA == 'DT_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DT_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_ACAO')\">\n                  Ação\n                  <span *ngIf=\"keyA == 'NM_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" (click)=\"sortA('NM_USUA')\">\n                  Usuário\n                  <span *ngIf=\"keyA == 'NM_USUA'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_USUA'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of dataLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\n                <td class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\n                <td class=\"text-center\">{{ item.NM_CLAS }}</td>\n                <td class=\"text-center\">{{ item.ID_SUB_LINH ? item.ID_SUB_LINH : '-' }}</td>\n                <td class=\"text-center\">{{ item.NM_LINH }}</td>\n                <td class=\"text-center\">{{ item.DS_STAT }}</td>\n                <td class=\"text-center\">\n                  {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\n                </td>\n                <td class=\"text-center\">{{ item.NM_ACAO }}</td>\n                <td class=\"text-center\">{{ item.NM_USUA }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <div class=\"col-12 mt-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dataLogs?.length }}\n          <pagination\n            [maxSize]=\"10\"\n            [totalItems]=\"dataLogs?.length\"\n            (pageChanged)=\"onPageChangedA($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPageA\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\"\n          >\n          </pagination>\n        </div>\n        <div\n          *ngIf=\"noResultLogs\"\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\n          style=\"height: 80%;\"\n        >\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "fSeu":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.service.ts ***!
      \************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosClassesMateriaisService */

    /***/
    function fSeu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisService", function () {
        return AbastecimentoCadastrosClassesMateriaisService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AbastecimentoCadastrosClassesMateriaisService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosClassesMateriaisService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosClassesMateriaisService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosClassesMateriaisService, [{
          key: "getLinhas",
          value: function getLinhas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              params: {
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/sub-linhas"), {
              params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                ID_SUB_LINH: params['idSubLinha'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }, {
          key: "getClassesMateriais",
          value: function getClassesMateriais(_params) {
            var _a, _b, _c;

            var params = {
              ID_LINH: _params['ID_LINH'] ? _params['ID_LINH'].toString() : '',
              ID_SUB_LINH: _params['ID_SUB_LINH'] ? _params['ID_SUB_LINH'].toString() : '',
              ID_CLAS: _params['ID_CLAS'] ? _params['ID_CLAS'].toString() : '',
              IN_STAT: (_a = _params['IN_STAT']) !== null && _a !== void 0 ? _a : '',
              IN_GERA_RELA_EXCE: (_b = _params['IN_GERA_RELA_EXCE']) !== null && _b !== void 0 ? _b : '',
              ID_USUA: (_c = _params['ID_USUA']) !== null && _c !== void 0 ? _c : ''
            };
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getClassesMateriaisLogs",
          value: function getClassesMateriaisLogs(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/classes-auditoria"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postClasses",
          value: function postClasses(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/classe-atualizar"), record);
          }
        }]);

        return AbastecimentoCadastrosClassesMateriaisService;
      }();

      AbastecimentoCadastrosClassesMateriaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosClassesMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AbastecimentoCadastrosClassesMateriaisService);
      /***/
    },

    /***/
    "iFAl":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosClassesMateriaisRoutingModule */

    /***/
    function iFAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisRoutingModule", function () {
        return AbastecimentoCadastrosClassesMateriaisRoutingModule;
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


      var _classes_materiais_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./classes-materiais.component */
      "9+u2");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _classes_materiais_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosClassesMateriaisComponent"]
        }]
      }];

      var AbastecimentoCadastrosClassesMateriaisRoutingModule = function AbastecimentoCadastrosClassesMateriaisRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosClassesMateriaisRoutingModule);
      };

      AbastecimentoCadastrosClassesMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosClassesMateriaisRoutingModule);
      /***/
    },

    /***/
    "lJB2":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosClassesMateriaisModule */

    /***/
    function lJB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosClassesMateriaisModule", function () {
        return AbastecimentoCadastrosClassesMateriaisModule;
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


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var _classes_materiais_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./classes-materiais-routing.module */
      "iFAl");
      /* harmony import */


      var _classes_materiais_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./classes-materiais.component */
      "9+u2");

      var AbastecimentoCadastrosClassesMateriaisModule = function AbastecimentoCadastrosClassesMateriaisModule() {
        _classCallCheck(this, AbastecimentoCadastrosClassesMateriaisModule);
      };

      AbastecimentoCadastrosClassesMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_classes_materiais_component__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosClassesMateriaisComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _classes_materiais_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosClassesMateriaisRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"]]
      })], AbastecimentoCadastrosClassesMateriaisModule);
      /***/
    },

    /***/
    "qTC0":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/classes-materiais/classes-materiais.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qTC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvY2xhc3Nlcy1tYXRlcmlhaXMvY2xhc3Nlcy1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=classes-materiais-classes-materiais-module-es5.js.map