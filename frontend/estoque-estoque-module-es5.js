(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-estoque-module"], {
    /***/
    "0Sg0":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/comercial/estoque/estoque-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ComercialEstoqueRoutingModule */

    /***/
    function Sg0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialEstoqueRoutingModule", function () {
        return ComercialEstoqueRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "DWTV"); // Components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialEstoqueListaComponent"]
      }];

      var ComercialEstoqueRoutingModule = function ComercialEstoqueRoutingModule() {
        _classCallCheck(this, ComercialEstoqueRoutingModule);
      };

      ComercialEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialEstoqueRoutingModule);
      /***/
    },

    /***/
    "2mcI":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/estoque.component.ts ***!
      \****************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueComponent */

    /***/
    function mcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueComponent", function () {
        return TecnologiaInformacaoEstoqueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./estoque.component.html */
      "nzcQ");
      /* harmony import */


      var _estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estoque.component.scss */
      "ekBG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var TecnologiaInformacaoEstoqueComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueComponent(activatedRoute, router, atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/tecnologia-informacao/home'
          }, {
            descricao: 'Inventario'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(TecnologiaInformacaoEstoqueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.titleService.setTitle('Inventario');
            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this2 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this2.atividades = response['result'];
                _this2.loaderFullScreen = false;
              } else {
                _this2.handleAtividadesInternasError();
              }
            }, function (error) {
              _this2.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.router.navigate(['/tecnologia-informacao/home']);
          }
        }]);

        return TecnologiaInformacaoEstoqueComponent;
      }();

      TecnologiaInformacaoEstoqueComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      TecnologiaInformacaoEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-estoque',
        template: _raw_loader_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], TecnologiaInformacaoEstoqueComponent);
      /***/
    },

    /***/
    "DWTV":
    /*!********************************************************************!*\
      !*** ./src/app/modules/comercial/estoque/lista/lista.component.ts ***!
      \********************************************************************/

    /*! exports provided: ComercialEstoqueListaComponent */

    /***/
    function DWTV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialEstoqueListaComponent", function () {
        return ComercialEstoqueListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "QUEj");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Du9e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _estoque_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../estoque.service */
      "nkG6");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../comercial.service */
      "VgqD"); // Services


      var ComercialEstoqueListaComponent = /*#__PURE__*/function () {
        function ComercialEstoqueListaComponent(modalService, router, location, formBuilder, pnotifyService, activatedRoute, atividadesService, estoqueService, titleService, comercialService) {
          _classCallCheck(this, ComercialEstoqueListaComponent);

          this.modalService = modalService;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.estoqueService = estoqueService;
          this.titleService = titleService;
          this.comercialService = comercialService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Inventario'
          }];
          this.subtitles = [{
            text: 'Estoque suspenso',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.maxSize = 10;
          this.clientesPagination = [];
          this.detalhes = false;
          this.idMaterial = 0;
          this.totalItems = 10;
          this.showAdvancedFilter = true;
          this.maxSizeComprometido = 5;
          this.itemsPerPageComprometido = 7;
          this.totalComprometido = 5;
          this.currentPageComprometido = 1;
          this.maxSizeSuspenso = 5;
          this.itemsPerPageSuspenso = 7;
          this.totalSuspenso = 5;
          this.currentPageSuspenso = 1;
          this.almacenes = [];
          this.depositos = [];
          this.filteredDepositos = [];
          this.grupos = [];
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.dados = [];
          this.dadosReturned = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.datos = [];
          this.estoqueUnidades = [];
          this.pedidosCompra = [];
          this.pedidos = [];
          this.totaisPedCompra = [];
          this.estoqueComprometido = [];
          this.totaisComprometido = [];
          this.detalhesLote = [];
          this.totaisLote = [];
          this.detalhesSuspenso = [];
          this.detalhesAlmacen = [];
          this.orderBy = ''; // Variable para almacenar el nombre de la columna seleccionada para ordenar

          this.orderType = 'asc'; // Variable para almacenar el tipo de orden (ascendente o descendente)

          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialEstoqueListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.getFiltros();
            this.setFormFilter();
            this.titleService.setTitle('Inventario');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFiltros",
          value: function getFiltros() {
            var _this3 = this;

            this.estoqueService.getFiltros().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response[0].responseCode == 200) {
                  _this3.almacenes = response[0].result;
                }

                _this3.almacenes.unshift({
                  ID: 0,
                  ALMACEN: 'TODOS'
                });

                if (response[1].responseCode == 200) {
                  _this3.depositos = response[1].result;
                  _this3.filteredDepositos = _this3.depositos;
                }

                if (response[2].responseCode == 200) {
                  for (var i = 0; i < response[2].result.length; i++) {
                    if (response[2].result[i].id != 2) {
                      _this3.linhas.push(response[2].result[i]);
                    }
                  }

                  _this3.linhas.unshift({
                    id: 0,
                    descricao: 'EXIBIR  TODOS'
                  });
                }

                if (response[1].responseCode == 200) {
                  _this3.classes = response[1].result;
                  _this3.filteredClasses = _this3.classes;

                  _this3.filteredClasses.unshift({
                    idClasse: 0,
                    idLinha: 0,
                    nomeClasse: 'TODOS'
                  });
                }
              },
              error: function error(_error) {
                _this3.handleSearchError('Ocorreu um erro ao carregar filtros.');
              }
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var formValue = {
              id_almacen: 0,
              id_familia: 0,
              id_grupo: 0,
              id_linea: 0,
              codigo_material: null,
              nombre_material: null,
              registros: 300
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);
                /* this.search(params); */

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
                      }
                    }
                  });
                });
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              grupo: [formValue.grupo],
              empresa: [formValue.empresa],
              deposito: [formValue.deposito],
              linha: [formValue.linha],
              classeMaterial: [formValue.classeMaterial],
              registros: [formValue.registros],
              codMaterial: [formValue.codMaterial],
              descMaterial: [formValue.descMaterial],
              estoqueDisponivel: [formValue.estoqueDisponivel]
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var _this4 = this;

            /*  this.setRouterParams(this.verificaParams());
             this.currentPage = 1;
             this.itemsPerPage = this.form.value.registros;
                   this.scrollToFilter.nativeElement.scrollIntoView({
               behavior: 'instant',
             }); */
            this.totalItems = 0;
            this.dados = [];
            this.dadosReturned = [];
            var formValue = this.form.value;
            this.loaderNavbar = true;
            var params = {
              id_almacen: formValue.empresa,
              id_familia: formValue.classeMaterial,
              id_grupo: formValue.grupo,
              id_linea: formValue.linha,
              codigo_material: formValue.codMaterial,
              nombre_material: formValue.descMaterial,
              registros: formValue.registros
            };
            this.comercialService.getMateriales(params).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this4.loaderNavbar = false;
                  _this4.dados = [];
                  _this4.datos = response.result;
                  _this4.dadosReturned = _this4.datos.slice(0, _this4.itemsPerPage);
                  _this4.totalItems = _this4.datos.length;
                  /* console.log(this.datos); */

                  _this4.dadosEmpty = false;
                } else {
                  _this4.loaderNavbar = false;
                  _this4.dadosEmpty = true;
                }
              }
            });
          }
        }, {
          key: "sincronizar",
          value: function sincronizar() {
            var _this5 = this;

            this.comercialService.sincronizarMateriales().subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {} else {}
              },
              error: function error(_error2) {
                _this5.handleSearchError('Ocorreu um erro ao carregar filtros.');
              }
            });
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
            this.form.controls.registros.setValue(300);
            this.filteredDepositos = this.depositos;
            this.showAdvancedFilter = true;
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            console.log(params);
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            /* this.search(params); */
          }
        }, {
          key: "onAdvancedFilter",
          value: function onAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
          /* search(params: any) {
            this.loaderNavbar = true;
            this.idEmpresa = params.deposito;
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.dados = [];
            this.dadosReturned = [];
            this.totalItems = 0;
                this.estoqueService
              .getEstoqueAtual(params)
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                })
              )
              .subscribe({
                next: (response: JsonResponse) => {
                  if (response.success === true) {
                    this.dados = response.data;
                    this.dadosReturned = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
                  } else {
                    this.dadosEmpty = true;
                  }
                },
                error: (error: any) => {
                  this.handleSearchError('Erro ao carregar lista de materiais.');
                }
              });
          } */

          /* verificaParams() {
            let params: any = {};
                if (this.form.value.empresa) {
              params.empresa = parseInt(this.form.value.empresa);
            }
                if (this.form.value.deposito) {
              params.deposito = parseInt(this.form.value.deposito);
            }
                if (this.form.value.linha) {
              params.linha = parseInt(this.form.value.linha);
            }
                if (this.form.value.classeMaterial) {
              params['classe'] = parseInt(this.form.value.classeMaterial);
            }
                if (this.form.value.estoqueDisponivel) {
              params.estoqueDisponivel = this.form.value.estoqueDisponivel;
            }
                if (this.form.value.codMaterial) {
              params.codMaterial = parseInt(this.form.value.codMaterial);
            }
                if (this.form.value.descMaterial) {
              params.descMaterial = btoa(this.form.value.descMaterial);
            }
                if (this.form.value.registros) {
              params.registros = this.form.value.registros;
            }
                return params;
          } */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.currentPage = event.page;
            this.getPaginateData();
          }
        }, {
          key: "getPaginateData",
          value: function getPaginateData() {
            var startIndex = (this.currentPage - 1) * this.itemsPerPage;
            var endIndex = startIndex + this.itemsPerPage;
            return this.datos.slice(startIndex, endIndex);
          }
        }, {
          key: "onPageChangedComprometido",
          value: function onPageChangedComprometido(event) {
            //console.log(event)
            this.currentPageComprometido = event.page;
            this.getPaginateDataComprometido();
          }
        }, {
          key: "getPaginateDataComprometido",
          value: function getPaginateDataComprometido() {
            var startIndex = (this.currentPageComprometido - 1) * this.itemsPerPageComprometido;
            var endIndex = startIndex + this.itemsPerPageComprometido; //this.getPaginatedData = this.resuldata.slice(startIndex, endIndex);

            return this.estoqueComprometido.slice(startIndex, endIndex);
          }
        }, {
          key: "onPageChangeSuspenso",
          value: function onPageChangeSuspenso(event) {
            //console.log(event)
            this.currentPageSuspenso = event.page;
            this.getPaginateDataComprometido();
          }
        }, {
          key: "getPaginateDatSuspenso",
          value: function getPaginateDatSuspenso() {
            var startIndex = (this.currentPageSuspenso - 1) * this.itemsPerPageSuspenso;
            var endIndex = startIndex + this.itemsPerPageSuspenso; //this.getPaginatedData = this.resuldata.slice(startIndex, endIndex);

            return this.estoqueComprometido.slice(startIndex, endIndex);
          }
        }, {
          key: "onChangeAlmacen",
          value: function onChangeAlmacen(id) {
            /* this.form.controls.deposito.reset(); */

            /*  console.log(this.filteredDepositos);
             this.filteredDepositos = this.depositos.filter(
               (value: any) => value.idEmpresa == id
             );
             if(this.filteredDepositos.length == 1){
               this.form.controls.deposito.setValue(this.filteredDepositos[0].idEmpresa);
             } */
          }
        }, {
          key: "onChangeDeposito",
          value: function onChangeDeposito(deposito) {
            this.form.controls.empresa.setValue(deposito.idEmpresa);
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(idLinha) {
            this.form.controls.classeMaterial.setValue(0);

            if (idLinha != 0) {
              this.filteredClasses = this.classes.filter(function (value) {
                return value.idLinha == idLinha;
              });
              this.filteredClasses.unshift({
                idClasse: 0,
                idLinha: 0,
                nomeClasse: 'TODOS'
              });
            } else {
              this.filteredClasses = this.classes;
            }
          }
        }, {
          key: "onChangeClasse",
          value: function onChangeClasse(clase) {
            var _this6 = this;

            this.form.controls.grupo.reset();
            var idClasse = clase.idClasse;
            this.comercialService.getLinhasId(idClasse).subscribe({
              next: function next(response) {
                if (response.responseCode == 200) {
                  _this6.grupos = response.result;
                }

                _this6.grupos.unshift({
                  id: 0,
                  descricao: 'TODOS'
                });
              },
              error: function error(_error3) {
                _this6.handleSearchError('Ocurrió un error al cargar los datos.');
              }
            });
          }
        }, {
          key: "onChangegrupo",
          value: function onChangegrupo(clase) {
            var _this7 = this;

            /*      console.log(clase);
             */
            this.form.controls.linha.reset();
            var idClase = clase.id_linha;
            this.comercialService.getSublineasId(idClase).subscribe({
              next: function next(response) {
                if (response.responseCode == 200) {
                  _this7.linhas = response.result;
                }
              },
              error: function error(_error4) {
                _this7.handleSearchError('Ocurrió un error al cargar los datos.');
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(modalRef, titulo, idMaterial, codigoMaterial, estoqueSuspenso) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.possuiLote = false;
            this.nomeMaterial = "(".concat(codigoMaterial, ") ").concat(titulo);
            this.codMaterial = idMaterial;
            console.log(idMaterial);

            if (estoqueSuspenso > 0) {
              this.possuiLote = true;
            }

            this.onSelectComprometidos();
            /*     this.onGetOutrasUnidades(idMaterial); */

            setTimeout(function () {
              _this8.loaderNavbar = false;
              _this8.modalRef = _this8.modalService.show(modalRef, {
                "class": 'modal-xl'
              });
            }, 600);
          }
        }, {
          key: "closeModal",
          value: function closeModal(modalRef) {
            this.modalRef.hide();
            this.codMaterial = null;
          }
        }, {
          key: "onSelectPedidos",
          value: function onSelectPedidos() {
            this.onGetPedidosCompra(this.idEmpresa, this.codMaterial);
          }
        }, {
          key: "onSelectComprometidos",
          value: function onSelectComprometidos() {
            this.onGetEstoqueComprometido(this.codMaterial);
          }
        }, {
          key: "onSelectLote",
          value: function onSelectLote() {
            this.onGetLote(this.idEmpresa, this.codMaterial);
          }
        }, {
          key: "onSelectEstoqueSuspenso",
          value: function onSelectEstoqueSuspenso() {
            this.onGetEstoqueSuspenso(this.codMaterial);
          }
          /*  onSelectEstoqueAlmacenes() {
             this.onGetEstoqueSuspenso(this.codMaterial);
           } */

        }, {
          key: "onSelectEstoqueAlmacen",
          value: function onSelectEstoqueAlmacen() {
            this.onGetEstoqueAlmacen();
          }
          /* onGetOutrasUnidades(idMaterial: number) {
            this.unidadesLoaded = false;
                this.estoqueService.getOutrasUnidades(idMaterial).subscribe({
              next: (response: any) => {
                if (response.responseCode === 200) {
                  this.estoqueUnidades = response.result;
                  this.unidadesLoaded = true;
                } else {
                  this.pnotifyService.notice('Datos no encontrados.');
                }
              },
              error: (error: any) => {
                this.handleSearchError('Erro ao carregar estoque de outras unidades.');
              }
            });
          } */

        }, {
          key: "onGetPedidosCompra",
          value: function onGetPedidosCompra(idEmpresa, idMaterial) {
            var _this9 = this;

            this.pedidosCompraLoaded = false;
            this.pedidosCompraEmpty = false;
            var params = {
              idEmpresa: idEmpresa,
              idMaterial: idMaterial
            };
            this.estoqueService.getPedidosCompra(params).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this9.pedidosCompra = response.result.analitico;
                  _this9.totaisPedCompra = response.result.total;
                  _this9.pedidosCompraLoaded = true;
                } else {
                  _this9.pnotifyService.notice('Datos no encontrados.');

                  _this9.pedidosCompraEmpty = true;
                }
              },
              error: function error(_error5) {
                _this9.handleSearchError('Erro ao carregar pedidos de compra.');
              }
            });
          }
        }, {
          key: "onGetEstoqueComprometido",
          value: function onGetEstoqueComprometido(idMaterial) {
            var _this10 = this;

            this.comprometidoLoaded = false;
            this.comprometidoEmpty = false;
            var params = {
              idMaterial: idMaterial
            };
            this.estoqueService.getStockComprometido(params).subscribe(function (response) {
              if (response.responseCode === 200) {
                _this10.estoqueComprometido = response.result.analitico;
                _this10.totaisComprometido = response.result.total;
                _this10.totalComprometido = response.result.analitico.length; //console.log(this.totalComprometido)

                _this10.comprometidoLoaded = true;
              } else {
                _this10.pnotifyService.notice('Datos no encontrados.');

                _this10.comprometidoEmpty = true;
              }
            }, function (error) {
              _this10.handleSearchError('Erro ao carregar estoque comprometido.');
            });
          }
        }, {
          key: "onGetLote",
          value: function onGetLote(idEmpresa, idMaterial) {
            var _this11 = this;

            this.loteLoaded = false;
            this.loteEmpty = false;
            var params = {
              idEmpresa: idEmpresa,
              idMaterial: idMaterial
            };
            this.estoqueService.getLote(params).subscribe(function (response) {
              if (response.responseCode === 200) {
                _this11.detalhesLote = response.result.analitico;
                _this11.totaisLote = response.result.total;
                _this11.loteLoaded = true;
              } else {
                _this11.pnotifyService.notice('Datos no encontrados.');

                _this11.loteEmpty = true;
              }
            }, function (error) {
              _this11.handleSearchError('Erro ao carregar dados de lote.');
            });
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            var _this12 = this;

            if (this.orderBy === column) {
              this.orderType = this.orderType === 'asc' ? 'desc' : 'asc'; // Cambiar el tipo de orden si se hace clic nuevamente en la misma columna
            } else {
              this.orderBy = column;
              this.orderType = 'asc'; // Establecer el orden ascendente por defecto al hacer clic en una nueva columna
            } // Ordenar la matriz resultcliente en función del orden seleccionado


            this.datos.sort(function (a, b) {
              var valueA = a[column]
              /* .toUpperCase(); */
              ;
              var valueB = b[column]
              /* .toUpperCase() */
              ;
              /*       console.log(this.datos);
                    console.log(column); */

              if (valueA < valueB) {
                return _this12.orderType === 'asc' ? -1 : 1;
              }

              if (valueA > valueB) {
                return _this12.orderType === 'asc' ? 1 : -1;
              }

              return 0;
            });
          }
        }, {
          key: "onGetEstoqueSuspenso",
          value: function onGetEstoqueSuspenso(idMaterial) {
            var _this13 = this;

            this.suspensoLoaded = false;
            this.suspensoEmpty = false;
            var params = {
              idMaterial: idMaterial
            };
            this.estoqueService.getStockSuspeso(params).subscribe(function (response) {
              if (response.responseCode === 200) {
                _this13.detalhesSuspenso = response.result.analitico;
                _this13.totalSuspenso = response.result.total;
                _this13.suspensoLoaded = true;
              } else {
                _this13.pnotifyService.notice('Datos no encontrados.');

                _this13.suspensoEmpty = true;
              }
            }, function (error) {
              _this13.handleSearchError('Erro ao carregar dados de estoque suspenso.');
            });
          }
        }, {
          key: "onGetEstoqueAlmacen",
          value: function onGetEstoqueAlmacen() {
            var _this14 = this;

            this.suspensoLoaded = false;
            this.suspensoEmpty = false;
            var params = {
              idMaterial: this.codMaterial
            };
            this.estoqueService.getStockAlmacenes(params).subscribe(function (response) {
              console.log(response);

              if (response.responseCode === 200) {
                _this14.detalhesAlmacen = response.result;
                _this14.suspensoLoaded = true;
              } else {
                _this14.pnotifyService.notice('Datos no encontrados.');

                _this14.suspensoEmpty = true;
              }
            }, function (error) {
              _this14.handleSearchError('Error al cargar los datos de Almacen');
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
        }, {
          key: "classComparativo",
          value: function classComparativo(value) {
            var textClass = '';

            if (value > 0) {
              textClass = 'text-success';
            } else if (value < 0) {
              textClass = 'text-danger';
            }

            return textClass;
          }
        }, {
          key: "estoqueSuspensoClassStatusBorder",
          value: function estoqueSuspensoClassStatusBorder(suspenso) {
            var borderClass = '';

            if (suspenso > 0) {
              borderClass = 'border-danger';
            } else {
              borderClass = 'border-light';
            }

            return borderClass;
          }
        }, {
          key: "estoqueComprometidoClassStatusBorder",
          value: function estoqueComprometidoClassStatusBorder(suspenso) {
            var borderClass = '';

            if (suspenso > 0) {
              borderClass = 'border-primary';
            } else {
              borderClass = 'border-light';
            }

            return borderClass;
          }
        }, {
          key: "handleSearchError",
          value: function handleSearchError() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.pnotifyService.error(msg);
            this.location.back();
          }
        }]);

        return ComercialEstoqueListaComponent;
      }();

      ComercialEstoqueListaComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: _estoque_service__WEBPACK_IMPORTED_MODULE_10__["ComercialEstoqueService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"]
        }];
      };

      ComercialEstoqueListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialEstoqueListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-estoque-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], _estoque_service__WEBPACK_IMPORTED_MODULE_10__["ComercialEstoqueService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], _comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"]])], ComercialEstoqueListaComponent);
      /***/
    },

    /***/
    "Du9e":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/comercial/estoque/lista/lista.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function Du9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .dropdown-item:hover {\n  cursor: pointer;\n}\n::ng-deep .card-title {\n  font-size: 1.05rem;\n}\n::ng-deep .card:hover {\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZXN0b3F1ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2VzdG9xdWUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "QUEj":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/estoque/lista/lista.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QUEj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Estoque\">\r\n  <button type=\"button\" (click)=\"onResetForm()\">\r\n    Limpiar\r\n  </button>\r\n  <button type=\"button\" (click)=\"onFilter()\" [disabled]=\"!form.valid\">\r\n    Filtrar\r\n  </button>\r\n  <button type=\"button\" (click)=\"sincronizar()\" [disabled]=\"!form.valid\">\r\n    <i class=\"fas fa-sync\"></i> Sincronizar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div #scrollToFilter>\r\n    <advanced-filter>\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-lg-3\">\r\n            <label for=\"empresa\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"empresas\"\r\n              formControlName=\"empresa\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"empresa\"\r\n              bindLabel=\"nomeEmpresa\"\r\n              bindValue=\"idEmpresa\"\r\n              (change)=\"onChangeEmpresa($event.idEmpresa)\"\r\n              [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired('empresa')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('empresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div> -->\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"empresa\"> Almacén </label>\r\n            <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"almacenes\" formControlName=\"empresa\"\r\n              [virtualScroll]=\"true\" labelForId=\"empresa\" bindLabel=\"ALMACEN\" bindValue=\"id\"\r\n              (change)=\"onChangeAlmacen($event.id)\"\r\n              [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired('empresa')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('empresa')\"\r\n              message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <!-- <div class=\"form-group col-lg-3\">\r\n            <label for=\"deposito\">Depósito</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"filteredDepositos\"\r\n              formControlName=\"deposito\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"deposito\"\r\n              bindLabel=\"nomeDeposito\"\r\n              bindValue=\"idDeposito\"\r\n              (change)=\"onChangeDeposito($event)\"\r\n              [ngClass]=\"onFieldError('deposito') + ' ' + onFieldRequired('deposito')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('deposito')\" message=\"Depósito é obrigatório.\"></invalid-form-control>\r\n          </div> -->\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"linha\">Familia</label>\r\n            <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"classes\" formControlName=\"classeMaterial\"\r\n              [virtualScroll]=\"true\" labelForId=\"classeMaterial\" bindLabel=\"nomeClasse\" bindValue=\"idClasse\"\r\n              (change)=\"onChangeClasse($event)\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"linha\">Grupo</label>\r\n            <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"grupos\" formControlName=\"grupo\"\r\n              [virtualScroll]=\"true\" labelForId=\"classeMaterial\" bindLabel=\"descricao\" bindValue=\"id_linha\"\r\n              (change)=\"onChangegrupo($event)\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"classeMaterial\">Linea</label>\r\n            <ng-select [searchable]=\"true\" [clearable]=\"false\" [items]=\"linhas\" formControlName=\"linha\"\r\n              [virtualScroll]=\"true\" labelForId=\"classeMaterial\" bindLabel=\"NM_SUB_LINH\" bindValue=\"ID\">\r\n            </ng-select>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-3 mb-0\">\r\n            <label for=\"codMaterial\">Código material</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"codMaterial\" (keydown.enter)=\"onFilter()\">\r\n          </div>\r\n          <div class=\"form-group col-lg-4 mb-0\">\r\n            <label for=\"descMaterial\">Nombre material</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"descMaterial\" (keydown.enter)=\"onFilter()\">\r\n          </div>\r\n          <!-- <div class=\"form-group col-lg-3 mb-0\">\r\n            <label for=\"estoqueDisponivel\">Solo stock disponible</label>\r\n            <select class=\"form-control\" id=\"estoqueDisponivel\" formControlName=\"estoqueDisponivel\">\r\n              <option value=\"0\">Mostrar todo\r\n              </option>\r\n              <option value=\"1\">Disponible</option>\r\n              <option value=\"2\">No disponible</option>\r\n            </select>\r\n          </div> -->\r\n          <div class=\"form-group col-lg-2 mb-0\">\r\n            <label for=\"registros\">Registros</label>\r\n            <select class=\"form-control\" id=\"registros\" formControlName=\"registros\">\r\n              <option>25</option>\r\n              <option>50</option>\r\n              <option>100</option>\r\n              <option>200</option>\r\n              <option>300</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n  </div>\r\n  <subtitles [data]=\"subtitles\" [show]=\"dados.length > 0 && !dadosEmpty\">\r\n  </subtitles>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"datos.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-truncate text-center\"\r\n            (click)=\"setOrderBy('codigo_material')\">\r\n              <thead-sorter value=\"codigo\" [active]=\"orderBy == 'codigo'\" [sort]=\"orderType\"> Código </thead-sorter>\r\n            </th>\r\n            <th class=\"text-truncate text-left\"\r\n            (click)=\"setOrderBy('nombre')\">\r\n              <thead-sorter value=\"Nombre Material\"  [active]=\"orderBy == 'Nombre Material'\" [sort]=\"orderType\"></thead-sorter>\r\n            </th>\r\n            <th class=\"text-truncate text-center\"\r\n            (click)=\"setOrderBy('sigla')\">\r\n              <thead-sorter value=\"Unidad\"></thead-sorter>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <ng-container>\r\n            <tr *ngFor=\"let dato of getPaginateData()\">\r\n              <td class=\"font-weight-bold hover text-center\"\r\n                (click)=\"openModal(modalDetalhes, dado.nombre, dato.id_material, dato.codigo_material, dato.cantidad)\">\r\n                {{dato.codigo_material}}</td>\r\n              <td class=\"font-weight-bold hover text-left\"\r\n                (click)=\"openModal(modalDetalhes, dato.nombre, dato.id_material, dato.codigo_material, dato.cantidad)\">\r\n                {{dato.nombre}}</td>\r\n              <td class=\"font-weight-bold hover text-center\"\r\n                (click)=\"openModal(modalDetalhes, dato.nombre, dato.id_material, dato.codigo_material, dato.cantidad)\">\r\n                {{dato.sigla}}</td>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-template>\r\n      </custom-table>\r\n\r\n      <empty-result message=\"Ningún registro encontrado.\" *ngIf=\"dadosEmpty\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n<ng-template #modalDetalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n      {{ nomeMaterial }}\r\n    </h4>\r\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(modalDetalhes)\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <tabset>\r\n      <!-- <tab heading=\"Estoque outras unidades\" class=\"border-right border-left border-bottom\">\r\n        <div class=\"px-3 pt-3\">\r\n          <div class=\"form-row\" *ngIf=\"unidadesLoaded\">\r\n            <div class=\"form-group col-lg-3\" *ngFor=\"let estoque of estoqueUnidades\">\r\n              <label>{{ estoque.descEmpresa }}</label>\r\n              <div>{{ estoque.estoque | number:'1.3-3' }} {{ estoque.unidade }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!unidadesLoaded\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n        </div>\r\n      </tab> -->\r\n\r\n      <tab heading=\"Stock comprometido\" class=\"border-right border-left border-bottom\"\r\n        (selectTab)=\"onSelectComprometidos()\">\r\n        <div class=\"p-3\">\r\n          <div *ngIf=\"comprometidoLoaded\">\r\n            <div class=\"d-flex\">\r\n              <div class=\"legend blue\">\r\n                <div class=\"square\"></div>\r\n                <div class=\"text\">STOCK COMPROMETIDO</div>\r\n              </div>\r\n            </div>\r\n            <custom-table [config]=\"tableConfig\" *ngIf=\"estoqueComprometido.length > 0 && !comprometidoEmpty\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th class=\"text-center\">Código</th>\r\n                  <th class=\"text-center\">Oferta</th>\r\n                  <th class=\"text-center\">Fecha</th>\r\n                  <th class=\"text-center\">Cliente</th>\r\n                  <th class=\"text-center\">Vendedor</th>\r\n                  <th class=\"text-center\">Cantidad</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of getPaginateDataComprometido()\">\r\n                  <td [ngClass]=\"estoqueComprometidoClassStatusBorder(item.id_oferta)\" class=\"text-center\">{{\r\n                    item.codigo_oferta }}</td>\r\n                  <td class=\"text-center\">{{ item.nombre_oferta }}</td>\r\n                  <td class=\"text-center\">{{ item.fecha_oferta }}</td>\r\n                  <td class=\"text-center\">{{ item.cliente }}</td>\r\n                  <td class=\"text-center\">{{ item.vendedor }}</td>\r\n                  <td class=\"text-center\">{{ item.cantidad | number:'1.4-4' }} {{ item.unidad }}</td>\r\n                </tr>\r\n                <tr class=\"bg-dark text-center text-dark\">\r\n                  <td colspan=\"4\" class=\"border-dark\"></td>\r\n                  <td><strong>Total</strong></td>\r\n                  <td class=\"text-center\"><strong>{{ totaisComprometido.cantidad | number:'1.4-4' }}</strong></td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n          <empty-result message=\"Ninguna información encontrada\" class=\"my-4\"\r\n            *ngIf=\"comprometidoEmpty && !comprometidoLoaded\"></empty-result>\r\n            <div class=\"d-flex justify-content-center mt-3\" >\r\n              <pagination [maxSize]=\"maxSizeComprometido\" [(totalItems)]=\"totalComprometido\"\r\n                (pageChanged)=\"onPageChangedComprometido($event)\" [(itemsPerPage)]=\"itemsPerPageComprometido\"\r\n                [boundaryLinks]=\"true\" [(ngModel)]=\"currentPageComprometido\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n              </pagination>\r\n            </div>\r\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!comprometidoLoaded && !comprometidoEmpty\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Stock en suspenso\" class=\"border-right border-left border-bottom\"\r\n        (selectTab)=\"onSelectEstoqueSuspenso()\" *ngIf=\"true\">\r\n        <div class=\"p-3\" >\r\n          <div class=\"d-flex\" *ngIf=\"suspensoLoaded\">\r\n            <div class=\"legend red\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">STOCK EN SUSPENSO</div>\r\n            </div>\r\n          </div>\r\n          <custom-table [config]=\"tableConfig\" *ngIf=\"detalhesSuspenso.length > 0 && suspensoLoaded\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Fecha</th>\r\n                <th scope=\"col\" class=\"text-center\">Descripción</th>\r\n                <th scope=\"col\" class=\"text-center\">Cantidad</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of detalhesSuspenso\">\r\n                <td [ngClass]=\"estoqueSuspensoClassStatusBorder(item.id)\" class=\"text-center\">{{ item.fecha }}</td>\r\n                <td class=\"text-center\" [ngClass]=\"border-danger\" class=\"text-center\">{{ item.descripcion }}</td>\r\n                <td class=\"text-center\" [ngClass]=\"border-danger\">{{ item.cantidad | number:'1.3-3' }} {{ item.unidad }}\r\n                </td>\r\n              </tr>\r\n              <tr class=\"bg-dark text-center text-dark\">\r\n                <td class=\"border-dark\"></td>\r\n                <td><strong>Total</strong></td>\r\n                <td class=\"text-center\"><strong>{{ totalSuspenso.cantidad | number:'1.4-4' }}</strong></td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <empty-result message=\"Ninguna información encontrada\" class=\"my-4\"\r\n            *ngIf=\"suspensoEmpty && !suspensoLoaded\"></empty-result>\r\n            <div class=\"d-flex justify-content-center mt-3\" >\r\n              <pagination [maxSize]=\"maxSizeSuspenso\" [(totalItems)]=\"totalSuspenso\"\r\n                (pageChanged)=\"onPageChangedSuspenso($event)\" [(itemsPerPage)]=\"itemsPerPageSuspenso\"\r\n                [boundaryLinks]=\"true\" [(ngModel)]=\"currentPageSuspenso\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n              </pagination>\r\n            </div>\r\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!suspensoLoaded && !suspensoEmpty\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Stock en almacenes\" class=\"border-right border-left border-bottom\"\r\n        (selectTab)=\"onGetEstoqueAlmacen()\" >\r\n        <div class=\"p-3\" >\r\n          <div class=\"d-flex\" >\r\n            <div class=\"legend yellow\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">STOCK EN ALMACENES</div>\r\n            </div>\r\n          </div>\r\n          <custom-table [config]=\"tableConfig\" *ngIf=\"detalhesSuspenso.length > 0 && suspensoLoaded\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">CODIGO MATERIAL</th>\r\n                <th scope=\"col\" class=\"text-center\">NOMBRE MATERIAL</th>\r\n                <th scope=\"col\" class=\"text-center\">CANTIDAD</th>\r\n                <th scope=\"col\" class=\"text-center\">CODIGO ALMACEN</th>\r\n                <th scope=\"col\" class=\"text-center\">NOMBRE AALMACEN</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of detalhesAlmacen\">\r\n                <td [ngClass]=\"estoqueSuspensoClassStatusBorder(item.id)\" class=\"text-center\">{{ item.codigo_material }}</td>\r\n                <td class=\"text-center\" [ngClass]=\"border-danger\" class=\"text-center\">{{ item.nombre }}</td>\r\n                <td class=\"text-center\" [ngClass]=\"border-danger\">{{ item.cantidad | number:'1.3-3' }} {{ item.unidad }}</td>\r\n                <td class=\"text-center\" [ngClass]=\"border-danger\" class=\"text-center\">{{ item.codigo_almacen }}</td>\r\n                <td class=\"text-center\" [ngClass]=\"border-danger\" class=\"text-center\">{{ item.nombre_almacen }}</td>\r\n\r\n              </tr>\r\n              <tr class=\"bg-dark text-center text-dark\">\r\n                <td class=\"border-dark\"></td>\r\n                <td><strong>Total</strong></td>\r\n                <td class=\"text-center\"><strong>{{ totalSuspenso.cantidad | number:'1.4-4' }}</strong></td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <empty-result message=\"Ninguna información encontrada\" class=\"my-4\"\r\n            *ngIf=\"suspensoEmpty && !suspensoLoaded\"></empty-result>\r\n            <div class=\"d-flex justify-content-center mt-3\" >\r\n              <pagination [maxSize]=\"maxSizeSuspenso\" [(totalItems)]=\"totalSuspenso\"\r\n                (pageChanged)=\"onPageChangedSuspenso($event)\" [(itemsPerPage)]=\"itemsPerPageSuspenso\"\r\n                [boundaryLinks]=\"true\" [(ngModel)]=\"currentPageSuspenso\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n              </pagination>\r\n            </div>\r\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!suspensoLoaded && !suspensoEmpty\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n\r\n\r\n    </tabset>\r\n  </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "TKeP":
    /*!*************************************************************!*\
      !*** ./src/app/modules/comercial/estoque/estoque.module.ts ***!
      \*************************************************************/

    /*! exports provided: ComercialEstoqueModule */

    /***/
    function TKeP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialEstoqueModule", function () {
        return ComercialEstoqueModule;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./estoque-routing.module */
      "0Sg0");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./lista/lista.component */
      "DWTV"); // ngx-bootstrap
      // ng-select
      // PNotify
      // Modules
      // Components


      var ComercialEstoqueModule = function ComercialEstoqueModule() {
        _classCallCheck(this, ComercialEstoqueModule);
      };

      ComercialEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialEstoqueListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _estoque_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialEstoqueRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialEstoqueModule);
      /***/
    },

    /***/
    "VgqD":
    /*!********************************************************!*\
      !*** ./src/app/modules/comercial/comercial.service.ts ***!
      \********************************************************/

    /*! exports provided: ComercialService */

    /***/
    function VgqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialService", function () {
        return ComercialService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialService = /*#__PURE__*/function () {
        function ComercialService(http) {
          _classCallCheck(this, ComercialService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial";
        }

        _createClass(ComercialService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/empresas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/depositos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAlmacen",
          value: function getAlmacen(params) {
            return this.http.get("".concat(this.API, "/almacen")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhasId",
          value: function getLinhasId(id) {
            return this.http.get("".concat(this.API, "/linhas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSublineasId",
          value: function getSublineasId(id) {
            return this.http.get("".concat(this.API, "/sublineas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sincronizarMateriales",
          value: function sincronizarMateriales() {
            return this.http.get("".concat(this.API, "/sincronizar")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriales",
          value: function getMateriales(params) {
            return this.http.get("".concat(this.API, "/materiales"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesLista",
          value: function getMaterialesLista(params) {
            return this.http.get("".concat(this.API, "/materiales/lista"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOferta",
          value: function getMaterialesOferta(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOfertaVendedor",
          value: function getMaterialesOfertaVendedor(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio_vendedor"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getUpSellService",
          value: function getUpSellService(params) {
            return this.http.get("".concat(this.API, "/materiales_suplementarios"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/linhas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/classes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.http.get("".concat(this.API, "/perfil")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPresentacionMaterial",
          value: function getPresentacionMaterial() {
            return this.http.get("".concat(this.API, "/presentacion_materiales")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            return this.http.get("".concat(this.API, "/clientes/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListarPrecios",
          value: function getListarPrecios() {
            return this.http.get("".concat(this.API, "/vendedor/lista_precio")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTodosVendedores",
          value: function getTodosVendedores() {
            return this.http.get("".concat(this.API, "/vendedor/allvendedor")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCentrosLogisticos",
          value: function getCentrosLogisticos() {
            return this.http.get("".concat(this.API, "/almacen/centros_logisticos"));
          }
        }]);

        return ComercialService;
      }();

      ComercialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialService);
      /***/
    },

    /***/
    "Zp/9":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/estoque.module.ts ***!
      \*************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueModule */

    /***/
    function Zp9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueModule", function () {
        return TecnologiaInformacaoEstoqueModule;
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


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./estoque-routing.module */
      "cfk+");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _estoque_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./estoque.component */
      "2mcI"); // Modules
      // Components


      var TecnologiaInformacaoEstoqueModule = function TecnologiaInformacaoEstoqueModule() {
        _classCallCheck(this, TecnologiaInformacaoEstoqueModule);
      };

      TecnologiaInformacaoEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_estoque_component__WEBPACK_IMPORTED_MODULE_15__["TecnologiaInformacaoEstoqueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoEstoqueRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_3__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"]]
      })], TecnologiaInformacaoEstoqueModule);
      /***/
    },

    /***/
    "cfk+":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/estoque-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueRoutingModule */

    /***/
    function cfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueRoutingModule", function () {
        return TecnologiaInformacaoEstoqueRoutingModule;
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


      var _estoque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./estoque.component */
      "2mcI"); // Components


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _estoque_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueComponent"]
        }, {
          path: 'nivel-estoque',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | nivel-estoque-nivel-estoque-module */
            [__webpack_require__.e("default~nivel-estoque-nivel-estoque-module~painel-aprovacao-painel-aprovacao-module"), __webpack_require__.e("common"), __webpack_require__.e("nivel-estoque-nivel-estoque-module")]).then(__webpack_require__.bind(null,
            /*! ./nivel-estoque/nivel-estoque.module */
            "FQp6")).then(function (m) {
              return m.TecnologiaInformacaoNivelEstoqueModule;
            });
          }
        }, {
          path: 'movimentacoes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | movimentacoes-movimentacoes-module */
            [__webpack_require__.e("common"), __webpack_require__.e("movimentacoes-movimentacoes-module")]).then(__webpack_require__.bind(null,
            /*! ./movimentacoes/movimentacoes.module */
            "Hj8t")).then(function (m) {
              return m.TecnologiaInformacaoMovimentacoesModule;
            });
          }
        }, {
          path: 'tipo-movimentacoes',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tipo-movimentacoes-tipo-movimentacoes-module */
            "tipo-movimentacoes-tipo-movimentacoes-module").then(__webpack_require__.bind(null,
            /*! ./tipo-movimentacoes/tipo-movimentacoes.module */
            "ulpZ")).then(function (m) {
              return m.TecnologiaInformacaoTipoMovimentacoesModule;
            });
          }
        }, {
          path: 'produtos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | produtos-produtos-module */
            [__webpack_require__.e("default~modelo-modelo-module~produtos-produtos-module"), __webpack_require__.e("common"), __webpack_require__.e("produtos-produtos-module")]).then(__webpack_require__.bind(null,
            /*! ./produtos/produtos.module */
            "vr6i")).then(function (m) {
              return m.TecnologiaInformacaoEstoqueProdutosModule;
            });
          }
        }, {
          path: 'tipo-produtos',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tipo-produto-tipo-produto-module */
            "tipo-produto-tipo-produto-module").then(__webpack_require__.bind(null,
            /*! ./tipo-produto/tipo-produto.module */
            "hkZf")).then(function (m) {
              return m.TecnologiaInformacaoEstoqueTipoProdutosModule;
            });
          }
        }, {
          path: 'modelo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modelo-modelo-module */
            [__webpack_require__.e("default~modelo-modelo-module~produtos-produtos-module"), __webpack_require__.e("common"), __webpack_require__.e("modelo-modelo-module")]).then(__webpack_require__.bind(null,
            /*! ./modelo/modelo.module */
            "wgzn")).then(function (m) {
              return m.TecnologiaInformacaoEstoqueModeloModule;
            });
          }
        }, {
          path: 'marcas',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | marcas-marcas-module */
            [__webpack_require__.e("common"), __webpack_require__.e("marcas-marcas-module")]).then(__webpack_require__.bind(null,
            /*! ./marcas/marcas.module */
            "nF+b")).then(function (m) {
              return m.TecnologiaInformacaoEstoqueMarcasModule;
            });
          }
        }, {
          path: 'painel-aprovacao',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | painel-aprovacao-painel-aprovacao-module */
            [__webpack_require__.e("default~nivel-estoque-nivel-estoque-module~painel-aprovacao-painel-aprovacao-module"), __webpack_require__.e("common"), __webpack_require__.e("painel-aprovacao-painel-aprovacao-module")]).then(__webpack_require__.bind(null,
            /*! ./painel-aprovacao/painel-aprovacao.module */
            "BX/bL")).then(function (m) {
              return m.TecnologiaInformacaoEstoquePainelAprovacaoModule;
            });
          }
        }]
      }];

      var TecnologiaInformacaoEstoqueRoutingModule = function TecnologiaInformacaoEstoqueRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoEstoqueRoutingModule);
      };

      TecnologiaInformacaoEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TecnologiaInformacaoEstoqueRoutingModule);
      /***/
    },

    /***/
    "ekBG":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/estoque.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function ekBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvZXN0b3F1ZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "nkG6":
    /*!**************************************************************!*\
      !*** ./src/app/modules/comercial/estoque/estoque.service.ts ***!
      \**************************************************************/

    /*! exports provided: ComercialEstoqueService */

    /***/
    function nkG6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialEstoqueService", function () {
        return ComercialEstoqueService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialEstoqueService = /*#__PURE__*/function () {
        function ComercialEstoqueService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialEstoqueService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/estoque";
        }

        _createClass(ComercialEstoqueService, [{
          key: "getFiltros",
          value: function getFiltros() {
            /* Almacen */
            var almacenes = this.comercialService.getAlmacen();
            /* Familia */

            var classes = this.comercialService.getClasses(null);
            var depositos = this.comercialService.getDepositos({
              grupoManetoni: 1
            });
            var sucursales = this.comercialService.getEscritorios();
            var empresas = this.tidSoftwareService.getEmpresas('estoques');
            var linhas = this.tidSoftwareService.getLinhas();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([almacenes, classes, depositos, sucursales, empresas, linhas]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getEstoqueAtual",
          value: function getEstoqueAtual(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/estoque-atual"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getOutrasUnidades",
          value: function getOutrasUnidades(id) {
            return this.http.get("".concat(this.API, "/outras-unidades/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getPedidosCompra",
          value: function getPedidosCompra(params) {
            return this.http.get("".concat(this.API, "/pedidos-compra/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getComprometido",
          value: function getComprometido(params) {
            return this.http.get("".concat(this.API, "/estoque-comprometido/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getLote",
          value: function getLote(params) {
            return this.http.get("".concat(this.API, "/lote/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getEstoqueSuspenso",
          value: function getEstoqueSuspenso(params) {
            return this.http.get("".concat(this.API, "/estoque-suspenso/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getStockComprometido",
          value: function getStockComprometido(params) {
            return this.http.get("".concat(this.API, "/estoquecomprometido/").concat(params.idMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getStockSuspeso",
          value: function getStockSuspeso(params) {
            return this.http.get("".concat(this.API, "/estoquesuspenso/").concat(params.idMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getStockAlmacenes",
          value: function getStockAlmacenes(params) {
            return this.http.get("".concat(this.API, "/estoquealmacen/").concat(params.idMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialEstoqueService;
      }();

      ComercialEstoqueService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialEstoqueService);
      /***/
    },

    /***/
    "nzcQ":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/estoque.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nzcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"ESTOQUE\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\r\n</app-body>";
      /***/
    },

    /***/
    "zN97":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialTidSoftwareService */

    /***/
    function zN97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function () {
        return ComercialTidSoftwareService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ComercialTidSoftwareService = /*#__PURE__*/function () {
        function ComercialTidSoftwareService(http) {
          _classCallCheck(this, ComercialTidSoftwareService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/tid-software";
        }

        _createClass(ComercialTidSoftwareService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var empresas = this.getEmpresas('vendas');
            var linhas = this.getLinhas();
            var modulosVendas = this.getModulosVendas();
            var modulosProducaoTela = this.getModulosProducaoTela();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([empresas, linhas, modulosVendas, modulosProducaoTela]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(acao) {
            return this.http.get("".concat(this.API, "/empresas/").concat(acao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosVendas",
          value: function getModulosVendas() {
            return this.http.get("".concat(this.API, "/modulos/vendas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosProducaoTela",
          value: function getModulosProducaoTela() {
            return this.http.get("".concat(this.API, "/modulos/producao-tela")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarAcesso",
          value: function postGerarAcesso(data) {
            return this.http.post("".concat(this.API, "/gerar-acesso"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialTidSoftwareService;
      }();

      ComercialTidSoftwareService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialTidSoftwareService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=estoque-estoque-module-es5.js.map