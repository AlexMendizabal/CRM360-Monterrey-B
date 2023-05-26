(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendamentos-agendamentos-module"], {
    /***/
    "37/I":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/drag-and-drop/drag-and-drop.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n<div class=\"row m-0\">\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\n    <div class=\"dropzone px-3\" placement=\"left\">\n      <strong class=\"my-auto text-uppercase\" [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\n        {{ etapa?.descricao }}\n      </strong>\n      <div class=\"rounded-circle text-white icon-40 card m-auto\" [id]=\"etapa?.id\" draggable=\"true\" [ngClass]=\"etapa?.check == 0 ? 'bg-secondary' : 'bg-success'\">\n        <i [class]=\"etapa?.icone\"></i>\n      </div>\n    </div>\n    <div class=\"mt-2\" *ngIf=\"!last\">\n      <div class=\"border-bottom border-secondary p-3\">\n        <div *ngIf=\"etapa?.check === 1\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row m-4 p-4\"></div>\n<div class=\"row m-4 p-4\"></div>\n<div class=\"row m-4 p-4\"></div> -->\n<div class=\"row m-4 \">\n  <div class=\"justify-content-between mx-4\"> \n    <div class=\"sobrepor\" *ngIf=\"loading\" ></div>\n    <strong class=\"my-auto text-uppercase text-success\" style=\"font-size: 11px;\">\n      Veículo\n    </strong>\n    <div class=\"rounded-circle text-white icon-40 card m-auto bg-success\" draggable=\"true\">\n      <i class=\"fas fa-truck\"></i>\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\n    <div class=\"dropzone rounded-circle\" [id]=\"etapa?.id\" placement=\"left\">\n      <div class=\"text-center\">\n        <strong class=\"my-auto text-uppercase\"  [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\n          {{ etapa?.descricao }}\n        </strong>\n      </div>\n      <div class=\"dropzone-item\" *ngIf=\"etapa?.check == 0\">\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-secondary\" >\n          <i [class]=\"etapa?.icone\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"etapa?.check == 1\">\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-success\">\n          <i [class]=\"etapa?.icone\"></i>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"mt-2\" *ngIf=\"!last\">\n      <div class=\"border-bottom border-secondary p-3\">\n        <div *ngIf=\"etapa?.check === 1\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-right mt-auto\" *ngIf=\"loading\" >\n    <div class=\"spinner-border text-dark\"></div>\n  </div>\n</div>\n<hr>\n<div class=\"row m-4 \">\n  <div class=\"justify-content-between mx-4\"> \n    <div class=\"sobrepor\" *ngIf=\"loading\" ></div>\n    <strong class=\"my-auto text-uppercase text-success\" style=\"font-size: 11px;\">\n      Veículo\n    </strong>\n    <div class=\"rounded-circle text-white icon-40 card m-auto bg-success\" draggable=\"true\">\n      <i class=\"fas fa-truck\"></i>\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\n    <div class=\"dropzone rounded-circle\" [id]=\"etapa?.id\" placement=\"left\">\n      <div class=\"text-center\">\n        <strong class=\"my-auto text-uppercase\"  [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\n          {{ etapa?.descricao }}\n        </strong>\n      </div>\n      <div class=\"dropzone-item\" *ngIf=\"etapa?.check == 0\">\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-secondary\" >\n          <i [class]=\"etapa?.icone\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"etapa?.check == 1\">\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-success\">\n          <i [class]=\"etapa?.icone\"></i>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"mt-2\" *ngIf=\"!last\">\n      <div class=\"border-bottom border-secondary p-3\">\n        <div *ngIf=\"etapa?.check === 1\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-right mt-auto\" *ngIf=\"loading\" >\n    <div class=\"spinner-border text-dark\"></div>\n  </div>\n</div>\n<hr>\n<div class=\"row m-4 \">\n  <div class=\"justify-content-between mx-4\"> \n    <div class=\"sobrepor\" *ngIf=\"loading\" ></div>\n    <strong class=\"my-auto text-uppercase text-success\" style=\"font-size: 11px;\">\n      Veículo\n    </strong>\n    <div class=\"rounded-circle text-white icon-40 card m-auto bg-success\" draggable=\"true\">\n      <i class=\"fas fa-truck\"></i>\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-between\" *ngFor=\"let etapa of circuitos;let last = last; let first = first\">\n    <div class=\"dropzone rounded-circle\" [id]=\"etapa?.id\" placement=\"left\">\n      <div class=\"text-center\">\n        <strong class=\"my-auto text-uppercase\"  [ngClass]=\"etapa?.check == 1 ? 'text-success' : ''\" style=\"font-size: 11px;\">\n          {{ etapa?.descricao }}\n        </strong>\n      </div>\n      <div class=\"dropzone-item\" *ngIf=\"etapa?.check == 0\">\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-secondary\" >\n          <i [class]=\"etapa?.icone\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"etapa?.check == 1\">\n        <div class=\"rounded-circle text-white icon-40 m-auto bg-success\">\n          <i [class]=\"etapa?.icone\"></i>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"mt-2\" *ngIf=\"!last\">\n      <div class=\"border-bottom border-secondary p-3\">\n        <div *ngIf=\"etapa?.check === 1\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-right mt-auto\" *ngIf=\"loading\" >\n    <div class=\"spinner-border text-dark\"></div>\n  </div>\n</div>\n<hr>";
      /***/
    },

    /***/
    "3Hsd":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/lista/lista.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hsd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"AGENDAMENTOS\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2\">\n              <label for=\"placa\">Placa</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"placa\"\n                formControlName=\"PLAC\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"NM_MOTO\">Motorista</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_MOTO\"\n                formControlName=\"NM_MOTO\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"filiais\">Filial</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filiais\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingFiliais\"\n                labelForId=\"ID_LOGI_FILI\"\n                bindLabel=\"NM_FILI\"\n                bindValue=\"ID_LOGI_FILI\"\n                id=\"ID_LOGI_FILI\"\n                formControlName=\"ID_LOGI_FILI\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"tiposCircuito\">Tipo de Circuito</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tiposCircuito\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingTiposCircuito\"\n              labelForId=\"ID_LOGI_YMS_CIRC_TIPO\"\n              bindLabel=\"NM_CIRC_TIPO\"\n              bindValue=\"ID_LOGI_YMS_CIRC_TIPO\"\n              id=\"ID_LOGI_YMS_CIRC_TIPO\"\n              formControlName=\"ID_LOGI_YMS_CIRC_TIPO\"\n              >\n            </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 \">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 \">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Data</th>\n              <th scope=\"col\" >Veículo</th>\n              <th scope=\"col\" >Tipo Circuito</th>\n              <th scope=\"col\" >Filial</th>\n              <th scope=\"col\" >Motorista</th>\n              <th scope=\"col\" >Transportadora</th>\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let agendamento of agendamentos\"  [class.table-active]=\"agendamento?.ID_LOGI_YMS_ETAP == agendamentoSelecionada?.ID_LOGI_ENMA_FHNC_OCPR && showDetailPanel\">\n              <td  [ngClass]=\"agendamento.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{agendamento.ID_LOGI_YMS_AGEN }}\n              </td>\n              <td >{{ agendamento.DT_INIC_PREV | date: 'dd/MM/yyyy'}}</td>\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\n              <td >{{ agendamento.NM_ETAP_TIPO | uppercase}}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"agendamento.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(agendamento)\">\n                    <i [ngClass]=\"agendamento.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', agendamento.ID_LOGI_YMS_ETAP]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(agendamento)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Histórico de alteração\">\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr>\n              <td class=\"text-center\" *ngIf=\"agendamentoSelecionada?.DT_INCL != null && agendamentoSelecionada?.DT_ATUA == null \">{{ agendamentoSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td class=\"text-center\" *ngIf=\"agendamentoSelecionada?.DT_INCL != null && agendamentoSelecionada?.DT_ATUA != null \">{{ agendamentoSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>{{ agendamentoSelecionada?.NM_USUA | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "A1tM":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/modais/notas-fiscais/notas-fiscais.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosModaisNotasFiscaisComponent */

    /***/
    function A1tM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModaisNotasFiscaisComponent", function () {
        return LogisticaYmsAgendamentosModaisNotasFiscaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notas-fiscais.component.html */
      "ldgx");
      /* harmony import */


      var _notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notas-fiscais.component.scss */
      "i7iJ");
      /* harmony import */


      var _entrada_materiais_notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../entrada-materiais/notas-fiscais/services/notas-fiscais.service */
      "81bo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LogisticaYmsAgendamentosModaisNotasFiscaisComponent = /*#__PURE__*/function () {
        function LogisticaYmsAgendamentosModaisNotasFiscaisComponent(formBuilder, notasFiscaisService) {
          _classCallCheck(this, LogisticaYmsAgendamentosModaisNotasFiscaisComponent);

          this.formBuilder = formBuilder;
          this.notasFiscaisService = notasFiscaisService;
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this.loading = false;
          this.noNotasFiscais = true;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.notasFiscais = [];
        }

        _createClass(LogisticaYmsAgendamentosModaisNotasFiscaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              buscarPor: ['NR_NOTA_FISC'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ID_MATE: [null],
              NR_NOTA_FISC: [null],
              NM_MATE: [null],
              DS_LOTE: [null],
              TT_MATE_ORIG: [null],
              NM_FORN: [null],
              NM_EMPR: [null],
              DS_UNID_MEDI: [null],
              PAGI: 1,
              IN_STAT: ['1'],
              TT_REGI_PAGI: [this.itemsPerPage]
            });
          }
        }, {
          key: "getNotasFiscais",
          value: function getNotasFiscais() {
            var _this = this;

            var _a, _b;

            var buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
            var pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa;
            }

            params['PAGI'] = this.form.get('PAGI').value;
            params['TT_REGI_PAGI'] = 100;
            this.loading = true;
            this.notasFiscaisService.getNotasFiscais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.notasFiscais = response['body']['data'];
                _this.totalItems = response.body['total'];
                _this.noNotasFiscais = false;
              } else {
                _this.notasFiscais = [];
                _this.noNotasFiscais = true;
              }
            }, function (error) {});
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.getNotasFiscais();
          }
        }, {
          key: "onSelect",
          value: function onSelect(nota) {
            this.select.emit(nota);
            this.onClose();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.close.emit(true);
          }
        }]);

        return LogisticaYmsAgendamentosModaisNotasFiscaisComponent;
      }();

      LogisticaYmsAgendamentosModaisNotasFiscaisComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _entrada_materiais_notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisNotasFiscaisService"]
        }];
      };

      LogisticaYmsAgendamentosModaisNotasFiscaisComponent.propDecorators = {
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }]
      };
      LogisticaYmsAgendamentosModaisNotasFiscaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-agendamentos-modais-notas-fiscais',
        template: _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _entrada_materiais_notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisNotasFiscaisService"]])], LogisticaYmsAgendamentosModaisNotasFiscaisComponent);
      /***/
    },

    /***/
    "F9MH":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/services/agendamentos.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosService */

    /***/
    function F9MH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosService", function () {
        return LogisticaYmsAgendamentosService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); //angular
      // services


      var LogisticaYmsAgendamentosService = /*#__PURE__*/function () {
        function LogisticaYmsAgendamentosService(http) {
          _classCallCheck(this, LogisticaYmsAgendamentosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsAgendamentosService, [{
          key: "getAgendamentos",
          value: function getAgendamentos(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/agendamentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getAgendamento",
          value: function getAgendamento(id) {
            return this.http.get("".concat(this.API, "/logistica/yms/agendamentos/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postAgendamentos",
          value: function postAgendamentos(etapas) {
            return this.http.post("".concat(this.API, "/logistica/yms/agendamentos"), etapas, {
              observe: 'response'
            });
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(materiais) {
            return this.http.post("".concat(this.API, "/logistica/yms/agendamentos/materiais"), materiais, {
              observe: 'response'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.http.get("".concat(this.API, "/common/v2/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsAgendamentosService;
      }();

      LogisticaYmsAgendamentosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsAgendamentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsAgendamentosService);
      /***/
    },

    /***/
    "HrOm":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/modais/veiculos/veiculos.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HrOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4>Pesquisa de Veículos</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"IN_STAT\">Situação</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"IN_STAT\"\n          >\n            <option value=\"1\">Ativo</option>\n            <option value=\"0\">Inativo</option>\n            <option value=\"\">Exibir Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"cdItem\">BUSCAR POR</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"buscarPor\"\n          >\n            <option value=\"ID_LOGI_VEIC\">ID</option>\n            <option value=\"PLAC\" selected>Placa</option>\n            <option value=\"NM_MOTO\">Motorista</option>\n            <option value=\"NM_TRAN\">Transportadora</option>\n            <option value=\"NM_VEIC_TIPO\">Tipo de Veículo</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-6\">\n          <label>TERMO DE PESQUISA</label>\n          <div class=\"input-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"pesquisa\"\n              >\n              <div class=\"input-group-append\">\n                <span \n                  [tooltip]=\"form.valid == false ? 'Digite um termo de pesquisa':''\"\n                  container=\"body\"\n                  placement =\"left\"\n                >\n                  <button\n                  style=\"height: 25px;\"\n                    [disabled]=\"form.valid == false\"\n                    class=\"input-group-text hover\"\n                    (click)=\"getVeiculos()\"\n                    >\n                    <i class=\"fas fa-search\"></i>\n                  </button>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <custom-table *ngIf=\"!noVeiculos\" class=\"text-center\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th>ID </th>\n        <th>Placa</th>\n        <th>Tipo de Veículo</th>\n        <th>Nome Motorista</th>\n        <th>Transportadora</th>\n        <th></th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr *ngFor=\"let veiculo of veiculos\">\n        <td >{{ veiculo.ID_LOGI_VEIC }}</td>\n        <td>{{ veiculo.PLAC }}</td>\n        <td>{{ veiculo.NM_VEIC_TIPO }}</td>\n        <td>{{ veiculo.NM_MOTO }}</td>\n        <td>{{ veiculo.NM_TRAN }}</td>\n        <td>\n          <button\n            class=\"btn-icon-sm\"\n            tooltip=\"Salvar Informações\"\n            container=\"body\"\n            (click)=\"onSelect(veiculo)\"\n          >\n            <i class=\"far fa-save\"></i>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n  <div *ngIf=\"totalItems > itemsPerPage\" >\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"totalItems\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>";
      /***/
    },

    /***/
    "IZvq":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/modais/materiais/materiais.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function IZvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvbWF0ZXJpYWlzL21hdGVyaWFpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hZ2VuZGFtZW50b3MvbW9kYWlzL21hdGVyaWFpcy9tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25bZGlzYWJsZWRde1xuICBjdXJzb3I6IG5vLWRyb3A7XG59Il19 */";
      /***/
    },

    /***/
    "JZwn":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/agendamentos.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosModule */

    /***/
    function JZwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModule", function () {
        return LogisticaYmsAgendamentosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _cadastros_veiculos_veiculos_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../cadastros/veiculos/veiculos.module */
      "O9Ya");
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


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "SzE3");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "MZzh");
      /* harmony import */


      var _agendamentos_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./agendamentos-routing.module */
      "ViSt");
      /* harmony import */


      var _modais_veiculos_veiculos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./modais/veiculos/veiculos.component */
      "QGxU");
      /* harmony import */


      var _modais_materiais_materiais_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./modais/materiais/materiais.component */
      "rRVE");
      /* harmony import */


      var _modais_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./modais/notas-fiscais/notas-fiscais.component */
      "A1tM");
      /* harmony import */


      var _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./drag-and-drop/drag-and-drop.component */
      "uuP1");

      var LogisticaYmsAgendamentosModule = function LogisticaYmsAgendamentosModule() {
        _classCallCheck(this, LogisticaYmsAgendamentosModule);
      };

      LogisticaYmsAgendamentosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaYmsAgendamentosListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaYmsAgendamentosCadastroComponent"], _modais_veiculos_veiculos_component__WEBPACK_IMPORTED_MODULE_19__["LogisticaYmsAgendamentosModaisVeiculosComponent"], _modais_materiais_materiais_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaYmsAgendamentosModaisMateriaisComponent"], _modais_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaYmsAgendamentosModaisNotasFiscaisComponent"], _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaYmsAgendamentosDragAndDropComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_4__["TextMaskModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_13__["ModuleWrapperModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_3__["NgBrazil"], _agendamentos_routing_module__WEBPACK_IMPORTED_MODULE_18__["LogisticaYmsAgendamentosRoutingModule"], _cadastros_veiculos_veiculos_module__WEBPACK_IMPORTED_MODULE_1__["LogisticaVeiculosModule"]]
      })], LogisticaYmsAgendamentosModule);
      /***/
    },

    /***/
    "LpYa":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/cadastro/cadastro.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LpYa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Agendamentos\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postAgendamentos()\"\n    >\n    Avançar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"sobrepor\" *ngIf=\"sobrepor\"></div>\n      <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n        <div class=\"mtc-title\">Dados do Agendamento</div>\n        <div class=\"form-row \">\n          <div class=\"form-group col-md-8\">\n            <label for=\"DS_AGEN\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_AGEN\"\n              formControlName=\"DS_AGEN\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('DS_AGEN') + ' ' + onFieldRequired('DS_AGEN')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_AGEN')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-4 \">\n            <label for=\"DT_INIC\">Previsão de chegada</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"DT_INIC_PREV\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"Selecione...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_INIC_PREV\"\n                [ngClass]=\"onFieldError('DT_INIC_PREV') + ' ' + onFieldRequired('DT_INIC_PREV')\">\n              <invalid-form-control [show]=\"onFieldInvalid('DT_INIC_PREV')\" message=\"Data prevista de chegada é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row \">\n          <div class=\"form-group col-md-6\">\n            <label for=\"filiais\">Filial</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"filiais\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingFiliais\"\n              labelForId=\"ID_LOGI_FILI\"\n              bindLabel=\"NM_FILI\"\n              bindValue=\"ID_LOGI_FILI\"\n              id=\"ID_LOGI_FILI\"\n              formControlName=\"ID_LOGI_FILI\"\n              [ngClass]=\"onFieldError('ID_LOGI_FILI') + ' ' + onFieldRequired('ID_LOGI_FILI')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_FILI')\" message=\"Filial é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"tiposCircuito\">Tipo de Circuito</label>\n            <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tiposCircuito\"\n            [virtualScroll]=\"true\"\n            placeholder=\"Selecione...\"\n            [loading]=\"loadingTiposCircuito\"\n            labelForId=\"ID_LOGI_YMS_CIRC_TIPO\"\n            bindLabel=\"NM_CIRC_TIPO\"\n            bindValue=\"ID_LOGI_YMS_CIRC_TIPO\"\n            id=\"ID_LOGI_YMS_CIRC_TIPO\"\n            formControlName=\"ID_LOGI_YMS_CIRC_TIPO\"\n            [ngClass]=\"onFieldError('ID_LOGI_YMS_CIRC_TIPO') + ' ' + onFieldRequired('ID_LOGI_YMS_CIRC_TIPO')\"\n            >\n          </ng-select>\n          <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_YMS_CIRC_TIPO')\" message=\"Tipo de circuito é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <fieldset class=\"border-top pt-2 mt-4\">\n          <legend \n          class=\"text-center mb-0\"\n          style=\"font-size: larger; width: auto;\">Dados do Veículo</legend>\n          <div class=\"form-row \">\n            <div class=\"form-group col-md-6 \">\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                <label class=\"my-auto\" for=\"PLAC\">Placa</label>\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" >\n                  <a\n                    class=\"text-primary\"\n                    href=\"javascript:void(0)\"\n                    (click)=\"openModal(modalVeiculos)\">\n                    <strong *ngIf=\"!this.form.get('PLAC').value\">Selecionar</strong>\n                    <strong *ngIf=\"this.form.get('PLAC').value\">Trocar</strong>\n                  </a>\n                </div>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"PLAC\"\n                formControlName=\"PLAC\"\n                placeholder=\"Selecione...\"\n                [ngClass]=\"onFieldError('PLAC') + ' ' + onFieldRequired('PLAC')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('PLAC')\" message=\"Veículo é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                <label class=\"my-auto\" for=\"ID_LOGI_VEIC_TIPO\">Tipo de Veículo</label>\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"!this.form.get('ID_LOGI_VEIC_TIPO').value && this.form.get('PLAC').value\">\n                  <a\n                    class=\"text-primary\"\n                    href=\"javascript:void(0)\"\n                    [routerLink]=\"[getLinkAddTipoVeiculo()]\"\n                    target=\"_blank\">\n                    <strong>Adicionar</strong>\n                  </a>\n                  <span class=\"mx-2\">|</span>\n                  <btn-icon\n                  icon=\"fas fa-redo-alt\"\n                  size=\"small\"\n                  class=\"mr-2\"\n                  tooltip=\"Recarregar\"\n                  (click)=\"onReloadContatos()\">\n                </btn-icon>\n                </div>\n              </div>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_VEIC_TIPO\"\n              readonly\n              formControlName=\"NM_VEIC_TIPO\"\n              placeholder=\"Selecione...\"\n              [ngClass]=\"onFieldError('NM_VEIC_TIPO') + ' ' + onFieldRequired('NM_VEIC_TIPO')\"\n            />\n              <invalid-form-control [show]=\"onFieldInvalid('NM_VEIC_TIPO')\" message=\"Tipo de veículo é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row \">\n            <div class=\"form-group col-md \">\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                <label class=\"my-auto\" for=\"NM_MOTO\">Motorista</label>\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\"  *ngIf=\"this.form.get('PLAC').value\">\n                  <a\n                    class=\"text-primary\"\n                    href=\"javascript:void(0)\"\n                    (click)=\"openModal(modalMotoristas)\">\n                    <strong *ngIf=\"this.form.get('NM_MOTO').value\">Trocar</strong>\n                    <strong *ngIf=\"!this.form.get('NM_MOTO').value\">Selecionar</strong>\n                  </a>\n                  <span class=\"mx-2\" *ngIf=\"this.form.get('NM_MOTO').value\">|</span>\n                  <a\n                    class=\"text-secondary\"\n                    href=\"javascript:void(0)\"\n                    (click)=\"onDetalhesMotorista()\"\n                    *ngIf=\"this.form.get('NM_MOTO').value\">\n                    <strong>Detalhes</strong>\n                  </a>\n                </div>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_MOTO\"\n                formControlName=\"NM_MOTO\"\n                readonly\n                placeholder=\"Selecione...\"\n                [ngClass]=\"onFieldError('NM_MOTO') + ' ' + onFieldRequired('NM_MOTO')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('NM_MOTO')\" message=\"Motorista é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row \">\n            <div class=\"form-group col-md \">\n              <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                <label class=\"my-auto\" for=\"NM_TRAN\">Transportadora</label>\n                <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"this.form.get('PLAC').value\" >\n                  <a\n                    class=\"text-primary\"\n                    href=\"javascript:void(0)\"\n                    (click)=\"openModal(modalTransportadoras)\">\n                    <strong *ngIf=\"this.form.get('NM_TRAN').value\">Trocar</strong>\n                    <strong *ngIf=\"!this.form.get('NM_TRAN').value\">Selecionar</strong>\n                  </a>\n                  <span class=\"mx-2\" *ngIf=\"this.form.get('NM_TRAN').value\">|</span>\n                  <a\n                    class=\"text-secondary\"\n                    href=\"javascript:void(0)\"\n                    (click)=\"onDetalhesTransportadora()\"\n                    *ngIf=\"this.form.get('NM_TRAN').value\">\n                    <strong>Detalhes</strong>\n                  </a>\n                </div>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_TRAN\"\n                formControlName=\"NM_TRAN\"\n                readonly\n                placeholder=\"Selecione...\"\n                [ngClass]=\"onFieldError('NM_TRAN') + ' ' + onFieldRequired('NM_TRAN')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('NM_TRAN')\" message=\"Transportadora é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n        </fieldset>\n        <fieldset class=\"border-top pt-2 mt-4\">\n          <legend \n          class=\"text-center mb-0\"\n          style=\"font-size: larger; width: auto;\">Materiais</legend>\n          <div class=\"row\" *ngIf=\"loadingMateriais\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-cog fa-spin\"\n                text=\"Estamos pesquisando os materiais para você...\">\n              </message>\n            </div>\n          </div>\n          <div formArrayName=\"materiais\">\n            <div class=\"form-row\">\n              <div class=\"form-group col mb-0 d-flex justify-content-between\">\n                <div class=\"mtc-title\"></div>\n                <div>\n                  <a\n                    class=\"text-secondary\"\n                    (click)=\"onAddMaterial()\"\n                    href=\"javascript:void(0)\">\n                    <b>Adicionar</b>\n                  </a>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\"  *ngFor=\"let item of formMateriais.controls; let i = index\" [formGroupName]=\"i\">\n              <div class=\"form-group col mb-0\">\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-3 \">\n                    <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                      <label class=\"my-auto\" for=\"NR_NOTA_FISC\">Nota Fiscal</label>\n                      <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\n                        <a\n                          class=\"text-primary\"\n                          href=\"javascript:void(0)\"\n                          (click)=\"openModal(modalNotasFiscais, i)\">\n                          <strong>Selecionar</strong>\n                        </a>\n                      </div>\n                    </div>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"NR_NOTA_FISC\"\n                      formControlName=\"NR_NOTA_FISC\"\n                      placeholder=\"Digite...\"\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'NR_NOTA_FISC') + ' ' + onNestedFieldRequired('materiais', i, 'NR_NOTA_FISC')\"\n                    />\n                  </div>\n                  <div class=\"form-group col-md-5 \">\n                    <label for=\"NR_PEDI\">Pedido</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"Digite...\"\n                      id=\"NR_PEDI\"\n                      formControlName=\"NR_PEDI\"\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'NR_PEDI') + ' ' + onNestedFieldRequired('materiais', i, 'NR_PEDI')\">\n                  </div>\n                  <div class=\"form-group col-md-3 \">\n                    <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\n                    <select \n                    class=\"form-control custom-select\"\n                    id=\"DS_UNID_MEDI\"\n                    formControlName=\"DS_UNID_MEDI\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'DS_UNID_MEDI') + ' ' + onNestedFieldRequired('materiais', i, 'DS_UNID_MEDI')\"\n                  >\n                    <option >KG</option>\n                    <option >TON</option>\n                    <option >PC</option>\n                    <option >UN</option>\n                  </select>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-3 \">\n                    <label for=\"TT_MATE\">Quantidade</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"TT_MATE\"\n                      formControlName=\"TT_MATE\"\n                      currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE')\">\n                  </div>\n                  <div class=\"form-group col-md-8 \">\n                    <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                      <label class=\"my-auto\" for=\"NM_MATE\">Material</label>\n                      <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                        <a\n                          class=\"text-primary\"\n                          href=\"javascript:void(0)\"\n                          (click)=\"openModal(modalMateriais, i)\">\n                          <strong>Selecionar</strong>\n                        </a>\n                      </div>\n                    </div>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"NM_MATE\"\n                      formControlName=\"NM_MATE\"\n                      [ngClass]=\"onNestedFieldError('materiais', i, 'NM_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'NM_MATE')\">\n                  </div>\n                  <div class=\"col-1 my-auto pt-3 d-flex justify-content-center\">\n                    <button\n                      type=\"button\"\n                      class=\"btn-icon\"\n                      (click)=\"onDeleteMaterial(i)\">\n                      <i class=\"fas fa-trash\"></i>\n                    </button>\n                  </div>\n                </div>\n                <hr class=\"w-100\">\n              </div>\n            </div>\n          </div>\n        </fieldset>\n        <div class=\"row \">\n          <div class=\"form-group col mb-0\">\n            <button\n              type=\"button\"\n              class=\"btn btn-block btn-outline-secondary mt-auto\"\n              (click)=\"onSearchTime()\"\n              [disabled]=\"loadingCalculo\">\n              <div *ngIf=\"!loadingCalculo\">\n                <i class=\"fas fa-search\"></i>\n                <span>Buscar horários disponíveis</span>\n              </div>\n              <div *ngIf=\"loadingCalculo\">\n                <i class=\"fas fa-cog fa-spin\"></i>\n                <span>Aguarde</span>\n              </div>\n            </button>\n          </div> \n        </div>\n        <div class=\"row\" *ngIf=\"loadingCalculo\" >\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos pesquisando os horários disponíveis para você...\">\n            </message>\n          </div>\n        </div>\n        <div class=\"row m-auto\">\n          <div class=\"form-group col-2 mb-0\">\n            <button \n              type=\"button\" \n              class=\"btn btn-block btn-outline-secondary mt-2 p-2\"\n              (click)=\"onSetTime($event)\"\n              >\n              <span aria-hidden=\"true\">\n              <i class=\"fas fa-clock\"></i>\n              </span>12:00\n            </button>\n          </div>\n        </div>\n        <!-- <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div> -->\n      </form>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row\"  *ngIf=\"noCircuito\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-file\"\n            text=\"Preecha os campos ao lado para que possamos montar o seu circuito\">\n          </message>\n        </div>\n      </div>\n      <div id=\"scrollDetalhes\" class=\"d-flex\">\n        <div class=\"row w-100\">\n          <div class=\"col-6\">\n            <div class=\"mtc-title\">Dados do Circuito</div>\n            <div *ngFor=\"let etapa of circuitos; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\n              <div class=\"d-flex w-100\" [tooltip]=\"etapa?.descricao\" placement=\"left\">\n                <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"etapa?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\n                  <i [class]=\"etapa?.icone\"></i>\n                </div>\n                <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"etapa?.check == 1 ? 'text-primary' : ''\">\n                  {{ etapa?.descricao }}\n                </strong>\n              </div>\n              <div class=\"my-1\" *ngIf=\"!last\">\n                <div class=\"ml-1\">\n                  <div class=\"border-left border-secondary ml-3 p-2\">\n                    <div *ngIf=\"etapa?.check === 1\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6 text-right\">\n            <button\n            type=\"button\"\n            class=\"btn-icon-sm mx-3\"\n            tooltip=\"Download\"\n            container=\"body\"\n            (click)=\"onDownload()\"\n            [disabled] = \"loadingMateriais\"\n          >\n            <i class=\"far fa-save\"></i>\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn-icon-sm mr-3\"\n            tooltip=\"Imprimir\"\n            container=\"body\"\n            [disabled] = \"loadingMateriais\" \n            (click)=\"onPrint()\"\n          >\n            <i class=\"fas fa-print\"></i>\n          </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  \n  <ng-template #modalVeiculos>\n    <logistica-yms-agendamentos-modais-veiculos\n    (select)=\"onVeiculo($event)\"\n    (close)=\"modalRef.hide()\"\n    >\n    </logistica-yms-agendamentos-modais-veiculos>\n  </ng-template>\n  <ng-template #modalMotoristas>\n    <logistica-veiculos-modais-motoristas\n      (select)=\"onMotorista($event)\"\n      (close)=\"modalRef.hide()\"\n    >\n    </logistica-veiculos-modais-motoristas>\n  </ng-template>\n  <ng-template #modalTransportadoras>\n    <logistica-veiculos-modais-transportadoras\n      (select)=\"onTransportadora($event)\"\n      (close)=\"modalRef.hide()\"\n    >\n    </logistica-veiculos-modais-transportadoras>\n  </ng-template>\n  <ng-template #modalMateriais>\n    <logistica-yms-agendamentos-modais-materiais\n    (select)=\"onMaterial($event)\"\n    (close)=\"modalRef.hide()\"\n    >\n    </logistica-yms-agendamentos-modais-materiais>\n  </ng-template>\n  <ng-template #modalNotasFiscais>\n    <logistica-yms-agendamentos-modais-notas-fiscais\n    (select)=\"onNotasFiscais($event)\"\n    (close)=\"modalRef.hide()\"\n    >\n    </logistica-yms-agendamentos-modais-notas-fiscais>\n  </ng-template>\n</app-body>";
      /***/
    },

    /***/
    "MZzh":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/cadastro/cadastro.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosCadastroComponent */

    /***/
    function MZzh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosCadastroComponent", function () {
        return LogisticaYmsAgendamentosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "LpYa");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "ua4e");
      /* harmony import */


      var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../tipos-circuito/services/tipos-circuito.service */
      "j4Bn");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../cadastros/filiais/services/filiais.service */
      "NXOV");
      /* harmony import */


      var _cadastros_tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../cadastros/tipo-veiculo/services/tipo-veiculo.service */
      "G4PK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../cadastros/veiculos/services/veiculo.service */
      "3ocw");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../services/agendamentos.service */
      "F9MH");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_20__); //Services
      //Bootstrap
      //Angular
      //rxjs


      var LogisticaYmsAgendamentosCadastroComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsAgendamentosCadastroComponent(formBuilder, pnotify, activatedRoute, router, localeService, agendamentosService, titleService, pdfService, modalService, atividadesService, veiculoService, tipoVeiculoService, filiaisService, tiposCircuitoService) {
          _classCallCheck(this, LogisticaYmsAgendamentosCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.localeService = localeService;
          this.agendamentosService = agendamentosService;
          this.titleService = titleService;
          this.pdfService = pdfService;
          this.modalService = modalService;
          this.atividadesService = atividadesService;
          this.veiculoService = veiculoService;
          this.tipoVeiculoService = tipoVeiculoService;
          this.filiaisService = filiaisService;
          this.tiposCircuitoService = tiposCircuitoService;
          this.noCircuito = true;
          this.sobrepor = false;
          this.breadCrumbTree = [];
          this.formData = []; //loading

          this.noVeiculos = true;
          this.loading = false;
          this.loadingNavBar = false;
          this.loadingCalculo = false;
          this.loadingMateriais = false;
          this.circuitos = [{
            id: 1,
            descricao: 'Portaria',
            icone: 'fas fa-portrait',
            check: 1
          }, {
            id: 2,
            descricao: 'Balança',
            icone: 'fas fa-balance-scale-left',
            check: 0
          }, {
            id: 3,
            descricao: 'Estacionamento',
            icone: 'fas fa-sign',
            check: 0
          }, {
            id: 4,
            descricao: 'Galpão 2',
            icone: 'fas fa-warehouse',
            check: 0
          }, {
            id: 5,
            descricao: 'Galpão 27',
            icone: 'fas fa-warehouse',
            check: 0
          }, {
            id: 6,
            descricao: 'Balança',
            icone: 'fas fa-balance-scale-left',
            check: 0
          }, {
            id: 7,
            descricao: 'Finalizado',
            icone: 'fas fa-check',
            check: 0
          }];
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.totalItemsMaterial = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_12__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaYmsAgendamentosCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getTipoVeiculo();
            this.getFiliais();
            this.getTiposCircuito();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;

            if (_params.hasOwnProperty('id')) {
              this.getAgendamento(_params['id']);
            } else {
              this.onAddMaterial();
            }
          }
        }, {
          key: "getLinkAddTipoVeiculo",
          value: function getLinkAddTipoVeiculo() {
            return "/logistica/cadastros/veiculos/".concat(this.form.value.ID_LOGI_VEIC);
          }
        }, {
          key: "onReloadTipoVeiculo",
          value: function onReloadTipoVeiculo() {
            if (this.loadingTipoVeiculo === false) {
              this.getTipoVeiculo(this.form.value.ID_LOGI_VEIC);
            }
          }
        }, {
          key: "onSobrepor",
          value: function onSobrepor() {
            this.sobrepor == true ? false : true;
          }
        }, {
          key: "onVeiculo",
          value: function onVeiculo(veiculo) {
            this.form.patchValue(veiculo);
            this.form.controls.NM_TRAN.reset();
            this.form.controls.NM_TRAN.updateValueAndValidity();
            this.form.controls.NM_MOTO.reset();
            this.form.controls.NM_MOTO.updateValueAndValidity();

            if (!veiculo.ID_LOGI_VEIC_TIPO) {
              this.pnotify.notice('Esse Veículo não possui um tipo cadastrado!');
            }

            if (!veiculo.ID_LOGI_TRAN) {
              this.form.controls.NM_TRAN.enable();
              this.form.controls.NM_TRAN.markAsTouched();
            }

            if (!veiculo.ID_LOGI_MOTO) {
              this.form.controls.NM_MOTO.enable();
              this.form.controls.NM_MOTO.markAsTouched();
            }
          }
        }, {
          key: "onTransportadora",
          value: function onTransportadora(transportadora) {
            this.form.patchValue(transportadora);
          }
        }, {
          key: "onMotorista",
          value: function onMotorista(motorista) {
            this.form.patchValue(motorista);
          }
        }, {
          key: "onMaterial",
          value: function onMaterial(material) {
            var fg = this.form.get('materiais'); // fg.controls[this.index].patchValue(material);

            fg.controls[this.index].get('NM_MATE').patchValue(material.NM_MATE);
            fg.controls[this.index].get('UUID_MATE').patchValue(material.ID);
            fg.controls[this.index].get('ID_MATE').patchValue(material.ID_MATE);
          }
        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.index = index;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }, {
          key: "onSearchTime",
          value: function onSearchTime() {
            var newData = new Date();

            if (this.form.valid == false) {
              this.pnotify.notice('Preencha o formulário');
              return;
            }

            if (this.form.get('DT_INIC_PREV').value < newData) {
              this.pnotify.notice('Favor inserir uma data maior que a data atual');
              this.form.controls.DT_INIC_PREV.markAsTouched();
              return;
            }

            if (this.formMateriais.valid == false) {
              this.pnotify.notice('Informe os dados dos materiais');
              return;
            } //Fazer a consulta dos horários disponiveis //

          }
        }, {
          key: "onDownload",
          value: function onDownload(params) {
            this.pnotify.notice('Documento PDF será gerado em breve!');
            var _id = params['ID_LOGI_YMS_AGEN'];
            this.pdfService.download('agendamento-pdf', "Agendamento - ".concat(_id));
          }
        }, {
          key: "onPrint",
          value: function onPrint() {
            window.print();
          }
        }, {
          key: "getAgendamento",
          value: function getAgendamento(id) {
            var _this2 = this;

            this.loading = true;
            this.agendamentosService.getAgendamento(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'][0];

                _this2.form.patchValue(data);

                _this2.noResult = false;
              } else {
                _this2.noResult = true;
              }
            }, function (error) {
              _this2.pnotify.error();

              _this2.noResult = true;
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this3 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
              _this3.loadingFiliais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.filiais = response.body['data'];
              } else {
                _this3.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              _this3.filiais = [];
              var message = error.error.message;
              message ? _this3.pnotify.error(message) : _this3.pnotify.error();
            };
          }
        }, {
          key: "getTiposCircuito",
          value: function getTiposCircuito() {
            var _this4 = this;

            this.loadingTiposCircuito = true;
            this.tiposCircuitoService.getTiposCircuito({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
              _this4.loadingTiposCircuito = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.tiposCircuito = response.body['data'];
              } else {
                _this4.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              _this4.tiposCircuito = [];
              var message = error.error.message;
              message ? _this4.pnotify.error(message) : _this4.pnotify.error();
            };
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.appTitle = 'Cadastro';
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'YMS',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Agendamentos',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getTipoVeiculo",
          value: function getTipoVeiculo(params) {
            var _this5 = this;

            this.loadingTipoVeiculo = true;
            this.tipoVeiculoService.getTipoVeiculos(Object.assign(Object.assign({}, params), {
              IN_STAT: '1'
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
              _this5.loadingTipoVeiculo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.tipoVeiculo = response.body['data'];
              } else {
                _this5.tipoVeiculo = [];
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this5.pnotify.error(message) : _this5.pnotify.error();
            });
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_YMS_AGEN: [null],
              ID_LOGI_YMS_ETAP: [null],
              PLAC: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              ID_LOGI_VEIC_TIPO: [null],
              ID_LOGI_VEIC: [null],
              NM_MOTO: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              NM_TRAN: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              NM_VEIC_TIPO: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              DS_AGEN: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              IN_STAT: [util__WEBPACK_IMPORTED_MODULE_20__["isNull"]],
              DT_INIC_PREV: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              DS_OBSE: [null],
              ID_LOGI_FILI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              ID_LOGI_YMS_CIRC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              materiais: this.formBuilder.array([])
            });
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(index) {
            this.formMateriais.push(this.formBuilder.group({
              UUID_MATE: [null],
              NR_NOTA_FISC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              NR_PEDI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              ID_LOGI_ENMA_NOFI_MATE: [null],
              DS_UNID_MEDI: ['TON', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
              TT_MATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].min(0.01)]],
              NM_MATE: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]]
            }));
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postAgendamentos",
          value: function postAgendamentos() {
            var _this6 = this;

            this.loadingNavBar = true;
            this.agendamentosService.postAgendamentos(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
              _this6.loading = false;
              _this6.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var id = response.body['data'];
                console.log(id);

                _this6.form.get('ID_LOGI_YMS_AGEN').setValue(id);

                _this6.postMateriais(id);

                _this6.pnotify.success(); // this.router.navigate(['../'], {
                //   relativeTo: this.activatedRoute,
                // });

              } else {
                _this6.pnotify.error();
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this6.pnotify.error(message) : _this6.pnotify.error();
            });
          }
        }, {
          key: "onNestedFieldError",
          value: function onNestedFieldError(formGroup, index, field) {
            if (this.onNestedFieldInvalid(formGroup, index, field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onNestedFieldInvalid",
          value: function onNestedFieldInvalid(formGroup, index, field) {
            var nestedForm = this.form.controls[formGroup];
            field = nestedForm.controls[index].get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onNestedFieldRequired",
          value: function onNestedFieldRequired(formGroup, index, field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
            var nestedForm = this.form.controls[formGroup];

            if (nestedForm.controls[index].get(field).validator) {
              var validationResult = nestedForm.controls[index].get(field).validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index) {
            var _this7 = this;

            if (this.formMateriais.length === 1) {
              this.pnotify.notice('Informe ao menos um material.');
              return;
            }

            var materiais = this.formMateriais.at(index).value;
            materiais = Object.assign(Object.assign({}, materiais), {
              'IN_STAT': '0'
            });

            if (!materiais['ID_LOGI_AGEN_MATE']) {
              this.formMateriais.removeAt(index);
              return;
            }

            this.loadingNavBar = true;
            this.agendamentosService.postMateriais(materiais).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
              _this7.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.formMateriais.removeAt(index);

                _this7.pnotify.success();
              } else {
                _this7.pnotify.error();
              }
            }, function (error) {
              _this7.pnotify.error();
            });
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this8 = this;

              var request, materiais, promise;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      request = [];
                      materiais = this.formMateriais.getRawValue();

                      if (materiais) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      promise = function promise() {
                        materiais.forEach(function (material) {
                          var params = Object.assign(Object.assign({}, material), {
                            'ID_LOGI_YMS_AGEN': id
                          });
                          request.push(_this8.agendamentosService.postMateriais(params));
                        });
                      };

                      _context.next = 7;
                      return Promise.resolve(promise());

                    case 7:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["finalize"])(function () {
                        _this8.loading = false;
                        _this8.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this8.pnotify.success('Material, salvo com sucesso!');

                            _this8.router.navigate(['../'], {
                              relativeTo: _this8.activatedRoute
                            });
                          } else {
                            _this8.pnotify.error();
                          }
                        });
                      }, function (error) {
                        try {
                          _this8.pnotify.error(error.error.message);
                        } catch (error) {
                          _this8.pnotify.error();
                        }
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSetTime",
          value: function onSetTime(event) {
            console.log(event);
          }
        }, {
          key: "formMateriais",
          get: function get() {
            return this.form.get('materiais');
          }
        }]);

        return LogisticaYmsAgendamentosCadastroComponent;
      }();

      LogisticaYmsAgendamentosCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"]
        }, {
          type: _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaYmsAgendamentosService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaVeiculoService"]
        }, {
          type: _cadastros_tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaTipoVeiculoService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaFiliaisService"]
        }, {
          type: _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsTiposCircuitoService"]
        }];
      };

      LogisticaYmsAgendamentosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Component"])({
        selector: 'logistica-yms-agendamentos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"], _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaYmsAgendamentosService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaVeiculoService"], _cadastros_tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaTipoVeiculoService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaFiliaisService"], _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsTiposCircuitoService"]])], LogisticaYmsAgendamentosCadastroComponent);
      /***/
    },

    /***/
    "QGxU":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/modais/veiculos/veiculos.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosModaisVeiculosComponent */

    /***/
    function QGxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModaisVeiculosComponent", function () {
        return LogisticaYmsAgendamentosModaisVeiculosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_veiculos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./veiculos.component.html */
      "HrOm");
      /* harmony import */


      var _veiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./veiculos.component.scss */
      "lv7O");
      /* harmony import */


      var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../cadastros/veiculos/services/veiculo.service */
      "3ocw");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LogisticaYmsAgendamentosModaisVeiculosComponent = /*#__PURE__*/function () {
        function LogisticaYmsAgendamentosModaisVeiculosComponent(formBuilder, veiculoService) {
          _classCallCheck(this, LogisticaYmsAgendamentosModaisVeiculosComponent);

          this.formBuilder = formBuilder;
          this.veiculoService = veiculoService;
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this.loading = false;
          this.noVeiculos = true;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.veiculos = [];
        }

        _createClass(LogisticaYmsAgendamentosModaisVeiculosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              buscarPor: ['PLAC'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ID_LOGI_VEIC: [null],
              PLAC: [null],
              NM_MOTO: [null],
              NM_TRAN: [null],
              NM_VEIC_TIPO: [null],
              PAGI: 1,
              IN_STAT: ['1'],
              TT_REGI_PAGI: [this.itemsPerPage]
            });
          }
        }, {
          key: "getVeiculos",
          value: function getVeiculos() {
            var _this9 = this;

            var _a, _b;

            var buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
            var pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa;
            }

            params['PAGI'] = this.form.get('PAGI').value;
            params['TT_REGI_PAGI'] = 100;
            this.loading = true;
            this.veiculoService.getVeiculos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this9.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.veiculos = response.body['data'];
                _this9.totalItems = response.body['total'];
                _this9.noVeiculos = false;
              } else {
                _this9.veiculos = [];
                _this9.noVeiculos = true;
              }
            }, function (error) {});
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.getVeiculos();
          }
        }, {
          key: "onSelect",
          value: function onSelect(veiculo) {
            this.select.emit(veiculo);
            this.onClose();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.close.emit(true);
          }
        }]);

        return LogisticaYmsAgendamentosModaisVeiculosComponent;
      }();

      LogisticaYmsAgendamentosModaisVeiculosComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaVeiculoService"]
        }];
      };

      LogisticaYmsAgendamentosModaisVeiculosComponent.propDecorators = {
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }]
      };
      LogisticaYmsAgendamentosModaisVeiculosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-agendamentos-modais-veiculos',
        template: _raw_loader_veiculos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_veiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaVeiculoService"]])], LogisticaYmsAgendamentosModaisVeiculosComponent);
      /***/
    },

    /***/
    "SzE3":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/lista/lista.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosListaComponent */

    /***/
    function SzE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosListaComponent", function () {
        return LogisticaYmsAgendamentosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "3Hsd");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "YH0e");
      /* harmony import */


      var _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../tipos-circuito/services/tipos-circuito.service */
      "j4Bn");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../cadastros/filiais/services/filiais.service */
      "NXOV");
      /* harmony import */


      var _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../cadastros/motoristas/services/motorista.service */
      "z/iS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/agendamentos.service */
      "F9MH");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaYmsAgendamentosListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsAgendamentosListaComponent(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, motoristaService, agendamentosService, filiaisService, tiposCircuitoService) {
          _classCallCheck(this, LogisticaYmsAgendamentosListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.dateService = dateService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.detailPanelService = detailPanelService;
          this.confirmModalService = confirmModalService;
          this.motoristaService = motoristaService;
          this.agendamentosService = agendamentosService;
          this.filiaisService = filiaisService;
          this.tiposCircuitoService = tiposCircuitoService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false; //VARIAVEIS

          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos Agendamentos (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '2',
            nome: 'Inativos'
          }]; // Subtitles (Ativo/Inativo)

          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(LogisticaYmsAgendamentosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getFiliais();
            this.getTiposCircuito();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this10 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this10.routerService.getBase64UrlParams(response);

              _this10.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this10.itemsPerPage = _response.TT_REGI_PAGI;

              _this10.getAgendamentos(_this10.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this11 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this11.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this12 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
              _this12.loadingFiliais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this12.filiais = response.body['data'];
              } else {
                _this12.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              _this12.filiais = [];
              var message = error.error.message;
              message ? _this12.pnotify.error(message) : _this12.pnotify.error();
            };
          }
        }, {
          key: "getTiposCircuito",
          value: function getTiposCircuito() {
            var _this13 = this;

            this.loadingTiposCircuito = true;
            this.tiposCircuitoService.getTiposCircuito({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
              _this13.loadingTiposCircuito = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this13.tiposCircuito = response.body['data'];
              } else {
                _this13.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              _this13.tiposCircuito = [];
              var message = error.error.message;
              message ? _this13.pnotify.error(message) : _this13.pnotify.error();
            };
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_YMS_CIRC_TIPO: [null],
              ID_LOGI_FILI: [null],
              ID_LOGI_MOTO: [null],
              NM_MOTO: [null],
              PLAC: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'YMS',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Agendamentos'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(agendamentos) {
            this.detailPanelService.show();
            this.agendamentoSelecionada = agendamentos;
            this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "getAgendamentos",
          value: function getAgendamentos(params) {
            var _this14 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.agendamentosService.getAgendamentos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
              _this14.loading = false;
              _this14.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this14.agendamentos = response.body['data'];
                _this14.totalItems = response.body['total'];
                _this14.noResult = false;
              } else {
                _this14.noResult = true;
                _this14.agendamentos = [];
              }
            }, function (error) {
              try {
                _this14.noResult = true;

                _this14.pnotify.error(error.error.message);
              } catch (error) {
                _this14.pnotify.error();
              }
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
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(agendamentos) {
            var borderClass;

            if (agendamentos.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (agendamentos.IN_STAT == 2) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(params) {
            var _this15 = this;

            var stat = params.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
              _this15.loadingNavBar = true;
              params.IN_STAT = stat;
              return _this15.agendamentosService.postAgendamentos(params);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(function () {
              _this15.loadingNavBar = false;
            })).subscribe(function (success) {
              _this15.pnotify.success();
            }, function (error) {
              params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;

              _this15.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.agendamentos.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Agendamentos".concat(dataExport));
          }
        }]);

        return LogisticaYmsAgendamentosListaComponent;
      }();

      LogisticaYmsAgendamentosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__["XlsxService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaMotoristaService"]
        }, {
          type: _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAgendamentosService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaFiliaisService"]
        }, {
          type: _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposCircuitoService"]
        }];
      };

      LogisticaYmsAgendamentosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-yms-agendamentos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__["XlsxService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaMotoristaService"], _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAgendamentosService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaFiliaisService"], _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposCircuitoService"]])], LogisticaYmsAgendamentosListaComponent);
      /***/
    },

    /***/
    "ViSt":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/agendamentos-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosRoutingModule */

    /***/
    function ViSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosRoutingModule", function () {
        return LogisticaYmsAgendamentosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./drag-and-drop/drag-and-drop.component */
      "uuP1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "MZzh");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lista/lista.component */
      "SzE3");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsAgendamentosListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAgendamentosCadastroComponent"]
      }, {
        path: 'drag',
        component: _drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaYmsAgendamentosDragAndDropComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAgendamentosCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }];

      var LogisticaYmsAgendamentosRoutingModule = function LogisticaYmsAgendamentosRoutingModule() {
        _classCallCheck(this, LogisticaYmsAgendamentosRoutingModule);
      };

      LogisticaYmsAgendamentosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], LogisticaYmsAgendamentosRoutingModule);
      /***/
    },

    /***/
    "Y597":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/modais/materiais/materiais.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y597(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4>Pesquisa de Materiais</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"IN_STAT\">Situação</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"IN_STAT\"\n          >\n            <option value=\"1\">Ativo</option>\n            <option value=\"0\">Inativo</option>\n            <option value=\"\">Exibir Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"cdItem\">BUSCAR POR</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"buscarPor\"\n          >\n          <option value=\"ID_REFE_ERP\">ID ERP</option>\n          <option value=\"NM_MATE\" selected> Nome Material</option>\n          <option value=\"NM_CLAS\">Classe</option>\n          <option value=\"NM_LINH\">Linha</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-6\">\n          <label>TERMO DE PESQUISA</label>\n          <div class=\"input-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"pesquisa\"\n              >\n              <div class=\"input-group-append\">\n                <span \n                  [tooltip]=\"form.valid == false ? 'Digite um termo de pesquisa':''\"\n                  container=\"body\"\n                  placement =\"left\"\n                >\n                  <button\n                  style=\"height: 25px;\"\n                    [disabled]=\"form.valid == false\"\n                    class=\"input-group-text hover\"\n                    (click)=\"getMateriais()\"\n                    >\n                    <i class=\"fas fa-search\"></i>\n                  </button>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <custom-table *ngIf=\"!noMateriais\" class=\"text-center\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th>ID ERP</th>\n        <th>Nome Material</th>\n        <th>Classe</th>\n        <th>Linha</th>\n        <th>Unidade de Medida</th>\n        <th></th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr *ngFor=\"let material of materiais | slice : begin : end; let i = index\">\n        <td>{{ material.ID_REFE_ERP }}</td>\n        <td>{{ material.NM_MATE }}</td>\n        <td>{{ material.NM_CLAS }}</td>\n        <td>{{ material.NM_LINH }}</td>\n        <td>{{ material.NM_APOI_UNID_MEDI }} </td>\n        <td>\n          <button\n            class=\"btn-icon-sm\"\n            tooltip=\"Salvar Informações\"\n            container=\"body\"\n            (click)=\"onSelect(material)\"\n          >\n            <i class=\"far fa-save\"></i>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n  <div *ngIf=\"totalItems > itemsPerPage\" >\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"totalItems\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>";
      /***/
    },

    /***/
    "YH0e":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/lista/lista.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function YH0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hZ2VuZGFtZW50b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "cemQ":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/drag-and-drop/drag-and-drop.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function cemQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".highlight {\n  opacity: 0.7;\n}\n\n.dropzone {\n  width: 150px;\n}\n\n.card, .dropzone {\n  transition: 0.3s;\n}\n\n.is-dragging {\n  cursor: move;\n}\n\n.sobrepor {\n  z-index: 2000;\n  background: white;\n  opacity: 0.5;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxnQkFBQTtBQUVEOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hZ2VuZGFtZW50b3MvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGlnaGxpZ2h0e1xuICBvcGFjaXR5OiAwLjc7O1xufVxuLmRyb3B6b25le1xuICB3aWR0aDogMTUwcHg7XG59XG4uY2FyZCwuZHJvcHpvbmV7XG4gdHJhbnNpdGlvbjogLjNzO1xufVxuXG4uaXMtZHJhZ2dpbmd7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLnNvYnJlcG9ye1xuICB6LWluZGV4OiAyMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "i7iJ":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/modais/notas-fiscais/notas-fiscais.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i7iJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvbm90YXMtZmlzY2Fpcy9ub3Rhcy1maXNjYWlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvbm90YXMtZmlzY2Fpcy9ub3Rhcy1maXNjYWlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufSJdfQ== */";
      /***/
    },

    /***/
    "ldgx":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/agendamentos/modais/notas-fiscais/notas-fiscais.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ldgx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4>Pesquisa de Notas Fiscais</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"IN_STAT\">Situação</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"IN_STAT\"\n          >\n            <option value=\"1\">Ativo</option>\n            <option value=\"0\">Inativo</option>\n            <option value=\"\">Exibir Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"cdItem\">BUSCAR POR</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"buscarPor\"\n          >\n          <option value=\"ID_MATE\">ID</option>\n          <option value=\"NR_NOTA_FISC\" selected>Nota Fiscal</option>\n          <option value=\"DS_LOTE\">Lote</option>\n          <option value=\"NM_MATE\">Material</option>\n          <option value=\"NM_FORN\">Fornecedor</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-6\">\n          <label>TERMO DE PESQUISA</label>\n          <div class=\"input-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"pesquisa\"\n              >\n              <div class=\"input-group-append\">\n                <span \n                  [tooltip]=\"form.valid == false ? 'Digite um termo de pesquisa':''\"\n                  container=\"body\"\n                  placement =\"left\"\n                >\n                  <button\n                  style=\"height: 25px;\"\n                    [disabled]=\"form.valid == false\"\n                    class=\"input-group-text hover\"\n                    (click)=\"getNotasFiscais()\"\n                    >\n                    <i class=\"fas fa-search\"></i>\n                  </button>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <custom-table *ngIf=\"!noNotasFiscais\" class=\"text-center\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th>ID NF</th>\n        <th>Nota Fiscal</th>\n        <th>Lote</th>\n        <th>Nome Material</th>\n        <th>Total de Material</th>\n        <th>Fornecedor</th>\n        <th></th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr *ngFor=\"let notas of notasFiscais\">\n        <td>{{ notas.ID_LOGI_ENMA_NOFI }}</td>\n        <td>{{ notas.NR_NOTA_FISC }}</td>\n        <td >{{ notas.DS_LOTE || 'NÃO INFORMADO' }}</td>\n        <td>{{ notas.NM_MATE }}</td>\n        <td>{{ notas.TT_MATE_ORIG }} {{ notas.DS_UNID_MEDI }}</td>\n        <td>{{ notas.NM_FORN }} </td>\n        <td>\n          <button\n            class=\"btn-icon-sm\"\n            tooltip=\"Salvar Informações\"\n            container=\"body\"\n            (click)=\"onSelect(notas)\"\n          >\n            <i class=\"far fa-save\"></i>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n  <div *ngIf=\"totalItems > itemsPerPage\" >\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"totalItems\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>";
      /***/
    },

    /***/
    "lv7O":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/modais/veiculos/veiculos.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function lv7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9tb2RhaXMvdmVpY3Vsb3MvdmVpY3Vsb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS95bXMvYWdlbmRhbWVudG9zL21vZGFpcy92ZWljdWxvcy92ZWljdWxvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XG4gIGN1cnNvcjogbm8tZHJvcDtcbn0iXX0= */";
      /***/
    },

    /***/
    "rRVE":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/modais/materiais/materiais.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosModaisMateriaisComponent */

    /***/
    function rRVE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosModaisMateriaisComponent", function () {
        return LogisticaYmsAgendamentosModaisMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./materiais.component.html */
      "Y597");
      /* harmony import */


      var _materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./materiais.component.scss */
      "IZvq");
      /* harmony import */


      var _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/agendamentos.service */
      "F9MH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LogisticaYmsAgendamentosModaisMateriaisComponent = /*#__PURE__*/function () {
        function LogisticaYmsAgendamentosModaisMateriaisComponent(formBuilder, agendamentosService) {
          _classCallCheck(this, LogisticaYmsAgendamentosModaisMateriaisComponent);

          this.formBuilder = formBuilder;
          this.agendamentosService = agendamentosService;
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this.loading = false;
          this.noMateriais = true;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 100;
          /* Pagination */

          this.materiais = [];
        }

        _createClass(LogisticaYmsAgendamentosModaisMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              buscarPor: ['NM_MATE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ID_REFE_ERP: [null],
              NM_MATE: [null],
              NM_CLAS: [null],
              NM_LINH: [null],
              IN_STAT: ['1'],
              PAGI: 1,
              TT_REGI_PAGI: [this.itemsPerPage]
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this16 = this;

            var _a, _b;

            var buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
            var pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa;
            }

            params['PAGI'] = this.form.get('PAGI').value;
            params['TT_REGI_PAGI'] = 100;
            this.loading = true;
            this.agendamentosService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this16.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.materiais = response.body['result'];
                ;
                _this16.totalItems = response.body['result'].length;
                _this16.noMateriais = false;
              } else {
                _this16.materiais = [];
                _this16.noMateriais = true;
              }
            }, function (error) {});
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "onSelect",
          value: function onSelect(material) {
            this.select.emit(material);
            this.onClose();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.close.emit(true);
          }
        }]);

        return LogisticaYmsAgendamentosModaisMateriaisComponent;
      }();

      LogisticaYmsAgendamentosModaisMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsAgendamentosService"]
        }];
      };

      LogisticaYmsAgendamentosModaisMateriaisComponent.propDecorators = {
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }]
      };
      LogisticaYmsAgendamentosModaisMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-agendamentos-modais-materiais',
        template: _raw_loader_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_agendamentos_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsAgendamentosService"]])], LogisticaYmsAgendamentosModaisMateriaisComponent);
      /***/
    },

    /***/
    "ua4e":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/cadastro/cadastro.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function ua4e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sobrepor {\n  z-index: 2000;\n  background: white;\n  opacity: 0.5;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2FnZW5kYW1lbnRvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS95bXMvYWdlbmRhbWVudG9zL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvYnJlcG9ye1xuICB6LWluZGV4OiAyMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */";
      /***/
    },

    /***/
    "uuP1":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/agendamentos/drag-and-drop/drag-and-drop.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LogisticaYmsAgendamentosDragAndDropComponent */

    /***/
    function uuP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAgendamentosDragAndDropComponent", function () {
        return LogisticaYmsAgendamentosDragAndDropComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_drag_and_drop_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./drag-and-drop.component.html */
      "37/I");
      /* harmony import */


      var _drag_and_drop_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./drag-and-drop.component.scss */
      "cemQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LogisticaYmsAgendamentosDragAndDropComponent = /*#__PURE__*/function () {
        function LogisticaYmsAgendamentosDragAndDropComponent() {
          _classCallCheck(this, LogisticaYmsAgendamentosDragAndDropComponent);

          this.id = 8;
          this.loading = false;
          this.circuitos = [{
            id: 1,
            descricao: 'Portaria',
            icone: 'fas fa-portrait',
            check: 1
          }, {
            id: 2,
            descricao: 'Balança',
            icone: 'fas fa-balance-scale-left',
            check: 0
          }, {
            id: 3,
            descricao: 'Estacionamento',
            icone: 'fas fa-sign',
            check: 0
          }, {
            id: 4,
            descricao: 'Galpão 2',
            icone: 'fas fa-warehouse',
            check: 0
          }, {
            id: 5,
            descricao: 'Galpão 27',
            icone: 'fas fa-warehouse',
            check: 0
          }, {
            id: 6,
            descricao: 'Balança',
            icone: 'fas fa-balance-scale-left',
            check: 0
          }, {
            id: 7,
            descricao: 'Finalizado',
            icone: 'fas fa-check',
            check: 0
          }];
        }

        _createClass(LogisticaYmsAgendamentosDragAndDropComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var dropzones = document.querySelectorAll(".dropzone");
            var cards = document.querySelectorAll(".card");
            cards.forEach(function (card) {
              card.addEventListener('dragstart', dragstart);
              card.addEventListener('drag', drag);
              card.addEventListener('dragend', dragend);
            });
            dropzones.forEach(function (dropzone) {
              dropzone.addEventListener('dragenter', dragenter);
              dropzone.addEventListener('dragover', dragover);
              dropzone.addEventListener('dragleave', dragleave);
              dropzone.addEventListener('drop', drop);
            });

            function dragstart() {
              dropzones.forEach(function (dropzones) {
                return dropzones.classList.add('highlight');
              });
              this.classList.add('is-dragging');
            }

            function drag() {// console.log('drag')
            }

            function dragend() {
              dropzones.forEach(function (dropzone) {
                dropzone.classList.remove('highlight');

                if (dropzone.childElementCount == 2) {
                  return;
                }

                for (var i = 0; i < dropzone.children.length; i++) {
                  var item = dropzone.children[i].classList.contains('dropzone-item');

                  if (item) {
                    dropzone.children[i].classList.add('d-none');
                  }
                }
              });
              this.classList.remove('is-dragging');
            }

            function dragenter() {}

            function dragover() {
              for (var i = 0; i < this.children.length; i++) {
                var item = this.children[i].classList.contains('d-none');

                if (item) {
                  this.children[i].classList.remove('d-none');
                }
              }

              var cardBeingDragged = document.querySelector('.is-dragging');
              this.classList.remove('highlight');
              this.appendChild(cardBeingDragged);
            }

            function dragleave() {
              this.classList.add('highlight');
            }

            function drop() {}
          }
        }]);

        return LogisticaYmsAgendamentosDragAndDropComponent;
      }();

      LogisticaYmsAgendamentosDragAndDropComponent.ctorParameters = function () {
        return [];
      };

      LogisticaYmsAgendamentosDragAndDropComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'drag-and-drop',
        template: _raw_loader_drag_and_drop_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_drag_and_drop_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LogisticaYmsAgendamentosDragAndDropComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=agendamentos-agendamentos-module-es5.js.map