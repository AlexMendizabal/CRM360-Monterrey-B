(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manutencao-classes-manutencao-classes-module"], {
    /***/
    "+Bx6":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/modal-logs/modal-logs.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bx6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWFudXRlbmNhby1jbGFzc2VzL21vZGFsLWxvZ3MvbW9kYWwtbG9ncy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "+Kcp":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/manutencao-classes/modal-logs/modal-logs.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kcp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CLASSE: </strong> {{ modal.NM_CLAS }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> SUBLINHA: </strong> {{ modal.NM_SUB_LINH ? modal.NM_SUB_LINH : '-' }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> LINHA: </strong> {{ modal.NM_LINH }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> PER. INATIVO: </strong> 8\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n  <custom-table *ngIf=\"loadingLogs\">\r\n    <ng-template #thead let-thead>\r\n      <tr class=\"text-center\">\r\n        <th scope=\"col\" (click)=\"sort('ID_REFE_ERP')\">\r\n          Código\r\n          <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_CLAS')\">\r\n          Classe\r\n          <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_SUB_LINH')\">\r\n          Sub Linha\r\n          <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_LINH')\">\r\n          Linha\r\n          <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('DS_STAT')\">\r\n          Situação\r\n          <span *ngIf=\"key == 'DS_STAT'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'DS_STAT'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('DT_ACAO')\">\r\n          Data Ação\r\n          <span *ngIf=\"key == 'DT_ACAO'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'DT_ACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_ACAO')\">\r\n          Ação\r\n          <span *ngIf=\"key == 'NM_ACAO'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_ACAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n        <th scope=\"col\" (click)=\"sort('NM_USUA')\">\r\n          Usuário\r\n          <span *ngIf=\"key == 'NM_USUA'\"><i [ngClass]=\"\r\n                reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n              \"></i></span>\r\n          <span *ngIf=\"key != 'NM_USUA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let item of dataLogs | orderBy: key:reverse | slice: begin:end; let i = index\">\r\n        <td class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\r\n        <td class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n        <td class=\"text-center\">{{ item.ID_SUB_LINH ? item.ID_SUB_LINH : '-' }}</td>\r\n        <td class=\"text-center\">{{ item.NM_LINH }}</td>\r\n        <td class=\"text-center\">{{ item.DS_STAT }}</td>\r\n        <td class=\"text-center\">\r\n          {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\r\n        </td>\r\n        <td class=\"text-center\">{{ item.NM_ACAO }}</td>\r\n        <td class=\"text-center\">{{ item.NM_USUA }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>\r\n<div class=\"col-12 mt-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\r\n  Exibindo {{ begin + 1 }} a {{ end }} de {{ dataLogs?.length }}\r\n  <pagination [maxSize]=\"10\" [totalItems]=\"dataLogs?.length\" (pageChanged)=\"onPageChanged($event)\"\r\n    [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\" [(ngModel)]=\"currentPage\" previousText=\"&lsaquo;\"\r\n    nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n  </pagination>\r\n</div>\r\n<div *ngIf=\"noResultLogs\" class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>";
      /***/
    },

    /***/
    "CiIj":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/manutencao-classes.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoClassesComponent */

    /***/
    function CiIj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoClassesComponent", function () {
        return AbastecimentoCadastrosManutencaoClassesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manutencao_classes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manutencao-classes.component.html */
      "LAeS");
      /* harmony import */


      var _manutencao_classes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manutencao-classes.component.scss */
      "oSay");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
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


      var _manutencao_classes_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./manutencao-classes.service */
      "Uvuh");

      var AbastecimentoCadastrosManutencaoClassesComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosManutencaoClassesComponent(activatedRoute, router, formBuilder, pnotifyService, confirmModalService, activityService, routerService, titleService, modalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoClassesComponent);

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
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUser = this.currentUser['info']['id'];
          this.data = [];
          this.modal = [];
          this.itemClasse = [];
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
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosManutencaoClassesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Manutenção de Classes');
            this.setDisabledItemsForm();
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
                descricao: 'Manutenção de Classes'
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
              this.service.getClasses(paramsClasse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
              this.service.getSubLinhas(paramsSubLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
              IN_STAT: 1
            };
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
              var ID_LINH = this.form.get('ID_LINH').value;
              var IN_STAT = 1;
              var params = {
                ID_LINH: ID_LINH,
                IN_STAT: IN_STAT
              };
              this.service.getSubLinhas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
              var ID_LINH = this.form.get('ID_LINH').value;
              var ID_SUB_LINH = this.form.get('ID_SUB_LINH').value;
              var IN_STAT = 1;
              var params = {
                ID_LINH: ID_LINH,
                ID_SUB_LINH: ID_SUB_LINH !== null && ID_SUB_LINH !== void 0 ? ID_SUB_LINH : "",
                IN_STAT: IN_STAT
              };
              this.service.getClasses(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
          key: "OnExcel",
          value: function OnExcel() {
            var params = this.getParams();
            params['IN_GERA_RELA_EXCE'] = 1;
            params['ID_USUA'] = this.idUser; //this.getSearchExcel(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.data = [];
            this.service.getClassesMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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

                    _this8.pnotifyService.notice(res['body']['message']);
                  }
                }
              }
            }, function (error) {
              _this8.noResult = true;

              _this8.pnotifyService.error("Erro ao carregar Classes de Materiais");
            });
          }
        }, {
          key: "abledEdit",
          value: function abledEdit(item) {
            item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            var stat = item.IN_STAT == 1 ? 0 : 1;
            item.ID_USUA = parseInt(this.idUser);
            item.ID_CLAS = item.ID;
            this.confirmChange(item, stat); //   .asObservable()
            //   .pipe(
            //     take(1),
            //     switchMap((result: any) => {
            //       if (!result) return EMPTY;
            //       this.loaderNavbar = true;
            //       item.IN_STAT = stat;
            //       //return this.service.postClasses(item);
            //       return console.log("aqui");
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
          key: "onSave",
          value: function onSave() {}
        }, {
          key: "confirmChange",
          value: function confirmChange(item, stat) {
            if (stat == 1) {
              item.IN_STAT = stat;
              return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação da Classe?', 'Cancelar', 'Confirmar');
            }

            return this.getMateriaisStatusModal(item);
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template);
          }
        }, {
          key: "getMateriaisStatusModal",
          value: function getMateriaisStatusModal(item) {
            this.modalLogsBool = false;
            this.itemClasse = item;
            this.modal.title = "MATERIAIS ATIVOS - STATUS";
            this.modalMaterialBool = true;
          }
        }, {
          key: "getLogsModal",
          value: function getLogsModal(item) {
            this.modalMaterialBool = false;
            this.itemClasse = item;
            this.modal.title = "LOGS";
            this.modalLogsBool = true;
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.modalMaterialBool = false;
            this.modalLogsBool = false;
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return AbastecimentoCadastrosManutencaoClassesComponent;
      }();

      AbastecimentoCadastrosManutencaoClassesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
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
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: _manutencao_classes_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosManutencaoClassesService"]
        }];
      };

      AbastecimentoCadastrosManutencaoClassesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'manutencao-classes',
        template: _raw_loader_manutencao_classes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manutencao_classes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _manutencao_classes_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosManutencaoClassesService"]])], AbastecimentoCadastrosManutencaoClassesComponent);
      /***/
    },

    /***/
    "FF6o":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/modal-materiais-status/modal-materiais-status.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FF6o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9tYW51dGVuY2FvLWNsYXNzZXMvbW9kYWwtbWF0ZXJpYWlzLXN0YXR1cy9tb2RhbC1tYXRlcmlhaXMtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWFudXRlbmNhby1jbGFzc2VzL21vZGFsLW1hdGVyaWFpcy1zdGF0dXMvbW9kYWwtbWF0ZXJpYWlzLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1yb3ctc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWI4ZjAhaW1wb3J0YW50O1xyXG59Il19 */";
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
    "LAeS":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/manutencao-classes/manutencao-classes.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LAeS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"MANUTENÇÃO DE CLASSES\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"OnExcel()\"\r\n    [disabled]=\"true\"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSave()\"\r\n    [disabled]=\"form.status == 'INVALID' || !loading\"\r\n  >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getSubLinhas() + '' + getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"subLinhas\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_SUB_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"classes\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_CLAS\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"situacoes\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"situations\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SITU\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"IN_STAT\"\r\n            [ngClass]=\"\r\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('IN_STAT')\"\r\n              message=\"Situação é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\r\n  <div class=\"table-responsive\" *ngIf=\"loading\">\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template let-thead #thead>\r\n        <tr class=\"text-center\">\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('ID_REFE_ERP')\">\r\n            Código\r\n            <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n            Classe\r\n            <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\r\n            Sublinha\r\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n            Linha\r\n            <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n            Per. Inativação\r\n            <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n            <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n          </th>\r\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\r\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\r\n          <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template let-tbody #tbody>\r\n        <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\r\n          <td nowrap class=\"text-center\" [ngClass]=\"item.IN_STAT == 0 ? 'border-danger' : 'border-success'\">{{ item.ID_REFE_ERP }}</td>        \r\n          <td nowrap class=\"text-center\">{{ item.NM_CLAS }}</td>        \r\n          <td nowrap class=\"text-center\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>         \r\n          <td nowrap class=\"text-center\">{{ item.NM_LINH }}</td>              \r\n          <td nowrap class=\"text-center\">\r\n            <span *ngIf=\"!item.ON_EDIT_CELL\">\r\n              0\r\n            </span>\r\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\r\n              <input\r\n                style=\"max-width: 80px;\"\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                placeholder=\"0\"\r\n                [(ngModel)]=\"item.FORM_PERI_INAT\"\r\n                #FORM_PERI_INAT_VALI=\"ngModel\"\r\n                required\r\n                />\r\n                <!-- [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\"  -->\r\n              <!-- name=\"toneladaEditado_{{i}}\" -->\r\n            </div>\r\n          </td>              \r\n          <td nowrap class=\"text-center\" width=\"4%\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                (click)=\"abledEdit(item)\"\r\n                >\r\n                <i class=\"fas fa-edit\"></i>\r\n              </button>\r\n            </div>\r\n          </td>       \r\n          <td nowrap class=\"text-center\" width=\"4%\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\r\n                (click)=\"item.IN_STAT == 0 ? onEdit(item) :  openModal(template) + ' ' + getMateriaisStatusModal(item)\"\r\n                >\r\n                <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\r\n              </button>\r\n            </div>\r\n          </td>       \r\n          <td nowrap  class=\"text-center\" width=\"4%\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Logs\"\r\n                (click)=\"getLogsModal(item) + ' ' + lgModal.show()\"\r\n                >\r\n                <i class=\"fas fa-external-link-alt text-primary\"></i>\r\n              </button>\r\n            </div>\r\n          </td>       \r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div class=\"col-12 mt-2\" *ngIf=\"data.length > itemsPerPage && loading\">\r\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\r\n    <div class=\"d-flex\">\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"data?.length\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n>\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          {{ modal.title }}\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide() + ' ' + onClose()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\" *ngIf=\"modalMaterialBool\">\r\n          <abastecimento-cadastro-manutencao-classe-modal-materiais-status [item]=itemClasse>\r\n          </abastecimento-cadastro-manutencao-classe-modal-materiais-status>\r\n        </div>\r\n        <div class=\"container\" *ngIf=\"modalLogsBool\">\r\n          <abastecimento-cadastro-manutencao-classe-modal-logs [item]=itemClasse>\r\n          </abastecimento-cadastro-manutencao-classe-modal-logs>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Verificação</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Não é possivel realizar inativação da classe selecionada, pois a mesma possuí materiais em atividade.\r\n    <p class=\"text-info hover mt-1\" (click)=\"lgModal.show() + '' + modalRef.hide()\"><u>Clique aqui para saber mais.</u></p>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "RZBY":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/modal-logs/modal-logs.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoClassesModalLogsComponent */

    /***/
    function RZBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoClassesModalLogsComponent", function () {
        return AbastecimentoCadastrosManutencaoClassesModalLogsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_logs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-logs.component.html */
      "+Kcp");
      /* harmony import */


      var _modal_logs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-logs.component.scss */
      "+Bx6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AbastecimentoCadastrosManutencaoClassesModalLogsComponent = /*#__PURE__*/function () {
        /* Paginação */
        function AbastecimentoCadastrosManutencaoClassesModalLogsComponent() {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoClassesModalLogsComponent);

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

        _createClass(AbastecimentoCadastrosManutencaoClassesModalLogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.NM_CLAS = this.item.NM_CLAS;
            this.modal.NM_SUB_LINH = this.item.NM_SUB_LINH;
            this.modal.NM_LINH = this.item.NM_LINH;
            this.modal.PER_INAT = this.item.PER_INAT;
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

        return AbastecimentoCadastrosManutencaoClassesModalLogsComponent;
      }();

      AbastecimentoCadastrosManutencaoClassesModalLogsComponent.ctorParameters = function () {
        return [];
      };

      AbastecimentoCadastrosManutencaoClassesModalLogsComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoCadastrosManutencaoClassesModalLogsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-cadastro-manutencao-classe-modal-logs',
        template: _raw_loader_modal_logs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_logs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AbastecimentoCadastrosManutencaoClassesModalLogsComponent);
      /***/
    },

    /***/
    "Uvuh":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/manutencao-classes.service.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoClassesService */

    /***/
    function Uvuh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoClassesService", function () {
        return AbastecimentoCadastrosManutencaoClassesService;
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

      var AbastecimentoCadastrosManutencaoClassesService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosManutencaoClassesService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoClassesService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosManutencaoClassesService, [{
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

        return AbastecimentoCadastrosManutencaoClassesService;
      }();

      AbastecimentoCadastrosManutencaoClassesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosManutencaoClassesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AbastecimentoCadastrosManutencaoClassesService);
      /***/
    },

    /***/
    "Xz30":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/manutencao-classes/modal-materiais-status/modal-materiais-status.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xz30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2 mt-2\">\r\n  <div class=\"col-3\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> CLASSE: </strong> {{ modal.NM_CLAS }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> SUBLINHA: </strong> {{ modal.NM_SUB_LINH ? modal.NM_SUB_LINH : '-' }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> LINHA: </strong> {{ modal.NM_LINH }}\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <p style=\"font-size: 14px;\">\r\n      <strong> PER. INATIVO: </strong> 8\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div\r\n    [ngClass]=\"{ 'col-12': !compressedTable, 'col-4 pr-0': compressedTable }\"\r\n  >\r\n    <div class=\"table-responsive mt-2\">\r\n      <custom-table subtitleBorder=\"true\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th nowrap (click)=\"sort('NM_EMPR_DEST')\" class=\"hover text-center\">\r\n              Tipo de Material\r\n              <span *ngIf=\"key == 'NM_EMPR_DEST'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'NM_EMPR_DEST'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sort('NM_DEPO_DEST')\" class=\"hover text-center\">\r\n              Cód. Material\r\n              <span *ngIf=\"key == 'NM_DEPO_DEST'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'NM_DEPO_DEST'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sort('NR_PEDI_ORIG')\" class=\"hover text-center\">\r\n              Desc. Material\r\n              <span *ngIf=\"key == 'NR_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'NR_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sort('DT_PEDI_ORIG')\" class=\"hover text-center\" *ngIf=\"!compressedTable\">\r\n              vol. Vendas\r\n              <span *ngIf=\"key == 'DT_PEDI_ORIG'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'DT_PEDI_ORIG'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sort('DT_PREV_ENTR')\" class=\"hover text-center\" *ngIf=\"!compressedTable\">\r\n              Est. Atual\r\n              <span *ngIf=\"key == 'DT_PREV_ENTR'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'DT_PREV_ENTR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sort('NM_FORN')\" class=\"hover text-center\" *ngIf=\"!compressedTable\">\r\n              Carteira\r\n              <span *ngIf=\"key == 'NM_FORN'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'NM_FORN'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap (click)=\"sort('TT_ITEM_PEDI_SOLI_TONE')\" class=\"hover text-center\" *ngIf=\"!compressedTable\">\r\n              Plano de Corte\r\n              <span *ngIf=\"key == 'TT_ITEM_PEDI_SOLI_TONE'\"><i [ngClass]=\"\r\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                  \"></i></span>\r\n              <span *ngIf=\"key != 'TT_ITEM_PEDI_SOLI_TONE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th nowrap  class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dataModal | orderBy: key:reverse | slice: begin:end;\">\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_TIPO_MATE }}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.ID_MATE | number: '0.0'}}</td>\r\n            <td nowrap class=\"text-center\" [ngClass]=\"item.select ? 'bg-row-selected' : ''\">{{ item.NM_MATE }}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">{{ item.TT_VOLU_VEND | number: '0.3' }}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">\r\n              {{ item.TT_ESTO_ATUA | number: '0.3' }}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">\r\n              {{ item.TT_CART | number: '0.3' }}</td>\r\n            <td nowrap class=\"text-center\" *ngIf=\"!compressedTable\">\r\n              {{ item.TT_PLAN_CORT| number: '0.3' }}</td>\r\n            <td nowrap  class=\"text-center\" width=\"4%\" *ngIf=\"!compressedTable\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Detalles\"\r\n                  (click)=\"onDetail(item)\"\r\n                  >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <tabset [hidden]=\"!compressedTable\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon close position-absolute\"\r\n        (click)=\"onCloseDetail()\"\r\n      >\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n      <tab heading=\"Detalles\">\r\n        <div\r\n          class=\"border-right border-left border-bottom px-3 pt-3\"\r\n          style=\"overflow: auto; height: 338px;\"\r\n        >\r\n          <custom-table>\r\n            <ng-template #thead let-thead>\r\n              <tr class=\"text-center\">\r\n                <th scope=\"col\">Empresa</th>\r\n                <th scope=\"col\">Depósito</th>\r\n                <th scope=\"col\">Vol. Vendas</th>\r\n                <th scope=\"col\">Carteira</th>\r\n                <th scope=\"col\">Plano de Corte</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of dataDetail\">\r\n                <td nowrap class=\"text-center\">{{ item.NM_EMPR }}</td>\r\n                <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n                <td nowrap class=\"text-center\">{{ item.VOLU_VEND | number: '0.3' }}</td>\r\n                <td nowrap class=\"text-center\">{{ item.VOLU_CART | number: '0.3' }}</td>\r\n                <td nowrap class=\"text-center\">{{ item.PLAN_CORT | number: '0.3' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td nowrap class=\"text-center bg-dark text-white\">TOTAL</td>\r\n                <td nowrap class=\"text-center bg-dark text-white\"></td>\r\n                <td nowrap class=\"text-center bg-dark text-white\">120,00</td>\r\n                <td nowrap class=\"text-center bg-dark text-white\">300,00</td>\r\n                <td nowrap class=\"text-center bg-dark text-white\">400,00</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div\r\n            *ngIf=\"noResultDetalhes\"\r\n            class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n            style=\"height: 80%;\"\r\n          >\r\n            <empty-result\r\n              message=\"Nenhuma informação encontrada\"\r\n            ></empty-result>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n  <div class=\"mt-2 mb-2\" *ngIf=\"dataModal?.length > itemsPerPage\">\r\n    Exibindo {{ begin + 1 }} a {{ end }} de\r\n    {{ dataModal?.length }}\r\n    <div class=\"d-flex\">\r\n      <pagination [maxSize]=\"10\" [totalItems]=\"dataModal?.length\" (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\" [(ngModel)]=\"currentPage\" previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"noResultModal && !loadingDetalhesModal\"\r\n  class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%;\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n";
      /***/
    },

    /***/
    "cscJ":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/modal-materiais-status/modal-materiais-status.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent */

    /***/
    function cscJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent", function () {
        return AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_materiais_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-materiais-status.component.html */
      "Xz30");
      /* harmony import */


      var _modal_materiais_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-materiais-status.component.scss */
      "FF6o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent = /*#__PURE__*/function () {
        /* Paginação */
        function AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent() {
          _classCallCheck(this, AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent);

          this.noResultModal = false;
          this.noResultDetalhes = false;
          this.compressedTable = false;
          this.loadingDetalhesModal = false;
          this.modal = [];
          this.dataModal = [{
            NM_TIPO_MATE: "DISTRIBUIDORA",
            ID_MATE: 12345,
            NM_MATE: "CA-50",
            TT_VOLU_VEND: 125.58,
            TT_ESTO_ATUA: 526.58,
            TT_CART: 154,
            TT_PLAN_CORT: 45.68
          }, {
            NM_TIPO_MATE: "DISTRIBUIDORA",
            ID_MATE: 12345,
            NM_MATE: "CA-60",
            TT_VOLU_VEND: 125.58,
            TT_ESTO_ATUA: 526.58,
            TT_CART: 154,
            TT_PLAN_CORT: 45.68
          }, {
            NM_TIPO_MATE: "DISTRIBUIDORA",
            ID_MATE: 12345,
            NM_MATE: "CA-25",
            TT_VOLU_VEND: 125.58,
            TT_ESTO_ATUA: 526.58,
            TT_CART: 154,
            TT_PLAN_CORT: 45.68
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

        _createClass(AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal.NM_CLAS = this.item.NM_CLAS;
            this.modal.NM_SUB_LINH = this.item.NM_SUB_LINH;
            this.modal.NM_LINH = this.item.NM_LINH;
            this.modal.PER_INAT = this.item.PER_INAT;
          }
        }, {
          key: "onDetail",
          value: function onDetail(item) {
            item.select = !item.select;
            this.compressedTable = !this.compressedTable;
          }
        }, {
          key: "onCloseDetail",
          value: function onCloseDetail() {
            this.dataModal.forEach(function (e) {
              e.select = false;
            });
            this.compressedTable = false;
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

        return AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent;
      }();

      AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent.ctorParameters = function () {
        return [];
      };

      AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-cadastro-manutencao-classe-modal-materiais-status',
        template: _raw_loader_modal_materiais_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_materiais_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent);
      /***/
    },

    /***/
    "f8DH":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/manutencao-classes.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoClassesModule */

    /***/
    function f8DH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoClassesModule", function () {
        return AbastecimentoCadastrosManutencaoClassesModule;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _manutencao_classes_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./manutencao-classes-routing.module */
      "ovZF");
      /* harmony import */


      var _manutencao_classes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./manutencao-classes.component */
      "CiIj");
      /* harmony import */


      var _modal_materiais_status_modal_materiais_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modal-materiais-status/modal-materiais-status.component */
      "cscJ");
      /* harmony import */


      var _modal_logs_modal_logs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modal-logs/modal-logs.component */
      "RZBY");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a);

      var AbastecimentoCadastrosManutencaoClassesModule = function AbastecimentoCadastrosManutencaoClassesModule() {
        _classCallCheck(this, AbastecimentoCadastrosManutencaoClassesModule);
      };

      AbastecimentoCadastrosManutencaoClassesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_manutencao_classes_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosManutencaoClassesComponent"], _modal_materiais_status_modal_materiais_status_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosManutencaoClassesModalMateriaisStatusComponent"], _modal_logs_modal_logs_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoCadastrosManutencaoClassesModalLogsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manutencao_classes_routing_module__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosManutencaoClassesRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastrosManutencaoClassesModule);
      /***/
    },

    /***/
    "oSay":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/manutencao-classes.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oSay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvbWFudXRlbmNhby1jbGFzc2VzL21hbnV0ZW5jYW8tY2xhc3Nlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ovZF":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/manutencao-classes/manutencao-classes-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosManutencaoClassesRoutingModule */

    /***/
    function ovZF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosManutencaoClassesRoutingModule", function () {
        return AbastecimentoCadastrosManutencaoClassesRoutingModule;
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


      var _manutencao_classes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manutencao-classes.component */
      "CiIj");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _manutencao_classes_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosManutencaoClassesComponent"]
        }]
      }];

      var AbastecimentoCadastrosManutencaoClassesRoutingModule = function AbastecimentoCadastrosManutencaoClassesRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosManutencaoClassesRoutingModule);
      };

      AbastecimentoCadastrosManutencaoClassesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosManutencaoClassesRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=manutencao-classes-manutencao-classes-module-es5.js.map