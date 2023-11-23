(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["amarracao-materiais-amarracao-materiais-module"], {
    /***/
    "G6Wp":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/amarracao-materiais/amarracao-materiais.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosAmarracaoMateriaisComponent */

    /***/
    function G6Wp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosAmarracaoMateriaisComponent", function () {
        return AbastecimentoCadastrosAmarracaoMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_amarracao_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./amarracao-materiais.component.html */
      "rdEF");
      /* harmony import */


      var _amarracao_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./amarracao-materiais.component.scss */
      "OSCf");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _amarracao_materiais_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./amarracao-materiais.service */
      "zSWE");

      var AbastecimentoCadastrosAmarracaoMateriaisComponent = /*#__PURE__*/function () {
        /* Paginação */
        function AbastecimentoCadastrosAmarracaoMateriaisComponent(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosAmarracaoMateriaisComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.loading = false;
          this.noResult = false;
          this.tipoAtendimentoModal = [{
            ID: '1',
            NAME: 'PEDIDO PAI/ESTOQUE AVANÇADO'
          }, {
            ID: '2',
            NAME: 'ENTRADA DE NOTA'
          }, {
            ID: '3',
            NAME: 'DUQUE 2'
          }, {
            ID: '4',
            NAME: 'PEDIDO INDUSTRIALIZAÇÃO'
          }];
          this.associcaoModal = [{
            ID: '1',
            NAME: '22438 - S ACO 50 - I 10 MM - 3/8" - Sul Fluminense'
          }, {
            ID: '2',
            NAME: '23313 - CA 50 FERRO CONST 10 MM 3/8" MT - Distribuidora'
          }, {
            ID: '3',
            NAME: '22442 - S ACO 50 - I 10 MM - 3/8" CORTE ACAB ESP - Sul Fluminense'
          }, {
            ID: '4',
            NAME: '24662 - ACO CA 50 - I 10 MM - 3/8" BARRA 12 MTS - Sul Fluminense'
          }, {
            ID: '5',
            NAME: '26915 - S ACO CA 50 - I 10 MM - 3/8" DOBRADO - Sul Fluminense'
          }, {
            ID: '6',
            NAME: '23326 - CA 50 FERRO P CONST 10 MM 3/8" MT DOBRADA- Distribuidora'
          }];
          this.materialFornecedorModal = [{
            ID: '1',
            NAME: '123123 - AM IMSF'
          }, {
            ID: '2',
            NAME: '123456 - AM VAL'
          }, {
            ID: '4',
            NAME: '1 - AM PIRA'
          }, {
            ID: '5',
            NAME: '2 - CSN'
          }];
          this.modal = [];
          this.modalForm = [];
          /* CurrentyMask para toneladas */

          this.current = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 2
          };
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.itemAssociacao = [];
          this.itemAssociacaoRow = [];
          this.data = [{
            linha: 'Civil',
            classe: 'CA-50',
            unidadeMedida: 'TON',
            codMaterial: '22442',
            descMaterial: 'CA-50 8 MM barra reta',
            tipoMaterial: 'Sul Fluminense',
            tipoAtendimento: [{
              idTipoAtendimento: '1',
              name: 'Pedido Pai/Estoque avançado',
              idAssociacao: ['1', '2'],
              associacao: '22438 - S ACO 50 - I 10 MM - 3/8" - Sul Fluminense, 23313 - CA 50 FERRO CONST 10 MM 3/8" MT - Distribuidora',
              idMateriaisFornecedores: ['1', '2'],
              materiaisFornecedores: '213123 - AM IMSF, 123456 - AM VAL',
              custoEntrada: 3000
            }, {
              idTipoAtendimento: '3',
              name: 'Duque 2',
              idAssociacao: ['2'],
              associacao: '23313 - CA 50 FERRO CONST 10 MM 3/8" MT - Distribuidora',
              idMateriaisFornecedores: [],
              materiaisFornecedores: '',
              custoEntrada: null
            }]
          }, {
            linha: 'Civil',
            classe: 'CA-50',
            unidadeMedida: 'TON',
            codMaterial: '22442',
            descMaterial: 'CA-50 8 MM barra reta',
            tipoMaterial: 'Distribuidora',
            tipoAtendimento: [{
              idTipoAtendimento: '2',
              name: 'Entrada de nota',
              idAssociacao: [],
              associacao: '',
              idMateriaisFornecedores: ['4', '5'],
              materiaisFornecedores: '1 - AM PIRA, 2 - CSN',
              custoEntrada: 3000
            }, {
              idTipoAtendimento: '3',
              name: 'Duque 2',
              idAssociacao: ['3'],
              associacao: '22442 - S ACO 50 - I 10 MM - 3/8" CORTE ACAB ESP - Sul Fluminense',
              idMateriaisFornecedores: [],
              materiaisFornecedores: '',
              custoEntrada: null
            }]
          }, {
            linha: 'Civil',
            classe: 'CA-50',
            unidadeMedida: 'TON',
            codMaterial: '22442',
            descMaterial: 'CA-50 8 MM barra reta',
            tipoMaterial: 'Distribuidora',
            tipoAtendimento: [{
              idTipoAtendimento: '2',
              name: 'Entrada de Nota',
              idAssociacao: [],
              associacao: '',
              idMateriaisFornecedores: ['1', '2'],
              materiaisFornecedores: '213123 - AM IMSF, 123456 - AM VAL',
              custoEntrada: 3000
            }]
          }];
          this.tipoAtendimento = [{
            ID: '0',
            NAME: 'Entrada de Nota'
          }, {
            ID: '1',
            NAME: 'Pedido industrialização'
          }, {
            ID: '2',
            NAME: 'Pedido Pai/Estoque avançado'
          }, {
            ID: '3',
            NAME: 'Duque 2'
          }];
          this.campoOrdenacao = [{
            ID: '0',
            NAME: 'Linha'
          }, {
            ID: '1',
            NAME: 'Un. Medida'
          }, {
            ID: '2',
            NAME: 'Cód. Material'
          }, {
            ID: '3',
            NAME: 'Tipo Material'
          }];
          this.tipoOrdenacao = [{
            ID: '0',
            NAME: 'Crescente'
          }, {
            ID: '1',
            NAME: 'Decrescente'
          }];
          this.situations = [{
            ID: '0',
            NM_SITU: 'Inativo'
          }, {
            ID: '1',
            NM_SITU: 'Ativo'
          }];
          this.tipoAmarracao = [{
            ID: '0',
            NM_SITU: 'Consistente'
          }, {
            ID: '1',
            NM_SITU: 'Inconsistente'
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
          this.form = this.formBuilder.group({
            ID_LINH: [null],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            ID_MATE: [null],
            TP_ATEN: [null],
            DS_TIPO_AMAR: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_FORN: [null],
            TP_ORDE: [null],
            NM_ORDE: [null]
          });
          this.formModal = this.formBuilder.group({
            TP_ATEN: [null],
            DESC_ASSO: [null],
            MATE_FORN: [null],
            CUST_ENTR: [null],
            ID_MATE: [null]
          });
        }

        _createClass(AbastecimentoCadastrosAmarracaoMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.titleService.setTitle('Amarração de Materiais');
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
            this.form.get('ID_MATE').disable();
            this.form.get('IN_STAT').setValue('1');
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
                descricao: 'Amarração de Materiais'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this3.routerService.getBase64UrlParams(queryParams); //this.search(_response);


                _this3.setFormValues(_response);
              }
            });
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this4 = this;

            var _a, _b, _c;

            var ID_LINH = (_a = queryParams['ID_LINH']) !== null && _a !== void 0 ? _a : '';
            var ID_CLAS = (_b = queryParams['ID_CLASS']) !== null && _b !== void 0 ? _b : '';
            /* classes */

            if (Object.keys(ID_LINH).length > 0) {
              var paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_c = queryParams['ID_SUB_LINH']) !== null && _c !== void 0 ? _c : "",
                idSituacao: 1
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
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1
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
            /* materiais */


            if (Object.keys(ID_CLAS).length > 0) {
              var paramsMaterial = {
                idClasses: queryParams['ID_CLAS'],
                idTipoMaterial: queryParams['ID_TIPO_MATE'],
                idSituacao: 1
              };
              this.loaderNavbar = true;
              this.service.getMateriais(paramsMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this4.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this4.form.get('ID_MATE').enable();

                    _this4.materiais = res['body']['result'];
                  }
                }
              }, function (error) {
                _this4.pnotifyService.error('Erro ao carregar materias');
              });
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
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
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
              var descricaoLinhas = this.form.get('ID_LINH').value;
              var idSubLinha = this.form.get('ID_SUB_LINH').value;
              var idSituacao = 1;
              var params = {
                descricaoLinhas: descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao: idSituacao
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

                      _this7.form.get('ID_MATE').reset();

                      _this7.form.get('ID_MATE').disable();
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
              this.form.get('ID_MATE').reset();
              this.form.get('ID_MATE').disable();
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this8 = this;

            this.materiais = [];
            this.loaderNavbar = true;

            if (this.form.value['ID_CLAS'] != null && this.form.value['ID_CLAS'].length > 0) {
              var idClasses = this.form.get('ID_CLAS').value;
              var idSituacao = 1;
              var params = {
                idClasses: idClasses !== null && idClasses !== void 0 ? idClasses : "",
                idTipoMaterial: "",
                idSituacao: idSituacao
              };
              this.service.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this8.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this8.materiais = res['body'].result;

                    _this8.form.get('ID_MATE').reset();

                    _this8.form.get('ID_MATE').enable();
                  } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                    _this8.form.get('ID_MATE').reset();

                    _this8.form.get('ID_MATE').disable();

                    _this8.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this8.loaderNavbar = false;
              }, function (error) {
                _this8.pnotifyService.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.loaderNavbar = false;
              this.form.get('ID_MATE').reset();
              this.form.get('ID_MATE').disable();
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
            this.loading = true; //this.search(this.getParams());
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this9 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.data = [];
            setTimeout(function () {
              _this9.loading = true;
            }, 1000); // this.service
            // .getClassesMateriais(params)
            // .pipe(
            //   finalize(() => this.loaderNavbar = false)
            //   )
            //   .subscribe(res => {
            //     if(Object.keys(res).length > 0) {
            //       if(res.status == 200){
            //         if(res['body']['responseCode'] == 200) {
            //           this.loading = true;
            //           this.noResult = false;
            //           this.data = res['body']['result'];
            //         } else if (res['body']['responseCode'] ==  404){
            //         this.noResult = true;
            //         this.pnotifyService.notice("Não há itens a serem exibidos");
            //       }
            //     }
            //   }
            // },
            // error => {
            //   this.noResult = true;
            //   this.pnotifyService.error("Erro ao carregar Classes de Materiais");
            // });
          } // getSearchExcel(params: any): void {
          //   this.loaderNavbar = true;
          //   this.dataExcel = '';
          //   this.service
          //     .getClassesMateriais(params)
          //     .pipe(finalize(() => (this.loaderNavbar = false)))
          //     .subscribe(
          //       (res: any) => {
          //         if (Object.keys(res).length > 0) {
          //           if (res['body']['responseCode'] === 200) {
          //             this.dataExcel = res['body']['result'];
          //             this.pnotifyService.success(this.dataExcel);
          //           } else if (
          //             res['body']['responseCode'] === 404
          //           ) {
          //             this.pnotifyService.notice('Nenhuma informação encontrada');
          //           }
          //         }
          //       },
          //       error => {
          //         this.pnotifyService.error('Erro ao carregar dados para excel');
          //       }
          //     );
          // }

        }, {
          key: "onExcel",
          value: function onExcel() {}
        }, {
          key: "onEdit",
          value: function onEdit(item, itemRow) {
            var _a, _b, _c, _d;

            this.modal.codMaterial = item.codMaterial;
            this.modal.descMaterial = item.descMaterial;
            this.modal.tipoMaterial = item.tipoMaterial;
            this.modalForm.idTipoAtendimento = (_a = itemRow.idTipoAtendimento) !== null && _a !== void 0 ? _a : '';
            this.modalForm.idAssociacao = (_b = itemRow.idAssociacao) !== null && _b !== void 0 ? _b : [];
            this.modalForm.idMateriaisFornecedores = (_c = itemRow.idMateriaisFornecedores) !== null && _c !== void 0 ? _c : [];
            this.modalForm.custoEntrada = (_d = itemRow.custoEntrada) !== null && _d !== void 0 ? _d : '';
            this.formModal.get('TP_ATEN').setValue(this.modalForm.idTipoAtendimento);
            this.formModal.get('DESC_ASSO').setValue(this.modalForm.idAssociacao);
            this.formModal.get('MATE_FORN').setValue(this.modalForm.idMateriaisFornecedores);
            this.formModal.get('CUST_ENTR').setValue(this.modalForm.custoEntrada);
          }
        }, {
          key: "onAdd",
          value: function onAdd(item) {
            this.modal.codMaterial = item.codMaterial;
            this.modal.descMaterial = item.descMaterial;
            this.modal.tipoMaterial = item.tipoMaterial;
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.formModal.reset();
          }
        }, {
          key: "onSaveDataModal",
          value: function onSaveDataModal() {
            var tpAtendimento = this.formModal.value['TP_ATEN'];
            var mateForne = this.formModal.value['MATE_FORN'];
            var tpMaterial = this.modal.tipoMaterial;

            if (tpAtendimento == '1' && tpMaterial == 'Distribuidora') {
              this.pnotifyService.notice('Operação não permitida: não é possivel inserir este vinculo para materiais do tipo distribuidora.');
            } else if (tpAtendimento == '3' && mateForne == '1') {
              this.pnotifyService.notice('Operação não permitida: O material em questão já está vinculado ao material principal.');
            } else {
              this.pnotifyService.success('Associação relizada com sucesso');
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

        return AbastecimentoCadastrosAmarracaoMateriaisComponent;
      }();

      AbastecimentoCadastrosAmarracaoMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: _amarracao_materiais_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosAmarracaoMateriaisService"]
        }];
      };

      AbastecimentoCadastrosAmarracaoMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'amarracao-materiais',
        template: _raw_loader_amarracao_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_amarracao_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], _amarracao_materiais_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosAmarracaoMateriaisService"]])], AbastecimentoCadastrosAmarracaoMateriaisComponent);
      /***/
    },

    /***/
    "OSCf":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/amarracao-materiais/amarracao-materiais.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OSCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "th {\n  background-color: #ccaffbfa;\n}\n\ntd, th {\n  text-align: center;\n  font-size: 13px;\n}\n\ntable th, table td {\n  padding: 1px;\n}\n\n.card-body {\n  padding: 12px;\n  text-align: -webkit-center;\n}\n\n.bg-light2 {\n  background-color: #9355f9c2;\n  padding: 0.2rem;\n  margin-bottom: 0.6rem;\n}\n\n.table-sm {\n  width: 80%;\n}\n\n.bg-info2 {\n  background-color: #f1f1f1;\n}\n\n.icone-sem-borda {\n  background: white;\n  border: hidden;\n  -webkit-border-end: inherit;\n          border-inline-end: inherit;\n}\n\n::ng-deep .border-card {\n  border: 3px dashed rgba(80, 136, 240, 0.795);\n}\n\n::ng-deep .border-danger1 {\n  border-left-color: #dc3545 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-warning1 {\n  border-left-color: #ffc107 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-success1 {\n  border-left-color: #28a745 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-primary1 {\n  border-left-color: #007bff !important;\n  border-left-width: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9hbWFycmFjYW8tbWF0ZXJpYWlzL2FtYXJyYWNhby1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwyQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBZ0JBO0VBQ0UsVUFBQTtBQWJGOztBQWdCQTtFQUNFLHlCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtBQWJGOztBQWtCRTtFQUNJLDRDQUFBO0FBZk47O0FBaUJFO0VBQ0kscUNBQUE7RUFDQSxpQ0FBQTtBQWZOOztBQWtCRTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFoQk47O0FBbUJFO0VBQ0kscUNBQUE7RUFDQSxpQ0FBQTtBQWpCTjs7QUFvQkU7RUFDSSxxQ0FBQTtFQUNBLGlDQUFBO0FBbEJOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9hbWFycmFjYW8tbWF0ZXJpYWlzL2FtYXJyYWNhby1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2NjYWZmYmZhO1xyXG59XHJcbnRkLCB0aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxudGFibGUgdGgsIHRhYmxlIHRke1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufVxyXG5cclxuLmJnLWxpZ2h0MiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzNTVmOWMyO1xyXG4gIHBhZGRpbmc6IC4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC42cmVtO1xyXG59XHJcblxyXG4vLyBpLmZhcy5mYS1wbHVzLGkuZmFzLmZhLW1pbnVze1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNhNTlhOWE7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogLjIwcmVtIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nOiAuMDVyZW07XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1wbHVze1xyXG4vLyAgIGNvbG9yOiAjMDFhNzAwO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtbWludXN7XHJcbi8vICAgY29sb3I6ICMwMWE3MDA7XHJcbi8vIH1cclxuXHJcbi50YWJsZS1zbXtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uYmctaW5mbzJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmljb25lLXNlbS1ib3JkYXtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IGhpZGRlbjtcclxuICBib3JkZXItaW5saW5lLWVuZDogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCB7IFxyXG4gIC5ib3JkZXItY2FyZHtcclxuICAgICAgYm9yZGVyOiAzcHggZGFzaGVkIHJnYmEoODAsIDEzNiwgMjQwLCAwLjc5NSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItZGFuZ2VyMXtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNkYzM1NDUhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItd2FybmluZzF7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZjMTA3IWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLXN1Y2Nlc3Mxe1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI4YTc0NSFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1wcmltYXJ5MXtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG59Il19 */";
      /***/
    },

    /***/
    "UaE9":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/amarracao-materiais/amarracao-materiais-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosAmarracaoMateriaisRoutingModule */

    /***/
    function UaE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosAmarracaoMateriaisRoutingModule", function () {
        return AbastecimentoCadastrosAmarracaoMateriaisRoutingModule;
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


      var _amarracao_materiais_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./amarracao-materiais.component */
      "G6Wp");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _amarracao_materiais_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosAmarracaoMateriaisComponent"]
        }]
      }];

      var AbastecimentoCadastrosAmarracaoMateriaisRoutingModule = function AbastecimentoCadastrosAmarracaoMateriaisRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosAmarracaoMateriaisRoutingModule);
      };

      AbastecimentoCadastrosAmarracaoMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosAmarracaoMateriaisRoutingModule);
      /***/
    },

    /***/
    "fkOy":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/amarracao-materiais/amarracao-materiais.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosAmarracaoMateriaisModule */

    /***/
    function fkOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosAmarracaoMateriaisModule", function () {
        return AbastecimentoCadastrosAmarracaoMateriaisModule;
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


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/sortable */
      "p4Ho");
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


      var _amarracao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./amarracao-materiais-routing.module */
      "UaE9");
      /* harmony import */


      var _amarracao_materiais_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./amarracao-materiais.component */
      "G6Wp");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__);

      var AbastecimentoCadastrosAmarracaoMateriaisModule = function AbastecimentoCadastrosAmarracaoMateriaisModule() {
        _classCallCheck(this, AbastecimentoCadastrosAmarracaoMateriaisModule);
      };

      AbastecimentoCadastrosAmarracaoMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_amarracao_materiais_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosAmarracaoMateriaisComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _amarracao_materiais_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosAmarracaoMateriaisRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__["CurrencyMaskModule"]]
      })], AbastecimentoCadastrosAmarracaoMateriaisModule);
      /***/
    },

    /***/
    "rdEF":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/amarracao-materiais/amarracao-materiais.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rdEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Amarração de Materiais\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onExcel()\"\r\n    [disabled]=\"true\"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"tipoAtendimento\">Tipo Atendimento</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipoAtendimento\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getSubLinhas() + '' + getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NAME\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"TP_ATEN\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getSubLinhas() + '' + getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"subLinhas\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getClasses()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_SUB_LINH\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"classes\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            (change)=\"getMateriais()\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_CLAS\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"situacoes\">Situação</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"situations\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SITU\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"IN_STAT\"\r\n            [ngClass]=\"\r\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('IN_STAT')\"\r\n              message=\"Situação é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"DS_TIPO_AMAR\">Amarração</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipoAmarracao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SITU\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"DS_TIPO_AMAR\"\r\n            [ngClass]=\"\r\n              onFieldError('DS_TIPO_AMAR') + ' ' + onFieldRequired('DS_TIPO_AMAR')\r\n            \"\r\n            >\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('DS_TIPO_AMAR')\"\r\n              message=\"Amarração é obrigatório.\"\r\n            >\r\n            </invalid-form-control>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"ID_MATE\">Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [items]=\"materiais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"ID_REFE_ERP_NM_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"ID_MATE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"ID_FORN\">Fornecedor</label>\r\n          <input\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            id=\"ID_FORN\"\r\n            type=\"text\"\r\n            formControlName=\"ID_FORN\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"NM_ORDE\">Ordenação</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"campoOrdenacao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NAME\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"NM_ORDE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"TP_ORDE\">Modo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipoOrdenacao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NAME\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"TP_ORDE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div *ngIf=\"loading\">\r\n    <ng-template #itemTemplate let-item=\"item\">\r\n      <div>\r\n        <div class=\"card-body\">\r\n          <div class=\"bg-light2 rounded\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2\">\r\n                <strong>LINHA:</strong> {{item.value.linha}}\r\n              </div>\r\n              <div class=\"col-lg-2\">\r\n                <strong>CLASSE:</strong> {{item.value.classe}}\r\n              </div>\r\n              <div class=\"col-lg-2\">\r\n                <strong>UN. MEDIDA:</strong> {{item.value.unidadeMedida}}\r\n              </div>\r\n              <div class=\"col-lg-2\">\r\n                <strong>CÓD. MATERIAL:</strong> {{item.value.codMaterial}}\r\n              </div>\r\n              <div class=\"col-lg-2\">\r\n                <strong>MATERIAL:</strong> {{item.value.descMaterial}}\r\n              </div>\r\n              <div class=\"col-lg-2\">\r\n                <strong>TIPO MATERIAL:</strong> {{item.value.tipoMaterial}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"text-center\">\r\n                <th>TIPO ATENDIMENTO</th>\r\n                <th>ASSOCIAÇÃO</th>\r\n                <th>MATERIAS/FORNECEDORES</th>\r\n                <th>CUSTO ENTRADA</th>\r\n                <th width=\"5%\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let tipoAtendimento of item.value.tipoAtendimento; let index = index\">\r\n                \r\n                <td>{{ tipoAtendimento.name }}</td>\r\n                <td>{{ tipoAtendimento.associacao ? tipoAtendimento.associacao : '-'  }}</td>\r\n                <td>{{ tipoAtendimento.materiaisFornecedores ? tipoAtendimento.materiaisFornecedores  : '-'}}</td>\r\n                <td>{{ tipoAtendimento.custoEntrada ? (tipoAtendimento.custoEntrada | currency:'BRL') : '-' }}</td>\r\n                <td width=\"5%\">\r\n                  <div>\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn-icon-sm\"\r\n                      tooltip=\"Editar\"\r\n                      placement=\"left\"\r\n                      container=\"body\"\r\n                    >\r\n                    <i\r\n                      class=\"fas fa-edit\"\r\n                      (click)=\"onEdit(item.value, tipoAtendimento) + ' ' + lgModal.show()\" \r\n                    >\r\n                    </i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div>\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Adicionar associação\"\r\n                placement=\"up\"\r\n                container=\"body\"\r\n                (click)=\"onAdd(item.value) + ' ' + lgModal.show()\" \r\n              >\r\n              <i\r\n                class=\"fas fa-plus mr-1\"\r\n              >\r\n              </i>\r\n              Associação\r\n              </button>\r\n            </div>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <bs-sortable\r\n      [(ngModel)]=\"data\"\r\n      [itemTemplate]=\"itemTemplate\"\r\n      itemClass=\"card mb-3\"\r\n      itemActiveClass=\"border-card bg-info2 shadow\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <div *ngIf=\"noResult\"class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%\">\r\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n<div\r\n  bsModal\r\n  #lgModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"dialog-sizes-name1\"\r\n>\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n          Cadastro de associação\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          (click)=\"lgModal.hide() + '' + onClose()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\">\r\n          <div id=\"modal-cadastro\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                (click)=\"onSaveDataModal() + ' ' + lgModal.hide()\"\r\n                [disabled]=\"formModal.status == 'INVALID'\"\r\n                class=\"btn\"\r\n              >\r\n                Guardar\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row justify-content-md-center mt-3\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <p class=\"pFont\">\r\n                      <strong>CÓD. MATERIAL</strong><br />\r\n                      {{ modal.codMaterial }}\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p class=\"pFont\">\r\n                      <strong>MATERIAL</strong><br />\r\n                      {{ modal.descMaterial }}\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p class=\"pFont\">\r\n                      <strong>TIPO DE MATERIAL</strong><br />\r\n                      {{ modal.tipoMaterial }}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <form [formGroup]=\"formModal\" autocomplete=\"off\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label for=\"TP_ATEN\">Tipo Atendimento</label>\r\n                      <ng-select\r\n                        [searchable]=\"true\"\r\n                        [clearable]=\"false\"\r\n                        [items]=\"tipoAtendimentoModal\"\r\n                        [virtualScroll]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        [closeOnSelect]=\"true\"\r\n                        placeholder=\"Selecione...\"\r\n                        bindLabel=\"NAME\"\r\n                        bindValue=\"ID\"\r\n                        formControlName=\"TP_ATEN\"\r\n                      >\r\n                      </ng-select>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label for=\"DESC_ASSO\">Associação</label>\r\n                      <ng-select\r\n                        [searchable]=\"true\"\r\n                        [clearable]=\"true\"\r\n                        [multiple]=\"true\"\r\n                        [maxSelectedItems]=\"2\"\r\n                        [items]=\"associcaoModal\"\r\n                        [virtualScroll]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        [closeOnSelect]=\"false\"\r\n                        placeholder=\"Selecione...\"\r\n                        bindLabel=\"NAME\"\r\n                        bindValue=\"ID\"\r\n                        formControlName=\"DESC_ASSO\"\r\n                        >\r\n                        <!-- [ngClass]=\"onFieldErrorModal('ID_DEPO') + ' ' + onFieldRequiredModal('ID_DEPO')\" -->\r\n                      </ng-select>\r\n                      <!-- <invalid-form-control\r\n                        [show]=\"onFieldInvalidModal('ID_DEPO')\"\r\n                        message=\"Depósito é obrigatório.\"\r\n                      >\r\n                      </invalid-form-control> -->\r\n                    </div>\r\n                    <div class=\"form-group col-lg-9\">\r\n                      <label for=\"MATE_FORN\">Materiais/Fornecedor</label>\r\n                      <ng-select\r\n                        [searchable]=\"true\"\r\n                        [clearable]=\"true\"\r\n                        [multiple]=\"true\"\r\n                        [items]=\"materialFornecedorModal\"\r\n                        [virtualScroll]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        [closeOnSelect]=\"false\"\r\n                        placeholder=\"Selecione...\"\r\n                        bindLabel=\"NAME\"\r\n                        bindValue=\"ID\"\r\n                        formControlName=\"MATE_FORN\"\r\n                      >\r\n                      </ng-select>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-3\">\r\n                      <label for=\"TP_ATEN\">Custo Entrada(R$)</label>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        currencyMask [options]=\"current\" placeholder=\"0,00\"\r\n                        type=\"text\"\r\n                        id=\"CUST_ENTR\"\r\n                        formControlName=\"CUST_ENTR\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "zSWE":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/amarracao-materiais/amarracao-materiais.service.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosAmarracaoMateriaisService */

    /***/
    function zSWE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosAmarracaoMateriaisService", function () {
        return AbastecimentoCadastrosAmarracaoMateriaisService;
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

      var AbastecimentoCadastrosAmarracaoMateriaisService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosAmarracaoMateriaisService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosAmarracaoMateriaisService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosAmarracaoMateriaisService, [{
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
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/materiais"), {
              params: {
                ID_CLAS: params['idClasses'].toString(),
                ID_APOI_TIPO_MATE: params['idTipoMaterial'].toString(),
                IN_STAT: params['idSituacao']
              },
              observe: "response"
            });
          }
        }]);

        return AbastecimentoCadastrosAmarracaoMateriaisService;
      }();

      AbastecimentoCadastrosAmarracaoMateriaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosAmarracaoMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AbastecimentoCadastrosAmarracaoMateriaisService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=amarracao-materiais-amarracao-materiais-module-es5.js.map