(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restricoes-transporte-restricoes-transporte-module"], {
    /***/
    "/83W":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/lista/lista.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaRestricoesTransporteListaComponent */

    /***/
    function W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteListaComponent", function () {
        return LogisticaRestricoesTransporteListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "Wgfm");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "N36Y");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
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


      var _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/restricoes.service */
      "6xMS");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); // angular
      //services
      //rxjs


      var LogisticaRestricoesTransporteListaComponent = /*#__PURE__*/function () {
        function LogisticaRestricoesTransporteListaComponent(route, restricoesService, pnotify, formBuilder, activatedRoute, atividadesService, routerService, dateService) {
          _classCallCheck(this, LogisticaRestricoesTransporteListaComponent);

          this.route = route;
          this.restricoesService = restricoesService;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.appTitle = "Restricciones de transporte";
          this.breadCrumbTree = [];
          this.showAdvancedFilter = true;
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.noResult = true;
          this.form = this.formBuilder.group({
            "UUID": [null],
            "NM_REST_TRAN": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            "IN_STAT": [null],
            "DS_OBSE": [null]
          });
        }

        _createClass(LogisticaRestricoesTransporteListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.setBreadCrumb();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              _this.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) {
                _this.itemsPerPage = _response.TT_REGI_PAGI;
              }

              _this.getRestricoes(_this.getParams());
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'Cadastros',
              routerLink: '../../'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getRestricoes",
          value: function getRestricoes(params) {
            var _this2 = this;

            if (this.loading === false) {
              this.loadingNavBar = true;
            }

            return this.restricoesService.getRestricoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.restricoes = response.body["data"];
                _this2.totalItems = response.body["total"];
                _this2.noResult = false;
              } else {
                _this2.pnotify.notice("No se encontró información");

                _this2.noResult = true;
              }
            }, function (error) {
              _this2.noResult = true;

              _this2.pnotify.error();
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onShowFilter",
          value: function onShowFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var params = this.getParams();
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: params
            });
            this.getRestricoes(params);
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.get("status").setValue("T");
            this.onFilter();
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: null
            });
          }
        }, {
          key: "changeType",
          value: function changeType(restricao) {
            restricao.status = restricao.status == 1 ? 0 : 1;
            this.onSave(restricao);
          }
        }, {
          key: "onSave",
          value: function onSave(restricao) {
            var _this3 = this;

            this.restricoesService.postRestricoes(restricao).subscribe(function (response) {
              response.status === 200 ? _this3.pnotify.success() : _this3.pnotify.error();
            }, function (error) {
              _this3.pnotify.error();
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }]);

        return LogisticaRestricoesTransporteListaComponent;
      }();

      LogisticaRestricoesTransporteListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }];
      };

      LogisticaRestricoesTransporteListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-restricoes-transporte-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])], LogisticaRestricoesTransporteListaComponent);
      /***/
    },

    /***/
    "4f6A":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/restricoes-transporte.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: LogisticaRestricoesTransporteModule */

    /***/
    function f6A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteModule", function () {
        return LogisticaRestricoesTransporteModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _restricoes_transporte_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./restricoes-transporte-routing.module */
      "fiDC");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "/83W");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "ydEH");

      var LogisticaRestricoesTransporteModule = /*#__PURE__*/_createClass(function LogisticaRestricoesTransporteModule() {
        _classCallCheck(this, LogisticaRestricoesTransporteModule);
      });

      LogisticaRestricoesTransporteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaRestricoesTransporteListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaRestricoesTransporteCadastroComponent"]],
        imports: [_restricoes_transporte_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaRestricoesTransporteRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_12__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"]]
      })], LogisticaRestricoesTransporteModule);
      /***/
    },

    /***/
    "BOG+":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/restricoes-transporte/cadastro/cadastro.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BOG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    [disabled]=\"loadingNavBar === true\"\r\n    [routerLink]=\"['../']\"\r\n    >\r\n    Regresar\r\n  </button>\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID' || loadingNavBar === true\"\r\n    (click) = \"onSave()\"\r\n    >Ahorrar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form [formGroup]=\"form\" class=\"d-flex flex-column align-items-center\" autocomplete=\"off\" [hidden] = \"loading\">\r\n        <div class=\"mtc-title\">Datos de restricción de transporte</div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nome\"\r\n            formControlName=\"NM_REST_TRAN\"\r\n            placeholder=\"Escribelo...\"\r\n            [ngClass]=\"onFieldRequired('NM_REST_TRAN')\"\r\n          />\r\n          <invalid-form-control [show]=\"onFieldInvalid('NM_REST_TRAN')\" message=\"Nome é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-row col-12\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"status\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"status\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"status\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Seleccione...\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"prioridade\">Prioridad</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"NR_PRIO\" min=\"1\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"observacao\">Observación</label>\r\n          <textarea\r\n            id=\"observacao\"\r\n            rows=\"5\"\r\n            formControlName=\"DS_OBSE\"\r\n            placeholder=\"Escribelo...\"\r\n            class=\"form-control\"\r\n            >\r\n          </textarea>\r\n        </div>\r\n      </form>\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col mb-3\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <message\r\n        *ngIf=\"materiaisAssociadosLoading\"\r\n        icon=\"fas fa-cog fa-spin\"\r\n        text=\"Buscamos información sobre la restricción de transporte seleccionada ...\">\r\n      </message>\r\n      <div [hidden]=\"materiaisAssociadosLoading\">\r\n        <div class=\"row mb-2 mt-4\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Materiales asociados con restricciones de transporte</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger\"\r\n                (click)=\"onRemoverAssociacao()\">\r\n                <i class=\"fas fa-trash\"></i>\r\n                <span>Limpiar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!materiaisAssociadosLoading && materiaisAssociados.length > 0\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigMateriaisAssociados\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.materiaisAssociados ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('materiaisAssociados')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" width=\"20%\">Código</th>\r\n                  <th scope=\"col\" width=\"70%\">Descripción</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of materiaisAssociados\" >\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td width=\"20%\">{{ item.ID_REFE_ERP }}</td>\r\n                  <td width=\"70%\">\r\n                   {{ item.NM_MATE | uppercase }}\r\n                  </td>\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <btn-icon\r\n                      icon=\"fas fa-trash\"\r\n                      size=\"small\"\r\n                      (click)=\"onRemoverAssociacao(item)\"\r\n                      *ngIf=\"!item.loading\"  \r\n                    >\r\n                    </btn-icon>\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!materiaisLoading && materiaisAssociados.length === 0\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-exchange-alt\"\r\n              text=\"No se encontró asociación\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Búsqueda de materiales</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"getMateriais()\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-4\">\r\n              <label for=\"buscarPor\">BÚSQUEDA POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_REFE_ERP\">Código</option>\r\n                <option value=\"NM_MATE\" selected>Descripción</option>\r\n                <option value=\"NM_CLAS\" selected>Clase</option>\r\n                <option value=\"NM_LINH\" selected>Línea</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-8\">\r\n              <label>TÉRMINO DE BÚSQUEDA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getMateriais()\"\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"materiais.length > 0 && !materiaisLoading\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Selección de material</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarMateriais()\"\r\n                [disabled]=\"!form.get('UUID')?.value\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span\r\n                  [tooltip]=\"!form.get('UUID')?.value ? 'Seleccione una restricción de transporte':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\">Conectar\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigMateriais\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.materiais ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('materiais')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 90%\">Materiales</th>\r\n                  <th style=\"width: 5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of materiais\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 90%\"\r\n                    (click)=\"item.checked = !item.checked\">\r\n                    {{ item.ID_REFE_ERP }} - {{ item.NM_MATE | uppercase }}\r\n                  </td>\r\n                  <td style=\"width: 5%\">\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"materiaisLoading\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos investigando los materiales para usted ...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\" *ngIf=\"(materiais.length == 0) && !materiaisLoading\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"No se encontró información\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"row\" *ngIf=\"usuariosLista.length === 0 && !firstSearch\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-search\"\r\n              text=\"Preecha os campos acima para pesquisar usuarios\">\r\n            </message>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n";
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
    "N36Y":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/lista/lista.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function N36Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvY2FkYXN0cm9zL3Jlc3RyaWNvZXMtdHJhbnNwb3J0ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9yZXN0cmljb2VzLXRyYW5zcG9ydGUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtY2hlY2sge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmZhLWJhbiB7XHJcbiAgY29sb3I6IHJlZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "OYGH":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/cadastro/cadastro.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OYGH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9yZXN0cmljb2VzLXRyYW5zcG9ydGUvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Rk3r":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/date.service.ts ***!
      \******************************************************/

    /*! exports provided: DateService */

    /***/
    function Rk3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          this.weeks = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        }

        _createClass(DateService, [{
          key: "sameDay",
          value: function sameDay(dateA, dateB) {
            return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
          }
        }, {
          key: "getHourMinute",
          value: function getHourMinute(date) {
            var getHours = date.getHours();
            var getMinutes = date.getMinutes();
            var hours, minutes;

            if (getHours < 10) {
              hours = "0".concat(getHours);
            } else {
              hours = getHours;
            }

            if (getMinutes < 10) {
              minutes = "0".concat(getMinutes);
            } else {
              minutes = getMinutes;
            }

            return "".concat(hours, ":").concat(minutes);
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(dateA, dateB) {
            var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var day = dateA.getDate();
            var weekDay = dateA.getDay();
            var month = dateA.getMonth();
            var year = dateA.getFullYear();
            var hour = this.getHourMinute(dateA);

            if (showTime) {
              if (dateB) {
                var hourB = this.getHourMinute(dateB);
                return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, ", desde ").concat(hour, " hasta ").concat(hourB);
              }

              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, " hasta ").concat(hour);
            } else {
              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year);
            }
          }
        }, {
          key: "getFullMonth",
          value: function getFullMonth(date) {
            return this.months[date.getMonth()];
          }
        }, {
          key: "getFirstDayYear",
          value: function getFirstDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 0, 1);
          }
        }, {
          key: "getLastDayYear",
          value: function getLastDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 11, 31);
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() + 1, 0);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
          }
        }, {
          key: "convert2PhpDate",
          value: function convert2PhpDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            if (m < 10) m = "0".concat(m);
            if (d < 10) d = "0".concat(d);
            if (h < 10) h = "0".concat(h);
            if (i < 10) i = "0".concat(i);
            return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(h, ":").concat(i);
          }
        }, {
          key: "convertToBrazilianDate",
          value: function convertToBrazilianDate(date) {
            var y = date.getFullYear().toString();
            var m = (date.getMonth() + 1).toString().padStart(2, '0');
            var d = date.getDate().toString().padStart(2, '0');
            var h = date.getHours().toString().padStart(2, '0');
            var i = date.getMinutes().toString().padStart(2, '0');
            var s = date.getSeconds().toString().padStart(2, '0');
            return "".concat(d, "/").concat(m, "/").concat(y, " ").concat(h, ":").concat(i, ":").concat(s);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            if (time !== null) {
              var timeSplit = time.split(':');
              return "".concat(timeSplit[0], ":").concat(timeSplit[1]);
            }

            return time;
          }
        }, {
          key: "convertToUrlDate",
          value: function convertToUrlDate(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (d < 10) d = "0".concat(d);
            if (m < 10) m = "0".concat(m);
            return "".concat(d, "-").concat(m, "-").concat(y);
          }
        }, {
          key: "convertStringToDate",
          value: function convertStringToDate(stringDate, dateType) {
            var date;

            if (stringDate.indexOf(':') > -1) {
              var stringDateSplit = stringDate.split(' ');
              var dateSplit = stringDateSplit[0].split('-');
              var timeSplit = stringDateSplit[1].split(':');

              if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              } else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              }
            } else {
              var _dateSplit = stringDate.split('-');

              if (dateType == 'latam') {
                date = new Date(_dateSplit[2], parseInt(_dateSplit[1]) - 1, _dateSplit[0].substr(0, 2));
              } else if (dateType == 'usa') {
                date = new Date(_dateSplit[0], parseInt(_dateSplit[1]) - 1, _dateSplit[2].substr(0, 2));
              }
            }

            return date;
          }
        }, {
          key: "formatWithSlashes",
          value: function formatWithSlashes(stringDate, dateType) {
            var dateSplit = stringDate.split('-');
            var date;

            if (dateType == 'latam') {
              date = "".concat(dateSplit[2], "/").concat(dateSplit[1], "/").concat(dateSplit[0]);
            } else if (dateType == 'usa') {
              date = "".concat(dateSplit[1], "/").concat(dateSplit[2], "/").concat(dateSplit[0]);
            }

            return date;
          }
        }, {
          key: "addDaysToDate",
          value: function addDaysToDate(date, days) {
            return new Date(date.setDate(date.getDate() + days));
          }
        }]);

        return DateService;
      }();

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "Wgfm":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/restricoes-transporte/lista/lista.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wgfm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button [routerLink]=\"['../novo']\" >\r\n    Nuevo\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input\r\n            id=\"nome\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"NM_REST_TRAN\" \r\n            (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            name=\"status\"\r\n            id=\"status\"\r\n            class=\"form-control\">\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"'1'\">Activo</option>\r\n            <option value=\"'0'\">Inactivo</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div  class=\"col-12 p-0 mt-3\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Id</th>\r\n            <th>Nombre</th>\r\n            <th>Usuario</th>\r\n            <th width=\"70px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let restricao of restricoes; let i = index\">\r\n            <td class=\"text-truncate\"  [ngClass]=\"restricao.IN_STAT == 1 ? 'border-success' : 'border-danger'\"> {{ restricao.UUID }} </td>  \r\n            <td class=\"text-truncate\"> {{ restricao.NM_REST_TRAN }} </td>\r\n            <td class=\"text-truncate\"> \r\n              <span *ngIf=\"!restricao.DT_ATUA\">[{{ restricao.DT_INCL | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\r\n              <span *ngIf=\"restricao.DT_ATUA\">[{{ restricao.DT_ATUA | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\r\n              <span>({{ restricao.NR_MATR }})&nbsp; {{ restricao.NM_USUA }}</span>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <a class=\"btn-icon-sm\" [routerLink]=\"['../', restricao.UUID]\">\r\n                <i class=\"fas fa-edit\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "fiDC":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/restricoes-transporte-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: LogisticaRestricoesTransporteRoutingModule */

    /***/
    function fiDC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteRoutingModule", function () {
        return LogisticaRestricoesTransporteRoutingModule;
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


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "ydEH");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "/83W");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaRestricoesTransporteListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRestricoesTransporteCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRestricoesTransporteCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaRestricoesTransporteRoutingModule = /*#__PURE__*/_createClass(function LogisticaRestricoesTransporteRoutingModule() {
        _classCallCheck(this, LogisticaRestricoesTransporteRoutingModule);
      });

      LogisticaRestricoesTransporteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaRestricoesTransporteRoutingModule);
      /***/
    },

    /***/
    "ydEH":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/cadastro/cadastro.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: LogisticaRestricoesTransporteCadastroComponent */

    /***/
    function ydEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRestricoesTransporteCadastroComponent", function () {
        return LogisticaRestricoesTransporteCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "BOG+");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "OYGH");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/restricoes.service */
      "6xMS");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // angular
      // services
      // rxjs


      var LogisticaRestricoesTransporteCadastroComponent = /*#__PURE__*/function () {
        function LogisticaRestricoesTransporteCadastroComponent(formBuilder, restricaoService, pnotify, router, activatedRoute, atividadesService, confirmModalService) {
          _classCallCheck(this, LogisticaRestricoesTransporteCadastroComponent);

          this.formBuilder = formBuilder;
          this.restricaoService = restricaoService;
          this.pnotify = pnotify;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.confirmModalService = confirmModalService;
          this.appTitle = "registrar";
          this.status = [{
            "id": 1,
            "nome": "activo",
            "valor": 1
          }, {
            "id": 0,
            "nome": "inactivo",
            "valor": 0
          }];
          this.breadCrumbTree = [];
          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.noResult = true;
          /*loading*/

          this.materiais = [];
          this.materiaisLoading = false;
          this.materiaisAssociados = [];
          this.materiaisAssociadosLoading = false;
          this.tableConfigMateriaisAssociados = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false
          };
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.toggle = {
            materiais: false,
            materiaisAssociados: false
          };
          this.form = this.formBuilder.group({
            "UUID": [null],
            "NM_REST_TRAN": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            "IN_STAT": [1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            "NR_PRIO": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            "DS_OBSE": [null]
          });
          this.formMateriais = this.formBuilder.group({
            buscarPor: ['NM_MATE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(LogisticaRestricoesTransporteCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.onActivatedRoute();
            this.setBreadCrumb();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;

            if (!(params === null || params === void 0 ? void 0 : params.id)) {
              this.loading = false;
              return;
            }

            this.getRestricao(params === null || params === void 0 ? void 0 : params.id);
            this.getMateriaisAssociados({
              "UUID_LOGI_REST_TRAN": params === null || params === void 0 ? void 0 : params.id
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'Cadastro',
              routerLink: './../../'
            }, {
              descricao: 'Restricciones de transporte',
              routerLink: '../'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            this.loadingNavBar = true;
            return this.restricaoService.postRestricoes(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this4.loadingNavBar = false;
              _this4.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.form.reset();

                _this4.pnotify.success();

                _this4.router.navigate(["./../"], {
                  relativeTo: _this4.activatedRoute
                });
              } else {
                _this4.pnotify.error();
              }
            }, function (error) {
              _this4.noResult = true;

              _this4.pnotify.error();
            });
          }
        }, {
          key: "getRestricao",
          value: function getRestricao(id) {
            var _this5 = this;

            this.restricaoService.getRestricao(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this5.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.form.patchValue(response.body['data']);
              } else {
                _this5.pnotify.error();
              }
            }, function (error) {
              _this5.pnotify.error();
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this6 = this;

            var _a, _b;

            var buscarPor = (_a = this.formMateriais.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
            var pesquisa = (_b = this.formMateriais.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
            }

            this.toggle.materiais = false;
            this.materiaisLoading = true;
            this.restricaoService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this6.materiaisLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this6.materiais = [];
                return;
              }

              var materiais = response.body['data'];
              _this6.materiais = materiais.filter(function (material) {
                return !_this6.materiaisAssociados.some(function (item) {
                  return item.UUID_MATE == material.UUID;
                });
              });
              _this6.tableConfigMateriais.fixedHeader = _this6.materiais.length > 9 ? true : false;
            });
          }
        }, {
          key: "getMateriaisAssociados",
          value: function getMateriaisAssociados(params) {
            var _this7 = this;

            params.IN_STAT = '1';
            params.IN_PAGI = '1';
            params.ORDE_BY = 'ID_REFE_ERP';
            this.materiaisAssociadosLoading = true;
            this.restricaoService.getMateriaisAssociados(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this7.materiaisAssociadosLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this7.materiaisAssociados = [];
                return;
              }

              _this7.materiaisAssociados = response.body['data'];
              _this7.tableConfigMateriaisAssociados.fixedHeader = _this7.materiaisAssociados.length > 9 ? true : false;
            });
          }
        }, {
          key: "onAssociarMateriais",
          value: function onAssociarMateriais() {
            var _this8 = this;

            var materiais = this.materiais.filter(function (material) {
              return material.checked;
            });
            this.toggle.materiais = false;
            materiais.map(function (item) {
              var _a, _b;

              item.loading = true;

              if (_this8.materiaisAssociados.some(function (material) {
                return (material === null || material === void 0 ? void 0 : material.ID_REFE_ERP) === item.ID_REFE_ERP;
              })) {
                return;
              }

              var params = {
                "UUID_LOGI_REST_TRAN": (_a = _this8.form.get("UUID").value) !== null && _a !== void 0 ? _a : "",
                "UUID_MATE": (_b = item === null || item === void 0 ? void 0 : item.UUID) !== null && _b !== void 0 ? _b : "",
                "IN_STAT": "1"
              };

              _this8.restricaoService.postMateriaisAssociados(params).subscribe(function (response) {
                if (response.status === 200) {
                  _this8.materiaisAssociados = [].concat(_toConsumableArray(_this8.materiaisAssociados), [Object.assign(Object.assign({}, item), {
                    checked: false,
                    loading: false,
                    UUID_MATE: item.UUID,
                    UUID_LOGI_REST_TRAN: _this8.form.get("UUID").value
                  })]);
                  _this8.materiais = _this8.materiais.filter(function (material) {
                    return !material.checked;
                  });
                  _this8.tableConfigMateriaisAssociados.fixedHeader = _this8.materiaisAssociados.length > 9 ? true : false;
                }
              });
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirma la eliminación', '¿Está seguro de que desea continuar con la eliminación del registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onRemoverAssociacao",
          value: function onRemoverAssociacao(material) {
            var _this9 = this;

            var materiais = material ? [material] : this.materiaisAssociados.filter(function (material) {
              return material.checked;
            });
            this.toggle.materiaisAssociados = false;

            if (materiais.length == 0) {
              this.pnotify.notice("Ningún material seleccionado.");
              return;
            }

            this.confirmDelete().subscribe(function (response) {
              if (!response) {
                return;
              }

              materiais.map(function (item) {
                item.IN_STAT = '0';
                item.loading = true;

                _this9.restricaoService.postMateriaisAssociados(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                  item.loading = false;
                })).subscribe(function (response) {
                  if (response.status !== 200) {
                    return;
                  }

                  _this9.materiaisAssociados = _this9.materiaisAssociados.filter(function (material) {
                    return material.UUID_MATE != item.UUID_MATE;
                  });
                  _this9.tableConfigMateriaisAssociados.fixedHeader = _this9.materiaisAssociados.length > 9 ? true : false;
                });
              });
            });
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll(item) {
            var _this10 = this;

            this.toggle[item] = !this.toggle[item];
            this[item].map(function (material) {
              return material.checked = _this10.toggle[item];
            });
          } // Validação de formulário

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

        return LogisticaRestricoesTransporteCadastroComponent;
      }();

      LogisticaRestricoesTransporteCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]
        }];
      };

      LogisticaRestricoesTransporteCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-restricoes-transporte-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_restricoes_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntergaRestricoesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]])], LogisticaRestricoesTransporteCadastroComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=restricoes-transporte-restricoes-transporte-module-es5.js.map