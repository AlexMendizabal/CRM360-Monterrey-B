(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manutencao-materiais-manutencao-materiais-module"], {
    /***/
    "0RVd":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/modal-logs/modal-logs.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RVd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWFudXRlbmNhby1tYXRlcmlhaXMvbW9kYWwtbG9ncy9tb2RhbC1sb2dzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "645L":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/manutencao-materiais.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoMateriaisComponent */

    /***/
    function L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoMateriaisComponent", function () {
        return AbastecimentoCadastrosManutencaoMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manutencao_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manutencao-materiais.component.html */
      "LD1e");
      /* harmony import */


      var _manutencao_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manutencao-materiais.component.scss */
      "zQZ5");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _manutencao_materiais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./manutencao-materiais.service */
      "WFEz");

      var AbastecimentoCadastrosManutencaoMateriaisComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosManutencaoMateriaisComponent(activatedRoute, router, formBuilder, pnotifyService, confirmModalService, activityService, routerService, titleService, modalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoMateriaisComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.activityService = activityService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.modalService = modalService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.loading = false;
          this.noResult = false;
          this.modalMaterialBool = false;
          this.modalLogsBool = false;
          this.compressedTable = false;
          this.noResultDetalhes = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUser = this.currentUser['info']['id'];
          this.data = [{
            ID: 1,
            DS_TIPO_MATE: "DISTRIBUIDORA",
            DS_MATE: "CA-50 10,00MM",
            DS_STAT: "Ativa",
            CODE_MATE: 15125,
            IN_STAT: 0,
            NM_CLAS: "CA-50",
            NM_LINH: "CIVIL",
            NM_SUB_LINH: null,
            VOL_VENDA: 300,
            TT_CART: 120,
            ESTO_ATUAL: 30,
            TT_PLAN_CORT: 0,
            DS_PERF_INAT: 'Inativação potencial',
            ID_PERF_INAT: 1
          }, {
            ID: 2,
            DS_TIPO_MATE: "DISTRIBUIDORA",
            DS_MATE: "CA-50 10,00MM",
            DS_STAT: "Ativa",
            CODE_MATE: 15125,
            IN_STAT: 1,
            NM_CLAS: "CA-50",
            NM_LINH: "CIVIL",
            NM_SUB_LINH: null,
            VOL_VENDA: 300,
            TT_CART: 120,
            ESTO_ATUAL: 30,
            TT_PLAN_CORT: 0,
            DS_PERF_INAT: 'Inativação imediata',
            ID_PERF_INAT: 0
          }, {
            ID: 3,
            DS_TIPO_MATE: "DISTRIBUIDORA",
            DS_MATE: "CA-50 10,00MM",
            DS_STAT: "Ativa",
            CODE_MATE: 15125,
            IN_STAT: 1,
            NM_CLAS: "CA-50",
            NM_LINH: "CIVIL",
            NM_SUB_LINH: null,
            VOL_VENDA: 300,
            TT_CART: 120,
            ESTO_ATUAL: 30,
            TT_PLAN_CORT: 0,
            DS_PERF_INAT: 'Em atividade',
            ID_PERF_INAT: 2
          }];
          this.dataDetail = [{
            NM_EMPR: "MANETONI - TIETE",
            NM_DEPO: "TIETE",
            VOLU_VEND: 125.58,
            VOLU_CART: 125.58,
            PLAN_CORT: 526.58
          }, {
            NM_EMPR: "MANETONI - TAIPAS",
            NM_DEPO: "TAIPAS",
            VOLU_VEND: 125.58,
            VOLU_CART: 125.58,
            PLAN_CORT: 526.58
          }];
          this.modal = [];
          this.itemMaterial = [];
          this.situations = [{
            ID: '0',
            NM_SITU: 'Inativo'
          }, {
            ID: '1',
            NM_SITU: 'Ativo'
          }];
          this.unactivatedPerfil = [{
            ID: '0',
            NM_PERFI_INAT: 'Inativação imediata'
          }, {
            ID: '1',
            NM_PERFI_INAT: 'Inativação potencial'
          }, {
            ID: '2',
            NM_PERFI_INAT: 'Em atividade'
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
            text: 'Em atividade',
            color: 'blue'
          }, {
            text: 'Inativação potencial',
            color: 'yellow'
          }, {
            text: 'Inativação imediata',
            color: 'red'
          }];
          this.form = this.formBuilder.group({
            ID_TIPO_MATE: [null],
            ID_LINH: [null],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_PERFI_INAT: [null]
          });
          this.formCheck = this.formBuilder.group({
            ITEM_MASS: [null]
          });
        }

        _createClass(AbastecimentoCadastrosManutencaoMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Manutenção de Materiais');
            this.setDisabledItemsForm();
            this.getTiposMateriais();
            this.getLinhas();
            this.recordAccess();
            this.setBreadCrumb();
            this.checkRouterParams();
          }
        }, {
          key: "setDisabledItemsForm",
          value: function setDisabledItemsForm() {
            this.form.get('ID_SUB_LINH').disable();
            this.form.get('ID_CLAS').disable();
            this.form.get('ID_PERFI_INAT').disable();
          }
        }, {
          key: "setActivedPerfil",
          value: function setActivedPerfil($event) {
            if ($event.ID == 0) {
              this.form.get('ID_PERFI_INAT').reset();
              this.form.get('ID_PERFI_INAT').disable();
              this.form.get('ID_PERFI_INAT').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator);
            } else {
              this.form.get('ID_PERFI_INAT').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
              this.form.get('ID_PERFI_INAT').reset();
              this.form.get('ID_PERFI_INAT').enable();
            }
          }
        }, {
          key: "recordAccess",
          value: function recordAccess() {
            this.activityService.registrarAcesso().subscribe();
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
                descricao: 'Manutenção de Materiais'
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
                ID_LINH: queryParams['ID_LINH'],
                ID_SUB_LINH: (_b = queryParams['ID_SUB_LINH']) !== null && _b !== void 0 ? _b : "",
                IN_STAT: 1
              };
              this.loaderNavbar = true;
              this.service.getClasses(paramsClasse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
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
                ID_LINH: queryParams['ID_LINH'],
                IN_START: 1
              };
              this.loaderNavbar = true;
              this.service.getSubLinhas(paramsSubLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
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
          key: "getTiposMateriais",
          value: function getTiposMateriais() {
            var _this5 = this;

            var params = {
              IN_STAT: 1
            };
            this.loaderNavbar = true;
            this.tiposMateriais = [];
            this.service.getTiposMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this5.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this5.tiposMateriais = res['body']['result'];
                }
              }
            }, function (error) {
              _this5.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this6 = this;

            var params = {
              IN_STAT: 1
            };
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this6.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this6.linhas = res['body']['result'];
                }
              }
            }, function (error) {
              _this6.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this7 = this;

            this.loaderNavbar = true;
            this.subLinhas = [];

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var ID_LINH = this.form.get('ID_LINH').value;
              var IN_STAT = 1;
              var params = {
                ID_LINH: ID_LINH,
                IN_STAT: IN_STAT
              };
              this.service.getSubLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this7.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this7.subLinhas = res['body']['result'];

                      _this7.form.get('ID_SUB_LINH').reset();

                      _this7.form.get('ID_SUB_LINH').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this7.form.get('ID_SUB_LINH').reset();

                      _this7.form.get('ID_SUB_LINH').disable();

                      _this7.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this7.pnotifyService.error('Erro ao carregar sublinhas');
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
            var _this8 = this;

            this.classes = [];
            this.loaderNavbar = true;

            if (this.form.value['ID_LINH'] != null && this.form.value['ID_LINH'].length > 0) {
              var ID_LINH = this.form.get('ID_LINH').value;
              var ID_SUB_LINH = this.form.get('ID_SUB_LINH').value;
              var IN_STAT = 1;
              var params = {
                ID_LINH: ID_LINH,
                ID_SUB_LINH: ID_SUB_LINH !== null && ID_SUB_LINH !== void 0 ? ID_SUB_LINH : "",
                IN_STAT: IN_STAT
              };
              this.service.getClasses(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this8.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this8.classes = res['body']['result'];

                      _this8.form.get('ID_CLAS').reset();

                      _this8.form.get('ID_CLAS').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this8.form.get('ID_CLAS').reset();

                      _this8.form.get('ID_CLAS').disable();
                    }
                  }
                }
              }, function (error) {
                _this8.pnotifyService.error('Erro ao carregar Classes');
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
          key: "onSave",
          value: function onSave() {
            this.confirmChange();
          }
        }, {
          key: "onEditMass",
          value: function onEditMass() {
            var itemMassaBool = this.formCheck.get('ITEM_MASS').value;

            if (itemMassaBool) {
              this.data.forEach(function (e) {
                e.IN_STAT = 1;
              });
            } else {
              this.data.forEach(function (e) {
                e.IN_STAT = 0;
              });
            }
          }
        }, {
          key: "OnExcel",
          value: function OnExcel() {
            var params = this.getParams();
            params['IN_GERA_RELA_EXCE'] = 1;
            params['ID_USUA'] = this.idUser; //this.getSearchExcel(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            this.loaderNavbar = true;
            this.loading = false;
            this.loading = true;
            this.noResult = false;
            this.loaderNavbar = false;
          }
        }, {
          key: "setIconUnabled",
          value: function setIconUnabled(item) {
            var icon;

            if (item.ID_PERF_INAT == 0) {
              icon = 'fas fa-circle text-danger';
            }

            if (item.ID_PERF_INAT == 1) {
              icon = 'fas fa-circle text-warning';
            }

            if (item.ID_PERF_INAT == 2) {
              icon = 'fas fa-circle text-info';
            }

            return icon;
          }
        }, {
          key: "onDetail",
          value: function onDetail(item) {
            item.select = !item.select;
            this.compressedTable = !this.compressedTable;
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            var stat = item.IN_STAT == 0 ? 1 : 0; // item.ID_USUA = parseInt(this.idUsuario);
            // item.ID_CLAS = item.ID;

            item.IN_STAT = stat;
            this.formCheck.get('ITEM_MASS').setValue(false); //   .asObservable()
            //   .pipe(
            //     take(1),
            //     switchMap((result) => {
            //       if (!result) return EMPTY;
            //       this.loaderNavbar = true;
            //       return this.service.postClasses(item);
            //     }),
            //     finalize(() => {
            //       this.loaderNavbar = false;
            //     })
            //   )
            //   .subscribe(
            //     (success: any) => {
            //       this.pnotifyService.success();
            //     },
            //     (error: any) => {
            //       item.IN_STAT = item.IN_STAT == 1 ? 0 : 1;
            //       this.pnotifyService.error();
            //     }
            //   );
          }
        }, {
          key: "confirmChange",
          value: function confirmChange() {
            // if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a alteração dos registros?', 'Cancelar', 'Confirmar'); // return this.confirmModalService.showConfirm(
            //   'inactivate',
            //   'Confirmar inativação',
            //   'Deseja realmente prosseguir com a inativação do Material?',
            //   'Cancelar',
            //   'Confirmar'
            // );
          }
        }, {
          key: "onCloseDetail",
          value: function onCloseDetail() {
            this.data.forEach(function (e) {
              e.select = false;
            });
            this.compressedTable = false;
          }
        }, {
          key: "getLogsModal",
          value: function getLogsModal(item) {
            this.itemMaterial = item;
            this.modal.title = "LOGS";
            this.modalLogsBool = true;
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

        return AbastecimentoCadastrosManutencaoMateriaisComponent;
      }();

      AbastecimentoCadastrosManutencaoMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: _manutencao_materiais_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosManutencaoMateriaisService"]
        }];
      };

      AbastecimentoCadastrosManutencaoMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'manutencao-materiais',
        template: _raw_loader_manutencao_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manutencao_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _manutencao_materiais_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosManutencaoMateriaisService"]])], AbastecimentoCadastrosManutencaoMateriaisComponent);
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
    "Hrqj":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/manutencao-materiais-routing.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoMateriaisRoutingModule */

    /***/
    function Hrqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoMateriaisRoutingModule", function () {
        return AbastecimentoCadastrosManutencaoMateriaisRoutingModule;
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


      var _manutencao_materiais_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manutencao-materiais.component */
      "645L");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _manutencao_materiais_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosManutencaoMateriaisComponent"]
        }]
      }];

      var AbastecimentoCadastrosManutencaoMateriaisRoutingModule = function AbastecimentoCadastrosManutencaoMateriaisRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosManutencaoMateriaisRoutingModule);
      };

      AbastecimentoCadastrosManutencaoMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosManutencaoMateriaisRoutingModule);
      /***/
    },

    /***/
    "LD1e":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/manutencao-materiais/manutencao-materiais.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LD1e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"MANUTENÇÃO DE Materiais\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status == 'INVALID'\"\n  >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"OnExcel()\"\n    [disabled]=\"true\"\n  >\n    Exportar Excel\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSave()\"\n    [disabled]=\"form.status == 'INVALID' || !loading\"\n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_TIPO_MATE\">Tipo Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"tiposMateriais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"ID_TIPO_MATE\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"linhas\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getSubLinhas() + '' + getClasses()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_LINH\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"subLinhas\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getClasses()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_SUB_LINH\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"classes\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"ID_CLAS\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"situacoes\">Situação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"situations\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SITU\"\n            bindValue=\"ID\"\n            formControlName=\"IN_STAT\"\n            (change)=\"setActivedPerfil($event)\"\n            [ngClass]=\"\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\n            \"\n            >\n            <invalid-form-control\n              [show]=\"onFieldInvalid('IN_STAT')\"\n              message=\"Situação é obrigatório.\"\n            >\n            </invalid-form-control>\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_PERFI_INAT\">Perfil de Inativação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"unactivatedPerfil\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_PERFI_INAT\"\n            bindValue=\"ID\"\n            formControlName=\"ID_PERFI_INAT\"\n            [ngClass]=\"\n              onFieldError('ID_PERFI_INAT') + ' ' + onFieldRequired('ID_PERFI_INAT')\n            \"\n            >\n            <invalid-form-control\n              [show]=\"onFieldInvalid('ID_PERFI_INAT')\"\n              message=\"Perfil de inativação é obrigatório.\"\n            >\n            </invalid-form-control>\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n  <div class=\"row\">\n    <div\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\n    >\n    <div class=\"table-responsive\" *ngIf=\"loading\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template let-thead #thead>\n          <tr class=\"text-center\">\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\">\n              <div [formGroup]=\"formCheck\"\n                class=\"custom-control custom-checkbox mr-sm-2 hover\"\n                >\n                <input\n                  type=\"checkbox\"\n                  class=\"custom-control-input hover\"\n                  id=\"itemMass\"\n                  formControlName=\"ITEM_MASS\"\n                  [checked]=\"false\"\n                  (change)=\"onEditMass()\"\n                >\n                <label class=\"custom-control-label hover\" for=\"itemMass\"></label>\n              </div>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DS_TIPO_MATE')\">\n              Tipo Material\n              <span *ngIf=\"key == 'DS_TIPO_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'DS_TIPO_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n              Linha\n              <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\n              Sublinha\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\n              Classe\n              <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('CODE_MATE')\">\n              Cod. Material\n              <span *ngIf=\"key == 'CODE_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'CODE_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DS_MATE')\">\n              Material\n              <span *ngIf=\"key == 'DS_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'DS_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('VOL_VENDA')\" *ngIf=\"!compressedTable\">\n              Volume Vendas\n              <span *ngIf=\"key == 'VOL_VENDA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'VOL_VENDA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('ESTO_ATUAL')\" *ngIf=\"!compressedTable\">\n              Est. Atual\n              <span *ngIf=\"key == 'ESTO_ATUAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'ESTO_ATUAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_CART')\" *ngIf=\"!compressedTable\">\n              Carteira\n              <span *ngIf=\"key == 'TT_CART'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_CART'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_PLAN_CORT')\" *ngIf=\"!compressedTable\">\n              Plano de Corte\n              <span *ngIf=\"key == 'TT_PLAN_CORT'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_PLAN_CORT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\n          </tr>\n        </ng-template>\n        <ng-template let-tbody #tbody>\n          <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\n            <td nowrap class=\"text-center\" [ngClass]=\"[item.IN_STAT == 0 ? 'border-danger' : 'border-success', item.select ? 'bg-row-selected' : '']\">\n              <div\n                class=\"custom-control custom-checkbox mr-sm-2 hover\">\n                <input\n                  type=\"checkbox\"\n                  class=\"custom-control-input hover\"\n                  [id]=\"'item' + item.ID\"\n                  [checked]=\"item.IN_STAT\"\n                  (change)=\"onEdit(item)\"\n                >\n                <label class=\"custom-control-label hover\" [for]=\"'item' + item.ID\"></label>\n              </div>\n            </td>    \n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.DS_TIPO_MATE }}</td>    \n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_LINH }}</td>              \n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>         \n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_CLAS }}</td>        \n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.CODE_MATE | number: '0.0' }}</td>        \n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.DS_MATE }}</td>        \n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.VOL_VENDA | number: '0.3'}}</td>        \n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.ESTO_ATUAL | number: '0.3'}}</td>        \n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.TT_CART | number: '0.3'}}</td>        \n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.TT_PLAN_CORT | number: '0.0'}}</td>         \n            <td nowrap class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\n              <span><i [ngClass]=\"setIconUnabled(item)\" [tooltip]=\"item.DS_PERF_INAT\" ></i></span>\n            </td>            \n            <!-- <td nowrap class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\"> -->\n\n              <!-- <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\n                  (click)=\"onEdit(item)\"\n                  >\n                  <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\n                </button>\n              </div> -->\n            <!-- </td>        -->\n            <td nowrap  class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Logs\"\n                  (click)=\"getLogsModal(item) + ' ' + lgModal.show()\"\n                  >\n                  <i class=\"fas fa-external-link-alt text-primary\"></i>\n                </button>\n              </div>\n            </td>       \n            <td nowrap  class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Detalhes\"\n                  (click)=\"onDetail(item)\"\n                  >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>       \n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </div>\n    <div class=\"col-6\">\n      <tabset [hidden]=\"!compressedTable\">\n        <button\n          type=\"button\"\n          class=\"btn-icon close position-absolute\"\n          (click)=\"onCloseDetail()\"\n        >\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes\">\n          <div\n            class=\"border-right border-left border-bottom px-3 pt-3\"\n            style=\"overflow: auto; height: 338px;\"\n          >\n            <custom-table>\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Empresa</th>\n                  <th scope=\"col\">Depósito</th>\n                  <th scope=\"col\">Vol. Vendas</th>\n                  <th scope=\"col\">Carteira</th>\n                  <th scope=\"col\">Plano de Corte</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dataDetail\">\n                  <td nowrap class=\"text-center\">{{ item.NM_EMPR }}</td>        \n                  <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>        \n                  <td nowrap class=\"text-center\">{{ item.VOLU_VEND | number: '0.3' }}</td>         \n                  <td nowrap class=\"text-center\">{{ item.VOLU_CART | number: '0.3' }}</td>              \n                  <td nowrap class=\"text-center\">{{ item.PLAN_CORT | number: '0.3' }}</td>                  \n                </tr>\n                <tr>\n                  <td nowrap class=\"text-center bg-dark text-white\">TOTAL</td>        \n                  <td nowrap class=\"text-center bg-dark text-white\"></td>        \n                  <td nowrap class=\"text-center bg-dark text-white\">120,00</td>         \n                  <td nowrap class=\"text-center bg-dark text-white\">300,00</td>              \n                  <td nowrap class=\"text-center bg-dark text-white\">400,00</td>                  \n                </tr>\n              </ng-template>\n            </custom-table>\n            <div\n              *ngIf=\"noResultDetalhes\"\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\n              style=\"height: 80%;\"\n            >\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n              ></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n  <div class=\"col-12 mt-2\" *ngIf=\"data.length > itemsPerPage && loading\">\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\n    <div class=\"d-flex\">\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"data?.length\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n<div\n  bsModal\n  #lgModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n>\n  <div class=\"modal-dialog modal-xl\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          {{ modal.title }}\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container\" *ngIf=\"modalLogsBool\">\n          <abastecimento-cadastro-manutencao-materiais-modal-logs [item]=itemMaterial>\n          </abastecimento-cadastro-manutencao-materiais-modal-logs>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "Nkzp":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/modal-logs/modal-logs.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent */

    /***/
    function Nkzp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent", function () {
        return AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_logs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-logs.component.html */
      "wPWn");
      /* harmony import */


      var _modal_logs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-logs.component.scss */
      "0RVd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent = /*#__PURE__*/function () {
        /* Paginação */
        function AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent() {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent);

          this.modal = [];
          this.loadingLogs = false;
          this.noResultLogs = true;
          this.dataLogs = [];
          /* Ordenação principal*/

          this.reverse = false;
          this.key = 'NM_CLAS';
          /* Ordenação principal*/

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
        }

        _createClass(AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.DS_TIPO_MATE = this.item.DS_TIPO_MATE;
            this.modal.NM_CLAS = this.item.NM_CLAS;
            this.modal.NM_SUB_LINH = this.item.NM_SUB_LINH;
            this.modal.NM_LINH = this.item.NM_LINH;
            this.modal.CODE_MATE = this.item.CODE_MATE;
            this.modal.DS_MATE = this.item.DS_MATE;
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

        return AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent;
      }();

      AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent.ctorParameters = function () {
        return [];
      };

      AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-cadastro-manutencao-materiais-modal-logs',
        template: _raw_loader_modal_logs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_logs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent);
      /***/
    },

    /***/
    "WFEz":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/manutencao-materiais.service.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoMateriaisService */

    /***/
    function WFEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoMateriaisService", function () {
        return AbastecimentoCadastrosManutencaoMateriaisService;
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

      var AbastecimentoCadastrosManutencaoMateriaisService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosManutencaoMateriaisService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoMateriaisService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosManutencaoMateriaisService, [{
          key: "getTiposMateriais",
          value: function getTiposMateriais(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/tipos-material"), {
              params: {
                IN_STAT: params['IN_STAT']
              },
              observe: "response"
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              params: {
                IN_STAT: params['IN_STAT']
              },
              observe: "response"
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/sub-linhas"), {
              params: {
                ID_LINH: params['ID_LINH'].toString(),
                IN_STAT: params['IN_STAT']
              },
              observe: "response"
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: {
                ID_LINH: params['ID_LINH'].toString(),
                ID_SUB_LINH: params['ID_SUB_LINH'].toString(),
                IN_STAT: params['IN_STAT']
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
        }]);

        return AbastecimentoCadastrosManutencaoMateriaisService;
      }();

      AbastecimentoCadastrosManutencaoMateriaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosManutencaoMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AbastecimentoCadastrosManutencaoMateriaisService);
      /***/
    },

    /***/
    "gswh":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/manutencao-materiais.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoMateriaisModule */

    /***/
    function gswh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoMateriaisModule", function () {
        return AbastecimentoCadastrosManutencaoMateriaisModule;
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


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _manutencao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./manutencao-materiais-routing.module */
      "Hrqj");
      /* harmony import */


      var _manutencao_materiais_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./manutencao-materiais.component */
      "645L");
      /* harmony import */


      var _modal_logs_modal_logs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modal-logs/modal-logs.component */
      "Nkzp");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a);

      var AbastecimentoCadastrosManutencaoMateriaisModule = function AbastecimentoCadastrosManutencaoMateriaisModule() {
        _classCallCheck(this, AbastecimentoCadastrosManutencaoMateriaisModule);
      };

      AbastecimentoCadastrosManutencaoMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_manutencao_materiais_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosManutencaoMateriaisComponent"], _modal_logs_modal_logs_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosManutencaoMateriaisModalLogsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manutencao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosManutencaoMateriaisRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastrosManutencaoMateriaisModule);
      /***/
    },

    /***/
    "wPWn":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/manutencao-materiais/modal-logs/modal-logs.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wPWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> TIPO MATERIAL: </strong><br /> {{ modal.DS_TIPO_MATE }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> LINHA: </strong><br /> {{ modal.NM_LINH }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> SUBLINHA: </strong><br /> {{ modal.NM_SUB_LINH ? modal.NM_SUB_LINH : '-' }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> CLASSE: </strong><br /> {{ modal.NM_CLAS }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> COD. MATERIAL: </strong><br /> {{ modal.CODE_MATE }}\n    </p>\n  </div>\n  <div class=\"col-2\">\n    <p style=\"font-size: 14px;\">\n      <strong> MATERIAL: </strong><br /> {{ modal.DS_MATE }}\n    </p>\n  </div>\n</div>\n<div class=\"table-responsive\">\n  <custom-table *ngIf=\"loadingLogs\">\n    <ng-template #thead let-thead>\n      <tr class=\"text-center\">\n        <th scope=\"col\" (click)=\"sort('ID_REFE_ERP')\">\n          Código\n          <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('NM_CLAS')\">\n          Classe\n          <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('NM_SUB_LINH')\">\n          Sub Linha\n          <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('NM_LINH')\">\n          Linha\n          <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('DS_STAT')\">\n          Situação\n          <span *ngIf=\"key == 'DS_STAT'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'DS_STAT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('DT_ACAO')\">\n          Data Ação\n          <span *ngIf=\"key == 'DT_ACAO'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'DT_ACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('NM_ACAO')\">\n          Ação\n          <span *ngIf=\"key == 'NM_ACAO'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'NM_ACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n        <th scope=\"col\" (click)=\"sort('NM_USUA')\">\n          Usuário\n          <span *ngIf=\"key == 'NM_USUA'\"><i [ngClass]=\"\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n              \"></i></span>\n          <span *ngIf=\"key != 'NM_USUA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr *ngFor=\"let item of dataLogs | orderBy: key:reverse | slice: begin:end; let i = index\">\n        <td class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\n        <td class=\"text-center\">{{ item.NM_CLAS }}</td>\n        <td class=\"text-center\">{{ item.ID_SUB_LINH ? item.ID_SUB_LINH : '-' }}</td>\n        <td class=\"text-center\">{{ item.NM_LINH }}</td>\n        <td class=\"text-center\">{{ item.DS_STAT }}</td>\n        <td class=\"text-center\">\n          {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\n        </td>\n        <td class=\"text-center\">{{ item.NM_ACAO }}</td>\n        <td class=\"text-center\">{{ item.NM_USUA }}</td>\n      </tr>\n    </ng-template>\n  </custom-table>\n</div>\n<div class=\"col-12 mt-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\n  Exibindo {{ begin + 1 }} a {{ end }} de {{ dataLogs?.length }}\n  <pagination [maxSize]=\"10\" [totalItems]=\"dataLogs?.length\" (pageChanged)=\"onPageChanged($event)\"\n    [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\" [(ngModel)]=\"currentPage\" previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n</div>\n<div *ngIf=\"noResultLogs\" class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>";
      /***/
    },

    /***/
    "zQZ5":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-materiais/manutencao-materiais.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zQZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4dcc71;\n  border-color: #4dcc71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9tYW51dGVuY2FvLW1hdGVyaWFpcy9tYW51dGVuY2FvLW1hdGVyaWFpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL21hbnV0ZW5jYW8tbWF0ZXJpYWlzL21hbnV0ZW5jYW8tbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWI4ZjAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGNjNzE7XG4gIGJvcmRlci1jb2xvcjogIzRkY2M3MTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=manutencao-materiais-manutencao-materiais-module-es5.js.map