(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrada-materiais-entrada-materiais-module"], {
    /***/
    "+/dK":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function dK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL2VudHJhZGEtbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "+RfE":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/duplicadas/duplicadas.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RfE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"formLotesDuplicados\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"IN_DS_OBSE\">Situação dos Lotes</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"IN_DS_OBSE\"\r\n          >\r\n            <option value=\"1\">Lotes Justificados</option>\r\n            <option value=\"0\">Lotes não Justificados</option>\r\n            <option value=\"\">Exhibir Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"buscarPor\">BUSCAR POR</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"buscarPor\"\r\n          >\r\n            <option value=\"DS_LOTE\" selected>Lote</option>\r\n            <option value=\"NR_NOTA_FISC\" >Nota Fiscal</option>\r\n            <option value=\"NM_MATE\">Material</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-6\">\r\n          <label>TERMO DE PESQUISA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"pesquisa\"\r\n              >\r\n              <div class=\"input-group-append\">\r\n                <span\r\n                  container=\"body\"\r\n                  placement =\"left\"\r\n                >\r\n                  <button\r\n                    style=\"height: 25px;\"\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getLotesDuplicados()\"\r\n                    >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"!loadingDuplicadas\" class=\"col-lg-12 text-muted \">\r\n    <p><strong>Buscando os lotes duplicados...</strong></p>\r\n  </div>\r\n  <div class=\"row\" [hidden] = \"loadingDuplicadas || noDuplicadas\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noDuplicadas\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loadingDuplicadas || noDuplicadas\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-5': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noDuplicadas\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('DS_LOTE')\">\r\n                <thead-sorter value=\"Lote\" [active]=\"ORDE_BY == 'DS_LOTE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NR_NOTA_FISC')\">\r\n                <thead-sorter value=\"NF\" [active]=\"ORDE_BY == 'NR_NOTA_FISC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                [hidden]=\"showDetailPanel\"\r\n                (click)=\"setOrderBy('SEQU_MATE')\">\r\n                <thead-sorter value=\"Sequência\" [active]=\"ORDE_BY == 'SEQU_MATE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                [hidden]=\"showDetailPanel\"\r\n                (click)=\"setOrderBy('CD_MATE')\">\r\n                <thead-sorter value=\"Cód. Material\" [active]=\"ORDE_BY == 'CD_MATE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                [hidden]=\"showDetailPanel\"\r\n                (click)=\"setOrderBy('NM_MATE')\">\r\n                <thead-sorter value=\"Material\" [active]=\"ORDE_BY == 'NM_MATE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                [hidden]=\"showDetailPanel\"\r\n                (click)=\"setOrderBy('DS_UNID_MEDI')\">\r\n                <thead-sorter value=\"Un. Medida\" [active]=\"ORDE_BY == 'DS_UNID_MEDI'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                [hidden]=\"showDetailPanel\"\r\n                (click)=\"setOrderBy('NM_STAT')\">\r\n                <thead-sorter value=\"Status de Recebimento\" [active]=\"ORDE_BY == 'NM_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                [hidden]=\"showDetailPanel\"\r\n                (click)=\"setOrderBy('DT_INCL')\">\r\n                <thead-sorter value=\"Data justificativa\" [active]=\"ORDE_BY == 'DT_INCL'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" style=\"width:40px\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr  *ngFor=\"let duplicada of duplicadas \" [class.table-active]=\"duplicada?.ID_LOGI_ENMA_NOFI == duplicadaSelecionada?.ID_LOGI_ENMA_NOFI && showDetailPanel\">\r\n              <td  [ngClass]=\"duplicada.IN_STAT == '1' ? 'border-success' : 'border-primary'\">\r\n                {{duplicada.DS_LOTE }}\r\n              </td>\r\n              <td >{{ duplicada.NR_NOTA_FISC }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.SEQU_MATE | uppercase }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.CD_MATE }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.NM_MATE | uppercase }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.DS_UNID_MEDI | uppercase }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.NM_STAT | uppercase }}</td>\r\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.DT_INCL | date: 'dd/MM/yyyy' }}</td>\r\n              <td class=\"align-middle\">\r\n                <span class=\"mr-3\" tooltip=\"Justificar\" *ngIf=\"duplicada.IN_STAT != 1\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(formResolucao, duplicada)\">\r\n                    <i class=\"fas fa-check\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItemsDuplicadas ? totalItemsDuplicadas : currentPage*(itemsPerPage) }} de {{ totalItemsDuplicadas }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItemsDuplicadas\"\r\n          (pageChanged)=\"onPageChangedDuplicadas($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>ID</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.ID_LOGI_ENMA_NFMA_LTDP == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.ID_LOGI_ENMA_NFMA_LTDP != null\">{{duplicadaSelecionada?.ID_LOGI_ENMA_NFMA_LTDP}}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Lote</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.DS_LOTE == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.DS_LOTE != null\">{{ duplicadaSelecionada?.DS_LOTE}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Nota Fiscal</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.NR_NOTA_FISC == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.NR_NOTA_FISC != null\">{{ duplicadaSelecionada?.NR_NOTA_FISC}}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Status de Recebimento</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.NM_STAT == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.NM_STAT != null\">{{ duplicadaSelecionada?.NM_STAT}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Sequência</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.SEQU_MATE == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.SEQU_MATE != null\">{{ duplicadaSelecionada?.SEQU_MATE  }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Cód. Material</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.CD_MATE == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.CD_MATE != null\">{{ duplicadaSelecionada?.CD_MATE  }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label>Material</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.NM_MATE == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.NM_MATE != null\"> {{duplicadaSelecionada?.NM_MATE}}</div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label>Justificativa:</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.DS_OBSE == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.DS_OBSE != null\">{{ duplicadaSelecionada?.DS_OBSE  }}</div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label>Usuário Responsável Pela Justificativa</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.NR_MATR != null\">{{duplicadaSelecionada?.NR_MATR}} - {{ duplicadaSelecionada?.NM_USUA }}</div>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>Data da Justificativa</label>\r\n              <div *ngIf=\"duplicadaSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"duplicadaSelecionada?.DT_INCL != null\">{{ duplicadaSelecionada?.DT_INCL | date: 'dd/MM/yyyy'}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <ng-template #formResolucao>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Descrição de Parecer #{{duplicadaSelecionada?.ID_APRO}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-12\">\r\n        <form [formGroup]=\"formLotesDuplicados\" autocomplete=\"off\">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"DS_OBSE\" >Descrição:</label>\r\n              <textarea\r\n                class=\"form-control\"\r\n                id=\"DS_OBSE\"\r\n                formControlName=\"DS_OBSE\"\r\n                rows=\"3\"\r\n                [ngClass]=\"onFieldError('DS_OBSE')\"\r\n                >\r\n              </textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório com no mínimo {{numberDescricao}} caracteres.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div  class=\"form-row justify-content-center text-center\" >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"changeType()\"\r\n            [disabled]=\"formLotesDuplicados.valid === false\"\r\n          >\r\n          <span aria-hidden=\"true\">\r\n            <i class=\" text-primary fas fa-check\"></i>\r\n           </span>Marcar como Justificado\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n";
      /***/
    },

    /***/
    "+wKV":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/documentos/documentos.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent */

    /***/
    function wKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent", function () {
        return LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_documentos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./documentos.component.html */
      "ejgx");
      /* harmony import */


      var _documentos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./documentos.component.scss */
      "um5m");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../services/ficha-conformidade.service */
      "blLz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent(fichaConformidadeService, pnotify, activatedRoute, confirmModalService) {
          _classCallCheck(this, LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent);

          this.fichaConformidadeService = fichaConformidadeService;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.confirmModalService = confirmModalService;
          this.formData = [];
          this.documentos = [];
          this.loadingNavBar = false;
          this.loading = false;
        }

        _createClass(LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var params = this.activatedRoute.snapshot.params;

            if (params.hasOwnProperty('id')) {
              this.getDocumentos({
                ID_LOGI_ENMA_FHNC: params.id,
                IN_STAT: '1'
              });
            }
          }
        }, {
          key: "postDocumentos",
          value: function postDocumentos(fichaId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var requests, promise;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      requests = [];

                      if (!(this.formData.length === 0)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", requests);

                    case 3:
                      promise = function promise() {
                        _this.formData.forEach(function (element) {
                          requests.push(_this.fichaConformidadeService.postDocumento(element, fichaId));
                        });
                      };

                      Promise.resolve(promise());
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(requests).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this.pnotify.success();
                          } else {
                            _this.pnotify.error();
                          }
                        });
                      }, function (error) {
                        _this.pnotify.error();
                      });
                      return _context.abrupt("return", requests);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(documento) {
            var _this2 = this;

            var type = 'inactivate',
                title = 'Confirmar inativação',
                message = 'Deseja realmente prosseguir com a inativação do registro?',
                cancelTxt = 'Cancelar',
                okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
              _this2.loadingNavBar = true;
              return _this2.fichaConformidadeService.putDocumento(documento);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              _this2.pnotify.success('Documento atualizado com sucesso');

              _this2.getDocumentos({
                ID_LOGI_ENMA_FHNC: _this2.form.get('ID_LOGI_ENMA_FHNC').value,
                IN_STAT: '1'
              });
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            var _this3 = this;

            this.fichaConformidadeService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this3.documentos = response.body['data'];
              } else {
                _this3.documentos = [];
              }
            }, function (error) {
              _this3.documentos = [];
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(documento, index) {
            if (!documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
              this.formData = this.formData.filter(function (element) {
                return element.get('file')['name'] != documento.NM_DOCU;
              });
            }

            documento.IN_STAT = '0';
            this.documentos.splice(index, 1);

            if (documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
              this.putDocumento(documento);
            }
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.documentos.push({
              NM_DOCU: files[0]['name']
            });
          }
        }, {
          key: "fichaId",
          set: function set(id) {
            if (!id) return;
            this.postDocumentos(id);
          }
        }]);

        return LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent;
      }();

      LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent.ctorParameters = function () {
        return [{
          type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisFichaConformidadeService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]
        }];
      };

      LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent.propDecorators = {
        fichaId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
        }]
      };
      LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-documentos',
        template: _raw_loader_documentos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documentos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisFichaConformidadeService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]])], LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent);
      /***/
    },

    /***/
    "//iM":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/lista.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function iM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .accordion-toggle button {\n  width: 100%;\n  border: none;\n  text-align: left;\n  color: black;\n  font-weight: 500;\n}\n\n.ScrollHistorico {\n  height: 430px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.buttonGerarFicha {\n  color: #ff7300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvbm90YXMtZmlzY2Fpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyYWRhLW1hdGVyaWFpcy9ub3Rhcy1maXNjYWlzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5hY2NvcmRpb24tdG9nZ2xlIGJ1dHRvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLlNjcm9sbEhpc3RvcmljbyB7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ1dHRvbkdlcmFyRmljaGF7XHJcbiAgY29sb3I6cmdiKDI1NSwgMTE1LCAwKVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "/As8":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: SulFluminenseEntradaMateriaisRoutingModule */

    /***/
    function As8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEntradaMateriaisRoutingModule", function () {
        return SulFluminenseEntradaMateriaisRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./entrada-materiais.component */
      "io96");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./painel-bobinas-qualidade/painel-bobinas-qualidade.component */
      "t/sj");
      /* harmony import */


      var _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./consulta-recebimento-bobinas/consulta-recebimento-bobinas.component */
      "Anp4");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_3__["SulFluminenseEntradaMateriaisComponent"]
        }, {
          path: 'painel-bobinas-qualidade',
          component: _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_5__["SulFluminensePainelBobinasQualidadeComponent"]
        }, {
          path: 'consulta-recebimento-bobinas',
          component: _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_6__["SulFluminenseConsultaRecebimentoBobinasComponent"]
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
        }]
      }];

      var SulFluminenseEntradaMateriaisRoutingModule = function SulFluminenseEntradaMateriaisRoutingModule() {
        _classCallCheck(this, SulFluminenseEntradaMateriaisRoutingModule);
      };

      SulFluminenseEntradaMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], SulFluminenseEntradaMateriaisRoutingModule);
      /***/
    },

    /***/
    "/qkg":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/lista.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisNotasFiscaisListaComponent */

    /***/
    function qkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisListaComponent", function () {
        return LogisticaEntradaMateriaisNotasFiscaisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "jsYm");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "//iM");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../status-recebimento/services/status-recebimento.service */
      "9bNu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/notas-fiscais.service */
      "81bo");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/entrada-materiais.service */
      "mfeq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisNotasFiscaisListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisNotasFiscaisListaComponent(route, pnotify, activatedRoute, localeService, notasFiscaisService, entradaMateriaisService, statusRecebimentoService, formBuilder, xlsxService, confirmModalService, modalService, routerService, dateService) {
          _classCallCheck(this, LogisticaEntradaMateriaisNotasFiscaisListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.notasFiscaisService = notasFiscaisService;
          this.entradaMateriaisService = entradaMateriaisService;
          this.statusRecebimentoService = statusRecebimentoService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.confirmModalService = confirmModalService;
          this.modalService = modalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.noHistoricoMateriais = {};
          this.ORDE_BY = 'ID_LOGI_ENMA_NOFI';
          this.ORDE_TYPE = 'desc'; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false;
          this.loadingFornecedores = false;
          this.loadingMateriais = false;
          this.loadingHistoricoMateriais = false;
          this.loadingEmpresas = false;
          this.loadingDepositos = false;
          this.loadingAlteracoes = false;
          this.loadingStatusRecebimento = false; //VARIAVEIS

          this.fornecedores = [];
          this.empresas = [];
          this.depositos = [];
          this.materiais = [];
          this.historicoMateriais = [];
          this.alteracoes = [];
          this.statusRecebimento = [];
          this.totalItens = []; //CARDS

          this.notas = 0;
          this.notasEmpty = false;
          this.fichasNaoConforme = 0;
          this.fichasNaoConformeEmpty = false;
          this.duplicados = 0;
          this.duplicadosEmpty = false;
          this.cardsLoading = true; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação das Notas Fiscais (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
            nome: 'Inativos'
          }];
          this.tiposData = [{
            cod: '1',
            nome: 'Emissão'
          }, {
            cod: '2',
            nome: 'Recebimento'
          }, {
            cod: '3',
            nome: 'Entrada no Estoque'
          }, {
            cod: '4',
            nome: 'Cadastro'
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
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisNotasFiscaisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getEmpresas();
            this.getDepositos();
            this.getStatusRecebimento();
            this.getLotesDuplicados();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();

            if (this.modalRef1 != undefined) {
              this.modalRef1.hide();
            }

            if (this.modalRef2 != undefined) {
              this.modalRef2.hide();
            }
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this4 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this4.routerService.getBase64UrlParams(response);

              _this4.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this4.itemsPerPage = _response.TT_REGI_PAGI;

              _this4.getNotasFiscais(_this4.getParams());
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TP_DATA_FINA: '1',
              TP_DATA_INIC: '1',
              DT_INIC: new Date(),
              DT_FINA: new Date(),
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_NOFI: [null],
              NR_NOTA_FISC: [null],
              NM_FORN: [null],
              CD_MATE: [null],
              ID_FORN: [null],
              NM_DEPO: [null],
              DT_EMIS_NOTA_FISC: [null],
              NR_NOTA_FISC_REFE: [null],
              ID_LOGI_ENMA_NOFI_STAT: [null],
              NM_STAT: [null],
              NM_MATE: [null],
              DS_LOTE: [null],
              IN_FHNC: [null],
              DS_LOGI_ENTR_MATE_UNID_MEDI: [null],
              DS_LOGI_ENTR_MATE_LOTE: [null],
              TP_DATA_FINA: ['1'],
              TP_DATA_INIC: ['1'],
              UUID_EMPR: [null],
              UUID_DEPO: [null],
              NM_EMPR: [null],
              QT_LOGI_ENTR_MATE: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              MATR_USUA_CADA: [null],
              DS_USUA_CADA: [null],
              DT_INCL: [null],
              DT_INIC: [new Date()],
              DT_FINA: [new Date()],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              ORDE_BY: [this.ORDE_BY],
              ORDE_TYPE: [this.ORDE_TYPE],
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Notas Fiscais'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
            this.form.get('ORDE_BY').setValue(this.ORDE_BY);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
            this.form.reset();
          }
        }, {
          key: "gerarFicha",
          value: function gerarFicha(id) {
            var params = this.activatedRoute.snapshot.params;
            var idSubmodulo = params.hasOwnProperty('idSubModulo') ? params.idSubModulo : undefined;
            this.route.navigate(["/logistica/entrada-materiais/".concat(idSubmodulo, "/fichas-nao-conformidade/novo")], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams({
                ID_LOGI_ENMA_NOFI: id
              })
            });
          }
        }, {
          key: "openModalDetalhes",
          value: function openModalDetalhes(template, nota) {
            this.getNotasMateriais({
              ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI,
              IN_STAT: '1'
            });
            this.getAlteracoes({
              ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI
            });
            this.getHistoricoMateriais({
              ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI
            });
            this.notaFiscalSelecionada = nota;
            this.modalRef1 = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModalDetalhes",
          value: function hideModalDetalhes() {
            this.modalRef1.hide();
          }
        }, {
          key: "openModalDuplicadas",
          value: function openModalDuplicadas(template) {
            this.modalRef2 = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModalDuplicadas",
          value: function hideModalDuplicadas() {
            this.modalRef2.hide();
            this.getLotesDuplicados();
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.ORDE_BY === column) {
              if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
              } else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
              }
            } else {
              this.ORDE_BY = column;
              this.ORDE_TYPE = 'asc';
            }

            this.onFilter();
          }
        }, {
          key: "getNotasMateriais",
          value: function getNotasMateriais(params) {
            var _this5 = this;

            this.loadingMateriais = true;
            this.notasFiscaisService.getNotasMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this5.loadingMateriais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.materiais = response.body['data'];
                _this5.noMateriais = false;
              } else {
                _this5.materiais = [];
                _this5.noMateriais = true;
              }
            }, function (error) {
              _this5.noMateriais = true;

              try {
                _this5.pnotify.error(error.error.message);

                _this5.noMateriais = true;
              } catch (error) {
                _this5.pnotify.error();
              }
            });
          }
        }, {
          key: "fichasNaoConformeChange",
          value: function fichasNaoConformeChange() {
            this.form.get('IN_FHNC').setValue('1');
            this.onFilter();
          }
        }, {
          key: "getHistoricoMateriais",
          value: function getHistoricoMateriais(params) {
            var _this6 = this;

            this.loadingHistoricoMateriais = true;
            this.notasFiscaisService.getHistoricoMateriais(Object.assign(Object.assign({}, params), {
              ORDE_TYPE: 'desc'
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this6.loadingHistoricoMateriais = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this6.historicoMateriais = response['body']['data'];
            }, function (error) {
              try {
                _this6.pnotify.error(error.error.message);
              } catch (error) {
                _this6.pnotify.error();
              }
            });
          }
        }, {
          key: "hasHistoricoMateriais",
          value: function hasHistoricoMateriais(id) {
            if (this.loadingHistoricoMateriais[id]) return false;
            if (!this.historicoMateriais[id]) return false;
            if (this.historicoMateriais[id].length == 0) return false;
            return true;
          }
        }, {
          key: "getNotasFiscais",
          value: function getNotasFiscais(params) {
            var _this7 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.cardsLoading = false;
            this.notasFiscaisService.getNotasFiscais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this7.loading = false;
              _this7.cardsLoading = true;
              _this7.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.notasFiscais = response.body['data'];
                _this7.totalItems = response.body['total'];
                _this7.notas = response.body['total'];
                _this7.fichasNaoConforme = response.body['notConform'];
                _this7.noResult = false;
              } else {
                _this7.noResult = true;
                _this7.notas = 0;
                _this7.notasFiscais = [];
              }
            }, function (error) {
              _this7.noResult = true;

              try {
                _this7.pnotify.error(error.error.message);
              } catch (error) {
                _this7.pnotify.error();
              }
            });
          }
        }, {
          key: "getLotesDuplicados",
          value: function getLotesDuplicados(params) {
            var _this8 = this;

            var _params = Object.assign(Object.assign({}, params), {
              IN_DS_OBSE: 0
            });

            this.notasFiscaisService.getLotesDuplicados(_params).subscribe(function (response) {
              if (response.status === 200) {
                _this8.duplicados = response.body['total'];
              } else {
                _this8.duplicados = 0;
              }
            }, function (error) {
              try {
                _this8.pnotify.error(error.error.message);

                _this8.duplicados = 0;
              } catch (error) {
                _this8.pnotify.error();
              }
            });
          }
        }, {
          key: "typeChange",
          value: function typeChange(params) {
            if (params.ID_LOGI_ENMA_NOFI_STAT) return false;
            if (params.ID_EMPR) return false;
            if (params.ID_FORN) return false;
            if (params.NR_NOTA_FISC) return false;
            if (params.DT_EMIS_NOTA_FISC) return false;
            if (params.DS_OBSE) return false;
            if (params.IN_STAT) return false;
            return true;
          }
        }, {
          key: "getExport",
          value: function getExport(params) {
            var _this9 = this;

            this.loadingNavBar = true;
            params = this.getParams();

            var _params = Object.assign(Object.assign({}, params), {
              IN_PAGI: '0'
            });

            this.loadingNavBar = true;
            this.notasFiscaisService.getExport(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this9.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.allNotasFiscais = response.body['data'];

                _this9.onExport();
              } else {
                _this9.allNotasFiscais = [];
              }
            }, function (error) {
              try {
                _this9.pnotify.error(error.error.message);
              } catch (error) {
                _this9.pnotify.error();
              }
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var _this10 = this;

            this.loadingEmpresas = true;
            this.entradaMateriaisService.getEmpresas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this10.loadingEmpresas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.empresas = response.body['result'];
              } else {
                _this10.pnotify.notice('Nenhum registro encontrado!');

                _this10.empresas = [];
              }
            }, function (error) {
              try {
                _this10.pnotify.error(error.error.message);

                _this10.empresas = [];
              } catch (error) {
                _this10.pnotify.error();
              }
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            var _this11 = this;

            this.loadingDepositos = true;
            this.entradaMateriaisService.getDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this11.loadingDepositos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this11.depositos = response.body['result'];
              } else {
                _this11.pnotify.notice('Nenhum registro encontrado!');

                _this11.depositos = [];
              }
            }, function (error) {
              try {
                _this11.pnotify.error(error.error.message);

                _this11.depositos = [];
              } catch (error) {
                _this11.pnotify.error();
              }
            });
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(params) {
            var _this12 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.ORDE_TYPE = 'desc';
            this.loadingAlteracoes = true;
            this.notasFiscaisService.getAlteracoes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this12.loadingAlteracoes = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this12.alteracoes = response.body['data'];
                _this12.noAlteracoes = false;
              } else {
                _this12.alteracoes = [];
                _this12.noAlteracoes = true;
              }
            }, function (error) {
              try {
                _this12.pnotify.error(error.error.message);

                _this12.noAlteracoes = true;
              } catch (error) {
                _this12.pnotify.error();
              }
            });
          }
        }, {
          key: "titleHistorico",
          value: function titleHistorico(params) {
            var _newDT = new Date(params.DT_INCL);

            var data = this.dateService.convertToBrazilianDate(_newDT);

            if (params.IN_STAT != 0) {
              return "ALTERAÇÃO REALIZADA POR " + params.NM_USUA + " NO DIA " + data;
            }

            if (params.SEQU_MATE == null && params.IN_STAT != 0) {
              return "MATERIAL REMOVIDO POR " + params.NM_USUA + " NO DIA " + data;
            }

            return "REGISTRO INATIVADO POR " + params.NM_USUA + " NO DIA " + data;
          }
        }, {
          key: "getFornecedores",
          value: function getFornecedores(params) {
            var _this13 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            this.loadingFornecedores = true;
            this.entradaMateriaisService.getFornecedores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this13.loadingFornecedores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this13.fornecedores = response.body['data'];
              } else {
                _this13.fornecedores = [];
              }
            }, function (error) {
              try {
                _this13.pnotify.error(error.error.message);

                _this13.fornecedores = [];
              } catch (error) {
                _this13.pnotify.error();
              }
            });
          }
        }, {
          key: "getStatusRecebimento",
          value: function getStatusRecebimento(params) {
            var _this14 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            this.loadingStatusRecebimento = true;
            this.statusRecebimentoService.getStatusRecebimento(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this14.loadingStatusRecebimento = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this14.statusRecebimento = response.body['data'];
              } else {
                _this14.statusRecebimento = [];
              }
            }, function (error) {
              try {
                _this14.pnotify.error(error.error.message);

                _this14.statusRecebimento = [];
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
          value: function classStatusBorder(notas) {
            var borderClass;

            if (notas.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (notas.IN_STAT == 0) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(nota) {
            var _this15 = this;

            var stat = nota.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
              _this15.loadingNavBar = true;
              nota.IN_STAT = stat;
              return _this15.notasFiscaisService.postNotasFiscais({
                ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI,
                IN_STAT: stat
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this15.loadingNavBar = false;
            })).subscribe(function (success) {
              _this15.pnotify.success();
            }, function (error) {
              try {
                _this15.pnotify.error(error.error.message);

                nota.IN_STAT = nota.IN_STAT == 1 ? 0 : 1;
              } catch (error) {
                _this15.pnotify.error();
              }
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
            listagemExport = this.allNotasFiscais;
            this.xlsxService.exportFile(listagemExport, "Notas_Fiscais".concat(dataExport));
          }
        }]);

        return LogisticaEntradaMateriaisNotasFiscaisListaComponent;
      }();

      LogisticaEntradaMateriaisNotasFiscaisListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsLocaleService"]
        }, {
          type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"]
        }, {
          type: _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisService"]
        }, {
          type: _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }];
      };

      LogisticaEntradaMateriaisNotasFiscaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsLocaleService"], _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"], _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisService"], _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])], LogisticaEntradaMateriaisNotasFiscaisListaComponent);
      /***/
    },

    /***/
    "/wcd":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/painel-aprovacao/lista/lista.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3BhaW5lbC1hcHJvdmFjYW8vbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "18Ue":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/parecer/cadastro/cadastro.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ue(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3BhcmVjZXIvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "1SJI":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/entrada-materiais/consulta-recebimento-bobinas/consulta-recebimento-bobinas.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SJI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Consulta de Recebimento de Bobinas</h1>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pb-0\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <custom-iframe [url]=\"url\"></custom-iframe>    \r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "4OIG":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/motivos/lista/lista.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OIG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"MOTIVOS\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"ID_LOGI_ENTR_MATE_MOTI\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_ENTR_MATE_MOTI\"\r\n                formControlName=\"ID_LOGI_ENTR_MATE_MOTI\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"DS_LOGI_ENTR_MATE_MOTI\">Descrição</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"DS_LOGI_ENTR_MATE_MOTI\"\r\n                formControlName=\"DS_LOGI_ENTR_MATE_MOTI\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"DS_LOGI_ENTR_MATE_CATE_MOTI\">Categoria</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"categorias\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"categotia\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"categotia\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"DS_LOGI_ENTR_MATE_CATE_MOTI\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID</th>\r\n              <th scope=\"col\" >Descrição</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\">Categoria</th>\r\n              <th scope=\"col\" style=\"width:80px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let motivo of motivos\"  [class.table-active]=\"motivo?.ID_LOGI_ENTR_MATE_MOTI == motivoSelecionado?.ID_LOGI_ENTR_MATE_MOTI && showDetailPanel\">\r\n              <td (click)=\"onDetails(motivo)\" [ngClass]=\"motivo.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{motivo.ID_LOGI_ENTR_MATE_MOTI }}\r\n              </td>\r\n              <td (click)=\"onDetails(motivo)\">{{ motivo.DS_LOGI_ENTR_MATE_MOTI | uppercase}}</td>\r\n              <td (click)=\"onDetails(motivo)\" [hidden]=\"showDetailPanel\">{{ motivo.DS_LOGI_ENTR_MATE_CATE_MOTI }}</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" [tooltip]=\"motivo.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(motivo)\">\r\n                    <i [ngClass]=\"motivo.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', motivo.ID_LOGI_ENTR_MATE_MOTI]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Histórico de alteração\">\r\n        <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n              <!-- <th scope=\"col\">Alteração</th> -->\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let alteracao of alteracoes\">\r\n              <td class=\"text-center\">{{ alteracao.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td>{{ alteracao.DS_USUA_CADA | uppercase }}</td>\r\n              <!-- <td>{{ alteracao.nomeUsuario | uppercase }}</td> -->\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "4vrJ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/motivos/services/motivos.service.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisMotivosService */

    /***/
    function vrJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisMotivosService", function () {
        return LogisticaEntradaMateriaisMotivosService;
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


      var LogisticaEntradaMateriaisMotivosService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisMotivosService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisMotivosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntradaMateriaisMotivosService, [{
          key: "getMotivos",
          value: function getMotivos(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/motivos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMotivos",
          value: function postMotivos(params) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/motivos"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisMotivosService;
      }();

      LogisticaEntradaMateriaisMotivosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisMotivosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisMotivosService);
      /***/
    },

    /***/
    "5ATo":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/cadastro/cadastro.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ATo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Fichas de Não Conformidade\">\r\n  <button\r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postFichasConformidade()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Dados do Ficha de Não Conformidade</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-7 pl-0\">\r\n            <label for=\"tiposConformidade\">Tipo de Não Conformidade</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tiposConformidade\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingTiposConformidade\"\r\n              labelForId=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n              bindLabel=\"NM_TIPO\"\r\n              bindValue=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n              id=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n              formControlName=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n              [ngClass]=\"onFieldError('ID_LOGI_ENMA_FHNC_TIPO') + ' ' + onFieldRequired('ID_LOGI_ENMA_FHNC_TIPO')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENMA_FHNC_TIPO')\" message=\"Tipo de não conformidade é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-5 pl-0\"></div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Materiais</legend>\r\n        <div formArrayName=\"materiais\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\"></div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddMaterial()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of formMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3 pl-0\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"NR_NOTA_FISC\">Nota Fiscal</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                      <a\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(selecionarNotaFiscal, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NR_NOTA_FISC\"\r\n                    formControlName=\"NR_NOTA_FISC\"\r\n                    (change)=\"onCanAddMaterial(i)\"\r\n                    placeholder=\"Digite...\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'NR_NOTA_FISC') + ' ' + onNestedFieldRequired('materiais', i, 'NR_NOTA_FISC')\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-4 pl-0\">\r\n                  <label for=\"NM_CLAS\">Classe</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NM_CLAS\"\r\n                    formControlName=\"NM_CLAS\"\r\n                    >\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"DS_LOTE\">Lote</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"DS_LOTE\"\r\n                    formControlName=\"DS_LOTE\"\r\n                    >\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"DS_UNID_MEDI\">Un. Medida</label>\r\n                  <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"DS_UNID_MEDI\"\r\n                  formControlName=\"DS_UNID_MEDI\"\r\n                  [ngClass]=\"onNestedFieldError('materiais', i, 'DS_UNID_MEDI') + ' ' + onNestedFieldRequired('materiais', i, 'DS_UNID_MEDI')\"\r\n                >\r\n                  <option >KG</option>\r\n                  <option >TON</option>\r\n                  <option >PC</option>\r\n                  <option >UN</option>\r\n                </select>\r\n                </div>\r\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMaterial(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-7 pl-0\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"NM_MATE\">Material</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\"  >\r\n                      <a\r\n                      *ngIf=\"onCanAddMaterial(i)\"\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(selecionarMateriais, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NM_MATE\"\r\n                    formControlName=\"NM_MATE\"\r\n                    placeholder=\"Digite...\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'NM_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'NM_MATE')\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"TT_MATE_ORIG\">Quantidade Total</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"TT_MATE_ORIG\"\r\n                    formControlName=\"TT_MATE_ORIG\"\r\n                    currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\r\n\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE_ORIG') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE_ORIG')\">\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"TT_MATE\">Quantidade NC</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"TT_MATE\"\r\n                    formControlName=\"TT_MATE\"\r\n                    currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE')\">\r\n                </div>\r\n                <invalid-form-control\r\n                [show]=\"comparaQuantidade(i)\"\r\n                message=\"Quantidade total está menor que a quantidade não conforme\">\r\n              </invalid-form-control>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Descrição</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Descrição da NC:</label>\r\n            <textarea\r\n              class=\"form-control\"\r\n              id=\"DS_OBSE\"\r\n              formControlName=\"DS_OBSE\"\r\n              [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\">\r\n            </textarea>\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório com no mínimo {{numberDescricao}} caracteres.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <logistica-entrada-materiais-notas-fiscais-documentos\r\n      [fichaId] = \"fichaId\"\r\n      >\r\n      </logistica-entrada-materiais-notas-fiscais-documentos>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #selecionarNotaFiscal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Notas/Materiais</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingNotasFiscais\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formNotasFiscais\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"IN_STAT\"\r\n              >\r\n                <option value=\"1\">Ativo</option>\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"\">Exhibir Todos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_MATE\">ID</option>\r\n                <option value=\"NR_NOTA_FISC\" selected>Nota Fiscal</option>\r\n                <option value=\"DS_LOTE\">Lote</option>\r\n                <option value=\"NM_MATE\">Material</option>\r\n                <option value=\"NM_FORN\">Fornecedor</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-6\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span\r\n                      [tooltip]=\"formNotasFiscais.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formNotasFiscais.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getNotasMateriais()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!noNotasFiscais\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID NF</th>\r\n            <th>Nota Fiscal</th>\r\n            <th>Lote</th>\r\n            <th>Nome Material</th>\r\n            <th>Total de Material</th>\r\n            <th>Fornecedor</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of notasFiscais\">\r\n            <td>{{ material.ID_LOGI_ENMA_NOFI }}</td>\r\n            <td>{{ material.NR_NOTA_FISC }}</td>\r\n            <td *ngIf=\"material.DS_LOTE != null \">{{ material.DS_LOTE }}</td>\r\n            <td *ngIf=\"material.DS_LOTE == null\">NÃO INFORMADO</td>\r\n            <td>{{ material.NM_MATE }}</td>\r\n            <td>{{ material.TT_MATE_ORIG }} {{ material.DS_UNID_MEDI }}</td>\r\n            <td>{{ material.NM_FORN }} </td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Informações\"\r\n                container=\"body\"\r\n                (click)=\"setMaterial(material);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"totalItems > itemsPerPage\" >\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #selecionarMateriais>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Materiais</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingAllMateriais\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formAllMateriais\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"IN_STAT\"\r\n              >\r\n                <option value=\"1\">Ativo</option>\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"\">Exhibir Todos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_REFE_ERP\">ID ERP</option>\r\n                <option value=\"NM_MATE\" selected> Nome Material</option>\r\n                <option value=\"NM_CLAS\">Classe</option>\r\n                <option value=\"NM_LINH\">Linha</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-6\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span\r\n                      [tooltip]=\"formAllMateriais.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formAllMateriais.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getAllMateriais()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingAllMateriais && !noAllMateriais\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID ERP</th>\r\n            <th>Nome Material</th>\r\n            <th>Classe</th>\r\n            <th>Linha</th>\r\n            <th>Unidade de Medida</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of allMateriais | slice : begin : end; let i = index\">\r\n            <td>{{ material.ID_REFE_ERP }}</td>\r\n            <td>{{ material.NM_MATE }}</td>\r\n            <td>{{ material.NM_CLAS }}</td>\r\n            <td>{{ material.NM_LINH }}</td>\r\n            <td>{{ material.NM_APOI_UNID_MEDI }} </td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Material\"\r\n                container=\"body\"\r\n                (click)=\"setMaterial(material);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"totalItemsMaterial > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItemsMaterial ? totalItemsMaterial : currentPage*(itemsPerPage) }} de {{ totalItemsMaterial }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItemsMaterial\"\r\n          (pageChanged)=\"onPageChangedMaterial($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "5cZa":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/parecer/cadastro/cadastro.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisParecerCadastroComponent */

    /***/
    function cZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisParecerCadastroComponent", function () {
        return LogisticaEntradaMateriaisParecerCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "tXxU");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "18Ue");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_parecer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/parecer.service */
      "M5hd");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__); //Services
      //Bootstrap
      //Angular


      var LogisticaEntradaMateriaisParecerCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisParecerCadastroComponent(formBuilder, pnotify, activatedRoute, router, localeService, parecerService, titleService, atividadesService) {
          _classCallCheck(this, LogisticaEntradaMateriaisParecerCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.localeService = localeService;
          this.parecerService = parecerService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.breadCrumbTree = [];
          this.formData = []; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false; //Interfaces

          this.parecerRecebimento = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_6__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisParecerCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
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
            if (_params.hasOwnProperty('id')) return this.getParecer({
              ID_LOGI_ENMA_FHNC_OCPR: _params['id']
            });
          }
        }, {
          key: "getParecer",
          value: function getParecer(params) {
            var _this16 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.parecerService.getParecer(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this16.loading = false;
              _this16.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.form.patchValue(response.body['data'][0]);

                _this16.noResult = false;
              } else {
                _this16.noResult = true;
              }
            }, function (error) {
              _this16.pnotify.error();

              _this16.noResult = true;
            });
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Parecer',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_FHNC_OCPR: [null],
              NM_PARE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
              IN_STAT: [util__WEBPACK_IMPORTED_MODULE_13__["isNull"]],
              DS_OBSE: [null]
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postParecer",
          value: function postParecer() {
            var _this17 = this;

            this.loadingNavBar = true;
            this.parecerService.postParecer(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this17.loading = false;
              _this17.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this17.pnotify.success();

                _this17.router.navigate(['../'], {
                  relativeTo: _this17.activatedRoute
                });
              } else {
                _this17.pnotify.error();
              }
            }, function (error) {
              try {
                _this17.pnotify.error(error.error.message);
              } catch (error) {
                _this17.pnotify.error();
              }
            });
          }
        }]);

        return LogisticaEntradaMateriaisParecerCadastroComponent;
      }();

      LogisticaEntradaMateriaisParecerCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _services_parecer_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisParecerService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]
        }];
      };

      LogisticaEntradaMateriaisParecerCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-entrada-materiais-parecer-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _services_parecer_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisParecerService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]])], LogisticaEntradaMateriaisParecerCadastroComponent);
      /***/
    },

    /***/
    "6sJs":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/cadastro/cadastro.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "738o":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/cadastro/cadastro.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3N0YXR1cy1yZWNlYmltZW50by9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "7PM9":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisRoutingModule */

    /***/
    function PM9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisRoutingModule", function () {
        return LogisticaEntradaMateriaisRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./parecer/cadastro/cadastro.component */
      "5cZa");
      /* harmony import */


      var _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parecer/lista/lista.component */
      "WQIu");
      /* harmony import */


      var _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ficha-conformidade/ocorrencias/ocorrencias.component */
      "H1OO");
      /* harmony import */


      var _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ficha-conformidade/cadastro/cadastro.component */
      "A697");
      /* harmony import */


      var _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ficha-conformidade/lista/lista.component */
      "XkGG");
      /* harmony import */


      var _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tipos-conformidade/cadastro/cadastro.component */
      "yzlb");
      /* harmony import */


      var _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tipos-conformidade/lista/lista.component */
      "yVY0");
      /* harmony import */


      var _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./painel-aprovacao/lista/lista.component */
      "l/Jf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./entrada-materiais.component */
      "I+6W");
      /* harmony import */


      var _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./notas-fiscais/cadastro/cadastro.component */
      "SckD");
      /* harmony import */


      var _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./notas-fiscais/lista/lista.component */
      "/qkg");
      /* harmony import */


      var _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./status-recebimento/lista/lista.component */
      "jsif");
      /* harmony import */


      var _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./status-recebimento/cadastro/cadastro.component */
      "l/7K");
      /* harmony import */


      var _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./motivos/lista/lista.component */
      "OGJj");
      /* harmony import */


      var _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./motivos/cadastro/cadastro.component */
      "DU17");

      var routes = [{
        path: '',
        component: _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisComponent"]
      }, {
        path: 'notas-fiscais',
        children: [{
          path: '',
          component: _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntradaMateriaisNotasFiscaisListaComponent"]
        }, {
          path: 'novo',
          component: _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisNotasFiscaisCadastroComponent"]
        }, {
          path: ':id',
          component: _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisNotasFiscaisCadastroComponent"]
        }]
      }, {
        path: 'status-recebimento',
        children: [{
          path: '',
          component: _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaEntradaMateriaisStatusRecebimentoListaComponent"]
        }, {
          path: 'novo',
          component: _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent"]
        }, {
          path: ':id',
          component: _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent"]
        }]
      }, {
        path: 'parecer',
        children: [{
          path: '',
          component: _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_2__["LogisticaEntradaMateriaisParecerListaComponent"]
        }, {
          path: 'novo',
          component: _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaEntradaMateriaisParecerCadastroComponent"]
        }, {
          path: ':id',
          component: _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaEntradaMateriaisParecerCadastroComponent"]
        }]
      }, {
        path: 'motivos',
        children: [{
          path: '',
          component: _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisMotivosListaComponent"]
        }, {
          path: 'novo',
          component: _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisMotivosCadastroComponent"]
        }, {
          path: ':id',
          component: _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisMotivosCadastroComponent"]
        }]
      }, {
        path: 'tipos-nao-conformidade',
        children: [{
          path: '',
          component: _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntradaMateriaisTiposConformidadeListaComponent"]
        }, {
          path: 'novo',
          component: _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeCadastroComponent"]
        }, {
          path: ':id',
          component: _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeCadastroComponent"]
        }]
      }, {
        path: 'fichas-nao-conformidade',
        children: [{
          path: '',
          component: _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisFichaConformidadeListaComponent"]
        }, {
          path: 'novo',
          component: _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisFichasConformidadeCadastroComponent"]
        }, {
          path: ':id',
          component: _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisFichasConformidadeCadastroComponent"]
        }, {
          path: 'ocorrencias/novo',
          component: _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent"]
        }, {
          path: 'ocorrencias/:id',
          component: _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent"]
        }]
      }, {
        path: 'painel-aprovacao',
        children: [{
          path: '',
          component: _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisPainelAprovacaoListaComponent"]
        }, {
          path: 'lista',
          component: _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisPainelAprovacaoListaComponent"]
        }]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
      }];

      var LogisticaEntradaMateriaisRoutingModule = function LogisticaEntradaMateriaisRoutingModule() {
        _classCallCheck(this, LogisticaEntradaMateriaisRoutingModule);
      };

      LogisticaEntradaMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
      })], LogisticaEntradaMateriaisRoutingModule);
      /***/
    },

    /***/
    "8Ov2":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/cadastro/cadastro.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ov2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvdGlwb3MtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvdGlwb3MtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "8gyq":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/lista/lista.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gyq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3N0YXR1cy1yZWNlYmltZW50by9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "9bNu":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/services/status-recebimento.service.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisStatusRecebimentoService */

    /***/
    function bNu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisStatusRecebimentoService", function () {
        return LogisticaEntradaMateriaisStatusRecebimentoService;
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


      var LogisticaEntradaMateriaisStatusRecebimentoService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisStatusRecebimentoService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisStatusRecebimentoService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntradaMateriaisStatusRecebimentoService, [{
          key: "getStatusRecebimento",
          value: function getStatusRecebimento(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/status"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getHistorico",
          value: function getHistorico(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/status/historico"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postStatusRecebimento",
          value: function postStatusRecebimento(notas) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/status"), notas, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisStatusRecebimentoService;
      }();

      LogisticaEntradaMateriaisStatusRecebimentoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisStatusRecebimentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisStatusRecebimentoService);
      /***/
    },

    /***/
    "A697":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/cadastro/cadastro.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisFichasConformidadeCadastroComponent */

    /***/
    function A697(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichasConformidadeCadastroComponent", function () {
        return LogisticaEntradaMateriaisFichasConformidadeCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "5ATo");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "6sJs");
      /* harmony import */


      var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../notas-fiscais/services/notas-fiscais.service */
      "81bo");
      /* harmony import */


      var _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/entrada-materiais.service */
      "mfeq");
      /* harmony import */


      var _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../tipos-conformidade/services/tipos-conformidade.service */
      "AVAL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../services/ficha-conformidade.service */
      "blLz"); //Services
      //Bootstrap
      //Angular
      //rxjs


      var LogisticaEntradaMateriaisFichasConformidadeCadastroComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisFichasConformidadeCadastroComponent(formBuilder, pnotify, activatedRoute, routerService, router, localeService, entradaMateriaisService, fichasConformidadeService, notasFiscaisService, tiposConformidadeService, titleService, modalService, atividadesService) {
          _classCallCheck(this, LogisticaEntradaMateriaisFichasConformidadeCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.routerService = routerService;
          this.router = router;
          this.localeService = localeService;
          this.entradaMateriaisService = entradaMateriaisService;
          this.fichasConformidadeService = fichasConformidadeService;
          this.notasFiscaisService = notasFiscaisService;
          this.tiposConformidadeService = tiposConformidadeService;
          this.titleService = titleService;
          this.modalService = modalService;
          this.atividadesService = atividadesService;
          this.breadCrumbTree = [];
          this.formData = [];
          this.allMateriais = [];
          this.noNotasFiscais = true;
          this.noAllMateriais = true;
          this.validateNF = '';
          this.numberDescricao = 10; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          this.fichaId = 1; //Interfaces

          this.fichasConformidade = [];
          this.tiposConformidade = [];
          this.notasFiscais = [];
          this.totalItens = [];
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.totalItemsMaterial = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_11__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisFichasConformidadeCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
            this.registrarAcesso();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getTiposConformidade();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalRef != undefined) {
              this.modalRef.hide();
            }
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
              this.getFichasConformidade({
                ID_LOGI_ENMA_FHNC: _params['id']
              });
              this.getFormMaterial({
                ID_LOGI_ENMA_FHNC: _params['id'],
                IN_STAT: '1'
              });
              this.form.get('ID_LOGI_ENMA_FHNC').setValue(_params['id']);
              return;
            }

            var queryParams = this.activatedRoute.snapshot.queryParams;

            var _response = queryParams ? this.routerService.getBase64UrlParams(queryParams) : {};

            if (!_response.hasOwnProperty('ID_LOGI_ENMA_NOFI')) {
              this.onAddMaterial();
              return;
            }

            this.getNotasFiscaisMateriais(_response);
          }
        }, {
          key: "getFichasConformidade",
          value: function getFichasConformidade(params) {
            var _this18 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.fichasConformidadeService.getFichasConformidade(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this18.loading = false;
              _this18.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var ficha_ = response.body['data'][0];
                _this18.fichasConformidade = response.body['data'];
                _this18.noResult = false;

                _this18.form.patchValue(ficha_);
              } else {
                _this18.noResult = true;
                _this18.fichasConformidade = [];
              }
            }, function (error) {
              try {
                _this18.pnotify.error(error.error.message);
              } catch (error) {
                _this18.pnotify.error();
              }
            });
          }
        }, {
          key: "getTiposConformidade",
          value: function getTiposConformidade(params) {
            var _this19 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            this.loadingTiposConformidade = true;
            this.tiposConformidadeService.getTiposConformidade(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this19.loadingTiposConformidade = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this19.tiposConformidade = response.body['data'];
              } else {
                _this19.tiposConformidade = [];
              }
            }, function (error) {
              _this19.pnotify.error('Não foi encontrado nenhum status de recebimento');
            });
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Fichas de Não Conformidade',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_FHNC: [null],
              MATR_USUA_CADA: [null],
              DS_USUA_CADA: [null],
              DT_INCL: [null],
              DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].minLength(this.numberDescricao)]],
              ID_LOGI_ENMA_FHNC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
              materiais: this.formBuilder.array([])
            });
            this.formNotasFiscais = this.formBuilder.group({
              buscarPor: ['NR_NOTA_FISC'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required],
              ID_MATE: [null],
              NR_NOTA_FISC: [null],
              NM_MATE: [null],
              DS_LOTE: [null],
              PAGI: [1],
              TT_MATE_ORIG: [null],
              NM_FORN: [null],
              NM_EMPR: [null],
              DS_UNID_MEDI: [null],
              IN_STAT: ['1'],
              TT_REGI_PAGI: [this.itemsPerPage]
            });
            this.formAllMateriais = this.formBuilder.group({
              buscarPor: ['NM_MATE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required],
              ID_REFE_ERP: [null],
              NM_MATE: [null],
              NM_CLAS: [null],
              NM_LINH: [null],
              IN_STAT: ['1']
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postFichasConformidade",
          value: function postFichasConformidade() {
            var _this20 = this;

            this.loadingNavBar = true;
            var params = JSON.parse(JSON.stringify(this.form.value));
            delete params['materiais'];
            this.fichasConformidadeService.postFichasConformidade(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this20.loading = false;
              _this20.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this20.pnotify.success('Ficha de não conformidade cadastrada com sucesso!');

                var id = response.body['data'];

                _this20.form.get('ID_LOGI_ENMA_FHNC').setValue(id);

                _this20.postMateriais(id);

                _this20.fichaId = id;
              } else {
                _this20.pnotify.error();
              }
            }, function (error) {
              try {
                _this20.pnotify.error(error.error.message);
              } catch (error) {
                _this20.pnotify.error();
              }
            });
          }
        }, {
          key: "getAllMateriais",
          value: function getAllMateriais(params) {
            var _this21 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = this.formAllMateriais.value['IN_STAT'];
            _params.TT_REGI_PAGI = 15;
            var _obj = this.formAllMateriais.value;
            this.loadingAllMateriais = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.entradaMateriaisService.getAllMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this21.loadingAllMateriais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this21.allMateriais = response.body['result'];
                _this21.totalItemsMaterial = response.body['result'].length;
                _this21.noAllMateriais = false;
              } else {
                _this21.pnotify.notice('Nenhum registro encontrado!');

                _this21.allMateriais = [];
                _this21.noAllMateriais = true;
              }
            }, function (error) {
              _this21.pnotify.error();

              _this21.notasFiscais = [];
            });
          }
        }, {
          key: "getNotasMateriais",
          value: function getNotasMateriais(params) {
            var _this22 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = this.formNotasFiscais.value['IN_STAT'];
            _params.TT_REGI_PAGI = 10;
            _params.PAGI = this.formNotasFiscais.value['PAGI'];
            var _obj = this.formNotasFiscais.value;
            this.loadingNotasFiscais = true;
            this.noNotasFiscais = this.notasFiscais.length === 0 ? true : false;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.notasFiscaisService.getNotasMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this22.loadingNotasFiscais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this22.notasFiscais = response['body']['data'];
                _this22.totalItems = response.body['total'];
                _this22.noNotasFiscais = false;
              } else {
                _this22.pnotify.notice('Nenhum registro encontrado!');

                _this22.notasFiscais = [];
                _this22.noNotasFiscais = true;
              }
            }, function (error) {
              _this22.pnotify.error();

              _this22.notasFiscais = [];
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.index = index;
            this.noNotasFiscais = true;
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
          key: "setMaterial",
          value: function setMaterial(material) {
            var _material = Object.assign(Object.assign({}, material), {
              'IN_MATE': false
            });

            var fg = this.form.get('materiais');
            fg.controls[this.index].patchValue(_material);
            fg.controls[this.index].get('TT_MATE').patchValue(undefined);
            fg.controls[this.index].get('TT_MATE_ORIG').patchValue(_material.TT_MATE);
            fg.controls[this.index].get('UUID_MATE').patchValue(_material.ID);
            fg.controls[this.index].get('ID_MATE').patchValue(_material.ID_MATE);
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this23 = this;

              var request, materiais, promise;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      request = [];
                      materiais = this.formMateriais.getRawValue();

                      if (materiais) {
                        _context2.next = 4;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 4:
                      promise = function promise() {
                        materiais.forEach(function (material) {
                          var params = Object.assign(Object.assign({}, material), {
                            'ID_LOGI_ENMA_FHNC': id
                          });
                          request.push(_this23.fichasConformidadeService.postMateriais(params));
                        });
                      };

                      _context2.next = 7;
                      return Promise.resolve(promise());

                    case 7:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
                        _this23.loading = false;
                        _this23.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this23.pnotify.success('Material, salvo com sucesso!');

                            _this23.router.navigate(['../'], {
                              relativeTo: _this23.activatedRoute
                            });
                          } else {
                            _this23.pnotify.error();
                          }
                        });
                      }, function (error) {
                        try {
                          _this23.pnotify.error(error.error.message);
                        } catch (error) {
                          _this23.pnotify.error();
                        }
                      });

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getFormMaterial",
          value: function getFormMaterial(params) {
            var _this24 = this;

            this.loading = true;
            this.fichasConformidadeService.getFormMaterial(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this24.loading = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this25 = this;

                var materiais, promise;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context3.next = 3;
                          break;
                        }

                        this.noMateriais = true;
                        return _context3.abrupt("return");

                      case 3:
                        materiais = response['body']['data'];

                        promise = function promise() {
                          return materiais.forEach(function () {
                            return _this25.onAddMaterial();
                          });
                        };

                        _context3.next = 7;
                        return Promise.resolve(promise());

                      case 7:
                        this.form.get('materiais').patchValue(materiais);
                        this.noMateriais = false;

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (error) {
              _this24.pnotify.error('Não foi encontrado nenhum material');

              _this24.noMateriais = true;
            });
          }
        }, {
          key: "getNotasFiscaisMateriais",
          value: function getNotasFiscaisMateriais(params) {
            var _this26 = this;

            this.loading = true;
            this.fichasConformidadeService.getNotasFiscaisMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this26.loading = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this27 = this;

                var materiais, promise;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context4.next = 3;
                          break;
                        }

                        this.noMateriais = true;
                        return _context4.abrupt("return");

                      case 3:
                        materiais = response['body']['data'];

                        promise = function promise() {
                          return materiais.forEach(function (material, index) {
                            _this27.onAddMaterial();

                            materiais[index]['TT_MATE_ORIG'] = materiais[index]['TT_MATE'];
                            materiais[index]['TT_MATE'] = null;
                          });
                        };

                        _context4.next = 7;
                        return Promise.resolve(promise());

                      case 7:
                        this.form.get('materiais').patchValue(materiais);
                        this.noMateriais = false;

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }, function (error) {
              _this26.pnotify.error('Não foi encontrado nenhum material');

              _this26.noMateriais = true;
            });
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial() {
            this.formMateriais.push(this.formBuilder.group({
              ID_LOGI_ENMA_FHNC_MATE: [null],
              ID_LOGI_ENMA_NOFI_MATE: [null],
              UUID_MATE: [null],
              ID_MATE: [null],
              IN_MATE: [true],
              NR_NOTA_FISC: [{
                value: null,
                disabled: true
              }],
              NM_CLAS: [{
                value: null,
                disabled: true
              }],
              DS_UNID_MEDI: ['TON', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
              TT_MATE_ORIG: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].min(0.01)]],
              TT_MATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].min(0.01)]],
              DS_LOTE: [null],
              NM_MATE: [{
                value: null,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]
            }));
          }
        }, {
          key: "onCanAddMaterial",
          value: function onCanAddMaterial(index) {
            var fg = this.form.get('materiais');

            if (fg.controls[index].get('NR_NOTA_FISC').value) {
              this.formMateriais.controls[index].get(['DS_LOTE']).disable();
              this.formMateriais.controls[index].get(['DS_UNID_MEDI']).disable();
              this.formMateriais.controls[index].get(['TT_MATE_ORIG']).disable();
              return false;
            }

            return fg.controls[index].get('IN_MATE').value;
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index) {
            var _this28 = this;

            if (this.formMateriais.length === 1) {
              this.pnotify.notice('Informe ao menos um material.');
              return;
            }

            var materiais = this.formMateriais.at(index).value;
            materiais = Object.assign(Object.assign({}, materiais), {
              'IN_STAT': '0'
            });

            if (!materiais['ID_LOGI_ENMA_FHNC_MATE']) {
              this.formMateriais.removeAt(index);
              return;
            }

            this.loadingNavBar = true;
            this.fichasConformidadeService.postMateriais(materiais).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () {
              _this28.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this28.formMateriais.removeAt(index);

                _this28.pnotify.success();
              } else {
                _this28.pnotify.error();
              }
            }, function (error) {
              _this28.pnotify.error();
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
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
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.formNotasFiscais.get('PAGI').setValue(event.page);
            this.getNotasMateriais();
          }
        }, {
          key: "onPageChangedMaterial",
          value: function onPageChangedMaterial(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "comparaQuantidade",
          value: function comparaQuantidade(index) {
            var _qtTotal = this.formMateriais.controls[index].get(['TT_MATE_ORIG']).value;
            var _qtNC = this.formMateriais.controls[index].get(['TT_MATE']).value;

            if (!_qtTotal || !_qtNC) {
              return false;
            }

            if (parseFloat(_qtTotal) < parseFloat(_qtNC)) {
              return true;
            }

            return false;
          }
        }, {
          key: "formMateriais",
          get: function get() {
            return this.form.get('materiais');
          }
        }]);

        return LogisticaEntradaMateriaisFichasConformidadeCadastroComponent;
      }();

      LogisticaEntradaMateriaisFichasConformidadeCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]
        }, {
          type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }, {
          type: _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisService"]
        }, {
          type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisFichaConformidadeService"]
        }, {
          type: _notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisNotasFiscaisService"]
        }, {
          type: _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }];
      };

      LogisticaEntradaMateriaisFichasConformidadeCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisService"], _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisFichaConformidadeService"], _notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisNotasFiscaisService"], _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]])], LogisticaEntradaMateriaisFichasConformidadeCadastroComponent);
      /***/
    },

    /***/
    "AVAL":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/services/tipos-conformidade.service.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisTiposConformidadeService */

    /***/
    function AVAL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisTiposConformidadeService", function () {
        return LogisticaEntradaMateriaisTiposConformidadeService;
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


      var LogisticaEntradaMateriaisTiposConformidadeService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisTiposConformidadeService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisTiposConformidadeService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntradaMateriaisTiposConformidadeService, [{
          key: "getTiposConformidade",
          value: function getTiposConformidade(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/tipo"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postTiposConformidade",
          value: function postTiposConformidade(params) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/tipo"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(params) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/tipo/responsaveis"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios(params) {
            return this.http.get("".concat(this.API, "/core/mtcorp/usuarios"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/tipo/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisTiposConformidadeService;
      }();

      LogisticaEntradaMateriaisTiposConformidadeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisTiposConformidadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisTiposConformidadeService);
      /***/
    },

    /***/
    "Anp4":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/consulta-recebimento-bobinas/consulta-recebimento-bobinas.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: SulFluminenseConsultaRecebimentoBobinasComponent */

    /***/
    function Anp4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseConsultaRecebimentoBobinasComponent", function () {
        return SulFluminenseConsultaRecebimentoBobinasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_consulta_recebimento_bobinas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./consulta-recebimento-bobinas.component.html */
      "1SJI");
      /* harmony import */


      var _consulta_recebimento_bobinas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./consulta-recebimento-bobinas.component.scss */
      "AphN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SulFluminenseConsultaRecebimentoBobinasComponent = /*#__PURE__*/function () {
        function SulFluminenseConsultaRecebimentoBobinasComponent(activatedRoute) {
          _classCallCheck(this, SulFluminenseConsultaRecebimentoBobinasComponent);

          this.activatedRoute = activatedRoute;
          this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_MTCORP;
          this.loading = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = btoa(this.currentUser['info']['matricula']);
          this.idUsuario = btoa(this.currentUser['info']['id']);
          this.url = "".concat(this.URL_MTCORP, "/MTCorp/app/modulos/abastecimento/consultaMateriaisRecebimento.php?m=").concat(this.matricula, "&u=").concat(this.idUsuario);
        }

        _createClass(SulFluminenseConsultaRecebimentoBobinasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onBreadCumbTree();
          }
        }, {
          key: "onBreadCumbTree",
          value: function onBreadCumbTree() {
            var _this29 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this29.idSubModulo = params['idSubModulo'];
              _this29.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
              }, {
                descricao: 'Entrada de materiais',
                routerLink: "/sul-fluminense/entrada-materiais/".concat(_this29.idSubModulo)
              }, {
                descricao: 'Consulta de recebimento de bobinas'
              }];
            });
          }
        }]);

        return SulFluminenseConsultaRecebimentoBobinasComponent;
      }();

      SulFluminenseConsultaRecebimentoBobinasComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SulFluminenseConsultaRecebimentoBobinasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'consulta-recebimento-bobinas',
        template: _raw_loader_consulta_recebimento_bobinas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consulta_recebimento_bobinas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SulFluminenseConsultaRecebimentoBobinasComponent);
      /***/
    },

    /***/
    "AphN":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/consulta-recebimento-bobinas/consulta-recebimento-bobinas.component.scss ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AphN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZW50cmFkYS1tYXRlcmlhaXMvY29uc3VsdGEtcmVjZWJpbWVudG8tYm9iaW5hcy9jb25zdWx0YS1yZWNlYmltZW50by1ib2JpbmFzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "BVpy":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/motivos/cadastro/cadastro.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BVpy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"MOTIVOS\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postMotivos()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Dados do Motivo</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"DS_LOGI_ENTR_MATE_MOTI\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_LOGI_ENTR_MATE_MOTI\"\r\n              formControlName=\"DS_LOGI_ENTR_MATE_MOTI\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('DS_LOGI_ENTR_MATE_MOTI') + ' ' + onFieldRequired('DS_LOGI_ENTR_MATE_MOTI')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_LOGI_ENTR_MATE_MOTI')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3 pl-0\">\r\n            <label for=\"DS_LOGI_ENTR_MATE_CATE_MOTI\">Categoria</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"DS_LOGI_ENTR_MATE_CATE_MOTI\"\r\n              formControlName=\"DS_LOGI_ENTR_MATE_CATE_MOTI\"\r\n              [ngClass]=\"onFieldRequired('DS_LOGI_ENTR_MATE_CATE_MOTI')\">\r\n              <option value=\"aprovacao\">Aprovação</option>\r\n              <option value=\"solicitacao\">Solicitação</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_LOGI_ENTR_MATE_CATE_MOTI')\" message=\"Categoria é obrigatório.\"></invalid-form-control>\r\n          </div> \r\n          <div class=\"form-group col-md-3 pl-0\">\r\n            <label for=\"IN_STAT\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_STAT\"\r\n              formControlName=\"IN_STAT\"\r\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"2\">Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div> \r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>";
      /***/
    },

    /***/
    "CM2z":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/tipos-conformidade/lista/lista.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CM2z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Tipos de Não Conformidade\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"ID_LOGI_ENMA_FHNC_TIPO\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n                formControlName=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"NM_TIPO\">Tipo de Não Conformidade</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_TIPO\"\r\n                formControlName=\"NM_TIPO\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('ID_LOGI_ENMA_FHNC_TIPO')\">\r\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_FHNC_TIPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_TIPO')\">\r\n                <thead-sorter value=\"Tipo de não conformidade\" [active]=\"ORDE_BY == 'NM_TIPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let tipo of tiposConformidade\"  [class.table-active]=\"tipo?.ID_LOGI_ENMA_FHNC_TIPO == motivoSelecionado?.ID_LOGI_ENMA_FHNC_TIPO && showDetailPanel\">\r\n              <td [ngClass]=\"tipo.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{tipo.ID_LOGI_ENMA_FHNC_TIPO }}\r\n              </td>\r\n              <td>{{ tipo.NM_TIPO | uppercase}}</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" [tooltip]=\"tipo.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(tipo)\">\r\n                    <i [ngClass]=\"tipo.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', tipo.ID_LOGI_ENMA_FHNC_TIPO]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(tipo)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Detalhes\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Tipo de não conformidade</label>\r\n            <div *ngIf=\"tipoSelecionado?.NM_TIPO == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"tipoSelecionado?.NM_TIPO != null\">{{ tipoSelecionado.NM_TIPO | uppercase}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Observação:</label>\r\n            <div *ngIf=\"tipoSelecionado?.DS_OBSE == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"tipoSelecionado?.DS_OBSE != null\">{{ tipoSelecionado?.DS_OBSE }}</div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div [hidden]=\"!loadingResponsaveis\" class=\"text-muted\">\r\n          <p><strong>Buscando os Responsáveis...</strong></p>\r\n        </div>\r\n        <div *ngIf=\"!loadingResponsaveis && noResponsaveis\" class=\"text-muted\">\r\n          <p><strong>Nenhum Responsável vinculado!</strong></p>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"!loadingResponsaveis && !noResponsaveis\">\r\n          <label>Responsáveis</label>\r\n          <custom-table class=\"text-center\" >\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th>Matricula</th>\r\n                <th>Nome</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of responsaveis\">\r\n                <td>{{item.NR_MATR_RESP}}</td>\r\n                <td>{{item.NM_RESP}}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Usuário Responsável Pelo Cadastro</label>\r\n            <div *ngIf=\"tipoSelecionado?.NR_MATR == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"tipoSelecionado?.NR_MATR != null\">{{tipoSelecionado?.NR_MATR}} - {{ tipoSelecionado?.NM_USUA }}</div>\r\n          </div>\r\n          <div class=\"form-group col\">\r\n            <label>Data do Cadastro</label>\r\n            <div *ngIf=\"tipoSelecionado?.DT_INCL == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"tipoSelecionado?.DT_INCL != null\">{{ tipoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "CUr3":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/painel-bobinas-qualidade/painel-bobinas-qualidade.component.scss ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CUr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZW50cmFkYS1tYXRlcmlhaXMvcGFpbmVsLWJvYmluYXMtcXVhbGlkYWRlL3BhaW5lbC1ib2JpbmFzLXF1YWxpZGFkZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DU17":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/motivos/cadastro/cadastro.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisMotivosCadastroComponent */

    /***/
    function DU17(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisMotivosCadastroComponent", function () {
        return LogisticaEntradaMateriaisMotivosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "BVpy");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "QGXw");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_motivos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/motivos.service */
      "4vrJ"); //Services
      //Bootstrap
      //Angular


      var LogisticaEntradaMateriaisMotivosCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisMotivosCadastroComponent(formBuilder, pnotify, activatedRoute, localeService, motivosService, titleService, atividadesService) {
          _classCallCheck(this, LogisticaEntradaMateriaisMotivosCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.motivosService = motivosService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.breadCrumbTree = [];
          this.formData = []; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false; //Interfaces

          this.motivos = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_6__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisMotivosCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
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
            if (_params.hasOwnProperty('id')) return this.getMotivos({
              ID_LOGI_ENTR_MATE_MOTI: _params['id']
            });
          }
        }, {
          key: "getMotivos",
          value: function getMotivos(params) {
            var _this30 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.motivosService.getMotivos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this30.loading = false;
              _this30.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this30.motivos = response.body['data'];
                _this30.noResult = false;
              } else {
                _this30.noResult = true;
                _this30.motivos = [];
              }
            }, function (error) {
              _this30.pnotify.error();

              _this30.noResult = true;
            });
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Motivos',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENTR_MATE_MOTI: [null],
              DS_LOGI_ENTR_MATE_MOTI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
              DS_LOGI_ENTR_MATE_CATE_MOTI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
              IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
              DS_OBSE: [null],
              MATR_USUA_CADA: [null],
              DS_USUA_CADA: [null],
              DT_INCL: [null]
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postMotivos",
          value: function postMotivos() {
            var _this31 = this;

            this.loadingNavBar = true;
            this.motivosService.postMotivos(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this31.loading = false;
              _this31.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this31.pnotify.success();
              } else {
                _this31.pnotify.error();
              }
            }, function (error) {
              try {
                _this31.pnotify.error(error.error.message);
              } catch (error) {
                _this31.pnotify.error();
              }
            });
          }
        }]);

        return LogisticaEntradaMateriaisMotivosCadastroComponent;
      }();

      LogisticaEntradaMateriaisMotivosCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]
        }];
      };

      LogisticaEntradaMateriaisMotivosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]])], LogisticaEntradaMateriaisMotivosCadastroComponent);
      /***/
    },

    /***/
    "H1OO":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/ocorrencias/ocorrencias.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent */

    /***/
    function H1OO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent", function () {
        return LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ocorrencias.component.html */
      "PMzd");
      /* harmony import */


      var _ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ocorrencias.component.scss */
      "T5cb");
      /* harmony import */


      var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/ficha-conformidade.service */
      "blLz");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _parecer_services_parecer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../parecer/services/parecer.service */
      "M5hd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Bootstrap
      //rxjs
      //interfaces


      var LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent(formBuilder, pnotify, modalService, localeService, parecerService, confirmModalService, fichasConformidadeService, atividadesService) {
          _classCallCheck(this, LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.modalService = modalService;
          this.localeService = localeService;
          this.parecerService = parecerService;
          this.confirmModalService = confirmModalService;
          this.fichasConformidadeService = fichasConformidadeService;
          this.atividadesService = atividadesService;
          this.fecharModal = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
          this.breadCrumbTree = [];
          this.formData = [];
          this.usuarios = [];
          this.noUsuarios = true;
          this.parecer = [];
          this.noResponsavel = [];
          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          /* Pagination */
          //Interfaces

          this.documentos = [];
          this.ocorrencias = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_9__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setFormBuilder();
            this.getParecer();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalRef != undefined) {
              this.modalRef.hide();
            }
          } // getOcorrencias(params?: Partial<ILogisticaEntradaMateriaisOcorrencias>) {
          //   this.loading = true;
          //   const _params = params ?? {};
          //   this.fichasConformidadeService
          //     .getOcorrencias(_params)
          //     .pipe(
          //       finalize(() => {
          //         this.loading = false;
          //         this.loadingNavBar = false;
          //       })
          //     )
          //     .subscribe(
          //       (response) => {
          //         if (response.status !== 200) {
          //           this.noResult = true;
          //           this.ocorrencias = [];
          //           return;
          //         }
          //         const _ocorrencia = response.body['data'][0];
          //         this.form.patchValue(_ocorrencia) 
          //         this.noResult = false;
          //       },
          //       (error) => {
          //         this.pnotify.error();
          //         this.noResult = true;
          //       }
          //     );
          // }

        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            var _this32 = this;

            this.loadingNavBar = true;
            this.fichasConformidadeService.getResponsaveis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this32.loadingNavBar = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this33 = this;

                var responsaveis, promise;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context5.next = 2;
                          break;
                        }

                        return _context5.abrupt("return");

                      case 2:
                        responsaveis = response['body']['data'];

                        promise = function promise() {
                          return responsaveis.forEach(function () {
                            return _this33.onAddResponsavel();
                          });
                        };

                        _context5.next = 6;
                        return Promise.resolve(promise());

                      case 6:
                        this.form.get('responsaveis').patchValue(responsaveis);

                      case 7:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            }, function (error) {
              _this32.pnotify.error('Não foi encontrado nenhum material');
            });
          }
        }, {
          key: "getParecer",
          value: function getParecer() {
            var _this34 = this;

            this.loadingParecer = true;
            this.parecerService.getParecer({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this34.loadingParecer = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this34.parecer = response.body['data'];
              } else {
                _this34.pnotify.notice('Nenhum registro encontrado!');
              }
            });
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.form == undefined) {
              this.form = this.formBuilder.group({
                ID_LOGI_ENMA_FHNC: [null],
                ID_LOGI_ENMA_FHNC_OCPR: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
                ID_LOGI_ENMA_FHNC_OCOR: [null],
                IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
                IN_CONC: [false],
                DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
                NR_MATR: [null],
                NM_USUA: [null],
                DT_INCL: [null],
                responsaveis: this.formBuilder.array([])
              });
            }

            if (this.formUsuarios == undefined) {
              this.formUsuarios = this.formBuilder.group({
                buscarPor: ['nome'],
                pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
                matricula: [null],
                nome: [null]
              });
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // onCanResponsavel():boolean{
          //   const id = this.form.get('ID_LOGI_ENMA_FHNC_OCPR').value;
          //   const parecer = this.parecer.filter((el) => el.ID_LOGI_ENMA_FHNC_OCPR == id); 
          //   if(id == null){
          //     return false;
          //   }
          //   if(parecer.length > 1){
          //     return false;
          //   }
          //   if(parecer[0]['IN_CONC'] == 1){
          //     return true;
          //   }
          //   return false
          // }

        }, {
          key: "getUsuarios",
          value: function getUsuarios(params) {
            var _this35 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.situacao = '1';
            _params.qtItensPagina = 100;
            var _obj = this.formUsuarios.value;
            this.loadingUsuarios = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.fichasConformidadeService.getUsuarios(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this35.loadingUsuarios = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this35.usuarios = response.body['usuarios'];
                _this35.totalItems = response.body['usuarios'].length;
                _this35.noUsuarios = false;
              } else {
                _this35.pnotify.notice('Nenhum registro encontrado!');

                _this35.usuarios = [];
                _this35.noUsuarios = true;
              }
            }, function (error) {
              _this35.pnotify.error();

              _this35.usuarios = [];
            });
          }
        }, {
          key: "setUsuarios",
          value: function setUsuarios(usuario) {
            var fg = this.form.get('responsaveis');
            fg.controls[this.index].get('ID_LOGI_ENMA_FHNC_OCOR').patchValue(usuario.matricula);
            fg.controls[this.index].get('NR_MATR_RESP').patchValue(usuario.matricula);
            fg.controls[this.index].get('ID_RESP').patchValue(usuario.id);
            fg.controls[this.index].get('NM_RESP').patchValue(usuario.nome);
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this36 = this;

              var request, responsaveis, promise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      request = [];
                      responsaveis = this.formResponsaveis.getRawValue();

                      if (responsaveis) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 4:
                      promise = function promise() {
                        responsaveis.forEach(function (responsavel) {
                          var params = Object.assign(Object.assign({}, responsavel), {
                            'ID_LOGI_ENMA_FHNC_OCOR': id
                          });
                          request.push(_this36.fichasConformidadeService.postResponsaveis(params));
                        });
                      };

                      _context6.next = 7;
                      return Promise.resolve(promise());

                    case 7:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
                        _this36.loading = false;
                        _this36.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        _this36.pnotify.success('Responsáveis cadastrados com sucesso');
                      }, function (error) {
                        try {
                          _this36.pnotify.error(error.error.message);
                        } catch (error) {
                          _this36.pnotify.error();
                        }
                      });

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onDeleteResponsavel",
          value: function onDeleteResponsavel(index) {
            var _this37 = this;

            if (this.formResponsaveis.length === 1) {
              this.pnotify.notice('Informe ao menos um responsável.');
              return;
            }

            var id = this.form.get('ID_LOGI_ENMA_FHNC');
            var responsaveis = this.formResponsaveis.at(index).value;
            responsaveis = Object.assign(Object.assign({}, responsaveis), {
              'IN_STAT': '0'
            });

            if (!responsaveis['ID_RESP']) {
              this.formResponsaveis.removeAt(index);
              return;
            }

            this.loadingNavBar = true;
            this.fichasConformidadeService.postResponsaveis(responsaveis).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this37.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this37.formResponsaveis.removeAt(index);

                _this37.pnotify.success();
              } else {
                _this37.pnotify.error();
              }
            }, function (error) {
              _this37.pnotify.error();
            });
          } // disabedSave():boolean {
          //   if(this.onCanResponsavel()){
          //     return false
          //   }
          //   const responsaveis = this.form.get('responsaveis').value;
          //   if(responsaveis.length == 0){
          //     return true
          //   }
          //   if(!responsaveis[0]['ID_RESP']){
          //     return true
          //   }
          //   return false
          // }

        }, {
          key: "postOcorrencias",
          value: function postOcorrencias() {
            var _this38 = this;

            this.loadingNavBar = true;
            var params = JSON.parse(JSON.stringify(this.form.value));
            delete params['responsaveis'];
            this.fichasConformidadeService.postOcorrencias(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this38.loading = false;
              _this38.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var idOcorrencia = response.body['data'];

                _this38.form.get('ID_LOGI_ENMA_FHNC_OCOR').setValue(idOcorrencia);

                _this38.postResponsaveis(idOcorrencia);

                _this38.postDocumentosOcorrencia(idOcorrencia);

                _this38.fecharModal.emit(true);

                _this38.pnotify.success();
              } else {
                _this38.pnotify.error();
              }
            }, function (error) {
              try {
                _this38.pnotify.error(error.error.message);
              } catch (error) {
                _this38.pnotify.error();
              }
            });
          }
        }, {
          key: "onAddResponsavel",
          value: function onAddResponsavel() {
            this.formResponsaveis.push(this.formBuilder.group({
              ID_LOGI_ENMA_FHNC_OCOR: [null],
              ID_LOGI_ENMA_FHNC: [null],
              ID_RESP: [null],
              NR_MATR_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              NM_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]]
            }));
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
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
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "postDocumentosOcorrencia",
          value: function postDocumentosOcorrencia(fichaId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this39 = this;

              var requests, promise;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      requests = [];

                      if (!(this.formData.length === 0)) {
                        _context7.next = 3;
                        break;
                      }

                      return _context7.abrupt("return", requests);

                    case 3:
                      promise = function promise() {
                        _this39.formData.forEach(function (element) {
                          requests.push(_this39.fichasConformidadeService.postDocumentoOcorrencia(element, fichaId));
                        });
                      };

                      Promise.resolve(promise());
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(requests).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this39.pnotify.success();
                          } else {
                            _this39.pnotify.error();
                          }
                        });
                      }, function (error) {
                        _this39.pnotify.error();
                      });
                      return _context7.abrupt("return", requests);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "putDocumentoOcorrencia",
          value: function putDocumentoOcorrencia(documento) {
            var _this40 = this;

            var type = 'inactivate',
                title = 'Confirmar inativação',
                message = 'Deseja realmente prosseguir com a inativação do registro?',
                cancelTxt = 'Cancelar',
                okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_13__["EMPTY"];
              _this40.loadingNavBar = true;
              return _this40.fichasConformidadeService.putDocumento(documento);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this40.loadingNavBar = false;
            })).subscribe(function (response) {
              _this40.pnotify.success('Documento atualizado com sucesso');

              _this40.getDocumentosOcorrencia({
                ID_LOGI_ENMA_FHNC_OCOR: _this40.form.get('ID_LOGI_ENMA_FHNC_OCOR').value,
                IN_STAT: '1'
              });
            });
          }
        }, {
          key: "getDocumentosOcorrencia",
          value: function getDocumentosOcorrencia(params) {
            var _this41 = this;

            this.fichasConformidadeService.getDocumentoOcorrencia(params).subscribe(function (response) {
              if (response.status === 200) {
                _this41.documentos = response.body['data'];
              } else {
                _this41.documentos = [];
              }
            }, function (error) {
              _this41.documentos = [];
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(documento, index) {
            if (!documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
              this.formData = this.formData.filter(function (element) {
                return element.get('file')['name'] != documento.NM_DOCU;
              });
            }

            documento.IN_STAT = '0';
            this.documentos.splice(index, 1);

            if (documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
              this.putDocumentoOcorrencia(documento);
            }
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.documentos.push({
              NM_DOCU: files[0]['name']
            });
          }
        }, {
          key: "fichaId",
          set: function set(id) {
            if (!id) return;
            this.setFormBuilder();
            this.form.get('ID_LOGI_ENMA_FHNC').setValue(id);
          }
        }, {
          key: "formResponsaveis",
          get: function get() {
            return this.form.get('responsaveis');
          }
        }]);

        return LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent;
      }();

      LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"]
        }, {
          type: _parecer_services_parecer_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisParecerService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"]
        }, {
          type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichaConformidadeService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }];
      };

      LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent.propDecorators = {
        fichaId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        fecharModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"]
        }]
      };
      LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-entrada-materiais-ficha-conformidade-ocorrencias',
        template: _raw_loader_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"], _parecer_services_parecer_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisParecerService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"], _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichaConformidadeService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]])], LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent);
      /***/
    },

    /***/
    "I+6W":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais.component.ts ***!
      \************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisComponent */

    /***/
    function I6W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisComponent", function () {
        return LogisticaEntradaMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entrada-materiais.component.html */
      "iJlz");
      /* harmony import */


      var _entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entrada-materiais.component.scss */
      "+/dK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/submodulos.service */
      "KwnO");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/pipes/title-case.pipe */
      "ciPE");

      var LogisticaEntradaMateriaisComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisComponent(activatedRoute, router, subModulosService, atividadesService, pnotifyService, titleCasePipe) {
          _classCallCheck(this, LogisticaEntradaMateriaisComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.subModulosService = subModulosService;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleCasePipe = titleCasePipe;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(LogisticaEntradaMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this42 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this42.registrarAcesso();

              _this42.getSubmodulo(params['idSubModulo']);

              _this42.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getSubmodulo",
          value: function getSubmodulo(idSubModulo) {
            var _this43 = this;

            this.subModulosService.getSubModulo(idSubModulo).subscribe(function (response) {
              if (response['status'] === 200) {
                _this43.appName = _this43.titleCasePipe.transform(response['body']['nome']);

                _this43.setBreadCrumb(_this43.appName);
              }
            });
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this44 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this44.atividades = response['result'];
                _this44.loaderFullScreen = false;
              } else {
                _this44.handleAtividadesInternasError();
              }
            }, function (error) {
              _this44.handleAtividadesInternasError();
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(nomeSubModulo) {
            this.breadCrumbTree = [{
              descricao: 'Logistica',
              routerLink: '/logistica/home'
            }, {
              descricao: nomeSubModulo
            }];
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.loaderFullScreen = false;
          }
        }]);

        return LogisticaEntradaMateriaisComponent;
      }();

      LogisticaEntradaMateriaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]
        }];
      };

      LogisticaEntradaMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais',
        template: _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]])], LogisticaEntradaMateriaisComponent);
      /***/
    },

    /***/
    "IuEw":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/status-recebimento/cadastro/cadastro.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IuEw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"STATUS DE RECEBIMENTO\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postStatusRecebimento()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Dados do Status de Recebimento</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"NM_STAT\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_STAT\"\r\n              formControlName=\"NM_STAT\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_STAT') + ' ' + onFieldRequired('NM_STAT')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_STAT')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>";
      /***/
    },

    /***/
    "LEko":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/status-recebimento/lista/lista.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LEko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"STATUS DE RECEBIMENTO\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"ID_LOGI_ENMA_NOFI_STAT\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n                formControlName=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n                placeholder=\"Digite...\"\r\n                (keydown.enter)=\"onFilter()\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"NM_STAT\">Descrição</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_STAT\"\r\n                formControlName=\"NM_STAT\"\r\n                placeholder=\"Digite...\"\r\n                (keydown.enter)=\"onFilter()\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"tipos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"tipo\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"cod\"\r\n                id=\"tipo\"\r\n                (change)=\"onFilter()\"\r\n                formControlName=\"IN_STAT\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Selecione...\"\r\n              >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-5': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('ID_LOGI_ENMA_NOFI_STAT')\">\r\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_NOFI_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_STAT')\">\r\n                <thead-sorter value=\"Descrição\" [active]=\"ORDE_BY == 'NM_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let status of statusRecebimento\"  [class.table-active]=\"status?.ID_LOGI_ENMA_NOFI_STAT == statusSelecionado?.ID_LOGI_ENMA_NOFI_STAT && showDetailPanel\">\r\n              <td  [ngClass]=\"status.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n                {{status.ID_LOGI_ENMA_NOFI_STAT }}\r\n              </td>\r\n              <td >{{ status.NM_STAT | uppercase}}</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" [tooltip]=\"status.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(status)\">\r\n                    <i [ngClass]=\"status.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', status.ID_LOGI_ENMA_NOFI_STAT]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(status)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Histórico de alteração\">\r\n        <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n              <th scope=\"col\">Ação</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let historico of historicos; let i = index\">\r\n              <td>{{ historico?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td>({{historico?.NR_MATR}})&nbsp;{{ historico?.NM_USUA | uppercase }}</td>\r\n              <td>{{ getDescricaoAtualizaco(historico, i) }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "M5hd":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/parecer/services/parecer.service.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisParecerService */

    /***/
    function M5hd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisParecerService", function () {
        return LogisticaEntradaMateriaisParecerService;
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


      var LogisticaEntradaMateriaisParecerService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisParecerService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisParecerService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntradaMateriaisParecerService, [{
          key: "getParecer",
          value: function getParecer(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/parecer"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postParecer",
          value: function postParecer(parecer) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/parecer"), parecer, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisParecerService;
      }();

      LogisticaEntradaMateriaisParecerService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisParecerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisParecerService);
      /***/
    },

    /***/
    "N8Iq":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/lista/lista.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N8Iq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Fichas de Não Conformidade\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"getRelatorio()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"ID_LOGI_ENMA_FHNC\">ID FNC</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_ENMA_FHNC\"\r\n                formControlName=\"ID_LOGI_ENMA_FHNC\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_INIC\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_INIC\"\r\n                type=\"text\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_INIC\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_FINA\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_FINA\"\r\n                type=\"text\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_FINA\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"ID_LOGI_ENMA_FHNC_TIPO\">Tipo de Não Conformidade</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tiposConformidade\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingTiposConformidade\"\r\n                labelForId=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n                bindLabel=\"NM_TIPO\"\r\n                bindValue=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n                id=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n                formControlName=\"ID_LOGI_ENMA_FHNC_TIPO\"\r\n              >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"ficha\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"ficha\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"NR_NOTA_FISC\">NOTA FISCAL</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NR_NOTA_FISC\"\r\n                formControlName=\"NR_NOTA_FISC\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DS_LOTE\">LOTE</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"DS_LOTE\"\r\n                formControlName=\"DS_LOTE\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-6 pl-0\">\r\n              <label for=\"NM_MATE\">Material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_MATE\"\r\n                formControlName=\"NM_MATE\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4 pl-0\">\r\n              <label for=\"IN_CONC\">STATUS DA OCORRÊNCIA</label>\r\n              <ng-select\r\n              [searchable]=\"false\"\r\n              [clearable]=\"false\"\r\n              [items]=\"status\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"ficha\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"status\"\r\n              formControlName=\"IN_CONC\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-6 pl-0\">\r\n              <label for=\"NM_FORN\">Fornecedor</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_FORN\"\r\n                formControlName=\"NM_FORN\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"p-0 col-md-12\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult || loading\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('ID_LOGI_ENMA_FHNC')\">\r\n                <thead-sorter value=\"ID FNC\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_FHNC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('DT_INCL')\">\r\n                <thead-sorter value=\"DATA DE ABERTURA DA FNC\" [active]=\"ORDE_BY == 'DT_INCL'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_TIPO')\">\r\n                <thead-sorter value=\"TIPO DE NÃO CONFORMIDADE\" [active]=\"ORDE_BY == 'NM_TIPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('IN_CONC')\">\r\n                <thead-sorter value=\"STATUS DA OCORRÊNCIA\" [active]=\"ORDE_BY == 'IN_CONC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" style=\"width:120px\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let ficha of fichasConformidade\"  [class.table-active]=\"ficha?.ID_LOGI_ENMA_FHNC == motivoSelecionado?.ID_LOGI_ENMA_FHNC && showDetailPanel\">\r\n              <td [ngClass]=\"ficha.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{ficha.ID_LOGI_ENMA_FHNC }}\r\n              </td>\r\n              <td>{{ ficha.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</td>\r\n              <td>{{ ficha.NM_TIPO | uppercase}}</td>\r\n              <td *ngIf=\"ficha.IN_CONC == 1\">FINALIZADA</td>\r\n              <td *ngIf=\"ficha.IN_CONC != 1\">EM ANDAMENTO</td>\r\n              <td class=\"align-middle\">\r\n                <span class=\"mr-3\" [tooltip]=\"ficha.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(ficha)\">\r\n                    <i [ngClass]=\"ficha.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\"  placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\"  [disabled]=\"ficha.IN_RESP == 0 || ficha.IN_CONC == 1\" [routerLink]=\"['./../', ficha.ID_LOGI_ENMA_FHNC]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span   tooltip=\"Detalhe da Ficha\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\">\r\n                    <i class=\"fas fa-search\" (click)=\"openModal(detalhesFicha, ficha)\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #detalhesFicha >\r\n    <div class=\"modal-header\" [hidden]=\"hiddenModal\">\r\n      <h4 class=\"modal-title pull-left\">Detalhes da FNC  -  ID {{fichaSelecionada?.ID_LOGI_ENMA_FHNC}}</h4>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon-sm mx-3\"\r\n          tooltip=\"Download\"\r\n          container=\"body\"\r\n          (click)=\"onDownload(fichaSelecionada)\"\r\n          [disabled] = \"loadingMateriais\"\r\n        >\r\n          <i class=\"far fa-save\"></i>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon-sm mr-3\"\r\n          tooltip=\"Imprimir\"\r\n          container=\"body\"\r\n          [disabled] = \"loadingMateriais\" \r\n          (click)=\"onPrint()\"\r\n        >\r\n          <i class=\"fas fa-print\"></i>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon-sm\"\r\n          tooltip=\"Fechar\"\r\n          container=\"body\"\r\n          (click)=\"hideModal()\"\r\n        >\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" [hidden]=\"hiddenModal\" id=\"ficha-pdf\" >\r\n      <tabset>\r\n        <tab heading=\"Dados cadastrais\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n            <div >\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-6\">\r\n                  <label>ID FNC</label>\r\n                  <div *ngIf=\"fichaSelecionada?.ID_LOGI_ENMA_FHNC == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"fichaSelecionada?.ID_LOGI_ENMA_FHNC != null\">{{fichaSelecionada?.ID_LOGI_ENMA_FHNC}}</div>\r\n                </div>\r\n                <div class=\"form-group col-lg-6\">\r\n                  <label>Tipo de Não Conformidade</label>\r\n                  <div *ngIf=\"fichaSelecionada?.NM_TIPO == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"fichaSelecionada?.NM_TIPO != null\">{{ fichaSelecionada?.NM_TIPO}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-12\">\r\n                  <label>Observação</label>\r\n                  <div *ngIf=\"fichaSelecionada?.DS_OBSE == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"fichaSelecionada?.DS_OBSE != null\">{{ fichaSelecionada?.DS_OBSE }}</div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-12\">\r\n                  <label>Materiais</label>\r\n                </div>\r\n              </div>\r\n              <div [hidden]=\"!loadingMateriais\" class=\"col-lg-12 text-muted \">\r\n                <p><strong>Buscando os materiais da ficha de não conformidade...</strong></p>\r\n              </div>\r\n              <custom-table class=\"text-center\" *ngIf=\"!loadingMateriais && !noMateriais\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th>ID </th>\r\n                    <th>Nota Fiscal</th>\r\n                    <th>Classe</th>\r\n                    <th>Lote</th>\r\n                    <th>Material</th>\r\n                    <th>Un. Medida</th>\r\n                    <th>Quantidade Total</th>\r\n                    <th>Quantidade NC</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let item of materiais\">\r\n                    <td>{{item.ID_MATE}}</td>\r\n                    <td *ngIf=\"item.NR_NOTA_FISC != null\">{{item.NR_NOTA_FISC}}</td>\r\n                    <td *ngIf=\"item.NR_NOTA_FISC == null\">NÃO INFORMADO</td>\r\n                    <td>{{item.NM_CLAS}}</td>\r\n                    <td *ngIf=\"item.DS_LOTE != null\" >{{item.DS_LOTE}}</td>\r\n                    <td *ngIf=\"item.DS_LOTE == null\" >NÃO INFORMADO</td>\r\n                    <td>{{item.NM_MATE}}</td>\r\n                    <td>{{item.DS_UNID_MEDI}}</td>\r\n                    <td>{{item.TT_MATE_ORIG | number:'1.3-3' }}</td>\r\n                    <td>{{item.TT_MATE | number:'1.3-3' }}</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <div [hidden]=\"loadingMateriais || !noMateriais\" class=\"text-center d-flex justify-content-center align-items-center pb-3\">\r\n                <empty-result message=\"Nenhum material encontrado\"></empty-result>\r\n              </div>\r\n              <hr>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                  <label>Usuário Responsável Pelo Cadastro</label>\r\n                  <div *ngIf=\"fichaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"fichaSelecionada?.NR_MATR != null\">{{fichaSelecionada?.NR_MATR}} - {{ fichaSelecionada?.NM_USUA }}</div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                  <label>Data do Cadastro</label>\r\n                  <div *ngIf=\"fichaSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"fichaSelecionada?.DT_INCL != null\">{{ fichaSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n                </div>\r\n                <div class=\"form-group col\" *ngIf=\"fichaSelecionada?.DT_ATUA != null\">\r\n                  <label>Data da Atualização</label>\r\n                  <div *ngIf=\"fichaSelecionada?.DT_ATUA == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"fichaSelecionada?.DT_ATUA != null\">{{ fichaSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Ocorrências\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\"  >\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col justify-content-between text-center m-0\" *ngIf=\"fichaSelecionada?.IN_CONC == 1\">\r\n                <blockquote class=\"blockquote text-center m-0\">\r\n                  <p class=\"mb-0 text-success\"> FICHA CONCLUÍDA </p>\r\n                  <footer class=\"blockquote-footer\">Essa ficha foi concluída, sendo assim não é permitido inserir novo parecer!</footer>\r\n                </blockquote>\r\n              </div>\r\n              <div class=\"form-group col-10 mb-0 d-flex justify-content-between\" *ngIf=\"fichaSelecionada?.IN_CONC == 0\">\r\n                <button \r\n                  type=\"button\" \r\n                  class=\"btn btn-default btn-lg m-2 pull-right\"\r\n                  (click)=\"finalizarFicha(fichaSelecionada)\"\r\n                  [disabled]=\"fichaSelecionada?.IN_RESP == 0 || disabledButton == true\"\r\n                >\r\n                <span aria-hidden=\"true\">\r\n                  <i class=\" text-primary fas fa-check\"></i>\r\n                </span>Finalizar Ficha\r\n                </button>\r\n              </div>\r\n              <div class=\"form-group col mb-0 d-flex justify-content-between\" *ngIf=\"fichaSelecionada?.IN_CONC == 0 \">\r\n                <button \r\n                  type=\"button\" \r\n                  class=\"btn btn-default btn-lg m-2 pull-right\"\r\n                  (click)=\"openModalOcorrencias(formOcorrencias)\"\r\n                  [disabled]=\"fichaSelecionada?.IN_RESP == 0\"\r\n                >\r\n                <span aria-hidden=\"true\">\r\n                  <i class=\" text-success fas fa-plus\"></i>\r\n                </span>Adicionar Parecer\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <div *ngIf=\"loadingDocumentosOcorrencias || loadingResponsaveisOcorrencias\" class=\"col-lg-12 text-muted \">\r\n              <p><strong>Buscando as ocorrências da ficha de não conformidade...</strong></p>\r\n            </div>\r\n            <div class=\"scroll-ocorrencias\" *ngIf=\"!noOcorrencias\">\r\n              <div class=\"col-md-12 mx-2 pb-3 \" data-spy=\"scroll\" *ngFor=\"let ocorrencia of ocorrencias\" >\r\n                <div class=\"card mr-3\" *ngIf=\"!loadingDocumentosOcorrencias && !loadingResponsaveisOcorrencias\">\r\n                  <div class=\"card-body p-2\">\r\n                    <h5 class=\"card-title mb-1\" >{{ocorrencia.NR_SQNC}} - {{ocorrencia.NM_PARE}}</h5>\r\n                    <p class=\"card-text m-2\"><strong> Código: </strong> {{ocorrencia.ID_LOGI_ENMA_FHNC_OCOR}}</p>\r\n                    <p class=\"card-text m-2\"><strong> Descrição: </strong> {{ocorrencia.DS_OBSE}}</p>\r\n                    <ul class=\"pl-0\">\r\n                      <li class=\"d-flex\" *ngFor=\"let item of documentosOcorrencia[ocorrencia.ID_LOGI_ENMA_FHNC_OCOR];\">\r\n                        <div class=\"d-flex\">\r\n                          <div>\r\n                            <strong class=\"ml-2\">{{ item.NM_DOCU }}</strong>\r\n                          </div>\r\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'DOCUMENTO'\">\r\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\r\n                              <i class=\"fas fa-download\"></i>\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'IMAGEM'\">\r\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\r\n                              <i class=\"fas fa-eye\"></i>\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                    <div>\r\n                      <ul class=\"pl-0 m-0\">\r\n                        <li class=\"d-flex\" *ngFor=\"let item of responsaveisOcorrencia[ocorrencia.ID_LOGI_ENMA_FHNC_OCOR];\">\r\n                          <div class=\"d-flex\">\r\n                            <div>\r\n                              <p class=\"card-text ml-2\">{{ocorrencia.NM_USUA | name }} atribuiu a ficha de não conformidade para: <strong>{{ item.NR_MATR_RESP }} - {{ item.NM_RESP }}</strong></p>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <p class=\"text-right m-0\"><small class=\"text-muted\"><cite>{{ocorrencia.NR_MATR}} - {{ocorrencia.NM_USUA | uppercase}}</cite></small></p>\r\n                    <p class=\"text-right m-0\"><small class=\"text-muted\">{{ocorrencia.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</small></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div  *ngIf=\"noOcorrencias && !loadingOcorrencias\" class=\"d-flex justify-content-center mb-3\">\r\n              <empty-result message=\"Nenhuma ocorrência encontrada\"></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Documentos\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n            <div *ngIf=\"totalImagens != 0\">\r\n              <blockquote class=\"blockquote\">\r\n                <p class=\"mb-0\">Imagens</p>\r\n              </blockquote>\r\n              <div class=\"row ScrollImagem\" >\r\n                <div class=\"col-md-4 mb-4\" *ngFor=\"let imagem of imagens\">\r\n                  <div class=\"card\" >\r\n                    <img class=\"card-img-responsive\" src=\"{{imagem.LINK}}\" style=\"height: 150px;\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-text\"><strong>{{imagem.NM_DOCU}}</strong></p>\r\n                      <p class=\"card-text mb-2\">{{imagem.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</p>\r\n                      <p class=\"card-text mb-2\">{{imagem.NM_USUA}}</p>\r\n                      <p class=\"card-text-right\">\r\n                        <a\r\n                          [href]=\"imagem.LINK\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm text-black\"\r\n                          tooltip=\"visualizar\"\r\n                        >\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr *ngIf=\"totalImagens != 0 && totalDocumentos != 0 \">\r\n            <div  *ngIf=\"totalDocumentos != 0\">\r\n              <blockquote class=\"blockquote\">\r\n                <p class=\"mb-0\">Documentos</p>\r\n              </blockquote>\r\n              <ul class=\" pl-0\">\r\n                <li class=\"d-flex justify-content-between\" *ngFor=\"let documento of documentos;\">\r\n                  <div>{{ documento.NM_DOCU | uppercase }}</div>\r\n                  <div>\r\n                    <a\r\n                      [href]=\"documento.LINK\"\r\n                      target=\"_blank\"\r\n                      class=\"btn-icon-sm mx-2 text-black\"\r\n                      tooltip=\"Baixar\"\r\n                    >\r\n                    <i class=\"fas fa-download\"></i>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div [hidden]=\"totalImagens != 0 || totalDocumentos != 0\" class=\"text-center d-flex justify-content-center align-items-center pb-4\" style=\"height: 80%\">\r\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #formOcorrencias>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Nova Ocorrência</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalOcorrencias()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" >\r\n      <logistica-entrada-materiais-ficha-conformidade-ocorrencias\r\n      [fichaId] = \"fichaId\"\r\n      (fecharModal)=\"onFecharModal($event)\"\r\n      >\r\n      </logistica-entrada-materiais-ficha-conformidade-ocorrencias>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "OGJj":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/motivos/lista/lista.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisMotivosListaComponent */

    /***/
    function OGJj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisMotivosListaComponent", function () {
        return LogisticaEntradaMateriaisMotivosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "4OIG");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "qwBI");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_motivos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/motivos.service */
      "4vrJ");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisMotivosListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisMotivosListaComponent(route, pnotify, activatedRoute, motivosService, formBuilder, xlsxService, confirmModalService, routerService, dateService, detailPanelService) {
          _classCallCheck(this, LogisticaEntradaMateriaisMotivosListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.motivosService = motivosService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.detailPanelService = detailPanelService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false; //VARIAVEIS

          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos Motivos (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '2',
            nome: 'Inativos'
          }]; // Tipos de Categorias

          this.categorias = [{
            cod: '1',
            nome: 'Aprovação'
          }, {
            cod: '2',
            nome: 'Solicitação'
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

        _createClass(LogisticaEntradaMateriaisMotivosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this45 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this45.routerService.getBase64UrlParams(response);

              _this45.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this45.itemsPerPage = _response.TT_REGI_PAGI;

              _this45.getMotivos(_this45.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this46 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this46.showDetailPanel = event.showing;
            });
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
              ID_LOGI_ENTR_MATE_MOTI: [null],
              DS_LOGI_ENTR_MATE_MOTI: [null],
              DS_LOGI_ENTR_MATE_CATE_MOTI: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              MATR_USUA_CADA: [null],
              DS_USUA_CADA: [null],
              DT_INCL: [null],
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Motivos'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(status) {
            var _this47 = this;

            // this.getEmpresasProdutos({
            //   ID_TECN_INFO_ESTO_PROD: produto.ID_TECN_INFO_ESTO_PROD,
            // });
            this.loadingNavBar = true;
            this.detailPanelService.show();
            this.motivoSelecionado = status;
            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this47.loadingNavBar = false;
            }, 500);
          }
        }, {
          key: "getMotivos",
          value: function getMotivos(params) {
            var _this48 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.motivosService.getMotivos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this48.loading = false;
              _this48.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this48.motivos = response.body['data'];
                _this48.totalItems = response.body['total'];
                _this48.noResult = false;
              } else {
                _this48.noResult = true;
                _this48.motivos = [];
              }
            }, function (error) {
              _this48.pnotify.error();

              _this48.noResult = true;
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.onFilter();
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
          value: function classStatusBorder(status) {
            var borderClass;

            if (status.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (status.IN_STAT == 2) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(status) {
            var _this49 = this;

            var stat = status.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this49.loadingNavBar = true;
              status.IN_STAT = stat;
              return _this49.motivosService.postMotivos(status);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this49.loadingNavBar = false;
            })).subscribe(function (success) {
              _this49.pnotify.success();
            }, function (error) {
              status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;

              _this49.pnotify.error();
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
            listagemExport = this.motivos.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Motivos".concat(dataExport));
          }
        }]);

        return LogisticaEntradaMateriaisMotivosListaComponent;
      }();

      LogisticaEntradaMateriaisMotivosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_motivos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisMotivosService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }];
      };

      LogisticaEntradaMateriaisMotivosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-motivos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_motivos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisMotivosService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])], LogisticaEntradaMateriaisMotivosListaComponent);
      /***/
    },

    /***/
    "PMzd":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/ocorrencias/ocorrencias.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PMzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n  <fieldset  class=\"col-12\">\r\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\r\n      <legend>Dados da Ocorrência</legend>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-12 pl-0\">\r\n          <label for=\"parecer\">Parecer</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"parecer\"\r\n            [virtualScroll]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            [loading]=\"loadingParecer\"\r\n            labelForId=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n            bindLabel=\"NM_PARE\"\r\n            bindValue=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n            id=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n            formControlName=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n            [ngClass]=\"onFieldError('ID_LOGI_ENMA_FHNC_OCPR') + ' ' + onFieldRequired('ID_LOGI_ENMA_FHNC_OCPR')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENMA_FHNC_OCPR')\" message=\"Parecer é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-12 pl-0\">\r\n          <label for=\"DS_OBSE\">Descrição</label>\r\n          <textarea \r\n            class=\"form-control\" \r\n            id=\"DS_OBSE\"\r\n            formControlName=\"DS_OBSE\" \r\n            rows=\"3\"\r\n            [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\"\r\n            >\r\n          </textarea>\r\n          <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição do parecer é obrigatório.\"></invalid-form-control>\r\n        </div> \r\n      </div>\r\n    </fieldset>\r\n    <br>\r\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\r\n      <legend>Responsáveis</legend>\r\n      <div formArrayName=\"responsaveis\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n            <div class=\"mtc-title\"></div>\r\n            <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                (click)=\"onAddResponsavel()\"\r\n                href=\"javascript:void(0)\">\r\n                <b>Adicionar</b>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\r\n          <div class=\"form-group col mb-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-3 pl-0\">\r\n                <label for=\"NR_MATR_RESP\">Matricula</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NR_MATR_RESP\"\r\n                  formControlName=\"NR_MATR_RESP\"\r\n                  placeholder=\"Digite...\"\r\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\r\n                >\r\n              </div>\r\n              <div class=\"form-group col-md-8 pl-0\">\r\n                <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                  <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\r\n                  <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                    <a\r\n                      class=\"text-primary\"\r\n                      href=\"javascript:void(0)\"\r\n                      (click)=\"openModal(selecionarUsuarios, i)\">\r\n                      <strong>Selecionar</strong>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NM_RESP\"\r\n                  formControlName=\"NM_RESP\"\r\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\r\n              </div>\r\n              <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon\"\r\n                  (click)=\"onDeleteResponsavel(i)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </fieldset>\r\n    <br>\r\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 pb-2 mx-auto\">\r\n      <legend>Documentos</legend>\r\n      <div class=\"form-group border rounded p-1\">\r\n        <div>\r\n          <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\r\n            <span>Novo Documento</span>\r\n          </label>\r\n          <input\r\n            id=\"documento\"\r\n            type=\"file\"\r\n            (change)=\"appendFile($event.target.files)\"\r\n            class=\"d-none\"\r\n            >\r\n        </div>\r\n      </div>\r\n      <ul>\r\n        <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\r\n          <div>{{ item.NM_DOCU | uppercase }}</div>\r\n          <div>\r\n            <a\r\n              [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\r\n              [href]=\"item.LINK\"\r\n              target=\"_blank\"\r\n              class=\"btn-icon-sm mx-2 text-black\"\r\n              tooltip=\"visualizar\"\r\n            >\r\n              <i class=\"far fa-eye\"></i>\r\n            </a>\r\n            <button\r\n              class=\"btn-icon-sm mx-2 hover\"\r\n              tooltip=\"excluir\"\r\n              (click)=\"onRemove(item, index)\"\r\n              >\r\n              <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </fieldset>    \r\n  </fieldset>\r\n</form>\r\n<div  class=\"form-row justify-content-center text-center\">\r\n  <button \r\n    type=\"button\" \r\n    class=\"btn btn-default btn-lg m-2\"\r\n    (click)=\"postOcorrencias()\"\r\n    [disabled]=\"form.valid == false \"\r\n  >\r\n    <span aria-hidden=\"true\">\r\n     <i class=\" text-success fas fa-thumbs-up\"></i>\r\n    </span>Salvar\r\n  </button>\r\n</div>\r\n<ng-template #selecionarUsuarios>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <advanced-filter>\r\n      <form [formGroup]=\"formUsuarios\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-3\">\r\n            <label for=\"cdItem\">BUSCAR POR</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              formControlName=\"buscarPor\"\r\n            >\r\n              <option value=\"matricula\">Matricula</option>\r\n              <option value=\"nome\" selected> Nome Responsável</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-9\">\r\n            <label>TERMO DE PESQUISA</label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"pesquisa\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span \r\n                    [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                    container=\"body\"\r\n                    placement =\"left\"\r\n                  >\r\n                    <button\r\n                    style=\"height: 25px;\"\r\n                      [disabled]=\"formUsuarios.valid == false\"\r\n                      class=\"input-group-text hover\"\r\n                      (click)=\"getUsuarios()\"\r\n                      >\r\n                      <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n    <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th>Matricula</th>\r\n          <th>Nome Responsável</th>\r\n          <th></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\r\n          <td>{{ usuario.matricula }}</td>\r\n          <td>{{ usuario.nome }}</td>\r\n          <td>\r\n            <button\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Salvar Responsável\"\r\n              container=\"body\"\r\n              (click)=\"setUsuarios(usuario);modalRef.hide()\"\r\n            >\r\n              <i class=\"far fa-save\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <div *ngIf=\"totalItems > itemsPerPage\">\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "QGXw":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/motivos/cadastro/cadastro.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QGXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL21vdGl2b3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
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
          } // Función para obtener la fecha de inicio de la semana actual (lunes)

        }, {
          key: "getStartOfWeek",
          value: function getStartOfWeek() {
            var currentDate = new Date();
            var startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
            startOfWeek.setHours(0, 0, 0, 0);
            return startOfWeek;
          } // Función para obtener la fecha de fin de la semana actual (domingo)

        }, {
          key: "getEndOfWeek",
          value: function getEndOfWeek() {
            var currentDate = new Date();
            var endOfWeek = new Date(currentDate);
            endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
            endOfWeek.setHours(23, 59, 59, 999);
            return endOfWeek;
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
    "SckD":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/cadastro/cadastro.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisNotasFiscaisCadastroComponent */

    /***/
    function SckD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisCadastroComponent", function () {
        return LogisticaEntradaMateriaisNotasFiscaisCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "jpKr");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "pYpU");
      /* harmony import */


      var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../status-recebimento/services/status-recebimento.service */
      "9bNu");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../services/notas-fiscais.service */
      "81bo");
      /* harmony import */


      var _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/entrada-materiais.service */
      "mfeq"); //Services
      //Bootstrap
      //Angular
      //rxjs
      //interfaces


      var LogisticaEntradaMateriaisNotasFiscaisCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisNotasFiscaisCadastroComponent(formBuilder, pnotify, router, activatedRoute, modalService, localeService, statusRecebimentoService, dateService, notasFiscaisService, entradaMateriaisService, titleService, routerService, atividadesService) {
          _classCallCheck(this, LogisticaEntradaMateriaisNotasFiscaisCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.modalService = modalService;
          this.localeService = localeService;
          this.statusRecebimentoService = statusRecebimentoService;
          this.dateService = dateService;
          this.notasFiscaisService = notasFiscaisService;
          this.entradaMateriaisService = entradaMateriaisService;
          this.titleService = titleService;
          this.routerService = routerService;
          this.atividadesService = atividadesService;
          this.noFornecedor = true;
          this.breadCrumbTree = [];
          this.noAllMateriais = true;
          this.noMaterial = true;
          this.disabledForm = false; //loading

          this.loading = false;
          this.loadingNavBar = false;
          this.loadingStatusRecebimento = false; //Interfaces

          this.allMateriais = [];
          this.materiais = [];
          this.statusRecebimento = [];
          this.fornecedores = [];
          this.empresas = [];
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItemsMaterial = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          /* Pagination */

          this.notasFiscais = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_9__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisNotasFiscaisCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getStatusRecebimento();
            this.getEmpresas();
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
              this.getNotasFiscais({
                ID_LOGI_ENMA_NOFI: _params['id']
              });
              this.getNotasMateriais({
                ID_LOGI_ENMA_NOFI: _params['id'],
                IN_STAT: '1'
              });
            } else {
              this.onAddMaterial();
            }
          }
        }, {
          key: "getFornecedores",
          value: function getFornecedores(params) {
            var _this50 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = this.formPesquisaFornecedor.value['IN_STAT'];
            _params.IN_PAGI = '0';
            var _obj = this.formPesquisaFornecedor.value;
            this.loadingFornecedores = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.entradaMateriaisService.getFornecedores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this50.loadingFornecedores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                if (response.body['responseCode'] === 404) {
                  _this50.pnotify.notice('Nenhum registro encontrado!');

                  _this50.fornecedores = [];
                  _this50.noFornecedor = true;
                  return;
                }

                _this50.fornecedores = response.body['result'];
                _this50.totalItems = response.body['result'].length;
                _this50.noFornecedor = false;
              } else {
                _this50.pnotify.notice('Nenhum registro encontrado!');

                _this50.fornecedores = [];
                _this50.noFornecedor = true;
              }
            }, function (error) {
              _this50.pnotify.error();

              _this50.fornecedores = [];
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var _this51 = this;

            this.loadingEmpresas = true;
            this.entradaMateriaisService.getEmpresas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this51.loadingEmpresas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this51.empresas = response.body['result'];
              } else {
                _this51.pnotify.notice('Nenhum registro encontrado!');

                _this51.empresas = [];
              }
            }, function (error) {
              _this51.pnotify.error();

              _this51.empresas = [];
            });
          }
        }, {
          key: "getStatusRecebimento",
          value: function getStatusRecebimento(params) {
            var _this52 = this;

            var _params = params !== null && params !== void 0 ? params : [];

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';

            if (!this.activatedRoute.snapshot.params.hasOwnProperty('id')) {
              _params.IN_FHNC = '0';
            }

            this.loadingStatusRecebimento = true;
            this.statusRecebimentoService.getStatusRecebimento(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this52.loadingStatusRecebimento = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this52.statusRecebimento = response.body['data'];
              } else {
                _this52.statusRecebimento = [];
              }
            }, function (error) {
              _this52.pnotify.error('Não foi encontrado nenhum status de recebimento');
            });
          }
        }, {
          key: "getNotasMateriais",
          value: function getNotasMateriais(params) {
            var _this53 = this;

            this.loadingNavBar = true;
            this.loadingMateriais = true;
            this.notasFiscaisService.getNotasMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this53.loadingNavBar = false;
              _this53.loadingMateriais = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this53, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var _this54 = this;

                var materiais, promise;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context8.next = 2;
                          break;
                        }

                        return _context8.abrupt("return");

                      case 2:
                        materiais = response['body']['data'];

                        promise = function promise() {
                          return materiais.forEach(function () {
                            return _this54.onAddMaterial();
                          });
                        };

                        _context8.next = 6;
                        return Promise.resolve(promise());

                      case 6:
                        this.form.get('materiais').patchValue(materiais);

                      case 7:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }, function (error) {
              _this53.pnotify.error('Não foi encontrado nenhum material');
            });
          }
        }, {
          key: "getNotasFiscais",
          value: function getNotasFiscais(params) {
            var _this55 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.notasFiscaisService.getNotasFiscais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this55.loading = false;
              _this55.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this55.noResult = true;
                _this55.notasFiscais = [];
                return;
              }

              var nota_ = response.body['data'][0];
              nota_.DT_EMIS_NOTA_FISC = new Date(nota_.DT_EMIS_NOTA_FISC);

              _this55.form.patchValue(nota_);

              _this55.noResult = false;
            }, function (error) {
              try {
                _this55.pnotify.error(error.error.message);
              } catch (error) {
                _this55.pnotify.error();
              }
            });
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Notas Fiscais',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "setFornecedor",
          value: function setFornecedor(fornecedor) {
            this.form.get('NM_FORN').patchValue(fornecedor.NM_RAZA_SOCI);
            this.form.controls['NM_FORN'].markAsDirty({
              onlySelf: true
            });
            this.form.get('UUID_FORN').patchValue(fornecedor.ID);
            this.form.controls['UUID_FORN'].markAsDirty({
              onlySelf: true
            });
          }
        }, {
          key: "setMaterial",
          value: function setMaterial(material) {
            var _material = Object.assign(Object.assign({}, material), {
              'IN_MATE': false
            });

            var fg = this.form.get('materiais');
            fg.controls[this.index].patchValue(_material);
            fg.controls[this.index].get('UUID_MATE').patchValue(_material.ID);
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_NOFI: [null],
              ID_LOGI_ENTR_MATE_NOFI: [null],
              NR_NOTA_FISC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              NM_FORN: [{
                value: null,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
              UUID_FORN: [null],
              DT_EMIS_NOTA_FISC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              ID_LOGI_ENMA_NOFI_STAT: [null],
              NM_STAT: [null],
              IN_FHNC: [null],
              DS_LOGI_ENTR_MATE_UNID_MEDI: [null],
              UUID_EMPR: [null],
              NM_EMPR: [{
                value: null,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
              IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              DS_OBSE: [null],
              materiais: this.formBuilder.array([])
            });
            this.formAllMateriais = this.formBuilder.group({
              buscarPor: ['NM_MATE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
              ID_REFE_ERP: [null],
              NM_MATE: [null],
              NM_CLAS: [null],
              NM_LINH: [null],
              IN_STAT: ['1']
            });
            this.formPesquisaFornecedor = this.formBuilder.group({
              buscarPor: ['NM_RAZA_SOCI'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
              ID_REFE_ERP: [null],
              NM_RAZA_SOCI: [null],
              NM_FANT: [null],
              NR_CNPJ_CPF: [null],
              IN_STAT: ['1']
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

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }

              if (field.errors.hasOwnProperty('maxlength') && field.touched) {
                return 'maxlength';
              }

              if (field.errors.hasOwnProperty('minlength') && field.touched) {
                return 'minlength';
              }
            }

            return '';
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
          key: "getAllMateriais",
          value: function getAllMateriais(params) {
            var _this56 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = this.formAllMateriais.value['IN_STAT'];
            _params.TT_REGI_PAGI = 15;
            var _obj = this.formAllMateriais.value;
            this.loadingAllMateriais = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.entradaMateriaisService.getAllMateriais(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this56.loadingAllMateriais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this56.allMateriais = response.body['result'];
                _this56.totalItemsMaterial = response.body['result'].length;
                _this56.noAllMateriais = false;
              } else {
                _this56.pnotify.notice('Nenhum registro encontrado!');

                _this56.allMateriais = [];
                _this56.noAllMateriais = true;
              }
            }, function (error) {
              _this56.pnotify.error();

              _this56.allMateriais = [];
            });
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this57 = this;

              var request, materiais, promise;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      request = [];
                      materiais = this.formMateriais.getRawValue();

                      if (!(!materiais || !this.formMateriais.dirty)) {
                        _context9.next = 6;
                        break;
                      }

                      this.pnotify.notice('Nenhum material alterado!');
                      this.router.navigate(['./../'], {
                        relativeTo: this.activatedRoute
                      });
                      return _context9.abrupt("return");

                    case 6:
                      if (this.form.get('ID_LOGI_ENMA_NOFI').value) {
                        _context9.next = 8;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 8:
                      promise = function promise() {
                        var controls = Object.keys(_this57.formMateriais.controls);
                        controls.forEach(function (key) {
                          if (!_this57.formMateriais.controls[key].dirty) {
                            return;
                          }

                          var material = _this57.formMateriais.get(key).value;

                          material['SEQU_MATE'] = materiais[key]['SEQU_MATE'];
                          material['ID_LOGI_ENMA_NOFI'] = id;
                          request.push(_this57.notasFiscaisService.postMateriais(material));
                        });
                      };

                      _context9.next = 11;
                      return Promise.resolve(promise());

                    case 11:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                        _this57.loading = false;
                        _this57.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this57.pnotify.success('Material, salvo com sucesso!');

                            _this57.router.navigate(['../'], {
                              relativeTo: _this57.activatedRoute
                            });
                          } else {
                            _this57.pnotify.error();
                          }
                        });
                      }, function (error) {
                        try {
                          _this57.pnotify.error(error.error.message);
                        } catch (error) {
                          _this57.pnotify.error();
                        }
                      });

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "postNotasFiscais",
          value: function postNotasFiscais() {
            var _this58 = this;

            this.loadingNavBar = true;
            var params = {};

            if (this.form.get('ID_LOGI_ENMA_NOFI').value) {
              Object.keys(this.form.controls).forEach(function (key) {
                if (_this58.form.controls[key].dirty) {
                  params[key] = _this58.form.get(key).value, params['ID_LOGI_ENMA_NOFI'] = parseFloat(_this58.form.get('ID_LOGI_ENMA_NOFI').value);
                }

                return;
              });

              if (!this.form.dirty && !this.form.controls['UUID_FORN'].dirty) {
                this.loadingNavBar = false;
                this.pnotify.notice('Nenhuma alteração realizada!');
                return;
              }
            } else {
              params = JSON.parse(JSON.stringify(this.form.value));
              params['SG_ORIG'] = 'MTCORP';
            }

            delete params['materiais'];
            this.notasFiscaisService.postNotasFiscais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this58.loading = false;
              _this58.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this58.pnotify.success();

                var id = response.body['data'];

                _this58.form.get('ID_LOGI_ENMA_NOFI').setValue(id);

                _this58.postMateriais(id);
              } else {
                _this58.pnotify.error();
              }
            }, function (error) {
              try {
                _this58.pnotify.error(error.error.message);
              } catch (error) {
                _this58.pnotify.error();
              }
            });
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
          key: "onAddMaterial",
          value: function onAddMaterial(index) {
            var sequencia = this.formMateriais.length + 1;
            this.formMateriais.push(this.formBuilder.group({
              UUID_MATE: [null],
              ID_LOGI_ENMA_NOFI_MATE: [null],
              SEQU_MATE: [{
                value: sequencia,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].min(1)]],
              DS_UNID_MEDI: ['TON', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              TT_MATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].min(0.01)]],
              DS_LOTE: [null],
              NM_MATE: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index) {
            var _this59 = this;

            if (this.formMateriais.length === 0) {
              this.pnotify.notice('Informe ao menos um material.');
              return;
            }

            var materiais = this.formMateriais.at(index).value;
            materiais = Object.assign(Object.assign({}, materiais), {
              'IN_STAT': '0',
              ID_LOGI_ENMA_NOFI: this.form.get('ID_LOGI_ENMA_NOFI').value
            });

            if (!materiais['ID_LOGI_ENMA_NOFI_MATE']) {
              this.formMateriais.removeAt(index);
              return;
            }

            this.loadingNavBar = true;
            this.notasFiscaisService.postMateriais(materiais).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this59.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this59.formMateriais.removeAt(index);

                _this59.pnotify.success();
              } else {
                _this59.pnotify.error();
              }
            }, function (error) {
              _this59.pnotify.error();
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
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
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "checkStatus",
          value: function checkStatus(event, template) {
            if (!event) {
              return;
            }

            if (event.IN_FHNC == 1 && this.form.get('IN_FHNC').value != 1) {
              this.modalRefPopup = this.modalService.show(template, {
                animated: false
              });
            }
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.form.get('ID_LOGI_ENMA_NOFI_STAT').reset();
            this.modalRefPopup.hide();
          }
        }, {
          key: "gerarFicha",
          value: function gerarFicha() {
            this.modalRefPopup.hide();
            var id = this.form.get('ID_LOGI_ENMA_NOFI').value;
            var params = this.activatedRoute.snapshot.params;
            var idSubmodulo = params === null || params === void 0 ? void 0 : params.idSubModulo;
            var queryParams = btoa(JSON.stringify({
              ID_LOGI_ENMA_NOFI: id
            }));
            window.open("".concat(window.location.origin, "/#/logistica/entrada-materiais/").concat(idSubmodulo, "/fichas-nao-conformidade/novo?q=").concat(queryParams), 'blank');
          }
        }, {
          key: "formMateriais",
          get: function get() {
            return this.form.get('materiais');
          }
        }]);

        return LogisticaEntradaMateriaisNotasFiscaisCadastroComponent;
      }();

      LogisticaEntradaMateriaisNotasFiscaisCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"]
        }, {
          type: _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]
        }, {
          type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisNotasFiscaisService"]
        }, {
          type: _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]
        }, {
          type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }];
      };

      LogisticaEntradaMateriaisNotasFiscaisCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"], _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"], _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisNotasFiscaisService"], _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"], _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]])], LogisticaEntradaMateriaisNotasFiscaisCadastroComponent);
      /***/
    },

    /***/
    "T5cb":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/ocorrencias/ocorrencias.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T5cb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL29jb3JyZW5jaWFzL29jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL29jb3JyZW5jaWFzL29jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "ULR/":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ULR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZW50cmFkYS1tYXRlcmlhaXMvZW50cmFkYS1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "UkxE":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/parecer/lista/lista.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function UkxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3BhcmVjZXIvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "WQIu":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/parecer/lista/lista.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisParecerListaComponent */

    /***/
    function WQIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisParecerListaComponent", function () {
        return LogisticaEntradaMateriaisParecerListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "nTb2");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "UkxE");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_parecer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/parecer.service */
      "M5hd");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisParecerListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisParecerListaComponent(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, parecerService) {
          _classCallCheck(this, LogisticaEntradaMateriaisParecerListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.dateService = dateService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.detailPanelService = detailPanelService;
          this.confirmModalService = confirmModalService;
          this.parecerService = parecerService;
          this.showDetailPanel = false;
          this.ORDE_BY = 'ID_LOGI_ENMA_FHNC_OCPR';
          this.ORDE_TYPE = 'desc'; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false; //VARIAVEIS

          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos Parecer (Ativo/Inativo)

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

        _createClass(LogisticaEntradaMateriaisParecerListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getParecer();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this60 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this60.routerService.getBase64UrlParams(response);

              _this60.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this60.itemsPerPage = _response.TT_REGI_PAGI;

              _this60.getParecers(_this60.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this61 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this61.showDetailPanel = event.showing;
            });
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
              ID_LOGI_ENMA_FHNC_OCPR: [null],
              NM_PARE: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()],
              ORDE_BY: [this.ORDE_BY],
              ORDE_TYPE: [this.ORDE_TYPE]
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Parecer'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
            this.form.get('ORDE_BY').setValue(this.ORDE_BY);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(parecer) {
            this.detailPanelService.show();
            this.parecerSelecionado = parecer;
            this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "getParecers",
          value: function getParecers(params) {
            var _this62 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.parecerService.getParecer(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this62.loading = false;
              _this62.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this62.pareceres = response.body['data'];
                _this62.totalItems = response.body['total'];
                _this62.noResult = false;
              } else {
                _this62.noResult = true;
                _this62.pareceres = [];
              }
            }, function (error) {
              _this62.pnotify.error();

              _this62.noResult = true;
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
          value: function classStatusBorder(parecer) {
            var borderClass;

            if (parecer.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (parecer.IN_STAT == 2) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(params) {
            var _this63 = this;

            var stat = params.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this63.loadingNavBar = true;
              params.IN_STAT = stat;
              return _this63.parecerService.postParecer(params);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this63.loadingNavBar = false;
            })).subscribe(function (success) {
              _this63.pnotify.success();
            }, function (error) {
              params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;

              _this63.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "getParecer",
          value: function getParecer() {
            var _this64 = this;

            this.loadingParecer = true;
            this.parecerService.getParecer({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this64.loadingParecer = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this64.parecer = response.body['data'];
              } else {
                _this64.pnotify.notice('Nenhum registro encontrado!');
              }
            });
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.pareceres.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Parecer".concat(dataExport));
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.ORDE_BY === column) {
              if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
              } else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
              }
            } else {
              this.ORDE_BY = column;
              this.ORDE_TYPE = 'asc';
            }

            this.onFilter();
          }
        }]);

        return LogisticaEntradaMateriaisParecerListaComponent;
      }();

      LogisticaEntradaMateriaisParecerListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"]
        }, {
          type: _services_parecer_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisParecerService"]
        }];
      };

      LogisticaEntradaMateriaisParecerListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-parecer-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"], _services_parecer_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisParecerService"]])], LogisticaEntradaMateriaisParecerListaComponent);
      /***/
    },

    /***/
    "XkGG":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/lista/lista.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisFichaConformidadeListaComponent */

    /***/
    function XkGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichaConformidadeListaComponent", function () {
        return LogisticaEntradaMateriaisFichaConformidadeListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "N8Iq");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "nLjI");
      /* harmony import */


      var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../tipos-conformidade/services/tipos-conformidade.service */
      "AVAL");
      /* harmony import */


      var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/ficha-conformidade.service */
      "blLz");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisFichaConformidadeListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisFichaConformidadeListaComponent(route, pnotify, activatedRoute, fichasConformidadeService, tiposConformidadeService, formBuilder, localeService, xlsxService, pdfService, confirmModalService, modalService, routerService, dateService) {
          _classCallCheck(this, LogisticaEntradaMateriaisFichaConformidadeListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.fichasConformidadeService = fichasConformidadeService;
          this.tiposConformidadeService = tiposConformidadeService;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.xlsxService = xlsxService;
          this.pdfService = pdfService;
          this.confirmModalService = confirmModalService;
          this.modalService = modalService;
          this.routerService = routerService;
          this.dateService = dateService; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false;
          this.loadingImagens = false;
          this.loadingMateriais = false;
          this.loadingDocumentos = false;
          this.loadingTiposConformidade = false;
          this.hiddenModal = false;
          this.allFichas = [];
          this.materiais = [];
          this.documentosOcorrencia = {};
          this.responsaveisOcorrencia = {};
          this.ORDE_BY = 'ID_LOGI_ENMA_FHNC';
          this.ORDE_TYPE = 'desc'; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação das Fichas de  não Conformidade (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
            nome: 'Inativos'
          }]; // Tipos de Status dos Pareceres

          this.status = [{
            cod: '1',
            nome: 'Finalizada'
          }, {
            cod: '0',
            nome: 'Em Andamento'
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
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisFichaConformidadeListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getTiposConformidade();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();

            if (this.modalRef1 != undefined) {
              this.modalRef1.hide();
            }

            if (this.modalRef2 != undefined) {
              this.modalRef2.hide();
            }
          }
        }, {
          key: "onFecharModal",
          value: function onFecharModal(event) {
            var _this65 = this;

            if (event == true) {
              this.hideModalOcorrencias();
              this.getOcorrencias({
                ID_LOGI_ENMA_FHNC: this.fichaSelecionada['ID_LOGI_ENMA_FHNC'],
                IN_STAT: '1'
              });
              this.fichasConformidadeService.getFichasConformidade({
                ID_LOGI_ENMA_FHNC: this.fichaSelecionada['ID_LOGI_ENMA_FHNC']
              }).subscribe(function (response) {
                if (response.status === 200) {
                  _this65.fichaSelecionada = response.body['data'][0];
                }

                return;
              });
            }

            return;
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this66 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this66.routerService.getBase64UrlParams(response);

              _this66.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this66.itemsPerPage = _response.TT_REGI_PAGI;

              _this66.getFichasConformidade(_this66.getParams());
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              DT_INIC: new Date(),
              DT_FINA: new Date(),
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_FHNC: [null],
              ID_LOGI_ENMA_FHNC_TIPO: [null],
              NM_TIPO: [null],
              IN_STAT: [null],
              DS_UNID_MEDI: [null],
              DS_OBSE: [null],
              NM_MATE: [null],
              NM_FORN: [null],
              IN_CONC: [null],
              DS_LOTE: [null],
              NR_NOTA_FISC: [null],
              MATR_USUA_CADA: [null],
              DS_USUA_CADA: [null],
              DT_INCL: [null],
              PAGI: [1],
              DT_INIC: [new Date()],
              DT_FINA: [new Date()],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()],
              ORDE_BY: [this.ORDE_BY],
              ORDE_TYPE: [this.ORDE_TYPE]
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Fichas de Não Conformidade'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
            this.form.get('ORDE_BY').setValue(this.ORDE_BY);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getFichasConformidade",
          value: function getFichasConformidade(params) {
            var _this67 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.fichasConformidadeService.getFichasConformidade(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this67.loading = false;
              _this67.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this67.fichasConformidade = response.body['data'];
                _this67.totalItems = response.body['total'];
                _this67.noResult = false;
              } else {
                _this67.noResult = true;
                _this67.fichasConformidade = [];
              }
            }, function (error) {
              _this67.noResult = true;

              try {
                _this67.pnotify.error(error.error.message);
              } catch (error) {
                _this67.pnotify.error();
              }
            });
          }
        }, {
          key: "getRelatorio",
          value: function getRelatorio(params) {
            var _this68 = this;

            params = this.getParams();
            this.loadingNavBar = true;
            this.fichasConformidadeService.getRelatorio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this68.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this68.pnotify.notice('Nenhum registro localizado.');

                return;
              }

              _this68.xlsxService["export"]({
                data: response.body['data']
              });
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this68.pnotify.error(message) : _this68.pnotify.error();
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            var _this69 = this;

            this.loadingMateriais = true;
            this.fichasConformidadeService.getFormMaterial(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this69.loadingMateriais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this69.materiais = response.body['data'];
                _this69.noMateriais = false;
              } else {
                _this69.materiais = [];
                _this69.noMateriais = true;
              }
            }, function (error) {
              _this69.pnotify.error('Não foi encontrado nenhum material');

              _this69.noMateriais = true;
            });
          }
        }, {
          key: "getImagens",
          value: function getImagens(params) {
            var _this70 = this;

            this.loadingImagens = true;
            this.fichasConformidadeService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this70.imagens = response.body['data'];
                _this70.totalImagens = response.body['data'].length;
                _this70.loadingImagens = false;
              } else {
                _this70.imagens = [];
                _this70.totalImagens = 0;
                _this70.loadingImagens = false;
              }
            }, function (error) {
              _this70.imagens = [];
              _this70.loadingImagens = false;
            });
          }
        }, {
          key: "getDocumentoOcorrencia",
          value: function getDocumentoOcorrencia(params) {
            var _this71 = this;

            this.loadingDocumentosOcorrencias = true;
            this.fichasConformidadeService.getDocumentoOcorrencia(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this71.loadingDocumentosOcorrencias = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this71, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var documentos;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context10.next = 2;
                          break;
                        }

                        return _context10.abrupt("return");

                      case 2:
                        documentos = response['body']['data'];
                        this.documentosOcorrencia[params.ID_LOGI_ENMA_FHNC_OCOR] = documentos;

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }, function (error) {
              _this71.pnotify.error('Não foi encontrado nenhum documento');
            });
          }
        }, {
          key: "getResponsaveisOcorrencia",
          value: function getResponsaveisOcorrencia(params) {
            var _this72 = this;

            this.loadingResponsaveisOcorrencias = true;
            this.fichasConformidadeService.getResponsaveisOcorrencia(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this72.loadingResponsaveisOcorrencias = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this72, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var responsaveis;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context11.next = 3;
                          break;
                        }

                        this.noResponsaveisOcorrencia = true;
                        return _context11.abrupt("return");

                      case 3:
                        responsaveis = response['body']['data'];
                        this.noResponsaveisOcorrencia = false;
                        this.responsaveisOcorrencia[params.ID_LOGI_ENMA_FHNC_OCOR] = responsaveis;

                      case 6:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }, function (error) {
              _this72.pnotify.error('Não foi encontrado nenhum responsável');

              _this72.noResponsaveisOcorrencia = true;
            });
          }
        }, {
          key: "getOcorrencias",
          value: function getOcorrencias(params) {
            var _this73 = this;

            this.loadingOcorrencias = true;
            this.disabledButton = true;
            params = Object.assign(Object.assign({}, params), {
              ORDE_TYPE: 'desc'
            });
            this.fichasConformidadeService.getOcorrencias(params).subscribe(function (response) {
              if (response.status === 200) {
                _this73.ocorrencias = response.body['data'];

                if (response.body['total']) {
                  _this73.disabledButton = false;
                }

                _this73.noOcorrencias = false;

                _this73.ocorrencias.forEach(function (ocorrencia) {
                  _this73.getDocumentoOcorrencia(ocorrencia);

                  _this73.getResponsaveisOcorrencia(ocorrencia);

                  _this73.loadingOcorrencias = false;
                });
              } else {
                _this73.ocorrencias = [];
                _this73.noOcorrencias = true;
                _this73.loadingOcorrencias = false;
              }
            }, function (error) {
              _this73.ocorrencias = [];
              _this73.noOcorrencias = true;
              _this73.loadingOcorrencias = false;
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            var _this74 = this;

            this.loadingDocumentos = true;
            this.fichasConformidadeService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this74.documentos = response.body['data'];
                _this74.totalDocumentos = response.body['data'].length;
                _this74.loadingDocumentos = false;
              } else {
                _this74.documentos = [];
                _this74.totalDocumentos = 0;
                _this74.loadingDocumentos = false;
              }
            }, function (error) {
              _this74.documentos = [];
              _this74.loadingDocumentos = false;
            });
          }
        }, {
          key: "finalizarFicha",
          value: function finalizarFicha(ocorrencia) {
            var _this75 = this;

            var params = ocorrencia !== null && ocorrencia !== void 0 ? ocorrencia : {};

            var _params = Object.assign(Object.assign({}, params), {
              IN_CONC: 1
            });

            this.fichasConformidadeService.postFichasConformidade(_params).subscribe(function (response) {
              if (response.status === 200) {
                _this75.pnotify.success();

                _this75.hideModal();

                _this75.getFichasConformidade();
              } else {
                _this75.pnotify.error();
              }
            }, function (error) {
              try {
                _this75.pnotify.error(error.error.message);
              } catch (error) {
                _this75.pnotify.error();
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, ficha) {
            this.noOcorrencias = true;
            this.hiddenModal = false;
            var _params = {
              ID_LOGI_ENMA_FHNC: ficha['ID_LOGI_ENMA_FHNC'],
              IN_STAT: '1'
            };

            var _paramsImagem = Object.assign(Object.assign({}, _params), {
              TP_DOCU: 'IMAGEM'
            });

            var _paramsDocumento = Object.assign(Object.assign({}, _params), {
              TP_DOCU: 'DOCUMENTO'
            });

            this.fichaSelecionada = ficha;
            this.getImagens(_paramsImagem);
            this.getDocumentos(_paramsDocumento);
            this.getMateriais(_params);
            this.getOcorrencias(_params);
            this.modalRef1 = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef1.hide();
          }
        }, {
          key: "openModalOcorrencias",
          value: function openModalOcorrencias(template) {
            var id = this.fichaSelecionada['ID_LOGI_ENMA_FHNC'];
            this.fichaId = id;
            this.hiddenModal = true;
            this.modalRef2 = this.modalService.show(template, {
              animated: true,
              "class": 'modal-lg',
              backdrop: 'static'
            });
          }
        }, {
          key: "hideModalOcorrencias",
          value: function hideModalOcorrencias() {
            this.hiddenModal = false;
            this.modalRef2.hide();
          }
        }, {
          key: "onDownload",
          value: function onDownload(params) {
            this.pnotify.notice('Documento PDF será gerado em breve!');
            var _id = params['ID_LOGI_ENMA_FHNC'];
            this.pdfService.download('ficha-pdf', "Ficha_Nao_Conformidade - ".concat(_id));
          }
        }, {
          key: "onPrint",
          value: function onPrint() {
            window.print();
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
          value: function classStatusBorder(status) {
            var borderClass;

            if (status.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (status.IN_STAT == 0) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(status) {
            var _this76 = this;

            var stat = status.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
              _this76.loadingNavBar = true;
              status.IN_STAT = stat;
              return _this76.fichasConformidadeService.postFichasConformidade(status);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this76.loadingNavBar = false;
            })).subscribe(function (success) {
              _this76.pnotify.success();
            }, function (error) {
              status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;

              _this76.pnotify.error();
            });
          }
        }, {
          key: "getTiposConformidade",
          value: function getTiposConformidade(params) {
            var _this77 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            this.loadingTiposConformidade = true;
            this.tiposConformidadeService.getTiposConformidade(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this77.loadingTiposConformidade = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this77.tiposConformidade = response.body['data'];
              } else {
                _this77.tiposConformidade = [];
              }
            }, function (error) {
              _this77.pnotify.error('Não foi encontrado nenhum status de recebimento');
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.ORDE_BY === column) {
              if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
              } else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
              }
            } else {
              this.ORDE_BY = column;
              this.ORDE_TYPE = 'asc';
            }

            this.onFilter();
          }
        }]);

        return LogisticaEntradaMateriaisFichaConformidadeListaComponent;
      }();

      LogisticaEntradaMateriaisFichaConformidadeListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisFichaConformidadeService"]
        }, {
          type: _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisTiposConformidadeService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"]
        }, {
          type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }];
      };

      LogisticaEntradaMateriaisFichaConformidadeListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'logistica-entrada-materiais-ficha-conformidade-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisFichaConformidadeService"], _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisTiposConformidadeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"], _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]])], LogisticaEntradaMateriaisFichaConformidadeListaComponent);
      /***/
    },

    /***/
    "bM+B":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bMB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n\r\n<app-header appTitle=\"Entrada de materiais\">\r\n</app-header>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n        <card-button\r\n          [icon]=\"atividade.iconeAtividade\"\r\n          [text]=\"atividade.nomeAtividade\"\r\n          [routerLink]=\"[atividade.rotaAtividade]\">\r\n        </card-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "blLz":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/services/ficha-conformidade.service.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisFichaConformidadeService */

    /***/
    function blLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichaConformidadeService", function () {
        return LogisticaEntradaMateriaisFichaConformidadeService;
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


      var LogisticaEntradaMateriaisFichaConformidadeService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisFichaConformidadeService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisFichaConformidadeService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        } // -------------------FICHAS DE NÃO CONFORMIDADE------------------


        _createClass(LogisticaEntradaMateriaisFichaConformidadeService, [{
          key: "getFichasConformidade",
          value: function getFichasConformidade(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getRelatorio",
          value: function getRelatorio(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/relatorio"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postFichasConformidade",
          value: function postFichasConformidade(params) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getNotasFiscaisMateriais",
          value: function getNotasFiscaisMateriais(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getExport",
          value: function getExport(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/relatorio"), {
              params: params,
              observe: 'response'
            });
          } // -------------------DOCUMENTOS  DA FICHA ------------------

        }, {
          key: "getDocumento",
          value: function getDocumento(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(params, ID_LOGI_ENMA_FHNC) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/documentos?ID_LOGI_ENMA_FHNC=").concat(ID_LOGI_ENMA_FHNC), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/documentos"), params, {
              observe: 'response'
            });
          } // -------------------DOCUMENTOS  DA OCORRENCIA ------------------

        }, {
          key: "getDocumentoOcorrencia",
          value: function getDocumentoOcorrencia(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumentoOcorrencia",
          value: function postDocumentoOcorrencia(params, ID_LOGI_ENMA_FHNC_OCOR) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos?ID_LOGI_ENMA_FHNC_OCOR=").concat(ID_LOGI_ENMA_FHNC_OCOR), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumentoOcorrencia",
          value: function putDocumentoOcorrencia(params) {
            return this.http.put("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos"), params, {
              observe: 'response'
            });
          } // -------------------MATERIAIS------------------

        }, {
          key: "getFormMaterial",
          value: function getFormMaterial(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(notas) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/materiais"), notas, {
              observe: 'response'
            });
          } // -------------------OCORRENCIAS------------------

        }, {
          key: "getOcorrencias",
          value: function getOcorrencias(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postOcorrencias",
          value: function postOcorrencias(params) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias"), params, {
              observe: 'response'
            });
          } // -------------------RESPONSÁVEIS------------------

        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(params) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/responsaveis"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveisOcorrencia",
          value: function getResponsaveisOcorrencia(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios(params) {
            return this.http.get("".concat(this.API, "/core/mtcorp/usuarios"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/ficha-nao-conformidade/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisFichaConformidadeService;
      }();

      LogisticaEntradaMateriaisFichaConformidadeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisFichaConformidadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisFichaConformidadeService);
      /***/
    },

    /***/
    "cTkk":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: SulFluminenseEntradaMateriaisModule */

    /***/
    function cTkk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEntradaMateriaisModule", function () {
        return SulFluminenseEntradaMateriaisModule;
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


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./entrada-materiais-routing.module */
      "/As8");
      /* harmony import */


      var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./entrada-materiais.component */
      "io96");
      /* harmony import */


      var _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./painel-bobinas-qualidade/painel-bobinas-qualidade.component */
      "t/sj");
      /* harmony import */


      var _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./consulta-recebimento-bobinas/consulta-recebimento-bobinas.component */
      "Anp4");

      var SulFluminenseEntradaMateriaisModule = function SulFluminenseEntradaMateriaisModule() {
        _classCallCheck(this, SulFluminenseEntradaMateriaisModule);
      };

      SulFluminenseEntradaMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_entrada_materiais_component__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseEntradaMateriaisComponent"], _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_11__["SulFluminensePainelBobinasQualidadeComponent"], _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseConsultaRecebimentoBobinasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_9__["SulFluminenseEntradaMateriaisRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"]]
      })], SulFluminenseEntradaMateriaisModule);
      /***/
    },

    /***/
    "ejgx":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/documentos/documentos.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ejgx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<fieldset class=\"border rounded shadow-sm col-10 pt-2 pb-2 mx-auto\">\r\n  <legend>Documentos</legend>\r\n  <div class=\"form-group border rounded p-1\">\r\n    <div>\r\n      <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\r\n        <span>Novo Documento</span>\r\n      </label>\r\n      <input\r\n        id=\"documento\"\r\n        type=\"file\"\r\n        (change)=\"appendFile($event.target.files)\"\r\n        class=\"d-none\"\r\n        >\r\n    </div>\r\n  </div>\r\n  <ul>\r\n    <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\r\n      <div>{{ item.NM_DOCU | uppercase }}</div>\r\n      <div>\r\n        <a\r\n          [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\r\n          [href]=\"item.LINK\"\r\n          target=\"_blank\"\r\n          class=\"btn-icon-sm mx-2 text-black\"\r\n          tooltip=\"visualizar\"\r\n        >\r\n          <i class=\"far fa-eye\"></i>\r\n        </a>\r\n        <button\r\n          class=\"btn-icon-sm mx-2 hover\"\r\n          tooltip=\"excluir\"\r\n          (click)=\"onRemove(item, index)\"\r\n          >\r\n          <i class=\"fas fa-trash\"></i>\r\n        </button>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</fieldset>\r\n";
      /***/
    },

    /***/
    "f8jI":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/painel-aprovacao/lista/lista.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f8jI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"PAINEL DE APROVAÇÕES\">\r\n  <button\r\n    type=\"button\" \r\n    (click)=\"onExport()\"\r\n    [disabled]=\"loadingNavBar || noResult\">\r\n    Exportar\r\n  </button>\r\n  <button\r\n    type=\"button\" \r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-1 pl-0\">\r\n              <label for=\"ID_LOGI_ENTR_MATE_APRO\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_ENTR_MATE_APRO\"\r\n                formControlName=\"ID_LOGI_ENTR_MATE_APRO\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_INIC\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_INIC\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_INIC\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_FINA\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_FINA\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_FINA\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"NM_LOGI_ENTR_MATE_NOME_SOLI\">Solicitante</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_LOGI_ENTR_MATE_NOME_SOLI\"\r\n                formControlName=\"NM_LOGI_ENTR_MATE_NOME_SOLI\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID</th>\r\n              <th scope=\"col\" >Solicitante</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\">Data da Solicitação</th>\r\n              <th scope=\"col\" style=\"width:40px\" ></th>\r\n              <th scope=\"col\" style=\"width:40px\" ></th>\r\n              <th scope=\"col\" style=\"width:40px\" ></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let status of solicitacoes\"  [class.table-active]=\"status?.ID_LOGI_ENTR_MATE_APRO == solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_APRO && showDetailPanel\">\r\n              <td (click)=\"onDetails(status)\" [ngClass]=\"classStatusBorder(status)\">\r\n              {{status.ID_LOGI_ENTR_MATE_APRO }}\r\n              </td>\r\n              <td (click)=\"onDetails(status)\">{{ status.NM_LOGI_ENTR_MATE_NOME_SOLI | uppercase}}</td>\r\n              <td (click)=\"onDetails(status)\" [hidden]=\"showDetailPanel\">{{ status.DT_APROV }}</td>\r\n              <td >\r\n                <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.IN_STAT == 3\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"requestSuccess(status)\">\r\n                    <i class=\" text-success fas fa-thumbs-up\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n              <td >\r\n                <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.IN_STAT == 3\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"requestFail(status)\">\r\n                    <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span   tooltip=\"Detalhe da Solicitação\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\">\r\n                    <i class=\"fas fa-search\" (click)=\"openModal(detalhesSolicitacao, status)\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel || !viewHistorico\">\r\n      <detail-panel panelTitle=\"Histórico de alteração\">\r\n        <div class=\"d-flex justify-content-center mb-3\" [hidden]=\"!loadingDetails\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <custom-table [hidden]=\"loadingDetails\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n              <!-- <th scope=\"col\">Alteração</th> -->\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let alteracao of alteracoes\">\r\n              <td class=\"text-center\">{{ alteracao.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td>{{ alteracao.DS_USUA_CADA | uppercase }}</td>\r\n              <!-- <td>{{ alteracao.nomeUsuario | uppercase }}</td> -->\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel || viewHistorico\">\r\n      <detail-panel panelTitle=\"Aguardando Resposta\">\r\n        <div class=\"d-flex justify-content-center mb-3\" [hidden]=\"!loadingDetails\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div class=\"text-center\" [hidden]=\"loadingDetails\">\r\n          <blockquote class=\"blockquote mx-5\">\r\n            <p class=\"text-danger mb-0\">{{solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_MOTI | uppercase}}</p>\r\n            <footer class=\"blockquote-footer\">\r\n              <small class=\"text-muted\">\r\n                {{solicitacaoSelecionada?.DT_SOLI }}\r\n              </small>\r\n            </footer>\r\n            <footer class=\"blockquote-footer\">\r\n              <small class=\"text-muted\">\r\n                  <cite >{{solicitacaoSelecionada?.DS_SOLI }}</cite>\r\n              </small>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #detalhesSolicitacao>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Detalhes da Solicitação #{{solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_APRO}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-1\" role=\"status\" *ngIf=\"loadingModal\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"text-center\">\r\n        <blockquote class=\"blockquote mx-5\">\r\n          <p class=\"text-danger mb-0\">{{solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_MOTI | uppercase}}</p>\r\n          <footer class=\"blockquote-footer\">\r\n            <small class=\"text-muted\">\r\n              {{solicitacaoSelecionada?.DT_SOLI }}\r\n            </small>\r\n          </footer>\r\n          <footer class=\"blockquote-footer\">\r\n            <small class=\"text-muted\">\r\n                <cite >{{solicitacaoSelecionada?.DS_SOLI }}</cite>\r\n            </small>\r\n          </footer>\r\n        </blockquote>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <span class=\"mr-3\"  [tooltip]=\"viewDetailsSolicitante == 1 ? 'Exibir Detalhes do Solicitante' : 'Ocultar Detalhes do Solicitante'\" placement=\"right\" container=\"body\">\r\n          <button type=\"button\"  [hidden]=\"loadingModal\" class=\"btn-icon-sm\" (click)=\"detailsSolicitante($event)\">\r\n            <i  [ngClass]=\"viewDetailsSolicitante == '1' ? 'fas fa-eye' : 'fas fa-eye-slash'\"></i>\r\n          </button>\r\n        </span>\r\n        <hr>\r\n      </div>\r\n      <div class=\"col-12\" [hidden]=\"loadingModal || viewDetailsSolicitante == 1\">\r\n        <div class=\"d-flex justify-content-between col\" >\r\n          <div>\r\n            <div>\r\n              <h6 class=\"title pull-left\">Detalhes do Solicitante</h6>\r\n            </div>\r\n            <img src=\"data:image/png;base64,{{ contato?.FOTO }}\" class=\"rounded-circle\" alt=\"\" height=\"200px\" *ngIf=\"contato?.FOTO != null\">\r\n            <i class=\"fas fa-user-circle text-muted\" *ngIf=\"contato?.FOTO == null || contato?.FOTO == ''\" style=\"font-size: 8rem;\"></i>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-group\">\r\n              <label>Nome</label>\r\n              <span class=\"d-block\" *ngIf=\"contato?.NM_USUA != null || contato?.NM_USUA == ''\">{{ contato?.NM_USUA }}</span>\r\n              <span class=\"d-block\" *ngIf=\"contato?.NM_USUA == null || contato?.NM_USUA == ''\">NÃO INFORMADO</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>E-mail</label>\r\n              <span class=\"d-block\" *ngIf=\"contato?.MAIL != null || contato?.MAIL == ''\">{{ contato?.MAIL }}</span>\r\n              <span class=\"d-block\" *ngIf=\"contato?.MAIL == null || contato?.MAIL == ''\">NÃO INFORMADO</span>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label>Telefone</label>\r\n              <span class=\"d-block\" *ngIf=\"contato?.TELE != null || contato?.TELE != ''\">{{ contato?.TELE }}</span>\r\n              <span class=\"d-block\" *ngIf=\"contato?.TELE == null || contato?.TELE == ''\">NÃO INFORMADO</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Cargo</label>\r\n              <span class=\"d-block\" *ngIf=\"contato?.CARG != null || contato?.CARG != ''\">{{ contato?.CARG }}</span>\r\n              <span class=\"d-block\" *ngIf=\"contato?.CARG == null || contato?.CARG == ''\">NÃO INFORMADO</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Departamento</label>\r\n              <span class=\"d-block\" *ngIf=\"contato?.DEPA != null || contato?.DEPA != ''\">{{ contato?.DEPA }}</span>\r\n              <span class=\"d-block\" *ngIf=\"contato?.DEPA == null || contato?.DEPA == ''\">NÃO INFORMADO</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div class=\"form-row justify-content-center  text-center\">\r\n          <div class=\"form-group col-lg-2\">\r\n            <label>ID</label>\r\n            <div *ngIf=\"solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_NF == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_NF != null\">{{solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_NF}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label>Fornecedor</label>\r\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_FORN == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_FORN != null\">{{ solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_FORN}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label>Status de Recebimento</label>\r\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_STAT_RECE == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_STAT_RECE != null\"> {{solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_STAT_RECE}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-4\">\r\n            <label>Depósito</label>\r\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_DEPO == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_DEPO != null\">{{ solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_DEPO }}</div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 3\">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"motivos\">Motivo</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [items]=\"motivos\"\r\n                  [virtualScroll]=\"true\"\r\n                  dropdownPosition=\"bottom\"\r\n                  placeholder=\"Selecione...\"\r\n                  labelForId=\"ID_LOGI_ENTR_MATE_MOTI\"\r\n                  bindLabel=\"DS_LOGI_ENTR_MATE_MOTI\"\r\n                  bindValue=\"ID_LOGI_ENTR_MATE_MOTI\"\r\n                  id=\"ID_LOGI_ENTR_MATE_MOTI\"\r\n                  formControlName=\"ID_LOGI_ENTR_MATE_MOTI\" \r\n                  [ngClass]=\"onFieldError('ID_LOGI_ENTR_MATE_MOTI') + ' ' + onFieldRequired('ID_LOGI_ENTR_MATE_MOTI')\"\r\n                  >\r\n                </ng-select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENTR_MATE_MOTI')\" message=\"Motivo é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"DS_OBSE\" >Descrição:</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                id=\"DS_OBSE\" \r\n                formControlName=\"DS_OBSE\" \r\n                rows=\"3\"\r\n                [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\">\r\n              </textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 3\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"changeType()\"\r\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-success fas fa-thumbs-up\"></i>\r\n            </span>Aprovar\r\n          </button>\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"changeType()\"\r\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n            </span>Reprovar\r\n          </button>\r\n          <a \r\n            ngif=\"contato?.MAIL != 0 || contato?.MAIL != 'null'\"\r\n            role=\"button\"\r\n            class=\"btn btn-default btn-lg m-2\"\r\n            href=\"mailto:{{contato?.MAIL}}\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-primary fas fa-envelope\"></i>\r\n            </span>Questioná-lo\r\n          </a>\r\n        </div>\r\n        <div  class=\"card\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 1\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title text-success\">Solicitação Aprovada</h5>\r\n            <p class=\"card-text\"><strong>Motivo:</strong> </p>\r\n            <p class=\"card-text\"><strong>Descrição:</strong> </p>\r\n            <p class=\"card-text\"><strong>Responsável:</strong> </p>\r\n            <p class=\"card-text\"><strong>Data:</strong> </p>         \r\n          </div>\r\n        </div>\r\n        <div  class=\"card\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 2 \">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title text-danger\">Solicitação Reprovada</h5>\r\n            <p class=\"card-text\"><strong>Motivo:</strong> </p>\r\n            <p class=\"card-text\"><strong>Descrição:</strong> </p>\r\n            <p class=\"card-text\"><strong>Responsável:</strong> </p>\r\n            <p class=\"card-text\"><strong>Data:</strong> </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "hG8s":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/lista/lista.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hG8s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3RpcG9zLWNvbmZvcm1pZGFkZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "iJlz":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/entrada-materiais.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iJlz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"ENTRADA DE MATERIAIS\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\r\n</app-body>";
      /***/
    },

    /***/
    "io96":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SulFluminenseEntradaMateriaisComponent */

    /***/
    function io96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEntradaMateriaisComponent", function () {
        return SulFluminenseEntradaMateriaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entrada-materiais.component.html */
      "bM+B");
      /* harmony import */


      var _entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entrada-materiais.component.scss */
      "ULR/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      var SulFluminenseEntradaMateriaisComponent = /*#__PURE__*/function () {
        function SulFluminenseEntradaMateriaisComponent(atividadesService, router, titleService, pnotify, activatedRoute) {
          _classCallCheck(this, SulFluminenseEntradaMateriaisComponent);

          this.atividadesService = atividadesService;
          this.router = router;
          this.titleService = titleService;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.loading = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/sul-fluminense/home'
          }, {
            descricao: 'Entrada de materiais'
          }];
          this.atividades = [];
        }

        _createClass(SulFluminenseEntradaMateriaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this78 = this;

            this.titleService.setTitle('Entrada de materiais');
            this.activatedRoute.params.subscribe(function (params) {
              _this78.registrarAcesso();

              _this78.getAtividadesInternas(params['idSubModulo']);
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
            var _this79 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (res) {
              if (res['responseCode'] === 200) {
                _this79.atividades = res['result'];
                _this79.loading = false;
              } else {
                _this79.handleAtividadesInternasError();
              }
            }, function (error) {
              _this79.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotify.error();
            this.router.navigate(['/sul-fluminense/home']);
          }
        }]);

        return SulFluminenseEntradaMateriaisComponent;
      }();

      SulFluminenseEntradaMateriaisComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SulFluminenseEntradaMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sul-fluminense-entrada-materiais',
        template: _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SulFluminenseEntradaMateriaisComponent);
      /***/
    },

    /***/
    "jpKr":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/notas-fiscais/cadastro/cadastro.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jpKr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"NOTAS FISCAIS\">\r\n  <button\r\n    [disabled]=\"form.valid === false || loadingNavBar === true || noMaterial === false \"\r\n    (click)=\"postNotasFiscais()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Dados da Nota Fiscal</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"NR_NOTA_FISC\">Nota Fiscal</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              pattern=\"[0-9]+$\"\r\n              id=\"NR_NOTA_FISC\"\r\n              formControlName=\"NR_NOTA_FISC\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NR_NOTA_FISC') + ' ' + onFieldRequired(form.controls.NR_NOTA_FISC)\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NR_NOTA_FISC') == 'required'\" message=\"Nota Fiscal é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-8 pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"NM_FORN\">Fornecedor</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(alterarFornecedor)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_FORN\"\r\n              formControlName=\"NM_FORN\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_FORN') + ' ' + onFieldRequired(form.controls.NM_FORN)\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_FORN')\" message=\"Fornecedor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"DT_INIC\">Data de Emissão</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n              </div>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"DT_EMIS_NOTA_FISC\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Selecione...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_EMIS_NOTA_FISC\"\r\n              [ngClass]=\"onFieldError('DT_EMIS_NOTA_FISC') + ' ' + onFieldRequired(form.controls.DT_EMIS_NOTA_FISC)\"\r\n              >\r\n              <invalid-form-control [show]=\"onFieldInvalid('DT_EMIS_NOTA_FISC')\" message=\"Data de emissão do contrato é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-8 pl-0\">\r\n            <label for=\"statusRecebimento\">Status de Recebimento</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"statusRecebimento\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"Selecione...\"\r\n            [loading]=\"loadingStatusRecebimento\"\r\n            labelForId=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n            bindLabel=\"NM_STAT\"\r\n            bindValue=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n            id=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n            formControlName=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n            (change)=\"checkStatus($event, popupStatus)\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENMA_NOFI_STAT')\" message=\"Status de Recebimento é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"empresas\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingEmpresas\"\r\n              labelForId=\"UUID_EMPR\"\r\n              bindLabel=\"NM_FANT\"\r\n              bindValue=\"ID\"\r\n              id=\"UUID_EMPR\"\r\n              formControlName=\"UUID_EMPR\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Materiais</legend>\r\n        <div class=\"row\" *ngIf=\"loadingMateriais\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-cog fa-spin\"\r\n              text=\"Estamos pesquisando os materiais para você...\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"materiais\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\"></div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddMaterial()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of formMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-1 pl-0\">\r\n                  <label for=\"SEQU_MATE\">Sequência</label>\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    id=\"SEQU_MATE\"\r\n                    formControlName=\"SEQU_MATE\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'SEQU_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'SEQU_MATE')\">\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\r\n                  <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"DS_UNID_MEDI\"\r\n                  formControlName=\"DS_UNID_MEDI\"\r\n                  [ngClass]=\"onNestedFieldError('materiais', i, 'DS_UNID_MEDI') + ' ' + onNestedFieldRequired('materiais', i, 'DS_UNID_MEDI')\"\r\n                >\r\n                  <option >KG</option>\r\n                  <option >TON</option>\r\n                  <option >PC</option>\r\n                  <option >UN</option>\r\n                </select>\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"TT_MATE\">Quantidade</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"TT_MATE\"\r\n                    formControlName=\"TT_MATE\"\r\n                    currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE')\">\r\n                </div>\r\n                <div class=\"form-group col-md-2 pl-0\">\r\n                  <label for=\"DS_LOTE\">Lote</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"DS_LOTE\"\r\n                    formControlName=\"DS_LOTE\"\r\n                  >\r\n                </div>\r\n                <div class=\"form-group col-md-4 pl-0\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"NM_MATE\">Material</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                      <a\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(selecionarMateriais, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NM_MATE\"\r\n                    formControlName=\"NM_MATE\"\r\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'NM_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'NM_MATE')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMaterial(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea\r\n            class=\"form-control\"\r\n            id=\"DS_OBSE\"\r\n            formControlName=\"DS_OBSE\"\r\n            rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #alterarFornecedor>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Fornecedor</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingFornecedores\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaFornecedor\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"IN_STAT\"\r\n              >\r\n                <option value=\"1\">Ativo</option>\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"\">Exhibir Todos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_REFE_ERP\">Cód. Fornecedor</option>\r\n                <option value=\"NM_RAZA_SOCI\" selected>Razão Social</option>\r\n                <option value=\"NM_FANT\">Nome Fantasia</option>\r\n                <option value=\"NR_CNPJ_CPF\">CNPJ</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-6\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span\r\n                      [tooltip]=\"formPesquisaFornecedor.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formPesquisaFornecedor.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getFornecedores()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingFornecedores && !noFornecedor\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Cód. Fornecedor</th>\r\n            <th>Razão Social</th>\r\n            <th>Nome Fantasia</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let fornecedor of fornecedores | slice : begin : end; let i = index\">\r\n            <td>{{ fornecedor.ID_REFE_ERP }}</td>\r\n            <td>{{ fornecedor.NM_RAZA_SOCI }}</td>\r\n            <td>{{ fornecedor.NM_FANT }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Fornecedor\"\r\n                container=\"body\"\r\n                (click)=\"setFornecedor(fornecedor);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #selecionarMateriais>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Materiais</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingAllMateriais\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formAllMateriais\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"IN_STAT\"\r\n              >\r\n                <option value=\"1\">Ativo</option>\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"\">Exhibir Todos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_REFE_ERP\">Cód. Material</option>\r\n                <option value=\"NM_MATE\" selected> Nome Material</option>\r\n                <option value=\"NM_CLAS\">Classe</option>\r\n                <option value=\"NM_LINH\">Linha</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-6\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span\r\n                      [tooltip]=\"formAllMateriais.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formAllMateriais.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getAllMateriais()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingAllMateriais && !noAllMateriais\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Cód. Material</th>\r\n            <th>Nome Material</th>\r\n            <th>Classe</th>\r\n            <th>Linha</th>\r\n            <th>Unidade de Medida</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of allMateriais | slice : begin : end; let i = index\">\r\n            <td>{{ material.ID_REFE_ERP }}</td>\r\n            <td>{{ material.NM_MATE }}</td>\r\n            <td>{{ material.NM_CLAS }}</td>\r\n            <td>{{ material.NM_LINH }}</td>\r\n            <td>{{ material.NM_APOI_UNID_MEDI }} </td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Material\"\r\n                container=\"body\"\r\n                (click)=\"setMaterial(material);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"totalItemsMaterial > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItemsMaterial ? totalItemsMaterial : currentPage*(itemsPerPage) }} de {{ totalItemsMaterial }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItemsMaterial\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #popupStatus>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Alteração de Status de Recebimento</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hidePopup()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3\" >\r\n          <div class=\"text-center\">\r\n            <i class=\"text-muted fas fa-file-excel fa-4x mt-3\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n          <p>\r\n            <strong>Não encontramos nenhuma ficha de não conformidade para essa nota fiscal.</strong>\r\n          </p>\r\n\r\n          <p>\r\n            <strong>Deseja abrir uma ficha de não conformidade agora?</strong>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button\r\n      type=\"button\"\r\n      class=\"btn btn-success \"\r\n      target=\"_blank\"\r\n      (click)=\"gerarFicha()\"\r\n    >\r\n      <span aria-hidden=\"true\">\r\n      </span>Sim\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-danger \"\r\n      (click)=\"hidePopup()\"\r\n    >\r\n      <span aria-hidden=\"true\">\r\n      </span>Não\r\n    </button>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "jsYm":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/lista.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jsYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"NOTAS FISCAIS\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"getExport()\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"ID_LOGI_ENMA_NOFI\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_ENMA_NOFI\"\r\n                formControlName=\"ID_LOGI_ENMA_NOFI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"NR_NOTA_FISC\">NOTA FISCAL</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NR_NOTA_FISC\"\r\n                formControlName=\"NR_NOTA_FISC\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-5 pl-0\">\r\n              <label for=\"NM_FORN\">Fornecedor</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_FORN\"\r\n                formControlName=\"NM_FORN\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (keydown.enter)=\"onFilter()\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DS_LOTE\">Lote</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"DS_LOTE\"\r\n                formControlName=\"DS_LOTE\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"CD_MATE\">CÓDIGO DO MATERIAL</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"CD_MATE\"\r\n                formControlName=\"CD_MATE\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-8 pl-0\">\r\n              <label for=\"NM_MATE\">MATERIAL</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"NM_MATE\"\r\n                formControlName=\"NM_MATE\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"TP_DATA_INIC\">Tipo Data Inicial</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tiposData\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipoData\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipoData\"\r\n              formControlName=\"TP_DATA_INIC\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"TP_DATA_FINA\">Tipo Data Final</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tiposData\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipoData\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipoData\"\r\n              formControlName=\"TP_DATA_FINA\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-5 pl-0\">\r\n              <label for=\"empresas\">Empresa</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingEmpresas\"\r\n                labelForId=\"UUID_EMPR\"\r\n                bindLabel=\"NM_FANT\"\r\n                bindValue=\"ID\"\r\n                id=\"UUID_EMPR\"\r\n                formControlName=\"UUID_EMPR\"\r\n                (change)=\"getDepositos({'ID_EMPR': $event?.ID || ''})\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-3 pl-0\">\r\n              <label for=\"statusRecebimento\">Status de Recebimento</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"statusRecebimento\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingStatusRecebimento\"\r\n                labelForId=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n                bindLabel=\"NM_STAT\"\r\n                bindValue=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n                id=\"ID_LOGI_ENMA_NOFI_STAT\"\r\n                formControlName=\"ID_LOGI_ENMA_NOFI_STAT\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_INIC\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_INIC\"\r\n                type=\"text\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_INIC\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_FINA\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_FINA\"\r\n                type=\"text\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_FINA\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-5 pl-0\">\r\n              <label for=\"depositos\">Deposito</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"depositos\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingDepositos\"\r\n                labelForId=\"UUID_DEPO\"\r\n                bindLabel=\"NM_DEPO\"\r\n                bindValue=\"ID\"\r\n                id=\"UUID_DEPO\"\r\n                formControlName=\"UUID_DEPO\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n    <div class=\"col-md-4 mb-4 mb-md-0\">\r\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n        <div class=\"bg-primary rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file\"></i></div>\r\n        <div class=\"text-right\" [hidden]=\"!cardsLoading || notasEmpty\" >\r\n          <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"notas\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoNotas = $event\">\r\n          {{ countoNotas | number:'1.0-0' }}\r\n          </h5>\r\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS ENCONTRADAS</div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"notasEmpty\">\r\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\r\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS ENCONTRADAS</div>\r\n        </div>\r\n        <div class=\"text-right my-auto\" *ngIf=\"!cardsLoading && !notasEmpty\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 mb-4 mb-md-0\">\r\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\" (click)=\"fichasNaoConformeChange()\">\r\n        <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-excel\"></i></div>\r\n        <div class=\"text-right\" [hidden]=\"!cardsLoading || fichasNaoConformeEmpty\">\r\n          <h5\r\n            class=\"font-weight-bolder mb-1\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"fichasNaoConforme\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"2\"\r\n            (countoChange)=\"countoFichasNaoConforme = $event\">\r\n            {{ countoFichasNaoConforme | number:'1.0-0' }}\r\n          </h5>\r\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS COM FNC</div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"fichasNaoConformeEmpty\">\r\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\r\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS COM FNC</div>\r\n        </div>\r\n        <div class=\"text-right my-auto\" *ngIf=\"!cardsLoading && !fichasNaoConformeEmpty\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 mb-4 mb-md-0\">\r\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\" (click)=\"openModalDuplicadas(modalDuplicadas)\">\r\n        <div class=\"bg-warning rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-exclamation\"></i></div>\r\n        <div class=\"text-right\" [hidden]=\"!cardsLoading || duplicadosEmpty\">\r\n          <h5\r\n            class=\"font-weight-bolder mb-1\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"duplicados\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"2\"\r\n            (countoChange)=\"countoDuplicados = $event\">\r\n            {{ countoDuplicados | number:'1.0-0' }}\r\n          </h5>\r\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE LOTES DUPLICADAS</div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"duplicadosEmpty\">\r\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\r\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE LOTES DUPLICADAS</div>\r\n        </div>\r\n        <div class=\"text-right my-auto\" *ngIf=\"!cardsLoading && !duplicadosEmpty\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0 col-md-12\" >\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('ID_LOGI_ENMA_NOFI')\">\r\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_NOFI'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NR_NOTA_FISC_REFE')\">\r\n                <thead-sorter value=\"Nota Fiscal\" [active]=\"ORDE_BY == 'NR_NOTA_FISC_REFE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('SG_ORIG')\">\r\n                <thead-sorter value=\"Origem\" [active]=\"ORDE_BY == 'SG_ORIG'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_FORN')\">\r\n                <thead-sorter value=\"Fornecedor\" [active]=\"ORDE_BY == 'NM_FORN'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_STAT')\">\r\n                <thead-sorter value=\"Status\" [active]=\"ORDE_BY == 'NM_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_EMPR')\">\r\n                <thead-sorter value=\"Empresa\" [active]=\"ORDE_BY == 'NM_EMPR'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_DEPO')\">\r\n                <thead-sorter value=\"Depósito\" [active]=\"ORDE_BY == 'NM_DEPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('DT_EMIS_NOTA_FISC')\">\r\n                <thead-sorter value=\"Data de Emissão\" [active]=\"ORDE_BY == 'DT_EMIS_NOTA_FISC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" style=\"width:140px\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let nota of notasFiscais\" >\r\n              <td  [ngClass]=\"nota.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{nota.ID_LOGI_ENMA_NOFI }}\r\n              </td>\r\n              <td >\r\n                <span *ngIf=\"nota?.NR_NOTA_FISC_REFE\">{{ nota.NR_NOTA_FISC_REFE }}</span>\r\n                <span *ngIf=\"!nota?.NR_NOTA_FISC_REFE\">{{ nota.NR_NOTA_FISC }}</span>\r\n              </td>\r\n              <td >{{ nota.SG_ORIG | uppercase }}</td>\r\n              <td >{{ nota.NM_FORN | uppercase }}</td>\r\n              <td >{{ nota.NM_STAT | uppercase }}</td>\r\n              <td >{{ nota.NM_EMPR | uppercase }}</td>\r\n              <td >{{ nota.NM_DEPO | uppercase }}</td>\r\n              <td >{{ nota.DT_EMIS_NOTA_FISC | date: 'dd/MM/yyyy' }}</td>\r\n              <td class=\"align-middle\">\r\n                <span class=\"mx-2\" [tooltip]=\"nota.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(nota)\">\r\n                    <i [ngClass]=\"nota.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mx-2\" tooltip=\"Gerar FNC\"  placement=\"left\" container=\"body\">\r\n                  <button \r\n                    type=\"button\" \r\n                    [ngClass]=\"nota.IN_FHNC == '1' ? 'btn-icon-sm buttonGerarFicha' : 'btn-icon-sm'\"\r\n                    (click)=\"gerarFicha(nota.ID_LOGI_ENMA_NOFI)\"\r\n                  >\r\n                    <i class=\"fas fa-file-excel \" ></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mx-2\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', nota.ID_LOGI_ENMA_NOFI]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mx-2\"  tooltip=\"Detalhe da Nota\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalDetalhes(detalhesNotaFiscal, nota)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #detalhesNotaFiscal >\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Detalhes da Nota Fiscal  -  Nº {{notaFiscalSelecionada?.NR_NOTA_FISC}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingMateriais || loadingAlteracoes\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalDetalhes()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" >\r\n      <tabset>\r\n        <tab heading=\"Dados cadastrais\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <div class=\"modal-body\" >\r\n              <div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-2\">\r\n                    <label>ID</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.ID_LOGI_ENMA_NOFI == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.ID_LOGI_ENMA_NOFI != null\">{{notaFiscalSelecionada?.ID_LOGI_ENMA_NOFI}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-2\">\r\n                    <label>Nota Fiscal de Remessa</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NR_NOTA_FISC_REFE == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NR_NOTA_FISC_REFE != null\">{{notaFiscalSelecionada?.NR_NOTA_FISC_REFE}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-3\">\r\n                    <label>Status de Recebimento</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_STAT == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_STAT != null\"> {{notaFiscalSelecionada?.NM_STAT | uppercase }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-5\">\r\n                    <label>Fornecedor</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_FORN == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_FORN != null\">{{ notaFiscalSelecionada?.NM_FORN}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-2\">\r\n                    <label>Data de Emissão</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_EMIS_NOTA_FISC == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_EMIS_NOTA_FISC != null\">{{ notaFiscalSelecionada?.DT_EMIS_NOTA_FISC | date: 'dd/MM/yyyy' }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-2\">\r\n                    <label>Data de Recebimento</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_RECE == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_RECE != null\">{{ notaFiscalSelecionada?.DT_RECE | date: 'dd/MM/yyyy' }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-3\">\r\n                    <label>Data de Entrada</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_ENTR == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_ENTR != null\">{{ notaFiscalSelecionada?.DT_ENTR | date: 'dd/MM/yyyy' }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-2\">\r\n                    <label>Empresa</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_EMPR == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_EMPR != null\">{{ notaFiscalSelecionada?.NM_EMPR }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-3\">\r\n                    <label>Depósito</label>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_DEPO == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_DEPO != null\">{{ notaFiscalSelecionada?.NM_DEPO }}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n              <div [hidden]=\"!loadingMateriais\" class=\"col-lg-12 text-muted \">\r\n                <p><strong>Buscando os materiais da Nota Fiscal...</strong></p>\r\n              </div>\r\n              <custom-table class=\"text-center\" *ngIf=\"!loadingMateriais && !noMateriais\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th>ID </th>\r\n                    <th>Sequência</th>\r\n                    <th>Lote</th>\r\n                    <th>Cód. Material</th>\r\n                    <th>Material</th>\r\n                    <th>Classe</th>\r\n                    <th>Unidade de Medida</th>\r\n                    <th>Quantidade</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let item of materiais\">\r\n                    <td>{{item.ID_MATE}}</td>\r\n                    <td>{{item.SEQU_MATE}}</td>\r\n                    <td *ngIf=\"item.DS_LOTE != null\" >{{item.DS_LOTE}}</td>\r\n                    <td *ngIf=\"item.DS_LOTE == null\" >NÃO INFORMADO</td>\r\n                    <td>{{item.CD_MATE}}</td> \r\n                    <td>{{item.NM_MATE}}</td>\r\n                    <td>{{item.NM_CLAS}}</td>\r\n                    <td>{{item.DS_UNID_MEDI}}</td>\r\n                    <td>{{item.TT_MATE | number:'1.3-3' }}</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <br><hr>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                  <label>Usuário Responsável Pelo Cadastro</label>\r\n                  <div *ngIf=\"notaFiscalSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"notaFiscalSelecionada?.NR_MATR != null\">{{notaFiscalSelecionada?.NR_MATR}} - {{ notaFiscalSelecionada?.NM_USUA }}</div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                  <label>Data do Cadastro</label>\r\n                  <div *ngIf=\"notaFiscalSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"notaFiscalSelecionada?.DT_INCL != null\">{{ notaFiscalSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                  <label>Origem</label>\r\n                  <div *ngIf=\"notaFiscalSelecionada?.SG_ORIG == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"notaFiscalSelecionada?.SG_ORIG != null\">{{ notaFiscalSelecionada?.SG_ORIG }}</div>\r\n                </div>\r\n              </div>\r\n              <div [hidden]=\"loadingMateriais || !noMateriais\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n                <empty-result message=\"Nenhum material encontrado\"></empty-result>\r\n              <br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Alterações da Nota Fiscal\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n            <div [hidden]=\"!loadingAlteracoes\" class=\"col-lg-12 text-muted \">\r\n              <p><strong>Buscando as alterações da Nota Fiscal...</strong></p>\r\n            </div>\r\n            <div class=\"ScrollHistorico\">\r\n              <accordion  *ngFor=\"let alteracao of alteracoes\" [hidden]=\"loadingAlteracoes || noAlteracoes\">\r\n                <accordion-group class=\"mb-2\" [heading]=\"titleHistorico(alteracao)\" >\r\n                  <div class=\"form-row\">\r\n                    <div *ngIf=\"typeChange(alteracao)\" class=\"col-lg-12 text-muted \">\r\n                      <p><strong>Alteração realizada apenas nos materiais</strong></p>\r\n                    </div>\r\n                    <div class=\"form-group col-md-3\" *ngIf=\"alteracao.NR_NOTA_FISC != null\">\r\n                      <label>NOTA FISCAL</label>\r\n                      <div >{{ alteracao.NR_NOTA_FISC }}</div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-3\" *ngIf=\"alteracao.NR_NOTA_FISC_REFE != null\">\r\n                      <label>NOTA FISCAL REMESSA</label>\r\n                      <div >{{ alteracao.NR_NOTA_FISC_REFE }}</div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.NM_STAT != null\">\r\n                      <label>STATUS DE RECEBIMENTO</label>\r\n                      <div >{{ alteracao.NM_STAT }}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.NM_EMPR != null\">\r\n                      <label>EMPRESA</label>\r\n                      <div>{{ alteracao.NM_EMPR }}</div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.NM_FORN != null\">\r\n                      <label>FORNECEDOR</label>\r\n                      <div>{{ alteracao.NM_FORN }}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.DT_EMIS_NOTA_FISC != null\">\r\n                      <label>DATA DE EMISSÃO</label>\r\n                      <div>{{ alteracao.DT_EMIS_NOTA_FISC | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.IN_STAT != null\">\r\n                      <label>SITUAÇÃO</label>\r\n                      <div *ngIf=\"alteracao.IN_STAT == 0\" class=\"text-danger\">INATIVO</div>\r\n                      <div *ngIf=\"alteracao.IN_STAT != 0\" class=\"text-success\">ATIVO</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\" *ngIf=\"alteracao.DS_OBSE != null\">\r\n                    <div class=\"form-group col-md-12\" >\r\n                      <label>OBSERVAÇÃO</label>\r\n                      <textarea class=\"form-control\" [value]=\"alteracao.DS_OBSE\" disabled>\r\n                      </textarea><br>\r\n                    </div>\r\n                  </div>\r\n                </accordion-group>\r\n              </accordion>\r\n              <div [hidden]=\"loadingAlteracoes || !noAlteracoes\" class=\"text-center d-flex justify-content-center align-items-center mb-2\" style=\"height: 80%\">\r\n                <empty-result message=\"Nenhuma alteração encontrada\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Alterações dos Materiais\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n            <div [hidden]=\"!loadingHistoricoMateriais\" class=\"col-lg-12 text-muted \">\r\n              <p><strong>Buscando as alterações da Nota Fiscal...</strong></p>\r\n            </div>\r\n            <div class=\"ScrollHistorico\">\r\n              <accordion  *ngFor=\"let alteracaoMateriais of historicoMateriais\" [hidden]=\"loadingHistoricoMateriais || hasHistoricoMateriais()\">\r\n                <accordion-group class=\"mb-2\" [heading]=\"titleHistorico(alteracaoMateriais)\" >\r\n                  <custom-table class=\"text-center\" *ngIf=\"!hasHistoricoMateriais()\">\r\n                    <ng-template #thead let-thead>\r\n                      <tr *ngIf=\"alteracaoMateriais.SEQU_MATE\">\r\n                        <th>ID </th>\r\n                        <th>Sequência</th>\r\n                        <th>Lote</th>\r\n                        <th>Material</th>\r\n                        <th>Classe</th>\r\n                        <th>Unidade de Medida</th>\r\n                        <th>Quantidade</th>\r\n                      </tr>\r\n                      <tr *ngIf=\"!alteracaoMateriais.SEQU_MATE\">\r\n                        <th>MATERIAL REMOVIDO DA NOTA FISCAL</th>\r\n                        <th>Lote</th>\r\n                        <th>Classe</th>\r\n                        <th>Unidade de Medida</th>\r\n                        <th>Quantidade</th>\r\n                      </tr>\r\n                    </ng-template>\r\n                    <ng-template #tbody let-tbody>\r\n                      <tr *ngIf=\"alteracaoMateriais.SEQU_MATE\">\r\n                        <td>{{alteracaoMateriais.ID_MATE}}</td>\r\n                        <td>{{alteracaoMateriais.SEQU_MATE}}</td>\r\n                        <td>{{alteracaoMateriais.DS_LOTE}}</td>\r\n                        <td>{{alteracaoMateriais.CD_MATE}} - {{alteracaoMateriais.NM_MATE}}</td>\r\n                        <td>{{alteracaoMateriais.NM_CLAS}}</td>\r\n                        <td>{{alteracaoMateriais.DS_UNID_MEDI}}</td>\r\n                        <td>{{alteracaoMateriais.TT_MATE | number:'1.3-3' }}</td>\r\n                      </tr>\r\n                      <tr *ngIf=\"!alteracaoMateriais.SEQU_MATE\">\r\n                        <td>{{alteracaoMateriais.CD_MATE}} - {{alteracaoMateriais.NM_MATE}}</td>\r\n                        <td>{{alteracaoMateriais.DS_LOTE}}</td>\r\n                        <td>{{alteracaoMateriais.NM_CLAS}}</td>\r\n                        <td>{{alteracaoMateriais.DS_UNID_MEDI}}</td>\r\n                        <td>{{alteracaoMateriais.TT_MATE | number:'1.3-3' }}</td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </custom-table>\r\n                </accordion-group>\r\n              </accordion>\r\n              <div [hidden]=\"loadingHistoricoMateriais || !hasHistoricoMateriais() \" class=\"text-center d-flex justify-content-center align-items-center mb-2\" style=\"height: 80%\">\r\n                <empty-result message=\"Nenhuma alteração encontrada\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #modalDuplicadas >\r\n    <div class=\"modal-header\" >\r\n      <h4 class=\"modal-title pull-left\">Lotes Duplicados</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalDuplicadas()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <logistica-entrada-materiais-notas-fiscais-duplicadas>\r\n\r\n    </logistica-entrada-materiais-notas-fiscais-duplicadas>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "jsif":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/lista/lista.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisStatusRecebimentoListaComponent */

    /***/
    function jsif(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisStatusRecebimentoListaComponent", function () {
        return LogisticaEntradaMateriaisStatusRecebimentoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "LEko");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "8gyq");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/status-recebimento.service */
      "9bNu");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisStatusRecebimentoListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisStatusRecebimentoListaComponent(route, pnotify, activatedRoute, statusRecebimentoService, formBuilder, xlsxService, confirmModalService, routerService, dateService, detailPanelService) {
          _classCallCheck(this, LogisticaEntradaMateriaisStatusRecebimentoListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.statusRecebimentoService = statusRecebimentoService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.detailPanelService = detailPanelService;
          this.showDetailPanel = false;
          this.ORDE_BY = 'ID_LOGI_ENMA_NOFI_STAT';
          this.ORDE_TYPE = 'desc'; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false; //VARIAVEIS

          this.totalItens = [];
          this.historicos = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos Status (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
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

        _createClass(LogisticaEntradaMateriaisStatusRecebimentoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this80 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this80.routerService.getBase64UrlParams(response);

              _this80.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this80.itemsPerPage = _response.TT_REGI_PAGI;

              _this80.getStatusRecebimento(_this80.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this81 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this81.showDetailPanel = event.showing;
            });
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
              ID_LOGI_ENMA_NOFI_STAT: [null],
              NM_STAT: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()],
              ORDE_BY: [this.ORDE_BY],
              ORDE_TYPE: [this.ORDE_TYPE]
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Status de Recebimento'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
            this.form.get('ORDE_BY').setValue(this.ORDE_BY);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(status) {
            this.detailPanelService.show();
            this.statusSelecionado = status;
            this.getHistorico(status); //this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "getStatusRecebimento",
          value: function getStatusRecebimento(params) {
            var _this82 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.statusRecebimentoService.getStatusRecebimento(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this82.loading = false;
              _this82.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this82.statusRecebimento = response.body['data'];
                _this82.totalItems = response.body['total'];
                _this82.noResult = false;
              } else {
                _this82.noResult = true;
                _this82.statusRecebimento = [];
              }
            }, function (error) {
              try {
                _this82.pnotify.error(error.error.message);
              } catch (error) {
                _this82.pnotify.error();
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
          value: function classStatusBorder(status) {
            var borderClass;

            if (status.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (status.IN_STAT == 0) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(status) {
            var _this83 = this;

            var stat = status.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this83.loadingNavBar = true;
              status.IN_STAT = stat;
              return _this83.statusRecebimentoService.postStatusRecebimento(status);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this83.loadingNavBar = false;
            })).subscribe(function (success) {
              _this83.pnotify.success();
            }, function (error) {
              status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;

              _this83.pnotify.error();
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
            listagemExport = this.statusRecebimento.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Status_Recebimento".concat(dataExport));
          }
        }, {
          key: "getHistorico",
          value: function getHistorico(status) {
            var _this84 = this;

            if (status.historicos) {
              this.historicos = status.historicos;
              return;
            }

            var params = status;
            this.statusRecebimentoService.getHistorico(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this84.detailPanelService.loadedFinished(false);
            })).subscribe(function (response) {
              status.historicos = response.body['data'];
              _this84.historicos = response.body['data'];
            }, function (error) {});
          }
        }, {
          key: "getDescricaoAtualizaco",
          value: function getDescricaoAtualizaco(corrente, index) {
            var _a, _b, _c;

            if ((corrente === null || corrente === void 0 ? void 0 : corrente.TP_ACAO) === 'INSERT') {
              return 'Cadastrou o registro';
            }

            if (index == 0) {
              return 'Atualizou o registro';
            }

            if ((corrente === null || corrente === void 0 ? void 0 : corrente.IN_STAT) != ((_a = this.historicos[index - 1]) === null || _a === void 0 ? void 0 : _a.IN_STAT)) {
              if ((corrente === null || corrente === void 0 ? void 0 : corrente.IN_STAT) == 0) {
                return "Inativou o registro";
              }

              return "Ativou o registro";
            }

            if ((corrente === null || corrente === void 0 ? void 0 : corrente.DS_OBSE) != ((_b = this.historicos[index - 1]) === null || _b === void 0 ? void 0 : _b.DS_OBSE)) {
              return 'Alterou a observação';
            }

            return "Atualizou o nome do registro de ".concat((_c = this.historicos[index - 1]) === null || _c === void 0 ? void 0 : _c.NM_STAT, " para ").concat(corrente === null || corrente === void 0 ? void 0 : corrente.NM_STAT);
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.ORDE_BY === column) {
              if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
              } else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
              }
            } else {
              this.ORDE_BY = column;
              this.ORDE_TYPE = 'asc';
            }

            this.onFilter();
          }
        }]);

        return LogisticaEntradaMateriaisStatusRecebimentoListaComponent;
      }();

      LogisticaEntradaMateriaisStatusRecebimentoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisStatusRecebimentoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }];
      };

      LogisticaEntradaMateriaisStatusRecebimentoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-status-recebimento-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisStatusRecebimentoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])], LogisticaEntradaMateriaisStatusRecebimentoListaComponent);
      /***/
    },

    /***/
    "l/7K":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/cadastro/cadastro.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent */

    /***/
    function l7K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent", function () {
        return LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "IuEw");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "738o");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/status-recebimento.service */
      "9bNu");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Services
      //Bootstrap
      //Angular


      var LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent(router, formBuilder, pnotify, titleService, localeService, activatedRoute, atividadesService, statusRecebimentoService) {
          _classCallCheck(this, LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.titleService = titleService;
          this.localeService = localeService;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.statusRecebimentoService = statusRecebimentoService;
          this.breadCrumbTree = [];
          this.formData = [];
          this.disabledForm = false; //loading

          this.loading = false;
          this.loadingNavBar = false; //Interfaces

          this.statusRecebimento = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_7__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
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
            if (_params.hasOwnProperty('id')) return this.getStatusRecebimento({
              ID_LOGI_ENMA_NOFI_STAT: _params['id']
            });
          }
        }, {
          key: "getStatusRecebimento",
          value: function getStatusRecebimento(params) {
            var _this85 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.statusRecebimentoService.getStatusRecebimento(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this85.loading = false;
              _this85.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this85.form.patchValue(response.body['data'][0]);

                _this85.noResult = false;
              } else {
                _this85.noResult = true;
              }
            }, function (error) {
              _this85.pnotify.error();

              _this85.noResult = true;
            });
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Status de Recebimento',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_NOFI_STAT: [null],
              NM_STAT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              IN_STAT: [null],
              DS_OBSE: [null]
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postStatusRecebimento",
          value: function postStatusRecebimento() {
            var _this86 = this;

            this.loadingNavBar = true;
            this.statusRecebimentoService.postStatusRecebimento(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this86.loading = false;
              _this86.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this86.pnotify.success();

                _this86.router.navigate(['../'], {
                  relativeTo: _this86.activatedRoute
                });
              } else {
                _this86.pnotify.error();
              }
            }, function (error) {
              try {
                _this86.pnotify.error(error.error.message);
              } catch (error) {
                _this86.pnotify.error();
              }
            });
          }
        }]);

        return LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent;
      }();

      LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]
        }, {
          type: _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisStatusRecebimentoService"]
        }];
      };

      LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"], _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisStatusRecebimentoService"]])], LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent);
      /***/
    },

    /***/
    "l/Jf":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/painel-aprovacao/lista/lista.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisPainelAprovacaoListaComponent */

    /***/
    function lJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisPainelAprovacaoListaComponent", function () {
        return LogisticaEntradaMateriaisPainelAprovacaoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "f8jI");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "/wcd");
      /* harmony import */


      var _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../servicos/contatos/services/contato.service */
      "n8zn");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_aprovacao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/aprovacao.service */
      "r6rp");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _motivos_services_motivos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../motivos/services/motivos.service */
      "4vrJ");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisPainelAprovacaoListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisPainelAprovacaoListaComponent(route, pnotify, localeService, activatedRoute, aprovacoesService, formBuilder, contatosService, motivosService, xlsxService, modalService, confirmModalService, routerService, dateService, detailPanelService) {
          _classCallCheck(this, LogisticaEntradaMateriaisPainelAprovacaoListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.localeService = localeService;
          this.activatedRoute = activatedRoute;
          this.aprovacoesService = aprovacoesService;
          this.formBuilder = formBuilder;
          this.contatosService = contatosService;
          this.motivosService = motivosService;
          this.xlsxService = xlsxService;
          this.modalService = modalService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.detailPanelService = detailPanelService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingDetails = false;
          this.loadingNavBar = false;
          this.loadingModal = false; //VARIAVEIS

          this.totalItens = [];
          this.motivos = [];
          this.contato = [];
          this.viewDetailsSolicitante = 1; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação das Solicitações (Aprovada/Reprovada/Pendente)

          this.tipos = [{
            cod: '1',
            nome: 'Aprovada'
          }, {
            cod: '2',
            nome: 'Reprovada'
          }, {
            cod: '3',
            nome: 'Pendente'
          }]; // Subtitles (Ativo/Inativo/Pendente)

          this.subtitles = [{
            id: 1,
            text: 'Aprovada',
            color: 'green'
          }, {
            id: 2,
            text: 'Reprovada',
            color: 'red'
          }, {
            id: 3,
            text: 'Pendente',
            color: 'blue'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisPainelAprovacaoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this87 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this87.routerService.getBase64UrlParams(response);

              _this87.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this87.itemsPerPage = _response.TT_REGI_PAGI;

              _this87.getSolicitacoes(_this87.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this88 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this88.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, status) {
            this.viewDetailsSolicitante = 1;
            this.loadingModal = true;
            var _params = status.MT_LOGI_ENTR_MATE_NOME_SOLI;
            this.getMotivos();
            this.getContatos({
              'NR_MATR': _params
            });
            this.solicitacaoSelecionada = status;
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
          key: "getContatos",
          value: function getContatos(params) {
            var _this89 = this;

            if (!this.loading) this.loadingModal = true;
            this.contatosService.get(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this89.loadingModal = false;
              _this89.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this89.contato = response.body["data"][0];
              } else {
                _this89.pnotify.error();
              }
            }, function (error) {
              _this89.pnotify.error();
            });
          }
        }, {
          key: "detailsSolicitante",
          value: function detailsSolicitante(params) {
            if (this.viewDetailsSolicitante == 1) {
              this.viewDetailsSolicitante = 0;
            } else {
              this.viewDetailsSolicitante = 1;
            }
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENTR_MATE_APRO: [null],
              NM_LOGI_ENTR_MATE_NOME_SOLI: [null],
              MT_LOGI_ENTR_MATE_NOME_SOLI: [null],
              ID_LOGI_ENTR_MATE_MOTI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              DS_LOGI_ENTR_MATE_MOTI: [null],
              IN_STAT: [null],
              DT_INIC: [null],
              DS_SOLI: [null],
              DT_SOLI: [null],
              DT_FINA: [null],
              DT_APROV: [null],
              DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]],
              MATR_USUA_CADA: [null],
              DS_USUA_CADA: [null],
              DT_INCL: [null],
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Painel de Aprovações'
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
          value: function onDetails(status) {
            var _this90 = this;

            this.loadingDetails = true;
            this.detailPanelService.show();
            this.solicitacaoSelecionada = status;

            if (this.solicitacaoSelecionada.IN_STAT == 3) {
              this.viewHistorico = false;
            } else {
              this.viewHistorico = true;
            }

            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this90.loadingDetails = false;
            }, 500);
          }
        }, {
          key: "getMotivos",
          value: function getMotivos(params) {
            var _this91 = this;

            this.loadingModal = true;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            _params.DS_LOGI_ENTR_MATE_CATE_MOTI = 'APROVACAO';
            this.motivosService.getMotivos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this91.loading = false;
              _this91.loadingModal = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this91.motivos = response.body['data'];
              } else {
                _this91.motivos = [];
              }
            }, function (error) {
              _this91.pnotify.error();
            });
          }
        }, {
          key: "getSolicitacoes",
          value: function getSolicitacoes(params) {
            var _this92 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.aprovacoesService.getSolicitacoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this92.loading = false;
              _this92.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this92.solicitacoes = response.body['data'];
                _this92.totalItems = response.body['total'];
                _this92.noResult = false;
              } else {
                _this92.noResult = true;
                _this92.solicitacoes = [];
              }
            }, function (error) {
              _this92.pnotify.error();

              _this92.noResult = true;
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.detailPanelService.hide();
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
          value: function classStatusBorder(status) {
            var borderClass;

            if (status.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (status.IN_STAT == 2) {
              borderClass = 'border-danger';
            } else if (status.IN_STAT == 3) {
              borderClass = 'border-primary';
            }

            return borderClass;
          }
        }, {
          key: "requestSuccess",
          value: function requestSuccess(status) {
            var _this93 = this;

            var stat = 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
              _this93.loadingNavBar = true;
              status.IN_STAT = stat;
              return _this93.aprovacoesService.postSolicitacoes(status);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this93.loadingNavBar = false;
            })).subscribe(function (success) {
              _this93.pnotify.success();
            }, function (error) {
              _this93.pnotify.error('Erro ao aprovar a solicitação');
            });
          }
        }, {
          key: "requestFail",
          value: function requestFail(status) {
            var _this94 = this;

            var stat = 2;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
              _this94.loadingNavBar = true;
              status.IN_STAT = stat;
              return _this94.aprovacoesService.postSolicitacoes(status);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this94.loadingNavBar = false;
            })).subscribe(function (success) {
              _this94.pnotify.success();
            }, function (error) {
              _this94.pnotify.error('Erro ao reprovar a solicitação');
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, 'Confirmar Aprovação', 'Deseja realmente aprovar a solicitação ?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm(null, 'Confirmar Reprovação', 'Deseja realmente reprovar a solicitação?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.solicitacoes.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Aprovacoes".concat(dataExport));
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return LogisticaEntradaMateriaisPainelAprovacaoListaComponent;
      }();

      LogisticaEntradaMateriaisPainelAprovacaoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_aprovacao_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisPainelAprovacoesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"]
        }, {
          type: _motivos_services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsModalService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"]
        }];
      };

      LogisticaEntradaMateriaisPainelAprovacaoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-entrada-materiais-status-fiscais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_aprovacao_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisPainelAprovacoesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"], _motivos_services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsModalService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"]])], LogisticaEntradaMateriaisPainelAprovacaoListaComponent);
      /***/
    },

    /***/
    "mfeq":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/services/entrada-materiais.service.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisService */

    /***/
    function mfeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisService", function () {
        return LogisticaEntradaMateriaisService;
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

      var LogisticaEntradaMateriaisService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEntradaMateriaisService, [{
          key: "getAcessos",
          value: function getAcessos() {
            return this.http.get("".concat(this.API, "/acessos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getFornecedores",
          value: function getFornecedores(params) {
            return this.http.get("".concat(this.API, "/common/v2/fornecedores"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            return this.http.get("".concat(this.API, "/common/v2/depositos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getAllMateriais",
          value: function getAllMateriais(params) {
            return this.http.get("".concat(this.API, "/common/v2/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            return this.http.get("".concat(this.API, "/common/v2/empresas"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisService;
      }();

      LogisticaEntradaMateriaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEntradaMateriaisService);
      /***/
    },

    /***/
    "nLjI":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/lista/lista.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nLjI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scroll-ocorrencias {\n  height: 410px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n@media print {\n  #ficha-pdf {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 15px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n\nbutton[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBQ0o7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL2ZpY2hhLWNvbmZvcm1pZGFkZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtb2NvcnJlbmNpYXMge1xyXG4gIGhlaWdodDogNDEwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgI2ZpY2hhLXBkZiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "nTb2":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/parecer/lista/lista.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nTb2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"PARECER\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-5 pl-0\">\r\n              <label for=\"parecer\">Parecer</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"parecer\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingParecer\"\r\n                labelForId=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n                bindLabel=\"NM_PARE\"\r\n                bindValue=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n                id=\"ID_LOGI_ENMA_FHNC_OCPR\"\r\n                formControlName=\"ID_LOGI_ENMA_FHNC_OCPR\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              (keydown.enter)=\"onFilter()\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-1 p-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('ID_LOGI_ENMA_FHNC_OCPR')\">\r\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_FHNC_OCPR'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center hover\"\r\n                (click)=\"setOrderBy('NM_PARE')\">\r\n                <thead-sorter value=\"Descrição\" [active]=\"ORDE_BY == 'NM_PARE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let parecer of pareceres\"  [class.table-active]=\"parecer?.ID_LOGI_ENMA_FHNC_OCPR == parecerSelecionado?.ID_LOGI_ENMA_FHNC_OCPR && showDetailPanel\">\r\n              <td  [ngClass]=\"parecer.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{parecer.ID_LOGI_ENMA_FHNC_OCPR }}\r\n              </td>\r\n              <td >{{ parecer.NM_PARE | uppercase}}</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" [tooltip]=\"parecer.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(parecer)\">\r\n                    <i [ngClass]=\"parecer.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', parecer.ID_LOGI_ENMA_FHNC_OCPR]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(parecer)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Histórico de alteração\">\r\n        <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr>\r\n              <td class=\"text-center\" *ngIf=\"parecerSelecionado?.DT_INCL != null && parecerSelecionado?.DT_ATUA == null \">{{ parecerSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td class=\"text-center\" *ngIf=\"parecerSelecionado?.DT_INCL != null && parecerSelecionado?.DT_ATUA != null \">{{ parecerSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n              <td>{{ parecerSelecionado?.NM_USUA | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "pYpU":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/cadastro/cadastro.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pYpU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvbm90YXMtZmlzY2Fpcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL25vdGFzLWZpc2NhaXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25bZGlzYWJsZWRde1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "qwBI":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/motivos/lista/lista.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function qwBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL21vdGl2b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "r6rp":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/painel-aprovacao/services/aprovacao.service.ts ***!
      \****************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisPainelAprovacoesService */

    /***/
    function r6rp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisPainelAprovacoesService", function () {
        return LogisticaEntradaMateriaisPainelAprovacoesService;
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


      var LogisticaEntradaMateriaisPainelAprovacoesService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisPainelAprovacoesService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisPainelAprovacoesService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntradaMateriaisPainelAprovacoesService, [{
          key: "getSolicitacoes",
          value: function getSolicitacoes(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/aprovacoes"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postSolicitacoes",
          value: function postSolicitacoes(aprovacao) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/aprovacoes"), aprovacao, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisPainelAprovacoesService;
      }();

      LogisticaEntradaMateriaisPainelAprovacoesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisPainelAprovacoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisPainelAprovacoesService);
      /***/
    },

    /***/
    "sCyV":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/duplicadas/duplicadas.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sCyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL25vdGFzLWZpc2NhaXMvbGlzdGEvZHVwbGljYWRhcy9kdXBsaWNhZGFzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "sS5L":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/duplicadas/duplicadas.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent */

    /***/
    function sS5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent", function () {
        return LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_duplicadas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./duplicadas.component.html */
      "+RfE");
      /* harmony import */


      var _duplicadas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./duplicadas.component.scss */
      "sCyV");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../services/notas-fiscais.service */
      "81bo");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent(confirmModalService, detailPanelService, modalService, formBuilder, routerService, activatedRoute, notasFiscaisService, pnotify, dateService, route) {
          _classCallCheck(this, LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent);

          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.notasFiscaisService = notasFiscaisService;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.route = route;
          this.loadingDuplicadas = false;
          this.noDuplicadas = true;
          this.duplicadas = [];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.ORDE_BY = 'DS_LOTE';
          this.ORDE_TYPE = 'desc'; // Subtitles (Ativo/Inativo)

          this.subtitles = [{
            id: 1,
            text: 'Não Justificados',
            color: 'blue'
          }, {
            id: 2,
            text: 'Justificados',
            color: 'green'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItemsDuplicadas = 10;
          this.currentPage = 1;
        }

        _createClass(LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.onDetailPanelEmitter();
            this.getLotesDuplicados();
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.formLotesDuplicados = this.formBuilder.group({
              buscarPor: ['DS_LOTE'],
              pesquisa: [null],
              ID_MATE: [null],
              NR_NOTA_FISC: [null],
              DS_LOTE: [null],
              NM_MATE: [null],
              NM_FORN: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              IN_DS_OBSE: [''],
              DS_OBSE: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()],
              ORDE_BY: [this.ORDE_BY],
              ORDE_TYPE: [this.ORDE_TYPE]
            });
          }
        }, {
          key: "onPageChangedDuplicadas",
          value: function onPageChangedDuplicadas(event) {
            this.formLotesDuplicados.get('PAGI').setValue(event.page);
            this.formLotesDuplicados.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(duplicada) {
            var _this95 = this;

            this.detailPanelService.show();
            this.duplicadaSelecionada = duplicada;
            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this95.loadingDuplicadas = false;
            }, 500);
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this96 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this96.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "getLotesDuplicados",
          value: function getLotesDuplicados(params) {
            var _this97 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_DS_OBSE = this.formLotesDuplicados.value['IN_DS_OBSE'];
            _params.PAGI = this.formLotesDuplicados.value['PAGI'];
            _params.ORDE_BY = this.formLotesDuplicados.value['ORDE_BY'];
            _params.ORDE_TYPE = this.formLotesDuplicados.value['ORDE_TYPE'];
            var _obj = this.formLotesDuplicados.value;
            this.loadingDuplicadas = true;
            this.noDuplicadas = this.duplicadas.length === 0 ? true : false;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.notasFiscaisService.getLotesDuplicados(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this97.loadingDuplicadas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this97.duplicadas = response.body['data'];
                _this97.totalItemsDuplicadas = response.body['total'];
                _this97.noDuplicadas = false;
              } else {
                _this97.pnotify.notice('Não foi encontrado nenhum registro!');

                _this97.duplicadas = [];
                _this97.noDuplicadas = true;
              }
            }, function (error) {
              _this97.noDuplicadas = true;

              _this97.pnotify.error('Não foi encontrado nenhum lote duplicado');
            });
          }
        }, {
          key: "changeType",
          value: function changeType() {
            var _this98 = this;

            var stat = 1;
            var descricao = this.formLotesDuplicados.get('DS_OBSE').value;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this98.loadingDuplicadas = true;
              _this98.duplicadaSelecionada.IN_STAT = 1;
              _this98.duplicadaSelecionada.DS_OBSE = descricao;
              return _this98.notasFiscaisService.postNotasDuplicadas(_this98.duplicadaSelecionada);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this98.loadingDuplicadas = false;
            })).subscribe(function (success) {
              _this98.pnotify.success();

              _this98.hideModal();

              _this98.getLotesDuplicados();
            }, function (error) {
              _this98.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente marcar o registro como resolvido?', 'Cancelar', 'Confirmar');
            return;
          }
        }, {
          key: "openModal",
          value: function openModal(template, duplicada) {
            this.duplicadaSelecionada = duplicada;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-lg'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
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
            field = this.formLotesDuplicados.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.formLotesDuplicados.controls[field].validator) {
              var validationResult = this.formLotesDuplicados.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.formLotesDuplicados.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.ORDE_BY === column) {
              if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
              } else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
              }
            } else {
              this.ORDE_BY = column;
              this.ORDE_TYPE = 'asc';
            }

            this.formLotesDuplicados.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
            this.formLotesDuplicados.get('ORDE_BY').setValue(this.ORDE_BY);
            this.getLotesDuplicados();
          }
        }]);

        return LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent;
      }();

      LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent.ctorParameters = function () {
        return [{
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-duplicadas',
        template: _raw_loader_duplicadas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_duplicadas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent);
      /***/
    },

    /***/
    "t/sj":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/entrada-materiais/painel-bobinas-qualidade/painel-bobinas-qualidade.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: SulFluminensePainelBobinasQualidadeComponent */

    /***/
    function tSj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminensePainelBobinasQualidadeComponent", function () {
        return SulFluminensePainelBobinasQualidadeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_painel_bobinas_qualidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./painel-bobinas-qualidade.component.html */
      "t8iG");
      /* harmony import */


      var _painel_bobinas_qualidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./painel-bobinas-qualidade.component.scss */
      "CUr3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SulFluminensePainelBobinasQualidadeComponent = /*#__PURE__*/function () {
        function SulFluminensePainelBobinasQualidadeComponent(activatedRoute) {
          _classCallCheck(this, SulFluminensePainelBobinasQualidadeComponent);

          this.activatedRoute = activatedRoute;
          this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_MTCORP;
          this.loading = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = btoa(this.currentUser['info']['matricula']);
          this.idUsuario = btoa(this.currentUser['info']['id']);
          this.url = "".concat(this.URL_MTCORP, "/MTCorp/app_/app/mtcorp/modulos/abastecimento/monitores/painelBobinasQualidade.php?m=").concat(this.matricula, "&u=").concat(this.idUsuario);
        }

        _createClass(SulFluminensePainelBobinasQualidadeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onBreadCumbTree();
          }
        }, {
          key: "onBreadCumbTree",
          value: function onBreadCumbTree() {
            var _this99 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this99.idSubModulo = params['idSubModulo'];
              _this99.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
              }, {
                descricao: 'Entrada de materiais',
                routerLink: "/sul-fluminense/entrada-materiais/".concat(_this99.idSubModulo)
              }, {
                descricao: 'Painel de Bobinas em Qualidade'
              }];
            });
          }
        }]);

        return SulFluminensePainelBobinasQualidadeComponent;
      }();

      SulFluminensePainelBobinasQualidadeComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SulFluminensePainelBobinasQualidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'painel-bobinas-qualidade',
        template: _raw_loader_painel_bobinas_qualidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_bobinas_qualidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SulFluminensePainelBobinasQualidadeComponent);
      /***/
    },

    /***/
    "t8iG":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/entrada-materiais/painel-bobinas-qualidade/painel-bobinas-qualidade.component.html ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t8iG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Painel de Bobinas em Qualidade</h1>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pb-0\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <custom-iframe [url]=\"url\"></custom-iframe>    \r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "tXxU":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/parecer/cadastro/cadastro.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tXxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Parecer\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postParecer()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Dados do Parecer</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"NM_PARE\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_PARE\"\r\n              formControlName=\"NM_PARE\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_PARE') + ' ' + onFieldRequired('NM_PARE')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_PARE')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>";
      /***/
    },

    /***/
    "uJFl":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/tipos-conformidade/cadastro/cadastro.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uJFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Tipos de Não Conformidade\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postTiposConformidade()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Dados do Tipo de Não Conformidade</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"NM_TIPO\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_TIPO\"\r\n              formControlName=\"NM_TIPO\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_TIPO') + ' ' + onFieldRequired('NM_TIPO')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_TIPO')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Responsáveis</legend>\r\n        <div formArrayName=\"responsaveis\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\"></div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddResponsavel()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3 pl-0\">\r\n                  <label for=\"NR_MATR_RESP\">Matricula</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NR_MATR_RESP\"\r\n                    formControlName=\"NR_MATR_RESP\"\r\n                    placeholder=\"Digite...\"\r\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\r\n                  >\r\n                </div>\r\n                <div class=\"form-group col-md-8 pl-0\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                      <a\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(selecionarUsuarios, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NM_RESP\"\r\n                    formControlName=\"NM_RESP\"\r\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteResponsavel(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #selecionarUsuarios>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formUsuarios\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"matricula\">Matricula</option>\r\n                <option value=\"nome\" selected> Nome Responsável</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-9\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span \r\n                      [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formUsuarios.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getUsuarios()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Matricula</th>\r\n            <th>Nome Responsável</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\r\n            <td>{{ usuario.matricula }}</td>\r\n            <td>{{ usuario.nome }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Responsável\"\r\n                container=\"body\"\r\n                (click)=\"setUsuarios(usuario);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "um5m":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/documentos/documentos.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function um5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL2ZpY2hhLWNvbmZvcm1pZGFkZS9kb2N1bWVudG9zL2RvY3VtZW50b3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "yVY0":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/lista/lista.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisTiposConformidadeListaComponent */

    /***/
    function yVY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisTiposConformidadeListaComponent", function () {
        return LogisticaEntradaMateriaisTiposConformidadeListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "CM2z");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "hG8s");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/tipos-conformidade.service */
      "AVAL");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaEntradaMateriaisTiposConformidadeListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaEntradaMateriaisTiposConformidadeListaComponent(route, pnotify, activatedRoute, tiposConformidadeService, formBuilder, xlsxService, confirmModalService, routerService, dateService, detailPanelService) {
          _classCallCheck(this, LogisticaEntradaMateriaisTiposConformidadeListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.tiposConformidadeService = tiposConformidadeService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.detailPanelService = detailPanelService;
          this.showDetailPanel = false;
          this.ORDE_BY = 'ID_LOGI_ENMA_FHNC_TIPO';
          this.ORDE_TYPE = 'desc'; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false;
          this.loadingResponsaveis = false; //VARIAVEIS

          this.responsaveis = [];
          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos TiposConformidade (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
            nome: 'Inativos'
          }]; // Tipos de Categorias

          this.categorias = [{
            cod: '1',
            nome: 'Qualidade'
          }, {
            cod: '2',
            nome: 'Quantidade'
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

        _createClass(LogisticaEntradaMateriaisTiposConformidadeListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this100 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this100.routerService.getBase64UrlParams(response);

              _this100.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this100.itemsPerPage = _response.TT_REGI_PAGI;

              _this100.getTiposConformidade(_this100.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this101 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this101.showDetailPanel = event.showing;
            });
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
              ID_LOGI_ENMA_FHNC_TIPO: [null],
              NM_TIPO: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()],
              ORDE_BY: [this.ORDE_BY],
              ORDE_TYPE: [this.ORDE_TYPE]
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Tipos de Não Conformidade'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
            this.form.get('ORDE_BY').setValue(this.ORDE_BY);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(tipo) {
            var _this102 = this;

            this.loadingNavBar = true;
            this.tipoSelecionado = tipo;
            this.getResponsaveis({
              ID_LOGI_ENMA_FHNC_TIPO: tipo.ID_LOGI_ENMA_FHNC_TIPO,
              IN_STAT: '1'
            });
            this.detailPanelService.show();
            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this102.loadingNavBar = false;
            }, 500);
          }
        }, {
          key: "getTiposConformidade",
          value: function getTiposConformidade(params) {
            var _this103 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.tiposConformidadeService.getTiposConformidade(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this103.loading = false;
              _this103.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this103.tiposConformidade = response.body['data'];
                _this103.totalItems = response.body['total'];
                _this103.noResult = false;
              } else {
                _this103.noResult = true;
                _this103.tiposConformidade = [];
              }
            }, function (error) {
              try {
                _this103.pnotify.error(error.error.message);
              } catch (error) {
                _this103.pnotify.error();
              }
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            var _this104 = this;

            this.loadingResponsaveis = true;
            this.tiposConformidadeService.getResponsaveis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this104.loadingResponsaveis = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this104, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context12.next = 3;
                          break;
                        }

                        this.noResponsaveis = true;
                        return _context12.abrupt("return");

                      case 3:
                        this.responsaveis = response['body']['data'];
                        this.noResponsaveis = false;

                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }, function (error) {
              _this104.pnotify.error('Não foi encontrado nenhum responsável');

              _this104.noResponsaveis = true;
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.detailPanelService.hide();
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
          value: function classStatusBorder(status) {
            var borderClass;

            if (status.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (status.IN_STAT == 0) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(status) {
            var _this105 = this;

            var stat = status.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this105.loadingNavBar = true;
              status.IN_STAT = stat;
              return _this105.tiposConformidadeService.postTiposConformidade(status);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this105.loadingNavBar = false;
            })).subscribe(function (success) {
              _this105.pnotify.success();
            }, function (error) {
              status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;

              _this105.pnotify.error();
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
            listagemExport = this.tiposConformidade.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "TiposConformidade".concat(dataExport));
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.ORDE_BY === column) {
              if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
              } else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
              }
            } else {
              this.ORDE_BY = column;
              this.ORDE_TYPE = 'asc';
            }

            this.onFilter();
          }
        }]);

        return LogisticaEntradaMateriaisTiposConformidadeListaComponent;
      }();

      LogisticaEntradaMateriaisTiposConformidadeListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisTiposConformidadeService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }];
      };

      LogisticaEntradaMateriaisTiposConformidadeListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-tipos-conformidade-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisTiposConformidadeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])], LogisticaEntradaMateriaisTiposConformidadeListaComponent);
      /***/
    },

    /***/
    "yzlb":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/cadastro/cadastro.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisTiposConformidadeCadastroComponent */

    /***/
    function yzlb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisTiposConformidadeCadastroComponent", function () {
        return LogisticaEntradaMateriaisTiposConformidadeCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "uJFl");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "8Ov2");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/tipos-conformidade.service */
      "AVAL"); //Services
      //Bootstrap
      //Angular
      //rxjs


      var LogisticaEntradaMateriaisTiposConformidadeCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisTiposConformidadeCadastroComponent(formBuilder, pnotify, router, modalService, activatedRoute, localeService, tiposConformidadeService, titleService, atividadesService) {
          _classCallCheck(this, LogisticaEntradaMateriaisTiposConformidadeCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.router = router;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.tiposConformidadeService = tiposConformidadeService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.breadCrumbTree = [];
          this.formData = [];
          this.usuarios = [];
          this.noUsuarios = true; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          /* Pagination */
          //Interfaces

          this.tiposConformidade = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_7__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntradaMateriaisTiposConformidadeCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
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
              this.getTiposConformidade({
                ID_LOGI_ENMA_FHNC_TIPO: _params['id']
              });
              this.getResponsaveis({
                ID_LOGI_ENMA_FHNC_TIPO: _params['id'],
                IN_STAT: '1'
              });
            } else {
              this.onAddResponsavel();
            }
          }
        }, {
          key: "getTiposConformidade",
          value: function getTiposConformidade(params) {
            var _this106 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.tiposConformidadeService.getTiposConformidade(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this106.loading = false;
              _this106.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this106.noResult = true;
                _this106.tiposConformidade = [];
                return;
              }

              var _tipoConformidade = response.body['data'][0];

              _this106.form.patchValue(_tipoConformidade);

              _this106.noResult = false;
            }, function (error) {
              _this106.pnotify.error();

              _this106.noResult = true;
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            var _this107 = this;

            this.loadingNavBar = true;
            this.tiposConformidadeService.getResponsaveis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this107.loadingNavBar = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this107, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var _this108 = this;

                var responsaveis, promise;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context13.next = 2;
                          break;
                        }

                        return _context13.abrupt("return");

                      case 2:
                        responsaveis = response['body']['data'];

                        promise = function promise() {
                          return responsaveis.forEach(function () {
                            return _this108.onAddResponsavel();
                          });
                        };

                        _context13.next = 6;
                        return Promise.resolve(promise());

                      case 6:
                        this.form.get('responsaveis').patchValue(responsaveis);

                      case 7:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            }, function (error) {
              _this107.pnotify.error('Não foi encontrado nenhum responsável');
            });
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
              descricao: 'Entrada de Materiais',
              routerLink: "/logistica/entrada-materiais/".concat(id)
            }, {
              descricao: 'Tipos de Não Conformidade',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_ENMA_FHNC_TIPO: [null],
              NM_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              responsaveis: this.formBuilder.array([])
            });
            this.formUsuarios = this.formBuilder.group({
              buscarPor: ['nome'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
              matricula: [null],
              nome: [null]
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios(params) {
            var _this109 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.situacao = '1';
            _params.qtItensPagina = 100;
            var _obj = this.formUsuarios.value;
            this.loadingUsuarios = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.tiposConformidadeService.getUsuarios(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this109.loadingUsuarios = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this109.usuarios = response.body['usuarios'];
                _this109.totalItems = response.body['usuarios'].length;
                _this109.noUsuarios = false;
              } else {
                _this109.pnotify.notice('Nenhum registro encontrado!');

                _this109.usuarios = [];
                _this109.noUsuarios = true;
              }
            }, function (error) {
              _this109.pnotify.error();

              _this109.usuarios = [];
            });
          }
        }, {
          key: "setUsuarios",
          value: function setUsuarios(usuario) {
            var _usuario = Object.assign(Object.assign({}, usuario), {
              'IN_MATE': false
            });

            var fg = this.form.get('responsaveis');
            fg.controls[this.index].get('NR_MATR_RESP').patchValue(_usuario.matricula);
            fg.controls[this.index].get('ID_RESP').patchValue(_usuario.id);
            fg.controls[this.index].get('NM_RESP').patchValue(_usuario.nome);
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this110 = this;

              var request, responsaveis, promise;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      request = [];
                      responsaveis = this.formResponsaveis.getRawValue();

                      if (responsaveis) {
                        _context14.next = 4;
                        break;
                      }

                      return _context14.abrupt("return");

                    case 4:
                      promise = function promise() {
                        responsaveis.forEach(function (responsavel) {
                          var params = Object.assign(Object.assign({}, responsavel), {
                            'ID_LOGI_ENMA_FHNC_TIPO': id,
                            IN_STAT: '1'
                          });
                          request.push(_this110.tiposConformidadeService.postResponsaveis(params));
                        });
                      };

                      _context14.next = 7;
                      return Promise.resolve(promise());

                    case 7:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                        _this110.loading = false;
                        _this110.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        _this110.pnotify.success('Responsáveis cadastrados com sucesso');
                      }, function (error) {
                        try {
                          _this110.pnotify.error(error.error.message);
                        } catch (error) {
                          _this110.pnotify.error();
                        }
                      });

                    case 8:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "onDeleteResponsavel",
          value: function onDeleteResponsavel(index) {
            var _this111 = this;

            if (this.formResponsaveis.length === 1) {
              this.pnotify.notice('Informe ao menos um responsável.');
              return;
            }

            var id = this.form.get('ID_LOGI_ENMA_FHNC_TIPO');
            var responsaveis = this.formResponsaveis.at(index).value;
            responsaveis = Object.assign(Object.assign({}, responsaveis), {
              'IN_STAT': '0'
            });

            if (!responsaveis['ID_RESP']) {
              this.formResponsaveis.removeAt(index);
              return;
            }

            this.loadingNavBar = true;
            this.tiposConformidadeService.postResponsaveis(responsaveis).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this111.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this111.formResponsaveis.removeAt(index);

                _this111.pnotify.success();
              } else {
                _this111.pnotify.error();
              }
            }, function (error) {
              _this111.pnotify.error();
            });
          }
        }, {
          key: "postTiposConformidade",
          value: function postTiposConformidade() {
            var _this112 = this;

            var fg = this.form.get('responsaveis');

            if (fg.controls[0].get('ID_RESP').value == null) {
              this.pnotify.notice('Informe ao menos um responsável.');
              return;
            }

            this.loadingNavBar = true;
            var params = JSON.parse(JSON.stringify(this.form.value));
            delete params['responsaveis'];
            this.tiposConformidadeService.postTiposConformidade(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this112.loading = false;
              _this112.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var id = response.body['data'];

                _this112.form.get('ID_LOGI_ENMA_FHNC_TIPO').setValue(id);

                if (_this112.form.get('responsaveis').value[0]['ID_RESP']) {
                  _this112.postResponsaveis(id);
                }

                _this112.router.navigate(['../'], {
                  relativeTo: _this112.activatedRoute
                });

                _this112.pnotify.success();
              } else {
                _this112.pnotify.error();
              }
            }, function (error) {
              try {
                _this112.pnotify.error(error.error.message);
              } catch (error) {
                _this112.pnotify.error();
              }
            });
          }
        }, {
          key: "onAddResponsavel",
          value: function onAddResponsavel() {
            this.formResponsaveis.push(this.formBuilder.group({
              ID_LOGI_ENMA_FHNC_TIPO: [null],
              ID_RESP: [null],
              NR_MATR_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              NM_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]]
            }));
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
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
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "formResponsaveis",
          get: function get() {
            return this.form.get('responsaveis');
          }
        }]);

        return LogisticaEntradaMateriaisTiposConformidadeCadastroComponent;
      }();

      LogisticaEntradaMateriaisTiposConformidadeCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntradaMateriaisTiposConformidadeService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }];
      };

      LogisticaEntradaMateriaisTiposConformidadeCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntradaMateriaisTiposConformidadeService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])], LogisticaEntradaMateriaisTiposConformidadeCadastroComponent);
      /***/
    },

    /***/
    "zSPA":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisModule */

    /***/
    function zSPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisModule", function () {
        return LogisticaEntradaMateriaisModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./entrada-materiais-routing.module */
      "7PM9");
      /* harmony import */


      var _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./notas-fiscais/lista/lista.component */
      "/qkg");
      /* harmony import */


      var _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./notas-fiscais/cadastro/cadastro.component */
      "SckD");
      /* harmony import */


      var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./entrada-materiais.component */
      "I+6W");
      /* harmony import */


      var _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./status-recebimento/cadastro/cadastro.component */
      "l/7K");
      /* harmony import */


      var _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./status-recebimento/lista/lista.component */
      "jsif");
      /* harmony import */


      var _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./painel-aprovacao/lista/lista.component */
      "l/Jf");
      /* harmony import */


      var _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./motivos/lista/lista.component */
      "OGJj");
      /* harmony import */


      var _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./motivos/cadastro/cadastro.component */
      "DU17");
      /* harmony import */


      var _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./tipos-conformidade/lista/lista.component */
      "yVY0");
      /* harmony import */


      var _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./tipos-conformidade/cadastro/cadastro.component */
      "yzlb");
      /* harmony import */


      var _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./ficha-conformidade/lista/lista.component */
      "XkGG");
      /* harmony import */


      var _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./ficha-conformidade/cadastro/cadastro.component */
      "A697");
      /* harmony import */


      var _ficha_conformidade_documentos_documentos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./ficha-conformidade/documentos/documentos.component */
      "+wKV");
      /* harmony import */


      var _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./ficha-conformidade/ocorrencias/ocorrencias.component */
      "H1OO");
      /* harmony import */


      var _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./parecer/lista/lista.component */
      "WQIu");
      /* harmony import */


      var _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./parecer/cadastro/cadastro.component */
      "5cZa");
      /* harmony import */


      var _notas_fiscais_lista_duplicadas_duplicadas_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./notas-fiscais/lista/duplicadas/duplicadas.component */
      "sS5L"); //angular
      //Modules
      //Components


      var LogisticaEntradaMateriaisModule = function LogisticaEntradaMateriaisModule() {
        _classCallCheck(this, LogisticaEntradaMateriaisModule);
      };

      LogisticaEntradaMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
        declarations: [_entrada_materiais_component__WEBPACK_IMPORTED_MODULE_19__["LogisticaEntradaMateriaisComponent"], _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisNotasFiscaisCadastroComponent"], _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisNotasFiscaisListaComponent"], _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaEntradaMateriaisStatusRecebimentoListaComponent"], _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent"], _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntradaMateriaisPainelAprovacaoListaComponent"], _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEntradaMateriaisMotivosListaComponent"], _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__["LogisticaEntradaMateriaisMotivosCadastroComponent"], _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_25__["LogisticaEntradaMateriaisTiposConformidadeListaComponent"], _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__["LogisticaEntradaMateriaisTiposConformidadeCadastroComponent"], _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_27__["LogisticaEntradaMateriaisFichaConformidadeListaComponent"], _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_28__["LogisticaEntradaMateriaisFichasConformidadeCadastroComponent"], _ficha_conformidade_documentos_documentos_component__WEBPACK_IMPORTED_MODULE_29__["LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent"], _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_30__["LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent"], _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_31__["LogisticaEntradaMateriaisParecerListaComponent"], _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_32__["LogisticaEntradaMateriaisParecerCadastroComponent"], _notas_fiscais_lista_duplicadas_duplicadas_component__WEBPACK_IMPORTED_MODULE_33__["LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_1__["CountoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_7__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"], _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisRoutingModule"]]
      })], LogisticaEntradaMateriaisModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=entrada-materiais-entrada-materiais-module-es5.js.map