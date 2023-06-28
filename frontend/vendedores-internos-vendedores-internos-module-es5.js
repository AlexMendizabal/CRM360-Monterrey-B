(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendedores-internos-vendedores-internos-module"], {
    /***/
    "8AH+":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/vendedores-internos/programacao-pagamentos/programacao-pagamentos.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Programação de Pagamentos\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"dataInicial\">Data inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"dataInicial\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  formControlName=\"dataInicial\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"dataFinal\">Data final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"dataFinal\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  formControlName=\"dataFinal\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-lg-5\">\r\n              <label for=\"codGerente\">Gerente</label>\r\n              <ng-select\r\n                [items]=\"gerentes\"\r\n                labelForId=\"codGerente\"\r\n                formControlName=\"codGerente\"\r\n                bindValue=\"matricula\"\r\n                bindLabel=\"nome\"\r\n                [virtualScroll]=\"true\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"situacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"situacao\"\r\n                formControlName=\"situacao\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"1\">Pago</option>\r\n                <option value=\"0\">PROGRAMADO</option>\r\n                <option value=\"2\">AGUARDANDO PROGRAMAÇÃO</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">Cod. Vendedor</th>\r\n            <th scope=\"col\">Vendedor</th>\r\n            <th scope=\"col\">Gerente</th>\r\n            <th scope=\"col\">Valor da Comissão</th>\r\n            <th scope=\"col\">Data Programada</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let lista of dadosPagination; let i = index\" [class.table-active]=\"lista.codVendedor == comissaoSelecionada.codVendedor\">\r\n            <td [ngClass]=\"classStatusBorder(lista)\">\r\n              {{ lista.codVendedor}}\r\n            </td>\r\n            <td>\r\n              {{ lista.nomeVendedor | uppercase }}\r\n            </td>\r\n            <td>\r\n              {{ lista.nomeGerente | uppercase }}\r\n            </td>\r\n            <td>\r\n              {{ lista.valorComissao | currency:'BRL':'symbol':'1.2-2' }} \r\n            </td>\r\n            <td>\r\n              {{ lista.dataProg | uppercase }}\r\n            </td>\r\n            <td class=\"row text-center justify-content-center\">\r\n              <button type=\"button\" class=\"btn btn-sm\" *ngIf=\"lista.situacao == 2\" (click)=\"openModal(programarPag, lista)\">\r\n                Programar\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-sm\" *ngIf=\"lista.situacao == 0\" (click)=\"onPagar(i, lista)\">\r\n                Confirmar\r\n              </button>\r\n              <button type=\"button\" tooltip=\"Comissão Paga\" class=\"btn btn-sm btn-outline-success disabled\" *ngIf=\"lista.situacao == 1\">\r\n                <span><i class=\"far fa-check-circle green\"></i></span>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #programarPag>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Digite a data do pagamento do vendedor #{{comissaoSelecionada?.codVendedor}} - {{comissaoSelecionada?.nomeVendedor}} </h4>\r\n      <div class=\"d-flex\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-12 \">\r\n        <div class=\"row d-flex justify-content-center\">\r\n          <form [formGroup]=\"formData\" autocomplete=\"off\" [hidden] =\"comissaoSelecionada.situacao != 2\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"dataProg\">Data Programada</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"dataProg\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  formControlName=\"dataProg\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div><br>\r\n        <div  class=\"form-row justify-content-center\" [hidden] =\"comissaoSelecionada.situacao != 2\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-sm mb-3\"\r\n            (click)=\"onProgramar(comissaoSelecionada)\"\r\n            \r\n            >\r\n            Confirmar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "CoHg":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/vendedores-internos/vendedores-internos.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CoHg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Vendedores Internos\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-9\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-pie\"\r\n            text=\"Lançamento de metas\"\r\n            [routerLink]=\"['../../lancamento-metas']\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-pie\"\r\n            text=\"Gestão de Comissionamentos\"\r\n            [routerLink]=\"['../../gestao-comissionamentos']\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-pie\"\r\n            text=\"Programação de Pagamentos\"\r\n            [routerLink]=\"['../../programacao-pagamentos']\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "Czzd":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/programacao-pagamentos/programacao-pagamentos.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Czzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy92ZW5kZWRvcmVzLWludGVybm9zL3Byb2dyYW1hY2FvLXBhZ2FtZW50b3MvcHJvZ3JhbWFjYW8tcGFnYW1lbnRvcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DzOH":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/programacao-pagamentos/programacao-pagamentos.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent */

    /***/
    function DzOH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent", function () {
        return ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_programacao_pagamentos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./programacao-pagamentos.component.html */
      "8AH+");
      /* harmony import */


      var _programacao_pagamentos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./programacao-pagamentos.component.scss */
      "Czzd");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */
      "fMkk");
      /* harmony import */


      var _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../dashboard/vendedor/vendedor.service */
      "yFC9");
      /* harmony import */


      var _comissoes_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./../../comissoes.service */
      "kz/K");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]); // Services

      var ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent(activatedRoute, pnotifyService, localeService, router, atividadesService, titleService, vendedoresService, formBuilder, dateService, escritoriosService, comercialService, detailPanelService, dashboardService, authService, modalService, confirmModalService, comissoesService) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent);

          this.activatedRoute = activatedRoute;
          this.pnotifyService = pnotifyService;
          this.localeService = localeService;
          this.router = router;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.vendedoresService = vendedoresService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.escritoriosService = escritoriosService;
          this.comercialService = comercialService;
          this.detailPanelService = detailPanelService;
          this.dashboardService = dashboardService;
          this.authService = authService;
          this.modalService = modalService;
          this.confirmModalService = confirmModalService;
          this.comissoesService = comissoesService;
          this.user = this.authService.getCurrentUser();
          this.loaderNavbar = false; //loaderFullScreen = true;

          this.loaderFullScreen = false;
          this.userMarketing = true;
          this.loadingModal = false;
          this.breadCrumbTree = [];
          this.showDetailPanel = false;
          this.subtitles = [{
            id: 1,
            text: 'Pago',
            color: 'green'
          }, {
            id: 0,
            text: 'Programado',
            color: 'blue'
          }, {
            id: 2,
            text: 'Aguardando Programação',
            color: 'gray'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.orderBy = 'codComissao';
          this.orderType = 'ASC';
          this.profile = {};
          this.showPermissionDenied = false;
          this.vendedores = [];
          this.gerentes = [];
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [{
            codComissao: 1,
            situacao: 1,
            codVendedor: 1,
            nomeVendedor: 'vendedor 1',
            codGerente: 1,
            nomeGerente: 'gerente 1',
            dataProg: '12/11/2020',
            valorComissao: 1000
          }, {
            codComissao: 2,
            situacao: 2,
            codVendedor: 2,
            nomeVendedor: 'vendedor 2',
            codGerente: 2,
            nomeGerente: 'gerente 2',
            dataProg: null,
            valorComissao: 2000
          }, {
            codComissao: 3,
            situacao: 0,
            codVendedor: 3,
            nomeVendedor: 'vendedor 3',
            codGerente: 3,
            nomeGerente: 'gerente 3',
            dataProg: '12/11/2020',
            valorComissao: 3000
          }];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getGerentes();
            this.getVendedores();
            this.setFormFilter();
            this.titleService.setTitle('Programação de Pagamentos');
            this.setComissaoSelecionada();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Gestão',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vendedores Internos',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/vendedores-internos")
              }, {
                descricao: 'Programação de Pagamentos'
              }];
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dataInicial: [formValue.dataInicial],
              dataFinal: [formValue.dataFinal],
              codGerente: [formValue.codGerente, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              situacao: [formValue.situacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              dataProg: [formValue.dataProg, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              pagina: [formValue.pagina],
              registros: [this.itemsPerPage, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this2 = this;

            var formValue = {
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              codGerente: 0,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams.q);
                params = JSON.parse(params);

                _this2.search(params);

                if (params['pagina']) {
                  _this2.currentPage = params['pagina'];
                }

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this2.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
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
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.verificaParams());
            }
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.dataInicial) {
              params.dataInicial = this.form.value.dataInicial;
            }

            if (this.form.value.dataFinal) {
              params.dataFinal = this.form.value.dataFinal;
            }

            if (this.form.value.codGerente) {
              params.codGerente = this.form.value.codGerente;
            }

            if (this.form.value.situacao) {
              params.situacao = this.form.value.situacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            params.pagina = this.form.value.pagina;
            params.registros = this.form.value.registros;
            return params;
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            this.search(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            this.loaderNavbar = true;
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.dadosLoaded = true; //retirar

            /* this.cotacoesService
              .getCotacoes(params)
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                  this.dadosLoaded = true;
                })
              )
              .subscribe(
                (response: JsonResponse) => {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                          this.totalItems = this.dados[0].qtdeRegistros;
                  } else if (
                    response.hasOwnProperty('success') &&
                    response.success === false &&
                    response.hasOwnProperty('mensagem') &&
                    response.mensagem.length > 0 &&
                    response.mensagem !== null
                  ) {
                    this.pnotifyService.error(response.mensagem);
                    this.dadosEmpty = true;
                  } else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                  }
                },
                (error: any) => {
                  if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                  } else {
                    this.pnotifyService.error();
                  }
                }
              ); */
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

            this.form.value.orderBy = this.orderBy;
            this.form.value.orderType = this.orderType;
            this.onFilter();
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.dadosPagination = this.dados.slice(startItem, endItem);
            this.scrollToFilter.nativeElement.scrollIntoView({
              behavior: 'instant'
            });
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            var _this3 = this;

            this.vendedoresService.getVendedores().subscribe(function (response) {
              if (response.responseCode === 200) {
                _this3.vendedores = response.result;

                _this3.vendedores.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }
            });
          }
        }, {
          key: "getGerentes",
          value: function getGerentes() {
            var _this4 = this;

            this.escritoriosService.getListaCoordenadoresEscritorios().subscribe(function (response) {
              if (response.responseCode === 200) {
                _this4.gerentes = response.result.coordenadores;

                _this4.gerentes.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(comissao) {
            var borderClass;

            if (comissao.situacao === 1) {
              borderClass = 'border-success';
            } else if (comissao.situacao === 2) {
              borderClass = 'border-secondary';
            } else if (comissao.situacao === 0) {
              borderClass = 'border-primary';
            }

            return borderClass;
          }
        }, {
          key: "setComissaoSelecionada",
          value: function setComissaoSelecionada() {
            this.comissaoSelecionada = {
              codComissao: null,
              situacao: null,
              codVendedor: null,
              nomeVendedor: null,
              codGerente: null,
              nomeGerente: null,
              dataProg: null,
              valorComissao: null
            };
          }
        }, {
          key: "openModal",
          value: function openModal(template, lista) {
            this.loadingModal = true;
            this.comissaoSelecionada = lista;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-lg text-align-center'
            });
          }
        }, {
          key: "onPagar",
          value: function onPagar(index, lista) {
            var _this5 = this;

            this.confirmPagar().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this5.pagarComissao(index, lista) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loaderNavbar = false;
            })).subscribe(function (success) {
              _this5.pnotifyService.success();

              _this5.refreshMainData(lista);
            }, function (error) {
              _this5.pnotifyService.error();

              _this5.dadosPagination[index].situacao = 2;
            });
          }
        }, {
          key: "confirmPagar",
          value: function confirmPagar() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente confirmar o pagamento da comissão?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "pagarComissao",
          value: function pagarComissao(index, lista) {
            this.loaderNavbar = true;
            this.dadosPagination[index].situacao = 1;
            return; //return this.materiaisGrupoService.pagarComissao(lista.codComissao);
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }, {
          key: "onProgramar",
          value: function onProgramar(index, lista) {
            this.modalRef.hide();
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(lista) {
            for (var i = 0; i < this.dados.length; i++) {
              if (lista.codComissao === this.dados[i].codComissao) {
                this.dados[i].situacao = lista.situacao;
                return;
              }
            }
          }
        }]);

        return ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent;
      }();

      ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_17__["ComercialVendedoresService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }, {
          type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__["DetailPanelService"]
        }, {
          type: _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_20__["ComercialDashboardVendedorService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_23__["ConfirmModalService"]
        }, {
          type: _comissoes_service__WEBPACK_IMPORTED_MODULE_21__["ComercialComissoesService"]
        }];
      };

      ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes-vendedores-internos-programacao-pagamentos',
        template: _raw_loader_programacao_pagamentos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_programacao_pagamentos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_17__["ComercialVendedoresService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"], _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"], _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__["DetailPanelService"], _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_20__["ComercialDashboardVendedorService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_23__["ConfirmModalService"], _comissoes_service__WEBPACK_IMPORTED_MODULE_21__["ComercialComissoesService"]])], ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent);
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
    "SCR9":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/vendedores-internos-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosRoutingModule */

    /***/
    function SCR9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosRoutingModule", function () {
        return ComercialComissoesVendedoresInternosRoutingModule;
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


      var _vendedores_internos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vendedores-internos.component */
      "aRqq");
      /* harmony import */


      var _lancamento_metas_lancamento_metas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lancamento-metas/lancamento-metas.component */
      "onXd");
      /* harmony import */


      var _programacao_pagamentos_programacao_pagamentos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./programacao-pagamentos/programacao-pagamentos.component */
      "DzOH"); // Guards
      // import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';
      // Components


      var routes = [{
        path: '',
        component: _vendedores_internos_component__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesVendedoresInternosComponent"]
      }, {
        path: 'lancamento-metas',
        component: _lancamento_metas_lancamento_metas_component__WEBPACK_IMPORTED_MODULE_4__["ComercialComissoesVendedoresInternosLancamentoMetasComponent"]
      }, {
        path: 'gestao-comissionamentos',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | gestao-comissionamentos-gestao-comissionamentos-module */
            [__webpack_require__.e("default~gestao-comissionamentos-gestao-comissionamentos-module~vendedores-internos-vendedores-internos-module"), __webpack_require__.e("common"), __webpack_require__.e("gestao-comissionamentos-gestao-comissionamentos-module")]).then(__webpack_require__.bind(null,
            /*! ./gestao-comissionamentos/gestao-comissionamentos.module */
            "BBLr")).then(function (m) {
              return m.ComercialComissoesVendedoresInternosGestaoComissionamentosModule;
            });
          }
        }]
      }, {
        path: 'programacao-pagamentos',
        component: _programacao_pagamentos_programacao_pagamentos_component__WEBPACK_IMPORTED_MODULE_5__["ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent"]
      }];

      var ComercialComissoesVendedoresInternosRoutingModule = /*#__PURE__*/_createClass(function ComercialComissoesVendedoresInternosRoutingModule() {
        _classCallCheck(this, ComercialComissoesVendedoresInternosRoutingModule);
      });

      ComercialComissoesVendedoresInternosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialComissoesVendedoresInternosRoutingModule);
      /***/
    },

    /***/
    "aRqq":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/vendedores-internos.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosComponent */

    /***/
    function aRqq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosComponent", function () {
        return ComercialComissoesVendedoresInternosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vendedores_internos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vendedores-internos.component.html */
      "CoHg");
      /* harmony import */


      var _vendedores_internos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vendedores-internos.component.scss */
      "chjq");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialComissoesVendedoresInternosComponent = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosComponent(activatedRoute, router, pnotifyService, location, atividadesService, titleService) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.location = location;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialComissoesVendedoresInternosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this6 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this6.appTitle = 'Vendedores Internos';

              _this6.titleService.setTitle(_this6.appTitle);

              _this6.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Comissões',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: _this6.appTitle
              }];
            });
          }
        }]);

        return ComercialComissoesVendedoresInternosComponent;
      }();

      ComercialComissoesVendedoresInternosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }];
      };

      ComercialComissoesVendedoresInternosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes-vendedores-internos',
        template: _raw_loader_vendedores_internos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vendedores_internos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])], ComercialComissoesVendedoresInternosComponent);
      /***/
    },

    /***/
    "aiiF":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/lancamento-metas/lancamento-metas.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aiiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy92ZW5kZWRvcmVzLWludGVybm9zL2xhbmNhbWVudG8tbWV0YXMvbGFuY2FtZW50by1tZXRhcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "chjq":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/vendedores-internos.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function chjq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy92ZW5kZWRvcmVzLWludGVybm9zL3ZlbmRlZG9yZXMtaW50ZXJub3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "hjkZ":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/vendedores-internos.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosModule */

    /***/
    function hjkZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosModule", function () {
        return ComercialComissoesVendedoresInternosModule;
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


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _vendedores_internos_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./vendedores-internos-routing.module */
      "SCR9");
      /* harmony import */


      var _gestao_comissionamentos_gestao_comissionamentos_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./gestao-comissionamentos/gestao-comissionamentos.module */
      "BBLr");
      /* harmony import */


      var _vendedores_internos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./vendedores-internos.component */
      "aRqq");
      /* harmony import */


      var _lancamento_metas_lancamento_metas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./lancamento-metas/lancamento-metas.component */
      "onXd");
      /* harmony import */


      var _programacao_pagamentos_programacao_pagamentos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./programacao-pagamentos/programacao-pagamentos.component */
      "DzOH"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialComissoesVendedoresInternosModule = /*#__PURE__*/_createClass(function ComercialComissoesVendedoresInternosModule() {
        _classCallCheck(this, ComercialComissoesVendedoresInternosModule);
      });

      ComercialComissoesVendedoresInternosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vendedores_internos_component__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesVendedoresInternosComponent"], _lancamento_metas_lancamento_metas_component__WEBPACK_IMPORTED_MODULE_17__["ComercialComissoesVendedoresInternosLancamentoMetasComponent"], _programacao_pagamentos_programacao_pagamentos_component__WEBPACK_IMPORTED_MODULE_18__["ComercialComissoesVendedoresInternosProgramacaoPagamentosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _vendedores_internos_routing_module__WEBPACK_IMPORTED_MODULE_14__["ComercialComissoesVendedoresInternosRoutingModule"], _gestao_comissionamentos_gestao_comissionamentos_module__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesVendedoresInternosGestaoComissionamentosModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialComissoesVendedoresInternosModule);
      /***/
    },

    /***/
    "kz/K":
    /*!******************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/comissoes.service.ts ***!
      \******************************************************************/

    /*! exports provided: ComercialComissoesService */

    /***/
    function kzK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesService", function () {
        return ComercialComissoesService;
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
      "VgqD"); // Services


      var ComercialComissoesService = /*#__PURE__*/function () {
        function ComercialComissoesService(http, comercialService) {
          _classCallCheck(this, ComercialComissoesService);

          this.http = http;
          this.comercialService = comercialService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/kanban";
        }

        _createClass(ComercialComissoesService, [{
          key: "getCards",
          value: function getCards(params) {
            var emAberto = this.getAberto(params);
            var transferidos = this.getTransferidos(params);
            var emLiberacao = this.getLiberacao(params);
            var aguardandoFaturamento = this.getFaturamento(params);
            var aguardandoEntrega = this.getEntrega(params);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([emAberto, transferidos, emLiberacao, aguardandoFaturamento, aguardandoEntrega]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAberto",
          value: function getAberto() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista/aberto"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getTransferidos",
          value: function getTransferidos() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista/transferidos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getLiberacao",
          value: function getLiberacao() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista/liberacao"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getFaturamento",
          value: function getFaturamento() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista/faturamento"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getEntrega",
          value: function getEntrega() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista/entrega"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialComissoesService;
      }();

      ComercialComissoesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }];
      };

      ComercialComissoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]])], ComercialComissoesService);
      /***/
    },

    /***/
    "onXd":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/lancamento-metas/lancamento-metas.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosLancamentoMetasComponent */

    /***/
    function onXd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosLancamentoMetasComponent", function () {
        return ComercialComissoesVendedoresInternosLancamentoMetasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lancamento_metas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lancamento-metas.component.html */
      "x+A0");
      /* harmony import */


      var _lancamento_metas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lancamento-metas.component.scss */
      "aiiF");
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../dashboard/vendedor/vendedor.service */
      "yFC9");
      /* harmony import */


      var _comissoes_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../../comissoes.service */
      "kz/K");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/shared/services/requests/escritorios.service */
      "NIE8");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__["ptBrLocale"]); // Services
      // import { JsonResponse } from 'src/app/models/json-response';

      var ComercialComissoesVendedoresInternosLancamentoMetasComponent = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosLancamentoMetasComponent(activatedRoute, router, pnotifyService, localeService, atividadesService, titleService, formBuilder, dateService, vendedoresService, escritoriosService, comercialService, detailPanelService, dashboardService, authService, modalService, confirmModalService, comissoesService) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosLancamentoMetasComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.localeService = localeService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.vendedoresService = vendedoresService;
          this.escritoriosService = escritoriosService;
          this.comercialService = comercialService;
          this.detailPanelService = detailPanelService;
          this.dashboardService = dashboardService;
          this.authService = authService;
          this.modalService = modalService;
          this.confirmModalService = confirmModalService;
          this.comissoesService = comissoesService;
          this.user = this.authService.getCurrentUser();
          this.loaderNavbar = false; //loaderFullScreen = true;

          this.loaderFullScreen = false;
          this.userMarketing = true;
          this.loadingModal = false;
          this.breadCrumbTree = [];
          this.showDetailPanel = false;
          this.subtitles = [{
            id: 1,
            text: 'Aprovada',
            color: 'green'
          }, {
            id: 0,
            text: 'Reprovada',
            color: 'red'
          }, {
            id: 2,
            text: 'Em aprovação',
            color: 'blue'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.orderBy = 'codClassificacao';
          this.orderType = 'ASC';
          this.profile = {};
          this.showPermissionDenied = false;
          this.vendedores = [];
          this.vendedoresTotal = [];
          this.escritorios = [];
          this.filteredVendedores = [];
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [{
            codComissao: 1,
            situacao: 2,
            codVendedor: 1,
            nomeVendedor: 'vendedor 1vendedor 1vendedor 1',
            codGerente: 1,
            nomeGerente: 'gerente 1gerente 1',
            descReprov: null
          }, {
            codComissao: 2,
            situacao: 2,
            codVendedor: 2,
            nomeVendedor: 'vendedor 2vendedor 2vendedor 2',
            codGerente: 2,
            nomeGerente: 'gerente 2gerente 2',
            descReprov: null
          }];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.metas = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialComissoesVendedoresInternosLancamentoMetasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getPerfil();
            this.getFiltersValues();
            this.setFormFilter();
            this.titleService.setTitle('Lançamento de Metas');
            this.onDetailPanelEmitter();
            this.setComissaoSelecionada();
            this.loadingFilterValues();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this7 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this7.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Gestão',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vendedores Internos',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/vendedores-internos")
              }, {
                descricao: 'Lançamento de Metas'
              }];
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dataInicial: [formValue.dataInicial],
              dataFinal: [formValue.dataFinal],
              codVendedor: [formValue.codVendedor],
              codGerente: [formValue.codGerente],
              pagina: [formValue.pagina],
              registros: [this.itemsPerPage, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              metaClientes: [formValue.metaCliente, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              metaCivil: [formValue.metaCivil, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              metaFaturamento: [formValue.metaFaturamento, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
            this.checkValuesEscritorio();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this9 = this;

            var formValue = {
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              codVendedor: 0,
              codGerente: 0,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams.q);
                params = JSON.parse(params);

                _this9.search(params);

                if (params['pagina']) {
                  _this9.currentPage = params['pagina'];
                }

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this9.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
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
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.dadosPagination = this.dados.slice(startItem, endItem);
            this.scrollToFilter.nativeElement.scrollIntoView({
              behavior: 'instant'
            });
          }
        }, {
          key: "getFiltersValues",
          value: function getFiltersValues() {
            var _this10 = this;

            this.vendedoresService.getVendedores().subscribe(function (response) {
              if (response.responseCode === 200) {
                _this10.vendedores = response.result;
                _this10.vendedoresTotal = _this10.vendedores;

                _this10.form.controls.codVendedor.enable();

                console.log(_this10.vendedores); //retirar

                _this10.vendedores.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }
            });
            this.escritoriosService.getEscritorios().subscribe(function (response) {
              if (response.responseCode === 200) {
                _this10.escritorios = response.result;

                _this10.form.controls.codGerente.enable();

                console.log(_this10.escritorios); //retirar

                _this10.escritorios.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }
            });
          }
        }, {
          key: "loadingFilterValues",
          value: function loadingFilterValues() {
            this.form.controls.codGerente.disable();
            this.form.controls.codVendedor.disable();
          }
        }, {
          key: "onChangeEscritorio",
          value: function onChangeEscritorio(escritorio, reset) {
            var _this11 = this;

            if (reset) {
              this.form.controls.codVendedor.reset();
              this.form.controls.codVendedor.setValue(0);
              this.form.controls.codVendedor.disable();
              this.vendedores = this.vendedoresTotal;
            }

            this.form.controls.codVendedor.enable();
            this.filteredVendedores = this.vendedores.filter(function (value) {
              return value.idEscritorio == _this11.form.value.codGerente;
            });
            console.log(this.filteredVendedores);
            this.filteredVendedores.unshift({
              idClasse: 0,
              nomeClasse: 'EXIBIR TODOS'
            });
            this.onChangeVendedores();
          }
        }, {
          key: "onChangeVendedores",
          value: function onChangeVendedores() {
            this.vendedores = this.filteredVendedores;
          }
        }, {
          key: "checkValuesEscritorio",
          value: function checkValuesEscritorio() {
            if (this.form.value.codGerente !== '' && this.form.value.codGerente !== null) {
              this.onChangeEscritorio(this.form.value.codGerente, false);
            }
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this12 = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this12.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this12.profile = response.result;
                  console.log(_this12.user);
                  console.log(_this12.profile);

                  if (_this12.profile.coordenador === true || _this12.profile.gestor === true) {
                    _this12.form.controls.codGerente.disable();

                    _this12.userMarketing = false; //alterar para visualizar a tela

                    console.log(_this12.userMarketing);
                  } else if (_this12.profile.vendedor === true) {
                    _this12.form.controls.codGerente.enable();
                  } else {
                    _this12.showPermissionDenied = true;
                  }
                } else {
                  _this12.showPermissionDenied = true;
                }
              },
              error: function error(_error) {
                _this12.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(comissao) {
            var borderClass;

            if (comissao.situacao === 1) {
              borderClass = 'border-success';
            } else if (comissao.situacao === 2) {
              borderClass = 'border-primary';
            } else if (comissao.situacao === 0) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "setComissaoSelecionada",
          value: function setComissaoSelecionada() {
            this.comissaoSelecionada = {
              codComissao: null,
              situacao: null,
              codVendedor: null,
              nomeVendedor: null,
              codGerente: null,
              nomeGerente: null,
              descReprov: null
            };
          }
        }, {
          key: "onDetails",
          value: function onDetails(comissao) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setComissaoSelecionada();
            this.comissaoSelecionada = comissao;
            this.loaderNavbar = false; //retirar

            this.metas = [{
              anoPassado: [{
                clientes: {
                  meta: 10
                }
              }, {
                extras: {
                  meta: 20
                }
              }, {
                toneladas: {
                  meta: 30
                }
              }],
              passado: [{
                clientes: {
                  meta: 11
                }
              }, {
                extras: {
                  meta: 21
                }
              }, {
                toneladas: {
                  meta: 31
                }
              }],
              corrente: [{
                clientes: {
                  meta: 12
                }
              }, {
                extras: {
                  meta: 22
                }
              }, {
                toneladas: {
                  meta: 32
                }
              }]
            }];
            console.log(this.metas);
            this.detailPanelService.loadedFinished(false); //retirar

            return;
            this.dashboardService.getMetas(comissao.codGerente, comissao.codVendedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              setTimeout(function () {
                _this13.loaderNavbar = false;
              }, 500);
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                _this13.detailPanelService.loadedFinished(false);

                _this13.metas = response;
                console.log(_this13.metas);
                console.log(_this13.test);
              } else if (response.hasOwnProperty('success') && response.success === false) {
                // Vazio.
                _this13.detailPanelService.loadedFinished(true);
              } else {
                // Vazio e com possível erro.
                _this13.pnotifyService.error();

                _this13.detailPanelService.loadedFinished(true);
              }
            }, function (error) {
              // Vazio e com erro.
              _this13.detailPanelService.loadedFinished(true);

              if (error.error.hasOwnProperty('mensagem')) {
                _this13.pnotifyService.error(error.error.mensagem);
              } else {
                _this13.pnotifyService.error();
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, meta) {
            this.loadingModal = true;
            this.comissaoSelecionada = meta;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-lg'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }, {
          key: "onSalvar",
          value: function onSalvar(meta) {}
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.verificaParams());
            }
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            this.search(params);
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.nomeClassificacao) {
              params.nomeClassificacao = this.form.value.nomeClassificacao;
            }

            if (this.form.value.situacao) {
              params.situacao = this.form.value.situacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            /* this.rankingClientesService
              .getListaRanking(params)
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                  this.dadosLoaded = true;
                })
              )
              .subscribe(
                (response: any) => {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
                  } else if (
                    response.hasOwnProperty('success') &&
                    response.success === false
                  ) {
                    this.dadosEmpty = true;
                  } else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                  }
                },
                (error: any) => {
                  this.dadosEmpty = true;
                        if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                  } else {
                    this.pnotifyService.error();
                  }
                }
              ); */
          }
        }, {
          key: "onAprovar",
          value: function onAprovar() {}
        }, {
          key: "onReprovar",
          value: function onReprovar() {}
        }]);

        return ComercialComissoesVendedoresInternosLancamentoMetasComponent;
      }();

      ComercialComissoesVendedoresInternosLancamentoMetasComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"]
        }, {
          type: _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_16__["ComercialVendedoresService"]
        }, {
          type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_22__["EscritoriosService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_17__["ComercialService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_15__["DetailPanelService"]
        }, {
          type: _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_18__["ComercialDashboardVendedorService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_21__["ConfirmModalService"]
        }, {
          type: _comissoes_service__WEBPACK_IMPORTED_MODULE_19__["ComercialComissoesService"]
        }];
      };

      ComercialComissoesVendedoresInternosLancamentoMetasComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialComissoesVendedoresInternosLancamentoMetasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes-vendedores-internos-lancamento-metas',
        template: _raw_loader_lancamento_metas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lancamento_metas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"], _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_16__["ComercialVendedoresService"], src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_22__["EscritoriosService"], _comercial_service__WEBPACK_IMPORTED_MODULE_17__["ComercialService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_15__["DetailPanelService"], _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_18__["ComercialDashboardVendedorService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_21__["ConfirmModalService"], _comissoes_service__WEBPACK_IMPORTED_MODULE_19__["ComercialComissoesService"]])], ComercialComissoesVendedoresInternosLancamentoMetasComponent);
      /***/
    },

    /***/
    "x+A0":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/vendedores-internos/lancamento-metas/lancamento-metas.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xA0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Lançamento de Metas\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"dataInicial\">Data inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"dataInicial\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  formControlName=\"dataInicial\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"dataFinal\">Data final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"dataFinal\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  formControlName=\"dataFinal\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codGerente\">Escritorio</label>\r\n              <ng-select\r\n                [items]=\"escritorios\"\r\n                labelForId=\"codGerente\"\r\n                formControlName=\"codGerente\"\r\n                bindValue=\"codEscritorio\"\r\n                bindLabel=\"nomeEscritorio\"\r\n                (change)=\"onChangeEscritorio($event.id, true)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codVendedor\">Vendedor</label>\r\n              <ng-select\r\n                [items]=\"vendedores\"\r\n                labelForId=\"codVendedor\"\r\n                formControlName=\"codVendedor\"\r\n                bindValue=\"id\"\r\n                bindLabel=\"nome\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-4 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">Cod. Vendedor</th>\r\n            <th scope=\"col\">Vendedor</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Gerente</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let lista of dadosPagination; let i = index\" [class.table-active]=\"lista.codVendedor == comissaoSelecionada.codVendedor\">\r\n            <td\r\n              class=\"hover\"\r\n              [ngClass]=\"classStatusBorder(lista)\"\r\n              (click)=\"onDetails(lista)\">\r\n              {{ lista.codVendedor}}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(lista)\">\r\n              {{ lista.nomeVendedor | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(lista)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ lista.nomeGerente | uppercase }}\r\n            </td>\r\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-3\" tooltip=\"Visualizar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(lista)\">\r\n                  <i class=\"fas fa-eye\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Metas\">\r\n        <custom-table *ngIf=\"metas.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th></th>\r\n              <th scope=\"col\" class=\"text-center\">Ano passado</th>\r\n              <th scope=\"col\" class=\"text-center\">Mês passado</th>\r\n              <th scope=\"col\" class=\"text-center\">Atual</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr>\r\n              <td class=\"text-center\"><strong>CLIENTES COM COMPRA</strong></td>\r\n              <td class=\"text-center\">{{ metas[0].anoPassado[0].clientes.meta }}</td>\r\n              <td class=\"text-center\">{{ metas[0].passado[0].clientes.meta }}</td>\r\n              <td class=\"text-center\">{{ metas[0].corrente[0].clientes.meta }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-center\"><strong>CIVIL</strong></td>\r\n              <td class=\"text-center\">{{ metas[0].anoPassado[1].extras.meta }}</td>\r\n              <td class=\"text-center\">{{ metas[0].passado[1].extras.meta }}</td>\r\n              <td class=\"text-center\">{{ metas[0].corrente[1].extras.meta }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-center\"><strong>FATURAMENTO TOTAL</strong></td>\r\n              <td class=\"text-center\">{{ metas[0].anoPassado[2].toneladas.meta }}</td>\r\n              <td class=\"text-center\">{{ metas[0].passado[2].toneladas.meta }}</td>\r\n              <td class=\"text-center\">{{ metas[0].corrente[2].toneladas.meta }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <br>\r\n        <div *ngIf=\"!userMarketing\" >\r\n          <div>\r\n            <strong><p>PREENCHER METAS ATUAIS</p></strong>\r\n            <form [formGroup]=\"form\" autocomplete=\"off\"> \r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-4\">\r\n                  <label for=\"metaClientes\">Clientes com compras</label>\r\n                  <br>\r\n                  <input type=\"text\"\r\n                  id=\"metaClientes\"\r\n                  formControlName=\"metaClientes\">\r\n                </div>\r\n                <div class=\"form-group col-4\">\r\n                  <label for=\"metaCivil\">Civil</label>\r\n                  <br>\r\n                  <input type=\"text\"\r\n                  id=\"metaCivil\"\r\n                  formControlName=\"metaCivil\">\r\n                </div>\r\n                <div class=\"form-group col-4\">\r\n                  <label for=\"metaFaturamento\">Faturamento total</label>\r\n                  <br>\r\n                  <input type=\"text\"\r\n                  id=\"metaFaturamento\"\r\n                  formControlName=\"metaFaturamento\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <br>\r\n          <div class=\"justify-content-center\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm mb-3\"\r\n              (click)=\"onSalvar()\">\r\n              Salvar\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"userMarketing\">\r\n          <div class=\"row\">\r\n            <div class=\"col justify-content-center\">\r\n              <button\r\n              type=\"button\"\r\n              (click)=\"onAprovar()\"\r\n              class=\"btn btn-sm btn-outline-success mb-3\"\r\n              >\r\n              Aprovar\r\n              </button>\r\n            </div>\r\n              <div class=\"col justify-content-center\">\r\n              <button\r\n              type=\"button\"\r\n              (click)=\"openModal(reprovarMeta, meta)\"\r\n              class=\"btn btn-sm btn-outline-danger mb-3\"\r\n              >\r\n              Reprovar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <ng-template #reprovarMeta>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Descrição de Reprovação #{{comissaoSelecionada?.codVendedor}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-12\">\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"comissaoSelecionada.situacao != 2\">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"descReprov\" >Descrição:</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                id=\"descReprov\" \r\n                formControlName=\"descReprov\" \r\n                rows=\"3\"\r\n                [ngClass]=\"onFieldError('descReprov') + ' ' + onFieldRequired('descReprov')\">\r\n              </textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('descReprov')\" message=\"Descrição é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"comissaoSelecionada.situacao != 2\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-sm btn-outline-danger mb-3\"\r\n            (click)=\"onReprovar(comissaoSelecionada)\"\r\n            [disabled]=\"form.valid === false || loadergNavBar === false\"\r\n            >\r\n            Reprovar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=vendedores-internos-vendedores-internos-module-es5.js.map