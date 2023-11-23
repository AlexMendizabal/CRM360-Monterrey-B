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
              modalRef.content.messageAlerts = ['Las informaciones serán inactivadas.'];
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"MANUTENÇÃO DE Materiais\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"OnExcel()\"\r\n    [disabled]=\"true\"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSave()\"\r\n    [disabled]=\"form.status == 'INVALID' || !loading\"\r\n  >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_TIPO_MATE\">Tipo Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"tiposMateriais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_TIPO_MATE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getSubLinhas() + '' + getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"subLinhas\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_SUB_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"classes\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_CLAS\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"situacoes\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"situations\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SITU\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"IN_STAT\"\r\n            (change)=\"setActivedPerfil($event)\"\r\n            [ngClass]=\"\r\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('IN_STAT')\"\r\n              message=\"Situação é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_PERFI_INAT\">Perfil de Inativação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"unactivatedPerfil\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_PERFI_INAT\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_PERFI_INAT\"\r\n            [ngClass]=\"\r\n              onFieldError('ID_PERFI_INAT') + ' ' + onFieldRequired('ID_PERFI_INAT')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('ID_PERFI_INAT')\"\r\n              message=\"Perfil de inativação é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\r\n  <div class=\"row\">\r\n    <div\r\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\r\n    >\r\n    <div class=\"table-responsive\" *ngIf=\"loading\">\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template let-thead #thead>\r\n          <tr class=\"text-center\">\r\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\">\r\n              <div [formGroup]=\"formCheck\"\r\n                class=\"custom-control custom-checkbox mr-sm-2 hover\"\r\n                >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input hover\"\r\n                  id=\"itemMass\"\r\n                  formControlName=\"ITEM_MASS\"\r\n                  [checked]=\"false\"\r\n                  (change)=\"onEditMass()\"\r\n                >\r\n                <label class=\"custom-control-label hover\" for=\"itemMass\"></label>\r\n              </div>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DS_TIPO_MATE')\">\r\n              Tipo Material\r\n              <span *ngIf=\"key == 'DS_TIPO_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DS_TIPO_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n              Linha\r\n              <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\r\n              Sublinha\r\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n              Classe\r\n              <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('CODE_MATE')\">\r\n              Cod. Material\r\n              <span *ngIf=\"key == 'CODE_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CODE_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DS_MATE')\">\r\n              Material\r\n              <span *ngIf=\"key == 'DS_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DS_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('VOL_VENDA')\" *ngIf=\"!compressedTable\">\r\n              Volume Vendas\r\n              <span *ngIf=\"key == 'VOL_VENDA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'VOL_VENDA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('ESTO_ATUAL')\" *ngIf=\"!compressedTable\">\r\n              Est. Atual\r\n              <span *ngIf=\"key == 'ESTO_ATUAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'ESTO_ATUAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_CART')\" *ngIf=\"!compressedTable\">\r\n              Carteira\r\n              <span *ngIf=\"key == 'TT_CART'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_CART'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_PLAN_CORT')\" *ngIf=\"!compressedTable\">\r\n              Plano de Corte\r\n              <span *ngIf=\"key == 'TT_PLAN_CORT'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'TT_PLAN_CORT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\r\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\r\n            <th nowrap scope=\"col\" class=\"hover\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template let-tbody #tbody>\r\n          <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\r\n            <td nowrap class=\"text-center\" [ngClass]=\"[item.IN_STAT == 0 ? 'border-danger' : 'border-success', item.select ? 'bg-row-selected' : '']\">\r\n              <div\r\n                class=\"custom-control custom-checkbox mr-sm-2 hover\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input hover\"\r\n                  [id]=\"'item' + item.ID\"\r\n                  [checked]=\"item.IN_STAT\"\r\n                  (change)=\"onEdit(item)\"\r\n                >\r\n                <label class=\"custom-control-label hover\" [for]=\"'item' + item.ID\"></label>\r\n              </div>\r\n            </td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.DS_TIPO_MATE }}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_LINH }}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_CLAS }}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.CODE_MATE | number: '0.0' }}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.DS_MATE }}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.VOL_VENDA | number: '0.3'}}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.ESTO_ATUAL | number: '0.3'}}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.TT_CART | number: '0.3'}}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.TT_PLAN_CORT | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\r\n              <span><i [ngClass]=\"setIconUnabled(item)\" [tooltip]=\"item.DS_PERF_INAT\" ></i></span>\r\n            </td>\r\n            <!-- <td nowrap class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\"> -->\r\n\r\n              <!-- <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\r\n                  (click)=\"onEdit(item)\"\r\n                  >\r\n                  <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\r\n                </button>\r\n              </div> -->\r\n            <!-- </td>        -->\r\n            <td nowrap  class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Logs\"\r\n                  (click)=\"getLogsModal(item) + ' ' + lgModal.show()\"\r\n                  >\r\n                  <i class=\"fas fa-external-link-alt text-primary\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td nowrap  class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Detalles\"\r\n                  (click)=\"onDetail(item)\"\r\n                  >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </div>\r\n    <div class=\"col-6\">\r\n      <tabset [hidden]=\"!compressedTable\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon close position-absolute\"\r\n          (click)=\"onCloseDetail()\"\r\n        >\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n        <tab heading=\"Detalles\">\r\n          <div\r\n            class=\"border-right border-left border-bottom px-3 pt-3\"\r\n            style=\"overflow: auto; height: 338px;\"\r\n          >\r\n            <custom-table>\r\n              <ng-template #thead let-thead>\r\n                <tr class=\"text-center\">\r\n                  <th scope=\"col\">Empresa</th>\r\n                  <th scope=\"col\">Depósito</th>\r\n                  <th scope=\"col\">Vol. Vendas</th>\r\n                  <th scope=\"col\">Carteira</th>\r\n                  <th scope=\"col\">Plano de Corte</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of dataDetail\">\r\n                  <td nowrap class=\"text-center\">{{ item.NM_EMPR }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.VOLU_VEND | number: '0.3' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.VOLU_CART | number: '0.3' }}</td>\r\n                  <td nowrap class=\"text-center\">{{ item.PLAN_CORT | number: '0.3' }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td nowrap class=\"text-center bg-dark text-white\">TOTAL</td>\r\n                  <td nowrap class=\"text-center bg-dark text-white\"></td>\r\n                  <td nowrap class=\"text-center bg-dark text-white\">120,00</td>\r\n                  <td nowrap class=\"text-center bg-dark text-white\">300,00</td>\r\n                  <td nowrap class=\"text-center bg-dark text-white\">400,00</td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n            <div\r\n              *ngIf=\"noResultDetalhes\"\r\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n              style=\"height: 80%;\"\r\n            >\r\n              <empty-result\r\n                message=\"Nenhuma informação encontrada\"\r\n              ></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 mt-2\" *ngIf=\"data.length > itemsPerPage && loading\">\r\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\r\n    <div class=\"d-flex\">\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"data?.length\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          {{ modal.title }}\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\" *ngIf=\"modalLogsBool\">\r\n          <abastecimento-cadastro-manutencao-materiais-modal-logs [item]=itemMaterial>\r\n          </abastecimento-cadastro-manutencao-materiais-modal-logs>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> TIPO MATERIAL: </strong><br /> {{ modal.DS_TIPO_MATE }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> LINHA: </strong><br /> {{ modal.NM_LINH }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> SUBLINHA: </strong><br /> {{ modal.NM_SUB_LINH ? modal.NM_SUB_LINH : '-' }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CLASSE: </strong><br /> {{ modal.NM_CLAS }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> COD. MATERIAL: </strong><br /> {{ modal.CODE_MATE }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> MATERIAL: </strong><br /> {{ modal.DS_MATE }}\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n  <custom-table *ngIf=\"loadingLogs\">\r\n    <ng-template #thead let-thead>\r\n      <tr class=\"text-center\">\r\n        <th scope=\"col\" (click)=\"sort('ID_REFE_ERP')\">\r\n          Código\r\n          <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_CLAS')\">\r\n          Classe\r\n          <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_SUB_LINH')\">\r\n          Sub Linha\r\n          <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_LINH')\">\r\n          Linha\r\n          <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('DS_STAT')\">\r\n          Situação\r\n          <span *ngIf=\"key == 'DS_STAT'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'DS_STAT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('DT_ACAO')\">\r\n          Data Ação\r\n          <span *ngIf=\"key == 'DT_ACAO'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'DT_ACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_ACAO')\">\r\n          Ação\r\n          <span *ngIf=\"key == 'NM_ACAO'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_ACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_USUA')\">\r\n          Usuário\r\n          <span *ngIf=\"key == 'NM_USUA'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_USUA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let item of dataLogs | orderBy: key:reverse | slice: begin:end; let i = index\">\r\n        <td class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\r\n        <td class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n        <td class=\"text-center\">{{ item.ID_SUB_LINH ? item.ID_SUB_LINH : '-' }}</td>\r\n        <td class=\"text-center\">{{ item.NM_LINH }}</td>\r\n        <td class=\"text-center\">{{ item.DS_STAT }}</td>\r\n        <td class=\"text-center\">\r\n          {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\r\n        </td>\r\n        <td class=\"text-center\">{{ item.NM_ACAO }}</td>\r\n        <td class=\"text-center\">{{ item.NM_USUA }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div class=\"col-12 mt-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\r\n  Exibindo {{ begin + 1 }} a {{ end }} de {{ dataLogs?.length }}\r\n  <pagination [maxSize]=\"10\" [totalItems]=\"dataLogs?.length\" (pageChanged)=\"onPageChanged($event)\"\r\n    [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\" [(ngModel)]=\"currentPage\" previousText=\"&lsaquo;\"\r\n    nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n  </pagination>\r\n</div>\r\n<div *ngIf=\"noResultLogs\" class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>";
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


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4dcc71;\n  border-color: #4dcc71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9tYW51dGVuY2FvLW1hdGVyaWFpcy9tYW51dGVuY2FvLW1hdGVyaWFpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL21hbnV0ZW5jYW8tbWF0ZXJpYWlzL21hbnV0ZW5jYW8tbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYjhmMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRjYzcxO1xyXG4gIGJvcmRlci1jb2xvcjogIzRkY2M3MTtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=manutencao-materiais-manutencao-materiais-module-es5.js.map