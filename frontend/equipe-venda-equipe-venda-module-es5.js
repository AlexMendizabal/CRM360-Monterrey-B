(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipe-venda-equipe-venda-module"], {
    /***/
    "9tUU":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/formulario/formulario.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function tUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9lcXVpcGUtdmVuZGEvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
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
    "Gr6B":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/lista/lista.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gr6B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9lcXVpcGUtdmVuZGEvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "I860":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/equipe-venda/lista/lista.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I860(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Equipe de Vendas\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n    <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-7\">\n              <label for=\"dsEquipeVenda\">Equipe de Venda</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"dsEquipeVenda\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option value=\"0\">Todos</option>\n                <option value=\"1\">Ativos</option>\n                <option value=\"2\">Inativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Equipe de Vendas</th>\n            <!-- <th scope=\"col\" class=\"text-center\">Situação</th> -->\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let equipeVenda of dadosPagination; let i = index\" [class.table-active]=\"equipeVenda.codEquipeVenda == equipeVendaSelecionado.codEquipeVenda\">\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(equipeVenda)\"\n              (click)=\"onDetails(equipeVenda)\">\n              {{ equipeVenda.dsEquipeVenda | uppercase }}\n            </td>\n            <!-- <td\n              class=\"text-center hover\"\n              (click)=\"onDetails(equipeVenda)\">\n              {{ equipeVenda.situacao | uppercase }}\n            </td> -->\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"equipeVenda.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, equipeVenda)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"equipeVenda.codSituacao == 2\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, equipeVenda)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(equipeVenda)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Histórico de alterações\">\n        <custom-table *ngIf=\"alteracoes.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n              <th scope=\"col\">Alteração</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let alteracao of alteracoes\">\n              <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>{{ alteracao.nomeUsuario | uppercase }}</td>\n              <td>{{ alteracao.mensagem | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n";
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
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
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
    "aWvT":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/lista/lista.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ComercialCadastrosEquipeVendaListaComponent */

    /***/
    function aWvT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaListaComponent", function () {
        return ComercialCadastrosEquipeVendaListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "I860");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Gr6B");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _equipe_venda_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../equipe-venda.service */
      "44Bq");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD"); // Services


      var ComercialCadastrosEquipeVendaListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosEquipeVendaListaComponent(activatedRoute, router, location, formBuilder, equipeVendaService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService, comercialService) {
          _classCallCheck(this, ComercialCadastrosEquipeVendaListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.equipeVendaService = equipeVendaService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.comercialService = comercialService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.orderBy = 'codEquipeVenda';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.alteracoes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosEquipeVendaListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Equipe de Venda');
            this.onDetailPanelEmitter();
            this.setEquipeVendaSelecionado();
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
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Equipe de Venda'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this2 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this2.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dsEquipeVenda: [formValue.dsEquipeVenda],
              codEquipeVenda: [formValue.codEquipeVenda],
              codSituacao: [formValue.codSituacao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
            this.checkOrder();
            this.loaderFullScreen = false;
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            var formValue = {
              dsEquipeVenda: null,
              codSituacao: 1,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this3.search(params);

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
          key: "checkOrder",
          value: function checkOrder() {
            if (this.form.value.orderBy !== this.orderBy) {
              this.orderBy = this.form.value.orderBy;
            }

            if (this.form.value.orderType !== this.orderType) {
              this.orderType = this.form.value.orderType;
            }
          }
        }, {
          key: "setEquipeVendaSelecionado",
          value: function setEquipeVendaSelecionado() {
            this.equipeVendaSelecionado = {
              codEquipeVenda: -1,
              dsEquipeVenda: null,
              codCarteira: null,
              codSituacao: null,
              situacao: null,
              codUsuario: null,
              nomeUsuario: null,
              dataCadastro: null,
              codReferenteErp: null
            };
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
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

            if (this.form.value.dsEquipeVenda) {
              params.dsEquipeVenda = this.form.value.dsEquipeVenda;
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            this.equipeVendaService.getListaEquipesVenda(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this4.loaderNavbar = false;
              _this4.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.dados = response.data;
                  _this4.dadosPagination = _this4.dados.slice(0, _this4.itemsPerPage);
                  _this4.totalItems = _this4.dados.length;
                  _this4.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this4.dadosEmpty = true;
                } else {
                  _this4.pnotifyService.error();

                  _this4.dadosEmpty = true;
                }
              },
              error: function error(_error) {
                _this4.dadosEmpty = true;

                if (_error.error.hasOwnProperty('mensagem')) {
                  _this4.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(equipeVenda) {
            var borderClass;

            if (equipeVenda.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (equipeVenda.codSituacao === 2) {
              borderClass = 'border-danger';
            }

            return borderClass;
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
          key: "onDetails",
          value: function onDetails(equipeVenda) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setEquipeVendaSelecionado();
            this.equipeVendaSelecionado = equipeVenda;
            this.alteracoes = [];
            this.equipeVendaService.getAlteracoes(equipeVenda.codEquipeVenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              setTimeout(function () {
                _this5.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  // Não está vazio.
                  _this5.detailPanelService.loadedFinished(false);

                  _this5.alteracoes = response.data;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  // Vazio.
                  _this5.detailPanelService.loadedFinished(true);
                } else {
                  // Vazio e com possível erro.
                  _this5.pnotifyService.error();

                  _this5.detailPanelService.loadedFinished(true);
                }
              },
              error: function error(_error2) {
                // Vazio e com erro.
                _this5.detailPanelService.loadedFinished(true);

                if (_error2.error.hasOwnProperty('mensagem')) {
                  _this5.pnotifyService.error(_error2.error.mensagem);
                } else {
                  _this5.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(equipeVenda) {
            this.router.navigate(['../editar', equipeVenda.codEquipeVenda], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, equipeVenda) {
            var _this6 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this6.activateEquipeVenda(index, equipeVenda) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe(function (success) {
              _this6.pnotifyService.success();

              _this6.refreshMainData(equipeVenda);
            }, function (error) {
              _this6.pnotifyService.error();

              _this6.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateEquipeVenda",
          value: function activateEquipeVenda(index, equipeVenda) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.equipeVendaService.activateEquipeVenda(equipeVenda.codEquipeVenda);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, equipeVenda) {
            var _this7 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this7.inactivateEquipeVenda(index, equipeVenda) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this7.loaderNavbar = false;
            })).subscribe(function (success) {
              _this7.pnotifyService.success();

              _this7.refreshMainData(equipeVenda);
            }, function (error) {
              _this7.pnotifyService.error();

              _this7.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateEquipeVenda",
          value: function inactivateEquipeVenda(index, equipeVenda) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 2;
            return this.equipeVendaService.inactivateEquipeVenda(equipeVenda.codEquipeVenda);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(equipeVenda) {
            for (var i = 0; i < this.dados.length; i++) {
              if (equipeVenda.codEquipeVenda === this.dados[i].codEquipeVenda) {
                this.dados[i].codSituacao = equipeVenda.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosEquipeVendaListaComponent;
      }();

      ComercialCadastrosEquipeVendaListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _equipe_venda_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosEquipeVendaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_15__["ComercialService"]
        }];
      };

      ComercialCadastrosEquipeVendaListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosEquipeVendaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-equipe-venda-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _equipe_venda_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosEquipeVendaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"], _comercial_service__WEBPACK_IMPORTED_MODULE_15__["ComercialService"]])], ComercialCadastrosEquipeVendaListaComponent);
      /***/
    },

    /***/
    "dY/j":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/formulario/formulario.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialCadastrosEquipeVendaFormularioComponent */

    /***/
    function dYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaFormularioComponent", function () {
        return ComercialCadastrosEquipeVendaFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "vjis");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "9tUU");
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


      var _equipe_venda_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../equipe-venda.service */
      "44Bq");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialCadastrosEquipeVendaFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosEquipeVendaFormularioComponent(activatedRoute, router, location, formBuilder, equipeVendaService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialCadastrosEquipeVendaFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.equipeVendaService = equipeVendaService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.descEquipeERP = [];
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosEquipeVendaFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.getFormFields();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this8.appTitle = 'Editar Equipe de Venda';
              } else {
                _this8.appTitle = 'Nova Equipe de Venda';
              }

              _this8.titleService.setTitle(_this8.appTitle);

              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Equipe de Venda',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/equipe-venda/lista")
              }, {
                descricao: _this8.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codEquipeVenda: [detalhes.codEquipeVenda],
                dsEquipeVenda: [detalhes.dsEquipeVenda, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codReferenteErp: [detalhes.codReferenteErp, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.loaderFullScreen = false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.equipeVendaService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this9.loaderNavbar = false;
                  _this9.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this9.form.reset();

                      _this9.formChanged = false;

                      _this9.pnotifyService.success(response.mensagem);

                      _this9.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this9.location.back();
                        } else {
                          _this9.router.navigate(['../lista'], {
                            relativeTo: _this9.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this9.pnotifyService.notice(response.mensagem);
                    } else {
                      _this9.pnotifyService.error();
                    }
                  },
                  error: function error(_error3) {
                    _this9.pnotifyService.error();
                  }
                });
              }
            }
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this10 = this;

            this.loaderFullScreen = true;
            this.equipeVendaService.getListaEquipesERP().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this10.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this10.descEquipeERP = response.data;

                _this10.descEquipeERP.unshift({
                  codEquipe: 0,
                  descricao: 'NENHUM'
                });
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "formCanDeactivate",
          value: function formCanDeactivate() {
            if (this.formChanged) {
              if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
              } else {
                return false;
              }
            }

            return true;
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }]);

        return ComercialCadastrosEquipeVendaFormularioComponent;
      }();

      ComercialCadastrosEquipeVendaFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _equipe_venda_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosEquipeVendaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialCadastrosEquipeVendaFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-equipe-venda-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _equipe_venda_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosEquipeVendaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialCadastrosEquipeVendaFormularioComponent);
      /***/
    },

    /***/
    "gKW/":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/equipe-venda-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ComercialCadastrosEquipeVendaModuleRoutingModule */

    /***/
    function gKW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaModuleRoutingModule", function () {
        return ComercialCadastrosEquipeVendaModuleRoutingModule;
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


      var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/guards/form-deactivate.guard */
      "iMgG");
      /* harmony import */


      var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario/formulario-resolver.guard */
      "kj6t");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "aWvT");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "dY/j"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosEquipeVendaListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosEquipeVendaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosEquipeVendaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosEquipeVendaFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosEquipeVendaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosEquipeVendaModuleRoutingModule = function ComercialCadastrosEquipeVendaModuleRoutingModule() {
        _classCallCheck(this, ComercialCadastrosEquipeVendaModuleRoutingModule);
      };

      ComercialCadastrosEquipeVendaModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosEquipeVendaModuleRoutingModule);
      /***/
    },

    /***/
    "iMgG":
    /*!*************************************************!*\
      !*** ./src/app/guards/form-deactivate.guard.ts ***!
      \*************************************************/

    /*! exports provided: FormDeactivateGuard */

    /***/
    function iMgG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function () {
        return FormDeactivateGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormDeactivateGuard = /*#__PURE__*/function () {
        function FormDeactivateGuard() {
          _classCallCheck(this, FormDeactivateGuard);
        }

        _createClass(FormDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component, route, state) {
            return component.formCanDeactivate();
          }
        }]);

        return FormDeactivateGuard;
      }();

      FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FormDeactivateGuard);
      /***/
    },

    /***/
    "k7Xr":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/equipe-venda.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ComercialCadastrosEquipeVendaModule */

    /***/
    function k7Xr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaModule", function () {
        return ComercialCadastrosEquipeVendaModule;
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _equipe_venda_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./equipe-venda-routing.module */
      "gKW/");
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
      "aWvT");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "dY/j"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosEquipeVendaModule = function ComercialCadastrosEquipeVendaModule() {
        _classCallCheck(this, ComercialCadastrosEquipeVendaModule);
      };

      ComercialCadastrosEquipeVendaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosEquipeVendaListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosEquipeVendaFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _equipe_venda_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosEquipeVendaModuleRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialCadastrosEquipeVendaModule);
      /***/
    },

    /***/
    "kj6t":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/formulario/formulario-resolver.guard.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialCadastrosEquipeVendaFormularioResolverGuard */

    /***/
    function kj6t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaFormularioResolverGuard", function () {
        return ComercialCadastrosEquipeVendaFormularioResolverGuard;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _equipe_venda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../equipe-venda.service */
      "44Bq"); // Services


      var ComercialCadastrosEquipeVendaFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosEquipeVendaFormularioResolverGuard(equipeVendaService) {
          _classCallCheck(this, ComercialCadastrosEquipeVendaFormularioResolverGuard);

          this.equipeVendaService = equipeVendaService;
        }

        _createClass(ComercialCadastrosEquipeVendaFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.equipeVendaService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codEquipeVenda: null,
                codCarteira: null,
                nomeCarteira: null,
                codSituacao: null,
                situacao: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null
              }
            });
          }
        }]);

        return ComercialCadastrosEquipeVendaFormularioResolverGuard;
      }();

      ComercialCadastrosEquipeVendaFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _equipe_venda_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosEquipeVendaService"]
        }];
      };

      ComercialCadastrosEquipeVendaFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_equipe_venda_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosEquipeVendaService"]])], ComercialCadastrosEquipeVendaFormularioResolverGuard);
      /***/
    },

    /***/
    "vjis":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/equipe-venda/formulario/formulario.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vjis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-4\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"dsEquipeVenda\">Equipe de Venda</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"dsEquipeVenda\"\n              formControlName=\"dsEquipeVenda\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('dsEquipeVenda') + ' ' + onFieldRequired(form.controls.dsEquipeVenda)\">\n            <invalid-form-control [show]=\"onFieldInvalid('dsEquipeVenda')\" message=\"Nome da Equipe é obrigatória.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-12\">\n            <label for=\"codReferenteErp\">Equipe de Venda no ERP</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"descEquipeERP\"\n              formControlName=\"codReferenteErp\"\n              labelForId=\"codReferenteErp\"\n              bindLabel=\"descricao\"\n              bindValue=\"codEquipe\"\n              [ngClass]=\"onFieldError('codReferenteErp') + ' ' + onFieldRequired(form.controls.codReferenteErp)\">\n            </ng-select>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codSituacao\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"codSituacao\"\n              formControlName=\"codSituacao\"\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"2\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=equipe-venda-equipe-venda-module-es5.js.map